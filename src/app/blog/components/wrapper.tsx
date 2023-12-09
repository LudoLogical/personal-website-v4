import { Frontmatter } from 'data/frontmatter';
import { ReadingTime } from 'data/reading-time';
import { extractSubheadingData } from 'data/subheadings';
import { type ReactNode } from 'react';
import styles from './css/wrapper.module.css';
import Details from './details';
import Sidebar from './sidebar';

export default function BlogWrapper({
  frontmatter,
  readingTime,
  children
}: {
  frontmatter: Frontmatter;
  readingTime: ReadingTime;
  children: ReactNode;
}) {
  frontmatter = Frontmatter.parse(frontmatter);
  readingTime = ReadingTime.parse(readingTime);
  return (
    <div className="mx-auto mb-16 mt-12 px-12">
      <div className="prose flex flex-col gap-4">
        <div className="-mt-2 mb-2 flex w-11/12 flex-wrap gap-2">
          {frontmatter.tags.split(', ').map((tag) => (
            <div key={tag} className="badge badge-secondary whitespace-nowrap">
              {tag}
            </div>
          ))}
        </div>
        <div className="flex w-11/12 flex-col gap-2">
          <h1 className="my-0">{frontmatter.title}</h1>
          <h2 className="my-0 font-normal text-[var(--tw-prose-body)]">
            {frontmatter.subtitle}
          </h2>
        </div>
        <Details frontmatter={frontmatter} readingTime={readingTime} />
      </div>
      <div className="divider" />
      <div className="gap-12 lg:flex">
        <article className={`prose ${styles.article}`}>{children}</article>
        <Sidebar tocData={JSON.stringify(extractSubheadingData(children))} />
      </div>
    </div>
  );
}
