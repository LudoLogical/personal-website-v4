'use client';

import { useState, useRef } from 'react';
import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  UnstyledOpenInCodeSandboxButton,
  useSandpackNavigation,
  type SandpackProviderProps,
  useSandpack,
  useActiveCode
} from '@codesandbox/sandpack-react';
import { dracula } from '@codesandbox/sandpack-themes';
import prettier from 'prettier';
import babelPlugin from 'prettier/plugins/babel';
import estreePlugin from 'prettier/plugins/estree';
import { FiCodesandbox } from 'react-icons/fi';
import {
  HiMiniArrowUturnLeft,
  HiMiniArrowPath,
  HiMiniCodeBracket,
  HiMiniSparkles,
  HiMiniCheck,
  HiMiniXMark
} from 'react-icons/hi2';

const ResetButton = ({ sandboxName }: { sandboxName: string }) => {
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

const FormatButton = () => {
  const [showFormatSuccess, setShowFormatSuccess] = useState<boolean>(false);
  const [showFormatError, setShowFormatError] = useState<boolean>(false);
  const { code, updateCode } = useActiveCode();

  return (
    <button
      onClick={async () => {
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
      }}
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

const RefreshButton = () => {
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

const defaultCSS = {
  '/styles.css': {
    code: `@tailwind base;
@tailwind components;
@tailwind utilities;
  `,
    hidden: true
  }
};

const defaultApp = {
  '/App.js': `export default function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-xl font-bold">Hello, world!</h1>
    </div>
  );
}
`
};

export default function Sandbox({
  title,
  template,
  files,
  showLineNumbers
}: SandpackProviderProps & { title?: string; showLineNumbers: boolean }) {
  return (
    <SandpackProvider
      theme={dracula}
      template={template ?? 'react'}
      options={{
        externalResources: [
          'https://cdn.tailwindcss.com',
          'https://cdn.jsdelivr.net/npm/daisyui@4.4.2/dist/full.min.css'
        ]
      }}
      files={
        files ? { ...defaultCSS, ...files } : { ...defaultCSS, ...defaultApp }
      }
    >
      <SandpackLayout className="my-4 !rounded-2xl">
        {/* SandpackLayout is not optional, so this hack forces the column layout */}
        <div className="w-0 flex-1">
          <div className="mx-3 my-2 flex items-center">
            <div className="ml-1 flex flex-1 items-center gap-3 text-base-content">
              <HiMiniCodeBracket className="h-4 w-4 text-base-content" />
              <h3 className="m-0 pb-px text-sm font-semibold">
                {title ?? 'Live Demo'}
              </h3>
            </div>
            <div className="flex gap-2 text-base-content">
              <ResetButton sandboxName={title ?? 'Live Demo'} />
              <FormatButton />
              <UnstyledOpenInCodeSandboxButton className="btn btn-circle btn-ghost h-8 min-h-0 w-8">
                <FiCodesandbox className="h-4 w-4 text-base-content" />
              </UnstyledOpenInCodeSandboxButton>
            </div>
          </div>
          <SandpackCodeEditor
            showLineNumbers={showLineNumbers}
            className="min-h-[160px]"
          />
          <SandpackPreview
            showRefreshButton={false}
            showOpenInCodeSandbox={false}
            actionsChildren={<RefreshButton />}
          />
        </div>
      </SandpackLayout>
    </SandpackProvider>
  );
}
