import { z } from 'zod';

const slugString = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

export const Frontmatter = z
  .object({
    title: z.string(),
    slug: slugString,
    tags: slugString,
    intent: z.enum([
      'explain',
      'persuade',
      'question',
      'demonstrate',
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
    created: z.number(), // created, updated, and reviewed are UNIX timestamps
    updated: z.nullable(z.number()),
    reviewed: z.nullable(z.number()),
    draft: z.boolean() // publicly visible iff not true
  })
  .strict();

export const frontmatterData = {
  intent: {
    preamble: 'This blog post was written with the intent to ',
    explain: ' something to readers.',
    persuade: ' readers of something.',
    question: ' an established idea, practice, or convention.',
    showcase: ' something to readers.',
    highlight: '$call attention to something.'
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
