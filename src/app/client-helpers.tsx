'use client';

import { useRef } from 'react';
import StyledLink from '~/components/styled-link';

export function Pronouns() {
  const modal = useRef<HTMLDialogElement | null>(null);
  const link = useRef<HTMLAnchorElement | null>(null);
  return (
    <>
      <span
        onClick={() => {
          modal.current?.showModal();
          link.current?.blur();
        }}
        className="xs:badge-md badge badge-secondary badge-sm cursor-pointer align-top"
      >
        Any/All
      </span>
      <dialog ref={modal} className="modal whitespace-normal">
        <div className="modal-box p-6 text-base font-light text-base-content">
          <h3 className="text-xl font-normal">
            Oh, hi there! These are my{' '}
            <StyledLink
              reference={link}
              href="https://www.glsen.org/activity/pronouns-guide-glsen"
            >
              pronouns
            </StyledLink>
            .
          </h3>
          <p className="my-4">
            &quot;Any/All&quot; means that I&apos;m comfortable with you using
            whatever pronouns you&apos;d like when referring to me. Personally,
            I&apos;d recommend picking either he/him, they/them, or she/her.
          </p>
          <p className="text-base-content/50">
            When you&apos;re done with this dialog box, you can press escape or
            click/tap anywhere outside of it to close it.
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
