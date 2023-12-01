'use client';

import { useEffect, useRef, useState } from 'react';
import { SandpackConsole, SandpackPreview } from '@codesandbox/sandpack-react';
import clsx from 'clsx';
import styles from './sandbox.module.css';

const useSandpackConsoleFilterHack = () => {
  const consoleRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const consoleList =
      consoleRef.current?.firstElementChild?.firstElementChild;
    if (consoleList) {
      const observer = new MutationObserver((changes: MutationRecord[]) => {
        for (const change of changes) {
          for (const newNode of change.addedNodes) {
            const newElement = newNode as HTMLElement;
            for (const span of newElement.getElementsByTagName('span')) {
              if (
                span.textContent?.includes(
                  'cdn.tailwindcss.com should not be used in production'
                )
              ) {
                newElement.style.display = 'none';
              }
            }
          }
        }
      });
      observer.observe(consoleList, { childList: true, subtree: true });
      return () => observer.disconnect();
    }
  }, [consoleRef]);
  return consoleRef;
};

const SandboxTabs = ({
  onChange
}: {
  onChange: (isConsole: boolean) => void;
}) => {
  const [consoleActive, setConsoleActive] = useState<boolean>(false);
  return (
    <div role="tablist" className="tabs tabs-bordered h-fit w-fit">
      <a
        role="tab"
        onClick={() => {
          onChange(false);
          setConsoleActive(false);
        }}
        className={clsx('tab h-fit py-1', {
          'tab-active': !consoleActive
        })}
      >
        Preview
      </a>
      <a
        role="tab"
        onClick={() => {
          onChange(true);
          setConsoleActive(true);
        }}
        className={clsx('tab h-fit py-1', {
          'tab-active': consoleActive
        })}
      >
        Console
      </a>
    </div>
  );
};

export function SandpackPreviewConsoleStacked({}) {
  const consoleRef = useSandpackConsoleFilterHack();
  const handleConsoleTransition = (isConsole: boolean) => {
    consoleRef.current?.style.setProperty(
      '--opacity',
      isConsole ? '100%' : '0'
    );
    consoleRef.current?.style.setProperty(
      '--pointer-events',
      isConsole ? 'auto' : 'none'
    );
  };
  return (
    <>
      <SandboxTabs onChange={handleConsoleTransition} />
      <div className="relative">
        <SandpackPreview showOpenInCodeSandbox={false} className="h-[14rem]" />
        <div ref={consoleRef} className={styles.console}>
          <SandpackConsole
            resetOnPreviewRestart
            className="!absolute left-0 top-0 h-[14rem]"
          />
        </div>
      </div>
    </>
  );
}
