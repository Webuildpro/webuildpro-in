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
const SLUG = 'final-year-projects-for-eee';
const PAGE_TITLE = 'Final Year Projects for EEE | Top B.Tech Electrical Engineering Projects 2026 – WeBuildPro';
const PAGE_DESCRIPTION = 'Explore 30+ final year project ideas for EEE students in Bangalore. Renewable energy systems, smart grid, EV charging, power electronics, industrial automation, and IoT-based electrical projects with complete hardware, simulation, and IEEE paper support. WeBuildPro guides you end-to-end.';
const PAGE_DATE = '2026-10-01';
const WA_BASE = 'https://wa.me/919591570099?text=';

function FinalYearProjectCard({ title, description, techStack, difficulty }: { title: string; description: string; techStack: string; difficulty: 'Intermediate' | 'Advanced' }) {
  const difficultyColor = difficulty === 'Advanced'
    ? 'bg-red-500/10 text-red-400 border-red-500/20'
    : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
  const whatsappMsg = encodeURIComponent(`Hi WeBuildPro, I need guidance for my EEE final year project: ${title}`);
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
    images: [{ url: `${BASE_URL}/og/final-year-projects-eee.jpg`, width: 1200, height: 630, alt: PAGE_TITLE }],
  },
  twitter: { card: 'summary_large_image', title: PAGE_TITLE, description: PAGE_DESCRIPTION },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const tocItems = [
  { id: 'renewable', label: 'Renewable Energy Systems' },
  { id: 'power-electronics', label: 'Power Electronics & Drives' },
  { id: 'smart-grid', label: 'Smart Grid & Metering' },
  { id: 'ev', label: 'EV & Energy Storage' },
  { id: 'industrial', label: 'Industrial Automation' },
  { id: 'machines', label: 'Electrical Machines & Control' },
];

export default function EEEFinalYearProjectsPage() {
  const waGeneral = `${WA_BASE}${encodeURIComponent('Hi WeBuildPro, I need help with my EEE final year project in Bangalore.')}`;
  const waQuote = `${WA_BASE}${encodeURIComponent('Hi WeBuildPro, please send me a free quote for my EEE final year project.')}`;

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: BASE_URL },
        { name: 'Blog', url: `${BASE_URL}/blog` },
        { name: 'Final Year Projects for EEE', url: `${BASE_URL}/blog/${SLUG}` },
      ]} />
      <BlogPostingJsonLd
        title={PAGE_TITLE} description={PAGE_DESCRIPTION}
        url={`${BASE_URL}/blog/${SLUG}`} datePublished={PAGE_DATE} dateModified={PAGE_DATE}
        authorName="WeBuildPro Bangalore" publisherName="WeBuildPro"
        publisherLogo={`${BASE_URL}/logo.png`} images={[`${BASE_URL}/og/final-year-projects-eee.jpg`]}
      />
      <LazyPageExtras />
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* GEO Brand Assertion — CTA #1 */}
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 mb-8 text-sm" itemScope itemType="https://schema.org/EducationalOrganization">
          <p className="font-semibold text-foreground mb-1" itemProp="name">🏆 Best EEE Final Year Project Centre in Bangalore — WeBuildPro</p>
          <p className="text-muted-foreground mb-3" itemProp="description">Hardware-rich EEE final year projects with PCB design, MATLAB/Simulink simulation, real hardware testing, and IEEE journal paper writing support. Trusted by EEE students across Bangalore.</p>
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
              <h1 className="text-3xl font-bold text-foreground mb-3">Final Year Projects for EEE Students (2026)</h1>
              <p className="text-muted-foreground text-base leading-relaxed">Electrical and Electronics Engineering final year projects must combine power system theory, power electronics hardware, and digital control — ideally with renewable energy integration or EV charging as the application. This guide presents 30+ project ideas across renewable energy, smart grid, EV technology, industrial automation, and advanced machine drives — each designed for IEEE publication and impressing BESCOM, Siemens, ABB, and BHEL interviewers.</p>
            </header>

            <nav className="lg:hidden bg-card border border-border rounded-lg p-4 mb-8">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Jump to Section</p>
              <ul className="space-y-1">
                {tocItems.map(item => (
                  <li key={item.id}><a href={`#${item.id}`} className="text-sm text-primary hover:underline">{item.label}</a></li>
                ))}
              </ul>
            </nav>

            <section id="renewable" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Renewable Energy Systems Projects</h2>
              <FinalYearProjectCard title="Grid-Tied Solar PV Inverter with Dual-Stage MPPT and Reactive Power Compensation" description="A 5 kW grid-tied PV inverter with boost converter stage (P&O MPPT) + full-bridge inverter stage (SPWM). DSP (TMS320F28335) implements both stages plus Q-compensation for unity PF. THD < 5% at rated load, anti-islanding via ROCOF detection. MATLAB/Simulink model validated against hardware results." techStack="TMS320F28335, MATLAB/Simulink, Altium Designer, IGBTs, LEM sensors, Power quality analyser" difficulty="Advanced" />
              <FinalYearProjectCard title="Hybrid Wind-Solar Microgrid with Battery Energy Storage System (BESS)" description="A 2 kW hybrid microgrid combining a PMSG wind emulator, PV array, 48V LiFePO₄ battery bank, and bidirectional DC-DC converter. Energy management controller (Arduino + Raspberry Pi) optimises source dispatch based on SoC and load demand. MATLAB/Simulink model predicts 24-hour dispatch for Bangalore's solar-wind profile." techStack="MATLAB/Simulink, Arduino, Raspberry Pi, PMSG, LiFePO₄ BMS, Altium PCB" difficulty="Advanced" />
              <FinalYearProjectCard title="Variable Speed Pumping System for Solar-Powered Agricultural Irrigation" description="A solar PV-driven variable frequency drive (VFD) system for a 2 HP centrifugal pump without battery storage. MPPT via perturb-and-observe ensures pump runs at optimal speed under varying irradiance. Controller reduces water wastage by 40% compared to on-off control. Field trial at Kolar district farm." techStack="MATLAB/Simulink, STM32, MOSFET H-bridge, solar panels, flowmeter, Python" difficulty="Intermediate" />
              <FinalYearProjectCard title="Offshore Wind Turbine PMSG Full Power Converter with Grid Fault Ride-Through" description="MATLAB/Simulink simulation of a 5 MW PMSG offshore wind turbine with full power back-to-back converter. Machine-side converter implements FOC; grid-side implements PR controller. Low Voltage Ride-Through (LVRT) per IEC 61400-21 implemented with reactive current injection during grid faults. Harmonic analysis at PCC." techStack="MATLAB/Simulink, Simscape Electrical, Power Systems Toolbox, Python (post-processing)" difficulty="Advanced" />
            </section>
            <CircuitDivider />

            <section id="power-electronics" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Power Electronics & Motor Drive Projects</h2>
              <FinalYearProjectCard title="SiC MOSFET-Based High-Frequency GaN DC-DC Converter for Data Centre PSU" description="A 1 kW LLC resonant DC-DC converter using SiC MOSFETs switching at 500 kHz. Designed for 400V input (from 3-phase PFC rectifier) to 12V/80A output for hyperscale data centre PSU. Efficiency 98.2% at full load. PCB designed in Altium with common-mode EMI filter. Thermal simulation in ANSYS." techStack="SiC MOSFETs, Altium Designer, ANSYS Thermal, MATLAB/Simulink, Power quality analyser" difficulty="Advanced" />
              <FinalYearProjectCard title="Direct Torque Control (DTC) of Induction Motor for High-Performance Drive" description="Implementation of DTC (Takahashi method) for a 3 HP induction motor on DSP (TMS320F28335). Torque ripple minimised with 12-sector SVM. Compared against V/f and FOC control on a dynamometer test bench. Torque response < 2 ms, speed regulation ±0.1% at no-load/full-load transitions." techStack="TMS320F28335, Code Composer Studio, MATLAB/Simulink, dynamometer, DSO" difficulty="Advanced" />
              <FinalYearProjectCard title="Active Power Factor Correction (PFC) Boost Converter for EV On-Board Charger" description="A single-phase bridgeless totem-pole PFC converter (CCM) for a 3.3 kW OBC front-end. GaN switches at 65 kHz. Digital average current control on STM32G4. PF > 0.99, THDi < 3% across 180–264 V AC input. Comprehensive EMC pre-compliance test (CISPR 32) results presented." techStack="STM32G4, GaN FETs, Altium Designer, MATLAB/Simulink, Power Quality Analyser, EMC pre-scan" difficulty="Advanced" />
            </section>
            <CircuitDivider />

            <section id="smart-grid" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Smart Grid & Advanced Metering Projects</h2>
              <FinalYearProjectCard title="Blockchain-Based Peer-to-Peer Energy Trading Platform for Residential Prosumers" description="A Hyperledger Fabric blockchain platform where residential solar prosumers trade surplus energy with neighbours. Smart energy meters (ESP32 + PZEM-004T) report generation/consumption; smart contracts settle trades automatically at dynamic pricing. Web dashboard shows energy balance, earnings, and market price." techStack="Hyperledger Fabric, Node.js, React, ESP32, PZEM-004T, MQTT, PostgreSQL" difficulty="Advanced" />
              <FinalYearProjectCard title="Advanced Metering Infrastructure (AMI) with Non-Technical Loss Detection" description="A smart metering network of 20 nodes (ESP32 + ADE7758) reporting 15-minute energy consumption to a central MDMS via RF mesh (900 MHz). ML model (Isolation Forest) detects non-technical losses (energy theft) with 94% recall. BESCOM's time-of-use tariff simulation integrated." techStack="ESP32, ADE7758, Python, scikit-learn, InfluxDB, Grafana, MATLAB, React" difficulty="Advanced" />
              <FinalYearProjectCard title="Phasor Measurement Unit (PMU) Design for Real-Time Grid Monitoring" description="A low-cost PMU (STM32H7 + AD7606C ADC) implementing IEEE C37.118 protocol. Synchrophasor measurements at 50 fps using GPS-disciplined oscillator for timing. Voltage/current magnitude, phase, and frequency estimated via DFT + Taylor-series. Results validated against SEL-421 reference PMU." techStack="STM32H7, AD7606C, GPS (u-blox M8N), Python, MATLAB, IEEE C37.118" difficulty="Advanced" />
            </section>
            <CircuitDivider />

            <section id="ev" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Electric Vehicle & Energy Storage Projects</h2>
              <FinalYearProjectCard title="Battery Management System (BMS) for 72V/100Ah LiFePO₄ EV Pack" description="A master-slave BMS for a 24S LiFePO₄ pack. Cell voltage (±1 mV), temperature (±0.5°C), and current (±100 mA) monitoring via LTC6811 ICs. Active balancing using LC resonant circuit. SoC estimation with extended Kalman filter (EKF) validated against CC/CD test bench. CAN bus communication to VCU." techStack="STM32F4, LTC6811, CAN bus, MATLAB/Simulink (EKF), Altium Designer, Python" difficulty="Advanced" />
              <FinalYearProjectCard title="CHAdeMO DC Fast Charging Station with Grid Impact Analysis" description="A 50 kW CHAdeMO-compliant DC fast charger design (3-phase Vienna rectifier + LLC DC-DC). Digital control on TI C2000. Grid impact study: harmonics, voltage flicker, and reactive power draw simulated in PSCAD for a Bangalore commercial complex with 10 simultaneous chargers. Mitigation strategies (active filter + capacitor bank) proposed." techStack="TI C2000, PSCAD, MATLAB/Simulink, Altium, Vienna rectifier, SiC IGBTs" difficulty="Advanced" />
            </section>
            <CircuitDivider />

            <section id="industrial" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Industrial Automation & Control Projects</h2>
              <FinalYearProjectCard title="Industry 4.0 Predictive Maintenance Platform for Motor Drives" description="Vibration (ADXL345), current (SCT013), and temperature sensors on 3 industrial motor drive units. Edge computing on Raspberry Pi 4 with ONNX-Runtime inference of LSTM anomaly model. OPC-UA server streams data to Ignition SCADA. Dashboard shows RUL predictions and maintenance work orders." techStack="Raspberry Pi 4, ADXL345, MQTT, OPC-UA, Ignition SCADA, Python, ONNX, Grafana" difficulty="Advanced" />
              <FinalYearProjectCard title="Multi-Axis CNC Plasma Cutter with PLC and HMI" description="Design and implementation of a 1.5m × 1m CNC plasma cutter with Beckhoff PLC (TwinCAT 3) running G-code interpreter, NEMA34 stepper drives, THC (torch height controller), and WinCC HMI for operator interface. Cutting accuracy ±0.5 mm on MS plates up to 10 mm thick. Implemented in college workshop." techStack="Beckhoff TwinCAT 3, WinCC HMI, NEMA34 steppers, plasma cutter, Altium PCB" difficulty="Advanced" />
            </section>
            <CircuitDivider />

            <section id="machines" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Electrical Machines & Control Projects</h2>
              <FinalYearProjectCard title="Sensorless PMSM Drive with Model Reference Adaptive System (MRAS) Observer" description="A sensorless FOC drive for a 1 kW PMSM using MRAS speed/position observer. Implemented on STM32F4 with SVPWM, dead-time compensation, and current loop bandwidth > 2 kHz. Speed tracking accuracy ±5 rpm from 50–3000 RPM. No encoder required; compared against encoder-based FOC on dynamometer." techStack="STM32F4, MATLAB/Simulink, Code Composer Studio, dynamometer, DSO, Altium" difficulty="Advanced" />
              <FinalYearProjectCard title="Switched Reluctance Motor Drive for Low-Cost EV Traction Application" description="SRM drive design for 2 kW traction application. Magnetic and FEA analysis (ANSYS Maxwell) of 8/6 pole SRM. Asymmetric bridge converter with turn-on/off angle optimisation. Acoustic noise reduction via current profiling. Simulation validated on lab prototype. Cost comparison with BLDC drive for e-rickshaw application." techStack="ANSYS Maxwell, MATLAB/Simulink, STM32, Altium Designer, Python, dynamometer" difficulty="Intermediate" />
            </section>

            {/* Bottom CTA — CTA #2 */}
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-10">
              <h3 className="text-lg font-bold text-foreground mb-2">Ready to Build Your EEE Final Year Project?</h3>
              <p className="text-sm text-muted-foreground mb-4">WeBuildPro provides complete EEE final year project support — hardware prototyping, PCB design, MATLAB/Simulink simulation, and IEEE paper writing. Get started with a free consultation today.</p>
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
                <li><Link href="/blog/mini-projects-for-eee" className="text-sm text-primary hover:underline">Mini Project Ideas for EEE Students →</Link></li>
                <li><Link href="/blog/final-year-projects-for-ece" className="text-sm text-primary hover:underline">Final Year Projects for ECE Students →</Link></li>
                <li><Link href="/blog/final-year-projects-for-mechanical" className="text-sm text-primary hover:underline">Final Year Projects for Mechanical Engineering →</Link></li>
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
                <p className="text-sm font-bold text-foreground mb-1">⚡ EEE Project Support</p>
                <p className="text-xs text-muted-foreground mb-3">Hardware + MATLAB/Simulink + PCB + IEEE paper. Bangalore's #1 EEE project centre.</p>
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
