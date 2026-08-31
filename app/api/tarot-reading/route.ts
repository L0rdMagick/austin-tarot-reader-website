import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';
import { TAROT_DECK } from '@/lib/tarotDeck';
import { buildConversationalReading } from '@/lib/tarotInterpreter';

// Initialize sliding window rate limiter (5 free readings per 24 hours per IP address)
const ratelimit =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Ratelimit({
        redis: Redis.fromEnv(),
        limiter: Ratelimit.slidingWindow(5, '24 h'),
        analytics: true,
      })
    : null;

interface ReadingRequest {
  subject: string;
  question: string;
  cards: Array<{
    name: string;
    arcana: string;
  }>;
}

export async function POST(req: Request) {
  try {
    const body: ReadingRequest = await req.json();
    const { subject, question, cards } = body;

    if (!cards || cards.length < 3) {
      return NextResponse.json({ error: '3 cards are required for the reading.' }, { status: 400 });
    }

    const cleanSubject = subject || 'General Guidance';
    const userQuestion = question && question.trim().length > 0
      ? question.trim()
      : `What guidance does the tarot offer regarding my ${cleanSubject.toLowerCase()} situation?`;

    // Rate Limiting Check with Admin Bypass ('lordmagick' in question or local dev mode)
    const isBypassMode =
      process.env.NODE_ENV === 'development' ||
      userQuestion.toLowerCase().includes('lordmagick');

    if (ratelimit && !isBypassMode) {
      const forwardedFor = req.headers.get('x-forwarded-for');
      const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';
      const { success } = await ratelimit.limit(`tarot_ip_${ip}`);

      if (!success) {
        return NextResponse.json(
          {
            error: 'You have reached the maximum free reading limit for today (5 readings/24 hours). Please book a 1-on-1 personal reading with Daniel for deep, unlimited intuitive guidance!',
          },
          { status: 429 }
        );
      }
    }

    // Look up card metadata from dataset
    const cardData1 = TAROT_DECK.find((c) => c.name === cards[0].name) || TAROT_DECK[0];
    const cardData2 = TAROT_DECK.find((c) => c.name === cards[1].name) || TAROT_DECK[1];
    const cardData3 = TAROT_DECK.find((c) => c.name === cards[2].name) || TAROT_DECK[2];

    let card1Insight = '';
    let card2Insight = '';
    let card3Insight = '';
    let overallSummary = '';
    let actionStep = '';

    // Check for Gemini API key
    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    let model = process.env.GEMINI_MODEL || 'gemini-3.6-flash';
    if (model.includes('2.5')) {
      model = 'gemini-3.6-flash';
    }

    if (apiKey) {
      try {
        const metaPrompt = `
SYSTEM INSTRUCTION: You are Daniel, an intuitive, empathetic, and experienced Tarot Reader in Austin, TX. Your voice is warm, conversational, eloquent, and spiritually grounded.

CLIENT INPUT:
- Subject Category: ${cleanSubject}
- Specific Question: "${userQuestion}"

CARDS DRAWN IN PLACEMENT:
1. Past Energy & Origins (Card 1): ${cardData1.name} (${cardData1.symbolism})
2. Present Energy & Dynamics (Card 2): ${cardData2.name} (${cardData2.symbolism})
3. Future Outcome & Trajectory (Card 3): ${cardData3.name} (${cardData3.symbolism})

CRITICAL METHODOLOGY & GRAMMAR RULES:
1. CONVENTIONAL RIDER-WAITE MEANINGS:
   - Strictly interpret each card using standard, conventional Rider-Waite symbolism and lore (e.g. Page of Wands = spark of enthusiasm, creative curiosity, incoming news; Two of Cups = soul connection, mutual alignment; Six of Swords = moving toward calm waters; Queen of Wands = radiant independent strength; Tower = shaking of false structures; Devil = codependency & reclaiming freedom).

2. PLACEMENT UMBRELLA:
   - Card 1 (Past Energy): How past foundation, choices, or emotional history created the roots of the situation.
   - Card 2 (Present Energy): Current active dynamic, feelings, hurdles, or boundaries right now.
   - Card 3 (Future Outcome): Ultimate trajectory, resolution, and future manifestation.

3. CLEAN NATURAL PROSE (STRICT GRAMMAR):
   - NEVER use double prepositions like "regarding your situation regarding".
   - Seamlessly connect card meanings to the querent's question and situation in natural, eloquent prose.
   - Card 1 Framing: "With [Card Name] standing in the past position of your spread, we see the foundation of..."
   - Card 2 Framing: "With [Card Name] holding the present energy position, the universe illuminates your active dynamic regarding..."
   - Card 3 Framing: "As we look to the future outcome, [Card Name] emerges as a sign from the universe regarding..."

4. OVERALL SYNTHESIS & ACTION:
   - Synthesize Card 1 ➔ Card 2 ➔ Card 3 into a smooth 3-act narrative directly answering the querent's question.
   - Provide one grounded action step based on Card 2.

Return pure JSON in this EXACT format:
{
  "card1Insight": "...",
  "card2Insight": "...",
  "card3Insight": "...",
  "overallSummary": "...",
  "actionStep": "..."
}
`;

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: metaPrompt }] }],
              generationConfig: { responseMimeType: 'application/json' },
            }),
          }
        );

        if (geminiRes.ok) {
          const geminiData = await geminiRes.json();
          const rawText = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;
          if (rawText) {
            const parsed = JSON.parse(rawText);
            card1Insight = parsed.card1Insight;
            card2Insight = parsed.card2Insight;
            card3Insight = parsed.card3Insight;
            overallSummary = parsed.overallSummary;
            actionStep = parsed.actionStep;
          }
        } else {
          const errText = await geminiRes.text();
          console.error(`Gemini API Error [HTTP ${geminiRes.status}]:`, errText);
        }
      } catch (aiErr) {
        console.warn('Gemini API call error, using conversational engine fallback:', aiErr);
      }
    }

    // Fallback Conversational Engine
    if (!card1Insight || !card2Insight || !card3Insight) {
      const fallbackReading = buildConversationalReading(
        cleanSubject,
        userQuestion,
        cardData1,
        cardData2,
        cardData3
      );

      card1Insight = card1Insight || fallbackReading.card1Insight;
      card2Insight = card2Insight || fallbackReading.card2Insight;
      card3Insight = card3Insight || fallbackReading.card3Insight;
      overallSummary = overallSummary || fallbackReading.overallSummary;
      actionStep = actionStep || fallbackReading.actionStep;
    }

    return NextResponse.json({
      subject: cleanSubject,
      question: userQuestion,
      cardReadings: [
        {
          position: 'Card 1: Past Energy & Origins',
          cardName: cardData1.name,
          insight: card1Insight,
        },
        {
          position: 'Card 2: Present Energy & Dynamics',
          cardName: cardData2.name,
          insight: card2Insight,
        },
        {
          position: 'Card 3: Future Outcome & Trajectory',
          cardName: cardData3.name,
          insight: card3Insight,
        },
      ],
      summary: overallSummary,
      actionStep,
    });
  } catch (error) {
    console.error('Error in /api/tarot-reading:', error);
    return NextResponse.json({ error: 'Failed to generate tarot reading.' }, { status: 500 });
  }
}
