export interface TarotCardData {
  id: number;
  name: string;
  arcana: 'Major Arcana' | 'Cups' | 'Pentacles' | 'Swords' | 'Wands';
  image: string;
  keywords: string[];
}

const MAJOR_ARCANA_NAMES = [
  'The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor',
  'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 'The Hermit',
  'Wheel of Fortune', 'Justice', 'The Hanged Man', 'Death', 'Temperance',
  'The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun',
  'Judgement', 'The World'
];

const MAJOR_ARCANA_FILES = [
  '00-TheFool.jpg', '01-TheMagician.jpg', '02-TheHighPriestess.jpg', '03-TheEmpress.jpg', '04-TheEmperor.jpg',
  '05-TheHierophant.jpg', '06-TheLovers.jpg', '07-TheChariot.jpg', '08-Strength.jpg', '09-TheHermit.jpg',
  '10-WheelOfFortune.jpg', '11-Justice.jpg', '12-TheHangedMan.jpg', '13-Death.jpg', '14-Temperance.jpg',
  '15-TheDevil.jpg', '16-TheTower.jpg', '17-TheStar.jpg', '18-TheMoon.jpg', '19-TheSun.jpg',
  '20-Judgement.jpg', '21-TheWorld.jpg'
];

const NUMBER_NAMES = [
  '', 'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
  'Page', 'Knight', 'Queen', 'King'
];

function buildDeck(): TarotCardData[] {
  const deck: TarotCardData[] = [];
  let idCounter = 0;

  // 1. Major Arcana (0 to 21)
  for (let i = 0; i < 22; i++) {
    deck.push({
      id: idCounter++,
      name: MAJOR_ARCANA_NAMES[i],
      arcana: 'Major Arcana',
      image: `/images/rider-waite-tarot-deck-cards/${MAJOR_ARCANA_FILES[i]}`,
      keywords: ['Archetypal Guidance', 'Major Life Theme', 'Spiritual Insight'],
    });
  }

  // Helper for Minor Arcana
  const suits: Array<{ name: 'Cups' | 'Pentacles' | 'Swords' | 'Wands'; filePrefix: string }> = [
    { name: 'Cups', filePrefix: 'Cups' },
    { name: 'Pentacles', filePrefix: 'Pentacles' },
    { name: 'Swords', filePrefix: 'Swords' },
    { name: 'Wands', filePrefix: 'Wands' },
  ];

  for (const suit of suits) {
    for (let num = 1; num <= 14; num++) {
      const numStr = num < 10 ? `0${num}` : `${num}`;
      const cardName = `${NUMBER_NAMES[num]} of ${suit.name}`;
      deck.push({
        id: idCounter++,
        name: cardName,
        arcana: suit.name,
        image: `/images/rider-waite-tarot-deck-cards/${suit.filePrefix}${numStr}.jpg`,
        keywords: [suit.name, NUMBER_NAMES[num], 'Intuitive Guidance'],
      });
    }
  }

  return deck;
}

export const DECK_NAME = 'Rider-Waite 78 Card Deck';
export const TAROT_DECK: TarotCardData[] = buildDeck();
