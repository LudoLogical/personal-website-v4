import { type NextRequest, NextResponse } from 'next/server';
import prettier from 'prettier';
import babelPlugin from 'prettier/plugins/babel';
import estreePlugin from 'prettier/plugins/estree';
import { prettierRequest } from './types';

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
