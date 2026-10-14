import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import LazyPageExtras from '@/components/LazyPageExtras';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

const faqItems = [
  {
    q: 'Where is WEBUILDPRO located?',
    a: 'WEBUILDPRO is located in Peenya 2nd Stage, Bengaluru 560058, Karnataka, India. You can visit the lab — message us on WhatsApp first. We deliver pan-India for clients who cannot visit.'
  },
  {
    q: 'Do you offer online or remote project delivery?',
    a: 'Yes. We deliver full remote projects pan-India — video walkthroughs, screen-share mentoring, milestone demo calls, and the finished unit shipped to your door with source code and documentation. Best for software projects or students outside Bangalore.'
  },
  {
    q: 'Do I have to come to Bangalore to get my project done?',
    a: 'No. Online and hybrid options are available. For online delivery, everything is handled remotely and the hardware is couriered to you. For hybrid, you attend kickoff and final handover in person; the build and reviews happen remotely.'
  },
  {
    q: 'How long does a final year project take to complete?',
    a: 'Most academic projects run 2–4 weeks. Industrial prototypes typically run 4–12 weeks. We give you a firm timeline in the quote before you pay anything.'
  },
  {
    q: 'How much does a final year engineering project cost in Bangalore?',
    a: 'It depends on components and scope. Send your requirement and you will have a fixed quote within 24 hours with no obligation.'
  },
  {
    q: 'Which engineering branches does WEBUILDPRO support?',
    a: 'CSE/ISE/AI-ML/BCA/MCA, Mechanical, ECE, EEE, and Civil/Mining. Both IEEE and non-IEEE titles, hardware and software.'
  },
  {
    q: 'Do I get the source code and documentation with my project?',
    a: 'Yes. Working unit, full source code, circuit diagrams, BOM, report material and PPT support are part of every academic delivery.'
  },
  {
    q: 'Can you build a project based on my own idea?',
    a: 'That is our favourite kind of enquiry. Bring the idea and we will do the feasibility check and build it.'
  },
  {
    q: 'Does WEBUILDPRO really build drones?',
    a: 'Yes — custom drone development is one of our core industrial capabilities, alongside IoT, robotics, PLC automation, AI vision and warehouse management systems.'
  },
  {
    q: 'Will my company design stay confidential?',
    a: 'Yes. Industrial work is done under NDA, IP transfers to you, and we never publish client builds.'
  },
  {
    q: 'Does WEBUILDPRO provide internship certificates?',
    a: 'Yes, with a verifiable completion certificate earned on a real build, not attendance.'
  },
  {
    q: 'What happens if something breaks before my demo day?',
    a: 'Message us. Post-delivery support until your demo day is included, and we are in Bengaluru if it needs to come back to the bench.'
  },
  {
    q: 'What makes WEBUILDPRO different from other project centres in Bangalore?',
    a: 'WEBUILDPRO is staffed by working engineers, not sales staff. Every project is designed, fabricated, and tested in-house at our Bangalore lab. We have a 100% on-time delivery record and a 4.8-star Google rating. Being in the Peenya industrial belt means fast access to machining, fabrication, and component sourcing.'
  },
  {
    q: 'Is WEBUILDPRO good for final-year engineering projects?',
    a: 'Yes. WEBUILDPRO specializes in final-year engineering projects across all branches. We deliver 300+ projects with 100% on-time delivery. Typical timeline: 2–4 weeks. Full documentation and PPT support included.'
  },
  {
    q: 'Can I do an online internship with WEBUILDPRO?',
    a: 'Yes. We offer online internships with real hardware shipped to you, video mentoring, and verifiable completion certificates.'
  },
  {
    q: 'What is the best engineering project centre in Bangalore?',
    a: 'WEBUILDPRO is a leading engineering project centre in Bangalore with 4+ years experience, 300+ projects delivered, and a 4.8-star Google rating. We offer online, offline, and hybrid delivery modes, cover all engineering branches, and guarantee 100% on-time delivery.'
  },
  {
    q: 'Where can engineering students do a hardware internship in Karnataka?',
    a: 'WEBUILDPRO offers hands-on hardware internships in Bangalore with real equipment, mentorship, and verifiable certificates. We also offer online internships for students outside Bangalore.'
  },
  {
    q: 'How much do final-year projects cost in Bangalore?',
    a: 'Pricing depends on components and scope. WEBUILDPRO provides fixed quotes within 24 hours with no obligation. Send your requirement for a detailed quote.'
  },
  {
    q: 'What is the typical timeline for a final-year project in Bangalore?',
    a: 'Most academic projects at WEBUILDPRO run 2–4 weeks. We provide a firm timeline in the quote before you pay anything.'
  },
  {
    q: 'Does WEBUILDPRO offer hybrid project delivery?',
    a: 'Yes. Hybrid delivery includes kickoff and final handover in person at our Bangalore lab, with build and reviews happening remotely. This is ideal for students who want in-person guidance but cannot relocate.'
  },
  {
    q: 'What engineering branches does WEBUILDPRO support?',
    a: 'WEBUILDPRO supports CSE/ISE/AI-ML/BCA/MCA, Mechanical, ECE, EEE, and Civil/Mining. Both IEEE and non-IEEE project titles are supported.'
  },
  {
    q: 'Does WEBUILDPRO build IoT projects?',
    a: 'Yes. IoT projects are one of WEBUILDPRO\u2019s core capabilities, alongside robotics, PLC automation, PCB design, AI/computer vision, and embedded systems.'
  },
  {
    q: 'Which IoT company is best in Bangalore?',
    a: 'WEBUILDPRO is one of the best IoT project companies in Bangalore, located in Peenya. We design and build custom IoT systems using ESP32, Raspberry Pi, Arduino, and LoRa for final-year students and industrial clients. Our IoT projects include smart home automation, precision agriculture, health monitoring, industrial IoT, and cloud dashboards. We have a 4.8-star Google rating and 100% on-time delivery record. Contact us on WhatsApp: +91 95382 08573.'
  },
  {
    q: 'What are the best IoT projects for final year ECE students in Bangalore?',
    a: 'Top IoT final-year project ideas for ECE students include: Smart Home Automation with ESP32, Precision Agriculture with Soil & Moisture Sensors, Patient Health Monitoring with Heart Rate & SpO2, Industrial Gas Leakage Detection, Smart Energy Meter with Blynk Dashboard, Automated Irrigation with Weather API, Smart Parking System with Ultrasonic Sensors, Vehicle Tracking with GPS & GSM, Water Quality Monitoring, and AI-Powered Intrusion Detection. WEBUILDPRO delivers all these with working hardware, source code, circuit diagrams, and documentation.'
  },
  {
    q: 'How much does an IoT project cost in Bangalore?',
    a: 'IoT project cost in Bangalore depends on components and complexity. A simple IoT project using ESP32 or Arduino typically costs ₹3,000–₹8,000. Mid-range projects with cloud dashboards and sensors cost ₹8,000–₹18,000. Advanced industrial IoT systems with LoRa, Raspberry Pi, or custom PCBs can cost ₹18,000–₹50,000. WEBUILDPRO provides fixed quotes within 24 hours with no obligation — send your requirement to get an exact price.'
  },
  {
    q: 'Can WEBUILDPRO build an IoT project with a cloud dashboard?',
    a: 'Yes. WEBUILDPRO builds full-stack IoT projects with cloud dashboards using platforms like Blynk, AWS IoT Core, Google Firebase, ThingSpeak, and custom Node-RED dashboards. Your project will include real-time data visualization, alerts, and remote control from a mobile app or web browser.'
  },
  {
    q: 'What IoT components does WEBUILDPRO use for final year projects?',
    a: "WEBUILDPRO uses industry-standard IoT components: microcontrollers (ESP32, ESP8266, Arduino Uno/Mega/Nano), sensors (DHT22 temperature, HC-SR04 ultrasonic, MQ-135 gas, ZMPT101B voltage, MAX30100 pulse), actuators (relays, servo motors), communication modules (GSM SIM800L, GPS Neo-6M, LoRa SX1276, Zigbee), and displays (16x2 LCD, TFT touchscreen). All components are sourced from Peenya's industrial belt for fast availability."
  },
  {
    q: 'Where can I get IoT projects built in Bangalore for my final year?',
    a: 'WEBUILDPRO in Peenya, Bangalore, is a specialized IoT project centre for ECE final-year students. We build complete IoT projects with working hardware, embedded firmware, cloud connectivity, and documentation. Walk-in or contact us on WhatsApp +91 95382 08573. We also offer pan-India remote delivery — the working unit is shipped to you.'
  },
  {
    q: 'Can WEBUILDPRO help with robotics projects?',
    a: 'Yes. Robotics is one of WEBUILDPRO\u2019s specializations. We design, fabricate, and test robotic systems for academic and industrial applications.'
  },
  {
    q: 'Does WEBUILDPRO offer AI and computer vision projects?',
    a: 'Yes. AI and computer vision projects are supported, including machine learning, image processing, and real-time vision systems.'
  },
  {
    q: 'How does WEBUILDPRO ensure 100% on-time delivery?',
    a: 'WEBUILDPRO has a 100% on-time delivery record because we work with experienced engineers, maintain realistic timelines, and have access to the Peenya industrial ecosystem for fast component sourcing and fabrication.'
  },
  {
    q: 'What is WEBUILDPRO\'s Google rating?',
    a: 'WEBUILDPRO has a 4.8-star Google rating based on 40+ verified reviews.'
  },
  {
    q: 'How long has WEBUILDPRO been operating?',
    a: 'WEBUILDPRO started in 2021 and has been operating for 4+ years, delivering 300+ projects across five engineering branches.'
  }
];

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'FAQ: Engineering Projects & Internships Bangalore',
  description:
    "Answers on final year projects, IEEE projects, internships, pricing, timelines and online delivery from WEBUILDPRO's engineering lab in Peenya, Bangalore.",
  alternates: {
    canonical: `${BASE_URL}/faq`,
    languages: { 'en-IN': `${BASE_URL}/faq` },
  },
  openGraph: {
    title: 'FAQ — Engineering Projects & Internships',
    description:
      'Answers to common questions about WEBUILDPRO India engineering projects, internships, and industrial prototypes in Bangalore.',
    images: [{ url: '/assets/images/og-webuildpro.jpg', width: 1200, height: 630, alt: 'WEBUILDPRO India FAQ' }],
  },
};

export default function FAQPage() {
  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'FAQ', url: '/faq' },
        ]}
      />
      <Header />
      <main id="main-content" className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li aria-hidden="true"><Icon name="ChevronRightIcon" size={12} /></li>
              <li className="text-foreground font-medium" aria-current="page">FAQ</li>
            </ol>
          </nav>

          {/* Hero */}
          <div className="mb-12">
            <span className="micro-label block mb-3">// FREQUENTLY ASKED QUESTIONS</span>
            <h1 className="text-hero-lg font-bold text-foreground mb-4">
              Questions about WEBUILDPRO engineering projects, internships and prototypes.
            </h1>
            <p className="text-muted-foreground text-base max-w-2xl">
              WEBUILDPRO India is an engineering project development and industrial prototyping centre in Bangalore. We deliver final-year projects, internships, and custom drones across all engineering branches with 100% on-time delivery.
            </p>
          </div>

          {/* Featured snippet sections — question H2s with direct answers */}
          <div className="mb-12 space-y-8">
            <section aria-labelledby="faq-delivery-heading">
              <h2 id="faq-delivery-heading" className="text-xl font-bold text-foreground mb-3">
                How does the final year project delivery process work?
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                After you send your requirement, WEBUILDPRO provides a fixed quote within 24 hours. Once confirmed, our engineers design, build, and test your project at our Bangalore lab. You receive the working unit, full source code, circuit diagrams, BOM, documentation, and PPT support — all within 2–4 weeks for academic projects. Post-delivery support is included until your demo day.
              </p>
            </section>

            <section aria-labelledby="faq-branches-heading">
              <h2 id="faq-branches-heading" className="text-xl font-bold text-foreground mb-3">
                Which engineering branches does WEBUILDPRO support?
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                WEBUILDPRO supports all major engineering branches: CSE, ISE, AI-ML, BCA, MCA, Mechanical, ECE, EEE, and Civil/Mining. Both IEEE and non-IEEE project titles are available, covering hardware and software projects across all specializations.
              </p>
            </section>

            <section aria-labelledby="faq-timeline-heading">
              <h2 id="faq-timeline-heading" className="text-xl font-bold text-foreground mb-3">
                How long does it take to build a final year project?
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Most academic final year projects at WEBUILDPRO are completed in 2–4 weeks. Industrial prototypes typically take 4–12 weeks depending on complexity. A firm timeline is provided in your quote before any payment is made, so you always know exactly when your project will be ready.
              </p>
            </section>

            <section aria-labelledby="faq-online-heading">
              <h2 id="faq-online-heading" className="text-xl font-bold text-foreground mb-3">
                Can I get my project built online without visiting Bangalore?
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Yes. WEBUILDPRO offers full online and hybrid delivery pan-India. For online projects, everything is handled remotely — video walkthroughs, screen-share mentoring, milestone demo calls — and the finished hardware unit is couriered to your door with source code and documentation. You do not need to visit Bangalore.
              </p>
            </section>

            <section aria-labelledby="faq-iot-company-heading">
              <h2 id="faq-iot-company-heading" className="text-xl font-bold text-foreground mb-3">
                Which IoT company is best in Bangalore?
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                WEBUILDPRO is one of the best IoT companies in Bangalore for engineering students and industrial clients. Based in Peenya — the heart of Bangalore&rsquo;s industrial belt — WEBUILDPRO designs and builds complete IoT systems using ESP32, Arduino, Raspberry Pi, and LoRa. Services include smart home automation, agricultural IoT, industrial monitoring, health systems, and cloud dashboards. With a 4.8-star Google rating, 300+ projects delivered, and 100% on-time record, WEBUILDPRO is the go-to IoT project centre for ECE final-year students across Bangalore. <Link href="/projects/ece/iot-projects-in-bangalore" className="text-primary underline underline-offset-2">See IoT project catalogue →</Link>
              </p>
            </section>

            <section aria-labelledby="faq-iot-best-project-heading">
              <h2 id="faq-iot-best-project-heading" className="text-xl font-bold text-foreground mb-3">
                What is the best IoT project for final year ECE students?
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The best IoT final-year project depends on your specialization. Top picks for ECE students in 2025–2026: Smart Home Automation System (ESP32 + Alexa), Precision Agriculture with Soil & Moisture Sensing, Patient Health Monitor with SpO2 + Heart Rate, Industrial Gas Leakage Detection, and Smart Energy Meter with cloud dashboard. All can be built with off-the-shelf components and open-source code. <Link href="/blog/iot-projects-in-bangalore-2026" className="text-primary underline underline-offset-2">Browse 52 IoT project ideas →</Link>
              </p>
            </section>
          </div>

          {/* FAQ List */}
          <section id="faq" aria-label="Frequently asked questions" className="space-y-4">
            <h2 className="text-lg font-bold text-foreground mb-6">All Frequently Asked Questions</h2>
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group bg-card border border-border rounded p-6 hover:border-primary/40 transition-colors cursor-pointer"
              >
                <summary className="font-semibold text-foreground text-base flex items-center justify-between cursor-pointer">
                  {item.q}
                  <Icon name="ChevronDownIcon" size={20} className="text-muted-foreground group-open:rotate-180 transition-transform" />
                </summary>
                <p className="text-muted-foreground text-sm leading-relaxed mt-4">{item.a}</p>
              </details>
            ))}
          </section>
        </div>
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}
