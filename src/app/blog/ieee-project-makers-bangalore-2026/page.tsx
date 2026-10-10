'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
import LazyPageExtras from '@/components/LazyPageExtras';
import Icon from '@/components/ui/AppIcon';

const WA_LINK =
  'https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%20need%20an%20IEEE%20project%20made%20for%20my%20final%20year%20%E2%80%94%20can%20you%20help%3F';

function WhatsAppCTA({ label = 'Chat on WhatsApp →', className = '' }: { label?: string; className?: string }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-3 rounded transition-colors text-sm ${className}`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {label}
    </a>
  );
}

const tocItems = [
  { id: 'what-to-look-for', label: 'What Makes a Good IEEE Project Maker?' },
  { id: 'branches-covered', label: 'Branches: ECE, CSE, EEE, Mechanical, Civil' },
  { id: 'what-to-expect', label: 'What to Expect When You Order' },
  { id: 'peenya-advantage', label: 'Why Peenya Is the Hub for IEEE Projects' },
  { id: 'online-delivery', label: 'Online Delivery Across India' },
  { id: 'pricing', label: 'Pricing Breakdown for 2026' },
  { id: 'red-flags', label: 'Red Flags to Avoid' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

export default function IeeeProjectMakersBangalorePage() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li aria-hidden="true"><Icon name="ChevronRightIcon" size={12} /></li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li aria-hidden="true"><Icon name="ChevronRightIcon" size={12} /></li>
              <li className="text-foreground font-medium truncate max-w-xs" aria-current="page">
                IEEE Project Makers in Bangalore
              </li>
            </ol>
          </nav>

          {/* Article header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {['IEEE Projects', 'Project Makers', 'Bangalore', 'Final Year'].map((tag) => (
                <span key={tag} className="chip-cyan text-xs">{tag}</span>
              ))}
            </div>
            <h1 className="text-hero-lg font-bold text-foreground mb-3 leading-tight">
              IEEE Project Makers in Bangalore (2026): Who Actually Builds Working Projects?
            </h1>
            <p className="text-muted-foreground text-sm mb-4">Last updated: October 2026</p>
            <p className="text-muted-foreground text-base mb-6">
              Looking for a trusted IEEE project maker in Bangalore? WEBUILDPRO, based in Peenya, Bengaluru, builds
              fully working IEEE 2026 final year projects for ECE, CSE, EEE, AI-ML, Mechanical, and Civil students —
              with source code, documentation, and viva support. Online delivery available across India.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono border-t border-border pt-4">
              <span>WEBUILDPRO India</span>
              <span>·</span>
              <span>October 2026</span>
              <span>·</span>
              <span>12 min read</span>
            </div>
          </header>

          <div className="lg:grid lg:grid-cols-4 lg:gap-12">
            {/* TOC sidebar */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28 bg-card border border-border rounded-lg p-4">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">On this page</p>
                <nav>
                  <ul className="space-y-1">
                    {tocItems.map(({ id, label }) => (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className={`block text-xs py-1 px-2 rounded transition-colors ${
                            activeSection === id
                              ? 'text-primary bg-primary/10 font-medium'
                              : 'text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <article className="lg:col-span-3 prose-custom">

              {/* Quick Answer box */}
              <div className="bg-card border-l-4 border-primary rounded-lg p-5 mb-8">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Quick Answer</p>
                <p className="text-sm text-foreground leading-relaxed">
                  WEBUILDPRO in Peenya, Bangalore is a dedicated IEEE project maker for BTech final year students — ECE,
                  CSE, EEE, AI-ML, Mechanical and Civil. Projects are built and tested in-lab, fully documented, and
                  come with viva prep. Prices start at &#8377;8,000. WhatsApp +91 95382 08573 to get started.
                </p>
              </div>

              {/* Intro */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every year, thousands of engineering students in Bangalore search for someone to help build their IEEE
                final year project. The problem isn&apos;t finding options — it&apos;s finding an IEEE project maker in
                Bangalore who actually builds a working, demo-ready prototype rather than handing you a PDF and a half-assembled
                kit. This guide cuts through the noise so you know exactly what to look for — and why WEBUILDPRO in
                Peenya is the go-to choice for 2026 batch students across all branches.
              </p>

              {/* Section 1 */}
              <section id="what-to-look-for" className="mb-10">
                <h2 className="text-section-xl font-bold text-foreground mb-4">
                  What Makes a Good IEEE Project Maker in Bangalore?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Not every &quot;project centre&quot; in Bangalore delivers what they promise. Here&apos;s the honest
                  checklist students should use before paying anyone:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: 'They build, not just assemble',
                      body: 'A real IEEE project maker writes the code, programs the hardware, and tests the system from scratch. If a centre is just plugging together a pre-made kit and calling it your project, your viva examiner will notice.',
                    },
                    {
                      title: '2026 IEEE base papers',
                      body: 'IEEE releases new papers every year. A good maker will have access to the latest IEEE Xplore papers for 2026 and can implement ideas from them — not just recycle 2022 topics.',
                    },
                    {
                      title: 'Working hardware prototype',
                      body: 'For hardware branches (ECE, EEE, Mechanical), the prototype must power on and demo correctly. Source code alone is not enough for most universities.',
                    },
                    {
                      title: 'Complete deliverables',
                      body: 'Source code, abstract, report/documentation, PPT, and viva Q&A prep. A project maker who only hands you the hardware and leaves the rest to you is doing half the job.',
                    },
                    {
                      title: 'Post-delivery support',
                      body: 'What happens if your examiner asks you to run a modified demo on viva day? Good IEEE project makers in Bangalore stand by their work and support you till submission.',
                    },
                  ].map(({ title, body }) => (
                    <div key={title} className="bg-card border border-border rounded-lg p-4">
                      <p className="text-sm font-semibold text-foreground mb-1">✅ {title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  WEBUILDPRO checks every box above. Based in Peenya, Bengaluru — we&apos;ve delivered 300+ final year
                  and mini projects across all major engineering branches with a 100% on-time delivery record.
                </p>
              </section>

              <WhatsAppCTA label="Get your IEEE project built — WhatsApp us →" className="mb-10 block w-full sm:w-auto text-center justify-center" />

              {/* Section 2 */}
              <section id="branches-covered" className="mb-10">
                <h2 className="text-section-xl font-bold text-foreground mb-4">
                  IEEE Projects for Every Engineering Branch
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Most IEEE project centres in Bangalore focus only on ECE or CSE. WEBUILDPRO builds IEEE-standard
                  projects across all six engineering branches:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      branch: 'ECE — Electronics & Communication',
                      domains: 'IoT, Embedded Systems, VLSI, Signal Processing, RF & Antenna, Biomedical, Robotics, Drone Systems',
                      icon: '📡',
                    },
                    {
                      branch: 'CSE / ISE — Computer Science',
                      domains: 'Machine Learning, Deep Learning, NLP, Computer Vision, Cybersecurity, Blockchain, Web & Cloud Projects',
                      icon: '💻',
                    },
                    {
                      branch: 'AI-ML — Artificial Intelligence',
                      domains: 'Agentic AI, Generative AI, LLM-based Projects, Predictive Models, Autonomous Systems, Smart Assistants',
                      icon: '🤖',
                    },
                    {
                      branch: 'EEE — Electrical Engineering',
                      domains: 'Power Systems, Solar Energy, EV Charging, Smart Grid, Motor Control, Power Electronics',
                      icon: '⚡',
                    },
                    {
                      branch: 'Mechanical Engineering',
                      domains: 'Automation, Robotics Arms, CAD/CAM Projects, 3D Printing, Thermal Systems, Smart Manufacturing',
                      icon: '⚙️',
                    },
                    {
                      branch: 'Civil Engineering',
                      domains: 'Smart Infrastructure, Structural Monitoring, Water Management, GIS Projects, Green Building Systems',
                      icon: '🏗️',
                    },
                  ].map(({ branch, domains, icon }) => (
                    <div key={branch} className="bg-card border border-border rounded-lg p-4">
                      <p className="text-lg mb-1">{icon}</p>
                      <p className="text-sm font-semibold text-foreground mb-1">{branch}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{domains}</p>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mt-6">
                  Whether you need a MATLAB-based signal processing project, a Python ML model, an IoT prototype with
                  Raspberry Pi, or a mechanical automation system — WEBUILDPRO builds it, tests it, and explains it
                  to you before your viva.
                </p>
              </section>

              {/* Section 3 */}
              <section id="what-to-expect" className="mb-10">
                <h2 className="text-section-xl font-bold text-foreground mb-4">
                  What to Expect When You Order an IEEE Project from WEBUILDPRO
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Here&apos;s the exact process from first WhatsApp message to final handover — no surprises:
                </p>
                <ol className="space-y-4">
                  {[
                    {
                      step: '1. Free Consultation (Day 1)',
                      detail: 'You WhatsApp or call us with your branch, domain preference, and budget. We suggest 3–5 project titles from 2026 IEEE papers that match your university requirements. No commitment needed at this stage.',
                    },
                    {
                      step: '2. Project Confirmation & Advance (Day 1–2)',
                      detail: 'Once you confirm a title, we collect 50% advance. We send you a project abstract and timeline. Most projects are delivered in 5–10 working days depending on complexity.',
                    },
                    {
                      step: '3. Build & Test in Our Lab (Day 2–8)',
                      detail: 'Our engineers implement the project from the IEEE base paper — writing code, assembling hardware, running tests. We send you progress photos/videos on WhatsApp so you can see it being built.',
                    },
                    {
                      step: '4. Explanation Session (Before Delivery)',
                      detail: 'Before we hand over the project, we walk you through how it works — via video call if you&apos;re not in Bangalore — so you can confidently answer viva questions.',
                    },
                    {
                      step: '5. Full Delivery Package',
                      detail: 'You receive: working hardware/software, complete source code, IEEE-format project report, PPT, and viva Q&A document. Hardware projects are shipped via courier for outstation students.',
                    },
                    {
                      step: '6. Post-Delivery Support',
                      detail: 'We stay available on WhatsApp until after your viva day. If examiners ask for a modification demo, we guide you through it remotely or fix it at our lab.',
                    },
                  ].map(({ step, detail }) => (
                    <li key={step} className="bg-card border border-border rounded-lg p-4">
                      <p className="text-sm font-semibold text-foreground mb-1">{step}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Section 4 */}
              <section id="peenya-advantage" className="mb-10">
                <h2 className="text-section-xl font-bold text-foreground mb-4">
                  Why Peenya Is the Hub for IEEE Project Makers in Bangalore
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Peenya Industrial Area is Bangalore&apos;s largest industrial zone — home to electronics manufacturers,
                  component distributors, PCB fabricators, and engineering workshops all within a few square kilometres.
                  This is why WEBUILDPRO is based here: we source components faster, fabricate PCBs locally, and
                  prototype hardware the same week. Students from Vijayanagar, Rajajinagar, Yeshwanthpur, Peenya
                  itself, and even Yelahanka and Hebbal visit us directly.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The nearest metro station is Peenya Industry (Green Line), making us easily accessible from most
                  parts of Bangalore without needing a cab for the whole journey. Many students from BTM Layout,
                  Jayanagar, Electronic City, and Whitefield take the metro to Peenya and walk or auto to our lab.
                </p>
                <div className="bg-card border border-primary/30 rounded-lg p-4">
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Find Us</p>
                  <p className="text-sm text-foreground font-semibold">WEBUILDPRO</p>
                  <p className="text-sm text-muted-foreground">
                    81, 4th Cross, Thigalarapalya Main Rd, 2nd Stage, Kalika Nagar, Peenya, Bengaluru – 560058
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Mon–Sat · 10 AM – 7 PM IST</p>
                  <p className="text-sm text-muted-foreground">📞 +91 95382 08573</p>
                </div>
              </section>

              {/* Section 5 */}
              <section id="online-delivery" className="mb-10">
                <h2 className="text-section-xl font-bold text-foreground mb-4">
                  Not in Bangalore? We Deliver IEEE Projects Across India
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  WEBUILDPRO is physically based in Peenya, Bengaluru — but we&apos;ve built and shipped IEEE projects
                  to students in Hyderabad, Chennai, Pune, Mysuru, Mangaluru, Hubli, Davangere, Tumkur, and dozens
                  of other cities. Our pan-India delivery process works like this:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-4">
                  {[
                    { icon: '📦', point: 'Hardware shipped via courier (typically 2–3 day delivery)' },
                    { icon: '💬', point: 'Explanation session via WhatsApp or Google Meet video call' },
                    { icon: '📁', point: 'Source code, report, and PPT sent via Google Drive' },
                    { icon: '🎓', point: 'Viva prep over video call — we cover the most likely questions' },
                  ].map(({ icon, point }) => (
                    <div key={point} className="bg-card border border-border rounded p-3 flex gap-3 items-start">
                      <span className="text-lg">{icon}</span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Online project delivery available across India — receive your project kit via courier with full
                  video call guidance. Students from VTU, Anna University, JNTU, Pune University, and other
                  affiliates have all received their projects this way.
                </p>
              </section>

              <WhatsAppCTA label="Order your IEEE project online — WhatsApp us →" className="mb-10 block w-full sm:w-auto text-center justify-center" />

              {/* Section 6 */}
              <section id="pricing" className="mb-10">
                <h2 className="text-section-xl font-bold text-foreground mb-4">
                  Pricing for IEEE Projects in Bangalore (2026)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Pricing depends on the domain, hardware complexity, and number of components required. Here&apos;s
                  a rough guide for 2026:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="text-left p-3 text-foreground font-semibold border border-border">Branch / Domain</th>
                        <th className="text-left p-3 text-foreground font-semibold border border-border">Type</th>
                        <th className="text-left p-3 text-foreground font-semibold border border-border">Starting Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['CSE / AI-ML', 'Software (Python/ML/Web)', '₹8,000'],
                        ['ECE — Embedded / IoT', 'Hardware + Software', '₹10,000'],
                        ['ECE — VLSI / FPGA', 'FPGA prototype + code', '₹14,000'],
                        ['EEE', 'Power electronics prototype', '₹12,000'],
                        ['Mechanical', 'Automation/robotics prototype', '₹12,000'],
                        ['Civil', 'Structural/monitoring system', '₹10,000'],
                        ['AI-ML — Agentic / Generative AI', 'Software + API integration', '₹10,000'],
                      ].map(([branch, type, price]) => (
                        <tr key={branch} className="border border-border hover:bg-muted/30 transition-colors">
                          <td className="p-3 text-muted-foreground border border-border">{branch}</td>
                          <td className="p-3 text-muted-foreground border border-border">{type}</td>
                          <td className="p-3 text-primary font-semibold border border-border">{price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  * Prices are indicative. Final pricing depends on project scope, component count, and IEEE paper
                  chosen. WhatsApp us for a free quote on your specific project.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Compared to project centres in areas like HSR Layout, Koramangala, or BTM Layout, Peenya&apos;s
                  proximity to wholesale electronics suppliers means we keep component costs lower — and pass that
                  saving on to students.
                </p>
              </section>

              {/* Section 7 */}
              <section id="red-flags" className="mb-10">
                <h2 className="text-section-xl font-bold text-foreground mb-4">
                  Red Flags to Watch Out for When Choosing an IEEE Project Maker
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The Bangalore market for final year projects has some unscrupulous operators. Here&apos;s what to
                  avoid:
                </p>
                <div className="space-y-3">
                  {[
                    {
                      flag: '🚩 "Ready-made" projects',
                      detail: 'Some centres sell the same pre-built project to dozens of students from the same college. If your batchmate submits an identical project, both of you fail. Always confirm your project is built fresh from a unique IEEE paper.',
                    },
                    {
                      flag: '🚩 No explanation or viva prep',
                      detail: 'If the centre won\'t walk you through how the project works, you won\'t be able to answer basic questions during your viva. A legit project maker gives you a proper explanation session.',
                    },
                    {
                      flag: '🚩 Too cheap to be real',
                      detail: 'A fully working hardware IEEE project with source code, report, and documentation cannot realistically be done for ₹2,000–₹3,000. That price point means a recycled kit with a plagiarised report — both of which your university checks.',
                    },
                    {
                      flag: '🚩 No demo before delivery',
                      detail: 'Demand a working demo video before you pay the final amount. Any legitimate IEEE project maker in Bangalore will happily show you the project running before handover.',
                    },
                    {
                      flag: '🚩 Ghosting after payment',
                      detail: 'Check if they have a physical address and are reachable by phone. WhatsApp-only sellers with no fixed lab address are a major red flag — especially for hardware projects.',
                    },
                  ].map(({ flag, detail }) => (
                    <div key={flag} className="bg-card border border-border rounded-lg p-4">
                      <p className="text-sm font-semibold text-foreground mb-1">{flag}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 8 — FAQ */}
              <section id="faq" className="mb-10">
                <h2 className="text-section-xl font-bold text-foreground mb-6">
                  Frequently Asked Questions — IEEE Project Makers in Bangalore
                </h2>
                <div className="space-y-5">
                  {[
                    {
                      q: 'How long does it take to build an IEEE project?',
                      a: 'Most IEEE projects are ready in 5–10 working days. Simple software projects (ML models, web apps) take 4–6 days. Complex hardware projects with custom PCBs or FPGA can take up to 12–15 days. We confirm the timeline at the time of booking.',
                    },
                    {
                      q: 'Can I choose my own IEEE paper/title?',
                      a: 'Yes. You can bring a specific IEEE paper you found on IEEE Xplore and we\'ll assess whether it\'s feasible for your timeline and budget. We can also suggest 2026 IEEE papers that fit your branch, domain preference, and university requirements.',
                    },
                    {
                      q: 'Will the project pass VTU / Anna University plagiarism checks?',
                      a: 'Every project we build is implemented fresh from the IEEE base paper. The report is written uniquely for your project. We don\'t recycle reports across students. That said, you should always run your report through your university\'s plagiarism tool before submission — we help you fix any flagged sections if needed.',
                    },
                    {
                      q: 'Do you provide the IEEE base paper?',
                      a: 'Yes. We have access to 2026 IEEE Xplore papers across ECE, CSE, EEE, AI-ML, Mechanical, and Civil domains. We share the base paper with you as part of your project package.',
                    },
                    {
                      q: 'Can I visit the lab to see the project being built?',
                      a: 'Absolutely. Our lab is open Mon–Sat, 10 AM – 7 PM at Peenya 2nd Stage, Bengaluru. You\'re welcome to visit and see your project in progress. If you\'re from outside Bangalore, we send progress videos on WhatsApp.',
                    },
                    {
                      q: 'Do you build IEEE projects for students outside Bangalore?',
                      a: 'Yes. We ship hardware via courier to any city in India and conduct the explanation session and viva prep over video call. We\'ve delivered to students in Hyderabad, Chennai, Mysuru, Pune, Mangaluru, and more.',
                    },
                    {
                      q: 'What if my project fails during the viva demo?',
                      a: 'We provide remote support on your viva day. If something goes wrong with the hardware, we diagnose and guide you through the fix over video call. If you\'re in Bangalore, you can bring it to our lab for emergency repair — same day.',
                    },
                  ].map(({ q, a }) => (
                    <div key={q} className="border border-border rounded-lg overflow-hidden">
                      <div className="bg-muted px-4 py-3">
                        <p className="text-sm font-semibold text-foreground">{q}</p>
                      </div>
                      <div className="px-4 py-3">
                        <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Final CTA */}
              <div className="bg-card border border-primary/30 rounded-xl p-6 text-center mb-10">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Get Started Today</p>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Need an IEEE Project Made in Bangalore?
                </h3>
                <p className="text-sm text-muted-foreground mb-5 max-w-lg mx-auto">
                  WEBUILDPRO builds IEEE 2026 final year projects for all branches — ECE, CSE, EEE, AI-ML, Mechanical,
                  and Civil. Prices start at ₹8,000. Based in Peenya, Bengaluru. Pan-India delivery available.
                </p>
                <WhatsAppCTA label="WhatsApp us for a free quote →" className="mx-auto" />
                <p className="text-xs text-muted-foreground mt-3">
                  Or call us: <a href="tel:+919538208573" className="text-primary hover:underline">+91 95382 08573</a>
                  &nbsp;·&nbsp; Mon–Sat, 10 AM – 7 PM IST
                </p>
              </div>

              {/* Internal links */}
              <div className="border-t border-border pt-6">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Related Reading</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: 'IEEE Projects in Bangalore — Complete Guide', href: '/blog/ieee-projects-in-bangalore' },
                    { label: 'IEEE vs Non-IEEE Projects: Which One to Choose?', href: '/blog/ieee-vs-non-ieee-projects-2026' },
                    { label: 'Final Year Project Ideas for ECE 2026', href: '/blog/final-year-project-ideas-ece-2026' },
                    { label: 'Best AI-Based Final Year Project Ideas 2026', href: '/blog/best-ai-based-final-year-project-ideas-2026' },
                    { label: 'How Much Does a Final Year Project Cost in Bangalore?', href: '/blog/final-year-project-cost-bangalore-2026' },
                  ].map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className="text-xs bg-card border border-border rounded px-3 py-1.5 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

            </article>
          </div>
        </div>
      </main>
      <LazyPageExtras />
      <Footer />
    </>
  );
}
