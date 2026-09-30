'use client';
import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const audiences = [
  {
    icon: 'AcademicCapIcon' as const,
    title: 'ENGINEERING STUDENTS',
    subtitle: 'BE / B.Tech / M.Tech / Diploma',
    description: 'Final year and mini projects across CSE, Mechanical, ECE, EEE and Civil. IEEE and non-IEEE titles, hardware or software, with full documentation support.',
    fit: 'Right fit if you want a project you can actually demonstrate and defend.',
    cta: { label: 'Browse Projects', href: '/projects' },
  },
  {
    icon: 'BuildingLibraryIcon' as const,
    title: 'COLLEGES & TRAINING PARTNERS',
    subtitle: 'Institutions & Batch Programmes',
    description: 'Internship programmes, hands-on hardware workshops and lab support for batches — run on real components, real tooling, real deadlines.',
    fit: 'Right fit if you want students to leave with skills, not certificates.',
    cta: { label: 'Internship Programmes', href: '/internships' },
  },
  {
    icon: 'BuildingOffice2Icon' as const,
    title: 'COMPANIES & STARTUPS',
    subtitle: 'Industrial & Prototype Clients',
    description: 'Industrial prototypes, custom drones, automation systems and small-batch production units. NDA-backed, confidential, delivered pan-India.',
    fit: 'Right fit if you need a working unit in hand, not another design deck.',
    cta: { label: 'Industrial Prototyping', href: '/industrial' },
  },
];

export default function AudienceSection() {
  const ref = useScrollReveal();

  return (
    <>
      <CircuitDivider />
      <section id="audience" suppressHydrationWarning className="py-20 bg-background blueprint-grid-subtle" aria-labelledby="audience-heading" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="micro-label block mb-3">// WHO WE BUILD FOR</span>
            <h2 id="audience-heading" className="text-section-xl font-bold text-foreground reveal">
              Three kinds of people walk into our lab.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {audiences.map((a, i) => (
              <div
                key={i}
                className={`reveal delay-${(i + 1) * 100} card-glow bg-card border border-border rounded p-6 flex flex-col`}
              >
                <div className="w-10 h-10 rounded bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                  <Icon name={a.icon} size={18} className="text-accent" />
                </div>
                <h3 className="font-mono font-bold text-foreground text-xs tracking-widest mb-1">{a.title}</h3>
                <p className="text-muted-foreground text-xs mb-3 font-mono">{a.subtitle}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{a.description}</p>
                <p className="text-xs text-accent border-t border-border pt-4 mb-4 leading-relaxed">
                  → {a.fit}
                </p>
                <Link
                  href={a.cta.href}
                  className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  {a.cta.label}
                  <Icon name="ArrowRightIcon" size={14} />
                </Link>
              </div>
            ))}
          </div>

          <div className="reveal delay-400 bg-card border border-border rounded p-5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Not a fit?</span> If you want a pre-made project bought and rebranded overnight, we&apos;re the wrong shop.
              We build to spec, and that takes time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}