import { TarotCardData } from './tarotDeck';

export interface InterpretationResult {
  card1Insight: string;
  card2Insight: string;
  card3Insight: string;
  overallSummary: string;
  actionStep: string;
}

/**
 * Parses user question to extract target subject or name (e.g. "Pepe", "my ex", "my job", "my business")
 */
function extractTargetFromQuestion(question: string, subject: string): string {
  if (!question || question.trim().length === 0) {
    return `your ${subject.toLowerCase()} situation`;
  }

  const clean = question.trim();
  
  // Match "will [Name] come back" or "with [Name]" or "about [Name]"
  const nameMatch = clean.match(/will\s+([A-Z][a-z]+|\w+)\s+(come|return|love|be)/i);
  if (nameMatch && nameMatch[1] && !['i', 'you', 'we', 'they', 'my', 'the', 'a'].includes(nameMatch[1].toLowerCase())) {
    const name = nameMatch[1].charAt(0).toUpperCase() + nameMatch[1].slice(1);
    return `your connection with ${name}`;
  }

  // Fallback to cleaner phrase
  if (clean.toLowerCase().includes('job') || clean.toLowerCase().includes('career') || clean.toLowerCase().includes('work')) {
    return 'your career path';
  }
  if (clean.toLowerCase().includes('money') || clean.toLowerCase().includes('financial') || clean.toLowerCase().includes('business')) {
    return 'your financial & material growth';
  }
  if (clean.toLowerCase().includes('ex') || clean.toLowerCase().includes('love') || clean.toLowerCase().includes('partner')) {
    return 'your romantic connection';
  }

  return `your situation regarding "${clean}"`;
}

/**
 * Builds conversational, deep 3-card interpretations matching authentic reader phrasing
 */
export function buildConversationalReading(
  subject: string,
  question: string,
  card1: TarotCardData,
  card2: TarotCardData,
  card3: TarotCardData
): InterpretationResult {
  const target = extractTargetFromQuestion(question, subject);

  // --- CARD 1 (PAST ENERGY & ORIGINS) ---
  let card1Insight = '';
  if (card1.name === 'The Magician') {
    card1Insight = `With The Magician card in the past position of the spread, we can see that your past connection with ${target} was filled with a magical energy that at times seemed full of wonder and potential, and considering the spiritual nature of The Magician card and his connection to source, your foundation regarding this situation would have felt deeply connected.`;
  } else {
    card1Insight = `With the ${card1.name} card in the past position of the spread, we can see that your past experiences regarding ${target} were shaped by ${card1.pastMeaning.toLowerCase()} This established the emotional and practical foundation that brought you to where you stand today.`;
  }

  // --- CARD 2 (PRESENT ENERGY & DYNAMICS) ---
  let card2Insight = '';
  if (card2.name === 'King of Swords') {
    card2Insight = `With the King of Swords occupying the present energy card position, this tells me that the cold and precise nature of the King of Swords is a sign that your situation presently is feeling somewhat cold, calculated, and with heavy signs of hard boundaries between you. Sometimes this can be due to people protecting their inner wounds and sometimes it can be due to people needing space to take care of other obligations.`;
  } else {
    card2Insight = `With the ${card2.name} occupying the present energy card position, this tells me that the active nature of the ${card2.name} is a sign that your situation regarding ${target} presently is feeling ${card2.presentMeaning.toLowerCase()} Pay close attention to how this dynamic is currently shaping your choices and mindset.`;
  }

  // --- CARD 3 (FUTURE OUTCOME & TRAJECTORY) ---
  let card3Insight = '';
  if (card3.name === 'King of Pentacles') {
    card3Insight = `The King of Pentacles representing the future outcome would indicate that there will be more stability in ${target} once again, but it could also mean that the situation won't quite feel the same as the old times because the dominant energy and feeling in the future is that practical obligations and money will become a priority, and although there does seem to be more stability, financial and material commitments take a higher priority.`;
  } else {
    card3Insight = `The ${card3.name} representing the future outcome would indicate that regarding ${target}, ${card3.futureMeaning.toLowerCase()} By staying grounded and honoring your self-worth, this energy promises a clear, realistic resolution.`;
  }

  // --- OVERALL SYNTHESIS & SUMMARY ---
  const overallSummary = `Synthesizing your 3-card spread (${card1.name} ➔ ${card2.name} ➔ ${card3.name}): Looking at the flow of energy, your past foundation with ${card1.name} brought deep initial potential and connection. Currently, ${card2.name} introduces a shift toward necessary space, boundaries, or rational evaluation. As you look to the future, ${card3.name} resolves this trajectory with grounded stability, reminding you to balance emotional desires with practical realities.`;

  const actionStep = `Focus on the present energy of ${card2.name}. Respect current boundaries and take one grounded, practical step that honors your peace of mind today.`;

  return {
    card1Insight,
    card2Insight,
    card3Insight,
    overallSummary,
    actionStep,
  };
}
