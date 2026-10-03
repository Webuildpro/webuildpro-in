import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import JsonLdScript from '@/components/JsonLdScript';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/jsonld';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
import LazyPageExtras from '@/components/LazyPageExtras';

import Icon from '@/components/ui/AppIcon';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Final Year Engineering Projects in Bangalore',
  description:
    'Final year engineering projects in Bangalore — IEEE & non-IEEE, built and tested in our Peenya lab. Code, report, PPT & viva prep included. Online & offline.',
  alternates: {
    canonical: `${BASE_URL}/final-year-projects-bangalore`,
  },
  openGraph: {
    title: 'Final Year Engineering Projects in Bangalore',
    description:
      'Final year projects in Bangalore for CSE, ECE, EEE, Mechanical and Civil. IEEE & non-IEEE, tested hardware, source code included. Online & offline delivery.',
    images: [{ url: '/assets/images/og-webuildpro.jpg', width: 1200, height: 630, alt: 'Final Year Engineering Projects in Bangalore — WEBUILDPRO' }],
  },
};

const pageFaqs = [
  {
    q: 'What final year projects do you offer in Bangalore?',
    a: 'We offer 60+ project titles across CSE/ISE/AI-ML/BCA/MCA, ECE, EEE, Mechanical and Civil branches — both IEEE and non-IEEE. Every project is designed, built and tested in our Peenya lab in Bangalore.',
  },
  {
    q: 'Do you offer online / remote projects?',
    a: 'Yes. We deliver full remote projects pan-India — video walkthroughs, screen-share mentoring, milestone demo calls, and the finished unit shipped to your door with source code and documentation.',
  },
  {
    q: 'Do I have to come to Bangalore?',
    a: 'No. Online and hybrid options are available. For online delivery, everything is handled remotely and the hardware is couriered to you. For hybrid, you attend kickoff and final handover in person.',
  },
  {
    q: 'What is the cost of a final year project in Bangalore?',
    a: 'Costs range from ₹4,000 for simple software projects to ₹40,000+ for advanced hardware or drone projects. We give you a fixed, itemised quote within 24 hours — no hidden charges.',
  },
  {
    q: 'Do you support VTU and Anna University projects?',
    a: 'Yes. We are familiar with VTU and Anna University project guidelines, documentation formats and viva requirements. We tailor the report material to your university format.',
  },
  {
    q: 'What documentation do I get with my project?',
    a: 'Working hardware or software demo, full source code, circuit diagrams and schematics, bill of materials, project report material, PPT support, and a viva walkthrough session with the engineer who built it.',
  },
  {
    q: 'Can I bring my own project idea?',
    a: 'Yes — that is our favourite kind of enquiry. Send us your idea and we will do a feasibility check and build it. Custom projects are quoted individually.',
  },
];

const branchProjects = [
  {
    branch: 'CSE projects in Bangalore',
    href: '/projects/cse',
    desc: 'AI/ML, Computer Vision, NLP, Blockchain, IoT, Network Security',
    examples: ['Real-Time Face Recognition Attendance System', 'Deep Learning Crop Disease Detection', 'RAG Chatbot for Institutional Data'],
  },
  {
    branch: 'Mechanical projects in Bangalore',
    href: '/projects/mechanical',
    desc: 'Robotics, Fabrication, Thermal Systems, Renewable Energy',
    examples: ['Automated Pick-and-Place SCARA Arm', 'Solar-Powered Agricultural Sprayer', 'Regenerative Braking Test Rig'],
  },
  {
    branch: 'Electronics (ECE) projects in Bangalore',
    href: '/projects/ece',
    desc: 'Embedded Systems, IoT, VLSI, Drone, RF & Wireless',
    examples: ['LoRa-Based Smart Agriculture Node', 'Autonomous Drone with Obstacle Avoidance', 'IoT Patient Vitals Monitoring System'],
  },
  {
    branch: 'Electrical (EEE) projects in Bangalore',
    href: '/projects/eee',
    desc: 'Power Electronics, PLC, EV Systems, Solar, Smart Grid',
    examples: ['Grid-Tied Solar Micro-Inverter', 'EV Battery Management System', 'PLC-Based Bottle Filling Automation'],
  },
  {
    branch: 'Civil projects in Bangalore',
    href: '/projects/civil',
    desc: 'Smart Infrastructure, IoT SHM, GIS, Materials Testing',
    examples: ['IoT Structural Health Monitoring', 'Smart Water Quality Monitoring', 'Automated Concrete Strength Testing'],
  },
];

export default function FinalYearProjectsBangalorePage() {
  return (
    <>
      <JsonLdScript
        nodes={[
          breadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'Final Year Projects in Bangalore', url: '/final-year-projects-bangalore' }]),
          serviceSchema({ name: 'Final Year Engineering Projects in Bangalore', description: 'Final year projects in Bangalore for CSE, ECE, EEE, Mechanical & Civil — IEEE & non-IEEE, tested hardware, source code & report material. Online & offline, delivered pan-India.', path: '/final-year-projects-bangalore' }),
          faqSchema(pageFaqs),
        ]}
      />
      <Header />
      <main id="main-content" className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li aria-hidden="true"><Icon name="ChevronRightIcon" size={12} /></li>
              <li className="text-foreground font-medium" aria-current="page">Final Year Projects in Bangalore</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <span className="micro-label block mb-3">// FINAL YEAR PROJECTS · BANGALORE</span>
            <h1 className="text-hero-lg font-bold text-foreground mb-6 leading-tight">
              Final Year Engineering Projects in Bangalore
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              WEBUILDPRO delivers final year projects in Bangalore for all engineering branches — CSE, ECE, EEE, Mechanical and Civil. Every project is designed, fabricated and tested in our Peenya lab before delivery. You get a working unit, full source code, circuit diagrams, report material and a viva walkthrough session. Online, offline and hybrid delivery available.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%27d%20like%20to%20enquire%20about%20a%20final%20year%20project%20in%20Bangalore."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={16} />
                WhatsApp for a Free Quote
              </a>
              <Link href="/projects" className="btn-ghost inline-flex items-center gap-2 px-6 py-3 text-sm font-medium">
                <Icon name="FolderOpenIcon" size={16} />
                Browse All Project Titles
              </Link>
            </div>
          </header>

          {/* Timeline & process */}
          <section className="mb-14" aria-labelledby="process-heading">
            <h2 id="process-heading" className="text-section-xl font-bold text-foreground mb-6">
              How the final year project process works
            </h2>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Send your requirement', desc: 'Tell us your branch, university, timeline and any specific title or idea. WhatsApp or the contact form — both work.' },
                { step: '02', title: 'Get a fixed quote in 24 hours', desc: 'An engineer reviews your requirement and sends a fixed, itemised quote — components, timeline and deliverables. No hidden charges.' },
                { step: '03', title: 'We build and test it', desc: 'Your project is designed, fabricated and tested in our Peenya lab. You get milestone updates throughout the build.' },
                { step: '04', title: 'Handover with the engineer', desc: 'We walk you through every design decision — circuit, code, methodology — so you can defend it in the viva. Hardware is delivered or shipped.' },
                { step: '05', title: 'Post-delivery support', desc: 'We are available until your demo day. If something breaks or you have a viva question, message us.' },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-4 p-5 bg-card border border-border rounded">
                  <span className="font-mono text-2xl font-bold text-primary/40 flex-shrink-0 w-10">{item.step}</span>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* IEEE vs non-IEEE */}
          <section className="mb-14" aria-labelledby="ieee-heading">
            <h2 id="ieee-heading" className="text-section-xl font-bold text-foreground mb-4">
              IEEE and non-IEEE projects — both available
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              We implement both IEEE paper-based projects and original non-IEEE titles. For IEEE projects, we read the paper with you, scope the implementation against your timeline, and make sure you can explain the methodology in the viva. For non-IEEE projects, we design the system from your requirement.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              If your university requires IEEE projects, bring the DOI or paper title and we will confirm feasibility within 24 hours. Read our guide on <Link href="/blog/ieee-vs-non-ieee-projects" className="text-accent hover:text-accent/80 underline">IEEE vs non-IEEE projects</Link> for a detailed comparison.
            </p>
          </section>

          {/* Online / Offline / Hybrid */}
          <section className="mb-14" aria-labelledby="delivery-heading">
            <h2 id="delivery-heading" className="text-section-xl font-bold text-foreground mb-4">
              Online, Offline & Hybrid — however you want to work
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              We are based in Bangalore, but we deliver final year projects across India. Choose the mode that suits your location and project type.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded p-6">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="BuildingOfficeIcon" size={20} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Offline (In-Person)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Work directly at our Peenya lab in Bangalore — hands-on with the hardware, bench time, and face-to-face mentoring. Best for hardware-heavy projects and students who can travel to Bangalore.
                </p>
              </div>
              <div className="bg-card border border-primary/30 rounded p-6">
                <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="ComputerDesktopIcon" size={20} className="text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Online (Remote)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Full remote delivery pan-India — video walkthroughs, screen-share mentoring, milestone demo calls, and the finished unit shipped to your door with source code and documentation.
                </p>
              </div>
              <div className="bg-card border border-border rounded p-6">
                <div className="w-10 h-10 rounded bg-green-500/10 flex items-center justify-center mb-4">
                  <Icon name="ArrowsRightLeftIcon" size={20} className="text-green-400" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Hybrid</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Kickoff and final handover in person at our Bangalore lab; the build, reviews and mentoring sessions happen remotely. Best of both worlds.
                </p>
              </div>
            </div>
          </section>

          {/* Branch project listings */}
          <section className="mb-14" aria-labelledby="branch-projects-heading">
            <h2 id="branch-projects-heading" className="text-section-xl font-bold text-foreground mb-6">
              Final year projects by engineering branch
            </h2>
            <div className="space-y-6">
              {branchProjects.map((b) => (
                <div key={b.href} className="bg-card border border-border rounded p-6">
                  <Link href={b.href} className="text-base font-bold text-foreground hover:text-primary transition-colors block mb-1">
                    {b.branch} →
                  </Link>
                  <p className="text-xs text-muted-foreground mb-3">{b.desc}</p>
                  <ul className="space-y-1">
                    {b.examples.map((ex) => (
                      <li key={ex} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon name="CheckIcon" size={12} className="text-primary flex-shrink-0" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                  <Link href={b.href} className="text-xs text-accent hover:text-accent/80 underline mt-3 inline-block">
                    View all {b.branch.split(' ')[0]} project titles →
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* Cost guide */}
          <section className="mb-14" aria-labelledby="cost-heading">
            <h2 id="cost-heading" className="text-section-xl font-bold text-foreground mb-4">
              What do final year projects cost in Bangalore?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Project costs depend on components, complexity and whether the project is hardware or software. Here are realistic ranges for 2026:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded">
                <thead>
                  <tr className="bg-card">
                    <th className="px-4 py-3 text-left text-xs font-mono text-accent border-b border-border">Project type</th>
                    <th className="px-4 py-3 text-left text-xs font-mono text-accent border-b border-border">Cost range</th>
                    <th className="px-4 py-3 text-left text-xs font-mono text-accent border-b border-border">Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Simple software (Python, web, basic ML)', '₹4,000–₹8,000', '2–3 weeks'],
                    ['Basic hardware (Arduino/RPi, single sensor)', '₹6,000–₹12,000', '2–3 weeks'],
                    ['Intermediate hardware (ESP32, wireless, IoT)', '₹10,000–₹20,000', '3–4 weeks'],
                    ['Advanced hardware (custom PCB, FPGA, CV)', '₹18,000–₹40,000', '4–6 weeks'],
                    ['Drone & robotics projects', '₹25,000–₹80,000+', '5–8 weeks'],
                  ].map(([type, cost, timeline], i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="px-4 py-3 text-muted-foreground text-xs">{type}</td>
                      <td className="px-4 py-3 text-foreground font-semibold text-xs">{cost}</td>
                      <td className="px-4 py-3 text-muted-foreground text-xs">{timeline}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Read the full breakdown: <Link href="/blog/how-much-do-final-year-projects-cost-bangalore" className="text-accent hover:text-accent/80 underline">How Much Do Final Year Projects Cost in Bangalore? (2026 Price Guide)</Link>
            </p>
          </section>

          {/* FAQ */}
          <section className="mb-14" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-section-xl font-bold text-foreground mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {pageFaqs.map((faq, i) => (
                <div key={i} className="bg-card border border-border rounded p-5">
                  <h3 className="font-semibold text-foreground text-sm mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal links */}
          <section className="mb-14" aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-section-xl font-bold text-foreground mb-4">Related pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/project-centre-bangalore" className="p-4 bg-card border border-border rounded hover:border-primary/40 transition-colors group">
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block mb-1">Best Engineering Project Centre in Bangalore</span>
                <span className="text-xs text-muted-foreground">Why WEBUILDPRO vs a typical reseller — honest comparison</span>
              </Link>
              <Link href="/internship-bangalore" className="p-4 bg-card border border-border rounded hover:border-primary/40 transition-colors group">
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block mb-1">Engineering Internship Centre in Bangalore</span>
                <span className="text-xs text-muted-foreground">Hands-on internships — Embedded, Drone, Robotics, AI/ML</span>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-card border border-primary/30 rounded p-8 text-center" aria-labelledby="cta-heading">
            <span className="micro-label block mb-3">// GET STARTED</span>
            <h2 id="cta-heading" className="text-section-xl font-bold text-foreground mb-3">
              Start your final year project in Bangalore today
            </h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-xl mx-auto">
              Send your requirement and get a fixed quote within 24 hours. Free 15-minute call with an engineer — no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%27d%20like%20to%20enquire%20about%20a%20final%20year%20project%20in%20Bangalore."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={16} />
                Message us on WhatsApp
              </a>
              <Link href="/contact" className="btn-ghost inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium">
                <Icon name="EnvelopeIcon" size={16} />
                Send a Written Enquiry
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}
