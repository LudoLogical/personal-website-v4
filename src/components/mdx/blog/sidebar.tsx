'use client';

import clsx from 'clsx';
import { HiListBullet } from 'react-icons/hi2';
import VisibilityToggler from '~/components/visibility-toggler';
import { useToggleOnScroll } from '~/utils/hooks';
import { type SubheadingGroupData } from '~/utils/table-of-contents';
import TableOfContents from './table-of-contents';

export default function Sidebar({ tocData }: { tocData: string }) {
  const yieldToHeader = useToggleOnScroll();
  const tableOfContents = (
    <TableOfContents data={JSON.parse(tocData) as SubheadingGroupData[]} />
  );
  return (
    <>
      <nav
        className={clsx(
          'sticky h-fit w-64 transition-all duration-300 lg:block',
          yieldToHeader ? 'top-28' : 'top-6'
        )}
      >
        <div>{tableOfContents}</div>
      </nav>
      <nav className="fixed bottom-6 right-6 flex h-[calc(100%-6.75rem-1.5rem)] flex-col justify-end lg:hidden">
        <VisibilityToggler
          IconWhenHidden={HiListBullet}
          buttonClass="btn-neutral"
          className="flex h-full w-64 flex-col-reverse items-end gap-y-4"
        >
          {tableOfContents}
        </VisibilityToggler>
      </nav>
    </>
  );
}
