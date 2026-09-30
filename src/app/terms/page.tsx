import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });
import LazyPageExtras from '@/components/LazyPageExtras';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Terms & Conditions — WEBUILDPRO India',
  description: 'Terms & Conditions for WEBUILDPRO India, Bangalore — quotation validity, payment, IP transfer, NDA, revision policy and cancellation terms for engineering services.',
  alternates: {
    canonical: `${BASE_URL}/terms`,
  },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-background pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="micro-label block mb-3">// LEGAL</span>
          <h1 className="text-hero-lg font-bold text-foreground mb-2">Terms &amp; Conditions</h1>
          <p className="text-muted-foreground text-sm mb-10 font-mono">Last updated: 20 July 2026</p>

          <div className="prose prose-invert prose-sm max-w-none space-y-8 text-muted-foreground leading-relaxed">
            <section aria-labelledby="tc-scope">
              <h2 id="tc-scope" className="text-foreground font-bold text-base mb-3">1. Scope of Services</h2>
              <p>WEBUILDPRO India (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) provides engineering project development, internship and training programmes, and industrial prototype fabrication services from our facility at Peenya 2nd Stage, Bengaluru – 560058, Karnataka, India. These Terms &amp; Conditions govern all engagements between WEBUILDPRO India and any client (&ldquo;you&rdquo;, &ldquo;the client&rdquo;) who procures our services.</p>
            </section>

            <section aria-labelledby="tc-quotations">
              <h2 id="tc-quotations" className="text-foreground font-bold text-base mb-3">2. Quotations</h2>
              <p>All quotations issued by WEBUILDPRO India are valid for 15 days from the date of issue. Quotations are fixed-price and itemised — they include components, fabrication, firmware, testing and documentation as specified. A quotation does not constitute a binding contract until confirmed by advance payment as described in Section 3.</p>
              <p className="mt-2">Quotations are prepared in good faith based on the requirements provided by the client. Material changes to requirements after quotation acceptance may require a revised quotation and revised timeline.</p>
            </section>

            <section aria-labelledby="tc-payment">
              <h2 id="tc-payment" className="text-foreground font-bold text-base mb-3">3. Payment Terms</h2>
              <p>Engagements are confirmed by advance payment, typically 50% of the quoted value. The build slot is locked only upon receipt of the advance payment. The remaining balance is due prior to or upon delivery of the completed work. Payment terms for specific engagements may vary and will be stated in the quotation.</p>
              <p className="mt-2">Accepted payment methods: bank transfer (NEFT/IMPS/UPI) and cash. Receipts are issued for all payments.</p>
            </section>

            <section aria-labelledby="tc-timeline">
              <h2 id="tc-timeline" className="text-foreground font-bold text-base mb-3">4. Timelines and Delivery</h2>
              <p>Timelines stated in quotations are estimates based on expected component lead times at the time of quotation. WEBUILDPRO India will make reasonable efforts to meet stated timelines. Delays caused by component supply chain disruptions, force majeure events, or material changes to scope requested by the client are not counted against the stated timeline.</p>
              <p className="mt-2">The client will be notified promptly of any anticipated delays, with a revised delivery estimate.</p>
            </section>

            <section aria-labelledby="tc-revisions">
              <h2 id="tc-revisions" className="text-foreground font-bold text-base mb-3">5. Revision Policy</h2>
              <p>Revisions that fall within the agreed scope of work are included at no additional charge. A revision is &ldquo;within scope&rdquo; if it does not require sourcing additional components, does not change the fundamental architecture of the system, and does not extend the build timeline by more than 3 working days.</p>
              <p className="mt-2">Out-of-scope changes will be quoted separately and require written agreement before work commences.</p>
            </section>

            <section aria-labelledby="tc-ip">
              <h2 id="tc-ip" className="text-foreground font-bold text-base mb-3">6. Intellectual Property</h2>
              <p>For academic projects, all deliverables (source code, circuit diagrams, CAD files, documentation) are provided to the client for their personal academic use. WEBUILDPRO India retains the right to use non-confidential academic project work as portfolio examples.</p>
              <p className="mt-2">For industrial and commercial prototype engagements, full intellectual property — including all design files, source code, firmware, CAD models and associated documentation — transfers to the client upon receipt of final payment in full. WEBUILDPRO India retains no licence to the client&apos;s IP after transfer.</p>
            </section>

            <section aria-labelledby="tc-academic">
              <h2 id="tc-academic" className="text-foreground font-bold text-base mb-3">7. Academic Integrity</h2>
              <p>Projects supplied by WEBUILDPRO India for academic purposes are intended for learning and demonstration. The client is solely responsible for ensuring compliance with their institution&apos;s academic integrity policies, submission rules and examination regulations. WEBUILDPRO India does not represent that any project will be accepted by any institution, and bears no liability for institutional decisions regarding submitted work.</p>
            </section>

            <section aria-labelledby="tc-warranty">
              <h2 id="tc-warranty" className="text-foreground font-bold text-base mb-3">8. Warranty and Post-Delivery Support</h2>
              <p>All deliverables are tested and verified to be functional at the time of delivery. For academic projects, WEBUILDPRO India provides post-delivery support until the client&apos;s scheduled demonstration or submission date, subject to the client notifying us of any issues promptly. This support covers defects in our workmanship and does not cover damage caused by mishandling, modification by the client, or use outside the specified operating conditions.</p>
              <p className="mt-2">For industrial prototypes, a warranty period of 30 days from delivery applies to manufacturing defects, unless otherwise stated in the quotation.</p>
            </section>

            <section aria-labelledby="tc-nda">
              <h2 id="tc-nda" className="text-foreground font-bold text-base mb-3">9. Confidentiality and NDA</h2>
              <p>Industrial and commercial engagements are conducted under a Non-Disclosure Agreement (NDA) executed before any technical information is shared. WEBUILDPRO India will not disclose, publish, or reference any aspect of a client&apos;s industrial project without the client&apos;s explicit written consent.</p>
              <p className="mt-2">Academic projects may be referenced in our portfolio unless the client requests confidentiality in writing at the time of engagement.</p>
            </section>

            <section aria-labelledby="tc-liability">
              <h2 id="tc-liability" className="text-foreground font-bold text-base mb-3">10. Limitation of Liability</h2>
              <p>WEBUILDPRO India&apos;s total liability to any client under any engagement shall not exceed the total value paid by the client for that engagement. We are not liable for indirect, consequential, or incidental losses, including but not limited to loss of marks, loss of business opportunity, or reputational damage.</p>
            </section>

            <section aria-labelledby="tc-cancellation">
              <h2 id="tc-cancellation" className="text-foreground font-bold text-base mb-3">11. Cancellation and Refund Policy</h2>
              <p>Cancellations made before fabrication commences are eligible for a full refund of the advance payment. Once fabrication has commenced, the advance payment is non-refundable as it covers components and labour already expended. If WEBUILDPRO India is unable to complete the agreed work due to circumstances within our control, the advance payment will be refunded in full.</p>
            </section>

            <section aria-labelledby="tc-governing">
              <h2 id="tc-governing" className="text-foreground font-bold text-base mb-3">12. Governing Law and Jurisdiction</h2>
              <p>These Terms &amp; Conditions are governed by the laws of India. Any dispute arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Bengaluru, Karnataka, India.</p>
            </section>

            <section aria-labelledby="tc-contact">
              <h2 id="tc-contact" className="text-foreground font-bold text-base mb-3">13. Contact</h2>
              <div className="bg-card border border-border rounded p-4">
                <p>WEBUILDPRO India</p>
                <p className="mt-1">Peenya 2nd Stage, Bengaluru – 560058, Karnataka, India</p>
                <p className="mt-1">Phone / WhatsApp: <a href="tel:+919538208573" className="text-accent hover:text-accent/80">+91 95382 08573</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <LazyPageExtras />
    </>
  );
}