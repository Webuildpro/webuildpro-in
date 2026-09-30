import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  email: z.string().email('Enter a valid email address'),
  userType: z.string().min(1, 'User type is required'),
  branch: z.string().min(1, 'Branch is required'),
  college: z.string().max(200).optional(),
  message: z.string().min(1, 'Message is required').max(2000),
  deadline: z.string().optional(),
  sourcePage: z.string().optional(),
  honeypot: z.string().max(0, 'Bot detected').optional(),
});

// Simple in-memory rate limiter (resets on cold start)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { message: 'Too many submissions. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ message: 'ok' }, { status: 200 });
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { message: parsed.error.errors[0]?.message || 'Validation failed' },
        { status: 400 }
      );
    }

    const data = parsed.data;
    const sheetsUrl = process.env.SHEETS_CONTACT_URL;

    if (sheetsUrl) {
      const payload = {
        timestamp: new Date().toISOString(),
        name: data.name,
        phone: data.phone,
        email: data.email,
        userType: data.userType,
        branch: data.branch,
        college: data.college || '',
        message: data.message,
        deadline: data.deadline || '',
        sourcePage: data.sourcePage || '/',
      };

      // Fire-and-forget: don't await — respond to client immediately
      fetch(sheetsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch((err) => {
        console.error('Sheets forwarding failed:', err);
      });
    }

    return NextResponse.json({ message: 'ok' }, { status: 200 });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json(
      { message: 'Server error. Please try WhatsApp instead.' },
      { status: 500 }
    );
  }
}