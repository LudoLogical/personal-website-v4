import { z } from 'zod';

export const prettierRequest = z.object({ code: z.string() });
export const prettierResponsee = z.object({ formattedCode: z.string() });
