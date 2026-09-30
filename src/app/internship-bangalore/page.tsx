import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
import LazyPageExtras from '@/components/LazyPageExtras';

import Icon from '@/components/ui/AppIcon';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Engineering Internship Centre in Bangalore | WEBUILDPRO',
  description:
    'Best internship centre in Bangalore for engineering students — Embedded, Drone, Robotics, AI/ML & PCB Design. Real hardware, verifiable certificate. Online & offline, pan-India.',
  alternates: {
    canonical: `${BASE_URL}/internship-bangalore`,
    languages: { 'en-IN': `${BASE_URL}/internship-bangalore` },
  },
  openGraph: {
    title: 'Engineering Internship Centre in Bangalore | WEBUILDPRO',
    description:
      'Best internship centre in Bangalore — real hardware, real deadlines, verifiable certificate. Embedded, Drone, Robotics, AI/ML, PCB Design. Online & offline.',
    images: [{ url: '/assets/images/wbinlogo-1786121366410.jpeg', width: 1200, height: 630, alt: 'Engineering Internship Centre in Bangalore — WEBUILDPRO' }],
  },
};

const pageFaqs = [
  {
    q: 'What makes WEBUILDPRO the best internship centre in Bangalore?',
    a: 'Every intern works on a real build in our Peenya lab — not a simulation or a tutorial. You leave with a working project you built yourself, a portfolio document, and a verifiable completion certificate.',
  },
  {
    q: 'Can I do the internship online?',
    a: 'Yes. We offer fully online internships pan-India — video walkthroughs, screen-share mentoring, milestone demo calls, and the finished hardware shipped to your door. The certificate is the same as for in-person interns.',
  },
  {
    q: 'Do I have to come to Bangalore?',
    a: 'No. Online and hybrid options are available. For online delivery, everything is handled remotely. For hybrid, you attend kickoff and final handover in person at our Bangalore lab; the build and reviews happen remotely.',
  },
  {
    q: 'What internship tracks are available?',
    a: 'Embedded Systems & IoT, Drone Technology, Robotics & Automation, AI/ML & Computer Vision, and PCB Design. Each track runs 2, 4 or 8 weeks.',
  },
  {
    q: 'Is the certificate verifiable?',
    a: 'Yes. Each certificate has a unique verification code. Recruiters and colleges can verify it on our website. It is earned on a real build — not attendance.',
  },
  {
    q: 'Do I need prior experience?',
    a: 'No prior experience is required for the 2-week and 4-week tracks. The 8-week track is better suited for students who have completed at least one semester of their core engineering subjects.',
  },
  {
    q: 'Can colleges enrol batches?',
    a: 'Yes. We run batch programmes for colleges with 10–50 students, with a fixed schedule and dedicated mentors. Contact us for batch pricing and scheduling.',
  },
];

const tracks = [
  {
    title: 'Embedded Systems & IoT',
    duration: '2, 4 or 8 weeks',
    desc: 'Microcontroller programming, sensor interfacing, wireless communication (BLE, LoRa, MQTT), and cloud dashboard integration. You build a complete IoT node from scratch.',
    skills: ['Arduino / ESP32 / STM32', 'Sensor interfacing', 'MQTT & cloud', 'PCB basics'],
  },
  {
    title: 'Drone Technology',
    duration: '4 or 8 weeks',
    desc: 'Quadcopter assembly, flight controller configuration, ArduPilot firmware, mission planning, and payload integration. You fly the drone you build.',
    skills: ['Frame assembly', 'ArduPilot / PX4', 'Mission Planner', 'Payload integration'],
  },
  {
    title: 'Robotics & Automation',
    duration: '4 or 8 weeks',
    desc: 'Robotic arm design, servo control, computer vision integration, and PLC-based automation sequences. Hands-on with real actuators and sensors.',
    skills: ['Servo & stepper control', 'Computer vision', 'PLC basics', 'ROS introduction'],
  },
  {
    title: 'AI / ML & Computer Vision',
    duration: '4 or 8 weeks',
    desc: 'Python ML pipeline, model training and deployment, real-time inference on edge hardware. You train a model and deploy it on a Raspberry Pi or Jetson Nano.',
    skills: ['Python & TensorFlow', 'OpenCV', 'Edge deployment', 'Model evaluation'],
  },
  {
    title: 'PCB Design',
    duration: '2 or 4 weeks',
    desc: 'Schematic capture, PCB layout in KiCad, design rule checks, gerber generation, and board bring-up. You design and receive your own fabricated PCB.',
    skills: ['KiCad schematic', 'PCB layout', 'DRC & gerbers', 'Board bring-up'],
  },
];

export default function InternshipBangalorePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li aria-hidden="true"><Icon name="ChevronRightIcon" size={12} /></li>
              <li className="text-foreground font-medium" aria-current="page">Engineering Internship in Bangalore</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <span className="micro-label block mb-3">// ENGINEERING INTERNSHIP · BANGALORE</span>
            <h1 className="text-hero-lg font-bold text-foreground mb-6 leading-tight">
              Engineering Internship Centre in Bangalore
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              WEBUILDPRO is the best internship centre in Bangalore for engineering students — a real lab in Peenya, Bengaluru, where every intern works on a real build. No simulations, no tutorials, no attendance certificates. You leave with a working project, a portfolio document, and a verifiable completion certificate. Online, offline and hybrid options available for students across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/internships#apply" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold">
                <Icon name="AcademicCapIcon" size={16} />
                Apply for the Next Batch
              </Link>
              <a
                href="https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%27d%20like%20to%20enquire%20about%20the%20engineering%20internship%20in%20Bangalore."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center gap-2 px-6 py-3 text-sm font-medium"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={16} />
                WhatsApp Us
              </a>
            </div>
          </header>

          {/* What a real internship includes */}
          <section className="mb-14" aria-labelledby="real-internship-heading">
            <h2 id="real-internship-heading" className="text-section-xl font-bold text-foreground mb-4">
              What a real engineering internship in Bangalore should include
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Most internship certificates in India are attendance certificates. You show up, watch someone else work, and leave with a PDF that says you completed 30 hours. That certificate means nothing to a recruiter who has seen hundreds of them.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              A real internship at WEBUILDPRO in Bangalore means you touch the hardware. You write the firmware. You debug the circuit. You present the working build at the end. The certificate you receive has a unique verification code — recruiters can check it on our website.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {[
                { icon: 'WrenchScrewdriverIcon', title: 'Real hardware, real builds', desc: 'Every intern works on a physical project — not a simulation or a tutorial.' },
                { icon: 'CheckBadgeIcon', title: 'Verifiable certificate', desc: 'Unique verification code. Recruiters and colleges can check it online.' },
                { icon: 'DocumentTextIcon', title: 'Portfolio document', desc: 'A documented project you can show in interviews — with your name on it.' },
                { icon: 'UserGroupIcon', title: 'Mentor reference letter', desc: 'Available for 8-week track interns who complete the full programme.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 bg-card border border-border rounded">
                  <div className="w-9 h-9 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Online / Offline / Hybrid */}
          <section className="mb-14" aria-labelledby="delivery-heading">
            <h2 id="delivery-heading" className="text-section-xl font-bold text-foreground mb-4">
              Online, Offline & Hybrid — however you want to intern
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              We are based in Bangalore, but engineering students across India can intern with us. Choose the mode that suits your location and schedule.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded p-6">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="BuildingOfficeIcon" size={20} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Offline (In-Person)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Work directly at our Peenya lab in Bangalore — hands-on with the hardware, bench time, and face-to-face mentoring. Best for hardware tracks and students who can travel to Bangalore.
                </p>
              </div>
              <div className="bg-card border border-primary/30 rounded p-6">
                <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="ComputerDesktopIcon" size={20} className="text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Online (Remote)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Full remote internship pan-India — video walkthroughs, screen-share mentoring, milestone demo calls, and the finished hardware shipped to your door. Same certificate as in-person.
                </p>
              </div>
              <div className="bg-card border border-border rounded p-6">
                <div className="w-10 h-10 rounded bg-green-500/10 flex items-center justify-center mb-4">
                  <Icon name="ArrowsRightLeftIcon" size={20} className="text-green-400" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Hybrid</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Kickoff and final demo in person at our Bangalore lab; the build, reviews and mentoring sessions happen remotely. Best for students who can visit Bangalore once or twice.
                </p>
              </div>
            </div>
          </section>

          {/* Tracks */}
          <section className="mb-14" aria-labelledby="tracks-heading">
            <h2 id="tracks-heading" className="text-section-xl font-bold text-foreground mb-6">
              Internship tracks available in Bangalore
            </h2>
            <div className="space-y-5">
              {tracks.map((track) => (
                <div key={track.title} className="bg-card border border-border rounded p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-bold text-foreground text-base">{track.title}</h3>
                    <span className="chip-cyan text-xs flex-shrink-0">{track.duration}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{track.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {track.skills.map((skill) => (
                      <span key={skill} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded font-mono">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/internships" className="btn-ghost inline-flex items-center gap-2 px-6 py-3 text-sm font-medium">
                <Icon name="ArrowRightIcon" size={16} />
                View full internship details and apply
              </Link>
            </div>
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
                <span className="text-xs text-muted-foreground">Final year projects for all branches — online & offline</span>
              </Link>
              <Link href="/final-year-projects-bangalore" className="p-4 bg-card border border-border rounded hover:border-primary/40 transition-colors group">
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block mb-1">Final Year Engineering Projects in Bangalore</span>
                <span className="text-xs text-muted-foreground">Timelines, cost, IEEE vs non-IEEE, documentation guide</span>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-card border border-primary/30 rounded p-8 text-center" aria-labelledby="cta-heading">
            <span className="micro-label block mb-3">// APPLY NOW</span>
            <h2 id="cta-heading" className="text-section-xl font-bold text-foreground mb-3">
              Apply for the next internship batch in Bangalore
            </h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-xl mx-auto">
              Seats are limited per batch so every intern gets bench time. Apply and we will confirm dates within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/internships#apply" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold">
                <Icon name="AcademicCapIcon" size={16} />
                Apply for the Next Batch
              </Link>
              <a
                href="https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%27d%20like%20to%20apply%20for%20the%20engineering%20internship%20in%20Bangalore."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={16} />
                Message us on WhatsApp
              </a>
            </div>
          </section>

          {/* Blog read more */}
          <section className="mt-14" aria-labelledby="blog-heading">
            <h2 id="blog-heading" className="text-section-xl font-bold text-foreground mb-4">Read more</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/blog/best-internship-centre-bangalore" className="p-4 bg-card border border-border rounded hover:border-primary/40 transition-colors group">
                <span className="text-xs text-accent font-mono block mb-1">// GUIDE</span>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block">Best Internship Centre in Bangalore for Engineering Students (Online & Offline)</span>
              </Link>
              <Link href="/blog/online-vs-offline-engineering-projects" className="p-4 bg-card border border-border rounded hover:border-primary/40 transition-colors group">
                <span className="text-xs text-accent font-mono block mb-1">// COMPARISON</span>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block">Online vs Offline Engineering Projects: Which Is Right for You?</span>
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
