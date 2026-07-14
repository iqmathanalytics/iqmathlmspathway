import type { TopicQuiz } from "@/lib/types";

export const mbaAiDay2Quizzes: Record<string, TopicQuiz> = {
  "mba-d2-t1": {
    topicId: "mba-d2-t1",
    title: "Quick check: Why external data matters",
    questions: [
      {
        id: "q1",
        question: "Sales look normal, but Google reviews say “no milk on Sunday.” What does this show?",
        options: [
          "Internal dashboards can miss important outside warnings",
          "Reviews are never useful",
          "The sales file must be deleted",
          "Competitors do not matter",
        ],
        correctIndex: 0,
        explanation:
          "Outside signals (reviews) can warn you before the sales number breaks.",
      },
      {
        id: "q2",
        question: "Which is an external signal?",
        options: [
          "Competitor’s public promo price",
          "Yesterday’s POS sales total",
          "Staff overtime from payroll",
          "Internal waste log",
        ],
        correctIndex: 0,
        explanation: "Competitor prices come from outside the company.",
      },
      {
        id: "q3",
        question: "An external signal is most useful when it has…",
        options: [
          "An owner who can change a decision",
          "Only a colourful chart",
          "No follow-up date",
          "Fake invented numbers",
        ],
        correctIndex: 0,
        explanation: "Owners turn signals into action.",
      },
    ],
  },
  "mba-d2-t2": {
    topicId: "mba-d2-t2",
    title: "Quick check: Internal vs external",
    questions: [
      {
        id: "q1",
        question: "Google reviews for a FreshBasket store are…",
        options: ["External", "Internal POS", "Payroll", "Purchase orders"],
        correctIndex: 0,
        explanation: "Public reviews are external.",
      },
      {
        id: "q2",
        question: "Loyalty / CRM purchase history is…",
        options: ["Internal", "Government news", "Competitor leaflet", "Public gossip only"],
        correctIndex: 0,
        explanation: "CRM data sits in company systems.",
      },
      {
        id: "q3",
        question: "Simple rule for classification:",
        options: [
          "Company system → Internal; customer/competitor/public → External",
          "Everything is internal",
          "Everything is external",
          "If it is a number, ignore owners",
        ],
        correctIndex: 0,
        explanation: "Source tells you Internal vs External.",
      },
    ],
  },
  "mba-d2-t3": {
    topicId: "mba-d2-t3",
    title: "Quick check: Data to decision",
    questions: [
      {
        id: "q1",
        question: "“Most evening reviews at Store X mention queues” is…",
        options: ["Information", "A finished decision", "Useless noise", "A law"],
        correctIndex: 0,
        explanation: "Organised facts are information.",
      },
      {
        id: "q2",
        question: "A good decision line should include…",
        options: [
          "An owner and a time window",
          "Only a buzzword",
          "No owner",
          "Invented market share",
        ],
        correctIndex: 0,
        explanation: "Decisions need ownership and timing.",
      },
      {
        id: "q3",
        question: "Correct order is…",
        options: [
          "Data → Information → Insight → Decision",
          "Decision → Data → Ignore insight",
          "Insight only, skip facts",
          "News → Fire staff immediately",
        ],
        correctIndex: 0,
        explanation: "Keep the chain in order.",
      },
    ],
  },

  "mba-d2-t4": {
    topicId: "mba-d2-t4",
    title: "Quick check: Market intelligence brief",
    questions: [
      {
        id: "q1",
        question: "A strong market intelligence brief mainly delivers…",
        options: [
          "A collection plan with sources, owners, and decisions unlocked",
          "A vague trends essay with no owners",
          "Invented survey percentages as fact",
          "A demand to skip competitors",
        ],
        correctIndex: 0,
        explanation: "Briefs succeed when they tell teams what to collect and why.",
      },
      {
        id: "q2",
        question: "Why run weak and strong prompts in separate chats?",
        options: [
          "So weak-chat memory does not bias the strong run",
          "Because AI only works once a week",
          "To delete Excel",
          "Strong prompts must be handwritten only",
        ],
        correctIndex: 0,
        explanation: "Prior weak answers can stick in context.",
      },
      {
        id: "q3",
        question: "Transferring the Samsung method to FreshBasket means…",
        options: [
          "Keep the collection discipline; change the business nouns",
          "Copy phone-specs into grocery forever",
          "Ignore competitors in grocery",
          "Skip ownership rows",
        ],
        correctIndex: 0,
        explanation: "Same brief structure, different category context.",
      },
    ],
  },
  "mba-d2-t5": {
    topicId: "mba-d2-t5",
    title: "Quick check: Competitor intelligence",
    questions: [
      {
        id: "q1",
        question: "Competitor intelligence should compare…",
        options: [
          "Price, offers, ratings, and delivery/availability promise",
          "Only logo colours",
          "Only CEO LinkedIn posts",
          "Nothing quantitative",
        ],
        correctIndex: 0,
        explanation: "Commercial comparison needs those dimensions.",
      },
      {
        id: "q2",
        question: "Before asking AI for rival insights you should…",
        options: [
          "Open the competitor price sheet and understand the columns",
          "Let AI invent all prices first",
          "Delete FreshBasket rows",
          "Ignore offer_flag",
        ],
        correctIndex: 0,
        explanation: "Ground AI in the sample file.",
      },
      {
        id: "q3",
        question: "A safe NOT-YET on pricing often includes…",
        options: [
          "No across-the-board permanent price cut without evidence",
          "Always cut 20% tomorrow",
          "Never review offers",
          "Ignore SWOT entirely",
        ],
        correctIndex: 0,
        explanation: "Avoid panic price wars.",
      },
    ],
  },
  "mba-d2-t6": {
    topicId: "mba-d2-t6",
    title: "Quick check: Review intelligence",
    questions: [
      {
        id: "q1",
        question: "Repeated queue complaints should route mainly to…",
        options: [
          "Store Ops / staffing owners",
          "Only the logo designer",
          "Tax filing",
          "Ignore them forever",
        ],
        correctIndex: 0,
        explanation: "Queues are an operations/staffing issue.",
      },
      {
        id: "q2",
        question: "“Promo not applied at till” is primarily a…",
        options: [
          "Promo trust / Marketing + Store Ops signal",
          "Weather signal",
          "Payroll-only signal",
          "Supplier container signal",
        ],
        correctIndex: 0,
        explanation: "Offer clarity failures damage trust and need Marketing/Ops.",
      },
      {
        id: "q3",
        question: "One angry review alone is…",
        options: [
          "An anecdote — look for repeated themes before major spend",
          "Automatic proof to rebuild the brand app",
          "Reason to fire Finance",
          "Better than all sales data forever",
        ],
        correctIndex: 0,
        explanation: "Themes beat single anecdotes.",
      },
    ],
  },
  "mba-d2-t7": {
    topicId: "mba-d2-t7",
    title: "Quick check: Sentiment insights",
    questions: [
      {
        id: "q1",
        question: "In this program, sentiment analysis is best framed as…",
        options: [
          "Customer emotion analysis for business action",
          "Only academic NLP equations",
          "A reason to ignore owners",
          "Automatic proof to cut all prices",
        ],
        correctIndex: 0,
        explanation: "Managers need emotion → cause → action language.",
      },
      {
        id: "q2",
        question: "A satisfaction report should end with…",
        options: [
          "Owned actions, KPIs, and a NOT-YET list",
          "Only emojis",
          "Invented review quotes",
          "No root-cause section ever",
        ],
        correctIndex: 0,
        explanation: "Reports must drive decisions.",
      },
      {
        id: "q3",
        question: "Neutral reviews are…",
        options: [
          "Useful context, usually not an emergency",
          "Always worse than negative reviews",
          "Proof to fire Finance",
          "Useless always",
        ],
        correctIndex: 0,
        explanation: "Neutral is signal, not crisis by default.",
      },
    ],
  },
  "mba-d2-t8": {
    topicId: "mba-d2-t8",
    title: "Quick check: News intelligence",
    questions: [
      {
        id: "q1",
        question: "A CEO news brief should translate headlines into…",
        options: [
          "Risks, opportunities, owners, and recommended tests",
          "Only interesting gossip",
          "Fake financial tables",
          "A demand to skip FreshBasket context",
        ],
        correctIndex: 0,
        explanation: "News becomes intelligence when actionable.",
      },
      {
        id: "q2",
        question: "Industry trend bullets should…",
        options: [
          "Cite headline ids or be labelled Assumption",
          "Never show sources",
          "Always invent precise market shares",
          "Ignore competitors",
        ],
        correctIndex: 0,
        explanation: "Evidence discipline prevents hallucination.",
      },
      {
        id: "q3",
        question: "A dark-store expansion headline near your cluster mainly signals…",
        options: [
          "Competitive catchment pressure worth a 30-day decision chain",
          "Nothing for grocery retail",
          "Automatic permanent 20% price cuts only",
          "Delete all reviews",
        ],
        correctIndex: 0,
        explanation: "Entry threats need structured response options.",
      },
    ],
  },
  "mba-d2-t9": {
    topicId: "mba-d2-t9",
    title: "Quick check: Market intelligence pack",
    questions: [
      {
        id: "q1",
        question: "The Day 2 final pack should integrate…",
        options: [
          "Competitor prices, reviews, and news into one CEO deliverable",
          "Only logo redesign ideas",
          "Only unrelated sports news",
          "Python syntax rules only",
        ],
        correctIndex: 0,
        explanation: "Integration is the consulting skill.",
      },
      {
        id: "q2",
        question: "If AI invents a number not in the files…",
        options: [
          "Reject it and stick to file-supported claims",
          "Present it confidently to the CEO",
          "Delete the competitor sheet",
          "Skip the NOT-YET list forever",
        ],
        correctIndex: 0,
        explanation: "Verification beats speed.",
      },
      {
        id: "q3",
        question: "A strong closing recommendation set includes…",
        options: [
          "A few owned actions plus a NOT-YET list and a red-team pass",
          "Twenty vague ideas with no owners",
          "Only a vision poem",
          "No executive summary",
        ],
        correctIndex: 0,
        explanation: "Owned, restrained, stress-tested advice wins.",
      },
    ],
  },
};

