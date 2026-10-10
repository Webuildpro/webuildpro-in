import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import FaqSection from '@/app/components/FaqSection';
import JsonLdScript from '@/components/JsonLdScript';
import { faqSchema } from '@/lib/jsonld';
import LazyPageExtras from '@/components/LazyPageExtras';
import dynamic from 'next/dynamic';
import ContactPageContent from './components/ContactPageContent';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Contact WEBUILDPRO | Engineering Project Centre Bangalore',
  description:
    'Contact WEBUILDPRO in Peenya, Bangalore. Call or WhatsApp +91 95382 08573 for a fixed project quote within 24 hours. Open Mon–Sat, 10 AM – 7 PM.',
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact WEBUILDPRO India — Project Centre in Bangalore',
    description:
      'Free 15-minute call with an engineer. Fixed quote in 24 hours. No obligation. Bangalore — Peenya 2nd Stage, Bengaluru 560058.',
    images: [{ url: '/assets/images/og-webuildpro.jpg', width: 1200, height: 630, alt: 'WEBUILDPRO India contact — project centre in Bangalore' }],
  },
};

const contactFaqs = [
  {
    q: 'How quickly will you respond?',
    a: 'An engineer will contact you within 24 hours. For urgent enquiries, WhatsApp us directly at +91 95382 08573.',
  },
  {
    q: 'Can I visit the lab in Bangalore?',
    a: "Yes. We're at Peenya 2nd Stage, Bengaluru 560058. Message us on WhatsApp first so an engineer is free to walk you through it.",
  },
  {
    q: 'Do you work with clients outside Bangalore?',
    a: 'Yes. We deliver pan-India. Most of our communication is over WhatsApp and video call, and we ship the working unit to you.',
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLdScript
        nodes={[
          faqSchema(contactFaqs),
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ]}
      />
      <Header />
      <main id="main-content">
        <ContactPageContent />
        <FaqSection faqs={contactFaqs} />
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}