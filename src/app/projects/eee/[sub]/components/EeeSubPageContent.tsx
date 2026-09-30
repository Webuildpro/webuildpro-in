'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import type { SubCategory, SubProject, Difficulty } from '@/lib/data/subcategories/eee';


interface Props {
  entry: SubCategory;
  siblings: SubCategory[];
}

const difficultyColors: Record<Difficulty, string> = {
  Beginner: 'border-green-500/40 text-green-400 bg-green-500/10',
  Intermediate: 'border-yellow-500/40 text-yellow-400 bg-yellow-500/10',
  Advanced: 'border-primary/40 text-primary bg-primary/10',
};

function ProjectAccordion({ project }: { project: SubProject }) {
  const [open, setOpen] = useState(false);
  const waMessage = encodeURIComponent(
    `Hi WEBUILDPRO, I'm interested in the project: "${project.title}". Can you send me a quote?`
  );
  const enquireHref = `/contact?project=${encodeURIComponent(project.title)}`;

  return (
    <div
      className={`border rounded overflow-hidden transition-colors duration-200 ${
        open ? 'border-primary/40 bg-card' : 'border-border bg-card hover:border-border/80'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <span
            className={`text-xs font-mono px-2 py-0.5 rounded border flex-shrink-0 ${difficultyColors[project.difficulty]}`}
          >
            {project.difficulty}
          </span>
          <span className="font-semibold text-foreground text-sm leading-snug break-words min-w-0">
            {project.title}
          </span>
        </div>
        <Icon
          name={open ? 'ChevronUpIcon' : 'ChevronDownIcon'}
          size={16}
          className="flex-shrink-0 text-muted-foreground"
        />
      </button>

      <div
        className={`accordion-content ${open ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-5 pb-5 border-t border-border pt-4">
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {project.abstract}
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-5">
            <span className="flex items-center gap-1">
              <Icon name="ClockIcon" size={12} className="text-primary" />
              {project.timeline}
            </span>
            <span className="flex items-center gap-1">
              <Icon name="AcademicCapIcon" size={12} className="text-primary" />
              {project.difficulty}
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={enquireHref}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold px-4 py-2 rounded transition-colors"
            >
              <Icon name="DocumentTextIcon" size={14} />
              Enquire
            </Link>
            <a
              href={`https://wa.me/919538208573?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={14} />
              WhatsApp about this
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function FaqAccordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
        aria-expanded={open}
      >
        <span className="font-medium text-foreground text-sm">{q}</span>
        <Icon
          name={open ? 'ChevronUpIcon' : 'ChevronDownIcon'}
          size={16}
          className="flex-shrink-0 text-muted-foreground"
        />
      </button>
      <div
        className={`accordion-content ${open ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-5 pb-4 border-t border-border pt-3">
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export default function EeeSubPageContent({ entry, siblings }: Props) {
  const BASE_URL = 'https://webuildpro.in';
  const pageUrl = `${BASE_URL}/projects/eee/${entry.slug}`;

  const waGeneral = encodeURIComponent(
    `Hi WEBUILDPRO, I'm looking for ${entry.keyword}. Can you help me?`
  );

  return (
    <>
      <main className="min-h-screen bg-background text-foreground pb-[calc(64px+env(safe-area-inset-bottom))] lg:pb-0">
        {/* ── Breadcrumbs ─────────────────────────────────────────────────── */}
        <nav aria-label="Breadcrumb" className="border-b border-border bg-card/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li><Icon name="ChevronRightIcon" size={12} /></li>
              <li>
                <Link href="/projects" className="hover:text-primary transition-colors">Projects</Link>
              </li>
              <li><Icon name="ChevronRightIcon" size={12} /></li>
              <li>
                <Link href="/projects/eee" className="hover:text-primary transition-colors">EEE</Link>
              </li>
              <li><Icon name="ChevronRightIcon" size={12} /></li>
              <li className="text-foreground font-medium">{entry.keyword}</li>
            </ol>
          </div>
        </nav>

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="border-b border-border bg-card/30 py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 leading-tight">
              {entry.keyword}
            </h1>
            <p className="text-xs text-muted-foreground mb-5">
              Last updated: August 2026
            </p>
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-8 max-w-3xl">
              {entry.intro}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`https://wa.me/919538208573?text=${waGeneral}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-5 py-2.5 rounded transition-colors text-sm"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={16} />
                WhatsApp for a Quote
              </a>
              <a
                href="tel:+919538208573"
                className="inline-flex items-center gap-2 border border-border hover:border-primary text-foreground font-semibold px-5 py-2.5 rounded transition-colors text-sm"
              >
                <Icon name="PhoneIcon" size={16} />
                +91 95382 08573
              </a>
            </div>
          </div>
        </section>

        {/* ── Projects ────────────────────────────────────────────────────── */}
        <section className="py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-bold text-foreground mb-2">
              {entry.keyword} — Project Titles
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              {entry.projects.length} project{entry.projects.length !== 1 ? 's' : ''} available. Click any title to see description, difficulty and timeline.
            </p>

            <div className="space-y-3">
              {entry.projects.map((p, i) => (
                <ProjectAccordion key={i} project={p} />
              ))}
            </div>

            {/* Enquire CTA below list */}
            <div className="mt-8 p-5 rounded border border-primary/20 bg-primary/5">
              <p className="text-sm text-foreground font-medium mb-3">
                Need a custom title or IEEE paper implementation?
              </p>
              <a
                href={`https://wa.me/919538208573?text=${waGeneral}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-5 py-2.5 rounded transition-colors text-sm"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={16} />
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ── Related EEE categories ──────────────────────────────────────── */}
        <section className="border-t border-border py-10 sm:py-12 bg-card/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-lg font-bold text-foreground mb-5">
              Related EEE categories
            </h2>
            <div className="flex flex-wrap gap-2">
              {siblings.map((s) => (
                <Link
                  key={s.slug}
                  href={`/projects/eee/${s.slug}`}
                  className="text-sm border border-border hover:border-primary text-muted-foreground hover:text-primary px-3 py-1.5 rounded transition-colors"
                >
                  {s.keyword}
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link
                href="/projects/eee"
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
              >
                <Icon name="ArrowLeftIcon" size={14} />
                Back to all EEE Projects
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <section className="border-t border-border py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {entry.faqs.map((item, i) => (
                <FaqAccordion key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ──────────────────────────────────────────────────── */}
        <section className="border-t border-border py-10 bg-card/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-xl font-bold text-foreground mb-2">
              Ready to get your {entry.keyword.split(' ')[0]} project built?
            </h2>
            <p className="text-muted-foreground text-sm mb-6 max-w-xl mx-auto">
              WEBUILDPRO, Bangalore — fixed price, working circuits, full documentation. Online pan-India or offline at our lab.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`https://wa.me/919538208573?text=${waGeneral}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-6 py-3 rounded transition-colors"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={16} />
                WhatsApp Us Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-border hover:border-primary text-foreground font-semibold px-6 py-3 rounded transition-colors"
              >
                <Icon name="EnvelopeIcon" size={16} />
                Contact Form
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
