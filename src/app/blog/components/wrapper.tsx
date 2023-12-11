import { Frontmatter } from 'data/frontmatter';
import { ReadingTime } from 'data/reading-time';
import { extractSubheadingData } from 'data/subheadings';
import { type ReactNode } from 'react';
import { HiOutlineClock, HiOutlineEye } from 'react-icons/hi2';
import Buttons from './buttons';
import styles from './css/wrapper.module.css';
import DatesElement from './date';
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
        <div className="flex flex-wrap items-center gap-y-2">
          <div className="flex h-8 flex-nowrap items-center gap-2">
            <HiOutlineClock className="h-5 w-5 shrink-0" />
            <span className="whitespace-nowrap">
              {Math.ceil(readingTime.minutes)}-minute read
            </span>
          </div>
          <div className="basis-full nav:divider nav:divider-horizontal nav:basis-auto" />
          <div className="flex h-8 flex-nowrap items-center gap-2">
            <HiOutlineEye className="h-5 w-5 shrink-0" />
            <span>100,000 views</span>
          </div>
          <div className="basis-full nav:divider nav:divider-horizontal nav:basis-auto" />
          <DatesElement frontmatter={frontmatter} />
        </div>
        <Buttons frontmatter={frontmatter} />
      </div>
      <div className="divider my-0 h-12 py-4" />
      <div className="gap-12 lg:flex">
        <article className={`prose ${styles.article}`}>{children}</article>
        <Sidebar tocData={JSON.stringify(extractSubheadingData(children))} />
      </div>
    </div>
  );
}
