import clsx from 'clsx';
import Image from 'next/image';
import TransparentAvatar from 'public/avatar-transparent.png';
import SuperLink from '~/components/super-link';
import { Explain404 } from '~/components/modals';

function BadvatarComponent({ className }: { className?: string }) {
  return (
    <Image
      src={TransparentAvatar}
      alt="An upside-down version of Ludo's avatar. A minimalist portrait of a faceless Ludo wearing a black shirt with a yellow sparkle pin. The background is red and criss-crossed with a regular pattern of darker, horizontal lines."
      className={clsx(
        'bg-error-pattern -scale-y-100 bg-error bg-center',
        className
      )}
    />
  );
}

export default function NotFound() {
  return (
    <div className="hero -mt-6">
      <div className="hero-content max-w-5xl flex-row gap-16">
        <BadvatarComponent className="shadow-halo-error hidden h-64 w-64 rounded-3xl lg:avatar" />
        <div>
          <BadvatarComponent className="shadow-halo-error-sm avatar mb-6 h-16 w-16 rounded-full xs:hidden" />
          <p>The server response was</p>
          <h1 className="mb-4 mt-2 text-2xl font-bold leading-tight xs:text-3xl lg:text-4xl">
            <span className="text-error">
              <span className="mr-2">404: Not Found</span>
              <Explain404 />
            </span>
            <br />
            Sorry about that.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed xs:text-base">
            I tried <em>really</em> hard, I promise. I looked under the couch
            cushions and everything! Are you sure you spelled and capitalized
            the whole URL correctly?
          </p>
          <div className="mt-6 flex flex-row items-center justify-start gap-4">
            <BadvatarComponent className="shadow-halo-error-sm mr-4 hidden h-16 w-16 rounded-full xs:avatar sm:h-20 sm:w-20 lg:hidden" />
            <SuperLink href="/" className="shadow-halo-error btn btn-primary">
              Flip me right-side up
            </SuperLink>
          </div>
        </div>
      </div>
    </div>
  );
}