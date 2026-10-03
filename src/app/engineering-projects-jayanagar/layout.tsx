import type { Metadata } from 'next';
import JsonLdScript from '@/components/JsonLdScript';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/jsonld';
import { locationFaqs } from './faqs';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Engineering & Final Year Projects in Jayanagar',
  description:
    'Engineering & final year projects in Jayanagar, Bangalore — CSE, ECE, EEE, Mechanical, Civil. Mini & IEEE projects, custom-built & tested. WhatsApp 9538208573.',
  alternates: {
    canonical: `${BASE_URL}/engineering-projects-jayanagar`,
  },
  openGraph: {
    title: 'Engineering & Final Year Projects in Jayanagar',
    description:
      'Custom, tested, viva-ready engineering projects for Jayanagar students — CSE, ECE, EEE, Mechanical, Civil. IEEE & non-IEEE. Online & offline delivery.',
    images: [
      {
        url: '/assets/images/og-webuildpro.jpg',
        width: 1200,
        height: 630,
        alt: 'Engineering & Final Year Projects in Jayanagar — WEBUILDPRO',
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLdScript
        nodes={[
          breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Engineering Projects in Jayanagar', url: '/engineering-projects-jayanagar' }]),
          serviceSchema({
            name: 'Engineering & Final Year Projects in Jayanagar',
            description: 'Engineering & final year projects in Jayanagar, Bangalore — CSE, ECE, EEE, Mechanical, Civil. Mini & IEEE projects, custom-built & tested. WhatsApp 9538208573.',
            path: '/engineering-projects-jayanagar',
            areaServed: 'Jayanagar, Bengaluru',
          }),
          faqSchema(locationFaqs),
        ]}
      />
      {children}
    </>
  );
}
