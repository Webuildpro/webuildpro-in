'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LazyPageExtras from '@/components/LazyPageExtras';
import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';

const WA_HREF =
  'https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%20have%20a%20final%20year%20project%20idea%20%E2%80%94%20can%20you%20build%20it%3F';

function WhatsAppCTA({ label = 'WhatsApp WEBUILDPRO — Build My ECE Project' }: { label?: string }) {
  return (
    <a
      href={WA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-6 py-3 rounded transition-colors w-full sm:w-auto"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {label}
    </a>
  );
}

const tocItems = [
  { id: 'iot-projects', label: 'IoT Project Ideas for ECE' },
  { id: 'embedded-systems', label: 'Embedded Systems Projects' },
  { id: 'vlsi-fpga', label: 'VLSI & FPGA Projects' },
  { id: 'robotics-drones', label: 'Robotics & Drone Projects' },
  { id: 'biomedical', label: 'Biomedical Projects' },
  { id: 'wireless-communication', label: 'Wireless & Communication Projects' },
  { id: 'matlab-signal', label: 'MATLAB & Signal Processing' },
  { id: 'how-to-choose', label: 'How to Choose the Right ECE Project' },
  { id: 'build-with-webuildpro', label: 'Build with WEBUILDPRO' },
];

export default function ECEProjectIdeasPage() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-20% 0% -70% 0%' }
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <Icon name="ChevronRightIcon" size={12} />
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">
                <Icon name="ChevronRightIcon" size={12} />
              </li>
              <li className="text-foreground font-medium truncate max-w-xs" aria-current="page">
                Innovative Final Year Project Ideas for ECE (2026)
              </li>
            </ol>
          </nav>

          {/* Article header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {['ECE Projects', 'Final Year Projects', 'IoT Projects', 'Embedded Systems', 'Bangalore'].map((tag) => (
                <span key={tag} className="chip-cyan text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-hero-lg font-bold text-foreground mb-3 leading-tight">
              Innovative Final Year Project Ideas for ECE Students (2026)
            </h1>
            <p className="text-muted-foreground text-sm mb-4">Last updated: August 2026</p>
            <p className="text-muted-foreground text-base mb-6">
              40+ innovative &amp; latest final year project ideas for ECE students in Bangalore — IoT, embedded, VLSI,
              robotics, drones &amp; biomedical. Built by WEBUILDPRO.{' '}
              <a href="tel:+919538208573" className="text-accent hover:text-accent/80 underline transition-colors">
                Call 9538208573
              </a>
              .
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono border-t border-border pt-4">
              <span>WEBUILDPRO India</span>
              <span>·</span>
              <span>August 2026</span>
              <span>·</span>
              <span>14 min read</span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Article content */}
            <article className="lg:col-span-3">
              {/* Intro */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Looking for{' '}
                <strong className="text-foreground">innovative final year project ideas for ECE</strong>, or the latest
                and new ECE project ideas for 2026? This list gives you 40+ trending final year project ideas for
                Electronics &amp; Communication Engineering students — IoT, embedded systems, VLSI, robotics, drones,
                biomedical and wireless communication. WEBUILDPRO builds every one of these ECE final year projects in
                Bangalore as working, tested hardware with source code, circuit diagrams, firmware and full
                documentation, online or offline. Pick an idea below and we&apos;ll build it for you.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Curious about who makes final year projects in Bangalore? Our guide on{' '}
                <Link href="/blog/final-year-engineering-project-makers-in-bangalore" className="text-accent hover:underline">
                  final year engineering project makers in Bangalore
                </Link>{' '}
                covers the full process, timelines and what to expect.
              </p>

              {/* Intro CTA */}
              <div className="mb-8">
                <WhatsAppCTA />
              </div>

              {/* IoT Projects */}
              <h2 id="iot-projects" className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug">
                IoT Project Ideas for ECE
              </h2>
              <ul className="space-y-3 mb-6">
                {[
                  { title: 'IoT Smart Agriculture System', desc: 'soil, weather & auto-irrigation.' },
                  { title: 'IoT Patient Health Monitoring', desc: 'live vitals to doctor.' },
                  { title: 'IoT Air Quality Monitoring', desc: 'pollutant AQI dashboard.' },
                  { title: 'IoT Gas Leakage Detection & Alert', desc: 'safety system.' },
                  { title: 'IoT Smart Energy Meter', desc: 'consumption tracking.' },
                  { title: 'IoT Industrial Parameter Monitor', desc: 'machine health.' },
                  { title: 'IoT Smart Water Quality Monitoring', desc: 'pH/TDS alerts.' },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3 bg-card border border-border rounded p-4">
                    <span className="text-accent mt-0.5 flex-shrink-0">
                      <Icon name="WifiIcon" size={14} />
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">{title}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Embedded Systems */}
              <h2 id="embedded-systems" className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug">
                Embedded Systems Project Ideas for ECE
              </h2>
              <ul className="space-y-3 mb-6">
                {[
                  { title: 'Smart Helmet with Accident Detection & SOS', desc: 'road safety.' },
                  { title: 'Fingerprint-Authorised Vehicle Safety System', desc: 'anti-theft.' },
                  { title: 'Automated Smart Toll Tax System', desc: 'RFID booth.' },
                  { title: 'Digital Taxi Fare Meter', desc: 'microcontroller metering.' },
                  { title: 'Weight Counter & Segregator', desc: 'industrial control.' },
                  { title: 'Automatic Street Light with LDR', desc: 'energy saving.' },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3 bg-card border border-border rounded p-4">
                    <span className="text-accent mt-0.5 flex-shrink-0">
                      <Icon name="CpuChipIcon" size={14} />
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">{title}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Mid CTA */}
              <div className="my-8">
                <WhatsAppCTA label="WhatsApp WEBUILDPRO — Get a Free ECE Project Quote" />
              </div>

              {/* VLSI & FPGA */}
              <h2 id="vlsi-fpga" className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug">
                VLSI &amp; FPGA Project Ideas for ECE
              </h2>
              <ul className="space-y-3 mb-6">
                {[
                  { title: 'Low-Power ALU Design on FPGA', desc: 'Verilog/VHDL.' },
                  { title: 'FPGA-Based Image Processing Pipeline', desc: 'real-time filtering.' },
                  { title: 'VLSI Implementation of Encryption Core', desc: 'cryptography.' },
                  { title: 'FPGA UART / SPI Protocol Implementation', desc: 'communication.' },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3 bg-card border border-border rounded p-4">
                    <span className="text-accent mt-0.5 flex-shrink-0">
                      <Icon name="CircleStackIcon" size={14} />
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">{title}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Robotics & Drones */}
              <h2 id="robotics-drones" className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug">
                Robotics &amp; Drone Project Ideas for ECE
              </h2>
              <ul className="space-y-3 mb-6">
                {[
                  { title: 'Autonomous Obstacle-Avoiding Robot', desc: 'sensor navigation.' },
                  { title: 'Colour-Sorting Robotic Arm', desc: 'machine vision.' },
                  { title: 'Gesture-Controlled Robot', desc: 'accelerometer control.' },
                  { title: 'Agriculture Surveillance Drone', desc: 'aerial crop monitoring.' },
                  { title: 'Autonomous Inventory Drone', desc: 'warehouse scanning.' },
                  { title: 'Hybrid Drone-Rover (Flies & Drives)', desc: 'multi-terrain.' },
                  { title: 'Firefighting Robot', desc: 'flame detection & suppression.' },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3 bg-card border border-border rounded p-4">
                    <span className="text-accent mt-0.5 flex-shrink-0">
                      <Icon name="BoltIcon" size={14} />
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">{title}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Post-robotics CTA */}
              <div className="my-8">
                <WhatsAppCTA label="WhatsApp WEBUILDPRO — Pick an ECE Project & We'll Build It" />
              </div>

              {/* Biomedical */}
              <h2 id="biomedical" className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug">
                Biomedical Project Ideas for ECE
              </h2>
              <ul className="space-y-3 mb-6">
                {[
                  { title: 'IoT Soldier Health Monitoring', desc: 'vitals + GPS.' },
                  { title: 'Wearable Heart-Rate & SpO2 Band', desc: 'health monitoring.' },
                  { title: 'ECG Monitoring Device', desc: 'cardiac signal capture.' },
                  { title: 'Obstacle-Detecting Smart Blind Stick', desc: 'assistive tech.' },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3 bg-card border border-border rounded p-4">
                    <span className="text-accent mt-0.5 flex-shrink-0">
                      <Icon name="HeartIcon" size={14} />
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">{title}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Wireless & Communication */}
              <h2 id="wireless-communication" className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug">
                Wireless &amp; Communication Project Ideas for ECE
              </h2>
              <ul className="space-y-3 mb-6">
                {[
                  { title: 'LoRa Long-Range Sensor Network', desc: 'low-power IoT.' },
                  { title: 'GSM-Based SMS Alert & Control', desc: 'remote control.' },
                  { title: 'Li-Fi Data Transmission', desc: 'visible-light communication.' },
                  { title: 'RF-Based Wireless Notice Board', desc: 'campus display.' },
                  { title: 'Underground Cable Fault Locator', desc: 'utility tool.' },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3 bg-card border border-border rounded p-4">
                    <span className="text-accent mt-0.5 flex-shrink-0">
                      <Icon name="SignalIcon" size={14} />
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">{title}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>

              {/* MATLAB & Signal Processing */}
              <h2 id="matlab-signal" className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug">
                MATLAB &amp; Signal Processing Project Ideas for ECE
              </h2>
              <ul className="space-y-3 mb-6">
                {[
                  { title: 'MATLAB Image Enhancement System', desc: 'filtering & restoration.' },
                  { title: 'MATLAB Speech Recognition', desc: 'audio processing.' },
                  { title: 'MATLAB Biomedical Signal (ECG/EEG) Analysis', desc: 'diagnostics.' },
                  { title: 'MATLAB Digital Modulation Simulation', desc: 'communication.' },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3 bg-card border border-border rounded p-4">
                    <span className="text-accent mt-0.5 flex-shrink-0">
                      <Icon name="ChartBarIcon" size={14} />
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">{title}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Post-ideas CTA */}
              <div className="my-8">
                <WhatsAppCTA label="WhatsApp WEBUILDPRO — Start Your ECE Project Today" />
              </div>

              {/* How to Choose */}
              <h2 id="how-to-choose" className="text-xl font-bold text-foreground mt-10 mb-4 leading-snug">
                How to Choose the Right ECE Project
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Pick a project matching your interest and your college&apos;s IEEE/non-IEEE requirement. Love hardware?
                Choose embedded, IoT, robotics or drones. Prefer chip design? Go VLSI/FPGA. Interested in healthcare?
                Choose biomedical. Make sure components are available and the project can be demonstrated live.
                WEBUILDPRO helps you choose and builds it tested and defendable.
              </p>

              {/* Build CTA block */}
              <div id="build-with-webuildpro" className="bg-card border border-primary/30 rounded p-6 mb-10 mt-10">
                <span className="micro-label block mb-2">// BUILD WITH WEBUILDPRO, BANGALORE</span>
                <h2 className="text-section-xl font-bold text-foreground mb-3 leading-snug">
                  Build Your ECE Project with WEBUILDPRO, Bangalore
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Bring any idea above or your own — WEBUILDPRO builds ECE final year projects in Bangalore, online and
                  offline, with working hardware, source code, report and a viva walkthrough.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <WhatsAppCTA />
                  <a
                    href="tel:+919538208573"
                    className="inline-flex items-center justify-center gap-2 border border-border hover:border-primary/40 text-foreground font-medium text-sm px-6 py-3 rounded transition-colors"
                  >
                    <Icon name="PhoneIcon" size={16} />
                    Call 9538208573
                  </a>
                </div>
              </div>

              {/* Internal links */}
              <div className="border-t border-border pt-6">
                <p className="text-xs text-muted-foreground font-mono mb-3">// RELATED READING</p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/projects/ece"
                      className="text-sm text-accent hover:text-accent/80 underline transition-colors"
                    >
                      Browse all ECE projects at WEBUILDPRO →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/mini-projects"
                      className="text-sm text-accent hover:text-accent/80 underline transition-colors"
                    >
                      Mini Projects for ECE students →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/mini-project-ideas-ece-2026"
                      className="text-sm text-accent hover:text-accent/80 underline transition-colors"
                    >
                      Mini Project Ideas for ECE Students (2026) →
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/final-year-project-ideas-ece-2026"
                      className="text-sm text-accent hover:text-accent/80 underline transition-colors"
                    >
                      Final Year Project Ideas for ECE (2026) →
                    </Link>
                  </li>
                </ul>
              </div>
            </article>

            {/* Sticky Table of Contents */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-card border border-border rounded p-5">
                <p className="micro-label mb-4">// TABLE OF CONTENTS</p>
                <nav aria-label="Table of contents">
                  <ul className="space-y-2">
                    {tocItems.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={`text-xs transition-colors leading-relaxed block ${
                            activeId === item.id
                              ? 'text-accent font-medium' :'text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>
          </div>
        </div>

        <CircuitDivider />

        {/* Bottom CTA */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
          <span className="micro-label block mb-3">// NEED HELP WITH YOUR ECE PROJECT?</span>
          <h2 className="text-section-xl font-bold text-foreground mb-4">Talk to an engineer in Bangalore.</h2>
          <p className="text-muted-foreground text-sm mb-6">
            Free 15-minute call. Fixed quote in 24 hours. Online &amp; offline delivery across India.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <WhatsAppCTA label="WhatsApp WEBUILDPRO Now" />
            <a
              href="tel:+919538208573"
              className="inline-flex items-center justify-center gap-2 border border-border hover:border-primary/40 text-foreground font-medium text-sm px-6 py-3 rounded transition-colors"
            >
              <Icon name="PhoneIcon" size={16} />
              Call +91 95382 08573
            </a>
            <Link
              href="/blog"
              className="btn-ghost inline-flex items-center gap-2 px-6 py-3 text-sm font-medium"
            >
              <Icon name="ArrowLeftIcon" size={16} />
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}
