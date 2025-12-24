// src/data/compatibility/compatibilityDynamics.js
/**
 * Premium Relationship Dynamics (Traits)
 * Interface (after mirroring):
 *   traits[key] -> { positive: string[], negative: string[] }
 * where key is "signA-signB" (lowercase slugs).
 *
 * Content stored once (66 pairs) and mirrored automatically to both directions.
 */

const baseTraits = {
  // ARIES
  "aries-taurus": {
    positive: [
      "Aries brings momentum; Taurus brings follow-through. Together you can turn ideas into results.",
      "Strong physical chemistry develops when pace and comfort are respected.",
      "When roles are clear, this pairing becomes surprisingly productive."
    ],
    negative: [
      "Aries may feel slowed down; Taurus may feel pushed. Pacing is the main friction point.",
      "Stubborn standoffs can form if neither wants to yield first.",
      "Conflict escalates when directness meets defensiveness."
    ]
  },
  "aries-gemini": {
    positive: [
      "Fast rapport: Aries energizes, Gemini sparks ideas and keeps things lively.",
      "A playful, curious vibe makes it easy to reconnect after tension.",
      "Together you move quickly from concept to action when aligned."
    ],
    negative: [
      "Gemini may change direction while Aries wants a straight line forward.",
      "Arguments can become performative: winning the moment over solving the issue.",
      "Restlessness increases if there’s no shared short-term plan."
    ]
  },
  "aries-cancer": {
    positive: [
      "Aries offers protection and initiative; Cancer offers care and emotional loyalty.",
      "If trust is built, the bond becomes deeply supportive and motivating.",
      "A strong home-and-goals dynamic can form: comfort plus ambition."
    ],
    negative: [
      "Aries bluntness can bruise Cancer sensitivity; Cancer moods can confuse Aries.",
      "Different conflict styles: confrontation vs withdrawal.",
      "Resentment builds if needs aren’t named early and clearly."
    ]
  },
  "aries-leo": {
    positive: [
      "High vitality and strong attraction; you energize each other naturally.",
      "Shared confidence makes goals feel achievable together.",
      "Big-hearted loyalty is possible when respect stays intact."
    ],
    negative: [
      "Ego collisions: leadership becomes competition if boundaries are unclear.",
      "Pride can block apologies and repair after conflict.",
      "Intensity stays high; burnout happens without rest and grounding."
    ]
  },
  "aries-virgo": {
    positive: [
      "Aries initiates; Virgo refines. Excellent for building something real.",
      "Virgo helps Aries focus; Aries helps Virgo take risks at the right time.",
      "Mutual improvement mindset can strengthen the partnership."
    ],
    negative: [
      "Virgo criticism can feel like rejection; Aries impatience can feel reckless.",
      "Different standards: speed vs precision.",
      "Stress increases when feedback isn’t delivered with care."
    ]
  },
  "aries-libra": {
    positive: [
      "Strong chemistry through contrast: decisive drive meets charm and balance.",
      "Libra smooths social edges; Aries makes choices when Libra hesitates.",
      "When aligned, you become a dynamic team in public and private."
    ],
    negative: [
      "Indecision vs urgency can create daily friction.",
      "Libra avoids conflict; Aries confronts it—timing must be negotiated.",
      "People-pleasing vs blunt honesty can erode trust if unmanaged."
    ]
  },
  "aries-scorpio": {
    positive: [
      "Powerful attraction and deep focus when loyalty is established.",
      "Both signs respect courage; you push each other to be honest and strong.",
      "Shared intensity can create a transformative bond."
    ],
    negative: [
      "Control battles: both want influence, but in different ways.",
      "Jealousy or suspicion escalates quickly if transparency is lacking.",
      "Conflict can become all-or-nothing instead of solution-focused."
    ]
  },
  "aries-sagittarius": {
    positive: [
      "Adventure-minded pairing: energy, optimism, and momentum flow easily.",
      "Shared independence keeps the relationship fresh and motivating.",
      "You’re strong allies when chasing a vision or goal."
    ],
    negative: [
      "Follow-through can slip if excitement replaces planning.",
      "Truth vs tact: blunt honesty can create avoidable conflict.",
      "Restlessness rises when routines feel restrictive."
    ]
  },
  "aries-capricorn": {
    positive: [
      "Aries sparks action; Capricorn builds strategy. Great for long-term achievement.",
      "Mutual respect grows when effort is consistent and measurable.",
      "This pairing can balance passion with discipline."
    ],
    negative: [
      "Capricorn may see Aries as impulsive; Aries may see Capricorn as rigid.",
      "Power dynamics appear around control, responsibilities, and timing.",
      "Emotional expression can be mismatched without deliberate check-ins."
    ]
  },
  "aries-aquarius": {
    positive: [
      "Innovation + action: Aquarius imagines the future, Aries moves fast to test it.",
      "Friendship energy is strong; you motivate each other to stay bold.",
      "Independence is respected, reducing clinginess."
    ],
    negative: [
      "Aries wants immediacy; Aquarius wants autonomy and space.",
      "Detachment vs intensity can trigger insecurity on both sides.",
      "Plans change quickly; alignment must be re-confirmed often."
    ]
  },
  "aries-pisces": {
    positive: [
      "Aries provides direction; Pisces provides empathy and imagination.",
      "When safe, Pisces softens Aries and Aries strengthens Pisces confidence.",
      "Creativity and romance can feel magical in the best moments."
    ],
    negative: [
      "Sensitivity vs directness can create repeated misunderstandings.",
      "Pisces may avoid confrontation; Aries may push too hard for answers.",
      "Boundaries are required to prevent emotional overwhelm."
    ]
  },

  // TAURUS (unique pairs continuing)
  "taurus-gemini": {
    positive: [
      "Taurus offers steadiness; Gemini brings curiosity and variety.",
      "When routines include novelty, the relationship stays warm and engaged.",
      "You can learn each other’s strengths: comfort plus adaptability."
    ],
    negative: [
      "Gemini may feel restricted; Taurus may feel destabilized.",
      "Communication can become repetitive if needs aren’t made specific.",
      "Stubbornness vs inconsistency creates trust issues over time."
    ]
  },
  "taurus-cancer": {
    positive: [
      "High emotional safety: loyalty, care, and comfort come naturally.",
      "Shared desire for security supports long-term bonding.",
      "You tend to protect the relationship rather than gamble with it."
    ],
    negative: [
      "Moodiness plus stubbornness can create slow, lingering tension.",
      "Over-attachment may limit growth if independence isn’t respected.",
      "Avoiding hard conversations can lead to passive resentment."
    ]
  },
  "taurus-leo": {
    positive: [
      "Warmth and loyalty: Leo brings sparkle, Taurus brings stability.",
      "Physical affection and consistency can create deep trust.",
      "You can build a beautiful life if appreciation stays mutual."
    ],
    negative: [
      "Leo wants recognition; Taurus wants peace—different validation needs.",
      "Stubborn pride vs stubborn routine can create long stand-offs.",
      "Spending, lifestyle, and priorities must be aligned explicitly."
    ]
  },
  "taurus-virgo": {
    positive: [
      "Practical compatibility: shared values, routines, and reliability.",
      "Strong potential for building stability in work and home life.",
      "Trust grows through consistency and small daily care."
    ],
    negative: [
      "Over-focusing on imperfections can drain warmth.",
      "Change is slow; growth needs intentional momentum.",
      "Silence can replace emotional expression if not practiced."
    ]
  },
  "taurus-libra": {
    positive: [
      "Harmony and comfort: Libra brings grace, Taurus brings steadiness.",
      "Shared appreciation for beauty and quality strengthens bonding.",
      "Conflict can be resolved smoothly when both stay honest."
    ],
    negative: [
      "Libra may avoid decisions; Taurus may dig in once decided.",
      "People-pleasing can mask real needs until they erupt.",
      "Romance fades if effort becomes routine without intention."
    ]
  },
  "taurus-scorpio": {
    positive: [
      "Deep loyalty and strong emotional/physical magnetism.",
      "Both value commitment; trust can become unshakable with time.",
      "Shared resilience helps you survive challenges together."
    ],
    negative: [
      "Possessiveness and control patterns must be managed early.",
      "Fixed opinions can turn conflict into a stalemate.",
      "Secrets or tests damage trust faster than in most pairings."
    ]
  },
  "taurus-sagittarius": {
    positive: [
      "Taurus grounds Sagittarius; Sagittarius expands Taurus’ world.",
      "A stable base can support adventure when planned well.",
      "You can balance comfort and growth with clear agreements."
    ],
    negative: [
      "Freedom needs vs security needs can collide repeatedly.",
      "Sagittarius may feel limited; Taurus may feel unsafe.",
      "Different money and lifestyle rhythms require negotiation."
    ]
  },
  "taurus-capricorn": {
    positive: [
      "Excellent long-term builder pairing: stability, loyalty, discipline.",
      "Shared respect for effort creates a durable bond.",
      "Practical teamwork is a major strength."
    ],
    negative: [
      "Emotional softness can be neglected in favor of tasks and goals.",
      "Rigid routines can reduce spontaneity and intimacy.",
      "Work stress can spill into the relationship if boundaries are weak."
    ]
  },
  "taurus-aquarius": {
    positive: [
      "Taurus provides grounding; Aquarius provides innovation and perspective.",
      "You can modernize traditions without losing stability.",
      "Friendship and respect can be strong if space is honored."
    ],
    negative: [
      "Taurus wants predictability; Aquarius wants freedom and change.",
      "Emotional needs may be expressed in incompatible ways.",
      "Stubbornness appears as ‘principles’ on both sides."
    ]
  },
  "taurus-pisces": {
    positive: [
      "Gentle, supportive bond with strong emotional comfort.",
      "Taurus stabilizes Pisces; Pisces softens Taurus’ guarded side.",
      "Romance can feel timeless when boundaries are healthy."
    ],
    negative: [
      "Escapism vs realism can create misunderstandings about responsibility.",
      "Unspoken needs accumulate into disappointment.",
      "Over-giving may lead to imbalance and quiet resentment."
    ]
  },

  // GEMINI
  "gemini-cancer": {
    positive: [
      "Gemini brings lightness; Cancer brings emotional depth and care.",
      "You can create a playful-but-safe dynamic with clear communication.",
      "Curiosity helps Cancer open up; tenderness helps Gemini slow down."
    ],
    negative: [
      "Cancer may feel unheard; Gemini may feel emotionally constrained.",
      "Different processing speed: feelings take time, ideas move fast.",
      "Conflict escalates when reassurance is replaced by logic."
    ]
  },
  "gemini-leo": {
    positive: [
      "High social compatibility: fun, creativity, and shared excitement.",
      "Leo adds confidence; Gemini adds wit and variety.",
      "You tend to bounce back quickly after small conflicts."
    ],
    negative: [
      "Attention needs can clash: Leo wants devotion, Gemini wants options.",
      "Drama grows if communication becomes teasing instead of honest.",
      "Plans can remain superficial unless you commit to depth."
    ]
  },
  "gemini-virgo": {
    positive: [
      "Strong mental synergy: ideas plus analysis can be powerful.",
      "Virgo gives structure; Gemini provides speed and adaptability.",
      "Great pairing for learning, projects, and problem-solving."
    ],
    negative: [
      "Virgo can judge Gemini as scattered; Gemini can feel micromanaged.",
      "Overthinking leads to indecision and repeated debates.",
      "Emotional expression may be minimized instead of integrated."
    ]
  },
  "gemini-libra": {
    positive: [
      "Excellent conversation flow and social harmony.",
      "Shared curiosity makes the relationship feel light and engaging.",
      "You collaborate well when making plans and navigating people."
    ],
    negative: [
      "Indecision can stall progress; too many options weaken commitment.",
      "Avoiding conflict creates polite distance instead of resolution.",
      "Depth requires deliberate choice, not just chemistry."
    ]
  },
  "gemini-scorpio": {
    positive: [
      "Intrigue is strong: Gemini is curious, Scorpio is deep and magnetic.",
      "You can teach each other: honesty, focus, and psychological insight.",
      "When trust is built, the bond becomes surprisingly loyal."
    ],
    negative: [
      "Scorpio may see Gemini as inconsistent; Gemini may feel controlled.",
      "Secrets, tests, or mind games destroy safety fast.",
      "Different intimacy speeds require patience and transparency."
    ]
  },
  "gemini-sagittarius": {
    positive: [
      "Shared love of exploration, learning, and movement.",
      "The relationship stays lively with humor and adventure.",
      "You motivate each other to grow beyond comfort zones."
    ],
    negative: [
      "Commitment may feel optional unless values are clarified.",
      "Truth can be blunt; sarcasm can become a defense mechanism.",
      "Follow-through suffers if everything stays ‘potential’."
    ]
  },
  "gemini-capricorn": {
    positive: [
      "Capricorn provides direction; Gemini provides flexibility and ideas.",
      "You can balance strategy with adaptability when aligned.",
      "Clear goals create strong teamwork."
    ],
    negative: [
      "Capricorn may feel Gemini is unfocused; Gemini may feel restricted.",
      "Communication becomes transactional without emotional investment.",
      "Different priorities (fun vs duty) must be reconciled."
    ]
  },
  "gemini-aquarius": {
    positive: [
      "High mental compatibility: innovation, conversation, and shared curiosity.",
      "Friendship base is strong, reducing unnecessary drama.",
      "You energize each other’s ideas and creativity."
    ],
    negative: [
      "Too much detachment: emotions can be intellectualized away.",
      "Plans multiply; execution can lag without structure.",
      "Inconsistency appears as ‘freedom’ unless agreements are clear."
    ]
  },
  "gemini-pisces": {
    positive: [
      "Imagination and curiosity create a dreamy, creative bond.",
      "Gemini can help Pisces articulate feelings; Pisces adds empathy to logic.",
      "Romance improves when communication stays gentle."
    ],
    negative: [
      "Mixed signals: Pisces feels deeply; Gemini changes tone quickly.",
      "Avoidance of conflict leads to confusion rather than clarity.",
      "Boundaries must be explicit to prevent emotional drift."
    ]
  },

  // CANCER
  "cancer-leo": {
    positive: [
      "Leo brings warmth and protection; Cancer brings devotion and care.",
      "Strong family/home potential when emotional safety is prioritized.",
      "Loyalty grows quickly when appreciation is consistent."
    ],
    negative: [
      "Leo intensity can feel overwhelming; Cancer sensitivity can feel heavy.",
      "Pride blocks repair if feelings are dismissed or dramatized.",
      "Needs must be voiced directly to avoid silent resentment."
    ]
  },
  "cancer-virgo": {
    positive: [
      "Reliable care: Virgo helps practically; Cancer supports emotionally.",
      "You build trust through routines, responsibility, and small gestures.",
      "A calm, healing bond is possible with steady communication."
    ],
    negative: [
      "Virgo may rationalize feelings; Cancer may take critique personally.",
      "Over-worrying increases anxiety for both.",
      "Emotional expression can become cautious instead of open."
    ]
  },
  "cancer-libra": {
    positive: [
      "Libra brings balance; Cancer brings emotional commitment.",
      "Conflict can be handled gently when honesty is maintained.",
      "Shared desire for harmony supports long-term bonding."
    ],
    negative: [
      "Libra avoids direct discomfort; Cancer needs emotional clarity.",
      "Indecision creates insecurity if plans are always postponed.",
      "People-pleasing can replace real intimacy."
    ]
  },
  "cancer-scorpio": {
    positive: [
      "Deep emotional resonance and powerful loyalty.",
      "Strong intimacy potential when trust is protected.",
      "You understand each other’s need for safety and truth."
    ],
    negative: [
      "Emotional intensity can become consuming without boundaries.",
      "Control patterns appear when fear replaces trust.",
      "Withdrawal or secrecy damages the bond quickly."
    ]
  },
  "cancer-sagittarius": {
    positive: [
      "Cancer offers emotional anchoring; Sagittarius offers perspective and hope.",
      "A supportive bond forms when reassurance and freedom coexist.",
      "You can help each other grow beyond comfort zones."
    ],
    negative: [
      "Cancer may feel abandoned; Sagittarius may feel smothered.",
      "Different conflict processing: emotional depth vs quick reframing.",
      "Consistency must be negotiated, not assumed."
    ]
  },
  "cancer-capricorn": {
    positive: [
      "Classic complementary pairing: care plus structure.",
      "Capricorn provides stability; Cancer provides warmth and loyalty.",
      "Excellent long-term potential when roles and needs are clear."
    ],
    negative: [
      "Emotional expression can feel mismatched: tenderness vs restraint.",
      "Work/pressure can replace intimacy without deliberate attention.",
      "Resentment grows if support feels one-sided."
    ]
  },
  "cancer-aquarius": {
    positive: [
      "Cancer brings sincerity; Aquarius brings perspective and originality.",
      "You can create a unique bond rooted in friendship and respect.",
      "Growth happens when you learn each other’s emotional language."
    ],
    negative: [
      "Aquarius distance can trigger Cancer insecurity.",
      "Cancer emotional waves can feel confusing to Aquarius.",
      "Boundaries and communication must be explicit and consistent."
    ]
  },
  "cancer-pisces": {
    positive: [
      "High empathy and emotional attunement—easy to feel understood.",
      "Romance, creativity, and care are naturally strong here.",
      "A safe, supportive emotional home can be built together."
    ],
    negative: [
      "Over-merging: boundaries blur and needs become hard to separate.",
      "Avoidance of reality can create practical stress over time.",
      "Mood loops form if neither grounds the relationship."
    ]
  },

  // LEO
  "leo-virgo": {
    positive: [
      "Leo inspires confidence; Virgo refines and improves outcomes.",
      "You can balance big vision with practical execution.",
      "Mutual respect grows when appreciation is spoken clearly."
    ],
    negative: [
      "Virgo critique can hurt Leo pride; Leo drama can exhaust Virgo.",
      "Different love languages: praise vs acts of service.",
      "Control appears when validation is withheld."
    ]
  },
  "leo-libra": {
    positive: [
      "High charm pairing: romance, social ease, and shared style.",
      "Libra smooths tension; Leo brings warmth and clarity.",
      "You can build a strong public-and-private partnership."
    ],
    negative: [
      "Avoiding conflict leads to surface harmony and hidden distance.",
      "Indecision frustrates Leo; intensity overwhelms Libra.",
      "Attention needs must be mutually managed."
    ]
  },
  "leo-scorpio": {
    positive: [
      "Strong magnetism: both are loyal when trust is earned.",
      "You push each other toward depth and authenticity.",
      "Powerful teamwork is possible when respect is mutual."
    ],
    negative: [
      "Power games: pride vs control can become a cycle.",
      "Jealousy and secrecy undermine safety quickly.",
      "Conflict becomes personal unless boundaries are firm."
    ]
  },
  "leo-sagittarius": {
    positive: [
      "Optimistic, energetic bond with shared enthusiasm for life.",
      "You amplify each other’s confidence and courage.",
      "Adventure and loyalty can coexist naturally here."
    ],
    negative: [
      "Overconfidence leads to risk-taking and overpromising.",
      "Commitment needs clarity: freedom vs devotion.",
      "Ignoring emotional nuance creates avoidable conflict."
    ]
  },
  "leo-capricorn": {
    positive: [
      "Leo brings visibility; Capricorn brings strategy and endurance.",
      "You can build a respected partnership with clear goals.",
      "Mutual admiration grows when effort is acknowledged."
    ],
    negative: [
      "Capricorn may feel Leo is theatrical; Leo may feel Capricorn is cold.",
      "Different priorities: status/joy vs responsibility/control.",
      "Affection can become conditional if not addressed."
    ]
  },
  "leo-aquarius": {
    positive: [
      "Opposites attract: Leo warmth meets Aquarius originality.",
      "Strong friendship energy supports long-term resilience.",
      "You stimulate each other mentally and creatively."
    ],
    negative: [
      "Leo wants closeness; Aquarius wants space—timing must be negotiated.",
      "Detachment triggers pride and defensiveness.",
      "Rebellion vs recognition can become a repeating argument."
    ]
  },
  "leo-pisces": {
    positive: [
      "Leo offers confidence; Pisces offers tenderness and imagination.",
      "Romance and creativity can feel cinematic when aligned.",
      "You can balance boldness with compassion."
    ],
    negative: [
      "Pisces sensitivity can feel overwhelmed; Leo may feel under-appreciated.",
      "Emotional ambiguity creates misunderstandings.",
      "Boundaries and reassurance must be consistent."
    ]
  },

  // VIRGO
  "virgo-libra": {
    positive: [
      "Virgo provides clarity; Libra provides harmony and social intelligence.",
      "You can solve problems without burning the bridge.",
      "Shared values improve when decisions are made intentionally."
    ],
    negative: [
      "Perfectionism clashes with indecision.",
      "Libra can feel judged; Virgo can feel things are never finalized.",
      "Emotions get negotiated instead of expressed."
    ]
  },
  "virgo-scorpio": {
    positive: [
      "High loyalty potential: Virgo stabilizes, Scorpio deepens.",
      "You can build strong trust through honesty and consistency.",
      "Great for long-term improvement and meaningful goals."
    ],
    negative: [
      "Control and critique become a pressure cooker under stress.",
      "Privacy vs analysis can create suspicion.",
      "Conflict may turn into silent punishment instead of repair."
    ]
  },
  "virgo-sagittarius": {
    positive: [
      "Virgo grounds Sagittarius; Sagittarius expands Virgo’s horizons.",
      "You can blend detail with vision when aligned.",
      "Growth happens through shared learning and honest feedback."
    ],
    negative: [
      "Sagittarius may feel constrained; Virgo may feel life is too chaotic.",
      "Different risk tolerance creates repeated debates.",
      "Blunt truth vs sensitivity can cause avoidable friction."
    ]
  },
  "virgo-capricorn": {
    positive: [
      "One of the strongest builder pairings: discipline, loyalty, execution.",
      "Shared respect for competence creates a stable bond.",
      "You support each other through consistency and practical care."
    ],
    negative: [
      "Work and goals can replace tenderness if not prioritized.",
      "Rigidity grows when stress is high.",
      "Emotional needs may be minimized or postponed."
    ]
  },
  "virgo-aquarius": {
    positive: [
      "Virgo structures ideas; Aquarius innovates and challenges assumptions.",
      "You can improve systems and build smarter routines together.",
      "Friendship and respect can anchor the differences."
    ],
    negative: [
      "Virgo needs predictability; Aquarius resists constraints.",
      "Critique vs detachment becomes a recurring cycle.",
      "Emotions may be treated like a problem to solve, not a bond to feel."
    ]
  },
  "virgo-pisces": {
    positive: [
      "Complementary: Virgo grounds; Pisces softens and inspires.",
      "Healing dynamic possible with compassion and practical support.",
      "You can create both structure and emotional meaning together."
    ],
    negative: [
      "Virgo may see Pisces as vague; Pisces may feel criticized.",
      "Boundaries blur and routines slip without clear agreements.",
      "Over-sacrifice creates imbalance and burnout."
    ]
  },

  // LIBRA
  "libra-scorpio": {
    positive: [
      "Libra brings diplomacy; Scorpio brings depth and loyalty.",
      "You can create a refined, intimate bond when trust is protected.",
      "Both value commitment, though they express it differently."
    ],
    negative: [
      "Scorpio intensity can feel controlling; Libra avoidance can feel dishonest.",
      "Jealousy grows when boundaries aren’t explicit.",
      "Conflict resolution fails if issues are smoothed over instead of faced."
    ]
  },
  "libra-sagittarius": {
    positive: [
      "Social ease and shared curiosity keep the relationship upbeat.",
      "Libra refines; Sagittarius expands—great for travel and growth.",
      "You can stay optimistic while still being fair."
    ],
    negative: [
      "Commitment clarity is essential—both can keep options open.",
      "Hard conversations may be delayed for comfort.",
      "Promises must be realistic to prevent disappointment."
    ]
  },
  "libra-capricorn": {
    positive: [
      "Capricorn offers stability; Libra offers harmony and partnership skills.",
      "You can build strong agreements and long-term plans together.",
      "Respect grows through consistency and fairness."
    ],
    negative: [
      "Capricorn can feel too serious; Libra can feel too indecisive.",
      "Affection may become conditional on performance or peacekeeping.",
      "Different social needs require negotiation."
    ]
  },
  "libra-aquarius": {
    positive: [
      "Strong mental compatibility and shared values around fairness and ideas.",
      "Friendship base makes conflict less dramatic.",
      "You collaborate well in communities and shared projects."
    ],
    negative: [
      "Detachment can replace intimacy unless you choose emotional presence.",
      "Too much analysis leads to decision paralysis.",
      "Avoiding discomfort creates emotional distance over time."
    ]
  },
  "libra-pisces": {
    positive: [
      "Gentle romantic energy: empathy, beauty, and emotional softness.",
      "Libra gives structure to feelings; Pisces adds compassion to choices.",
      "Strong potential for creative bonding."
    ],
    negative: [
      "Boundaries blur if both avoid conflict.",
      "People-pleasing leads to unmet needs and quiet resentment.",
      "Reality checks are required to keep plans grounded."
    ]
  },

  // SCORPIO
  "scorpio-sagittarius": {
    positive: [
      "Scorpio adds depth; Sagittarius adds perspective and momentum.",
      "Truth-seeking is shared, even if the style differs.",
      "You can grow fast when honesty is respected."
    ],
    negative: [
      "Freedom vs intensity: Sagittarius resists control; Scorpio demands loyalty.",
      "Arguments escalate when bluntness hits sensitivity.",
      "Trust breaks if promises are vague or inconsistent."
    ]
  },
  "scorpio-capricorn": {
    positive: [
      "Highly capable pairing: ambition, loyalty, and focus are strong.",
      "Mutual respect builds through consistent effort and truth.",
      "You can create a powerful long-term alliance."
    ],
    negative: [
      "Emotions can be buried until they erupt under pressure.",
      "Control dynamics appear around decision-making and vulnerability.",
      "Forgiveness must be practiced; grudges corrode trust."
    ]
  },
  "scorpio-aquarius": {
    positive: [
      "Unique bond: Scorpio intensity meets Aquarius originality and vision.",
      "Strong transformation potential when both stay honest.",
      "Friendship plus passion can be a powerful mix."
    ],
    negative: [
      "Detachment triggers suspicion; intensity triggers defensiveness.",
      "Power struggles form if control becomes a substitute for trust.",
      "Emotional language must be learned deliberately."
    ]
  },
  "scorpio-pisces": {
    positive: [
      "Deep emotional and intuitive connection; loyalty grows fast.",
      "Strong healing potential through empathy and honesty.",
      "Intimacy can feel profound when boundaries are respected."
    ],
    negative: [
      "Over-merging and emotional flooding without grounding.",
      "Avoidance of reality creates practical stress and confusion.",
      "Secrets or passive behavior quickly destabilize trust."
    ]
  },

  // SAGITTARIUS
  "sagittarius-capricorn": {
    positive: [
      "Sagittarius brings vision; Capricorn brings structure and execution.",
      "You can create real progress when goals are shared.",
      "Mutual respect grows through consistency and honest expectations."
    ],
    negative: [
      "Sagittarius may feel constrained; Capricorn may feel things are too loose.",
      "Different definitions of success and freedom must be aligned.",
      "Emotional warmth can be neglected under ambition."
    ]
  },
  "sagittarius-aquarius": {
    positive: [
      "High compatibility in ideas, freedom, and future-oriented thinking.",
      "Friendship base is strong; the relationship feels spacious and energizing.",
      "You motivate each other to explore and evolve."
    ],
    negative: [
      "Commitment can stay theoretical unless you choose structure.",
      "Emotions may be minimized in favor of concepts and plans.",
      "Follow-through requires practical agreements."
    ]
  },
  "sagittarius-pisces": {
    positive: [
      "Sagittarius inspires Pisces; Pisces softens Sagittarius with empathy.",
      "Shared spirituality/meaning-making can deepen the bond.",
      "Romance feels adventurous when trust is stable."
    ],
    negative: [
      "Different coping styles: optimism vs escapism.",
      "Boundaries and clarity are required to prevent drift.",
      "Promises must match reality to avoid disappointment."
    ]
  },

  // CAPRICORN
  "capricorn-aquarius": {
    positive: [
      "Capricorn builds; Aquarius innovates. Strong potential for shared projects.",
      "Mutual respect grows through competence and integrity.",
      "You can modernize long-term goals without losing structure."
    ],
    negative: [
      "Capricorn may feel Aquarius is unpredictable; Aquarius may feel controlled.",
      "Emotional expression can be minimized unless intentionally practiced.",
      "Stubborn principles create deadlocks if neither bends."
    ]
  },
  "capricorn-pisces": {
    positive: [
      "Capricorn provides safety and structure; Pisces provides compassion and meaning.",
      "A supportive long-term bond forms when needs are voiced clearly.",
      "You can balance realism with intuition effectively."
    ],
    negative: [
      "Pisces may feel judged; Capricorn may feel burdened by emotional ambiguity.",
      "Boundaries around responsibility must be explicit.",
      "Avoidance of difficult topics leads to slow erosion of trust."
    ]
  },

  // AQUARIUS
  "aquarius-pisces": {
    positive: [
      "Imagination + innovation: a creative, future-leaning connection.",
      "Friendship and compassion can coexist when communication is gentle.",
      "You can inspire each other to dream bigger and live truer."
    ],
    negative: [
      "Aquarius detachment can confuse Pisces; Pisces sensitivity can overwhelm Aquarius.",
      "Mixed signals appear if boundaries and expectations are vague.",
      "Practical follow-through must be intentionally built."
    ]
  }
};

// Mirror to both directions so UI can access with `${signA}-${signB}` without sorting.
const compatibilityDynamics = {};

Object.entries(baseTraits).forEach(([key, value]) => {
  const [a, b] = key.split("-");
  compatibilityDynamics[`${a}-${b}`] = value;
  compatibilityDynamics[`${b}-${a}`] = value;
});

export default compatibilityDynamics;
