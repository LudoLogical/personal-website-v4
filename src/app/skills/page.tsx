import clsx from 'clsx';
import skillsData from 'data/skills';
import SuperLink from '~/components/links/standard';

export const metadata = {
  title: 'Skills'
};

export default function Skills() {
  return (
    <div className="mx-auto mb-16 mt-12 flex max-w-2xl flex-col gap-16 p-4 text-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-primary">Skills</h1>
        <p>
          It feels weird to say, but I&apos;ve been making things with computers
          for almost a decade now! In that time, I&apos;ve tried out quite a lot
          of languages, tools, tasks, and techniques. I&apos;d consider myself
          at least conversant in all of the following:
        </p>
      </div>
      {skillsData.map((category) => (
        <div key={category.name} className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{category.name}</h2>
          <div className="flex flex-row flex-wrap justify-center gap-4">
            {category.entries.map((skill) =>
              skill.certification ? (
                <SuperLink
                  key={skill.skill}
                  href={skill.certification}
                  external
                  className={'badge badge-success p-4'}
                >
                  {skill.skill}
                </SuperLink>
              ) : (
                <span
                  key={skill.skill}
                  className={clsx(
                    'badge p-4',
                    skill.highlight ? 'badge-primary' : 'badge-ghost'
                  )}
                >
                  {skill.skill}
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
