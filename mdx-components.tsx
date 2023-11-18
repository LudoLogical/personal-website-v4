import { type ReactNode } from 'react';
import type { MDXComponents } from 'mdx/types';
import SuperLink from '~/components/super-link';
import Hint from '~/components/hint';
import CorruptedText from '~/components/text/corrupted';
import WaveText from '~/components/text/wave';
import GlitchText from '~/components/text/glitch';
import ShakyText from '~/components/text/shaky';
import { HiArrowRight } from 'react-icons/hi2';

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
        <HiArrowRight className="m-0 mr-4 mt-px self-center text-[var(--tw-prose-counters)]" />
        {children}
      </li>
    ),
    ol: ({ children }: { children?: ReactNode }) => (
      <ol className="ml-0 pl-8 first:[&>li>svg]:hidden">{children}</ol>
    ),
    ul: ({ children }: { children?: ReactNode }) => (
      <ul className="ml-0 list-none pl-0 [&>li]:flex">{children}</ul>
    ),
    strong: ({ children }: { children?: ReactNode }) => (
      <strong className="font-bold text-primary">{children}</strong>
    ),
    Corrupted: CorruptedText,
    Glitch: GlitchText,
    Hint: Hint,
    Shaky: ShakyText,
    Wave: WaveText,
    ...components
  };
}
