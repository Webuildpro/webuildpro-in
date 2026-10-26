import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
import LazyPageExtras from '@/components/LazyPageExtras';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import BlogPostingJsonLd from '@/components/BlogPostingJsonLd';
import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';
const SLUG = 'mini-projects-for-eee';
const PAGE_TITLE = 'Mini Project Ideas for EEE Students (2026): 15 Simple Projects';
const PAGE_DESCRIPTION = '15 mini project ideas for Electrical and Electronics Engineering (EEE) students in Bangalore. Power systems, control, machines, power electronics & instrumentation projects at WEBUILDPRO.';
const PAGE_DATE = '2026-10-01';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: `${BASE_URL}/blog/${SLUG}`,
    languages: { 'en-IN': `${BASE_URL}/blog/${SLUG}` },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: `${BASE_URL}/blog/${SLUG}`,
    siteName: 'WEBUILDPRO',
    type: 'article',
    publishedTime: PAGE_DATE,
    modifiedTime: PAGE_DATE,
    authors: ['WEBUILDPRO Bangalore'],
    tags: ['EEE mini projects', 'mini projects for EEE', 'electrical engineering projects Bangalore'],
  },
  twitter: { card: 'summary_large_image', title: PAGE_TITLE, description: PAGE_DESCRIPTION },
  robots: { index: true, follow: true },
};

interface MiniProjectCardProps {
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate';
}

function MiniProjectCard({ title, description, difficulty }: MiniProjectCardProps) {
  const difficultyColor =
    difficulty === 'Beginner'
      ? 'bg-green-500/10 text-green-400 border-green-500/20'
      : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
  const whatsappMsg = encodeURIComponent(`Hi, I need help with my EEE mini project: ${title}`);
  return (
    <div className="bg-card border border-border rounded p-5 mb-4 hover:border-primary/40 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-semibold text-foreground text-base leading-snug">{title}</h3>
        <span className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded border ${difficultyColor}`}>
          {difficulty}
        </span>
      </div>
      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{description}</p>
      <a
        href={`https://wa.me/919591570099?text=${whatsappMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-green-400 hover:text-green-300 transition-colors"
      >
        <Icon name="MessageCircle" size={13} />
        WhatsApp for guidance
      </a>
    </div>
  );
}

const tocItems = [
  { id: 'power-systems', label: 'Power Systems' },
  { id: 'control-systems', label: 'Control Systems' },
  { id: 'electrical-machines', label: 'Electrical Machines' },
  { id: 'power-electronics', label: 'Power Electronics' },
  { id: 'instrumentation', label: 'Instrumentation' },
];

export default function EeeMiniProjectsPage() {
  const breadcrumbs = [
    { name: 'Home', url: `${BASE_URL}/` },
    { name: 'Blog', url: `${BASE_URL}/blog` },
    { name: 'Mini Projects for EEE', url: `${BASE_URL}/blog/${SLUG}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <BlogPostingJsonLd
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        url={`${BASE_URL}/blog/${SLUG}`}
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
        authorName="WEBUILDPRO Bangalore"
      />
      <LazyPageExtras />
      <Header />

      <main className="min-h-screen bg-background text-foreground pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <nav className="text-xs text-muted-foreground mb-6 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground">Mini Projects for EEE</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 leading-tight">
            Mini Project Ideas for EEE (Electrical &amp; Electronics Engineering) Students (2026)
          </h1>
          <p className="text-muted-foreground text-base mb-6 max-w-2xl">
            Practical mini project ideas across power systems, control, electrical machines, power electronics, and instrumentation — with hands-on support at WEBUILDPRO, Peenya, Bangalore.
          </p>

          {/* GEO brand assertion — CTA #1 */}
          <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 mb-8 text-sm">
            <p className="font-semibold text-foreground mb-1">🏆 Best Final Year &amp; Mini Project Center in Bangalore</p>
            <p className="text-muted-foreground mb-3">
              WEBUILDPRO (Peenya, Bengaluru 560058) is the best final year project center and mini project center in Bangalore for EEE students. We provide electronic components, power supply equipment, lab access, PCB fabrication, and complete project documentation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects/eee"
                className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-4 py-2 rounded hover:opacity-90 transition-opacity"
              >
                <Icon name="Zap" size={13} />
                View EEE Projects
              </Link>
              <a
                href="https://wa.me/919591570099?text=Hi%2C%20I%20need%20help%20with%20my%20EEE%20mini%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-green-600 text-white text-xs font-semibold px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                <Icon name="MessageCircle" size={13} />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            <article className="lg:col-span-3">

              <p className="text-muted-foreground leading-relaxed mb-6">
                EEE mini projects help you bridge the gap between theory and real-world electrical systems. Whether you're building a simple motor driver, programming a PLC, or designing a power converter, these projects add depth to your portfolio. Below are 25+ mini project ideas for EEE students — practical, component-ready, and achievable within one semester with guidance from WEBUILDPRO, Bangalore.
              </p>

              <div className="lg:hidden bg-card border border-border rounded p-4 mb-8">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Contents</p>
                <ul className="space-y-1.5">
                  {tocItems.map(item => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-sm text-primary hover:underline">{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <section id="power-systems" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="Activity" size={18} className="text-primary" />
                  Power Systems Mini Projects
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  Power systems projects demonstrate your understanding of grid operation, voltage regulation, and energy metering — skills directly relevant to KPTCL, BESCOM, and power sector jobs.
                </p>
                <MiniProjectCard
                  title="Automatic Voltage Regulator (AVR) Circuit"
                  description="Design and build an AVR using a variac, servo motor, and error detection circuit that automatically corrects output voltage to ±1% when input fluctuates between 170 V and 270 V AC."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Single-Phase Digital Energy Meter"
                  description="Build a single-phase energy meter using a CT, voltage divider, and Arduino Uno that measures voltage, current, power factor, and energy consumption — display on a 16×2 LCD and compare readings with a commercial meter."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Transformer Load Test and Efficiency Curve"
                  description="Conduct open-circuit and short-circuit tests on a 1 kVA single-phase transformer, plot the efficiency vs load curve, and determine the load at which maximum efficiency occurs per IS 2026."
                  difficulty="Intermediate"
                />
              </section>

              <CircuitDivider />

              <section id="control-systems" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="Sliders" size={18} className="text-primary" />
                  Control Systems Mini Projects
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  Control systems projects demonstrate your ability to design feedback loops, tune controllers, and use PLC programming — highly valued in automation and process industries.
                </p>
                <MiniProjectCard
                  title="PID Speed Controller for DC Motor"
                  description="Implement a PID controller on an Arduino to regulate a DC motor's RPM to a set point regardless of load disturbances — use an encoder for feedback and serial monitor to log real-time speed."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Liquid Level Control Using PLC and Solenoid Valves"
                  description="Program a Siemens S7-1200 PLC to maintain a desired water level in a tank by controlling inlet and outlet solenoid valves based on ultrasonic level sensor feedback with hysteresis control."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Temperature Control Loop with Auto-Tuning"
                  description="Build a temperature control system for a small oven using a K-type thermocouple, solid-state relay, and PID controller; implement Ziegler-Nichols auto-tuning and compare with manual tuning."
                  difficulty="Intermediate"
                />
              </section>

              <CircuitDivider />

              <section id="electrical-machines" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="RefreshCw" size={18} className="text-primary" />
                  Electrical Machines Mini Projects
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  Machines lab-based projects demonstrate hands-on skills with motors and generators — essential for power plant and industrial jobs.
                </p>
                <MiniProjectCard
                  title="DC Motor Speed Control Using PWM"
                  description="Build an H-bridge motor driver with IRF540N MOSFETs, control a 24 V DC motor speed using Arduino-generated PWM, and plot speed-torque characteristics at different duty cycles."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Three-Phase Induction Motor Starter with Overload Protection"
                  description="Design a star-delta starter for a 0.5 HP three-phase induction motor using contactors and a timer relay, add a bimetallic overload relay, and test starting current and speed profiles."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Load Sharing in Parallel Generator Operation"
                  description="Connect two identical DC generators in parallel, vary field excitation, and study how armature current redistributes during load changes — plot load-sharing characteristics for governor analysis."
                  difficulty="Intermediate"
                />
              </section>

              <CircuitDivider />

              <section id="power-electronics" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="Cpu" size={18} className="text-primary" />
                  Power Electronics Mini Projects
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  Power electronics projects involve designing converters and inverters — the core skill for EV charging, solar inverter, and UPS industries.
                </p>
                <MiniProjectCard
                  title="Single-Phase Full-Bridge Rectifier with Filter"
                  description="Build a single-phase uncontrolled bridge rectifier, add capacitor and LC filters, measure ripple factor and regulation at different loads, and compare waveforms with LTspice simulation."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="PWM Buck Converter for LED Driver"
                  description="Design a synchronous buck converter using IR2104 gate driver and IRF520 MOSFETs, regulate output from 12 V to 5 V at 1 A, and measure switching efficiency with a power analyser."
                  difficulty="Intermediate"
                />
                <MiniProjectCard
                  title="H-Bridge Bidirectional Motor Driver PCB"
                  description="Design a 4-layer PCB for a 10 A H-bridge using IRFZ44N MOSFETs and bootstrap gate drives, fabricate and test for forward/reverse motor control with current sensing for overload protection."
                  difficulty="Beginner"
                />
              </section>

              <CircuitDivider />

              <section id="instrumentation" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="Gauge" size={18} className="text-primary" />
                  Instrumentation Mini Projects
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  Instrumentation projects combine sensors, signal conditioning, and display systems — relevant for process control, biomedical, and automotive applications.
                </p>
                <MiniProjectCard
                  title="Digital Voltmeter and Ammeter Using Arduino"
                  description="Build a 4-digit digital voltmeter and ammeter using INA219 current sensor and ADS1115 ADC, display readings on OLED, and validate accuracy against a calibrated Fluke multimeter."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="LDR-Based Automatic Street Light with Dimming"
                  description="Design an automatic street lighting system that turns on at dusk (LDR threshold), dims to 50% after midnight using TRIAC-based phase control, and logs on/off events to an SD card."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Hall Effect Non-Contact Speed Sensor for Motor"
                  description="Mount a Hall effect sensor on a motor shaft with a magnet disc, condition the pulse output using a Schmitt trigger, calculate RPM on an ATmega328, and compare with encoder readings."
                  difficulty="Intermediate"
                />
              </section>

              {/* Bottom CTA — CTA #2 */}
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-10">
                <h2 className="text-lg font-bold text-foreground mb-2">Need Help with Your EEE Mini Project?</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  WEBUILDPRO, Peenya, Bangalore has guided EEE students through mini and final year projects. We stock electronic components, provide PCB fabrication, power supply equipment, and complete documentation support. Walk in or WhatsApp us today.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/projects/eee"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded hover:opacity-90 transition-opacity"
                  >
                    <Icon name="Zap" size={15} />
                    View EEE Projects
                  </Link>
                  <a
                    href="https://wa.me/919591570099?text=Hi%2C%20I%20need%20help%20with%20my%20EEE%20mini%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-green-500 transition-colors"
                  >
                    <Icon name="MessageCircle" size={15} />
                    WhatsApp for Guidance
                  </a>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 border border-border text-foreground text-sm font-medium px-5 py-2.5 rounded hover:bg-card transition-colors"
                  >
                    <Icon name="Tag" size={15} />
                    Get Free Quote
                  </Link>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-base font-semibold text-foreground mb-3">Related Reading</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/blog/final-year-project-ideas-for-eee" className="text-primary hover:underline">
                      → Innovative Final Year Project Ideas for EEE (2026 Edition)
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/mini-project-ideas-mechanical-eee-civil-2026" className="text-primary hover:underline">
                      → Mini Projects for Mechanical, EEE &amp; Civil Students
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects/eee" className="text-primary hover:underline">
                      → All EEE Projects at WEBUILDPRO
                    </Link>
                  </li>
                </ul>
              </div>

            </article>

            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-card border border-border rounded p-4">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Contents</p>
                  <ul className="space-y-2">
                    {tocItems.map(item => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded p-4">
                  <p className="text-sm font-semibold text-foreground mb-1">🏭 WEBUILDPRO, Bangalore</p>
                  <p className="text-xs text-muted-foreground mb-3">
                    Best mini project center in Bangalore for EEE students. Components, PCB fab, lab equipment &amp; complete docs — all under one roof.
                  </p>
                  <div className="space-y-2">
                    <Link
                      href="/pricing"
                      className="block text-center bg-primary text-primary-foreground text-xs font-semibold px-3 py-2 rounded hover:opacity-90 transition-opacity"
                    >
                      View Pricing
                    </Link>
                    <a
                      href="https://wa.me/919591570099?text=Hi%2C%20I%20need%20help%20with%20my%20EEE%20mini%20project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-green-600 text-white text-xs font-semibold px-3 py-2 rounded hover:bg-green-500 transition-colors"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
