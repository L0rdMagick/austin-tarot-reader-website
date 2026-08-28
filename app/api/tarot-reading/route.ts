import { NextResponse } from 'next/server';

interface ReadingRequest {
  subject: string;
  question: string;
  cards: Array<{
    name: string;
    arcana: string;
  }>;
}

const POSITION_TITLES = [
  'Card 1: Past / Foundation',
  'Card 2: Present / Current Energy',
  'Card 3: Future / Potential Outcome',
];

export async function POST(req: Request) {
  try {
    const body: ReadingRequest = await req.json();
    const { subject, question, cards } = body;

    if (!cards || cards.length < 3) {
      return NextResponse.json({ error: '3 cards are required for the reading.' }, { status: 400 });
    }

    const cleanSubject = subject || 'General Guidance';
    const cleanQuestion = question && question.trim().length > 0 ? question.trim() : 'What guidance does the tarot have for my current journey?';

    // Formulate structured intuitive reading
    const cardReadings = cards.slice(0, 3).map((card, idx) => {
      const position = POSITION_TITLES[idx];
      let insight = '';

      if (idx === 0) {
        insight = `In the foundation position, ${card.name} reflects the roots of your current situation in ${cleanSubject.toLowerCase()}. Previous experiences and beliefs have brought you to this moment. Acknowledge what this card reveals so you can move forward with total clarity.`;
      } else if (idx === 1) {
        insight = `In your present energy position, ${card.name} illuminates the active dynamic surrounding your question: "${cleanQuestion}". Pay close attention to where your focus is directed right now, as this card invites self-awareness and conscious choice.`;
      } else {
        insight = `In the outcome position, ${card.name} points toward the unfolding potential ahead. As you align your choices with self-worth and clear intention, this card offers reassuring wisdom for your path forward.`;
      }

      return {
        position,
        cardName: card.name,
        insight,
      };
    });

    const summary = `Your 3-card spread (${cards[0].name}, ${cards[1].name}, and ${cards[2].name}) offers powerful insight for your ${cleanSubject.toLowerCase()} journey. The cards remind you that your past experiences serve as wisdom, your present mindset shapes your reality, and your future remains in your empowering hands.`;

    const actionStep = `Take a quiet moment today to reflect on ${cards[1].name} in your present situation. Identify one practical decision you can make from a place of self-trust.`;

    return NextResponse.json({
      subject: cleanSubject,
      question: cleanQuestion,
      cardReadings,
      summary,
      actionStep,
    });
  } catch (error) {
    console.error('Error in /api/tarot-reading:', error);
    return NextResponse.json({ error: 'Failed to generate tarot reading.' }, { status: 500 });
  }
}
