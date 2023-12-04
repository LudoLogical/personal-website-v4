import SuperLink from '~/components/links/standard';
import { ProblemLayout } from './helpers';
import { Explain404 } from './interactive';

export default function NotFound() {
  return (
    <ProblemLayout
      preamble="The server response was"
      problem={
        <>
          <span className="mr-2">404: Not Found</span>
          <Explain404 />
        </>
      }
      explanation={
        <span>
          I tried <em>really</em> hard, I promise. I looked under the couch
          cushions and everything! Are you sure you spelled and capitalized the
          whole URL correctly?
        </span>
      }
      action={
        <SuperLink href="/" className="btn btn-primary shadow-halo-primary-sm">
          Flip me right-side up
        </SuperLink>
      }
    />
  );
}
