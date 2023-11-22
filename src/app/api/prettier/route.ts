import { NextResponse, type NextRequest } from 'next/server';
import { z } from 'zod';
import prettier from 'prettier';
import babelPlugin from 'prettier/plugins/babel';
import estreePlugin from 'prettier/plugins/estree';

export const prettierRequest = z.object({ code: z.string() });

export const prettierResponse = z.object({ formattedCode: z.string() });

export async function POST(request: NextRequest) {
  return NextResponse.json({
    formattedCode: await prettier.format(
      prettierRequest.parse(await request.json()).code,
      {
        parser: 'babel',
        plugins: [babelPlugin, estreePlugin]
      }
    )
  });
}
