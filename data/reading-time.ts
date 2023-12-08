import { z } from 'zod';

export const ReadingTime = z.object({
  text: z.string(),
  minutes: z.number().positive(),
  time: z.number().int().positive(),
  words: z.number().int().positive()
});
