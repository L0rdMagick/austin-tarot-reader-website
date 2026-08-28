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
    symbolism: 'A youth stepping toward a cliff edge with pure trust, holding a white rose of innocence.',
    past: 'a leap of faith or a fresh start that completely reshaped your emotional trajectory.',
    present: 'standing at the precipice of a new beginning where letting go of fear is your key focus.',
    future: 'an exciting new chapter unfolding where stepping into the unknown brings liberation.',
  },
  {
    name: 'The Magician',
    file: '01-TheMagician.jpg',
    keywords: ['Manifestation', 'Resourcefulness', 'Personal Power', 'Action'],
    symbolism: 'A figure connected to source holding all four suit tools, channeling celestial energy into reality.',
    past: 'a magical energy filled with wonder, potential, and a deep spiritual connection.',
    present: 'tapping into your personal power and resources to manifest your true intentions right now.',
    future: 'successful manifestation where aligned action and self-trust produce tangible results.',
  },
  {
    name: 'The High Priestess',
    file: '02-TheHighPriestess.jpg',
    keywords: ['Intuition', 'Sacred Knowledge', 'Subconscious', 'Mystery'],
    symbolism: 'A priestess seated between dual pillars holding sacred wisdom in quiet contemplation.',
    past: 'hidden emotional truths or powerful intuitive nudges that guided your underlying choices.',
    present: 'looking beyond surface appearances and listening to the quiet wisdom of your inner voice.',
    future: 'secret information or deeper spiritual clarity coming to light to guide your resolution.',
  },
  {
    name: 'The Empress',
    file: '03-TheEmpress.jpg',
    keywords: ['Abundance', 'Nurturing', 'Creativity', 'Fertility'],
    symbolism: 'A crowned queen in a fertile golden field, embodying natural abundance and maternal warmth.',
    past: 'a period of rich nurturing, creative growth, or emotional security that built your foundation.',
    present: 'focusing on self-care, creative expression, and allowing your current situation to blossom naturally.',
    future: 'warm abundance, emotional fulfillment, and fruitful results coming into full realization.',
  },
  {
    name: 'The Emperor',
    file: '04-TheEmperor.jpg',
    keywords: ['Structure', 'Authority', 'Stability', 'Leadership'],
    symbolism: 'A bearded king on a stone ram throne, establishing order, logic, and firm boundaries.',
    past: 'firm boundaries, structure, or an influential figure establishing stability in your path.',
    present: 'setting clear boundaries, taking command of your life, and applying rational discipline.',
    future: 'lasting stability, solid security, and strong boundaries being permanently established.',
  },
  {
    name: 'The Hierophant',
    file: '05-TheHierophant.jpg',
    keywords: ['Tradition', 'Belief Systems', 'Spiritual Teacher', 'Conformity'],
    symbolism: 'A spiritual teacher sharing sacred tradition and proven wisdom.',
    past: 'traditional values, shared social expectations, or guidance from a mentor.',
    present: 'evaluating whether to follow established conventions or honor your own authentic beliefs.',
    future: 'sound counsel, commitments, or proven wisdom bringing harmony to your situation.',
  },
  {
    name: 'The Lovers',
    file: '06-TheLovers.jpg',
    keywords: ['Deep Connection', 'Alignment', 'Choices of the Heart', 'Harmony'],
    symbolism: 'An angel blessing two soul-aligned figures beneath a radiant sun.',
    past: 'a profound emotional connection or a sacred choice of the heart that defined your journey.',
    present: 'aligning your current choices with your deepest personal values and true emotional desires.',
    future: 'a harmonious union, soulful alignment, or deep mutual reconciliation preparing to manifest.',
  },
  {
    name: 'The Chariot',
    file: '07-TheChariot.jpg',
    keywords: ['Determination', 'Willpower', 'Victory', 'Overcoming Obstacles'],
    symbolism: 'A warrior guiding dual sphinxes forward through focused willpower.',
    past: 'overcoming past obstacles and emotional friction through sheer focus and determination.',
    present: 'harnessing opposing forces, staying disciplined, and driving your situation toward victory.',
    future: 'triumph, rapid momentum, and successful resolution rewarding your persistence.',
  },
  {
    name: 'Strength',
    file: '08-Strength.jpg',
    keywords: ['Inner Strength', 'Compassion', 'Patience', 'Courage'],
    symbolism: 'A gentle woman taming a roaring lion with quiet grace and love.',
    past: 'handling difficult friction with patience, gentleness, and quiet inner fortitude.',
    present: 'approaching your situation with compassion and quiet self-control rather than forceful pressure.',
    future: 'mastering this challenge gracefully and stepping into deep emotional empowerment.',
  },
  {
    name: 'The Hermit',
    file: '09-TheHermit.jpg',
    keywords: ['Introspection', 'Inner Guidance', 'Solitude', 'Wisdom'],
    symbolism: 'A lone seeker on a mountain peak raising a glowing lantern of inner truth.',
    past: 'stepping back from external noise to gain vital self-reflection and clarity.',
    present: 'going inward, taking personal space, and consulting your own inner compass.',
    future: 'deep personal wisdom and self-understanding shedding light on your ultimate direction.',
  },
  {
    name: 'Wheel of Fortune',
    file: '10-WheelOfFortune.jpg',
    keywords: ['Cycles of Change', 'Destiny', 'Karma', 'Turning Point'],
    symbolism: 'The cosmic wheel of life turning through destiny and karmic cycles.',
    past: 'a sudden shift in circumstances or a major turn of destiny reshaping your path.',
    present: 'experiencing an active turning point where staying adaptable helps you ride the wave of change.',
    future: 'a fortunate karmic turn of events bringing positive resolution and new opportunity.',
  },
  {
    name: 'Justice',
    file: '11-Justice.jpg',
    keywords: ['Truth', 'Fairness', 'Cause & Effect', 'Accountability'],
    symbolism: 'A figure holding scales of truth and an upright sword of clarity.',
    past: 'past choices bringing about a fair, balanced, and necessary reckoning.',
    present: 'evaluating your situation with absolute honesty, clarity, and fairness.',
    future: 'a just resolution, balanced outcome, or clear truth prevailing.',
  },
  {
    name: 'The Hanged Man',
    file: '12-TheHangedMan.jpg',
    keywords: ['New Perspective', 'Surrender', 'Pause', 'Letting Go'],
    symbolism: 'A figure suspended upside down in peaceful reflection and surrender.',
    past: 'a period of waiting or surrendering control that allowed you to see things from a new angle.',
    present: 'pausing and letting go of the urge to force progress right now.',
    future: 'an epiphany striking that reveals a completely fresh and unburdened path forward.',
  },
  {
    name: 'Death',
    file: '13-Death.jpg',
    keywords: ['Transformation', 'Endings & Beginnings', 'Transition', 'Rebirth'],
    symbolism: 'A knight on a white horse before a rising sun, marking necessary rebirth.',
    past: 'a major chapter or pattern reaching its natural end to make space for rebirth.',
    present: 'releasing old attachments as a necessary transformation takes place.',
    future: 'profound rebirth and new beginnings as the old dynamic closes once and for all.',
  },
  {
    name: 'Temperance',
    file: '14-Temperance.jpg',
    keywords: ['Balance', 'Moderation', 'Patience', 'Alchemy'],
    symbolism: 'An angel pouring waters of balance between two vessels.',
    past: 'maintaining patience and emotional balance through past turbulence.',
    present: 'practicing moderation, emotional equilibrium, and calm diplomacy.',
    future: 'peaceful integration, healing, and perfect timing restoring total harmony.',
  },
  {
    name: 'The Devil',
    file: '15-TheDevil.jpg',
    keywords: ['Shadow Self', 'Attachment', 'Limiting Beliefs', 'Codependency'],
    symbolism: 'Figures loosely bound by chains, representing self-imposed restriction.',
    past: 'unhealthy attachments, fear, or codependent patterns restricting your freedom.',
    present: 'examining self-imposed restrictions or unhealthy attachments that hold you back.',
    future: 'breaking free from toxic cycles or codependency to reclaim your personal freedom.',
  },
  {
    name: 'The Tower',
    file: '16-TheTower.jpg',
    keywords: ['Sudden Awakening', 'Breakthrough', 'Shaking Foundations', 'Truth'],
    symbolism: 'Lightning striking a stone tower, shattering false structures so truth emerges.',
    past: 'a sudden awakening or unexpected disruption that dismantled false illusions.',
    present: 'a sudden disruptive awakening clearing away structures that weren\'t built on truth.',
    future: 'a breakthrough clearing away false assumptions and laying space for genuine truth.',
  },
  {
    name: 'The Star',
    file: '17-TheStar.jpg',
    keywords: ['Hope', 'Renewal', 'Spiritual Clarity', 'Inspiration'],
    symbolism: 'A maiden pouring waters of renewal beneath a radiant starry sky.',
    past: 'regaining your faith and beginning a deep journey of emotional healing after a storm.',
    present: 'feeling surrounded by renewed hope, peace, and spiritual clarity.',
    future: 'inspiration, tranquility, and long-desired wishes coming into bright reality.',
  },
  {
    name: 'The Moon',
    file: '18-TheMoon.jpg',
    keywords: ['Illusion', 'Subconscious Fear', 'Intuition', 'Uncertainty'],
    symbolism: 'A full moon casting light over a mysterious winding path guarded by animals.',
    past: 'uncertainty or unaddressed subconscious fears creating confusion in your path.',
    present: 'navigating hidden anxieties and paying attention to deep intuitive signals.',
    future: 'clarifying light gradually dispelling doubt and revealing what was once hidden.',
  },
  {
    name: 'The Sun',
    file: '19-TheSun.jpg',
    keywords: ['Joy', 'Success', 'Vitality', 'Illumination'],
    symbolism: 'A radiant child riding a white horse beneath a brilliant sun.',
    past: 'a joyful season of warmth, clarity, and uninhibited confidence.',
    present: 'basking in radiant truth, positive energy, and emotional warmth.',
    future: 'total success, joyful fulfillment, and bright abundance crowning your path.',
  },
  {
    name: 'Judgement',
    file: '20-Judgement.jpg',
    keywords: ['Reckoning', 'Awakening', 'Higher Calling', 'Absolution'],
    symbolism: 'An angel blowing a trumpet as souls rise in awakening and forgiveness.',
    past: 'answering a vital wake-up call and forgiving past errors to step into higher awareness.',
    present: 'facing a key moment of self-evaluation and listening to your higher calling.',
    future: 'complete absolution, awakening, and a victorious rebirth in your journey.',
  },
  {
    name: 'The World',
    file: '21-TheWorld.jpg',
    keywords: ['Completion', 'Integration', 'Accomplishment', 'Wholeness'],
    symbolism: 'A dancing figure encircled by a laurel wreath, celebrating full mastery.',
    past: 'successfully closing a major life cycle and achieving a sense of wholeness.',
    present: 'reaching a major milestone and celebrating how far you have come.',
    future: 'complete fulfillment, success, and the realization of your long-held goals.',
  },
];

// Suit Interpretation Overrides for Minor Arcana
const MINOR_ARCANA_CUSTOM: Record<string, { past: string; present: string; future: string }> = {
  // --- CUPS (EMOTIONS & LOVE) ---
  'Cups01': {
    past: 'an overflowing wave of emotional open-heartedness, deep affection, and mutual vulnerability.',
    present: 'an emotional awakening where new love, deep compassion, or open-hearted feeling is flowing.',
    future: 'emotional rebirth, renewed love, and a fulfilling heart-centered connection unfolding.',
  },
  'Cups02': {
    past: 'a deep soul connection, mutual attraction, and harmonious partnership.',
    present: 'evaluating mutual feelings, balance, and partnership choices in your relationship.',
    future: 'harmonious union, mutual respect, and a deep emotional alignment or reconciliation.',
  },
  'Cups03': {
    past: 'joyous celebration, warm connection, and shared happiness among friends or loved ones.',
    present: 'social dynamics, third-party influences, or seeking joyful connection.',
    future: 'shared celebration, happy reunion, and emotional joy restored.',
  },
  'Cups04': {
    past: 'emotional apathy, brooding on past disappointment, or ignoring new offers.',
    present: 'feeling stagnant, contemplative, or hesitant to accept current emotional offers.',
    future: 'awakening from apathy and opening your eyes to new emotional possibilities.',
  },
  'Cups05': {
    past: 'regret over past loss, mourning what broke down, or focusing on disappointment.',
    present: 'grieving past hurts while learning to turn around and see what emotional strength remains.',
    future: 'releasing old sadness and stepping out of grief into renewed emotional peace.',
  },
  'Cups06': {
    past: 'sweet nostalgia, past memories, or old connections resurfacing from your history.',
    present: 'revisiting memories from the past or reconnecting with familiar emotional roots.',
    future: 'reconnecting with fond memories, innocent affection, or a nostalgic reunion.',
  },
  'Cups07': {
    past: 'wishful thinking, multiple confusing choices, or idealized fantasies.',
    present: 'sorting through illusions and fantasies to choose a grounded emotional reality.',
    future: 'clarity cutting through confusion, allowing you to choose what is real over fantasy.',
  },
  'Cups08': {
    past: 'walking away from an unfulfilling situation to seek deeper emotional purpose.',
    present: 'evaluating whether to leave behind stagnant patterns in search of true fulfillment.',
    future: 'walking away from what no longer serves you to step into profound emotional maturity.',
  },
  'Cups09': {
    past: 'contentment, emotional satisfaction, and feeling grateful for your accomplishments.',
    present: 'enjoying personal satisfaction, emotional comfort, and heart-centered peace.',
    future: 'deep emotional fulfillment and your heart\'s desire coming to pass.',
  },
  'Cups10': {
    past: 'lasting emotional harmony, family peace, and feeling deeply cherished.',
    present: 'focusing on long-term emotional harmony, home life, and shared peace.',
    future: 'complete emotional bliss, family harmony, and lasting love.',
  },
  'Cups11': {
    past: 'a gentle message of affection or an intuitive emotional awakening.',
    present: 'receiving intuitive insights or gentle emotional gestures in your situation.',
    future: 'sweet messages of affection, creative inspiration, or emotional reconciliation.',
  },
  'Cups12': {
    past: 'a romantic pursuit filled with charm, idealism, and wearing your heart on your sleeve.',
    present: 'following your heart\'s passion while ensuring idealism stays grounded in truth.',
    future: 'a romantic gesture, passionate offer, or emotionally aligned proposal arriving.',
  },
  'Cups13': {
    past: 'deep emotional maturity, compassion, and intuitive empathy.',
    present: 'holding space for feelings with calm maturity and empathetic understanding.',
    future: 'emotional healing, deep intuition, and unconditional self-love guiding your path.',
  },
  'Cups14': {
    past: 'emotional control, wisdom, and navigating feelings with calm mastery.',
    present: 'balancing deep emotions with practical wisdom and self-control.',
    future: 'emotional stability, mastery over feelings, and wise leadership in your heart.',
  },

  // --- SWORDS (MIND, COMMUNICATION & BOUNDARIES) ---
  'Swords01': {
    past: 'a breakthrough moment of truth, honest communication, or sharp clarity.',
    present: 'cutting through confusion with sharp honesty, truth, and mental clarity.',
    future: 'a clear breakthrough of truth resolving all doubt and ambiguity.',
  },
  'Swords02': {
    past: 'a difficult impasse, avoiding a hard choice, or keeping your heart guarded.',
    present: 'feeling at a crossroads where making a clear choice is necessary to restore peace.',
    future: 'removing the blindfold, facing the truth, and breaking through indecision.',
  },
  'Swords03': {
    past: 'heartbreak, painful communication, or emotional disappointment that left a wound.',
    present: 'processing past emotional hurt or clear communication that cuts to the truth.',
    future: 'healing from heartbreak as honest clarity washes away old pain.',
  },
  'Swords04': {
    past: 'taking much-needed rest, retreat, or mental recovery after conflict.',
    present: 'pausing, resting your mind, and stepping back from argument or mental stress.',
    future: 'restored mental peace and quiet sanctuary after a period of stress.',
  },
  'Swords05': {
    past: 'unnecessary conflict, hollow victories, or feeling betrayed in communication.',
    present: 'evaluating whether winning an argument is worth losing peace or connection.',
    future: 'stepping away from petty drama to preserve your dignity and peace of mind.',
  },
  'Swords06': {
    past: 'moving away from turbulent waters toward calmer emotional shores.',
    present: 'transitioning through heavy thoughts toward quieter, more peaceful mental space.',
    future: 'leaving drama behind and moving smoothly into calmer, stable waters.',
  },
  'Swords07': {
    past: 'secretive behavior, strategic retreat, or feeling things weren\'t fully transparent.',
    present: 'protecting yourself, double-checking facts, or watching out for hidden motives.',
    future: 'truth coming to light, eliminating any hidden agendas or deceptive patterns.',
  },
  'Swords08': {
    past: 'feeling trapped by self-imposed mental anxieties or limiting beliefs.',
    present: 'recognizing that the mental ropes binding you are looser than they appear.',
    future: 'breaking free from self-doubt and stepping forward in clear mental confidence.',
  },
  'Swords09': {
    past: 'sleepless nights, heavy worry, or overthinking a painful scenario.',
    present: 'realizing that nightmarish worries are often worse in the mind than in reality.',
    future: 'releasing mental anguish as practical light dispels late-night fears.',
  },
  'Swords10': {
    past: 'reaching the absolute bottom of a painful cycle, allowing a clean slate to begin.',
    present: 'closing out a painful chapter completely—the worst is officially behind you.',
    future: 'a final ending to old pain, paving the way for a bright dawn of new beginnings.',
  },
  'Swords11': {
    past: 'impulsive communication, hasty decisions, or rushing into conflict.',
    present: 'slowing down impulsive thoughts and communicating with strategic intent.',
    future: 'swift clarity and decisive action cutting right to the heart of the matter.',
  },
  'Swords12': {
    past: 'charging ahead with sharp focus, intellectual ambition, and direct action.',
    present: 'navigating fast-moving conversations or sharp intellectual debates.',
    future: 'decisive momentum and assertive communication securing your objective.',
  },
  'Swords13': {
    past: 'sharp perception, clear independence, and refusing to tolerate illusions.',
    present: 'embodying sharp boundaries, clear perception, and objective truth.',
    future: 'clear independent boundaries and sharp intellect guiding your victory.',
  },
  'Swords14': {
    past: 'intellectual authority, firm logical standards, and decisive boundaries.',
    present: 'cold and precise logic, calculated communication, and strict firm boundaries.',
    future: 'mastery over conflict through clear, unbiased, and firm boundaries.',
  },

  // --- PENTACLES (STABILITY, MONEY & MATERIAL REALITY) ---
  'Pentacles01': {
    past: 'a solid practical opportunity, financial seed, or tangible foundation being planted.',
    present: 'a promising opportunity for tangible stability, wealth, or solid grounding.',
    future: 'a solid practical opportunity or financial reward taking root in your life.',
  },
  'Pentacles02': {
    past: 'juggling multiple priorities, financial balance, or managing fluctuating resources.',
    present: 'finding balance between competing practical demands or emotional priorities.',
    future: 'smoothly balancing practical responsibilities and maintaining adaptability.',
  },
  'Pentacles03': {
    past: 'collaborative teamwork, building solid skillsets, or constructive effort.',
    present: 'working constructively with others to build a durable foundation.',
    future: 'successful collaboration, mastery of skills, and recognized practical progress.',
  },
  'Pentacles04': {
    past: 'holding tightly to security, financial caution, or fear of scarcity.',
    present: 'evaluating whether guarding your heart or resources is creating stiffness.',
    future: 'establishing firm financial security while learning to let energy flow freely.',
  },
  'Pentacles05': {
    past: 'feeling left out in the cold, financial strain, or emotional isolation.',
    present: 'recognizing available help and stepping out of isolation into security.',
    future: 'overcoming hardship and finding sanctuary, warmth, and reliable support.',
  },
  'Pentacles06': {
    past: 'generosity, fair exchange, and supportive give-and-take dynamics.',
    present: 'ensuring equal reciprocity and balance in your interactions.',
    future: 'receiving supportive help, fair compensation, and balanced generosity.',
  },
  'Pentacles07': {
    past: 'patient investment, waiting for seeds to grow, and assessing long-term progress.',
    present: 'pausing to evaluate whether current efforts are yielding the long-term results you desire.',
    future: 'harvesting the rewards of your patient investments and long-term hard work.',
  },
  'Pentacles08': {
    past: 'dedication, craftsmanship, and working diligently to build mastery.',
    present: 'honing your skills, staying dedicated, and building tangible value.',
    future: 'mastery, pride in your craft, and solid rewards for consistent effort.',
  },
  'Pentacles09': {
    past: 'independent abundance, self-reliance, and enjoying personal luxury.',
    present: 'standing proudly in your self-worth, financial independence, and personal peace.',
    future: 'thriving self-sufficiency, financial freedom, and abundant personal security.',
  },
  'Pentacles10': {
    past: 'long-term stability, legacy, and feeling backed by solid practical foundations.',
    present: 'focusing on long-term stability, family legacy, or real-world security over quick drama.',
    future: 'lasting financial security, practical legacy, and durable real-world stability.',
  },
  'Pentacles11': {
    past: 'a practical message, study, or cautious new step toward financial growth.',
    present: 'taking practical, measured steps toward long-term goals.',
    future: 'a tangible offer of practical stability or steady financial news arriving.',
  },
  'Pentacles12': {
    past: 'steady, reliable effort, dependability, and patient perseverance.',
    present: 'doing the necessary routine work with unwavering loyalty and patience.',
    future: 'steady, dependable progress and solid, reliable results rewarding your loyalty.',
  },
  'Pentacles13': {
    past: 'nurturing practical abundance, hospitality, and grounded security.',
    present: 'providing warm practical support and creating a comfortable, secure environment.',
    future: 'abundant practical comfort, financial security, and grounded peace.',
  },
  'Pentacles14': {
    past: 'financial mastery, wealth building, and establishing firm practical success.',
    present: 'focusing on financial commitments, business obligations, and long-term security.',
    future: 'solid financial security, material stability, and practical obligations taking priority.',
  },

  // --- WANDS (PASSION, ACTION & CREATIVITY) ---
  'Wands01': {
    past: 'a spark of creative passion, inspiration, or bold new initiative.',
    present: 'feeling a fresh surge of creative energy, motivation, and fiery drive.',
    future: 'a passionate breakthrough and exciting new creative direction taking off.',
  },
  'Wands02': {
    past: 'planning future horizons, stepping into personal power, and contemplating expansion.',
    present: 'standing at a crossroads of growth and planning your next major expansion.',
    future: 'expanding your horizons, stepping out into the world, and seizing new control.',
  },
  'Wands03': {
    past: 'setting ships to sea, long-term foresight, and expecting good results.',
    present: 'awaiting the arrival of long-term investments and watching your plans unfold.',
    future: 'your long-term ventures coming into port with great success and vision.',
  },
  'Wands04': {
    past: 'celebrating milestones, joyful homecoming, and solid community foundation.',
    present: 'enjoying a harmonious season of stability, homecoming, and milestone celebration.',
    future: 'a joyful celebration, wedding, or milestone establishing long-term harmony.',
  },
  'Wands05': {
    past: 'competing ideas, tension, or minor ego friction among personalities.',
    present: 'working through temporary competition, conflicting opinions, or internal tension.',
    future: 'resolving friction and turning competition into productive growth.',
  },
  'Wands06': {
    past: 'public recognition, victory, and overcoming hurdles to acclaim.',
    present: 'gaining well-deserved validation, progress, and public victory.',
    future: 'triumphant success, public recognition, and proud victory in your endeavor.',
  },
  'Wands07': {
    past: 'defending your position, holding the high ground, and resisting pressure.',
    present: 'standing your ground firmly against opposition or external challenge.',
    future: 'successfully defending your boundaries and holding your ground with pride.',
  },
  'Wands08': {
    past: 'rapid communication, swift events, and momentum taking off.',
    present: 'experiencing fast-moving communication, travel, or incoming news.',
    future: 'swift resolution, fast-moving progress, and direct communication clearing delays.',
  },
  'Wands09': {
    past: 'resilience through fatigue, guarding against burnout, and standing resolute.',
    present: 'feeling battle-weary but holding the line with final resilience.',
    future: 'persevering through the final hurdle and emerging completely victorious.',
  },
  'Wands10': {
    past: 'carrying a heavy burden, taking on too much responsibility alone.',
    present: 'evaluating whether you are carrying unnecessary weight that can be delegated or released.',
    future: 'releasing heavy burdens as you reach the finish line of a taxing season.',
  },
  'Wands11': {
    past: 'an enthusiastic message, creative curiosity, or spontaneous spark.',
    present: 'exploring new creative ideas with playful passion and enthusiasm.',
    future: 'exciting news, passionate communication, or creative adventure opening up.',
  },
  'Wands12': {
    past: 'adventurous pursuit, charismatic charm, and bold impulsive action.',
    present: 'channeling bold, passionate energy into decisive movement.',
    future: 'passionate progress, charismatic breakthroughs, and exciting adventure.',
  },
  'Wands13': {
    past: 'radiant confidence, independent charm, and magnetic leadership.',
    present: 'standing in your magnetic self-worth, charm, and creative power.',
    future: 'stepping into radiant confidence, charm, and magnetic independent strength.',
  },
  'Wands14': {
    past: 'bold vision, leadership, and inspiring others with passionate energy.',
    present: 'taking bold command of your creative journey and directing your vision.',
    future: 'charismatic leadership, vision, and triumph in your creative goals.',
  },
};

const NUMBER_NAMES = [
  '', 'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
  'Page', 'Knight', 'Queen', 'King'
];

function buildCompleteDeck(): TarotCardData[] {
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

  // 2. Minor Arcana
  const suits: Array<{
    name: 'Cups' | 'Pentacles' | 'Swords' | 'Wands';
    prefix: string;
  }> = [
    { name: 'Cups', prefix: 'Cups' },
    { name: 'Pentacles', prefix: 'Pentacles' },
    { name: 'Swords', prefix: 'Swords' },
    { name: 'Wands', prefix: 'Wands' },
  ];

  for (const suit of suits) {
    for (let num = 1; num <= 14; num++) {
      const numStr = num < 10 ? `0${num}` : `${num}`;
      const cardKey = `${suit.prefix}${numStr}`;
      const cardName = `${NUMBER_NAMES[num]} of ${suit.name}`;

      const custom = MINOR_ARCANA_CUSTOM[cardKey] || {
        past: `a foundational season centered on ${suit.name.toLowerCase()} and ${NUMBER_NAMES[num].toLowerCase()} energy.`,
        present: `active dynamics surrounding ${suit.name.toLowerCase()} and real-world clarity.`,
        future: `upcoming growth and resolution in your ${suit.name.toLowerCase()} path.`,
      };

      deck.push({
        id: idCounter++,
        name: cardName,
        arcana: suit.name,
        image: `/images/rider-waite-tarot-deck-cards/${suit.prefix}${numStr}.jpg`,
        keywords: [suit.name, NUMBER_NAMES[num], 'Minor Arcana'],
        symbolism: `Rider-Waite imagery representing ${cardName}.`,
        pastMeaning: custom.past,
        presentMeaning: custom.present,
        futureMeaning: custom.future,
      });
    }
  }

  return deck;
}

export const DECK_NAME = 'Rider-Waite 78 Card Deck';
export const TAROT_DECK: TarotCardData[] = buildCompleteDeck();
