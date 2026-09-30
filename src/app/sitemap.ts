import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';
const buildDate = new Date('2026-08-01T00:00:00.000Z');

export default function sitemap(): MetadataRoute.Sitemap {
  const blogSlugs = [
    'generative-ai-projects-for-final-year-2026',
    'agentic-ai-projects-for-final-year-2026',
    'iot-based-mini-projects',
    'final-year-engineering-project-makers-in-bangalore',
    'innovative-final-year-project-ideas-aeronautical-2026',
    'innovative-final-year-project-ideas-ece-2026',
    'best-ai-based-final-year-project-ideas-2026',
    'latest-final-year-project-ideas-cse-2026',
    'innovative-final-year-project-ideas-eee-2026',
    'ieee-projects-in-bangalore',
    'ieee-vs-non-ieee-projects-2026',
    'trending-final-year-project-ideas-2026',
    'mini-project-ideas-mechanical-eee-civil-2026',
    'mini-project-ideas-cse-2026',
    'mini-project-ideas-ece-2026',
    'final-year-project-ideas-ece-2026',
    'how-to-choose-final-year-engineering-project',
    'final-year-project-cost-bangalore-2026',
    'ieee-vs-non-ieee-projects',
    'realistic-timeline-hardware-project',
    'startups-bangalore-hardware-prototype',
    'drone-development-india-2026',
    // New SEO blog posts
    'best-project-centre-bangalore-guide',
    'final-year-projects-bangalore-complete-guide',
    'best-cse-aiml-final-year-projects-bangalore',
    'top-electronics-ece-projects-bangalore',
    'mechanical-engineering-projects-bangalore',
    'eee-electrical-projects-bangalore',
    'civil-engineering-projects-bangalore',
    'best-internship-centre-bangalore',
    'online-vs-offline-engineering-projects',
    'how-much-do-final-year-projects-cost-bangalore',
  ];

  const branches = ['cse', 'mechanical', 'ece', 'eee', 'civil'];

  const eceSubSlugs = [
    'iot-projects-in-bangalore',
    'embedded-systems-projects-in-bangalore',
    'robotics-projects-in-bangalore',
    'drone-projects-in-bangalore',
    'vlsi-projects-in-bangalore',
    'biomedical-projects-in-bangalore',
    'communication-projects-in-bangalore',
  ];

  const cseSubSlugs = [
    'machine-learning-projects-in-bangalore',
    'ai-projects-in-bangalore',
    'data-science-projects-in-bangalore',
    'blockchain-projects-in-bangalore',
    'iot-projects-in-bangalore',
    'python-projects-in-bangalore',
    'image-processing-projects-in-bangalore',
    'cybersecurity-projects-in-bangalore',
  ];

  const mechanicalSubSlugs = [
    'automobile-projects-in-bangalore',
    'hydraulics-pneumatics-projects-in-bangalore',
    'robotics-mechatronics-projects-in-bangalore',
    'design-analysis-projects-in-bangalore',
    'agricultural-projects-in-bangalore',
    'renewable-energy-projects-in-bangalore',
  ];

  const eeeSubSlugs = [
    'power-electronics-projects-in-bangalore',
    'plc-automation-projects-in-bangalore',
    'ev-projects-in-bangalore',
    'solar-energy-projects-in-bangalore',
    'motor-control-projects-in-bangalore',
  ];

  const civilSubSlugs = [
    'structural-projects-in-bangalore',
    'transportation-projects-in-bangalore',
    'geotechnical-projects-in-bangalore',
    'water-resources-projects-in-bangalore',
    'environmental-projects-in-bangalore',
    'construction-management-projects-in-bangalore',
  ];

  return [
    // Homepage — highest priority
    {
      url: BASE_URL,
      lastModified: buildDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    // FAQ — very high priority for AEO
    {
      url: `${BASE_URL}/faq`,
      lastModified: buildDate,
      changeFrequency: 'weekly' as const,
      priority: 0.98,
    },
    // New landing pages — very high priority
    {
      url: `${BASE_URL}/project-centre-bangalore`,
      lastModified: buildDate,
      changeFrequency: 'weekly' as const,
      priority: 0.98,
    },
    {
      url: `${BASE_URL}/final-year-projects-bangalore`,
      lastModified: buildDate,
      changeFrequency: 'weekly' as const,
      priority: 0.98,
    },
    {
      url: `${BASE_URL}/internship-bangalore`,
      lastModified: buildDate,
      changeFrequency: 'weekly' as const,
      priority: 0.97,
    },
    // Location landing pages
    {
      url: `${BASE_URL}/engineering-projects-vijayanagar`,
      lastModified: buildDate,
      changeFrequency: 'weekly' as const,
      priority: 0.97,
    },
    {
      url: `${BASE_URL}/engineering-projects-jayanagar`,
      lastModified: buildDate,
      changeFrequency: 'weekly' as const,
      priority: 0.97,
    },
    {
      url: `${BASE_URL}/engineering-projects-btm-layout`,
      lastModified: buildDate,
      changeFrequency: 'weekly' as const,
      priority: 0.97,
    },
    {
      url: `${BASE_URL}/engineering-projects-yelahanka`,
      lastModified: buildDate,
      changeFrequency: 'weekly' as const,
      priority: 0.97,
    },
    // Main service pages
    {
      url: `${BASE_URL}/projects`,
      lastModified: buildDate,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/mini-projects`,
      lastModified: buildDate,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/internships`,
      lastModified: buildDate,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/industrial`,
      lastModified: buildDate,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    // Branch pages — high priority for SEO
    ...branches.map((branch) => ({
      url: `${BASE_URL}/projects/${branch}`,
      lastModified: buildDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
    // ECE sub-category pages (micro-keyword landing pages)
    ...eceSubSlugs.map((slug) => ({
      url: `${BASE_URL}/projects/ece/${slug}`,
      lastModified: buildDate,
      changeFrequency: 'monthly' as const,
      priority: 0.88,
    })),
    // CSE sub-category pages (micro-keyword landing pages)
    ...cseSubSlugs.map((slug) => ({
      url: `${BASE_URL}/projects/cse/${slug}`,
      lastModified: buildDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Mechanical sub-category pages (micro-keyword landing pages)
    ...mechanicalSubSlugs.map((slug) => ({
      url: `${BASE_URL}/projects/mechanical/${slug}`,
      lastModified: buildDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // EEE sub-category pages (micro-keyword landing pages)
    ...eeeSubSlugs.map((slug) => ({
      url: `${BASE_URL}/projects/eee/${slug}`,
      lastModified: buildDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Civil sub-category pages (micro-keyword landing pages)
    ...civilSubSlugs.map((slug) => ({
      url: `${BASE_URL}/projects/civil/${slug}`,
      lastModified: buildDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Project list pages (printable PDF lists)
    {
      url: `${BASE_URL}/project-list/ece`,
      lastModified: buildDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/project-list/cse`,
      lastModified: buildDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/project-list/eee`,
      lastModified: buildDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/project-list/mechanical`,
      lastModified: buildDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/project-list/civil`,
      lastModified: buildDate,
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    },
    // Secondary pages
    {
      url: `${BASE_URL}/about`,
      lastModified: buildDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: buildDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: buildDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    // Blog posts
    ...blogSlugs.map((slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: buildDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // Utility pages
    {
      url: `${BASE_URL}/sitemap`,
      lastModified: buildDate,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: buildDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: buildDate,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];
}