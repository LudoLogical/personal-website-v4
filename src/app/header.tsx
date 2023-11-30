'use client';

import {
  forwardRef,
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  type MouseEvent
} from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import {
  HiArrowTopRightOnSquare,
  HiBars3,
  HiOutlineInformationCircle
} from 'react-icons/hi2';
import ActionlessModal from '~/components/actionless-modal';
import SuperLink from '~/components/super-link';
import VisibilityToggler, {
  type VisibilityTogglerHandle
} from '~/components/visibility-toggler';
import { useToggleOnScroll } from '~/utils/hooks';
import menuData from 'data/menu';
import emblem from 'public/emblem-yellow.png';

interface ItemsHandler {
  resetSubmenus: () => void;
}

const NavMenuItems = forwardRef<ItemsHandler, { onNavigation?: () => void }>(
  function NavMenuItems({ onNavigation }, ref) {
    const [openSubmenu, setOpenSubmenu] = useState<number>(-1);
    const handleNavigation = (e: MouseEvent<HTMLAnchorElement>) => {
      onNavigation?.();
      (e.target as HTMLAnchorElement).blur();
    };
    useImperativeHandle(ref, () => ({
      resetSubmenus: () => setOpenSubmenu(-1)
    }));
    return (
      <>
        {menuData.map((item, index) => (
          <li key={item[0] as string}>
            {typeof item[1] === 'string' ? (
              <SuperLink href={item[1]} onClick={handleNavigation}>
                {item[0]}
              </SuperLink>
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
                <ul className="nav:!mt-6 nav:bg-neutral">
                  {item[1]!.map((link) => (
                    <li key={link[0]}>
                      <SuperLink href={link[1]} onClick={handleNavigation}>
                        {link[0]}
                      </SuperLink>
                    </li>
                  ))}
                </ul>
              </details>
            )}
          </li>
        ))}
      </>
    );
  }
);

export default function Header() {
  const showNavbar = useToggleOnScroll();
  useEffect(() => {
    if (!showNavbar) {
      toggler.current?.forceClose();
    }
  }, [showNavbar]);
  const firstModalLink = useRef<HTMLAnchorElement | null>(null);
  const toggler = useRef<VisibilityTogglerHandle | null>(null);
  const itemsHandler = useRef<ItemsHandler | null>(null);
  return (
    <div
      className={clsx(
        'fixed left-0 top-0 z-10 flex w-full justify-center transition-transform duration-300',
        showNavbar ? 'translate-y-0' : '-translate-y-[100%]'
      )}
    >
      <header className="navbar m-5 max-w-6xl rounded-box bg-neutral shadow-xl">
        <div className="mx-1 my-0.5 flex flex-1 flex-row items-center gap-2">
          <SuperLink href="/" className="btn btn-ghost px-2">
            <Image
              src={emblem}
              alt="Ludo's personal emblem. It consists of several horizontal lines, a backwards letter 'L', and a letter 'D'. Together, these form an iconographic representation of a bullet in flight."
              className="w-10"
            />
          </SuperLink>
          <ActionlessModal
            clickable={
              <HiOutlineInformationCircle className="btn btn-circle btn-ghost btn-xs h-6 w-6" />
            }
            title="Attribution and Copyright Information"
            firstLink={firstModalLink}
            cancelAnimation
          >
            <p>
              This{' '}
              <SuperLink
                ref={firstModalLink}
                href="https://github.com/LudoLogical/personal-website-v4"
                external
                styledText
              >
                open-source
              </SuperLink>{' '}
              website was built using Next.js, React, TypeScript, TailwindCSS,
              DaisyUI, MDX, and a handful of other open-source{' '}
              <SuperLink
                href="https://github.com/LudoLogical/personal-website-v4/blob/main/package.json"
                external
                styledText
              >
                packages
              </SuperLink>
              . It is being hosted free of charge on Vercel. Ludo&apos;s avatar
              was created by Karina Varughese.
            </p>
            <p>
              All other content was made with &#10084; by Daniel
              &quot;Ludo&quot; DeAnda. &copy; 2023, all rights reserved.
            </p>
          </ActionlessModal>
        </div>
        <div className="nav:flex hidden flex-none">
          <ul className="menu menu-horizontal">
            <NavMenuItems />
          </ul>
          <SuperLink
            href="/Resume.pdf"
            toFile
            external
            className="btn btn-outline btn-primary mx-1"
          >
            Resume
            <HiArrowTopRightOnSquare className="mb-px h-4 w-4" />
          </SuperLink>
        </div>
        <div className="nav:hidden relative flex flex-none">
          <VisibilityToggler
            ref={toggler}
            IconWhenHidden={HiBars3}
            onClose={() => itemsHandler.current?.resetSubmenus()}
            buttonClass="btn-ghost"
          >
            <ul className="menu absolute right-0 top-0 w-52 translate-x-2 translate-y-20 rounded-box bg-neutral shadow-xl">
              <NavMenuItems
                ref={itemsHandler}
                onNavigation={() => toggler.current?.forceClose()}
              />
              <li>
                <SuperLink
                  href="/Resume.pdf"
                  toFile
                  external
                  className="flex items-center justify-between text-primary hover:bg-primary hover:text-primary-content focus:!text-primary active:!text-primary"
                >
                  Resume
                  <HiArrowTopRightOnSquare className="-mr-0.5 mb-px h-4 w-4" />
                </SuperLink>
              </li>
            </ul>
          </VisibilityToggler>
        </div>
      </header>
    </div>
  );
}
