import { type ReactNode } from 'react';
import type { MDXComponents } from 'mdx/types';
import SuperLink from '~/components/super-link';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children }: { href?: string; children?: ReactNode }) => (
      <SuperLink href={href!} external styledText>
        {children}
      </SuperLink>
    ),
    strong: ({ children }: { children?: ReactNode }) => (
      <strong className="font-extrabold text-primary">{children}</strong>
    ),
    Hint: ({ children }: { children: ReactNode }) => (
      <span
        className="badge badge-primary badge-lg tooltip"
        data-tip={children}
      >
        <span className="text-primary-content">?</span>
      </span>
    ),
    ...components
  };
}
