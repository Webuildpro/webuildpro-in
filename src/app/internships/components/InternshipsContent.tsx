'use client';
import React, { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';
import FaqSection from '@/app/components/FaqSection';
import { submitLead, LEAD_ERROR } from '@/lib/submitLead';

const tracks = [
  { title: 'Embedded Systems & IoT', icon: 'CpuChipIcon' as const, description: 'Microcontrollers, sensor integration, MQTT, cloud dashboards and real IoT deployments.' },
  { title: 'Drone Technology', icon: 'PaperAirplaneIcon' as const, description: 'Quadcopter assembly, flight controller tuning, ArduPilot mission planning and payload integration.' },
  { title: 'Robotics & Automation', icon: 'CogIcon' as const, description: 'Servo/stepper motor control, robotic arm kinematics, PLC programming and conveyor systems.' },
  { title: 'AI / ML & Computer Vision', icon: 'EyeIcon' as const, description: 'Python ML pipelines, OpenCV, YOLO object detection and deploying models on edge hardware.' },
  { title: 'PCB Design', icon: 'CircleStackIcon' as const, description: 'KiCad schematic capture, PCB layout, DRC, gerber generation and hands-on soldering and assembly.' },
];

const durations = [
  { weeks: '2 Weeks', description: 'Intensive crash course. One track, one build, one certificate. Ideal for semester breaks.' },
  { weeks: '4 Weeks', description: 'Deep-dive into one domain. Full project from requirements to working demo.' },
  { weeks: '8 Weeks', description: 'Comprehensive programme. Two tracks, advanced project, mentor reference letter.' },
];

const deliverables = [
  'Working project built by you — not assembled from a kit',
  'Full source code and circuit diagrams',
  'Portfolio documentation with photos and build log',
  'Verifiable completion certificate',
  'Mentor reference letter (8-week track)',
];

const differentiators = [
  { bad: 'Watch a recording of someone else building', good: 'Build it yourself on real components' },
  { bad: 'Certificate for attending sessions', good: 'Certificate earned on a completed, working build' },
  { bad: 'Generic syllabus, no real project', good: 'Assigned a real project with a deadline and scope' },
  { bad: 'Mentors who are also students', good: 'Mentored by working engineers who ship production hardware' },
];

const BRANCH_OPTIONS = ['CSE / ISE / AI-ML / BCA / MCA', 'ECE', 'EEE', 'Mechanical', 'Civil', 'Other'];
const YEAR_OPTIONS = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Diploma', 'M.Tech', 'Graduated'];
const TRACK_OPTIONS = [
  'Embedded Systems & IoT',
  'Drone Technology',
  'Robotics & Automation',
  'AI / ML & Computer Vision',
  'PCB Design',
  'Not sure yet — advise me',
];
const DURATION_OPTIONS = ['2 Weeks', '4 Weeks', '8 Weeks', 'Flexible'];

interface FormState {
  name: string;
  phone: string;
  email: string;
  college: string;
  branch: string;
  year: string;
  track: string;
  duration: string;
  startDate: string;
  mode: string;
  motivation: string;
  website: string; // honeypot
}

const EMPTY_FORM: FormState = {
  name: '',
  phone: '',
  email: '',
  college: '',
  branch: '',
  year: '',
  track: '',
  duration: '',
  startDate: '',
  mode: 'In-person (Bangalore lab)',
  motivation: '',
  website: '',
};

interface InternshipsContentProps {
  faqs: { q: string; a: string }[];
}

export default function InternshipsContent({ faqs }: InternshipsContentProps) {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');
  const formRef = useRef<HTMLElement>(null);

  const handleTrackApply = useCallback((trackTitle: string) => {
    setForm((prev) => ({ ...prev, track: trackTitle }));
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const validate = (): Record<string, string> => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = 'Enter a valid 10-digit Indian mobile number';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Enter a valid email address';
    if (!form.college.trim()) e.college = 'Required';
    if (!form.branch) e.branch = 'Required';
    if (!form.year) e.year = 'Required';
    if (!form.track) e.track = 'Required';
    if (!form.duration) e.duration = 'Required';
    if (!form.mode) e.mode = 'Required';
    return e;
  };

  const set = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
  };

  const ic = (f: string) =>
    `input-base w-full px-4 py-3 text-sm ${errors[f] ? 'border-primary' : ''}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.website) return; // honeypot
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setServerError('');
    setLoading(true);

    const ok = await submitLead('/api/internship', {
          name: form.name,
          phone: form.phone,
          email: form.email,
          college: form.college,
          branch: form.branch,
          year: form.year,
          track: form.track,
          duration: form.duration,
          startDate: form.startDate,
          mode: form.mode,
          motivation: form.motivation,
          source: '/internships',
          honeypot: form.website,
        });
    setLoading(false);
    if (!ok) {
      setServerError(LEAD_ERROR);
      return;
    }
    setSuccess(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-background blueprint-grid" aria-labelledby="intern-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li aria-hidden="true"><Icon name="ChevronRightIcon" size={12} /></li>
              <li className="text-foreground font-medium" aria-current="page">Internships</li>
            </ol>
          </nav>
          <span className="micro-label block mb-3">// INTERNSHIPS & TRAINING</span>
          <h1 id="intern-heading" className="text-hero-lg font-bold text-foreground mb-4">
            AN INTERNSHIP WHERE YOU ACTUALLY TOUCH THE HARDWARE.
          </h1>
          <p className="text-muted-foreground text-base max-w-2xl mb-8">
            Engineering internship in Bangalore — real components, real deadlines, a build you can show in an interview.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#apply" className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold">
              <Icon name="AcademicCapIcon" size={16} />
              Apply for a Batch
            </a>
            <a href="https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%27m%20interested%20in%20an%20internship." target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold">
              <Icon name="ChatBubbleLeftRightIcon" size={16} />
              Ask About Batches
            </a>
          </div>
        </div>
      </section>

      <CircuitDivider />

      {/* Differentiators */}
      <section className="py-16 bg-secondary" aria-labelledby="diff-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="micro-label block mb-3">// WHAT MAKES IT DIFFERENT</span>
          <h2 id="diff-heading" className="text-section-xl font-bold text-foreground mb-8">
            Not another watch-a-recording internship.
          </h2>
          <div className="space-y-3">
            {differentiators.map((d, i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-2 gap-0 rounded overflow-hidden border border-border">
                <div className="flex items-center gap-3 px-5 py-4 bg-card border-b sm:border-b-0 sm:border-r border-border">
                  <Icon name="XMarkIcon" size={16} className="text-muted-foreground flex-shrink-0" />
                  <span className="text-sm text-muted-foreground line-through">{d.bad}</span>
                </div>
                <div className="flex items-center gap-3 px-5 py-4 bg-primary/5">
                  <Icon name="CheckIcon" size={16} className="text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground font-medium">{d.good}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CircuitDivider />

      {/* Tracks */}
      <section className="py-16 bg-background blueprint-grid-subtle" aria-labelledby="tracks-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="micro-label block mb-3">// AVAILABLE TRACKS</span>
          <h2 id="tracks-heading" className="text-section-xl font-bold text-foreground mb-8">
            Five domains. Pick the one that fits your goal.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tracks.map((track) => (
              <div key={track.title} className="card-glow bg-card border border-border rounded p-6 flex flex-col">
                <div className="w-10 h-10 rounded bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                  <Icon name={track.icon} size={18} className="text-accent" />
                </div>
                <h3 className="font-bold text-foreground text-sm mb-2">{track.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed flex-1">{track.description}</p>
                <button
                  type="button"
                  onClick={() => handleTrackApply(track.title)}
                  className="mt-4 text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 self-start"
                >
                  Apply for this track <Icon name="ArrowRightIcon" size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CircuitDivider />

      {/* Duration options */}
      <section className="py-16 bg-secondary" aria-labelledby="duration-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="micro-label block mb-3">// DURATION OPTIONS</span>
          <h2 id="duration-heading" className="text-section-xl font-bold text-foreground mb-8">
            Two weeks, four weeks, or eight weeks.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {durations.map((d) => (
              <div key={d.weeks} className="card-glow bg-background border border-border rounded p-6 text-center">
                <div className="font-mono text-3xl font-bold text-primary mb-3">{d.weeks}</div>
                <p className="text-muted-foreground text-sm leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CircuitDivider />

      {/* Deliverables */}
      <section className="py-16 bg-background" aria-labelledby="deliverables-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="micro-label block mb-3">// WHAT YOU LEAVE WITH</span>
          <h2 id="deliverables-heading" className="text-section-xl font-bold text-foreground mb-8">
            You leave with more than a certificate.
          </h2>
          <ul className="space-y-3 text-left max-w-md mx-auto">
            {deliverables.map((d) => (
              <li key={d} className="flex items-start gap-3 text-sm text-muted-foreground">
                <Icon name="CheckCircleIcon" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CircuitDivider />

      {/* Application form */}
      <section id="apply" ref={formRef} className="py-16 bg-secondary" aria-labelledby="apply-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="mb-8 text-center">
            <span className="micro-label block mb-3">// APPLY FOR A BATCH</span>
            <h2 id="apply-heading" className="text-section-xl font-bold text-foreground">
              Apply for the next batch
            </h2>
            <p className="text-muted-foreground mt-2 text-sm max-w-lg mx-auto">
              Seats are limited per batch so every intern gets bench time. Apply and we&apos;ll confirm dates within 24 hours.
            </p>
          </div>

          <div className="bg-card border border-border rounded p-6 sm:p-8">
            {success ? (
              <div className="text-center py-8">
                <Icon name="CheckBadgeIcon" size={40} className="text-primary mx-auto mb-4" />
                <h3 className="font-bold text-foreground text-lg mb-2">Application received.</h3>
                <p className="text-muted-foreground text-sm mb-6 max-w-sm mx-auto">
                  We&apos;ll confirm batch dates and seat availability within 24 hours. Check WhatsApp — that&apos;s usually where we reply first.
                </p>
                <a
                  href="https://wa.me/919538208573"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
                >
                  <Icon name="ChatBubbleLeftRightIcon" size={16} />
                  Message us on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Internship application form">
                {/* Honeypot — hidden from real users */}
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={set('website')}
                  className="hidden"
                  tabIndex={-1}
                  aria-hidden="true"
                  autoComplete="off"
                />

                {/* Row 1: Full Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="i-name">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="i-name"
                      type="text"
                      placeholder="Priya Sharma"
                      value={form.name}
                      onChange={set('name')}
                      className={ic('name')}
                      autoComplete="name"
                    />
                    {errors.name && <p className="text-xs text-primary mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="i-phone">
                      Phone / WhatsApp Number <span className="text-primary">*</span>
                    </label>
                    <input
                      id="i-phone"
                      type="tel"
                      placeholder="9876543210"
                      value={form.phone}
                      onChange={set('phone')}
                      className={ic('phone')}
                      autoComplete="tel"
                      maxLength={10}
                    />
                    {errors.phone && <p className="text-xs text-primary mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Row 2: Email */}
                <div className="mb-4">
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="i-email">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="i-email"
                    type="email"
                    placeholder="priya@example.com"
                    value={form.email}
                    onChange={set('email')}
                    className={ic('email')}
                    autoComplete="email"
                  />
                  {errors.email && <p className="text-xs text-primary mt-1">{errors.email}</p>}
                </div>

                {/* Row 3: College */}
                <div className="mb-4">
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="i-college">
                    College / Institution <span className="text-primary">*</span>
                  </label>
                  <input
                    id="i-college"
                    type="text"
                    placeholder="RV College of Engineering"
                    value={form.college}
                    onChange={set('college')}
                    className={ic('college')}
                  />
                  {errors.college && <p className="text-xs text-primary mt-1">{errors.college}</p>}
                </div>

                {/* Row 4: Branch + Year */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="i-branch">
                      Branch <span className="text-primary">*</span>
                    </label>
                    <select
                      id="i-branch"
                      value={form.branch}
                      onChange={set('branch')}
                      className={`${ic('branch')} cursor-pointer`}
                    >
                      <option value="">Select…</option>
                      {BRANCH_OPTIONS.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                    {errors.branch && <p className="text-xs text-primary mt-1">{errors.branch}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="i-year">
                      Year of Study <span className="text-primary">*</span>
                    </label>
                    <select
                      id="i-year"
                      value={form.year}
                      onChange={set('year')}
                      className={`${ic('year')} cursor-pointer`}
                    >
                      <option value="">Select…</option>
                      {YEAR_OPTIONS.map((y) => <option key={y} value={y}>{y}</option>)}
                    </select>
                    {errors.year && <p className="text-xs text-primary mt-1">{errors.year}</p>}
                  </div>
                </div>

                {/* Row 5: Track */}
                <div className="mb-4">
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="i-track">
                    Internship Track <span className="text-primary">*</span>
                  </label>
                  <select
                    id="i-track"
                    value={form.track}
                    onChange={set('track')}
                    className={`${ic('track')} cursor-pointer`}
                  >
                    <option value="">Select…</option>
                    {TRACK_OPTIONS.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {errors.track && <p className="text-xs text-primary mt-1">{errors.track}</p>}
                </div>

                {/* Row 6: Duration + Start Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="i-duration">
                      Duration <span className="text-primary">*</span>
                    </label>
                    <select
                      id="i-duration"
                      value={form.duration}
                      onChange={set('duration')}
                      className={`${ic('duration')} cursor-pointer`}
                    >
                      <option value="">Select…</option>
                      {DURATION_OPTIONS.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                    {errors.duration && <p className="text-xs text-primary mt-1">{errors.duration}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="i-startdate">
                      Preferred Start Date <span className="text-muted-foreground font-normal">(optional)</span>
                    </label>
                    <input
                      id="i-startdate"
                      type="date"
                      value={form.startDate}
                      onChange={set('startDate')}
                      className="input-base w-full px-4 py-3 text-sm"
                    />
                  </div>
                </div>

                {/* Row 7: Mode */}
                <div className="mb-4">
                  <span className="block text-xs font-medium text-muted-foreground mb-2">
                    Mode <span className="text-primary">*</span>
                  </span>
                  <div className="flex flex-col sm:flex-row gap-3">
                    {['In-person (Bangalore lab)', 'Hybrid'].map((option) => (
                      <label
                        key={option}
                        className={`flex items-center gap-2.5 px-4 py-3 rounded border cursor-pointer text-sm transition-colors ${
                          form.mode === option
                            ? 'border-primary bg-primary/5 text-foreground'
                            : 'border-border bg-background text-muted-foreground hover:border-primary/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="mode"
                          value={option}
                          checked={form.mode === option}
                          onChange={set('mode')}
                          className="accent-primary"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                  {errors.mode && <p className="text-xs text-primary mt-1">{errors.mode}</p>}
                </div>

                {/* Row 8: Motivation */}
                <div className="mb-6">
                  <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="i-motivation">
                    Why this track? <span className="text-muted-foreground font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="i-motivation"
                    rows={3}
                    placeholder="What do you want to be able to build by the end of it?"
                    value={form.motivation}
                    onChange={set('motivation')}
                    className="input-base w-full px-4 py-3 text-sm resize-none"
                  />
                </div>

                {serverError && (
                  <p className="text-sm text-primary mb-4">
                    {serverError}{' '}
                    <a
                      href="https://wa.me/919538208573"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
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
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      <Icon name="AcademicCapIcon" size={16} />
                      Submit Application
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-12 bg-background border-t border-border" aria-labelledby="related-intern-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 id="related-intern-heading" className="micro-label mb-6">// RELATED SERVICES</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: 'Engineering Projects in Bangalore', href: '/projects/cse' },
              { label: 'Industrial Prototype Development', href: '/industrial' },
              { label: 'About WEBUILDPRO', href: '/about' },
              { label: 'Contact Us', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-card border border-border rounded p-3 text-xs text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
    </>
  );
}