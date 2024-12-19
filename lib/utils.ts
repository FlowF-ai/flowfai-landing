import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const config = {
  isProd: typeof window !== 'undefined' 
    ? window.location.hostname.includes('github.io')
    : process.env.NODE_ENV === 'production',
  paths: {
    base: process.env.NODE_ENV === 'production' ? '/flowfai-landing' : '',
    images: process.env.NODE_ENV === 'production' ? '/flowfai-landing' : '',
  }
}

export function getImagePath(path: string) {
  if (path.startsWith('http')) return path;
  return `${config.paths.images}${path}`;
}