'use client';
import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import CircuitDivider from '@/components/CircuitDivider';
import FaqSection from '@/app/components/FaqSection';
import type { BranchData, Project, Difficulty } from '@/lib/data/projects';
import { trackEvent } from '@/lib/analytics';

const difficultyColors: Record<Difficulty, string> = {
  Beginner: 'border-green-500/40 text-green-400 bg-green-500/10',
  Intermediate: 'border-yellow-500/40 text-yellow-400 bg-yellow-500/10',
  Advanced: 'border-primary/40 text-primary bg-primary/10',
};

const otherBranches = [
  { label: 'CSE / AI / ML projects in Bangalore', href: '/projects/cse' },
  { label: 'Mechanical engineering projects in Bangalore', href: '/projects/mechanical' },
  { label: 'ECE projects in Bangalore', href: '/projects/ece' },
  { label: 'EEE projects in Bangalore', href: '/projects/eee' },
  { label: 'Civil engineering projects in Bangalore', href: '/projects/civil' },
];

// Sub-category pages per branch (only ECE has sub-category pages so far)
const branchSubCategories: Record<string, { label: string; href: string }[]> = {
  ece: [
    { label: 'IoT projects in Bangalore', href: '/projects/ece/iot-projects-in-bangalore' },
    { label: 'Embedded systems projects in Bangalore', href: '/projects/ece/embedded-systems-projects-in-bangalore' },
    { label: 'Robotics projects in Bangalore', href: '/projects/ece/robotics-projects-in-bangalore' },
    { label: 'Drone projects in Bangalore', href: '/projects/ece/drone-projects-in-bangalore' },
    { label: 'VLSI projects in Bangalore', href: '/projects/ece/vlsi-projects-in-bangalore' },
    { label: 'Biomedical projects in Bangalore', href: '/projects/ece/biomedical-projects-in-bangalore' },
    { label: 'Communication projects in Bangalore', href: '/projects/ece/communication-projects-in-bangalore' },
  ],
  cse: [
    { label: 'Machine learning projects in Bangalore', href: '/projects/cse/machine-learning-projects-in-bangalore' },
    { label: 'AI projects in Bangalore', href: '/projects/cse/ai-projects-in-bangalore' },
    { label: 'Data science projects in Bangalore', href: '/projects/cse/data-science-projects-in-bangalore' },
    { label: 'Blockchain projects in Bangalore', href: '/projects/cse/blockchain-projects-in-bangalore' },
    { label: 'IoT projects in Bangalore for CSE', href: '/projects/cse/iot-projects-in-bangalore' },
    { label: 'Python projects in Bangalore', href: '/projects/cse/python-projects-in-bangalore' },
    { label: 'Image processing projects in Bangalore', href: '/projects/cse/image-processing-projects-in-bangalore' },
    { label: 'Cyber security projects in Bangalore', href: '/projects/cse/cybersecurity-projects-in-bangalore' },
  ],
  mechanical: [
    { label: 'Automobile projects in Bangalore', href: '/projects/mechanical/automobile-projects-in-bangalore' },
    { label: 'Hydraulics & pneumatics projects in Bangalore', href: '/projects/mechanical/hydraulics-pneumatics-projects-in-bangalore' },
    { label: 'Robotics & mechatronics projects in Bangalore', href: '/projects/mechanical/robotics-mechatronics-projects-in-bangalore' },
    { label: 'Design & analysis projects in Bangalore', href: '/projects/mechanical/design-analysis-projects-in-bangalore' },
    { label: 'Agricultural projects in Bangalore', href: '/projects/mechanical/agricultural-projects-in-bangalore' },
    { label: 'Renewable energy projects in Bangalore', href: '/projects/mechanical/renewable-energy-projects-in-bangalore' },
  ],
  eee: [
    { label: 'Power electronics projects in Bangalore', href: '/projects/eee/power-electronics-projects-in-bangalore' },
    { label: 'PLC & automation projects in Bangalore', href: '/projects/eee/plc-automation-projects-in-bangalore' },
    { label: 'Electric vehicle (EV) projects in Bangalore', href: '/projects/eee/ev-projects-in-bangalore' },
    { label: 'Solar energy projects in Bangalore for EEE', href: '/projects/eee/solar-energy-projects-in-bangalore' },
    { label: 'Motor control projects in Bangalore', href: '/projects/eee/motor-control-projects-in-bangalore' },
  ],
  civil: [
    { label: 'Structural engineering projects in Bangalore', href: '/projects/civil/structural-projects-in-bangalore' },
    { label: 'Transportation engineering projects in Bangalore', href: '/projects/civil/transportation-projects-in-bangalore' },
    { label: 'Geotechnical engineering projects in Bangalore', href: '/projects/civil/geotechnical-projects-in-bangalore' },
    { label: 'Water resources engineering projects in Bangalore', href: '/projects/civil/water-resources-projects-in-bangalore' },
    { label: 'Environmental engineering projects in Bangalore', href: '/projects/civil/environmental-projects-in-bangalore' },
    { label: 'Construction management projects in Bangalore', href: '/projects/civil/construction-management-projects-in-bangalore' },
  ],
};

const branchProjectListLinks: Record<string, { label: string; href: string }> = {
  ece: { label: 'Download ECE project list (PDF)', href: '/project-list/ece' },
  cse: { label: 'Download CSE project list (PDF)', href: '/project-list/cse' },
  eee: { label: 'Download EEE project list (PDF)', href: '/project-list/eee' },
  mechanical: { label: 'Download Mechanical project list (PDF)', href: '/project-list/mechanical' },
  civil: { label: 'Download Civil project list (PDF)', href: '/project-list/civil' },
};

function ProjectAccordion({ project, branch }: { project: Project; branch: string }) {
  const [open, setOpen] = useState(false);

  const waMessage = encodeURIComponent(
    `Hi WEBUILDPRO, I'm interested in the project: "${project.title}". Can you send me a quote?`
  );

  return (
    <div
      id={project.id}
      className={`border rounded overflow-hidden transition-colors duration-200 ${open ? 'border-primary/40 bg-card' : 'border-border bg-card hover:border-border/80'}`}
    >
      <button
        onClick={() => {
          setOpen(!open);
          if (!open) trackEvent('accordion_open', { project: project.title, branch });
        }}
        className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
        aria-expanded={open}
      >
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <span className={`text-xs font-mono px-2 py-0.5 rounded border flex-shrink-0 ${difficultyColors[project.difficulty]}`}>
            {project.difficulty}
          </span>
          {project.isIEEE && <span className="chip-cyan flex-shrink-0">IEEE</span>}
          <span className="font-semibold text-foreground text-sm leading-snug break-words min-w-0">{project.title}</span>
        </div>
        <Icon
          name={open ? 'ChevronUpIcon' : 'ChevronDownIcon'}
          size={16}
          className="flex-shrink-0 text-muted-foreground"
        />
      </button>

      <div className={`accordion-content ${open ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-5 pb-5 border-t border-border pt-4">
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.overview}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
            <div>
              <h4 className="micro-label mb-2">// CORE TECHNOLOGIES</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span key={tech} className="chip-cyan text-xs">{tech}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="micro-label mb-2">// WHAT YOU GET</h4>
              <ul className="space-y-1">
                {project.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Icon name="CheckIcon" size={12} className="text-primary flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-5 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Icon name="ClockIcon" size={12} className="text-accent" />
              Est. {project.timeline}
            </span>
            <span className={`px-2 py-0.5 rounded border text-xs font-mono ${difficultyColors[project.difficulty]}`}>
              {project.difficulty}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={`/contact?project=${encodeURIComponent(project.title)}`}
              className="btn-primary flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold"
            >
              <Icon name="DocumentTextIcon" size={14} />
              Enquire About This Project
            </Link>
            <a
              href={`https://wa.me/919538208573?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium"
              onClick={() => trackEvent('whatsapp_click', { location: 'project_accordion', project: project.title })}
            >
              <Icon name="ChatBubbleLeftRightIcon" size={14} />
              WhatsApp About This
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BranchPageContent({ data, branch, h1 }: { data: BranchData; branch: string; h1?: string }) {
  const [search, setSearch] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty | 'All'>('All');

  const filtered = useMemo(() => {
    return data.projects.filter((p) => {
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchDiff = difficultyFilter === 'All' || p.difficulty === difficultyFilter;
      return matchSearch && matchDiff;
    });
  }, [data.projects, search, difficultyFilter]);

  const difficulties: ('All' | Difficulty)[] = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const currentBranchHref = `/projects/${branch}`;
  const relatedBranches = otherBranches.filter((b) => b.href !== currentBranchHref);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-64 flex items-end overflow-hidden blueprint-grid pt-24 pb-0 bg-background">
        <div className="absolute inset-0 opacity-30">
          <AppImage
            src={data.heroImage}
            alt={`${data.fullName} engineering projects in Bangalore — WEBUILDPRO lab dark technical environment`}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-background/80" aria-hidden="true" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-0 w-full">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li aria-hidden="true"><Icon name="ChevronRightIcon" size={12} /></li>
              <li><Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link></li>
              <li aria-hidden="true"><Icon name="ChevronRightIcon" size={12} /></li>
              <li className="text-foreground font-medium" aria-current="page">{data.name}</li>
            </ol>
          </nav>
          <span className="micro-label block mb-3">// {data.name.toUpperCase()} PROJECTS</span>
          <h1 className="text-hero-lg font-bold text-foreground mb-4">{h1 || `${data.fullName} in Bangalore`}</h1>
          <p className="text-muted-foreground text-base max-w-2xl mb-8">{data.tagline}</p>
          {/* Domain chips */}
          <div className="flex flex-wrap gap-2 pb-8">
            {data.domains.map((d) => (
              <span key={d} className="chip-cyan">{d}</span>
            ))}
          </div>
        </div>
      </section>

      <CircuitDivider />

      {/* Projects list */}
      <section className="py-16 bg-secondary" aria-labelledby="projects-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <span className="micro-label block mb-3">// PROJECT TITLES</span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <h2 id="projects-heading" className="text-section-xl font-bold text-foreground">
                {data.projects.length} project titles — click to expand.
              </h2>
              {branch === 'ece' && (
                <Link
                  href="/project-list/ece"
                  className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded text-xs font-semibold hover:bg-primary/20 transition-colors whitespace-nowrap flex-shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Download ECE Project List (PDF)
                </Link>
              )}
              {branch === 'cse' && (
                <Link
                  href="/project-list/cse"
                  className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded text-xs font-semibold hover:bg-primary/20 transition-colors whitespace-nowrap flex-shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Download CSE Project List (PDF)
                </Link>
              )}
              {branch === 'eee' && (
                <Link
                  href="/project-list/eee"
                  className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded text-xs font-semibold hover:bg-primary/20 transition-colors whitespace-nowrap flex-shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Download EEE Project List (PDF)
                </Link>
              )}
              {branch === 'mechanical' && (
                <Link
                  href="/project-list/mechanical"
                  className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded text-xs font-semibold hover:bg-primary/20 transition-colors whitespace-nowrap flex-shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Download Mechanical Project List (PDF)
                </Link>
              )}
              {branch === 'civil' && (
                <Link
                  href="/project-list/civil"
                  className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded text-xs font-semibold hover:bg-primary/20 transition-colors whitespace-nowrap flex-shrink-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Download Civil Project List (PDF)
                </Link>
              )}
            </div>

            {/* Search + filter */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="relative flex-1 max-w-md">
                <Icon name="MagnifyingGlassIcon" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search by title or technology…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="input-base w-full pl-10 pr-4 py-2.5 text-sm"
                  aria-label="Search projects"
                />
              </div>
              <div className="flex gap-2 flex-wrap" role="group" aria-label="Filter by difficulty">
                {difficulties.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDifficultyFilter(d)}
                    className={`px-4 py-2 text-xs font-medium rounded border transition-colors ${
                      difficultyFilter === d
                        ? 'bg-primary border-primary text-primary-foreground'
                        : 'bg-card border-border text-muted-foreground hover:text-foreground hover:border-border/80'
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {filtered.length === 0 ? (
              <p className="text-muted-foreground text-sm py-8 text-center">
                No projects match your search.{' '}
                <button onClick={() => { setSearch(''); setDifficultyFilter('All'); }} className="text-accent underline">
                  Clear filters
                </button>
              </p>
            ) : (
              <div className="space-y-2">
                {filtered.map((project) => (
                  <ProjectAccordion key={project.id} project={project} branch={branch} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <CircuitDivider />

      {/* Sub-category pages (ECE) + project list link */}
      {(branchSubCategories[branch] || branchProjectListLinks[branch]) && (
        <section className="py-12 bg-background" aria-labelledby={`${branch}-subcats-heading`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {branchSubCategories[branch] && (
              <>
                <h2 id={`${branch}-subcats-heading`} className="micro-label mb-4">// POPULAR {branch.toUpperCase()} PROJECT CATEGORIES IN BANGALORE</h2>
                <div className="flex flex-wrap gap-3 mb-6">
                  {branchSubCategories[branch].map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="bg-card border border-primary/20 rounded px-4 py-2 text-xs text-primary hover:bg-primary/10 hover:border-primary/40 transition-colors font-medium"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </>
            )}
            {branchProjectListLinks[branch] && (
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-muted-foreground flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                <Link
                  href={branchProjectListLinks[branch].href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
                >
                  {branchProjectListLinks[branch].label}
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Own idea band */}
      <section className="py-12 bg-primary/5 border-y border-primary/20" aria-label="Custom project enquiry">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-bold text-foreground text-lg mb-1">Have your own idea?</h2>
            <p className="text-muted-foreground text-sm">Bring the concept. We do the feasibility check and build it if it&apos;s achievable in your timeline.</p>
          </div>
          <a
            href="https://wa.me/919538208573?text=Hi%20WEBUILDPRO%2C%20I%20have%20my%20own%20project%20idea%20I%27d%20like%20to%20discuss."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2 px-6 py-3 text-sm font-semibold whitespace-nowrap flex-shrink-0"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={16} />
            Discuss My Idea
          </a>
        </div>
      </section>

      {/* Mini Projects internal link */}
      <section className="py-8 bg-secondary border-b border-border" aria-label="Mini projects link">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            Looking for a <strong className="text-foreground">mini project</strong> instead? We build affordable mini projects for 1st–6th semester students across all branches.
          </p>
          <Link
            href="/mini-projects"
            className="btn-ghost flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium whitespace-nowrap"
          >
            Browse Mini Projects →
          </Link>
        </div>
      </section>

      {/* Other branches — internal linking */}
      <section className="py-12 bg-background" aria-labelledby="other-branches-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 id="other-branches-heading" className="micro-label mb-4">// OTHER BRANCHES WE BUILD FOR</h2>
          <div className="flex flex-wrap gap-3">
            {relatedBranches.map((b) => (
              <Link
                key={b.href}
                href={b.href}
                className="bg-card border border-border rounded px-4 py-2 text-xs text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
              >
                {b.label}
              </Link>
            ))}
            <Link href="/industrial" className="bg-card border border-border rounded px-4 py-2 text-xs text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
              Industrial prototype development in Bangalore
            </Link>
            <Link href="/contact" className="bg-card border border-border rounded px-4 py-2 text-xs text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
              Get a project quote
            </Link>
          </div>
        </div>
      </section>

      {/* Branch FAQ */}
      <FaqSection faqs={data.faq} />

      {/* Contact form */}
      <section className="py-16 bg-background" aria-labelledby="branch-contact-heading">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <span className="micro-label block mb-3">// GET YOUR QUOTE</span>
          <h2 id="branch-contact-heading" className="text-section-xl font-bold text-foreground mb-4">
            Ready to start?
          </h2>
          <p className="text-muted-foreground mb-6">Fixed quote in 24 hours. No obligation.</p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold">
            <Icon name="DocumentTextIcon" size={16} />
            Get a Free Project Quote
          </Link>
        </div>
      </section>
    </>
  );
}