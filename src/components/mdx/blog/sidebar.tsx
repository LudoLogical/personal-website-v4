'use client';

import clsx from 'clsx';
import { HiListBullet } from 'react-icons/hi2';
import VisibilityToggler, {
  type VisibilityTogglerHandle
} from '~/components/revealers/visibility-toggler';
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
          'mt-18 sticky hidden w-64 overflow-hidden rounded-box transition-all duration-300 lg:block',
          yieldToHeader
            ? 'top-header max-h-screen-content-minus-header'
            : 'max-h-screen-content top-5'
        )}
      >
        <div className="max-h-full overflow-y-auto rounded-box bg-base-200">
          {tableOfContents}
        </div>
      </nav>
      <nav className="h-screen-content-minus-header pointer-events-none fixed bottom-5 right-5 z-10 flex w-64 flex-col-reverse items-end gap-y-4 lg:hidden">
        <VisibilityToggler
          ref={toggler}
          IconWhenHidden={HiListBullet}
          buttonClass="btn-neutral shadow-md"
          className="relative w-full flex-1 overflow-hidden rounded-box shadow-md"
        >
          <div className="absolute bottom-0 right-0 max-h-full overflow-y-auto rounded-box bg-neutral">
            {tableOfContents}
          </div>
        </VisibilityToggler>
      </nav>
    </>
  );
}
