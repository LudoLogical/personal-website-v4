import { type ReactNode } from 'react';
import type { MDXComponents } from 'mdx/types';
import SuperLink from '~/components/super-link';
import Hint from '~/components/hint';
import CorruptedText from '~/components/text/corrupted';
import WaveText from '~/components/text/wave';
import GlitchText from '~/components/text/glitch';

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
    strong: ({ children }: { children?: ReactNode }) => (
      <strong className="font-bold text-primary">{children}</strong>
    ),
    Corrupted: CorruptedText,
    Glitch: GlitchText,
    Hint: Hint,
    Wave: WaveText,
    ...components
  };
}
