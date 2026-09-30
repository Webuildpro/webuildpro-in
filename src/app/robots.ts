import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

  const publicRoutes = [
    '/',
    '/projects',
    '/projects/cse',
    '/projects/mechanical',
    '/projects/ece',
    '/projects/eee',
    '/projects/civil',
    '/internships',
    '/industrial',
    '/about',
    '/contact',
    '/blog',
    '/privacy-policy',
    '/terms',
    '/project-centre-bangalore',
    '/final-year-projects-bangalore',
    '/internship-bangalore',
    '/faq',
  ];

  return {
    rules: [
      {
        userAgent: '*',
        allow: publicRoutes,
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/dashboard/',
          '/workspace/',
          '/settings/',
          '/billing/',
          '/search',
          '/*?*',
          '/*?q=',
          '/*?s=',
          '/*?search=',
          '/*?query=',
          '/*?utm_',
          '/*?ref=',
          '/*?fbclid=',
          '/*?gclid=',
          '/sitemap?q=',
          '/contact?project=',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0.5,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
      },
      // OpenAI crawlers
      {
        userAgent: 'GPTBot',
        allow: publicRoutes,
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: publicRoutes,
      },
      {
        userAgent: 'ChatGPT-User',
        allow: publicRoutes,
      },
      // Anthropic crawlers
      {
        userAgent: 'ClaudeBot',
        allow: publicRoutes,
      },
      {
        userAgent: 'Claude-User',
        allow: publicRoutes,
      },
      {
        userAgent: 'anthropic-ai',
        allow: publicRoutes,
      },
      // Google Gemini / AI Overviews
      {
        userAgent: 'Google-Extended',
        allow: publicRoutes,
      },
      // Perplexity
      {
        userAgent: 'PerplexityBot',
        allow: publicRoutes,
      },
      {
        userAgent: 'Perplexity-User',
        allow: publicRoutes,
      },
      // Microsoft Copilot
      {
        userAgent: 'Bingbot',
        allow: publicRoutes,
      },
      // Amazon
      {
        userAgent: 'Amazonbot',
        allow: publicRoutes,
      },
      // Apple
      {
        userAgent: 'Applebot-Extended',
        allow: publicRoutes,
      },
      // Common Crawl (training data)
      {
        userAgent: 'CCBot',
        allow: publicRoutes,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}