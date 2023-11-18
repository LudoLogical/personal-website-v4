import { type FC, type ReactNode } from 'react';
import clsx from 'clsx';
import { type IconType } from 'react-icons';

export default function createCallout(
  Icon: IconType,
  alertClass?: string
): FC<{ children: ReactNode }> {
  return function Callout({
    title,
    children
  }: {
    title?: string;
    children: ReactNode;
  }) {
    return (
      <aside
        role="alert"
        className={clsx('not-prose alert my-5 items-start', alertClass)}
      >
        <Icon
          className={clsx('mt-0.5 h-6 w-6', {
            'text-primary': alertClass === undefined
          })}
        />
        <div>
          <h3 className={clsx({ 'mb-1 text-lg font-bold': title })}>{title}</h3>
          <p>{children}</p>
        </div>
      </aside>
    );
  };
}
