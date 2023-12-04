'use client';

import SuperLink from '~/components/links/standard';
import { ProblemLayout } from './helpers';

export default function Error({ reset }: { reset: () => void }) {
  return (
    <ProblemLayout
      preamble="Oh, looks like"
      problem={<span className="mr-2">Something went wrong.</span>}
      explanation={
        <span>
          I&apos;m not exactly sure what the problem is, but you can give
          whatever you were doing another go using the button below. If the
          issue persists, I&apos;d really appreciate you{' '}
          <SuperLink href="/contact" styledText>
            letting me know!
          </SuperLink>
        </span>
      }
      action={
        <SuperLink
          className="btn btn-primary shadow-halo-primary-sm"
          onClick={() => reset()}
        >
          Try again
        </SuperLink>
      }
    />
  );
}
