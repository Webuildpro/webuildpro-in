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
const SLUG = 'mini-project-ideas-ece-2026';
const PAGE_TITLE = 'Mini Project Ideas for ECE Students (2026) | WEBUILDPRO';
const PAGE_DESCRIPTION =
  '30+ simple, working mini project ideas for ECE students in Bangalore. Arduino, IoT, sensors & communication — with source code & guidance. 1st–6th sem.';
const PAGE_DATE = '2026-08-03';

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
    type: 'article',
    publishedTime: PAGE_DATE,
    modifiedTime: PAGE_DATE,
    authors: ['WEBUILDPRO India'],
    images: [
      {
        url: '/assets/images/wbinlogo-1786121366410.jpeg',
        width: 1200,
        height: 630,
        alt: 'Mini Project Ideas for ECE Students 2026 — WEBUILDPRO Bangalore',
      },
    ],
  },
};

const tocItems = [
  { id: 'iot-sensor-mini-projects', label: 'IoT & Sensor-Based Mini Projects' },
  { id: 'arduino-embedded-mini-projects', label: 'Arduino / Embedded Mini Projects' },
  { id: 'communication-mini-projects', label: 'Communication-Based Mini Projects' },
  { id: 'robotics-motor-mini-projects', label: 'Robotics & Motor Mini Projects' },
  { id: 'power-utility-mini-projects', label: 'Power & Utility Mini Projects' },
  { id: 'how-to-choose-ece-mini-project', label: 'How to Choose the Right ECE Mini Project' },
];

interface MiniProjectCardProps {
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate';
}

function MiniProjectCard({ title, description, difficulty }: MiniProjectCardProps) {
  const difficultyColor =
    difficulty === 'Beginner' ?'bg-green-500/10 text-green-400 border-green-500/20' :'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';

  const whatsappMsg = encodeURIComponent(
    `Hi, I need help with my ECE mini project: ${title}`
  );

  return (
    <div className="bg-card border border-border rounded p-5 mb-4">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <h3 className="font-bold text-foreground text-sm leading-snug flex-1">{title}</h3>
        <span className={`text-xs px-2 py-0.5 rounded border font-mono flex-shrink-0 ${difficultyColor}`}>
          {difficulty}
        </span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{description}</p>
      <a
        href={`https://wa.me/919591570099?text=${whatsappMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent/80 transition-colors font-medium"
      >
        <Icon name="ChatBubbleLeftRightIcon" size={12} />
        Enquire about this project
      </a>
    </div>
  );
}

export default function MiniProjectIdeasECEPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'Mini Project Ideas for ECE Students (2026)', url: `/blog/${SLUG}` },
        ]}
      />
      <BlogPostingJsonLd
        headline="Mini Project Ideas for ECE Students (2026)"
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
        description={PAGE_DESCRIPTION}
        slug={SLUG}
      />
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
              <li>
                <Link href="/mini-projects" className="hover:text-foreground transition-colors">
                  Mini Projects
                </Link>
              </li>
              <li aria-hidden="true">
                <Icon name="ChevronRightIcon" size={12} />
              </li>
              <li className="text-foreground font-medium truncate max-w-xs" aria-current="page">
                ECE Mini Project Ideas 2026
              </li>
            </ol>
          </nav>

          {/* Article header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {['ECE Projects', 'Mini Projects', 'Arduino & IoT'].map((tag) => (
                <span key={tag} className="chip-cyan text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-hero-lg font-bold text-foreground mb-3 leading-tight">
              Mini Project Ideas for ECE Students (2026)
            </h1>
            <p className="text-muted-foreground text-sm mb-4">Last updated: August 2026</p>
            <p className="text-muted-foreground text-base mb-6">
              30+ simple, working mini project ideas for ECE students in Bangalore. Arduino, IoT, sensors &amp;
              communication — with source code &amp; guidance. 1st–6th sem.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono border-t border-border pt-4">
              <span>WEBUILDPRO India</span>
              <span>·</span>
              <span>August 2026</span>
              <span>·</span>
              <span>12 min read</span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Article content */}
            <article className="lg:col-span-3">
              {/* Intro */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Looking for <strong className="text-foreground">mini project ideas for ECE</strong> that are simple,
                affordable, and actually work on demo day? This 2026 list has 30+ tested mini project ideas for
                Electronics &amp; Communication students from 1st to 6th semester — beginner-friendly builds using
                Arduino, sensors, and basic IoT that you can understand and explain. WEBUILDPRO builds and delivers
                every one of these in Bangalore, online or offline, with source code, circuit diagram and
                documentation. Each idea below includes what it does, the components used, and why it&apos;s a good
                pick for your semester.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Need a full final year project instead? See our guide on{' '}
                <Link href="/blog/final-year-engineering-project-makers-in-bangalore" className="text-accent hover:underline">
                  engineering project makers in Bangalore
                </Link>{' '}
                to understand how we build and deliver complete projects.
              </p>

              {/* IoT & Sensor-Based */}
              <h2
                id="iot-sensor-mini-projects"
                className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug"
              >
                IoT &amp; Sensor-Based Mini Projects
              </h2>
              <MiniProjectCard
                title="IoT Temperature & Humidity Monitor"
                description="Reads temperature and humidity with a DHT11 sensor and shows live values on a phone dashboard. A clean first IoT project."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="Smart Home Light Automation"
                description="Control a light/appliance from your phone over Wi-Fi using a NodeMCU and relay. Simple, impressive, easy to demo."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="Gas Leakage Detector with Buzzer"
                description="An MQ-2 gas sensor sounds a buzzer and alerts when it detects LPG or smoke. A practical safety mini project."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="Soil Moisture-Based Auto Plant Watering"
                description="Waters a plant automatically when the soil gets dry, using a moisture sensor and mini pump."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="IoT Air Quality Indicator"
                description="Measures air pollutant levels and shows a simple good/bad AQI reading on a display or app."
                difficulty="Intermediate"
              />
              <MiniProjectCard
                title="Ultrasonic Water Level Indicator"
                description="Uses an ultrasonic sensor to show tank water level and buzz when full. Great tank-overflow project."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="IoT Smart Dustbin"
                description="Lid opens automatically when a hand approaches, using an ultrasonic sensor and servo."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="PIR-Based Motion Detector Alarm"
                description="Detects human movement and triggers an alert — a basic security build."
                difficulty="Beginner"
              />

              {/* Arduino / Embedded */}
              <h2
                id="arduino-embedded-mini-projects"
                className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug"
              >
                Arduino / Embedded Mini Projects
              </h2>
              <MiniProjectCard
                title="Digital Thermometer with LCD"
                description="Displays live temperature on an LCD using a temperature sensor and Arduino."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="Password-Based Door Lock"
                description="A keypad-controlled door lock that opens only with the correct code, using a servo."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="RFID-Based Access System"
                description="Scans an RFID tag to grant or deny access — a simple, popular security project."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="Automatic Street Light"
                description="Lights turn on at dark and off in daylight using an LDR sensor. Classic energy-saving project."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="Heartbeat / Pulse Rate Monitor"
                description="Measures pulse with a heartbeat sensor and shows BPM on a display."
                difficulty="Intermediate"
              />
              <MiniProjectCard
                title="Fire Alarm System"
                description="Detects flame/heat and triggers an alarm with a flame sensor."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="Obstacle-Detecting Blind Stick"
                description="A walking stick that vibrates/buzzes when an obstacle is near, using ultrasonic sensing. A meaningful assistive project."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="Weather Station with Multiple Sensors"
                description="Combines temperature, humidity and pressure sensors into one live-reading unit."
                difficulty="Intermediate"
              />

              {/* Communication-Based */}
              <h2
                id="communication-mini-projects"
                className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug"
              >
                Communication-Based Mini Projects
              </h2>
              <MiniProjectCard
                title="Bluetooth-Controlled Home Appliances"
                description="Switch appliances on/off from a phone over Bluetooth using an HC-05 module."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="RF-Based Wireless Notice Board"
                description="Send text wirelessly to an LCD display board. Useful campus project."
                difficulty="Intermediate"
              />
              <MiniProjectCard
                title="IR Remote-Controlled Switching"
                description="Control devices with a TV remote using an IR receiver."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="GSM-Based SMS Alert System"
                description="Sends an SMS alert on a trigger (e.g. intrusion or gas) using a GSM module."
                difficulty="Intermediate"
              />
              <MiniProjectCard
                title="Li-Fi Data Transmission (Basic)"
                description="Transmit small data over light instead of radio — a neat demo of visible-light communication."
                difficulty="Intermediate"
              />

              {/* Robotics & Motor */}
              <h2
                id="robotics-motor-mini-projects"
                className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug"
              >
                Robotics &amp; Motor Mini Projects
              </h2>
              <MiniProjectCard
                title="Bluetooth-Controlled Robot Car"
                description="Drive a small robot car from your phone. A favourite first robotics project."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="Line-Following Robot"
                description="A robot that follows a black line using IR sensors. Teaches sensor-based control."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="Obstacle-Avoiding Robot"
                description="Navigates around obstacles automatically using ultrasonic sensing."
                difficulty="Intermediate"
              />
              <MiniProjectCard
                title="Gesture-Controlled Robot"
                description="Control a robot with hand tilts using an accelerometer."
                difficulty="Intermediate"
              />
              <MiniProjectCard
                title="Object-Following Robot"
                description="A robot that follows an object/person at a set distance."
                difficulty="Intermediate"
              />

              {/* Power & Utility */}
              <h2
                id="power-utility-mini-projects"
                className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug"
              >
                Power &amp; Utility Mini Projects
              </h2>
              <MiniProjectCard
                title="Solar-Powered Phone Charger"
                description="A small solar panel charging circuit for a phone/power bank."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="Automatic Water Pump Controller"
                description="Turns a pump on/off based on tank level automatically."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="Energy Meter with Display"
                description="Shows live power consumption of a load on a display."
                difficulty="Intermediate"
              />
              <MiniProjectCard
                title="Battery Level Indicator"
                description="LED bar that shows remaining battery charge."
                difficulty="Beginner"
              />

              {/* How to Choose */}
              <h2
                id="how-to-choose-ece-mini-project"
                className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug"
              >
                How to Choose the Right ECE Mini Project
              </h2>
              <div className="bg-card border border-border rounded p-6 mb-8">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Pick based on your semester and comfort, not the flashiest title. If you&apos;re in 1st–3rd sem,
                  start with a single-sensor Arduino build (auto street light, gas detector, ultrasonic water level)
                  — you&apos;ll understand every wire and answer any viva question. In 4th–6th sem, combine two ideas
                  or add IoT/Bluetooth for more marks. Choose something whose purpose you can explain in one
                  sentence, make sure the components are easily available, and prefer a project you can actually
                  demonstrate live rather than one that only works in theory. If you want it built, tested and
                  explained so you can defend it, WEBUILDPRO does exactly that.
                </p>
              </div>

              {/* CTA Block */}
              <div className="bg-primary/5 border border-primary/20 rounded p-6 mb-10">
                <h2 className="text-base font-bold text-foreground mb-2">
                  Build your mini project with WEBUILDPRO, Bangalore
                </h2>
                <p className="text-sm text-muted-foreground mb-5">
                  We build, test and deliver every project on this list — with source code, circuit diagram and
                  documentation. Online and offline delivery across India. Fixed price, no surprises.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/919591570099?text=Hi%2C%20I%20need%20help%20with%20my%20ECE%20mini%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
                  >
                    <Icon name="ChatBubbleLeftRightIcon" size={16} />
                    WhatsApp Us
                  </a>
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold"
                  >
                    <Icon name="DocumentTextIcon" size={16} />
                    Get Quote
                  </Link>
                </div>
              </div>

              {/* Internal links */}
              <div className="border-t border-border pt-8 mb-8">
                <h3 className="text-sm font-bold text-foreground mb-4">Related reading</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/mini-projects"
                      className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5"
                    >
                      <Icon name="ArrowRightIcon" size={12} />
                      Browse all mini projects with prices — WEBUILDPRO
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/final-year-project-ideas-ece-2026"
                      className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5"
                    >
                      <Icon name="ArrowRightIcon" size={12} />
                      Final Year Project Ideas for ECE Students (2026) — 40+ Topics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/how-to-choose-final-year-engineering-project"
                      className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5"
                    >
                      <Icon name="ArrowRightIcon" size={12} />
                      How to Choose a Final Year Engineering Project That Impresses the Panel
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/ece"
                      className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5"
                    >
                      <Icon name="ArrowRightIcon" size={12} />
                      Browse all ECE projects at WEBUILDPRO
                    </Link>
                  </li>
                </ul>
              </div>
            </article>

            {/* Sidebar TOC */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-card border border-border rounded p-4">
                  <h2 className="text-xs font-bold text-foreground uppercase tracking-wider mb-4">
                    Table of Contents
                  </h2>
                  <nav aria-label="Table of contents">
                    <ul className="space-y-2">
                      {tocItems.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors leading-snug block"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-3">Need it built?</p>
                    <a
                      href="https://wa.me/919591570099?text=Hi%2C%20I%20need%20help%20with%20my%20ECE%20mini%20project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-3 py-2 rounded transition-colors"
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Mobile TOC */}
          <div className="lg:hidden mb-8 bg-card border border-border rounded p-4">
            <h2 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">Table of Contents</h2>
            <nav aria-label="Table of contents">
              <ul className="space-y-2">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <CircuitDivider />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
          <span className="micro-label block mb-3">// NEED YOUR MINI PROJECT BUILT?</span>
          <h2 className="text-section-xl font-bold text-foreground mb-4">
            WEBUILDPRO builds ECE mini projects in Bangalore.
          </h2>
          <p className="text-muted-foreground text-sm mb-8">
            Source code, circuit diagram, documentation. Online &amp; offline. Fixed price.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919591570099?text=Hi%2C%20I%20need%20help%20with%20my%20ECE%20mini%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-6 py-3 rounded transition-colors"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={16} />
              WhatsApp Us
            </a>
            <Link
              href="/mini-projects"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
            >
              <Icon name="ArrowRightIcon" size={16} />
              View Mini Projects &amp; Prices
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}
