import { civilSubCategories } from '@/lib/data/subcategories/civil';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import nextDynamic from 'next/dynamic';
import Header from '@/components/Header';
import LazyPageExtras from '@/components/LazyPageExtras';
import CivilSubPageContent from '@/app/projects/civil/[sub]/components/CivilSubPageContent';
import Footer from '@/components/Footer';


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
      siteName: 'WEBUILDPRO',
      type: 'website',
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

  return (
    <>
      <Header />
      <CivilSubPageContent entry={entry} siblings={siblings} />
      <Footer />
      <LazyPageExtras />
    </>
  );
}
