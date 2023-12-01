'use client';

import {
  forwardRef,
  useState,
  useRef,
  useImperativeHandle,
  type ReactNode
} from 'react';
import { type IconType } from 'react-icons';
import clsx from 'clsx';
import { HiXMark } from 'react-icons/hi2';
import { useOutsideClick } from '~/utils/hooks';

export interface VisibilityTogglerHandle {
  forceClose: () => void;
}

interface VisibilityTogglerProps {
  IconWhenHidden: IconType;
  IconWhenShown?: IconType;
  onClose?: () => void;
  buttonClass?: string;
  className?: string;
  children: ReactNode;
}

const VisibilityToggler = forwardRef<
  VisibilityTogglerHandle,
  VisibilityTogglerProps
>(function VisibilityToggler(
  { IconWhenHidden, IconWhenShown, buttonClass, className, children },
  ref
) {
  const [visible, setVisible] = useState<boolean>(false);
  const checkbox = useRef<HTMLInputElement | null>(null);
  const forceClose = () => {
    if (checkbox.current) {
      checkbox.current.checked = false;
    }
    setVisible(false);
  };
  const toggle = useRef<HTMLLabelElement | null>(null);
  const content = useRef<HTMLDivElement | null>(null);
  useOutsideClick([toggle, content], forceClose);
  useImperativeHandle(ref, () => ({
    forceClose: forceClose
  }));
  return (
    <>
      <label
        ref={toggle}
        className={clsx('btn btn-circle swap swap-rotate', buttonClass)}
      >
        <input
          ref={checkbox}
          type="checkbox"
          name="visibility-toggle"
          onChange={(event) => setVisible(event.target.checked)}
        />
        <IconWhenHidden className="swap-off h-6 w-6 fill-current" />
        {IconWhenShown ? (
          <IconWhenShown className="swap-on h-6 w-6 fill-current" />
        ) : (
          <HiXMark className="swap-on h-6 w-6 fill-current" />
        )}
      </label>
      <div
        ref={content}
        className={clsx(
          'transition-opacity duration-300',
          className,
          visible
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        )}
      >
        {children}
      </div>
    </>
  );
});

export default VisibilityToggler;
