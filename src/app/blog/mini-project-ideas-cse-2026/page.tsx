import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
import LazyPageExtras from '@/components/LazyPageExtras';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import BlogPostingJsonLd from '@/components/BlogPostingJsonLd';

import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';
const SLUG = 'mini-project-ideas-cse-2026';
const PAGE_TITLE = 'Mini Project Ideas for CSE Students (2026)';
const PAGE_DESCRIPTION =
  '30+ simple mini project ideas for CSE/ISE/BCA/MCA students in Bangalore. Web, Python, AI & app projects with source code. Perfect for 1st–6th semester students.';
const PAGE_DATE = '2026-08-03';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: `${BASE_URL}/blog/${SLUG}`,
    languages: { 'en-IN': `${BASE_URL}/blog/${SLUG}` },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    type: 'article',
    publishedTime: PAGE_DATE,
    modifiedTime: PAGE_DATE,
    authors: ['WEBUILDPRO India'],
    images: [
      {
        url: '/assets/images/og-webuildpro.jpg',
        width: 1200,
        height: 630,
        alt: 'Mini Project Ideas for CSE Students 2026 — WEBUILDPRO Bangalore',
      },
    ],
  },
};

const tocItems = [
  { id: 'web-development-mini-projects', label: 'Web Development Mini Projects' },
  { id: 'python-mini-projects', label: 'Python Mini Projects' },
  { id: 'ai-ml-mini-projects', label: 'AI / Machine Learning Mini Projects' },
  { id: 'app-development-mini-projects', label: 'App Development Mini Projects' },
  { id: 'utility-mini-system-projects', label: 'Utility & Mini System Projects' },
  { id: 'how-to-choose-cse-mini-project', label: 'How to Choose the Right CSE Mini Project' },
];

interface MiniProjectCardProps {
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate';
}

function MiniProjectCard({ title, description, difficulty }: MiniProjectCardProps) {
  const difficultyColor =
    difficulty === 'Beginner' ?'bg-green-500/10 text-green-400 border-green-500/20' :'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';

  const whatsappMsg = encodeURIComponent(
    `Hi, I need help with my CSE mini project: ${title}`
  );

  return (
    <div className="bg-card border border-border rounded p-5 mb-4">
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <h3 className="font-bold text-foreground text-sm leading-snug flex-1">{title}</h3>
        <span className={`text-xs px-2 py-0.5 rounded border font-mono flex-shrink-0 ${difficultyColor}`}>
          {difficulty}
        </span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{description}</p>
      <a
        href={`https://wa.me/919591570099?text=${whatsappMsg}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent/80 transition-colors font-medium"
      >
        <Icon name="ChatBubbleLeftRightIcon" size={12} />
        Enquire about this project
      </a>
    </div>
  );
}

export default function MiniProjectIdeasCSEPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'Mini Project Ideas for CSE Students (2026)', url: `/blog/${SLUG}` },
        ]}
      />
      <BlogPostingJsonLd
        headline="Mini Project Ideas for CSE Students (2026)"
        datePublished={PAGE_DATE}
        dateModified={PAGE_DATE}
        description={PAGE_DESCRIPTION}
        slug={SLUG}
      />
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
              <li>
                <Link href="/mini-projects" className="hover:text-foreground transition-colors">
                  Mini Projects
                </Link>
              </li>
              <li aria-hidden="true">
                <Icon name="ChevronRightIcon" size={12} />
              </li>
              <li className="text-foreground font-medium truncate max-w-xs" aria-current="page">
                CSE Mini Project Ideas 2026
              </li>
            </ol>
          </nav>

          {/* Article header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {['CSE Projects', 'Mini Projects', 'Web & Python & AI'].map((tag) => (
                <span key={tag} className="chip-cyan text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-hero-lg font-bold text-foreground mb-3 leading-tight">
              Mini Project Ideas for CSE Students (2026)
            </h1>
            <p className="text-muted-foreground text-sm mb-4">Last updated: August 2026</p>
            <p className="text-muted-foreground text-base mb-6">
              30+ simple mini project ideas for CSE/ISE/BCA/MCA students in Bangalore. Web, Python, AI &amp; app projects
              with source code. Perfect for 1st–6th semester students.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono border-t border-border pt-4">
              <span>WEBUILDPRO India</span>
              <span>·</span>
              <span>August 2026</span>
              <span>·</span>
              <span>13 min read</span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Article content */}
            <article className="lg:col-span-3">
              {/* Intro */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                Searching for <strong className="text-foreground">mini project ideas for CSE</strong> that are
                simple to build but still look impressive? This 2026 list gives you 30+ beginner-friendly mini
                project ideas for Computer Science and ISE/BCA/MCA students from 1st to 6th semester — practical web,
                Python, app and AI/ML builds you can complete and explain confidently. WEBUILDPRO helps students in
                Bangalore build these with full source code and guidance, online or offline. Each idea lists what it
                does, the tech stack, and why it&apos;s a smart pick for your level.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                For a complete final year project, check out our guide on{' '}
                <Link href="/blog/final-year-engineering-project-makers-in-bangalore" className="text-accent hover:underline">
                  who makes final year projects in Bangalore
                </Link>{' '}
                — and what the process looks like end to end.
              </p>

              {/* Mobile TOC */}
              <div className="lg:hidden bg-card border border-border rounded p-5 mb-8">
                <h2 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                  <Icon name="ListBulletIcon" size={16} />
                  Table of Contents
                </h2>
                <ol className="space-y-2">
                  {tocItems.map((item, idx) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-xs text-accent hover:text-accent/80 transition-colors flex items-start gap-2"
                      >
                        <span className="font-mono text-muted-foreground flex-shrink-0">{idx + 1}.</span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Web Development Mini Projects */}
              <h2
                id="web-development-mini-projects"
                className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug"
              >
                Web Development Mini Projects
              </h2>
              <MiniProjectCard
                title="Personal Portfolio Website"
                description="A responsive site showcasing your skills and projects using HTML, CSS and JavaScript. Useful beyond marks."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="To-Do List App"
                description="Add, complete and delete tasks with data saved in the browser. A perfect JavaScript starter."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="Weather App (API-Based)"
                description="Shows live weather for any city using a free weather API. Teaches API calls."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="Online Quiz Application"
                description="A timed multiple-choice quiz with scoring. Great logic practice."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="Student Result Management System"
                description="Store and display student marks with a simple front + backend."
                difficulty="Intermediate"
              />
              <MiniProjectCard
                title="E-Commerce Product Page"
                description="A cart-and-checkout demo store with product listing."
                difficulty="Intermediate"
              />
              <MiniProjectCard
                title="Blog Website with Admin Panel"
                description="Create, edit and delete posts with a basic login."
                difficulty="Intermediate"
              />

              <CircuitDivider className="my-8" />

              {/* Python Mini Projects */}
              <h2
                id="python-mini-projects"
                className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug"
              >
                Python Mini Projects
              </h2>
              <MiniProjectCard
                title="Password Generator & Strength Checker"
                description="Creates strong random passwords and rates their strength."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="QR Code Generator"
                description="Turns any text or link into a QR code image. Quick and useful."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="Expense Tracker"
                description="Logs income/expenses and shows totals and charts."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="File Organizer Script"
                description="Automatically sorts files in a folder by type. A handy automation project."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="Currency Converter"
                description="Converts between currencies using live exchange-rate data."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="Web Scraper"
                description="Pulls data (news headlines, prices) from a site into a file."
                difficulty="Intermediate"
              />
              <MiniProjectCard
                title="Email Automation Tool"
                description="Sends bulk/scheduled emails with Python."
                difficulty="Intermediate"
              />

              <CircuitDivider className="my-8" />

              {/* AI / ML Mini Projects */}
              <h2
                id="ai-ml-mini-projects"
                className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug"
              >
                AI / Machine Learning Mini Projects (beginner-friendly)
              </h2>
              <MiniProjectCard
                title="Handwritten Digit Recognition"
                description="Recognises digits 0–9 with a simple ML model. The classic first ML project."
                difficulty="Intermediate"
              />
              <MiniProjectCard
                title="Spam Email Classifier"
                description="Labels messages as spam or not using basic NLP."
                difficulty="Intermediate"
              />
              <MiniProjectCard
                title="Face Detection App"
                description="Detects faces in an image or webcam feed with OpenCV."
                difficulty="Intermediate"
              />
              <MiniProjectCard
                title="Movie Recommendation System"
                description="Suggests movies based on user preferences."
                difficulty="Intermediate"
              />
              <MiniProjectCard
                title="Sentiment Analysis of Tweets/Reviews"
                description="Classifies text as positive or negative."
                difficulty="Intermediate"
              />
              <MiniProjectCard
                title="Iris/Flower Classifier"
                description="Predicts flower type from measurements — a gentle intro to ML."
                difficulty="Beginner"
              />

              <CircuitDivider className="my-8" />

              {/* App Development Mini Projects */}
              <h2
                id="app-development-mini-projects"
                className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug"
              >
                App Development Mini Projects
              </h2>
              <MiniProjectCard
                title="Calculator App"
                description="A clean mobile calculator — a solid first app."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="Notes / Reminder App"
                description="Save notes with reminders."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="BMI Calculator App"
                description="Calculates and categorises body mass index."
                difficulty="Beginner"
              />
              <MiniProjectCard
                title="Expense Manager App"
                description="Track spending on mobile with categories."
                difficulty="Intermediate"
              />
              <MiniProjectCard
                title="Quiz App"
                description="A mobile quiz with scoring and levels."
                difficulty="Intermediate"
              />

              <CircuitDivider className="my-8" />

              {/* Utility & Mini System Projects */}
              <h2
                id="utility-mini-system-projects"
                className="text-xl font-bold text-foreground mt-10 mb-6 leading-snug"
              >
                Utility &amp; Mini System Projects
              </h2>
              <MiniProjectCard
                title="Library Management System"
                description="Issue/return books with a simple database."
                difficulty="Intermediate"
              />
              <MiniProjectCard
                title="Chat Application (Basic)"
                description="Real-time messaging between two users."
                difficulty="Intermediate"
              />
              <MiniProjectCard
                title="URL Shortener"
                description="Turns long links into short ones."
                difficulty="Intermediate"
              />
              <MiniProjectCard
                title="Attendance Management System"
                description="Mark and track attendance with records."
                difficulty="Intermediate"
              />
              <MiniProjectCard
                title="Simple Chatbot"
                description="A rule-based Q&A bot for a website or college FAQ."
                difficulty="Intermediate"
              />

              <CircuitDivider className="my-8" />

              {/* How to Choose */}
              <h2
                id="how-to-choose-cse-mini-project"
                className="text-xl font-bold text-foreground mt-10 mb-4 leading-snug"
              >
                How to Choose the Right CSE Mini Project
              </h2>
              <div className="bg-card border border-border rounded p-6 mb-8">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Match the project to your current skills. If you&apos;re just starting (1st–3rd sem), a to-do
                  app, portfolio site, or Python utility teaches core concepts and always demos cleanly. From 4th
                  sem, add a database or an API to show fuller-stack ability, and if you&apos;re comfortable, try a
                  beginner ML project like digit recognition — it stands out. Pick something you can explain end to
                  end, use free tools and libraries, and make sure it runs on your laptop reliably, not just once.
                  Want it built with clean, explained source code you can defend in your viva? That&apos;s what
                  WEBUILDPRO does for CSE students in Bangalore.
                </p>
              </div>

              {/* CTA Block */}
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-10">
                <h2 className="text-lg font-bold text-foreground mb-2">
                  Build your mini project with WEBUILDPRO, Bangalore
                </h2>
                <p className="text-sm text-muted-foreground mb-5">
                  We build all 30+ CSE mini projects listed above — clean source code, working demo, and full
                  explanation so you can defend it in your viva. Online and offline delivery across Bangalore.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/mini-projects"
                    className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded text-sm font-semibold hover:bg-accent/90 transition-colors"
                  >
                    <Icon name="RocketLaunchIcon" size={16} />
                    View Mini Projects &amp; Pricing
                  </Link>
                  <a
                    href="https://wa.me/919591570099?text=Hi%2C%20I%20need%20help%20with%20my%20CSE%20mini%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-green-700 transition-colors"
                  >
                    <Icon name="ChatBubbleLeftRightIcon" size={16} />
                    WhatsApp Us
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded text-sm font-semibold hover:bg-card transition-colors"
                  >
                    Get a Free Quote
                  </Link>
                </div>
              </div>

              {/* Internal links */}
              <div className="border-t border-border pt-8">
                <h3 className="text-sm font-bold text-foreground mb-4">Related reading</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/mini-projects"
                      className="text-sm text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5"
                    >
                      <Icon name="ArrowRightIcon" size={12} />
                      Browse all mini projects at WEBUILDPRO — with pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/mini-project-ideas-ece-2026"
                      className="text-sm text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5"
                    >
                      <Icon name="ArrowRightIcon" size={12} />
                      Mini Project Ideas for ECE Students (2026)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/how-to-choose-final-year-engineering-project"
                      className="text-sm text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5"
                    >
                      <Icon name="ArrowRightIcon" size={12} />
                      How to Choose a Final Year Engineering Project That Actually Impresses the Panel
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/projects/cse"
                      className="text-sm text-accent hover:text-accent/80 transition-colors flex items-center gap-1.5"
                    >
                      <Icon name="ArrowRightIcon" size={12} />
                      Browse all CSE final year projects at WEBUILDPRO
                    </Link>
                  </li>
                </ul>
              </div>
            </article>

            {/* Desktop sticky TOC sidebar */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28">
                <div className="bg-card border border-border rounded p-5">
                  <h2 className="text-xs font-bold text-foreground mb-4 uppercase tracking-wider flex items-center gap-2">
                    <Icon name="ListBulletIcon" size={14} />
                    Contents
                  </h2>
                  <ol className="space-y-2.5">
                    {tocItems.map((item, idx) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="text-xs text-muted-foreground hover:text-accent transition-colors flex items-start gap-2 leading-snug"
                        >
                          <span className="font-mono text-muted-foreground/50 flex-shrink-0 mt-0.5">
                            {idx + 1}.
                          </span>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Sidebar CTA */}
                <div className="mt-5 bg-accent/5 border border-accent/20 rounded p-4">
                  <p className="text-xs font-bold text-foreground mb-2">Need it built?</p>
                  <p className="text-xs text-muted-foreground mb-3">
                    WEBUILDPRO builds CSE mini projects in Bangalore with source code &amp; viva support.
                  </p>
                  <Link
                    href="/mini-projects"
                    className="block text-center bg-accent text-accent-foreground px-3 py-2 rounded text-xs font-semibold hover:bg-accent/90 transition-colors mb-2"
                  >
                    View Pricing
                  </Link>
                  <a
                    href="https://wa.me/919591570099?text=Hi%2C%20I%20need%20help%20with%20my%20CSE%20mini%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-green-600 text-white px-3 py-2 rounded text-xs font-semibold hover:bg-green-700 transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>
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
