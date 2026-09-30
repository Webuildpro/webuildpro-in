import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import LazyPageExtras from '@/components/LazyPageExtras';
import dynamic from 'next/dynamic';
import IndustrialContent from './components/IndustrialContent';

const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Industrial Prototype Development in Bangalore | WEBUILDPRO',
  description:
    'Industrial prototype development in Bangalore — custom drones, IoT, PLC automation & robotics. NDA-first, full IP transfer, fixed quote in 24 hours. Delivered pan-India.',
  alternates: {
    canonical: `${BASE_URL}/industrial`,
    languages: { 'en-IN': `${BASE_URL}/industrial` },
  },
  openGraph: {
    title: 'Industrial Prototype Development in Bangalore | WEBUILDPRO',
    description:
      'From spec sheet to working unit. Custom prototypes designed, fabricated and tested in Bangalore. NDA-first.',
    images: [{ url: '/assets/images/wbinlogo-1786121366410.jpeg', width: 1200, height: 630, alt: 'WEBUILDPRO industrial prototyping lab in Bangalore' }],
  },
};

const industrialFaqs = [
  {
    q: 'Do you work under NDA?',
    a: 'Yes. All industrial and commercial work is done under NDA from day one. Full IP transfers to you on final payment.',
  },
  {
    q: 'What types of drones do you build?',
    a: 'We build survey drones, inspection drones, agricultural spraying drones and payload-carrying platforms. Every drone is tuned and test-flown before delivery.',
  },
  {
    q: 'How long does a prototype take?',
    a: 'Industrial prototypes typically run 4–12 weeks depending on complexity. Drone builds run 6–12 weeks from requirements sign-off to test flight.',
  },
];

export default function IndustrialPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <IndustrialContent />
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}