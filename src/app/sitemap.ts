export const dynamic = 'force-static';

import type { MetadataRoute } from 'next';
import { blogArticles } from '@/lib/data/blog';
import { civilSubCategories } from '@/lib/data/subcategories/civil';
import { cseSubCategories } from '@/lib/data/subcategories/cse';
import { eeeSubCategories } from '@/lib/data/subcategories/eee';
import { mechanicalSubCategories } from '@/lib/data/subcategories/mechanical';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

// Bump when page content changes. Search engines only trust lastmod that reflects real edits,
// so this is a manual date rather than the build time.
const SITE_UPDATED = new Date('2026-10-03');

type Entry = MetadataRoute.Sitemap[number];
const page = (
  path: string,
  priority: number,
  changeFrequency: Entry['changeFrequency'] = 'monthly',
  lastModified: Date = SITE_UPDATED,
): Entry => ({ url: `${BASE_URL}${path}`, lastModified, changeFrequency, priority });

// ECE sub-pages are configured inside their route file; keep this list in sync with it.
const eceSubSlugs = [
  'iot-projects-in-bangalore',
  'embedded-systems-projects-in-bangalore',
  'robotics-projects-in-bangalore',
  'drone-projects-in-bangalore',
  'vlsi-projects-in-bangalore',
  'biomedical-projects-in-bangalore',
  'communication-projects-in-bangalore',
];

const subPages: [string, string[]][] = [
  ['ece', eceSubSlugs],
  ['cse', cseSubCategories.map((s) => s.slug)],
  ['mechanical', mechanicalSubCategories.map((s) => s.slug)],
  ['eee', eeeSubCategories.map((s) => s.slug)],
  ['civil', civilSubCategories.map((s) => s.slug)],
];

const branches = ['cse', 'ece', 'eee', 'mechanical', 'civil'];
const locations = ['vijayanagar', 'jayanagar', 'btm-layout', 'yelahanka'];

export default function sitemap(): MetadataRoute.Sitemap {
  const latestPost = blogArticles.reduce(
    (max, a) => (a.dateModified > max ? a.dateModified : max),
    '2026-01-01',
  );

  return [
    page('/', 1.0, 'weekly'),
    page('/faq', 0.9, 'weekly'),
    page('/project-centre-bangalore', 0.9, 'weekly'),
    page('/final-year-projects-bangalore', 0.9, 'weekly'),
    page('/internship-bangalore', 0.9, 'weekly'),
    page('/projects', 0.9, 'weekly'),
    page('/mini-projects', 0.9, 'weekly'),
    page('/internships', 0.9, 'weekly'),
    page('/industrial', 0.9, 'weekly'),
    ...branches.map((b) => page(`/projects/${b}`, 0.9, 'weekly')),
    ...locations.map((l) => page(`/engineering-projects-${l}`, 0.8)),
    ...subPages.flatMap(([branch, slugs]) => slugs.map((s) => page(`/projects/${branch}/${s}`, 0.8))),
    ...branches.map((b) => page(`/project-list/${b}`, 0.7)),
    page('/about', 0.7),
    page('/contact', 0.7),
    page('/blog', 0.8, 'weekly', new Date(latestPost)),
    ...blogArticles
      .filter((a) => !a.canonicalSlug)
      .map((a) => page(`/blog/${a.slug}`, 0.7, 'monthly', new Date(a.dateModified))),
    page('/sitemap', 0.3),
    page('/privacy-policy', 0.2, 'yearly'),
    page('/terms', 0.2, 'yearly'),
  ];
}
