import CircuitDivider from '@/components/CircuitDivider';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
import Header from '@/components/Header';
import Icon from '@/components/ui/AppIcon';
import { blogArticles, getBlogArticle } from '@/lib/data/blog';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';
import LazyPageExtras from '@/components/LazyPageExtras';
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd';
import BlogPostingJsonLd from '@/components/BlogPostingJsonLd';


const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export async function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) return {};
  return {
    metadataBase: new URL(BASE_URL),
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `${BASE_URL}/blog/${slug}`,
      languages: { 'en-IN': `${BASE_URL}/blog/${slug}` },
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: ['WEBUILDPRO India'],
      images: [{ url: '/assets/images/wbinlogo-1786121366410.jpeg', width: 1200, height: 630, alt: article.title }],
    },
  };
}

function renderContent(content: string) {
  // Simple markdown-to-HTML renderer for the article content
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) { i++; continue; }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-xl font-bold text-foreground mt-10 mb-4 leading-snug">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(
        <p key={i} className="font-semibold text-foreground text-sm mb-3">
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith('| ')) {
      // Table
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }
      const headers = tableLines[0].split('|').filter(Boolean).map(s => s.trim());
      const rows = tableLines.slice(2).map(row => row.split('|').filter(Boolean).map(s => s.trim()));
      elements.push(
        <div key={`table-${i}`} className="overflow-x-auto my-6">
          <table className="w-full text-sm border border-border rounded">
            <thead>
              <tr className="bg-card">
                {headers.map((h, j) => (
                  <th key={j} className="px-4 py-2 text-left text-xs font-mono text-accent border-b border-border">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, j) => (
                <tr key={j} className="border-b border-border last:border-0">
                  {row.map((cell, k) => (
                    <td key={k} className="px-4 py-2 text-muted-foreground">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    } else if (line.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('- ')) {
        items.push(lines[i].trim().slice(2));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="space-y-2 my-4 ml-4">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Icon name="ChevronRightIcon" size={12} className="text-accent flex-shrink-0 mt-1" />
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else {
      // Regular paragraph — handle inline bold and links
      const html = line
        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-accent hover:text-accent/80 underline transition-colors">$1</a>');
      elements.push(
        <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: html }} />
      );
    }
    i++;
  }

  return elements;
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) notFound();

  // Extract headings for table of contents
  const headings = article.content
    .split('\n')
    .filter((line) => line.trim().startsWith('## '))
    .map((line) => line.trim().slice(3));

  // Format date in a locale-independent way to avoid hydration mismatch
  const formattedDate = new Date(article.datePublished + 'T00:00:00Z').toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: article.title.split(' | ')[0], url: `/blog/${slug}` },
        ]}
      />
      <BlogPostingJsonLd
        headline={article.title.split(' | ')[0]}
        datePublished={article.datePublished}
        dateModified={article.dateModified}
        description={article.description}
        slug={slug}
      />
      <Header />
      <main id="main-content" className="min-h-screen bg-background pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li aria-hidden="true"><Icon name="ChevronRightIcon" size={12} /></li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li aria-hidden="true"><Icon name="ChevronRightIcon" size={12} /></li>
              <li className="text-foreground font-medium truncate max-w-xs" aria-current="page">{article.title}</li>
            </ol>
          </nav>

          {/* Article header */}
          <header className="mb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag) => (
                <span key={tag} className="chip-cyan text-xs">{tag}</span>
              ))}
            </div>
            <h1 className="text-hero-lg font-bold text-foreground mb-4 leading-tight">{article.title}</h1>
            <p className="text-muted-foreground text-base mb-6">{article.description}</p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono border-t border-border pt-4">
              <span>WEBUILDPRO India</span>
              <span>·</span>
              <span>{formattedDate}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Article content */}
            <article className="lg:col-span-3">
              {renderContent(article.content)}
            </article>

            {/* Table of contents */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 bg-card border border-border rounded p-5">
                <h2 className="micro-label mb-4">// TABLE OF CONTENTS</h2>
                <nav aria-label="Table of contents">
                  <ul className="space-y-2">
                    {headings.map((heading, i) => (
                      <li key={i}>
                        <a
                          href={`#${heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                          className="text-xs text-muted-foreground hover:text-foreground transition-colors leading-relaxed block"
                        >
                          {heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>
          </div>
        </div>

        <CircuitDivider />

        {/* CTA */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-center">
          <span className="micro-label block mb-3">// NEED HELP WITH YOUR PROJECT?</span>
          <h2 className="text-section-xl font-bold text-foreground mb-4">
            Talk to an engineer in Bangalore.
          </h2>
          <p className="text-muted-foreground text-sm mb-8">
            Free 15-minute call. Fixed quote in 24 hours. No obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold">
              <Icon name="DocumentTextIcon" size={16} />
              Get a Free Project Quote
            </Link>
            <Link href="/blog" className="btn-ghost inline-flex items-center gap-2 px-8 py-3.5 text-sm font-medium">
              <Icon name="ArrowLeftIcon" size={16} />
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}
