import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
import LazyPageExtras from '@/components/LazyPageExtras';

import { branchData } from '@/lib/data/projects';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'HTML Sitemap — All Pages | WEBUILDPRO India Bangalore',
  description: 'Complete sitemap of WEBUILDPRO India — all pages, project titles and blog articles. Engineering projects, internships and industrial prototypes in Bangalore.',
  alternates: {
    canonical: `${BASE_URL}/sitemap`,
  },
  robots: { index: true, follow: true },
};

const mainPages = [
  { label: 'Home — Engineering Projects in Bangalore', href: '/' },
  { label: 'Projects Hub — All Engineering Branches', href: '/projects' },
  { label: 'Mini Projects — 1st to 6th Semester, All Branches', href: '/mini-projects' },
  { label: 'Industrial Prototype Development in Bangalore', href: '/industrial' },
  { label: 'Engineering Internship in Bangalore', href: '/internships' },
  { label: 'About WEBUILDPRO India — Engineering Company in Bangalore', href: '/about' },
  { label: 'Contact — Project Centre Near Me Bangalore', href: '/contact' },
  { label: 'Blog — Engineering Guides and Insights', href: '/blog' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
];

const branchPages = [
  { label: 'CSE Final Year Projects in Bangalore', href: '/projects/cse', slug: 'cse' },
  { label: 'Mechanical Engineering Projects in Bangalore', href: '/projects/mechanical', slug: 'mechanical' },
  { label: 'ECE Projects in Bangalore', href: '/projects/ece', slug: 'ece' },
  { label: 'EEE Projects in Bangalore', href: '/projects/eee', slug: 'eee' },
  { label: 'Civil Engineering Projects in Bangalore', href: '/projects/civil', slug: 'civil' },
];

const eceSubCategories = [
  { label: 'IoT projects in Bangalore', href: '/projects/ece/iot-projects-in-bangalore' },
  { label: 'Embedded systems projects in Bangalore', href: '/projects/ece/embedded-systems-projects-in-bangalore' },
  { label: 'Robotics projects in Bangalore', href: '/projects/ece/robotics-projects-in-bangalore' },
  { label: 'Drone projects in Bangalore', href: '/projects/ece/drone-projects-in-bangalore' },
  { label: 'VLSI projects in Bangalore', href: '/projects/ece/vlsi-projects-in-bangalore' },
  { label: 'Biomedical projects in Bangalore', href: '/projects/ece/biomedical-projects-in-bangalore' },
  { label: 'Communication projects in Bangalore', href: '/projects/ece/communication-projects-in-bangalore' },
];

const cseSubCategories = [
  { label: 'Machine learning projects in Bangalore', href: '/projects/cse/machine-learning-projects-in-bangalore' },
  { label: 'AI projects in Bangalore', href: '/projects/cse/ai-projects-in-bangalore' },
  { label: 'Data science projects in Bangalore', href: '/projects/cse/data-science-projects-in-bangalore' },
  { label: 'Blockchain projects in Bangalore', href: '/projects/cse/blockchain-projects-in-bangalore' },
  { label: 'IoT projects in Bangalore for CSE', href: '/projects/cse/iot-projects-in-bangalore' },
  { label: 'Python projects in Bangalore', href: '/projects/cse/python-projects-in-bangalore' },
  { label: 'Image processing projects in Bangalore', href: '/projects/cse/image-processing-projects-in-bangalore' },
  { label: 'Cyber security projects in Bangalore', href: '/projects/cse/cybersecurity-projects-in-bangalore' },
];

const mechanicalSubCategories = [
  { label: 'Automobile projects in Bangalore', href: '/projects/mechanical/automobile-projects-in-bangalore' },
  { label: 'Hydraulics & pneumatics projects in Bangalore', href: '/projects/mechanical/hydraulics-pneumatics-projects-in-bangalore' },
  { label: 'Robotics & mechatronics projects in Bangalore', href: '/projects/mechanical/robotics-mechatronics-projects-in-bangalore' },
  { label: 'Design & analysis projects in Bangalore', href: '/projects/mechanical/design-analysis-projects-in-bangalore' },
  { label: 'Agricultural projects in Bangalore', href: '/projects/mechanical/agricultural-projects-in-bangalore' },
  { label: 'Renewable energy projects in Bangalore', href: '/projects/mechanical/renewable-energy-projects-in-bangalore' },
];

const eeeSubCategories = [
  { label: 'Power electronics projects in Bangalore', href: '/projects/eee/power-electronics-projects-in-bangalore' },
  { label: 'PLC & automation projects in Bangalore', href: '/projects/eee/plc-automation-projects-in-bangalore' },
  { label: 'Electric vehicle (EV) projects in Bangalore', href: '/projects/eee/ev-projects-in-bangalore' },
  { label: 'Solar energy projects in Bangalore for EEE', href: '/projects/eee/solar-energy-projects-in-bangalore' },
  { label: 'Motor control projects in Bangalore', href: '/projects/eee/motor-control-projects-in-bangalore' },
];

const projectListPages = [
  { label: 'ECE project list — printable PDF', href: '/project-list/ece' },
  { label: 'CSE project list — printable PDF', href: '/project-list/cse' },
  { label: 'EEE project list — printable PDF', href: '/project-list/eee' },
  { label: 'Mechanical project list — printable PDF', href: '/project-list/mechanical' },
  { label: 'Civil project list — printable PDF', href: '/project-list/civil' },
];

const landingPages = [
  { label: 'Best Engineering Project Centre in Bangalore', href: '/project-centre-bangalore' },
  { label: 'Final Year Engineering Projects in Bangalore', href: '/final-year-projects-bangalore' },
  { label: 'Engineering Internship Centre in Bangalore', href: '/internship-bangalore' },
  { label: 'Engineering & Final Year Projects in Vijayanagar', href: '/engineering-projects-vijayanagar' },
  { label: 'Engineering & Final Year Projects in Jayanagar', href: '/engineering-projects-jayanagar' },
  { label: 'Engineering & Final Year Projects in BTM Layout', href: '/engineering-projects-btm-layout' },
  { label: 'Engineering & Final Year Projects in Yelahanka', href: '/engineering-projects-yelahanka' },
];

const blogArticles = [
  { label: 'How to Choose a Final Year Engineering Project That Actually Impresses the Panel', href: '/blog/how-to-choose-final-year-engineering-project' },
  { label: 'Final Year Project Cost in Bangalore: What You Should Actually Be Paying (2026)', href: '/blog/final-year-project-cost-bangalore-2026' },
  { label: 'IEEE vs Non-IEEE Projects: Which One Should You Pick?', href: '/blog/ieee-vs-non-ieee-projects' },
  { label: 'A Realistic Timeline for Building a Working Hardware Project', href: '/blog/realistic-timeline-hardware-project' },
  { label: 'How Startups in Bangalore Can Build a Hardware Prototype Without an In-House Team', href: '/blog/startups-bangalore-hardware-prototype' },
  { label: 'Drone Development in India: Rules, Costs and What\'s Actually Possible in 2026', href: '/blog/drone-development-india-2026' },
  { label: 'Best Project Centre in Bangalore: How to Actually Choose One (2026 Guide)', href: '/blog/best-project-centre-bangalore-guide' },
  { label: 'Final Year Engineering Projects in Bangalore: Complete Guide for 2026', href: '/blog/final-year-projects-bangalore-complete-guide' },
  { label: 'Best CSE / AI-ML Final Year Projects in Bangalore (with Ideas)', href: '/blog/best-cse-aiml-final-year-projects-bangalore' },
  { label: 'Top Electronics & ECE Projects in Bangalore for Final Year', href: '/blog/top-electronics-ece-projects-bangalore' },
  { label: 'Mechanical Engineering Projects in Bangalore: Ideas + Where to Build Them', href: '/blog/mechanical-engineering-projects-bangalore' },
  { label: 'EEE & Electrical Projects in Bangalore: 2026 Project Ideas', href: '/blog/eee-electrical-projects-bangalore' },
  { label: 'Civil Engineering Projects in Bangalore: Modern Ideas for Final Year', href: '/blog/civil-engineering-projects-bangalore' },
  { label: 'Best Internship Centre in Bangalore for Engineering Students (Online & Offline)', href: '/blog/best-internship-centre-bangalore' },
  { label: 'Online vs Offline Engineering Projects: Which Is Right for You?', href: '/blog/online-vs-offline-engineering-projects' },
  { label: 'How Much Do Final Year Projects Cost in Bangalore? (2026 Price Guide)', href: '/blog/how-much-do-final-year-projects-cost-bangalore' },
];

export default function SitemapPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="micro-label block mb-3">// SITE MAP</span>
            <h1 className="text-hero-lg font-bold text-foreground mb-4">
              All pages on WEBUILDPRO India
            </h1>
            <p className="text-muted-foreground text-base">
              Complete index of all pages, project titles and articles. Engineering projects, internships and industrial prototypes in Bangalore (also known as Bengaluru).
            </p>
          </div>

          {/* Main pages */}
          <section className="mb-10" aria-labelledby="main-pages-heading">
            <h2 id="main-pages-heading" className="font-mono font-bold text-xs tracking-widest text-accent mb-4">// MAIN PAGES</h2>
            <ul className="space-y-2">
              {mainPages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                    <span className="text-primary group-hover:text-primary/80">→</span>
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Landing pages */}
          <section className="mb-10" aria-labelledby="landing-pages-heading">
            <h2 id="landing-pages-heading" className="font-mono font-bold text-xs tracking-widest text-accent mb-4">// POPULAR IN BANGALORE</h2>
            <ul className="space-y-2">
              {landingPages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                    <span className="text-primary group-hover:text-primary/80">→</span>
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Branch pages + project titles */}
          <section className="mb-10" aria-labelledby="branch-pages-heading">
            <h2 id="branch-pages-heading" className="font-mono font-bold text-xs tracking-widest text-accent mb-4">// PROJECT BRANCH PAGES</h2>
            {branchPages.map((branch) => {
              const data = branchData[branch.slug];
              return (
                <div key={branch.slug} className="mb-6">
                  <Link href={branch.href} className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors mb-2">
                    <span className="text-primary">→</span>
                    {branch.label}
                  </Link>
                  {data?.projects && (
                    <ul className="ml-6 space-y-1">
                      {data.projects.map((project) => (
                        <li key={project.id}>
                          <Link
                            href={`${branch.href}#${project.id}`}
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {project.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </section>

          {/* ECE sub-category pages */}
          <section className="mb-10" aria-labelledby="ece-subcats-heading">
            <h2 id="ece-subcats-heading" className="font-mono font-bold text-xs tracking-widest text-accent mb-4">// ECE SUB-CATEGORY PAGES (MICRO-KEYWORD LANDING PAGES)</h2>
            <ul className="space-y-2">
              {eceSubCategories.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                    <span className="text-primary group-hover:text-primary/80">→</span>
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* CSE sub-category pages */}
          <section className="mb-10" aria-labelledby="cse-subcats-heading">
            <h2 id="cse-subcats-heading" className="font-mono font-bold text-xs tracking-widest text-accent mb-4">// CSE SUB-CATEGORY PAGES</h2>
            <ul className="space-y-2">
              {cseSubCategories.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                    <span className="text-primary group-hover:text-primary/80">→</span>
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Mechanical sub-category pages */}
          <section className="mb-10" aria-labelledby="mechanical-subcats-heading">
            <h2 id="mechanical-subcats-heading" className="font-mono font-bold text-xs tracking-widest text-accent mb-4">// MECHANICAL SUB-CATEGORY PAGES</h2>
            <ul className="space-y-2">
              {mechanicalSubCategories.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                    <span className="text-primary group-hover:text-primary/80">→</span>
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* EEE sub-category pages */}
          <section className="mb-10" aria-labelledby="eee-subcats-heading">
            <h2 id="eee-subcats-heading" className="font-mono font-bold text-xs tracking-widest text-accent mb-4">// EEE SUB-CATEGORY PAGES</h2>
            <ul className="space-y-2">
              {eeeSubCategories.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                    <span className="text-primary group-hover:text-primary/80">→</span>
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Project list pages */}
          <section className="mb-10" aria-labelledby="project-list-pages-heading">
            <h2 id="project-list-pages-heading" className="font-mono font-bold text-xs tracking-widest text-accent mb-4">// PROJECT LIST PAGES (PRINTABLE PDF)</h2>
            <ul className="space-y-2">
              {projectListPages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                    <span className="text-primary group-hover:text-primary/80">→</span>
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Blog articles */}
          <section className="mb-10" aria-labelledby="blog-pages-heading">
            <h2 id="blog-pages-heading" className="font-mono font-bold text-xs tracking-widest text-accent mb-4">// BLOG ARTICLES</h2>
            <ul className="space-y-2">
              {blogArticles.map((article) => (
                <li key={article.href}>
                  <Link href={article.href} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                    <span className="text-primary group-hover:text-primary/80">→</span>
                    {article.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}
