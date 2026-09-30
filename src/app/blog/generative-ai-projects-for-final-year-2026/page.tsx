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
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import BlogPostingJsonLd from '@/components/BlogPostingJsonLd';

const SLUG = 'generative-ai-projects-for-final-year-2026';
const WA_LINK =
  'https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%20want%20a%20generative%20AI%20project%20built%20%E2%80%94%20can%20you%20help%3F';

const tocItems = [
  { id: 'what-is-generative-ai', label: 'What Is Generative AI?' },
  { id: 'what-you-need', label: "What You\'ll Need" },
  { id: 'how-to-build', label: 'How to Build a Generative AI Project' },
  { id: 'best-project-ideas', label: 'Best Generative AI Project Ideas' },
  { id: 'how-to-choose', label: 'How to Choose the Right Project' },
  { id: 'buy-from-webuildpro', label: 'Buy from WEBUILDPRO, Bangalore' },
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
      branch: 'CSE',
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
      trackEvent('contact_form_submit', { page: `/blog/${SLUG}`, branch: 'CSE', userType: 'Student' });
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
    <form onSubmit={handleSubmit} noValidate aria-label="Generative AI project enquiry form">
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
          <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="gen-name">
            Full Name *
          </label>
          <input
            id="gen-name"
            type="text"
            placeholder="Ravi Kumar"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={ic('name')}
          />
          {errors.name && <p className="text-xs text-primary mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="gen-phone">
            Phone / WhatsApp *
          </label>
          <input
            id="gen-phone"
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
        <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="gen-email">
          Email *
        </label>
        <input
          id="gen-email"
          type="email"
          placeholder="ravi@example.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={ic('email')}
        />
        {errors.email && <p className="text-xs text-primary mt-1">{errors.email}</p>}
      </div>
      <div className="mb-6">
        <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="gen-message">
          Project Title / Requirement *
        </label>
        <textarea
          id="gen-message"
          rows={4}
          placeholder="e.g. AI Blog & Content Generator — need it built and explained for my final year viva"
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
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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

const projectIdeas = [
  {
    title: 'AI Blog & Content Generator',
    desc: 'Creates SEO blog posts, captions and marketing copy from a topic.',
  },
  {
    title: 'AI Code Generator',
    desc: 'Turns plain-English instructions into working code.',
  },
  {
    title: 'AI Image Generator App',
    desc: 'Generates images from text prompts with style controls.',
  },
  {
    title: 'AI Resume & Cover Letter Builder',
    desc: 'Generates tailored resumes from a profile and job description.',
  },
  {
    title: 'AI Chatbot for College/Company (RAG)',
    desc: 'Answers from your own documents.',
  },
  {
    title: 'AI Medical Report Summariser',
    desc: 'Turns complex reports into plain-language summaries.',
  },
  {
    title: 'AI Story / Script Generator',
    desc: 'Creates stories or video scripts from a prompt.',
  },
  {
    title: 'AI Voice Assistant',
    desc: 'A Siri/Alexa-style assistant using speech + LLM.',
  },
  {
    title: 'AI Text-to-Speech / Voice Cloning',
    desc: 'Generates natural speech from text.',
  },
  {
    title: 'AI Presentation (PPT) Generator',
    desc: 'Builds slide decks from a topic.',
  },
  {
    title: 'AI Email Writer',
    desc: 'Drafts professional emails from bullet points.',
  },
  {
    title: 'AI Product Description Generator',
    desc: 'Writes e-commerce listings at scale.',
  },
  {
    title: 'AI Music Generator',
    desc: 'Composes short music clips from a prompt.',
  },
  {
    title: 'AI Question Paper / Quiz Generator',
    desc: 'Creates quizzes from study material.',
  },
  {
    title: 'AI Language Translator + Rewriter',
    desc: 'Translates and improves tone.',
  },
  {
    title: 'AI Fake News Detector',
    desc: 'Classifies real vs generated/fake content.',
  },
  {
    title: 'AI Design/Logo Generator',
    desc: 'Generates brand assets from a brief.',
  },
  {
    title: 'AI Video Summariser',
    desc: 'Summarises long videos into key points.',
  },
  {
    title: 'AI Interview Question Generator',
    desc: 'Generates role-specific interview questions.',
  },
  {
    title: 'AI Personalised Learning Tutor',
    desc: "Generates explanations and practice for a student\'s level.",
  },
];

export default function GenerativeAIProjectsPage() {
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileTocOpen(false);
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'Generative AI Projects for Final Year (2026)', url: `/blog/${SLUG}` },
        ]}
      />
      <BlogPostingJsonLd
        headline="Generative AI Projects for Final Year (2026)"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        description="20+ generative AI project ideas for final year with descriptions & steps. Text, image, code & voice GenAI projects built in Bangalore. WhatsApp +91 95382 08573."
        slug={SLUG}
      />
      <Header />
      <main className="min-h-screen bg-background pt-16">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-2">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground">Generative AI Projects for Final Year (2026)</span>
          </nav>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sticky Desktop TOC */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-24 bg-card border border-border rounded-lg p-5">
                <p className="text-xs font-mono text-accent mb-3 uppercase tracking-wider">// Contents</p>
                <nav aria-label="Table of contents">
                  <ul className="space-y-1">
                    {tocItems.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollTo(item.id)}
                          className="text-left w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-1 leading-snug"
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <article className="flex-1 min-w-0">
              {/* H1 + Last Updated */}
              <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight mb-3">
                Generative AI Projects for Final Year Students (2026)
              </h1>
              <p className="text-xs text-muted-foreground mb-6 font-mono">Last updated: September 2026</p>

              {/* Mobile TOC toggle */}
              <div className="lg:hidden mb-6">
                <button
                  onClick={() => setMobileTocOpen(!mobileTocOpen)}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground border border-border rounded px-4 py-2.5 w-full"
                  aria-expanded={mobileTocOpen}
                >
                  <Icon name="ListBulletIcon" size={16} />
                  <span>Table of Contents</span>
                  <Icon
                    name="ChevronDownIcon"
                    size={14}
                    className={`ml-auto transition-transform ${mobileTocOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileTocOpen && (
                  <div className="mt-2 bg-card border border-border rounded-lg p-4">
                    <ul className="space-y-1">
                      {tocItems.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => scrollTo(item.id)}
                            className="text-left w-full text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                          >
                            {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Intro */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                Generative AI dominates 2026 — models that create text, images, code, audio and video. A generative AI project puts you at the cutting edge and looks fantastic to recruiters. This guide has 20+ generative AI project ideas with descriptions, the tools you&apos;ll need, and how to build one. Want a working GenAI project built and documented? WEBUILDPRO makes them in Bangalore — WhatsApp us your idea.
              </p>

              {/* CTA 1 */}
              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('whatsapp_click', { page: `/blog/${SLUG}`, position: 'intro' })}
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded transition-colors text-sm"
                >
                  <Icon name="ChatBubbleLeftRightIcon" size={16} />
                  Want a generative AI project built? WhatsApp us →
                </a>
              </div>

              <CircuitDivider />

              {/* What Is Generative AI */}
              <section id="what-is-generative-ai" className="mt-10 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">What Is Generative AI?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Generative AI creates new content — text, images, code, audio — from a prompt, using models like GPT, Gemini, Stable Diffusion and open LLMs. Projects usually call these models via an API and add your own logic, data or interface.
                </p>
              </section>

              <CircuitDivider />

              {/* What You'll Need */}
              <section id="what-you-need" className="mt-10 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">What You&apos;ll Need</h2>
                <p className="text-muted-foreground leading-relaxed">
                  An LLM/image API (OpenAI, Gemini, Stable Diffusion, or open models), Python, a web/app front end, and optionally a vector database for RAG.
                </p>
              </section>

              <CircuitDivider />

              {/* How to Build */}
              <section id="how-to-build" className="mt-10 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">How to Build a Generative AI Project (Steps)</h2>
                <ol className="space-y-3 text-muted-foreground">
                  {[
                    'Choose what to generate (text, image, code, voice).',
                    'Pick a model/API.',
                    'Design the prompt and logic.',
                    'Add your data (RAG) if it must use specific info.',
                    'Build a simple interface.',
                    'Test outputs and demo.',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary">
                        {i + 1}
                      </span>
                      <span className="leading-relaxed pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>

                {/* CTA 2 */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('whatsapp_click', { page: `/blog/${SLUG}`, position: 'how-to-build' })}
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded transition-colors text-sm"
                  >
                    <Icon name="ChatBubbleLeftRightIcon" size={16} />
                    Need help? Message us on WhatsApp →
                  </a>
                </div>
              </section>

              <CircuitDivider />

              {/* Best Project Ideas */}
              <section id="best-project-ideas" className="mt-10 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Best Generative AI Project Ideas (with Descriptions)</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {projectIdeas.map((idea, i) => (
                    <div
                      key={i}
                      className="bg-card border border-border rounded-lg p-4 hover:border-primary/40 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded bg-primary/10 flex items-center justify-center text-xs font-bold text-primary mt-0.5">
                          {i + 1}
                        </span>
                        <div>
                          <h3 className="font-semibold text-foreground text-sm mb-1">{idea.title}</h3>
                          <p className="text-xs text-muted-foreground leading-relaxed">{idea.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <CircuitDivider />

              {/* How to Choose */}
              <section id="how-to-choose" className="mt-10 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">How to Choose the Right Generative AI Project</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Pick a content type you can demo clearly (text and image are easiest). Add your own data via RAG if it must be accurate. Make sure you can explain how the model works. WEBUILDPRO helps you build and defend it.
                </p>
              </section>

              <CircuitDivider />

              {/* Buy from WEBUILDPRO */}
              <section id="buy-from-webuildpro" className="mt-10 mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Buy a Ready Generative AI Project from WEBUILDPRO, Bangalore</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Working GenAI project, source code, documentation and a walkthrough — built and tested in Bangalore, online or offline. Custom ideas welcome, fixed pricing.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('whatsapp_click', { page: `/blog/${SLUG}`, position: 'buy-cta' })}
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-3 rounded transition-colors text-sm"
                  >
                    <Icon name="ChatBubbleLeftRightIcon" size={16} />
                    Buy / enquire on WhatsApp →
                  </a>
                  <a
                    href="tel:+919538208573"
                    className="inline-flex items-center gap-2 border border-border text-foreground hover:border-primary/50 font-semibold px-5 py-3 rounded transition-colors text-sm"
                  >
                    <Icon name="PhoneIcon" size={16} />
                    Call +91 95382 08573
                  </a>
                </div>
              </section>

              <CircuitDivider />

              {/* Contact Form */}
              <section id="contact-form" className="mt-10 mb-8">
                <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
                  <h2 className="text-xl font-bold text-foreground mb-1">Enquire or Buy a Generative AI Project</h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    Fill in your details and an engineer will get back to you within 24 hours.
                  </p>
                  <InlineContactForm />
                </div>
              </section>

              <CircuitDivider />

              {/* Internal Links */}
              <section className="mt-10 mb-8">
                <h2 className="text-xl font-bold text-foreground mb-4">Explore More from WEBUILDPRO</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link
                    href="/projects/cse"
                    className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                  >
                    <span className="text-accent font-mono text-xs">//</span>
                    CSE / AI-ML Final Year Projects
                  </Link>
                  <Link
                    href="/mini-projects"
                    className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                  >
                    <span className="text-accent font-mono text-xs">//</span>
                    Mini Projects for All Branches
                  </Link>
                  <Link
                    href="/blog/agentic-ai-projects-for-final-year-2026"
                    className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                  >
                    <span className="text-accent font-mono text-xs">→</span>
                    Agentic AI Projects for Final Year (2026)
                  </Link>
                  <Link
                    href="/blog/best-ai-based-final-year-project-ideas-2026"
                    className="flex items-center gap-2 bg-card border border-border rounded-lg px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                  >
                    <span className="text-accent font-mono text-xs">→</span>
                    Best AI-Based Final Year Project Ideas (2026)
                  </Link>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}
