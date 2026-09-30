/**
 * BreadcrumbJsonLd — injects a BreadcrumbList JSON-LD script into the page <head>.
 * Usage: <BreadcrumbJsonLd items={[{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: 'Post Title', url: '/blog/slug' }]} />
 */

const BASE_URL = 'https://webuildpro.in';

interface BreadcrumbItem {
  name: string;
  /** Relative path (e.g. '/blog') or full URL */
  url: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

export default function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
