import type { Metadata } from 'next';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import BlogPostingJsonLd from '@/components/BlogPostingJsonLd';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';
const SLUG = 'ieee-projects-in-bangalore';
const PAGE_TITLE = 'IEEE Projects in Bangalore 2026 | WEBUILDPRO Makers';
const PAGE_DESCRIPTION =
  'Best IEEE project centre in Bangalore for CSE, ECE, EEE, Mechanical & Civil. 2026 IEEE final year projects built, tested & delivered. WhatsApp +91 95382 08573.';
const PAGE_DATE = '2026-08-06';

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
        url: '/assets/images/wbinlogo-1786121366410.jpeg',
        width: 1200,
        height: 630,
        alt: 'IEEE Projects in Bangalore 2026 — WEBUILDPRO Complete Guide',
      },
    ],
  },
};

export default function IeeeProjectsBangaloreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'IEEE Projects in Bangalore 2026', url: `/blog/${SLUG}` },
        ]}
      />
      <BlogPostingJsonLd
        headline="IEEE Projects in Bangalore 2026"
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
        description={PAGE_DESCRIPTION}
        slug={SLUG}
      />
      {children}
    </>
  );
}
