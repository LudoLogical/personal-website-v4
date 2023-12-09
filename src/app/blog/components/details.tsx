'use client';

import clsx from 'clsx';
import { DateType, DisclosureType, type Frontmatter } from 'data/frontmatter';
import { type ReadingTime } from 'data/reading-time';
import { useState } from 'react';
import {
  HiOutlineClock,
  HiOutlineEllipsisHorizontal,
  HiOutlineInformationCircle,
  HiOutlineXMark
} from 'react-icons/hi2';
import DateDisplay from './date';
import DisclosureDisplay from './disclosure';

export default function InteractiveMetadata({
  frontmatter,
  readingTime
}: {
  frontmatter: Frontmatter;
  readingTime: ReadingTime;
}) {
  const [datesExpanded, setDatesExpanded] = useState<boolean>(false);
  const [disclosuresExpanded, setDisclosuresExpanded] =
    useState<boolean>(false);
  const dates = DateType.options
    .filter((member) => frontmatter[member] !== null)
    .sort((a, b) => frontmatter[b]! - frontmatter[a]!)
    .map((member) => ({
      type: member,
      timestamp: frontmatter[member]!
    }));
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
            dates.map((date, index) => (
              <DateDisplay
                key={date.type}
                date={date}
                expanded={datesExpanded}
                onToggleClick={
                  index === 0
                    ? () => setDatesExpanded(!datesExpanded)
                    : undefined
                }
              />
            ))
          ) : (
            <DateDisplay />
          )}
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
          {DisclosureType.options.map((disclosureType) => (
            <DisclosureDisplay
              key={disclosureType}
              frontmatter={frontmatter}
              disclosureType={disclosureType}
            />
          ))}
        </div>
      )}
    </>
  );
}
