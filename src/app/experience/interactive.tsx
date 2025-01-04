'use client';

import clsx from 'clsx';
import experienceData from 'data/experience';
import { useRef, useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import {
  HiArrowTopRightOnSquare,
  HiChevronDown,
  HiChevronUp,
  HiCodeBracket,
  HiLink,
  HiXMark
} from 'react-icons/hi2';
import SuperLink from '~/components/links/standard';
import ActionlessModal from '~/components/revealers/actionless-modal';

export default function ExperienceInteractive() {
  const firstModalLink = useRef<HTMLAnchorElement | null>(null);
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-14">
      <ActionlessModal
        clickable={
          <SuperLink styledText>Looking for something else?</SuperLink>
        }
        title="Looking for something else?"
        firstLink={firstModalLink}
      >
        <div className="flex flex-col gap-2">
          <p>
            My{' '}
            <SuperLink href="/Resume.pdf" toFile external styledText>
              resume
            </SuperLink>{' '}
            summarizes the most important items on this list and what I learned
            from them.
          </p>
          <p>
            My{' '}
            <SuperLink href="/portfolio" styledText>
              portfolio
            </SuperLink>{' '}
            showcases media and other resources from some of my favorite
            projects, plus some of my design work.
          </p>
          <p>
            My{' '}
            <SuperLink href="" styledText>
              GitHub page
            </SuperLink>{' '}
            hosts many of my programming projects and some of my academic work.
          </p>
        </div>
      </ActionlessModal>
      <div className="mx-4 max-w-5xl overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Project</th>
              <th className="hidden sm:table-cell">Sponsor</th>
              <th className="hidden sm:table-cell">Skills Honed</th>
              <th className="px-1">
                <HiLink className="mx-auto h-3 w-3" />
              </th>
              <th className="px-1">
                <HiCodeBracket className="mx-auto h-3 w-3" />
              </th>
            </tr>
          </thead>
          <tbody>
            {experienceData.map((experience) => (
              <tr
                key={experience.title}
                className={clsx({ hidden: !experience.featured && !expanded })}
              >
                <td>{experience.year}</td>
                <td className="lg:whitespace-nowrap">{experience.title}</td>
                <td className="hidden sm:table-cell">
                  {experience.sponsor}
                  {!experience.sponsor && (
                    <p className="text-base-content/50">None</p>
                  )}
                </td>
                <td className="hidden sm:table-cell">
                  <div className="flex flex-row flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <span
                        key={experience.title + ': ' + skill}
                        className="badge badge-neutral"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="p-1 text-center">
                  {experience.link ? (
                    <SuperLink
                      href={experience.link}
                      external
                      styledIcon
                      className="btn-sm"
                    >
                      <HiArrowTopRightOnSquare className="h-4 w-4" />
                    </SuperLink>
                  ) : (
                    <HiXMark className="mx-auto h-4 w-4 text-base-content/20" />
                  )}
                </td>
                <td className="p-1 text-center">
                  {experience.github ? (
                    <SuperLink
                      href={experience.github}
                      external
                      styledIcon
                      className="btn-sm"
                    >
                      <FiGithub className="h-4 w-4" />
                    </SuperLink>
                  ) : (
                    <HiXMark className="mx-auto h-4 w-4 text-base-content/20" />
                  )}
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={6}>
                <div className="flex justify-center">
                  <button
                    className="btn btn-ghost"
                    onClick={() => setExpanded(!expanded)}
                  >
                    Show {expanded ? 'less' : 'more'}
                    {expanded ? (
                      <HiChevronUp className="h-4 w-4" />
                    ) : (
                      <HiChevronDown className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
