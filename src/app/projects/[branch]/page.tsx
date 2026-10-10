import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LazyPageExtras from '@/components/LazyPageExtras';
import { branchData } from '@/lib/data/projects';
import JsonLdScript from '@/components/JsonLdScript';
import { breadcrumbSchema, faqSchema, itemListSchema, serviceSchema } from '@/lib/jsonld';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

const BranchPageContent = dynamic(() => import('./components/BranchPageContent'), { ssr: true });

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

const branchKeywords: Record<string, { primary: string; secondary: string[]; h1: string; title: string }> = {
  cse: {
    primary: 'CSE projects in Bangalore',
    h1: 'CSE / ISE / AI-ML / BCA / MCA Projects in Bangalore — Final Year Projects',
    title: 'CSE & AI-ML Final Year Projects Bangalore',
    secondary: [
      'computer science projects in Bangalore',
      'CSE projects Bangalore',
      'AI ML projects Bangalore',
      'ISE projects Bangalore',
      'IEEE CSE projects Bangalore',
      'python project centre Bangalore',
      'computer science projects Bangalore',
      'final year CSE projects',
      'engineering project center CSE',
    ],
  },
  mechanical: {
    primary: 'Mechanical projects in Bangalore',
    h1: 'Mechanical Projects in Bangalore — Final Year Engineering Projects',
    title: 'Mechanical Final Year Projects in Bangalore',
    secondary: [
      'mechanical engineering projects in Bangalore',
      'mechanical final year projects Bangalore',
      'fabrication projects Bangalore',
      'mechanical project centre Bangalore',
      'mechanical engineering project center',
      'final year mechanical projects',
      'mechanical design projects Bangalore',
    ],
  },
  ece: {
    primary: 'Electronics (ECE) projects in Bangalore',
    h1: 'Electronics (ECE) Projects in Bangalore — Final Year Engineering Projects',
    title: 'ECE Final Year Projects in Bangalore',
    secondary: [
      'electronics projects in Bangalore',
      'electronics and communication projects Bangalore',
      'embedded systems projects Bangalore',
      'IoT projects Bangalore',
      'VLSI projects Bangalore',
      'ECE final year projects',
      'electronics project centre Bangalore',
      'communication projects Bangalore',
    ],
  },
  eee: {
    primary: 'Electrical (EEE) projects in Bangalore',
    h1: 'Electrical (EEE) Projects in Bangalore — Final Year Engineering Projects',
    title: 'EEE Final Year Projects in Bangalore',
    secondary: [
      'electrical projects in Bangalore',
      'EEE projects Bangalore',
      'power electronics projects Bangalore',
      'PLC automation projects Bangalore',
      'EEE final year projects',
      'electrical engineering projects Bangalore',
      'electrical project centre Bangalore',
    ],
  },
  civil: {
    primary: 'Civil projects in Bangalore',
    h1: 'Civil Projects in Bangalore — Final Year Engineering Projects',
    title: 'Civil Engineering Final Year Projects in Bangalore',
    secondary: [
      'civil engineering projects in Bangalore',
      'civil final year projects Bangalore',
      'mining projects Bangalore',
      'civil project centre Bangalore',
      'structural projects Bangalore',
      'civil engineering project center',
      'final year civil projects',
    ],
  },
};

const branchMeta: Record<string, { description: string }> = {
  cse: {
    description:
      'CSE, ISE & AI-ML final year projects in Bangalore — machine learning, computer vision, NLP, blockchain & IoT. Source code, report & viva support included.',
  },
  mechanical: {
    description:
      'Mechanical final year projects in Bangalore — robotics, fabrication, thermal & renewable energy. Working models, BOM, report material & viva support.',
  },
  ece: {
    description:
      'ECE final year projects in Bangalore — embedded systems, IoT, VLSI, drones & RF. Working hardware, circuit diagrams, code & viva support. Online & offline.',
  },
  eee: {
    description:
      'EEE final year projects in Bangalore — power electronics, PLC automation, EV & smart grid. Hardware tested at rated parameters with full documentation.',
  },
  civil: {
    description:
      'Civil engineering final year projects in Bangalore — smart infrastructure, structural health monitoring, GIS & materials testing. Models + full reports.',
  },
};

export async function generateStaticParams() {
  return Object.keys(branchData).map((slug) => ({ branch: slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ branch: string }> }): Promise<Metadata> {
  const { branch } = await params;
  const data = branchData[branch];
  if (!data) return {};
  const kw = branchKeywords[branch];
  const title = kw?.title || `${data.fullName} Projects in Bangalore`;
  const description =
    branchMeta[branch]?.description ||
    `${data.fullName} projects in Bangalore — ${data.projects.length}+ titles, working hardware, source code & viva support. Online & offline, delivered pan-India.`;
  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/projects/${branch}`,
    },
    openGraph: {
      url: `${BASE_URL}/projects/${branch}`,
      title,
      description,
      images: [{ url: '/assets/images/og-webuildpro.jpg', width: 1200, height: 630, alt: `${data.fullName} projects in Bangalore — WEBUILDPRO India` }],
    },
  };
}

export default async function BranchPage({ params }: { params: Promise<{ branch: string }> }) {
  const { branch } = await params;
  const data = branchData[branch];
  if (!data) notFound();

  const kw = branchKeywords[branch];
  const h1 = kw?.h1 || `${data.fullName} Projects in Bangalore`;

  const path = `/projects/${branch}`;
  const name = kw?.title || `${data.fullName} Projects in Bangalore`;
  const schema = [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Projects', url: '/projects' },
      { name: `${data.fullName} Projects`, url: path },
    ]),
    serviceSchema({
      name,
      description: branchMeta[branch]?.description || name,
      path,
      serviceType: `${data.fullName} final year project development`,
    }),
    itemListSchema(name, data.projects.map((p) => ({ name: p.title }))),
    ...(data.faq?.length ? [faqSchema(data.faq)] : []),
  ];

  return (
    <>
      <JsonLdScript nodes={schema} />
      <Header />
      <main id="main-content" className="pb-[calc(64px+env(safe-area-inset-bottom))] lg:pb-0">
        <BranchPageContent data={data} branch={branch} h1={h1} />
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}