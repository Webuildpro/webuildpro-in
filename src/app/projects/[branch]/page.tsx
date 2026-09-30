import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LazyPageExtras from '@/components/LazyPageExtras';
import { branchData } from '@/lib/data/projects';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';

const BranchPageContent = dynamic(() => import('./components/BranchPageContent'), { ssr: true });

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

const branchKeywords: Record<string, { primary: string; secondary: string[]; h1: string; title: string }> = {
  cse: {
    primary: 'CSE projects in Bangalore',
    h1: 'CSE / ISE / AI-ML / BCA / MCA Projects in Bangalore — Final Year Projects',
    title: 'CSE / ISE / AI-ML / BCA / MCA Projects in Bangalore | WEBUILDPRO',
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
    title: 'Mechanical Projects in Bangalore | Final Year | WEBUILDPRO',
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
    title: 'Electronics ECE Projects in Bangalore | Final Year | WEBUILDPRO',
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
    title: 'Electrical EEE Projects in Bangalore | Final Year | WEBUILDPRO',
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
    title: 'Civil Engineering Projects in Bangalore | Final Year | WEBUILDPRO',
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
      'CSE projects in Bangalore — AI/ML, Computer Vision, NLP, Blockchain & IoT final year titles. IEEE & non-IEEE, tested demos, source code & viva support. Online & offline, pan-India.',
  },
  mechanical: {
    description:
      'Mechanical projects in Bangalore — robotics, fabrication, thermal systems & renewable energy final year titles. Tested hardware, full documentation. Online & offline, pan-India.',
  },
  ece: {
    description:
      'Electronics ECE projects in Bangalore — embedded systems, IoT, VLSI, drone & RF final year titles. Working hardware, circuit diagrams & viva support. Online & offline, pan-India.',
  },
  eee: {
    description:
      'Electrical EEE projects in Bangalore — power electronics, PLC automation, EV & smart grid final year titles. Tested at rated parameters, full documentation. Delivered pan-India.',
  },
  civil: {
    description:
      'Civil projects in Bangalore — smart infrastructure, IoT SHM, GIS & materials testing final year titles. Working prototypes, full documentation. Online & offline, delivered pan-India.',
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
  const title = kw?.title || `${data.fullName} Projects in Bangalore | WEBUILDPRO India`;
  const description =
    branchMeta[branch]?.description ||
    `${data.fullName} projects in Bangalore — ${data.projects.length}+ titles, working hardware, source code & viva support. Online & offline, delivered pan-India.`;
  return {
    metadataBase: new URL(BASE_URL),
    title,
    description,
    alternates: {
      canonical: `${BASE_URL}/projects/${branch}`,
      languages: { 'en-IN': `${BASE_URL}/projects/${branch}` },
    },
    openGraph: {
      title,
      description,
      images: [{ url: '/assets/images/wbinlogo-1786121366410.jpeg', width: 1200, height: 630, alt: `${data.fullName} projects in Bangalore — WEBUILDPRO India` }],
    },
  };
}

export default async function BranchPage({ params }: { params: Promise<{ branch: string }> }) {
  const { branch } = await params;
  const data = branchData[branch];
  if (!data) notFound();

  const kw = branchKeywords[branch];
  const h1 = kw?.h1 || `${data.fullName} Projects in Bangalore`;

  return (
    <>
      <Header />
      <main id="main-content" className="pb-[calc(64px+env(safe-area-inset-bottom))] lg:pb-0">
        <BranchPageContent data={data} branch={branch} h1={h1} />
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}