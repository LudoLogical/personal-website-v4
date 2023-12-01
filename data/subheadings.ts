import { slug } from 'github-slugger';
import {
  Children,
  type ReactElement,
  type ReactNode,
  isValidElement
} from 'react';

export class SubheadingData {
  text: string;
  slug: string;
  constructor(text: string, slug: string) {
    this.text = text;
    this.slug = slug;
  }
}

export class SubheadingGroupData {
  head: SubheadingData;
  contents: SubheadingGroupData[];
  constructor(head: SubheadingData, contents: SubheadingGroupData[]) {
    this.head = head;
    this.contents = contents;
  }
}

type ConvertibleSubeadingElement =
  | ReactElement<{ children: string }>
  | SubheadingGroupData;

const subheadingType = new RegExp(/^h[23456]$/);
const getSubheadingNumber = (element: ReactElement) =>
  parseInt(element.type.toString().charAt(1));

export function extractSubheadingData(
  source: ReactNode
): SubheadingGroupData[] {
  const headings = Children.toArray(source).filter(
    (child) =>
      isValidElement(child) && subheadingType.test(child.type.toString())
  ) as ConvertibleSubeadingElement[];
  for (let i = 6; i >= 2; i--) {
    for (let j = 0; j < headings.length; j++) {
      const candidate = headings.at(j)!;
      if (isValidElement(candidate) && getSubheadingNumber(candidate) === i) {
        let end = headings.length;
        for (let k = j + 1; k < headings.length; k++) {
          if (isValidElement(headings.at(k))) {
            // Non-ReactElements are necessarily SubheadingGroupData
            // Therefore, we can infer that getSubheadingNumber(candidate) <= i
            // and that headings.slice(j + 1, end).every((element) => element instanceof SubheadingGroupData)
            end = k;
            break;
          }
        }
        headings.splice(
          j,
          end - j,
          new SubheadingGroupData(
            new SubheadingData(
              candidate.props.children,
              slug(candidate.props.children)
            ),
            headings.slice(j + 1, end) as unknown as SubheadingGroupData[]
          )
        );
      }
    }
  }
  return headings as SubheadingGroupData[];
}
