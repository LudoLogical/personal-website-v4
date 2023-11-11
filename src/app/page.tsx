import Image from 'next/image';
import Link from 'next/link';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Avatar from 'public/avatar.png';
import { Pronouns } from './dialogs';
import StyledLink from '~/components/styled-link';

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
    <div className="flex gap-1">
      <Link
        href="https://github.com/LudoLogical"
        rel="noopener noreferrer"
        target="_blank"
        className="btn btn-circle btn-ghost"
      >
        <FiGithub className="h-4 w-4" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/danielchristiandeanda/"
        rel="noopener noreferrer"
        target="_blank"
        className="btn btn-circle btn-ghost"
      >
        <FiLinkedin className="h-4 w-4" />
      </Link>
    </div>
  );
}

export default function Index() {
  return (
    <div className="hero -mt-6">
      <div className="hero-content max-w-5xl flex-row gap-16">
        <AvatarComponent className="hidden h-64 w-64 rounded-3xl shadow-halo-secondary lg:avatar" />
        <div>
          <AvatarComponent className="avatar mb-6 h-16 w-16 rounded-full shadow-halo-secondary-sm xs:hidden" />
          <p>Hello, my name is</p>
          <h1 className="mb-4 mt-2 text-2xl font-bold leading-tight xs:text-3xl lg:text-4xl">
            <span className="text-primary">
              Daniel &quot;Ludo&quot;{' '}
              <span className="whitespace-nowrap">
                DeAnda.
                <Pronouns />
              </span>
            </span>
            <br />I enable interaction.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed xs:text-base">
            I&apos;m a problem solver on a neverending quest to connect users
            with software, students with concepts, humans with emotions, and
            people with play. I recently graduated from{' '}
            <StyledLink href="https://www.utdallas.edu/">UT Dallas</StyledLink>{' '}
            with major, university, and highest Latin honors. Currently,
            I&apos;m working as an Integrated Development Advisor at{' '}
            <StyledLink href="https://labs.codeday.org/">
              CodeDay Labs
            </StyledLink>{' '}
            and pursuing a new place in the software-as-a-service space.
          </p>
          <div className="mt-6 flex flex-row items-center justify-start gap-4">
            <AvatarComponent className="mr-4 hidden h-16 w-16 rounded-full shadow-halo-secondary-sm xs:avatar sm:h-20 sm:w-20 lg:hidden" />
            <Link
              href="/blog"
              className="btn btn-primary shadow-halo-primary-sm"
            >
              Check out my blog!
            </Link>
            <div className="flex-row gap-2">
              <SocialButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
