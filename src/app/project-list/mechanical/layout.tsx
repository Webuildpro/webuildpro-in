import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const metadata: Metadata = {
  title: 'Mechanical Project List 2026',
  description: 'Mechanical final year project title list from WEBUILDPRO Bangalore — robotics, thermal, manufacturing, renewable energy & mechatronics. Download as PDF.',
  alternates: {
    canonical: `${BASE_URL}/project-list/mechanical`,
  },
  openGraph: {
    title: 'Mechanical Project List 2026',
    description: 'Complete Mechanical engineering final year project title list from WEBUILDPRO Bangalore — titles across Robotics, Thermal Systems, Manufacturing, Renewable Energy, Mechatronics and more.',
    images: [{ url: '/assets/images/og-webuildpro.jpg', width: 1200, height: 630, alt: 'Mechanical Project List — WEBUILDPRO Bangalore' }],
  },
};

export default function MechanicalProjectListLayout({ children }: { children: React.ReactNode }) {
  return children;
}
