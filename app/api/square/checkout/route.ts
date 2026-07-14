import { NextResponse, NextRequest } from 'next/server';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const accessToken = process.env.SQUARE_ACCESS_TOKEN;
    const locationId = process.env.SQUARE_LOCATION_ID;

    if (!accessToken || !locationId) {
      console.error('Square Configuration Error: SQUARE_ACCESS_TOKEN or SQUARE_LOCATION_ID is missing.');
      return NextResponse.json(
        { error: 'Square credentials are not configured on the server.' },
        { status: 500 }
      );
    }

    // Determine the environment and set base URL
    const isSandbox = accessToken.startsWith('EAAA-') || accessToken.startsWith('sandbox-') || process.env.SQUARE_ENVIRONMENT === 'sandbox';
    // Square sandbox access tokens typically start with "EAAA" for sandbox application or "sandbox-"
    // If it starts with "EAAAE", it is production. Let's inspect the token prefix or check env
    const isTokenSandbox = accessToken.startsWith('EAAAE') ? false : (accessToken.startsWith('EAAA') || accessToken.startsWith('sandbox-'));
    
    const environment = process.env.SQUARE_ENVIRONMENT || (isTokenSandbox ? 'sandbox' : 'production');
    const baseUrl = environment === 'sandbox'
      ? 'https://connect.squareupsandbox.com'
      : 'https://connect.squareup.com';

    // Get the request origin dynamically (supports localhost, Vercel deployments, and production domains)
    const origin = new URL(request.url).origin;
    const redirectUrl = `${origin}/services/decks/morticias-shadow?status=success`;

    // Make the API request to Square Checkout API
    const response = await fetch(`${baseUrl}/v2/online-checkout/payment-links`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Square-Version': '2024-03-20',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        idempotency_key: crypto.randomUUID(),
        order: {
          location_id: locationId,
          line_items: [
            {
              name: "Morticia's Shadow: Gothic Tarot Deck (Addams Family Inspired Edition)",
              quantity: '1',
              base_price_money: {
                amount: 3995, // $39.95 in cents
                currency: 'USD',
              },
            },
            {
              name: 'Shipping (Flat Rate)',
              quantity: '1',
              base_price_money: {
                amount: 495, // $4.95 in cents
                currency: 'USD',
              },
            },
          ],
        },
        checkout_options: {
          redirect_url: redirectUrl,
          merchant_support_email: 'tarot@AustinTarotReader.com',
          ask_for_shipping_address: true,
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Square API Error response:', data);
      const errorMessage = data.errors?.[0]?.detail || 'Failed to create Square payment link.';
      return NextResponse.json({ error: errorMessage }, { status: response.status });
    }

    // Return the payment link URL
    return NextResponse.json({ url: data.payment_link.url });
  } catch (error: any) {
    console.error('Square Checkout Route Error:', error);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
