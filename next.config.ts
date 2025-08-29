import type { NextConfig } from 'next'
 
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
      unoptimized: true
  },
  ...(isProd ? {
    assetPrefix: '/flowfai-landing/',
    basePath: '/flowfai-landing',
  } : {}),
  trailingSlash: true,
};
 
export default nextConfig
