// JSON-LD removed — all schema functions are no-ops.
export function safeJsonLd(_data: object | null | undefined): string { return ''; }
export function breadcrumbSchema(_items: { name: string; url: string }[]): null { return null; }
export function articleSchema(..._args: unknown[]): null { return null; }
export function faqSchema(_faqs: { question: string; answer: string }[]): null { return null; }
export function serviceSchema(_name: string, _description: string, _path: string): null { return null; }
export function itemListSchema(_items: { name: string }[], _name: string): null { return null; }
export function organizationSchema(): null { return null; }
export function websiteSchema(): null { return null; }
export function localBusinessSchema(): null { return null; }
