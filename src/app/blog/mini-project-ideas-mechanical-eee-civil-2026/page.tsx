import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
import LazyPageExtras from '@/components/LazyPageExtras';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import BlogPostingJsonLd from '@/components/BlogPostingJsonLd';

import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';
const SLUG = 'mini-project-ideas-mechanical-eee-civil-2026';
const PAGE_TITLE = 'Mini Project Ideas: Mechanical, EEE & Civil (2026)';
const PAGE_DESCRIPTION =
  'Simple, working mini project ideas for Mechanical, EEE and Civil students in Bangalore. 1st–6th sem builds with fabrication & guidance. Online & offline.';
const PAGE_DATE = '2026-08-03';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: `${BASE_URL}/blog/${SLUG}`,
    languages: { 'en-IN': `${BASE_URL}/blog/${SLUG}` },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: 'article',
    publishedTime: PAGE_DATE,
    modifiedTime: PAGE_DATE,
    authors: ['WEBUILDPRO India'],
    images: [
      {
        url: '/assets/images/og-webuildpro.jpg',
        width: 1200,
        height: 630,
        alt: 'Mini Project Ideas for Mechanical, EEE & Civil Students 2026 — WEBUILDPRO Bangalore',
      },
    ],
  },
};

const tocItems = [
  { id: 'mechanical-mini-projects', label: 'Mechanical Mini Projects' },
  { id: 'eee-mini-projects', label: 'EEE Mini Projects' },
  { id: 'civil-mini-projects', label: 'Civil Mini Projects' },
  { id: 'how-to-choose-mini-project', label: 'How to Choose the Right Mini Project' },
];

interface MiniProjectCardProps {
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate';
  branch: 'mechanical' | 'eee' | 'civil';
}

function MiniProjectCard({ title, description, difficulty, branch }: MiniProjectCardProps) {
  const difficultyColor =
    difficulty === 'Beginner' ?'bg-green-500/10 text-green-400 border-green-500/20' :'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';

  const branchLabels: Record<string, string> = {
    mechanical: 'Mechanical',
    eee: 'EEE',
    civil: 'Civil',
  };

  const whatsappMsg = encodeURIComponent(
    `Hi, I need help with my ${branchLabels[branch]} mini project: ${title}`
  );

  return (
    <div className="bg-card border border-border rounded p-5 mb-4">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <h3 className="font-bold text-foreground text-sm leading-snug flex-1">{title}</h3>
        <span className={`text-xs px-2 py-0.5 rounded border font-mono flex-shrink-0 ${difficultyColor}`}>
          {difficulty}
        </span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{description}</p>
      <a
        href={`https://wa.me/919591570099?text=${whatsappMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent/80 transition-colors font-medium"
      >
        <Icon name="ChatBubbleLeftRightIcon" size={12} />
        Enquire about this project
      </a>
    </div>
  );
}

export default function MiniProjectIdeasMechanicalEEECivilPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'Mini Project Ideas: Mechanical, EEE & Civil (2026)', url: `/blog/${SLUG}` },
        ]}
      />
      <BlogPostingJsonLd
        headline="Mini Project Ideas: Mechanical, EEE & Civil (2026)"
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
        description={PAGE_DESCRIPTION}
        slug={SLUG}
      />
      <Header />
      <main id="main-content" className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <Icon name="ChevronRightIcon" size={12} />
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">
                <Icon name="ChevronRightIcon" size={12} />
              </li>
              <li>
                <Link href="/mini-projects" className="hover:text-foreground transition-colors">
                  Mini Projects
                </Link>
              </li>
              <li aria-hidden="true">
                <Icon name="ChevronRightIcon" size={12} />
              </li>
              <li className="text-foreground font-medium truncate max-w-xs" aria-current="page">
                Mechanical, EEE &amp; Civil Mini Project Ideas 2026
              </li>
            </ol>
          </nav>

          {/* Article header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {['Mechanical Projects', 'EEE Projects', 'Civil Projects', 'Mini Projects'].map((tag) => (
                <span key={tag} className="chip-cyan text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-hero-lg font-bold text-foreground mb-3 leading-tight">
              Mini Project Ideas for Mechanical, EEE &amp; Civil Students (2026)
            </h1>
            <p className="text-muted-foreground text-sm mb-4">Last updated: August 2026</p>
            <p className="text-muted-foreground text-base mb-6">
              Simple, working mini project ideas for Mechanical, EEE and Civil students in Bangalore. 1st–6th sem
              builds with fabrication &amp; guidance. Online &amp; offline.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono border-t border-border pt-4">
              <span>WEBUILDPRO India</span>
              <span>·</span>
              <span>August 2026</span>
              <span>·</span>
              <span>15 min read</span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Article content */}
            <article className="lg:col-span-3">
              {/* Intro */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                If you need{' '}
                <strong className="text-foreground">mini project ideas for Mechanical, EEE or Civil</strong> that
                are simple to build and easy to explain, this 2026 list covers all three branches for 1st to 6th
                semester students. These are affordable, hands-on mini projects — fabrication models, basic
                electrical circuits and civil study models — that you can actually demonstrate. WEBUILDPRO
                fabricates and delivers these in Bangalore, online or offline, with documentation. Pick by your
                branch below; each idea explains what it does and why it&apos;s a good choice.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                For full final year projects, see our guide on{' '}
                <Link href="/blog/final-year-engineering-project-makers-in-bangalore" className="text-accent hover:underline">
                  project makers in Bangalore
                </Link>{' '}
                — covering how WEBUILDPRO builds Mechanical, EEE and Civil projects with fabrication and documentation.
              </p>

              {/* Mobile TOC */}
              <div className="lg:hidden bg-card border border-border rounded p-5 mb-8">
                <h2 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                  <Icon name="ListBulletIcon" size={16} />
                  Table of Contents
                </h2>
                <ol className="space-y-2">
                  {tocItems.map((item, idx) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-xs text-accent hover:text-accent/80 transition-colors flex items-start gap-2"
                      >
                        <span className="font-mono text-muted-foreground flex-shrink-0">{idx + 1}.</span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* ── MECHANICAL MINI PROJECTS ── */}
              <h2
                id="mechanical-mini-projects"
                className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug"
              >
                Mechanical Mini Projects
              </h2>
              <MiniProjectCard
                title="Mini Hydraulic Jack Model"
                description="Demonstrates hydraulic lifting using syringes and fluid pressure. Simple and clear."
                difficulty="Beginner"
                branch="mechanical"
              />
              <MiniProjectCard
                title="Pneumatic Lifting Machine"
                description="Lifts loads using air pressure — a neat pneumatics demo."
                difficulty="Beginner"
                branch="mechanical"
              />
              <MiniProjectCard
                title="Gear-Based Speed Reducer Model"
                description="Shows how gear ratios change speed and torque."
                difficulty="Beginner"
                branch="mechanical"
              />
              <MiniProjectCard
                title="Solar-Powered Fan/Car Model"
                description="A small solar-driven working model."
                difficulty="Beginner"
                branch="mechanical"
              />
              <MiniProjectCard
                title="Pedal-Powered Water Pump"
                description="Pumps water using pedal mechanics — a working sustainability project."
                difficulty="Intermediate"
                branch="mechanical"
              />
              <MiniProjectCard
                title="Mini Conveyor Belt"
                description="A small motor-driven conveyor for sorting/moving items."
                difficulty="Intermediate"
                branch="mechanical"
              />
              <MiniProjectCard
                title="Automatic Sprocket/Chain Drive Model"
                description="Demonstrates power transmission."
                difficulty="Beginner"
                branch="mechanical"
              />
              <MiniProjectCard
                title="Steering Mechanism (Ackermann) Model"
                description="Shows how vehicle steering geometry works."
                difficulty="Intermediate"
                branch="mechanical"
              />
              <MiniProjectCard
                title="Coin-Operated Dispenser"
                description="Dispenses an item when a coin is inserted, using a simple mechanism."
                difficulty="Intermediate"
                branch="mechanical"
              />
              <MiniProjectCard
                title="Mini Wind Turbine Model"
                description="Generates small power from a fan/wind — a renewable-energy demo."
                difficulty="Beginner"
                branch="mechanical"
              />

              <CircuitDivider className="my-8" />

              {/* ── EEE MINI PROJECTS ── */}
              <h2
                id="eee-mini-projects"
                className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug"
              >
                EEE Mini Projects
              </h2>
              <MiniProjectCard
                title="Automatic Street Light Using LDR"
                description="Lights switch on at night, off by day. Classic EEE starter."
                difficulty="Beginner"
                branch="eee"
              />
              <MiniProjectCard
                title="Solar Mobile Charger"
                description="A working solar charging circuit."
                difficulty="Beginner"
                branch="eee"
              />
              <MiniProjectCard
                title="Water Level Controller"
                description="Auto-controls a motor based on tank level."
                difficulty="Beginner"
                branch="eee"
              />
              <MiniProjectCard
                title="Home Automation with Relay"
                description="Switch appliances via a microcontroller and relay."
                difficulty="Beginner"
                branch="eee"
              />
              <MiniProjectCard
                title="Inverter (Mini) Circuit"
                description="Converts DC to AC to run a small load — a strong fundamentals project."
                difficulty="Intermediate"
                branch="eee"
              />
              <MiniProjectCard
                title="Motion-Based Light Control"
                description="Lights turn on when motion is detected (PIR)."
                difficulty="Beginner"
                branch="eee"
              />
              <MiniProjectCard
                title="Overload/Overvoltage Protection Circuit"
                description="Cuts supply when voltage/current exceeds a limit."
                difficulty="Intermediate"
                branch="eee"
              />
              <MiniProjectCard
                title="Wireless Power Transfer (Basic)"
                description="Lights an LED across a small gap without wires."
                difficulty="Intermediate"
                branch="eee"
              />
              <MiniProjectCard
                title="Power Factor Demonstration Model"
                description="Shows the effect of load on power factor."
                difficulty="Intermediate"
                branch="eee"
              />
              <MiniProjectCard
                title="Solar Tracking (Single-Axis) Model"
                description="A panel that turns toward light for more output."
                difficulty="Intermediate"
                branch="eee"
              />

              <CircuitDivider className="my-8" />

              {/* ── CIVIL MINI PROJECTS ── */}
              <h2
                id="civil-mini-projects"
                className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug"
              >
                Civil Mini Projects
              </h2>
              <MiniProjectCard
                title="Earthquake-Resistant Building Model"
                description="A scaled model demonstrating quake-resistant design."
                difficulty="Beginner"
                branch="civil"
              />
              <MiniProjectCard
                title="Rainwater Harvesting Model"
                description="Shows a working rainwater collection and storage system."
                difficulty="Beginner"
                branch="civil"
              />
              <MiniProjectCard
                title="Water Treatment / Filtration Model"
                description="A basic multi-layer water purification demo."
                difficulty="Beginner"
                branch="civil"
              />
              <MiniProjectCard
                title="Green Building Model"
                description="A scaled model highlighting sustainable features."
                difficulty="Beginner"
                branch="civil"
              />
              <MiniProjectCard
                title="Bridge Load Test Model"
                description="A small truss/bridge model tested for load capacity."
                difficulty="Intermediate"
                branch="civil"
              />
              <MiniProjectCard
                title="Smart City Layout Model"
                description="A planned layout model with roads, drainage and zones."
                difficulty="Intermediate"
                branch="civil"
              />
              <MiniProjectCard
                title="Soil Erosion Control Model"
                description="Demonstrates methods to reduce soil erosion."
                difficulty="Beginner"
                branch="civil"
              />
              <MiniProjectCard
                title="Retaining Wall Model"
                description="Shows how retaining walls hold back soil."
                difficulty="Beginner"
                branch="civil"
              />
              <MiniProjectCard
                title="Solar-Powered Street Model"
                description="A road model with working solar street lights."
                difficulty="Intermediate"
                branch="civil"
              />
              <MiniProjectCard
                title="Waste Segregation / Drainage Model"
                description="A working model of a drainage or waste-sorting system."
                difficulty="Intermediate"
                branch="civil"
              />

              <CircuitDivider className="my-8" />

              {/* ── HOW TO CHOOSE ── */}
              <h2
                id="how-to-choose-mini-project"
                className="text-xl font-bold text-foreground mt-10 mb-4 leading-snug"
              >
                How to Choose the Right Mini Project (Mechanical / EEE / Civil)
              </h2>
              <div className="bg-card border border-border rounded p-6 mb-8">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Choose by branch and by what you can build and carry to the lab. For Mechanical, a working
                  mechanism model (hydraulic jack, gear drive, wind turbine) always demos well and is easy to
                  explain. For EEE, a single-purpose circuit (auto street light, water level controller, solar
                  charger) covers your fundamentals and works reliably. For Civil, a clean scaled model
                  (earthquake-resistant building, rainwater harvesting, water filtration) communicates the concept
                  instantly. Keep it within your budget, make sure materials are locally available, and prefer
                  something you can demonstrate physically. WEBUILDPRO fabricates and delivers all three branches&apos;
                  mini projects in Bangalore with documentation and a walkthrough.
                </p>
              </div>

              {/* ── CTA BLOCK ── */}
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-10">
                <h2 className="text-lg font-bold text-foreground mb-2">
                  Build your mini project with WEBUILDPRO, Bangalore
                </h2>
                <p className="text-sm text-muted-foreground mb-5">
                  We fabricate and deliver Mechanical, EEE and Civil mini projects across Bangalore — online and
                  offline. Full documentation and walkthrough included.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/mini-projects"
                    className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded text-sm font-semibold hover:bg-accent/90 transition-colors"
                  >
                    <Icon name="RocketLaunchIcon" size={16} />
                    View Mini Projects &amp; Pricing
                  </Link>
                  <a
                    href="https://wa.me/919591570099?text=Hi%2C%20I%20need%20help%20with%20my%20mini%20project%20(Mechanical%2FEEE%2FCivil)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-green-700 transition-colors"
                  >
                    <Icon name="ChatBubbleLeftRightIcon" size={16} />
                    WhatsApp Us
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-border text-foreground px-4 py-2 rounded text-sm font-semibold hover:bg-card transition-colors"
                  >
                    <Icon name="EnvelopeIcon" size={16} />
                    Get Quote
                  </Link>
                </div>
              </div>

              {/* ── INTERNAL LINKS ── */}
              <div className="border-t border-border pt-6 mb-8">
                <h3 className="text-sm font-bold text-foreground mb-4">Related reading</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/mini-projects"
                      className="text-sm text-accent hover:text-accent/80 transition-colors flex items-center gap-2"
                    >
                      <Icon name="ArrowRightIcon" size={12} />
                      Browse all mini projects with pricing — WEBUILDPRO
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/mini-project-ideas-ece-2026"
                      className="text-sm text-accent hover:text-accent/80 transition-colors flex items-center gap-2"
                    >
                      <Icon name="ArrowRightIcon" size={12} />
                      Mini Project Ideas for ECE Students (2026)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/mini-project-ideas-cse-2026"
                      className="text-sm text-accent hover:text-accent/80 transition-colors flex items-center gap-2"
                    >
                      <Icon name="ArrowRightIcon" size={12} />
                      Mini Project Ideas for CSE Students (2026)
                    </Link>
                  </li>
                </ul>
              </div>
            </article>

            {/* Desktop sticky TOC sidebar */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-card border border-border rounded p-5 mb-6">
                  <h2 className="text-xs font-bold text-foreground mb-3 uppercase tracking-wider flex items-center gap-2">
                    <Icon name="ListBulletIcon" size={14} />
                    Contents
                  </h2>
                  <ol className="space-y-2">
                    {tocItems.map((item, idx) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-xs text-muted-foreground hover:text-accent transition-colors flex items-start gap-2 leading-snug"
                        >
                          <span className="font-mono flex-shrink-0 mt-0.5">{idx + 1}.</span>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Sidebar CTA */}
                <div className="bg-accent/5 border border-accent/20 rounded p-4">
                  <p className="text-xs font-bold text-foreground mb-2">Need this built?</p>
                  <p className="text-xs text-muted-foreground mb-3">
                    WEBUILDPRO fabricates Mechanical, EEE &amp; Civil mini projects in Bangalore with documentation.
                  </p>
                  <Link
                    href="/mini-projects"
                    className="block text-center bg-accent text-accent-foreground px-3 py-2 rounded text-xs font-semibold hover:bg-accent/90 transition-colors mb-2"
                  >
                    View Pricing
                  </Link>
                  <a
                    href="https://wa.me/919591570099?text=Hi%2C%20I%20need%20help%20with%20my%20mini%20project%20(Mechanical%2FEEE%2FCivil)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-green-600 text-white px-3 py-2 rounded text-xs font-semibold hover:bg-green-700 transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}
