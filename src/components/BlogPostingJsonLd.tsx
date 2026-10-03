/**
 * BlogPostingJsonLd — injects a BlogPosting JSON-LD script for blog post pages.
 */

import { ORG_ID, safeJsonLd, SITE_URL as BASE_URL } from '@/lib/jsonld';

interface BlogPostingJsonLdProps {
  headline: string;
  datePublished: string;
  dateModified: string;
  description: string;
  slug: string;
  image?: string;
}

export default function BlogPostingJsonLd({
  headline,
  datePublished,
  dateModified,
  description,
  slug,
  image,
}: BlogPostingJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${BASE_URL}/blog/${slug}#article`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/blog/${slug}` },
    headline,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: 'Chyavan',
      url: `${BASE_URL}/about`,
      worksFor: { '@id': ORG_ID },
    },
    publisher: { '@id': ORG_ID },
    image: image || `${BASE_URL}/assets/images/og-webuildpro.jpg`,
    url: `${BASE_URL}/blog/${slug}`,
    description,
    inLanguage: 'en-IN',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
    />
  );
}
