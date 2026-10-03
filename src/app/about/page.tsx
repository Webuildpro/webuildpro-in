import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import LazyPageExtras from '@/components/LazyPageExtras';
import dynamic from 'next/dynamic';
import AboutContent from './components/AboutContent';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Engineering Company in Bangalore',
  description:
    'WEBUILDPRO India is an engineering lab in Peenya, Bangalore that designs, builds and tests student projects, internships and industrial prototypes.',
  alternates: {
    canonical: `${BASE_URL}/about`,
    languages: { 'en-IN': `${BASE_URL}/about` },
  },
  openGraph: {
    title: 'Engineering Company in Bangalore',
    description:
      'A real engineering lab in Bangalore. Working engineers, not sales staff. 300+ projects, 4.8★ on Google.',
    images: [{ url: '/assets/images/og-webuildpro.jpg', width: 1200, height: 630, alt: 'WEBUILDPRO India engineering lab in Bangalore' }],
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
        ]}
      />
      <Header />
      <main id="main-content">
        <AboutContent />
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}