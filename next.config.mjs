import { imageHosts } from './image-hosts.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disabled: source maps add ~30% to JS bundle size — hurts FCP on slow connections
  productionBrowserSourceMaps: false,

  compress: true,

  experimental: {
    // Inline critical CSS and defer non-critical CSS — reduces render-blocking time
    optimizeCss: true,
    // Tree-shake heroicons and other large icon packages — reduces initial JS bundle
    optimizePackageImports: ['@heroicons/react'],
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: imageHosts,
    // 1 year TTL for immutable optimized images — reduces repeat-visit fetches
    minimumCacheTTL: 31536000,
    // Cap quality at 75 — saves ~36KB vs q=85 on hero image with negligible visual difference
    qualities: [60, 75, 85],
    // AVIF first — ~50% smaller than WebP, critical for mobile LCP savings
    formats: ['image/avif', 'image/webp'],
    // 390 added for iPhone 14/15 viewport — matches the preload hint in layout.tsx
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async headers() {
    return [
      {
        source: '/rocket-web.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Immutable cache for all Next.js static assets (JS chunks, CSS, fonts)
      // These filenames are content-hashed so they can be cached forever
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Long-lived cache for Next.js optimized images
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
      // Cache public static assets (favicon, images in /public)
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
    ];
  }
};
export default nextConfig;