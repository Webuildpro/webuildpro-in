import type { Metadata } from 'next';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import BlogPostingJsonLd from '@/components/BlogPostingJsonLd';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';
const SLUG = 'best-ai-based-final-year-project-ideas-2026';
const PAGE_TITLE = 'Best AI-Based Final Year Project Ideas (2026) | WEBUILDPRO';
const PAGE_DESCRIPTION =
  '30+ best AI projects & AI-based final year project ideas for 2026 — machine learning, deep learning, computer vision & generative AI. Built by WEBUILDPRO Bangalore. WhatsApp 9538208573.';
const PAGE_DATE = '2026-08-07';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: `${BASE_URL}/blog/${SLUG}`,
    languages: { 'en-IN': `${BASE_URL}/blog/${SLUG}` },
  },
  openGraph: {
    title: 'Best AI-Based Final Year Project Ideas (2026) | WEBUILDPRO Bangalore',
    description: PAGE_DESCRIPTION,
    type: 'article',
    publishedTime: PAGE_DATE,
    modifiedTime: PAGE_DATE,
    authors: ['Chyavan'],
    images: [
      {
        url: '/assets/images/wbinlogo-1786121366410.jpeg',
        width: 1200,
        height: 630,
        alt: 'Best AI-Based Final Year Project Ideas 2026 — WEBUILDPRO Bangalore',
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'Best AI-Based Final Year Project Ideas (2026)', url: `/blog/${SLUG}` },
        ]}
      />
      <BlogPostingJsonLd
        headline="Best AI-Based Final Year Project Ideas (2026)"
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
        description={PAGE_DESCRIPTION}
        slug={SLUG}
      />
      {children}
    </>
  );
}
