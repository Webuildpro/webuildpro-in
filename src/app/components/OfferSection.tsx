'use client';
import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const tracks = [
  {
    id: 'academic',
    label: 'ACADEMIC PROJECT TRACK',
    audience: 'For final-year and mini projects.',
    featured: false,
    includes: [
      'Title selection & abstract',
      'Hardware build or software system',
      'Source code & circuit diagrams',
      'Test-verified working demo',
      'Report & PPT support',
      'Viva walkthrough session',
      'Pre-demo support',
    ],
    cta: { label: 'Custom quote in 24 hours →', href: '/contact' },
    ctaType: 'ghost' as const,
  },
  {
    id: 'internship',
    label: 'INTERNSHIP & TRAINING TRACK',
    audience: 'For students and college batches.',
    featured: true,
    includes: [
      'Hands-on hardware training',
      'Real project assignment',
      'Mentorship from working engineers',
      'Drone / IoT / automation modules',
      'Verifiable completion certificate',
      'Portfolio-ready build',
    ],
    cta: { label: 'Check available batches →', href: '/internships' },
    ctaType: 'primary' as const,
  },
  {
    id: 'industrial',
    label: 'INDUSTRIAL PROTOTYPE TRACK',
    audience: 'For companies and startup founders.',
    featured: false,
    includes: [
      'Requirement study & feasibility',
      'CAD + PCB design',
      'Functional prototype build',
      'Custom drone / automation / WMS systems',
      'Iteration cycles',
      'NDA & full IP transfer',
      'Small-batch production support',
    ],
    cta: { label: 'Request an NDA call →', href: '/industrial' },
    ctaType: 'ghost' as const,
  },
];

export default function OfferSection() {
  const ref = useScrollReveal();

  return (
    <>
      <CircuitDivider />
      <section id="offers" suppressHydrationWarning className="py-20 bg-secondary" aria-labelledby="offer-heading" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="micro-label block mb-3">// WHAT YOU GET</span>
            <h2 id="offer-heading" className="text-section-xl font-bold text-foreground reveal">
              Pick the track that fits your deadline.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {tracks.map((track, i) => (
              <div
                key={track.id}
                className={`reveal delay-${(i + 1) * 100} relative flex flex-col rounded p-6 border transition-all duration-300 ${
                  track.featured
                    ? 'bg-background border-primary shadow-[0_0_0_1px_rgba(255,106,19,0.4),0_8px_32px_rgba(255,106,19,0.15)]'
                    : 'bg-card border-border card-glow'
                }`}
              >
                {track.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold font-mono px-3 py-1 rounded-sm tracking-widest">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div className="mb-4 pt-2">
                  <h3 className="font-mono font-bold text-xs tracking-widest text-foreground mb-1">{track.label}</h3>
                  <p className="text-muted-foreground text-sm">{track.audience}</p>
                </div>

                <ul className="space-y-2 mb-6 flex-1">
                  {track.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Icon name="CheckIcon" size={14} className="text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={track.cta.href}
                  className={`flex items-center justify-center gap-2 py-3 text-sm font-semibold ${
                    track.ctaType === 'primary' ? 'btn-primary' : 'btn-ghost'
                  }`}
                >
                  {track.cta.label}
                </Link>
              </div>
            ))}
          </div>

          <div className="reveal delay-400 border border-primary/40 rounded p-6 bg-primary/5">
            <div className="flex items-start gap-3">
              <Icon name="ShieldCheckIcon" size={20} className="text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground text-sm mb-1">Our commitment:</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A fixed quote before you pay, milestone updates while we build, and a unit that is tested before it reaches you. <span className="text-foreground font-medium">If it doesn&apos;t work on our bench, it doesn&apos;t leave the lab.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}