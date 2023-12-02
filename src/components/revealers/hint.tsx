'use client';

import { useState, useEffect, useRef, type ReactNode } from 'react';
import { useWindowSize } from 'usehooks-ts';
import clsx from 'clsx';
import { HiMiniQuestionMarkCircle } from 'react-icons/hi2';

export default function Hint({ children }: { children: ReactNode }) {
  const [side, setSide] = useState<string>('unknown');
  const hint = useRef<HTMLSpanElement | null>(null);
  const { width } = useWindowSize();
  useEffect(() => {
    const rect = hint.current?.getBoundingClientRect();
    if (rect) {
      const center = (rect?.left + rect?.right) / 2;
      if (center < width / 2) {
        setSide(rect.left < 125 ? 'right' : 'top');
      } else {
        setSide(rect.right > width - 145 ? 'left' : 'top');
      }
    }
  }, [width]);
  return (
    <span
      ref={hint}
      className={clsx(
        'tooltip tooltip-info align-top before:max-w-[12rem] before:rounded-lg before:px-3 before:py-2 before:leading-normal before:transition-opacity after:transition-opacity md:before:max-w-[16rem] lg:before:max-w-xs',
        {
          'tooltip-right': side === 'right',
          'tooltip-left': side === 'left',
          'before:-mb-px': side === 'top'
        }
      )}
      data-tip={children}
    >
      <HiMiniQuestionMarkCircle className="h-4 w-4 text-secondary" />
    </span>
  );
}
