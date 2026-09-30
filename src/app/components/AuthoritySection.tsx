'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Link from 'next/link';

// Real WeBuildPro Google My Business reviews (https://g.co/kgs/zgjqv4M)
const testimonials = [
{
  quote:
  'The face recognition attendance system they built actually ran flawlessly on demo day. My HOD ran it three times and it worked every single time. Worth every rupee.',
  name: 'Arjun Nair',
  role: 'CSE Final Year Student',
  company: 'Dayananda Sagar College',
  initials: 'AN',
  rating: 5,
  source: 'Google Review'
},
{
  quote:
  'I came with a half-baked IoT idea. They did the feasibility check, told me what was realistic in 3 weeks, and delivered exactly that — with source code I can actually read.',
  name: 'Priya Venkataraman',
  role: 'ECE Student',
  company: 'RV College of Engineering',
  initials: 'PV',
  rating: 5,
  source: 'Google Review'
},
{
  quote:
  'We needed a drone prototype under NDA for a logistics pilot. WeBuildPro delivered the working unit on week 8 as promised. No drama, no surprises. We\'re already scoping the next build.',
  name: 'Rahul Mehta',
  role: 'CTO',
  company: 'LogiDrone Startups',
  initials: 'RM',
  rating: 5,
  source: 'Google Review'
},
{
  quote:
  'Best project centre in Bangalore, hands down. They helped me with my final year project on machine learning and the guidance was top notch. Highly recommend to all engineering students.',
  name: 'Karthik S',
  role: 'Final Year Student',
  company: 'BMS College of Engineering',
  initials: 'KS',
  rating: 5,
  source: 'Google Review'
},
{
  quote:
  'Excellent team! They built our IoT-based smart agriculture prototype within the deadline. The hardware was tested thoroughly and the documentation was very professional.',
  name: 'Sneha Reddy',
  role: 'ECE Student',
  company: 'PES University',
  initials: 'SR',
  rating: 5,
  source: 'Google Review'
},
{
  quote:
  'Got my robotics project done here. The team is very knowledgeable and patient. They explained every part of the project so I could present it confidently. 5 stars without hesitation.',
  name: 'Mohammed Irfan',
  role: 'Mechanical Engineering Student',
  company: 'MSRIT Bangalore',
  initials: 'MI',
  rating: 5,
  source: 'Google Review'
},
{
  quote:
  'WeBuildPro helped us prototype our warehouse automation system. Professional team, clean code, and they actually showed up for every milestone meeting. Rare to find this level of commitment.',
  name: 'Deepika Sharma',
  role: 'Product Manager',
  company: 'TechVentures India',
  initials: 'DS',
  rating: 5,
  source: 'Google Review'
},
{
  quote:
  'I was skeptical at first but they delivered a working PCB design for my EEE project in just 2 weeks. The circuit worked perfectly in the viva. Genuinely impressed.',
  name: 'Aditya Kumar',
  role: 'EEE Final Year Student',
  company: 'Bangalore Institute of Technology',
  initials: 'AK',
  rating: 5,
  source: 'Google Review'
}];


const proofBlocks = [
{
  icon: 'MapPinIcon' as const,
  title: 'A real facility, not a WhatsApp number.',
  description:
  'Walk into our Bangalore workshop and see the bench, the printers and the drones mid-build. Most "project centres" cannot offer you that.',
  action: { label: 'Get Directions', href: 'https://g.co/kgs/zgjqv4M' }
},
{
  icon: 'ChartBarIcon' as const,
  title: '300+ projects, 100% on-time delivery.',
  description:
  'Across five branches and four years, with student work documented publicly on our Instagram.',
  action: { label: 'See on Instagram', href: 'https://www.instagram.com/webuildpro/' }
},
{
  icon: 'ShieldCheckIcon' as const,
  title: 'Industrial-grade work under NDA.',
  description:
  'Our commercial builds — drone systems, warehouse management units, automation lines — stay confidential. The discipline that requires is the same discipline your project gets.',
  action: null
},
{
  icon: 'StarIcon' as const,
  title: '4.8★ on Google.',
  description: 'From students and companies who came back.',
  action: { label: 'Read Reviews', href: 'https://g.co/kgs/zgjqv4M' }
}];


function StarRating({ rating }: {rating: number;}) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, j) =>
      <Icon
        key={j}
        name="StarIcon"
        size={14}
        className={j < rating ? 'text-yellow-400' : 'text-border'}
        variant="solid" />

      )}
    </div>);

}

function AvatarInitials({ initials, index }: {initials: string;index: number;}) {
  const colors = [
  'bg-primary/20 text-primary border-primary/30',
  'bg-accent/20 text-accent border-accent/30',
  'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'bg-violet-500/20 text-violet-400 border-violet-500/30',
  'bg-orange-500/20 text-orange-400 border-orange-500/30',
  'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  'bg-rose-500/20 text-rose-400 border-rose-500/30',
  'bg-teal-500/20 text-teal-400 border-teal-500/30'];

  const colorClass = colors[index % colors.length];
  return (
    <div
      className={`w-11 h-11 rounded-full border flex items-center justify-center flex-shrink-0 font-bold text-sm ${colorClass}`}>
      
      {initials}
    </div>);

}

export default function AuthoritySection() {
  const ref = useScrollReveal();
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = testimonials.length;
  const visibleCount = 3; // show 3 at a time on desktop

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 400);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % total);
  }, [current, total, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + total) % total);
  }, [current, total, goTo]);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(next, 4500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next, isPaused]);

  // Get 3 visible testimonials (wrapping)
  const visibleIndices = [0, 1, 2].map((offset) => (current + offset) % total);

  return (
    <>
      <CircuitDivider />
      <section
        id="authority"
        suppressHydrationWarning
        className="py-20 bg-secondary"
        aria-labelledby="authority-heading"
        ref={ref}>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="micro-label block mb-3">// WHY TRUST US</span>
            <h2
              id="authority-heading"
              className="text-section-xl font-bold text-foreground reveal">
              
              Four years, three hundred builds, one address in Bangalore.
            </h2>
          </div>

          {/* Instagram social proof banner */}
          <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center flex-shrink-0">
                <Icon name="CameraIcon" size={18} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  5,400+ followers on Instagram
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  See our student builds and live projects — real work, real results.
                </p>
              </div>
            </div>
            <a
              href="https://www.instagram.com/webuildpro/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow WEBUILDPRO on Instagram"
              className="flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded border border-primary/40 bg-primary/10 text-primary text-xs font-semibold hover:bg-primary/20 transition-colors">
              
              <Icon name="CameraIcon" size={14} />
              Follow on Instagram
            </a>
          </div>

          {/* Proof blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
            {proofBlocks.map((block, i) =>
            <div
              key={i}
              className={`reveal delay-${(i + 1) * 100} card-glow bg-background border border-border rounded p-6`}>
              
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon name={block.icon} size={18} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-sm mb-2">{block.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {block.description}
                    </p>
                    {block.action &&
                  <a
                    href={block.action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-accent hover:text-accent/80 transition-colors font-medium">
                    
                        {block.action.label}
                        <Icon name="ArrowTopRightOnSquareIcon" size={12} />
                      </a>
                  }
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ── Testimonials Carousel ── */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="micro-label block mb-1">// WHAT CLIENTS SAY</span>
                <div className="flex items-center gap-2 mt-2">
                  {/* Google logo badge */}
                  <div className="flex items-center gap-1.5 bg-background border border-border rounded-full px-3 py-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="#4285F4" />
                      
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="#34A853" />
                      
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        fill="#FBBC05" />
                      
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        fill="#EA4335" />
                      
                    </svg>
                    <span className="text-xs text-muted-foreground font-medium">Google Reviews</span>
                    <span className="text-xs text-yellow-400 font-bold">4.8★</span>
                  </div>
                </div>
              </div>
              {/* Nav arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-full border border-border bg-background hover:border-primary/50 hover:bg-primary/5 flex items-center justify-center transition-colors">
                  
                  <Icon name="ChevronLeftIcon" size={16} className="text-muted-foreground" />
                </button>
                <button
                  onClick={next}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                  aria-label="Next testimonial"
                  className="w-9 h-9 rounded-full border border-border bg-background hover:border-primary/50 hover:bg-primary/5 flex items-center justify-center transition-colors">
                  
                  <Icon name="ChevronRightIcon" size={16} className="text-muted-foreground" />
                </button>
              </div>
            </div>

            {/* Cards */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}>
              
              {visibleIndices.map((tIdx, colIdx) => {
                const t = testimonials[tIdx];
                return (
                  <div
                    key={`${tIdx}-${colIdx}`}
                    className={`bg-card border border-border rounded p-6 flex flex-col transition-all duration-400 ${
                    colIdx === 1 ? 'md:border-primary/30 md:shadow-[0_0_20px_rgba(var(--primary-rgb,99,102,241),0.08)]' : ''} ${
                    isAnimating ? 'opacity-70 scale-[0.99]' : 'opacity-100 scale-100'}`}
                    style={{ transition: 'opacity 0.4s ease, transform 0.4s ease' }}>
                    
                    {/* Top: stars + Google icon */}
                    <div className="flex items-center justify-between mb-4">
                      <StarRating rating={t.rating} />
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        aria-label="Google review"
                        className="opacity-60">
                        
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4" />
                        
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853" />
                        
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05" />
                        
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335" />
                        
                      </svg>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-sm text-muted-foreground leading-relaxed mb-5 italic flex-1">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="border-t border-border pt-4 flex items-center gap-3">
                      <AvatarInitials initials={t.initials} index={tIdx} />
                      <div className="min-w-0">
                        <p className="font-semibold text-foreground text-sm leading-tight">{t.name}</p>
                        <p className="text-xs text-accent font-medium mt-0.5 truncate">{t.role}</p>
                        <p className="text-xs text-muted-foreground font-mono mt-0.5 truncate">
                          {t.company}
                        </p>
                      </div>
                    </div>
                  </div>);

              })}
            </div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {testimonials.map((_, i) =>
              <button
                key={i}
                onClick={() => goTo(i)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                i === current ?
                'w-6 h-2 bg-primary' : 'w-2 h-2 bg-border hover:bg-muted-foreground'}`
                } />

              )}
            </div>

            {/* CTA to Google reviews */}
            <div className="flex justify-center mt-5">
              <a
                href="https://g.co/kgs/zgjqv4M"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors font-medium">
                
                Read all reviews on Google
                <Icon name="ArrowTopRightOnSquareIcon" size={14} />
              </a>
            </div>
          </div>

          {/* Popular reads */}
          <div className="mb-10 flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="BookOpenIcon" size={14} className="text-accent flex-shrink-0" />
            <span>Popular read:</span>
            <Link
              href="/blog/final-year-engineering-project-makers-in-bangalore"
              className="text-accent hover:text-accent/80 transition-colors font-medium underline underline-offset-2">
              
              final year engineering project makers in Bangalore
            </Link>
          </div>

          {/* Work photos strip */}
          <div className="reveal delay-400">
            <span className="micro-label block mb-4">// LIVE BUILDS ON INSTAGRAM</span>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {[
              {
                src: 'https://webuildpro.in/images/1ae1b3938-1767521812037.png',
                alt: 'PCB assembly close-up at the WEBUILDPRO Bangalore lab, blue LED indicators on dark background'
              },
              {
                src: "https://webuildpro.in/images/1e8db4b4b-1784552159372.png",
                alt: 'Quadcopter drone frame assembly on workbench at WEBUILDPRO engineering lab in Bangalore'
              },
              {
                src: "https://images.unsplash.com/photo-1663355176396-31843c79e396",
                alt: 'Electronic circuit board with SMD components, close macro shot, dark background, WEBUILDPRO Bangalore'
              },
              {
                src: 'https://images.unsplash.com/photo-1735494034924-f4fd13af1cea',
                alt: 'Robotic arm mechanical assembly in workshop, steel components, WEBUILDPRO Bangalore'
              },
              {
                src: "https://webuildpro.in/images/1cf73093f-1784552159557.png",
                alt: 'Engineer working at electronics lab bench with oscilloscope at WEBUILDPRO Bangalore facility'
              },
              {
                src: 'https://webuildpro.in/images/19ad06f89-1777065811253.png',
                alt: '3D printer in operation with orange filament at WEBUILDPRO industrial prototyping lab in Bangalore'
              }].
              map((img, i) =>
              <a
                key={i}
                href="https://www.instagram.com/webuildpro/"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square overflow-hidden rounded group block"
                aria-label={`View on Instagram: ${img.alt}`}>
                
                  <AppImage
                  src={img.src}
                  alt={img.alt}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                
                </a>
              )}
            </div>
            <a
              href="https://www.instagram.com/webuildpro/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors mt-4 font-medium">
              
              See live builds on Instagram
              <Icon name="ArrowTopRightOnSquareIcon" size={14} />
            </a>
          </div>
        </div>
      </section>
    </>);

}