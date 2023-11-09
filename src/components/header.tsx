import Image from 'next/image';
import emblem from 'public/emblem_yellow.png';
import NavMenu from '~/components/helpers/nav-content';

export default function Header() {
  return (
    <header className="navbar rounded-box bg-neutral shadow-xl">
      <div className="flex-1">
        <a
          className="btn btn-ghost mx-1 my-0.5 px-2 text-xl normal-case"
          href="#top"
        >
          <Image
            src={emblem}
            alt="Ludo's personal emblem. It consists of several horizontal lines, a backwards letter 'L', and a letter 'D'. Together, these form an iconographic representation of a bullet in flight."
            className="w-10"
          />
        </a>
      </div>
      <div className="hidden flex-none sm:flex">
        <NavMenu />
      </div>
      <div className="relative flex flex-none sm:hidden">
        <NavMenu isSmall />
      </div>
    </header>
  );
}
