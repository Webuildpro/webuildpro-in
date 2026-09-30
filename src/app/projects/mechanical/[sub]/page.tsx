import { mechanicalSubCategories } from '@/lib/data/subcategories/mechanical';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import nextDynamic from 'next/dynamic';
import Header from '@/components/Header';
import LazyPageExtras from '@/components/LazyPageExtras';
import MechanicalSubPageContent from '@/app/projects/mechanical/[sub]/components/MechanicalSubPageContent';
import Footer from '@/components/Footer';


const MechanicalSubPageContent = nextDynamic(() => import('./components/MechanicalSubPageContent'), { ssr: true });
const Footer = nextDynamic(() => import('@/components/Footer'), { ssr: true });

export const dynamic = 'force-static';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export function generateStaticParams() {
  return mechanicalSubCategories.map((s) => ({ sub: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sub: string }>;
}): Promise<Metadata> {
  const { sub } = await params;
  const entry = mechanicalSubCategories.find((s) => s.slug === sub);
  if (!entry) return {};
  return {
    title: entry.metaTitle,
    description: entry.metaDescription,
    alternates: {
      canonical: `https://webuildpro.in/projects/mechanical/${entry.slug}`,
    },
    openGraph: {
      title: entry.metaTitle,
      description: entry.metaDescription,
      url: `https://webuildpro.in/projects/mechanical/${entry.slug}`,
      siteName: 'WEBUILDPRO',
      type: 'website',
    },
  };
}

export default async function MechanicalSubPage({
  params,
}: {
  params: Promise<{ sub: string }>;
}) {
  const { sub } = await params;
  const entry = mechanicalSubCategories.find((s) => s.slug === sub);
  if (!entry) notFound();

  const siblings = mechanicalSubCategories.filter((s) => s.slug !== entry.slug);

  return (
    <>
      <Header />
      <MechanicalSubPageContent entry={entry} siblings={siblings} />
      <Footer />
      <LazyPageExtras />
    </>
  );
}
