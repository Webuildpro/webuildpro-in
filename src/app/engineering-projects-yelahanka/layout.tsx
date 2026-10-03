import type { Metadata } from 'next';
import JsonLdScript from '@/components/JsonLdScript';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/jsonld';
import { locationFaqs } from './faqs';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Engineering & Final Year Projects in Yelahanka',
  description:
    'Engineering & final year projects in Yelahanka, Bangalore — CSE, ECE, EEE, Mechanical, Civil. Mini & IEEE projects, custom-built & tested. WhatsApp 9538208573.',
  alternates: {
    canonical: `${BASE_URL}/engineering-projects-yelahanka`,
  },
  openGraph: {
    title: 'Engineering & Final Year Projects in Yelahanka',
    description:
      'Custom, tested, viva-ready engineering projects for Yelahanka students — CSE, ECE, EEE, Mechanical, Civil. IEEE & non-IEEE. Online & offline delivery.',
    images: [
      {
        url: '/assets/images/og-webuildpro.jpg',
        width: 1200,
        height: 630,
        alt: 'Engineering & Final Year Projects in Yelahanka — WEBUILDPRO',
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLdScript
        nodes={[
          breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Engineering Projects in Yelahanka', url: '/engineering-projects-yelahanka' }]),
          serviceSchema({
            name: 'Engineering & Final Year Projects in Yelahanka',
            description: 'Engineering & final year projects in Yelahanka, Bangalore — CSE, ECE, EEE, Mechanical, Civil. Mini & IEEE projects, custom-built & tested. WhatsApp 9538208573.',
            path: '/engineering-projects-yelahanka',
            areaServed: 'Yelahanka, Bengaluru',
          }),
          faqSchema(locationFaqs),
        ]}
      />
      {children}
    </>
  );
}
