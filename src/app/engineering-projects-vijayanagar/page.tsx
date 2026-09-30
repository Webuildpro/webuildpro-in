'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
import Icon from '@/components/ui/AppIcon';
import LazyPageExtras from '@/components/LazyPageExtras';

const WA_LINK =
  'https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%20need%20an%20engineering%20project%20%E2%80%94%20can%20you%20help%3F';

const tocItems = [
  { id: 'intro', label: 'Overview' },
  { id: 'branches', label: 'Projects by Branch' },
  { id: 'mini-ieee', label: 'Mini & IEEE Projects' },
  { id: 'why-us', label: 'Why Choose WEBUILDPRO' },
  { id: 'how-to-reach', label: 'How to Reach Us' },
  { id: 'faq', label: 'FAQ' },
];

export default function EngineeringProjectsVijayanagar() {
  const [activeId, setActiveId] = useState('intro');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li aria-hidden="true"><Icon name="ChevronRightIcon" size={12} /></li>
              <li className="text-foreground font-medium" aria-current="page">Engineering Projects in Vijayanagar</li>
            </ol>
          </nav>

          <div className="flex gap-10 items-start">
            {/* Sticky TOC */}
            <aside className="hidden lg:block w-56 flex-shrink-0 sticky top-28 self-start">
              <p className="font-mono text-xs text-accent tracking-widest mb-3">// ON THIS PAGE</p>
              <nav aria-label="Table of contents">
                <ul className="space-y-1">
                  {tocItems.map(({ id, label }) => (
                    <li key={id}>
                      <a
                        href={`#${id}`}
                        className={`block text-xs py-1 px-2 rounded transition-colors ${
                          activeId === id
                            ? 'text-primary bg-primary/10 font-semibold' :'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0">

              {/* Hero / H1 */}
              <header className="mb-12" id="intro">
                <span className="micro-label block mb-3">// ENGINEERING PROJECTS · VIJAYANAGAR · BANGALORE</span>
                <h1 className="text-hero-lg font-bold text-foreground mb-3 leading-tight">
                  Engineering &amp; Final Year Projects in Vijayanagar, Bangalore (2026)
                </h1>
                <p className="text-xs text-muted-foreground mb-6">Last updated: August 2026</p>

                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  Searching for <strong className="text-foreground">engineering projects in Vijayanagar</strong> or{' '}
                  <strong className="text-foreground">final year projects in Vijayanagar</strong>? WEBUILDPRO builds custom, tested, viva-ready projects for Vijayanagar students across every branch — CSE, ECE, EEE, Mechanical and Civil, both IEEE and non-IEEE. Whether you need an advanced final year project in Vijayanagar, a mid-semester engineering project in Vijayanagar, or a simple mini project in Vijayanagar, we design, build and test it in our Bangalore lab and deliver it to you online or in person. Vijayanagar students choose WEBUILDPRO for real, working projects they can actually understand and defend — not recycled, off-the-shelf titles.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
                  >
                    <Icon name="ChatBubbleLeftRightIcon" size={16} />
                    Get your Vijayanagar project started — WhatsApp us →
                  </a>
                </div>
              </header>

              {/* Branches */}
              <section className="mb-14" id="branches" aria-labelledby="branches-heading">
                <h2 id="branches-heading" className="text-section-xl font-bold text-foreground mb-4">
                  Engineering &amp; Final Year Projects in Vijayanagar for Every Branch
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  A trusted name for <strong className="text-foreground">engineering projects in Vijayanagar</strong> and{' '}
                  <strong className="text-foreground">project makers in Vijayanagar</strong>. We cover ML, AI and web/app for{' '}
                  <Link href="/projects/cse" className="text-primary hover:underline">CSE projects in Vijayanagar</Link>; IoT, embedded, VLSI, robotics and drones for{' '}
                  <Link href="/projects/ece" className="text-primary hover:underline">ECE projects in Vijayanagar</Link>; power electronics, PLC and EV for{' '}
                  <Link href="/projects/eee" className="text-primary hover:underline">EEE projects in Vijayanagar</Link>; automation and design for{' '}
                  <Link href="/projects/mechanical" className="text-primary hover:underline">mechanical projects in Vijayanagar</Link>; and structural and smart-infrastructure builds for{' '}
                  <Link href="/projects/civil" className="text-primary hover:underline">civil projects in Vijayanagar</Link>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: 'CSE projects in Vijayanagar', href: '/projects/cse', desc: 'ML, AI, Web/App, Data Science, Blockchain, IoT' },
                    { label: 'ECE projects in Vijayanagar', href: '/projects/ece', desc: 'IoT, Embedded, VLSI, Robotics, Drones' },
                    { label: 'EEE projects in Vijayanagar', href: '/projects/eee', desc: 'Power Electronics, PLC, EV, Solar, Smart Grid' },
                    { label: 'Mechanical projects in Vijayanagar', href: '/projects/mechanical', desc: 'Automation, Design, Robotics, Renewable Energy' },
                    { label: 'Civil projects in Vijayanagar', href: '/projects/civil', desc: 'Structural, Smart Infrastructure, GIS, Materials' },
                    { label: 'Mini projects in Vijayanagar', href: '/mini-projects', desc: '1st–6th semester, all branches, fully documented' },
                  ].map((branch) => (
                    <Link
                      key={branch.href}
                      href={branch.href}
                      className="flex items-start gap-3 p-4 bg-card border border-border rounded hover:border-primary/40 transition-colors group"
                    >
                      <Icon name="ChevronRightIcon" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block">{branch.label}</span>
                        <span className="text-xs text-muted-foreground">{branch.desc}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* Mini & IEEE */}
              <section className="mb-14" id="mini-ieee" aria-labelledby="mini-ieee-heading">
                <h2 id="mini-ieee-heading" className="text-section-xl font-bold text-foreground mb-4">
                  Mini Projects &amp; IEEE Projects in Vijayanagar
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  From <Link href="/mini-projects" className="text-primary hover:underline">mini projects in Vijayanagar</Link> for 1st–6th semester students to{' '}
                  <strong className="text-foreground">IEEE projects in Vijayanagar</strong> with genuine base papers, every project comes with source code, circuit diagrams, report material, PPT and a viva walkthrough.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: 'CodeBracketIcon', title: 'Source code', desc: 'Full, commented source code for every project.' },
                    { icon: 'CpuChipIcon', title: 'Circuit diagrams', desc: 'Complete schematics and wiring diagrams included.' },
                    { icon: 'DocumentTextIcon', title: 'Report material', desc: 'Report structure, abstract and content support.' },
                    { icon: 'PresentationChartBarIcon', title: 'PPT support', desc: 'Presentation slides ready for your review.' },
                    { icon: 'AcademicCapIcon', title: 'Viva walkthrough', desc: 'Engineer-led session so you can defend every decision.' },
                    { icon: 'CheckBadgeIcon', title: 'Tested before delivery', desc: 'No demo-day failures — every project is tested end-to-end.' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 p-4 bg-card border border-border rounded">
                      <div className="w-9 h-9 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Why choose us */}
              <section className="mb-14" id="why-us" aria-labelledby="why-heading">
                <h2 id="why-heading" className="text-section-xl font-bold text-foreground mb-6">
                  Why Vijayanagar Students Choose WEBUILDPRO Over Local Shops
                </h2>
                <div className="space-y-3">
                  {[
                    'We build in-house — we don\'t resell recycled projects.',
                    'Every project is tested before delivery — no demo-day failures.',
                    'You get a viva walkthrough so you can defend it.',
                    'All branches in one place, online or offline delivery, fixed honest pricing.',
                    'We even build custom drones and industrial prototypes most Vijayanagar shops can\'t.',
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-card border border-border rounded">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="CheckIcon" size={12} className="text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
                  >
                    <Icon name="ChatBubbleLeftRightIcon" size={16} />
                    Talk to an engineer — WhatsApp →
                  </a>
                </div>
              </section>

              {/* How to reach */}
              <section className="mb-14" id="how-to-reach" aria-labelledby="reach-heading">
                <h2 id="reach-heading" className="text-section-xl font-bold text-foreground mb-4">
                  How to Reach Us From Vijayanagar
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  WEBUILDPRO is in Peenya, Bangalore, and serves Vijayanagar students easily — WhatsApp or call, send your title, get a same-day quote, then choose online delivery or an in-person visit. Distance is no barrier: we deliver across all of Bangalore.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-card border border-border rounded p-5">
                    <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-3">
                      <Icon name="ChatBubbleLeftRightIcon" size={20} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm mb-2">Step 1 — WhatsApp or call</h3>
                    <p className="text-xs text-muted-foreground">Send your project title or idea on WhatsApp or call us directly.</p>
                  </div>
                  <div className="bg-card border border-primary/30 rounded p-5">
                    <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center mb-3">
                      <Icon name="DocumentTextIcon" size={20} className="text-accent" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm mb-2">Step 2 — Same-day quote</h3>
                    <p className="text-xs text-muted-foreground">Get a fixed, honest quote within the same day — no hidden charges.</p>
                  </div>
                  <div className="bg-card border border-border rounded p-5">
                    <div className="w-10 h-10 rounded bg-green-500/10 flex items-center justify-center mb-3">
                      <Icon name="TruckIcon" size={20} className="text-green-400" />
                    </div>
                    <h3 className="font-bold text-foreground text-sm mb-2">Step 3 — Online or in-person</h3>
                    <p className="text-xs text-muted-foreground">Choose online delivery or visit our Peenya lab — your call.</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
                  >
                    <Icon name="ChatBubbleLeftRightIcon" size={16} />
                    Talk to an engineer now — WhatsApp →
                  </a>
                  <a
                    href="tel:+919538208573"
                    className="btn-ghost inline-flex items-center gap-2 px-6 py-3 text-sm font-medium"
                  >
                    <Icon name="PhoneIcon" size={16} />
                    Call +91 95382 08573
                  </a>
                </div>
              </section>

              {/* FAQ */}
              <section className="mb-14" id="faq" aria-labelledby="faq-heading">
                <h2 id="faq-heading" className="text-section-xl font-bold text-foreground mb-6">
                  FAQ
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      q: 'Do you serve Vijayanagar students?',
                      a: 'Yes — online and offline, all branches. We deliver projects to Vijayanagar students across CSE, ECE, EEE, Mechanical and Civil engineering.',
                    },
                    {
                      q: 'Do you offer engineering, mini and IEEE projects for Vijayanagar?',
                      a: 'All three, fully documented. From mini projects for 1st–6th semester to IEEE projects with genuine base papers — every project includes source code, circuit diagrams, report material, PPT and a viva walkthrough.',
                    },
                    {
                      q: 'I have a custom project idea. Can you build it?',
                      a: 'Send it on WhatsApp for a 24-hour quote. We build from your spec — not from a fixed catalogue.',
                    },
                    {
                      q: 'How long does a project take?',
                      a: 'Most academic projects run 2–4 weeks. Complex hardware or multi-domain projects run 4–6 weeks. We give you a firm timeline in the quote before you pay anything.',
                    },
                    {
                      q: 'Can I get the project delivered online without visiting Bangalore?',
                      a: 'Yes. We deliver full remote projects — video walkthroughs, screen-share mentoring, milestone demo calls, and the finished unit shipped to your door with source code and documentation.',
                    },
                  ].map((faq, i) => (
                    <div key={i} className="bg-card border border-border rounded p-5">
                      <h3 className="font-semibold text-foreground text-sm mb-2">{faq.q}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Final CTA */}
              <section className="bg-card border border-primary/30 rounded p-8 text-center" aria-labelledby="cta-heading">
                <span className="micro-label block mb-3">// GET STARTED</span>
                <h2 id="cta-heading" className="text-section-xl font-bold text-foreground mb-3">
                  Ready to start your Vijayanagar engineering project?
                </h2>
                <p className="text-muted-foreground text-sm mb-6 max-w-xl mx-auto">
                  Send your requirement and get a fixed quote within 24 hours. Free 15-minute call with an engineer — no obligation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold"
                  >
                    <Icon name="ChatBubbleLeftRightIcon" size={16} />
                    Talk to an engineer now — WhatsApp →
                  </a>
                  <a
                    href="tel:+919538208573"
                    className="btn-ghost inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium"
                  >
                    <Icon name="PhoneIcon" size={16} />
                    Call +91 95382 08573
                  </a>
                </div>
              </section>

              {/* Related pages */}
              <section className="mt-14" aria-labelledby="related-heading">
                <h2 id="related-heading" className="text-section-xl font-bold text-foreground mb-4">Related pages</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link href="/project-centre-bangalore" className="p-4 bg-card border border-border rounded hover:border-primary/40 transition-colors group">
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block mb-1">Best Engineering Project Centre in Bangalore</span>
                    <span className="text-xs text-muted-foreground">Real lab, tested hardware, all branches — Peenya, Bangalore</span>
                  </Link>
                  <Link href="/final-year-projects-bangalore" className="p-4 bg-card border border-border rounded hover:border-primary/40 transition-colors group">
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block mb-1">Final Year Engineering Projects in Bangalore</span>
                    <span className="text-xs text-muted-foreground">Complete guide — timelines, cost, IEEE vs non-IEEE, documentation</span>
                  </Link>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}
