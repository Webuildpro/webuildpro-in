'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const WA_NUMBER = '919538208573';
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hi WEBUILDPRO, I want the full Civil project list with pricing and IEEE base papers.')}`;

// Civil projects grouped by domain — sourced from src/lib/data/projects.ts
const civilProjectGroups: { domain: string; projects: { title: string; overview: string }[] }[] = [
  {
    domain: 'Structural Engineering & Health Monitoring',
    projects: [
      {
        title: 'IoT Structural Health Monitoring for Bridges',
        overview: 'A wireless sensor network on a 1:20 scale bridge model measuring strain, deflection and vibration under controlled loading. STM32-based nodes transmit via LoRa to a gateway; a Python dashboard visualises real-time structural response and flags anomalies against an ANSYS FEM baseline.',
      },
      {
        title: 'Earthquake-Resistant Shear Wall Analysis',
        overview: 'A comparative FEM study in ETABS analysing seismic performance of a G+10 RC frame with three shear wall configurations (core, coupled, perimeter) under IS 1893 Zone III ground motion. Storey drift, base shear and ductility demand are compared across configurations.',
      },
    ],
  },
  {
    domain: 'Materials & Concrete Technology',
    projects: [
      {
        title: 'Self-Healing Concrete Study',
        overview: 'A comparative material study evaluating crack-healing efficiency in concrete specimens incorporating three healing agents: encapsulated sodium silicate, Bacillus subtilis bacterial spores, and polyurethane microcapsules. Crack width, compressive strength recovery and water permeability are measured at 7, 14 and 28 days post-cracking.',
      },
      {
        title: 'Pervious Concrete Mix Design Study',
        overview: 'A mix design investigation into pervious concrete using single-sized 10mm and 20mm aggregates with water-cement ratios of 0.30–0.38, measuring permeability coefficient, compressive strength and void ratio. Results are mapped against ASTM C1701 targets for stormwater infiltration applications.',
      },
    ],
  },
  {
    domain: 'Geotechnical Engineering',
    projects: [
      {
        title: 'Soil Stabilisation with Industrial Waste',
        overview: 'A laboratory investigation into stabilisation of expansive black cotton soil using fly ash, GGBS and lime at varying percentages. CBR, UCS, Atterberg limits and swell pressure are measured for each combination, establishing the optimal blend for sub-grade stabilisation in Karnataka road construction.',
      },
    ],
  },
  {
    domain: 'Transportation & Road Engineering',
    projects: [
      {
        title: 'Plastic-Waste-Modified Bituminous Road Study',
        overview: 'An experimental investigation into the effect of shredded LDPE plastic waste on Marshall stability and flow properties of bituminous concrete mixes. Mix designs with 0%, 4%, 8% and 12% plastic content are prepared, compacted and tested against VG-30 control mix benchmarks.',
      },
      {
        title: 'Traffic Volume & PCU Study with ML Classification',
        overview: 'A video-based traffic survey using a fixed camera and YOLOv8 object detection to automatically classify and count vehicles by type (2W, 3W, car, LCV, HCV, bus) at a selected intersection. PCU-weighted flow rates are computed and validated against manual classified counts.',
      },
    ],
  },
  {
    domain: 'Water Resources & Environmental Engineering',
    projects: [
      {
        title: 'GIS-Based Flood Risk Mapping',
        overview: 'A spatial analysis workflow in QGIS integrating DEM data, land use classification, drainage network topology and historical rainfall records to produce a multi-tier flood hazard map for an urban catchment. Sensitivity analysis quantifies how a 20% increase in imperviousness changes the 100-year flood extent.',
      },
      {
        title: 'Rainwater Harvesting Optimisation Model',
        overview: 'A site-specific water balance model for a 5,000m² commercial building rooftop catchment that optimises cistern sizing to maximise supply reliability across Bengaluru\'s bimodal monsoon pattern. Outputs a demand-reliability curve and a 20-year NPV analysis comparing harvesting against municipal supply costs.',
      },
    ],
  },
  {
    domain: 'Smart Infrastructure & IoT',
    projects: [
      {
        title: 'Smart Water Distribution Network',
        overview: 'An IoT-instrumented scale model of a water distribution network with pressure transducers and flow meters at six nodes, an ESP32 controller managing pump speed via VFD, and a SCADA interface that detects pipe burst events from pressure signature anomalies and isolates the affected zone within 3 seconds.',
      },
      {
        title: 'Mine Gas Detection & Alert System',
        overview: 'An underground mine safety system using MQ-series gas sensors (CO, CH4, H2S) and particulate sensors on a ruggedised ESP32 node, with a LoRa uplink to a surface control room. Triggers zone-specific audio/visual alarms and sends SMS alerts when gas concentrations exceed DGMS threshold limits.',
      },
    ],
  },
  {
    domain: 'Building Information Modelling (BIM)',
    projects: [
      {
        title: 'BIM 5D Cost Modelling',
        overview: 'A full Building Information Model of a G+3 residential structure in Revit, linked to a quantity take-off schedule and MS Project timeline to produce a 5D model that dynamically updates cost estimates when design parameters change. Clash detection reports and construction phasing animations are included.',
      },
    ],
  },
];

export default function CivilProjectListPage() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const totalProjects = civilProjectGroups.reduce((sum, g) => sum + g.projects.length, 0);

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
                src="/assets/images/og-webuildpro.jpg"
                alt="WEBUILDPRO India"
                width={56}
                height={56}
                className="rounded"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                  Civil Project List — WEBUILDPRO, Bangalore
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  {totalProjects} project titles across {civilProjectGroups.length} domains
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
              href="/projects/civil"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-5 py-2.5 rounded font-semibold text-sm hover:bg-gray-50 transition-colors"
            >
              ← Back to Civil Projects Page
            </Link>
          </div>

          {/* Project list grouped by domain */}
          <div className="space-y-8">
            {civilProjectGroups.map((group) => (
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

          {/* Print-only contact footer */}
          <div className="print-contact hidden print:block mt-8 pt-4 border-t border-gray-300 text-sm text-gray-700">
            <p>
              <strong>WEBUILDPRO</strong> · Final Year Project Centre, Bangalore ·{' '}
              <strong>+91 95382 08573</strong> · wa.me/919538208573 · webuildpro.in
            </p>
          </div>

          {/* WhatsApp CTA — hidden on print */}
          <div className="no-print mt-12 bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <p className="text-gray-800 font-semibold text-base mb-1">
              Want the full list with pricing and IEEE base papers?
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Message us on WhatsApp and we&apos;ll send you the complete Civil project catalogue with quotes.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-green-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us for Full Civil Project List
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
