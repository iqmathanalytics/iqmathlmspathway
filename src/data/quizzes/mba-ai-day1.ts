import type { TopicQuiz } from "@/lib/types";

export const mbaAiDay1Quizzes: Record<string, TopicQuiz> = {
  "mba-d1-h1-t1": {
    topicId: "mba-d1-h1-t1",
    title: "Quick check: Program roadmap & kickoff labs",
    questions: [
      {
        id: "q1",
        question: "In this program, Generative AI should be treated mainly as…",
        options: [
          "The final decision maker with no human review",
          "A junior consultant while you remain the engagement manager",
          "A replacement for finance controls and audits",
          "Only a drawing tool for logos",
        ],
        correctIndex: 1,
        explanation:
          "AI accelerates analysis and drafting; you own judgment and recommendations.",
      },
      {
        id: "q2",
        question: "Which sequence correctly matches the 4-day journey?",
        options: [
          "Agents → Coding syntax → Tax filing → Hardware",
          "Foundations → Market Intelligence → Enterprise Knowledge → Agentic AI",
          "Only Market Intelligence for all four days",
          "Day 1 capstone, then three days of rest",
        ],
        correctIndex: 1,
        explanation:
          "Day 1 foundations, Day 2 market intelligence, Day 3 enterprise knowledge/RAG mindset, Day 4 agentic AI + capstone.",
      },
      {
        id: "q3",
        question: "Why create “AI Lab Notes” on Day 1 Topic 1?",
        options: [
          "Because AI outputs are useless forever",
          "To capture prompts/outputs as a reusable portfolio across all four days",
          "Only for printing a certificate",
          "It replaces attendance",
        ],
        correctIndex: 1,
        explanation:
          "Lab Notes become your evidence trail and make later projects faster.",
      },
      {
        id: "q4",
        question: "FreshBasket SuperMarket is introduced early so that…",
        options: [
          "Only to memorise a fictional brand for fun",
          "One retail story can carry analytics, prompting, and data labs consistently",
          "So you avoid all business examples",
          "Finance concepts are never discussed",
        ],
        correctIndex: 1,
        explanation:
          "A single running case (declining sales) makes Day 1 concepts stick across topics.",
      },
    ],
  },
  "mba-d1-h1-t2": {
    topicId: "mba-d1-h1-t2",
    title: "Quick check: What is Business Analytics?",
    questions: [
      {
        id: "q1",
        question: "Analytics creates the most organisational value when…",
        options: [
          "Charts look colourful",
          "A managerial decision changes because of the evidence",
          "Every employee receives a longer PDF",
          "AI writes the longest possible paragraph",
        ],
        correctIndex: 1,
        explanation:
          "Value appears when decisions improve — not when slides multiply.",
      },
      {
        id: "q2",
        question: "Which best captures BI vs BA?",
        options: [
          "BI = why/what next/what to do; BA = only historical dashboards",
          "BI monitors what happened; BA investigates causes, outlook, and actions",
          "They are identical and interchangeable labels",
          "BA replaces all human managers automatically",
        ],
        correctIndex: 1,
        explanation:
          "BI emphasises reporting/monitoring; BA emphasises explanation, prediction, and recommended action.",
      },
      {
        id: "q3",
        question: "The correct analytics value chain is…",
        options: [
          "Decision → Insight → Data → Information",
          "Data → Information → Insight → Decision",
          "Insight → Data → Decision → Information",
          "Information → Decision → Data → Insight",
        ],
        correctIndex: 1,
        explanation:
          "Raw data becomes organised information, then insight, then an owned decision.",
      },
      {
        id: "q4",
        question: "In this pathway, the Business Analyst’s role with Generative AI is to…",
        options: [
          "Accept every fluent AI claim without checking evidence",
          "Own problem framing and judgment while using AI to accelerate drafts",
          "Delete all dashboards permanently",
          "Only format fonts and colours",
        ],
        correctIndex: 1,
        explanation:
          "AI accelerates analysis drafts; BA still owns framing, verification, and recommendations.",
      },
    ],
  },
  "mba-d1-h1-t3": {
    topicId: "mba-d1-h1-t3",
    title: "Quick check: Four types of analytics",
    questions: [
      {
        id: "q1",
        question: "“Dairy sales fell 8% MoM; South stores weakest” is mainly…",
        options: ["Prescriptive", "Descriptive", "A legal opinion", "Deep learning training"],
        correctIndex: 1,
        explanation: "Summarising what happened is descriptive analytics.",
      },
      {
        id: "q2",
        question: "Testing whether Sunday stockouts caused the sales drop is mainly…",
        options: ["Descriptive reporting only", "Diagnostic analytics", "Logo redesign", "Payroll processing"],
        correctIndex: 1,
        explanation: "Explaining why something happened is diagnostic analytics.",
      },
      {
        id: "q3",
        question: "“If stockouts continue, dairy may fall another 5–7% next month” is mainly…",
        options: ["Prescriptive only", "Predictive (scenario/outlook)", "A warehouse blueprint", "HR policy drafting"],
        correctIndex: 1,
        explanation: "Estimating what might happen next is predictive analytics.",
      },
      {
        id: "q4",
        question: "“Restock Sundays; run a targeted weekend offer; review in 14 days” is mainly…",
        options: ["Descriptive", "Prescriptive", "A database backup", "A branding colour test"],
        correctIndex: 1,
        explanation: "Recommending owned actions is prescriptive analytics.",
      },
      {
        id: "q5",
        question: "Why is jumping straight to prescriptions risky?",
        options: [
          "Because actions never matter in business",
          "Because you may spend money without understanding what happened or why",
          "Because Excel cannot store numbers",
          "Because CEOs dislike recommendations",
        ],
        correctIndex: 1,
        explanation:
          "Responsible practice builds at least light descriptive + diagnostic evidence before acting.",
      },
    ],
  },
  "mba-d1-h1-t4": {
    topicId: "mba-d1-h1-t4",
    title: "Quick check: Analytics across functions",
    questions: [
      {
        id: "q1",
        question: "A strong departmental analytics question should always connect to…",
        options: [
          "A decision owner and a KPI",
          "A random hashtag",
          "Only the IT helpdesk password",
          "A stock ticker you follow for fun",
        ],
        correctIndex: 0,
        explanation:
          "Questions without owners and KPIs stall as slide decorations.",
      },
      {
        id: "q2",
        question: "When Marketing, Finance, and Supply Chain disagree on declining sales, BA should first…",
        options: [
          "Pick the loudest department",
          "Establish shared facts and a common scorecard before debating solutions",
          "Delete all data",
          "Ignore finance permanently",
        ],
        correctIndex: 1,
        explanation:
          "Shared facts stop teams from arguing about whose spreadsheet is “true.”",
      },
      {
        id: "q3",
        question: "Which is the best example of a Finance analytics question for FreshBasket?",
        options: [
          "Which wallpaper looks nicest in the cafe?",
          "Which categories destroy margin after discounts and wastage?",
          "What time do staff prefer pizza?",
          "Which font should the logo use?",
        ],
        correctIndex: 1,
        explanation:
          "Finance questions centre on profitability, cost, and margin trade-offs.",
      },
      {
        id: "q4",
        question: "A customer complaint about “items missing on Sunday shelves” should primarily route to…",
        options: [
          "Only the branding agency",
          "Operations / Supply Chain with Stores in support",
          "Only the legal department forever",
          "Nobody — ignore customers",
        ],
        correctIndex: 1,
        explanation:
          "Shelf availability is primarily an operations/supply and store execution issue.",
      },
      {
        id: "q5",
        question: "Why should recommendations include a “do not do yet” item in cross-functional plans?",
        options: [
          "To waste meeting time",
          "To force restraint and prevent unsafe shortcuts like blind cost cuts",
          "Because CEOs dislike all actions",
          "Because KPIs are unrelated to decisions",
        ],
        correctIndex: 1,
        explanation:
          "Naming paused actions protects the company from premature, high-harm moves.",
      },
    ],
  },
  "mba-d1-h1-t5": {
    topicId: "mba-d1-h1-t5",
    title: "Quick check: AI vocabulary for leaders",
    questions: [
      {
        id: "q1",
        question: "Machine Learning is best described for business leaders as…",
        options: [
          "Systems that learn patterns from historical data",
          "Only robots that walk in warehouses",
          "A type of printer ink",
          "A spreadsheet formula that never changes",
        ],
        correctIndex: 0,
        explanation:
          "ML learns patterns from data for tasks like forecasting or scoring.",
      },
      {
        id: "q2",
        question: "Detecting empty shelves from store camera images is closest to…",
        options: [
          "Only payroll processing",
          "A deep learning / computer-vision style use case",
          "A logo colour preference survey",
          "Income-tax filing",
        ],
        correctIndex: 1,
        explanation:
          "Image-heavy shelf checks are a classic deep-learning style business application.",
      },
      {
        id: "q3",
        question: "Large Language Models primarily power…",
        options: [
          "Only factory motors",
          "Text assistants that draft, summarise, and dialogue (like ChatGPT)",
          "Petrol pumps",
          "CCTV cables themselves",
        ],
        correctIndex: 1,
        explanation:
          "LLMs underpin generative text assistants used for drafting and summarising.",
      },
      {
        id: "q4",
        question: "A safe professional attitude toward Generative AI is…",
        options: [
          "Accept every fluent answer as audit-ready truth",
          "Treat outputs as drafts that need verification and judgment",
          "Ban all dashboards forever",
          "Replace all humans in payroll immediately",
        ],
        correctIndex: 1,
        explanation:
          "Fluency is not truth — managers must verify before acting.",
      },
      {
        id: "q5",
        question: "Before approving an AI pilot, a leader should clarify…",
        options: [
          "Only the logo redesign budget",
          "Decision improved, data owner, risk if wrong, and success KPI",
          "Whether employees like pizza",
          "Nothing — approve all AI ideas instantly",
        ],
        correctIndex: 1,
        explanation:
          "Sponsorship needs decision clarity, data ownership, risk thinking, and measurable success.",
      },
    ],
  },
  "mba-d1-h1-t6": {
    topicId: "mba-d1-h1-t6",
    title: "Quick check: AI roles in the enterprise",
    questions: [
      {
        id: "q1",
        question: "An AI HR Recruiter should still leave final hiring decisions to…",
        options: [
          "A random chatbot",
          "Human managers accountable for fairness",
          "Social media polls",
          "Coin flips",
        ],
        correctIndex: 1,
        explanation:
          "Sensitive HR outcomes require human accountability.",
      },
      {
        id: "q2",
        question: "Every useful AI role card should include…",
        options: [
          "Only the logo colour",
          "Goal, inputs, outputs, risks, human approval rule, and a KPI",
          "A list of office snacks",
          "Nothing — cards are optional decoration",
        ],
        correctIndex: 1,
        explanation:
          "Scoped AI roles need clear goals, inputs, outputs, risks, approvals, and success measures.",
      },
      {
        id: "q3",
        question: "An AI Financial Analyst is especially risky without human controls because…",
        options: [
          "Finance numbers can affect boards, audits, and compliance",
          "Finance is unrelated to business",
          "AI cannot write paragraphs",
          "Supermarkets do not use money",
        ],
        correctIndex: 0,
        explanation:
          "Financial outputs touch governance and compliance — humans must stay in the loop.",
      },
      {
        id: "q4",
        question: "When Marketing, Finance, and Ops AI drafts conflict, the human leader should…",
        options: [
          "Automatically accept the longest draft",
          "Establish shared facts, then sequence a plan that manages trade-offs",
          "Delete all three functions",
          "Ignore data forever",
        ],
        correctIndex: 1,
        explanation:
          "Humans resolve trade-offs; they do not rubber-stamp conflicting AI proposals.",
      },
      {
        id: "q5",
        question: "Which best matches the “AI junior / human manager” model?",
        options: [
          "AI makes irreversible decisions; humans only watch",
          "AI drafts and prepares options; humans set goals, verify, and own outcomes",
          "Humans must never use AI",
          "AI replaces the board of directors",
        ],
        correctIndex: 1,
        explanation:
          "AI amplifies work; humans retain goal-setting, verification, and accountability.",
      },
    ],
  },
  "mba-d1-h1-t7": {
    topicId: "mba-d1-h1-t7",
    title: "Quick check: AI as business analyst (live demo)",
    questions: [
      {
        id: "q1",
        question: "What typically improves when you upgrade from a weak to a strong business prompt?",
        options: [
          "Structure, hypotheses, evidence needs, ownership, and restraint",
          "Only font size",
          "The café Wi-Fi password",
          "Nothing — prompts never matter",
        ],
        correctIndex: 0,
        explanation:
          "Strong prompts force analytical structure rather than generic tips.",
      },
      {
        id: "q2",
        question: "Asking “what would you NOT do yet” helps because…",
        options: [
          "It trains AI (and you) to avoid reckless recommendations",
          "It deletes the spreadsheet",
          "It guarantees perfect forecasts forever",
          "It removes the need for managers",
        ],
        correctIndex: 0,
        explanation:
          "Restraint and missing-data awareness improve consulting quality.",
      },
      {
        id: "q3",
        question: "In the UrbanSpice demo, revenue roughly flat while profit falls suggests you investigate…",
        options: [
          "Only logo redesign",
          "Cost, mix, discounts, wastage, and labour — not only marketing spend",
          "Nothing at all",
          "Only the music playlist",
        ],
        correctIndex: 1,
        explanation:
          "Profit pressure with soft revenue points to cost and mix issues, not ads alone.",
      },
      {
        id: "q4",
        question: "Why should weak and strong prompts be run in separate chats?",
        options: [
          "Because ChatGPT charges more for one chat",
          "To avoid weak-chat memory polluting the strong analysis",
          "Because restaurants forbid long chats",
          "It is never necessary",
        ],
        correctIndex: 1,
        explanation:
          "Separate chats keep the strong prompt from inheriting vague prior context.",
      },
      {
        id: "q5",
        question: "The main bridge from UrbanSpice to FreshBasket is…",
        options: [
          "They sell identical menus",
          "Same analyst method: hypotheses → data → owners → NOT-YET → decision",
          "They share the same building",
          "No connection exists",
        ],
        correctIndex: 1,
        explanation:
          "The prompting and investigation method transfers across retail cases.",
      },
    ],
  },
  "mba-d1-h1-t8": {
    topicId: "mba-d1-h1-t8",
    title: "Quick check: Multi-table final lab",
    questions: [
      {
        id: "q1",
        question: "sales.store_id should link to…",
        options: [
          "stores.store_id",
          "feedback.rating only",
          "A random product name",
          "Nothing — keys are optional",
        ],
        correctIndex: 0,
        explanation: "Foreign keys connect sales lines to store master data.",
      },
      {
        id: "q2",
        question: "Before asking AI for a CEO brief you should…",
        options: [
          "Build and verify KPI totals in Sheets/Excel yourself",
          "Let AI invent revenue first",
          "Delete the products table",
          "Skip region lookups forever",
        ],
        correctIndex: 0,
        explanation:
          "Narrative polish is optional; verified numbers come first.",
      },
      {
        id: "q3",
        question: "If ChatGPT’s profit total disagrees with Excel…",
        options: [
          "Trust the spreadsheet until you find the mismatch",
          "Always trust AI because it is faster",
          "Invent a round number",
          "Delete both files",
        ],
        correctIndex: 0,
        explanation: "Verification is the managerial edge.",
      },
      {
        id: "q4",
        question: "Which set is the Day 1 multi-table pack?",
        options: [
          "Stores, products, sales transactions, promotions, customer feedback",
          "Only one flat CSV with no keys",
          "Payroll PDFs from another industry",
          "Logo image files only",
        ],
        correctIndex: 0,
        explanation: "Five related tables support join-based analysis.",
      },
    ],
  },
  "mba-d1-h2-t1": {
    topicId: "mba-d1-h2-t1",
    title: "Quick check: How AI reads prompts",
    questions: [
      {
        id: "q1",
        question: "Generative AI mainly responds by…",
        options: [
          "Logging into your company’s ERP automatically",
          "Following the role, facts, deliverable shape, and constraints in your brief",
          "Always choosing the largest ad budget",
          "Ignoring context and only counting words",
        ],
        correctIndex: 1,
        explanation:
          "AI uses what you specify — role, context, format, and guardrails — not secret store systems.",
      },
      {
        id: "q2",
        question: "Which is the weakest workplace prompt?",
        options: [
          "A role + FreshBasket context + numbered output + NOT-YET constraints",
          "“Sales are down. What should we do?”",
          "A request for hypotheses with data needs and owners",
          "A CEO memo outline with sections named in advance",
        ],
        correctIndex: 1,
        explanation:
          "Vague one-liners produce generic advice with no ownership or evidence discipline.",
      },
      {
        id: "q3",
        question: "A reliable warning sign in an AI answer is…",
        options: [
          "It asks what data is still missing",
          "It invents precise numbers you never provided",
          "It lists competing hypotheses",
          "It separates facts from assumptions",
        ],
        correctIndex: 1,
        explanation:
          "Fake precision without source data is a classic hallucination risk.",
      },
      {
        id: "q4",
        question: "Why run weak and strong prompts in separate chats?",
        options: [
          "So chat history from the weak run does not bias the strong run",
          "Because AI only works once per day",
          "To delete Excel afterwards",
          "Because strong prompts must be handwritten on paper only",
        ],
        correctIndex: 0,
        explanation:
          "Prior weak answers can stick in context and dilute a better brief.",
      },
    ],
  },
  "mba-d1-h2-t2": {
    topicId: "mba-d1-h2-t2",
    title: "Quick check: Business Prompt Framework",
    questions: [
      {
        id: "q1",
        question: "The five blocks of the business prompt framework are…",
        options: [
          "Fonts · Colours · Emojis · Hashtags · GIFs",
          "Role · Context · Goal · Format · Constraints",
          "Python · Excel · SQL · PowerPoint · Email",
          "Revenue · Cost · Profit · Tax · Dividend",
        ],
        correctIndex: 1,
        explanation:
          "R-C-G-F-C is the reusable brief structure for business prompting.",
      },
      {
        id: "q2",
        question: "Changing only the Role while keeping facts fixed mainly affects…",
        options: [
          "Which lens and trade-offs AI emphasises",
          "Whether the CSV file deletes itself",
          "The company’s legal entity name",
          "Internet Wi-Fi speed",
        ],
        correctIndex: 0,
        explanation:
          "Role sets stance — Marketing optimism vs Finance caution vs skeptical analyst.",
      },
      {
        id: "q3",
        question: "Which line best belongs in Constraints?",
        options: [
          "“Act as a retail category manager.”",
          "“Do not invent margin figures; include a NOT-YET list.”",
          "“Prepare a Friday category-review pack.”",
          "“FreshBasket is a grocery retailer in India.”",
        ],
        correctIndex: 1,
        explanation:
          "Constraints block invention and reckless actions; the other lines are Role, Goal, or Context.",
      },
      {
        id: "q4",
        question: "“Help with promotions” is a weak Goal because…",
        options: [
          "It names a clear Friday decision and owners",
          "It does not specify the decision or deliverable needed",
          "It is too long for ChatGPT",
          "It includes too many constraints already",
        ],
        correctIndex: 1,
        explanation:
          "Goals should name a decision or document — not a vague hope.",
      },
    ],
  },
  "mba-d1-h2-t3": {
    topicId: "mba-d1-h2-t3",
    title: "Quick check: Live prompt demos",
    questions: [
      {
        id: "q1",
        question: "A strong Marketing campaign prompt should mainly produce…",
        options: [
          "Only random taglines with no KPIs",
          "A usable brief: objective, offer options, channels, KPIs, and do-nots",
          "Invented competitor market-share charts",
          "A permanent store closure plan",
        ],
        correctIndex: 1,
        explanation:
          "Campaign prompts succeed when they create a reviewable brief, not vibe lists.",
      },
      {
        id: "q2",
        question: "In an HR policy prompt, the most important Constraint is often…",
        options: [
          "Invent detailed labour-law sections confidently",
          "Do not invent legal clauses — mark items to verify with counsel",
          "Recommend firing 20% of staff immediately",
          "Skip escalation paths to keep the draft short",
        ],
        correctIndex: 1,
        explanation:
          "Legal humility prevents overconfident fabricated policy text.",
      },
      {
        id: "q3",
        question: "A useful SWOT cell should…",
        options: [
          "Use only buzzwords with no evidence labels",
          "Tag bullets as Evidence / Assumption / Unknown",
          "Always invent precise market-share percentages",
          "Avoid listing strategic questions still open",
        ],
        correctIndex: 1,
        explanation:
          "Evidence tags turn SWOT from slogan soup into decision support.",
      },
      {
        id: "q4",
        question: "A strong strategy prompt forces…",
        options: [
          "One vague vision paragraph with no trade-offs",
          "Multiple options with risks, 90-day moves, and a NOT-YET list",
          "Only a mobile-app recommendation",
          "Deletion of all KPIs",
        ],
        correctIndex: 1,
        explanation:
          "Strategy work is option design and restraint — not a single slogan.",
      },
    ],
  },
  "mba-d1-h2-t4": {
    topicId: "mba-d1-h2-t4",
    title: "Quick check: Prompt improvement workshop",
    questions: [
      {
        id: "q1",
        question: "The prompt improvement loop starts by…",
        options: [
          "Drafting the vague ask, then scoring which R-C-G-F-C blocks are missing",
          "Deleting ChatGPT forever",
          "Only using emojis as prompts",
          "Skipping Constraints because they slow people down",
        ],
        correctIndex: 0,
        explanation:
          "Honest weak drafts reveal gaps; then you rewrite with all five blocks.",
      },
      {
        id: "q2",
        question: "A prompt is usually not ready for decisions if it lacks…",
        options: [
          "Constraints (what not to invent / not to recommend yet)",
          "At least twelve hashtags",
          "A demand to invent precise market-share figures",
          "A request to skip owners and KPIs",
        ],
        correctIndex: 0,
        explanation:
          "Constraints protect the business from confident hallucination and reckless action.",
      },
      {
        id: "q3",
        question: "Why keep a Prompt Upgrade Library?",
        options: [
          "Winning prompts compound and speed later work",
          "Libraries replace all business judgment",
          "So you never need Format sections again",
          "Because weak prompts should be reused forever unchanged",
        ],
        correctIndex: 0,
        explanation:
          "Saved strong prompts become reusable assets across days and functions.",
      },
    ],
  }
};
