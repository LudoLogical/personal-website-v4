'use client';

import clsx from 'clsx';
import { type SubheadingGroupData } from 'data/subheadings';
import { useRef } from 'react';
import { HiListBullet } from 'react-icons/hi2';
import AnchorLink from '~/components/links/anchor';
import VisibilityToggler, {
  type VisibilityTogglerHandle
} from '~/components/revealers/visibility-toggler';
import { useToggleOnScroll } from '~/utils/hooks';

export function TableOfContents({
  data,
  onNavigation
}: {
  data: SubheadingGroupData[];
  onNavigation: () => void;
}) {
  const renderTableOfContents = (data: SubheadingGroupData[]) =>
    data.map((subheadingGroup) => (
      <li key={subheadingGroup.head.slug}>
        <AnchorLink to={subheadingGroup.head.slug} onClick={onNavigation}>
          {subheadingGroup.head.text}
        </AnchorLink>
        {subheadingGroup.contents.length > 0 && (
          <ul>{renderTableOfContents(subheadingGroup.contents)}</ul>
        )}
      </li>
    ));
  return (
    <ul className="menu">
      <li className="menu-title">On This Page</li>
      {renderTableOfContents(data)}
    </ul>
  );
}

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
          'sticky mt-18 hidden w-64 overflow-hidden rounded-box transition-all duration-300 lg:block',
          yieldToHeader
            ? 'top-header max-h-screen-content-minus-header'
            : 'top-5 max-h-screen-content'
        )}
      >
        <div className="max-h-full overflow-y-auto rounded-box bg-base-200">
          {tableOfContents}
        </div>
      </nav>
      <nav className="pointer-events-none fixed bottom-5 right-5 z-10 flex h-screen-content-minus-header w-64 flex-col-reverse items-end gap-y-4 lg:hidden">
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
