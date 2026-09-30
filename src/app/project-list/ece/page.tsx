'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WA_NUMBER = '919538208573';
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi WEBUILDPRO, I want the full ECE project list with pricing and IEEE base papers.')}`;

// ECE projects grouped by domain — sourced from src/lib/data/projects.ts
const eceProjectGroups: { domain: string; projects: { title: string; overview: string }[] }[] = [
  {
    domain: 'Embedded Systems',
    projects: [
      { title: 'RFID-Based Smart Trolley & Human-Following Cart', overview: 'A shopping/warehouse cart that auto-bills items via RFID and follows the user using sensors.' },
      { title: 'Digital Taxi Faremeter', overview: 'An electronic fare meter that calculates trip cost from distance and time using microcontroller-based sensing.' },
      { title: 'Automated Smart Toll Tax System', overview: 'An RFID/ANPR-based toll booth that automatically identifies vehicles and deducts toll without stopping.' },
      { title: 'Colour-Sorting Robotic Arm', overview: 'A robotic arm with a colour sensor that identifies and sorts objects by colour into bins.' },
      { title: 'Remote-Controlled Robotic Arm', overview: 'A multi-axis robotic arm controlled wirelessly for pick-and-place and precision tasks.' },
      { title: 'Weight Counter & Segregator', overview: 'An automated conveyor system that weighs items and segregates them by weight range using load cells and actuators.' },
      { title: 'Pick-and-Place Robotic Arm (with Customization)', overview: 'A programmable robotic arm for automated pick-and-place operations, customisable for different payloads and paths.' },
      { title: 'Automated Bottle Filling Machine', overview: 'A conveyor-based system that positions, fills and caps bottles automatically using sensors and actuators.' },
    ],
  },
  {
    domain: 'IoT',
    projects: [
      { title: 'IoT-Powered Smart Crop System', overview: 'An automated farming system that monitors soil moisture, temperature and humidity, and controls irrigation through an IoT dashboard.' },
      { title: 'IoT Food Spoilage Detector', overview: 'A sensor unit that detects gases released by spoiling food and alerts users via an IoT app.' },
      { title: 'IoT-Based Patient Health Monitoring System', overview: 'Continuously monitors heart rate, temperature and SpO2, streaming vitals to doctors over IoT with threshold alerts.' },
      { title: 'Smart Aquarium', overview: 'Automates fish feeding, water temperature, and cleaning with sensor feedback and IoT control.' },
      { title: 'Groundwater Prediction & Saver', overview: 'Uses sensors and data logic to predict groundwater levels and optimise usage, alerting on over-extraction.' },
      { title: 'Smart Water Purifier', overview: 'An IoT-enabled purifier that monitors water quality (TDS, pH) in real time and controls filtration stages automatically.' },
      { title: 'IoT-Based Smart Soldier Health Monitoring System', overview: 'A wearable that tracks a soldier\'s vitals and GPS location, transmitting data to a command base over IoT.' },
      { title: 'IoT-Based Real-Time Battery Monitoring System', overview: 'Monitors battery voltage, current, temperature and state-of-charge in real time, sending alerts over IoT to prevent failures.' },
      { title: 'Energy Monitoring System', overview: 'Measures and logs power consumption of appliances/loads in real time, helping identify energy waste.' },
      { title: 'Industrial Automation System with IIoT', overview: 'A PLC/microcontroller-driven automation line monitored and controlled through Industrial IoT, with live status and fault alerts.' },
      { title: 'Industrial Safety-Based IIoT Monitoring System', overview: 'Monitors temperature, gas, vibration and electrical parameters across a plant, triggering safety alerts and shutdowns over Industrial IoT.' },
    ],
  },
  {
    domain: 'Drone & UAV',
    projects: [
      { title: 'Smart Agriculture Drone for Pesticide Detection (IoT)', overview: 'An aerial drone that surveys crop fields and uses onboard sensors to detect pesticide levels, sending live data to an IoT dashboard.' },
      { title: 'Smart Drone-Rover Hybrid (Flies & Drives) with IoT', overview: 'A hybrid vehicle that both flies like a drone and drives on wheels like a rover, switching modes on command, with IoT-based control.' },
      { title: 'Autonomous Drone for Inventory Management', overview: 'A warehouse drone that flies fixed routes to scan and count stock via barcodes/RFID, syncing counts to an inventory system.' },
    ],
  },
  {
    domain: 'Robotics & Automation',
    projects: [
      { title: 'Surgery Replica Robotic System with IoT', overview: 'A precision robotic arm that mirrors a surgeon\'s hand movements in real time, with IoT connectivity for remote operation and monitoring.' },
      { title: 'IoT-Based Food Delivery Robot', overview: 'An autonomous robot that navigates to deliver food within a defined area, controlled and tracked over IoT.' },
      { title: 'Smart Chemical Rover', overview: 'A remotely operated rover that detects and monitors hazardous chemicals/gases in unsafe environments, relaying readings wirelessly.' },
      { title: 'Smart Agriculture Rover', overview: 'A ground rover that performs sowing, spraying and soil monitoring autonomously, controlled through an app.' },
      { title: 'Autonomous Delivery IoT Robot', overview: 'A self-navigating delivery robot using obstacle avoidance and path planning, with IoT tracking.' },
      { title: 'Autonomous Spare-Part Delivery Robot for Factories', overview: 'An indoor autonomous robot that ferries spare parts between stations inside a factory using line/marker navigation.' },
      { title: 'Defense Missile Detector & Auto-Launcher', overview: 'A radar/sensor-based system that detects incoming threats and triggers an automated counter-launch mechanism.' },
    ],
  },
  {
    domain: 'Sensor Networks',
    projects: [
      { title: '3D Scanning System', overview: 'Captures the geometry of a physical object and reconstructs a digital 3D model using sensors and rotational scanning.' },
      { title: 'Solar Tracking System', overview: 'A dual-axis system that rotates a solar panel to follow the sun, maximising energy capture versus a fixed panel.' },
    ],
  },
  {
    domain: 'RF & Wireless',
    projects: [
      { title: 'Wireless EV Charging Station with RFID', overview: 'A contactless electric-vehicle charging pad that uses inductive power transfer and RFID for user authentication and billing.' },
    ],
  },
];

export default function ECEProjectListPage() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const totalProjects = eceProjectGroups.reduce((sum, g) => sum + g.projects.length, 0);

  return (
    <>
      <style>{`
        @media print {
          header, nav, footer,
          .no-print,
          [data-whatsapp-float],
          [data-mobile-bar] {
            display: none !important;
          }
          body {
            background: #fff !important;
            color: #000 !important;
            font-size: 11pt;
          }
          .print-page {
            max-width: 100% !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          .print-heading {
            border-bottom: 2px solid #000;
            padding-bottom: 8pt;
            margin-bottom: 16pt;
          }
          .print-group {
            break-inside: avoid;
            margin-bottom: 18pt;
          }
          .print-group-title {
            font-size: 12pt;
            font-weight: 700;
            border-bottom: 1px solid #ccc;
            padding-bottom: 4pt;
            margin-bottom: 8pt;
          }
          .print-item {
            margin-bottom: 6pt;
            padding-left: 12pt;
          }
          .print-item-title {
            font-weight: 600;
            font-size: 10.5pt;
          }
          .print-item-desc {
            font-size: 9.5pt;
            color: #444;
          }
          .print-contact {
            margin-top: 24pt;
            border-top: 1px solid #ccc;
            padding-top: 8pt;
            font-size: 10pt;
          }
        }
      `}</style>

      <div className="min-h-screen bg-white text-gray-900 print-page">
        <div className="max-w-4xl mx-auto px-6 py-8">

          {/* Header */}
          <div className="print-heading flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-gray-800 pb-6 mb-8">
            <div className="flex items-center gap-4">
              <Image
                src="/assets/images/wbinlogo-1786121366410.jpeg"
                alt="WEBUILDPRO India"
                width={56}
                height={56}
                className="rounded"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                  ECE Project List — WEBUILDPRO, Bangalore
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  {totalProjects} project titles across {eceProjectGroups.length} domains
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-gray-700 no-print">
              <a href="tel:+919538208573" className="font-semibold hover:text-green-700">
                📞 +91 95382 08573
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 font-semibold hover:underline"
              >
                💬 WhatsApp Us
              </a>
            </div>
            {/* Print-only contact line */}
            <div className="hidden print:block text-sm text-gray-700">
              <span className="font-semibold">📞 +91 95382 08573</span>
              {' · '}
              <span>wa.me/919538208573</span>
              {' · '}
              <span>webuildpro.in</span>
            </div>
          </div>

          {/* Action buttons — hidden on print */}
          <div className="no-print flex flex-wrap gap-3 mb-8">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded font-semibold text-sm hover:bg-gray-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              Download as PDF
            </button>
            <Link
              href="/projects/ece"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-5 py-2.5 rounded font-semibold text-sm hover:bg-gray-50 transition-colors"
            >
              ← Back to ECE Projects Page
            </Link>
          </div>

          {/* Project list grouped by domain */}
          <div className="space-y-8">
            {eceProjectGroups.map((group) => (
              <div key={group.domain} className="print-group">
                <h2 className="print-group-title text-lg font-bold text-gray-900 border-b border-gray-300 pb-2 mb-4">
                  {group.domain}
                </h2>
                <ol className="space-y-3">
                  {group.projects.map((project, idx) => (
                    <li key={project.title} className="print-item flex gap-3">
                      <span className="text-gray-400 font-mono text-sm w-6 flex-shrink-0 pt-0.5">{idx + 1}.</span>
                      <div>
                        <p className="print-item-title font-semibold text-gray-900 text-sm">{project.title}</p>
                        <p className="print-item-desc text-gray-600 text-sm mt-0.5">{project.overview}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          {/* CTA — hidden on print */}
          <div className="no-print mt-12 bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <p className="text-gray-800 font-semibold text-base mb-1">
              Want the full list with pricing and IEEE base papers?
            </p>
            <p className="text-gray-600 text-sm mb-4">Message us on WhatsApp — we reply within minutes.</p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded font-semibold text-sm hover:bg-green-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Message on WhatsApp
            </a>
          </div>

          {/* Print-only contact footer */}
          <div className="print-contact hidden print:block mt-8 pt-4 border-t border-gray-300 text-sm text-gray-700">
            <strong>WEBUILDPRO, Bangalore</strong> · +91 95382 08573 · wa.me/919538208573 · webuildpro.in
            <br />
            <em>Want the full list with pricing and IEEE base papers? Message us on WhatsApp.</em>
          </div>

        </div>
      </div>
    </>
  );
}
