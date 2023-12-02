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
  | ReactElement<{ id: string; children: string }>
  | SubheadingGroupData;

const subheadingType = new RegExp(/^h[23456]$/);
const getSubheadingNumber = (element: ReactElement) =>
  typeof element.type === 'function'
    ? parseInt(element.type.name.charAt(1))
    : parseInt(element.type.charAt(1));

export function extractSubheadingData(
  source: ReactNode
): SubheadingGroupData[] {
  const subheadings = Children.toArray(source).filter(
    (child) =>
      isValidElement(child) &&
      typeof child.type === 'function' &&
      subheadingType.test(child.type.name)
  ) as ConvertibleSubeadingElement[];
  for (let i = 6; i >= 2; i--) {
    for (let j = 0; j < subheadings.length; j++) {
      const candidate = subheadings.at(j)!;
      if (isValidElement(candidate) && getSubheadingNumber(candidate) === i) {
        let end = subheadings.length;
        for (let k = j + 1; k < subheadings.length; k++) {
          if (isValidElement(subheadings.at(k))) {
            // Non-ReactElements are necessarily SubheadingGroupData
            // Therefore, we can infer that getSubheadingNumber(candidate) <= i
            // and that headings.slice(j + 1, end).every((element) => element instanceof SubheadingGroupData)
            end = k;
            break;
          }
        }
        subheadings.splice(
          j,
          end - j,
          new SubheadingGroupData(
            new SubheadingData(candidate.props.children, candidate.props.id),
            subheadings.slice(j + 1, end) as unknown as SubheadingGroupData[]
          )
        );
      }
    }
  }
  return subheadings as SubheadingGroupData[];
}
