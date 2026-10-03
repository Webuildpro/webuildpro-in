import { civilSubCategories } from '@/lib/data/subcategories/civil';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import nextDynamic from 'next/dynamic';
import Header from '@/components/Header';
import LazyPageExtras from '@/components/LazyPageExtras';
import CivilSubPageContent from '@/app/projects/civil/[sub]/components/CivilSubPageContent';
import JsonLdScript from '@/components/JsonLdScript';
import { breadcrumbSchema, faqSchema, itemListSchema, serviceSchema } from '@/lib/jsonld';


const CivilSubPageContent = nextDynamic(() => import('./components/CivilSubPageContent'), { ssr: true });
const Footer = nextDynamic(() => import('@/components/Footer'), { ssr: true });

export const dynamic = 'force-static';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export function generateStaticParams() {
  return civilSubCategories.map((s) => ({ sub: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sub: string }>;
}): Promise<Metadata> {
  const { sub } = await params;
  const entry = civilSubCategories.find((s) => s.slug === sub);
  if (!entry) return {};
  return {
    title: entry.metaTitle,
    description: entry.metaDescription,
    alternates: {
      canonical: `https://webuildpro.in/projects/civil/${entry.slug}`,
    },
    openGraph: {
      title: entry.metaTitle,
      description: entry.metaDescription,
      url: `https://webuildpro.in/projects/civil/${entry.slug}`,
      siteName: 'WEBUILDPRO India',
      type: 'website',
      images: [{ url: '/assets/images/og-webuildpro.jpg', width: 1200, height: 630, alt: entry.keyword }],
    },
  };
}

export default async function CivilSubPage({
  params,
}: {
  params: Promise<{ sub: string }>;
}) {
  const { sub } = await params;
  const entry = civilSubCategories.find((s) => s.slug === sub);
  if (!entry) notFound();

  const siblings = civilSubCategories.filter((s) => s.slug !== entry.slug);

  const path = `/projects/civil/${entry.slug}`;
  const schema = [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Projects', url: '/projects' },
      { name: 'Civil Projects', url: '/projects/civil' },
      { name: entry.keyword, url: path },
    ]),
    serviceSchema({ name: entry.keyword, description: entry.metaDescription, path, serviceType: 'Civil final year project development' }),
    itemListSchema(entry.keyword, entry.projects.map((p) => ({ name: p.title, description: p.abstract }))),
    faqSchema(entry.faqs),
  ];

  return (
    <>
      <JsonLdScript nodes={schema} />
      <Header />
      <CivilSubPageContent entry={entry} siblings={siblings} />
      <Footer />
      <LazyPageExtras />
    </>
  );
}
