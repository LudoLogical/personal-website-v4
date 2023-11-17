'use client';

import { useState, useEffect, type ReactNode } from 'react';

const CHARACTERS =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890-=!@#$%^&*()_+[];\',./{}|:"<>?"';

const generateContent = (length: number) => {
  let output = '';
  for (let i = 0; i < length; i++) {
    output += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
  }
  return output;
};

export default function CorruptedText({
  length
}: {
  length: number;
  children?: ReactNode;
}) {
  const [content, setContent] = useState('?'.repeat(length));
  useEffect(() => {
    const interval = setInterval(() => setContent(generateContent(length)), 50);
    return () => clearInterval(interval);
  }, [length]);
  return (
    <span aria-hidden="true" className="whitespace-nowrap font-mono">
      <span className="motion-reduce:hidden">{content}</span>
      <span className="motion-safe:hidden">[REDACTED]</span>
    </span>
  );
}
