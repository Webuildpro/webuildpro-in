'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Industrial', href: '/industrial' },
  { label: 'Internships', href: '/internships' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const projectBranches = [
  { label: 'Mini Projects', href: '/mini-projects', isMini: true },
  { label: 'CSE / ISE / AI-ML / BCA / MCA', href: '/projects/cse' },
  { label: 'Mechanical', href: '/projects/mechanical' },
  { label: 'Electronics (ECE)', href: '/projects/ece' },
  { label: 'Electrical (EEE)', href: '/projects/eee' },
  { label: 'Civil & Mining', href: '/projects/civil' },
];

const projectCentreLinks = [
  { label: 'Best Project Centre in Bangalore', href: '/project-centre-bangalore' },
  { label: 'Final Year Projects in Bangalore', href: '/final-year-projects-bangalore' },
  { label: 'Engineering Internship in Bangalore', href: '/internship-bangalore' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProjectsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleLocationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileOpen(false);
    const isContactPage = window.location.pathname === '/contact';
    if (isContactPage) {
      const mapEl = document.getElementById('map');
      if (mapEl) {
        mapEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      router.push('/contact#map');
    }
  };

  return (
    <>
      <header
        suppressHydrationWarning
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border' :'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <AppLogo size={32} />
            <span className="font-bold text-lg tracking-tight text-foreground hidden sm:block">
              WEBUILDPRO
            </span>
            <span className="font-mono text-xs text-accent hidden sm:block">INDIA</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded"
            >
              Home
            </Link>

            {/* Projects Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProjectsOpen(!projectsOpen)}
                onKeyDown={(e) => e.key === 'Escape' && setProjectsOpen(false)}
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded"
                aria-expanded={projectsOpen}
                aria-haspopup="true"
              >
                Projects
                <Icon
                  name="ChevronDownIcon"
                  size={14}
                  className={`transition-transform duration-200 ${projectsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {projectsOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-72 bg-card border border-border rounded shadow-xl py-1 z-50"
                  role="menu"
                >
                  <div className="px-4 py-2 border-b border-border">
                    <span className="text-xs font-mono text-accent">// BY BRANCH</span>
                  </div>
                  {projectBranches.map((branch, idx) => (
                    <React.Fragment key={branch.href}>
                      {idx === 1 && <div className="border-t border-border my-1" />}
                      <Link
                        href={branch.href}
                        onClick={() => setProjectsOpen(false)}
                        className={`flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-muted transition-colors ${pathname === branch.href ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
                        role="menuitem"
                      >
                        <span className={`text-xs font-mono ${pathname === branch.href ? 'text-primary' : 'text-accent'}`}>//</span>
                        {branch.label}
                      </Link>
                    </React.Fragment>
                  ))}
                  <div className="px-4 py-2 border-t border-b border-border mt-1">
                    <span className="text-xs font-mono text-accent">// PROJECT CENTRE</span>
                  </div>
                  {projectCentreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setProjectsOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      role="menuitem"
                    >
                      <span className="text-primary text-xs font-mono">→</span>
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded"
              >
                {link.label}
              </Link>
            ))}

            {/* Location link - desktop */}
            <a
              href="/contact#map"
              onClick={handleLocationClick}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded"
            >
              Location
            </a>
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%27d%20like%20to%20enquire%20about%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 btn-primary px-4 py-2 text-sm font-semibold"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={14} />
              Talk to an Engineer
            </a>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Icon name="Bars3Icon" size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer */}
          <div className="absolute top-0 right-0 bottom-0 w-80 max-w-full bg-card border-l border-border flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                <AppLogo size={28} />
                <span className="font-bold text-foreground">WEBUILDPRO</span>
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-muted-foreground hover:text-foreground"
                aria-label="Close menu"
              >
                <Icon name="XMarkIcon" size={20} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
              >
                Home
              </Link>

              <div>
                <button
                  onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                  className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
                  aria-expanded={mobileProjectsOpen}
                >
                  Projects
                  <Icon
                    name="ChevronDownIcon"
                    size={14}
                    className={`transition-transform duration-200 ${mobileProjectsOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileProjectsOpen && (
                  <div className="ml-4 mt-1 space-y-1 border-l border-border pl-3">
                    {projectBranches.map((branch, idx) => (
                      <React.Fragment key={branch.href}>
                        {idx === 1 && <div className="border-t border-border my-1" />}
                        <Link
                          href={branch.href}
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileProjectsOpen(false);
                            setMobileOpen(false);
                          }}
                          className={`block w-full text-left px-3 py-2 text-sm hover:bg-muted rounded transition-colors ${pathname === branch.href ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                          {branch.label}
                        </Link>
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Location item - mobile */}
              <a
                href="/contact#map"
                onClick={handleLocationClick}
                className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded transition-colors"
              >
                Location
              </a>
            </nav>

            <div className="p-4 border-t border-border space-y-3">
              <a
                href="https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%27d%20like%20to%20enquire%20about%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 btn-primary w-full py-3 text-sm font-semibold"
              >
                <Icon name="ChatBubbleLeftRightIcon" size={16} />
                Talk to an Engineer
              </a>
              <a
                href="tel:+919538208573"
                className="flex items-center justify-center gap-2 btn-ghost w-full py-3 text-sm font-medium"
              >
                <Icon name="PhoneIcon" size={16} />
                +91 95382 08573
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}