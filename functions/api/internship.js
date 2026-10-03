import { makeHandler } from '../_forward.js';

export const onRequestPost = makeHandler({
  envKey: 'SHEETS_INTERNSHIP_URL',
  required: ['name', 'college', 'branch', 'year', 'track', 'duration', 'mode'],
  toRow: (d, clip) => ({
    name: clip(d.name, 100),
    phone: d.phone,
    email: clip(d.email, 200),
    college: clip(d.college, 200),
    branch: clip(d.branch, 100),
    year: clip(d.year, 50),
    track: clip(d.track, 100),
    duration: clip(d.duration, 50),
    startDate: clip(d.startDate, 50),
    mode: clip(d.mode, 50),
    motivation: clip(d.motivation),
    source: clip(d.source || '/internships', 200),
  }),
});
