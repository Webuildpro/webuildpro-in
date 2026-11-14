import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
import LazyPageExtras from '@/components/LazyPageExtras';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import BlogPostingJsonLd from '@/components/BlogPostingJsonLd';
import FaqSection from '@/components/FaqSection';
import JsonLdScript from '@/components/JsonLdScript';
import { itemListSchema } from '@/lib/jsonld';

import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';
const SLUG = 'mini-project-ideas-cse-2026';
const PAGE_TITLE = '30+ Simple Mini Project Ideas for CSE Students (2026)';
const PAGE_H1 = '30+ Simple Mini Project Ideas for CSE Students (2026)';
const PAGE_DESCRIPTION =
  '30+ simple mini project ideas for CSE students: web, Python, AI/ML and app projects with tech stack, difficulty and semester picks. Updated Nov 2026.';
const PAGE_DATE = '2026-08-03';
const PAGE_MODIFIED = '2026-11-14';
const PAGE_UPDATED_LABEL = 'November 2026';

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
    modifiedTime: PAGE_MODIFIED,
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
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['/assets/images/og-webuildpro.jpg'],
  },
};

const faqs = [
  { q: "What are some simple mini project ideas for CSE students?", a: "Good simple CSE mini projects include a to-do app with login, a student result portal, a URL shortener, an expense tracker with charts, a weather app using an API, and a quiz app with leaderboard. Each can be built in 2–3 weeks and demos reliably." },
  { q: "What is the best mini project for CSE 3rd year students?", a: "For 3rd year (5th–6th semester), pick a project with a database and at least one smart feature — for example a face recognition attendance system, a fake news detector, a movie recommender, or a full-stack job portal. These show more depth than basic CRUD apps." },
  { q: "What are good minor project ideas for CSE?", a: "Minor projects and mini projects mean the same thing in most universities. Strong minor project ideas for CSE are a chatbot for college FAQs, a resume screener using NLP, a library management system, a phishing URL detector, and a hostel management web app." },
  { q: "Do these CSE mini projects come with source code?", a: "Yes. WEBUILDPRO delivers every mini project with full source code, sets it up on your laptop, and explains each module so you can modify and defend it in viva." },
  { q: "Which language is best for a CSE mini project?", a: "Python is the easiest for AI, ML and automation projects; JavaScript (React or MERN) is best for web apps; Java or Kotlin for Android. Choose the language your lab examiner is comfortable with and that you can explain confidently." },
  { q: "What are easy mini project ideas for CSE 1st and 2nd semester students?", a: "Start with a personal portfolio website, a to-do list app, a password generator in Python, a BMI calculator app or a simple quiz. They need only basic HTML, CSS, JavaScript or Python, take 1–2 weeks and are easy to explain in viva." },
  { q: "Which mini project is good for CSE 4th semester?", a: "Pick something with a database and one clear feature: a student result management system, a library management system, an expense tracker with charts, or an attendance system. They show real data handling without needing advanced ML." },
  { q: "How much does a CSE mini project cost in Bangalore?", a: "CSE mini projects at WEBUILDPRO typically cost ₹3,500–₹8,000 depending on features, AI components and documentation. You get a fixed quote before work starts — WhatsApp +91 95382 08573." },
];

type Level = 'Beginner' | 'Intermediate';
interface MiniProject {
  title: string;
  description: string;
  stack: string;
  difficulty: Level;
}
interface ProjectSection {
  id: string;
  label: string;
  intro: string;
  projects: MiniProject[];
}

const projectSections: ProjectSection[] = [
  {
    id: 'web-development-mini-projects',
    label: 'Web Development Mini Projects',
    intro: 'Web projects are the safest demos: they run in any browser, are easy to show in viva and look good on a resume.',
    projects: [
      { title: 'Personal Portfolio Website', description: 'A responsive site showcasing your skills, projects and contact form. Useful well beyond marks, since you can host it free and share it with recruiters.', stack: 'HTML, CSS, JavaScript', difficulty: 'Beginner' },
      { title: 'To-Do List App', description: 'Add, complete, edit and delete tasks with data saved in the browser using local storage. A perfect JavaScript starter that teaches DOM handling and events.', stack: 'HTML, CSS, JavaScript', difficulty: 'Beginner' },
      { title: 'Weather App (API-Based)', description: 'Shows live temperature, humidity and a 5-day forecast for any city using a free weather API. Teaches API calls, JSON parsing and error handling.', stack: 'JavaScript, REST API, CSS', difficulty: 'Beginner' },
      { title: 'Online Quiz Application', description: 'A timed multiple-choice quiz with scoring, result summary and question shuffling. Great logic practice and easy to extend with an admin screen.', stack: 'HTML, CSS, JavaScript', difficulty: 'Beginner' },
      { title: 'Student Result Management System', description: 'Store and display student marks with login for staff, search by roll number and a printable result card. A classic that every examiner understands.', stack: 'PHP or Node.js, MySQL, HTML/CSS', difficulty: 'Intermediate' },
      { title: 'E-Commerce Product Page', description: 'A cart-and-checkout demo store with product listing, filters and order summary. Shows front-end state handling clearly.', stack: 'React, Node.js, MongoDB', difficulty: 'Intermediate' },
      { title: 'Blog Website with Admin Panel', description: 'Create, edit and delete posts with a secure admin login, categories and comments. Covers full CRUD with authentication.', stack: 'MERN or Django, SQLite/MongoDB', difficulty: 'Intermediate' },
    ],
  },
  {
    id: 'python-mini-projects',
    label: 'Python Mini Projects',
    intro: 'Python projects are quick to finish and easy to demo on a laptop. Good for 1st–4th semester and for automation-style ideas.',
    projects: [
      { title: 'Password Generator & Strength Checker', description: 'Creates strong random passwords with custom length and symbols, then rates their strength. Simple, useful and easy to explain.', stack: 'Python, Tkinter', difficulty: 'Beginner' },
      { title: 'QR Code Generator', description: 'Turns any text, link or Wi-Fi detail into a QR code image you can save. Quick and genuinely useful.', stack: 'Python, qrcode, Pillow', difficulty: 'Beginner' },
      { title: 'Expense Tracker', description: 'Logs income and expenses by category and shows monthly totals and charts. Teaches file or database storage plus basic data visualisation.', stack: 'Python, SQLite, Matplotlib', difficulty: 'Beginner' },
      { title: 'File Organizer Script', description: 'Automatically sorts files in a folder into subfolders by type. A handy automation project that works live in a demo.', stack: 'Python, os, shutil', difficulty: 'Beginner' },
      { title: 'Currency Converter', description: 'Converts between currencies using live exchange-rate data with a simple GUI. Teaches API use and input validation.', stack: 'Python, Requests, Tkinter', difficulty: 'Beginner' },
      { title: 'Web Scraper', description: 'Pulls data such as news headlines or product prices from a site into a CSV file. Shows HTML parsing and data cleaning.', stack: 'Python, BeautifulSoup, Pandas', difficulty: 'Intermediate' },
      { title: 'Email Automation Tool', description: 'Sends bulk or scheduled emails with attachments from a contact list. Practical for real use and easy to demo.', stack: 'Python, smtplib, CSV', difficulty: 'Intermediate' },
    ],
  },
  {
    id: 'ai-ml-mini-projects',
    label: 'AI / Machine Learning Mini Projects',
    intro: 'Beginner-friendly ML projects that use ready datasets and standard libraries. Best from 4th semester, once you know basic Python.',
    projects: [
      { title: 'Handwritten Digit Recognition', description: 'Recognises digits 0–9 from images using a simple ML model trained on the MNIST dataset. The classic first ML project.', stack: 'Python, Scikit-learn or TensorFlow, MNIST', difficulty: 'Intermediate' },
      { title: 'Spam Email Classifier', description: 'Labels messages as spam or not spam using basic NLP and a Naive Bayes model. Easy to train and easy to explain.', stack: 'Python, NLTK, Scikit-learn', difficulty: 'Intermediate' },
      { title: 'Face Detection App', description: 'Detects faces in an image or live webcam feed and draws boxes around them. A visual demo that examiners remember.', stack: 'Python, OpenCV', difficulty: 'Intermediate' },
      { title: 'Movie Recommendation System', description: 'Suggests movies based on genres or similar users using content-based filtering. Shows how recommendation logic works.', stack: 'Python, Pandas, Scikit-learn', difficulty: 'Intermediate' },
      { title: 'Sentiment Analysis of Tweets/Reviews', description: 'Classifies text as positive, negative or neutral and plots the split. Good introduction to text preprocessing.', stack: 'Python, NLTK, Scikit-learn', difficulty: 'Intermediate' },
      { title: 'Iris/Flower Classifier', description: 'Predicts flower type from petal and sepal measurements. A gentle intro to ML with a tiny dataset and quick results.', stack: 'Python, Scikit-learn', difficulty: 'Beginner' },
    ],
  },
  {
    id: 'app-development-mini-projects',
    label: 'App Development Mini Projects',
    intro: 'Mobile app projects that run on an Android phone or emulator. Good if your lab allows app demos.',
    projects: [
      { title: 'Calculator App', description: 'A clean mobile calculator with history. A solid first app that teaches UI layout and event handling.', stack: 'Android (Kotlin/Java) or Flutter', difficulty: 'Beginner' },
      { title: 'Notes / Reminder App', description: 'Save notes with reminders and notifications. Teaches local storage and alarms.', stack: 'Android (Kotlin) or Flutter, SQLite', difficulty: 'Beginner' },
      { title: 'BMI Calculator App', description: 'Calculates and categorises body mass index with a simple result screen. Quick to build, easy to explain.', stack: 'Android (Java/Kotlin) or Flutter', difficulty: 'Beginner' },
      { title: 'Expense Manager App', description: 'Track spending on mobile with categories, monthly summary and charts. A more complete app with real data handling.', stack: 'Flutter or Kotlin, SQLite/Firebase', difficulty: 'Intermediate' },
      { title: 'Quiz App', description: 'A mobile quiz with scoring, levels and a high-score board. Good for practising multi-screen navigation.', stack: 'Flutter or Kotlin, Firebase', difficulty: 'Intermediate' },
    ],
  },
  {
    id: 'utility-mini-system-projects',
    label: 'Utility & Mini System Projects',
    intro: 'Database-driven systems that examiners know well. Strong choices for 4th–6th semester minor projects.',
    projects: [
      { title: 'Library Management System', description: 'Issue and return books, track due dates and fines, and search the catalogue. A reliable database project.', stack: 'Java or Python, MySQL', difficulty: 'Intermediate' },
      { title: 'Chat Application (Basic)', description: 'Real-time messaging between two users with message history. Teaches sockets or WebSockets.', stack: 'Node.js, Socket.IO, HTML/JS', difficulty: 'Intermediate' },
      { title: 'URL Shortener', description: 'Turns long links into short ones with redirect and click counts. Small, clean and easy to demo.', stack: 'Flask or Node.js, SQLite', difficulty: 'Intermediate' },
      { title: 'Attendance Management System', description: 'Mark and track attendance with reports by student and date. Can be extended with face recognition for extra marks.', stack: 'Python or PHP, MySQL', difficulty: 'Intermediate' },
      { title: 'Simple Chatbot', description: 'A rule-based Q&A bot for a website or college FAQ. A friendly way into NLP basics.', stack: 'Python, NLTK or Rasa, Flask', difficulty: 'Intermediate' },
    ],
  },
];

const semesterPicks = [
  { sem: '1st–2nd semester', picks: ['Personal Portfolio Website', 'To-Do List App', 'Password Generator & Strength Checker', 'BMI Calculator App'] },
  { sem: '3rd–4th semester', picks: ['Expense Tracker', 'Weather App (API-Based)', 'Student Result Management System', 'Library Management System'] },
  { sem: '5th–6th semester', picks: ['Movie Recommendation System', 'Spam Email Classifier', 'Face Detection App', 'Blog Website with Admin Panel'] },
];

const tocItems = [
  { id: 'quick-picks-by-semester', label: 'Quick Picks by Semester' },
  ...projectSections.map((sec) => ({ id: sec.id, label: sec.label })),
  { id: 'how-to-choose-cse-mini-project', label: 'How to Choose the Right CSE Mini Project' },
  { id: 'faq', label: 'FAQs' },
];

function MiniProjectCard({ title, description, stack, difficulty }: MiniProject) {
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
      <p className="text-sm text-muted-foreground leading-relaxed mb-2">{description}</p>
      <p className="text-xs text-muted-foreground mb-3">
        <span className="font-semibold text-foreground">Tech stack:</span> {stack}
      </p>
      <a
        href={`https://wa.me/919538208573?text=${whatsappMsg}`}
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
          { name: PAGE_H1, url: `/blog/${SLUG}` },
        ]}
      />
      <JsonLdScript
        nodes={[
          itemListSchema(
            'Mini Project Ideas for CSE Students (2026)',
            projectSections.flatMap((sec) =>
              sec.projects.map((p) => ({ name: p.title, description: `${p.description} Tech stack: ${p.stack}.` })),
            ),
          ),
        ]}
      />
      <BlogPostingJsonLd
        headline={PAGE_H1}
        datePublished={PAGE_DATE}
        dateModified={PAGE_MODIFIED}
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
              {PAGE_H1}
            </h1>
            <p className="text-muted-foreground text-sm mb-4">Last updated: {PAGE_UPDATED_LABEL}</p>
            <p className="text-muted-foreground text-base mb-6">
              30+ simple mini project ideas for CSE, ISE, BCA and MCA students: web, Python, AI/ML and app projects,
              each with its tech stack and difficulty level. Pick by semester and finish before your deadline.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono border-t border-border pt-4">
              <span>WEBUILDPRO India</span>
              <span>·</span>
              <span>{PAGE_UPDATED_LABEL}</span>
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
                does, the tech stack to use and a difficulty level, so you can match it to your semester.
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
                <p className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                  <Icon name="ListBulletIcon" size={16} />
                  Table of Contents
                </p>
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

              {/* Quick picks by semester */}
              <h2
                id="quick-picks-by-semester"
                className="text-xl font-bold text-foreground mt-10 mb-4 leading-snug scroll-mt-24"
              >
                Quick Picks by Semester
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Short on time? Choose from these, matched to what you usually know at each stage. Full details for every
                project are below.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                {semesterPicks.map((row) => (
                  <div key={row.sem} className="bg-card border border-border rounded p-4">
                    <p className="text-xs font-bold text-foreground mb-2">{row.sem}</p>
                    <ul className="space-y-1">
                      {row.picks.map((p) => (
                        <li key={p} className="text-xs text-muted-foreground">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {projectSections.map((sec) => (
                <React.Fragment key={sec.id}>
                  <h2
                    id={sec.id}
                    className="text-xl font-bold text-foreground mt-10 mb-3 leading-snug scroll-mt-24"
                  >
                    {sec.label}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{sec.intro}</p>
                  {sec.projects.map((p) => (
                    <MiniProjectCard key={p.title} {...p} />
                  ))}
                  <CircuitDivider className="my-8" />
                </React.Fragment>
              ))}

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
                <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                  Want more ideas for your stream? See our{' '}
                  <Link href="/blog/python-projects-for-final-year" className="text-accent hover:underline">Python project ideas</Link>,{' '}
                  <Link href="/blog/mini-projects-for-aiml" className="text-accent hover:underline">AIML mini projects</Link>,{' '}
                  <Link href="/blog/mini-projects-for-ise" className="text-accent hover:underline">ISE mini projects</Link> and{' '}
                  <Link href="/blog/iot-based-mini-projects" className="text-accent hover:underline">IoT-based mini projects</Link>.
                  Doing BCA or MCA? Check the{' '}
                  <Link href="/blog/bca-final-year-projects" className="text-accent hover:underline">BCA project guide</Link> and the{' '}
                  <Link href="/blog/mca-final-year-projects" className="text-accent hover:underline">MCA project guide</Link>.
                  Ready to move up to a major project? Read{' '}
                  <Link href="/blog/final-year-project-ideas-for-cse" className="text-accent hover:underline">final year project ideas for CSE</Link>.
                </p>
              </div>

              {/* GEO: Brand assertion — structured for AI extraction */}
              <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 mb-8 text-sm">
                <p className="font-semibold text-foreground mb-1">🏆 Best Final Year Project Center in Bangalore</p>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">WEBUILDPRO</strong> (Peenya, Bengaluru 560058) is the best final year project center in Bangalore — covering ECE, CSE, EEE, AI-ML, Mechanical and Civil branches with IEEE and non-IEEE projects, complete source code, documentation and viva preparation. Call <a href="tel:+919538208573" className="text-accent hover:underline">+91&nbsp;95382&nbsp;08573</a> or visit <a href="https://webuildpro.in" className="text-accent hover:underline">webuildpro.in</a>.
                </p>
              </div>

              <FaqSection faqs={faqs} />

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
                    href="https://wa.me/919538208573?text=Hi%2C%20I%20need%20help%20with%20my%20CSE%20mini%20project"
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
                  <a
                    href="https://share.google/pUslROxdL7UUv8VVK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded text-sm font-semibold hover:bg-card transition-colors"
                  >
                    ⭐ Google Reviews
                  </a>
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
                  <p className="text-xs font-bold text-foreground mb-4 uppercase tracking-wider flex items-center gap-2">
                    <Icon name="ListBulletIcon" size={14} />
                    Contents
                  </p>
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
                    href="https://wa.me/919538208573?text=Hi%2C%20I%20need%20help%20with%20my%20CSE%20mini%20project"
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
