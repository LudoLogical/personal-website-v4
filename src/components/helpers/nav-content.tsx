'use client';

import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { HiArrowTopRightOnSquare, HiBars3, HiXMark } from 'react-icons/hi2';

export default function NavMenu({ isSmall }: { isSmall?: boolean }) {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  return (
    <>
      {isSmall && (
        <label className="btn btn-circle btn-ghost swap swap-rotate">
          <input
            type="checkbox"
            onChange={(event) => setMenuVisible(event.target.checked)}
          />
          <HiBars3 className="swap-off h-6 w-6 fill-current" />
          <HiXMark className="swap-on h-6 w-6 fill-current" />
        </label>
      )}
      <ul
        className={clsx('menu', {
          'menu-horizontal': !isSmall,
          'rounded-box absolute right-0 top-0 w-52 translate-x-2 translate-y-20 bg-neutral shadow-xl':
            isSmall,
          hidden: isSmall && !menuVisible
        })}
      >
        <li>
          <details>
            <summary className="pr-5">Blog</summary>
            <ul
              className={clsx({ '!mt-6 -translate-x-2 bg-neutral': !isSmall })}
            >
              <li>
                <Link href="/blog/recent">Recent</Link>
              </li>
              <li>
                <Link href="/blog/categories">Categories</Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <details>
            <summary className="pr-5">Extras</summary>
            <ul
              className={clsx({ '!mt-6 -translate-x-2 bg-neutral': !isSmall })}
            >
              <li>
                <Link href="/music">Music</Link>
              </li>
              <li>
                <Link href="/crossword">Crossword</Link>
              </li>
            </ul>
          </details>
        </li>
        {isSmall && (
          <li>
            <Link
              href="/Resume.pdf"
              className="flex items-center justify-between text-primary hover:bg-primary hover:text-primary-content focus:!text-primary active:!text-primary"
            >
              Resume
              <HiArrowTopRightOnSquare className="-mr-0.5 mb-px h-4 w-4" />
            </Link>
          </li>
        )}
      </ul>
      {!isSmall && (
        <Link href="/Resume.pdf" className="btn btn-primary btn-outline mx-1">
          Resume
          <HiArrowTopRightOnSquare className="mb-px h-4 w-4" />
        </Link>
      )}
    </>
  );
}
