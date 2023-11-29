'use client';

import clsx from 'clsx';
import { type ReactNode } from 'react';
import { useToggleOnScroll } from '~/utils/hooks';

export default function Sidebar({ children }: { children: ReactNode }) {
  const yieldToHeader = useToggleOnScroll();
  return (
    <nav
      className={clsx(
        'sticky h-fit w-56 transition-all duration-300',
        yieldToHeader ? 'top-28' : 'top-6'
      )}
    >
      {children}
    </nav>
  );
}
