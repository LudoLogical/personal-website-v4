import { useRef, useState } from 'react';
import {
  useActiveCode,
  useSandpack,
  useSandpackNavigation
} from '@codesandbox/sandpack-react';
import prettier from 'prettier';
import babelPlugin from 'prettier/plugins/babel';
import estreePlugin from 'prettier/plugins/estree';
import {
  HiMiniArrowPath,
  HiMiniArrowUturnLeft,
  HiMiniCheck,
  HiMiniSparkles,
  HiMiniXMark
} from 'react-icons/hi2';

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
  const [showFormatSuccess, setShowFormatSuccess] = useState<boolean>(false);
  const [showFormatError, setShowFormatError] = useState<boolean>(false);
  const { code, updateCode } = useActiveCode();

  const format = async () => {
    if (code) {
      try {
        const formatted = await prettier.format(code, {
          parser: 'babel',
          plugins: [babelPlugin, estreePlugin]
        });
        updateCode(formatted);
        setShowFormatSuccess(true);
        setTimeout(() => setShowFormatSuccess(false), 1000);
      } catch {
        setShowFormatError(true);
        setTimeout(() => setShowFormatError(false), 1000);
      }
    }
  };

  return (
    <button
      onClick={format}
      className="btn btn-circle btn-ghost h-8 min-h-0 w-8"
    >
      <label className="swap">
        <input
          type="checkbox"
          readOnly
          checked={showFormatSuccess || showFormatError}
        />
        <HiMiniSparkles
          title="Format with Prettier"
          className="swap-off h-4 w-4"
        />
        {showFormatSuccess && (
          <HiMiniCheck
            title="Format with Prettier"
            className="swap-on h-4 w-4 text-success"
          />
        )}
        {showFormatError && (
          <HiMiniXMark
            title="Format with Prettier"
            className="swap-on h-4 w-4 text-error"
          />
        )}
      </label>
    </button>
  );
};

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
