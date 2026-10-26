import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
import LazyPageExtras from '@/components/LazyPageExtras';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import BlogPostingJsonLd from '@/components/BlogPostingJsonLd';
import FaqSection from '@/components/FaqSection';
import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';

const FAQS = [
  { q: "What are the best final year projects for mechanical engineering?", a: "Good mechanical final year projects combine design, analysis and a working model — for example a pneumatic sheet metal cutter, regenerative braking system, solar-powered vehicle, robotic arm, or CFD/FEA-validated design improvements." },
  { q: "What are some easy mechanical engineering final year projects?", a: "Easier but solid options include a pedal-operated washing machine, automatic side stand retrieval, mini hydraulic press, solar grass cutter and a pneumatic punching machine." },
  { q: "Do mechanical projects include CAD and analysis?", a: "Yes. Projects can include SolidWorks/CATIA models, ANSYS FEA or CFD analysis, and a fabricated working model, along with the report." },
  { q: "Can mechanical students do robotics or automation projects?", a: "Yes — robotic arms, conveyor automation and drone frames are increasingly popular mechanical projects and match mechatronics job roles." },
  { q: "How much does a mechanical final year project cost?", a: "Final year projects at WEBUILDPRO typically cost ₹12,000–₹20,000 including hardware (where needed), report, PPT and viva walkthrough; advanced or research-heavy projects can go higher. You get a fixed quote before work starts — WhatsApp +91 95382 08573." },
];

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';
const SLUG = 'final-year-project-ideas-for-mechanical';
const PAGE_TITLE = 'Final Year Projects for Mechanical Engineering: 18 Ideas (2026)';
const PAGE_DESCRIPTION = 'Explore 18 final year project ideas for Mechanical Engineering students in Bangalore. CFD simulations, FEA analysis, robotics, renewable energy systems, and manufacturing automation projects with complete CAD, simulation, and report support. WeBuildPro guides you end-to-end.';
const PAGE_DATE = '2026-10-01';
const WA_BASE = 'https://wa.me/919538208573?text=';

function FinalYearProjectCard({ title, description, techStack, difficulty }: { title: string; description: string; techStack: string; difficulty: 'Intermediate' | 'Advanced' }) {
  const difficultyColor = difficulty === 'Advanced'
    ? 'bg-red-500/10 text-red-400 border-red-500/20'
    : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
  const whatsappMsg = encodeURIComponent(`Hi WeBuildPro, I need guidance for my Mechanical final year project: ${title}`);
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
    images: [{ url: `${BASE_URL}/og/final-year-projects-mechanical.jpg`, width: 1200, height: 630, alt: PAGE_TITLE }],
  },
  twitter: { card: 'summary_large_image', title: PAGE_TITLE, description: PAGE_DESCRIPTION },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const tocItems = [
  { id: 'cfd', label: 'CFD & Thermal Analysis' },
  { id: 'fea', label: 'Structural FEA' },
  { id: 'robotics', label: 'Robotics & Automation' },
  { id: 'renewable', label: 'Renewable Energy Systems' },
  { id: 'manufacturing', label: 'Manufacturing & Industry 4.0' },
  { id: 'automotive', label: 'Automotive Engineering' },
];

export default function MechanicalFinalYearProjectsPage() {
  const waGeneral = `${WA_BASE}${encodeURIComponent('Hi WeBuildPro, I need help with my Mechanical Engineering final year project in Bangalore.')}`;
  const waQuote = `${WA_BASE}${encodeURIComponent('Hi WeBuildPro, please send me a free quote for my Mechanical final year project.')}`;

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: BASE_URL },
        { name: 'Blog', url: `${BASE_URL}/blog` },
        { name: 'Final Year Project Ideas for Mechanical', url: `${BASE_URL}/blog/${SLUG}` },
      ]} />
      <BlogPostingJsonLd
        title={PAGE_TITLE} description={PAGE_DESCRIPTION}
        url={`${BASE_URL}/blog/${SLUG}`} datePublished={PAGE_DATE} dateModified={PAGE_DATE}
        authorName="WeBuildPro Bangalore" publisherName="WeBuildPro"
        publisherLogo={`${BASE_URL}/logo.png`} images={[`${BASE_URL}/og/final-year-projects-mechanical.jpg`]}
      />
      <LazyPageExtras />
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* GEO Brand Assertion — CTA #1 */}
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 mb-8 text-sm" itemScope itemType="https://schema.org/EducationalOrganization">
          <p className="font-semibold text-foreground mb-1" itemProp="name">🏆 Best Mechanical Final Year Project Centre in Bangalore — WeBuildPro</p>
          <p className="text-muted-foreground mb-3" itemProp="description">Full-service Mechanical final year projects — ANSYS/SolidWorks simulations, physical prototype fabrication, complete technical reports, and IEEE paper writing support.</p>
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
              <h1 className="text-3xl font-bold text-foreground mb-3">Final Year Projects for Mechanical Engineering Students: 18 Ideas (2026)</h1>
              <p className="text-muted-foreground text-base leading-relaxed">Mechanical Engineering final year projects in 2026 must go beyond textbook theory — they should integrate CAD modelling, simulation (CFD/FEA), physical prototyping, and data analysis. This guide presents 30+ project ideas that are genuinely challenging, publishable in IEEE/ASME journals, and aligned with what Tata, L&T, ISRO, Bosch, and other top recruiters look for in fresh ME graduates.</p>
            </header>

            <nav className="lg:hidden bg-card border border-border rounded-lg p-4 mb-8">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Jump to Section</p>
              <ul className="space-y-1">
                {tocItems.map(item => (
                  <li key={item.id}><a href={`#${item.id}`} className="text-sm text-primary hover:underline">{item.label}</a></li>
                ))}
              </ul>
            </nav>

            <section id="cfd" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">CFD & Thermal Analysis Projects</h2>
              <p className="text-muted-foreground text-sm mb-5">Computational Fluid Dynamics projects validated against experimental data — a combination that reviewers and examiners love.</p>
              <FinalYearProjectCard title="CFD Optimisation of Heat Exchanger with Nanofluids" description="A 3D CFD study of a shell-and-tube heat exchanger using Al₂O₃-water nanofluid at varying volume fractions (0.5%–3%). Simulated in ANSYS Fluent using RNG k-ε turbulence model. Parametric study on baffle spacing, tube arrangement, and nanoparticle concentration. Results compared against Wilson plot experimental data." techStack="ANSYS Fluent, SolidWorks, ANSYS Meshing, Python (post-processing), MATLAB" difficulty="Advanced" />
              <FinalYearProjectCard title="Aerodynamic Drag Reduction Study for Road Vehicles using CFD" description="Full-scale external aerodynamics CFD of a sedan baseline model with four body modifications (tapered tail, underbody diffuser, rear spoiler, vortex generators). Reynolds-Averaged Navier-Stokes (RANS) with SST k-ω model. Drag coefficient reduced by 18%. Wind tunnel validation with 1:10 scale model." techStack="ANSYS Fluent, Autodesk CFD, SolidWorks, MATLAB, Wind Tunnel (1:10 scale model)" difficulty="Advanced" />
              <FinalYearProjectCard title="Phase Change Material (PCM) based Thermal Energy Storage for Solar Building" description="Design and CFD simulation of a PCM (RT42 paraffin wax) integrated wall panel for passive solar building thermal management. Enthalpy-porosity method in ANSYS Fluent models melting/solidification. Energy savings analysis over Bangalore's climate profile (TMY data) using EnergyPlus." techStack="ANSYS Fluent, EnergyPlus, SolidWorks, MATLAB, Python" difficulty="Advanced" />
              <FinalYearProjectCard title="Film Cooling Effectiveness Analysis for Gas Turbine Blades" description="A parametric CFD study of cylindrical and shaped hole film cooling on a flat plate representing a turbine blade. ANSYS Fluent with conjugate heat transfer, temperature-dependent properties, and blowing ratios (M = 0.5–2.0). Compares adiabatic film cooling effectiveness against published benchmark data." techStack="ANSYS Fluent, ICEM CFD, MATLAB, SolidWorks" difficulty="Intermediate" />
            </section>
            <CircuitDivider />

            <section id="fea" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Structural FEA & Material Projects</h2>
              <p className="text-muted-foreground text-sm mb-5">FEA projects combining simulation with experimental validation — the gold standard for academic evaluation.</p>
              <FinalYearProjectCard title="Fatigue Life Prediction of Composite Wind Turbine Blade under Variable Amplitude Loading" description="A full 3D FEA model of a 5 m GFRP wind turbine blade in ANSYS Composite PrepPost. Rainflow counting on measured wind load spectrum used for S-N curve fatigue analysis. Delamination growth simulated using Virtual Crack Closure Technique (VCCT). Hot-spot locations and remaining life estimated." techStack="ANSYS Composite PrepPost, ANSYS Mechanical, Python, MATLAB, SolidWorks" difficulty="Advanced" />
              <FinalYearProjectCard title="Topology Optimisation of Automotive Suspension Wishbone for Weight Reduction" description="A density-based topology optimisation (SIMP method) of a double-wishbone suspension lower arm in ANSYS Topology Optimisation. Target: 35% mass reduction with stress below yield. Redesigned geometry manufactured in Al 6061 via CNC and validated with strain gauge measurements." techStack="ANSYS Mechanical, OptiStruct, SolidWorks, MATLAB, CNC machining, strain gauges" difficulty="Advanced" />
              <FinalYearProjectCard title="Crashworthiness Analysis of Thin-Walled Structures for EV Battery Enclosure" description="An explicit dynamics FEA study (ANSYS LS-DYNA) of aluminium thin-walled structures (square, hexagonal, tapered) under axial crash loading representing EV front-end impact at 56 km/h. Specific energy absorption (SEA) and peak crush force optimised. Comparison of material grades (5052-H32, 6061-T6, AA7075)." techStack="ANSYS LS-DYNA, Hypermesh, SolidWorks, MATLAB, Python" difficulty="Advanced" />
              <FinalYearProjectCard title="Vibration Analysis and Dynamic Balancing of High-Speed Rotating Machinery" description="Experimental modal analysis of a centrifugal pump rotor using impact hammer testing and MEMS accelerometers. FRF data processed in MATLAB to extract natural frequencies and mode shapes, correlated with ANSYS FEA model. Influence coefficient balancing performed to reduce vibration from 8.4 mm/s to 0.9 mm/s RMS." techStack="ANSYS Mechanical, MATLAB, accelerometers, NI DAQ, SolidWorks, LMS Test.Lab" difficulty="Intermediate" />
            </section>
            <CircuitDivider />

            <section id="robotics" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Robotics & Automation Projects</h2>
              <p className="text-muted-foreground text-sm mb-5">Interdisciplinary projects combining mechanical design, kinematics, control systems, and embedded programming.</p>
              <FinalYearProjectCard title="6-DOF Robotic Arm with Vision-Guided Pick-and-Place" description="A custom-designed 6-axis robotic arm (aluminium extrusion + 3D-printed joints) driven by NEMA23 steppers with planetary gearboxes. Inverse kinematics solved in Python (PyBullet). YOLOv8 on Jetson Nano detects and localises objects; ROS 2 orchestrates motion planning with MoveIt 2." techStack="SolidWorks, ROS 2, Python, PyBullet, YOLOv8, Jetson Nano, NEMA23 motors, Arduino" difficulty="Advanced" />
              <FinalYearProjectCard title="Autonomous Mobile Robot for Warehouse Navigation with SLAM" description="A differential-drive mobile robot built on a fabricated aluminium chassis with Lidar (RPLidar A3) and depth camera (Intel RealSense D435). ROS 2 + Nav2 stack implements SLAM (Cartographer) for real-time mapping and navigation in a simulated warehouse environment. Battery life 4+ hours." techStack="ROS 2, Nav2, Cartographer SLAM, RPLidar, Intel RealSense, Raspberry Pi 4, Python" difficulty="Advanced" />
              <FinalYearProjectCard title="Pneumatic Soft Robotic Gripper for Delicate Object Handling" description="Design, FEA (ANSYS Hyperelastic), and fabrication (silicone casting in 3D-printed moulds) of a three-finger soft pneumatic gripper. Bending angle vs pressure characterised experimentally and validated against FEA. Gripper successfully handles eggs, fruits, and irregular-shaped objects at controlled pressures (0–100 kPa)." techStack="ANSYS (Hyperelastic FEA), SolidWorks, 3D printing, silicone casting, Arduino, solenoid valves" difficulty="Intermediate" />
            </section>
            <CircuitDivider />

            <section id="renewable" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Renewable Energy & Sustainable Systems Projects</h2>
              <FinalYearProjectCard title="Thermoelectric Generator (TEG) Waste Heat Recovery for IC Engine" description="A multi-stage TEG array mounted on the exhaust pipe of a 4-stroke engine. TEG module (Bi₂Te₃) placement optimised with thermal resistance network model and ANSYS thermal FEA. Experimental validation on engine test rig. Net power output 45 W from exhaust at 350°C, integrated with DC-DC boost converter." techStack="ANSYS Thermal, SolidWorks, MATLAB/Simulink, TEG modules, Altium, Engine test rig" difficulty="Advanced" />
              <FinalYearProjectCard title="Vertical Axis Wind Turbine (VAWT) Blade Optimisation using CFD + Genetic Algorithm" description="H-Darrieus VAWT blade profile (NACA 0015, 0018, 0021) optimised using a MATLAB genetic algorithm coupled with ANSYS Fluent CFD in a batch loop. Power coefficient (Cp) vs TSR curves generated for each blade configuration. Optimal blade manufactured and tested in open-jet wind tunnel." techStack="ANSYS Fluent, MATLAB (GA Toolbox), SolidWorks, Wind Tunnel, Python" difficulty="Advanced" />
              <FinalYearProjectCard title="Solar-Powered Atmospheric Water Generator for Rural India" description="Design, fabrication, and thermodynamic analysis of a desiccant-based atmospheric water harvesting system regenerated by solar thermal collectors. Condensation cycle produces 8 L/day in Bangalore's climate. MATLAB model predicts daily yield vs humidity and solar irradiance. Cost analysis for village-scale deployment." techStack="MATLAB, SolidWorks, solar flat-plate collector, silica gel desiccant, data loggers" difficulty="Intermediate" />
            </section>
            <CircuitDivider />

            <section id="manufacturing" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Manufacturing & Industry 4.0 Projects</h2>
              <FinalYearProjectCard title="Digital Twin of CNC Machining Process for Predictive Quality Control" description="A digital twin of a 3-axis CNC milling process using sensor fusion (spindle current, vibration, acoustic emission) and machine learning to predict surface roughness and tool wear in real-time. Edge computing on Raspberry Pi sends data to a cloud digital twin platform (Azure IoT Digital Twins). Quality alerts issued before defects occur." techStack="Raspberry Pi, Azure IoT, Python, scikit-learn, MQTT, SolidWorks CAM, vibration sensors" difficulty="Advanced" />
              <FinalYearProjectCard title="Wire Arc Additive Manufacturing (WAAM) Process Parameter Optimisation" description="Taguchi L27 design of experiments for WAAM of SS316L using GMAW process. Parameters: wire feed speed, travel speed, inter-pass temperature. Response variables: bead width, height, porosity, hardness. ANOVA identifies key parameters. Tensile properties compared with wrought SS316L per ASTM E8." techStack="WAAM setup (MIG welder + CNC), Minitab, MATLAB, SEM/EDS (characterisation), ANSYS" difficulty="Advanced" />
            </section>
            <CircuitDivider />

            <section id="automotive" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Automotive Engineering Projects</h2>
              <FinalYearProjectCard title="Formula Student Car Chassis Design, FEA, and Torsional Stiffness Testing" description="Full chassis design for a Formula Student single-seater in SolidWorks. FEA (ANSYS) for torsional stiffness, front impact, rollover, and side impact per FSAE rules. Torsional stiffness target 1500 Nm/degree achieved with 4130 chromoly steel spaceframe. Physical test rig validates simulation within 8%." techStack="SolidWorks, ANSYS Mechanical, Python (post-processing), TIG welding, test rig" difficulty="Advanced" />
              <FinalYearProjectCard title="Regenerative Braking System Design for E-Motorcycle" description="Mechanical and electrical design of a regenerative braking system for a 72V/3 kW electric motorcycle. BLDC motor reprogrammed as generator during braking. Energy recovered stored in supercapacitor bank. MATLAB/Simulink models energy recovery efficiency (28%) across Bangalore traffic driving cycle. PCB for power management designed." techStack="MATLAB/Simulink, Altium Designer, SolidWorks, BLDC controller, supercapacitors, Python" difficulty="Intermediate" />
            </section>

            {/* Bottom CTA — CTA #2 */}
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-10">
              <h3 className="text-lg font-bold text-foreground mb-2">Need Help with Your Mechanical Final Year Project?</h3>
              <p className="text-sm text-muted-foreground mb-4">WeBuildPro provides end-to-end Mechanical project support — ANSYS/SolidWorks simulation, fabrication, technical report writing, and IEEE paper guidance. Bangalore's trusted project centre since 2019.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/projects" className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded hover:bg-primary/90 transition-colors">
                  <Icon name="FolderOpen" size={14} /> View Projects
                </Link>
                <a href={waGeneral} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-green-500 transition-colors">
                  <Icon name="MessageCircle" size={14} /> WhatsApp Us
                </a>
                <a href="https://share.google/PNhH0q4fGroQHnzqr" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-border text-foreground text-sm font-semibold px-4 py-2 rounded hover:bg-card transition-colors">
                  <Icon name="MapPin" size={14} /> Google Profile
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
                <li><Link href="/blog/mini-projects-for-mechanical" className="text-sm text-primary hover:underline">Mini Project Ideas for Mechanical Students →</Link></li>
                <li><Link href="/blog/final-year-project-ideas-for-civil" className="text-sm text-primary hover:underline">Final Year Projects for Civil Engineering →</Link></li>
                <li><Link href="/blog/final-year-project-ideas-for-aeronautical" className="text-sm text-primary hover:underline">Final Year Projects for Aeronautical Engineering →</Link></li>
              </ul>
            </div>
            <FaqSection faqs={FAQS} />
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
                <p className="text-sm font-bold text-foreground mb-1">⚙️ ME Project Support</p>
                <p className="text-xs text-muted-foreground mb-3">ANSYS simulation + fabrication + IEEE paper. Trusted by ME students across Bangalore.</p>
                <div className="space-y-2">
                  <Link href="/pricing" className="flex items-center justify-center gap-1.5 bg-primary text-primary-foreground text-xs font-semibold px-3 py-2 rounded hover:bg-primary/90 transition-colors w-full">
                    <Icon name="IndianRupee" size={12} /> View Pricing
                  </Link>
                  <a href={waGeneral} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-green-600 text-white text-xs font-semibold px-3 py-2 rounded hover:bg-green-500 transition-colors w-full">
                    <Icon name="MessageCircle" size={12} /> WhatsApp Us
                  </a>
                  <a href="https://share.google/PNhH0q4fGroQHnzqr" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 border border-border text-foreground text-xs font-semibold px-3 py-2 rounded hover:bg-card transition-colors w-full">
                    <Icon name="MapPin" size={12} /> Find Us on Google
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
