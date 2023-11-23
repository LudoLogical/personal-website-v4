import { type PropsWithChildren, type ReactNode } from 'react';
import type { MDXComponents } from 'mdx/types';
import { Code } from 'bright';
import {
  HiArrowRight,
  HiLightBulb,
  HiOutlineCheckCircle,
  HiOutlineExclamationTriangle,
  HiOutlineXCircle
} from 'react-icons/hi2';
import SuperLink from '~/components/helpers/super-link';
import Hint from '~/components/containers/hint';
import CorruptedText from '~/components/text/corrupted';
import GlitchText from '~/components/text/glitch';
import ShakyText from '~/components/text/shaky';
import WaveText from '~/components/text/wave';
import Quote from '~/components/containers/quote';
import createCallout from '~/components/containers/callout';
import Collapse from '~/components/containers/collapse';
import Sandbox from '~/components/code/sandbox';

Code.lineNumbers = true;
Code.theme = 'dracula';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children }: { href?: string; children?: ReactNode }) => (
      <SuperLink href={href!} external styledText>
        {children}
      </SuperLink>
    ),
    em: ({ children }: { children?: ReactNode }) => (
      <em className="font-bold">{children}</em>
    ),
    li: ({ children }: { children?: ReactNode }) => (
      <li>
        <HiArrowRight className="m-0 mr-4 mt-px h-4 w-4 self-center text-[var(--tw-prose-counters)]" />
        {children}
      </li>
    ),
    ol: ({ children }: { children?: ReactNode }) => (
      <ol className="ml-0 pl-8 first:[&>li>svg]:hidden">{children}</ol>
    ),
    ul: ({ children }: { children?: ReactNode }) => (
      <ul className="ml-0 list-none pl-0 [&>li]:flex">{children}</ul>
    ),
    pre: (props: PropsWithChildren) => (
      <Code
        className="my-4 flex !rounded-2xl [&>pre]:w-0 [&>pre]:flex-auto"
        {...props}
      />
    ),
    strong: ({ children }: { children?: ReactNode }) => (
      <strong className="font-bold text-primary">{children}</strong>
    ),
    Hint: Hint,
    Corrupted: CorruptedText,
    Glitch: GlitchText,
    Shaky: ShakyText,
    Wave: WaveText,
    Quote: Quote,
    Notice: createCallout(HiLightBulb),
    Victory: createCallout(HiOutlineCheckCircle, 'alert-success'),
    Warning: createCallout(HiOutlineExclamationTriangle, 'alert-warning'),
    Problem: createCallout(HiOutlineXCircle, 'alert-error'),
    Collapse: Collapse,
    Sandbox: Sandbox,
    ...components
  };
}
