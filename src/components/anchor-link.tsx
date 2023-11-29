'use client';

import { useRouter } from 'next/navigation';
import { useRef, type ReactNode, useEffect, useState } from 'react';
import { Link as ScrollableLink } from 'react-scroll';
import { useScrollDirection } from 'react-use-scroll-direction';

export default function AnchorLink({
  to,
  children
}: {
  to: string;
  children?: ReactNode;
}) {
  const router = useRouter();
  const target = useRef<HTMLElement | null>(null);
  const [offset, setOffset] = useState<number>(-48);
  const { isScrollingY } = useScrollDirection();
  useEffect(() => {
    target.current = document.getElementById(to);
    setOffset(
      target.current && target.current.getBoundingClientRect().top >= 24
        ? -24
        : -112
    );
  }, [to, isScrollingY]);
  return (
    <ScrollableLink
      to={to}
      smooth="easeInOutCubic"
      duration={500}
      offset={offset}
      onClick={() => router.replace('#' + to, { scroll: false })}
    >
      {children}
    </ScrollableLink>
  );
}
