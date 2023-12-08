'use client';

import clsx from 'clsx';
import {
  frontmatterDateIcons,
  frontmatterDisclosureIcons,
  frontmatterText,
  type Frontmatter,
  type FrontmatterDate
} from 'data/frontmatter';
import { type ReadingTime } from 'data/reading-time';
import { useState } from 'react';
import {
  HiMiniChevronDown,
  HiOutlineClock,
  HiOutlineEllipsisHorizontal,
  HiOutlineEllipsisHorizontalCircle,
  HiOutlineInformationCircle,
  HiOutlineXMark
} from 'react-icons/hi2';
import { type z } from 'zod';

function DateDisplay({
  date,
  expanded,
  onToggleClick
}: {
  date?: FrontmatterDate;
  expanded?: boolean;
  onToggleClick?: () => void;
}) {
  const Icon = date
    ? frontmatterDateIcons[date.type]
    : HiOutlineEllipsisHorizontalCircle;
  return (
    <div className="flex h-7 flex-nowrap items-center gap-2">
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

function DisclosureDisplay({
  frontmatter,
  disclosureType
}: {
  frontmatter: z.infer<typeof Frontmatter>;
  disclosureType: keyof typeof frontmatterDisclosureIcons;
}) {
  const Icon = frontmatterDisclosureIcons[disclosureType];
  const disclosureValue = frontmatter[disclosureType];
  const phrases = frontmatterText[disclosureType];
  return (
    <div className="flex flex-nowrap gap-2">
      <Icon
        title={disclosureType.charAt(0).toUpperCase() + disclosureType.slice(1)}
        className="mt-1 h-5 w-5 shrink-0"
      />
      <span>
        {disclosureValue
          ? phrases.preamble +
            phrases[disclosureValue as keyof typeof phrases] +
            phrases.conclusion
          : phrases.notApplicable}
      </span>
    </div>
  );
}

export default function InteractiveMetadata({
  frontmatter,
  readingTime
}: {
  frontmatter: z.infer<typeof Frontmatter>;
  readingTime: z.infer<typeof ReadingTime>;
}) {
  const [datesExpanded, setDatesExpanded] = useState<boolean>(false);
  const [disclosuresExpanded, setDisclosuresExpanded] =
    useState<boolean>(false);
  const dates = (
    Object.keys(frontmatter).filter((member) =>
      Object.keys(frontmatterDateIcons).includes(member)
    ) as FrontmatterDate['type'][]
  )
    .filter((member) => frontmatter[member] !== null)
    .sort((a, b) => frontmatter[b]! - frontmatter[a]!)
    .map((member) => ({
      type: member,
      timestamp: frontmatter[member]
    })) as FrontmatterDate[];
  return (
    <>
      <div className="flex flex-wrap items-start gap-y-2">
        <div className="flex flex-nowrap items-center gap-2">
          <HiOutlineClock className="h-5 w-5 shrink-0" />
          <span className="whitespace-nowrap">
            {Math.ceil(readingTime.minutes)} minutes
          </span>
        </div>
        <div className="basis-full nav:divider nav:divider-horizontal nav:basis-auto" />
        <div className="flex flex-col gap-2">
          {dates.length > 0 ? (
            <DateDisplay
              date={dates[0]}
              expanded={datesExpanded}
              onToggleClick={() => setDatesExpanded(!datesExpanded)}
            />
          ) : (
            <DateDisplay />
          )}
          {dates.length > 1 &&
            datesExpanded &&
            dates
              .slice(1)
              .map((date) => <DateDisplay key={date.type} date={date} />)}
        </div>
        <div className="basis-full nav:divider nav:divider-horizontal nav:basis-auto" />
        <div className="flex flex-nowrap items-center gap-2">
          <HiOutlineInformationCircle className="h-5 w-5 shrink-0" />
          <span className="whitespace-nowrap">
            {frontmatter.stance
              ? frontmatter.affiliation
                ? 'Partisan'
                : 'Opinionated'
              : frontmatter.affiliation
                ? 'Affiliated'
                : 'Impartial'}
          </span>
          <button
            onClick={() => setDisclosuresExpanded(!disclosuresExpanded)}
            className={clsx(
              'btn btn-circle swap h-8 min-h-0 w-8',
              disclosuresExpanded ? 'swap-active' : null
            )}
          >
            <HiOutlineEllipsisHorizontal className="swap-off" />
            <HiOutlineXMark className="swap-on" />
          </button>
        </div>
      </div>
      {disclosuresExpanded && (
        <div className="flex flex-col gap-2 text-base-content/50">
          {Object.keys(frontmatterDisclosureIcons).map((disclosureType) => (
            <DisclosureDisplay
              key={disclosureType}
              frontmatter={frontmatter}
              disclosureType={
                disclosureType as keyof typeof frontmatterDisclosureIcons
              }
            />
          ))}
        </div>
      )}
    </>
  );
}
