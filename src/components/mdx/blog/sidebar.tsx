'use client';

import { type ReactNode } from 'react';

export default function Sidebar({ children }: { children: ReactNode }) {
  return <nav className="sticky top-12 h-fit">{children}</nav>;
}
