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

    // Look up full card metadata from dataset
    const cardData1 = TAROT_DECK.find((c) => c.name === cards[0].name) || TAROT_DECK[0];
    const cardData2 = TAROT_DECK.find((c) => c.name === cards[1].name) || TAROT_DECK[1];
    const cardData3 = TAROT_DECK.find((c) => c.name === cards[2].name) || TAROT_DECK[2];

    let card1Insight = '';
    let card2Insight = '';
    let card3Insight = '';
    let overallSummary = '';
    let actionStep = '';

    // Check for API key (Gemini / OpenAI)
    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (apiKey) {
      try {
        const prompt = `
You are Daniel, an empathetic, highly intuitive Austin Tarot Reader.
Deliver a warm, conversational, human 3-card tarot reading addressing the client's question.

CLIENT DETAILS:
- Subject Category: ${cleanSubject}
- Client Question: "${userQuestion}"

CARDS DRAWN IN PLACEMENT:
1. Past Energy & Origins (Card 1): ${cardData1.name} (${cardData1.symbolism})
2. Present Energy & Dynamics (Card 2): ${cardData2.name} (${cardData2.symbolism})
3. Future Outcome & Trajectory (Card 3): ${cardData3.name} (${cardData3.symbolism})

CRITICAL TONE & STYLE GUIDELINES (MUST MATCH THIS EXACT FEW-SHOT STYLE):

EXAMPLE FEW-SHOT STYLE:
Question: "will pepe come back to me?"
Card 1 (The Magician): "With The Magician card in the past position of the spread, we can see that your past connection with Pepe was filled with a magical energy that at times seemed full of wonder and potential, and considering the spiritual nature of The Magician card and his connection to source, your relationship to Pepe would have felt spiritually connected."
Card 2 (King of Swords): "With the King of Swords occupying the present energy card position, this tells me that the cold and precise nature of the King of Swords is a sign that your relationship presently is feeling somewhat cold, calculated, and with heavy signs of hard boundaries between you. Sometimes this can be due to people protecting their inner wounds and sometimes it can be due to people needing space to take care of other obligations."
Card 3 (King of Pentacles): "The King of Pentacles representing the future outcome would indicate that there will be more stability in the relationship once again, but it could also mean that the relationship won't quite feel the same as the old times because the dominant energy and feeling in the future is that practical obligations and money will become a priority in the future and although there does seem to be more stability, financial obligations do take a higher priority than what you may have been used to."
Summary: A natural synthesis weaving the 3 individual interpretations into a clear closing story.

REQUIREMENTS:
- Directly reference the client's specific question ("${userQuestion}") and any names or topics mentioned.
- Card 1 MUST start with: "With the [Card Name] card in the past position of the spread, we can see that..."
- Card 2 MUST start with: "With the [Card Name] occupying the present energy card position, this tells me that..."
- Card 3 MUST start with: "The [Card Name] representing the future outcome would indicate that..."
- Overall Summary MUST synthesize the individual card findings into a natural narrative conclusion.

Return JSON in this EXACT format:
{
  "card1Insight": "...",
  "card2Insight": "...",
  "card3Insight": "...",
  "overallSummary": "...",
  "actionStep": "..."
}
`;

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
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
