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
    // Multiple contact points: voice, WhatsApp, and in-person visit
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS.phone,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: 'English',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '19:00',
        },
      },
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        url: BUSINESS.whatsapp,
        description: 'WhatsApp for project enquiries and quotes. Fixed quote within 24 hours, no obligation.',
        availableLanguage: 'English',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'technical support',
        telephone: BUSINESS.phone,
        description: 'Post-delivery demo-day support — WhatsApp the team if something needs attention before your viva.',
        availableLanguage: 'English',
      },
    ],
    knowsAbout: [
      'Final year engineering projects',
      'IEEE projects',
      'Non-IEEE academic projects',
      'Mini projects for engineering students',
      'Embedded systems',
      'Internet of Things',
      'Machine learning projects',
      'Drone development',
      'Robotics',
      'PLC automation',
      'Industrial prototyping',
      'Engineering internships',
      'Python projects',
      'Image processing',
      'Blockchain projects',
      'VLSI design',
      'Power electronics',
      'Mechatronics',
    ],
    sameAs: [BUSINESS.instagram, BUSINESS.googleBusinessProfile],
    // AggregateRating — E-E-A-T trust signal; helps AI engines evaluate credibility
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '85',
      bestRating: '5',
      worstRating: '1',
    },
    // OfferCatalog: machine-readable service menu for AI agent matching
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Engineering Projects, Internships and Industrial Prototyping',
      itemListElement: [
        {
          '@type': 'Offer',
          url: `${SITE_URL}/final-year-projects-bangalore`,
          itemOffered: {
            '@type': 'Service',
            name: 'Final Year Engineering Projects',
            description:
              'IEEE and non-IEEE final year projects for CSE, ECE, EEE, Mechanical and Civil students. Built and tested in our Peenya lab. Delivered in 2–4 weeks with source code, circuit diagrams, BOM, report material, PPT support and demo-day WhatsApp backup.',
            serviceOutput:
              'Working project unit, full source code, circuit diagrams, bill of materials, report material, PPT support, and viva walkthrough guidance.',
            audience: {
              '@type': 'Audience',
              audienceType:
                'Final year engineering students (CSE, ECE, EEE, Mechanical, Civil) in Bangalore and across India needing a built and tested project for submission and viva.',
            },
          },
        },
        {
          '@type': 'Offer',
          url: `${SITE_URL}/mini-projects`,
          itemOffered: {
            '@type': 'Service',
            name: 'Mini Projects for Engineering Students',
            description:
              'Ready-to-submit mini projects for 1st–6th semester students. Starting ₹3,500. Built and tested — not just code files. Available online (pan-India) and offline (Bangalore lab).',
            serviceOutput:
              'Working mini project unit with source code and documentation. Ready for submission.',
            audience: {
              '@type': 'Audience',
              audienceType:
                '1st to 6th semester engineering students needing a built mini project for submission. All branches: CSE, ECE, EEE, Mechanical, Civil.',
            },
          },
        },
        {
          '@type': 'Offer',
          url: `${SITE_URL}/internships`,
          itemOffered: {
            '@type': 'Service',
            name: 'Engineering Internships with Certificate',
            description:
              'Hands-on internships in Bangalore across IoT, robotics, embedded systems, drones, Python, AI and more. Verifiable completion certificate earned on a real build — not attendance.',
            serviceOutput:
              'Hands-on internship experience on a real build, verifiable completion certificate, and practical skills for placements.',
            audience: {
              '@type': 'Audience',
              audienceType:
                'Engineering students seeking hands-on lab internships in Bangalore with a verifiable certificate for college requirements and placement support.',
            },
          },
        },
        {
          '@type': 'Offer',
          url: `${SITE_URL}/industrial`,
          itemOffered: {
            '@type': 'Service',
            name: 'Industrial Prototyping and Custom Drones',
            description:
              'Custom drones, IoT systems, PLC automation, robotics, AI vision, and warehouse management system prototypes built under NDA. IP transfers to client. No publication of client builds.',
            serviceOutput:
              'Working industrial prototype or custom drone system. Full IP transfer to client. NDA-protected build with no publication or reuse.',
            audience: {
              '@type': 'Audience',
              audienceType:
                'Companies and entrepreneurs in India needing custom hardware prototypes, drones, IoT systems, or automation solutions built under NDA.',
            },
          },
        },
        {
          '@type': 'Offer',
          url: `${SITE_URL}/final-year-projects-bangalore`,
          itemOffered: {
            '@type': 'Service',
            name: 'Online / Remote Project Delivery (Pan-India)',
            description:
              'Full project delivery for students outside Bangalore. Hardware couriered to the student, video walkthroughs of the working unit, screen-share mentoring, and milestone demo calls. No need to visit Bangalore.',
            serviceOutput:
              'Working project unit couriered to the student. Video walkthrough, screen-share mentoring sessions, and demo-day WhatsApp support.',
            audience: {
              '@type': 'Audience',
              audienceType:
                'Engineering students outside Bangalore who need a final year or mini project built and delivered to their location across India.',
            },
          },
        },
      ],
    },
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
    // SearchAction enables sitelinks search box and AI agent search routing
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/?s={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
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
  audience?: string;
  serviceOutput?: string;
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
    ...(opts.audience
      ? { audience: { '@type': 'Audience', audienceType: opts.audience } }
      : {}),
    ...(opts.serviceOutput ? { serviceOutput: opts.serviceOutput } : {}),
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

/**
 * Representative Review nodes — E-E-A-T trust signals.
 * Keep in sync with visible testimonials on the site.
 */
export function reviewsSchema() {
  const reviews = [
    {
      author: 'Priya Sharma',
      reviewBody:
        'Got my IoT-based smart farming project done from WEBUILDPRO. The team explained everything clearly, the project worked perfectly in my viva, and they answered all my questions on WhatsApp the night before. Highly recommend!',
      ratingValue: '5',
      datePublished: '2024-11-08',
    },
    {
      author: 'Karthik Reddy',
      reviewBody:
        'I needed a final year project urgently. WEBUILDPRO delivered a working ML-based attendance system with full documentation in 10 days. The viva support on WhatsApp was a lifesaver.',
      ratingValue: '5',
      datePublished: '2024-09-22',
    },
    {
      author: 'Ananya Nair',
      reviewBody:
        'The internship on robotics was exactly what I needed — hands-on work, real lab environment, and a verifiable certificate. Way more useful than online-only internships.',
      ratingValue: '5',
      datePublished: '2024-08-14',
    },
  ];

  return reviews.map((review, index) => ({
    '@type': 'Review',
    '@id': `${SITE_URL}/#review-${index + 1}`,
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: 'WEBUILDPRO India',
      '@id': ORG_ID,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.ratingValue,
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
    publisher: {
      '@type': 'Organization',
      name: 'Google',
    },
  }));
}

/** Wraps one or more nodes into a single @graph document. */
export function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}

/** Serialises JSON-LD safely for inline <script> (prevents </script> breakouts). */
export function safeJsonLd(data: object): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
