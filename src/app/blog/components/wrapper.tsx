import { Frontmatter } from 'data/frontmatter';
import { ReadingTime } from 'data/reading-time';
import { extractSubheadingData } from 'data/subheadings';
import { type ReactNode } from 'react';
import InteractiveMetadata from './metadata';
import Sidebar from './sidebar';

export default function BlogWrapper({
  frontmatter,
  readingTime,
  children
}: {
  frontmatter: object;
  readingTime: object;
  children: ReactNode;
}) {
  const typedFrontmatter = Frontmatter.parse(frontmatter);
  const typedReadingTime = ReadingTime.parse(readingTime);
  return (
    <div className="mx-auto mb-16 mt-12 px-12">
      <div className="prose flex flex-col gap-4">
        <div className="-mt-2 mb-2 flex w-11/12 flex-wrap gap-2">
          {typedFrontmatter.tags.split(', ').map((tag) => (
            <div key={tag} className="badge badge-secondary whitespace-nowrap">
              {tag}
            </div>
          ))}
        </div>
        <div className="flex w-11/12 flex-col gap-2">
          <h1 className="my-0">{typedFrontmatter.title}</h1>
          <h2 className="my-0 font-normal text-[var(--tw-prose-body)]">
            {typedFrontmatter.subtitle}
          </h2>
        </div>
        <InteractiveMetadata
          frontmatter={typedFrontmatter}
          readingTime={typedReadingTime}
        />
      </div>
      <div className="divider" />
      <div className="gap-12 lg:flex">
        <article className="prose">{children}</article>
        <Sidebar tocData={JSON.stringify(extractSubheadingData(children))} />
      </div>
    </div>
  );
}
