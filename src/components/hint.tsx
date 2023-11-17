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
        setSide(rect.left < 130 ? 'right' : 'top');
      } else if (rect.left) {
        setSide(rect.right > width - 130 ? 'left' : 'top');
      }
    }
  }, [width]);
  return (
    <span
      ref={hint}
      className={clsx(
        'tooltip tooltip-info align-top before:max-w-[12rem] md:before:max-w-[16rem] lg:before:max-w-xs',
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
