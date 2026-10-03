export const dynamic = 'force-static';

import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'WEBUILDPRO India — Engineering Projects in Bangalore',
    short_name: 'WEBUILDPRO',
    description: 'Final year engineering projects, internships and industrial prototypes in Bangalore.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0E14',
    theme_color: '#FF6A13',
    lang: 'en-IN',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/assets/images/og-webuildpro.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
      },
      {
        src: '/assets/images/og-webuildpro.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
      },
    ],
  };
}
