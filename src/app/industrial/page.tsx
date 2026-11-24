import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import FaqSection from '@/app/components/FaqSection';
import JsonLdScript from '@/components/JsonLdScript';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/jsonld';
import LazyPageExtras from '@/components/LazyPageExtras';
import dynamic from 'next/dynamic';
import IndustrialContent from './components/IndustrialContent';

const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Industrial Prototype Development in Bangalore',
  description:
    'Industrial prototype development in Bangalore — custom drones, IoT devices, robotics, PLC automation & AI vision. Built under NDA in our Peenya lab.',
  alternates: {
    canonical: `${BASE_URL}/industrial`,
  },
  openGraph: {
    title: 'Industrial Prototype Development in Bangalore',
    description:
      'From spec sheet to working unit. Custom prototypes designed, fabricated and tested in Bangalore. NDA-first.',
    images: [{ url: '/assets/images/og-webuildpro.jpg', width: 1200, height: 630, alt: 'WEBUILDPRO industrial prototyping lab in Bangalore' }],
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
    q: 'Can you build a prototype if I only have an idea or a sketch?',
    a: 'Yes. We start with a feasibility study and a short requirements sheet, then move to CAD and PCB design and a working prototype. Share your idea and we send a fixed quote within 24 hours.',
  },
  {
    q: 'How much does an industrial prototype cost?',
    a: 'It depends on components, design effort and testing. We send a fixed quote within 24 hours of receiving your requirements, so you know the number before any work starts.',
  },
  {
    q: 'Do you offer small-batch production after the prototype?',
    a: 'Yes. Once the prototype is approved we can scope a small batch with you. We scope quantity and timeline with you before production begins.',
  },
  {
    q: 'Do you work with clients outside Bangalore?',
    a: 'Yes. Our lab is in Peenya, Bangalore. We deliver pan-India by courier and run design reviews over video calls, and you are welcome to visit the lab.',
  },
  {
    q: 'How long does a prototype take?',
    a: 'Industrial prototypes typically run 4–12 weeks depending on complexity. Drone builds run 6–12 weeks from requirements sign-off to test flight.',
  },
];

export default function IndustrialPage() {
  return (
    <>
      <JsonLdScript
        nodes={[
          breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Industrial Prototyping', url: '/industrial' }]),
          serviceSchema({ name: 'Industrial Prototype Development in Bangalore', description: 'Industrial prototype development in Bangalore — custom drones, IoT, PLC automation & robotics. NDA-first, full IP transfer, fixed quote in 24 hours. Delivered pan-India.', path: '/industrial' }),
          faqSchema(industrialFaqs),
        ]}
      />
      <Header />
      <main id="main-content">
        <IndustrialContent />
        <FaqSection faqs={industrialFaqs} />
        <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16" aria-labelledby="industrial-reading">
          <h2 id="industrial-reading" className="text-xl font-bold text-foreground mb-4">
            Further reading
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/blog/drone-development-india-2026" className="text-accent hover:underline">
                Drone development in India: rules and costs
              </Link>
            </li>
            <li>
              <Link href="/blog/startups-bangalore-hardware-prototype" className="text-accent hover:underline">
                Hardware prototype development for Bangalore startups
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-accent hover:underline">
                Project and internship FAQ
              </Link>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}