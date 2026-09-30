import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
import Icon from '@/components/ui/AppIcon';
import LazyPageExtras from '@/components/LazyPageExtras';


const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Best Engineering Project Centre in Bangalore | WEBUILDPRO',
  description:
    'Best project centre in Bangalore — real Peenya lab, tested hardware, source code included. CSE, ECE, EEE, Mechanical & Civil. Online & offline delivery, shipped pan-India.',
  alternates: {
    canonical: `${BASE_URL}/project-centre-bangalore`,
    languages: { 'en-IN': `${BASE_URL}/project-centre-bangalore` },
  },
  openGraph: {
    title: 'Best Engineering Project Centre in Bangalore | WEBUILDPRO',
    description:
      'Real lab, tested hardware, source code included. The best project centre in Bangalore for CSE, ECE, EEE, Mechanical and Civil final year projects.',
    images: [{ url: '/assets/images/wbinlogo-1786121366410.jpeg', width: 1200, height: 630, alt: 'Best Engineering Project Centre in Bangalore — WEBUILDPRO' }],
  },
};

const pageFaqs = [
  {
    q: 'What makes WEBUILDPRO the best project centre in Bangalore?',
    a: 'We design, fabricate and test every project in our own Peenya lab — no reselling, no kit assembly. You get a working unit, full source code, circuit diagrams, report material and a handover session with the engineer who built it.',
  },
  {
    q: 'Do you offer online / remote projects?',
    a: 'Yes. We deliver full remote projects pan-India — video walkthroughs, screen-share mentoring, milestone demo calls, and the finished unit shipped to your door with source code and documentation.',
  },
  {
    q: 'Do I have to come to Bangalore?',
    a: 'No. Online and hybrid options are available. For online delivery, everything is handled remotely and the hardware is couriered to you. For hybrid, you attend kickoff and final handover in person; the build and reviews happen remotely.',
  },
  {
    q: 'Which engineering branches do you support?',
    a: 'CSE / ISE / AI-ML / BCA / MCA, Mechanical, ECE (Electronics & Communication), EEE (Electrical), and Civil & Mining. Both IEEE and non-IEEE titles.',
  },
  {
    q: 'How long does a project take?',
    a: 'Most academic projects run 2–4 weeks. Complex hardware or multi-domain projects run 4–6 weeks. We give you a firm timeline in the quote before you pay anything.',
  },
  {
    q: 'What is included in the delivery?',
    a: 'Working hardware or software demo, full source code, circuit diagrams and schematics, bill of materials, project report material, PPT support, and a viva walkthrough session.',
  },
];

export default function ProjectCentreBangalorePage() {
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
              <li className="text-foreground font-medium" aria-current="page">Best Project Centre in Bangalore</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <span className="micro-label block mb-3">// ENGINEERING PROJECT CENTRE · BANGALORE</span>
            <h1 className="text-hero-lg font-bold text-foreground mb-6 leading-tight">
              Best Engineering Project Centre in Bangalore
            </h1>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              WEBUILDPRO is the best project centre in Bangalore for final year engineering projects — a real lab in Peenya, Bengaluru, where engineers design, fabricate and test every project before it leaves the bench. We serve CSE, ECE, EEE, Mechanical and Civil students across Karnataka and pan-India, with online, offline and hybrid delivery options.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%27d%20like%20to%20enquire%20about%20a%20project%20from%20Bangalore."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={16} />
                WhatsApp for a Free Quote
              </a>
              <Link href="/contact" className="btn-ghost inline-flex items-center gap-2 px-6 py-3 text-sm font-medium">
                <Icon name="DocumentTextIcon" size={16} />
                Get a Written Quote
              </Link>
            </div>
          </header>

          {/* What is a real project centre */}
          <section className="mb-14" aria-labelledby="what-is-heading">
            <h2 id="what-is-heading" className="text-section-xl font-bold text-foreground mb-4">
              What separates a real project centre from a reseller?
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Bangalore has dozens of places that call themselves project centres. Most of them are resellers — they source pre-built kits from wholesale suppliers, put a label on the box, and hand it to you with a PDF. The project may work once, in the exact conditions it was tested in. Change one variable and it fails.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              A real project centre has a lab. Engineers who understand the circuit. A fabrication workflow. A testing protocol. And a handover session where the person who built your project walks you through every design decision so you can defend it in the viva.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed">
              WEBUILDPRO is located in Peenya 2nd Stage, Bengaluru — one of India's largest industrial estates. We have bench space, CNC access, PCB fabrication, 3D printing, and a team of engineers who have built 300+ projects across all five major engineering branches.
            </p>
          </section>

          {/* Comparison Table */}
          <section className="mb-14" aria-labelledby="comparison-heading">
            <h2 id="comparison-heading" className="text-section-xl font-bold text-foreground mb-6">
              WEBUILDPRO vs a typical reseller project centre
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Here is an honest comparison. We are not the cheapest option in Bangalore — but we are the one that works on demo day.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-border rounded">
                <thead>
                  <tr className="bg-card">
                    <th className="px-4 py-3 text-left text-xs font-mono text-accent border-b border-border">What matters</th>
                    <th className="px-4 py-3 text-left text-xs font-mono text-primary border-b border-border">WEBUILDPRO</th>
                    <th className="px-4 py-3 text-left text-xs font-mono text-muted-foreground border-b border-border">Typical reseller</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Real facility in Bangalore', '✅ Peenya lab, open for visits', '❌ Usually a small office or home'],
                    ['Tested before delivery', '✅ Every project tested end-to-end', '⚠️ Assembled, rarely tested'],
                    ['Source code included', '✅ Full source code, commented', '⚠️ Sometimes, often incomplete'],
                    ['Circuit diagrams & BOM', '✅ Complete documentation', '❌ Rarely included'],
                    ['Online & offline options', '✅ Both available', '⚠️ Usually offline only'],
                    ['First call with an engineer', '✅ Engineer, not a salesperson', '❌ Sales team only'],
                    ['Post-delivery support', '✅ Until demo day', '❌ Usually none after handover'],
                    ['Custom project ideas', '✅ We build from your spec', '❌ Fixed catalogue only'],
                    ['IEEE paper implementation', '✅ We read the paper with you', '⚠️ Title match, not implementation'],
                  ].map(([feature, us, them], i) => (
                    <tr key={i} className="border-b border-border last:border-0">
                      <td className="px-4 py-3 text-foreground font-medium text-xs">{feature}</td>
                      <td className="px-4 py-3 text-muted-foreground text-xs">{us}</td>
                      <td className="px-4 py-3 text-muted-foreground text-xs">{them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Online / Offline / Hybrid */}
          <section className="mb-14" aria-labelledby="delivery-modes-heading">
            <h2 id="delivery-modes-heading" className="text-section-xl font-bold text-foreground mb-4">
              Online, Offline & Hybrid — however you want to work
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              We are based in Bangalore, but we deliver projects across India. Choose the mode that suits your location and project type.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded p-6">
                <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="BuildingOfficeIcon" size={20} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Offline (In-Person)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Work directly at our Peenya lab in Bangalore — hands-on with the hardware, bench time, and face-to-face mentoring. Best for hardware-heavy projects and students who can travel to Bangalore. You see the build happen in real time.
                </p>
              </div>
              <div className="bg-card border border-primary/30 rounded p-6">
                <div className="w-10 h-10 rounded bg-accent/10 flex items-center justify-center mb-4">
                  <Icon name="ComputerDesktopIcon" size={20} className="text-accent" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Online (Remote)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Full remote delivery pan-India — video walkthroughs, screen-share mentoring, milestone demo calls, and the finished unit shipped to your door with source code and documentation. Best for software projects or students outside Bangalore.
                </p>
              </div>
              <div className="bg-card border border-border rounded p-6">
                <div className="w-10 h-10 rounded bg-green-500/10 flex items-center justify-center mb-4">
                  <Icon name="ArrowsRightLeftIcon" size={20} className="text-green-400" />
                </div>
                <h3 className="font-bold text-foreground mb-2">Hybrid</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Kickoff and final handover in person at our Bangalore lab; the build, reviews and mentoring sessions happen remotely. Best of both worlds — you see the hardware and get the flexibility of remote collaboration.
                </p>
              </div>
            </div>
          </section>

          {/* Branch links */}
          <section className="mb-14" aria-labelledby="branches-heading">
            <h2 id="branches-heading" className="text-section-xl font-bold text-foreground mb-6">
              Projects by engineering branch
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              We cover all five major engineering branches. Each branch page lists 10–12 project titles with full specifications, technologies, timelines and deliverables.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'CSE projects in Bangalore', href: '/projects/cse', desc: 'AI/ML, Computer Vision, NLP, Blockchain, IoT' },
                { label: 'Mechanical projects in Bangalore', href: '/projects/mechanical', desc: 'Robotics, Fabrication, Thermal, Renewable Energy' },
                { label: 'Electronics (ECE) projects in Bangalore', href: '/projects/ece', desc: 'Embedded, IoT, VLSI, Drone, RF & Wireless' },
                { label: 'Electrical (EEE) projects in Bangalore', href: '/projects/eee', desc: 'Power Electronics, PLC, EV, Solar, Smart Grid' },
                { label: 'Civil projects in Bangalore', href: '/projects/civil', desc: 'Smart Infrastructure, IoT SHM, GIS, Materials' },
              ].map((branch) => (
                <Link
                  key={branch.href}
                  href={branch.href}
                  className="flex items-start gap-3 p-4 bg-card border border-border rounded hover:border-primary/40 transition-colors group"
                >
                  <Icon name="ChevronRightIcon" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block">{branch.label}</span>
                    <span className="text-xs text-muted-foreground">{branch.desc}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Why choose us */}
          <section className="mb-14" aria-labelledby="why-heading">
            <h2 id="why-heading" className="text-section-xl font-bold text-foreground mb-6">
              Why students choose WEBUILDPRO as their project centre in Bangalore
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: 'WrenchScrewdriverIcon', title: 'Built in our lab', desc: 'Every project is designed and fabricated in our Peenya facility — not sourced from a kit supplier.' },
                { icon: 'CheckBadgeIcon', title: 'Tested before delivery', desc: 'We run end-to-end tests before handover. If it fails on demo day, we fix it — that is our commitment.' },
                { icon: 'DocumentTextIcon', title: 'Complete documentation', desc: 'Source code, circuit diagrams, BOM, report material and PPT support are included in every delivery.' },
                { icon: 'AcademicCapIcon', title: 'Viva preparation', desc: 'A handover session with the engineer who built your project — so you can answer every viva question.' },
                { icon: 'GlobeAltIcon', title: 'Pan-India delivery', desc: 'Online and hybrid options mean you can work with us from anywhere in India, not just Bangalore.' },
                { icon: 'ClockIcon', title: 'Fixed timelines', desc: 'We give you a firm delivery date in the quote. 300+ projects delivered, 100% on time.' },
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

          {/* Internal links to other landing pages */}
          <section className="mb-14" aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-section-xl font-bold text-foreground mb-4">
              Related pages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/final-year-projects-bangalore" className="p-4 bg-card border border-border rounded hover:border-primary/40 transition-colors group">
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block mb-1">Final Year Engineering Projects in Bangalore</span>
                <span className="text-xs text-muted-foreground">Complete guide — timelines, cost, IEEE vs non-IEEE, documentation</span>
              </Link>
              <Link href="/internship-bangalore" className="p-4 bg-card border border-border rounded hover:border-primary/40 transition-colors group">
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block mb-1">Engineering Internship Centre in Bangalore</span>
                <span className="text-xs text-muted-foreground">Hands-on internships — Embedded, Drone, Robotics, AI/ML, PCB Design</span>
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

          {/* Lead form CTA */}
          <section className="bg-card border border-primary/30 rounded p-8 text-center" aria-labelledby="cta-heading">
            <span className="micro-label block mb-3">// GET STARTED</span>
            <h2 id="cta-heading" className="text-section-xl font-bold text-foreground mb-3">
              Ready to work with the best project centre in Bangalore?
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

          {/* Blog read more */}
          <section className="mt-14" aria-labelledby="blog-heading">
            <h2 id="blog-heading" className="text-section-xl font-bold text-foreground mb-4">Read more</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/blog/best-project-centre-bangalore-guide" className="p-4 bg-card border border-border rounded hover:border-primary/40 transition-colors group">
                <span className="text-xs text-accent font-mono block mb-1">// GUIDE</span>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block">Best Project Centre in Bangalore: How to Actually Choose One (2026 Guide)</span>
              </Link>
              <Link href="/blog/final-year-project-cost-bangalore-2026" className="p-4 bg-card border border-border rounded hover:border-primary/40 transition-colors group">
                <span className="text-xs text-accent font-mono block mb-1">// PRICING</span>
                <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors block">How Much Do Final Year Projects Cost in Bangalore? (2026 Price Guide)</span>
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
