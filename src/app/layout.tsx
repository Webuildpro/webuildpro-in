import React, { Suspense } from 'react';
import type { Metadata, Viewport } from 'next';
import { DM_Sans, JetBrains_Mono } from 'next/font/google';
import '../styles/tailwind.css';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import JsonLdScript from '@/components/JsonLdScript';
import { organizationSchema, websiteSchema } from '@/lib/jsonld';

// Reduced to 2 critical weights (400+700) — fewer font files = faster FCP; 600 is rarely used
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-sans',
  display: 'swap',
  adjustFontFallback: false,
  preload: true,
});

// JetBrains Mono — used for micro-labels and stat numbers; preload: false keeps it out of critical path
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-mono',
  display: 'optional',
  adjustFontFallback: false,
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
    default: 'Engineering Projects & Internships in Bangalore | WEBUILDPRO',
    template: '%s | WEBUILDPRO',
  },
  description:
    'Final year engineering projects in Bangalore for CSE, ECE, EEE, Mechanical & Civil. 300+ built and tested in our Peenya lab. IEEE & non-IEEE, online & offline.',
  authors: [{ name: 'WEBUILDPRO India', url: BASE_URL }],
  creator: 'WEBUILDPRO India',
  publisher: 'WEBUILDPRO India',
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
    apple: [{ url: '/assets/images/app_logo.png' }],
  },
  formatDetection: { telephone: true, address: false, email: false },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'WEBUILDPRO India',
    url: '/',
    title: 'Engineering Projects in Bangalore | Final Year Project Centre | WEBUILDPRO',
    description:
      'Final year engineering projects, internships and industrial prototypes built and tested in our Bangalore lab. 300+ delivered, 100% on time. All branches covered.',
    images: [
      {
        url: '/assets/images/og-webuildpro.jpg',
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
    images: ['/assets/images/og-webuildpro.jpg'],
  },
  verification: {
    google: 'zKE19RjtlCugXFO3YnWWyyqnYlEd3B8zWUsxxp2FIoM',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* AI Crawlers Welcome */}
        {/* This site is optimized for AI answer engines: ChatGPT, Claude, Gemini, Perplexity, Grok, and Google AI Overviews. */}
        {/* All public content is crawlable and structured for AI ingestion. See /llms.txt and /faq for AI-friendly content. */}

        {/* Critical CSS inlined — eliminates render-blocking delay for LCP on mobile */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root{--background:#0A0E14;--foreground:#F2F5F8;--primary:#FF6A13;--primary-foreground:#fff;--secondary:#121821;--secondary-foreground:#F2F5F8;--accent:#00D0FF;--muted:#1E2733;--muted-foreground:#8A97A6;--card:#121821;--card-foreground:#F2F5F8;--border:#1E2733;--radius:4px}
          *,::before,::after{box-sizing:border-box}
          html{scroll-behavior:smooth}
          body{background-color:#0A0E14;color:#F2F5F8;margin:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
          h1,h2,h3,h4,h5,h6,p{margin:0}
        ` }} />

        {/* Organization + WebSite entity graph — site-wide; pages reference it by @id */}
        <JsonLdScript nodes={[organizationSchema(), websiteSchema()]} />

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