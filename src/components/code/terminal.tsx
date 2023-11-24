import clsx from 'clsx';
import { type ReactNode } from 'react';

const getColorClass = (color?: string) => {
  switch (color) {
    case 'primary':
      return 'text-primary';
    case 'secondary':
      return 'text-secondary';
    case 'success':
      return 'text-success';
    case 'warning':
      return 'text-warning';
    case 'error':
      return 'text-error';
    default:
      return '';
  }
};

const getHighlightClass = (color?: string) => {
  switch (color) {
    case 'primary':
      return 'bg-primary';
    case 'secondary':
      return 'bg-secondary';
    case 'success':
      return 'bg-success';
    case 'warning':
      return 'bg-warning';
    case 'error':
      return 'bg-error';
    default:
      return '';
  }
};

export function Terminal({ children }: { children?: ReactNode }) {
  return <div className="not-prose mockup-code my-4">{children}</div>;
}

export function TerminalLine({
  prefix,
  color,
  highlight,
  children
}: {
  prefix?: string;
  color?: string;
  highlight?: string;
  children?: ReactNode;
}) {
  return (
    <pre
      data-prefix={prefix ?? ' '}
      className={clsx(getColorClass(color), getHighlightClass(highlight))}
    >
      <code>{children}</code>
    </pre>
  );
}
