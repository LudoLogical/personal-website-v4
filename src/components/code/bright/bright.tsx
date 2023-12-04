import 'server-only';

import { Code } from 'bright';
import { type PropsWithChildren } from 'react';

export default function Bright(props: PropsWithChildren) {
  return (
    <Code
      className="my-4 flex !rounded-2xl [&>pre]:w-0 [&>pre]:flex-auto"
      {...props}
    />
  );
}
