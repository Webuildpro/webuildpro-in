export const dynamic = 'force-static';

import type { MetadataRoute } from 'next';

// Search and AI answer-engine crawlers are explicitly welcome. A bot that matches a named group
// ignores the '*' group, so every group carries the same disallow list.
const AI_AND_SEARCH_BOTS = [
  'Googlebot',
  'Bingbot',
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot',
  'Applebot-Extended',
  'Amazonbot',
  'DuckDuckBot',
  'YandexBot',
  'CCBot',
];

// Only private or parameterised URLs are blocked. /_next/ stays crawlable so bots can render CSS/JS.
const disallow = ['/api/', '/*?*'];

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://webuildpro.in';

  return {
    rules: [
      { userAgent: '*', allow: '/', disallow },
      { userAgent: AI_AND_SEARCH_BOTS, allow: '/', disallow },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
