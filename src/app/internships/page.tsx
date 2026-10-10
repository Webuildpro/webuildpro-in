import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import JsonLdScript from '@/components/JsonLdScript';
import { faqSchema, serviceSchema } from '@/lib/jsonld';
import LazyPageExtras from '@/components/LazyPageExtras';
import dynamic from 'next/dynamic';
import InternshipsContent from './components/InternshipsContent';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Engineering Internships for BTech Students Bangalore | WEBUILDPRO',
  description:
    'Engineering internships in Bangalore for BTech students in CSE, ECE, EEE & Mechanical. Work on real hardware builds, take home a project and verifiable certificate. Call +91 95382 08573.',
  alternates: {
    canonical: `${BASE_URL}/internships`,
  },
  openGraph: {
    title: 'Engineering Internships for BTech Students Bangalore | WEBUILDPRO',
    description:
      'An internship where you actually touch the hardware. Real components, real deadlines, verifiable certificate.',
    images: [{ url: '/assets/images/og-webuildpro.jpg', width: 1200, height: 630, alt: 'WEBUILDPRO engineering internship in Bangalore' }],
  },
};

const internFaqs = [
  {
    q: 'Do I need prior experience to apply?',
    a: 'No prior experience is required for the 2-week and 4-week tracks. The 8-week track is better suited for students who have completed at least one semester of their core engineering subjects.',
  },
  {
    q: 'Is the certificate verifiable?',
    a: 'Yes. Each certificate has a unique verification code. Recruiters and colleges can verify it on our website. It is earned on a real build — not attendance.',
  },
  {
    q: 'Can colleges enrol batches?',
    a: 'Yes. We run batch programmes for colleges with 10–50 students, with a fixed schedule and dedicated mentors. Contact us for batch pricing and scheduling.',
  },
  {
    q: 'What do I take home at the end?',
    a: 'A working project you built yourself, full source code and circuit diagrams, a portfolio document, and a verifiable completion certificate. Some tracks also include a mentor reference letter.',
  },
];

const tracks = [
  { name: 'Embedded Systems & IoT Internship', duration: 'P2W', url: '/internships' },
  { name: 'Drone Technology Internship', duration: 'P4W', url: '/internships' },
  { name: 'Robotics & Automation Internship', duration: 'P4W', url: '/internships' },
  { name: 'AI/ML & Computer Vision Internship', duration: 'P4W', url: '/internships' },
  { name: 'PCB Design Internship', duration: 'P2W', url: '/internships' },
];

export default function InternshipsPage() {
  return (
    <>
      <JsonLdScript
        nodes={[
          serviceSchema({ name: 'Engineering Internships in Bangalore', description: 'Engineering internship in Bangalore — Embedded IoT, Drone, Robotics, AI/ML & PCB Design tracks. Real hardware, verifiable certificate. 2–8 weeks, online & offline, pan-India.', path: '/internships', serviceType: 'Engineering internship' }),
          faqSchema(internFaqs),
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Internships', url: '/internships' },
        ]}
      />
      <Header />
      <main id="main-content">
        <InternshipsContent faqs={internFaqs} />
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}