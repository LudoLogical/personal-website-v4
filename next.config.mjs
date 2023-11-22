/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import('./src/env.mjs');
import mdx from '@next/mdx';

/** @type {import('next').NextConfig} */
const config = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  webpack: (config) => {
    config.module = {
      ...config.module,
      exprContextCritical: false // suppress warning caused within package 'prettier'
    };
    return config;
  }
};
const withMDX = mdx();

export default withMDX(config);
