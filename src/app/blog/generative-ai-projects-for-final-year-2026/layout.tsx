import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';
const SLUG = 'generative-ai-projects-for-final-year-2026';
const PAGE_TITLE = 'Generative AI Projects for Final Year (2026)';
const PAGE_DESCRIPTION =
  '20+ generative AI project ideas for final year with descriptions & steps. Text, image, code & voice GenAI projects built in Bangalore. WhatsApp +91 95382 08573.';
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
    authors: ['WEBUILDPRO India'],
    images: [
      {
        url: '/assets/images/og-webuildpro.jpg',
        width: 1200,
        height: 630,
        alt: 'WEBUILDPRO — Generative AI Projects for Final Year Students 2026',
      },
    ],
    siteName: 'WEBUILDPRO',
    locale: 'en_IN',
    url: `${BASE_URL}/blog/${SLUG}`,
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/assets/images/og-webuildpro.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function GenerativeAIBlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
