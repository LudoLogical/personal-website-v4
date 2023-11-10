import Link from 'next/link';
import { type Ref, type ReactNode } from 'react';

export default function StyledLink({
  reference,
  href,
  children
}: {
  reference?: Ref<HTMLAnchorElement>;
  href: string;
  children?: ReactNode;
}) {
  return (
    <Link
      ref={reference ? reference : null}
      href={href}
      className="relative whitespace-nowrap font-bold text-secondary no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
    >
      {children}
    </Link>
  );
}
