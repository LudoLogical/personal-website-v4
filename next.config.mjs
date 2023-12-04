/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/utils/env.mjs');
import mdx from '@next/mdx';
import rehypeSlug from 'rehype-slug';
import remarkReadingTime from 'remark-reading-time';
import readingMdxTime from 'remark-reading-time/mdx.js';

/** @type {import('next').NextConfig} */
const config = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
};
const withMDX = mdx({
  options: {
    providerImportSource: '~/utils/mdx.tsx',
    remarkPlugins: [remarkReadingTime, readingMdxTime],
    rehypePlugins: [rehypeSlug]
  }
});

export default withMDX(config);
