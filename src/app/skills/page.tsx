import Link from 'next/link';
import clsx from 'clsx';

const skillsData: (string | (string | boolean)[][])[][] = [
  [
    'Languages, Frameworks, and Formats',
    [
      ['React', true],
      ['Next.js', true],
      ['MDX', false],
      ['TypeScript', true],
      ['JavaScript', true],
      ['CSS', false],
      ['HTML', false],
      ['jQuery', false],
      ['Java', true],
      ['Kotlin', false],
      ['Node.js', false],
      ['Python', false],
      ['C++', false],
      ['SQL', false],
      ['Bash', false],
      ['Markdown', false],
      ['CSV', false],
      ['LaTeX', false]
    ]
  ],
  [
    'Editors, Tools, and Technologies',
    [
      ['IntelliJ IDEA', true],
      ['WebStorm', false],
      ['PyCharm', false],
      ['CLion', false],
      ['DataGrip', false],
      ['Figma', true],
      ['Visual Studio Code', true],
      ['Eclipse', false],
      ['Nano', false],
      ['Vim', false],
      ['SSH', false],
      ['AWS', false],
      ['Postman', false],
      ['Insomnia', false],
      ['MySQL', false],
      ['PostgreSQL', false],
      ['tRPC', false],
      ['Tailwind CSS', true],
      ['styled-components', false],
      ['Jest', false],
      ['React Testing Library', false],
      ['ESLint', false],
      ['Prettier', false],
      ['npm', false],
      ['Yarn', false],
      ['pnpm', true],
      ['Git', true],
      ['GitHub', true],
      ['Jira', false],
      ['Notion', true],
      ['Confluence', false],
      ['Slack', false],
      ['Discord', true],
      ['Microsoft 365', false],
      ['Google Workspace', false]
    ]
  ],
  [
    'Techniques and Soft Skills',
    [
      ['Design', true],
      ['Diagramming', true],
      ['Problem Solving', true],
      ['Modularization (DRY)', false],
      ['Debugging', false],
      ['Testing', false],
      ['Agile', false],
      ['Documentation', true],
      ['Mentorship', true],
      ['Communication', false],
      [
        'Spanish (CA Seal of Biliteracy)',
        'https://www.cde.ca.gov/sp/el/er/sealofbiliteracy.asp'
      ]
    ]
  ]
];

export default function Work() {
  return (
    <div className="mx-auto my-16 flex max-w-2xl flex-col gap-16 p-4 text-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-primary">Skills</h1>
        <p>
          It feels weird to say, but I&apos;ve been making things with computers
          for almost a decade now! In that time, I&apos;ve tried out a lot of
          languages, tools, tasks, and techniques. I&apos;d consider myself at
          least conversant in all of the following:
        </p>
      </div>
      {skillsData.map((category) => (
        <div key={category[0] as string} className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{category[0]}</h2>
          <div className="flex flex-row flex-wrap justify-center gap-4">
            {(category[1] as (string | boolean)[][]).map((skill) =>
              typeof skill[1] === 'string' ? (
                <Link
                  key={skill[0] as string}
                  href={skill[1]}
                  className={clsx('badge badge-success p-4')}
                >
                  {skill[0]}
                </Link>
              ) : (
                <span
                  key={skill[0] as string}
                  className={clsx('badge p-4', { 'badge-primary': skill[1] })}
                >
                  {skill[0]}
                </span>
              )
            )}
          </div>
        </div>
      ))}
      <div className="my-8 flex flex-col gap-2">
        <p>
          <span className="badge badge-primary mr-1 p-4">Yellow</span> indicates
          especially high proficiency
        </p>
        <p>
          <span className="badge badge-success mr-1 p-4">Green</span> (link)
          indicates certification
        </p>
      </div>
    </div>
  );
}
