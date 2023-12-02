import 'server-only';

import { type PropsWithChildren } from 'react';
import type { MDXComponents } from 'mdx/types';
import { Code } from 'bright';
import {
  HiLightBulb,
  HiOutlineCheckCircle,
  HiOutlineExclamationTriangle,
  HiOutlineXCircle
} from 'react-icons/hi2';
import ArrowList from '~/components/arrow-list';
import SuperLink from '~/components/links/standard';
import Sandbox from '~/components/code/sandbox';
import { Terminal, TerminalLine } from '~/components/code/terminal';
import createCallout from '~/components/containers/callout';
import Collapse from '~/components/containers/collapse';
import Hint from '~/components/containers/hint';
import Quote from '~/components/containers/quote';
import CorruptedText from '~/components/text/corrupted';
import GlitchText from '~/components/text/glitch';
import ShakyText from '~/components/text/shaky';
import WaveText from '~/components/text/wave';
import BlogWrapper from './blog/wrapper';

Code.lineNumbers = true;
Code.theme = 'dracula';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props: PropsWithChildren) => (
      <SuperLink external styledText {...props} />
    ),
    em: (props: PropsWithChildren) => <em className="font-bold" {...props} />,
    ul: ArrowList,
    pre: (props: PropsWithChildren) => (
      <Code
        className="my-4 flex !rounded-2xl [&>pre]:w-0 [&>pre]:flex-auto"
        {...props}
      />
    ),
    strong: (props: PropsWithChildren) => (
      <strong className="font-bold text-primary" {...props} />
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
    Content: (props: PropsWithChildren) => (
      <article
        className="prose [&>h2]:scroll-mt-12 [&>p>code]:rounded [&>p>code]:bg-neutral [&>p>code]:px-1.5"
        {...props}
      />
    ),
    BlogWrapper: BlogWrapper,
    ...components
  };
}
