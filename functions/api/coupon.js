import { makeHandler } from '../_forward.js';

export const onRequestPost = makeHandler({
  envKey: 'SHEETS_COUPON_URL',
  required: ['name'],
  toRow: (d, clip) => ({
    name: clip(d.name, 100),
    phone: d.phone,
    email: clip(d.email, 200),
    couponCode: 'WBP10',
    sourcePage: clip(d.sourcePage || '/', 200),
  }),
});
