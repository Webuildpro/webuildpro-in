import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const projectLinks = [
  { label: 'Mini Projects (1st–6th Sem)', href: '/mini-projects' },
  { label: 'CSE / ISE / AI-ML / BCA / MCA', href: '/projects/cse' },
  { label: 'Mechanical', href: '/projects/mechanical' },
  { label: 'Electronics (ECE)', href: '/projects/ece' },
  { label: 'Electrical (EEE)', href: '/projects/eee' },
  { label: 'Civil & Mining', href: '/projects/civil' },
];

const popularLinks = [
  { label: 'Best Project Centre in Bangalore', href: '/project-centre-bangalore' },
  { label: 'Final Year Projects in Bangalore', href: '/final-year-projects-bangalore' },
  { label: 'Engineering Internship in Bangalore', href: '/internship-bangalore' },
];

const areaLinks = [
  { label: 'Projects in Vijayanagar', href: '/engineering-projects-vijayanagar' },
  { label: 'Projects in Jayanagar', href: '/engineering-projects-jayanagar' },
  { label: 'Projects in BTM Layout', href: '/engineering-projects-btm-layout' },
  { label: 'Projects in Yelahanka', href: '/engineering-projects-yelahanka' },
];

const companyLinks = [
  { label: 'Industrial Prototyping', href: '/industrial' },
  { label: 'Internships', href: '/internships' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' },
  { label: 'Final Year Project Makers in Bangalore', href: '/blog/final-year-engineering-project-makers-in-bangalore' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Sitemap', href: '/sitemap' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Sitemap', href: '/sitemap' },
];

export default function Footer() {
  return (
    <>
      <footer suppressHydrationWarning className="bg-secondary border-t border-border pb-[calc(64px+env(safe-area-inset-bottom))] md:pb-0" aria-label="Site footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <AppLogo size={36} />
                <div>
                  <span className="font-bold text-base text-foreground block leading-none">WeBuildPro</span>
                  <span className="font-mono text-xs text-accent">INDIA</span>
                </div>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs">
                Engineering projects, industrial prototypes and drone systems — fabricated and tested in our Bangalore lab. Also known as Bengaluru.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/919538208573"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WeBuildPro on WhatsApp"
                  className="w-9 h-9 flex items-center justify-center border border-border rounded text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <Icon name="ChatBubbleLeftRightIcon" size={16} />
                </a>
                <a
                  href="https://g.co/kgs/zgjqv4M"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WeBuildPro on Google Business"
                  className="w-9 h-9 flex items-center justify-center border border-border rounded text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <Icon name="MapPinIcon" size={16} />
                </a>
                <a
                  href="https://www.instagram.com/webuildpro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WEBUILDPRO on Instagram"
                  className="w-9 h-9 flex items-center justify-center border border-border rounded text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="micro-label mb-5">Projects</h3>
              <ul className="space-y-3">
                {projectLinks?.map((link) => (
                  <li key={link?.href}>
                    <Link
                      href={link?.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular */}
            <div>
              <h3 className="micro-label mb-5">Popular in Bangalore</h3>
              <ul className="space-y-3">
                {popularLinks?.map((link) => (
                  <li key={link?.href}>
                    <Link
                      href={link?.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Help by Area */}
            <div>
              <h3 className="micro-label mb-5">Project Help by Area</h3>
              <ul className="space-y-3">
                {areaLinks?.map((link) => (
                  <li key={link?.href}>
                    <Link
                      href={link?.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="micro-label mb-5">Company</h3>
              <ul className="space-y-3">
                {companyLinks?.map((link) => (
                  <li key={link?.href}>
                    <Link
                      href={link?.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="micro-label mb-5">Contact</h3>
              <address className="not-italic space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  WEBUILDPRO<br />
                  81, 4th Cross, Thigalarapalya Main Rd,<br />
                  2nd Stage, Kalika Nagar, Peenya,<br />
                  Bengaluru – 560058
                </p>
                <a
                  href="tel:+919538208573"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon name="PhoneIcon" size={14} />
                  +91 95382 08573
                </a>
                <a
                  href="https://wa.me/919538208573"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon name="ChatBubbleLeftRightIcon" size={14} />
                  WhatsApp Us
                </a>
                <p className="text-sm text-muted-foreground">
                  Mon–Sat, 10 AM – 7 PM IST
                </p>
              </address>
            </div>
          </div>
        </div>
        {/* Bottom bar — separated by 1px top border */}
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex flex-col items-center sm:items-start gap-1">
              <p className="text-xs text-muted-foreground font-mono">
                © 2026 WEBUILDPRO INDIA · Bangalore, Karnataka
              </p>
              <p className="text-xs text-muted-foreground">
                Built and managed by{' '}
                <a
                  href="https://webuildpro.online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline transition-colors"
                >
                  WEBUILDPRO Global
                </a>
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end">
              {legalLinks?.map((link) => (
                <Link
                  key={link?.href}
                  href={link?.href}
                  className="text-xs text-muted-foreground hover:text-accent transition-colors"
                >
                  {link?.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}