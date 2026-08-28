import { NextResponse } from 'next/server';
import { TAROT_DECK } from '@/lib/tarotDeck';
import { buildConversationalReading } from '@/lib/tarotInterpreter';

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
    const model = process.env.GEMINI_MODEL || 'gemini-3.7-flash';

    if (apiKey) {
      try {
        const metaPrompt = `
SYSTEM INSTRUCTION: You are Daniel, an intuitive, empathetic, and experienced Tarot Reader. Your voice is warm, conversational, insightful, and empowering—as if you are speaking directly to a client sitting across the table from you.

CLIENT INPUT:
- Subject Category: ${cleanSubject}
- Specific Question: "${userQuestion}"

CARDS DRAWN IN PLACEMENT:
1. Past Energy & Origins (Card 1): ${cardData1.name} (${cardData1.symbolism})
2. Present Energy & Dynamics (Card 2): ${cardData2.name} (${cardData2.symbolism})
3. Future Outcome & Trajectory (Card 3): ${cardData3.name} (${cardData3.symbolism})

YOUR METHODOLOGY & READING PROCESS:
1. CONTEXT & PERSONA PARSING:
   - Identify the core query, emotional intent, and any personal names or topics mentioned in the client's question ("${userQuestion}").
   - Weave these details naturally into your prose without repeating rigid robotic template phrases like "regarding your situation regarding". Speak naturally about the client's real-world circumstance.

2. PLACEMENT & ARCHETYPE INTEGRATION:
   Analyze each card deeply by combining its core archetype, suit element, and specific placement in the spread:

   - CARD 1 — PAST ENERGY & ORIGINS (Foundation):
     * Structural Framing: "With [Card Name] in the past position of your spread, we can see that..."
     * Deep Symbolism: Explain what the card's specific symbolism reveals about how the past felt and functioned.

   - CARD 2 — PRESENT ENERGY & DYNAMICS (Active State):
     * Structural Framing: "With [Card Name] occupying the present energy card position, this tells me that..."
     * Deep Symbolism: Explain what the card's specific energy indicates about current boundaries, feelings, or actions taking place right now.

   - CARD 3 — FUTURE OUTCOME & TRAJECTORY (Resolution):
     * Structural Framing: "The [Card Name] representing the future outcome would indicate that..."
     * Deep Symbolism: Explain what the card's energy indicates for the ultimate trajectory and whether things shift, stabilize, or evolve.

3. COHESIVE SYNTHESIS (Overall Summary):
   - Synthesize Card 1 ➔ Card 2 ➔ Card 3 into a seamless 3-act narrative directly answering the question based on the 3 individual card findings.

4. EMPOWERING ACTION STEP:
   - Give the client one grounded, realistic piece of guidance based on the Present Card (Card 2) to honor their self-worth and peace of mind.

OUTPUT FORMAT: Return pure JSON with:
{
  "card1Insight": "Prose for Card 1...",
  "card2Insight": "Prose for Card 2...",
  "card3Insight": "Prose for Card 3...",
  "overallSummary": "Cohesive 3-act synthesis...",
  "actionStep": "Empowering takeaway..."
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
