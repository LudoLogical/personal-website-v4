'use client';

import { useRef } from 'react';
import ActionlessModal from '~/components/actionless-modal';
import SuperLink from '~/components/super-link';

export function NotTwitter() {
  const link = useRef<HTMLAnchorElement | null>(null);
  return (
    <>
      <ActionlessModal
        clickable={
          <span className="badge indicator-item badge-secondary translate-x-1/4 cursor-pointer">
            Not Twitter!
          </span>
        }
        title="Why I'm no longer active on Twitter"
        firstLink={link}
      >
        <p>
          In short, since its acquisition by Mr. Elon Musk, the platform has
          been administered and modified in a number of ways that I find
          concerning and not necessarily compatible with the civil, welcoming,
          and factually-accurate presence that I want to cultivate online. You
          can read a brief summary of what &quot;X&quot; has been up to since
          the acquisition{' '}
          <SuperLink
            ref={link}
            href="https://en.wikipedia.org/wiki/Twitter_under_Elon_Musk#Limitations_on_viewing_tweets"
            external
            styledText
          >
            here
          </SuperLink>
          .
        </p>
      </ActionlessModal>
    </>
  );
}
