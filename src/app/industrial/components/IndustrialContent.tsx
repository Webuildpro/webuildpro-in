import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';

const capabilities = [
{ icon: 'PaperAirplaneIcon' as const, title: 'Custom Drone Development', description: 'Survey, inspection, agricultural spraying and payload-carrying drones — airframe to telemetry.' },
{ icon: 'CubeIcon' as const, title: 'Warehouse Management Systems', description: 'RFID/IoT-based inventory tracking, automated dispatch systems and real-time stock dashboards.' },
{ icon: 'WifiIcon' as const, title: 'IoT & Remote Monitoring', description: 'Multi-node sensor networks with cloud dashboards, alerts and data logging for industrial environments.' },
{ icon: 'CpuChipIcon' as const, title: 'PLC & Industrial Automation', description: 'Siemens S7, Allen-Bradley and Delta PLC programming with SCADA/HMI integration.' },
{ icon: 'CogIcon' as const, title: 'Robotics & Motion Systems', description: 'Custom robotic arms, conveyor systems and motion platforms for manufacturing and research.' },
{ icon: 'EyeIcon' as const, title: 'AI / Computer Vision Inspection', description: 'Defect detection, OCR, object counting and quality inspection systems using YOLO and OpenCV.' },
{ icon: 'CircleStackIcon' as const, title: 'PCB Design & Fabrication', description: 'Schematic to assembled PCB — KiCad/Altium design, gerber generation, SMD assembly and testing.' },
{ icon: 'PrinterIcon' as const, title: '3D Printing & Rapid Prototyping', description: 'FDM, SLA and SLS prototyping for enclosures, jigs, fixtures and functional mechanical parts.' },
{ icon: 'RectangleGroupIcon' as const, title: 'Small-Batch Production', description: 'Quantities of 5–100 units with consistent quality — ideal for pilot deployments and field trials.' }];


const processSteps = [
{ step: '01', title: 'Requirement Study', desc: 'We understand your use case, operating environment, performance targets and constraints.' },
{ step: '02', title: 'Feasibility & BOM', desc: 'We validate technical feasibility, identify components and give you a fixed quote with timeline.' },
{ step: '03', title: 'CAD / PCB Design', desc: 'Mechanical drawings, PCB schematics and firmware architecture reviewed with you before fabrication starts.' },
{ step: '04', title: 'Build', desc: 'Fabrication, assembly and firmware development in our Bangalore lab with milestone progress updates.' },
{ step: '05', title: 'Test & Iterate', desc: 'Full functional testing at rated parameters. Revisions within agreed scope are included.' },
{ step: '06', title: 'Handover with IP Transfer', desc: 'Working unit, all design files, source code, BOM and full IP transfer on final payment.' }];


export default function IndustrialContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden blueprint-grid pt-24 pb-0 bg-background">
        <div className="absolute inset-0 opacity-25">
          <AppImage
            src="https://webuildpro.in/images/1e8db4b4b-1784552159372.png"
            alt="Industrial drone assembly on workbench at WEBUILDPRO Bangalore lab, precise components laid out, dim blue-tinted overhead lighting"
            fill
            sizes="100vw"
            className="object-cover" />
          
          <div className="absolute inset-0 bg-background/75" aria-hidden="true" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-0 w-full">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li aria-hidden="true"><Icon name="ChevronRightIcon" size={12} /></li>
              <li className="text-foreground font-medium" aria-current="page">Industrial Prototyping</li>
            </ol>
          </nav>
          <span className="micro-label block mb-3">// INDUSTRIAL & STARTUP PROTOTYPING</span>
          <h1 className="text-hero-lg font-bold text-foreground mb-4">
            FROM SPEC SHEET TO WORKING UNIT.
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl mb-8">
            Industrial prototype development in Bangalore — custom prototypes designed, fabricated and tested under NDA, delivered pan-India.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pb-12">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold">
              <Icon name="DocumentTextIcon" size={16} />
              Request an NDA Call
            </Link>
            <a
              href="https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%20need%20an%20industrial%20prototype%20and%20would%20like%20to%20discuss%20under%20NDA."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold">
              
              <Icon name="ChatBubbleLeftRightIcon" size={16} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <CircuitDivider />

      {/* Capability bento grid */}
      <section className="py-20 bg-secondary" aria-labelledby="capabilities-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="micro-label block mb-3">// WHAT WE BUILD</span>
            <h2 id="capabilities-heading" className="text-section-xl font-bold text-foreground">
              Nine capabilities. One lab in Bangalore.
            </h2>
          </div>

          {/* Desktop bento */}
          <div className="hidden md:grid grid-cols-3 gap-4">
            {/* CustomDrone — cs-2 rs-1 */}
            <div className="col-span-2 row-span-1 card-glow bg-background border border-border rounded p-6 relative overflow-hidden flex flex-col justify-between min-h-[200px]">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
                <AppImage
                  src="https://webuildpro.in/images/1e8db4b4b-1784552159372.png"
                  alt="Custom drone frame assembly on workbench at WEBUILDPRO Bangalore industrial lab"
                  fill
                  sizes="50vw"
                  className="object-cover" />
                
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" aria-hidden="true" />
              </div>
              <div className="relative z-10">
                <div className="w-10 h-10 rounded bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <Icon name="PaperAirplaneIcon" size={18} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{capabilities[0].title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">{capabilities[0].description}</p>
              </div>
            </div>

            {/* WMS — cs-1 rs-2 */}
            <div className="col-span-1 row-span-2 card-glow-cyan bg-card border border-border rounded p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                  <Icon name="CubeIcon" size={18} className="text-accent" />
                </div>
                <h3 className="font-bold text-foreground text-base mb-2">{capabilities[1].title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{capabilities[1].description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-border">
                <span className="chip-cyan text-xs">RFID</span>
                <span className="chip-cyan text-xs ml-2">MQTT</span>
                <span className="chip-cyan text-xs ml-2">Dashboard</span>
              </div>
            </div>

            {/* IoT */}
            <div className="card-glow bg-background border border-border rounded p-5 flex flex-col justify-between">
              <div className="w-9 h-9 rounded bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                <Icon name="WifiIcon" size={16} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm mb-1">{capabilities[2].title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{capabilities[2].description}</p>
              </div>
            </div>

            {/* PLC */}
            <div className="card-glow bg-background border border-border rounded p-5 flex flex-col justify-between">
              <div className="w-9 h-9 rounded bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                <Icon name="CpuChipIcon" size={16} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm mb-1">{capabilities[3].title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{capabilities[3].description}</p>
              </div>
            </div>

            {/* Robotics */}
            <div className="card-glow bg-background border border-border rounded p-5 flex flex-col justify-between">
              <div className="w-9 h-9 rounded bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                <Icon name="CogIcon" size={16} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm mb-1">{capabilities[4].title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{capabilities[4].description}</p>
              </div>
            </div>

            {/* AI Vision */}
            <div className="card-glow bg-background border border-border rounded p-5 flex flex-col justify-between">
              <div className="w-9 h-9 rounded bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                <Icon name="EyeIcon" size={16} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm mb-1">{capabilities[5].title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{capabilities[5].description}</p>
              </div>
            </div>

            {/* PCB */}
            <div className="card-glow bg-background border border-border rounded p-5 flex flex-col justify-between">
              <div className="w-9 h-9 rounded bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                <Icon name="CircleStackIcon" size={16} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm mb-1">{capabilities[6].title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{capabilities[6].description}</p>
              </div>
            </div>

            {/* 3D Print — cs-2 */}
            <div className="col-span-2 card-glow bg-card border border-border rounded p-5 flex items-center gap-5">
              <div className="w-9 h-9 rounded bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                <Icon name="PrinterIcon" size={16} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm mb-1">{capabilities[7].title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{capabilities[7].description}</p>
              </div>
            </div>

            {/* Small Batch */}
            <div className="card-glow bg-card border border-border rounded p-5 flex flex-col justify-between">
              <div className="w-9 h-9 rounded bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                <Icon name="RectangleGroupIcon" size={16} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm mb-1">{capabilities[8].title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{capabilities[8].description}</p>
              </div>
            </div>
          </div>

          {/* Mobile grid */}
          <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-3">
            {capabilities.map((cap) =>
            <div key={cap.title} className="card-glow bg-card border border-border rounded p-5">
                <div className="w-9 h-9 rounded bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
                  <Icon name={cap.icon} size={16} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground text-sm mb-1">{cap.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{cap.description}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <CircuitDivider />

      {/* Process */}
      <section className="py-20 bg-secondary" aria-labelledby="ind-process-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="micro-label block mb-3">// HOW IT WORKS</span>
            <h2 id="ind-process-heading" className="text-section-xl font-bold text-foreground">
              Six stages from requirement to handover.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {processSteps.map((s) =>
            <div key={s.step} className="card-glow bg-background border border-border rounded p-5">
                <span className="font-mono text-2xl font-bold text-primary/30 block mb-3">{s.step}</span>
                <h3 className="font-bold text-foreground text-sm mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <CircuitDivider />

      {/* Why Bangalore location matters */}
      <section className="py-16 bg-primary/5 border-y border-primary/20" aria-labelledby="location-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="micro-label block mb-3">// LOCATION ADVANTAGE</span>
            <h2 id="location-heading" className="text-section-xl font-bold text-foreground mb-4">
              Why our Bangalore location matters.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Our Bangalore facility sits inside the Peenya industrial estate — one of Asia&apos;s largest. Machining, sheet metal, anodising and component sourcing are minutes away, not weeks away. That&apos;s why our lead times are short.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {['CNC Machining nearby', 'Sheet metal fabrication', 'Component sourcing', 'Anodising & finishing'].map((item) =>
            <div key={item} className="bg-card border border-border rounded p-4 flex items-center gap-2">
                <Icon name="MapPinIcon" size={14} className="text-accent flex-shrink-0" />
                <span className="text-xs text-muted-foreground">{item}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <CircuitDivider />

      {/* Confidentiality */}
      <section className="py-16 bg-secondary" aria-labelledby="nda-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="micro-label block mb-3">// CONFIDENTIALITY</span>
          <h2 id="nda-heading" className="text-section-xl font-bold text-foreground mb-4">
            NDA-first. IP transfers to you. Nothing published.
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Industrial work is done under NDA from day one. Full IP transfers to you on final payment. We never publish client builds — which is why our Instagram shows student work only.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold">
            <Icon name="ShieldCheckIcon" size={16} />
            Request an NDA Call
          </Link>
        </div>
      </section>

      {/* Related services */}
      <section className="py-12 bg-background border-t border-border" aria-labelledby="related-ind-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 id="related-ind-heading" className="micro-label mb-6">// RELATED SERVICES</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
            { label: 'Engineering Projects in Bangalore', href: '/projects/cse' },
            { label: 'Engineering Internships', href: '/internships' },
            { label: 'About WEBUILDPRO', href: '/about' },
            { label: 'Contact Us', href: '/contact' }].
            map((link) =>
            <Link
              key={link.href}
              href={link.href}
              className="bg-card border border-border rounded p-3 text-xs text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
              
                {link.label}
              </Link>
            )}
          </div>
        </div>
      </section>
    </>);

}