import clsx from 'clsx';
import { type DateType } from 'data/frontmatter';
import {
  HiMiniChevronDown,
  HiOutlineCheckBadge,
  HiOutlineEllipsisHorizontalCircle,
  HiOutlineRocketLaunch,
  HiOutlineWrench
} from 'react-icons/hi2';

const dateIcons = {
  published: HiOutlineRocketLaunch,
  updated: HiOutlineWrench,
  reviewed: HiOutlineCheckBadge
};

export default function DateDisplay({
  date,
  expanded,
  onToggleClick
}: {
  date?: {
    type: DateType;
    timestamp: number;
  };
  expanded?: boolean;
  onToggleClick?: () => void;
}) {
  const Icon = date ? dateIcons[date.type] : HiOutlineEllipsisHorizontalCircle;
  return (
    <div
      className={clsx(
        'flex h-7 flex-nowrap items-center gap-2',
        !onToggleClick && !expanded ? 'hidden' : null
      )}
    >
      <Icon
        title={
          date
            ? date.type.charAt(0).toUpperCase() + date.type.slice(1)
            : undefined
        }
        className="h-5 w-5 shrink-0"
      />
      <span className="whitespace-nowrap">
        {date
          ? new Date(date.timestamp).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })
          : 'Not published yet'}
      </span>
      {onToggleClick && (
        <button
          onClick={onToggleClick}
          className="btn btn-circle h-8 min-h-0 w-8"
        >
          <HiMiniChevronDown
            className={clsx(
              'transition-transform',
              expanded ? 'rotate-180' : null
            )}
          />
        </button>
      )}
    </div>
  );
}
