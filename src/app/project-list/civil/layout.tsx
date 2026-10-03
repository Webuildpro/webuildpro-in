import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const metadata: Metadata = {
  title: 'Civil Project List 2026',
  description: 'Civil final year project title list from WEBUILDPRO Bangalore — structural, geotechnical, water resources, transportation, BIM & smart infrastructure. PDF.',
  alternates: {
    canonical: `${BASE_URL}/project-list/civil`,
  },
  openGraph: {
    title: 'Civil Project List 2026',
    description: 'Complete Civil engineering final year project title list from WEBUILDPRO Bangalore — titles across Structural Engineering, Geotechnical, Water Resources, Transportation, BIM and Smart Infrastructure.',
    images: [{ url: '/assets/images/og-webuildpro.jpg', width: 1200, height: 630, alt: 'Civil Project List — WEBUILDPRO Bangalore' }],
  },
};

export default function CivilProjectListLayout({ children }: { children: React.ReactNode }) {
  return children;
}
