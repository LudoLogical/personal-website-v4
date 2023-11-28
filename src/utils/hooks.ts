'use client';

import { useEffect, type RefObject, useState } from 'react';
import { useScrollDirection } from 'react-use-scroll-direction';

export function useOutsideClick(ref: RefObject<Element>, callback: () => void) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener('mouseup', handleClickOutside);
    return () => document.removeEventListener('mouseup', handleClickOutside);
  }, [ref, callback]);
}

export function useToggleOnScroll(initialState?: boolean) {
  const { isScrollingUp, isScrollingDown } = useScrollDirection();
  const [show, setShow] = useState<boolean>(initialState ?? true);
  useEffect(() => {
    if (!show) {
      if (isScrollingUp) {
        setShow(true);
      }
    } else {
      if (isScrollingDown) {
        setShow(false);
      }
    }
  }, [isScrollingUp, isScrollingDown, show]);
  return show;
}
