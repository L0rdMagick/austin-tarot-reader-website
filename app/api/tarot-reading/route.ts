import { NextResponse } from 'next/server';
import { TAROT_DECK } from '@/lib/tarotDeck';

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
      : `What guidance does the tarot offer regarding my ${cleanSubject.toLowerCase()} journey?`;

    // Retrieve card metadata from dataset
    const cardData1 = TAROT_DECK.find((c) => c.name === cards[0].name) || TAROT_DECK[0];
    const cardData2 = TAROT_DECK.find((c) => c.name === cards[1].name) || TAROT_DECK[1];
    const cardData3 = TAROT_DECK.find((c) => c.name === cards[2].name) || TAROT_DECK[2];

    let card1Insight = '';
    let card2Insight = '';
    let card3Insight = '';
    let overallSummary = '';
    let actionStep = '';

    // Check if Gemini API key exists for live generative interpretation
    const apiKey = process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (apiKey) {
      try {
        const prompt = `
You are Daniel, an empathetic, intuitive, highly experienced Austin Tarot Reader.
Provide a compassionate, deep, non-fatalistic 3-card tarot reading addressing the client's question.

CLIENT DETAILS:
- Reading Subject: ${cleanSubject}
- Specific Question: "${userQuestion}"

CARDS DRAWN IN PLACEMENT:
1. Past Energy & Origins (Card 1): ${cardData1.name} (${cardData1.symbolism})
2. Present Energy & Dynamics (Card 2): ${cardData2.name} (${cardData2.symbolism})
3. Future Outcome & Trajectory (Card 3): ${cardData3.name} (${cardData3.symbolism})

CRITICAL INSTRUCTIONS:
- Directly answer and reference the client's question: "${userQuestion}".
- Card 1 MUST strictly focus on Past Energy, past events, or underlying roots.
- Card 2 MUST strictly focus on Present Energy, current dynamics, and active mindsets.
- Card 3 MUST strictly focus on Future Outcome, trajectory, and ultimate resolution.

Return JSON in this EXACT structure:
{
  "card1Insight": "Insight for Card 1...",
  "card2Insight": "Insight for Card 2...",
  "card3Insight": "Insight for Card 3...",
  "overallSummary": "Cohesive synthesis directly answering the question...",
  "actionStep": "One practical, empowering advice step..."
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
        console.warn('Gemini API call failed, using intuitive engine fallback:', aiErr);
      }
    }

    // Fallback Deep Intuitive Engine (Question & Placement Aware)
    if (!card1Insight) {
      card1Insight = `Looking into the foundation of your question regarding "${userQuestion}", ${cardData1.name} illuminates the past energy. ${cardData1.pastMeaning} This past root created the emotional and situational landscape you inhabit today in your ${cleanSubject.toLowerCase()} path.`;
    }

    if (!card2Insight) {
      card2Insight = `In your current situation regarding "${userQuestion}", ${cardData2.name} represents your present active energy. ${cardData2.presentMeaning} Pay close attention to how this dynamic is testing or supporting your current mindset right now.`;
    }

    if (!card3Insight) {
      card3Insight = `Looking toward the future outcome for "${userQuestion}", ${cardData3.name} highlights the trajectory unfolding ahead. ${cardData3.futureMeaning} By aligning your current choices with self-trust, this card promises a clear resolution.`;
    }

    if (!overallSummary) {
      overallSummary = `In summary, your 3-card spread (${cardData1.name} ➔ ${cardData2.name} ➔ ${cardData3.name}) directly addresses your question: "${userQuestion}". The cards show a clear progression: your past experiences with ${cardData1.name} gave you wisdom, your current work with ${cardData2.name} calls for conscious action, and your future with ${cardData3.name} opens the door to fulfilled clarity.`;
    }

    if (!actionStep) {
      actionStep = `Reflect on the present energy of ${cardData2.name} today. Take one aligned, practical step toward resolving your question with self-trust.`;
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
