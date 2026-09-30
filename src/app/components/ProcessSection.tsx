'use client';
import React from 'react';
import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Talk to an engineer — free, 15 minutes.',
    description:
      'WhatsApp or call. You describe the problem, domain and deadline. An engineer answers, not a salesperson.',
    icon: 'ChatBubbleLeftRightIcon' as const,
  },
  {
    number: '02',
    title: 'Scope & fixed quote in 24 hours.',
    description:
      'We send the block diagram approach, component list, timeline and a fixed price. No hourly surprises.',
    icon: 'DocumentTextIcon' as const,
  },
  {
    number: '03',
    title: 'Confirm & kickoff.',
    description:
      'Advance confirmed, build slot locked, single point of contact assigned. You get milestone updates, not silence.',
    icon: 'CheckCircleIcon' as const,
  },
  {
    number: '04',
    title: 'Build, test, iterate.',
    description:
      'Fabrication and firmware in our Bangalore lab, with progress photos/videos at each milestone. Revisions inside scope are included.',
    icon: 'WrenchScrewdriverIcon' as const,
  },
  {
    number: '05',
    title: 'Handover & support.',
    description:
      'Working unit, source code, circuit diagrams, report material, PPT support and a walkthrough session — plus post-delivery support until your demo day.',
    icon: 'TrophyIcon' as const,
  },
];

export default function ProcessSection() {
  const ref = useScrollReveal();

  return (
    <>
      <CircuitDivider />
      <section id="process" suppressHydrationWarning className="py-20 bg-background blueprint-grid-subtle" aria-labelledby="process-heading" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="micro-label block mb-3">// THE PROCESS</span>
            <h2 id="process-heading" className="text-section-xl font-bold text-foreground reveal">
              From first call to working unit — in five steps.
            </h2>
          </div>

          <div className="relative">
            <div
              className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
              {steps.map((step, i) => (
                <div key={i} className={`reveal delay-${(i + 1) * 100} relative flex md:flex-col gap-4 md:gap-0`}>
                  {i < steps.length - 1 && (
                    <div
                      className="md:hidden absolute left-5 top-12 bottom-0 w-px bg-border"
                      aria-hidden="true"
                    />
                  )}

                  <div className="relative z-10 flex-shrink-0 w-10 h-10 md:mb-4 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center">
                    <span className="font-mono text-xs font-bold text-primary">{step.number}</span>
                  </div>

                  <div className="flex-1 md:pt-0 pb-6 md:pb-0">
                    <div className="w-8 h-8 rounded bg-card border border-border flex items-center justify-center mb-3 hidden md:flex">
                      <Icon name={step.icon} size={14} className="text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground text-sm mb-2 leading-snug">{step.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 reveal delay-500 text-center">
            <a
              href="https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%27d%20like%20to%20start%20Step%201%20and%20discuss%20my%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={16} />
              Start Step 1 — WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}