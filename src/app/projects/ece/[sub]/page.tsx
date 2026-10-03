import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import nextDynamic from 'next/dynamic';
import Header from '@/components/Header';
import LazyPageExtras from '@/components/LazyPageExtras';

import { branchData } from '@/lib/data/projects';
import EceSubPageContent from '@/app/projects/ece/[sub]/components/EceSubPageContent';
import JsonLdScript from '@/components/JsonLdScript';
import { breadcrumbSchema, faqSchema, itemListSchema, serviceSchema } from '@/lib/jsonld';





const EceSubPageContent = nextDynamic(() => import('./components/EceSubPageContent'), { ssr: true });
const Footer = nextDynamic(() => import('@/components/Footer'), { ssr: true });

export const dynamic = 'force-static';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

// ─── Sub-category config ────────────────────────────────────────────────────

interface SubConfig {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  faq: { q: string; a: string }[];
  /** project IDs that belong to this sub-domain */
  projectIds: string[];
}

const ECE_SUBS: SubConfig[] = [
  {
    slug: 'iot-projects-in-bangalore',
    h1: 'IoT Projects in Bangalore',
    metaTitle: 'IoT Projects in Bangalore',
    metaDescription:
      'Get a fully-built IoT final-year project in Bangalore. WEBUILDPRO delivers working hardware + source code for ECE students. Call +91 95382 08573.',
    intro:
      'IoT projects in Bangalore are among the most sought-after ECE final-year builds — and for good reason. At WEBUILDPRO, every IoT project we deliver is a fully assembled, tested unit: real sensors, real cloud dashboards, real data. Whether you need a smart agriculture system, a patient health monitor, or an industrial IIoT setup, our Peenya lab builds it end-to-end. We handle PCB design, firmware, cloud integration and documentation so you walk in with a requirement and walk out with a working project. Our IoT builds use ESP32, MQTT, and live dashboards — not simulated screenshots. Delivery in 2–4 weeks. Fixed price. No hidden charges. Hundreds of ECE students from Bangalore colleges have submitted IoT projects built here. WhatsApp us today to get a quote for your specific title.',
    faq: [
      {
        q: 'Which IoT platform do you use for ECE projects?',
        a: 'We primarily use ESP32 with MQTT and cloud dashboards (Blynk, ThingSpeak, or custom Node-RED). The platform is chosen based on your college requirement and connectivity needs.',
      },
      {
        q: 'Can I get a custom IoT project title not listed here?',
        a: 'Yes. Bring your title or IEEE paper reference and we will scope it. Most custom IoT titles are deliverable within 2–3 weeks.',
      },
      {
        q: 'Do IoT projects include a working mobile/web dashboard?',
        a: 'Yes. Every IoT project includes a live dashboard — either a mobile app (Blynk/MIT App Inventor) or a web interface — so you can demonstrate real-time data during your viva.',
      },
    ],
    projectIds: ['ece-05', 'ece-07', 'ece-09', 'ece-11', 'ece-12', 'ece-13', 'ece-27', 'ece-28', 'ece-30', 'ece-32'],
  },
  {
    slug: 'embedded-systems-projects-in-bangalore',
    h1: 'Embedded Systems Projects in Bangalore',
    metaTitle: 'Embedded Systems Projects in Bangalore',
    metaDescription:
      'Fully-built embedded systems projects for ECE final year in Bangalore. Custom PCB, firmware, and documentation. WEBUILDPRO — call +91 95382 08573.',
    intro:
      'Embedded systems projects in Bangalore demand more than a breadboard and borrowed code — they need a working PCB, clean firmware and a demo that survives a viva. WEBUILDPRO builds embedded projects from schematic to tested board in our Peenya lab. We design custom PCBs in KiCad, write firmware in Embedded C or Arduino, and deliver the full source code, circuit diagrams and project report material. Our embedded builds cover microcontroller-based automation, sensor interfacing, real-time control loops and communication protocols — UART, SPI, I2C, CAN and more. Every project is tested on the bench before handover. Whether your title is a digital fare meter, a smart toll system or an industrial automation controller, we scope it, build it and document it. Fixed price, 2–4 week delivery. WhatsApp +91 95382 08573 for a quote.',
    faq: [
      {
        q: 'Which microcontrollers do you work with for embedded projects?',
        a: 'We work with Arduino (Uno, Mega, Nano), ESP32, ESP8266, STM32, PIC, and 8051. The choice depends on your project requirements and college preference.',
      },
      {
        q: 'Do you design custom PCBs for embedded projects?',
        a: 'Yes. PCB design in KiCad or Altium, gerber generation, fabrication and SMD assembly are all done in-house. You receive the final assembled and tested board.',
      },
      {
        q: 'Can I bring my own project title for an embedded systems build?',
        a: 'Absolutely. Share your title or IEEE paper and we will provide a fixed quote within 24 hours. Most embedded titles are deliverable in 2–3 weeks.',
      },
    ],
    projectIds: ['ece-04', 'ece-06', 'ece-08', 'ece-21', 'ece-26', 'ece-28', 'ece-29', 'ece-31'],
  },
  {
    slug: 'robotics-projects-in-bangalore',
    h1: 'Robotics Projects in Bangalore',
    metaTitle: 'Robotics Projects in Bangalore',
    metaDescription:
      'Robotics final-year projects for ECE students in Bangalore. Fully built robotic arms, rovers and autonomous bots. WEBUILDPRO — +91 95382 08573.',
    intro:
      'Robotics projects in Bangalore are a top choice for ECE final-year students who want a project that stands out in the viva room. At WEBUILDPRO, we fabricate complete robotic systems — not kits, not simulations. Our Peenya lab builds robotic arms, autonomous rovers, colour-sorting machines and delivery robots from scratch using servo motors, motor drivers, microcontrollers and custom frames. Every robot is assembled, programmed and tested before delivery. We cover pick-and-place arms, human-following carts, surgery replica systems and factory automation robots. Firmware is written in Embedded C or Arduino, and we include full source code, wiring diagrams and a viva walkthrough session. If you have a specific robotics title from your college list or an IEEE paper, bring it to us — we will scope and quote it within 24 hours. WhatsApp +91 95382 08573 to get started.',
    faq: [
      {
        q: 'Do you build the robot chassis in-house or use a kit?',
        a: 'We fabricate custom chassis using aluminium extrusion, acrylic or mild steel depending on the project. We do not use off-the-shelf kits — every build is purpose-made for your title.',
      },
      {
        q: 'Can you add wireless control to a robotics project?',
        a: 'Yes. We support RF, Bluetooth, Wi-Fi (ESP32) and IoT-based remote control. Specify your requirement and it will be included in the scope.',
      },
      {
        q: 'How long does a robotics project take to build?',
        a: 'Most robotics projects are delivered in 2–4 weeks. Complex multi-axis arms or autonomous navigation systems may take 4–5 weeks. We give a fixed timeline in the quote.',
      },
    ],
    projectIds: ['ece-01', 'ece-14', 'ece-15', 'ece-16', 'ece-17', 'ece-18', 'ece-19', 'ece-23', 'ece-24'],
  },
  {
    slug: 'drone-projects-in-bangalore',
    h1: 'Drone Projects in Bangalore',
    metaTitle: 'Drone Projects in Bangalore',
    metaDescription:
      'Custom drone final-year projects for ECE students in Bangalore. Agriculture drones, hybrid drone-rovers, inventory drones. WEBUILDPRO — +91 95382 08573.',
    intro:
      'Drone projects in Bangalore are among the most impressive ECE final-year builds you can submit — and WEBUILDPRO is one of the few centres in the city that actually flies them. We build agriculture surveillance drones, hybrid drone-rover systems, and autonomous inventory drones from frame to firmware. Our builds use proper flight controllers (Pixhawk / APM), brushless motors, ESCs and telemetry modules — not toy quadcopters. Onboard sensors for pesticide detection, barcode scanning or terrain mapping are integrated and tested in our lab before handover. Every drone project includes full source code, wiring diagrams, flight test video and project report material. Drone builds typically take 3–4 weeks. If your college has a specific drone title or you have an IEEE paper on UAV systems, WhatsApp us at +91 95382 08573 and we will scope it within 24 hours.',
    faq: [
      {
        q: 'Do you test-fly the drone before delivering it?',
        a: 'Yes. Every drone is test-flown in our lab area before handover. You receive a flight test video as part of the delivery documentation.',
      },
      {
        q: 'Can you build a drone with a specific payload (camera, sensor, sprayer)?',
        a: 'Yes. We integrate cameras, gas sensors, pesticide sprayers, barcode scanners and other payloads based on your project requirement. Payload weight affects frame and motor selection, which we handle in the design phase.',
      },
      {
        q: 'Is a drone project allowed for ECE final year at Bangalore colleges?',
        a: 'Yes. Drone and UAV projects are accepted at VTU-affiliated and autonomous colleges in Bangalore. We provide all documentation required for submission — report, PPT, circuit diagrams and demo video.',
      },
    ],
    projectIds: ['ece-02', 'ece-03', 'ece-25'],
  },
  {
    slug: 'vlsi-projects-in-bangalore',
    h1: 'VLSI Projects in Bangalore',
    metaTitle: 'VLSI Projects in Bangalore',
    metaDescription:
      'VLSI and FPGA final-year projects for ECE students in Bangalore. Verilog, VHDL, Xilinx Artix-7. WEBUILDPRO — call +91 95382 08573.',
    intro:
      'VLSI projects in Bangalore require more than a simulation screenshot — your viva panel expects a working FPGA implementation with timing reports and synthesis results. WEBUILDPRO delivers complete VLSI projects on Xilinx Artix-7 (Basys 3 / Arty) and Intel Cyclone boards, written in Verilog or VHDL. We cover digital design fundamentals, arithmetic units, communication protocol implementations, image processing pipelines and cryptographic cores. Every project includes RTL code, testbenches, synthesis reports, timing analysis and a live FPGA demo. Our engineers have hands-on experience with Vivado and Quartus toolchains. If you have a specific VLSI title from your college list or an IEEE paper on digital design, bring it to us — we will scope and quote it within 24 hours. Fixed price, 3–5 week delivery. WhatsApp +91 95382 08573.',
    faq: [
      {
        q: 'Which FPGA boards do you support for VLSI projects?',
        a: 'We work with Xilinx Artix-7 (Basys 3, Arty A7) and Intel Cyclone IV/V boards. If your college specifies a particular board, mention it and we will confirm availability.',
      },
      {
        q: 'Do you support both Verilog and VHDL?',
        a: 'Yes. Both Verilog and VHDL are supported. We also provide mixed-language projects where required. Testbenches are written in the same language as the design.',
      },
      {
        q: 'Can you implement an IEEE paper-based VLSI design?',
        a: 'Yes. Share the DOI or paper PDF and we will scope the implementation against your timeline and board. Most IEEE VLSI papers are implementable in 3–5 weeks.',
      },
    ],
    projectIds: ['ece-20', 'ece-22'],
  },
  {
    slug: 'biomedical-projects-in-bangalore',
    h1: 'Biomedical Projects in Bangalore',
    metaTitle: 'Biomedical Projects in Bangalore',
    metaDescription:
      'Biomedical ECE final-year projects in Bangalore — patient monitors, wearables, health IoT. WEBUILDPRO delivers working hardware. +91 95382 08573.',
    intro:
      'Biomedical projects in Bangalore are a high-impact ECE final-year choice — they combine embedded hardware, sensor interfacing and real-world healthcare relevance that impresses viva panels. WEBUILDPRO builds complete biomedical systems: patient health monitors with MAX30102 and MLX90614 sensors, soldier wearables with GPS and GSM, smart water quality analysers and IoT-connected health dashboards. Every build uses medical-grade sensor modules, custom PCBs and cloud connectivity so your demo shows live vitals — not pre-recorded data. We deliver full source code, circuit diagrams, calibration data and project report material. Biomedical projects typically take 2–4 weeks. If you have a specific title from your college list or a healthcare IoT paper, WhatsApp us at +91 95382 08573 and we will quote it within 24 hours.',
    faq: [
      {
        q: 'Are biomedical ECE projects accepted at VTU colleges in Bangalore?',
        a: 'Yes. Biomedical instrumentation and health monitoring projects are widely accepted at VTU-affiliated and autonomous colleges. We provide all documentation required for submission.',
      },
      {
        q: 'Which sensors do you use for patient monitoring projects?',
        a: 'We use MAX30102 for SpO2 and heart rate, MLX90614 for non-contact temperature, AD8232 for ECG, and GSR sensors for stress monitoring — all calibrated and tested before delivery.',
      },
      {
        q: 'Can the biomedical project send alerts to a doctor\'s phone?',
        a: 'Yes. We integrate Telegram bot alerts, SMS via GSM, or push notifications through an IoT dashboard so threshold breaches trigger real-time alerts on any device.',
      },
    ],
    projectIds: ['ece-09', 'ece-12', 'ece-13'],
  },
  {
    slug: 'communication-projects-in-bangalore',
    h1: 'Communication Projects in Bangalore',
    metaTitle: 'Communication Projects in Bangalore',
    metaDescription:
      'Communication systems ECE final-year projects in Bangalore — RF, LoRa, wireless, IIoT. WEBUILDPRO builds working hardware. +91 95382 08573.',
    intro:
      'Communication projects in Bangalore cover a wide spectrum for ECE final-year students — from RF and LoRa wireless links to Industrial IoT gateways and energy monitoring systems. WEBUILDPRO builds complete communication system projects with real RF hardware: LoRa modules, Zigbee nodes, BLE beacons, Wi-Fi mesh networks and IIoT gateways. We do not simulate communication links — we build them, measure link budget, packet loss and latency, and document the results. Our communication builds include wireless EV charging with RFID, industrial safety monitoring over IIoT, energy monitoring systems and automated industrial control. Every project includes full source code, RF test data, wiring diagrams and project report material. Delivery in 2–4 weeks. Fixed price. WhatsApp +91 95382 08573 to get a quote for your specific communication title.',
    faq: [
      {
        q: 'Which wireless protocols do you support for communication projects?',
        a: 'We regularly work with LoRa, Zigbee, BLE, Wi-Fi (ESP32), RF433/868, NB-IoT, MQTT over TCP, and GSM/GPRS. The protocol is chosen based on your range, data rate and power requirements.',
      },
      {
        q: 'Can you build a project based on a specific communication standard (e.g. IEEE 802.15.4)?',
        a: 'Yes. Share your paper or standard reference and we will scope the implementation. We have hardware for most sub-GHz and 2.4 GHz protocols used in academic projects.',
      },
      {
        q: 'Do communication projects include a working receiver and transmitter pair?',
        a: 'Yes. Every communication project is delivered as a complete system — transmitter, receiver, and any gateway or dashboard — tested end-to-end before handover.',
      },
    ],
    projectIds: ['ece-26', 'ece-27', 'ece-28', 'ece-30', 'ece-32'],
  },
];

export function generateStaticParams() {
  return ECE_SUBS.map((s) => ({ sub: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sub: string }>;
}): Promise<Metadata> {
  const { sub } = await params;
  const config = ECE_SUBS.find((s) => s.slug === sub);
  if (!config) return {};
  return {
    title: config.metaTitle,
    description: config.metaDescription,
    alternates: {
      canonical: `https://webuildpro.in/projects/ece/${config.slug}`,
    },
    openGraph: {
      title: config.metaTitle,
      description: config.metaDescription,
      url: `https://webuildpro.in/projects/ece/${config.slug}`,
      siteName: 'WEBUILDPRO India',
      type: 'website',
      images: [{ url: '/assets/images/og-webuildpro.jpg', width: 1200, height: 630, alt: config.h1 }],
    },
  };
}

export default async function EceSubPage({
  params,
}: {
  params: Promise<{ sub: string }>;
}) {
  const { sub } = await params;
  const config = ECE_SUBS.find((s) => s.slug === sub);
  if (!config) notFound();

  const eceData = branchData['ece'];
  const filteredProjects = eceData.projects.filter((p) =>
    config.projectIds.includes(p.id)
  );

  const siblings = ECE_SUBS.filter((s) => s.slug !== config.slug);

  const path = `/projects/ece/${config.slug}`;
  const schema = [
    breadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Projects', url: '/projects' },
      { name: 'ECE Projects', url: '/projects/ece' },
      { name: config.h1, url: path },
    ]),
    serviceSchema({ name: config.h1, description: config.metaDescription, path, serviceType: 'ECE final year project development' }),
    itemListSchema(config.h1, filteredProjects.map((p) => ({ name: p.title }))),
    faqSchema(config.faq),
  ];

  return (
    <>
      <JsonLdScript nodes={schema} />
      <Header />
      <EceSubPageContent
        config={config}
        projects={filteredProjects}
        siblings={siblings}
      />
      <Footer />
      <LazyPageExtras />
    </>
  );
}
