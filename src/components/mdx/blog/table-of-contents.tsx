'use client';

import AnchorLink from '~/components/anchor-link';
import { type SubheadingGroupData } from 'data/subheadings';

export default function TableOfContents({
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
