import { type Frontmatter } from 'data/frontmatter';
import { HiOutlineScale } from 'react-icons/hi2';
import { apaDateFromTimestamp, mlaDateFromTimestamp } from '~/utils/dates';

export default function Citations({
  frontmatter
}: {
  frontmatter: Frontmatter;
}) {
  return (
    <>
      <div className="flex flex-nowrap gap-2">
        <HiOutlineScale className="mt-1 h-5 w-5 shrink-0" />
        <span>
          Consider double-checking that you are citing the correct source! Any
          quotes referenced in this blog post should be cited directly and any
          summarization or paraphrasing of other sources should be re-written in
          your own words.
        </span>
      </div>
      <div className="flex flex-nowrap gap-2">
        <span>MLA:</span>
        <span>
          DeAnda, Daniel. &quot;{frontmatter.title}.&quot;{' '}
          <em>Ludospace Blog</em>,{' '}
          {mlaDateFromTimestamp(
            frontmatter.reviewed ??
              frontmatter.updated ??
              frontmatter.published ??
              Date.now()
          )}
          , www.danieldeanda.com/blog/{frontmatter.slug}. Accessed{' '}
          {mlaDateFromTimestamp(Date.now())}.
        </span>
      </div>
      <div className="flex flex-nowrap gap-2">
        <span>APA:</span>
        <span>
          DeAnda, D. (
          {apaDateFromTimestamp(
            frontmatter.updated ?? frontmatter.published ?? Date.now()
          )}
          ). <em>{frontmatter.title}</em>. Ludospace Blog.
          www.danieldeanda.com/blog/{frontmatter.slug}
        </span>
      </div>
    </>
  );
}
