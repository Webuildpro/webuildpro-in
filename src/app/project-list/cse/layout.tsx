import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const metadata: Metadata = {
  title: 'CSE Project List 2026',
  description: 'CSE, AI & ML final year project title list from WEBUILDPRO Bangalore — 22 titles across computer vision, ML, NLP, blockchain & IoT. Download as PDF.',
  alternates: {
    canonical: `${BASE_URL}/project-list/cse`,
  },
  openGraph: {
    title: 'CSE Project List 2026',
    description: 'Complete CSE / AI / ML final year project title list from WEBUILDPRO Bangalore — 22 titles across Computer Vision, ML, NLP, Blockchain, IoT and more.',
    images: [{ url: '/assets/images/og-webuildpro.jpg', width: 1200, height: 630, alt: 'CSE Project List — WEBUILDPRO Bangalore' }],
  },
};

export default function CSEProjectListLayout({ children }: { children: React.ReactNode }) {
  return children;
}
