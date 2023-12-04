'use client';

import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackProvider,
  UnstyledOpenInCodeSandboxButton,
  type SandpackProviderProps
} from '@codesandbox/sandpack-react';
import { dracula } from '@codesandbox/sandpack-themes';
import { FiCodesandbox } from 'react-icons/fi';
import { HiMiniCodeBracket } from 'react-icons/hi2';
import { FormatButton, ResetButton } from './sandbox-buttons';
import { SandpackPreviewConsoleStacked } from './sandbox-hacks';
import { useEffect, useState } from 'react';

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
    <div className="flex h-screen items-center justify-center bg-dracula-base">
      <h1 className="text-xl font-bold text-slate-300">Hello, world!</h1>
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
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    setShow(true);
    //setTimeout(() => setShow(true), 100);
  }, []);
  return show ? (
    <SandpackProvider
      theme={dracula}
      template={template ?? 'react'}
      options={{
        externalResources: ['https://cdn.tailwindcss.com']
      }}
      files={
        files ? { ...defaultCSS, ...files } : { ...defaultCSS, ...defaultApp }
      }
    >
      <SandpackLayout className="my-4 !rounded-2xl">
        {/* SandpackLayout is not optional, so the hack `w-0 flex-1` forces the column layout */}
        <div className="not-prose w-0 flex-1 text-base-content">
          <div className="my-2 ml-4 mr-3 flex flex-1 items-center gap-2">
            <div className="flex flex-1 items-center gap-3">
              <HiMiniCodeBracket className="h-4 w-4 flex-shrink-0" />
              <h3 className="m-0 w-0 flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap pb-px text-sm font-semibold">
                {title ?? 'Live Demo'}
              </h3>
            </div>
            <div className="flex gap-2">
              <ResetButton sandboxName={title ?? 'Live Demo'} />
              <FormatButton />
              <UnstyledOpenInCodeSandboxButton className="btn btn-circle btn-ghost h-8 min-h-0 w-8">
                <FiCodesandbox className="h-4 w-4" />
              </UnstyledOpenInCodeSandboxButton>
            </div>
          </div>
          <SandpackCodeEditor
            showLineNumbers={showLineNumbers}
            className="h-56"
          />
          <SandpackPreviewConsoleStacked />
        </div>
      </SandpackLayout>
    </SandpackProvider>
  ) : (
    <div className="skeleton h-[calc(2px+1rem+2rem+28rem+38px)] w-full" />
  );
}
