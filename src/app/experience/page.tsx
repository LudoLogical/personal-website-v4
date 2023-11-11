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

class ExperienceEntry {
  year: number;
  title: string;
  sponsor: string | null;
  skills: string[];
  link: string | null;
  github: string | null;
  featured: boolean;
  constructor(
    year: number,
    title: string,
    sponsor: string | null,
    skills: string[],
    link: string | null,
    github: string | null,
    featured?: boolean
  ) {
    this.year = year;
    this.title = title;
    this.sponsor = sponsor;
    this.skills = skills;
    this.link = link;
    this.github = github;
    this.featured = featured ?? false;
  }
}

const experienceData = [
  new ExperienceEntry(
    2023,
    'Personal Website v4',
    null,
    ['Next.js', 'React', 'TypeScript', 'MDX', 'Figma'],
    '/',
    'https://github.com/LudoLogical/personal-website-v4',
    true
  ),
  new ExperienceEntry(
    2023,
    'Integrated Development Advisor',
    'CodeDay Labs',
    ['Mentorship', 'Debugging', 'Terminal', 'Git', 'GitHub', 'NPM'],
    'https://labs.codeday.org/',
    null,
    true
  ),
  new ExperienceEntry(
    2023,
    'Personal Website v3',
    null,
    ['Next.js', 'React', 'TypeScript'],
    null,
    'https://github.com/LudoLogical/personal-website-v3'
  ),
  new ExperienceEntry(
    2023,
    'Nebula Platform',
    'Nebula Labs',
    ['Next.js', 'React', 'TypeScript', 'Figma', 'tRPC', 'GitHub', 'Vercel'],
    null,
    'https://github.com/UTDNebula/platform',
    true
  ),
  new ExperienceEntry(
    2023,
    'Personal Website v2',
    null,
    ['Next.js', 'React', 'TypeScript'],
    null,
    'https://github.com/LudoLogical/personal-website-v2'
  ),
  new ExperienceEntry(
    2022,
    'Project Owl (On\xa0Hiatus)',
    null,
    ['Next.js', 'React', 'TypeScript'],
    'https://project-owl.fly.dev/',
    'https://github.com/LudoLogical/project-owl'
  ),
  new ExperienceEntry(
    2022,
    'Features for Decision Tree',
    'Cvent',
    ['Java', 'PostgreSQL', 'React', 'TypeScript', 'Jira', 'Communication'],
    'https://www.cvent.com/en/portals-scope',
    null,
    true
  ),
  new ExperienceEntry(
    2021,
    'Package Tracking Page',
    'Onfleet',
    ['React', 'JavaScript', 'GitHub', 'SSH'],
    'https://onfleet.com/blog/last-mile-carrier-tracking/',
    null,
    true
  ),
  new ExperienceEntry(
    2021,
    'Organization Website',
    'Novis A Cappella',
    ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    'https://novisutd.org/',
    'https://github.com/NovisACappella/novisacappella.github.io'
  ),
  new ExperienceEntry(
    2020,
    'Personal Website v1',
    null,
    ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    null,
    'https://github.com/LudoLogical/personal-website-v1'
  ),
  new ExperienceEntry(
    2020,
    'University Student Network Study',
    'UT Dallas',
    ['Python', 'GitHub', 'UNIX', 'SSH'],
    'https://arxiv.org/abs/2104.01261',
    null,
    true
  ),
  new ExperienceEntry(
    2020,
    'Phage Game',
    'CodeDay',
    ['Java', 'Processing 3'],
    null,
    'https://github.com/LudoLogical/huevo-juego'
  ),
  new ExperienceEntry(
    2019,
    'Huevo Juego',
    'CodeDay',
    ['Java', 'Processing 3'],
    null,
    'https://github.com/LudoLogical/huevo-juego'
  ),
  new ExperienceEntry(
    2018,
    'Pinball Game',
    'CodeDay',
    ['Python', 'PyGame', 'PyInstaller'],
    null,
    'https://github.com/LudoLogical/pinball-game'
  ),
  new ExperienceEntry(
    2018,
    'Chef Spud',
    'CodeDay',
    ['Python', 'PyGame', 'PyInstaller'],
    null,
    'https://github.com/LudoLogical/roguelike-game'
  ),
  new ExperienceEntry(
    2018,
    'In\xa0Construction',
    'CodeDay',
    ['Python', 'PyGame', 'PyInstaller'],
    null,
    'https://github.com/LudoLogical/in-construction'
  ),
  new ExperienceEntry(
    2017,
    'Quotemaker',
    'CodeDay',
    ['HTML', 'CSS', 'JavaScript'],
    'https://jcwang111.github.io/quotemaker',
    'https://github.com/jcwang111/quotemaker'
  ),
  new ExperienceEntry(
    2017,
    'Super Hyper Buff',
    'CodeDay',
    ['HTML', 'CSS', 'JavaScript'],
    null,
    'https://github.com/LudoLogical/superhyperbuff'
  ),
  new ExperienceEntry(
    2016,
    'With These Eyes',
    'CodeDay',
    ['HTML', 'CSS', 'JavaScript'],
    null,
    'https://github.com/LudoLogical/with-these-eyes'
  ),
  new ExperienceEntry(
    2015,
    'You Sea, You Eat',
    'CodeDay',
    ['HTML', 'CSS', 'JavaScript'],
    null,
    'https://github.com/LudoLogical/you-sea-you-eat'
  )
];

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
              <th>
                <HiLink className="mx-auto h-3 w-3" />
              </th>
              <th>
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
                <td>
                  {experience.link ? (
                    <Link href={experience.link}>
                      <HiArrowTopRightOnSquare className="mx-auto h-4 w-4" />
                    </Link>
                  ) : (
                    <HiXMark className="mx-auto h-4 w-4 text-base-content/20" />
                  )}
                </td>
                <td>
                  {experience.github ? (
                    <Link href={experience.github}>
                      <FiGithub className="mx-auto h-4 w-4" />
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
