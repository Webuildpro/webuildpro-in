'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface FAQ {
  q: string;
  a: string;
}

interface FaqSectionProps {
  faqs: FAQ[];
}

export default function FaqSection({ faqs }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useScrollReveal();

  return (
    <>
      <CircuitDivider />
      <section id="faq" suppressHydrationWarning className="py-20 bg-background blueprint-grid-subtle" aria-labelledby="faq-heading" ref={ref}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="micro-label block mb-3">// FAQ</span>
            <h2 id="faq-heading" className="text-section-xl font-bold text-foreground reveal">
              Questions we get asked every week.
            </h2>
          </div>

          <div className="space-y-2" role="list">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <details
                  key={i}
                  open={isOpen}
                  className={`reveal delay-${Math.min((i + 1) * 50, 500)} bg-card border rounded overflow-hidden transition-colors duration-200 ${
                    isOpen ? 'border-primary/40' : 'border-border'
                  }`}
                  role="listitem"
                  onToggle={(e) => setOpenIndex(e.currentTarget.open ? i : -1)}
                >
                  <summary
                    className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-foreground leading-snug">{faq.q}</span>
                    <Icon
                      name={isOpen ? 'MinusIcon' : 'PlusIcon'}
                      size={16}
                      className={`flex-shrink-0 transition-colors ${isOpen ? 'text-primary' : 'text-muted-foreground'}`}
                    />
                  </summary>
                  <div className="accordion-content max-h-96 opacity-100">
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}