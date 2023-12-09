import { z } from 'zod';

// All dates are UNIX timestamps
export const Dates = z.object({
  published: z.nullable(z.number()),
  updated: z.nullable(z.number()),
  reviewed: z.nullable(z.number())
});
export type Dates = z.infer<typeof Dates>;
export const DateType = Dates.keyof();
export type DateType = z.infer<typeof DateType>;

export const IntentText = z.object({
  explain: z.string(),
  persuade: z.string(),
  question: z.string(),
  showcase: z.string(),
  highlight: z.string()
});
export const Intent = IntentText.keyof();
export type Intent = z.infer<typeof Intent>;

export const StanceText = z.object({
  supporter: z.string(),
  opponent: z.string(),
  neutral: z.string()
});
export const Stance = StanceText.keyof();
export type Stance = z.infer<typeof Stance>;

export const AffiliationText = z.object({
  affiliate: z.string(),
  backer: z.string(),
  compensated: z.string(),
  gifted: z.string(),
  unaffiliated: z.string()
});
export const Affiliation = AffiliationText.keyof();
export type Affiliation = z.infer<typeof Affiliation>;

export const ExtraDisclosuresText = z.object({
  preamble: z.string(),
  conclusion: z.string(),
  notApplicable: z.string()
});
export type ExtraDisclosuresText = z.infer<typeof ExtraDisclosuresText>;

export const Disclosures = z.object({
  intent: Intent,
  stance: z.nullable(Stance),
  affiliation: z.nullable(Affiliation)
});
export type Disclosures = z.infer<typeof Disclosures>;
export const DisclosureType = Disclosures.keyof();
export type DisclosureType = z.infer<typeof DisclosureType>;

export const DisclosuresText = z.object({
  intent: IntentText.merge(ExtraDisclosuresText),
  stance: StanceText.merge(ExtraDisclosuresText),
  affiliation: AffiliationText.merge(ExtraDisclosuresText)
});
export type DisclosuresText = z.infer<typeof DisclosuresText>;

export const Audience = z.enum([
  'everyone',
  'new-developers',
  'web-developers',
  'developers',
  'gamers'
]);
export type Audience = z.infer<typeof Audience>;

export const Frontmatter = z
  .object({
    title: z.string(),
    subtitle: z.string(),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    tags: z.string(), // comma-separated list
    keywords: z.string(), // comma-separated list
    draft: z.boolean() // publicly visible iff not true
  })
  .merge(Dates)
  .merge(Disclosures)
  .extend({ audience: Audience })
  .strict();
export type Frontmatter = z.infer<typeof Frontmatter>;

export const disclosuresText: DisclosuresText = {
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
