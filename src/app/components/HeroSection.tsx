'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Icon from '@/components/ui/AppIcon';
import { useCountUp } from '@/hooks/useScrollReveal';
import { trackEvent } from '@/lib/analytics';

function StatCard({ value, suffix, label }: {value: number;suffix: string;label: string;}) {
  const ref = useCountUp(value);
  return (
    <div className="flex-1 min-w-0 text-center sm:text-left px-4 py-3 border-r border-border last:border-r-0">
      <div className="stat-number text-2xl sm:text-3xl font-bold text-foreground">
        <span ref={ref}>0</span>
        {suffix}
      </div>
      <div className="text-xs text-muted-foreground mt-0.5 leading-tight">{label}</div>
    </div>);
}

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip parallax entirely on mobile — eliminates scroll listener overhead during LCP window
    // and prevents will-change from promoting a GPU layer before first paint
    if (window.innerWidth < 768) return;

    const bg = bgRef.current;
    if (!bg) return;
    const parallaxInner = bg.querySelector<HTMLDivElement>('.hero-parallax-inner');
    if (parallaxInner) parallaxInner.style.willChange = 'transform';
    const onScroll = () => {
      const scrolled = window.scrollY;
      if (parallaxInner) parallaxInner.style.transform = `translateY(${scrolled * 0.3}px)`;
    };
    // Defer scroll listener registration until after first paint
    const raf = requestAnimationFrame(() => {
      window.addEventListener('scroll', onScroll, { passive: true });
    });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      if (parallaxInner) parallaxInner.style.willChange = '';
    };
  }, []);

  return (
    <section
      ref={heroRef}
      suppressHydrationWarning
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
      aria-labelledby="hero-heading">
      
      {/* Background image */}
      <div ref={bgRef} className="hero-bg absolute inset-0" suppressHydrationWarning>
        {/* LCP image — priority + fetchPriority ensure browser fetches this first.
             decoding="async" avoids blocking the main thread during image decode on mobile.
             The explicit style height ensures the browser doesn't defer fetch waiting for layout. */}
        <Image
          src="https://img.rocket.new/generatedImages/rocket_gen_img_1cf73093f-1784552159557.png"
          alt="Dark engineering workbench with circuit boards and precision tools at the WEBUILDPRO lab in Bangalore, industrial environment with dim orange-tinted lighting"
          fill
          priority
          fetchPriority="high"
          decoding="async"
          sizes="(max-width: 640px) 640px, (max-width: 1024px) 1080px, 1920px"
          className="object-cover"
          quality={60}
          placeholder="empty"
          suppressHydrationWarning />
        
        
        {/* Parallax inner — will-change applied here after first paint (desktop only) */}
        <div className="hero-parallax-inner absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Orange tint overlay */}
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          {/* Dark scrim */}
          <div className="absolute inset-0 hero-scrim" />
          {/* Blueprint grid — rendered at full opacity, no JS toggle needed */}
          <div className="absolute inset-0 blueprint-grid" style={{ opacity: 0.6 }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-0 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <span
              className="w-2 h-2 rounded-full bg-primary animate-pulse"
              aria-hidden="true" />
            <span className="micro-label">// BANGALORE, INDIA · SINCE 2021</span>
          </div>

          {/* H1 */}
          <h1
            id="hero-heading"
            className="text-hero-xl text-foreground mb-6 leading-none"
            style={{ fontSize: 'clamp(1.25rem, 4.2vw, 3.75rem)' }}>
            <span className="block whitespace-nowrap">
              ENGINEERING PROJECTS &amp; WORKS
            </span>
            <span
              className="block whitespace-nowrap text-gradient-orange"
              style={{ fontSize: 'clamp(1.25rem, 3.4vw, 3.1rem)' }}>
              BUILT &amp; TESTED IN BANGALORE
            </span>
          </h1>

          {/* Sub */}
          <p className="text-base sm:text-lg text-white leading-relaxed mb-8 max-w-2xl">
            Engineering project consultancy, Internships, Industrial prototypes — designed, fabricated, tested / taught in our Bangalore lab. 300+ delivered. 100% on time with 100% success rate. Shipping pan-India!
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <Link
              href="/contact"
              className="btn-primary px-6 py-3.5 text-sm font-semibold flex items-center justify-center gap-2"
              onClick={() => trackEvent('cta_click', { cta: 'hero_quote', page: '/' })}>
              <Icon name="DocumentTextIcon" size={16} />
              Get a Free Project Quote
            </Link>
            <a
              href="https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%27d%20like%20to%20enquire%20about%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost px-6 py-3.5 text-sm font-semibold flex items-center justify-center gap-2"
              onClick={() => trackEvent('whatsapp_click', { location: 'hero', page: '/' })}>
              <Icon name="ChatBubbleLeftRightIcon" size={16} />
              WhatsApp Us Now
            </a>
          </div>
        </div>
      </div>

      {/* Stats strip — solid bg (no backdrop-blur which forces GPU compositing during LCP window) */}
      <div className="relative z-10 w-full bg-secondary border-t border-border mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap sm:flex-nowrap divide-y sm:divide-y-0 divide-border">
            <StatCard value={300} suffix="+" label="Projects Delivered" />
            <StatCard value={4} suffix="+" label="Years in Bangalore" />
            <StatCard value={5} suffix="" label="Engineering Branches" />
            <StatCard value={100} suffix="%" label="On-Time Record" />
          </div>
        </div>
      </div>
    </section>);
}