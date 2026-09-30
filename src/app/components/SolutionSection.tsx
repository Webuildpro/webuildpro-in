'use client';
import React from 'react';
import CircuitDivider from '@/components/CircuitDivider';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const pillars = [
  {
    number: '01',
    title: 'ENGINEERED, NOT ASSEMBLED',
    description:
      'Every build starts at requirements and block diagram, not at a marketplace listing. Circuit design, PCB, firmware, mechanical fabrication and enclosure — done in-house in our Bangalore lab.',
  },
  {
    number: '02',
    title: 'TESTED BEFORE IT LEAVES',
    description:
      'Nothing ships until it has run a full functional test cycle on our bench. You get the working unit, source code, circuit diagrams, BOM, report material and PPT support.',
  },
  {
    number: '03',
    title: 'YOU LEARN IT, NOT JUST OWN IT',
    description:
      'A structured handover session walks you through architecture, component selection and failure modes — so viva questions and investor questions both get real answers.',
  },
];

export default function SolutionSection() {
  const ref = useScrollReveal();

  return (
    <>
      <CircuitDivider />
      <section id="solution" suppressHydrationWarning className="py-20 bg-secondary" aria-labelledby="solution-heading" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="micro-label block mb-3">// HOW WE WORK</span>
            <h2 id="solution-heading" className="text-section-xl font-bold text-foreground reveal">
              A working lab in Bangalore. Not a reseller with a catalogue.
            </h2>
            <p className="text-muted-foreground mt-4 text-base max-w-2xl reveal delay-100">
              We fabricate, wire, flash, test and hand over — then teach you to defend every design decision in it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {pillars?.map((p, i) => (
              <div
                key={i}
                className={`reveal delay-${(i + 1) * 100} card-glow bg-background border border-border rounded p-6 flex flex-col`}
              >
                <span className="font-mono text-3xl font-bold text-primary/30 mb-4 block">{p?.number}</span>
                <h3 className="font-bold text-foreground text-sm tracking-wide mb-3 font-mono">{p?.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{p?.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}