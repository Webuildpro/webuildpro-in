import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import BlogPostingJsonLd from '@/components/BlogPostingJsonLd';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';
const SLUG = 'iot-projects-in-bangalore-2026';
const PAGE_TITLE = 'IoT Projects in Bangalore (2025–2026): 50+ Ideas, Cost & Project Centre | WEBUILDPRO';
const PAGE_DESCRIPTION =
  '50+ IoT final-year project ideas in Bangalore with components, descriptions & cost. WEBUILDPRO, Peenya, delivers fully-built IoT projects for ECE students. WhatsApp +91 95382 08573.';
const PAGE_DATE = '2026-10-11';

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
        alt: 'IoT Projects in Bangalore 2025–2026 — WEBUILDPRO',
      },
    ],
  },
};

export default function IoTProjectsBangaloreLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'IoT Projects in Bangalore (2025–2026)', url: `/blog/${SLUG}` },
        ]}
      />
      <BlogPostingJsonLd
        headline="IoT Projects in Bangalore (2025–2026): 50+ Ideas, Cost & Project Centre"
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
        description={PAGE_DESCRIPTION}
        slug={SLUG}
      />
      {children}
    </>
  );
}
