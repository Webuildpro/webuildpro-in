'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
import LazyPageExtras from '@/components/LazyPageExtras';

import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';

const WA_LINK =
  'https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%20have%20a%20custom%20IEEE%20project%20idea%20%E2%80%94%20can%20you%20build%20it%3F';

function WhatsAppCTA({ label = 'Chat on WhatsApp →', className = '' }: { label?: string; className?: string }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-3 rounded transition-colors text-sm ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {label}
    </a>
  );
}

const tocItems = [
  { id: 'what-are-ieee-projects', label: 'What Are IEEE Projects?' },
  { id: 'why-ieee-projects-matter', label: 'Why IEEE Projects Matter for Your Final Year' },
  { id: 'ieee-projects-every-branch', label: 'IEEE Projects for Every Engineering Branch' },
  { id: 'ieee-vs-non-ieee', label: 'IEEE vs Non-IEEE Projects' },
  { id: 'what-you-get', label: 'What You Get With a WEBUILDPRO IEEE Project' },
  { id: 'why-webuildpro', label: 'Why WEBUILDPRO Is the Best IEEE Project Maker' },
  { id: 'how-much-cost', label: 'How Much Do IEEE Projects Cost in Bangalore?' },
  { id: 'how-to-get-started', label: 'How to Get Your IEEE Project Built' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

export default function IeeeProjectsBangalorePage() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
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
              <li className="text-foreground font-medium truncate max-w-xs" aria-current="page">
                IEEE Projects in Bangalore
              </li>
            </ol>
          </nav>

          {/* Article header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {['IEEE Projects', 'Final Year Projects', 'Bangalore'].map((tag) => (
                <span key={tag} className="chip-cyan text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-hero-lg font-bold text-foreground mb-3 leading-tight">
              IEEE Projects in Bangalore (2026): The Complete Guide to Choosing the Best IEEE Project Makers
            </h1>
            <p className="text-muted-foreground text-sm mb-4">Last updated: August 2026</p>
            <p className="text-muted-foreground text-base mb-6">
              Best IEEE project centre in Bangalore for CSE, ECE, EEE, Mechanical &amp; Civil. 2026 IEEE final year
              projects built, tested &amp; delivered. WhatsApp +91 95382 08573.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono border-t border-border pt-4">
              <span>WEBUILDPRO India</span>
              <span>·</span>
              <span>August 2026</span>
              <span>·</span>
              <span>14 min read</span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Article content */}
            <article className="lg:col-span-3 prose-custom">
              
              {/* Quick Answer — answers the search intent in the first 100 words */}
              <div className="bg-card border-l-4 border-primary rounded-lg p-5 mb-8">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Quick Answer</p>
                <p className="text-sm text-foreground leading-relaxed">
                  IEEE projects in Bangalore are built and delivered by WEBUILDPRO — final year projects for CSE, ECE, EEE, Mechanical and Civil students, based on 2026 IEEE papers, with working hardware, full source code and documentation. Prices start from &#8377;8,000. WhatsApp +91 95382 08573 for your project.
                </p>
              </div>
{/* Intro */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                If you&rsquo;re searching for <strong className="text-foreground">IEEE projects in Bangalore</strong>,{' '}
                <strong className="text-foreground">IEEE project makers</strong>, or the{' '}
                <strong className="text-foreground">best IEEE project centre near you</strong>, this guide is written
                for you. Whether you&rsquo;re a final-year CSE, ECE, EEE, Mechanical, or Civil student, choosing the
                right IEEE project — and the right people to build it — decides your marks, your viva confidence, and
                even your placement story. At WEBUILDPRO, based in Bangalore, we design, build, test and deliver{' '}
                <strong className="text-foreground">IEEE 2026 final year projects</strong> across every engineering
                branch, with working hardware, full source code and complete documentation. This guide explains what
                IEEE projects are, how to choose one, what they should cost, and why WEBUILDPRO is the trusted choice
                for IEEE projects in Bangalore.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                For a broader look at how project building works in Bangalore, see our guide on{' '}
                <Link href="/blog/final-year-engineering-project-makers-in-bangalore" className="text-accent hover:underline">
                  final year engineering project makers in Bangalore
                </Link>{' '}
                — covering timelines, deliverables and what to ask before you commit.
              </p>

              {/* CTA after intro */}
              <div className="bg-card border border-orange-500/30 rounded-lg p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-foreground mb-1">Have a custom IEEE project idea?</p>
                  <p className="text-xs text-muted-foreground">
                    Contact us on WhatsApp — tell us your title or IEEE paper and we&rsquo;ll build it.
                  </p>
                </div>
                <WhatsAppCTA label="Chat on WhatsApp →" />
              </div>

              {/* Mobile TOC */}
              <div className="lg:hidden bg-card border border-border rounded p-5 mb-8">
                <h2 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                  <Icon name="ListBulletIcon" size={16} />
                  Table of Contents
                </h2>
                <ol className="space-y-2">
                  {tocItems.map((item, i) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-xs text-accent hover:text-accent/80 transition-colors flex items-start gap-2"
                      >
                        <span className="font-mono text-muted-foreground flex-shrink-0">{i + 1}.</span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* H2: What Are IEEE Projects? */}
              <section id="what-are-ieee-projects" className="mb-10 scroll-mt-24">
                <h2 className="text-xl font-bold text-foreground mb-4">What Are IEEE Projects?</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  IEEE projects are final-year engineering projects based on research papers published by the{' '}
                  <strong className="text-foreground">
                    IEEE (Institute of Electrical and Electronics Engineers)
                  </strong>
                  , the world&rsquo;s largest technical professional organisation. An IEEE project takes a recent IEEE
                  base paper and implements, improves, or extends its concept into a working system. Colleges across
                  Bangalore — VTU-affiliated, autonomous, and deemed universities — often prefer or require IEEE-based
                  final year projects because they are tied to current, peer-reviewed research and follow a structured
                  methodology.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  When students search for{' '}
                  <strong className="text-foreground">IEEE projects 2026</strong>,{' '}
                  <strong className="text-foreground">latest IEEE projects</strong>,{' '}
                  <strong className="text-foreground">IEEE project titles</strong>, or{' '}
                  <strong className="text-foreground">IEEE project abstracts</strong>, they&rsquo;re usually looking for
                  three things: a strong title backed by a genuine IEEE paper, a working implementation, and proper
                  documentation for submission and viva. WEBUILDPRO delivers all three.
                </p>
              </section>

              <CircuitDivider />

              {/* H2: Why IEEE Projects Matter */}
              <section id="why-ieee-projects-matter" className="mb-10 scroll-mt-24">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Why IEEE Projects Matter for Your Final Year
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Recruiters and evaluators take{' '}
                  <strong className="text-foreground">IEEE final year projects</strong> seriously because they
                  demonstrate research understanding, not just coding or wiring. A well-executed IEEE project in
                  Bangalore shows you can read a paper, understand a real problem, and build a solution — exactly the
                  skill product companies and higher-study programmes look for. That&rsquo;s why{' '}
                  <strong className="text-foreground">&ldquo;IEEE projects for CSE,&rdquo;</strong>{' '}
                  <strong className="text-foreground">&ldquo;IEEE projects for ECE,&rdquo;</strong>{' '}
                  <strong className="text-foreground">&ldquo;IEEE projects for EEE,&rdquo;</strong>{' '}
                  <strong className="text-foreground">&ldquo;IEEE mechanical projects,&rdquo;</strong> and{' '}
                  <strong className="text-foreground">&ldquo;IEEE civil projects&rdquo;</strong> are among the most
                  searched terms by final-year students every year.
                </p>
              </section>

              <CircuitDivider />

              {/* H2: IEEE Projects for Every Branch */}
              <section id="ieee-projects-every-branch" className="mb-10 scroll-mt-24">
                <h2 className="text-xl font-bold text-foreground mb-6">
                  IEEE Projects for Every Engineering Branch
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  WEBUILDPRO builds IEEE projects for all branches in Bangalore. Here&rsquo;s what we cover:
                </p>

                {/* CSE */}
                <div className="mb-8">
                  <h3 className="text-base font-bold text-foreground mb-3">
                    <Link href="/projects/cse" className="hover:text-accent transition-colors">
                      IEEE Projects for CSE / ISE / AI-ML / BCA / MCA
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">IEEE CSE projects</strong> and{' '}
                    <strong className="text-foreground">IEEE projects for computer science</strong> span machine
                    learning, deep learning, artificial intelligence, data science, blockchain, cloud computing,
                    cybersecurity, image processing, NLP, and full-stack web and app development. Popular searches
                    include <strong className="text-foreground">IEEE machine learning projects</strong>,{' '}
                    <strong className="text-foreground">IEEE AI projects</strong>,{' '}
                    <strong className="text-foreground">IEEE Python projects</strong>,{' '}
                    <strong className="text-foreground">IEEE blockchain projects</strong>,{' '}
                    <strong className="text-foreground">IEEE data mining projects</strong>, and{' '}
                    <strong className="text-foreground">IEEE deep learning projects</strong>. We deliver the trained
                    model, dataset, source code and IEEE base paper.{' '}
                    <Link href="/projects/cse" className="text-accent hover:underline">
                      Browse CSE IEEE projects →
                    </Link>
                  </p>
                </div>

                {/* ECE */}
                <div className="mb-8">
                  <h3 className="text-base font-bold text-foreground mb-3">
                    <Link href="/projects/ece" className="hover:text-accent transition-colors">
                      IEEE Projects for ECE
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">IEEE ECE projects</strong> and{' '}
                    <strong className="text-foreground">IEEE electronics and communication projects</strong> cover IoT,
                    embedded systems, VLSI, robotics, drones, biomedical, wireless communication, MATLAB, and Raspberry
                    Pi. Students search{' '}
                    <strong className="text-foreground">IEEE IoT projects</strong>,{' '}
                    <strong className="text-foreground">IEEE embedded projects</strong>,{' '}
                    <strong className="text-foreground">IEEE VLSI projects</strong>,{' '}
                    <strong className="text-foreground">IEEE MATLAB projects</strong>, and{' '}
                    <strong className="text-foreground">IEEE robotics projects</strong> — WEBUILDPRO builds every one as
                    working hardware with circuit diagrams and firmware.{' '}
                    <Link href="/projects/ece" className="text-accent hover:underline">
                      Browse ECE IEEE projects →
                    </Link>
                  </p>
                </div>

                {/* EEE */}
                <div className="mb-8">
                  <h3 className="text-base font-bold text-foreground mb-3">
                    <Link href="/projects/eee" className="hover:text-accent transition-colors">
                      IEEE Projects for EEE
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">IEEE EEE projects</strong> and{' '}
                    <strong className="text-foreground">IEEE electrical projects</strong> include power electronics, PLC
                    and industrial automation, electric vehicles (EV), solar and renewable energy, motor control, and
                    smart grid systems. Common searches:{' '}
                    <strong className="text-foreground">IEEE power electronics projects</strong>,{' '}
                    <strong className="text-foreground">IEEE power systems projects</strong>,{' '}
                    <strong className="text-foreground">IEEE EV projects</strong>, and{' '}
                    <strong className="text-foreground">IEEE solar projects</strong>. We deliver tested circuits with
                    full documentation.{' '}
                    <Link href="/projects/eee" className="text-accent hover:underline">
                      Browse EEE IEEE projects →
                    </Link>
                  </p>
                </div>

                {/* Mechanical */}
                <div className="mb-8">
                  <h3 className="text-base font-bold text-foreground mb-3">
                    <Link href="/projects/mechanical" className="hover:text-accent transition-colors">
                      IEEE Mechanical Projects
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">IEEE mechanical projects</strong> and{' '}
                    <strong className="text-foreground">IEEE mechanical engineering projects</strong> cover automation,
                    robotics and mechatronics, automobile systems, hydraulics and pneumatics, CAD/CAM design, FEA/CFD
                    analysis, agricultural machinery, and renewable energy. We fabricate working models in our Bangalore
                    workshop.{' '}
                    <Link href="/projects/mechanical" className="text-accent hover:underline">
                      Browse Mechanical IEEE projects →
                    </Link>
                  </p>
                </div>

                {/* Civil */}
                <div className="mb-8">
                  <h3 className="text-base font-bold text-foreground mb-3">
                    <Link href="/projects/civil" className="hover:text-accent transition-colors">
                      IEEE Civil Projects
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">IEEE civil projects</strong> and{' '}
                    <strong className="text-foreground">IEEE civil engineering projects</strong> include structural
                    analysis, smart infrastructure, IoT structural health monitoring, transportation, green building,
                    and environmental engineering. We deliver analysis, models and reports.{' '}
                    <Link href="/projects/civil" className="text-accent hover:underline">
                      Browse Civil IEEE projects →
                    </Link>
                  </p>
                </div>

                {/* CTA after branches */}
                <div className="bg-card border border-orange-500/30 rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground mb-1">
                      Not sure which IEEE project fits your branch?
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Message us on WhatsApp and an engineer will help you choose.
                    </p>
                  </div>
                  <WhatsAppCTA label="Get Branch Guidance →" />
                </div>
              </section>

              <CircuitDivider />

              {/* H2: IEEE vs Non-IEEE */}
              <section id="ieee-vs-non-ieee" className="mb-10 scroll-mt-24">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  IEEE vs Non-IEEE Projects: Which Should You Choose?
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Students often search{' '}
                  <strong className="text-foreground">&ldquo;IEEE vs non-IEEE projects.&rdquo;</strong> An IEEE project
                  is based on a published IEEE paper and is preferred for research-oriented evaluation and higher
                  studies. A non-IEEE project is application-based and offers more creative freedom. First, confirm
                  whether your college mandates an IEEE base paper. WEBUILDPRO builds both IEEE and non-IEEE final year
                  projects — tell us your requirement and we&rsquo;ll guide you.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Read our full comparison:{' '}
                  <Link href="/blog/ieee-vs-non-ieee-projects-2026" className="text-accent hover:underline">
                    IEEE vs Non-IEEE Projects: Which Should You Choose? (2026)
                  </Link>
                </p>
              </section>

              <CircuitDivider />

              {/* H2: What You Get */}
              <section id="what-you-get" className="mb-10 scroll-mt-24">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  What You Get With a WEBUILDPRO IEEE Project
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Every IEEE project delivered in Bangalore by WEBUILDPRO includes:
                </p>
                <ul className="space-y-3 mb-4">
                  {[
                    'The genuine IEEE base paper your project is built on',
                    'A fully working, tested model (hardware and/or software)',
                    'Complete source code, circuit diagrams and bill of materials',
                    'Project report material, PPT support and abstract',
                    'A viva walkthrough session so you can defend every design choice',
                    'Online and offline delivery — visit our Bangalore lab or get it shipped pan-India',
                    'Post-delivery support until your demo day',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-orange-500 flex-shrink-0 mt-0.5">
                        <Icon name="CheckCircleIcon" size={16} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Also see:{' '}
                  <Link href="/mini-projects" className="text-accent hover:underline">
                    Mini Projects in Bangalore
                  </Link>{' '}
                  — for 1st–6th semester students.
                </p>
              </section>

              <CircuitDivider />

              {/* H2: Why WEBUILDPRO */}
              <section id="why-webuildpro" className="mb-10 scroll-mt-24">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Why WEBUILDPRO Is the Best IEEE Project Maker in Bangalore
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  When students look for the{' '}
                  <strong className="text-foreground">&ldquo;best IEEE project centre in Bangalore,&rdquo;</strong>{' '}
                  <strong className="text-foreground">&ldquo;IEEE project makers near me,&rdquo;</strong> or{' '}
                  <strong className="text-foreground">
                    &ldquo;where to buy IEEE projects in Bangalore,&rdquo;
                  </strong>{' '}
                  here&rsquo;s why WEBUILDPRO stands out:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    'A real engineering lab in Bangalore, not a reseller — we design and build in-house, including custom drones and industrial prototypes.',
                    'Every branch covered — CSE, ECE, EEE, Mechanical and Civil IEEE projects under one roof.',
                    'Tested before delivery — nothing leaves the bench until it works.',
                    'You can defend it — a walkthrough session means you understand your own project.',
                    'Online + offline, pan-India delivery with WhatsApp support throughout.',
                    'Custom IEEE projects welcome — bring your own idea or paper and we\'ll scope it in 24 hours.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="text-orange-500 flex-shrink-0 mt-0.5">
                        <Icon name="CheckCircleIcon" size={16} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Related reading:{' '}
                  <Link href="/blog/trending-final-year-project-ideas-2026" className="text-accent hover:underline">
                    Trending Final Year Project Ideas for 2026 (AI, IoT, Robotics, Drones &amp; More)
                  </Link>
                </p>
              </section>

              <CircuitDivider />

              {/* H2: Cost */}
              <section id="how-much-cost" className="mb-10 scroll-mt-24">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  How Much Do IEEE Projects Cost in Bangalore?
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  IEEE project cost depends on branch, complexity, components and whether it&rsquo;s hardware or
                  software. Software and ML IEEE projects, IoT and embedded IEEE projects, and hardware-heavy mechanical
                  or robotics IEEE projects each have different price ranges. WEBUILDPRO gives you a fixed, itemised
                  quote within 24 hours — before you pay anything — with no hidden charges.
                </p>

                {/* CTA after cost */}
                <div className="bg-card border border-orange-500/30 rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground mb-1">
                      Want a quote for your IEEE project title?
                    </p>
                    <p className="text-xs text-muted-foreground">
                      WhatsApp us now with your title or IEEE paper — fixed quote in 24 hours.
                    </p>
                  </div>
                  <WhatsAppCTA label="Get a Free Quote →" />
                </div>
              </section>

              <CircuitDivider />

              {/* H2: How to Get Started */}
              <section id="how-to-get-started" className="mb-10 scroll-mt-24">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  How to Get Your IEEE Project Built in Bangalore
                </h2>
                <ol className="space-y-4 mb-4">
                  {[
                    'Send your title or IEEE paper on WhatsApp — or ask us to suggest 2026 IEEE titles for your branch.',
                    'Get a fixed quote and timeline within 24 hours.',
                    'We build and test it in our Bangalore lab, with milestone updates.',
                    'Handover — working project, source code, IEEE paper, report, PPT and a walkthrough.',
                    'Support until your demo day.',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-4 text-sm text-muted-foreground">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-500 text-white text-xs font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <CircuitDivider />

              {/* H2: FAQ */}
              <section id="faq" className="mb-10 scroll-mt-24">
                <h2 className="text-xl font-bold text-foreground mb-6">
                  Frequently Asked Questions About IEEE Projects
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      q: 'Do you provide the IEEE base paper with the project?',
                      a: 'Yes. Every IEEE project comes with the genuine IEEE base paper it is implemented from, plus full documentation.',
                    },
                    {
                      q: 'Do you build IEEE 2026 projects for all branches?',
                      a: 'Yes — IEEE projects for CSE, ECE, EEE, Mechanical and Civil, both hardware and software, IEEE and non-IEEE.',
                    },
                    {
                      q: 'Can I bring my own custom IEEE project idea?',
                      a: 'Absolutely. Send your idea or paper on WhatsApp and we\'ll scope and quote it within 24 hours.',
                    },
                    {
                      q: 'Are you located in Bangalore?',
                      a: 'Yes — WEBUILDPRO is based in Bangalore (Peenya 2nd Stage) and delivers pan-India, online and offline.',
                    },
                    {
                      q: 'Do you offer IEEE projects online?',
                      a: 'Yes. Software and ML IEEE projects are delivered online across India; hardware projects can be shipped or built in person.',
                    },
                  ].map(({ q, a }) => (
                    <div key={q} className="bg-card border border-border rounded p-5">
                      <h3 className="text-sm font-bold text-foreground mb-2">{q}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <CircuitDivider />

              {/* Final CTA block */}
              <section className="mb-10">
                <div className="bg-card border border-orange-500/40 rounded-xl p-7 text-center">
                  <h2 className="text-xl font-bold text-foreground mb-3">Get Started With Your IEEE Project Today</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
                    Whether you already have an IEEE project title, an IEEE base paper, or just need the best IEEE
                    project makers in Bangalore to guide you, WEBUILDPRO is ready to build it — tested, documented and
                    defendable.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <WhatsAppCTA label="Chat on WhatsApp →" className="text-base px-7 py-4" />
                    <a
                      href="tel:+919538208573"
                      className="inline-flex items-center gap-2 border border-foreground/30 hover:border-foreground text-foreground font-bold px-7 py-4 rounded transition-colors text-base"
                    >
                      <Icon name="PhoneIcon" size={18} />
                      Call +91 95382 08573
                    </a>
                  </div>
                </div>
              </section>
            </article>

            {/* Sticky TOC — desktop */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-card border border-border rounded p-5">
                  <h2 className="text-xs font-bold text-foreground mb-4 uppercase tracking-wider flex items-center gap-2">
                    <Icon name="ListBulletIcon" size={14} />
                    Contents
                  </h2>
                  <ol className="space-y-2">
                    {tocItems.map((item, i) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={`text-xs transition-colors flex items-start gap-2 leading-snug ${
                            activeSection === item.id
                              ? 'text-orange-500 font-semibold' :'text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          <span className="font-mono flex-shrink-0 mt-0.5">{i + 1}.</span>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Sidebar CTA */}
                <div className="mt-5 bg-card border border-orange-500/30 rounded p-4 text-center">
                  <p className="text-xs font-semibold text-foreground mb-3">Ready to build your IEEE project?</p>
                  <WhatsAppCTA label="WhatsApp Us →" className="w-full justify-center text-xs px-3 py-2" />
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
