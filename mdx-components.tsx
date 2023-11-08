import { type ReactNode } from 'react';
import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children }: { href?: string; children?: ReactNode }) => (
      <Link
        href={href!}
        className="relative font-bold text-secondary no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
      >
        {children}
      </Link>
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
