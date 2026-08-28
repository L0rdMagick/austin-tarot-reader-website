import { TarotCardData } from './tarotDeck';

export interface InterpretationResult {
  card1Insight: string;
  card2Insight: string;
  card3Insight: string;
  overallSummary: string;
  actionStep: string;
}

/**
 * Cleanly extracts subject target or name from the client's question
 */
function cleanQuestionTarget(question: string, subject: string): string {
  if (!question || question.trim().length === 0) {
    return `your ${subject.toLowerCase()} situation`;
  }

  const q = question.trim();

  // Check if question asks about a specific person (e.g. "will pepe come back", "is john thinking of me")
  const personMatch = q.match(/(?:will|is|does|has|can)\s+([A-Z][a-z]+|\w+)\s+(?:come|return|love|think|feel|talk|call|text|stay)/i);
  if (personMatch && personMatch[1] && !['i', 'you', 'we', 'they', 'my', 'the', 'a', 'it', 'this'].includes(personMatch[1].toLowerCase())) {
    const name = personMatch[1].charAt(0).toUpperCase() + personMatch[1].slice(1);
    return `your relationship with ${name}`;
  }

  return `your question ("${q}")`;
}

/**
 * Builds deep, authentic, conversational reader interpretations
 */
export function buildConversationalReading(
  subject: string,
  question: string,
  card1: TarotCardData,
  card2: TarotCardData,
  card3: TarotCardData
): InterpretationResult {
  const target = cleanQuestionTarget(question, subject);

  // --- CARD 1 (PAST ENERGY & ORIGINS) ---
  let card1Insight = '';
  if (card1.name === 'The Magician') {
    card1Insight = `With The Magician card in the past position of the spread, we can see that your past connection regarding ${target} was filled with a magical energy that at times seemed full of wonder and potential, and considering the spiritual nature of The Magician card and his connection to source, your relationship would have felt spiritually connected.`;
  } else {
    card1Insight = `With the ${card1.name} card in the past position of the spread, we can see that your past foundation regarding ${target} was shaped by ${card1.pastMeaning.toLowerCase()} This established the emotional and practical history that brought you to where you stand today.`;
  }

  // --- CARD 2 (PRESENT ENERGY & DYNAMICS) ---
  let card2Insight = '';
  if (card2.name === 'King of Swords') {
    card2Insight = `With the King of Swords occupying the present energy card position, this tells me that the cold and precise nature of the King of Swords is a sign that your situation presently is feeling somewhat cold, calculated, and with heavy signs of hard boundaries between you. Sometimes this can be due to people protecting their inner wounds and sometimes it can be due to people needing space to take care of other obligations.`;
  } else if (card2.name === 'Ten of Pentacles') {
    card2Insight = `With the Ten of Pentacles occupying the present energy card position, this tells me that the grounded and traditional nature of the Ten of Pentacles is a sign that your situation presently is turning toward long-term material stability, family obligations, or practical foundations. Current dynamics call for focusing on real-world security over quick emotional impulses.`;
  } else {
    card2Insight = `With the ${card2.name} occupying the present energy card position, this tells me that the active nature of the ${card2.name} is a sign that your situation regarding ${target} presently is feeling ${card2.presentMeaning.toLowerCase()} Pay close attention to how this dynamic is currently shaping your choices and boundaries.`;
  }

  // --- CARD 3 (FUTURE OUTCOME & TRAJECTORY) ---
  let card3Insight = '';
  if (card3.name === 'King of Pentacles') {
    card3Insight = `The King of Pentacles representing the future outcome would indicate that there will be more stability in ${target} once again, but it could also mean that the relationship won't quite feel the same as the old times because the dominant energy and feeling in the future is that practical obligations and money will become a priority, and although there does seem to be more stability, financial and real-world commitments take a higher priority than what you may have been used to.`;
  } else if (card3.name === 'Eight of Cups') {
    card3Insight = `The Eight of Cups representing the future outcome would indicate that regarding ${target}, there will come a point of deep emotional evaluation where walking away from what feels stagnant or unfulfilling becomes necessary to seek higher peace. While this may mean leaving older patterns behind, it promises spiritual growth and renewed self-respect.`;
  } else {
    card3Insight = `The ${card3.name} representing the future outcome would indicate that regarding ${target}, ${card3.futureMeaning.toLowerCase()} By staying grounded and honoring your self-worth, this energy promises a clear, realistic resolution.`;
  }

  // --- OVERALL SYNTHESIS & SUMMARY ---
  const overallSummary = `Synthesizing your 3-card spread (${card1.name} ➔ ${card2.name} ➔ ${card3.name}): Looking at the flow of energy regarding ${target}, your past foundation with ${card1.name} brought deep initial potential. Currently, ${card2.name} introduces a shift toward practical boundaries, space, or rational evaluation. Looking to the future, ${card3.name} reveals where this trajectory resolves, encouraging you to balance your emotional desires with grounded self-worth.`;

  const actionStep = `Focus on the present energy of ${card2.name}. Respect current boundaries and take one grounded, practical step that honors your peace of mind today.`;

  return {
    card1Insight,
    card2Insight,
    card3Insight,
    overallSummary,
    actionStep,
  };
}
