import { imageHosts } from './image-hosts.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Cloudflare Pages deployment
  output: 'export',

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
    // Required for static export — Next.js image optimization needs a server
    unoptimized: true,
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
  // Response headers live in public/_headers — Next.js headers() is ignored by static export.
};
export default nextConfig;