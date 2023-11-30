import 'server-only';

import {
  Children,
  type ReactElement,
  type ReactNode,
  isValidElement
} from 'react';
import { slug } from 'github-slugger';
import AnchorLink from '~/components/anchor-link';

const subheadingType = new RegExp(/^h[23456]$/);
const isSubheading = (element: ReactElement) =>
  subheadingType.test(element.type.toString());
const getSubheadingNumber = (element: ReactElement) =>
  isSubheading(element) ? parseInt(element.type.toString().charAt(1)) : 0;

export default function TableOfContents({ source }: { source: ReactNode }) {
  const toc = Children.toArray(source).filter(
    (child) => isValidElement(child) && isSubheading(child)
  ) as ReactElement<{ children: string }>[];
  for (let i = 5; i >= 2; i--) {
    for (let j = 0; j < toc.length; j++) {
      const groupSubheadingCandidate = toc.at(j)!;
      if (getSubheadingNumber(groupSubheadingCandidate) === i) {
        const groupSubheading = groupSubheadingCandidate.props.children;
        const groupSubheadingSlug = slug(groupSubheading);
        let end = toc.length;
        for (let k = j + 1; k < toc.length; k++) {
          const nowLevel = getSubheadingNumber(toc.at(k)!);
          if (0 < nowLevel && nowLevel <= i) {
            end = k;
            break;
          }
        }
        const groupSize = end - j;
        toc.splice(
          j,
          groupSize,
          <li key={groupSubheadingSlug}>
            <AnchorLink to={slug(groupSubheadingSlug)}>
              {groupSubheading}
            </AnchorLink>
            {groupSize > 1 && (
              <ul>
                {toc.slice(j + 1, end).map((subheading) => {
                  if (subheading.type.toString() === 'li') {
                    return subheading;
                  }
                  const subheadingText = subheading.props.children;
                  const subheadingSlug = slug(subheadingText);
                  return (
                    <li key={subheadingSlug}>
                      <AnchorLink to={subheadingSlug}>
                        {subheadingText}
                      </AnchorLink>
                    </li>
                  );
                })}
              </ul>
            )}
          </li>
        );
      }
    }
  }
  return (
    <div className="overflow-y-auto rounded-box bg-neutral lg:bg-base-200">
      <div className="h-full overflow-y-auto">
        <ul className="menu">
          <li className="menu-title">On This Page</li>
          {toc}
        </ul>
      </div>
    </div>
  );
}
