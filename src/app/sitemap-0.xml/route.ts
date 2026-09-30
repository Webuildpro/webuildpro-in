export const dynamic = 'force-static';

import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

  const urls = [
    '/',
    '/projects',
    '/projects/cse',
    '/projects/ece',
    '/projects/eee',
    '/projects/mechanical',
    '/projects/civil',
    '/mini-projects',
    '/blog',
    '/about',
    '/contact',
    '/faq',
    '/internships',
    '/industrial',
    '/project-centre-bangalore',
    '/final-year-projects-bangalore',
    '/internship-bangalore',
    '/privacy-policy',
    '/terms',
    '/sitemap',
  ];

  const urlEntries = urls?.map(
      (path) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.8'}</priority>
  </url>`
    )?.join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
