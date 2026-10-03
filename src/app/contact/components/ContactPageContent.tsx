'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { trackEvent } from '@/lib/analytics';
import { submitLead, LEAD_ERROR } from '@/lib/submitLead';

interface FormData {
  name: string; phone: string; email: string; userType: string;
  branch: string; college: string; message: string; deadline: string; honeypot: string;
}
const initialForm: FormData = { name: '', phone: '', email: '', userType: '', branch: '', college: '', message: '', deadline: '', honeypot: '' };

export default function ContactPageContent() {
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
    if (!form.userType) e.userType = 'Required';
    if (!form.branch) e.branch = 'Required';
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

    const payload = { ...form, sourcePage: '/contact' };
    const ok = await submitLead('/api/contact', payload);
    setLoading(false);
    if (!ok) {
      setServerError(LEAD_ERROR);
      return;
    }
    setSuccess(true);
    trackEvent('contact_form_submit', { page: '/contact', branch: form.branch, userType: form.userType });
  };

  const ic = (field: keyof FormData) => `input-base w-full px-4 py-3 text-sm ${errors[field] ? 'border-primary' : ''}`;

  return (
    <div className="min-h-screen bg-background blueprint-grid pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-muted-foreground">
            <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
            <li aria-hidden="true"><Icon name="ChevronRightIcon" size={12} /></li>
            <li className="text-foreground font-medium" aria-current="page">Contact</li>
          </ol>
        </nav>

        {/* Page header */}
        <div className="mb-12">
          <span className="micro-label block mb-3">// GET IN TOUCH</span>
          <h1 className="text-hero-lg font-bold text-foreground mb-4">
            Tell us what you need to build.
          </h1>
          <p className="text-muted-foreground text-base max-w-xl">
            Free 15-minute call with an engineer. Fixed quote in 24 hours. No obligation. We&apos;re in Bangalore — Peenya 2nd Stage, Bengaluru 560058.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form — 3 cols */}
          <div className="lg:col-span-3 bg-card border border-border rounded p-6 sm:p-8">
            {success ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckBadgeIcon" size={32} className="text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground mb-2">Got it.</h2>
                <p className="text-muted-foreground mb-6">An engineer will contact you within 24 hours.</p>
                <a
                  href="https://wa.me/919538208573"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
                  onClick={() => trackEvent('whatsapp_click', { location: 'contact_success', page: '/contact' })}
                >
                  <Icon name="ChatBubbleLeftRightIcon" size={16} />
                  Message us on WhatsApp instead
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <input type="text" name="website" value={form.honeypot} onChange={(e) => setForm({ ...form, honeypot: e.target.value })} className="hidden" tabIndex={-1} aria-hidden="true" autoComplete="off" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="name">Full Name *</label>
                    <input id="name" type="text" placeholder="Ravi Kumar" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={ic('name')} />
                    {errors.name && <p className="text-xs text-primary mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="phone">Phone / WhatsApp *</label>
                    <input id="phone" type="tel" placeholder="9876543210" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={ic('phone')} />
                    {errors.phone && <p className="text-xs text-primary mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="email">Email *</label>
                  <input id="email" type="email" placeholder="ravi@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={ic('email')} />
                  {errors.email && <p className="text-xs text-primary mt-1">{errors.email}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="userType">I am a… *</label>
                    <select id="userType" value={form.userType} onChange={(e) => setForm({ ...form, userType: e.target.value })} className={`${ic('userType')} cursor-pointer`}>
                      <option value="">Select…</option>
                      <option>Student</option>
                      <option>College or Institution</option>
                      <option>Company or Startup</option>
                      <option>Other</option>
                    </select>
                    {errors.userType && <p className="text-xs text-primary mt-1">{errors.userType}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="branch">Branch / Domain *</label>
                    <select id="branch" value={form.branch} onChange={(e) => setForm({ ...form, branch: e.target.value })} className={`${ic('branch')} cursor-pointer`}>
                      <option value="">Select…</option>
                      <option>CSE-ISE-AI/ML-BCA-MCA</option>
                      <option>Mechanical</option>
                      <option>ECE</option>
                      <option>EEE</option>
                      <option>Civil/Mining</option>
                      <option>Industrial Prototype</option>
                      <option>Drone Development</option>
                      <option>Other</option>
                    </select>
                    {errors.branch && <p className="text-xs text-primary mt-1">{errors.branch}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="college">College / Company Name</label>
                    <input id="college" type="text" placeholder="Optional" value={form.college} onChange={(e) => setForm({ ...form, college: e.target.value })} className="input-base w-full px-4 py-3 text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="deadline">Expected Deadline</label>
                    <input id="deadline" type="date" value={form.deadline} onChange={(e) => setForm({ ...form, deadline: e.target.value })} className="input-base w-full px-4 py-3 text-sm" />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="message">Project Requirement / Message *</label>
                  <textarea id="message" rows={5} placeholder="Describe your project requirement, domain and any specific components or constraints…" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${ic('message')} resize-none`} />
                  {errors.message && <p className="text-xs text-primary mt-1">{errors.message}</p>}
                </div>

                {serverError && (
                  <p className="text-sm text-primary mb-4">
                    {serverError}{' '}
                    <a href="https://wa.me/919538208573" target="_blank" rel="noopener noreferrer" className="underline">WhatsApp us instead</a>
                  </p>
                )}

                <button type="submit" disabled={loading} className="btn-primary w-full py-3.5 text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                  {loading ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />Sending…</>
                  ) : (
                    <><Icon name="PaperAirplaneIcon" size={16} />Send Requirement</>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar — 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded p-6">
              <h2 className="font-mono font-bold text-xs tracking-widest text-accent mb-4">// REACH US DIRECTLY</h2>
              <div className="space-y-4">
                <a
                  href="tel:+919538208573"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => trackEvent('phone_click', { location: 'contact_sidebar', page: '/contact' })}
                >
                  <Icon name="PhoneIcon" size={16} className="text-primary" />
                  +91 95382 08573
                </a>
                <a
                  href="https://wa.me/919538208573"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => trackEvent('whatsapp_click', { location: 'contact_sidebar', page: '/contact' })}
                >
                  <Icon name="ChatBubbleLeftRightIcon" size={16} className="text-primary" />
                  WhatsApp Us
                </a>
                <a href="https://www.instagram.com/webuildpro/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  @webuildpro
                </a>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Icon name="MapPinIcon" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                  <address className="not-italic">
                    WEBUILDPRO INDIA<br />
                    Peenya 2nd Stage<br />
                    Bengaluru – 560058<br />
                    Karnataka, India
                  </address>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Icon name="ClockIcon" size={16} className="text-primary" />
                  Mon–Sat, 10 AM – 7 PM IST
                </div>
              </div>
            </div>

            <div id="map" className="rounded overflow-hidden border border-border">
              <iframe
                src="https://maps.google.com/maps?q=WEBUILDPRO+Peenya+Bangalore&z=17&output=embed"
                width="100%"
                height="280"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="WEBUILDPRO India — Peenya 2nd Stage, Bengaluru"
              />
            </div>

            <a href="https://g.co/kgs/zgjqv4M" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors font-medium">
              <Icon name="MapPinIcon" size={14} />
              Get Directions on Google Maps
            </a>

            <div className="bg-primary/5 border border-primary/30 rounded p-5">
              <div className="flex items-start gap-3">
                <Icon name="ShieldCheckIcon" size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">Our commitment:</p>
                  <p className="text-muted-foreground text-xs leading-relaxed">Fixed quote before you pay. Milestone updates while we build. Unit tested before it ships.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}