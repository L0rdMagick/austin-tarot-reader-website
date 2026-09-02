export interface TarotCardData {
  id: number;
  name: string;
  arcana: 'Major Arcana' | 'Cups' | 'Pentacles' | 'Swords' | 'Wands';
  image: string;
  keywords: string[];
  symbolism: string;
  pastPhrase: string;
  presentPhrase: string;
  futurePhrase: string;
  summaryPhrase: string;
}

const MAJOR_ARCANA_INFO: Array<{
  name: string;
  file: string;
  keywords: string[];
  symbolism: string;
  past: string;
  present: string;
  future: string;
  summary: string;
}> = [
  {
    name: 'The Fool',
    file: '00-TheFool.jpg',
    keywords: ['New Beginnings', 'Innocence', 'Leap of Faith', 'Spontaneity'],
    symbolism: 'A youth stepping toward a cliff edge with pure trust, holding a white rose of innocence.',
    past: 'a leap of faith or a spontaneous new chapter that opened a fresh spiritual path',
    present: 'you stand at the precipice of a new beginning where releasing fear unlocks your true path',
    future: 'you will step into an exciting new journey where trusting the unknown brings profound liberation',
    summary: 'stepping into a courageous new beginning',
  },
  {
    name: 'The Magician',
    file: '01-TheMagician.jpg',
    keywords: ['Manifestation', 'Resourcefulness', 'Personal Power', 'Action'],
    symbolism: 'A figure connected to source holding all four suit tools, channeling celestial energy into reality.',
    past: 'a magical energy filled with wonder, spiritual connection to source, and boundless potential',
    present: 'you possess all the inner tools, spiritual power, and personal resources to manifest your goal right now',
    future: 'your focused intention and self-belief will align with the universe to manifest a clear success',
    summary: 'tapping into your sacred power of manifestation',
  },
  {
    name: 'The High Priestess',
    file: '02-TheHighPriestess.jpg',
    keywords: ['Intuition', 'Sacred Knowledge', 'Subconscious', 'Mystery'],
    symbolism: 'A priestess seated between dual pillars holding sacred wisdom in quiet contemplation.',
    past: 'sacred intuitive nudges and unexpressed truths that quietly guided your underlying choices',
    present: 'you are called to look beyond surface appearances and listen deeply to the quiet wisdom of your intuition',
    future: 'sacred clarity and hidden spiritual wisdom will be revealed to illuminate your true path',
    summary: 'trusting the quiet wisdom of your intuition',
  },
  {
    name: 'The Empress',
    file: '03-TheEmpress.jpg',
    keywords: ['Abundance', 'Nurturing', 'Creativity', 'Fertility'],
    symbolism: 'A crowned queen in a fertile golden field, embodying natural abundance and maternal warmth.',
    past: 'a rich season of emotional nurturing, creative growth, and unconditional warmth',
    present: 'a fertile season surrounds you where focusing on self-care and creative expression allows healing to blossom',
    future: 'abundant emotional fulfillment, warmth, and fruitful harmony will realize your desires',
    summary: 'welcoming sacred abundance and emotional growth',
  },
  {
    name: 'The Emperor',
    file: '04-TheEmperor.jpg',
    keywords: ['Structure', 'Authority', 'Stability', 'Leadership'],
    symbolism: 'A bearded king on a stone ram throne, establishing order, logic, and firm boundaries.',
    past: 'firm boundaries, structured discipline, or an influential presence establishing stability',
    present: 'you are called to take charge of your life, establish firm boundaries, and apply clear rational logic',
    future: 'durable stability, solid real-world security, and strong boundaries will be established',
    summary: 'establishing firm boundaries and practical stability',
  },
  {
    name: 'The Hierophant',
    file: '05-TheHierophant.jpg',
    keywords: ['Tradition', 'Belief Systems', 'Spiritual Teacher', 'Conformity'],
    symbolism: 'A spiritual teacher sharing sacred tradition and proven wisdom.',
    past: 'honoring traditional values, spiritual teachings, or guidance from a trusted mentor',
    present: 'you are evaluating whether to follow established conventions or honor your own authentic path',
    future: 'proven spiritual wisdom and sound counsel will restore harmony and structure',
    summary: 'aligning with spiritual wisdom and proven values',
  },
  {
    name: 'The Lovers',
    file: '06-TheLovers.jpg',
    keywords: ['Deep Connection', 'Alignment', 'Choices of the Heart', 'Harmony'],
    symbolism: 'An angel blessing two soul-aligned figures beneath a radiant sun.',
    past: 'a profound soul connection, sacred alignment, or a choice made from the heart',
    present: 'you are called to align your choices with your deepest personal values and true emotional desires',
    future: 'a harmonious soul union, mutual alignment, or deep emotional reconciliation will manifest',
    summary: 'experiencing deep soul harmony and heart alignment',
  },
  {
    name: 'The Chariot',
    file: '07-TheChariot.jpg',
    keywords: ['Determination', 'Willpower', 'Victory', 'Overcoming Obstacles'],
    symbolism: 'A warrior guiding dual sphinxes forward through focused willpower.',
    past: 'overcoming past friction and emotional obstacles through sheer determination and inner drive',
    present: 'you must harness opposing energies, stay disciplined, and drive your situation forward with purpose',
    future: 'triumph, rapid momentum, and victorious resolution will reward your steadfast focus',
    summary: 'driving forward to victorious breakthrough',
  },
  {
    name: 'Strength',
    file: '08-Strength.jpg',
    keywords: ['Inner Strength', 'Compassion', 'Patience', 'Courage'],
    symbolism: 'A gentle woman taming a roaring lion with quiet grace and love.',
    past: 'handling difficult situations with patience, gentleness, and quiet inner fortitude',
    present: 'you are invited to master current challenges through gentle compassion and quiet patience rather than force',
    future: 'you will master this challenge gracefully, coming through with deep inner peace and empowerment',
    summary: 'mastering challenges with gentle inner courage',
  },
  {
    name: 'The Hermit',
    file: '09-TheHermit.jpg',
    keywords: ['Introspection', 'Inner Guidance', 'Solitude', 'Wisdom'],
    symbolism: 'A lone seeker on a mountain peak raising a glowing lantern of inner truth.',
    past: 'stepping back from external noise to seek quiet inner reflection and self-realization',
    present: 'you are called to go inward, take personal space, and consult your own inner compass',
    future: 'profound spiritual wisdom and self-understanding will light your ultimate direction',
    summary: 'seeking quiet inner truth and self-discovery',
  },
  {
    name: 'Wheel of Fortune',
    file: '10-WheelOfFortune.jpg',
    keywords: ['Cycles of Change', 'Destiny', 'Karma', 'Turning Point'],
    symbolism: 'The cosmic wheel of life turning through destiny and karmic cycles.',
    past: 'a cosmic turn of destiny or unexpected shift in circumstances that reshaped your path',
    present: 'you are experiencing a pivotal turning point where adapting to cosmic cycles opens new doors',
    future: 'a fortunate stroke of luck and karmic alignment will elevate your situation into new grace',
    summary: 'embracing cosmic cycles of positive transformation',
  },
  {
    name: 'Justice',
    file: '11-Justice.jpg',
    keywords: ['Truth', 'Fairness', 'Cause & Effect', 'Accountability'],
    symbolism: 'A figure holding scales of truth and an upright sword of clarity.',
    past: 'past choices bringing about a fair, balanced, and necessary spiritual reckoning',
    present: 'you must evaluate your situation with complete honesty, emotional balance, and clarity',
    future: 'a just resolution, balanced outcome, and objective truth will prevail',
    summary: 'restoring divine balance and objective truth',
  },
  {
    name: 'The Hanged Man',
    file: '12-TheHangedMan.jpg',
    keywords: ['New Perspective', 'Surrender', 'Pause', 'Letting Go'],
    symbolism: 'A figure suspended upside down in peaceful reflection and surrender.',
    past: 'a period of quiet waiting or surrendering control that allowed you to see truth from a new angle',
    present: 'you are encouraged to pause, surrender the urge to force outcomes, and gain a fresh perspective',
    future: 'a profound epiphany will strike that unblocks your path and brings serene release',
    summary: 'surrendering control to gain enlightened perspective',
  },
  {
    name: 'Death',
    file: '13-Death.jpg',
    keywords: ['Transformation', 'Endings & Beginnings', 'Transition', 'Rebirth'],
    symbolism: 'A knight on a white horse before a rising sun, marking necessary rebirth.',
    past: 'a major phase, pattern, or attachment reaching its natural end to make space for rebirth',
    present: 'you are releasing old attachments as a necessary spiritual transformation clears your space',
    future: 'a profound rebirth will unfold as the old chapter officially closes to welcome light',
    summary: 'releasing the old to welcome sacred rebirth',
  },
  {
    name: 'Temperance',
    file: '14-Temperance.jpg',
    keywords: ['Balance', 'Moderation', 'Patience', 'Alchemy'],
    symbolism: 'An angel pouring waters of balance between two vessels.',
    past: 'maintaining patience, emotional balance, and diplomatic grace through past turbulence',
    present: 'you are urged to practice moderation, calm equilibrium, and patient integration',
    future: 'peaceful healing, harmonious balance, and divine timing will restore total peace',
    summary: 'restoring peaceful balance and divine alchemy',
  },
  {
    name: 'The Devil',
    file: '15-TheDevil.jpg',
    keywords: ['Shadow Self', 'Attachment', 'Limiting Beliefs', 'Codependency'],
    symbolism: 'Figures loosely bound by chains, representing self-imposed restriction.',
    past: 'unhealthy attachments, fear, or codependent patterns that restricted your spiritual freedom',
    present: 'you are called to examine self-imposed restrictions and recognize that the chains are looser than they seem',
    future: 'you will break free from toxic cycles or unhealthy attachments to reclaim your emotional freedom',
    summary: 'reclaiming your freedom from limiting attachments',
  },
  {
    name: 'The Tower',
    file: '16-TheTower.jpg',
    keywords: ['Sudden Awakening', 'Breakthrough', 'Shaking Foundations', 'Truth'],
    symbolism: 'Lightning striking a stone tower, shattering false structures so truth emerges.',
    past: 'a sudden awakening or unexpected disruption that dismantled false assumptions',
    present: 'you are experiencing a sudden, disruptive awakening where structures not built on truth crumble away',
    future: 'a major breakthrough will strip away illusions, allowing you to rebuild on authentic truth',
    summary: 'shattering illusions to build on authentic truth',
  },
  {
    name: 'The Star',
    file: '17-TheStar.jpg',
    keywords: ['Hope', 'Renewal', 'Spiritual Clarity', 'Inspiration'],
    symbolism: 'A maiden pouring waters of renewal beneath a radiant starry sky.',
    past: 'regaining your faith and beginning a deep journey of spiritual and emotional healing after a storm',
    present: 'you are surrounded by renewed hope, peace, and sacred inspiration',
    future: 'tranquility, spiritual clarity, and long-desired heart wishes will blossom into reality',
    summary: 'flowing with renewed hope and spiritual inspiration',
  },
  {
    name: 'The Moon',
    file: '18-TheMoon.jpg',
    keywords: ['Illusion', 'Subconscious Fear', 'Intuition', 'Uncertainty'],
    symbolism: 'A full moon casting light over a mysterious winding path guarded by animals.',
    past: 'uncertainty, unaddressed anxieties, or illusions creating confusion in your path',
    present: 'you must navigate subconscious fears and pay close attention to subtle intuitive signals',
    future: 'clarifying light will gradually dispel doubts, bringing hidden truths into view',
    summary: 'navigating shadows to uncover intuitive truth',
  },
  {
    name: 'The Sun',
    file: '19-TheSun.jpg',
    keywords: ['Joy', 'Success', 'Vitality', 'Illumination'],
    symbolism: 'A radiant child riding a white horse beneath a brilliant sun.',
    past: 'a joyful season of warmth, radiant clarity, and uninhibited confidence',
    present: 'you are basking in bright truth, positive vitality, and emotional warmth',
    future: 'total success, radiant joy, and abundant illumination will crown your path',
    summary: 'basking in radiant success and joyful clarity',
  },
  {
    name: 'Judgement',
    file: '20-Judgement.jpg',
    keywords: ['Reckoning', 'Awakening', 'Higher Calling', 'Absolution'],
    symbolism: 'An angel blowing a trumpet as souls rise in awakening and forgiveness.',
    past: 'answering a vital wake-up call and forgiving past errors to step into higher awareness',
    present: 'you face a key moment of self-evaluation where listening to your higher calling is essential',
    future: 'complete absolution, spiritual awakening, and a victorious fresh rebirth will crown your path',
    summary: 'answering your higher soul calling',
  },
  {
    name: 'The World',
    file: '21-TheWorld.jpg',
    keywords: ['Completion', 'Integration', 'Accomplishment', 'Wholeness'],
    symbolism: 'A dancing figure encircled by a laurel wreath, celebrating full mastery.',
    past: 'successfully completing a major life cycle and achieving a deep sense of wholeness',
    present: 'you are reaching a major milestone of completion and celebrating how far you have come',
    future: 'you will achieve complete fulfillment, spiritual mastery, and the realization of your long-held goals',
    summary: 'reaching complete spiritual fulfillment and integration',
  },
];

// Suit Interpretation Overrides for Minor Arcana
const MINOR_ARCANA_CUSTOM: Record<string, { past: string; present: string; future: string; summary: string }> = {
  // --- CUPS (EMOTIONS & LOVE) ---
  'Cups01': {
    past: 'an overflowing wave of emotional open-heartedness, deep affection, and mutual vulnerability',
    present: 'you are experiencing an emotional awakening where new love, deep compassion, or open-hearted feeling is flowing',
    future: 'an emotional rebirth, renewed love, and a fulfilling heart-centered connection will unfold',
    summary: 'opening your heart to genuine love and vulnerability',
  },
  'Cups02': {
    past: 'a deep soul connection, mutual attraction, and harmonious emotional alignment',
    present: 'you are evaluating mutual feelings, balance, and partnership choices in your relationship',
    future: 'a harmonious union, mutual respect, and a deep emotional reconciliation will manifest',
    summary: 'building balanced soul harmony and mutual respect',
  },
  'Cups03': {
    past: 'joyous celebration, warm emotional connection, and shared happiness',
    present: 'you are navigating social dynamics, shared connections, or seeking joyful reunion',
    future: 'a happy reunion, shared celebration, and emotional joy will be restored',
    summary: 'celebrating shared joy and emotional reunion',
  },
  'Cups04': {
    past: 'emotional apathy, brooding on past disappointment, or ignoring new emotional offers',
    present: 'you feel hesitant or stagnant, taking time to contemplate before accepting new emotional offers',
    future: 'you will awaken from apathy and open your eyes to fresh emotional possibilities',
    summary: 'releasing stagnation to welcome new emotional gifts',
  },
  'Cups05': {
    past: 'regret over past loss, mourning what broke down, or dwelling on emotional disappointment',
    present: 'you are grieving past hurts while learning to turn around and see the emotional strength that remains',
    future: 'you will release old sadness and step out of grief into renewed emotional peace',
    summary: 'healing past grief to reclaim present peace',
  },
  'Cups06': {
    past: 'sweet nostalgia, past memories, or old emotional roots resurfacing',
    present: 'you are revisiting memories from the past or reconnecting with familiar emotional roots',
    future: 'a sweet reunion, fond nostalgia, or innocent affection will touch your heart',
    summary: 'reconnecting with fond memories and tender affection',
  },
  'Cups07': {
    past: 'wishful thinking, multiple confusing options, or idealized emotional fantasies',
    present: 'you are sorting through illusions and fantasies to choose a grounded emotional reality',
    future: 'clarity will cut through confusion, allowing you to choose what is authentic and real',
    summary: 'choosing authentic reality over fleeting illusions',
  },
  'Cups08': {
    past: 'walking away from an unfulfilling situation to seek deeper emotional purpose',
    present: 'you are evaluating whether to leave behind stagnant patterns in search of true emotional fulfillment',
    future: 'you will walk away from what no longer serves you to step into profound emotional maturity',
    summary: 'stepping away from stagnation toward true fulfillment',
  },
  'Cups09': {
    past: 'contentment, emotional satisfaction, and feeling grateful for your blessings',
    present: 'you are enjoying personal satisfaction, emotional comfort, and heart-centered peace',
    future: 'deep emotional fulfillment and your heart\'s deepest desire will come to pass',
    summary: 'realizing your heart\'s deepest desires',
  },
  'Cups10': {
    past: 'lasting emotional harmony, family peace, and feeling deeply cherished',
    present: 'you are focusing on long-term emotional harmony, home life, and shared peace',
    future: 'complete emotional bliss, family harmony, and lasting love will crown your path',
    summary: 'experiencing lasting emotional bliss and harmony',
  },
  'Cups11': {
    past: 'a gentle message of affection or an intuitive emotional awakening',
    present: 'you are receiving intuitive insights or gentle emotional gestures in your situation',
    future: 'sweet messages of affection, creative inspiration, or emotional reconciliation will arrive',
    summary: 'welcoming tender emotional messages and intuitive sparks',
  },
  'Cups12': {
    past: 'a romantic pursuit filled with charm, idealism, and open affection',
    present: 'you are following your heart\'s passion while keeping your idealism grounded in truth',
    future: 'a romantic gesture, passionate offer, or emotionally aligned proposal will arrive',
    summary: 'following your heart with passionate authenticity',
  },
  'Cups13': {
    past: 'deep emotional maturity, compassion, and intuitive empathy',
    present: 'you are holding space for feelings with calm maturity and empathetic understanding',
    future: 'emotional healing, deep intuition, and unconditional self-love will guide your path',
    summary: 'guiding your journey with mature self-love',
  },
  'Cups14': {
    past: 'emotional control, wisdom, and navigating feelings with calm mastery',
    present: 'you are balancing deep emotions with practical wisdom and self-control',
    future: 'emotional stability, mastery over feelings, and wise leadership will prevail in your heart',
    summary: 'mastering your emotions with calm wisdom',
  },

  // --- SWORDS (MIND, COMMUNICATION & BOUNDARIES) ---
  'Swords01': {
    past: 'a breakthrough moment of truth, honest communication, or sharp mental clarity',
    present: 'you are cutting through confusion with sharp honesty, truth, and mental clarity',
    future: 'a clear breakthrough of truth will resolve all doubt and ambiguity',
    summary: 'cutting through confusion with sharp truth',
  },
  'Swords02': {
    past: 'a difficult impasse, avoiding a hard decision, or keeping your heart guarded',
    present: 'you feel at a crossroads where making a clear choice is necessary to restore peace',
    future: 'you will remove the blindfold, face the truth, and break through indecision',
    summary: 'breaking through indecision to find peace',
  },
  'Swords03': {
    past: 'heartbreak, painful communication, or emotional disappointment that left a wound',
    present: 'you are processing past emotional hurt through clear, honest communication',
    future: 'healing from heartbreak will take place as honest clarity washes away old pain',
    summary: 'healing past heartbreak with honest clarity',
  },
  'Swords04': {
    past: 'taking much-needed rest, sanctuary, or mental recovery after conflict',
    present: 'you are urged to pause, rest your mind, and step back from argument or mental stress',
    future: 'restored mental peace and quiet sanctuary will follow this period of stress',
    summary: 'resting your mind to restore inner peace',
  },
  'Swords05': {
    past: 'unnecessary conflict, hollow victories, or feeling betrayed in communication',
    present: 'you are evaluating whether winning an argument is worth losing peace or connection',
    future: 'you will step away from petty drama to preserve your dignity and peace of mind',
    summary: 'choosing inner peace over petty conflict',
  },
  'Swords06': {
    past: 'moving away from turbulent waters toward calmer emotional shores',
    present: 'you are transitioning through heavy thoughts and moving toward calmer, more peaceful mental shores',
    future: 'you will leave drama behind and move smoothly into calmer, stable waters',
    summary: 'moving toward calm and peaceful waters',
  },
  'Swords07': {
    past: 'secretive behavior, strategic retreat, or feeling things were not fully transparent',
    present: 'you are protecting yourself, double-checking facts, and watching out for hidden motives',
    future: 'truth will come to light, eliminating hidden agendas or deceptive patterns',
    summary: 'protecting your boundaries with clear truth',
  },
  'Swords08': {
    past: 'feeling trapped by self-imposed mental anxieties or limiting beliefs',
    present: 'you are called to recognize that the mental ropes binding you are looser than they appear',
    future: 'you will break free from self-doubt and step forward in clear mental confidence',
    summary: 'breaking free from self-imposed mental limits',
  },
  'Swords09': {
    past: 'sleepless nights, heavy worry, or overthinking a painful scenario',
    present: 'you are realizing that nightmarish worries are often worse in the mind than in reality',
    future: 'you will release mental anguish as practical light dispels late-night fears',
    summary: 'releasing anxiety to welcome practical peace',
  },
  'Swords10': {
    past: 'reaching the absolute bottom of a painful cycle, allowing a clean slate to begin',
    present: 'you are closing out a painful chapter completely, the worst is officially behind you',
    future: 'a final ending to old pain will pave the way for a bright dawn of new beginnings',
    summary: 'closing a painful chapter to begin anew',
  },
  'Swords11': {
    past: 'impulsive communication, hasty decisions, or rushing into conflict',
    present: 'you are slowing down impulsive thoughts and communicating with strategic intent',
    future: 'swift clarity and decisive communication will cut right to the heart of the matter',
    summary: 'communicating with strategic and swift clarity',
  },
  'Swords12': {
    past: 'charging ahead with sharp focus, intellectual ambition, and direct action',
    present: 'you are navigating fast-moving conversations or sharp intellectual decisions',
    future: 'decisive momentum and assertive communication will secure your objective',
    summary: 'moving forward with decisive intellectual focus',
  },
  'Swords13': {
    past: 'sharp perception, clear independence, and refusing to tolerate illusions',
    present: 'you are embodying sharp boundaries, clear perception, and objective truth',
    future: 'clear independent boundaries and sharp intellect will guide your victory',
    summary: 'standing in sharp perception and independent truth',
  },
  'Swords14': {
    past: 'intellectual authority, firm logical standards, and decisive boundaries',
    present: 'you are dealing with cold and precise logic, calculated communication, and strict firm boundaries',
    future: 'mastery over conflict will be achieved through clear, unbiased, and firm boundaries',
    summary: 'mastering conflict through firm logical boundaries',
  },

  // --- PENTACLES (STABILITY, MONEY & MATERIAL REALITY) ---
  'Pentacles01': {
    past: 'a solid practical opportunity, financial seed, or tangible foundation being planted',
    present: 'you are facing a promising opportunity for tangible stability, wealth, or solid grounding',
    future: 'a solid practical opportunity or financial reward will take durable root in your life',
    summary: 'planting seeds for tangible practical success',
  },
  'Pentacles02': {
    past: 'juggling multiple priorities, financial balance, or managing fluctuating resources',
    present: 'you are finding balance between competing practical demands or emotional priorities',
    future: 'you will smoothly balance practical responsibilities and maintain graceful adaptability',
    summary: 'balancing practical priorities with adaptability',
  },
  'Pentacles03': {
    past: 'collaborative teamwork, building solid skillsets, or constructive effort',
    present: 'you are working constructively with others to build a durable foundation',
    future: 'successful collaboration, mastery of skills, and recognized practical progress will reward you',
    summary: 'building durable success through collaboration',
  },
  'Pentacles04': {
    past: 'holding tightly to security, financial caution, or fear of scarcity',
    present: 'you are evaluating whether guarding your heart or resources is creating unnecessary stiffness',
    future: 'you will establish firm financial security while learning to let energy flow freely',
    summary: 'securing your resources without fear of scarcity',
  },
  'Pentacles05': {
    past: 'feeling left out in the cold, financial strain, or emotional isolation',
    present: 'you are called to recognize available help and step out of isolation into security',
    future: 'you will overcome hardship and find sanctuary, warmth, and reliable practical support',
    summary: 'stepping out of isolation into warmth and support',
  },
  'Pentacles06': {
    past: 'generosity, fair exchange, and supportive give-and-take dynamics',
    present: 'you are ensuring equal reciprocity and balance in your interactions',
    future: 'you will receive supportive help, fair compensation, and balanced generosity',
    summary: 'experiencing fair reciprocity and balanced support',
  },
  'Pentacles07': {
    past: 'patient investment, waiting for seeds to grow, and assessing long-term progress',
    present: 'you are pausing to evaluate whether current efforts are yielding the long-term results you desire',
    future: 'you will harvest the rewards of your patient investments and long-term hard work',
    summary: 'harvesting the rewards of patient investment',
  },
  'Pentacles08': {
    past: 'dedication, craftsmanship, and working diligently to build mastery',
    present: 'you are honing your skills, staying dedicated, and building tangible value',
    future: 'mastery, pride in your craft, and solid rewards for consistent effort will be yours',
    summary: 'honing your craft for durable practical reward',
  },
  'Pentacles09': {
    past: 'independent abundance, self-reliance, and enjoying personal luxury',
    present: 'you are standing proudly in your self-worth, financial independence, and personal peace',
    future: 'thriving self-sufficiency, financial freedom, and abundant personal security await',
    summary: 'enjoying thriving self-sufficiency and independence',
  },
  'Pentacles10': {
    past: 'long-term stability, legacy, and feeling backed by solid practical foundations',
    present: 'you are focusing on long-term stability, family legacy, or real-world security over quick drama',
    future: 'lasting financial security, practical legacy, and durable real-world stability will take root',
    summary: 'building long-term legacy and real-world security',
  },
  'Pentacles11': {
    past: 'a practical message, study, or cautious new step toward financial growth',
    present: 'you are taking practical, measured steps toward long-term goals',
    future: 'a tangible offer of practical stability or steady financial news will arrive',
    summary: 'taking steady, measured steps toward growth',
  },
  'Pentacles12': {
    past: 'steady, reliable effort, dependability, and patient perseverance',
    present: 'you are doing the necessary routine work with unwavering loyalty and patience',
    future: 'steady, dependable progress and solid, reliable results will reward your loyalty',
    summary: 'reaping steady progress through patient loyalty',
  },
  'Pentacles13': {
    past: 'nurturing practical abundance, hospitality, and grounded security',
    present: 'you are providing warm practical support and creating a comfortable, secure environment',
    future: 'abundant practical comfort, financial security, and grounded peace will surround you',
    summary: 'nurturing grounded peace and practical comfort',
  },
  'Pentacles14': {
    past: 'financial mastery, wealth building, and establishing firm practical success',
    present: 'you are focusing on financial commitments, business obligations, and long-term security',
    future: 'solid financial security, material stability, and practical obligations will take priority',
    summary: 'securing financial stability and practical mastery',
  },

  // --- WANDS (PASSION, ACTION & CREATIVITY) ---
  'Wands01': {
    past: 'a spark of creative passion, inspiration, or bold new initiative',
    present: 'you are feeling a fresh surge of creative energy, motivation, and fiery drive',
    future: 'a passionate breakthrough and exciting new creative direction will take off',
    summary: 'igniting a fresh spark of creative passion',
  },
  'Wands02': {
    past: 'planning future horizons, stepping into personal power, and contemplating expansion',
    present: 'you stand at a crossroads of growth, planning your next major expansion',
    future: 'you will expand your horizons, step out into the world, and seize new control',
    summary: 'expanding your horizons to seize new growth',
  },
  'Wands03': {
    past: 'setting ships to sea, long-term foresight, and expecting good results',
    present: 'you are awaiting the arrival of long-term investments and watching your plans unfold',
    future: 'your long-term ventures will come into port with great success and vision',
    summary: 'watching your long-term vision come to fruition',
  },
  'Wands04': {
    past: 'celebrating milestones, joyful homecoming, and a solid community foundation',
    present: 'you are enjoying a harmonious season of stability, homecoming, and milestone celebration',
    future: 'a joyful celebration, homecoming, or milestone will establish long-term harmony',
    summary: 'celebrating milestone harmony and homecoming',
  },
  'Wands05': {
    past: 'competing ideas, tension, or minor ego friction among personalities',
    present: 'you are working through temporary competition, conflicting opinions, or internal tension',
    future: 'you will resolve friction and turn competition into productive growth',
    summary: 'resolving tension to foster productive growth',
  },
  'Wands06': {
    past: 'public recognition, victory, and overcoming hurdles to acclaim',
    present: 'you are gaining well-deserved validation, progress, and public victory',
    future: 'triumphant success, public recognition, and proud victory will be yours',
    summary: 'achieving proud public victory and acclaim',
  },
  'Wands07': {
    past: 'defending your position, holding the high ground, and resisting pressure',
    present: 'you are standing your ground firmly against opposition or external challenge',
    future: 'you will successfully defend your boundaries and hold your ground with pride',
    summary: 'holding your ground with courage and conviction',
  },
  'Wands08': {
    past: 'rapid communication, swift events, and momentum taking off',
    present: 'you are experiencing fast-moving communication, travel, or incoming news',
    future: 'swift resolution, fast-moving progress, and direct communication will clear all delays',
    summary: 'moving swiftly into resolution and clear progress',
  },
  'Wands09': {
    past: 'resilience through fatigue, guarding against burnout, and standing resolute',
    present: 'you are feeling battle-weary but holding the line with final resilience',
    future: 'you will persevere through the final hurdle and emerge completely victorious',
    summary: 'persevering through final challenges to victory',
  },
  'Wands10': {
    past: 'carrying a heavy burden, taking on too much responsibility alone',
    present: 'you are evaluating whether you are carrying unnecessary weight that can be delegated or released',
    future: 'you will release heavy burdens as you reach the finish line of a taxing season',
    summary: 'releasing heavy burdens to find relief',
  },
  'Wands11': {
    past: 'an enthusiastic message, creative curiosity, or spontaneous spark',
    present: 'you are exploring new creative ideas with playful passion and enthusiasm',
    future: 'exciting news, passionate communication, or creative adventure will open up',
    summary: 'embracing creative curiosity and passion',
  },
  'Wands12': {
    past: 'adventurous pursuit, charismatic charm, and bold impulsive action',
    present: 'you are channeling bold, passionate energy into decisive movement',
    future: 'passionate progress, charismatic breakthroughs, and exciting adventure await',
    summary: 'pursuing bold passionate progress',
  },
  'Wands13': {
    past: 'radiant confidence, independent charm, and magnetic leadership',
    present: 'you are standing in your magnetic self-worth, charm, and creative power',
    future: 'you will step into radiant confidence, charm, and magnetic independent strength',
    summary: 'stepping into radiant magnetic self-worth',
  },
  'Wands14': {
    past: 'bold vision, leadership, and inspiring others with passionate energy',
    present: 'you are taking bold command of your creative journey and directing your vision',
    future: 'charismatic leadership, vision, and triumph will crown your creative goals',
    summary: 'commanding your vision with bold leadership',
  },
};

const NUMBER_NAMES = [
  '', 'Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
  'Page', 'Knight', 'Queen', 'King'
];

function buildFlawlessDeck(): TarotCardData[] {
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
      pastPhrase: info.past,
      presentPhrase: info.present,
      futurePhrase: info.future,
      summaryPhrase: info.summary,
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
        past: `a foundational season centered on ${suit.name.toLowerCase()} and ${NUMBER_NAMES[num].toLowerCase()} energy`,
        present: `you are actively navigating dynamics regarding ${suit.name.toLowerCase()} and real-world clarity`,
        future: `you will experience upcoming growth and resolution in your ${suit.name.toLowerCase()} path`,
        summary: `navigating ${suit.name.toLowerCase()} energy with clarity`,
      };

      deck.push({
        id: idCounter++,
        name: cardName,
        arcana: suit.name,
        image: `/images/rider-waite-tarot-deck-cards/${suit.prefix}${numStr}.jpg`,
        keywords: [suit.name, NUMBER_NAMES[num], 'Minor Arcana'],
        symbolism: `Rider-Waite imagery representing ${cardName}.`,
        pastPhrase: custom.past,
        presentPhrase: custom.present,
        futurePhrase: custom.future,
        summaryPhrase: custom.summary,
      });
    }
  }

  return deck;
}

export const DECK_NAME = 'Rider-Waite 78 Card Deck';
export const TAROT_DECK: TarotCardData[] = buildFlawlessDeck();
