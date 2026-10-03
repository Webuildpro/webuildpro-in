/**
 * POSTs a form submission to a /api/* Pages Function and resolves true only when the server
 * confirms it was stored. Forms must show success only on true — otherwise the lead is lost.
 */
export async function submitLead(path: string, body: Record<string, unknown>): Promise<boolean> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(path, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    return res.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timer);
  }
}

export const LEAD_ERROR = "We couldn't send your message right now.";
