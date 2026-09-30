import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
import LazyPageExtras from '@/components/LazyPageExtras';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

import { branchData } from '@/lib/data/projects';
import CircuitDivider from '@/components/CircuitDivider';
import Icon from '@/components/ui/AppIcon';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Engineering Projects in Bangalore — All Branches | WEBUILDPRO',
  description:
    'Engineering projects in Bangalore across CSE, Mechanical, ECE, EEE & Civil — 60+ titles, working hardware, source code & viva support. Online & offline, delivered pan-India.',
  alternates: {
    canonical: `${BASE_URL}/projects`,
    languages: { 'en-IN': `${BASE_URL}/projects` },
  },
  openGraph: {
    title: 'Engineering Projects in Bangalore — All Branches | WEBUILDPRO',
    description: 'Browse all engineering project branches at WEBUILDPRO India in Bangalore. CSE, Mechanical, ECE, EEE, Civil projects with working hardware.',
    images: [{ url: '/assets/images/wbinlogo-1786121366410.jpeg', width: 1200, height: 630, alt: 'WEBUILDPRO India engineering projects in Bangalore' }],
  },
};

const miniProjectCard = {
  slug: 'mini-projects',
  name: 'Mini Projects',
  description:
    'Affordable, ready mini projects for 1st–6th semester students across all branches. Fixed pricing, working hardware, source code and documentation. Custom mini projects on request.',
  icon: 'SparklesIcon' as const,
  keyword: 'Mini projects for engineering students',
  href: '/mini-projects',
  count: 17,
};

const branches = [
  {
    slug: 'cse',
    name: 'CSE / ISE / AI-ML / BCA / MCA',
    description: 'Real-time AI systems, machine learning models, blockchain applications and full-stack software projects. IEEE and non-IEEE titles with working demos.',
    icon: 'CpuChipIcon' as const,
    keyword: 'CSE final year projects in Bangalore',
  },
  {
    slug: 'mechanical',
    name: 'Mechanical Engineering',
    description: 'Fabricated mechanical systems, automation rigs, renewable energy prototypes and precision mechanisms. Built and tested in our Bangalore workshop.',
    icon: 'CogIcon' as const,
    keyword: 'Mechanical engineering projects in Bangalore',
  },
  {
    slug: 'ece',
    name: 'Electronics & Communication (ECE)',
    description: 'IoT systems, embedded platforms, VLSI designs, RF modules and drone-based projects. Hardware-first with full circuit documentation.',
    icon: 'WifiIcon' as const,
    keyword: 'ECE projects in Bangalore',
  },
  {
    slug: 'eee',
    name: 'Electrical & Electronics (EEE)',
    description: 'Power electronics, motor drives, PLC automation, smart grid systems and energy management projects. Tested at rated parameters.',
    icon: 'BoltIcon' as const,
    keyword: 'EEE projects in Bangalore',
  },
  {
    slug: 'civil',
    name: 'Civil & Mining',
    description: 'Structural health monitoring, GIS-based analysis, sustainable materials research and smart infrastructure projects.',
    icon: 'BuildingOffice2Icon' as const,
    keyword: 'Civil engineering projects in Bangalore',
  },
];

export default function ProjectsHubPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Projects', url: '/projects' },
        ]}
      />
      <Header />
      <main id="main-content">
        <section className="relative pt-24 pb-16 bg-background blueprint-grid" aria-labelledby="projects-hub-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-muted-foreground">
                <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
                <li aria-hidden="true"><Icon name="ChevronRightIcon" size={12} /></li>
                <li className="text-foreground font-medium" aria-current="page">Projects</li>
              </ol>
            </nav>
            <span className="micro-label block mb-3">// ENGINEERING PROJECTS IN BANGALORE</span>
            <h1 id="projects-hub-heading" className="text-hero-lg font-bold text-foreground mb-4">
              Engineering projects in Bangalore — five branches, one lab.
            </h1>
            <p className="text-muted-foreground text-base max-w-2xl mb-12">
              WEBUILDPRO India builds final year and mini projects across all five engineering branches in Bangalore. Every project is designed, fabricated and tested in our lab — not sourced from a reseller. 60+ project titles, working hardware, full documentation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {/* Mini Projects — always first */}
              <Link
                href={miniProjectCard.href}
                className="card-glow bg-card border border-border rounded p-6 flex flex-col group hover:border-primary/40 transition-colors"
              >
                <div className="w-10 h-10 rounded bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                  <Icon name={miniProjectCard.icon} size={18} className="text-accent" />
                </div>
                <h2 className="font-bold text-foreground text-base mb-2 group-hover:text-primary transition-colors">
                  {miniProjectCard.name}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{miniProjectCard.description}</p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground font-mono">{miniProjectCard.count} project titles</span>
                  <span className="flex items-center gap-1 text-xs text-accent font-medium">
                    {miniProjectCard.keyword}
                    <Icon name="ArrowRightIcon" size={12} />
                  </span>
                </div>
              </Link>

              {branches.map((branch) => {
                const data = branchData[branch.slug];
                const count = data?.projects?.length || 0;
                return (
                  <Link
                    key={branch.slug}
                    href={`/projects/${branch.slug}`}
                    className="card-glow bg-card border border-border rounded p-6 flex flex-col group hover:border-primary/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                      <Icon name={branch.icon} size={18} className="text-accent" />
                    </div>
                    <h2 className="font-bold text-foreground text-base mb-2 group-hover:text-primary transition-colors">
                      {branch.name}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{branch.description}</p>
                    <div className="flex items-center justify-between border-t border-border pt-4">
                      <span className="text-xs text-muted-foreground font-mono">{count} project titles</span>
                      <span className="flex items-center gap-1 text-xs text-accent font-medium">
                        {branch.keyword}
                        <Icon name="ArrowRightIcon" size={12} />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <CircuitDivider />

        {/* Popular project categories in Bangalore */}
        <section className="py-12 bg-background border-b border-border" aria-labelledby="popular-categories-projects-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="micro-label block mb-3">// POPULAR PROJECT CATEGORIES IN BANGALORE</span>
            <h2 id="popular-categories-projects-heading" className="text-section-xl font-bold text-foreground mb-2">
              Popular project categories in Bangalore
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Explore specific project domains — each page lists real titles, descriptions and pricing.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/projects/ece/iot-projects-in-bangalore" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                IoT projects in Bangalore
              </Link>
              <Link href="/projects/ece/embedded-systems-projects-in-bangalore" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                Embedded systems projects in Bangalore
              </Link>
              <Link href="/projects/ece/robotics-projects-in-bangalore" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                Robotics projects in Bangalore
              </Link>
              <Link href="/projects/ece/drone-projects-in-bangalore" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                Drone projects in Bangalore
              </Link>
              <Link href="/projects/ece/vlsi-projects-in-bangalore" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                VLSI projects in Bangalore
              </Link>
              <Link href="/projects/ece/biomedical-projects-in-bangalore" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                Biomedical projects in Bangalore
              </Link>
              <Link href="/projects/ece/communication-projects-in-bangalore" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                Communication projects in Bangalore
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-secondary" aria-labelledby="projects-cta-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <span className="micro-label block mb-3">// HAVE YOUR OWN IDEA?</span>
            <h2 id="projects-cta-heading" className="text-section-xl font-bold text-foreground mb-4">
              Don&apos;t see your project? Bring the idea.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              We do the feasibility check, tell you honestly what&apos;s achievable in your timeline, and build it. Engineering project consultancy in Bangalore — free 15-minute call with an engineer.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold">
                <Icon name="DocumentTextIcon" size={16} />
                Get a Free Project Quote
              </Link>
              <a
                href="https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%20have%20my%20own%20project%20idea."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={16} />
                WhatsApp About My Idea
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}
