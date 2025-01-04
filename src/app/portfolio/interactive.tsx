'use client';

import { useRef } from 'react';
import SuperLink from '~/components/links/standard';
import ActionlessModal from '~/components/revealers/actionless-modal';

export default function PortfolioInteractive() {
  const firstModalLink = useRef<HTMLAnchorElement | null>(null);
  return (
    <ActionlessModal
      clickable={<SuperLink styledText>Looking for something else?</SuperLink>}
      title="Looking for something else?"
      firstLink={firstModalLink}
    >
      <div className="flex flex-col gap-2">
        <p>
          My{' '}
          <SuperLink href="/Resume.pdf" toFile external styledText>
            resume
          </SuperLink>{' '}
          summarizes the most important experiences I&apos;ve had and what I
          learned from them.
        </p>
        <p>
          The{' '}
          <SuperLink href="/experience" styledText>
            experience page
          </SuperLink>{' '}
          outlines all of the positions I&apos;ve held and the most significant
          projects I&apos;ve worked on.
        </p>
        <p>
          My{' '}
          <SuperLink href="" styledText>
            GitHub page
          </SuperLink>{' '}
          hosts many of my programming projects and some of my academic work.
        </p>
      </div>
    </ActionlessModal>
  );
}
