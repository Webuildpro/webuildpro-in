'use client';
import React from 'react';
import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const problems = [
  {
    icon: 'ExclamationTriangleIcon' as const,
    title: 'The project doesn\'t work on demo day.',
    description: 'Bought off a reseller, never tested end-to-end, dies the moment your HOD asks it to run twice.',
  },
  {
    icon: 'QuestionMarkCircleIcon' as const,
    title: 'You can\'t explain your own project.',
    description: 'No design walkthrough, no circuit rationale. The viva panel figures that out in ninety seconds.',
  },
  {
    icon: 'ClockIcon' as const,
    title: 'Deadlines slip until it\'s your problem.',
    description: 'Vendors go quiet in the final week. You\'re the one standing in front of the panel, not them.',
  },
  {
    icon: 'ArchiveBoxXMarkIcon' as const,
    title: 'Startups burn six months on a prototype that never leaves CAD.',
    description: 'No fabrication partner, no testing rig, no path from render to working unit.',
  },
];

export default function ProblemSection() {
  const ref = useScrollReveal();

  return (
    <>
      <CircuitDivider />
      <section id="problems" suppressHydrationWarning className="py-20 bg-background blueprint-grid-subtle" aria-labelledby="problem-heading" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="micro-label block mb-3">// THE PROBLEM</span>
            <h2 id="problem-heading" className="text-section-xl font-bold text-foreground reveal">
              Most &ldquo;project centres&rdquo; sell you a PDF and a prayer.
            </h2>
            <p className="text-muted-foreground mt-4 text-base reveal delay-100">
              You&apos;ve heard the stories. Here&apos;s what actually goes wrong:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problems.map((p, i) => (
              <div
                key={i}
                className={`reveal delay-${(i + 1) * 100} card-glow bg-card border border-border rounded p-6`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={p.icon} size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2 text-sm leading-snug">{p.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 reveal delay-500">
            <p className="text-base font-semibold text-foreground border-l-2 border-primary pl-4">
              Every one of these comes from the same root cause — <span className="text-primary">nobody actually built the hardware.</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}