import clsx from 'clsx';
import Image from 'next/image';
import TransparentAvatar from 'public/avatar-transparent.png';

export default function Badvatar({ className }: { className?: string }) {
  return (
    <Image
      src={TransparentAvatar}
      alt="An upside-down version of Ludo's avatar. A minimalist portrait of a faceless Ludo wearing a black shirt with a yellow sparkle pin. The background is red and criss-crossed with a regular pattern of darker, horizontal lines."
      className={clsx(
        '-scale-y-100 bg-error bg-error-pattern bg-center',
        className
      )}
    />
  );
}
