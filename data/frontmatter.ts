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
      'highlight'
    ]),
    disclosure: z.enum([
      'supporter',
      'opponent',
      'neutral',
      'affiliate',
      'backer',
      'compensated',
      'gifted',
      'unaffiliated'
    ]),
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
    draft: z.nullable(z.boolean()) // publicly visible iff not true
  })
  .strict();

export const frontmatterData = {
  intent: {
    preamble: 'This blog post was written with the intent to ',
    explain: ' something.',
    persuade: ' readers of something.',
    question: ' an established idea, practice, or convention.',
    highlight: '$call attention to something.'
  },
  disclosure: {
    preamble: 'The author ',
    supporter:
      'supports the idea(s) and/or action(s) discussed in this blog post. $stance',
    opponent:
      'disagrees with the idea(s) and/or action(s) discussed in this blog post. $stance',
    neutral:
      'neither strongly agrees nor strongly disagrees with the idea(s) and/or action(s) discussed in this blog post. $stance',
    stance:
      'You should consider reviewing alternative perspectives before coming to your own conclusions on the subject.',
    affiliate: 'is personally afiliated with $connection',
    backer: 'is financially supporting $connection',
    compensated: 'is being financially compensated by $connection',
    gifted:
      'has received one or more products and/or services for free from $connection',
    connection:
      'one or more entities discussed in this blog post. You should consider reviewing any relevant citations before trusting or discounting any claims that are made.',
    unaffiliated:
      'has no affiliation with any of the entities discussed in this blog post.'
  }
};
