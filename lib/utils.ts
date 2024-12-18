export const config = {
  // Configuración base
  isProd: typeof window !== 'undefined' 
    ? window.location.hostname.includes('github.io')
    : process.env.NODE_ENV === 'production',
  
  // Rutas base
  paths: {
    base: '/flowfai_landing',
    images: '/flowfai_landing',
  }
};

export function getImagePath(path: string) {
  return config.isProd ? `${config.paths.images}${path}` : path;
} 