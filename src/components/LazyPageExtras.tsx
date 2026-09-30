'use client';
/**
 * LazyPageExtras — deferred non-critical UI loaded after initial paint.
 * WhatsAppButton and MobileActionBar are interaction-only widgets with no
 * impact on LCP/FCP. Loading them lazily removes ~18KB from the critical JS path.
 */
import dynamic from 'next/dynamic';

const WhatsAppButton = dynamic(() => import('@/components/WhatsAppButton'), {
  ssr: false,
  loading: () => null,
});

const MobileActionBar = dynamic(() => import('@/components/MobileActionBar'), {
  ssr: false,
  loading: () => null,
});

export default function LazyPageExtras() {
  return (
    <>
      <WhatsAppButton />
      <MobileActionBar />
    </>
  );
}
