'use client';

import { useRef, forwardRef, type ReactNode } from 'react';
import { FiAtSign } from 'react-icons/fi';
import { HiOutlineInformationCircle } from 'react-icons/hi2';
import SuperLink from '~/components/helpers/super-link';
import clsx from 'clsx';

const Modal = forwardRef<
  HTMLDialogElement,
  { title: ReactNode; cancelAnimation?: boolean; children?: ReactNode }
>(function DialogShell({ title, cancelAnimation, children }, ref) {
  return (
    <dialog
      ref={ref}
      className={clsx('modal whitespace-normal text-left', {
        'hidden open:grid': cancelAnimation
      })}
    >
      <div className="modal-box p-6 text-base font-light text-base-content">
        <h3 className="text-xl font-normal">{title}</h3>
        {children}
        <p className="text-base-content/50">
          When you&apos;re done with this dialog box, you can press escape or
          click/tap anywhere outside of it to close it.
        </p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
});

export function Copyright() {
  const modal = useRef<HTMLDialogElement | null>(null);
  const firstLink = useRef<HTMLAnchorElement | null>(null);
  return (
    <>
      <HiOutlineInformationCircle
        onClick={() => {
          modal.current?.showModal();
          firstLink.current?.blur();
        }}
        className="btn btn-circle btn-ghost btn-xs h-6 w-6"
      />
      <Modal
        title="Attribution and Copyright Information"
        cancelAnimation
        ref={modal}
      >
        <p className="my-4">
          This{' '}
          <SuperLink
            ref={firstLink}
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
          . It is being hosted free of charge on Vercel. Ludo&apos;s avatar was
          created by Karina Varughese.
        </p>
        <p className="my-4">
          All other content was made with &#10084; by Daniel &quot;Ludo&quot;
          DeAnda. &copy; 2023, all rights reserved.
        </p>
      </Modal>
    </>
  );
}

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
        className="badge badge-secondary badge-sm cursor-pointer align-top xs:badge-md"
      >
        Any/All
      </span>
      <Modal
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
        ref={modal}
      >
        <p className="my-4">
          &quot;Any/All&quot; means that I&apos;m comfortable with you using
          whatever pronouns you&apos;d like when referring to me. Personally,
          I&apos;d recommend picking either he/him, they/them, or she/her.
        </p>
      </Modal>
    </>
  );
}

export function Explain404() {
  const modal = useRef<HTMLDialogElement | null>(null);
  const link = useRef<HTMLAnchorElement | null>(null);
  return (
    <>
      <span
        onClick={() => {
          modal.current?.showModal();
          link.current?.blur();
        }}
        className="badge badge-secondary badge-sm cursor-pointer align-top xs:badge-md"
      >
        What&apos;s that?
      </span>
      <Modal
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
        ref={modal}
      >
        <p className="my-4">
          Every time you visit a webpage, your browser requests the data for
          that webpage from some server using a protocol called HTTP (the
          optional &quot;S&quot; stands for &quot;Secure&quot;).
        </p>
        <p className="my-4">
          When the server responds, it includes a status code that explains the
          outcome of your request. If the server can&apos;t find the page you
          requested, that status code will be 404.
        </p>
      </Modal>
    </>
  );
}

export function ThreadsButton() {
  const modal = useRef<HTMLDialogElement | null>(null);
  const link = useRef<HTMLAnchorElement | null>(null);
  return (
    <>
      <div className="indicator">
        <span
          onClick={() => {
            modal.current?.showModal();
            link.current?.blur();
          }}
          className="badge indicator-item badge-secondary translate-x-1/4 cursor-pointer"
        >
          Not Twitter!
        </span>
        <SuperLink
          href="https://www.threads.net/@ludo.logical"
          external
          className="btn w-fit"
        >
          <FiAtSign className="h-4 w-4" />
          ludo.logical@threads.net
        </SuperLink>
      </div>
      <Modal title="Why I'm no longer active on Twitter" ref={modal}>
        <p className="my-4">
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
      </Modal>
    </>
  );
}
