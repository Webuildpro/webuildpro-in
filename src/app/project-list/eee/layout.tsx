import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const metadata: Metadata = {
  title: 'EEE Project List 2026 | WEBUILDPRO Bangalore',
  description: 'Complete EEE final year project title list from WEBUILDPRO Bangalore — titles across Power Electronics, Renewable Energy, Industrial Automation, EV & Battery Systems and more. Download as PDF.',
  alternates: {
    canonical: `${BASE_URL}/project-list/eee`,
  },
  openGraph: {
    title: 'EEE Project List 2026 | WEBUILDPRO Bangalore',
    description: 'Complete EEE final year project title list from WEBUILDPRO Bangalore — titles across Power Electronics, Renewable Energy, Industrial Automation, EV & Battery Systems and more.',
    images: [{ url: '/assets/images/wbinlogo-1786121366410.jpeg', width: 1200, height: 630, alt: 'EEE Project List — WEBUILDPRO Bangalore' }],
  },
};

export default function EEEProjectListLayout({ children }: { children: React.ReactNode }) {
  return children;
}
