import HeroSection from '@/app/components/HeroSection';
import LazyCouponPopup from '@/components/LazyCouponPopup';
import Header from '@/components/Header';

import LazyPageExtras from '@/components/LazyPageExtras';
import Icon from '@/components/ui/AppIcon';
import { homeFaqs } from '@/lib/data/faqs';
import JsonLdScript from '@/components/JsonLdScript';
import { faqSchema, reviewsSchema, ORG_ID, SITE_URL, WEBSITE_ID } from '@/lib/jsonld';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';


// Below-the-fold sections — code-split via next/dynamic (ssr:true keeps server HTML for SEO,
// but the JS is loaded in a separate chunk so it doesn't block initial paint)
const AudienceSection = dynamic(() => import('@/app/components/AudienceSection'), { ssr: true });
const ProblemSection = dynamic(() => import('@/app/components/ProblemSection'), { ssr: true });
const SolutionSection = dynamic(() => import('@/app/components/SolutionSection'), { ssr: true });
const AuthoritySection = dynamic(() => import('@/app/components/AuthoritySection'), { ssr: true });
const OnlineOfflineSection = dynamic(() => import('@/app/components/OnlineOfflineSection'), { ssr: true });
const ProcessSection = dynamic(() => import('@/app/components/ProcessSection'), { ssr: true });
const OfferSection = dynamic(() => import('@/app/components/OfferSection'), { ssr: true });
const FaqSection = dynamic(() => import('@/app/components/FaqSection'), { ssr: true });
const ContactCTASection = dynamic(() => import('@/app/components/ContactCTASection'), { ssr: true });
// Footer and decorative extras — ssr:false so their JS is never in the critical path
const Footer = dynamic(() => import('@/components/Footer'), { ssr: true });


const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { absolute: 'Final Year Engineering Projects in Bangalore | WEBUILDPRO' },
  description:
  'WEBUILDPRO offers final year engineering projects, mini projects, and internships for BTech students in Bangalore. ECE, EEE, CSE, AI-ML, Mechanical & Civil. Online delivery across India. Call +91 95382 08573.',
  alternates: {
    canonical: BASE_URL
  },
  openGraph: {
    url: BASE_URL,
    title: 'Final Year Engineering Projects in Bangalore | WEBUILDPRO',
    description:
    'Final year engineering projects, internships and industrial prototypes built and tested in our Bangalore lab. 300+ delivered, 100% on time. All branches covered.',
    images: [
    {
      url: '/assets/images/og-webuildpro.jpg',
      width: 1200,
      height: 630,
      alt: 'WEBUILDPRO India — Engineering Projects & Final Year Project Centre in Bangalore'
    }]

  }
};

export default function HomePage() {
  const webPageSchema = {
    '@type': 'WebPage',
    '@id': `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: 'Engineering Projects & Internships in Bangalore | WEBUILDPRO',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: 'en-IN',
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '#faq'] },
    // mainEntity links the page to its primary subject — helps AI engines understand the page
    mainEntity: { '@id': ORG_ID },
    // dateModified signals content freshness to Google and AI crawlers
    dateModified: new Date().toISOString().split('T')[0],
  };

  return (
    <>
      <JsonLdScript nodes={[webPageSchema, faqSchema(homeFaqs), ...reviewsSchema()]} />
      <Header />
      <main suppressHydrationWarning id="main-content">
        <HeroSection />
        <AudienceSection />
        <ProblemSection />
        <SolutionSection />
        <AuthoritySection />
        <OnlineOfflineSection />
        <ProcessSection />
        <OfferSection />

        {/* Mini Projects internal link band */}
        <section className="py-10 bg-secondary border-y border-border" aria-label="Mini projects callout">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="micro-label block mb-1">// 1ST–6TH SEMESTER · ALL BRANCHES</span>
              <p className="text-foreground font-semibold text-base">
                Mini Projects — starting ₹3,500
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Ready-to-submit mini projects for early-semester students. Built &amp; tested in Bangalore, available online &amp; offline.
              </p>
            </div>
            <Link
              href="/mini-projects"
              className="btn-primary flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold whitespace-nowrap">
              
              Browse Mini Projects
              <Icon name="ArrowRightIcon" size={14} />
            </Link>
          </div>
        </section>

        {/* Pan-India online delivery callout */}
        <section className="py-8 bg-primary/5 border-y border-primary/20" aria-label="Pan-India online delivery">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <span className="micro-label block mb-2">// ONLINE DELIVERY ACROSS INDIA</span>
            <p className="text-foreground font-semibold text-base sm:text-lg">
              Online project delivery available across India — receive your project kit via courier with full video call guidance.
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Can&apos;t visit Peenya in person? We ship fully assembled projects to any city in India. WhatsApp us to confirm your order.
            </p>
          </div>
        </section>

        {/* Popular project categories in Bangalore */}
        <section className="py-12 bg-background border-b border-border" aria-labelledby="popular-categories-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <span className="micro-label block mb-3">// POPULAR PROJECT CATEGORIES IN BANGALORE</span>
            <h2 id="popular-categories-heading" className="text-section-xl font-bold text-foreground mb-2">
              Popular project categories in Bangalore
            </h2>
            <p className="text-muted-foreground text-sm mb-6">
              Browse by specific domain — each page lists real project titles, descriptions and pricing for that category.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/projects/ece/iot-projects-in-bangalore" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                IoT projects in Bangalore
              </Link>
              <Link href="/projects/ece/embedded-systems-projects-in-bangalore" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                Embedded systems projects in Bangalore
              </Link>
              <Link href="/projects/ece/robotics-projects-in-bangalore" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                Robotics projects in Bangalore
              </Link>
              <Link href="/projects/ece/drone-projects-in-bangalore" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                Drone projects in Bangalore
              </Link>
              <Link href="/projects/ece/vlsi-projects-in-bangalore" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                VLSI projects in Bangalore
              </Link>
              <Link href="/projects/ece/biomedical-projects-in-bangalore" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                Biomedical projects in Bangalore
              </Link>
              <Link href="/projects/ece/communication-projects-in-bangalore" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                Communication projects in Bangalore
              </Link>
              <Link href="/projects/ece" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                All ECE projects in Bangalore
              </Link>
              <Link href="/projects/cse" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                CSE / AI / ML projects in Bangalore
              </Link>
              <Link href="/projects/mechanical" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                Mechanical engineering projects in Bangalore
              </Link>
              <Link href="/projects/eee" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                EEE projects in Bangalore
              </Link>
              <Link href="/projects/civil" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                Civil engineering projects in Bangalore
              </Link>
            </div>
          </div>
        </section>

        {/* Project idea guides — homepage links to every keyword-map owner page */}
        <section className="py-12 bg-background border-b border-border" aria-labelledby="guides-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <span className="micro-label block mb-3">// PROJECT IDEAS &amp; GUIDES</span>
            <h2 id="guides-heading" className="text-section-xl font-bold text-foreground mb-2">
              Final year projects, mini projects &amp; internships — by branch
            </h2>
            <p className="text-muted-foreground text-sm">
              Free guides with real project titles, components, difficulty and cost — written by the engineers who build them in our Peenya lab.
            </p>
            <h3 className="text-sm font-bold text-foreground mt-6 mb-3">Final year projects by branch</h3>
            <div className="flex flex-wrap gap-2">
                <Link href="/blog/final-year-project-ideas-for-cse" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">Final year projects for CSE</Link>
                <Link href="/blog/final-year-project-ideas-for-ece" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">Final year projects for ECE</Link>
                <Link href="/blog/final-year-project-ideas-for-eee" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">Final year projects for EEE</Link>
                <Link href="/blog/final-year-project-ideas-for-mechanical" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">Mechanical engineering projects</Link>
                <Link href="/blog/final-year-project-ideas-for-civil" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">Civil engineering final year projects</Link>
                <Link href="/blog/final-year-project-ideas-for-aiml" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">AIML final year projects</Link>
                <Link href="/blog/diploma-final-year-projects" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">Diploma final year projects</Link>
                <Link href="/blog/bca-final-year-projects" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">BCA final year projects</Link>
                <Link href="/blog/mca-final-year-projects" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">MCA final year projects</Link>
            </div>
            <h3 className="text-sm font-bold text-foreground mt-6 mb-3">Mini project ideas</h3>
            <div className="flex flex-wrap gap-2">
                <Link href="/blog/mini-project-ideas-cse-2026" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">Mini project ideas for CSE students</Link>
                <Link href="/blog/mini-project-ideas-ece-2026" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">Mini project ideas for ECE students</Link>
                <Link href="/blog/mini-projects-for-eee" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">EEE mini projects</Link>
                <Link href="/blog/mini-projects-for-mechanical" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">Mechanical mini projects</Link>
                <Link href="/blog/python-projects-for-final-year" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">Python mini & major projects</Link>
                <Link href="/blog/iot-based-mini-projects" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">IoT based mini projects</Link>
            </div>
            <h3 className="text-sm font-bold text-foreground mt-6 mb-3">Projects by technology</h3>
            <div className="flex flex-wrap gap-2">
                <Link href="/blog/iot-projects-for-final-year" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">IoT projects for final year</Link>
                <Link href="/blog/embedded-systems-projects-for-final-year" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">Embedded systems projects</Link>
                <Link href="/blog/robotics-projects-for-engineering-students" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">Robotics projects</Link>
                <Link href="/blog/arduino-projects-for-engineering-students" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">Arduino projects for engineering students</Link>
                <Link href="/blog/electronics-projects-for-students" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">Electronics projects for students</Link>
                <Link href="/blog/machine-learning-projects-for-final-year" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">Machine learning projects</Link>
            </div>
            <h3 className="text-sm font-bold text-foreground mt-6 mb-3">Internships in Bangalore</h3>
            <div className="flex flex-wrap gap-2">
                <Link href="/blog/internship-for-ece-students-bangalore" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">Internship for ECE students</Link>
                <Link href="/blog/internship-for-cse-students-bangalore" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">Internship for CSE students</Link>
                <Link href="/blog/internship-for-eee-students-bangalore" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">Internship for EEE students</Link>
                <Link href="/blog/internship-for-mechanical-engineering-students-bangalore" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">Mechanical engineering internship</Link>
                <Link href="/blog/embedded-systems-internship-bangalore" className="bg-card border border-border rounded px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">Embedded systems internship</Link>
            </div>
          </div>
        </section>

        <FaqSection faqs={homeFaqs} />
        <ContactCTASection />
      </main>
      <Footer />
      <LazyPageExtras />
      {/* Deferred — only loaded after initial paint, zero impact on FCP */}
      <LazyCouponPopup />
    </>);

}