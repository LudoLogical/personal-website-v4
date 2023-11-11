'use client';

import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  type MouseEvent
} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useScrollDirection } from 'react-use-scroll-direction';
import { HiArrowTopRightOnSquare, HiBars3, HiXMark } from 'react-icons/hi2';
import { Copyright } from '~/components/dialogs';
import { useOutsideClick } from '~/utils/hooks';
import menuData from 'data/menu';
import emblem from 'public/emblem_yellow.png';

interface NavMenuHandle {
  closeAndHide: () => void;
}

const NavMenu = forwardRef<NavMenuHandle, { isSmall?: boolean }>(
  function NavMenu({ isSmall }, ref) {
    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    const [openSubmenu, setOpenSubmenu] = useState<number>(-1);
    const checkbox = useRef<HTMLInputElement | null>(null);
    const pathname = usePathname();
    function closeAndHide() {
      if (checkbox.current) {
        checkbox.current.checked = false;
      }
      setOpenSubmenu(-1);
      setMenuVisible(false);
    }
    useImperativeHandle(ref, () => ({
      closeAndHide: closeAndHide
    }));
    function handleNavigation(
      e: MouseEvent<HTMLAnchorElement>,
      destination: string
    ) {
      if (destination !== pathname) {
        closeAndHide();
      }
      (e.target as HTMLAnchorElement).blur();
    }
    return (
      <>
        {isSmall && (
          <label className="btn btn-circle btn-ghost swap swap-rotate">
            <input
              ref={checkbox}
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
          {menuData.map((item, index) => (
            <li key={item[0] as string}>
              {typeof item[1] === 'string' ? (
                <Link
                  href={item[1]}
                  onClick={(event) =>
                    handleNavigation(event, item[1] as string)
                  }
                >
                  {item[0]}
                </Link>
              ) : (
                <details
                  onClick={(e) => {
                    e.preventDefault();
                    if (openSubmenu === index) {
                      setOpenSubmenu(-1);
                    } else {
                      setOpenSubmenu(index);
                    }
                  }}
                  open={openSubmenu === index}
                >
                  <summary className="pr-5">{item[0]}</summary>
                  <ul
                    className={clsx({
                      '!mt-6 -translate-x-2 bg-neutral': !isSmall
                    })}
                  >
                    {item[1]!.map((link) => (
                      <li key={link[0]}>
                        <Link
                          href={link[1]!}
                          onClick={(event) =>
                            handleNavigation(event, item[1] as string)
                          }
                        >
                          {link[0]}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              )}
            </li>
          ))}
          {isSmall && (
            <li>
              <Link
                href="/Resume.pdf"
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center justify-between text-primary hover:bg-primary hover:text-primary-content focus:!text-primary active:!text-primary"
              >
                Resume
                <HiArrowTopRightOnSquare className="-mr-0.5 mb-px h-4 w-4" />
              </Link>
            </li>
          )}
        </ul>
        {!isSmall && (
          <Link
            href="/Resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
            className="btn btn-primary btn-outline mx-1"
          >
            Resume
            <HiArrowTopRightOnSquare className="mb-px h-4 w-4" />
          </Link>
        )}
      </>
    );
  }
);

export default function Header() {
  const { isScrollingUp, isScrollingDown } = useScrollDirection();
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const navMenuLarge = useRef<NavMenuHandle | null>(null);
  const navMenuSmall = useRef<NavMenuHandle | null>(null);
  function handleCloseAndHide() {
    if (navMenuLarge.current) {
      navMenuLarge.current.closeAndHide();
    }
    if (navMenuSmall.current) {
      navMenuSmall.current.closeAndHide();
    }
  }
  useEffect(() => {
    if (!showNavbar) {
      if (isScrollingUp) {
        setShowNavbar(true);
      }
    } else {
      if (isScrollingDown) {
        setShowNavbar(false);
        handleCloseAndHide();
      }
    }
  }, [isScrollingUp, isScrollingDown, showNavbar]);
  const container = useRef<HTMLDivElement | null>(null);
  useOutsideClick(container, handleCloseAndHide);
  return (
    <div
      ref={container}
      className={clsx(
        'fixed left-0 top-0 z-10 flex w-full justify-center transition-transform duration-300',
        showNavbar ? 'translate-y-0' : '-translate-y-[100%]'
      )}
    >
      <header className="navbar rounded-box m-5 max-w-6xl bg-neutral shadow-xl">
        <div className="mx-1 my-0.5 flex flex-1 flex-row items-center gap-2">
          <Link href="/" className="btn btn-ghost px-2">
            <Image
              src={emblem}
              alt="Ludo's personal emblem. It consists of several horizontal lines, a backwards letter 'L', and a letter 'D'. Together, these form an iconographic representation of a bullet in flight."
              className="w-10"
            />
          </Link>
          <Copyright />
        </div>
        <div className="hidden flex-none sm:flex">
          <NavMenu ref={navMenuLarge} />
        </div>
        <div className="relative flex flex-none sm:hidden">
          <NavMenu ref={navMenuSmall} isSmall />
        </div>
      </header>
    </div>
  );
}
