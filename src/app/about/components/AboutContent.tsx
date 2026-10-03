import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';

const stats = [
{ value: '300+', label: 'Projects Delivered' },
{ value: '4+', label: 'Years Operating' },
{ value: '5', label: 'Engineering Branches' },
{ value: '4.8★', label: 'Google Rating' }];


const workspacePhotos = [
{
  src: "/images/1cf73093f-1784552159557.webp",
  alt: 'Engineer at electronics workbench with oscilloscope and PCB test setup at WEBUILDPRO Bangalore lab'
},
{
  src: 'https://images.unsplash.com/photo-1527856342297-209784df2c43',
  alt: 'Close-up of circuit board with SMD components, dark background, precision soldering at WEBUILDPRO Bangalore'
},
{
  src: "/images/103406215-1784552159060.webp",
  alt: 'Drone frame assembly on workbench, carbon fibre arms and motor mounts at WEBUILDPRO Bangalore workshop'
},
{
  src: "/images/1d0b78d8c-1766165853310.webp",
  alt: 'Robotic arm steel components laid out on engineering workbench at WEBUILDPRO Bangalore'
},
{
  src: '/images/19ad06f89-1777065811253.webp',
  alt: '3D printer producing a component in orange filament at WEBUILDPRO industrial prototyping lab in Bangalore'
},
{
  src: "/images/1cf73093f-1784552159557.webp",
  alt: 'PCB assembly line with components and soldering station at WEBUILDPRO engineering workshop in Bangalore'
}];

const keyFacts = [
{ label: 'Name', value: 'WEBUILDPRO India' },
{ label: 'Type', value: 'Engineering project development, internship & industrial prototyping centre' },
{ label: 'Location', value: 'Peenya 2nd Stage, Bengaluru (Bangalore), Karnataka 560058, India' },
{ label: 'Serves', value: 'All of Karnataka and pan-India (online + offline delivery)' },
{ label: 'Founded', value: '2021 (4+ years operating)' },
{ label: 'Track record', value: '300+ projects delivered, 100% on-time delivery' },
{ label: 'Branches covered', value: 'CSE/ISE/AI-ML/BCA/MCA, ECE, EEE, Mechanical, Civil/Mining' },
{ label: 'Delivery modes', value: 'Offline (in-person at Bangalore lab), Online (remote, pan-India), Hybrid' },
{ label: 'Rating', value: '4.8 on Google (40+ reviews)' },
{ label: 'Typical project timeline', value: '2–4 weeks for academic projects, 4–12 weeks for industrial prototypes' },
{ label: 'Deliverables', value: 'Working unit, full source code, circuit diagrams, BOM, documentation, PPT support' },
{ label: 'Internship certificate', value: 'Yes, verifiable completion certificate earned on real build' },
{ label: 'Post-delivery support', value: 'Included until demo day' },
{ label: 'Confidentiality', value: 'Industrial work done under NDA, IP transfers to client' }];



export default function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-background blueprint-grid" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li aria-hidden="true"><Icon name="ChevronRightIcon" size={12} /></li>
              <li className="text-foreground font-medium" aria-current="page">About</li>
            </ol>
          </nav>
          <span className="micro-label block mb-3">// ABOUT US</span>
          <h1 id="about-heading" className="text-hero-lg font-bold text-foreground mb-4">
            An engineering company in Bangalore.
            <br />
            <span className="text-gradient-orange">Working engineers, not sales staff.</span>
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl">
            WEBUILDPRO India started in 2021 with a single workbench in Bangalore and a straightforward premise: build hardware that actually works, hand it over with full documentation, and teach the client to defend every design decision in it. We work out of a lab in the Peenya industrial belt in Bangalore, surrounded by the machining and fabrication ecosystem that makes fast hardware iteration possible.
          </p>
        </div>
      </section>
      <CircuitDivider />
      {/* Story */}
      <section className="py-16 bg-secondary" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className="micro-label block mb-3">// THE STORY</span>
            <h2 id="story-heading" className="text-section-xl font-bold text-foreground mb-6">
              Four years. One address. Three hundred builds.
            </h2>
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                We set up in Bangalore because Bangalore is where things get made. CNC shops, sheet metal fabricators, anodising lines, component distributors — they&apos;re minutes away, not weeks away. That proximity is a direct competitive advantage for our clients.
              </p>
              <p>
                Our team is engineers who build. Not sales executives who subcontract. Every project that goes out of this lab has been designed, fabricated and tested by the same person who will walk you through it on handover day.
              </p>
              <p>
                We work across five engineering branches — CSE/AI/ML, Mechanical, ECE, EEE and Civil — and we run a parallel industrial capability for companies and startup founders who need prototypes built under NDA. The discipline required for confidential commercial work is the same discipline every student project gets.
              </p>
              <p>
                Four years in, we&apos;ve delivered over 300 projects with a 100% on-time record and a 4.8-star Google rating. We&apos;re not the cheapest option in Bengaluru. We&apos;re the option that works on demo day.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats?.map((s) =>
            <div key={s?.label} className="card-glow bg-background border border-border rounded p-6 text-center">
                <div className="font-mono text-3xl font-bold text-primary mb-2">{s?.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{s?.label}</div>
              </div>
            )}
          </div>
        </div>
      </section>
      <CircuitDivider />
      {/* Founder Bio — E-E-A-T */}
      <section className="py-16 bg-background" aria-labelledby="founder-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="micro-label block mb-3">// FOUNDER</span>
          <h2 id="founder-heading" className="text-section-xl font-bold text-foreground mb-8">
            Who is behind WEBUILDPRO?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Chyavan</strong> is the founder of WEBUILDPRO India. An electronics and embedded systems engineer based in Bangalore, Chyavan started WEBUILDPRO in 2021 after years of hands-on work in hardware prototyping, PCB design, and IoT systems development. He identified a clear gap: engineering students needed a reliable, technically rigorous partner to build and defend real projects — not a vendor who outsourced the work.
              </p>
              <p>
                Chyavan leads every project that leaves the WEBUILDPRO lab. His background spans embedded C, RTOS, PCB layout, drone systems, PLC automation, and AI-based computer vision — the same domains WEBUILDPRO delivers for students and industrial clients. He has personally overseen 300+ project builds across CSE, ECE, EEE, Mechanical, and Civil engineering branches since 2021.
              </p>
              <p>
                The lab is located in Peenya 2nd Stage, Bengaluru — in the heart of Karnataka&apos;s industrial manufacturing belt — giving WEBUILDPRO direct access to CNC machining, PCB fabrication, and component sourcing that most project centres cannot match. Chyavan&apos;s philosophy is simple: every project that goes out of this lab must work on demo day, and the student must be able to explain every design decision in it.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['Embedded Systems', 'PCB Design', 'IoT', 'Drone Development', 'PLC Automation', 'AI / Computer Vision', 'RTOS', 'Hardware Prototyping']?.map((skill) => (
                  <span key={skill} className="text-xs px-3 py-1 rounded border border-primary/30 bg-primary/5 text-primary font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-card border border-border rounded p-6 space-y-4">
              <div className="text-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-3">
                  <Icon name="UserCircleIcon" size={40} className="text-primary" />
                </div>
                <div className="font-bold text-foreground text-lg">Chyavan</div>
                <div className="text-xs text-muted-foreground mt-1">Founder, WEBUILDPRO India</div>
              </div>
              <div className="space-y-3 text-xs text-muted-foreground">
                <div className="flex items-start gap-2">
                  <Icon name="MapPinIcon" size={12} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Bangalore, Karnataka, India</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="AcademicCapIcon" size={12} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>Electronics &amp; Embedded Systems Engineer</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="BriefcaseIcon" size={12} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>4+ years, 300+ projects delivered</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon name="StarIcon" size={12} className="text-accent flex-shrink-0 mt-0.5" />
                  <span>4.8★ Google rating</span>
                </div>
              </div>
              <a
                href="https://wa.me/919538208573?text=Hi%20Chyavan%2C%20I%20want%20to%20discuss%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-green-600 hover:bg-green-500 text-white text-xs font-semibold transition-colors mt-2"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={14} />
                Message Chyavan on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      <CircuitDivider />
      {/* Key Facts Block */}
      <section className="py-16 bg-background" aria-labelledby="key-facts-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="micro-label block mb-3">// KEY FACTS</span>
          <h2 id="key-facts-heading" className="text-section-xl font-bold text-foreground mb-8">
            WEBUILDPRO at a glance.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {keyFacts?.map((fact, index) =>
            <div key={index} className="bg-card border border-border rounded p-4">
                <div className="text-xs text-accent uppercase tracking-wider font-semibold mb-2">{fact?.label}</div>
                <p className="text-sm text-foreground leading-relaxed">{fact?.value}</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <CircuitDivider />
      {/* Bangalore/Peenya advantage */}
      <section className="py-16 bg-primary/5 border-y border-primary/20" aria-labelledby="location-adv-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="micro-label block mb-3">// LOCATION ADVANTAGE</span>
          <h2 id="location-adv-heading" className="text-section-xl font-bold text-foreground mb-4">
            Why our Bangalore location matters.
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl mb-8">
            We work out of a lab in the Peenya industrial belt in Bangalore, surrounded by the machining and fabrication ecosystem that makes fast hardware iteration possible. Every process our clients need is available within a 2km radius of our lab. Both &ldquo;Bangalore&rdquo; and &ldquo;Bengaluru&rdquo; refer to the same city — our address is Peenya 2nd Stage, Bengaluru 560058.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
            'CNC Machining',
            'Sheet Metal',
            'Anodising',
            'Component Sourcing',
            'PCB Fabrication',
            'Laser Cutting',
            'Injection Moulding',
            'Welding & Fabrication']?.
            map((item) =>
            <div key={item} className="bg-card border border-border rounded p-3 flex items-center gap-2">
                <Icon name="MapPinIcon" size={12} className="text-accent flex-shrink-0" />
                <span className="text-xs text-muted-foreground">{item}</span>
              </div>
            )}
          </div>
        </div>
      </section>
      <CircuitDivider />
      {/* Workspace photos */}
      <section className="py-16 bg-background" aria-labelledby="workspace-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="micro-label block mb-3">// THE LAB</span>
          <h2 id="workspace-heading" className="text-section-xl font-bold text-foreground mb-8">
            Come and see the bench.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
            {workspacePhotos?.map((photo, i) =>
            <div key={i} className="aspect-video overflow-hidden rounded border border-border">
                <AppImage
                src={photo?.src}
                alt={photo?.alt}
                width={600}
                height={400}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              
              </div>
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            You&apos;re welcome to visit our Bangalore lab.{' '}
            <a
              href="https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%27d%20like%20to%20visit%20the%20lab."
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors underline">
              
              Message us on WhatsApp first
            </a>{' '}
            so an engineer is free to walk you through it.
          </p>
        </div>
      </section>
      <CircuitDivider />
      {/* Map + contact */}
      <section className="py-16 bg-secondary" aria-labelledby="location-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <span className="micro-label block mb-3">// FIND US</span>
            <h2 id="location-heading" className="text-section-xl font-bold text-foreground mb-6">
              Our Bangalore workshop.
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <Icon name="MapPinIcon" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <address className="not-italic">
                  WEBUILDPRO INDIA<br />
                  Peenya 2nd Stage<br />
                  Bengaluru – 560058<br />
                  Karnataka, India
                </address>
              </div>
              <a
                href="tel:+919538208573"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                
                <Icon name="PhoneIcon" size={16} className="text-primary" />
                +91 95382 08573
              </a>
              <a
                href="https://wa.me/919538208573"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                
                <Icon name="ChatBubbleLeftRightIcon" size={16} className="text-primary" />
                WhatsApp Us
              </a>
              <a
                href="https://www.instagram.com/webuildpro/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                @webuildpro on Instagram
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Icon name="ClockIcon" size={16} className="text-primary" />
                Mon–Sat, 10 AM – 7 PM IST
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="https://g.co/kgs/zgjqv4M"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold">
                
                <Icon name="MapPinIcon" size={14} />
                Get Directions
              </a>
              <Link href="/contact" className="btn-ghost inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium">
                <Icon name="DocumentTextIcon" size={14} />
                Get a Quote
              </Link>
            </div>
          </div>
          <div className="rounded overflow-hidden border border-border">
            <iframe
              src="https://maps.google.com/maps?q=WEBUILDPRO+Peenya+Bangalore&z=17&output=embed"
              width="100%"
              height="360"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="WEBUILDPRO India — Peenya 2nd Stage, Bengaluru" />
            
          </div>
        </div>
      </section>
      <CircuitDivider />
      {/* Instagram Feed — lazy-loaded */}
      <section className="py-16 bg-secondary" aria-labelledby="instagram-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <span className="micro-label block mb-3">// ON INSTAGRAM</span>
              <h2 id="instagram-heading" className="text-section-xl font-bold text-foreground">
                5,400+ followers watching us build.
              </h2>
              <p className="text-muted-foreground text-sm mt-2 max-w-xl">
                Every project that leaves our lab gets documented. Follow along to see student builds, drone assemblies, PCB work and industrial prototypes in progress.
              </p>
            </div>
            <a
              href="https://www.instagram.com/webuildpro/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow WEBUILDPRO on Instagram"
              className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded border border-primary/40 bg-primary/10 text-primary text-sm font-semibold hover:bg-primary/20 transition-colors">

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              Follow @webuildpro
            </a>
          </div>
          {/* 9-thumbnail grid — each links to profile, images lazy-loaded */}
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-2 mb-6">
            {[
            { src: '/images/1ae1b3938-1767521812037.webp', alt: 'PCB assembly close-up at WEBUILDPRO Bangalore lab, blue LED indicators on dark background' },
            { src: "/images/1e8db4b4b-1784552159372.webp", alt: 'Quadcopter drone frame assembly on workbench at WEBUILDPRO engineering lab in Bangalore' },
            { src: "https://images.unsplash.com/photo-1663355176396-31843c79e396", alt: 'Electronic circuit board with SMD components, close macro shot, dark background, WEBUILDPRO Bangalore' },
            { src: 'https://images.unsplash.com/photo-1735494034924-f4fd13af1cea', alt: 'Robotic arm mechanical assembly in workshop, steel components, WEBUILDPRO Bangalore' },
            { src: "/images/1cf73093f-1784552159557.webp", alt: 'Engineer working at electronics lab bench with oscilloscope at WEBUILDPRO Bangalore facility' },
            { src: '/images/19ad06f89-1777065811253.webp', alt: '3D printer in operation with orange filament at WEBUILDPRO industrial prototyping lab in Bangalore' },
            { src: '/images/103406215-1784552159060.webp', alt: 'Drone frame assembly on workbench, carbon fibre arms and motor mounts at WEBUILDPRO Bangalore workshop' },
            { src: "/images/1d0b78d8c-1766165853310.webp", alt: 'Robotic arm steel components laid out on engineering workbench at WEBUILDPRO Bangalore' },
            { src: "/images/1cf73093f-1784552159557.webp", alt: 'PCB assembly line with components and soldering station at WEBUILDPRO engineering workshop in Bangalore' }]?.
            map((img, i) =>
            <a
              key={i}
              href="https://www.instagram.com/webuildpro/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View on Instagram: ${img?.alt}`}
              className="aspect-square overflow-hidden rounded border border-border group block">
              
                <AppImage
                src={img?.src}
                alt={img?.alt}
                width={200}
                height={200}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              
              </a>
            )}
          </div>
          <p className="text-xs text-muted-foreground text-center">
            Images from our Bangalore lab — follow{' '}
            <a
              href="https://www.instagram.com/webuildpro/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors">
              
              @webuildpro
            </a>{' '}
            for live updates.
          </p>
        </div>
      </section>
      {/* Related services */}
      <section className="py-12 bg-background border-t border-border" aria-labelledby="related-services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 id="related-services-heading" className="micro-label mb-6">// RELATED SERVICES</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
            { label: 'Engineering Projects in Bangalore', href: '/projects/cse' },
            { label: 'Industrial Prototype Development', href: '/industrial' },
            { label: 'Engineering Internships', href: '/internships' },
            { label: 'Contact Us', href: '/contact' }]?.
            map((link) =>
            <Link
              key={link?.href}
              href={link?.href}
              className="bg-card border border-border rounded p-3 text-xs text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
              
                {link?.label}
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );

}