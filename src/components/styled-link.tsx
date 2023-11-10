import { forwardRef, type ReactNode } from 'react';
import Link from 'next/link';

const StyledLink = forwardRef<
  HTMLAnchorElement,
  {
    href: string;
    children?: ReactNode;
  }
>(function StyledLink({ href, children }, ref) {
  return (
    <Link
      ref={ref}
      href={href}
      className="relative whitespace-nowrap font-bold text-secondary no-underline after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-secondary after:transition-all hover:after:w-full"
    >
      {children}
    </Link>
  );
});

export default StyledLink;
