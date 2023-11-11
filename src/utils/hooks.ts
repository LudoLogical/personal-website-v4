'use client';

import { useEffect, type RefObject } from 'react';

export function useOutsideClick(ref: RefObject<Element>, callback: () => void) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }
    // Bind the event listener
    document.addEventListener('mouseup', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [ref, callback]);
}
