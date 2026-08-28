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
function formatCardTitle(cardName: string): string {
  const clean = cardName.trim();
  if (/^the\s+/i.test(clean)) {
    return clean;
  }
  return `the ${clean}`;
}

/**
 * Cleanly extracts target person name or situation without awkward quotes or redundant "regarding" phrases
 */
function extractCleanTarget(question: string, subject: string): string {
  if (!question || question.trim().length === 0) {
    return `your ${subject.toLowerCase()} path`;
  }

  const q = question.trim();

  // Match personal names (e.g. "will Pepe come back", "is John thinking of me")
  const match = q.match(/(?:will|is|does|has|can)\s+([A-Z][a-z]+|\w+)\s+(?:come|return|love|think|feel|talk|call|text|stay|be)/i);
  if (match && match[1] && !['i', 'you', 'we', 'they', 'my', 'the', 'a', 'it', 'this', 'he', 'she'].includes(match[1].toLowerCase())) {
    const name = match[1].charAt(0).toUpperCase() + match[1].slice(1);
    return `your connection with ${name}`;
  }

  // Clean situational topics without raw quotes
  if (q.toLowerCase().includes('job') || q.toLowerCase().includes('career') || q.toLowerCase().includes('promotion')) {
    return 'your career trajectory';
  }
  if (q.toLowerCase().includes('money') || q.toLowerCase().includes('financial') || q.toLowerCase().includes('wealth')) {
    return 'your financial growth';
  }
  if (q.toLowerCase().includes('love') || q.toLowerCase().includes('relationship') || q.toLowerCase().includes('ex')) {
    return 'your romantic path';
  }

  return 'your current situation';
}

/**
 * Generates natural, conventional, human-grade tarot interpretations with clean grammar
 */
export function buildConversationalReading(
  subject: string,
  question: string,
  card1: TarotCardData,
  card2: TarotCardData,
  card3: TarotCardData
): InterpretationResult {
  const targetLabel = extractCleanTarget(question, subject);

  const card1Title = formatCardTitle(card1.name);
  const card2Title = formatCardTitle(card2.name);
  const card3Title = formatCardTitle(card3.name);

  // --- CARD 1: PAST ENERGY & ORIGINS ---
  const card1Insight = `With ${card1Title} standing in the past position of your spread, we see the foundation of ${targetLabel}. In past times, this energy manifested as ${card1.pastPhrase}. This sacred foundation shaped the emotional and practical history that brought you to where you stand today.`;

  // --- CARD 2: PRESENT ENERGY & DYNAMICS ---
  const card2Insight = `With ${card2Title} holding the present energy position, the universe illuminates your active dynamic regarding ${targetLabel}. Right now, this sacred archetype reveals that ${card2.presentPhrase}. Pay close attention to this present energy, as it calls for conscious awareness and aligned choices.`;

  // --- CARD 3: FUTURE OUTCOME & TRAJECTORY ---
  const card3Insight = `As we look to the future outcome, ${card3Title} emerges as a sign from the universe regarding ${targetLabel}. Moving forward, this card indicates that ${card3.futurePhrase}. By honoring your self-worth and staying grounded in your spiritual truth, this path promises a clear and authentic resolution.`;

  // --- OVERALL SYNTHESIS & SUMMARY ---
  const overallSummary = `Synthesizing your 3-card spread (${card1.name} ➔ ${card2.name} ➔ ${card3.name}): The universe offers a clear spiritual arc regarding ${targetLabel}. Your past foundation was blessed by ${card1.summaryPhrase}, establishing your underlying wisdom. In your present, ${card2.name} brings a pivotal phase focused on ${card2.summaryPhrase}. Looking into the future, ${card3.name} resolves this journey, guiding you toward ${card3.summaryPhrase}.`;

  const actionStep = `Focus on the present energy of ${card2.name}. Respect current boundaries and take one grounded, practical step that honors your peace of mind today.`;

  return {
    card1Insight,
    card2Insight,
    card3Insight,
    overallSummary,
    actionStep,
  };
}
