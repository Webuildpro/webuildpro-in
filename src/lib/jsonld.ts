// Shared JSON-LD builders. Every page references the same Organization entity by @id,
// so search engines and AI answer engines resolve one consistent WEBUILDPRO entity
// (same name, address, phone, hours and profiles everywhere).

export const SITE_URL = 'https://webuildpro.in';
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const BUSINESS = {
  name: 'WEBUILDPRO India',
  alternateNames: ['WEBUILDPRO', 'WeBuildPro', 'We Build Pro'],
  phone: '+91-95382-08573',
  whatsapp: 'https://wa.me/919538208573',
  logo: `${SITE_URL}/assets/images/app_logo.png`,
  image: `${SITE_URL}/assets/images/og-webuildpro.jpg`,
  googleBusinessProfile: 'https://g.co/kgs/zgjqv4M',
  instagram: 'https://www.instagram.com/webuildpro/',
  address: {
    streetAddress: 'Peenya 2nd Stage',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: '560058',
    addressCountry: 'IN',
  },
  geo: { latitude: 13.0134785, longitude: 77.4961966 },
};

const abs = (path: string) => (path.startsWith('http') ? path : `${SITE_URL}${path}`);

export function organizationSchema() {
  return {
    '@type': ['LocalBusiness', 'EducationalOrganization'],
    '@id': ORG_ID,
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateNames,
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: BUSINESS.logo, width: 719, height: 728 },
    image: BUSINESS.image,
    description:
      'Engineering project, internship and industrial prototyping centre in Peenya, Bangalore. Final year, IEEE and mini projects for CSE, ECE, EEE, Mechanical and Civil students — designed, built and tested in our lab, delivered online and offline across India.',
    telephone: BUSINESS.phone,
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    address: { '@type': 'PostalAddress', ...BUSINESS.address },
    geo: { '@type': 'GeoCoordinates', ...BUSINESS.geo },
    hasMap: BUSINESS.googleBusinessProfile,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '19:00',
    },
    areaServed: [
      { '@type': 'City', name: 'Bengaluru' },
      { '@type': 'State', name: 'Karnataka' },
      { '@type': 'Country', name: 'India' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS.phone,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: 'English',
    },
    knowsAbout: [
      'Final year engineering projects',
      'IEEE projects',
      'Mini projects',
      'Embedded systems',
      'Internet of Things',
      'Machine learning',
      'Drone development',
      'Robotics',
      'PLC automation',
      'Industrial prototyping',
      'Engineering internships',
    ],
    sameAs: [BUSINESS.instagram, BUSINESS.googleBusinessProfile],
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: 'WEBUILDPRO',
    inLanguage: 'en-IN',
    publisher: { '@id': ORG_ID },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.url),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  areaServed?: string;
}) {
  return {
    '@type': 'Service',
    '@id': `${abs(opts.path)}#service`,
    name: opts.name,
    description: opts.description,
    url: abs(opts.path),
    serviceType: opts.serviceType || 'Engineering project development',
    provider: { '@id': ORG_ID },
    areaServed: opts.areaServed
      ? [{ '@type': 'Place', name: opts.areaServed }, { '@type': 'Country', name: 'India' }]
      : [{ '@type': 'City', name: 'Bengaluru' }, { '@type': 'Country', name: 'India' }],
  };
}

export function itemListSchema(name: string, items: { name: string; description?: string }[]) {
  return {
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
}

/** Wraps one or more nodes into a single @graph document. */
export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}

/** Serialises JSON-LD safely for inline <script> (prevents </script> breakouts). */
export function safeJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
