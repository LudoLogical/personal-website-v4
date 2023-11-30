'use client';

import clsx from 'clsx';
import { type ReactNode } from 'react';
import { HiListBullet } from 'react-icons/hi2';
import VisibilityToggler from '~/components/visibility-toggler';
import { useToggleOnScroll } from '~/utils/hooks';

export default function Sidebar({
  tableOfContents
}: {
  tableOfContents: ReactNode;
}) {
  const yieldToHeader = useToggleOnScroll();
  return (
    <nav
      className={clsx(
        'fixed bottom-6 right-6 flex h-[calc(100%-6.75rem-1.5rem)] flex-col justify-end transition-all duration-300 lg:sticky lg:bottom-auto lg:right-auto lg:block lg:h-auto',
        yieldToHeader ? 'lg:top-28' : 'lg:top-6'
      )}
    >
      <div className="hidden w-64 lg:block">{tableOfContents}</div>
      <VisibilityToggler
        IconWhenHidden={HiListBullet}
        buttonClass="btn-neutral"
        containerClass="flex lg:hidden flex-col-reverse items-end gap-y-4 w-64 h-full"
      >
        {tableOfContents}
      </VisibilityToggler>
    </nav>
  );
}
