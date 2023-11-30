'use client';

import { useRouter } from 'next/navigation';
import { useRef, type ReactNode, useEffect, useState } from 'react';
import { Link as ScrollableLink } from 'react-scroll';
import { useScrollDirection } from 'react-use-scroll-direction';

const EPSILON = 1;
const UNDERSCROLL_WITHOUT_HEADER = 24;
const UNDERSCROLL_WITH_HEADER = 112;

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
    const now = document.getElementById(to);
    if (now) {
      if (now.getBoundingClientRect().top > UNDERSCROLL_WITH_HEADER + EPSILON) {
        // scrolling down
        setOffset(-UNDERSCROLL_WITHOUT_HEADER);
      } else if (
        now.getBoundingClientRect().top <
        UNDERSCROLL_WITHOUT_HEADER - EPSILON
      ) {
        // scrolling up
        setOffset(-UNDERSCROLL_WITH_HEADER);
      }
      target.current = now;
    }
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
