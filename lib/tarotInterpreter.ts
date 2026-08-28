import { TarotCardData } from './tarotDeck';

export interface InterpretationResult {
  card1Insight: string;
  card2Insight: string;
  card3Insight: string;
  overallSummary: string;
  actionStep: string;
}

/**
 * Sanitizes card names to prevent duplicate article bugs (e.g. "With the The Tower" -> "With The Tower")
 */
function formatCardWithPreposition(prep: 'With' | 'The', cardName: string): string {
  const startsWithThe = /^the\s+/i.test(cardName);
  
  if (prep === 'With') {
    return startsWithThe ? `With ${cardName}` : `With the ${cardName}`;
  } else {
    // prep === 'The'
    return startsWithThe ? cardName : `The ${cardName}`;
  }
}

/**
 * Cleanly extracts target person name or situation from user question
 */
function extractNameOrTarget(question: string, subject: string): { name: string | null; phrase: string } {
  if (!question || question.trim().length === 0) {
    return { name: null, phrase: `your ${subject.toLowerCase()} situation` };
  }

  const q = question.trim();

  // Match "will Pepe come back" or "is Pepe coming back" or "with Pepe"
  const match = q.match(/(?:will|is|does|has|can)\s+([A-Z][a-z]+|\w+)\s+(?:come|return|love|think|feel|talk|call|text|stay|be)/i);
  if (match && match[1] && !['i', 'you', 'we', 'they', 'my', 'the', 'a', 'it', 'this', 'he', 'she'].includes(match[1].toLowerCase())) {
    const name = match[1].charAt(0).toUpperCase() + match[1].slice(1);
    return { name, phrase: `your connection with ${name}` };
  }

  return { name: null, phrase: `your situation regarding "${q}"` };
}

/**
 * Generates natural, human-grade tarot interpretations for any 3-card spread
 */
export function buildConversationalReading(
  subject: string,
  question: string,
  card1: TarotCardData,
  card2: TarotCardData,
  card3: TarotCardData
): InterpretationResult {
  const { name, phrase } = extractNameOrTarget(question, subject);
  const targetLabel = name || phrase;

  const withCard1 = formatCardWithPreposition('With', card1.name);
  const withCard2 = formatCardWithPreposition('With', card2.name);
  const theCard3 = formatCardWithPreposition('The', card3.name);

  // --- CARD 1: PAST ENERGY & ORIGINS ---
  const card1Insight = `${withCard1} in the past position of your spread, we can see that your past foundation regarding ${targetLabel} was shaped by ${card1.pastMeaning} This established the emotional and practical history that brought you to where you stand today.`;

  // --- CARD 2: PRESENT ENERGY & DYNAMICS ---
  const card2Insight = `${withCard2} occupying the present energy card position, this tells me that the active nature of ${card2.name} is a sign that your situation presently is ${card2.presentMeaning} Pay close attention to how this energy is currently shaping your choices and boundaries.`;

  // --- CARD 3: FUTURE OUTCOME & TRAJECTORY ---
  const card3Insight = `${theCard3} representing the future outcome would indicate that regarding ${targetLabel}, ${card3.futureMeaning} By staying grounded and honoring your self-worth, this energy promises a clear, realistic resolution.`;

  // --- OVERALL SYNTHESIS & SUMMARY ---
  const overallSummary = `Synthesizing your 3-card spread (${card1.name} ➔ ${card2.name} ➔ ${card3.name}): Looking at the flow of energy regarding ${targetLabel}, your past foundation with ${card1.name} was marked by ${card1.pastMeaning} Currently, ${card2.name} reflects an active dynamic where you are ${card2.presentMeaning} Looking to the future, ${card3.name} reveals where this trajectory resolves, encouraging you to prioritize your self-worth as ${card3.futureMeaning}`;

  const actionStep = `Focus on the present energy of ${card2.name}. Respect current boundaries and take one grounded, practical step that honors your peace of mind today.`;

  return {
    card1Insight,
    card2Insight,
    card3Insight,
    overallSummary,
    actionStep,
  };
}
