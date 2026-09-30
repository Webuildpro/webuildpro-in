import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
import LazyPageExtras from '@/components/LazyPageExtras';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';

import { blogArticles } from '@/lib/data/blog';
import CircuitDivider from '@/components/CircuitDivider';
import Icon from '@/components/ui/AppIcon';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Engineering Blog — Guides & Insights | WEBUILDPRO India Bangalore',
  description:
    'Engineering blog from WEBUILDPRO India Bangalore — project selection, costs, timelines, hardware prototyping & drone development. Written by engineers who build, not marketers.',
  alternates: {
    canonical: `${BASE_URL}/blog`,
    languages: { 'en-IN': `${BASE_URL}/blog` },
  },
  openGraph: {
    title: 'Engineering Blog | WEBUILDPRO India Bangalore',
    description: 'Practical engineering guides from WEBUILDPRO India in Bangalore.',
    images: [{ url: '/assets/images/wbinlogo-1786121366410.jpeg', width: 1200, height: 630, alt: 'WEBUILDPRO India engineering blog' }],
  },
};

export default function BlogListingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
        ]}
      />
      <Header />
      <main id="main-content" className="min-h-screen bg-background pt-24 pb-[calc(64px+env(safe-area-inset-bottom))] lg:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li aria-hidden="true"><Icon name="ChevronRightIcon" size={12} /></li>
              <li className="text-foreground font-medium" aria-current="page">Blog</li>
            </ol>
          </nav>

          <div className="mb-12">
            <span className="micro-label block mb-3">// ENGINEERING INSIGHTS</span>
            <h1 className="text-hero-lg font-bold text-foreground mb-4">
              Engineering guides from our Bangalore lab.
            </h1>
            <p className="text-muted-foreground text-base max-w-2xl">
              Practical guides on final year projects, hardware prototyping, drone development and engineering internships in Bangalore — written by engineers who build, not marketers who write.
            </p>
          </div>

          <div className="space-y-4">
            {blogArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="block bg-card border border-border rounded p-6 hover:border-primary/40 transition-colors group"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="chip-cyan text-xs">{tag}</span>
                  ))}
                </div>
                <h2 className="font-bold text-foreground text-base mb-2 group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{article.description}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Icon name="ClockIcon" size={12} className="text-accent" />
                    {article.readTime}
                  </span>
                  <span className="font-mono">{new Date(article.datePublished).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="flex items-center gap-1 text-accent font-medium ml-auto">
                    Read article
                    <Icon name="ArrowRightIcon" size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <CircuitDivider />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
          <span className="micro-label block mb-3">// NEED HELP WITH YOUR PROJECT?</span>
          <h2 className="text-section-xl font-bold text-foreground mb-4">
            Talk to an engineer in Bangalore.
          </h2>
          <p className="text-muted-foreground text-sm mb-8">
            Free 15-minute call. Fixed quote in 24 hours. No obligation.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold">
            <Icon name="DocumentTextIcon" size={16} />
            Get a Free Project Quote
          </Link>
        </div>
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}
