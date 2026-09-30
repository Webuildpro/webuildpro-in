'use client';
import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function OnlineOfflineSection() {
  const ref = useScrollReveal();

  return (
    <>
      <CircuitDivider />
      <section id="delivery-modes" suppressHydrationWarning className="py-20 bg-secondary" aria-labelledby="delivery-heading" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="micro-label block mb-3">// HOW WE DELIVER</span>
            <h2 id="delivery-heading" className="text-section-xl font-bold text-foreground reveal">
              Online, Offline & Hybrid — however you want to work.
            </h2>
            <p className="text-muted-foreground text-sm mt-3 max-w-2xl">
              We are based in Bangalore, but we deliver projects and internships across India. Choose the mode that suits your location and project type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="reveal delay-100 bg-card border border-border rounded p-6">
              <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="BuildingOfficeIcon" size={20} className="text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Offline (In-Person)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Work directly at our Peenya lab in Bangalore — hands-on with the hardware, bench time, and face-to-face mentoring. Best for hardware projects and students who can travel to Bangalore.
              </p>
              <ul className="space-y-1">
                {['Direct lab access in Peenya, Bangalore', 'Face-to-face mentoring', 'Best for hardware-heavy projects']?.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon name="CheckIcon" size={12} className="text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal delay-200 bg-card border border-primary/30 rounded p-6">
              <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center mb-4">
                <Icon name="ComputerDesktopIcon" size={20} className="text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Online (Remote)</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Full remote delivery pan-India — video walkthroughs, screen-share mentoring, milestone demo calls, and the finished unit shipped to your door with source code and documentation.
              </p>
              <ul className="space-y-1">
                {['Pan-India delivery', 'Hardware shipped to your door', 'Best for software projects']?.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon name="CheckIcon" size={12} className="text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal delay-300 bg-card border border-border rounded p-6">
              <div className="w-10 h-10 rounded bg-green-500/10 flex items-center justify-center mb-4">
                <Icon name="ArrowsRightLeftIcon" size={20} className="text-green-400" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Hybrid</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Kickoff and final handover in person at our Bangalore lab; the build, reviews and mentoring sessions happen remotely. Best of both worlds.
              </p>
              <ul className="space-y-1">
                {['In-person kickoff & handover', 'Remote build & reviews', 'Flexible for busy students']?.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon name="CheckIcon" size={12} className="text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Popular in Bangalore link block */}
          <div className="reveal delay-400 border border-border rounded p-6 bg-background">
            <h3 className="micro-label mb-4">// POPULAR IN BANGALORE</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link href="/project-centre-bangalore" className="flex items-start gap-3 p-3 bg-card border border-border rounded hover:border-primary/40 transition-colors group">
                <Icon name="ChevronRightIcon" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block">Best Project Centre in Bangalore</span>
                  <span className="text-xs text-muted-foreground">Why WEBUILDPRO vs a typical reseller</span>
                </div>
              </Link>
              <Link href="/final-year-projects-bangalore" className="flex items-start gap-3 p-3 bg-card border border-border rounded hover:border-primary/40 transition-colors group">
                <Icon name="ChevronRightIcon" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block">Final Year Projects in Bangalore</span>
                  <span className="text-xs text-muted-foreground">All branches, IEEE & non-IEEE</span>
                </div>
              </Link>
              <Link href="/internship-bangalore" className="flex items-start gap-3 p-3 bg-card border border-border rounded hover:border-primary/40 transition-colors group">
                <Icon name="ChevronRightIcon" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block">Engineering Internship in Bangalore</span>
                  <span className="text-xs text-muted-foreground">Real builds, verifiable certificate</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
