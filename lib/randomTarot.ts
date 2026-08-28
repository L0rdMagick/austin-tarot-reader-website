import { TAROT_DECK, TarotCardData } from './tarotDeck';

/**
 * Draws N distinct random cards from the 78-card deck without replacement.
 * Selection is strictly random and executed BEFORE any AI prompt or question processing.
 */
export function drawRandomCards(count: number = 3): TarotCardData[] {
  const totalCards = TAROT_DECK.length; // 78
  const selectedIndices: number[] = [];

  while (selectedIndices.length < Math.min(count, totalCards)) {
    // Generate a random index between 0 and totalCards - 1
    let randomIndex: number;
    if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
      const array = new Uint32Array(1);
      window.crypto.getRandomValues(array);
      randomIndex = array[0] % totalCards;
    } else {
      randomIndex = Math.floor(Math.random() * totalCards);
    }

    if (!selectedIndices.includes(randomIndex)) {
      selectedIndices.push(randomIndex);
    }
  }

  return selectedIndices.map((idx) => TAROT_DECK[idx]);
}
