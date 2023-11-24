import { type PropsWithChildren, type ReactNode } from 'react';
import type { MDXComponents } from 'mdx/types';
import { Code } from 'bright';
import {
  HiLightBulb,
  HiOutlineCheckCircle,
  HiOutlineExclamationTriangle,
  HiOutlineXCircle
} from 'react-icons/hi2';
import ArrowList from '~/components/arrow-list';
import SuperLink from '~/components/super-link';
import Sandbox from '~/components/code/sandbox';
import createCallout from '~/components/containers/callout';
import Collapse from '~/components/containers/collapse';
import Hint from '~/components/containers/hint';
import Quote from '~/components/containers/quote';
import CorruptedText from '~/components/text/corrupted';
import GlitchText from '~/components/text/glitch';
import ShakyText from '~/components/text/shaky';
import WaveText from '~/components/text/wave';
import { Terminal, TerminalLine } from '~/components/code/terminal';

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
    ol: ({ children }: { children?: ReactNode }) => (
      <ol className="ml-0 pl-8">{children}</ol>
    ),
    ul: ArrowList,
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
    Terminal: Terminal,
    Line: TerminalLine,
    ...components
  };
}
