import Link from 'next/link';
import { HiEnvelope } from 'react-icons/hi2';
import { FiLinkedin } from 'react-icons/fi';
import { BiLogoDiscordAlt } from 'react-icons/bi';
import { ThreadsButton } from '../dialogs';

export default function Contact() {
  return (
    <div className="mx-auto mb-12 mt-6 flex max-w-xl flex-col gap-4 p-4 text-center">
      <h1 className="text-4xl font-bold text-primary">Contact</h1>
      <p>
        Whether you want to discuss an opportunity, ask a question, or just say
        hi, now is the perfect time to reach out! I&apos;ll do my best to get
        back to you as soon as possible.
      </p>
      <div className="mt-4 flex flex-col items-center gap-8">
        <div className="indicator">
          <span className="badge indicator-item badge-primary">Fastest</span>
          <Link
            href="https://discordapp.com/users/355536854176497668"
            className="btn w-fit"
          >
            <BiLogoDiscordAlt className="h-4 w-4" />
            @ludological
          </Link>
        </div>
        <div className="indicator">
          <span className="badge indicator-item badge-primary">Fast</span>
          <Link href="mailto:hello@danieldeanda.com" className="btn w-fit">
            <HiEnvelope className="h-4 w-4" />
            hello@danieldeanda.com
          </Link>
        </div>
        <Link
          href="https://www.linkedin.com/in/danielchristiandeanda/"
          className="btn w-fit"
        >
          <FiLinkedin className="h-4 w-4" />
          /in/danielchristiandeanda/
        </Link>
        <ThreadsButton />
      </div>
    </div>
  );
}
