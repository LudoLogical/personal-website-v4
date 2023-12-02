'use client';

import clsx from 'clsx';
import { HiListBullet } from 'react-icons/hi2';
import VisibilityToggler, {
  type VisibilityTogglerHandle
} from '~/components/visibility-toggler';
import { useToggleOnScroll } from '~/utils/hooks';
import { type SubheadingGroupData } from 'data/subheadings';
import TableOfContents from './table-of-contents';
import { useRef } from 'react';

export default function Sidebar({ tocData }: { tocData: string }) {
  const toggler = useRef<VisibilityTogglerHandle | null>(null);
  const tableOfContents = (
    <TableOfContents
      data={JSON.parse(tocData) as SubheadingGroupData[]}
      onNavigation={() => toggler.current?.forceClose()}
    />
  );
  const yieldToHeader = useToggleOnScroll();
  return (
    <>
      <nav
        className={clsx(
          'sticky mt-[4.5rem] hidden w-64 overflow-hidden rounded-box transition-all duration-300 lg:block',
          yieldToHeader
            ? 'top-[6.75rem] max-h-[calc(100vh-8rem)]'
            : 'top-5 max-h-[calc(100vh-2.5rem)]'
        )}
      >
        <div className="max-h-full overflow-y-auto rounded-box bg-base-200">
          {tableOfContents}
        </div>
      </nav>
      <nav className="pointer-events-none fixed bottom-5 right-5 z-10 flex h-[calc(100%-6.75rem-1.5rem)] w-64 flex-col-reverse items-end gap-y-4 lg:hidden">
        <VisibilityToggler
          ref={toggler}
          IconWhenHidden={HiListBullet}
          buttonClass="btn-neutral"
          className="relative w-full flex-1 overflow-hidden rounded-box"
        >
          <div className="absolute bottom-0 max-h-full overflow-y-auto rounded-box bg-neutral">
            {tableOfContents}
          </div>
        </VisibilityToggler>
      </nav>
    </>
  );
}
