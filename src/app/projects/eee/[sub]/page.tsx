import { eeeSubCategories } from '@/lib/data/subcategories/eee';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import nextDynamic from 'next/dynamic';
import Header from '@/components/Header';
import LazyPageExtras from '@/components/LazyPageExtras';
import EeeSubPageContent from '@/app/projects/eee/[sub]/components/EeeSubPageContent';
import Footer from '@/components/Footer';


const EeeSubPageContent = nextDynamic(() => import('./components/EeeSubPageContent'), { ssr: true });
const Footer = nextDynamic(() => import('@/components/Footer'), { ssr: true });

export const dynamic = 'force-static';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export function generateStaticParams() {
  return eeeSubCategories.map((s) => ({ sub: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sub: string }>;
}): Promise<Metadata> {
  const { sub } = await params;
  const entry = eeeSubCategories.find((s) => s.slug === sub);
  if (!entry) return {};
  return {
    title: entry.metaTitle,
    description: entry.metaDescription,
    alternates: {
      canonical: `https://webuildpro.in/projects/eee/${entry.slug}`,
    },
    openGraph: {
      title: entry.metaTitle,
      description: entry.metaDescription,
      url: `https://webuildpro.in/projects/eee/${entry.slug}`,
      siteName: 'WEBUILDPRO',
      type: 'website',
    },
  };
}

export default async function EeeSubPage({
  params,
}: {
  params: Promise<{ sub: string }>;
}) {
  const { sub } = await params;
  const entry = eeeSubCategories.find((s) => s.slug === sub);
  if (!entry) notFound();

  const siblings = eeeSubCategories.filter((s) => s.slug !== entry.slug);

  return (
    <>
      <Header />
      <EeeSubPageContent entry={entry} siblings={siblings} />
      <Footer />
      <LazyPageExtras />
    </>
  );
}
