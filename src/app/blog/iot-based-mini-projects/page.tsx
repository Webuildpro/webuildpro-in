'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
import LazyPageExtras from '@/components/LazyPageExtras';
import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';
import { trackEvent } from '@/lib/analytics';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';
const SLUG = 'iot-based-mini-projects';
const WA_LINK =
  'https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%20want%20an%20IoT%20mini%20project%20%E2%80%94%20can%20you%20help%3F';

const tocItems = [
  { id: 'what-is-iot-mini-project', label: 'What Is an IoT Mini Project?' },
  { id: 'how-to-make-iot-mini-project', label: 'How to Make an IoT Mini Project' },
  { id: 'components-needed', label: 'Components You\'ll Usually Need' },
  { id: 'best-iot-mini-project-ideas', label: 'Best IoT Mini Project Ideas' },
  { id: 'ready-to-buy', label: 'Ready-to-Buy IoT Mini Projects' },
  { id: 'how-to-order', label: 'How to Order' },
  { id: 'contact-form', label: 'Enquire / Buy' },
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  honeypot: string;
}
const initialForm: FormData = { name: '', phone: '', email: '', message: '', honeypot: '' };

function InlineContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = 'Enter a valid 10-digit Indian mobile number';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Enter a valid email address';
    if (!form.message.trim()) e.message = 'Required';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return;
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setServerError('');
    setLoading(true);

    const payload = JSON.stringify({
      name: form.name,
      phone: form.phone,
      email: form.email,
      message: form.message,
      userType: 'Student',
      branch: 'ECE',
      sourcePage: `/blog/${SLUG}`,
    });

    try {
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
      }).catch(() => {});
    } catch {
      setLoading(false);
      setServerError('No internet connection. Please check your connection and try again.');
      return;
    }

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      trackEvent('contact_form_submit', { page: `/blog/${SLUG}`, branch: 'ECE', userType: 'Student' });
    }, 300);
  };

  const ic = (field: keyof FormData) =>
    `input-base w-full px-4 py-3 text-sm ${errors[field] ? 'border-primary' : ''}`;

  if (success) {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckBadgeIcon" size={28} className="text-primary" />
        </div>
        <h3 className="text-lg font-bold text-foreground mb-2">Got it!</h3>
        <p className="text-muted-foreground text-sm mb-5">An engineer will contact you within 24 hours.</p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
        >
          <Icon name="ChatBubbleLeftRightIcon" size={16} />
          WhatsApp Us Instead
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="IoT mini project enquiry form">
      <input
        type="text"
        name="website"
        value={form.honeypot}
        onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="iot-name">
            Full Name *
          </label>
          <input
            id="iot-name"
            type="text"
            placeholder="Ravi Kumar"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={ic('name')}
          />
          {errors.name && <p className="text-xs text-primary mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="iot-phone">
            Phone / WhatsApp *
          </label>
          <input
            id="iot-phone"
            type="tel"
            placeholder="9876543210"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={ic('phone')}
          />
          {errors.phone && <p className="text-xs text-primary mt-1">{errors.phone}</p>}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="iot-email">
          Email *
        </label>
        <input
          id="iot-email"
          type="email"
          placeholder="ravi@example.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={ic('email')}
        />
        {errors.email && <p className="text-xs text-primary mt-1">{errors.email}</p>}
      </div>
      <div className="mb-6">
        <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="iot-message">
          IoT Project Title / Requirement *
        </label>
        <textarea
          id="iot-message"
          rows={4}
          placeholder="e.g. IoT Gas Leakage Detection System — need it built and tested with documentation"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${ic('message')} resize-none`}
        />
        {errors.message && <p className="text-xs text-primary mt-1">{errors.message}</p>}
      </div>
      {serverError && (
        <p className="text-sm text-primary mb-4">
          {serverError}{' '}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline">
            WhatsApp us instead
          </a>
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full py-3.5 text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <span
              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
              aria-hidden="true"
            />
            Sending…
          </>
        ) : (
          <>
            <Icon name="PaperAirplaneIcon" size={16} />
            Send Enquiry
          </>
        )}
      </button>
    </form>
  );
}

export default function IoTMiniProjectsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <Icon name="ChevronRightIcon" size={12} />
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">
                <Icon name="ChevronRightIcon" size={12} />
              </li>
              <li className="text-foreground font-medium truncate max-w-xs" aria-current="page">
                IoT Based Mini Projects
              </li>
            </ol>
          </nav>

          {/* Article header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {['IoT Projects', 'Mini Projects', 'ECE', 'Arduino & ESP32'].map((tag) => (
                <span key={tag} className="chip-cyan text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-hero-lg font-bold text-foreground mb-3 leading-tight">
              IoT Based Mini Projects (2026): Ideas, Steps &amp; Ready Kits
            </h1>
            <p className="text-muted-foreground text-sm mb-4">Last updated: September 2026</p>
            <p className="text-muted-foreground text-base mb-6">
              30+ IoT based mini projects for engineering students with steps, components &amp; descriptions. Buy
              working IoT mini projects in Bangalore. WhatsApp{' '}
              <a href="tel:+919538208573" className="text-accent hover:underline">
                +91 95382 08573
              </a>
              .
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono border-t border-border pt-4">
              <span>WEBUILDPRO India</span>
              <span>·</span>
              <span>September 2026</span>
              <span>·</span>
              <span>15 min read</span>
            </div>
          </header>

          {/* Mobile TOC */}
          <div className="lg:hidden mb-8 bg-card border border-border rounded p-4">
            <h2 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">
              Table of Contents
            </h2>
            <nav aria-label="Table of contents">
              <ul className="space-y-2">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Article content */}
            <article className="lg:col-span-3">
              {/* Intro */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Looking for <strong className="text-foreground">IoT based mini projects</strong> for your engineering
                course? IoT (Internet of Things) mini projects are among the most popular choices for 1st to 6th
                semester students because they&apos;re affordable, easy to demonstrate, and use real sensors and live
                data. In this guide you&apos;ll find 30+ IoT based mini project ideas with descriptions, a simple
                step-by-step method to build one, and the components you&apos;ll need. And if you&apos;d rather get a
                tested, ready-to-submit IoT mini project built for you,{' '}
                <Link href="/mini-projects" className="text-accent hover:underline">
                  WEBUILDPRO makes them in Bangalore
                </Link>{' '}
                with source code, circuit diagram and documentation — just WhatsApp us your title.
              </p>

              {/* Top CTA */}
              <div className="bg-orange-500/10 border border-orange-500/30 rounded p-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <p className="text-sm text-foreground font-medium flex-1">
                  Want a ready IoT mini project built and tested?
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors whitespace-nowrap"
                  onClick={() => trackEvent('whatsapp_click', { location: 'blog_top_cta', page: `/blog/${SLUG}` })}
                >
                  <Icon name="ChatBubbleLeftRightIcon" size={16} />
                  WhatsApp us →
                </a>
              </div>

              {/* What Is an IoT Mini Project */}
              <h2
                id="what-is-iot-mini-project"
                className="text-xl font-bold text-foreground mt-10 mb-4 leading-snug"
              >
                What Is an IoT Mini Project?
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                An IoT based mini project connects sensors and a microcontroller (like Arduino, NodeMCU or ESP32) to
                the internet, so data can be monitored or controlled remotely from a phone or dashboard. Unlike a big
                final year project, a mini project is smaller, cheaper and quicker to build — perfect for 1st–6th
                semester students who want a working demo without a huge budget.
              </p>

              {/* How to Make */}
              <h2
                id="how-to-make-iot-mini-project"
                className="text-xl font-bold text-foreground mt-10 mb-4 leading-snug"
              >
                How to Make an IoT Mini Project (Step by Step)
              </h2>
              <ol className="space-y-4 mb-6">
                {[
                  {
                    step: '1. Pick a real problem.',
                    detail:
                      'Choose something simple you can explain in one line — like "detect a gas leak" or "monitor plant soil moisture."',
                  },
                  {
                    step: '2. Choose your microcontroller.',
                    detail:
                      'NodeMCU (ESP8266) or ESP32 are best for IoT because they have built-in Wi-Fi. Arduino Uno needs an add-on Wi-Fi module.',
                  },
                  {
                    step: '3. Select your sensors.',
                    detail:
                      'Match the sensor to your problem — DHT11 for temperature/humidity, MQ-2 for gas, soil moisture sensor for plants, ultrasonic for distance/level.',
                  },
                  {
                    step: '4. Connect and wire the circuit.',
                    detail:
                      'Wire the sensor and microcontroller on a breadboard, following the pin connections.',
                  },
                  {
                    step: '5. Write the code and connect to the cloud.',
                    detail:
                      'Program the board (Arduino IDE) to read the sensor and send data to an IoT platform like Blynk, ThingSpeak or Firebase.',
                  },
                  {
                    step: '6. Build the dashboard.',
                    detail:
                      'Set up a mobile app or web page to show live readings and alerts.',
                  },
                  {
                    step: '7. Test and demonstrate.',
                    detail:
                      'Run it end to end, check it works reliably, and prepare your report and PPT.',
                  },
                ].map(({ step, detail }) => (
                  <li key={step} className="bg-card border border-border rounded p-4">
                    <p className="text-sm font-semibold text-foreground mb-1">{step}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
                  </li>
                ))}
              </ol>

              {/* Mid CTA */}
              <div className="bg-orange-500/10 border border-orange-500/30 rounded p-4 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <p className="text-sm text-foreground font-medium flex-1">
                  Stuck on the build? We&apos;ll make it for you.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors whitespace-nowrap"
                  onClick={() => trackEvent('whatsapp_click', { location: 'blog_mid_cta', page: `/blog/${SLUG}` })}
                >
                  <Icon name="ChatBubbleLeftRightIcon" size={16} />
                  Message us on WhatsApp →
                </a>
              </div>

              {/* Components */}
              <h2
                id="components-needed"
                className="text-xl font-bold text-foreground mt-10 mb-4 leading-snug"
              >
                Components You&apos;ll Usually Need
              </h2>
              <div className="bg-card border border-border rounded p-5 mb-8">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A microcontroller (NodeMCU / ESP32 / Arduino), the relevant sensor(s), jumper wires, a breadboard,
                  a power supply, and a free IoT platform account (Blynk / ThingSpeak / Firebase). Optional: relay
                  module, buzzer, OLED display, or a mobile app.
                </p>
              </div>

              {/* Best IoT Mini Project Ideas */}
              <h2
                id="best-iot-mini-project-ideas"
                className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug"
              >
                Best IoT Based Mini Project Ideas (with Descriptions)
              </h2>

              {/* Beginner */}
              <h3 className="text-base font-bold text-foreground mt-6 mb-4">Beginner IoT Mini Projects</h3>
              <div className="space-y-3 mb-6">
                {[
                  {
                    title: 'IoT Weather Monitoring System',
                    desc: 'Measures temperature, humidity and rainfall and shows live data on a phone dashboard.',
                  },
                  {
                    title: 'IoT Home Automation',
                    desc: 'Control lights and appliances from your phone over Wi-Fi.',
                  },
                  {
                    title: 'IoT Smart Dustbin',
                    desc: 'The lid opens automatically and sends the fill level online.',
                  },
                  {
                    title: 'IoT Soil Moisture Monitor & Auto Irrigation',
                    desc: 'Waters plants automatically and reports moisture online.',
                  },
                  {
                    title: 'IoT Air Quality Monitor',
                    desc: 'Shows the air quality index live from gas/dust sensors.',
                  },
                  {
                    title: 'IoT Temperature Alert System',
                    desc: 'Sends a phone alert when temperature crosses a limit.',
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="bg-card border border-border rounded p-4">
                    <p className="text-sm font-semibold text-foreground mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              {/* Safety & Security */}
              <h3 className="text-base font-bold text-foreground mt-6 mb-4">Safety &amp; Security IoT Mini Projects</h3>
              <div className="space-y-3 mb-6">
                {[
                  {
                    title: 'IoT Gas Leakage Detection & Alert',
                    desc: 'Detects LPG/smoke and instantly alerts your phone with a buzzer.',
                  },
                  {
                    title: 'IoT Fire Detection System',
                    desc: 'Detects flame/heat and raises an online alert.',
                  },
                  {
                    title: 'IoT Home Security with Motion Detection',
                    desc: 'Sends an alert when motion is detected.',
                  },
                  {
                    title: 'IoT Smart Door Lock',
                    desc: 'Unlock your door from your phone or with RFID.',
                  },
                  {
                    title: 'IoT Water Level Indicator',
                    desc: 'Monitors tank level and prevents overflow.',
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="bg-card border border-border rounded p-4">
                    <p className="text-sm font-semibold text-foreground mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              {/* Health & Utility */}
              <h3 className="text-base font-bold text-foreground mt-6 mb-4">Health &amp; Utility IoT Mini Projects</h3>
              <div className="space-y-3 mb-6">
                {[
                  {
                    title: 'IoT Patient Health Monitoring',
                    desc: 'Tracks heart rate and temperature and streams to a dashboard.',
                  },
                  {
                    title: 'IoT Smart Medicine Reminder',
                    desc: 'Reminds and alerts for medicine timing online.',
                  },
                  {
                    title: 'IoT Energy Meter',
                    desc: 'Monitors power consumption live to save electricity.',
                  },
                  {
                    title: 'IoT Food Spoilage Detector',
                    desc: 'Detects gases from spoiling food and alerts you.',
                  },
                  {
                    title: 'IoT Smart Water Purifier / Quality Monitor',
                    desc: 'Checks water quality (TDS/pH) in real time.',
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="bg-card border border-border rounded p-4">
                    <p className="text-sm font-semibold text-foreground mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              {/* Fun & Advanced */}
              <h3 className="text-base font-bold text-foreground mt-6 mb-4">Fun &amp; Advanced IoT Mini Projects</h3>
              <div className="space-y-3 mb-8">
                {[
                  {
                    title: 'IoT RC Car',
                    desc: 'Drive a car over the internet from your phone.',
                  },
                  {
                    title: 'IoT Smart Aquarium',
                    desc: 'Automates feeding and monitors water conditions.',
                  },
                  {
                    title: 'IoT Attendance System with RFID',
                    desc: 'Logs attendance to the cloud.',
                  },
                  {
                    title: 'IoT Smart Parking System',
                    desc: 'Shows free parking slots online.',
                  },
                  {
                    title: 'IoT Vehicle Tracking (GPS)',
                    desc: "Track a vehicle's live location on a map.",
                  },
                ].map(({ title, desc }) => (
                  <div key={title} className="bg-card border border-border rounded p-4">
                    <p className="text-sm font-semibold text-foreground mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              {/* Ready-to-Buy */}
              <h2
                id="ready-to-buy"
                className="text-xl font-bold text-foreground mt-10 mb-4 leading-snug"
              >
                Ready-to-Buy IoT Mini Projects from WEBUILDPRO (Fixed Price, Built &amp; Tested)
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Don&apos;t want to build it yourself? WEBUILDPRO makes these IoT mini projects in Bangalore — fully
                assembled, tested, with source code, circuit diagram and documentation. Delivered online or in person,
                pan-India.
              </p>

              <div className="bg-card border border-border rounded overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left px-4 py-3 text-xs font-semibold text-foreground">Project</th>
                      <th className="text-right px-4 py-3 text-xs font-semibold text-foreground">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'IoT Weather Monitoring System', price: '₹5,000' },
                      { name: 'IoT Gas Leakage Detection & Alert System', price: '₹5,500' },
                      { name: 'IoT & RFID Attendance System', price: '₹3,500' },
                      { name: 'IoT Industrial Parameter Monitor', price: '₹6,000' },
                      { name: 'Simple Home Automation using IoT', price: '₹5,000' },
                      { name: 'IoT Powered RC Car', price: '₹5,000' },
                      { name: 'IoT Miner Safety Helmet', price: '₹8,000' },
                      { name: 'IoT Air Quality Monitoring System', price: '₹5,000' },
                      { name: 'IoT Plant Monitoring & Auto Irrigator', price: '₹5,000' },
                      { name: 'Smart Dustbin', price: '₹5,000' },
                      { name: 'IoT Patient Health Monitoring', price: '₹5,000' },
                    ].map(({ name, price }, i) => (
                      <tr key={name} className={`border-b border-border last:border-0 ${i % 2 === 0 ? '' : 'bg-muted/10'}`}>
                        <td className="px-4 py-3 text-muted-foreground">{name}</td>
                        <td className="px-4 py-3 text-right font-semibold text-foreground whitespace-nowrap">{price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                We also build custom IoT mini projects on your own idea. Prices are fixed with no hidden charges.
              </p>

              {/* Buy CTA */}
              <div className="bg-orange-500/10 border border-orange-500/30 rounded p-5 mb-8">
                <p className="text-sm font-semibold text-foreground mb-3">
                  Want to buy a ready IoT mini project?
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
                    onClick={() => trackEvent('whatsapp_click', { location: 'blog_buy_cta', page: `/blog/${SLUG}` })}
                  >
                    <Icon name="ChatBubbleLeftRightIcon" size={16} />
                    WhatsApp us your title →
                  </a>
                  <a
                    href="tel:+919538208573"
                    className="inline-flex items-center gap-2 border border-border text-foreground text-sm font-semibold px-5 py-2.5 rounded hover:bg-card transition-colors"
                  >
                    <Icon name="PhoneIcon" size={16} />
                    Call +91 95382 08573
                  </a>
                </div>
              </div>

              {/* How to Order */}
              <h2
                id="how-to-order"
                className="text-xl font-bold text-foreground mt-10 mb-4 leading-snug"
              >
                How to Order Your IoT Mini Project
              </h2>
              <ol className="space-y-3 mb-8">
                {[
                  'Send us your title on WhatsApp, or fill the form below.',
                  'Get a fixed quote and timeline within 24 hours.',
                  'We build and test it in our Bangalore lab.',
                  'Handover — working kit, source code, circuit diagram, report and PPT.',
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>

              {/* Final CTA block */}
              <div className="bg-primary/5 border border-primary/20 rounded p-6 mb-10">
                <h2 className="text-base font-bold text-foreground mb-2">
                  Get Your IoT Mini Project Today
                </h2>
                <p className="text-sm text-muted-foreground mb-5">
                  Whether you want to build it yourself using the steps above or get a tested one delivered,
                  WEBUILDPRO is here to help.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2.5 rounded transition-colors"
                    onClick={() => trackEvent('whatsapp_click', { location: 'blog_final_cta', page: `/blog/${SLUG}` })}
                  >
                    <Icon name="ChatBubbleLeftRightIcon" size={16} />
                    Chat on WhatsApp →
                  </a>
                  <a
                    href="tel:+919538208573"
                    className="inline-flex items-center gap-2 border border-border text-foreground text-sm font-semibold px-5 py-2.5 rounded hover:bg-card transition-colors"
                  >
                    <Icon name="PhoneIcon" size={16} />
                    Call +91 95382 08573
                  </a>
                </div>
              </div>

              {/* Embedded Contact Form */}
              <div id="contact-form" className="bg-card border border-border rounded p-6 mb-10">
                <h2 className="text-base font-bold text-foreground mb-1">
                  Enquire or Buy — Fill Your Details
                </h2>
                <p className="text-sm text-muted-foreground mb-5">
                  Send us your IoT mini project title and we&apos;ll get back within 24 hours with a fixed quote.
                </p>
                <InlineContactForm />
              </div>

              {/* Internal links */}
              <div className="border-t border-border pt-8 mb-8">
                <h3 className="text-sm font-bold text-foreground mb-4">Related reading</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/mini-projects"
                      className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5"
                    >
                      <Icon name="ArrowRightIcon" size={12} />
                      Browse all mini projects with prices — WEBUILDPRO
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/ece/iot-projects-in-bangalore"
                      className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5"
                    >
                      <Icon name="ArrowRightIcon" size={12} />
                      IoT Final Year Projects in Bangalore — ECE
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/mini-project-ideas-ece-2026"
                      className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5"
                    >
                      <Icon name="ArrowRightIcon" size={12} />
                      Mini Project Ideas for ECE Students (2026) — 30+ Arduino &amp; Sensor Builds
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/innovative-final-year-project-ideas-ece-2026"
                      className="text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5"
                    >
                      <Icon name="ArrowRightIcon" size={12} />
                      Innovative Final Year Project Ideas for ECE Students (2026)
                    </Link>
                  </li>
                </ul>
              </div>
            </article>

            {/* Sidebar TOC */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-card border border-border rounded p-4">
                  <h2 className="text-xs font-bold text-foreground uppercase tracking-wider mb-4">
                    Table of Contents
                  </h2>
                  <nav aria-label="Table of contents">
                    <ul className="space-y-2">
                      {tocItems.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="text-xs text-muted-foreground hover:text-foreground transition-colors leading-snug block"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="mt-6 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-3">Need it built?</p>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-3 py-2 rounded transition-colors"
                      onClick={() =>
                        trackEvent('whatsapp_click', { location: 'blog_sidebar_toc', page: `/blog/${SLUG}` })
                      }
                    >
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <CircuitDivider />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
          <span className="micro-label block mb-3">// NEED YOUR IOT MINI PROJECT BUILT?</span>
          <h2 className="text-section-xl font-bold text-foreground mb-4">
            WEBUILDPRO builds IoT mini projects in Bangalore.
          </h2>
          <p className="text-muted-foreground text-sm mb-8">
            Source code, circuit diagram, documentation. Online &amp; offline. Fixed price.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-6 py-3 rounded transition-colors"
              onClick={() => trackEvent('whatsapp_click', { location: 'blog_bottom_cta', page: `/blog/${SLUG}` })}
            >
              <Icon name="ChatBubbleLeftRightIcon" size={16} />
              WhatsApp Us
            </a>
            <Link
              href="/mini-projects"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
            >
              <Icon name="ArrowRightIcon" size={16} />
              View Mini Projects &amp; Prices
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}
