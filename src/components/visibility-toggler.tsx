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
  isVisible: () => boolean;
  forceClose: () => void;
}

interface VisibilityTogglerProps {
  IconWhenHidden: IconType;
  IconWhenShown?: IconType;
  onClose?: () => void;
  className?: string;
  children: ReactNode;
}

const VisibilityToggler = forwardRef<
  VisibilityTogglerHandle,
  VisibilityTogglerProps
>(function VisibilityToggler(
  { IconWhenHidden, IconWhenShown, onClose, className, children },
  ref
) {
  const [visible, setVisible] = useState<boolean>(false);
  const checkbox = useRef<HTMLInputElement | null>(null);
  const forceClose = () => {
    if (checkbox.current) {
      checkbox.current.checked = false;
    }
    setVisible(false);
    onClose?.();
  };
  const container = useRef<HTMLDivElement | null>(null);
  useOutsideClick(container, forceClose);
  useImperativeHandle(ref, () => ({
    isVisible: () => visible,
    forceClose: forceClose
  }));
  return (
    <div ref={container}>
      <label className={clsx('btn btn-circle swap swap-rotate', className)}>
        <input
          ref={checkbox}
          type="checkbox"
          name="visibility-toggle"
          onChange={(event) => {
            setVisible(event.target.checked);
            if (!event.target.checked && onClose) {
              onClose();
            }
          }}
        />
        <IconWhenHidden className="swap-off h-6 w-6 fill-current" />
        {IconWhenShown ? (
          <IconWhenShown className="swap-on h-6 w-6 fill-current" />
        ) : (
          <HiXMark className="swap-on h-6 w-6 fill-current" />
        )}
      </label>
      {visible ? children : null}
    </div>
  );
});

export default VisibilityToggler;
