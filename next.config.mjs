/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.mjs');
import mdx from '@next/mdx';

/** @type {import('next').NextConfig} */
const config = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
};
const withMDX = mdx();

export default withMDX(config);
