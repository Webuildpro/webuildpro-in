'use client';
import dynamic from 'next/dynamic';

// Client-side-only dynamic import — CouponPopup is deferred until after initial paint
// This keeps it out of the critical JS bundle and improves FCP
const CouponPopup = dynamic(() => import('@/components/CouponPopup'), {
  ssr: false,
  loading: () => null,
});

export default function LazyCouponPopup() {
  return <CouponPopup />;
}
