import { makeHandler } from '../_forward.js';

export const onRequestPost = makeHandler({
  envKey: 'SHEETS_CONTACT_URL',
  required: ['name', 'userType', 'branch', 'message'],
  toRow: (d, clip) => ({
    name: clip(d.name, 100),
    phone: d.phone,
    email: clip(d.email, 200),
    userType: clip(d.userType, 100),
    branch: clip(d.branch, 100),
    college: clip(d.college, 200),
    message: clip(d.message),
    deadline: clip(d.deadline, 100),
    sourcePage: clip(d.sourcePage || '/', 200),
  }),
});
