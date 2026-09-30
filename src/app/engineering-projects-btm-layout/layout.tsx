import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Engineering & Final Year Projects in BTM Layout | WEBUILDPRO',
  description:
    'Engineering & final year projects in BTM Layout, Bangalore — CSE, ECE, EEE, Mechanical, Civil. Mini & IEEE projects, custom-built & tested. WhatsApp 9538208573.',
  alternates: {
    canonical: `${BASE_URL}/engineering-projects-btm-layout`,
    languages: { 'en-IN': `${BASE_URL}/engineering-projects-btm-layout` },
  },
  openGraph: {
    title: 'Engineering & Final Year Projects in BTM Layout | WEBUILDPRO',
    description:
      'Custom, tested, viva-ready engineering projects for BTM Layout students — CSE, ECE, EEE, Mechanical, Civil. IEEE & non-IEEE. Online & offline delivery.',
    images: [
      {
        url: '/assets/images/wbinlogo-1786121366410.jpeg',
        width: 1200,
        height: 630,
        alt: 'Engineering & Final Year Projects in BTM Layout — WEBUILDPRO',
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
