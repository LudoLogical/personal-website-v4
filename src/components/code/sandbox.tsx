'use client';

import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  UnstyledOpenInCodeSandboxButton,
  type SandpackProviderProps
} from '@codesandbox/sandpack-react';
import { dracula } from '@codesandbox/sandpack-themes';
import { FiCodesandbox } from 'react-icons/fi';
import { HiMiniCodeBracket } from 'react-icons/hi2';
import { FormatButton, RefreshButton, ResetButton } from './sandbox-buttons';

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
