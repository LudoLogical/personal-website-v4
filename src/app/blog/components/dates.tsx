'use client';

import clsx from 'clsx';
import {
  getSortedDates,
  type DateType,
  type Frontmatter
} from 'data/frontmatter';
import { useRef, useState } from 'react';
import {
  HiOutlineCheckBadge,
  HiOutlineChevronDown,
  HiOutlineEllipsisHorizontalCircle,
  HiOutlineRocketLaunch,
  HiOutlineWrench
} from 'react-icons/hi2';
import { dateFromTimestamp } from '~/utils/dates';
import { useOutsideClick } from '~/utils/hooks';

const dateIcons = {
  published: HiOutlineRocketLaunch,
  updated: HiOutlineWrench,
  reviewed: HiOutlineCheckBadge
};

function DateElement({
  type,
  timestamp,
  hidden
}: {
  type?: DateType;
  timestamp?: number;
  hidden?: boolean;
}) {
  const Icon = type ? dateIcons[type] : HiOutlineEllipsisHorizontalCircle;
  return (
    <div
      className={clsx(
        'flex flex-nowrap items-center gap-2 py-0.5',
        hidden ? 'hidden' : null
      )}
    >
      <Icon
        title={type ? type.charAt(0).toUpperCase() + type.slice(1) : undefined}
        className="h-5 w-5 shrink-0"
      />
      <span className="whitespace-nowrap">
        {timestamp ? dateFromTimestamp(timestamp) : 'Not published yet'}
      </span>
    </div>
  );
}

export default function DatesElement({
  frontmatter
}: {
  frontmatter: Frontmatter;
}) {
  const dates = getSortedDates(frontmatter);
  const [expanded, setExpanded] = useState<boolean>(false);
  const datesElement = useRef<HTMLDivElement | null>(null);
  useOutsideClick([datesElement], () => setExpanded(false));
  return (
    <div ref={datesElement} className="relative">
      {dates.length > 0 ? (
        <div className="flex flex-nowrap items-center gap-2">
          <DateElement type={dates[0]!.type} timestamp={dates[0]!.timestamp} />
          <div
            className={clsx(
              'absolute -left-3 -top-2 transition-opacity',
              expanded
                ? 'pointer-events-auto opacity-100'
                : 'pointer-events-none opacity-0'
            )}
          >
            <div className="flex flex-col flex-nowrap items-start rounded-box bg-neutral py-2 pl-3 pr-12">
              {dates.map((date) => (
                <DateElement
                  key={date.type}
                  type={date.type}
                  timestamp={date.timestamp}
                />
              ))}
            </div>
          </div>
          <div className="absolute left-full ml-2">
            <button
              onMouseDown={() => setExpanded(!expanded)}
              className="btn btn-circle h-8 min-h-0 w-8"
            >
              <HiOutlineChevronDown
                className={clsx(
                  'transition-transform',
                  expanded ? 'rotate-180' : null
                )}
              />
            </button>
          </div>
        </div>
      ) : (
        <DateElement />
      )}
    </div>
  );
}
