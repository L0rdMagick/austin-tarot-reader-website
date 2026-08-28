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
function extractNameOrTarget(question: string): { name: string | null; phrase: string } {
  if (!question || question.trim().length === 0) {
    return { name: null, phrase: 'your situation' };
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
 * Generates natural, human-grade tarot interpretations
 */
export function buildConversationalReading(
  subject: string,
  question: string,
  card1: TarotCardData,
  card2: TarotCardData,
  card3: TarotCardData
): InterpretationResult {
  const { name, phrase } = extractNameOrTarget(question);
  const targetLabel = name || phrase;

  // --- CARD 1: PAST ENERGY & ORIGINS ---
  const withCard1 = formatCardWithPreposition('With', card1.name);
  let card1Insight = '';

  if (card1.name === 'Ace of Cups') {
    card1Insight = `${withCard1} in the past position of your spread, we can see that your past foundation with ${targetLabel} began with an overflowing wave of emotional open-heartedness, deep affection, and mutual vulnerability. It established an initial bond filled with genuine love and spiritual warmth.`;
  } else if (card1.name === 'The Magician') {
    card1Insight = `${withCard1} in the past position of your spread, we can see that your past connection with ${targetLabel} was filled with a magical energy that at times seemed full of wonder and potential, and considering the spiritual nature of ${card1.name} and its connection to source, your relationship would have felt spiritually connected.`;
  } else if (card1.name === 'King of Swords') {
    card1Insight = `${withCard1} in the past position of your spread, we can see that your past connection with ${targetLabel} was shaped by clear intellect, rational evaluation, or strict communication boundaries.`;
  } else {
    card1Insight = `${withCard1} in the past position of your spread, we can see that your past foundation regarding ${targetLabel} was shaped by ${card1.keywords.join(', ').toLowerCase()}. This established the emotional and practical history that brought you to where you stand today.`;
  }

  // --- CARD 2: PRESENT ENERGY & DYNAMICS ---
  const withCard2 = formatCardWithPreposition('With', card2.name);
  let card2Insight = '';

  if (card2.name === 'The Tower') {
    card2Insight = `${withCard2} occupying the present energy position, this tells me that your situation with ${targetLabel} is currently undergoing a sudden, disruptive awakening. Structures or assumptions in the relationship that weren't built on solid truth are crumbling away. While unsettling, this shaking foundation is clearing away illusions so true clarity can take its place.`;
  } else if (card2.name === 'King of Swords') {
    card2Insight = `${withCard2} occupying the present energy card position, this tells me that the cold and precise nature of ${card2.name} is a sign that your relationship presently is feeling somewhat cold, calculated, and with heavy signs of hard boundaries between you. Sometimes this can be due to people protecting their inner wounds and sometimes it can be due to people needing space to take care of other obligations.`;
  } else if (card2.name === 'Ten of Pentacles') {
    card2Insight = `${withCard2} occupying the present energy card position, this tells me that your current dynamic with ${targetLabel} is turning toward practical security, material commitments, or long-term family obligations over quick emotional drama.`;
  } else {
    card2Insight = `${withCard2} occupying the present energy card position, this tells me that the active nature of ${card2.name} is a sign that your situation presently is encountering dynamics centered on ${card2.keywords.join(', ').toLowerCase()}. Pay close attention to how this energy is currently shaping your choices and boundaries.`;
  }

  // --- CARD 3: FUTURE OUTCOME & TRAJECTORY ---
  const theCard3 = formatCardWithPreposition('The', card3.name);
  let card3Insight = '';

  if (card3.name === 'The Devil') {
    card3Insight = `${theCard3} representing the future outcome would indicate that regarding ${targetLabel}, moving forward you may face a crucial choice around attachment, codependency, or breaking free from toxic cycles. Reclaiming your personal freedom and honoring your self-worth will be the ultimate lesson of this trajectory.`;
  } else if (card3.name === 'King of Pentacles') {
    card3Insight = `${theCard3} representing the future outcome would indicate that there will be more stability in ${targetLabel} once again, but it could also mean that the relationship won't quite feel the same as the old times because the dominant energy and feeling in the future is that practical obligations and money will become a priority, and although there does seem to be more stability, financial commitments take a higher priority than what you may have been used to.`;
  } else if (card3.name === 'Eight of Cups') {
    card3Insight = `${theCard3} representing the future outcome would indicate that regarding ${targetLabel}, there comes a point where walking away from what feels stagnant or unfulfilling becomes necessary to seek higher peace. While leaving older patterns behind can be bittersweet, it promises profound emotional maturity and spiritual rebirth.`;
  } else {
    card3Insight = `${theCard3} representing the future outcome would indicate that regarding ${targetLabel}, energy will unfold around ${card3.keywords.join(', ').toLowerCase()}. By staying grounded and honoring your self-worth, this energy promises a clear, realistic resolution.`;
  }

  // --- OVERALL SYNTHESIS & SUMMARY ---
  const overallSummary = `Synthesizing your 3-card spread (${card1.name} ➔ ${card2.name} ➔ ${card3.name}): Looking at the flow of energy regarding ${targetLabel}, your past with ${card1.name} brought an initial foundation of wonder and potential. Currently, ${card2.name} marks a period of necessary boundary setting, truth-seeking, or breaking down illusions. Moving into the future, ${card3.name} resolves this story by guiding you toward grounded stability and urging you to prioritize your emotional self-worth.`;

  const actionStep = `Focus on the present energy of ${card2.name}. Respect current boundaries and take one grounded, practical step that honors your peace of mind today.`;

  return {
    card1Insight,
    card2Insight,
    card3Insight,
    overallSummary,
    actionStep,
  };
}
