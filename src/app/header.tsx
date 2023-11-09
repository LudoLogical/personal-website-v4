'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { useScrollDirection } from 'react-use-scroll-direction';
import { HiArrowTopRightOnSquare, HiBars3, HiXMark } from 'react-icons/hi2';
import emblem from 'public/emblem_yellow.png';

function NavMenu({ isSmall }: { isSmall?: boolean }) {
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

export default function Header() {
  const { isScrollingUp, isScrollingDown } = useScrollDirection();
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  useEffect(() => {
    if (!showNavbar) {
      if (isScrollingUp) {
        setShowNavbar(true);
      }
    } else {
      if (isScrollingDown) {
        setShowNavbar(false);
      }
    }
  }, [isScrollingUp, isScrollingDown, showNavbar]);
  return (
    <div
      className={clsx(
        'fixed left-0 top-0 z-10 flex w-full justify-center transition-transform duration-300',
        showNavbar ? 'translate-y-0' : '-translate-y-[100%]'
      )}
    >
      {/* TODO: The translate above is messy, we should close the expanded things instead! */}
      <header className="navbar rounded-box m-5 max-w-6xl bg-neutral shadow-xl">
        <div className="mx-1 my-0.5 flex-1">
          <button className="btn btn-ghost px-2">
            <Image
              src={emblem}
              alt="Ludo's personal emblem. It consists of several horizontal lines, a backwards letter 'L', and a letter 'D'. Together, these form an iconographic representation of a bullet in flight."
              className="w-10"
            />
          </button>
        </div>
        <div className="hidden flex-none sm:flex">
          <NavMenu />
        </div>
        <div className="relative flex flex-none sm:hidden">
          <NavMenu isSmall />
        </div>
      </header>
    </div>
  );
}
