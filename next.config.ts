import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
      unoptimized: true
  },
  assetPrefix: '/flowfai_landing/',
  basePath: '/flowfai_landing'
};
 
export default nextConfig
