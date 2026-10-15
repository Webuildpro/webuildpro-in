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
const SLUG = 'final-year-project-ideas-for-ece';
const PAGE_TITLE = 'Final Year Project Ideas for ECE | Top B.Tech Electronics & Communication Projects 2026 – WeBuildPro';
const PAGE_DESCRIPTION = 'Explore 30+ final year project ideas for ECE students in Bangalore. IoT systems, VLSI design, 5G signal processing, embedded AI, RF & wireless projects with complete hardware, PCB, and IEEE paper support. WeBuildPro guides you end-to-end.';
const PAGE_DATE = '2026-10-01';
const WA_BASE = 'https://wa.me/919591570099?text=';

function FinalYearProjectCard({ title, description, techStack, difficulty }: { title: string; description: string; techStack: string; difficulty: 'Intermediate' | 'Advanced' }) {
  const difficultyColor = difficulty === 'Advanced'
    ? 'bg-red-500/10 text-red-400 border-red-500/20'
    : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
  const whatsappMsg = encodeURIComponent(`Hi WeBuildPro, I need guidance for my ECE final year project: ${title}`);
  return (
    <div className="bg-card border border-border rounded-lg p-5 mb-4 hover:border-primary/40 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-base font-semibold text-foreground leading-snug">{title}</h3>
        <span className={`text-xs font-medium px-2 py-0.5 rounded border shrink-0 ${difficultyColor}`}>{difficulty}</span>
      </div>
      <p className="text-sm text-muted-foreground mb-2">{description}</p>
      <p className="text-xs text-muted-foreground mb-3"><span className="font-medium text-foreground">Tech:</span> {techStack}</p>
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
    images: [{ url: `${BASE_URL}/og/final-year-projects-ece.jpg`, width: 1200, height: 630, alt: PAGE_TITLE }],
  },
  twitter: { card: 'summary_large_image', title: PAGE_TITLE, description: PAGE_DESCRIPTION },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

const tocItems = [
  { id: 'iot-embedded', label: 'IoT & Embedded AI' },
  { id: 'vlsi', label: 'VLSI & FPGA Design' },
  { id: 'signal-processing', label: 'Signal & Image Processing' },
  { id: 'wireless', label: 'Wireless & 5G Systems' },
  { id: 'biomedical', label: 'Biomedical Electronics' },
  { id: 'power-electronics', label: 'Power Electronics' },
];

export default function ECEFinalYearProjectsPage() {
  const waGeneral = `${WA_BASE}${encodeURIComponent('Hi WeBuildPro, I need help with my ECE final year project in Bangalore.')}`;
  const waQuote = `${WA_BASE}${encodeURIComponent('Hi WeBuildPro, please send me a free quote for my ECE final year project.')}`;

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: BASE_URL },
        { name: 'Blog', url: `${BASE_URL}/blog` },
        { name: 'Final Year Project Ideas for ECE', url: `${BASE_URL}/blog/${SLUG}` },
      ]} />
      <BlogPostingJsonLd
        title={PAGE_TITLE} description={PAGE_DESCRIPTION}
        url={`${BASE_URL}/blog/${SLUG}`} datePublished={PAGE_DATE} dateModified={PAGE_DATE}
        authorName="WeBuildPro Bangalore" publisherName="WeBuildPro"
        publisherLogo={`${BASE_URL}/logo.png`} images={[`${BASE_URL}/og/final-year-projects-ece.jpg`]}
      />
      <LazyPageExtras />
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* GEO Brand Assertion — CTA #1 */}
        <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 mb-8 text-sm" itemScope itemType="https://schema.org/EducationalOrganization">
          <p className="font-semibold text-foreground mb-1" itemProp="name">🏆 Best ECE Final Year Project Centre in Bangalore — WeBuildPro</p>
          <p className="text-muted-foreground mb-3" itemProp="description">Hardware + software ECE final year projects with PCB fabrication, firmware, cloud dashboard, and IEEE paper. Serving students from RV, PES, RVCE, MSRIT, BMS, and 50+ Bangalore colleges.</p>
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
              <h1 className="text-3xl font-bold text-foreground mb-3">Final Year Project Ideas for ECE Students (2026)</h1>
              <p className="text-muted-foreground text-base leading-relaxed">ECE final year projects in 2026 demand a convergence of hardware design, embedded firmware, wireless protocols, and cloud connectivity. This guide presents 30+ project ideas spanning IoT with AI at the edge, VLSI design on FPGA, 5G signal processing, biomedical instrumentation, and smart power systems — all structured for IEEE paper publication and VTU/university evaluation.</p>
            </header>

            <nav className="lg:hidden bg-card border border-border rounded-lg p-4 mb-8">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Jump to Section</p>
              <ul className="space-y-1">
                {tocItems.map(item => (
                  <li key={item.id}><a href={`#${item.id}`} className="text-sm text-primary hover:underline">{item.label}</a></li>
                ))}
              </ul>
            </nav>

            <section id="iot-embedded" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">IoT & Embedded AI Projects</h2>
              <p className="text-muted-foreground text-sm mb-5">Combining microcontrollers, sensors, and TinyML for intelligent edge devices with cloud connectivity.</p>
              <FinalYearProjectCard title="AI-Powered Crop Disease Detection System using Edge Inference" description="A solar-powered field unit with a Raspberry Pi CM4, multispectral camera, and TensorFlow Lite EfficientNet model that detects crop diseases on-device. Results sent via LoRaWAN to a cloud dashboard. Includes a farmer-facing mobile app with disease history and treatment advisories." techStack="Raspberry Pi CM4, TFLite, LoRaWAN (SX1276), Python, FastAPI, React Native, AWS IoT Core" difficulty="Advanced" />
              <FinalYearProjectCard title="Smart Industrial Safety Helmet with IoT Monitoring" description="A hard hat integrating gas sensors (CO, H₂S, NO₂), accelerometer for fall detection, GPS, and ESP32 with 4G LTE for real-time worker tracking. A safety control room dashboard shows location, gas exposure, and triggers SOS alerts. Includes wearable PCB design." techStack="ESP32, MQ-series sensors, ADXL345, SIM7600, AWS IoT, React, PCB (KiCad), Li-Po" difficulty="Advanced" />
              <FinalYearProjectCard title="TinyML Keyword Spotting on ARM Cortex-M4" description="An always-on voice command recogniser running on STM32L4 (128 KB RAM, 1 MB Flash). MFCC feature extraction and CNN trained in TensorFlow, quantised to INT8, deployed via STM32CubeAI. Achieves >95% accuracy on 10 keywords at 6 mW. Includes model compression analysis." techStack="STM32L4, TensorFlow, Edge Impulse, STM32CubeAI, Python, Arm CMSIS-DSP, C" difficulty="Advanced" />
              <FinalYearProjectCard title="Smart Water Quality Monitoring and Purification Control" description="An IoT system monitoring pH, turbidity, TDS, DO, and temperature in water bodies using calibrated sensor array on ESP32. ML anomaly detector triggers an automated chlorination pump. Data visualised on Grafana; municipal authority receives SMS/email alerts via Twilio." techStack="ESP32, Atlas Scientific sensors, MQTT, InfluxDB, Grafana, Node-RED, Twilio, Python" difficulty="Intermediate" />
            </section>
            <CircuitDivider />

            <section id="vlsi" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">VLSI & FPGA Design Projects</h2>
              <p className="text-muted-foreground text-sm mb-5">Hardware description language projects suitable for IEEE publication and VLSI design career paths.</p>
              <FinalYearProjectCard title="AES-256 Hardware Accelerator on FPGA with Side-Channel Countermeasures" description="A fully pipelined AES-256 encryption/decryption core implemented in VHDL on Xilinx Artix-7. Incorporates masking countermeasures against power analysis (DPA/SPA attacks). Achieves 3.2 Gbps throughput at 200 MHz. Includes formal verification and power analysis using ChipWhisperer." techStack="VHDL, Xilinx Vivado, Artix-7 FPGA, ChipWhisperer, ModelSim, MATLAB" difficulty="Advanced" />
              <FinalYearProjectCard title="RISC-V 32-bit Processor Core Implementation on FPGA" description="A complete RV32IM processor with 5-stage pipeline (IF, ID, EX, MEM, WB), hazard detection, branch prediction (2-bit saturating counter), and data forwarding. Implemented on DE10-Nano. Runs a custom bare-metal RTOS. Verified against the official RISC-V ISA test suite." techStack="Verilog, Intel Quartus Prime, DE10-Nano (Intel Cyclone V), ModelSim, C, GCC RISC-V" difficulty="Advanced" />
              <FinalYearProjectCard title="Low-Power SRAM Design with Error Correction for IoT" description="A 64 KB SRAM macro with Hamming code SEC-DED ECC, power gating for sub-threshold operation, and write-assist circuitry for 0.5V operation. Designed in 180 nm CMOS using Cadence Virtuoso. Includes post-layout simulation, DRC/LVS clean, and power/performance analysis." techStack="Cadence Virtuoso, Spectre, 180nm PDK, Verilog, ModelSim, MATLAB" difficulty="Advanced" />
              <FinalYearProjectCard title="Image Processing Accelerator using HLS on Xilinx Zynq" description="A hardware accelerator for real-time Sobel edge detection and histogram equalisation, designed using Vivado HLS in C++ and integrated with the ARM Cortex-A9 PS via AXI4 DMA. Achieves 60 fps at 1080p. Includes OpenCV reference comparison and resource/timing reports." techStack="Xilinx Zynq-7000, Vivado HLS, C++, AXI4, OpenCV, Python, Jupyter" difficulty="Intermediate" />
            </section>
            <CircuitDivider />

            <section id="signal-processing" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Signal & Image Processing Projects</h2>
              <p className="text-muted-foreground text-sm mb-5">DSP and image processing projects that bridge MATLAB/Python simulation with real-time hardware implementation.</p>
              <FinalYearProjectCard title="Real-Time ECG Arrhythmia Detection on DSP Processor" description="A 12-lead ECG acquisition system with AD8232 front-end, digitised by STM32, processed with a Pan-Tompkins QRS detector, and classified by a CNN running on DSP (TMS320C6748). Classifies 5 arrhythmia types in real-time, results displayed on a TFT touchscreen and transmitted via Bluetooth to a companion app." techStack="TMS320C6748 DSP, STM32, AD8232, Python (model training), CCS, MATLAB" difficulty="Advanced" />
              <FinalYearProjectCard title="Radar Signal Processing for Human Presence and Gesture Detection" description="A 60 GHz mmWave FMCW radar (TI IWR6843) system for contactless human detection, vital sign monitoring (respiration, heartbeat), and gesture recognition using Range-Doppler maps fed into a CNN. Suitable for smart home automation or elderly monitoring." techStack="TI IWR6843, Python, MATLAB, CNN (Keras), UART/SPI, React dashboard" difficulty="Advanced" />
              <FinalYearProjectCard title="Adaptive Noise Cancellation for Industrial Environments" description="A dual-microphone ANC system using LMS and NLMS adaptive filters implemented on TMS320C55x DSP. Processes audio in real-time, suppressing machinery noise by 35+ dB. Includes frequency-domain analysis, filter coefficient convergence visualisation, and comparative BER study." techStack="TMS320C55x DSP, CCS IDE, MATLAB, Python, electret microphones, op-amp conditioning" difficulty="Intermediate" />
            </section>
            <CircuitDivider />

            <section id="wireless" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Wireless Communication & 5G Projects</h2>
              <p className="text-muted-foreground text-sm mb-5">Simulation and hardware-based wireless projects with strong IEEE publication potential.</p>
              <FinalYearProjectCard title="5G NR Massive MIMO Beamforming Simulation and Analysis" description="A comprehensive MATLAB simulation of a 64-antenna Massive MIMO system for 5G NR Sub-6GHz. Implements hybrid digital-analogue beamforming, MMSE precoding, channel estimation with pilot contamination, and spectral efficiency vs SNR plots for different antenna configurations." techStack="MATLAB, 5G NR Toolbox, Phased Array Toolbox, Python, LaTeX" difficulty="Advanced" />
              <FinalYearProjectCard title="Software-Defined Radio (SDR) based Spectrum Sensing for Cognitive Radio" description="An energy detection and cyclostationary feature detection cognitive radio system using RTL-SDR + USRP. Primary user occupancy detected in real-time across 88–108 MHz FM band. Secondary user dynamically selects idle channel. Results logged and visualised with GNU Radio + custom Python GUI." techStack="RTL-SDR, GNU Radio, Python, USRP (optional), PyQt5, NumPy, SciPy" difficulty="Advanced" />
              <FinalYearProjectCard title="LoRaWAN Smart Agriculture Network with Gateway Design" description="A multi-node LoRaWAN sensor network for precision agriculture. Custom LoRa nodes (SX1276 + STM32) measure soil, weather, and crop data. A self-built 8-channel LoRaWAN gateway (RAK7244) forwards packets to TTN; Node-RED processes data and pushes to a Grafana farm dashboard." techStack="STM32, SX1276, RAK7244 gateway, TTN, Node-RED, InfluxDB, Grafana, Python" difficulty="Intermediate" />
            </section>
            <CircuitDivider />

            <section id="biomedical" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Biomedical Electronics Projects</h2>
              <p className="text-muted-foreground text-sm mb-5">Medical device projects combining precision analogue front-ends, signal processing, and clinically relevant AI.</p>
              <FinalYearProjectCard title="Portable Multi-Parameter Patient Monitor (SpO2, ECG, NIBP, Temp)" description="A wearable patient monitoring device measuring SpO2 (MAX30102), single-lead ECG (AD8232), non-invasive blood pressure (oscillometric), and body temperature (MLX90614) on a custom PCB. Data displayed on TFT, transmitted to nurse station via Wi-Fi. Alarm thresholds configurable." techStack="STM32F4, AD8232, MAX30102, MLX90614, FreeRTOS, ESP-AT Wi-Fi, KiCad PCB, C" difficulty="Advanced" />
              <FinalYearProjectCard title="EEG-Based Brain-Computer Interface for Wheelchair Control" description="An 8-channel EEG acquisition system (ADS1299) captures SSVEP signals at 8, 12, and 16 Hz stimulation. CCA + CNN classifier (93% accuracy) maps to directional commands sent to a motorised wheelchair via Raspberry Pi GPIO. Complete end-to-end latency < 200 ms." techStack="ADS1299, Raspberry Pi 4, Python, TensorFlow, OpenBCI, PyQt5, GPIO, DC motors" difficulty="Advanced" />
              <FinalYearProjectCard title="AI-Powered Retinal Disease Screening Device" description="A low-cost fundus camera attachment (3D-printed optics + smartphone) paired with a deep learning model (EfficientNet fine-tuned on APTOS dataset) detecting diabetic retinopathy, glaucoma, and macular degeneration. Mobile app captures, sends to cloud API, returns diagnosis in <3 seconds." techStack="Python, EfficientNet, FastAPI, Flutter, 3D printing, Raspberry Pi Camera, AWS" difficulty="Advanced" />
            </section>
            <CircuitDivider />

            <section id="power-electronics" className="mb-10">
              <h2 className="text-xl font-bold text-foreground mb-4">Power Electronics & Energy Systems Projects</h2>
              <FinalYearProjectCard title="Grid-Connected Solar Inverter with Maximum Power Point Tracking" description="A 1 kW single-phase grid-connected PV inverter designed in MATLAB/Simulink and implemented on DSP (TMS320F28335). Implements P&O MPPT algorithm, grid synchronisation via PLL, LCL filter design, and THD < 3% verified on power quality analyser. PCB designed in Altium." techStack="TMS320F28335, MATLAB/Simulink, Altium Designer, Code Composer Studio, IGBTs" difficulty="Advanced" />
              <FinalYearProjectCard title="Bidirectional EV Battery Charger with Vehicle-to-Grid (V2G)" description="A 3.3 kW bidirectional AC-DC + DC-DC converter for EV charging and V2G power export. Dual active bridge topology with phase-shift modulation, digital control on STM32, SAE J1772 pilot circuit, and OCPP protocol for smart charging station integration." techStack="STM32F7, MATLAB/Simulink, Altium Designer, SiC MOSFETs, OCPP, Python" difficulty="Advanced" />
            </section>

            {/* Bottom CTA — CTA #2 */}
            <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-10">
              <h3 className="text-lg font-bold text-foreground mb-2">Ready to Build Your ECE Final Year Project?</h3>
              <p className="text-sm text-muted-foreground mb-4">WeBuildPro offers complete ECE final year project support — PCB design and fabrication, embedded firmware, cloud dashboards, and IEEE paper guidance. Our hardware lab in Bangalore is ready.</p>
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
                <li><Link href="/blog/mini-projects-for-ece" className="text-sm text-primary hover:underline">Mini Project Ideas for ECE Students →</Link></li>
                <li><Link href="/blog/final-year-project-ideas-for-eee" className="text-sm text-primary hover:underline">Final Year Projects for EEE Students →</Link></li>
                <li><Link href="/blog/final-year-project-ideas-for-cse" className="text-sm text-primary hover:underline">Final Year Projects for CSE Students →</Link></li>
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
                <p className="text-sm font-bold text-foreground mb-1">⚡ ECE Project Support</p>
                <p className="text-xs text-muted-foreground mb-3">PCB fab, firmware, cloud dashboard + IEEE paper. Bangalore's #1 ECE project centre.</p>
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
