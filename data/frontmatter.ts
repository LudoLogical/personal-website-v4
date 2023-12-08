import {
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlineCheckBadge,
  HiOutlineCurrencyDollar,
  HiOutlineRocketLaunch,
  HiOutlineWrench
} from 'react-icons/hi2';
import { PiTarget } from 'react-icons/pi';
import { z } from 'zod';

export const Frontmatter = z
  .object({
    title: z.string(),
    subtitle: z.string(),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    tags: z.string(), // comma-separated list
    intent: z.enum([
      'explain',
      'persuade',
      'question',
      'showcase',
      'highlight'
    ]),
    stance: z.nullable(z.enum(['supporter', 'opponent', 'neutral'])),
    affiliation: z.nullable(
      z.enum(['affiliate', 'backer', 'compensated', 'gifted', 'unaffiliated'])
    ),
    audience: z.enum([
      'everyone',
      'new-developers',
      'web-developers',
      'developers',
      'gamers'
    ]),
    keywords: z.string(), // comma-separated list
    published: z.nullable(z.number()), // published, updated, and reviewed are UNIX timestamps
    updated: z.nullable(z.number()),
    reviewed: z.nullable(z.number()),
    draft: z.boolean() // publicly visible iff not true
  })
  .strict();

export const frontmatterText = {
  intent: {
    preamble: 'This blog post was written with the intent to ',
    explain: ' explain something to readers.',
    persuade: ' persuade readers of something.',
    question: ' question an established idea, practice, or convention.',
    showcase: ' showcase something to readers.',
    highlight: ' call attention to something.',
    conclusion: '',
    notApplicable:
      'You should never see this text. If you do, please let me know!'
  },
  stance: {
    preamble: 'The author ',
    supporter: 'agrees with',
    opponent: 'disagrees with',
    neutral: 'neither strongly agrees nor strongly disagrees with',
    conclusion:
      ' the divisive idea(s) and/or action(s) discussed in this blog post. You should consider reviewing alternative perspectives before coming to your own conclusions on the subject.',
    notApplicable:
      'This blog post does not contain discussion of any idea(s) or action(s) that the author believes are divisive.'
  },
  affiliation: {
    preamble: 'The author ',
    affiliate: 'is personally afiliated with',
    backer: 'is financially supporting',
    compensated: 'is being financially compensated by',
    gifted: 'has received one or more products and/or services for free from',
    conclusion:
      ' one or more entities discussed in this blog post. You should consider reviewing any relevant citations before fully trusting or discounting any claims that are made.',
    unaffiliated:
      'The author has no affiliation with any of the entities discussed in this blog post.',
    notApplicable: 'The author has no relevant affiliations to report.'
  }
};

export const frontmatterDateIcons = {
  published: HiOutlineRocketLaunch,
  updated: HiOutlineWrench,
  reviewed: HiOutlineCheckBadge
};

export const frontmatterDisclosureIcons = {
  intent: PiTarget,
  stance: HiOutlineChatBubbleOvalLeftEllipsis,
  affiliation: HiOutlineCurrencyDollar
};

export interface FrontmatterDate {
  type: keyof typeof frontmatterDateIcons;
  timestamp: number;
}
