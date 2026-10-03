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
const SLUG = 'trending-final-year-project-ideas-2026';
const PAGE_TITLE = 'Trending Final Year Project Ideas 2026 (AI, IoT, Drones)';
const PAGE_DESCRIPTION =
  '50+ trending final year project ideas for 2026 across AI/ML, IoT, robotics, drones, embedded & blockchain. Built and tested in Bangalore — online & offline.';
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
        url: '/assets/images/og-webuildpro.jpg',
        width: 1200,
        height: 630,
        alt: 'Trending Final Year Project Ideas 2026 — WEBUILDPRO Bangalore',
      },
    ],
  },
};

const tocItems = [
  { id: 'iot-projects-final-year', label: 'IoT Projects for Final Year' },
  { id: 'ai-ml-projects-final-year', label: 'AI & Machine Learning Projects' },
  { id: 'robotics-drone-projects-final-year', label: 'Robotics & Drone Projects' },
  { id: 'embedded-projects-final-year', label: 'Embedded Systems Projects' },
  { id: 'blockchain-emerging-projects', label: 'Blockchain & Emerging-Tech Projects' },
  { id: 'how-to-choose-trending-project', label: 'How to Choose a Trending Project' },
  { id: 'build-with-webuildpro', label: 'Build with WEBUILDPRO, Bangalore' },
];

type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';

interface ProjectCardProps {
  number: number;
  title: string;
  description: string;
  difficulty: Difficulty;
}

function ProjectCard({ number, title, description, difficulty }: ProjectCardProps) {
  const difficultyColor =
    difficulty === 'Beginner' ?'bg-green-500/10 text-green-400 border-green-500/20'
      : difficulty === 'Intermediate' ?'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :'bg-red-500/10 text-red-400 border-red-500/20';

  const whatsappMsg = encodeURIComponent(`Hi, I need help with my final year project: ${title}`);

  return (
    <div className="bg-card border border-border rounded p-5 mb-4">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <h3 className="font-bold text-foreground text-sm leading-snug flex-1">
          <span className="text-muted-foreground font-mono mr-2">{number}.</span>
          {title}
        </h3>
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

export default function TrendingFinalYearProjectIdeas2026Page() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'Trending Final Year Project Ideas 2026', url: `/blog/${SLUG}` },
        ]}
      />
      <BlogPostingJsonLd
        headline="Trending Final Year Project Ideas 2026 (AI, IoT, Drones)"
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
              <li className="text-foreground font-medium truncate max-w-xs" aria-current="page">
                Trending Final Year Project Ideas 2026
              </li>
            </ol>
          </nav>

          {/* Article header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {['AI/ML', 'IoT', 'Robotics & Drones', 'Embedded', 'Blockchain'].map((tag) => (
                <span key={tag} className="chip-cyan text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-hero-lg font-bold text-foreground mb-3 leading-tight">
              Trending Final Year Project Ideas for 2026 (AI, IoT, Robotics, Drones &amp; More)
            </h1>
            <p className="text-muted-foreground text-sm mb-4">Last updated: August 2026</p>
            <p className="text-muted-foreground text-base mb-6">
              50+ trending final year project ideas for 2026 across AI/ML, IoT, robotics, drones, embedded &amp;
              blockchain. Built and tested in Bangalore — online &amp; offline.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono border-t border-border pt-4">
              <span>WEBUILDPRO India</span>
              <span>·</span>
              <span>August 2026</span>
              <span>·</span>
              <span>18 min read</span>
            </div>
          </header>

          {/* Mobile TOC */}
          <div className="lg:hidden mb-8 bg-card border border-border rounded p-5">
            <h2 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
              <Icon name="ListBulletIcon" size={16} />
              Table of Contents
            </h2>
            <ol className="space-y-2">
              {tocItems.map((item, idx) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-xs text-accent hover:text-accent/80 transition-colors flex items-center gap-2"
                  >
                    <span className="font-mono text-muted-foreground">{idx + 1}.</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Article content */}
            <article className="lg:col-span-3">
              {/* Intro */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                The best <strong className="text-foreground">final year projects in 2026</strong> come from the domains
                recruiters and evaluators actually care about — AI and machine learning, IoT, robotics, drones, embedded
                systems and blockchain. This guide brings together 50+ trending final year project ideas across all of
                these fast-moving fields, so you can pick a topic that stands out and still finish on time. WEBUILDPRO
                designs, builds and tests every one of these in our Bangalore lab — online or offline, pan-India — with
                working hardware, source code and full documentation. Each idea below explains what it does, the
                technology behind it, and why it&apos;s a strong pick for 2026.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                If you need someone to build your project, see our full guide on{' '}
                <Link href="/blog/final-year-engineering-project-makers-in-bangalore" className="text-accent hover:underline">
                  final year engineering project makers in Bangalore
                </Link>{' '}
                — covering how we work, timelines, and what to expect.
              </p>

              <CircuitDivider />

              {/* ── IoT Section ── */}
              <section id="iot-projects-final-year" className="mb-12">
                <h2 className="text-xl font-bold text-foreground mb-2">IoT (Internet of Things) Projects for Final Year</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  IoT remains the highest-demand domain because it blends hardware, sensors and cloud — exactly what
                  industry wants.
                </p>

                <ProjectCard
                  number={1}
                  title="Smart Agriculture System with Cloud Analytics"
                  description="Sensors track soil, weather and crop conditions and push data to a cloud dashboard for smart irrigation decisions."
                  difficulty="Advanced"
                />
                <ProjectCard
                  number={2}
                  title="IoT-Based Industrial Machine Health Monitoring"
                  description="Monitors vibration, temperature and current on machines to predict failures before they happen."
                  difficulty="Advanced"
                />
                <ProjectCard
                  number={3}
                  title="Smart Energy Meter with Consumption Prediction"
                  description="Measures household power use and forecasts future consumption to cut bills."
                  difficulty="Intermediate"
                />
                <ProjectCard
                  number={4}
                  title="IoT Smart Parking Management System"
                  description="Detects free parking slots in real time and guides drivers via an app."
                  difficulty="Intermediate"
                />
                <ProjectCard
                  number={5}
                  title="Real-Time Patient Health Monitoring (Wearable)"
                  description="Streams heart rate, SpO2 and temperature to doctors with alerts."
                  difficulty="Advanced"
                />
                <ProjectCard
                  number={6}
                  title="Smart Water Quality Monitoring System"
                  description="Continuously checks pH, turbidity and TDS and warns of contamination."
                  difficulty="Intermediate"
                />
                <ProjectCard
                  number={7}
                  title="IoT-Based Flood/Disaster Early Warning System"
                  description="Monitors water levels and weather to warn communities early."
                  difficulty="Advanced"
                />
                <ProjectCard
                  number={8}
                  title="Smart Home Automation with Voice + App Control"
                  description="Full home control via app and voice assistant."
                  difficulty="Intermediate"
                />
              </section>

              <CircuitDivider />

              {/* ── AI/ML Section ── */}
              <section id="ai-ml-projects-final-year" className="mb-12">
                <h2 className="text-xl font-bold text-foreground mb-2">AI &amp; Machine Learning Projects for Final Year</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  AI/ML is the most in-demand skill for placements — a strong ML project is a resume centerpiece.
                </p>

                <ProjectCard
                  number={9}
                  title="Crop Disease Detection Using Deep Learning"
                  description="Identifies plant diseases from leaf photos with a CNN."
                  difficulty="Advanced"
                />
                <ProjectCard
                  number={10}
                  title="Driver Drowsiness Detection System"
                  description="Detects sleepy drivers via eye/head tracking and sounds an alert."
                  difficulty="Advanced"
                />
                <ProjectCard
                  number={11}
                  title="Fake News / Misinformation Detection"
                  description="Classifies news as real or fake using NLP."
                  difficulty="Advanced"
                />
                <ProjectCard
                  number={12}
                  title="Face Recognition Attendance System"
                  description="Marks attendance automatically from a camera feed."
                  difficulty="Intermediate"
                />
                <ProjectCard
                  number={13}
                  title="AI-Based Resume Screening Tool"
                  description="Ranks resumes against a job description using NLP."
                  difficulty="Intermediate"
                />
                <ProjectCard
                  number={14}
                  title="Medical Diagnosis Assistant (e.g. Diabetes/Heart)"
                  description="Predicts disease risk from patient data."
                  difficulty="Intermediate"
                />
                <ProjectCard
                  number={15}
                  title="Traffic Sign & Object Recognition for Vehicles"
                  description="Detects signs and obstacles for driver assistance."
                  difficulty="Advanced"
                />
                <ProjectCard
                  number={16}
                  title="Sign Language to Text/Speech Converter"
                  description="Translates hand signs into text or speech — high-impact assistive AI."
                  difficulty="Advanced"
                />
                <ProjectCard
                  number={17}
                  title="AI Chatbot with RAG for Institutional Data"
                  description="A chatbot that answers from your college/company documents."
                  difficulty="Advanced"
                />
              </section>

              <CircuitDivider />

              {/* ── Robotics & Drones Section ── */}
              <section id="robotics-drone-projects-final-year" className="mb-12">
                <h2 className="text-xl font-bold text-foreground mb-2">Robotics &amp; Drone Projects for Final Year</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  This is WEBUILDPRO&apos;s core strength — we build custom drones in-house, so these are proven, not
                  theoretical.
                </p>

                <ProjectCard
                  number={18}
                  title="Autonomous Obstacle-Avoiding Drone"
                  description="A drone that navigates and avoids obstacles on its own."
                  difficulty="Advanced"
                />
                <ProjectCard
                  number={19}
                  title="Agricultural Spraying Drone"
                  description="Sprays pesticide/fertiliser over crops from the air."
                  difficulty="Advanced"
                />
                <ProjectCard
                  number={20}
                  title="Surveillance & Patrolling Drone"
                  description="Streams live aerial video for security monitoring."
                  difficulty="Advanced"
                />
                <ProjectCard
                  number={21}
                  title="Drone for Inventory Management"
                  description="Flies warehouse routes to scan and count stock."
                  difficulty="Advanced"
                />
                <ProjectCard
                  number={22}
                  title="Hybrid Drone-Rover (Flies & Drives)"
                  description="Switches between flying and driving for mixed terrain."
                  difficulty="Advanced"
                />
                <ProjectCard
                  number={23}
                  title="Gesture-Controlled Robotic Arm"
                  description="A robotic arm mirroring hand movements."
                  difficulty="Intermediate"
                />
                <ProjectCard
                  number={24}
                  title="Autonomous Delivery Robot"
                  description="Self-navigating robot for last-metre delivery."
                  difficulty="Advanced"
                />
                <ProjectCard
                  number={25}
                  title="Firefighting Robot"
                  description="Detects and extinguishes small fires autonomously."
                  difficulty="Intermediate"
                />
                <ProjectCard
                  number={26}
                  title="Colour/Object-Sorting Robotic Arm"
                  description="Sorts items by colour or type on a line."
                  difficulty="Intermediate"
                />
                <ProjectCard
                  number={27}
                  title="Search-and-Rescue Rover"
                  description="A rover that explores hazardous areas and relays sensor data."
                  difficulty="Advanced"
                />
              </section>

              <CircuitDivider />

              {/* ── Embedded Systems Section ── */}
              <section id="embedded-projects-final-year" className="mb-12">
                <h2 className="text-xl font-bold text-foreground mb-2">Embedded Systems Projects for Final Year</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Embedded projects show low-level, industry-ready skill — always valued in core companies.
                </p>

                <ProjectCard
                  number={28}
                  title="Smart Helmet with Accident Detection & SOS"
                  description="Detects crashes and sends location alerts."
                  difficulty="Intermediate"
                />
                <ProjectCard
                  number={29}
                  title="Vehicle Anti-Theft with Fingerprint & GPS"
                  description="Starts only with a valid fingerprint, tracks if stolen."
                  difficulty="Intermediate"
                />
                <ProjectCard
                  number={30}
                  title="Underground Cable Fault Locator"
                  description="Pinpoints the distance to a cable fault."
                  difficulty="Intermediate"
                />
                <ProjectCard
                  number={31}
                  title="Smart Energy-Saving Street Lighting"
                  description="Dims/brightens streetlights based on traffic."
                  difficulty="Intermediate"
                />
                <ProjectCard
                  number={32}
                  title="Gas & Fire Safety System for Industry"
                  description="Multi-sensor hazard detection with shutdown."
                  difficulty="Intermediate"
                />
                <ProjectCard
                  number={33}
                  title="RFID-Based Smart Toll Collection"
                  description="Automatic toll deduction without stopping."
                  difficulty="Intermediate"
                />
                <ProjectCard
                  number={34}
                  title="Wearable Health Band (Embedded)"
                  description="Compact vitals monitor on a microcontroller."
                  difficulty="Advanced"
                />
                <ProjectCard
                  number={35}
                  title="Automated Irrigation Controller"
                  description="Waters fields on schedule and soil condition."
                  difficulty="Beginner"
                />
              </section>

              <CircuitDivider />

              {/* ── Blockchain & Emerging-Tech Section ── */}
              <section id="blockchain-emerging-projects" className="mb-12">
                <h2 className="text-xl font-bold text-foreground mb-2">Blockchain &amp; Emerging-Tech Projects for Final Year</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Blockchain and cybersecurity projects signal you&apos;re on top of newest trends.
                </p>

                <ProjectCard
                  number={36}
                  title="Blockchain-Based Land Registry"
                  description="Tamper-proof property records on a blockchain."
                  difficulty="Advanced"
                />
                <ProjectCard
                  number={37}
                  title="Secure Certificate Verification System"
                  description="Verifies degree certificates via blockchain."
                  difficulty="Advanced"
                />
                <ProjectCard
                  number={38}
                  title="Decentralised Voting System"
                  description="Transparent, tamper-resistant e-voting."
                  difficulty="Advanced"
                />
                <ProjectCard
                  number={39}
                  title="Supply Chain Tracking on Blockchain"
                  description="Traces products from source to shelf."
                  difficulty="Advanced"
                />
                <ProjectCard
                  number={40}
                  title="Network Intrusion Detection with ML"
                  description="Flags cyberattacks in network traffic."
                  difficulty="Advanced"
                />
                <ProjectCard
                  number={41}
                  title="Phishing Website Detection"
                  description="Detects fraudulent sites using ML."
                  difficulty="Intermediate"
                />
              </section>

              <CircuitDivider />

              {/* ── How to Choose Section ── */}
              <section id="how-to-choose-trending-project" className="mb-12">
                <h2 className="text-xl font-bold text-foreground mb-4">How to Choose a Trending Project (and Actually Finish It)</h2>
                <div className="prose-sm text-muted-foreground space-y-4 leading-relaxed">
                  <p>
                    Trending is only useful if you can complete and defend it. Pick a domain that matches your branch and
                    interest — CSE/AI-DS students lean AI/ML and blockchain, ECE and EEE toward IoT, embedded, robotics
                    and drones. Then scope it to your timeline: a well-executed single-feature IoT or ML project beats an
                    over-ambitious one that half-works on demo day.
                  </p>
                  <p>
                    Make sure the components, datasets or tools are available, and choose something whose real-world use
                    you can explain in one line. If a topic here fits you but feels heavy to build alone, WEBUILDPRO can
                    build and test it with you in Bangalore — online or offline — and walk you through every design
                    decision so you can answer any viva or interview question about it.
                  </p>
                </div>
              </section>

              <CircuitDivider />

              {/* ── CTA Section ── */}
              <section id="build-with-webuildpro" className="mb-12">
                <div className="bg-card border border-accent/30 rounded-lg p-6 text-center">
                  <h2 className="text-lg font-bold text-foreground mb-3">
                    Build Your 2026 Project with WEBUILDPRO, Bangalore
                  </h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    Pick any idea above, or bring your own — we build final year projects across all these domains in
                    Bangalore, online and offline, with working hardware, source code and documentation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-background font-semibold text-sm rounded hover:bg-accent/90 transition-colors"
                    >
                      <Icon name="DocumentTextIcon" size={16} />
                      Get a Free Quote
                    </Link>
                    <a
                      href="https://wa.me/919591570099?text=Hi%2C%20I%20saw%20the%20trending%20final%20year%20project%20ideas%202026%20list%20and%20need%20help%20with%20my%20project"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-green-600 text-white font-semibold text-sm rounded hover:bg-green-700 transition-colors"
                    >
                      <Icon name="ChatBubbleLeftRightIcon" size={16} />
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </section>

              <CircuitDivider />

              {/* Internal links */}
              <section className="mb-8">
                <h2 className="text-base font-bold text-foreground mb-4">Related Pages &amp; Branch Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link
                    href="/projects/ece"
                    className="flex items-center gap-2 p-3 bg-card border border-border rounded hover:border-accent/50 transition-colors text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Icon name="CpuChipIcon" size={16} className="text-accent flex-shrink-0" />
                    ECE Final Year Projects
                  </Link>
                  <Link
                    href="/projects/cse"
                    className="flex items-center gap-2 p-3 bg-card border border-border rounded hover:border-accent/50 transition-colors text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Icon name="CodeBracketIcon" size={16} className="text-accent flex-shrink-0" />
                    CSE Final Year Projects
                  </Link>
                  <Link
                    href="/industrial"
                    className="flex items-center gap-2 p-3 bg-card border border-border rounded hover:border-accent/50 transition-colors text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Icon name="WrenchScrewdriverIcon" size={16} className="text-accent flex-shrink-0" />
                    Industrial &amp; Drone Projects
                  </Link>
                  <Link
                    href="/blog/final-year-project-ideas-ece-2026"
                    className="flex items-center gap-2 p-3 bg-card border border-border rounded hover:border-accent/50 transition-colors text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Icon name="DocumentTextIcon" size={16} className="text-accent flex-shrink-0" />
                    Final Year Project Ideas for ECE (2026)
                  </Link>
                  <Link
                    href="/blog/mini-project-ideas-ece-2026"
                    className="flex items-center gap-2 p-3 bg-card border border-border rounded hover:border-accent/50 transition-colors text-sm text-muted-foreground hover:text-foreground"
                  >
                    <Icon name="DocumentTextIcon" size={16} className="text-accent flex-shrink-0" />
                    Mini Project Ideas for ECE (2026)
                  </Link>
                </div>
              </section>
            </article>

            {/* Sticky desktop TOC */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-card border border-border rounded p-4">
                  <h2 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Icon name="ListBulletIcon" size={14} />
                    Contents
                  </h2>
                  <ol className="space-y-2">
                    {tocItems.map((item, idx) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-xs text-muted-foreground hover:text-accent transition-colors flex items-start gap-1.5 leading-snug"
                        >
                          <span className="font-mono text-muted-foreground/60 flex-shrink-0 mt-0.5">{idx + 1}.</span>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Difficulty legend */}
                <div className="bg-card border border-border rounded p-4 mt-4">
                  <h3 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">Difficulty</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded border bg-green-500/10 text-green-400 border-green-500/20 font-mono">
                        Beginner
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded border bg-yellow-500/10 text-yellow-400 border-yellow-500/20 font-mono">
                        Intermediate
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded border bg-red-500/10 text-red-400 border-red-500/20 font-mono">
                        Advanced
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mini CTA */}
                <div className="bg-card border border-accent/20 rounded p-4 mt-4">
                  <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                    Need this project built &amp; tested in Bangalore?
                  </p>
                  <a
                    href="https://wa.me/919591570099?text=Hi%2C%20I%20need%20help%20with%20my%20trending%20final%20year%20project%202026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-3 py-2 bg-green-600 text-white text-xs font-semibold rounded hover:bg-green-700 transition-colors"
                  >
                    <Icon name="ChatBubbleLeftRightIcon" size={12} />
                    WhatsApp WEBUILDPRO
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}
