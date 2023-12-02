'use client';

import { useRef } from 'react';
import ActionlessModal from '~/components/revealers/actionless-modal';
import SuperLink from '~/components/links/standard';

export function Pronouns() {
  const link = useRef<HTMLAnchorElement | null>(null);
  return (
    <ActionlessModal
      clickable={
        <span className="badge badge-secondary badge-sm cursor-pointer align-top xs:badge-md">
          Any/All
        </span>
      }
      title={
        <>
          Oh, hi there! These are my{' '}
          <SuperLink
            ref={link}
            href="https://www.glsen.org/activity/pronouns-guide-glsen"
            external
            styledText
          >
            pronouns
          </SuperLink>
          .
        </>
      }
      firstLink={link}
    >
      <p>
        &quot;Any/All&quot; means that I&apos;m comfortable with you using
        whatever pronouns you&apos;d like when referring to me. Personally,
        I&apos;d recommend picking either he/him, they/them, or she/her.
      </p>
    </ActionlessModal>
  );
}

export function Explain404() {
  const link = useRef<HTMLAnchorElement | null>(null);
  return (
    <>
      <ActionlessModal
        clickable={
          <span className="badge badge-secondary badge-sm cursor-pointer align-top xs:badge-md">
            What&apos;s that?
          </span>
        }
        title={
          <>
            404 is an HTTP/HTTPS response{' '}
            <SuperLink
              ref={link}
              href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"
              external
              styledText
            >
              status code
            </SuperLink>
            .
          </>
        }
        firstLink={link}
      >
        <p>
          Every time you visit a webpage, your browser requests the data for
          that webpage from some server using a protocol called HTTP (the
          optional &quot;S&quot; stands for &quot;Secure&quot;).
        </p>
        <p>
          When the server responds, it includes a status code that explains the
          outcome of your request. If the server can&apos;t find the page you
          requested, that status code will be 404.
        </p>
      </ActionlessModal>
    </>
  );
}
