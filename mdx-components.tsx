import { type ReactNode } from 'react';
import type { MDXComponents } from 'mdx/types';
import {
  HiArrowRight,
  HiLightBulb,
  HiOutlineCheckCircle,
  HiOutlineExclamationTriangle,
  HiOutlineXCircle
} from 'react-icons/hi2';
import SuperLink from '~/components/super-link';
import createCallout from '~/components/callout';
import CorruptedText from '~/components/text/corrupted';
import GlitchText from '~/components/text/glitch';
import Hint from '~/components/hint';
import ShakyText from '~/components/text/shaky';
import WaveText from '~/components/text/wave';

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
    strong: ({ children }: { children?: ReactNode }) => (
      <strong className="font-bold text-primary">{children}</strong>
    ),
    Notice: createCallout(HiLightBulb),
    Victory: createCallout(HiOutlineCheckCircle, 'alert-success'),
    Warning: createCallout(HiOutlineExclamationTriangle, 'alert-warning'),
    Problem: createCallout(HiOutlineXCircle, 'alert-error'),
    Corrupted: CorruptedText,
    Glitch: GlitchText,
    Hint: Hint,
    Shaky: ShakyText,
    Wave: WaveText,
    ...components
  };
}
