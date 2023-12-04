'use client';

import Badvatar from '~/components/badvatar';
import SuperLink from '~/components/links/standard';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="hero">
      <div className="hero-content max-w-5xl flex-row gap-16">
        <Badvatar className="hidden h-64 w-64 rounded-3xl shadow-halo-error lg:avatar" />
        <div>
          <Badvatar className="avatar mb-6 h-16 w-16 rounded-full shadow-halo-error-sm xs:hidden" />
          <p>Oh, looks like</p>
          <h1 className="mb-4 mt-2 text-2xl font-bold leading-tight xs:text-3xl lg:text-4xl">
            <span className="text-error">
              <span className="mr-2">Something went wrong.</span>
            </span>
            <br />
            Sorry about that.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed xs:text-base">
            I&apos;m not exactly sure what the problem is, but you can give
            whatever you were doing another go using the button below. If the
            issue persists, I&apos;d really appreciate you{' '}
            <SuperLink href="/contact" styledText>
              letting me know!
            </SuperLink>
          </p>
          <div className="mt-6 flex flex-row items-center justify-start gap-4">
            <Badvatar className="mr-4 hidden h-16 w-16 rounded-full shadow-halo-error-sm xs:avatar sm:h-20 sm:w-20 lg:hidden" />
            <SuperLink
              href="/"
              className="btn btn-primary shadow-halo-primary-sm"
              onClick={() => reset()}
            >
              Try again
            </SuperLink>
          </div>
        </div>
      </div>
    </div>
  );
}
