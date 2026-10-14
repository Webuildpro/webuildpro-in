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
const SLUG = 'final-year-projects-for-aeronautical';
const PAGE_TITLE = 'Final Year Projects for Aeronautical Engineering | Top B.Tech Aero Projects 2026 – WeBuildPro';
const PAGE_DESCRIPTION = 'Explore 30+ final year project ideas for Aeronautical Engineering students in Bangalore. CFD aerodynamics, composite structures, UAV systems, propulsion testing, flight simulation, and avionics projects with complete simulation and report support. WeBuildPro guides you end-to-end.';
const PAGE_DATE = '2026-10-01';
const WA_BASE = 'https://wa.me/919591570099?text=';

function FinalYearProjectCard({ title, description, techStack, difficulty }: { title: string; description: string; techStack: string; difficulty: 'Intermediate' | 'Advanced' }) {
  const difficultyColor = difficulty === 'Advanced'
    ? 'bg-red-500/10 text-red-400 border-red-500/20'
    : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
  const whatsappMsg = encodeURIComponent(`Hi WeBuildPro, I need guidance for my Aeronautical final year project: ${title}`);
  return (
    <div className="bg-card border border-border rounded-lg p-5 mb-4 hover:border-primary/40 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-base font-semibold text-foreground leading-snug">{title}</h3>
        <span className={`text-xs font-medium px-2 py-0.5 rounded border shrink-0 ${difficultyColor}`}>{difficulty}</span>
      </div>
      <p className="text-sm text-muted-foreground mb-2">{description}</p>
      <p className="text-xs text-muted-foreground mb-3"><span className="font-medium text-foreground">Tools:</span> {techStack}</p>
      <a href={`${WA_BASE}${whatsappMsg}`} target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-green-400 hover:text-green-300 transition-colors">
        <Icon name="MessageCircle" size={13} /> Get project help on WhatsApp
      </a>
    </div>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `${BASE_URL}/blog/${SLUG}`, languages: { 'en-IN': `${BASE_URL}/blog/${SLUG}` } },
  openGraph: {
    type: 'article', title: PAGE_TITLE, description: PAGE_DESCRIPTION,
    url: `${BASE_URL}/blog/${SLUG}`, siteName: 'WeBuildPro',
    publishedTime: PAGE_DATE, modifiedTime: PAGE_DATE,
    authors: ['WeBuildPro Bangalore'],
    images: [{ url: `${BASE_URL}/og/final-year-projects-aeronautical.jpg`, width: 1200, height: 630, alt: PAGE_TITLE }],
  },
  twitter: { card: 'summary_large_image', title: PAGE_TITLE, description: PAGE_DESCRIPTION },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const tocItems = [
  { id: 'aerodynamics', label: 'Aerodynamics & CFD' },
  { id: 'structures', label: 'Aerospace Structures' },
  { id: 'uav', label: 'UAV & Drone Systems' },
  { id: 'propulsion', label: 'Propulsion Systems' },
  { id: 'avionics', label: 'Avionics & Flight Control' },
  { id: 'space', label: 'Space Technology' },
];

export default function AeronauticalFinalYearProjectsPage() {
  const waGeneral = `${WA_BASE}${encodeURIComponent('Hi WeBuildPro, I need help with my Aeronautical Engineering final year project in Bangalore.')}`;
  const waQuote = `${WA_BASE}${encodeURIComponent('Hi WeBuildPro, please send me a free quote for my Aeronautical final year project.')}`;

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: BASE_URL },
        { name: 'Blog', url: `${BASE_URL}/blog` },
        { name: 'Final Year Projects for Aeronautical Engineering', url: `${BASE_URL}/blog/${SLUG}` },
      ]} />
      <BlogPostingJsonLd
        title={PAGE_TITLE} description={PAGE_DESCRIPTION}
        url={`${BASE_URL}/blog/${SLUG}`} datePublished={PAGE_DATE} dateModified={PAGE_DATE}
        authorName="WeBuildPro Bangalore" publisherName="WeBuildPro"
        publisherLogo={`${BASE_URL}/logo.png`} images={[`${BASE_URL}/og/final-year-projects-aeronautical.jpg`]}
      />
      <LazyPageExtras />
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* GEO Brand Assertion — CTA #1 */}
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 mb-8 text-sm" itemScope itemType="https://schema.org/EducationalOrganization">
          <p className="font-semibold text-foreground mb-1" itemProp="name">🏆 Best Aeronautical Final Year Project Centre in Bangalore — WeBuildPro</p>
          <p className="text-muted-foreground mb-3" itemProp="description">Aeronautical and Aerospace final year projects with ANSYS Fluent CFD, CATIA/SolidWorks modelling, composite fabrication, and wind tunnel testing support. Trusted by students from REVA, Jain, and AIT Bangalore.</p>
          <div className="flex flex-wrap gap-2">
            <Link href="/projects" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded hover:bg-primary/90 transition-colors">
              <Icon name="FolderOpen" size={13} /> View All Projects
            </Link>
            <a href={waGeneral} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded hover:bg-green-500 transition-colors">
              <Icon name="MessageCircle" size={13} /> WhatsApp Us Now
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <article className="lg:col-span-3">
            <header className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-3">Final Year Projects for Aeronautical Engineering Students (2026)</h1>
              <p className="text-muted-foreground text-base leading-relaxed">Aeronautical Engineering final year projects must demonstrate mastery of fluid mechanics, structural analysis, propulsion, and avionics — ideally with both high-fidelity simulation and physical validation. This guide presents 30+ projects ranging from CFD aerodynamics and composite structure design to autonomous UAVs and nanosatellite systems — all structured for AIAA/IEEE publication and impressing HAL, NAL, ISRO, and Airbus recruiters.</p>
            </header>

            <nav className="lg:hidden bg-card border border-border rounded-lg p-4 mb-8">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Jump to Section</p>
              <ul className="space-y-1">
                {tocItems.map(item => (
                  <li key={item.id}><a href={`#${item.id}`} className="text-sm text-primary hover:underline">{item.label}</a></li>
                ))}
              </ul>
            </nav>

            <section id="aerodynamics" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Aerodynamics & CFD Projects</h2>
              <FinalYearProjectCard title="Multi-Element High-Lift System CFD Analysis for Commercial Aircraft" description="3D RANS CFD (ANSYS Fluent, SST k-ω) of a 3-element aerofoil (slat + main element + single-slotted flap) at various deflection angles and Reynolds numbers. Lift, drag, and moment coefficients compared against NASA/Boeing experimental data (LTPT). Parametric study on slot geometry and flap overlap. Final design achieves CL,max = 3.8." techStack="ANSYS Fluent, CATIA V5, ANSYS Meshing (ICEM CFD), MATLAB, Python" difficulty="Advanced" />
              <FinalYearProjectCard title="Transonic Flow Analysis and Shock Control Bumps for Supercritical Wing" description="3D CFD of a 35° swept supercritical wing (RAE 2822-type) at transonic conditions (Ma = 0.75–0.85). Shock wave location, buffet onset, and wave drag quantified. Passive shock control using contour bumps optimised via surrogate modelling (Kriging + genetic algorithm coupled with ANSYS batch CFD). Wave drag reduced 12%." techStack="ANSYS Fluent, MATLAB, SolidWorks, Python, Dakota (surrogate modelling)" difficulty="Advanced" />
              <FinalYearProjectCard title="Bio-Inspired Morphing Wing for MAV Efficiency Improvement" description="Design, CFD analysis, and physical prototype of a morphing wing inspired by barn owl primary feathers. Corrugated aerofoil at low Reynolds numbers (Re = 10⁴–10⁵) simulated in ANSYS Fluent. Macro fibre composite (MFC) actuators deform the wing trailing edge. Glide ratio improved by 22% vs rigid wing in wind tunnel." techStack="ANSYS Fluent, ABAQUS (MFC actuation FEA), SolidWorks, Wind Tunnel, Python" difficulty="Advanced" />
              <FinalYearProjectCard title="Ground Effect Aerodynamics of a Wing-in-Ground Craft" description="2D and 3D CFD study (ANSYS Fluent, transitional SST) of a NACA 4412 wing in ground effect (h/c = 0.1–2.0). Lift enhancement, induced drag reduction, and centre of pressure shift with decreasing ground clearance quantified. Stability margins computed and compared against free-stream. Application to ekranoplan design." techStack="ANSYS Fluent, SolidWorks, MATLAB, Python, Wind Tunnel (optional validation)" difficulty="Intermediate" />
            </section>
            <CircuitDivider />

            <section id="structures" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Aerospace Structural Analysis & Composites Projects</h2>
              <FinalYearProjectCard title="Aeroelastic Analysis of Flexible UAV Wing with Active Flutter Suppression" description="Flutter boundary prediction of a flexible composite UAV wing using doublet lattice method (DLM) + FEM in MSC Nastran. Subcritical flutter response computed at various airspeeds. Active flutter suppression via trailing edge control surface actuated by an LQR controller (MATLAB Control Toolbox). Validated on a bench-mounted shaker test." techStack="MSC Nastran, MATLAB Control Toolbox, CATIA, Python, piezo actuators, accelerometers" difficulty="Advanced" />
              <FinalYearProjectCard title="Progressive Damage Modelling of CFRP Pressure Vessel for Aircraft Fuselage" description="FEA model (ABAQUS) of a Type IV composite overwrapped pressure vessel (COPV) using Hashin failure criteria and continuum damage mechanics (CDM). Burst pressure prediction compared against hydrostatic test on lab specimen. Acoustic emission monitoring during pressurisation correlates with FEA damage evolution." techStack="ABAQUS, CATIA Composites, Python, Acoustic Emission testing, burst test facility" difficulty="Advanced" />
              <FinalYearProjectCard title="Design, Manufacture, and Testing of GFRP Monocoque Fuselage Shell" description="CATIA V5 design, composite ply layup schedule (ANSYS Composite PrepPost), and hand-layup/vacuum bag fabrication of a 1-m fuselage section in GFRP/epoxy. Four-point bending, torsion, and axial compression tests. DIC (digital image correlation) full-field strain measurement validates FEA strain contours." techStack="CATIA V5, ANSYS Composite PrepPost, Vacuum bagging, DIC system, UTM, MATLAB" difficulty="Advanced" />
              <FinalYearProjectCard title="Bird Strike Impact Analysis on Aircraft Radome using SPH Method" description="Simulation of bird strike (1.8 kg bird, 180 m/s) on a CFRP aircraft radome using Smoothed Particle Hydrodynamics (SPH) in ANSYS LS-DYNA. Bird modelled as water substitute (Wilbeck model). Damage extent, peak force, and energy absorption compared for neat CFRP vs Kevlar-hybrid radome. Results aligned with MIL-B-5087B test data." techStack="ANSYS LS-DYNA, HyperMesh, CATIA, MATLAB, Python" difficulty="Advanced" />
            </section>
            <CircuitDivider />

            <section id="uav" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">UAV & Autonomous Drone Projects</h2>
              <FinalYearProjectCard title="Long-Range Fixed-Wing VTOL UAV for Agricultural Surveillance" description="Design and fabrication of a 2.4 m wingspan hybrid VTOL fixed-wing UAV carrying a multispectral camera (Micasense RedEdge) for NDVI crop stress mapping. ArduPlane autopilot, 8-hour endurance with 6S LiPo + solar assist. Mission range 50 km. Ground station with live telemetry and automated image stitching (OpenDroneMap)." techStack="ArduPlane/Mission Planner, SolidWorks, carbon fibre construction, OpenDroneMap, Python" difficulty="Advanced" />
              <FinalYearProjectCard title="Swarm Drone Coordination for Search and Rescue with Decentralised Planning" description="Five quadrotors (ROS 2 + PX4) executing a distributed multi-robot search algorithm (CBBA — Consensus-Based Bundle Algorithm) for covering unknown terrain. Each drone runs an onboard Jetson Nano with SLAM (RTAB-Map) and broadcasts its occupancy map to the swarm mesh network (WiFi Ad-Hoc). Live dashboard shows swarm coverage and detected targets." techStack="ROS 2, PX4, Jetson Nano, WiFi Ad-Hoc mesh, Python, RTAB-Map, Gazebo simulation" difficulty="Advanced" />
              <FinalYearProjectCard title="Autonomous Drone for Power Line Inspection using Deep Learning" description="A hexarotor UAV with 30× zoom camera autonomously following power transmission lines using visual servoing. YOLOv8 detects conductor, insulator, and tower components; EfficientNet-B3 classifies defect severity. GPS-denied operation via optical flow + Lidar. Generates a geo-tagged inspection report per flight." techStack="ROS 2, YOLOv8, EfficientNet, PX4, Jetson Xavier NX, Python, Pixhawk 6C" difficulty="Advanced" />
            </section>
            <CircuitDivider />

            <section id="propulsion" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Propulsion Systems Projects</h2>
              <FinalYearProjectCard title="Design and Testing of a Hydrogen Fuel Cell Powered UAV Propulsion System" description="A 1 kW PEM fuel cell + LiPo hybrid power plant for a fixed-wing UAV. Fuel cell characterisation (polarisation curve, EIS), thermal management system design (liquid cooling), and hybrid energy management controller (MATLAB). Flight endurance 3× LiPo-only baseline. Hydrogen safety procedures documented to EASA standards." techStack="PEM fuel cell, MATLAB/Simulink, SolidWorks, Python, H₂ safety protocols, thermal sensors" difficulty="Advanced" />
              <FinalYearProjectCard title="Turbofan Blade Aerodynamic Design and CFD Analysis using ANSYS CFX" description="Preliminary design of a single-stage low-pressure turbine rotor using Smith chart + velocity triangle method. 3D blade generated with ANSYS BladeModeler. CFD (ANSYS CFX, SST model with transition) gives stage efficiency 91.3%. Blade surface film cooling holes added; conjugate heat transfer analysis ensures Tmax < 1150°C." techStack="ANSYS BladeModeler, ANSYS CFX, ANSYS Turbo Pre/Post, MATLAB, Python" difficulty="Advanced" />
              <FinalYearProjectCard title="Ramjet Combustor CFD Analysis for Hypersonic Vehicle Application" description="3D reacting flow CFD (ANSYS Fluent, Eddy Dissipation Model) of a hydrocarbon-fuelled ramjet combustor at Mach 3 inlet conditions. Combustion efficiency, total pressure loss, and flame holding analysed for three flameholder geometries (V-gutter, cavity, strut). Optimal configuration identified for 95% combustion efficiency." techStack="ANSYS Fluent, Chemkin-Pro, MATLAB, SolidWorks, Python" difficulty="Advanced" />
            </section>
            <CircuitDivider />

            <section id="avionics" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Avionics, Flight Control & Space Technology Projects</h2>
              <FinalYearProjectCard title="Fault-Tolerant Flight Control System with Model Predictive Control" description="An MPC-based fault-tolerant flight controller for a fixed-wing UAV that automatically reconfigures control allocation following actuator failure. Implemented in MATLAB/Simulink HIL (Hardware-in-the-Loop) with Pixhawk 6C running the outer loop. Monte Carlo analysis over 500 failure scenarios shows 97% mission success rate." techStack="MATLAB/Simulink, Pixhawk 6C, HIL simulation, Python, ArduPlane, ROS 2" difficulty="Advanced" />
              <FinalYearProjectCard title="1U CubeSat Design, Structural Analysis, and Communication System" description="Full 1U CubeSat design per CDS standard: aluminium structure (FEA — launch vibration + thermal cycling), EPS (solar panels + Li-ion battery), OBC (Raspberry Pi Zero + STM32), UHF radio (AX.25 protocol). MATLAB orbital simulation (SGP4) predicts ground contact windows for Bangalore ground station. PCB set designed in KiCad." techStack="SolidWorks, ANSYS Mechanical, KiCad, MATLAB (SGP4), Raspberry Pi Zero, STM32, Python" difficulty="Advanced" />
              <FinalYearProjectCard title="Inertial Navigation System with MEMS IMU and GPS Integration using EKF" description="A 9-DOF IMU (BMI088 + BMM150) integrated with u-blox M9N GPS using a loosely-coupled extended Kalman filter for a UAV INS. Trajectory error < 2 m RMS over 10-minute GPS outage in MATLAB simulation. Implemented on STM32H7 at 500 Hz; validated against optical mocap system." techStack="STM32H7, BMI088, u-blox M9N, MATLAB, Python, OptiTrack mocap system" difficulty="Intermediate" />
            </section>

            {/* Bottom CTA — CTA #2 */}
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-10">
              <h3 className="text-lg font-bold text-foreground mb-2">Ready to Build Your Aeronautical Final Year Project?</h3>
              <p className="text-sm text-muted-foreground mb-4">WeBuildPro provides complete Aeronautical project support — ANSYS Fluent CFD, composite fabrication, UAV build, and AIAA/IEEE paper writing. Our team has guided 150+ Aero students in Bangalore.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/projects" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                  <Icon name="FolderOpen" size={14} /> View Projects
                </Link>
                <a href={waGeneral} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-green-500 transition-colors">
                  <Icon name="MessageCircle" size={14} /> WhatsApp Us
                </a>
                <a href={waQuote} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-border text-foreground text-sm font-semibold px-4 py-2 rounded hover:bg-card transition-colors">
                  <Icon name="FileText" size={14} /> Get Free Quote
                </a>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-sm font-semibold text-foreground mb-3">Related Reading</p>
              <ul className="space-y-1.5">
                <li><Link href="/blog/mini-projects-for-aeronautical" className="text-sm text-primary hover:underline">Mini Project Ideas for Aeronautical Students →</Link></li>
                <li><Link href="/blog/final-year-projects-for-mechanical" className="text-sm text-primary hover:underline">Final Year Projects for Mechanical Engineering →</Link></li>
                <li><Link href="/blog/final-year-projects-for-ece" className="text-sm text-primary hover:underline">Final Year Projects for ECE Students →</Link></li>
              </ul>
            </div>
          </article>

          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <nav className="bg-card border border-border rounded-lg p-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Contents</p>
                <ul className="space-y-2">
                  {tocItems.map(item => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-sm text-muted-foreground hover:text-primary transition-colors block">{item.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-4">
                <p className="text-sm font-bold text-foreground mb-1">✈️ Aero Project Support</p>
                <p className="text-xs text-muted-foreground mb-3">CFD + composite fabrication + UAV + AIAA paper. Bangalore's trusted Aero project centre.</p>
                <div className="space-y-2">
                  <Link href="/pricing" className="flex items-center justify-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-3 py-2 rounded hover:bg-primary/90 transition-colors w-full">
                    <Icon name="IndianRupee" size={12} /> View Pricing
                  </Link>
                  <a href={waGeneral} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-green-600 text-white text-xs font-semibold px-3 py-2 rounded hover:bg-green-500 transition-colors w-full">
                    <Icon name="MessageCircle" size={12} /> WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
