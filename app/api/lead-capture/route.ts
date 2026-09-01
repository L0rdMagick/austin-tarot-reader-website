import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, source } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const GOOGLE_SHEETS_WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (GOOGLE_SHEETS_WEBHOOK_URL) {
      await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name || 'Anonymous',
          email,
          source: source || 'Website Popup',
          timestamp: new Date().toISOString(),
        }),
      }).catch((err) => {
        console.error('Google Sheets POST error:', err);
      });
    } else {
      console.log('Lead Captured (No GOOGLE_SHEETS_WEBHOOK_URL configured yet):', { name, email, source });
    }

    return NextResponse.json({ success: true, message: 'Lead recorded successfully' });
  } catch (error) {
    console.error('Lead API error:', error);
    return NextResponse.json({ error: 'Failed to process lead' }, { status: 500 });
  }
}
