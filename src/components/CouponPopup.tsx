'use client';
import React, { useState, useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import { trackEvent } from '@/lib/analytics';
import { submitLead } from '@/lib/submitLead';

interface CouponForm {
  name: string;
  phone: string;
  email: string;
  honeypot: string;
}

const initialForm: CouponForm = { name: '', phone: '', email: '', honeypot: '' };

export default function CouponPopup() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState<CouponForm>(initialForm);
  const [errors, setErrors] = useState<Partial<CouponForm>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (localStorage.getItem('wbp_coupon_seen')) return;

    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      setVisible(true);
    };

    const timer = setTimeout(show, 6000);

    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled > 0.4) show();
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (visible && firstInputRef.current) {
      firstInputRef.current.focus();
    }
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [visible]);

  const dismiss = () => {
    localStorage.setItem('wbp_coupon_seen', 'true');
    setVisible(false);
  };

  const validate = () => {
    const e: Partial<CouponForm> = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.phone.match(/^[6-9]\d{9}$/)) e.phone = 'Enter a valid 10-digit mobile number';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Enter a valid email';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return;
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSubmitError('');
    setLoading(true);

    const ok = await submitLead('/api/coupon', { ...form, couponCode: 'WBP10', sourcePage: window.location.pathname });
    setLoading(false);
    if (!ok) {
      setSubmitError('Something went wrong — please try again or reach us on WhatsApp.');
      return;
    }
    setSuccess(true);
    localStorage.setItem('wbp_coupon_seen', 'true');
    trackEvent('coupon_claim', { coupon: 'WBP10', page: window.location.pathname });
    setTimeout(() => setVisible(false), 5000);
  };

  if (!visible) return null;

  return (
    <div
      suppressHydrationWarning
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="coupon-heading"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative z-10 w-full sm:max-w-md bg-card border border-primary/40 rounded-t-2xl sm:rounded-xl p-6 sm:p-8 shadow-2xl blueprint-grid">
        {/* Orange glow */}
        <div className="absolute inset-0 rounded-t-2xl sm:rounded-xl border border-primary/20 pointer-events-none" aria-hidden="true" />

        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close offer"
        >
          <Icon name="XMarkIcon" size={20} />
        </button>

        {success ? (
          <div className="text-center py-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckBadgeIcon" size={28} className="text-primary" />
            </div>
            <h2 className="font-bold text-foreground text-lg mb-2">Coupon locked in.</h2>
            <p className="text-muted-foreground text-sm mb-4">
              Code: <span className="font-mono font-bold text-primary text-base">WBP10</span> â mention it when you contact us.
            </p>
            <a
              href={`https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%20have%20the%20coupon%20code%20WBP10%20and%20would%20like%20to%20enquire.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
              onClick={() => trackEvent('whatsapp_click', { location: 'coupon_success' })}
            >
              <Icon name="ChatBubbleLeftRightIcon" size={16} />
              Send it on WhatsApp
            </a>
          </div>
        ) : (
          <>
            <div className="inline-block bg-primary/10 border border-primary/30 rounded px-3 py-1 text-xs font-mono text-primary mb-4">
              FIRST-TIME VISITOR OFFER
            </div>
            <h2 id="coupon-heading" className="font-bold text-foreground text-xl mb-2">
              UPTO 10% OFF ON YOUR FIRST PROJECT.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Drop your details and we&apos;ll lock the discount to your name â valid on your first service with WEBUILDPRO, whether it&apos;s an academic project, an internship seat or an industrial prototype.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <input type="text" name="website" value={form.honeypot} onChange={(e) => setForm({ ...form, honeypot: e.target.value })} className="hidden" tabIndex={-1} aria-hidden="true" autoComplete="off" />

              <div className="space-y-3 mb-5">
                <div>
                  <input
                    ref={firstInputRef}
                    type="text"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={`input-base w-full px-4 py-3 text-sm ${errors.name ? 'border-primary' : ''}`}
                    aria-label="Full Name"
                  />
                  {errors.name && <p className="text-xs text-primary mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp Number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={`input-base w-full px-4 py-3 text-sm ${errors.phone ? 'border-primary' : ''}`}
                    aria-label="Phone / WhatsApp Number"
                  />
                  {errors.phone && <p className="text-xs text-primary mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={`input-base w-full px-4 py-3 text-sm ${errors.email ? 'border-primary' : ''}`}
                    aria-label="Email Address"
                  />
                  {errors.email && <p className="text-xs text-primary mt-1">{errors.email}</p>}
                </div>
              </div>

              {submitError && (
                <p className="text-xs text-primary mb-3 text-center">{submitError}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-3.5 text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed mb-3"
              >
                {loading ? (
                  <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />Claimingâ¦</>
                ) : (
                  'Claim My 10% Off'
                )}
              </button>

              <button
                type="button"
                onClick={dismiss}
                className="w-full text-center text-xs text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                No thanks, I&apos;ll pay full price
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
