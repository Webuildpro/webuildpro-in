import React, { Suspense } from 'react';
import type { Metadata, Viewport } from 'next';
import { DM_Sans, JetBrains_Mono } from 'next/font/google';
import '../styles/tailwind.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';

// Reduced to 2 critical weights (400+700) — fewer font files = faster FCP; 600 is rarely used
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sans',
  display: 'swap',
  adjustFontFallback: true,
  preload: true,
});

// JetBrains Mono — used for micro-labels and stat numbers; preload: false keeps it out of critical path
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-mono',
  display: 'optional',
  adjustFontFallback: true,
  preload: false,
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FF6A13',
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Final Year Engineering Projects Bangalore | WeBuildPro',
    template: '%s | WeBuildPro',
  },
  description:
    'Final year engineering projects, internships and industrial prototypes in Bangalore. 300+ delivered, 100% on time. CSE, Mechanical, ECE, EEE, Civil projects. Engineering project centre for all branches.',
  keywords: [
    'engineering projects in Bangalore',
    'engineering project center Bangalore',
    'final year project centre Bangalore',
    'final year projects Bangalore',
    'engineering project consultancy Bangalore',
    'industrial prototype company Bangalore',
    'CSE final year projects Bangalore',
    'mechanical engineering projects Bangalore',
    'ECE projects Bangalore',
    'EEE projects Bangalore',
    'Civil engineering projects Bangalore',
    'engineering internship Bangalore',
    'ETEC projects Bangalore',
    'final year project center',
    'engineering project center in bangalore',
  ],
  authors: [{ name: 'WEBUILDPRO India', url: BASE_URL }],
  creator: 'WEBUILDPRO India',
  publisher: 'WEBUILDPRO India',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en-IN': BASE_URL,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'WEBUILDPRO India',
    title: 'Engineering Projects in Bangalore | Final Year Project Centre | WEBUILDPRO',
    description:
      'Final year engineering projects, internships and industrial prototypes built and tested in our Bangalore lab. 300+ delivered, 100% on time. All branches covered.',
    images: [
      {
        url: '/assets/images/wbinlogo-1786121366410.jpeg',
        width: 1200,
        height: 630,
        alt: 'WEBUILDPRO India — Engineering Projects & Final Year Project Centre in Bangalore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Projects in Bangalore | Final Year Project Centre | WEBUILDPRO',
    description:
      'Final year engineering projects, internships and industrial prototypes built and tested in our Bangalore lab. 300+ delivered, 100% on time.',
    images: ['/assets/images/wbinlogo-1786121366410.jpeg'],
    creator: '@webuildpro',
    site: '@webuildpro',
  },
  verification: {
    google: 'zKE19RjtlCugXFO3YnWWyyqnYlEd3B8zWUsxxp2FIoM',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'WEBUILDPRO India',
    url: 'https://webuildpro.in',
    telephone: '+919538208573',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Peenya 2nd Stage',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560058',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.0134785,
      longitude: 77.4961966,
    },
    openingHours: 'Mo-Sa 10:00-19:00',
    sameAs: [
      'https://www.instagram.com/webuildpro.in',
      'https://g.co/kgs/webuildpro',
    ],
  };

  return (
    <html lang="en-IN" className={`${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* AI Crawlers Welcome */}
        {/* This site is optimized for AI answer engines: ChatGPT, Claude, Gemini, Perplexity, Grok, and Google AI Overviews. */}
        {/* All public content is crawlable and structured for AI ingestion. See /llms.txt and /faq for AI-friendly content. */}

        {/* ── CRITICAL PATH: preload + preconnect FIRST so the preload scanner
            discovers the LCP image before any script tag can delay it ── */}

        {/* Preconnect to external image CDN — must come before any <script> tags
            so the TCP+TLS handshake starts at the very beginning of the critical path.
            crossOrigin="anonymous" matches the CORS mode used by next/image AVIF fetches. */}
        <link rel="preconnect" href="https://img.rocket.new" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://img.rocket.new" />

        {/* Preload hero LCP image — placed FIRST in <head> so the browser's preload
            scanner discovers it before any script or style can delay it.
            q=60 matches the quality prop on the hero <Image> exactly — no double-fetch.
            imageSizes mirrors the sizes prop: mobile phones get the 640px AVIF variant. */}
        <link
          rel="preload"
          as="image"
          href="/_next/image?url=https%3A%2F%2Fimg.rocket.new%2FgeneratedImages%2Frocket_gen_img_1cf73093f-1784552159557.png&w=640&q=60"
          imageSrcSet="/_next/image?url=https%3A%2F%2Fimg.rocket.new%2FgeneratedImages%2Frocket_gen_img_1cf73093f-1784552159557.png&w=640&q=60 640w, /_next/image?url=https%3A%2F%2Fimg.rocket.new%2FgeneratedImages%2Frocket_gen_img_1cf73093f-1784552159557.png&w=1080&q=60 1080w, /_next/image?url=https%3A%2F%2Fimg.rocket.new%2FgeneratedImages%2Frocket_gen_img_1cf73093f-1784552159557.png&w=1920&q=60 1920w"
          imageSizes="(max-width: 640px) 640px, (max-width: 1024px) 1080px, 1920px"
          fetchPriority="high"
        />

        {/* Preconnect to Google Fonts CDN (fonts are loaded by next/font but static assets come from fonts.gstatic.com) */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Critical CSS inlined — eliminates render-blocking delay for LCP on mobile */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root{--background:#0A0E14;--foreground:#F2F5F8;--primary:#FF6A13;--primary-foreground:#fff;--secondary:#121821;--secondary-foreground:#F2F5F8;--accent:#00D0FF;--muted:#1E2733;--muted-foreground:#8A97A6;--card:#121821;--card-foreground:#F2F5F8;--border:#1E2733;--radius:4px}
          *,::before,::after{box-sizing:border-box}
          html{scroll-behavior:smooth}
          body{background-color:#0A0E14;color:#F2F5F8;margin:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
          h1,h2,h3,h4,h5,h6,p{margin:0}
        ` }} />

        {/* LocalBusiness structured data — site-wide */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* Third-party scripts — loaded after all critical resources */}
</head>
      <body className="bg-background text-foreground antialiased">
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        {children}
      </body>
    </html>
  );
}