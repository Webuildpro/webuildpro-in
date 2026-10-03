import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import BlogPostingJsonLd from '@/components/BlogPostingJsonLd';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';
const SLUG = 'iot-based-mini-projects';
const PAGE_TITLE = 'IoT Based Mini Projects (2026) — Ideas, Steps & Kits';
const PAGE_DESCRIPTION =
  '30+ IoT based mini projects for engineering students with steps, components & descriptions. Buy working IoT mini projects in Bangalore. WhatsApp +91 95382 08573.';
const PAGE_DATE = '2026-09-11';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: `${BASE_URL}/blog/${SLUG}`,
    languages: { 'en-IN': `${BASE_URL}/blog/${SLUG}` },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: 'article',
    publishedTime: PAGE_DATE,
    modifiedTime: PAGE_DATE,
    authors: ['Chyavan'],
    images: [
      {
        url: '/assets/images/og-webuildpro.jpg',
        width: 1200,
        height: 630,
        alt: 'IoT Based Mini Projects 2026 — WEBUILDPRO Bangalore',
      },
    ],
  },
};

export default function IoTMiniProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'IoT Based Mini Projects (2026)', url: `/blog/${SLUG}` },
        ]}
      />
      <BlogPostingJsonLd
        headline="IoT Based Mini Projects (2026) — Ideas, Steps & Kits"
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
        description={PAGE_DESCRIPTION}
        slug={SLUG}
      />
      {children}
    </>
  );
}
