'use client';
import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targets = entry.target.querySelectorAll('.reveal');
            targets.forEach((t, i) => {
              setTimeout(() => t.classList.add('visible'), i * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

export function useCountUp(target: number, duration = 1500) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Delay observer setup by 300ms on mobile to avoid competing with the LCP paint.
    // The stat strip is below the fold on mobile so this has zero visual impact.
    const setupDelay = typeof window !== 'undefined' && window.innerWidth < 768 ? 300 : 0;

    const timerId = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasRun.current) {
              hasRun.current = true;
              const start = Date.now();
              const tick = () => {
                const elapsed = Date.now() - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(eased * target).toString();
                if (progress < 1) requestAnimationFrame(tick);
                else el.textContent = target.toString();
              };
              requestAnimationFrame(tick);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      if (el) observer.observe(el);
      return () => observer.disconnect();
    }, setupDelay);

    return () => clearTimeout(timerId);
  }, [target, duration]);

  return ref;
}