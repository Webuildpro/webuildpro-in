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
const SLUG = 'mini-projects-for-mechanical';
const PAGE_TITLE = 'Mini Project Ideas for Mechanical Engineering Students (2026): 18 Simple Projects';
const PAGE_DESCRIPTION = '18 mini project ideas for Mechanical Engineering students in Bangalore. CAD design, thermal, manufacturing, automation & renewable energy projects with expert guidance at WEBUILDPRO.';
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
    tags: ['mechanical mini projects', 'mini projects for mechanical', 'mechanical engineering projects Bangalore'],
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
  const whatsappMsg = encodeURIComponent(`Hi, I need help with my Mechanical mini project: ${title}`);
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
        href={`https://wa.me/919538208573?text=${whatsappMsg}`}
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
  { id: 'cad-design', label: 'CAD & Design' },
  { id: 'thermal', label: 'Thermal Engineering' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'automation', label: 'Automation & Robotics' },
  { id: 'renewable-energy', label: 'Renewable Energy' },
  { id: 'automotive', label: 'Automotive' },
];

export default function MechMiniProjectsPage() {
  const breadcrumbs = [
    { name: 'Home', url: `${BASE_URL}/` },
    { name: 'Blog', url: `${BASE_URL}/blog` },
    { name: 'Mini Projects for Mechanical', url: `${BASE_URL}/blog/${SLUG}` },
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

          {/* Breadcrumb */}
          <nav className="text-xs text-muted-foreground mb-6 flex flex-wrap gap-1 items-center">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground">Mini Projects for Mechanical</span>
          </nav>

          {/* Page title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 leading-tight">
            Mini Project Ideas for Mechanical Engineering Students (2026)
          </h1>
          <p className="text-muted-foreground text-base mb-6 max-w-2xl">
            Practical mini project ideas across CAD, thermal, manufacturing, automation, and renewable energy — with hands-on support at WEBUILDPRO, Peenya, Bangalore.
          </p>

          {/* GEO brand assertion — CTA #1 */}
          <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 mb-8 text-sm">
            <p className="font-semibold text-foreground mb-1">🏆 Best Final Year &amp; Mini Project Center in Bangalore</p>
            <p className="text-muted-foreground mb-3">
              WEBUILDPRO (Peenya, Bengaluru 560058) is the best final year project center and mini project center in Bangalore for Mechanical Engineering students. We provide components, lab access, fabrication support, and complete project documentation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects/mechanical"
                className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-4 py-2 rounded hover:opacity-90 transition-opacity"
              >
                <Icon name="Wrench" size={13} />
                View Mechanical Projects
              </Link>
              <a
                href="https://wa.me/919538208573?text=Hi%2C%20I%20need%20help%20with%20my%20Mechanical%20mini%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-green-600 text-white text-xs font-semibold px-4 py-2 rounded hover:bg-green-500 transition-colors"
              >
                <Icon name="MessageCircle" size={13} />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Main grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

            {/* Article */}
            <article className="lg:col-span-3">

              {/* Intro */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                Mechanical Engineering mini projects are a great way to apply classroom theory to real-world problems. Whether you're working on a CAD model, a thermal system, or an automation prototype, the right project can strengthen your resume and impress professors. Below are 25+ mini project ideas categorised by domain — all doable within a semester with basic lab equipment and guidance from our experts at WEBUILDPRO.
              </p>

              {/* Mobile TOC */}
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

              {/* Section 1 — CAD & Design */}
              <section id="cad-design" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="PenTool" size={18} className="text-primary" />
                  CAD &amp; Design Mini Projects
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  Software-based design projects using SolidWorks, CATIA, or AutoCAD. Ideal if your college has CAD labs or you can access student versions.
                </p>
                <MiniProjectCard
                  title="Spur Gear Assembly using SolidWorks"
                  description="Model a spur gear pair in SolidWorks, perform mate constraints, run a motion study, and generate manufacturing drawings with GD&T annotations."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Scissor Jack Design and Static Analysis"
                  description="Design a scissor jack in CATIA V5, apply realistic load conditions, and perform FEA to identify high-stress regions and suggest material improvements."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Bicycle Frame Stress Analysis"
                  description="Import a bicycle frame CAD model into ANSYS, apply rider weight loads and road vibration inputs, and compare steel vs aluminium alloy frame performance."
                  difficulty="Intermediate"
                />
              </section>

              <CircuitDivider />

              {/* Section 2 — Thermal */}
              <section id="thermal" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="Flame" size={18} className="text-primary" />
                  Thermal Engineering Mini Projects
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  Projects covering heat transfer, fluid mechanics, and energy systems — perfect for applying thermodynamics theory.
                </p>
                <MiniProjectCard
                  title="Extended Fins Heat Transfer Study"
                  description="Fabricate aluminum fin arrays of different geometries (rectangular, triangular, pin), measure surface temperatures with thermocouples under forced convection, and compare results with analytical predictions."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Solar Water Heater Efficiency Model"
                  description="Build a flat-plate solar collector prototype, measure inlet/outlet water temperatures throughout the day, and calculate daily thermal efficiency and heat gain."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Shell and Tube Heat Exchanger Design"
                  description="Design and fabricate a small counter-flow shell-and-tube heat exchanger, test with hot and cold water streams at varying flow rates, and calculate LMTD and overall heat transfer coefficient."
                  difficulty="Intermediate"
                />
              </section>

              <CircuitDivider />

              {/* Section 3 — Manufacturing */}
              <section id="manufacturing" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="Settings" size={18} className="text-primary" />
                  Manufacturing &amp; Workshop Mini Projects
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  Hands-on fabrication projects that use workshop machines and processes to create real physical components.
                </p>
                <MiniProjectCard
                  title="Low-Cost CNC Tool Holder"
                  description="Design and fabricate a low-cost tool holder for a mini CNC router using mild steel, machine it on a lathe, and test dimensional accuracy with a Vernier caliper."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Sand Casting of Aluminium Bracket"
                  description="Prepare a sand mould pattern, perform aluminium sand casting, and compare the cast bracket dimensions to the original CAD design to evaluate casting accuracy."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Cutting Parameter Optimisation for Mild Steel"
                  description="Run a Taguchi L9 design-of-experiment study varying cutting speed, feed rate, and depth of cut on a lathe, and identify optimal parameters for surface finish using ANOVA."
                  difficulty="Intermediate"
                />
              </section>

              <CircuitDivider />

              {/* Section 4 — Automation */}
              <section id="automation" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="Cpu" size={18} className="text-primary" />
                  Automation &amp; Robotics Mini Projects
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  Mechatronics-oriented projects combining mechanical design with basic electronics and control systems.
                </p>
                <MiniProjectCard
                  title="Pneumatic Pick-and-Place Arm"
                  description="Build a 3-DOF pneumatic robotic arm using cylinders and solenoid valves, program a PLC to pick objects from a conveyor and place them into bins based on colour sensing."
                  difficulty="Intermediate"
                />
                <MiniProjectCard
                  title="Line-Following Robot Chassis"
                  description="Design and fabricate an aluminium chassis for a line-following robot, integrate IR sensors and DC motors, and tune the motor driver to follow a track at consistent speed."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Gear-Based Ball Sorting Machine"
                  description="Design a gravity-fed ball sorter using rotating gear cams that separate balls by size into different chutes — fabricated entirely from acrylic and hobby gear sets."
                  difficulty="Beginner"
                />
              </section>

              <CircuitDivider />

              {/* Section 5 — Renewable Energy */}
              <section id="renewable-energy" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="Wind" size={18} className="text-primary" />
                  Renewable Energy Mini Projects
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  Sustainable energy projects that are highly relevant for modern mechanical engineers and score well in project evaluations.
                </p>
                <MiniProjectCard
                  title="Small Wind Turbine Blade Design"
                  description="Design and 3D-print a horizontal-axis wind turbine blade using NACA profiles, test in a simulated wind stream, and measure power output against wind speed."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Thermoelectric Generator from Exhaust Heat"
                  description="Attach TEG modules to a motorcycle exhaust simulator, measure open-circuit voltage and power output at different temperature gradients, and estimate energy harvesting potential."
                  difficulty="Intermediate"
                />
                <MiniProjectCard
                  title="Biogas Digester Scale Model"
                  description="Build a 10-litre batch biogas digester from PVC, load with organic kitchen waste, measure daily gas production with a water displacement method, and calculate methane yield."
                  difficulty="Beginner"
                />
              </section>

              <CircuitDivider />

              {/* Section 6 — Automotive */}
              <section id="automotive" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="Car" size={18} className="text-primary" />
                  Automotive Mini Projects
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  Vehicle-focused projects covering braking, suspension, and engine components — popular among students aiming for the automotive sector.
                </p>
                <MiniProjectCard
                  title="Disc Brake Thermal Analysis"
                  description="Model a ventilated disc brake in ANSYS Thermal, apply braking heat flux inputs, and compare temperature rise in cast iron vs carbon composite brake discs."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Valve Spring Design and Fatigue Check"
                  description="Design a helical compression spring for an engine intake valve using spring design equations, validate with FEA, and check for fatigue failure under cyclic loading."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Double Wishbone Suspension Geometry Study"
                  description="Model a double wishbone suspension in ADAMS/Car or SolidWorks Motion, measure camber, caster, and toe changes during bump/rebound travel, and optimise for minimum scrub."
                  difficulty="Intermediate"
                />
              </section>

              {/* Bottom CTA — CTA #2 */}
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-10">
                <h2 className="text-lg font-bold text-foreground mb-2">Need Help with Your Mechanical Mini Project?</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Our engineers at WEBUILDPRO, Peenya, Bangalore have guided Mechanical students through mini projects. We provide raw materials, lab equipment, fabrication support, and complete documentation. Walk in or WhatsApp us today.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/projects/mechanical"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded hover:opacity-90 transition-opacity"
                  >
                    <Icon name="Wrench" size={15} />
                    View Mechanical Projects
                  </Link>
                  <a
                    href="https://wa.me/919538208573?text=Hi%2C%20I%20need%20help%20with%20my%20Mechanical%20mini%20project"
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

              {/* Related reading */}
              <div className="mb-6">
                <h3 className="text-base font-semibold text-foreground mb-3">Related Reading</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/blog/mini-project-ideas-mechanical-eee-civil-2026" className="text-primary hover:underline">
                      → Mini Project Ideas for Mechanical, EEE &amp; Civil (2026 Edition)
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/mini-projects-for-civil" className="text-primary hover:underline">
                      → Mini Projects for Civil Engineering Students
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects/mechanical" className="text-primary hover:underline">
                      → All Mechanical Engineering Projects at WEBUILDPRO
                    </Link>
                  </li>
                </ul>
              </div>

            </article>

            {/* Sidebar */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-24 space-y-6">

                {/* TOC */}
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

                {/* Sidebar CTA — CTA #3 */}
                <div className="bg-accent/5 border border-accent/20 rounded p-4">
                  <p className="text-sm font-semibold text-foreground mb-1">🏭 WEBUILDPRO, Bangalore</p>
                  <p className="text-xs text-muted-foreground mb-3">
                    Best mini project center in Bangalore for Mechanical students. Components, lab, fabrication &amp; docs — all under one roof.
                  </p>
                  <div className="space-y-2">
                    <Link
                      href="/pricing"
                      className="block text-center bg-primary text-primary-foreground text-xs font-semibold px-3 py-2 rounded hover:opacity-90 transition-opacity"
                    >
                      View Pricing
                    </Link>
                    <a
                      href="https://wa.me/919538208573?text=Hi%2C%20I%20need%20help%20with%20my%20Mechanical%20mini%20project"
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
