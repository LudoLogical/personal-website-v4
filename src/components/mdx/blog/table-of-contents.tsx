'use client';

import AnchorLink from '~/components/anchor-link';
import { type SubheadingGroupData } from '~/utils/table-of-contents';

const renderTableOfContents = (data: SubheadingGroupData[]) =>
  data.map((subheadingGroup) => (
    <li key={subheadingGroup.head.slug}>
      <AnchorLink to={subheadingGroup.head.slug}>
        {subheadingGroup.head.text}
      </AnchorLink>
      {subheadingGroup.contents.length > 0 && (
        <ul>{renderTableOfContents(subheadingGroup.contents)}</ul>
      )}
    </li>
  ));
export default function TableOfContents({
  data
}: {
  data: SubheadingGroupData[];
}) {
  return (
    <div className="overflow-y-auto rounded-box bg-neutral lg:bg-base-200">
      <div className="h-full overflow-y-auto">
        <ul className="menu">
          <li className="menu-title">On This Page</li>
          {renderTableOfContents(data)}
        </ul>
      </div>
    </div>
  );
}
