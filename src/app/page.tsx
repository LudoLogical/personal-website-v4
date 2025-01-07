import Image from 'next/image';
import Avatar from 'public/avatar.png';
import { FiCodepen, FiGithub, FiLinkedin } from 'react-icons/fi';
import SuperLink from '~/components/links/standard';
import { Pronouns } from './interactive';

function AvatarComponent({ className }: { className?: string }) {
  return (
    <Image
      src={Avatar}
      alt="Ludo's avatar. A minimalist portrait of a faceless Ludo wearing a black shirt with a yellow sparkle pin. The background is light blue and decorated with a regular pattern of wavy lines."
      className={className}
    />
  );
}

export default function Index() {
  return (
    <div className="hero my-4">
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
            I&apos;m a software engineer, UI/UX designer, and educator with a decade of experience in computer wizardry. Currently, I&apos;m applying my deep understanding of programming, technology, and pedagogy to help train the next generation of magicians as the Head of Software Engineering Education at <SuperLink href="https://codeday.org/" external styledText>CodeDay</SuperLink>.
          </p>
          <div className="mt-6 flex flex-row items-center justify-start gap-4">
            <AvatarComponent className="mr-4 hidden h-16 w-16 rounded-full shadow-halo-secondary-sm xs:avatar sm:h-20 sm:w-20 lg:hidden" />
            <SuperLink
              href="/contact"
              className="btn btn-primary shadow-halo-primary-sm"
            >
              Let's chat!
            </SuperLink>
            <div className="flex-row gap-2">
              <div className="flex gap-1">
                <SuperLink
                  href="https://github.com/LudoLogical"
                  external
                  styledIcon
                >
                  <FiGithub className="h-4 w-4" />
                </SuperLink>
                <SuperLink
                  href="https://codepen.io/LudoLogical"
                  external
                  styledIcon
                >
                  <FiCodepen className="h-4 w-4" />
                </SuperLink>
                <SuperLink
                  href="https://www.linkedin.com/in/danielchristiandeanda/"
                  external
                  styledIcon
                >
                  <FiLinkedin className="h-4 w-4" />
                </SuperLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
