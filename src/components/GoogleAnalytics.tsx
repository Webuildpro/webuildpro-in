'use client';
import Script from 'next/script';
import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function GAPageTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_ID || typeof window === 'undefined' || !window.gtag) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams?.toString()}` : '');
    window.gtag('event', 'page_view', { page_path: url });
  }, [pathname, searchParams]);

  return null;
}

export default function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      {/* Inline gtag stub — zero-byte blocking, queues events before script loads */}
      <Script
        id="gtag-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              send_page_view: false,
              transport_type: 'beacon'
            });
          `,
        }}
      />
      {/* Deferred GA script — loads after page is fully loaded, not during LCP */}
      <Script
        id="google-analytics"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="lazyOnload"
      />
      <Suspense fallback={null}>
        <GAPageTracker />
      </Suspense>
    </>
  );
}
