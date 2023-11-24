import {
  Children,
  type ReactElement,
  type ReactNode,
  isValidElement
} from 'react';
import { HiArrowRight } from 'react-icons/hi2';

export default function ArrowList({ children }: { children?: ReactNode }) {
  return (
    <ul className="ml-0 list-none pl-0">
      {(
        Children.toArray(children).filter((child) =>
          isValidElement(child)
        ) as ReactElement<{ children?: ReactNode }>[]
      ).map((child, index) => (
        <li key={index} className="flex">
          <HiArrowRight className="m-0 mr-4 mt-px h-4 w-4 self-center text-[var(--tw-prose-counters)]" />
          {child.props.children}
        </li>
      ))}
    </ul>
  );
}
