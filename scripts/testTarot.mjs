import { readFileSync } from 'fs';
import { TAROT_DECK } from '../lib/tarotDeck.ts';
import { buildConversationalReading } from '../lib/tarotInterpreter.ts';

function getCard(name) {
  const card = TAROT_DECK.find(c => c.name.toLowerCase() === name.toLowerCase());
  if (!card) throw new Error(`Card not found: ${name}`);
  return card;
}

const tests = [
  {
    iteration: 1,
    title: 'Iteration 1: Love Reading (User Example 1)',
    subject: 'Love',
    question: 'will pepe come back to me?',
    card1: 'Two of Cups',
    card2: 'Six of Swords',
    card3: 'Queen of Wands',
  },
  {
    iteration: 2,
    title: 'Iteration 2: Love Reading (User Example 2)',
    subject: 'Love',
    question: 'will pepe come back to me?',
    card1: 'Ace of Cups',
    card2: 'The Tower',
    card3: 'The Devil',
  },
  {
    iteration: 3,
    title: 'Iteration 3: Career Reading',
    subject: 'Career',
    question: 'will I get the job promotion?',
    card1: 'Three of Pentacles',
    card2: 'Eight of Swords',
    card3: 'The Sun',
  },
  {
    iteration: 4,
    title: 'Iteration 4: Financial Reading',
    subject: 'Money',
    question: 'how can I improve my financial situation?',
    card1: 'Four of Pentacles',
    card2: 'Wheel of Fortune',
    card3: 'Ten of Pentacles',
  },
  {
    iteration: 5,
    title: 'Iteration 5: Life Purpose Reading',
    subject: 'Life Purpose',
    question: 'what is my soul calling for this year?',
    card1: 'The Hermit',
    card2: 'The Moon',
    card3: 'The World',
  },
];

console.log('===========================================================');
console.log('🔮 RUNNING 5 SEQUENTIAL ESOTERIC TAROT REFINEMENT TESTS');
console.log('===========================================================\n');

tests.forEach((t) => {
  console.log(`-----------------------------------------------------------`);
  console.log(`📌 ${t.title}`);
  console.log(`Subject: ${t.subject} | Question: "${t.question}"`);
  console.log(`Cards: ${t.card1} ➔ ${t.card2} ➔ ${t.card3}\n`);

  const c1 = getCard(t.card1);
  const c2 = getCard(t.card2);
  const c3 = getCard(t.card3);

  const res = buildConversationalReading(t.subject, t.question, c1, c2, c3);

  console.log(`⏳ Card 1 (Past Energy):\n${res.card1Insight}\n`);
  console.log(`⚡ Card 2 (Present Energy):\n${res.card2Insight}\n`);
  console.log(`🔮 Card 3 (Future Outcome):\n${res.card3Insight}\n`);
  console.log(`✨ Overall Synthesis:\n${res.overallSummary}\n`);
});
