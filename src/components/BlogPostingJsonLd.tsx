/**
 * BlogPostingJsonLd — injects a BlogPosting JSON-LD script for blog post pages.
 */

const BASE_URL = 'https://webuildpro.in';

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
    headline,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: 'Chyavan',
      url: `${BASE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'WeBuildPro',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/assets/images/app_logo.png`,
      },
    },
    image: image || `${BASE_URL}/assets/images/wbinlogo-1786121366410.jpeg`,
    url: `${BASE_URL}/blog/${slug}`,
    description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
