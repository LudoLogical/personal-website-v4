import Image from 'next/image';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { HiChevronDown, HiChevronDoubleDown } from 'react-icons/hi2';
import Avatar from 'public/avatar.png';
import { Pronouns } from './client-helpers';

function AvatarComponent({ className }: { className?: string }) {
  return (
    <Image
      src={Avatar}
      alt="Ludo's avatar. A minimalist portrait of a faceless Ludo wearing a black shirt with a yellow sparkle pin. The background is light blue and decorated with a regular pattern of wavy lines."
      className={className}
    />
  );
}

function SocialButtons() {
  return (
    <>
      <button className="btn btn-ghost">
        <FiGithub className="h-4 w-4" />
      </button>
      <button className="btn btn-ghost">
        <FiLinkedin className="h-4 w-4" />
      </button>
    </>
  );
}

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center">
      <div className="hero mt-12 h-full">
        <div className="hero-content max-w-5xl flex-row gap-16">
          <AvatarComponent className="hidden h-64 w-64 rounded-3xl shadow-halo-secondary lg:avatar" />
          <header>
            <p>Hello, my name is</p>
            <h1 className="mb-4 mt-2 text-2xl font-bold leading-tight xs:text-3xl sm:text-4xl md:text-5xl">
              <span className="text-primary">
                Daniel &quot;Ludo&quot;{' '}
                <span className="whitespace-nowrap">
                  DeAnda.
                  <Pronouns />
                </span>
              </span>
              <br />I enable interaction.
            </h1>
            <p className="max-w-xl leading-relaxed">
              I&apos;m a problem solver on a neverending quest to connect users
              with software, students with concepts, humans with emotions, and
              people with play. I recently graduated from the University of
              Texas at Dallas with major, university, and highest Latin honors.
              Currently, I&apos;m pursuing a new place in the
              software-as-a-service space.
            </p>
            <div className="mt-6 flex flex-col items-start justify-start gap-4 sm:flex-row sm:items-center">
              <AvatarComponent className="shadow-halo-secondary-sm hidden h-20 w-20 rounded-full sm:avatar lg:hidden" />
              <div className="flex flex-row items-center gap-4 sm:hidden">
                <AvatarComponent className="shadow-halo-secondary-sm avatar h-16 w-16 rounded-full" />
                <div className="flex flex-row gap-2">
                  <SocialButtons />
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <button className="btn btn-primary shadow-halo-primary-sm">
                  Let&apos;s interact!
                  <HiChevronDoubleDown className="h-4 w-4" />
                </button>
                <button className="btn btn-outline">
                  Learn more
                  <HiChevronDown className="h-4 w-4" />
                </button>
              </div>
              <div className="hidden flex-row gap-2 sm:flex">
                <SocialButtons />
              </div>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
}
