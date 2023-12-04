'use client';

import { type ReactNode, useState } from 'react';
import clsx from 'clsx';

let incrementor = 0;

export default function BrightGroup({
  titles,
  children
}: {
  titles: string[];
  children?: ReactNode;
}) {
  if ((children as ReactNode[]).length !== titles.length) {
    throw new Error(
      'The number of titles and the number of code blocks must match.'
    );
  }
  const [open, setOpen] = useState<number>(0);
  incrementor++;
  return (
    <div className="bg-dracula-base overflow-hidden rounded-box">
      <div className="not-prose bg-base-200">
        <div
          role="tablist"
          className="tabs-boxed tabs ml-2 w-fit rounded-xl py-4"
        >
          {titles.map((title, index) => (
            <a
              key={`codeblock.title.${incrementor}.${index}`}
              role="tab"
              onClick={() => setOpen(index)}
              className={clsx(
                'tab h-fit',
                index === open ? 'tab-active' : null
              )}
            >
              {title}
            </a>
          ))}
        </div>
      </div>
      {(children as ReactNode[]).map((child, index) => (
        <div
          key={`codeblock.content.${incrementor}.${index}`}
          className={clsx('-my-4', index === open ? null : 'hidden')}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
