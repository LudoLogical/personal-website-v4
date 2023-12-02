'use client';

import { useRef, useState } from 'react';
import {
  useActiveCode,
  useSandpack,
  useSandpackNavigation
} from '@codesandbox/sandpack-react';
import useSWRMutation from 'swr/mutation';
import axios from 'axios';
import {
  HiMiniArrowPath,
  HiMiniArrowUturnLeft,
  HiMiniCheck,
  HiMiniSparkles,
  HiMiniXMark
} from 'react-icons/hi2';
import { prettierResponse } from '~/app/api/prettier/types';
import clsx from 'clsx';

export const ResetButton = ({ sandboxName }: { sandboxName: string }) => {
  const modal = useRef<HTMLDialogElement | null>(null);
  const { resetAllFiles } = useSandpack().sandpack;
  return (
    <>
      <button
        onClick={() => modal.current?.showModal()}
        className="btn btn-circle btn-ghost h-8 min-h-0 w-8"
      >
        <HiMiniArrowUturnLeft title="Reset Demo" className="h-4 w-4" />
      </button>
      <dialog ref={modal} className="not-prose modal">
        <div className="modal-box text-base font-light text-base-content">
          <h3 className="text-xl font-normal">Confirmation</h3>
          <p className="py-4">
            Are you sure you want to reset {sandboxName}? Any changes
            you&apos;ve made will be permanently deleted.
          </p>
          <div className="modal-action">
            <form method="dialog" className="flex gap-2">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-ghost">Cancel</button>
              <button onClick={resetAllFiles} className="btn btn-error">
                Reset Sandbox
              </button>
            </form>
          </div>
        </div>
        {/* the modal will close onClick outside of it */}
        <form method="dialog" className="modal-backdrop">
          <button>Hidden Close</button>
        </form>
      </dialog>
    </>
  );
};

export const FormatButton = () => {
  const [isFormatting, setIsFormatting] = useState<boolean | null>(null);
  const [formatSucceeded, setFormatSucceeded] = useState<boolean | null>(null);
  const { code, updateCode } = useActiveCode();
  const { trigger } = useSWRMutation(
    '/api/prettier',
    (url, { arg }: { arg: string }) => {
      axios
        .post(url, { code: arg })
        .then((response) => {
          updateCode(prettierResponse.parse(response.data).formattedCode);
          setFormatSucceeded(true);
          setTimeout(() => setFormatSucceeded(null), 1000);
        })
        .catch(() => {
          setFormatSucceeded(false);
          setTimeout(() => setFormatSucceeded(null), 1000);
        })
        .finally(() => setIsFormatting(false));
    }
  );

  return (
    <button
      onClick={() => {
        void trigger(code);
        setIsFormatting(true);
      }}
      className="btn btn-circle btn-ghost relative h-8 min-h-0 w-8"
    >
      <div className="swap">
        <HiMiniSparkles
          title="Format with Prettier"
          className={clsx(
            'h-4 w-4',
            !isFormatting && formatSucceeded === null
              ? 'opacity-100'
              : 'opacity-0'
          )}
        />
        <HiMiniCheck
          title="Format with Prettier"
          className={clsx(
            'h-4 w-4 text-success',
            !isFormatting && formatSucceeded === true
              ? 'opacity-100'
              : 'opacity-0'
          )}
        />
        <HiMiniXMark
          title="Format with Prettier"
          className={clsx(
            'h-4 w-4 text-error',
            !isFormatting && formatSucceeded === false
              ? 'opacity-100'
              : 'opacity-0'
          )}
        />
        <span
          className={clsx(
            'loading loading-spinner h-4 w-4 text-info',
            isFormatting ? 'opacity-100' : 'opacity-0'
          )}
        />
      </div>
    </button>
  );
};

/* Currently unused; waiting on the ability to remove the default "clear console"
 * button so that there is visual consistency across the preview and console tabs */
export const RefreshButton = () => {
  const { refresh } = useSandpackNavigation();
  return (
    <button
      title="Refresh Preview"
      className="btn btn-circle h-8 min-h-0 w-8"
      onClick={refresh}
    >
      <HiMiniArrowPath className="h-5 w-5" />
    </button>
  );
};
