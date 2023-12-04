import 'server-only';

import { Code } from 'bright';
import type { MDXComponents } from 'mdx/types';
import { type PropsWithChildren } from 'react';
import {
  HiLightBulb,
  HiOutlineCheckCircle,
  HiOutlineExclamationTriangle,
  HiOutlineXCircle
} from 'react-icons/hi2';
import BlogWrapper from '~/app/blog/helpers';
import ArrowList from '~/components/arrow-list';
import createCallout from '~/components/callout';
import Bright from '~/components/code/bright/bright';
import BrightGroup from '~/components/code/bright/group';
import Sandbox from '~/components/code/sandbox/sandbox';
import { Terminal, TerminalLine } from '~/components/code/terminal';
import LinkedHeading from '~/components/links/heading';
import SuperLink from '~/components/links/standard';
import Quote from '~/components/quote';
import ReadingTime from '~/components/reading-time';
import Collapse from '~/components/revealers/collapse';
import Hint from '~/components/revealers/hint';
import CorruptedText from '~/components/text/corrupted';
import GlitchText from '~/components/text/glitch';
import ShakyText from '~/components/text/shaky';
import WaveText from '~/components/text/wave';

Code.lineNumbers = true;
Code.theme = 'dracula';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props: PropsWithChildren) => (
      <SuperLink external styledText {...props} />
    ),
    em: (props: PropsWithChildren) => <em className="font-bold" {...props} />,
    h2: (props: PropsWithChildren) => <LinkedHeading As="h2" {...props} />,
    h3: (props: PropsWithChildren) => <LinkedHeading As="h3" {...props} />,
    h4: (props: PropsWithChildren) => <LinkedHeading As="h4" {...props} />,
    h5: (props: PropsWithChildren) => <LinkedHeading As="h5" {...props} />,
    h6: (props: PropsWithChildren) => <LinkedHeading As="h6" {...props} />,
    ul: ArrowList,
    pre: Bright,
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
    CodeGroup: BrightGroup,
    Sandbox: Sandbox,
    Terminal: Terminal,
    Line: TerminalLine,
    ReadingTime: ReadingTime,
    BlogWrapper: BlogWrapper,
    ...components
  };
}
