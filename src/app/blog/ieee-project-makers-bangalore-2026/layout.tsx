import type { Metadata } from 'next';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import BlogPostingJsonLd from '@/components/BlogPostingJsonLd';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';
const SLUG = 'ieee-project-makers-bangalore-2026';
const PAGE_TITLE = 'IEEE Project Makers in Bangalore (2026) — Who Actually Builds Working Projects?';
const PAGE_DESCRIPTION =
  'Find the best IEEE project maker in Bangalore for your 2026 final year project. WEBUILDPRO Peenya builds IEEE projects for ECE, CSE, EEE, AI-ML, Mechanical & Civil — with source code, documentation & viva prep. Call +91 95382 08573.';
const PAGE_DATE = '2026-10-10';

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
        alt: 'IEEE Project Makers in Bangalore 2026 — WEBUILDPRO',
      },
    ],
  },
};

export default function IeeeProjectMakersBangaloreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'IEEE Project Makers in Bangalore 2026', url: `/blog/${SLUG}` },
        ]}
      />
      <BlogPostingJsonLd
        headline="IEEE Project Makers in Bangalore (2026) — Who Actually Builds Working Projects?"
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
        description={PAGE_DESCRIPTION}
        slug={SLUG}
      />
      {children}
    </>
  );
}
