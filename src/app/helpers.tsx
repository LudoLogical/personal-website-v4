import clsx from 'clsx';
import Image from 'next/image';
import TransparentAvatar from 'public/avatar-transparent.png';
import { type ReactNode } from 'react';

export default function Badvatar({ className }: { className?: string }) {
  return (
    <Image
      src={TransparentAvatar}
      alt="An upside-down version of Ludo's avatar. A minimalist portrait of a faceless Ludo wearing a black shirt with a yellow sparkle pin. The background is red and criss-crossed with a regular pattern of darker, horizontal lines."
      className={clsx(
        '-scale-y-100 bg-error bg-error-pattern bg-center',
        className
      )}
    />
  );
}

export function ProblemLayout({
  preamble,
  problem,
  explanation,
  action
}: {
  preamble: string;
  problem: ReactNode;
  explanation: ReactNode;
  action: ReactNode;
}) {
  return (
    <div className="hero my-4">
      <div className="hero-content max-w-5xl flex-row gap-16">
        <Badvatar className="hidden h-64 w-64 rounded-3xl shadow-halo-error lg:avatar" />
        <div>
          <Badvatar className="avatar mb-6 h-16 w-16 rounded-full shadow-halo-error-sm xs:hidden" />
          <p>{preamble}</p>
          <h1 className="mb-4 mt-2 text-2xl font-bold leading-tight xs:text-3xl lg:text-4xl">
            <span className="text-error">{problem}</span>
            <br />
            Sorry about that.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed xs:text-base">
            {explanation}
          </p>
          <div className="mt-6 flex flex-row items-center justify-start gap-4">
            <Badvatar className="mr-4 hidden h-16 w-16 rounded-full shadow-halo-error-sm xs:avatar sm:h-20 sm:w-20 lg:hidden" />
            {action}
          </div>
        </div>
      </div>
    </div>
  );
}
