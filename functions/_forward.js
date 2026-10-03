// Shared handler for Cloudflare Pages Functions. The site is a static export, so the Next.js
// routes in src/app/api never run in production — these functions serve the same /api/* paths
// and forward validated submissions to the Google Sheets webhook configured in Pages env vars.

const PHONE = /^[6-9]\d{9}$/;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (message, status) =>
  new Response(JSON.stringify({ message }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

/**
 * @param {object} opts
 * @param {string} opts.envKey      Pages env var holding the Sheets webhook URL
 * @param {string[]} opts.required  Fields that must be non-empty
 * @param {(data: Record<string, string>) => object} opts.toRow  Maps the body to the sheet row
 */
export function makeHandler({ envKey, required, toRow }) {
  return async ({ request, env }) => {
    let body;
    try {
      body = await request.json();
    } catch {
      return json('Invalid request', 400);
    }

    if (body.honeypot) return json('ok', 200);

    for (const field of required) {
      if (!String(body[field] ?? '').trim()) return json(`${field} is required`, 400);
    }
    if (!PHONE.test(String(body.phone ?? ''))) return json('Enter a valid 10-digit Indian mobile number', 400);
    if (!EMAIL.test(String(body.email ?? ''))) return json('Enter a valid email address', 400);

    const sheetsUrl = env[envKey];
    if (!sheetsUrl || !sheetsUrl.startsWith('https://script.google.com/') || sheetsUrl.includes('YOUR_')) {
      console.error(`${envKey} is not configured — submission was not stored`);
      return json('Form storage is not configured', 503);
    }

    const clip = (v, n = 2000) => String(v ?? '').slice(0, n);
    const row = { timestamp: new Date().toISOString(), ...toRow(body, clip) };
    try {
      // Awaited so the visitor only sees success once Google has accepted the row.
      const res = await fetch(sheetsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(row),
        redirect: 'manual',
      });
      if (!isAppsScriptSuccess(res)) {
        console.error(`${envKey} rejected the row: HTTP ${res.status} ${res.headers.get('location') || ''}`);
        return json('Could not save submission', 502);
      }
    } catch (err) {
      console.error(`${envKey} forwarding failed:`, err);
      return json('Could not save submission', 502);
    }

    return json('ok', 200);
  };
}

// An Apps Script web app runs doPost and then answers 302 → script.googleusercontent.com.
// A redirect to accounts.google.com instead means the deployment isn't shared with "Anyone".
function isAppsScriptSuccess(res) {
  if (res.status === 200) return true;
  if (res.status === 302 || res.status === 303) {
    return (res.headers.get('location') || '').startsWith('https://script.googleusercontent.com/');
  }
  return false;
}
