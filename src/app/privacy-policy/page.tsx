import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
import LazyPageExtras from '@/components/LazyPageExtras';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Privacy Policy',
  description: 'Privacy Policy for WEBUILDPRO India, Bangalore — how we collect, store and use your data. GDPR-aligned, no data sold, Google Sheets storage, contact form data only.',
  alternates: {
    canonical: `${BASE_URL}/privacy-policy`,
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-background pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="micro-label block mb-3">// LEGAL</span>
          <h1 className="text-hero-lg font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-10 font-mono">Last updated: 20 July 2026</p>

          <div className="prose prose-invert prose-sm max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <section aria-labelledby="pp-intro">
              <h2 id="pp-intro" className="text-foreground font-bold text-base mb-3">1. Who We Are</h2>
              <p>WEBUILDPRO India (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is an engineering services company operating from Peenya 2nd Stage, Bengaluru – 560058, Karnataka, India. We provide engineering project development, internships, and industrial prototype fabrication services. This Privacy Policy explains how we handle personal information collected through our website (webuildpro.in) and related forms.</p>
            </section>

            <section aria-labelledby="pp-data">
              <h2 id="pp-data" className="text-foreground font-bold text-base mb-3">2. Data We Collect</h2>
              <p>We collect the following personal information when you submit our contact form or coupon popup:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Full name</li>
                <li>Phone number / WhatsApp number</li>
                <li>Email address</li>
                <li>User type (student, institution, company)</li>
                <li>Branch or domain of interest</li>
                <li>College or company name (optional)</li>
                <li>Project requirement or message</li>
                <li>Expected deadline (optional)</li>
                <li>Page source (which page the form was submitted from)</li>
              </ul>
              <p className="mt-3">We do not collect payment information, government identification numbers, or sensitive personal data as defined under the Information Technology Act, 2000.</p>
            </section>

            <section aria-labelledby="pp-storage">
              <h2 id="pp-storage" className="text-foreground font-bold text-base mb-3">3. How We Store Your Data</h2>
              <p>Form submissions are forwarded server-side to Google Sheets via Google Apps Script Web App endpoints. Data is stored in Google Sheets hosted on Google Drive, subject to Google&apos;s own privacy and security standards. We do not operate our own database for contact form data.</p>
            </section>

            <section aria-labelledby="pp-use">
              <h2 id="pp-use" className="text-foreground font-bold text-base mb-3">4. How We Use Your Data</h2>
              <p>We use your personal information solely to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Respond to your project enquiry or quote request</li>
                <li>Send you the requested quotation or batch schedule</li>
                <li>Confirm coupon eligibility (if claimed)</li>
                <li>Provide occasional relevant updates about our services, if you have not opted out</li>
              </ul>
              <p className="mt-3">We do not use your data for automated profiling, targeted advertising, or any purpose beyond responding to your enquiry.</p>
            </section>

            <section aria-labelledby="pp-sharing">
              <h2 id="pp-sharing" className="text-foreground font-bold text-base mb-3">5. Data Sharing</h2>
              <p>We do not sell, rent, or share your personal information with third parties for commercial purposes. Your data is never sold to marketing companies, data brokers, or aggregators.</p>
              <p className="mt-2">Third-party services that may process your data as part of our operations:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li><strong className="text-foreground">Google Sheets / Google Apps Script</strong> — form data storage</li>
                <li><strong className="text-foreground">WhatsApp (Meta)</strong> — if you initiate a WhatsApp conversation with us</li>
                <li><strong className="text-foreground">Instagram (Meta)</strong> — if you interact with our Instagram profile</li>
              </ul>
            </section>

            <section aria-labelledby="pp-cookies">
              <h2 id="pp-cookies" className="text-foreground font-bold text-base mb-3">6. Cookies and Local Storage</h2>
              <p>Our website uses browser <code className="text-accent font-mono text-xs">localStorage</code> for one specific purpose: storing the flag <code className="text-accent font-mono text-xs">wbp_coupon_seen</code> to prevent the first-visit coupon popup from appearing more than once on the same device. This is not a tracking cookie and contains no personal data.</p>
              <p className="mt-2">We do not use advertising cookies, cross-site tracking cookies, or analytics cookies. Standard browser session data may be processed by our hosting provider (Vercel) for security and performance purposes.</p>
            </section>

            <section aria-labelledby="pp-retention">
              <h2 id="pp-retention" className="text-foreground font-bold text-base mb-3">7. Data Retention</h2>
              <p>Contact form and coupon form submissions are retained in Google Sheets for up to 24 months from the date of submission, after which they are deleted. If we commence a commercial engagement with you, relevant contact details are retained for the duration of that engagement plus a period of 3 years for legal and accounting purposes.</p>
            </section>

            <section aria-labelledby="pp-rights">
              <h2 id="pp-rights" className="text-foreground font-bold text-base mb-3">8. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Request a copy of the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data, subject to any legal retention obligations</li>
                <li>Withdraw consent for us to contact you at any time</li>
              </ul>
              <p className="mt-3">To exercise any of these rights, contact us at:</p>
              <div className="mt-2 bg-card border border-border rounded p-4">
                <p>Phone / WhatsApp: <a href="tel:+919538208573" className="text-accent hover:text-accent/80">+91 95382 08573</a></p>
                <p className="mt-1">Address: WEBUILDPRO India, Peenya 2nd Stage, Bengaluru – 560058, Karnataka, India</p>
              </div>
            </section>

            <section aria-labelledby="pp-security">
              <h2 id="pp-security" className="text-foreground font-bold text-base mb-3">9. Security</h2>
              <p>Our website is served over HTTPS. Form submissions are processed server-side through Next.js Route Handlers, which means your data is never sent directly from your browser to third-party endpoints. Google Sheets is protected by Google&apos;s enterprise-grade security infrastructure.</p>
            </section>

            <section aria-labelledby="pp-changes">
              <h2 id="pp-changes" className="text-foreground font-bold text-base mb-3">10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. The &ldquo;Last updated&rdquo; date at the top of this page will reflect any changes. Continued use of our website after a policy update constitutes acceptance of the revised policy.</p>
            </section>

            <section aria-labelledby="pp-jurisdiction">
              <h2 id="pp-jurisdiction" className="text-foreground font-bold text-base mb-3">11. Governing Law</h2>
              <p>This Privacy Policy is governed by the laws of India, including the Information Technology Act, 2000 and applicable rules. Any disputes shall be subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka, India.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}