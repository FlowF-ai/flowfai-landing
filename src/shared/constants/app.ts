/**
 * Application Configuration Constants
 */

export const APP_CONFIG = {
  name: 'FlowFAI',
  description: 'Decentralized AI-powered platform on Avalanche',
  version: '1.0.0',
  author: 'FlowFAI Team'
} as const

export const NAVIGATION_ITEMS = [
  { label: 'Features', href: '#features' },
  { label: 'AVAX', href: '#avax' },
  { label: 'Get Started', href: '#cta' }
] as const

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/flowfai',
  discord: 'https://discord.gg/flowfai',
  github: 'https://github.com/flowfai',
  docs: 'https://docs.flowfai.com'
} as const

export const EXTERNAL_LINKS = {
  avalanche: 'https://www.avax.network/',
  metamask: 'https://metamask.io/',
  snowtrace: 'https://snowtrace.io/'
} as const

// Animation and UI Constants
export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500
} as const

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
} as const
