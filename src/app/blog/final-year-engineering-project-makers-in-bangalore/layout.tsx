import type { Metadata } from 'next';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import BlogPostingJsonLd from '@/components/BlogPostingJsonLd';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';
const SLUG = 'final-year-engineering-project-makers-in-bangalore';
const PAGE_TITLE = 'Best Final Year Project Makers in Bangalore';
const PAGE_DESCRIPTION =
  "Bangalore's trusted final year & engineering project makers — CSE, ECE, EEE, Mechanical, Civil. 300+ built, tested & delivered. Real makers, not resellers. WhatsApp us.";
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
    title: 'Final Year Engineering Project Makers in Bangalore',
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
        alt: 'Final Year Engineering Project Makers in Bangalore — WEBUILDPRO',
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
          { name: 'Best Final Year Project Makers in Bangalore', url: `/blog/${SLUG}` },
        ]}
      />
      <BlogPostingJsonLd
        headline="Best Final Year Project Makers in Bangalore"
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
        description={PAGE_DESCRIPTION}
        slug={SLUG}
      />
      {children}
    </>
  );
}
