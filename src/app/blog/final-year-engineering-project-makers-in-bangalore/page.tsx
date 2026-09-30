'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LazyPageExtras from '@/components/LazyPageExtras';
import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';

const WA_HREF =
  'https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%20need%20a%20final%20year%20project%20made%20%E2%80%94%20can%20you%20help%3F';

function WhatsAppCTA({ label = 'WhatsApp WEBUILDPRO — Build My Project' }: { label?: string }) {
  return (
    <a
      href={WA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-6 py-3 rounded transition-colors w-full sm:w-auto"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {label}
    </a>
  );
}

const tocItems = [
  { id: 'best-project-makers', label: 'Best Project Makers in Bangalore' },
  { id: 'every-branch', label: 'Project Makers for Every Branch' },
  { id: 'why-choose', label: 'Why Students Choose WEBUILDPRO' },
  { id: 'what-you-get', label: 'What You Get' },
  { id: 'process', label: 'How Our Process Works' },
  { id: 'near-you', label: 'Project Makers Near You' },
  { id: 'faq', label: 'FAQ' },
];

export default function FinalYearProjectMakersBangalorePage() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-20% 0% -70% 0%' }
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
                Final Year Engineering Project Makers in Bangalore (2026)
              </li>
            </ol>
          </nav>

          {/* Article header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {['Project Makers', 'Final Year Projects', 'Engineering Projects', 'Bangalore', 'All Branches'].map((tag) => (
                <span key={tag} className="chip-cyan text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-hero-lg font-bold text-foreground mb-3 leading-tight">
              Final Year Engineering Project Makers in Bangalore (2026)
            </h1>
            <p className="text-muted-foreground text-sm mb-4">Last updated: August 2026</p>
            <p className="text-muted-foreground text-base mb-6">
              Trusted final year engineering project makers in Bangalore for BE, BTech, ME, MTech &amp; Diploma — CSE, ECE,
              EEE, Mechanical, Civil. Built &amp; tested by WEBUILDPRO.{' '}
              <a href="tel:+919538208573" className="text-accent hover:text-accent/80 underline transition-colors">
                Call 9538208573
              </a>
              .
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono border-t border-border pt-4">
              <span>WEBUILDPRO India</span>
              <span>·</span>
              <span>August 2026</span>
              <span>·</span>
              <span>10 min read</span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Article content */}
            <article className="lg:col-span-3">
              {/* Intro */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Searching for{' '}
                <strong className="text-foreground">final year engineering project makers in Bangalore</strong>?
                WEBUILDPRO is a trusted name among{' '}
                <strong className="text-foreground">engineering project makers in Bangalore</strong> — we design, build
                and test custom final year projects for BE, B.Tech, ME, M.Tech and Diploma students across every branch:{' '}
                <Link href="/projects/cse" className="text-accent hover:text-accent/80 underline transition-colors">
                  CSE / ISE / AI-ML / BCA / MCA
                </Link>
                ,{' '}
                <Link href="/projects/ece" className="text-accent hover:text-accent/80 underline transition-colors">
                  ECE
                </Link>
                ,{' '}
                <Link href="/projects/eee" className="text-accent hover:text-accent/80 underline transition-colors">
                  EEE
                </Link>
                ,{' '}
                <Link href="/projects/mechanical" className="text-accent hover:text-accent/80 underline transition-colors">
                  Mechanical
                </Link>{' '}
                and{' '}
                <Link href="/projects/civil" className="text-accent hover:text-accent/80 underline transition-colors">
                  Civil
                </Link>
                . As real project makers with our own lab in Bangalore, we don&apos;t resell recycled titles — we make
                each project from scratch, test it, and hand it over with source code, documentation and a viva
                walkthrough. If you&apos;re looking for reliable engineering project makers or a final year project maker
                near you, this is what we do and how we do it.
              </p>

              {/* Intro CTA */}
              <div className="mb-8">
                <p className="text-sm text-muted-foreground mb-3 font-medium">
                  Looking for project makers who actually build it?
                </p>
                <WhatsAppCTA label="WhatsApp us →" />
              </div>

              {/* Best Project Makers */}
              <h2 id="best-project-makers" className="text-xl font-bold text-foreground mt-10 mb-4 leading-snug">
                Who Are the Best Final Year Project Makers in Bangalore?
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                The best <strong className="text-foreground">engineering project makers in Bangalore</strong> are the
                ones who build in-house, test before delivery, and help you understand your own project. Many so-called
                project makers simply buy ready projects and rebrand them — which is why they fail on demo day and
                can&apos;t be defended in the viva. WEBUILDPRO is different: we are hands-on project makers who fabricate
                hardware, write firmware and code, and even build custom drones and industrial prototypes. That&apos;s the
                difference between a reseller and a real project maker.
              </p>

              <CircuitDivider />

              {/* Every Branch */}
              <h2 id="every-branch" className="text-xl font-bold text-foreground mt-10 mb-4 leading-snug">
                Engineering Project Makers for Every Branch
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                As full-service <strong className="text-foreground">final year project makers in Bangalore</strong>, we
                cover all branches:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  {
                    href: '/projects/cse',
                    label: 'CSE / ISE / AI-ML / BCA / MCA project makers',
                    desc: 'machine learning, AI, web, app, blockchain, cloud, cybersecurity.',
                  },
                  {
                    href: '/projects/ece',
                    label: 'ECE project makers',
                    desc: 'IoT, embedded, VLSI, robotics, drones, biomedical, communication.',
                  },
                  {
                    href: '/projects/eee',
                    label: 'EEE project makers',
                    desc: 'power electronics, PLC automation, EV, solar, motor control.',
                  },
                  {
                    href: '/projects/mechanical',
                    label: 'Mechanical project makers',
                    desc: 'automation, automobile, robotics, design, renewable energy.',
                  },
                  {
                    href: '/projects/civil',
                    label: 'Civil project makers',
                    desc: 'structural, smart infrastructure, transportation, environmental.',
                  },
                ].map(({ href, label, desc }) => (
                  <li key={href} className="flex items-start gap-3 bg-card border border-border rounded p-4">
                    <span className="text-accent mt-0.5 flex-shrink-0">
                      <Icon name="WrenchScrewdriverIcon" size={14} />
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      <Link href={href} className="text-accent hover:text-accent/80 underline transition-colors font-semibold">
                        {label}
                      </Link>{' '}
                      — {desc}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                We make IEEE and non-IEEE projects,{' '}
                <Link href="/mini-projects" className="text-accent hover:text-accent/80 underline transition-colors">
                  mini projects for 1st–6th semester students
                </Link>
                , and custom projects on your own idea or paper.
              </p>

              {/* Mid CTA */}
              <div className="my-8">
                <WhatsAppCTA label="Get your project made by real engineers. Talk to a project maker on WhatsApp →" />
              </div>

              {/* Why Choose */}
              <h2 id="why-choose" className="text-xl font-bold text-foreground mt-10 mb-4 leading-snug">
                Why Students Choose WEBUILDPRO as Their Project Makers
              </h2>
              <ul className="space-y-3 mb-6">
                {[
                  {
                    icon: 'WrenchScrewdriverIcon',
                    title: 'Real makers, not resellers',
                    desc: 'every project built in-house in our Bangalore lab.',
                  },
                  {
                    icon: 'CheckCircleIcon',
                    title: 'Tested before delivery',
                    desc: 'no demo-day failures.',
                  },
                  {
                    icon: 'AcademicCapIcon',
                    title: 'You can defend it',
                    desc: 'a viva walkthrough with every project.',
                  },
                  {
                    icon: 'BuildingOffice2Icon',
                    title: 'All branches, one place',
                    desc: 'one team of makers for CSE to Civil.',
                  },
                  {
                    icon: 'GlobeAltIcon',
                    title: 'Online or offline',
                    desc: 'get it made in person in Bangalore or delivered pan-India.',
                  },
                  {
                    icon: 'CurrencyRupeeIcon',
                    title: 'Fixed, honest pricing',
                    desc: 'a clear quote in 24 hours, no hidden charges.',
                  },
                  {
                    icon: 'RocketLaunchIcon',
                    title: "We make what others can't",
                    desc: 'custom drones, industrial prototypes and advanced hardware.',
                  },
                ].map(({ icon, title, desc }) => (
                  <li key={title} className="flex items-start gap-3 bg-card border border-border rounded p-4">
                    <span className="text-accent mt-0.5 flex-shrink-0">
                      <Icon name={icon as Parameters<typeof Icon>[0]['name']} size={14} />
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">{title}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>

              <CircuitDivider />

              {/* What You Get */}
              <h2 id="what-you-get" className="text-xl font-bold text-foreground mt-10 mb-4 leading-snug">
                What You Get When We Make Your Project
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Every project made by WEBUILDPRO includes the working model (hardware and/or software), source code,
                circuit diagrams, bill of materials, IEEE base paper (if applicable), report material, PPT support and a
                viva walkthrough — plus support until your demo day.
              </p>

              {/* Process */}
              <h2 id="process" className="text-xl font-bold text-foreground mt-10 mb-4 leading-snug">
                How Our Project-Making Process Works
              </h2>
              <ol className="space-y-3 mb-6">
                {[
                  'Tell us what you need on WhatsApp — your branch, title or IEEE paper, and deadline. Or ask us to suggest titles.',
                  'Get a fixed quote and timeline within 24 hours.',
                  'We make and test your project in our Bangalore lab, with milestone updates.',
                  'Handover — the finished project, documentation and a walkthrough.',
                  'Support until your demo day.',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 bg-card border border-border rounded p-4">
                    <span className="text-accent font-bold text-sm flex-shrink-0 mt-0.5">{i + 1}.</span>
                    <span className="text-sm text-muted-foreground leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>

              {/* Near You */}
              <h2 id="near-you" className="text-xl font-bold text-foreground mt-10 mb-4 leading-snug">
                Final Year Project Makers Near You in Bangalore
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Whether you search &ldquo;final year project makers near me,&rdquo; &ldquo;engineering project makers in
                Bangalore,&rdquo; or &ldquo;who makes final year projects in Bangalore,&rdquo;{' '}
                <Link
                  href="/project-centre-bangalore"
                  className="text-accent hover:text-accent/80 underline transition-colors"
                >
                  WEBUILDPRO serves students across the entire city
                </Link>{' '}
                — Peenya, Vijayanagar, Jayanagar, BTM Layout, Yelahanka and beyond — online and offline. Distance is no
                barrier; we deliver made-and-tested projects across all of Bangalore and pan-India.
              </p>

              {/* Post-near-you CTA */}
              <div className="my-8">
                <WhatsAppCTA label="WhatsApp WEBUILDPRO — Get Your Project Made in Bangalore" />
              </div>

              {/* FAQ */}
              <h2 id="faq" className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug">
                FAQ
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  {
                    q: 'Are you real project makers or resellers?',
                    a: 'Real makers — we build every project in-house in our Bangalore lab and test it before delivery.',
                  },
                  {
                    q: 'Do you make projects for all branches?',
                    a: 'Yes — CSE, ECE, EEE, Mechanical and Civil, IEEE and non-IEEE, hardware and software.',
                  },
                  {
                    q: 'Can you make a project from my own idea?',
                    a: 'Yes — send your idea or IEEE paper on WhatsApp for a 24-hour quote.',
                  },
                  {
                    q: 'Do you make mini projects too?',
                    a: 'Yes, for 1st–6th semester students at fixed affordable pricing.',
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="bg-card border border-border rounded p-5">
                    <p className="text-sm font-semibold text-foreground mb-2">{q}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>

              <CircuitDivider />

              {/* Final CTA block */}
              <div className="bg-card border border-border rounded-lg p-6 mt-10 text-center">
                <h2 className="text-lg font-bold text-foreground mb-2">
                  Get Your Final Year Project Made by WEBUILDPRO, Bangalore
                </h2>
                <p className="text-sm text-muted-foreground mb-5">
                  Choose the project makers who actually build, test and stand behind your project.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <WhatsAppCTA label="Chat with a project maker on WhatsApp →" />
                  <a
                    href="tel:+919538208573"
                    className="inline-flex items-center justify-center gap-2 border border-accent text-accent hover:bg-accent/10 font-semibold text-sm px-6 py-3 rounded transition-colors w-full sm:w-auto"
                  >
                    <Icon name="PhoneIcon" size={14} />
                    Call +91 95382 08573
                  </a>
                </div>
              </div>

              {/* Internal links */}
              <div className="mt-10 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-4">
                  Explore by Branch
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { href: '/projects/cse', label: 'CSE / ISE / AI-ML / BCA / MCA Projects' },
                    { href: '/projects/ece', label: 'ECE Projects' },
                    { href: '/projects/eee', label: 'EEE Projects' },
                    { href: '/projects/mechanical', label: 'Mechanical Projects' },
                    { href: '/projects/civil', label: 'Civil Projects' },
                    { href: '/mini-projects', label: 'Mini Projects' },
                    { href: '/project-centre-bangalore', label: 'Project Centre Bangalore' },
                  ].map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className="text-xs bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent px-3 py-1.5 rounded transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Related posts */}
              <div className="mt-10 pt-6 border-t border-border">
                <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-4">
                  Related Articles
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      href: '/blog/ieee-projects-in-bangalore',
                      title: 'IEEE Projects in Bangalore (2026)',
                      desc: 'Complete guide to IEEE project centres and how to choose the best one.',
                    },
                    {
                      href: '/blog/latest-final-year-project-ideas-cse-2026',
                      title: 'Latest Final Year Project Ideas for CSE (2026)',
                      desc: '30+ trending CSE project ideas — ML, web, app, blockchain and more.',
                    },
                  ].map(({ href, title, desc }) => (
                    <Link
                      key={href}
                      href={href}
                      className="block bg-card border border-border rounded p-4 hover:border-accent transition-colors"
                    >
                      <p className="text-sm font-semibold text-foreground mb-1">{title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </article>

            {/* Sticky TOC */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  On this page
                </p>
                <nav aria-label="Table of contents">
                  <ul className="space-y-1">
                    {tocItems.map(({ id, label }) => (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className={`block text-xs py-1 px-2 rounded transition-colors leading-snug ${
                            activeId === id
                              ? 'text-accent bg-accent/10 font-medium' :'text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
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
