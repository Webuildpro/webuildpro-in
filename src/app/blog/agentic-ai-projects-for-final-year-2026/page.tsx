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
import { submitLead, LEAD_ERROR } from '@/lib/submitLead';

const SLUG = 'agentic-ai-projects-for-final-year-2026';
const WA_LINK =
  'https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%20want%20this%20project%20built%20%E2%80%94%20can%20you%20help%3F';

const tocItems = [
  { id: 'what-is-agentic-ai', label: 'What Is Agentic AI?' },
  { id: 'what-you-need', label: "What You\'ll Need" },
  { id: 'how-to-build', label: 'How to Build an Agentic AI Project' },
  { id: 'best-project-ideas', label: 'Best Agentic AI Project Ideas' },
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

    const payload = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      message: form.message,
      userType: 'Student',
      branch: 'CSE',
      sourcePage: `/blog/${SLUG}`,
    };

    const ok = await submitLead('/api/contact', payload);
    setLoading(false);
    if (!ok) {
      setServerError(LEAD_ERROR);
      return;
    }
    setSuccess(true);
    trackEvent('contact_form_submit', { page: `/blog/${SLUG}`, branch: 'CSE', userType: 'Student' });
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
    <form onSubmit={handleSubmit} noValidate aria-label="Agentic AI project enquiry form">
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
          <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="ag-name">
            Full Name *
          </label>
          <input
            id="ag-name"
            type="text"
            placeholder="Ravi Kumar"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={ic('name')}
          />
          {errors.name && <p className="text-xs text-primary mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="ag-phone">
            Phone / WhatsApp *
          </label>
          <input
            id="ag-phone"
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
        <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="ag-email">
          Email *
        </label>
        <input
          id="ag-email"
          type="email"
          placeholder="ravi@example.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={ic('email')}
        />
        {errors.email && <p className="text-xs text-primary mt-1">{errors.email}</p>}
      </div>
      <div className="mb-6">
        <label className="block text-xs font-medium text-muted-foreground mb-1.5" htmlFor="ag-message">
          Project Title / Requirement *
        </label>
        <textarea
          id="ag-message"
          rows={4}
          placeholder="e.g. Autonomous Research Assistant Agent — need it built and explained for my final year viva"
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

function WhatsAppBtn({ label }: { label: string }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('whatsapp_click', { page: `/blog/${SLUG}`, label })}
      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
    >
      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {label}
    </a>
  );
}

const projectIdeas = [
  {
    title: 'Autonomous Research Assistant Agent',
    desc: 'Takes a topic, searches the web, and writes a structured report on its own.',
  },
  {
    title: 'AI Customer Support Agent',
    desc: 'Answers customer queries from your company docs and escalates when needed (RAG + tools).',
  },
  {
    title: 'AI Coding Agent',
    desc: 'Takes a feature request and writes, tests and fixes the code autonomously.',
  },
  {
    title: 'Multi-Agent Trip Planner',
    desc: 'Several agents (flights, hotels, budget) collaborate to plan a full trip.',
  },
  {
    title: 'AI Email Management Agent',
    desc: 'Reads, sorts, drafts replies and schedules follow-ups automatically.',
  },
  {
    title: 'Autonomous Data Analyst Agent',
    desc: 'Takes a dataset and a question, analyses it and returns charts and insights.',
  },
  {
    title: 'AI Job Application Agent',
    desc: 'Matches a resume to jobs and drafts tailored applications.',
  },
  {
    title: 'AI Social Media Manager Agent',
    desc: 'Plans, writes and schedules posts for a campaign autonomously.',
  },
  {
    title: 'AI Medical Triage Agent',
    desc: 'Asks symptom questions and suggests next steps using medical knowledge (with disclaimers).',
  },
  {
    title: 'AI Legal Document Agent',
    desc: 'Reads contracts, flags risky clauses and summarises them.',
  },
  {
    title: 'Autonomous Web Scraper & Reporter Agent',
    desc: 'Monitors sites and reports changes.',
  },
  {
    title: 'AI Personal Finance Agent',
    desc: 'Tracks spending and gives budgeting actions.',
  },
  {
    title: 'Multi-Agent Debate System',
    desc: 'Agents argue different sides of a topic to reach a conclusion.',
  },
  {
    title: 'AI Interview Coach Agent',
    desc: 'Asks interview questions, evaluates answers and gives feedback.',
  },
  {
    title: 'Autonomous Bug-Fixing Agent',
    desc: 'Finds and fixes bugs in a codebase.',
  },
  {
    title: 'AI Study Planner Agent',
    desc: 'Builds and adapts a personalised study schedule.',
  },
  {
    title: 'Smart Home Control Agent',
    desc: 'An agent that manages IoT devices toward a goal (comfort/energy saving).',
  },
  {
    title: 'AI Content Moderation Agent',
    desc: 'Reviews and flags content across rules autonomously.',
  },
  {
    title: 'AI Recruitment Screening Agent',
    desc: 'Screens and ranks candidates end to end.',
  },
  {
    title: 'Autonomous Cybersecurity Agent',
    desc: 'Monitors logs and responds to threats.',
  },
];

export default function AgenticAIBlogPage() {
  const [activeSection, setActiveSection] = useState('');
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
          { name: 'Agentic AI Projects for Final Year (2026)', url: `/blog/${SLUG}` },
        ]}
      />
      <BlogPostingJsonLd
        headline="Agentic AI Projects for Final Year (2026)"
        datePublished="2026-09-11"
        dateModified="2026-09-11"
        description="20+ agentic AI project ideas for final year students with descriptions & how-to steps. AI agents, LLM & RAG projects built in Bangalore. WhatsApp +91 95382 08573."
        slug={SLUG}
      />
      <Header />
      <main className="min-h-screen bg-background text-foreground pt-16">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground/70 truncate max-w-[200px] sm:max-w-none">
              Agentic AI Projects for Final Year (2026)
            </span>
          </nav>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Sticky Sidebar TOC — desktop */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-24 bg-card border border-border rounded-xl p-5">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Table of Contents
                </p>
                <ul className="space-y-1.5">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollTo(item.id)}
                        className={`text-left w-full text-sm px-2 py-1.5 rounded transition-colors ${
                          activeSection === item.id
                            ? 'text-primary font-medium bg-primary/10' :'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main content */}
            <article className="flex-1 min-w-0">
              {/* Mobile TOC toggle */}
              <div className="lg:hidden mb-6">
                <button
                  onClick={() => setMobileTocOpen(!mobileTocOpen)}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground border border-border rounded-lg px-4 py-2.5 w-full justify-between bg-card"
                >
                  <span>Table of Contents</span>
                  <Icon name={mobileTocOpen ? 'ChevronUpIcon' : 'ChevronDownIcon'} size={16} />
                </button>
                {mobileTocOpen && (
                  <div className="mt-2 bg-card border border-border rounded-xl p-4">
                    <ul className="space-y-1.5">
                      {tocItems.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => scrollTo(item.id)}
                            className="text-left w-full text-sm px-2 py-1.5 rounded text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                          >
                            {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* H1 + last updated */}
              <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight mb-2">
                Agentic AI Projects for Final Year Students (2026)
              </h1>
              <p className="text-sm text-muted-foreground mb-6">Last updated: September 2026</p>

              {/* Intro */}
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                Agentic AI is the biggest trend in technology for 2026 — autonomous AI agents that plan and complete
                multi-step tasks on their own. That makes agentic AI projects the smartest, most future-ready choice
                for your final year, and a standout on any resume. This guide gives you 20+ agentic AI project ideas
                with descriptions, the tech you&apos;ll need, and simple steps to build one. If you&apos;d rather get
                a working agentic AI project built and explained,{' '}
                <strong className="text-foreground">WEBUILDPRO builds them in Bangalore</strong> with source code and
                documentation — just WhatsApp us your idea.
              </p>

              {/* Top CTA */}
              <div className="flex flex-wrap gap-3 mb-10">
                <WhatsAppBtn label="Want an agentic AI project built for you? WhatsApp us →" />
              </div>

              <CircuitDivider />

              {/* Section: What Is Agentic AI */}
              <section id="what-is-agentic-ai" className="mt-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-foreground mb-4">What Is Agentic AI?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Agentic AI means AI systems (agents) that don&apos;t just answer once, but reason, plan, use tools,
                  and take actions across multiple steps to reach a goal — like an AI that researches a topic, writes a
                  report, and emails it, all on its own. They&apos;re usually built on LLMs (large language models)
                  plus tools, memory and a planning loop.
                </p>
              </section>

              {/* Section: What You'll Need */}
              <section id="what-you-need" className="mt-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-foreground mb-4">What You&apos;ll Need</h2>
                <p className="text-muted-foreground leading-relaxed">
                  An LLM API (OpenAI, Gemini, or an open model like Llama), a framework (LangChain, LangGraph, CrewAI,
                  or AutoGen), Python, a vector database for memory (for RAG), and any tools/APIs your agent needs to
                  act.
                </p>
              </section>

              {/* Section: How to Build */}
              <section id="how-to-build" className="mt-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-foreground mb-5">
                  How to Build an Agentic AI Project (Steps)
                </h2>
                <ol className="space-y-4">
                  {[
                    'Define the goal the agent should achieve autonomously.',
                    'Pick an LLM and framework (LangGraph/CrewAI are popular).',
                    'Give the agent tools — web search, a database, an API, a calculator.',
                    'Add memory (a vector store) so it remembers context.',
                    'Build the planning loop so it breaks the goal into steps.',
                    'Test, add guardrails, and demo.',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm">
                        {i + 1}
                      </span>
                      <p className="text-muted-foreground leading-relaxed pt-1">{step}</p>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 flex flex-wrap gap-3">
                  <WhatsAppBtn label="Stuck? We'll build and explain it. Message us on WhatsApp →" />
                </div>
              </section>

              <CircuitDivider className="mt-10" />

              {/* Section: Best Project Ideas */}
              <section id="best-project-ideas" className="mt-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Best Agentic AI Project Ideas (with Descriptions)
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {projectIdeas.map((p, i) => (
                    <div
                      key={i}
                      className="bg-card border border-border rounded-xl p-5 hover:border-primary/40 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-xs mt-0.5">
                          {i + 1}
                        </span>
                        <div>
                          <h3 className="font-semibold text-foreground text-sm mb-1">{p.title}</h3>
                          <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <CircuitDivider className="mt-10" />

              {/* Section: How to Choose */}
              <section id="how-to-choose" className="mt-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  How to Choose the Right Agentic AI Project
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Pick one where the agent genuinely needs multiple steps and tools — that&apos;s what makes it
                  &quot;agentic&quot; and impressive. Start with a clear goal, use a framework like LangGraph or
                  CrewAI, and make sure you can explain the planning loop in your viva. WEBUILDPRO helps you scope and
                  build it, tested and defendable.
                </p>
              </section>

              {/* Section: Buy from WEBUILDPRO */}
              <section id="buy-from-webuildpro" className="mt-10 scroll-mt-24">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Buy a Ready Agentic AI Project from WEBUILDPRO, Bangalore
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Get a working agentic AI project built and tested in Bangalore — with source code, documentation, and
                  a walkthrough so you can defend it. Online or offline, pan-India. Custom ideas welcome, fixed
                  pricing.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <WhatsAppBtn label="Buy / Enquire on WhatsApp →" />
                  <a
                    href="tel:+919538208573"
                    className="inline-flex items-center gap-2 border border-border hover:border-primary/50 text-foreground font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                  >
                    <Icon name="PhoneIcon" size={16} className="text-primary" />
                    Call +91 95382 08573
                  </a>
                </div>

                {/* Internal links */}
                <div className="bg-card border border-border rounded-xl p-5 mt-6">
                  <p className="text-sm font-semibold text-foreground mb-3">Explore more from WEBUILDPRO</p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/projects/cse" className="text-primary hover:underline">
                        CSE Final Year Projects in Bangalore
                      </Link>
                      {' '}— AI, ML, web, app, blockchain and more
                    </li>
                    <li>
                      <Link href="/mini-projects" className="text-primary hover:underline">
                        Mini Projects for Engineering Students
                      </Link>
                      {' '}— affordable, semester-ready mini projects
                    </li>
                    <li>
                      <Link href="/blog/best-ai-based-final-year-project-ideas-2026" className="text-primary hover:underline">
                        Best AI-Based Final Year Project Ideas (2026)
                      </Link>
                      {' '}— ML, deep learning, computer vision and generative AI
                    </li>
                    <li>
                      <Link href="/blog/latest-final-year-project-ideas-cse-2026" className="text-primary hover:underline">
                        Latest Final Year Project Ideas for CSE Students (2026)
                      </Link>
                      {' '}— ML, web, blockchain, cloud and cybersecurity
                    </li>
                  </ul>
                </div>
              </section>

              <CircuitDivider className="mt-10" />

              {/* Contact Form */}
              <section id="contact-form" className="mt-10 scroll-mt-24">
                <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
                  <h2 className="text-xl font-bold text-foreground mb-1">
                    Get Your Agentic AI Project Built
                  </h2>
                  <p className="text-muted-foreground text-sm mb-6">
                    Fill in your details and we&apos;ll get back to you within 24 hours with a quote and timeline.
                  </p>
                  <InlineContactForm />
                  <p className="text-xs text-muted-foreground mt-4 text-center">
                    Or{' '}
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline font-medium">
                      WhatsApp us directly
                    </a>{' '}
                    · Call{' '}
                    <a href="tel:+919538208573" className="text-primary hover:underline">
                      +91 95382 08573
                    </a>
                  </p>
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
