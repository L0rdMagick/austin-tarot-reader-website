export interface TarotCardData {
  id: number;
  name: string;
  arcana: 'Major Arcana' | 'Cups' | 'Pentacles' | 'Swords' | 'Wands';
  image: string;
  keywords: string[];
  symbolism: string;
  pastMeaning: string;
  presentMeaning: string;
  futureMeaning: string;
}

const MAJOR_ARCANA_INFO: Array<{
  name: string;
  file: string;
  keywords: string[];
  symbolism: string;
  past: string;
  present: string;
  future: string;
}> = [
  {
    name: 'The Fool',
    file: '00-TheFool.jpg',
    keywords: ['New Beginnings', 'Innocence', 'Leap of Faith', 'Spontaneity'],
    symbolism: 'A youth standing on a cliff edge with a white rose and a small dog, stepping into the unknown with pure trust.',
    past: 'You took a major leap of faith or started a brand new chapter that completely reshaped your trajectory.',
    present: 'You are at a precipice of a new beginning. Fear is holding you back, but the universe is encouraging a fresh start.',
    future: 'An exciting new opportunity or relationship is approaching. Be open to taking a leap of faith without fear.',
  },
  {
    name: 'The Magician',
    file: '01-TheMagician.jpg',
    keywords: ['Manifestation', 'Resourcefulness', 'Personal Power', 'Action'],
    symbolism: 'A figure with one hand pointed to heaven and one to earth, surrounded by the tools of the four suits.',
    past: 'You tapped into your personal power and utilized your key talents to set a vital vision into motion.',
    present: 'You have all the necessary resources, skills, and energy to manifest your goal right now.',
    future: 'Success will come through focused intention, self-belief, and taking active, purposeful steps.',
  },
  {
    name: 'The High Priestess',
    file: '02-TheHighPriestess.jpg',
    keywords: ['Intuition', 'Sacred Knowledge', 'Subconscious', 'Mystery'],
    symbolism: 'A seated priestess between black and white pillars, holding a scroll of sacred wisdom in front of a veil of pomegranates.',
    past: 'Hidden truths or intuitive nudges played a pivotal role in bringing you to where you stand today.',
    present: 'Look beyond surface appearances. Your intuition holds the true answer to your current dilemma.',
    future: 'Secret information or deeper spiritual clarity will soon be revealed, illuminating your next step.',
  },
  {
    name: 'The Empress',
    file: '03-TheEmpress.jpg',
    keywords: ['Abundance', 'Nurturing', 'Creativity', 'Fertility & Growth'],
    symbolism: 'A crowned queen surrounded by a rich golden wheat field and flowing water, embodying nature and abundance.',
    past: 'A period of nurturing, creative growth, or emotional security built the foundation for your current situation.',
    present: 'A fertile environment surrounds you. Focus on self-care, creative expression, and allowing your efforts to blossom.',
    future: 'Abundance, emotional fulfillment, and fruitful results are coming to fruition in your journey.',
  },
  {
    name: 'The Emperor',
    file: '04-TheEmperor.jpg',
    keywords: ['Structure', 'Authority', 'Stability', 'Leadership'],
    symbolism: 'A bearded king seated on a stone ram-head throne holding a scepter, symbolizing order and solid boundaries.',
    past: 'Strong boundaries, discipline, or an influential figure established the structure of your current path.',
    present: 'It is time to take charge, set clear boundaries, and apply structured discipline to your situation.',
    future: 'Stability, long-term security, and strong leadership will be established as a result of your firm decisions.',
  },
  {
    name: 'The Hierophant',
    file: '05-TheHierophant.jpg',
    keywords: ['Tradition', 'Belief Systems', 'Spiritual Teacher', 'Conformity'],
    symbolism: 'A religious leader seated between sacred pillars with crossed keys at his feet, sharing traditional wisdom.',
    past: 'Traditional values, formal education, or a mentor’s guidance shaped your foundational beliefs.',
    present: 'You are evaluating whether to stick to established traditions or seek your own spiritual path.',
    future: 'Seeking sound counsel or honoring proven wisdom will bring structure and harmony to your outcome.',
  },
  {
    name: 'The Lovers',
    file: '06-TheLovers.jpg',
    keywords: ['Deep Connection', 'Alignment', 'Choices of the Heart', 'Harmony'],
    symbolism: 'An angel blessing two figures beneath the sun, representing union, choice, and sacred harmony.',
    past: 'A significant heart-centered choice or profound emotional bond set your current path into motion.',
    present: 'You are called to align your choices with your deepest personal values and true emotional desires.',
    future: 'A harmonious partnership, union, or soul-aligned breakthrough is preparing to manifest.',
  },
  {
    name: 'The Chariot',
    file: '07-TheChariot.jpg',
    keywords: ['Determination', 'Willpower', 'Victory', 'Overcoming Obstacles'],
    symbolism: 'A armored warrior riding a chariot drawn by black and white sphinxes, controlling them through willpower alone.',
    past: 'You overcame significant opposition through sheer determination and unwavering focus.',
    present: 'Stay disciplined and focused. Harness conflicting energies to drive your situation toward victory.',
    future: 'Triumph and rapid momentum will reward your persistence and clear direction.',
  },
  {
    name: 'Strength',
    file: '08-Strength.jpg',
    keywords: ['Inner Strength', 'Compassion', 'Patience', 'Courage'],
    symbolism: 'A gentle woman gently taming a roaring lion with a crown of flowers, embodying quiet moral courage.',
    past: 'You handled a difficult situation with patience, gentleness, and deep inner fortitude.',
    present: 'Approach your current challenge with compassion, emotional control, and steady patience rather than force.',
    future: 'You will master this obstacle gracefully, coming out stronger, calmer, and deeply empowered.',
  },
  {
    name: 'The Hermit',
    file: '09-TheHermit.jpg',
    keywords: ['Introspection', 'Inner Guidance', 'Solitude', 'Wisdom'],
    symbolism: 'An old cloaked man standing alone on a mountain peak holding a glowing lantern to light the path.',
    past: 'A period of quiet reflection or stepping back helped you gain crucial inner clarity.',
    present: 'Take time to go inward. Disconnect from external noise to hear your inner truth.',
    future: 'Personal enlightenment and deep self-understanding will guide your next major move.',
  },
  {
    name: 'Wheel of Fortune',
    file: '10-WheelOfFortune.jpg',
    keywords: ['Cycles of Change', 'Destiny', 'Karma', 'Turning Point'],
    symbolism: 'A spinning cosmic wheel surrounded by mythical creatures, representing the inevitable flux of life.',
    past: 'A unexpected turn of events or shifting cycle reshaped your circumstances.',
    present: 'Life is actively shifting. Embrace the wheel’s movement and adapt to upcoming changes.',
    future: 'A positive stroke of luck or karmic turning point will elevate your situation.',
  },
  {
    name: 'Justice',
    file: '11-Justice.jpg',
    keywords: ['Truth', 'Fairness', 'Cause & Effect', 'Accountability'],
    symbolism: 'A figure holding scales of balance in one hand and an upright sword of truth in the other.',
    past: 'Past actions and decisions have brought about a fair, necessary balance in your life.',
    present: 'Evaluate your situation with total honesty and fairness. Cause and effect are in active motion.',
    future: 'A just resolution, balanced outcome, or clear legal/contractual decision will prevail.',
  },
  {
    name: 'The Hanged Man',
    file: '12-TheHangedMan.jpg',
    keywords: ['New Perspective', 'Surrender', 'Pause', 'Letting Go'],
    symbolism: 'A figure hanging upside down from a wooden T-cross with a glowing halo around his head, serene in pause.',
    past: 'A period of waiting or surrendering control allowed you to see things from a completely new angle.',
    present: 'Pause and surrender the urge to force progress. Look at your question from a fresh perspective.',
    future: 'By releasing resistance, an epiphany will strike that unlocks the exact solution you need.',
  },
  {
    name: 'Death',
    file: '13-Death.jpg',
    keywords: ['Transformation', 'Endings & Beginnings', 'Transition', 'Rebirth'],
    symbolism: 'An armored skeleton knight riding a white horse before a rising sun, symbolizing necessary transition.',
    past: 'A major phase, relationship, or mindset reached its natural end, opening space for rebirth.',
    present: 'Release what no longer serves you. A necessary transition is taking place to make way for new growth.',
    future: 'Profound transformation and a reborn perspective await as the old chapter officially closes.',
  },
  {
    name: 'Temperance',
    file: '14-Temperance.jpg',
    keywords: ['Balance', 'Moderation', 'Patience', 'Alchemy'],
    symbolism: 'An angel blending water between two golden cups with one foot on land and one in water.',
    past: 'You successfully navigated a stressful time by maintaining patience and emotional balance.',
    present: 'Avoid extremes. Practice moderation, diplomacy, and inner harmony to resolve current tension.',
    future: 'Peaceful integration, healing, and perfect timing will restore total balance to your life.',
  },
  {
    name: 'The Devil',
    file: '15-TheDevil.jpg',
    keywords: ['Shadow Self', 'Attachment', 'Limiting Beliefs', 'Unhealthy Patterns'],
    symbolism: 'A horned figure sitting above two loosely chained figures, symbolizing self-imposed restriction.',
    past: 'Unhealthy attachments, fear, or limiting self-beliefs restricted your freedom in this area.',
    present: 'Examine where you feel stuck. The chains holding you back are looser than you think—you have the power to break free.',
    future: 'Breaking free from toxic cycles or addictive patterns will reclaim your personal freedom.',
  },
  {
    name: 'The Tower',
    file: '16-TheTower.jpg',
    keywords: ['Sudden Awakening', 'Breakthrough', 'Shaking Foundations', 'Truth'],
    symbolism: 'Lightning striking a stone tower, bringing down false structures so truth can emerge.',
    past: 'A sudden realization or unexpected disruption dismantled a false structure in your life.',
    present: 'Current disruptions are clearing away illusions. What crumbles now was not built on solid truth.',
    future: 'A major breakthrough will strip away false assumptions, paving the way for authentic reconstruction.',
  },
  {
    name: 'The Star',
    file: '17-TheStar.jpg',
    keywords: ['Hope', 'Renewal', 'Spiritual Clarity', 'Inspiration'],
    symbolism: 'A maiden pouring water under a starry sky, illuminating hope and sacred healing.',
    past: 'Following a storm, you regained your faith and began a deep journey of spiritual renewal.',
    present: 'Hope and clarity are actively surrounding you. Trust that peace and healing are at hand.',
    future: 'Inspiration, tranquility, and long-desired wishes will illuminate your path forward.',
  },
  {
    name: 'The Moon',
    file: '18-TheMoon.jpg',
    keywords: ['Illusion', 'Subconscious Fear', 'Intuition', 'Uncertainty'],
    symbolism: 'A full moon shining over a winding path guarded by a dog and wolf, emerging from dark waters.',
    past: 'Uncertainty or unaddressed anxieties created confusion regarding your true direction.',
    present: 'Not everything is as it appears. Pay attention to your dreams and intuition to navigate hidden anxieties.',
    future: 'Clarifying light will gradually dispel fears and illusions, revealing hidden truths.',
  },
  {
    name: 'The Sun',
    file: '19-TheSun.jpg',
    keywords: ['Joy', 'Success', 'Vitality', 'Illumination'],
    symbolism: 'A happy child riding a white horse beneath a radiant sun and bright sunflowers.',
    past: 'A joyful season of clarity, self-confidence, and success laid a warm foundation.',
    present: 'Radiant warmth, truth, and positive energy illuminate your current situation.',
    future: 'Total success, joy, and bright abundance will crown your efforts.',
  },
  {
    name: 'Judgement',
    file: '20-Judgement.jpg',
    keywords: ['Reckoning', 'Awakening', 'Higher Calling', 'Absolution'],
    symbolism: 'An angel blowing a trumpet as figures rise out of graves with open arms, hearing the call.',
    past: 'You answered a vital waking call and forgave past errors to step into higher awareness.',
    present: 'A pivotal moment of self-evaluation and decision is here. Listen to your higher calling.',
    future: 'Full clarity, rebirth, and a victorious life awakening will reward your decision.',
  },
  {
    name: 'The World',
    file: '21-TheWorld.jpg',
    keywords: ['Completion', 'Integration', 'Accomplishment', 'Wholeness'],
    symbolism: 'A dancing figure encircled by a green laurel wreath, surrounded by the four sacred guardians.',
    past: 'You successfully completed a major life cycle, achieving a state of wholeness and mastery.',
    present: 'You are reaching a major milestone or closing a cycle. Celebrate how far you have come.',
    future: 'Complete fulfillment, success, and the realization of your highest goals await.',
  },
];

const NUMBER_NAMES = [
  '', 'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
  'Page', 'Knight', 'Queen', 'King'
];

function buildFullDeck(): TarotCardData[] {
  const deck: TarotCardData[] = [];
  let idCounter = 0;

  // 1. Major Arcana
  for (const info of MAJOR_ARCANA_INFO) {
    deck.push({
      id: idCounter++,
      name: info.name,
      arcana: 'Major Arcana',
      image: `/images/rider-waite-tarot-deck-cards/${info.file}`,
      keywords: info.keywords,
      symbolism: info.symbolism,
      pastMeaning: info.past,
      presentMeaning: info.present,
      futureMeaning: info.future,
    });
  }

  // 2. Minor Arcana Helper
  const suits: Array<{
    name: 'Cups' | 'Pentacles' | 'Swords' | 'Wands';
    prefix: string;
    theme: string;
  }> = [
    { name: 'Cups', prefix: 'Cups', theme: 'emotions, relationships, and intuition' },
    { name: 'Pentacles', prefix: 'Pentacles', theme: 'money, career, physical security, and manifestation' },
    { name: 'Swords', prefix: 'Swords', theme: 'mind, truth, communication, and overcoming conflict' },
    { name: 'Wands', prefix: 'Wands', theme: 'passion, inspiration, action, and energy' },
  ];

  for (const suit of suits) {
    for (let num = 1; num <= 14; num++) {
      const numStr = num < 10 ? `0${num}` : `${num}`;
      const cardName = `${NUMBER_NAMES[num]} of ${suit.name}`;

      deck.push({
        id: idCounter++,
        name: cardName,
        arcana: suit.name,
        image: `/images/rider-waite-tarot-deck-cards/${suit.prefix}${numStr}.jpg`,
        keywords: [suit.name, NUMBER_NAMES[num], 'Minor Arcana'],
        symbolism: `Rider-Waite imagery representing ${suit.name.toLowerCase()} in relation to ${suit.theme}.`,
        pastMeaning: `In the past, ${cardName} brought foundational lessons around ${suit.theme}.`,
        presentMeaning: `Currently, ${cardName} highlights active dynamics regarding ${suit.theme}.`,
        futureMeaning: `Looking ahead, ${cardName} signals upcoming growth and resolution around ${suit.theme}.`,
      });
    }
  }

  return deck;
}

export const DECK_NAME = 'Rider-Waite 78 Card Deck';
export const TAROT_DECK: TarotCardData[] = buildFullDeck();
