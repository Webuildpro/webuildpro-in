'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LazyPageExtras from '@/components/LazyPageExtras';
import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';

const WA_HREF =
  'https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%20have%20a%20final%20year%20project%20idea%20%E2%80%94%20can%20you%20build%20it%3F';

function WhatsAppCTA({ label = 'WhatsApp WEBUILDPRO — Build My AI Project' }: { label?: string }) {
  return (
    <a
      href={WA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-6 py-3 rounded transition-colors w-full sm:w-auto"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {label}
    </a>
  );
}

const tocItems = [
  { id: 'computer-vision', label: 'Computer Vision AI Projects' },
  { id: 'machine-learning', label: 'Machine Learning AI Projects' },
  { id: 'nlp-generative', label: 'NLP & Generative AI Projects' },
  { id: 'deep-learning', label: 'Deep Learning & Advanced AI Projects' },
  { id: 'ai-iot', label: 'AI + IoT / Hardware Projects' },
  { id: 'how-to-choose', label: 'How to Choose the Right AI Project' },
  { id: 'build-with-webuildpro', label: 'Build with WEBUILDPRO' },
];

export default function AIProjectIdeasPage() {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-20% 0% -70% 0%' }
    );
    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

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
              <li
                className="text-foreground font-medium truncate max-w-xs"
                aria-current="page"
              >
                Best AI-Based Final Year Project Ideas (2026)
              </li>
            </ol>
          </nav>

          {/* Article header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {['AI Projects', 'Final Year Projects', 'Machine Learning', 'Deep Learning', 'Bangalore'].map((tag) => (
                <span key={tag} className="chip-cyan text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-hero-lg font-bold text-foreground mb-3 leading-tight">
              Best AI-Based Final Year Project Ideas (2026)
            </h1>
            <p className="text-muted-foreground text-sm mb-4">Last updated: August 2026</p>
            <p className="text-muted-foreground text-base mb-6">
              30+ best AI projects &amp; AI-based final year project ideas for 2026 — machine learning, deep learning,
              computer vision &amp; generative AI. Built by WEBUILDPRO Bangalore.{' '}
              <a href="tel:+919538208573" className="text-accent hover:text-accent/80 underline transition-colors">
                Call 9538208573
              </a>
              .
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono border-t border-border pt-4">
              <span>WEBUILDPRO India</span>
              <span>·</span>
              <span>August 2026</span>
              <span>·</span>
              <span>12 min read</span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Article content */}
            <article className="lg:col-span-3">
              
              {/* Quick Answer — answers the search intent in the first 100 words */}
              <div className="bg-card border-l-4 border-primary rounded-lg p-5 mb-8">
                <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Quick Answer</p>
                <p className="text-sm text-foreground leading-relaxed">
                  The best AI projects for final year 2026 are in computer vision, machine learning, NLP and generative AI — all high-demand skills for placements. WEBUILDPRO builds 30+ of these AI-based final year projects in Bangalore with trained models, source code and documentation. WhatsApp +91 95382 08573 to get yours built.
                </p>
              </div>
{/* Intro */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Looking for the{' '}
                <strong className="text-foreground">best AI projects</strong>,{' '}
                <strong className="text-foreground">AI-based final year project ideas</strong>, or modern artificial
                intelligence project ideas for 2026? Artificial intelligence is the most in-demand domain for
                placements, and a strong AI project makes your final year and your resume stand out. This list has 30+
                trending AI project ideas — machine learning, deep learning, computer vision, NLP and generative AI.
                WEBUILDPRO builds every one of these AI-based projects in Bangalore with trained models, datasets,
                source code and documentation, online or offline. Pick an AI project idea and we&apos;ll build it for
                you.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Wondering who makes final year projects in Bangalore? Read our guide on{' '}
                <Link href="/blog/final-year-engineering-project-makers-in-bangalore" className="text-accent hover:underline">
                  project makers in Bangalore
                </Link>{' '}
                to see how WEBUILDPRO works.
              </p>

              {/* Intro CTA */}
              <div className="mb-8">
                <WhatsAppCTA />
              </div>

              {/* Computer Vision */}
              <h2
                id="computer-vision"
                className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug"
              >
                Computer Vision AI Project Ideas
              </h2>
              <ul className="space-y-3 mb-6">
                {[
                  { title: 'AI Face Recognition Attendance System', desc: 'camera-based marking.' },
                  { title: 'AI Driver Drowsiness & Distraction Detection', desc: 'road safety.' },
                  { title: 'AI Traffic Sign & Object Recognition', desc: 'driver assistance.' },
                  { title: 'AI-Based Crop / Plant Disease Detection', desc: 'deep learning on images.' },
                  { title: 'AI Face Mask & Social Distance Detection', desc: 'monitoring system.' },
                  { title: 'AI Number Plate Recognition (ANPR)', desc: 'vehicle detection.' },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3 bg-card border border-border rounded p-4">
                    <span className="text-accent mt-0.5 flex-shrink-0">
                      <Icon name="CpuChipIcon" size={14} />
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">{title}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Machine Learning */}
              <h2
                id="machine-learning"
                className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug"
              >
                Machine Learning AI Project Ideas
              </h2>
              <ul className="space-y-3 mb-6">
                {[
                  { title: 'AI Medical Diagnosis Predictor (Diabetes / Heart)', desc: 'risk prediction.' },
                  { title: 'AI Loan / Credit Approval Predictor', desc: 'classification model.' },
                  { title: 'AI House Price Prediction', desc: 'regression model.' },
                  { title: 'AI Customer Churn Prediction', desc: 'retention analytics.' },
                  { title: 'AI Stock Trend Analysis', desc: 'predictive modelling.' },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3 bg-card border border-border rounded p-4">
                    <span className="text-accent mt-0.5 flex-shrink-0">
                      <Icon name="CpuChipIcon" size={14} />
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">{title}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Mid CTA */}
              <div className="my-8">
                <WhatsAppCTA label="WhatsApp WEBUILDPRO — Get a Free AI Project Quote" />
              </div>

              {/* NLP & Generative AI */}
              <h2
                id="nlp-generative"
                className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug"
              >
                Natural Language &amp; Generative AI Project Ideas
              </h2>
              <ul className="space-y-3 mb-6">
                {[
                  { title: 'AI Chatbot with RAG for Institutional Data', desc: 'document Q&A bot.' },
                  { title: 'AI Resume Screening & Ranking Tool', desc: 'NLP matching.' },
                  { title: 'AI Fake News Detection', desc: 'text classification.' },
                  { title: 'AI Sentiment Analysis of Reviews / Tweets', desc: 'opinion mining.' },
                  { title: 'AI Text Summarizer', desc: 'generative summarisation.' },
                  { title: 'AI Sign Language to Text/Speech Converter', desc: 'assistive AI.' },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3 bg-card border border-border rounded p-4">
                    <span className="text-accent mt-0.5 flex-shrink-0">
                      <Icon name="CpuChipIcon" size={14} />
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">{title}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Deep Learning */}
              <h2
                id="deep-learning"
                className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug"
              >
                Deep Learning &amp; Advanced AI Project Ideas
              </h2>
              <ul className="space-y-3 mb-6">
                {[
                  { title: 'AI Emotion Detection from Face', desc: 'CNN classifier.' },
                  { title: 'AI Handwriting / Digit Recognition', desc: 'deep learning.' },
                  { title: 'AI Image Caption Generator', desc: 'vision + language.' },
                  { title: 'AI Voice Assistant', desc: 'speech recognition + response.' },
                  { title: 'AI Deepfake Detection', desc: 'content authenticity.' },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3 bg-card border border-border rounded p-4">
                    <span className="text-accent mt-0.5 flex-shrink-0">
                      <Icon name="CpuChipIcon" size={14} />
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">{title}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Post-ideas CTA */}
              <div className="my-8">
                <WhatsAppCTA label="WhatsApp WEBUILDPRO — Start My AI Final Year Project" />
              </div>

              {/* AI + IoT */}
              <h2
                id="ai-iot"
                className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug"
              >
                AI + IoT / Hardware Project Ideas
              </h2>
              <ul className="space-y-3 mb-6">
                {[
                  { title: 'AI-Enabled Smart Surveillance Camera', desc: 'edge AI.' },
                  { title: 'AI Smart Agriculture with Vision Drone', desc: 'crop analysis.' },
                  { title: 'AI-Based Patient Monitoring', desc: 'vitals + prediction.' },
                  { title: 'AI Object-Sorting Robotic Arm', desc: 'vision-guided robotics.' },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3 bg-card border border-border rounded p-4">
                    <span className="text-accent mt-0.5 flex-shrink-0">
                      <Icon name="CpuChipIcon" size={14} />
                    </span>
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      <strong className="text-foreground">{title}</strong> — {desc}
                    </span>
                  </li>
                ))}
              </ul>

              <CircuitDivider className="my-10" />

              {/* How to Choose */}
              <h2
                id="how-to-choose"
                className="text-xl font-bold text-foreground mt-10 mb-4 leading-snug"
              >
                How to Choose the Right AI Project
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Pick an AI project that matches your comfort with data and coding. Beginners: image classification or a
                simple ML predictor. Stronger students: computer vision, NLP or a generative-AI RAG project that really
                stands out in interviews. Make sure a dataset exists and you can explain the model. WEBUILDPRO helps you
                choose and builds it with the trained model and documentation.
              </p>

              {/* Internal links */}
              <div className="bg-card border border-border rounded p-5 mb-8">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Explore More
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/projects/cse" className="text-accent hover:text-accent/80 underline transition-colors">
                      CSE Final Year Projects — AI, ML &amp; Web
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects/ece" className="text-accent hover:text-accent/80 underline transition-colors">
                      ECE Final Year Projects — IoT, Embedded &amp; Robotics
                    </Link>
                  </li>
                  <li>
                    <Link href="/mini-projects" className="text-accent hover:text-accent/80 underline transition-colors">
                      Mini Projects — Simple AI &amp; ML Builds
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/latest-final-year-project-ideas-cse-2026"
                      className="text-accent hover:text-accent/80 underline transition-colors"
                    >
                      Latest Final Year Project Ideas for CSE (2026)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/trending-final-year-project-ideas-2026"
                      className="text-accent hover:text-accent/80 underline transition-colors"
                    >
                      Trending Final Year Project Ideas for 2026
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Build with WEBUILDPRO */}
              <h2
                id="build-with-webuildpro"
                className="text-xl font-bold text-foreground mt-10 mb-4 leading-snug"
              >
                Build Your AI Project with WEBUILDPRO, Bangalore
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Bring any AI project idea above or your own — WEBUILDPRO builds AI-based final year projects in
                Bangalore, online and offline, with the trained model, source code and a walkthrough.
              </p>

              {/* Bottom CTA block */}
              <div className="bg-card border border-border rounded p-6 flex flex-col gap-4">
                <WhatsAppCTA label="WhatsApp WEBUILDPRO — Build My AI Final Year Project" />
                <a
                  href="tel:+919538208573"
                  className="inline-flex items-center justify-center gap-2 border border-border hover:border-accent text-foreground hover:text-accent font-semibold text-sm px-6 py-3 rounded transition-colors w-full sm:w-auto"
                >
                  <Icon name="PhoneIcon" size={14} />
                  Call +91 95382 08573
                </a>
              </div>
            </article>

            {/* Sticky TOC */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  On this page
                </p>
                <nav aria-label="Table of contents">
                  <ul className="space-y-1">
                    {tocItems.map(({ id, label }) => (
                      <li key={id}>
                        <a
                          href={`#${id}`}
                          className={`block text-xs py-1 px-2 rounded transition-colors leading-snug ${
                            activeId === id
                              ? 'text-accent bg-accent/10 font-medium' :'text-muted-foreground hover:text-foreground'
                          }`}
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}
