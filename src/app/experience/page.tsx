'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';
import {
  HiArrowTopRightOnSquare,
  HiChevronDown,
  HiChevronUp,
  HiCodeBracket,
  HiLink,
  HiXMark
} from 'react-icons/hi2';
import clsx from 'clsx';
import experienceData from 'data/experience';

export default function Experience() {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div className="mx-auto mb-16 mt-12 flex flex-col items-center gap-14 p-4 text-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-primary">Experience</h1>
        <p className="max-w-2xl">
          In my nine years of making software, I&apos;ve worked on plenty of
          personal projects, collaborated with over a dozen development teams,
          and written code for multiple commercial applications. I&apos;ve also
          applied my love of software engineering to teach others about the
          field that I love. Here&apos;s a list of some of my more notable
          endeavors:
        </p>
      </div>
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
                    <Link
                      href={experience.link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="btn btn-circle btn-ghost btn-sm"
                    >
                      <HiArrowTopRightOnSquare className="h-4 w-4" />
                    </Link>
                  ) : (
                    <HiXMark className="mx-auto h-4 w-4 text-base-content/20" />
                  )}
                </td>
                <td className="p-1 text-center">
                  {experience.github ? (
                    <Link
                      href={experience.github}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="btn btn-circle btn-ghost btn-sm"
                    >
                      <FiGithub className="h-4 w-4" />
                    </Link>
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
