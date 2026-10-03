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
  return async ({ request, env, waitUntil }) => {
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
    if (sheetsUrl) {
      const clip = (v, n = 2000) => String(v ?? '').slice(0, n);
      const row = { timestamp: new Date().toISOString(), ...toRow(body, clip) };
      waitUntil(
        fetch(sheetsUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(row),
        }).catch((err) => console.error(`${envKey} forwarding failed:`, err)),
      );
    } else {
      console.error(`${envKey} is not set — submission was not stored`);
    }

    return json('ok', 200);
  };
}
