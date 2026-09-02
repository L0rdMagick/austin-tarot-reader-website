import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, source } = body;

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const GOOGLE_SHEETS_WEBHOOK_URL =
      process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
      'https://script.google.com/macros/s/AKfycbzHZfaAEtR5cz6Mo5rhkghTxhS2n50PNdNfTF0eehnlN_zhI0EA6xOTCQ75A0SpTuc0/exec';

    if (GOOGLE_SHEETS_WEBHOOK_URL) {
      const params = new URLSearchParams();
      params.append('name', name || 'Anonymous');
      params.append('email', email);
      params.append('phone', phone || 'Not provided');
      params.append('source', source || 'Website Popup');

      await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
        redirect: 'follow',
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
