// lib/data/subcategories/eee.ts
// READY-TO-USE DATA FILE for EEE sub-category pages. Rocket only builds the template around it.
// Each entry -> a page at /projects/eee/[slug].

export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface SubProject {
  title: string;
  abstract: string;
  difficulty: Difficulty;
  timeline: string;
}

export interface SubCategory {
  slug: string;
  branch: "eee";
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  projects: SubProject[];
  faqs: { q: string; a: string }[];
}

export const eeeSubCategories: SubCategory[] = [
  {
    slug: "power-electronics-projects-in-bangalore",
    branch: "eee",
    keyword: "Power Electronics Projects in Bangalore",
    metaTitle: "Power Electronics Projects in Bangalore",
    metaDescription: "Final year power electronics projects in Bangalore for EEE. Converters, inverters & control circuits built and tested. Online & offline.",
    intro: "Looking for power electronics projects in Bangalore for your final year? WEBUILDPRO builds working power electronics projects for EEE students in Bangalore — converters, inverters and control circuits designed, built and tested in our lab. Power electronics is a core EEE domain valued by energy and manufacturing companies. Every project below is a genuine build delivered with circuit diagrams, source code where applicable, a bill of materials, report material and a walkthrough. We deliver in person across Bangalore and support students pan-India.",
    projects: [
      { title: "Solar Micro-Inverter (Grid-Tie)", abstract: "Converts solar DC into grid-quality AC with a small inverter. Demonstrates power conversion, switching and synchronisation.", difficulty: "Advanced", timeline: "3–4 weeks" },
      { title: "Mini DC-DC Converter (Buck/Boost)", abstract: "Steps voltage up or down efficiently with a switching converter. A core power-electronics fundamentals project.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Power Factor Correction Unit", abstract: "Improves the power factor of a load automatically to reduce losses. Demonstrates measurement and correction.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Wireless Power Transfer System", abstract: "Transfers power across a gap using inductive coupling to light a load. Demonstrates resonant power transfer.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Pure Sine Wave Inverter (Mini)", abstract: "Converts DC to clean AC to run small loads. A strong fundamentals project covering switching and filtering.", difficulty: "Intermediate", timeline: "2–3 weeks" },
    ],
    faqs: [
      { q: "Are these working circuits?", a: "Yes — every power electronics project is built and tested on our bench before delivery." },
      { q: "Do I get circuit diagrams?", a: "Yes — circuit diagrams, bill of materials, report material and a walkthrough are included." },
      { q: "Delivery outside Bangalore?", a: "Yes, we ship pan-India with online support; in-person builds are ideal for hardware." },
    ],
  },
  {
    slug: "plc-automation-projects-in-bangalore",
    branch: "eee",
    keyword: "PLC & Automation Projects in Bangalore",
    metaTitle: "PLC & Automation Projects in Bangalore",
    metaDescription: "Final year PLC and industrial automation projects in Bangalore for EEE. Working automation systems with documentation. Online & offline.",
    intro: "WEBUILDPRO builds PLC and automation projects in Bangalore for EEE final year students — real industrial automation using PLCs and microcontrollers. Automation is one of the most employable skills in the power and manufacturing sector. Every project below is a working build delivered with ladder logic or code, wiring diagrams, a bill of materials, report material and a walkthrough. We deliver in person across Bangalore and support students pan-India.",
    projects: [
      { title: "PLC-Based Bottle Filling Automation", abstract: "Automates positioning, filling and capping of bottles using a PLC. Demonstrates ladder logic, sensors and actuators.", difficulty: "Advanced", timeline: "3–4 weeks" },
      { title: "Industrial Automation System with IIoT", abstract: "A PLC-driven line monitored and controlled over Industrial IoT with live status and fault alerts. Combines automation and connectivity.", difficulty: "Advanced", timeline: "3–4 weeks" },
      { title: "Automatic Water Level & Pump Control", abstract: "Controls a pump automatically based on tank level. A clean, reliable automation fundamentals project.", difficulty: "Beginner", timeline: "2 weeks" },
      { title: "Conveyor Sorting Automation", abstract: "Sorts objects on a conveyor by sensor input automatically. Demonstrates industrial control and actuation.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Traffic Light Automation with PLC", abstract: "Controls a traffic-signal sequence using a PLC with timing logic. A classic automation demonstration.", difficulty: "Intermediate", timeline: "2 weeks" },
    ],
    faqs: [
      { q: "Do you use real PLCs?", a: "We use real PLCs or microcontroller equivalents based on your requirement and budget, and explain the choice." },
      { q: "Is documentation included?", a: "Yes — ladder logic or code, wiring diagrams, report material and a walkthrough come with every project." },
      { q: "Online or offline?", a: "In-person builds in Bangalore are ideal; we ship pan-India for outstation students." },
    ],
  },
  {
    slug: "ev-projects-in-bangalore",
    branch: "eee",
    keyword: "Electric Vehicle (EV) Projects in Bangalore",
    metaTitle: "EV Projects in Bangalore for EEE",
    metaDescription: "Final year electric vehicle projects in Bangalore for EEE. Battery, charging & BMS projects built and tested. Online & offline delivery.",
    intro: "WEBUILDPRO builds electric vehicle projects in Bangalore for EEE final year students — battery systems, charging and management projects in one of the fastest-growing industries. EV projects are highly relevant to today's job market. Every project below is a working build delivered with circuit diagrams, code where applicable, a bill of materials, report material and a walkthrough. We deliver in person across Bangalore and support students pan-India.",
    projects: [
      { title: "EV Battery Management System (BMS)", abstract: "Monitors and balances battery cells for safe operation, tracking voltage, current and temperature. A core EV project.", difficulty: "Advanced", timeline: "3 weeks" },
      { title: "Wireless EV Charging Station with RFID", abstract: "A contactless charging pad using inductive power transfer with RFID authentication. Combines power electronics and access control.", difficulty: "Advanced", timeline: "3–4 weeks" },
      { title: "IoT-Based Battery Monitoring System", abstract: "Monitors battery state of charge, temperature and health in real time over IoT with alerts. Key for EV and storage.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Regenerative Braking Energy Recovery", abstract: "Recovers braking energy back into the battery on a scaled EV model. Demonstrates energy recovery and control.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Solar-Assisted EV Charging", abstract: "Charges an EV battery from solar power with a managed controller. Combines renewable energy and charging.", difficulty: "Intermediate", timeline: "2–3 weeks" },
    ],
    faqs: [
      { q: "Are EV projects safe to demonstrate?", a: "Yes — built at safe scaled voltages designed for demonstration and learning." },
      { q: "Do I get documentation?", a: "Yes — circuit diagrams, code, bill of materials, report material and a walkthrough are included." },
      { q: "Delivery outside Bangalore?", a: "Yes, pan-India with online support; in-person builds suit hardware-heavy EV projects." },
    ],
  },
  {
    slug: "solar-energy-projects-in-bangalore",
    branch: "eee",
    keyword: "Solar Energy Projects in Bangalore",
    metaTitle: "Solar Energy Projects in Bangalore for EEE",
    metaDescription: "Final year solar energy projects in Bangalore for EEE. Solar tracking, monitoring & harvesting systems with docs. Online & offline.",
    intro: "WEBUILDPRO builds solar energy projects in Bangalore for EEE final year students — solar tracking, monitoring and harvesting systems that are timely and impactful. Every project below is a working build delivered with circuit diagrams, code where applicable, a bill of materials, report material and a walkthrough. We deliver in person across Bangalore and support students pan-India.",
    projects: [
      { title: "Dual-Axis Solar Tracking System", abstract: "Rotates a panel on two axes to follow the sun for maximum output. Demonstrates sensing, control and power gain over a fixed panel.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "IoT Solar Panel Monitoring System", abstract: "Monitors panel voltage, current and output over IoT with a dashboard. Demonstrates measurement and remote monitoring.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "Solar-Powered Smart Street Light", abstract: "A solar street light that dims or brightens based on motion and ambient light. Combines solar power and control.", difficulty: "Beginner", timeline: "2 weeks" },
      { title: "Maximum Power Point Tracking (MPPT) Charger", abstract: "Extracts maximum power from a solar panel using an MPPT algorithm. A strong power-electronics-and-solar project.", difficulty: "Advanced", timeline: "3 weeks" },
      { title: "Solar Water Pumping System", abstract: "Runs a water pump directly from solar power for irrigation. Demonstrates solar-to-load power management.", difficulty: "Intermediate", timeline: "2–3 weeks" },
    ],
    faqs: [
      { q: "Are these working solar systems?", a: "Yes — each produces and manages real solar output and is tested before delivery." },
      { q: "Do I get documentation?", a: "Yes — circuit diagrams, code, bill of materials, report material and a walkthrough are included." },
      { q: "Online or offline?", a: "In-person builds in Bangalore are ideal; we ship pan-India for outstation students." },
    ],
  },
  {
    slug: "motor-control-projects-in-bangalore",
    branch: "eee",
    keyword: "Motor Control Projects in Bangalore",
    metaTitle: "Motor Control Projects in Bangalore for EEE",
    metaDescription: "Final year motor control projects in Bangalore for EEE. BLDC, induction & speed-control systems built and tested. Online & offline.",
    intro: "WEBUILDPRO builds motor control projects in Bangalore for EEE final year students — speed control, drives and monitoring for BLDC, induction and DC motors. Motor control is a core industrial skill. Every project below is a working build delivered with circuit diagrams, code, a bill of materials, report material and a walkthrough. We deliver in person across Bangalore and support students pan-India.",
    projects: [
      { title: "BLDC Motor Speed Control with PID", abstract: "Controls a brushless DC motor's speed precisely using PID feedback. Demonstrates drives, sensing and control tuning.", difficulty: "Advanced", timeline: "3 weeks" },
      { title: "Induction Motor Speed Control (VFD)", abstract: "Varies induction-motor speed using a variable-frequency approach. A core industrial motor-control project.", difficulty: "Advanced", timeline: "3 weeks" },
      { title: "Three-Phase Fault Detection & Isolation", abstract: "Detects faults in a three-phase supply and isolates the load automatically. Demonstrates protection systems.", difficulty: "Intermediate", timeline: "2–3 weeks" },
      { title: "DC Motor Speed & Direction Control", abstract: "Controls a DC motor's speed and direction from a controller. A clean fundamentals project.", difficulty: "Beginner", timeline: "2 weeks" },
      { title: "IoT-Based Motor Health Monitoring", abstract: "Monitors motor temperature, current and vibration over IoT to predict failures. Combines sensing and remote monitoring.", difficulty: "Intermediate", timeline: "2–3 weeks" },
    ],
    faqs: [
      { q: "Do these use real motors?", a: "Yes — each project drives a real motor and is tested before delivery." },
      { q: "Is documentation included?", a: "Yes — circuit diagrams, code, bill of materials, report material and a walkthrough are included." },
      { q: "Delivery outside Bangalore?", a: "Yes, pan-India with online support; in-person builds suit these hardware projects." },
    ],
  },
];
