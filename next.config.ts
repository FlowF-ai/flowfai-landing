import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/flowfai-landing',
}
 
export default nextConfig
