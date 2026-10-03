import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const metadata: Metadata = {
  title: 'ECE Project List 2026',
  description: 'Complete ECE final year project title list from WEBUILDPRO Bangalore — 32 titles across Embedded Systems, IoT, Drones, Robotics and more. Download as PDF.',
  alternates: {
    canonical: `${BASE_URL}/project-list/ece`,
  },
  openGraph: {
    title: 'ECE Project List 2026',
    description: 'Complete ECE final year project title list from WEBUILDPRO Bangalore — 32 titles across Embedded Systems, IoT, Drones, Robotics and more.',
    images: [{ url: '/assets/images/og-webuildpro.jpg', width: 1200, height: 630, alt: 'ECE Project List — WEBUILDPRO Bangalore' }],
  },
};

export default function ECEProjectListLayout({ children }: { children: React.ReactNode }) {
  return children;
}
