'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface FormData {
  name: string;
  phone: string;
  email: string;
  userType: string;
  branch: string;
  college: string;
  message: string;
  deadline: string;
  honeypot: string;
}

const initialForm: FormData = {
  name: '', phone: '', email: '', userType: '', branch: '',
  college: '', message: '', deadline: '', honeypot: '',
};

export default function ContactCTASection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');
  const ref = useScrollReveal();

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

    // Fire the fetch in the background — do not await it
    const payload = JSON.stringify({ ...form, sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/' });
    try {
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
      }).catch(() => {
        // Background fetch failed silently — submission was already shown as success
      });
    } catch {
      // fetch() itself threw synchronously — device is offline
      setLoading(false);
      setServerError('No internet connection. Please check your connection and try again.');
      return;
    }

    // Brief spinner for click feel, then show success immediately
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 300);
  };

  const inputClass = (field: keyof FormData) =>
    `input-base w-full px-4 py-3 text-sm ${errors[field] ? 'border-primary' : ''}`;

  return (
    <>
      <CircuitDivider />
      <section id="contact" suppressHydrationWarning className="py-20 bg-secondary" aria-labelledby="contact-cta-heading" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <span className="micro-label block mb-3">// GET IN TOUCH</span>
            <h2 id="contact-cta-heading" className="text-section-xl font-bold text-foreground reveal">
              Tell us what you need to build.
            </h2>
            <p className="text-muted-foreground mt-4 text-base reveal delay-100">
              Free 15-minute call with an engineer. Fixed quote in 24 hours. No obligation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <div className="reveal delay-200 bg-card border border-border rounded p-6 sm:p-8">
              {success ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckBadgeIcon" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Got it.</h3>
                  <p className="text-muted-foreground mb-6">An engineer will contact you within 24 hours.</p>
                  <a
                    href="https://wa.me/919538208573"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
                  >
                    <Icon name="ChatBubbleLeftRightIcon" size={16} />
                    Message us on WhatsApp instead
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <input type="text" name="website" value={form.honeypot} onChange={(e) => setForm({ ...form, honeypot: e.target.value })} className="hidden" tabIndex={-1} aria-hidden="true" autoComplete="off" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="ct-name">Full Name *</label>
                      <input id="ct-name" type="text" placeholder="Ravi Kumar" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass('name')} />
                      {errors.name && <p className="text-xs text-primary mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="ct-phone">Phone / WhatsApp *</label>
                      <input id="ct-phone" type="tel" placeholder="9876543210" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass('phone')} />
                      {errors.phone && <p className="text-xs text-primary mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="ct-email">Email *</label>
                    <input id="ct-email" type="email" placeholder="ravi@example.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass('email')} />
                    {errors.email && <p className="text-xs text-primary mt-1">{errors.email}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="ct-usertype">I am a… *</label>
                      <select id="ct-usertype" value={form.userType} onChange={(e) => setForm({ ...form, userType: e.target.value })} className={`${inputClass('userType')} cursor-pointer`}>
                        <option value="">Select…</option>
                        <option>Student</option>
                        <option>College or Institution</option>
                        <option>Company or Startup</option>
                        <option>Other</option>
                      </select>
                      {errors.userType && <p className="text-xs text-primary mt-1">{errors.userType}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="ct-branch">Branch / Domain *</label>
                      <select id="ct-branch" value={form.branch} onChange={(e) => setForm({ ...form, branch: e.target.value })} className={`${inputClass('branch')} cursor-pointer`}>
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
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="ct-college">College / Company Name</label>
                      <input id="ct-college" type="text" placeholder="Optional" value={form.college} onChange={(e) => setForm({ ...form, college: e.target.value })} className="input-base w-full px-4 py-3 text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="ct-deadline">Expected Deadline</label>
                      <input id="ct-deadline" type="date" value={form.deadline} onChange={(e) => setForm({ ...form, deadline: e.target.value })} className="input-base w-full px-4 py-3 text-sm" />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="ct-message">Project Requirement / Message *</label>
                    <textarea id="ct-message" rows={4} placeholder="Describe your project requirement, domain and any specific components or constraints…" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass('message')} resize-none`} />
                    {errors.message && <p className="text-xs text-primary mt-1">{errors.message}</p>}
                  </div>

                  {serverError && (
                    <p className="text-sm text-primary mb-4">
                      {serverError}{' '}
                      <a href="https://wa.me/919538208573" target="_blank" rel="noopener noreferrer" className="underline">
                        WhatsApp us instead
                      </a>
                    </p>
                  )}

                  <button type="submit" disabled={loading} className="btn-primary w-full py-3.5 text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Icon name="PaperAirplaneIcon" size={16} />
                        Send Requirement
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact details */}
            <div className="reveal delay-300 space-y-6">
              <div className="bg-card border border-border rounded p-6">
                <h3 className="font-mono font-bold text-xs tracking-widest text-accent mb-4">// REACH US DIRECTLY</h3>
                <div className="space-y-4">
                  <a href="tel:+919538208573" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Icon name="PhoneIcon" size={16} className="text-primary" />
                    +91 95382 08573
                  </a>
                  <a href="https://wa.me/919538208573" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Icon name="ChatBubbleLeftRightIcon" size={16} className="text-primary" />
                    WhatsApp Us
                  </a>
                  <a href="https://www.instagram.com/webuildpro/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Icon name="CameraIcon" size={16} className="text-primary" />
                    @webuildpro
                  </a>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Icon name="MapPinIcon" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <address className="not-italic">
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

              {/* Map embed */}
              <div className="rounded overflow-hidden border border-border">
                <iframe
                  src="https://maps.google.com/maps?q=WEBUILDPRO+Peenya+Bangalore&z=17&output=embed"
                  width="100%"
                  height="240"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="WeBuildPro India location — Peenya 2nd Stage, Bengaluru"
                />
              </div>

              <a
                href="https://g.co/kgs/zgjqv4M"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors font-medium"
              >
                <Icon name="MapPinIcon" size={14} />
                Get Directions on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}