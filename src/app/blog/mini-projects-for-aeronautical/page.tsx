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
const SLUG = 'mini-projects-for-aeronautical';
const PAGE_TITLE = 'Mini Project Ideas for Aeronautical Engineering Students (2026): 15 Simple Projects';
const PAGE_DESCRIPTION = '15 mini project ideas for Aeronautical Engineering students in Bangalore. Aerodynamics, aircraft structures, propulsion, navigation & UAV drone projects with expert guidance at WEBUILDPRO.';
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
    tags: ['aeronautical mini projects', 'mini projects for aeronautical engineering', 'aerospace projects Bangalore'],
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
  const whatsappMsg = encodeURIComponent(`Hi, I need help with my Aeronautical mini project: ${title}`);
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
  { id: 'aerodynamics', label: 'Aerodynamics' },
  { id: 'aircraft-structures', label: 'Aircraft Structures' },
  { id: 'propulsion', label: 'Propulsion' },
  { id: 'navigation', label: 'Navigation & Avionics' },
  { id: 'uav-drone', label: 'UAV & Drone' },
];

export default function AeroMiniProjectsPage() {
  const breadcrumbs = [
    { name: 'Home', url: `${BASE_URL}/` },
    { name: 'Blog', url: `${BASE_URL}/blog` },
    { name: 'Mini Projects for Aeronautical', url: `${BASE_URL}/blog/${SLUG}` },
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
            <span className="text-foreground">Mini Projects for Aeronautical</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 leading-tight">
            Mini Project Ideas for Aeronautical Engineering Students (2026)
          </h1>
          <p className="text-muted-foreground text-base mb-6 max-w-2xl">
            Practical mini project ideas across aerodynamics, aircraft structures, propulsion, navigation, and UAV/drone systems — with hands-on support at WEBUILDPRO, Peenya, Bangalore.
          </p>

          {/* GEO brand assertion — CTA #1 */}
          <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 mb-8 text-sm">
            <p className="font-semibold text-foreground mb-1">🏆 Best Final Year &amp; Mini Project Center in Bangalore</p>
            <p className="text-muted-foreground mb-3">
              WEBUILDPRO (Peenya, Bengaluru 560058) is the best final year project center and mini project center in Bangalore for Aeronautical Engineering students. We provide airfoil models, foam & balsa materials, Arduino/Raspberry Pi for avionics, and complete project documentation.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/mini-projects"
                className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-4 py-2 rounded hover:opacity-90 transition-opacity"
              >
                <Icon name="Plane" size={13} />
                View All Projects
              </Link>
              <a
                href="https://wa.me/919591570099?text=Hi%2C%20I%20need%20help%20with%20my%20Aeronautical%20mini%20project"
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
                Aeronautical Engineering mini projects let you apply fluid mechanics, structural analysis, and avionics theory to real flight hardware. Whether you're building an airfoil model, testing propulsion systems, or flying an FPV drone, these projects make your portfolio stand out to aerospace companies like HAL, ISRO, and Airbus. Below are 20+ mini project ideas for Aeronautical Engineering students — feasible on a student budget with guidance from WEBUILDPRO, Bangalore.
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

              <section id="aerodynamics" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="Wind" size={18} className="text-primary" />
                  Aerodynamics Mini Projects
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  Aerodynamics projects help you visualise and measure lift, drag, and airflow — often using simple wind tunnel setups or CFD software like ANSYS Fluent or OpenFOAM.
                </p>
                <MiniProjectCard
                  title="NACA 0012 Airfoil Wind Tunnel Test"
                  description="3D-print or machine a NACA 0012 airfoil section, mount it in a subsonic wind tunnel, measure lift and drag coefficients at angles of attack from -5° to 20° using a load cell balance, and compare with XFLR5 predictions."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Drag Coefficient of Common Shapes"
                  description="Fabricate sphere, cylinder, and streamlined body models of equal frontal area from foam, mount in a wind tunnel, measure drag force at 3 wind speeds, and calculate Cd values for each shape."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="CFD Analysis of a Delta Wing at Supersonic Conditions"
                  description="Model a 60° delta wing in ANSYS Fluent, run steady-state Euler simulations at Mach 1.5 and 2.0 at varying angles of attack, and compare pressure distributions and lift-drag ratios with published experimental data."
                  difficulty="Intermediate"
                />
              </section>

              <CircuitDivider />

              <section id="aircraft-structures" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="Layers" size={18} className="text-primary" />
                  Aircraft Structures Mini Projects
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  Structural projects build your understanding of lightweight design, composite materials, and failure modes — core competencies for aircraft structural engineers.
                </p>
                <MiniProjectCard
                  title="Balsa Wood Fuselage Bending Test"
                  description="Build a semi-monocoque fuselage section from balsa wood frames and plywood skin, apply symmetrical and unsymmetrical bending loads, and measure deflections to compare with bending theory predictions."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Carbon Fibre vs Glass Fibre Sandwich Panel Comparison"
                  description="Fabricate three-point bending specimens using carbon fibre, glass fibre, and hybrid composite skins over foam core, test stiffness and failure load, and calculate specific strength vs weight ratios."
                  difficulty="Intermediate"
                />
                <MiniProjectCard
                  title="Wing Spar Shear Flow and Torsion Test"
                  description="Build an I-section aluminium wing spar, apply tip loads and torques, measure strains with rosette gauges, and compare experimental shear flow distribution with closed-section torsion theory."
                  difficulty="Beginner"
                />
              </section>

              <CircuitDivider />

              <section id="propulsion" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="Flame" size={18} className="text-primary" />
                  Propulsion Mini Projects
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  Propulsion projects cover jet engines, rockets, and alternative propulsion concepts — exciting and highly relevant for aerospace careers.
                </p>
                <MiniProjectCard
                  title="Water Rocket Altitude Optimisation"
                  description="Build a 1.5 L PET bottle water rocket, vary water fill ratios from 20% to 60%, launch at a fixed 60° angle, measure peak altitude with a barometric altimeter, and identify the optimal fill ratio."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Static Thrust Measurement of a Brushless Motor"
                  description="Mount a brushless motor (2212/1400 KV) with various propeller sizes on a load cell test stand, record thrust, current, voltage, and RPM at 6 throttle positions, and calculate propulsive efficiency."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Pulse Jet Engine Fabrication and Test"
                  description="Fabricate a Lockwood-Hiller valveless pulse jet from mild steel tubing, measure thrust and fuel consumption on a test stand, and compare thermal efficiency with Brayton cycle predictions."
                  difficulty="Intermediate"
                />
              </section>

              <CircuitDivider />

              <section id="navigation" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="Navigation" size={18} className="text-primary" />
                  Navigation &amp; Avionics Mini Projects
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  Avionics projects combine electronics with flight data processing — relevant to modern UAV flight controllers, DGCA compliance, and avionics maintenance careers.
                </p>
                <MiniProjectCard
                  title="IMU-Based Attitude and Heading Reference System"
                  description="Use an MPU-6050 IMU with a Raspberry Pi to compute roll, pitch, and yaw using complementary filters, display on a virtual horizon in Python, and compare accuracy with a reference inclinometer."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="GPS Flight Track Logger"
                  description="Build a compact GPS logger using a NEO-6M GPS module and Arduino with SD card, log flight coordinates and altitude at 1 Hz, and visualise the track on Google Earth KML overlay."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="MATLAB Autopilot Simulation for Fixed-Wing UAV"
                  description="Model a fixed-wing UAV's longitudinal dynamics in MATLAB/Simulink, design a PID altitude hold autopilot, simulate step disturbances, and tune gains to achieve <1 m altitude error in gusty conditions."
                  difficulty="Intermediate"
                />
              </section>

              <CircuitDivider />

              <section id="uav-drone" className="mb-10">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Icon name="Radio" size={18} className="text-primary" />
                  UAV &amp; Drone Mini Projects
                </h2>
                <p className="text-muted-foreground text-sm mb-5">
                  UAV projects are among the most popular for Aeronautical students — they combine structures, propulsion, and avionics in one hands-on deliverable.
                </p>
                <MiniProjectCard
                  title="Fixed-Wing RC Glider Design and Build"
                  description="Design a 1 m wingspan glider using balsa and foam, compute wing area for a 200 g payload at 8 m/s stall speed, build and maiden-fly, then measure glide ratio by GPS track analysis."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="Quadcopter Frame Design and Assembly"
                  description="Design a 450 mm carbon fibre quadcopter frame in SolidWorks, calculate motor-propeller sizing for 2× hover thrust margin, assemble with F450 clones, flash Betaflight, and hover-test for attitude stability."
                  difficulty="Beginner"
                />
                <MiniProjectCard
                  title="FPV Camera Gimbal for Aerial Photography"
                  description="Design a 2-axis brushless gimbal for a GoPro-class camera, implement MPU-6050-based stabilisation on an Arduino, mount on a multirotor, and demonstrate pan/tilt stabilisation during manual flight."
                  difficulty="Intermediate"
                />
              </section>

              {/* Bottom CTA — CTA #2 */}
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-10">
                <h2 className="text-lg font-bold text-foreground mb-2">Need Help with Your Aeronautical Mini Project?</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  WEBUILDPRO, Peenya, Bangalore has helped Aeronautical Engineering students build wind tunnel models, UAV frames, and avionics prototypes. We provide materials, electronics, fabrication support, and full project reports. WhatsApp or walk in today.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/mini-projects"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded hover:opacity-90 transition-opacity"
                  >
                    <Icon name="Plane" size={15} />
                    View All Projects
                  </Link>
                  <a
                    href="https://wa.me/919591570099?text=Hi%2C%20I%20need%20help%20with%20my%20Aeronautical%20mini%20project"
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
                    <Link href="/blog/final-year-project-ideas-for-aeronautical" className="text-primary hover:underline">
                      → Innovative Final Year Project Ideas for Aeronautical Engineering (2026)
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/mini-projects-for-mechanical" className="text-primary hover:underline">
                      → Mini Projects for Mechanical Engineering Students
                    </Link>
                  </li>
                  <li>
                    <Link href="/mini-projects" className="text-primary hover:underline">
                      → All Mini Projects at WEBUILDPRO
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
                    Best mini project center in Bangalore for Aeronautical students. Models, materials, avionics kit &amp; docs — all under one roof.
                  </p>
                  <div className="space-y-2">
                    <Link
                      href="/pricing"
                      className="block text-center bg-primary text-primary-foreground text-xs font-semibold px-3 py-2 rounded hover:opacity-90 transition-opacity"
                    >
                      View Pricing
                    </Link>
                    <a
                      href="https://wa.me/919591570099?text=Hi%2C%20I%20need%20help%20with%20my%20Aeronautical%20mini%20project"
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
