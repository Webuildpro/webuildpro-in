import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import JsonLdScript from '@/components/JsonLdScript';
import { faqSchema, serviceSchema } from '@/lib/jsonld';
import LazyPageExtras from '@/components/LazyPageExtras';
import dynamic from 'next/dynamic';
import CircuitDivider from '@/components/CircuitDivider';
import Icon from '@/components/ui/AppIcon';
import { miniProjects } from '@/lib/data/projects';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Mini Projects in Bangalore for Engineering Students',
  description:
    'Mini projects for 1st–6th semester engineering students in Bangalore, from ₹3,500. Working models with code, report & demo support. Online & offline.',
  alternates: {
    canonical: `${BASE_URL}/mini-projects`,
  },
  openGraph: {
    title: 'Mini Projects in Bangalore | 1st–6th Sem',
    description:
      'Mini projects for engineering students in Bangalore — starting ₹3,500. Ready, tested & affordable for 1st–6th sem. Online & offline delivery.',
    images: [
      {
        url: '/assets/images/og-webuildpro.jpg',
        width: 1200,
        height: 630,
        alt: 'WEBUILDPRO India — Mini Projects for Engineering Students in Bangalore',
      },
    ],
  },
};

const miniProjectFaqs = [
  {
    q: 'How much do mini projects cost?',
    a: 'Our mini projects start from ₹3,500 and go up to ₹8,000 depending on the complexity and components involved. Every price listed is transparent — no hidden charges. You get the working project, source code, circuit diagram and basic documentation.',
  },
  {
    q: 'Which semester are these mini projects for?',
    a: 'These mini projects are designed for 1st to 6th semester engineering students across all branches — CSE, ECE, EEE, Mechanical and Civil. They are scoped to be achievable within a semester timeline and appropriate for early-year academic requirements.',
  },
  {
    q: 'Do you build custom mini projects?',
    a: 'Yes. If you have a specific topic from your syllabus or a project idea in mind, we can design and build a custom mini project for you. WhatsApp us with your requirement and we will give you a quote within 24 hours.',
  },
  {
    q: 'Are online mini projects available?',
    a: 'Yes. All mini projects are available both online and offline. For online delivery, we ship the built and tested hardware to your address anywhere in India, along with source code, circuit diagrams and a video walkthrough for viva preparation.',
  },
];

export default function MiniProjectsPage() {
  return (
    <>
      <JsonLdScript
        nodes={[
          serviceSchema({ name: 'Mini Projects for Engineering Students', description: 'Mini projects for engineering students in Bangalore — starting ₹3,500. Ready, tested & affordable for 1st–6th sem CSE, ECE, EEE, Mechanical & Civil. Online & offline.', path: '/mini-projects' }),
          faqSchema(miniProjectFaqs),
        ]}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Mini Projects', url: '/mini-projects' },
        ]}
      />
      <Header />
      <main id="main-content" className="pb-[calc(64px+env(safe-area-inset-bottom))] lg:pb-0">
        {/* Hero */}
        <section className="relative pt-24 pb-16 bg-background blueprint-grid" aria-labelledby="mini-projects-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 text-xs text-muted-foreground">
                <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
                <li aria-hidden="true"><Icon name="ChevronRightIcon" size={12} /></li>
                <li className="text-foreground font-medium" aria-current="page">Mini Projects</li>
              </ol>
            </nav>

            <span className="micro-label block mb-3">// MINI PROJECTS IN BANGALORE</span>
            <h1 id="mini-projects-heading" className="text-hero-lg font-bold text-foreground mb-4">
              Mini Projects for Engineering Students in Bangalore (1st–6th Sem)
            </h1>

            <p className="text-muted-foreground text-base max-w-3xl mb-8 leading-relaxed">
              Mini projects for engineering students in Bangalore — built, tested and ready to submit. WEBUILDPRO India designs and delivers affordable mini projects for 1st to 6th semester students across all branches: CSE, ECE, EEE, Mechanical and Civil. Every project is assembled and verified in our Bangalore lab, available both online and offline, and comes with complete source code, circuit diagram and basic documentation. Prices start at just ₹3,500 — transparent, no hidden charges. Whether you need a simple IoT sensor project for your 2nd semester or a more involved embedded system for your 5th, we have a working, demo-ready build for you.
            </p>

            <div className="flex flex-wrap gap-3 mb-4">
              <span className="chip-cyan">1st–6th Semester</span>
              <span className="chip-cyan">All Branches</span>
              <span className="chip-cyan">Online &amp; Offline</span>
              <span className="chip-cyan">Starting ₹3,500</span>
              <span className="chip-cyan">Source Code Included</span>
            </div>
          </div>
        </section>

        <CircuitDivider />

        {/* Projects Grid */}
        <section className="py-16 bg-background" aria-labelledby="projects-list-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <span className="micro-label block mb-3">// 17 READY-TO-BUILD PROJECTS</span>
            <h2 id="projects-list-heading" className="text-section-xl font-bold text-foreground mb-10">
              Browse mini projects — pick one or bring your own idea.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {miniProjects.map((project) => {
                const waMessage = encodeURIComponent(
                  `Hi WEBUILDPRO, I'm interested in the mini project: "${project.title}". Can you send me details and a quote?`
                );
                return (
                  <div
                    key={project.id}
                    id={project.id}
                    className="bg-card border border-border rounded p-5 flex flex-col card-glow hover:border-primary/40 transition-colors"
                  >
                    {/* Price badge */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-semibold text-foreground text-sm leading-snug flex-1">
                        {project.title}
                      </h3>
                      <span className="flex-shrink-0 bg-primary/10 border border-primary/40 text-primary text-xs font-bold font-mono px-2.5 py-1 rounded">
                        {project.priceDisplay}
                      </span>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                      <Link
                        href={`/contact?project=${encodeURIComponent(project.title)}`}
                        className="btn-primary flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold flex-1"
                      >
                        <Icon name="DocumentTextIcon" size={12} />
                        Enquire
                      </Link>
                      <a
                        href={`https://wa.me/919538208573?text=${waMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold flex-1"
                      >
                        <Icon name="ChatBubbleLeftRightIcon" size={12} />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <CircuitDivider />

        {/* Custom mini projects band */}
        <section className="py-14 bg-secondary" aria-labelledby="custom-mini-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="border border-primary/40 rounded p-8 bg-primary/5 text-center">
              <Icon name="LightBulbIcon" size={32} className="text-primary mx-auto mb-4" />
              <h2 id="custom-mini-heading" className="text-section-xl font-bold text-foreground mb-3">
                Need something else?
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6 max-w-2xl mx-auto">
                We also build <strong className="text-foreground">custom mini projects</strong> to your requirement — bring your idea or subject topic and we&apos;ll design an affordable working mini project for you. No idea is too small; if it&apos;s in your syllabus, we can build it.
              </p>
              <a
                href="https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%20need%20a%20custom%20mini%20project.%20Can%20you%20help?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={16} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        <CircuitDivider />

        {/* FAQ */}
        <section className="py-16 bg-background" aria-labelledby="mini-faq-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <span className="micro-label block mb-3">// FREQUENTLY ASKED</span>
            <h2 id="mini-faq-heading" className="text-section-xl font-bold text-foreground mb-10">
              Mini project questions answered.
            </h2>
            <div className="space-y-4">
              {miniProjectFaqs.map((faq, i) => (
                <div key={i} className="border border-border rounded p-6 bg-card">
                  <h3 className="font-semibold text-foreground text-sm mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CircuitDivider />

        {/* Internal links to branch pages */}
        <section className="py-14 bg-secondary" aria-labelledby="branch-links-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <span className="micro-label block mb-3">// FINAL YEAR PROJECTS</span>
            <h2 id="branch-links-heading" className="text-section-xl font-bold text-foreground mb-4">
              Looking for a final year project instead?
            </h2>
            <p className="text-muted-foreground text-sm mb-8">
              Browse our full final year project catalogue by branch — advanced titles with IEEE papers, working hardware and viva support.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { label: 'CSE / AI / ML Projects', href: '/projects/cse' },
                { label: 'ECE Projects', href: '/projects/ece' },
                { label: 'EEE Projects', href: '/projects/eee' },
                { label: 'Mechanical Projects', href: '/projects/mechanical' },
                { label: 'Civil Projects', href: '/projects/civil' },
              ].map((b) => (
                <Link
                  key={b.href}
                  href={b.href}
                  className="btn-ghost inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium"
                >
                  {b.label}
                  <Icon name="ArrowRightIcon" size={14} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}
