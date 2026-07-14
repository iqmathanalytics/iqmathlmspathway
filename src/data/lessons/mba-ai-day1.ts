import type { TopicLesson } from "@/lib/types";

const CHATGPT_URL = "https://chatgpt.com/";

/**
 * Day 1 lessons — AI for Business Analytics
 * Hands-on uses ChatGPT/Gemini with copy-ready business prompts (no coding).
 */
export const mbaAiDay1Lessons: Record<string, TopicLesson> = {
  "mba-d1-h1-t1": {
    topicId: "mba-d1-h1-t1",
    intro:
      "Welcome to Day 1 of the program. This first topic orients you like an executive kickoff: where the 4-day journey goes, what “good” looks like by Day 4, and how AI is already reshaping every business function — then you start working in ChatGPT immediately.",
    blocks: [
      {
        type: "heading",
        content: "1) Why this program exists",
      },
      {
        type: "paragraph",
        content:
          "You are not hired to memorise tools. You are hired to frame problems, ask sharper questions, and recommend actions under uncertainty. Generative AI can accelerate briefing, analysis, and communication — but only if you stay in charge of judgment. This program trains that muscle.",
      },
      {
        type: "tip",
        content:
          "Mindset for the next 4 days: AI is your junior consultant. You are the engagement manager. Every lab asks you to critique AI output, not worship it.",
      },
      {
        type: "heading",
        content: "2) Course roadmap — the 4-day journey",
      },
      {
        type: "paragraph",
        content:
          "Each day is one LMS module. Open them in order. Inside a day, finish topics top-to-bottom. Finish topics top-to-bottom.",
      },
      {
        type: "visual",
        diagram: {
          title: "4-day AI pathway",
          variant: "stack",
          nodes: [
            {
              id: "d1",
              label: "Day 1 — Foundations",
              sublabel: "Analytics types · business AI · prompting · sales data labs · reporting",
            },
            {
              id: "d2",
              label: "Day 2 — Market Intelligence",
              sublabel: "Competitors · reviews · sentiment · news · intelligence dashboard",
            },
            {
              id: "d3",
              label: "Day 3 — Enterprise Knowledge (RAG)",
              sublabel: "Company documents · multi-doc insight · knowledge assistant demos",
            },
            {
              id: "d4",
              label: "Day 4 — Agentic AI",
              sublabel: "AI employees · multi-agent workflows · consulting capstone",
            },
          ],
        },
      },
      {
        type: "list",
        items: [
          "Day 1 focus: think like a Business Analyst; practise strong business prompts; analyse retail sales with AI.",
          "Day 2 focus: gather external intelligence the way consultants and strategy teams do.",
          "Day 3 focus: use company documents to answer questions ChatGPT cannot know alone.",
          "Day 4 focus: design AI “employees” that finish work packages — not just answer chats.",
        ],
      },
      {
        type: "heading",
        content: "3) Expected outcomes (what “done” looks like)",
      },
      {
        type: "paragraph",
        content:
          "By the end of Day 4 you should be able to walk into a review meeting and do the following without sounding technical:",
      },
      {
        type: "list",
        items: [
          "Translate a vague business worry into an analytics question (descriptive → diagnostic → predictive → prescriptive).",
          "Write prompts that force structure: hypotheses, KPIs, owners, and “what not to do yet”.",
          "Turn competitor / review / news signals into management implications.",
          "Brief an AI system using company documents and challenge the answer quality.",
          "Design a simple multi-agent workflow for a business problem and defend recommendations.",
        ],
      },
      {
        type: "heading",
        content: "4) What you will build by Day 4",
      },
      {
        type: "visual",
        diagram: {
          title: "Your portfolio of deliverables",
          variant: "compare",
          nodes: [
            {
              id: "p1",
              label: "Day 1 Mini-project",
              sublabel: "AI Business Performance Analyzer + CEO brief from sales data",
            },
            {
              id: "p2",
              label: "Day 2 Major project",
              sublabel: "Market Intelligence pack: competitors, sentiment, trends",
            },
            {
              id: "p3",
              label: "Day 3 Major project",
              sublabel: "Enterprise Knowledge Assistant demo from company docs",
            },
            {
              id: "p4",
              label: "Day 4 Capstone",
              sublabel: "AI Consulting Platform: boardroom recommendations",
            },
          ],
        },
      },
      {
        type: "paragraph",
        content:
          "Keep every artifact in one place: a Google Doc / Notion / OneNote titled “AI Lab Notes — [Your Name]”. Create four headings now: Day 1 / Day 2 / Day 3 / Day 4.",
      },
      {
        type: "heading",
        content: "5) How AI is changing every business function",
      },
      {
        type: "paragraph",
        content:
          "AI is not “an IT project.” It is a work-style shift inside Marketing, Sales, Finance, HR, Operations, and Supply Chain. The visual below is your map for the whole week — we will keep returning to these functions.",
      },
      {
        type: "visual",
        diagram: {
          title: "AI impact map across the enterprise",
          variant: "flow",
          nodes: [
            { id: "mkt", label: "Marketing", sublabel: "Campaigns, segments, creatives" },
            { id: "sales", label: "Sales", sublabel: "Pipeline insights, offers" },
            { id: "fin", label: "Finance", sublabel: "Variance stories, scenarios" },
            { id: "hr", label: "HR", sublabel: "Screening, policy Q&A" },
            { id: "ops", label: "Operations", sublabel: "Exceptions, daily actions" },
            { id: "sc", label: "Supply Chain", sublabel: "Demand, stockouts, SLA" },
          ],
        },
      },
      {
        type: "list",
        items: [
          "Marketing — faster creative variants and audience messaging, still needs brand and claim control.",
          "Sales — faster call summaries and opportunity briefs; humans still own relationships.",
          "Finance — faster commentary on numbers; humans still own controls and board accuracy.",
          "HR — faster screening kits and policy answers; humans still own fairness and sensitive decisions.",
          "Operations — faster exception lists from store/warehouse signals; humans still own staffing choices.",
          "Supply Chain — faster demand narratives; humans still own supplier negotiations and risk.",
        ],
      },
      {
        type: "tip",
        content:
          "Running business story for Day 1: FreshBasket SuperMarket — a mid-size Indian grocery chain seeing three months of same-store sales decline. We will use it across analytics types, prompts, and the dataset lab.",
      },
      {
        type: "heading",
        content: "6) Hands-on labs (complete all today)",
      },
      {
        type: "paragraph",
        content:
          "Use the Activity Checklist on the right. Open ChatGPT (or Gemini), copy each prompt, paste your outputs into Lab Notes, then tick the step. Aim for boardroom English — short, precise, and skeptical.",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Create your AI Lab Notes",
            description:
              "Open Google Docs / Notion / OneNote. Title it “AI Lab Notes — [Your Name]”. Add Day 1–4 headings. Tick when ready.",
            link: { label: "Open Google Docs", url: "https://docs.google.com/" },
            note: "This file is your portfolio evidence for the week.",
          },
          {
            title: "Lab A — Consulting identity (5 sentences)",
            description:
              "Define how you will use AI as a consultant this week. Copy the prompt, run it in ChatGPT, paste the reply under Day 1.",
            link: { label: "Open ChatGPT", url: "https://chatgpt.com/" },
            commands: [
              "Help me set a professional AI consulting identity.",
              "Write a 5-sentence introduction in first person as if I am a business consultant advising Indian retail and services firms.",
              "Cover: (1) industries I focus on, (2) how I use Generative AI in analysis, (3) one promise that I will never accept AI output without managerial judgment, (4) how I communicate to CEOs, (5) one personal learning goal for this 4-day AI for Business Analytics program.",
              "Tone: boardroom-ready, confident, concise.",
            ],
          },
          {
            title: "Lab B — AI in MY business function",
            description:
              "Pick the function closest to your career interest (Marketing / Sales / Finance / HR / Operations / Supply Chain). Ask AI for concrete workflow changes.",
            commands: [
              "Act as a strategy facilitator.",
              "I am interested in the [REPLACE WITH YOUR FUNCTION] function in Indian retail (supermarket context like FreshBasket).",
              "Explain in a short memo:",
              "1) Three weekly tasks AI can already assist",
              "2) Two decisions AI must NOT make alone",
              "3) One KPI that would prove the AI help is valuable",
              "4) One risk (bias, hallucination, compliance, customer trust)",
              "Keep language non-technical. Use a table where helpful.",
            ],
            note: "Replace [REPLACE WITH YOUR FUNCTION] before you paste.",
          },
          {
            title: "Lab C — Day-4 success vision",
            description:
              "Force clarity on what you personally want to present by the capstone.",
            commands: [
              "I am in a 4-day GenAI for Business Analytics program.",
              "By Day 4 I must present boardroom recommendations for a company challenge.",
              "Interview me with 6 sharp questions that help me choose:",
              "- a business problem I care about",
              "- the industry",
              "- the decision maker I want to impress",
              "- the data/documents I might need",
              "After my answers (simulate good answers if I leave blanks), draft a half-page “Personal Capstone Intent” I can paste into my Lab Notes.",
            ],
          },
          {
            title: "Lab D — FreshBasket kickoff brief",
            description:
              "Plant the Day 1 running case: declining supermarket sales. Produce a 1-page kickoff note.",
            commands: [
              "FreshBasket SuperMarket is a mid-size Indian grocery retailer.",
              "Same-store sales have declined for 3 months. Leadership is divided: Marketing wants ads, Finance wants cost cuts, Operations blames stockouts.",
              "Write a 1-page kickoff brief with sections:",
              "A) Situation in 5 lines",
              "B) Three competing management opinions",
              "C) What a good Business Analytics investigation must clarify first",
              "D) What Generative AI can accelerate this week — and what it cannot replace",
              "Tone: calm, consulting, no jargon.",
            ],
          },
        ],
      },
      {
        type: "heading",
        content: "Before you continue",
      },
      {
        type: "paragraph",
        content:
          "If your Lab Notes now contain: consulting identity, function memo, capstone intent, and FreshBasket kickoff — you are ready for Topic 2: What is Business Analytics?",
      },
    ],
    keyTakeaways: [
      "This is a 4-day pathway: Foundations → Market Intelligence → Enterprise Knowledge → Agentic AI.",
      "Your success metric is decision quality and clear recommendations — not coding volume.",
      "AI changes every function, but humans retain ownership of sensitive and irreversible decisions.",
      "Start every day with Lab Notes; critique AI output like an engagement manager.",
    ],
  },

  "mba-d1-h1-t2": {
    topicId: "mba-d1-h1-t2",
    intro:
      "Topic 2 builds your professional definition of Business Analytics. By the end you should explain BA vs BI to a CEO in plain English, walk the Data → Decision chain using FreshBasket, and act like a Business Analyst who uses AI as an assistant — not a boss.",
    blocks: [
      {
        type: "heading",
        content: "1) Definition — what Business Analytics really means",
      },
      {
        type: "paragraph",
        content:
          "Business Analytics (BA) is the disciplined use of data, reasoning, and domain judgment to answer business questions, measure performance, and recommend actions. It is not “making prettier charts.” It is not “leaving everything to an algorithm.” It is the craft of turning evidence into better managerial choices.",
      },
      {
        type: "tip",
        content:
          "One-line definition to remember: Analytics creates value only when a decision changes because of it.",
      },
      {
        type: "list",
        items: [
          "A question that matters to a business owner (margin, growth, risk, customer, cost).",
          "Evidence that can confirm, reject, or refine a hypothesis.",
          "A recommendation with trade-offs — not only a number on a slide.",
          "An owner who will act (Marketing / Finance / Ops / Store Manager / CEO).",
        ],
      },
      {
        type: "heading",
        content: "2) Why organisations need Business Analytics",
      },
      {
        type: "paragraph",
        content:
          "Gut feel still matters — especially for culture and relationships — but modern businesses generate far more signals than any leadership team can hold in memory. Analytics reduces expensive guessing.",
      },
      {
        type: "visual",
        diagram: {
          title: "Why BA becomes unavoidable",
          variant: "compare",
          nodes: [
            {
              id: "old",
              label: "Without disciplined analytics",
              sublabel: "Anecdotes clash · late surprises · blame battles · weak prioritisation",
            },
            {
              id: "new",
              label: "With Business Analytics",
              sublabel: "Shared facts · early signals · clearer trade-offs · owned actions",
            },
          ],
        },
      },
      {
        type: "list",
        items: [
          "Competition moves faster than quarterly gut reviews can handle.",
          "Customers leave digital trails (bills, carts, apps, reviews) — unused data is wasted insight.",
          "Costs and margins need continuous visibility, not only year-end shocks.",
          "Cross-functional teams need a common language of KPIs instead of conflicting opinions.",
          "Investors and boards increasingly expect evidence-backed narrative, not storytelling alone.",
        ],
      },
      {
        type: "paragraph",
        content:
          "FreshBasket example: three departments “know” why sales fell — ads, costs, stockouts. Without analytics, the loudest opinion wins. With analytics, leadership can test which story the evidence supports first.",
      },
      {
        type: "heading",
        content: "3) Business Analytics vs Business Intelligence",
      },
      {
        type: "paragraph",
        content:
          "People mix these terms. Keep a clean split in business conversations:",
      },
      {
        type: "visual",
        diagram: {
          title: "BI vs BA — executive view",
          variant: "compare",
          nodes: [
            {
              id: "bi",
              label: "Business Intelligence (BI)",
              sublabel: "What happened? Standard reports, dashboards, scorecards, monitoring.",
            },
            {
              id: "ba",
              label: "Business Analytics (BA)",
              sublabel: "Why? What next? What should we do? Investigation + recommendation.",
            },
          ],
        },
      },
      {
        type: "list",
        items: [
          "BI answer example: “Dairy revenue is down 8% MoM; South stores are weakest.”",
          "BA answer example: “Stockouts + competitor weekend promo explain most of the drop; restock Sundays and test a targeted offer on top-10 SKUs.”",
          "Think of BI as the car’s gauges. Think of BA as navigation plus a recommended route — with reasons.",
          "You need both. Dashboards without investigation become wallpaper. Investigations without reliable reporting become drama.",
        ],
      },
      {
        type: "tip",
        content:
          "Boardroom tip: If someone says “we already have dashboards, so we don’t need analytics,” reply: “Dashboards tell us the vital signs. Analytics explains the illness and the treatment options.”",
      },
      {
        type: "heading",
        content: "4) Data → Information → Insight → Decision",
      },
      {
        type: "paragraph",
        content:
          "This chain is the backbone of every BA conversation. Memorise it visually — then practise it on FreshBasket in the labs.",
      },
      {
        type: "visual",
        diagram: {
          title: "The value chain of analytics",
          variant: "flow",
          nodes: [
            { id: "data", label: "Data", sublabel: "Raw facts & records" },
            { id: "info", label: "Information", sublabel: "Organised & cleaned" },
            { id: "insight", label: "Insight", sublabel: "Meaning for the business" },
            { id: "decision", label: "Decision", sublabel: "Action with an owner" },
          ],
          arrows: [
            { from: "data", to: "info" },
            { from: "info", to: "insight" },
            { from: "insight", to: "decision" },
          ],
        },
      },
      {
        type: "list",
        items: [
          "Data — POS lines, inventory levels, footfall counters, promo flags, customer complaints.",
          "Information — “Dairy units sold fell 12% in South stores during Sundays.”",
          "Insight — “Sunday dairy stockouts coincide with peak footfall; competitor ran weekend discounts.”",
          "Decision — “Raise Sunday dairy safety stock; launch a weekend counter-offer on 10 SKUs; review in 14 days.”",
        ],
      },
      {
        type: "paragraph",
        content:
          "Most failed “analytics projects” stop at Information (a pretty table) and never force Insight + Decision. Generative AI is dangerous here: it can produce confident paragraphs that skip evidence. Your job is to demand the chain.",
      },
      {
        type: "heading",
        content: "5) Role of a Business Analyst (and where AI fits)",
      },
      {
        type: "visual",
        diagram: {
          title: "The Business Analyst operating loop",
          variant: "stack",
          nodes: [
            { id: "s1", label: "Clarify the problem", sublabel: "What decision are we trying to improve?" },
            { id: "s2", label: "Structure hypotheses", sublabel: "What could be true? What would falsify it?" },
            { id: "s3", label: "Request the right data", sublabel: "From Sales, Ops, Finance, Marketing, HR…" },
            { id: "s4", label: "Analyse & communicate", sublabel: "Findings, risks, options, recommended action" },
          ],
        },
      },
      {
        type: "list",
        items: [
          "BA owns the question quality — vague questions produce vague analytics.",
          "BA chooses metrics that match the decision (not vanity metrics).",
          "BA translates findings into trade-offs leaders can debate.",
          "BA documents assumptions and missing data honestly.",
          "Generative AI accelerates drafting, clustering, and first-pass structure — BA still owns judgment.",
        ],
      },
      {
        type: "tip",
        content:
          "Career framing: In many firms the title varies (BA, Business Insights, Strategy Analyst, Category Analyst). The skill set is the same: problem framing → evidence → recommendation → stakeholder communication.",
      },
      {
        type: "heading",
        content: "6) Hands-on labs — practise like an analyst",
      },
      {
        type: "paragraph",
        content:
          "Complete every step in the Activity Checklist on the right. Paste outputs under Day 1 in your Lab Notes. Stay with FreshBasket so tomorrow’s topics feel continuous.",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Lab A — Define BA in CEO language",
            description:
              "Produce a CEO-ready definition card you could put on slide 1 of any analytics kickoff.",
            link: { label: "Open ChatGPT", url: "https://chatgpt.com/" },
            commands: [
              "Act as an executive communication coach.",
              "Write a CEO one-pager titled “What Business Analytics Means for FreshBasket”.",
              "Include:",
              "1) A 2-sentence definition a non-technical director would accept",
              "2) Three business reasons we need BA now (retail India context)",
              "3) One example of a wasted meeting that happens WITHOUT analytics",
              "4) One example of a better decision WITH analytics",
              "No buzzwords. No equations.",
            ],
          },
          {
            title: "Lab B — BI vs BA for FreshBasket",
            description:
              "Force a crisp distinction using one supermarket crisis.",
            commands: [
              "FreshBasket has declining same-store sales for 3 months.",
              "Create a two-column comparison table: Business Intelligence | Business Analytics.",
              "Rows must include: Core question, Typical output, Example for FreshBasket, Limitation if used alone, Owner who benefits most.",
              "End with a 4-bullet recommendation: what BI should keep producing weekly, and what BA investigations leadership should commission this month.",
            ],
          },
          {
            title: "Lab C — Walk Data → Decision on FreshBasket",
            description:
              "Write one complete chain so the stages become muscle memory.",
            commands: [
              "Using FreshBasket (grocery retail, India), write ONE complete example of:",
              "Data → Information → Insight → Decision.",
              "Rules:",
              "- Make it about declining sales (you may invent plausible but realistic details)",
              "- Label each stage clearly",
              "- The Decision must name an owner and a 14-day review checkpoint",
              "- Add a final line: “Missing data I still need before I trust this insight”",
            ],
          },
          {
            title: "Lab D — Business Analyst kickoff pack",
            description:
              "Act as the BA called into the FreshBasket war room.",
            commands: [
              "You are the Business Analyst invited to FreshBasket’s sales decline war room.",
              "Leadership is split: Marketing wants ads, Finance wants cuts, Operations blames stockouts.",
              "Produce:",
              "1) Problem statement in 5 lines",
              "2) Six investigation questions ranked by decision value",
              "3) Data request list by department (Marketing, Sales/Stores, Finance, Ops/Supply, HR if relevant)",
              "4) What you will ask Generative AI to draft in the first 48 hours",
              "5) What you will NOT accept from AI without verification",
              "Tone: calm consulting.",
            ],
          },
          {
            title: "Lab E — Critique an AI “insight” (quality control)",
            description:
              "Train healthy skepticism. AI will sometimes invent confident junk.",
            commands: [
              "Here is an AI-style claim: “FreshBasket should cut 20% of staff immediately because sales declined.”",
              "Critique it as a Business Analyst:",
              "1) Which stages of Data→Information→Insight→Decision are missing?",
              "2) What alternative hypotheses exist?",
              "3) What harm could happen if leaders act on this claim tomorrow?",
              "4) Rewrite a responsible next step leadership should take instead.",
            ],
            note: "Save this critique — it is the attitude you need all week.",
          },
        ],
      },
      {
        type: "heading",
        content: "Before you continue",
      },
      {
        type: "paragraph",
        content:
          "You are ready for Topic 3 when Lab Notes include: CEO definition, BI vs BA table, one full Data→Decision chain, BA kickoff pack, and an AI-claim critique.",
      },
    ],
    keyTakeaways: [
      "BA = evidence-backed questions and actions; value appears only when decisions change.",
      "BI monitors “what happened”; BA investigates why / what next / what to do.",
      "Force every analysis through Data → Information → Insight → Decision.",
      "The Business Analyst owns framing and judgment; AI accelerates drafts, not accountability.",
    ],
  },

  "mba-d1-h1-t3": {
    topicId: "mba-d1-h1-t3",
    intro:
      "Leaders often say “we need analytics” without saying which question they mean. This topic gives you four labels you can use in any meeting — Descriptive, Diagnostic, Predictive, Prescriptive — all explained through one supermarket crisis so the differences stick.",
    blocks: [
      {
        type: "heading",
        content: "The FreshBasket story (use this for every type)",
      },
      {
        type: "paragraph",
        content:
          "FreshBasket SuperMarket — a mid-size Indian grocery chain — has seen same-store sales decline for three months. Marketing wants ads. Finance wants cost cuts. Operations blames stockouts. A competitor ran loud weekend discounts. Dairy and personal care look weak, especially in South stores. We will examine this ONE situation through all four analytics lenses.",
      },
      {
        type: "tip",
        content:
          "Meeting trick: Before arguing solutions, ask: “Are we talking descriptive, diagnostic, predictive, or prescriptive right now?” It stops teams from mixing facts with guesses and action plans.",
      },
      {
        type: "visual",
        diagram: {
          title: "Four analytics questions — one ladder",
          variant: "stack",
          nodes: [
            { id: "d1", label: "Descriptive — What happened?", sublabel: "Facts, trends, rankings, scorecards" },
            { id: "d2", label: "Diagnostic — Why did it happen?", sublabel: "Causes, drivers, root-cause hypotheses" },
            { id: "d3", label: "Predictive — What might happen next?", sublabel: "Outlook if patterns continue / scenarios" },
            { id: "d4", label: "Prescriptive — What should we do?", sublabel: "Actions, trade-offs, owners, timelines" },
          ],
        },
      },
      {
        type: "heading",
        content: "1) Descriptive analytics — What happened?",
      },
      {
        type: "paragraph",
        content:
          "Descriptive analytics summarises the past and present. It answers “what is the score?” — totals, averages, mixes, rankings, and comparisons to last month / last year. It does not yet explain causes or recommend action.",
      },
      {
        type: "list",
        items: [
          "FreshBasket descriptive findings: sales −8% MoM overall; dairy −12%; South stores worse than North.",
          "Personal care revenue soft; promo share rose while margin fell.",
          "Sunday footfall high, but dairy units unusually low those days.",
          "Typical outputs: KPI dashboard, category/region rank table, weekly sales flash.",
        ],
      },
      {
        type: "tip",
        content:
          "CEO-ready phrase: “Descriptive tells us the vital signs. It does not tell us the disease — or the treatment.”",
      },
      {
        type: "heading",
        content: "2) Diagnostic analytics — Why did it happen?",
      },
      {
        type: "paragraph",
        content:
          "Diagnostic analytics searches for drivers. You create hypotheses and test which evidence supports them. Good diagnostic work prevents expensive wrong treatments — like buying ads when the real issue is stockouts.",
      },
      {
        type: "visual",
        diagram: {
          title: "FreshBasket — candidate causes to test",
          variant: "compare",
          nodes: [
            {
              id: "ops",
              label: "Operations / Supply",
              sublabel: "Sunday dairy stockouts · slow replenishment · supplier SLA miss",
            },
            {
              id: "mkt",
              label: "Market / Competition",
              sublabel: "Competitor weekend discounts · weaker own promo calendar",
            },
          ],
        },
      },
      {
        type: "list",
        items: [
          "Hypothesis A — Stockouts on peak days suppressed conversion.",
          "Hypothesis B — Competitor price aggression shifted basket share.",
          "Hypothesis C — Over-discounting in personal care hurt profit while revenue looked “busy”.",
          "Hypothesis D — Understaffed billing counters lengthened queues and reduced purchases.",
          "Diagnostic output: ranked causes, evidence for/against each, “still missing data” list.",
        ],
      },
      {
        type: "heading",
        content: "3) Predictive analytics — What might happen next?",
      },
      {
        type: "paragraph",
        content:
          "Predictive analytics estimates likely futures if patterns continue — or under scenarios. Treat forecasts as decision aids, not prophecies. Always ask: prediction of what metric, for how long, under what assumptions?",
      },
      {
        type: "list",
        items: [
          "If Sunday stockouts continue: dairy revenue may fall another 5–7% next month.",
          "If competitor promo intensity stays high: South stores remain weakest for 6–8 weeks.",
          "If targeted weekend offer works: top-10 SKUs could recover 2–3% of lost units.",
          "Predictive outputs: trend outlook, scenario table (base / downside / upside), early-warning KPIs.",
        ],
      },
      {
        type: "tip",
        content:
          "AI caution: Generative AI can invent precise-looking percentages. Demand that every prediction state assumptions and the data it rests on — or label it as a scenario, not a forecast.",
      },
      {
        type: "heading",
        content: "4) Prescriptive analytics — What should we do?",
      },
      {
        type: "paragraph",
        content:
          "Prescriptive analytics recommends actions with trade-offs: do this, not that, owned by whom, reviewed when. It should sit on top of descriptive + diagnostic evidence (and ideally a light predictive view). Jumping straight to prescriptions is how companies burn budget.",
      },
      {
        type: "visual",
        diagram: {
          title: "A responsible FreshBasket prescription pack",
          variant: "flow",
          nodes: [
            { id: "a1", label: "Restock Sundays", sublabel: "Ops / Supply · 7 days" },
            { id: "a2", label: "Targeted weekend offer", sublabel: "Marketing · top-10 SKUs" },
            { id: "a3", label: "Promo margin guardrail", sublabel: "Finance review weekly" },
            { id: "a4", label: "14-day checkpoint", sublabel: "CEO war room" },
          ],
          arrows: [
            { from: "a1", to: "a2" },
            { from: "a2", to: "a3" },
            { from: "a3", to: "a4" },
          ],
        },
      },
      {
        type: "list",
        items: [
          "Good prescription names: action, owner, cost/risk, expected KPI movement, review date.",
          "Also name what NOT to do yet (e.g. “no across-the-board headcount cut until stockout evidence is checked”).",
          "AI can draft options quickly — managers still choose trade-offs and ethics.",
        ],
      },
      {
        type: "heading",
        content: "How the four types work together",
      },
      {
        type: "paragraph",
        content:
          "Think of a medical metaphor: descriptive = symptoms, diagnostic = tests for causes, predictive = outlook if untreated, prescriptive = treatment plan. Skipping diagnosis is malpractice in hospitals — and in business reviews.",
      },
      {
        type: "visual",
        diagram: {
          title: "Wrong path vs right path",
          variant: "compare",
          nodes: [
            {
              id: "wrong",
              label: "Wrong leadership path",
              sublabel: "Hear decline → jump to ads or cuts → argue opinions → repeat next month",
            },
            {
              id: "right",
              label: "Right analytics path",
              sublabel: "Describe → diagnose → preview outlook → prescribe with owners → review",
            },
          ],
        },
      },
      {
        type: "heading",
        content: "Hands-on labs — master all four lenses",
      },
      {
        type: "paragraph",
        content:
          "Complete every lab on the right. Keep using FreshBasket. Paste outputs into Day 1 of your Lab Notes. Notice how each lens asks a different question — and how weak AI answers skip stages.",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Lab A — Four-type master table (FreshBasket)",
            description:
              "Build a clear summary table covering all four analytics types on one page.",
            link: { label: "Open ChatGPT", url: "https://chatgpt.com/" },
            commands: [
              "FreshBasket SuperMarket (India) has declining same-store sales for 3 months.",
              "Create a table with 4 rows: Descriptive, Diagnostic, Predictive, Prescriptive.",
              "Columns: Analytics type | Core question | FreshBasket example finding | Example manager action | Typical KPI",
              "Keep each cell to 1–2 sentences. Grocery retail language. No jargon.",
            ],
          },
          {
            title: "Lab B — Descriptive pack only",
            description:
              "Practise writing a board flash that STOP before blaming or recommending.",
            commands: [
              "Write a FreshBasket descriptive analytics pack titled “Sales Flash — Last 90 Days”.",
              "Include only descriptive content:",
              "- Overall sales movement",
              "- Category highlights (dairy, personal care, others)",
              "- Region highlights (North/South/East/West)",
              "- Promo vs non-promo snapshot",
              "Rules: NO root-cause claims, NO recommendations. End with 5 questions leadership should investigate next.",
            ],
          },
          {
            title: "Lab C — Diagnostic war-room",
            description:
              "Force multiple hypotheses and evidence tests.",
            commands: [
              "You are facilitating FreshBasket’s diagnostic war room.",
              "Generate 6 plausible root-cause hypotheses across Operations, Competition, Pricing/Promo, Assortment, Staffing, and Customer experience.",
              "For each hypothesis provide: Evidence that would SUPPORT it | Evidence that would REJECT it | Data owner to ask | Early KPI signal",
              "Rank the top 3 hypotheses for first investigation and explain why.",
            ],
          },
          {
            title: "Lab D — Predictive scenarios (label assumptions)",
            description:
              "Build three outlooks without pretending false precision.",
            commands: [
              "Create a FreshBasket predictive scenario table with Base / Downside / Upside for the next 60 days.",
              "For each scenario include: assumed conditions, revenue outlook wording (ranges OK), margin risk, store ops implication.",
              "Add a column: “What would make this scenario more likely?”",
              "Explicitly label which parts are assumptions vs evidence-based.",
              "Do not invent fake precise decimals unless you mark them as illustrative.",
            ],
          },
          {
            title: "Lab E — Prescriptive action plan + “do nothing yet” list",
            description:
              "Recommend actions with owners — and force managerial restraint.",
            commands: [
              "Using FreshBasket, write a 30-day prescriptive action plan with exactly 5 actions.",
              "Each action must include: Owner (Marketing/Finance/Ops/Supply/HR/Store) | Cost/risk | Expected KPI movement | Review date",
              "Then add a section: “Three actions we will NOT take yet — and why”",
              "One of the NOT-YET actions must be an across-the-board headcount cut.",
              "Tone: boardroom consulting.",
            ],
          },
          {
            title: "Lab F — Catch AI jumping stages",
            description:
              "Train yourself to spot incomplete analytics in AI answers.",
            commands: [
              "Here is a weak AI answer: “Sales are declining, so FreshBasket should immediately spend 20% more on ads and cut 15% staff.”",
              "Critique it:",
              "1) Which analytics types did it skip?",
              "2) Rewrite a responsible 8-line response that walks Descriptive → Diagnostic → Predictive → Prescriptive briefly.",
              "3) Add one sentence leaders should say in the meeting to re-anchor discussion.",
            ],
          },
        ],
      },
      {
        type: "heading",
        content: "Before you continue",
      },
      {
        type: "paragraph",
        content:
          "You are ready for Topic 4 when Lab Notes contain: the four-type table, a descriptive-only flash, a diagnostic hypothesis pack, scenario outlooks, a prescription with NOT-YET actions, and an AI-stage critique.",
      },
    ],
    keyTakeaways: [
      "Descriptive = what happened; Diagnostic = why; Predictive = what next; Prescriptive = what to do.",
      "One business crisis — like FreshBasket — should be examined with all four lenses.",
      "Never jump to prescriptions without at least light descriptive + diagnostic evidence.",
      "Demand assumptions on predictions; demand owners and “not yet” lists on prescriptions.",
    ],
  },

  "mba-d1-h1-t4": {
    topicId: "mba-d1-h1-t4",
    intro:
      "Analytics is not an “IT project parked in a corner.” Every business function already asks questions that data — and Generative AI — can accelerate. This topic maps Marketing, Sales, Finance, HR, Operations, and Supply Chain onto FreshBasket, then trains you to facilitate cross-functional debate like a consultant.",
    blocks: [
      {
        type: "heading",
        content: "1) Why functional analytics matters",
      },
      {
        type: "paragraph",
        content:
          "When FreshBasket sales fall, each department sees a different “truth.” Marketing sees awareness. Finance sees margin. Operations sees stockouts. Without a shared fact base, meetings become negotiation contests. Your job as an analytics-minded manager is to attach every question to a decision owner and a KPI — then force collaboration on trade-offs.",
      },
      {
        type: "tip",
        content:
          "Working rule: A metric without an owner is vanity. A recommendation without an owner is theatre.",
      },
      {
        type: "visual",
        diagram: {
          title: "Six functions · one retail crisis",
          variant: "flow",
          nodes: [
            { id: "mkt", label: "Marketing", sublabel: "Offers & segments" },
            { id: "sales", label: "Sales / Stores", sublabel: "Conversion & baskets" },
            { id: "fin", label: "Finance", sublabel: "Margin & cash" },
            { id: "hr", label: "HR", sublabel: "Staffing & service" },
            { id: "ops", label: "Operations", sublabel: "Store execution" },
            { id: "sc", label: "Supply Chain", sublabel: "Stock & suppliers" },
          ],
        },
      },
      {
        type: "heading",
        content: "2) One high-value question per function (FreshBasket)",
      },
      {
        type: "paragraph",
        content:
          "The syllabus asks for one business question from each department. Use these as templates you can reuse in any industry by swapping context.",
      },
      {
        type: "visual",
        diagram: {
          title: "Function question cards",
          variant: "stack",
          nodes: [
            {
              id: "q1",
              label: "Marketing",
              sublabel: "Which customer segments respond best to weekend offers — and at what margin cost?",
            },
            {
              id: "q2",
              label: "Sales / Store Ops",
              sublabel: "Which stores underperform after we control for footfall and store format?",
            },
            {
              id: "q3",
              label: "Finance",
              sublabel: "Which categories destroy margin after discounts, wastage, and promo leakage?",
            },
            {
              id: "q4",
              label: "HR",
              sublabel: "Do understaffed billing shifts correlate with longer queues and lower conversion?",
            },
            {
              id: "q5",
              label: "Operations",
              sublabel: "Where do stockouts and planogram misses cluster by day-of-week?",
            },
            {
              id: "q6",
              label: "Supply Chain",
              sublabel: "Which SKUs need safety-stock or supplier SLA changes after demand shifts?",
            },
          ],
        },
      },
      {
        type: "list",
        items: [
          "Marketing KPI example: offer response rate, incremental sales, promo gross margin.",
          "Sales / Stores KPI example: conversion %, average basket value, sales per labour hour.",
          "Finance KPI example: category contribution margin, wastage %, discount depth.",
          "HR KPI example: staffed-hours vs planned, queue time, absenteeism on peak days.",
          "Operations KPI example: on-shelf availability, refill compliance, checkout wait.",
          "Supply Chain KPI example: fill rate, days of cover, supplier OTIF (on time in full).",
        ],
      },
      {
        type: "heading",
        content: "3) How functions should collaborate (not compete)",
      },
      {
        type: "paragraph",
        content:
          "In a sales decline war room, Marketing may demand ads, Finance may demand cuts, and Supply Chain may demand inventory investment. Those options can all be rational — and mutually contradictory. Business Analytics should create a shared scoreboard first, then sequence actions.",
      },
      {
        type: "visual",
        diagram: {
          title: "Healthy cross-functional flow",
          variant: "flow",
          nodes: [
            { id: "facts", label: "Shared facts", sublabel: "One KPI pack everyone accepts" },
            { id: "hyp", label: "Joint hypotheses", sublabel: "Causes ranked together" },
            { id: "opts", label: "Option set", sublabel: "Ads / restock / pricing / staffing" },
            { id: "trade", label: "Trade-offs", sublabel: "Cost, speed, risk, ownership" },
            { id: "act", label: "Decision log", sublabel: "What we do · what we do not" },
          ],
          arrows: [
            { from: "facts", to: "hyp" },
            { from: "hyp", to: "opts" },
            { from: "opts", to: "trade" },
            { from: "trade", to: "act" },
          ],
        },
      },
      {
        type: "list",
        items: [
          "Step 1 — Agree descriptive facts (no blaming yet).",
          "Step 2 — Rank diagnostic hypotheses with multi-function evidence owners.",
          "Step 3 — Estimate cost and risk of each option before voting.",
          "Step 4 — Assign a single accountable owner per approved action.",
          "Step 5 — Set a 14-day review where functions report the same KPIs.",
        ],
      },
      {
        type: "tip",
        content:
          "Facilitator line you can use: “We will not debate solutions until we agree on the scorecard. Then we will argue about trade-offs — not about whose Excel file is real.”",
      },
      {
        type: "heading",
        content: "4) Where Generative AI helps each function",
      },
      {
        type: "list",
        items: [
          "Marketing — draft offer variants, audience briefs, post-campaign narratives (human approval on claims).",
          "Sales / Stores — summarise store exception lists and coaching notes for managers.",
          "Finance — draft variance commentary from approved tables (never invent board numbers).",
          "HR — turn policy/shift data into staffing scenarios for discussion (humans own fairness).",
          "Operations — convert stockout logs into daily action checklists.",
          "Supply Chain — draft supplier issue memos and SLA exception packs.",
        ],
      },
      {
        type: "heading",
        content: "5) Hands-on labs — think cross-functionally",
      },
      {
        type: "paragraph",
        content:
          "Complete every lab on the right. Stay inside FreshBasket. Save outputs in Lab Notes under Day 1. These artifacts become inputs to later reporting and project sessions.",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Lab A — Department Question × KPI × Owner table",
            description:
              "Build the syllabus deliverable: one sharp question per function with KPI and decision owner.",
            link: { label: "Open ChatGPT", url: "https://chatgpt.com/" },
            commands: [
              "You are facilitating a FreshBasket leadership offsite (Indian supermarket chain, sales declining 3 months).",
              "For each department — Marketing, Sales/Stores, Finance, HR, Operations, Supply Chain — create a table with columns:",
              "Department | High-value analytics question | Primary KPI | Decision owner | Data needed this week",
              "Make questions specific to grocery retail. Keep language boardroom-ready.",
            ],
          },
          {
            title: "Lab B — Deep dive ONE function (your career track)",
            description:
              "Choose the function closest to your interest and produce a mini-BA brief.",
            commands: [
              "I choose the [REPLACE: Marketing / Sales / Finance / HR / Operations / Supply Chain] function at FreshBasket.",
              "Write a one-page BA brief with:",
              "1) Why this function feels the sales decline first",
              "2) Three analytics questions ranked by decision value",
              "3) Descriptive vs diagnostic vs prescriptive examples for this function",
              "4) Two risks if this function acts alone without others",
              "5) How Generative AI can assist this week — and what it must not decide alone",
            ],
            note: "Replace the function name before pasting.",
          },
          {
            title: "Lab C — Conflict simulation: Ads vs Cuts vs Restock",
            description:
              "Practise facilitating a classic leadership conflict.",
            commands: [
              "Role-play a FreshBasket war room.",
              "Marketing proposes a big ad burst. Finance proposes deep cost cuts. Supply Chain proposes inventory investment for dairy.",
              "As the analytics facilitator, produce:",
              "A) Shared facts pack (8 bullets max) everyone should accept before arguing",
              "B) Pros/cons table for each proposal (cost, speed, risk, reversible?)",
              "C) A sequenced recommendation for the next 14 days (not all-or-nothing)",
              "D) KPIs for the checkpoint meeting",
              "Tone: calm, neutral, consulting.",
            ],
          },
          {
            title: "Lab D — RACI-light ownership map",
            description:
              "Convert insights into who does what — with clear ownership.",
            commands: [
              "For FreshBasket’s sales recovery, create a simple ownership map for 6 actions spanning Marketing, Stores, Finance, HR, Operations, Supply Chain.",
              "Columns: Action | Accountable owner | Supporting functions | KPI | Day-14 success signal",
              "Include at least one action that is intentionally paused (do not do yet) with reason.",
            ],
          },
          {
            title: "Lab E — Customer complaint → function routing",
            description:
              "Connect frontline voice to the right department — prep for Day 2 review intelligence.",
            commands: [
              "Here are five customer complaint themes for FreshBasket:",
              "1) Items missing on shelf on Sundays",
              "2) Billing queues too long",
              "3) Prices higher than a competitor on weekend deals",
              "4) Spoiled fresh produce",
              "5) Staff unavailable for help in aisles",
              "For each theme: primary function owner | secondary function | analytics question to investigate | first corrective action to test",
              "Output as a clean table.",
            ],
          },
          {
            title: "Lab F — One-slide CEO story (cross-functional)",
            description:
              "Compress the topic into an executive narrative.",
            commands: [
              "Write a one-slide CEO story (in text form) titled “FreshBasket: Function-wise Analytics Focus”.",
              "Structure:",
              "- Opening sentence on the crisis",
              "- Six one-line function priorities (Marketing→Supply Chain)",
              "- One collaboration rule for the war room",
              "- Ask for decision: approve 14-day sequenced plan",
              "Max 180 words. No jargon.",
            ],
          },
        ],
      },
      {
        type: "heading",
        content: "Before you continue",
      },
      {
        type: "paragraph",
        content:
          "You are ready for Topic 5 when Lab Notes include: the six-function Q×KPI×Owner table, your function deep dive, a conflict facilitation pack, an ownership map, complaint routing, and a CEO one-slide story.",
      },
    ],
    keyTakeaways: [
      "Every function has analytics questions — always attach a KPI and a decision owner.",
      "Cross-functional crises need shared facts before competing solutions.",
      "Sequence actions across Marketing, Finance, Ops, and Supply — avoid all-or-nothing fights.",
      "Generative AI can draft functional briefs; humans own trade-offs, fairness, and board numbers.",
    ],
  },

  "mba-d1-h1-t5": {
    topicId: "mba-d1-h1-t5",
    intro:
      "You do not need to become a machine-learning engineer. You do need a clean executive vocabulary so you can brief vendors, sponsor projects, and govern risk. This topic explains AI, Machine Learning, Deep Learning, Generative AI, and LLMs using only business language and FreshBasket examples — then puts you into ChatGPT labs.",
    blocks: [
      {
        type: "heading",
        content: "1) The vocabulary map (no equations)",
      },
      {
        type: "paragraph",
        content:
          "Think of nested circles. AI is the big umbrella. Machine Learning sits inside it. Deep Learning sits inside ML. Generative AI is a popular modern branch that creates content. LLMs are the engines behind assistants like ChatGPT.",
      },
      {
        type: "visual",
        diagram: {
          title: "How leaders should nest the terms",
          variant: "stack",
          nodes: [
            { id: "ai", label: "Artificial Intelligence (AI)", sublabel: "Systems that automate or augment “smart” tasks" },
            { id: "ml", label: "Machine Learning (ML)", sublabel: "Learns patterns from historical data" },
            { id: "dl", label: "Deep Learning", sublabel: "ML style strong on images, speech, complex text" },
            { id: "gen", label: "Generative AI + LLMs", sublabel: "Creates drafts, summaries, scenarios, dialogue" },
          ],
        },
      },
      {
        type: "tip",
        content:
          "Boardroom shortcut: If someone says “AI,” ask “Do you mean forecasting from past data (ML), computer vision on shelves (deep learning), or drafting/summarising with ChatGPT-like tools (Generative AI / LLM)?” Clarity saves budget.",
      },
      {
        type: "heading",
        content: "2) Artificial Intelligence — business meaning",
      },
      {
        type: "paragraph",
        content:
          "AI is the broad idea of systems that perform tasks that usually need human intelligence: spotting patterns, recommending actions, generating content, or supporting decisions. In companies, an “AI initiative” usually means a product or workflow that automates or augments judgment — not a robot CEO.",
      },
      {
        type: "list",
        items: [
          "FreshBasket AI example: a system that flags stores with unusual sales drops each morning for managers.",
          "Business question to ask: Which decision gets faster or safer if AI assists?",
          "Leadership risk: treating AI as magic rather than a managed capability with owners and controls.",
        ],
      },
      {
        type: "heading",
        content: "3) Machine Learning — business meaning",
      },
      {
        type: "paragraph",
        content:
          "Machine Learning is a subset of AI where systems learn patterns from historical data instead of relying only on fixed handwritten rules. Businesses use ML when the past contains useful signals about the future or about risk.",
      },
      {
        type: "visual",
        diagram: {
          title: "ML in retail language",
          variant: "compare",
          nodes: [
            {
              id: "rules",
              label: "Old fixed rules",
              sublabel: "“If sales fall 10%, raise ads by 5%” — blunt and fragile",
            },
            {
              id: "ml",
              label: "Machine Learning approach",
              sublabel: "Learn which store/category patterns predict next week’s demand or risk",
            },
          ],
        },
      },
      {
        type: "list",
        items: [
          "Business uses: demand forecasting, churn/propensity scoring, credit risk, next-best-offer ranking.",
          "FreshBasket example: predict which SKUs need higher Sunday stock based on history.",
          "Leadership ownership: define the target (what to predict), accept/reject thresholds, and monitor drift when behaviour changes.",
        ],
      },
      {
        type: "heading",
        content: "4) Deep Learning — business meaning",
      },
      {
        type: "paragraph",
        content:
          "Deep Learning is a powerful style of ML that handles messy signals well — images, audio, and large text. Most leaders rarely “build” it in a workshop; they sponsor use cases and vendors carefully.",
      },
      {
        type: "list",
        items: [
          "Retail uses: shelf image checks (is the product on the shelf?), produce quality checks, speech-to-text for call centres.",
          "FreshBasket example: daily photo checks whether dairy facings are empty on Sundays.",
          "Leadership caution: deep learning systems can be costly and opaque — demand pilot KPIs and failure cases.",
        ],
      },
      {
        type: "heading",
        content: "5) Generative AI and Large Language Models (LLMs)",
      },
      {
        type: "paragraph",
        content:
          "Generative AI creates new content: text, images, slide outlines, first-draft plans. Large Language Models (LLMs) are the systems that power assistants like ChatGPT — strong at language tasks: drafting, summarising, brainstorming, role-play, and structuring arguments.",
      },
      {
        type: "visual",
        diagram: {
          title: "What GenAI is good at vs not",
          variant: "compare",
          nodes: [
            {
              id: "good",
              label: "Strong fit",
              sublabel: "Briefs · summaries · options · role-play · first drafts · meeting notes",
            },
            {
              id: "weak",
              label: "Weak / dangerous alone",
              sublabel: "Invented facts · unaudited finance numbers · legal/HR final calls · secret data misuse",
            },
          ],
        },
      },
      {
        type: "list",
        items: [
          "FreshBasket GenAI uses: draft war-room agenda, summarise customer complaints, create first-pass CEO narrative from approved tables.",
          "LLM limitation: fluency ≠ truth. It can sound right while being wrong.",
          "Working rule: treat every GenAI answer as a draft until verified against data, policy, or an expert.",
        ],
      },
      {
        type: "tip",
        content:
          "Never put confidential employee data, unpublished financials, or customer personal information into public AI tools unless your company policy explicitly allows a governed tool.",
      },
      {
        type: "heading",
        content: "6) How to evaluate an AI idea",
      },
      {
        type: "visual",
        diagram: {
          title: "Five-question AI filter",
          variant: "flow",
          nodes: [
            { id: "f1", label: "Decision", sublabel: "What decision improves?" },
            { id: "f2", label: "Data", sublabel: "Do we have trustworthy inputs?" },
            { id: "f3", label: "Owner", sublabel: "Who is accountable?" },
            { id: "f4", label: "Risk", sublabel: "What if it is wrong?" },
            { id: "f5", label: "KPI", sublabel: "How do we know it worked?" },
          ],
          arrows: [
            { from: "f1", to: "f2" },
            { from: "f2", to: "f3" },
            { from: "f3", to: "f4" },
            { from: "f4", to: "f5" },
          ],
        },
      },
      {
        type: "heading",
        content: "7) Hands-on labs — speak AI like a leader",
      },
      {
        type: "paragraph",
        content:
          "Complete every lab on the right. No coding. Focus on clear definitions, retail examples, and governance instincts for FreshBasket.",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Lab A — CEO one-pager: AI vocabulary",
            description:
              "Explain all five terms in boardroom English with one retail example each.",
            link: { label: "Open ChatGPT", url: "https://chatgpt.com/" },
            commands: [
              "Explain AI, Machine Learning, Deep Learning, Generative AI, and LLMs to the CEO of FreshBasket.",
              "Rules:",
              "- No equations",
              "- No jargon without a one-line translation",
              "- One supermarket / retail example for each term",
              "- End with a 5-bullet “Where we should start this year” list realistic for a mid-size Indian grocery chain",
              "Tone: calm, practical, non-technical.",
            ],
          },
          {
            title: "Lab B — Classify five FreshBasket use cases",
            description:
              "Force yourself (with AI help) to label each initiative correctly.",
            commands: [
              "Classify each FreshBasket idea as mainly: AI umbrella / ML / Deep Learning / Generative AI-LLM (pick the best fit) and say why in one sentence:",
              "1) Predict next Sunday dairy demand from 2 years of sales history",
              "2) Draft a CEO brief from an approved KPI table",
              "3) Detect empty shelves from store camera images",
              "4) Flag stores with unusual sales drops vs last week",
              "5) Chat assistant that answers HR leave-policy questions from the handbook",
              "Output a table: Idea | Best label | Why | Biggest business risk",
            ],
          },
          {
            title: "Lab C — Buy vs Build / Pilot design",
            description:
              "Practise executive sponsorship thinking.",
            commands: [
              "FreshBasket wants an AI pilot for “Sunday stockouts in dairy.”",
              "Write a 1-page pilot charter with:",
              "1) Business problem and decision improved",
              "2) Whether this is mainly ML, GenAI, or both",
              "3) Success KPIs for 6 weeks",
              "4) Data needed and who owns it",
              "5) Risks (wrong predictions, overstock wastage, staff distrust)",
              "6) Go / No-go criteria after the pilot",
              "Do not invent fake vendor names.",
            ],
          },
          {
            title: "Lab D — Hallucination fire drill",
            description:
              "Train the verification reflex GenAI requires.",
            commands: [
              "Here is a confident AI claim: “FreshBasket’s North stores grew 18.6% last month because of AI personalization, so you should invest ₹2 crore immediately.”",
              "As a business leader, critique it:",
              "1) What might be hallucinated or unsupported?",
              "2) Which data would you demand before believing any number?",
              "3) Rewrite a responsible leadership response in 6 lines",
              "4) Add a company rule for using Generative AI with numbers",
            ],
          },
          {
            title: "Lab E — Personal glossary card",
            description:
              "Leave Topic 5 with your own reusable definition card.",
            commands: [
              "Create a one-page “AI Glossary Card” with five rows: AI, ML, Deep Learning, Generative AI, LLM.",
              "Columns: Simple definition | FreshBasket example | When leaders should care | Common misunderstanding",
              "Keep each cell under 20 words.",
            ],
          },
        ],
      },
      {
        type: "heading",
        content: "Before you continue",
      },
      {
        type: "paragraph",
        content:
          "You are ready for Topic 6 when Lab Notes include: CEO vocabulary one-pager, use-case classification table, stockout pilot charter, hallucination critique, and your personal glossary card.",
      },
    ],
    keyTakeaways: [
      "AI is the umbrella; ML learns from data; deep learning handles complex signals; Generative AI/LLMs draft and dialogue.",
      "Leaders sponsor use cases, KPIs, owners, and risk controls — not model maths.",
      "Fluency is not truth: verify numbers, policies, and recommendations before acting.",
      "Protect confidential people and finance data from uncontrolled public AI tools.",
    ],
  },

  "mba-d1-h1-t6": {
    topicId: "mba-d1-h1-t6",
    intro:
      "Topic 5 gave you vocabulary. Topic 6 turns that into role design: imagine Generative AI as a junior colleague inside Marketing, HR, Finance, Operations, and Consulting. Powerful when scoped; dangerous when unsupervised. We stay with FreshBasket and design role cards you can reuse at work.",
    blocks: [
      {
        type: "heading",
        content: "1) The right mental model: AI employee, human manager",
      },
      {
        type: "paragraph",
        content:
          "Do not think “AI replaces the department.” Think “AI drafts, ranks, summarises, and prepares options — a named human still owns the decision.” That framing keeps ethics, brand, and compliance intact while still capturing productivity.",
      },
      {
        type: "visual",
        diagram: {
          title: "Human–AI working agreement",
          variant: "compare",
          nodes: [
            {
              id: "ai",
              label: "AI junior colleague",
              sublabel: "Drafts · clusters · summarises · suggests options · prepares checklists",
            },
            {
              id: "human",
              label: "Human manager",
              sublabel: "Sets goals · approves · verifies facts · owns risk · talks to people",
            },
          ],
        },
      },
      {
        type: "tip",
        content:
          "Role-card checklist for every AI employee: Goal · Inputs · Outputs · Tools it may use · Risks if unsupervised · Human approval rule · Success KPI.",
      },
      {
        type: "heading",
        content: "2) AI Marketing Manager",
      },
      {
        type: "paragraph",
        content:
          "Helps create campaigns, segment messaging, A/B test ideas, and weekly performance narratives from sales and promo data. Humans still approve brand tone, claims, discounts, and budgets.",
      },
      {
        type: "list",
        items: [
          "FreshBasket inputs: category sales, promo calendar, competitor offers, customer segments.",
          "Weekly outputs: weekend offer variants, audience brief, post-campaign learning memo.",
          "Do not allow alone: public claims about health/price guarantees, final budget release.",
        ],
      },
      {
        type: "heading",
        content: "3) AI HR Recruiter",
      },
      {
        type: "paragraph",
        content:
          "Screens resumes against a transparent scorecard, drafts interview kits, summarises panel notes. Humans own fairness, final offers, terminations, and sensitive communications.",
      },
      {
        type: "list",
        items: [
          "FreshBasket inputs: JD for store supervisor roles, resume text (policy-permitted), scorecard criteria.",
          "Outputs: shortlist rationale draft, structured interview guide, onboarding FAQ draft.",
          "Critical risk: bias and discrimination if historical hiring patterns are copied blindly.",
        ],
      },
      {
        type: "heading",
        content: "4) AI Financial Analyst",
      },
      {
        type: "paragraph",
        content:
          "Drafts variance commentary, stress scenarios, and management questions from approved tables. Humans own controls, audit trails, signed numbers, and board packs.",
      },
      {
        type: "visual",
        diagram: {
          title: "Finance is high-stakes",
          variant: "compare",
          nodes: [
            {
              id: "ok",
              label: "Allowed AI help",
              sublabel: "Explain approved tables · draft questions · scenario outlines",
            },
            {
              id: "no",
              label: "Not allowed alone",
              sublabel: "Invent board figures · approve spends · replace controller sign-off",
            },
          ],
        },
      },
      {
        type: "list",
        items: [
          "FreshBasket example: “Why did personal-care margin fall while revenue looked busy?”",
          "Always require: source table, time period, and a human check before any number is shared upward.",
        ],
      },
      {
        type: "heading",
        content: "5) AI Operations Manager",
      },
      {
        type: "paragraph",
        content:
          "Highlights store exceptions (queues, stockouts, refill misses), drafts daily action lists, summarises vendor issues. Humans own staffing, supplier negotiations, and customer make-goods.",
      },
      {
        type: "list",
        items: [
          "FreshBasket inputs: stockout logs, queue times, refill compliance, vendor OTIF.",
          "Outputs: Sunday dairy action list, exception ranking by store, vendor escalation draft.",
          "Guardrail: never auto-cut staff or auto-penalise vendors without human review.",
        ],
      },
      {
        type: "heading",
        content: "6) AI Business Consultant",
      },
      {
        type: "paragraph",
        content:
          "Structures problem statements, SWOT drafts, competitor teasers, and executive summaries. Humans own recommendations, politics, and implementation ownership — especially when departments disagree.",
      },
      {
        type: "list",
        items: [
          "FreshBasket outputs: war-room agenda, hypothesis pack, CEO one-pager draft.",
          "Consulting rule: AI proposes; engagement manager decides what is feasible and ethical.",
        ],
      },
      {
        type: "heading",
        content: "7) How the five roles collaborate",
      },
      {
        type: "visual",
        diagram: {
          title: "FreshBasket AI team handoff (simplified)",
          variant: "flow",
          nodes: [
            { id: "ops", label: "Ops AI", sublabel: "Flags stockout exceptions" },
            { id: "fin", label: "Finance AI", sublabel: "Checks margin impact" },
            { id: "mkt", label: "Marketing AI", sublabel: "Drafts targeted offer options" },
            { id: "con", label: "Consultant AI", sublabel: "Builds CEO brief" },
            { id: "hum", label: "Human EXCO", sublabel: "Approves / rejects" },
          ],
          arrows: [
            { from: "ops", to: "fin" },
            { from: "fin", to: "mkt" },
            { from: "mkt", to: "con" },
            { from: "con", to: "hum" },
          ],
        },
      },
      {
        type: "heading",
        content: "8) Hands-on labs — design AI employees",
      },
      {
        type: "paragraph",
        content:
          "Complete every lab on the right. You are designing a realistic AI org chart for FreshBasket — not sci-fi. Paste outputs into Lab Notes.",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Lab A — Five AI role cards (core deliverable)",
            description:
              "Build Marketing, HR, Finance, Operations, and Consultant cards with governance fields.",
            link: { label: "Open ChatGPT", url: "https://chatgpt.com/" },
            commands: [
              "For FreshBasket (Indian supermarket), create 5 AI role cards:",
              "1) AI Marketing Manager",
              "2) AI HR Recruiter",
              "3) AI Financial Analyst",
              "4) AI Operations Manager",
              "5) AI Business Consultant",
              "For each role include: Goal | Inputs | Sample weekly outputs | Risks if unsupervised | One human approval rule | Success KPI",
              "Make it realistic for mid-size grocery retail. No sci-fi.",
            ],
          },
          {
            title: "Lab B — Deepen ONE role (your track)",
            description:
              "Pick the role closest to your career interest and write a weekly operating rhythm.",
            commands: [
              "I choose the AI [REPLACE ROLE] for FreshBasket.",
              "Write a weekly operating rhythm:",
              "Monday inputs needed · Midweek outputs · Friday human review meeting agenda (5 bullets)",
              "Add: top 3 failure modes and how the human manager detects them early",
              "Add: data that must NEVER be pasted into a public chatbot for this role",
            ],
            note: "Replace with Marketing Manager / HR Recruiter / Financial Analyst / Operations Manager / Business Consultant.",
          },
          {
            title: "Lab C — Escalation matrix",
            description:
              "Decide when AI drafts are enough vs when humans must take over.",
            commands: [
              "Create an escalation matrix for FreshBasket AI employees with rows:",
              "Green = AI draft OK with light review",
              "Amber = AI draft + senior human sign-off required",
              "Red = AI must not act; humans only",
              "Give 3 examples per colour across Marketing, HR, Finance, Ops.",
              "Explain why Finance and HR have more Red items.",
            ],
          },
          {
            title: "Lab D — Role conflict simulation",
            description:
              "Marketing AI wants aggressive promos; Finance AI wants margin guards; Ops AI wants stock first.",
            commands: [
              "Simulate a FreshBasket EXCO meeting where three AI drafts conflict:",
              "- Marketing AI: deep weekend discounts on 50 SKUs",
              "- Finance AI: freeze all discounts until margin recovers",
              "- Ops AI: no new promotions until dairy stockouts are fixed",
              "As the human Business Consultant, produce:",
              "1) Shared facts needed before choosing",
              "2) A sequenced 14-day plan that respects all three risks",
              "3) What you tell each AI role to regenerate",
            ],
          },
          {
            title: "Lab E — Org chart one-pager for the CHRO/CEO",
            description:
              "Package the idea for leadership sponsorship.",
            commands: [
              "Write a one-page memo to FreshBasket’s CEO and CHRO titled “Proposed AI Junior Team (Pilot)”.",
              "Include: purpose, five roles in one table, 90-day pilot scope (start with Ops + Consultant only or justify your choice), KPIs, risk controls, change-management note for employees fearing replacement.",
              "Tone: reassuring, practical, boardroom-ready.",
            ],
          },
        ],
      },
      {
        type: "heading",
        content: "Before you continue",
      },
      {
        type: "paragraph",
        content:
          "You are ready for Topic 7 when Lab Notes include: five role cards, one deep weekly rhythm, an escalation matrix, a conflict resolution plan, and a CEO/CHRO pilot memo.",
      },
    ],
    keyTakeaways: [
      "AI roles amplify departments; humans retain accountability.",
      "Every AI role card needs goal, inputs, outputs, risks, approval rules, and a KPI.",
      "Finance and HR deserve stricter Red escalations than most marketing drafts.",
      "When AI roles conflict, humans sequence trade-offs — they do not rubber-stamp the loudest draft.",
    ],
  },

  "mba-d1-h1-t7": {
    topicId: "mba-d1-h1-t7",
    intro:
      "This is the syllabus live demonstration — in LMS form. You will open ChatGPT, ask why a restaurant’s profits fell, and watch how poorly vs well-framed prompts change the quality of AI “thinking.” The café case is a cousin of FreshBasket: revenue soft, profits worse, leaders disagreeing.",
    blocks: [
      {
        type: "heading",
        content: "1) Why this demo matters",
      },
      {
        type: "paragraph",
        content:
          "Leaders often treat ChatGPT like a search box: one vague sentence in, one confident essay out. That produces generic advice. Analyst-quality prompting forces structure — hypotheses, data needs, owners, and restraint — the same discipline you practised in Topics 2–4.",
      },
      {
        type: "tip",
        content:
          "Demo goal: feel the difference between “AI as fortune teller” and “AI as junior analyst under your direction.”",
      },
      {
        type: "heading",
        content: "2) Case brief — UrbanSpice Café",
      },
      {
        type: "paragraph",
        content:
          "UrbanSpice Café is a mid-scale dine-in + takeaway brand in India. For 60 days, profits have fallen. Revenue is only about 3% down. Costs feel higher. Leadership is split: Marketing wants ads; the Chef wants premium ingredients to “win customers back”; the Store Manager wants fewer staff to protect payroll.",
      },
      {
        type: "visual",
        diagram: {
          title: "What the numbers are whispering",
          variant: "compare",
          nodes: [
            {
              id: "rev",
              label: "Revenue ~flat / slight down",
              sublabel: "Suggests demand did not collapse totally",
            },
            {
              id: "profit",
              label: "Profit down harder",
              sublabel: "Points to mix, COGS, labour, wastage, discounts",
            },
          ],
        },
      },
      {
        type: "list",
        items: [
          "Do not start with “cut staff” or “spend on ads” — those are prescriptions without diagnosis.",
          "Profit pressure with soft revenue usually means cost or mix problems (or both).",
          "Your job: force AI to investigate before it preaches.",
        ],
      },
      {
        type: "heading",
        content: "3) How AI “thinks” (manager’s view)",
      },
      {
        type: "paragraph",
        content:
          "Generative AI does not magically know UrbanSpice’s books. It patterns from language: if your prompt is vague, it fills gaps with common restaurant clichés. If your prompt specifies role, constraints, deliverable structure, and scepticism, it behaves more like an analyst checklist.",
      },
      {
        type: "visual",
        diagram: {
          title: "Weak prompt vs strong prompt behaviour",
          variant: "compare",
          nodes: [
            {
              id: "weak",
              label: "Weak prompt path",
              sublabel: "Generic advice · skips evidence · jumps to actions · sounds confident",
            },
            {
              id: "strong",
              label: "Strong prompt path",
              sublabel: "Hypotheses · data needs · owners · NOT-YET list · boardroom tone",
            },
          ],
        },
      },
      {
        type: "heading",
        content: "4) Live walkthrough (do this in order)",
      },
      {
        type: "list",
        items: [
          "Step 1 — Open a fresh ChatGPT chat (do not reuse an old conversation).",
          "Step 2 — Run Prompt A (weak). Save the reply under “Weak output.”",
          "Step 3 — Open a new chat. Run Prompt B (strong). Save under “Strong output.”",
          "Step 4 — Ask the strong follow-ups in Lab C–E on the right.",
          "Step 5 — Write 5 bullets: what improved when the prompt improved.",
        ],
      },
      {
        type: "heading",
        content: "Prompt A — weak (try first)",
      },
      {
        type: "paragraph",
        content:
          "Copy exactly. Notice how quickly AI invents reasons and remedies without asking for data.",
      },
      {
        type: "tip",
        content: "Restaurant profits decreased. Tell me why and what to do.",
      },
      {
        type: "heading",
        content: "Prompt B — strong (run in a new chat)",
      },
      {
        type: "paragraph",
        content:
          "This is analyst prompting. You design the investigation; AI fills the structure.",
      },
      {
        type: "tip",
        content:
          "Act as a senior business analyst for UrbanSpice Café (mid-scale dine-in + takeaway, India).\nProfits fell for 60 days while revenue fell only ~3%.\nProduce:\n1) 6 structured hypotheses across revenue mix, COGS, labour, wastage, discounts, and competition\n2) For each hypothesis: data needed + early warning KPI\n3) A 14-day investigation plan with owners (Manager / Chef / Finance)\n4) Three actions you would NOT take yet — and why\nBe sceptical of vague advice. Sound boardroom-ready.",
      },
      {
        type: "heading",
        content: "5) What “good” looks like in the strong answer",
      },
      {
        type: "list",
        items: [
          "Multiple hypotheses — not one villain story.",
          "Data requests attached to each hypothesis.",
          "Owners on the investigation plan.",
          "A NOT-YET list (especially no blind headcount cut).",
          "Tone that separates facts from assumptions.",
        ],
      },
      {
        type: "heading",
        content: "6) Bridge back to FreshBasket",
      },
      {
        type: "paragraph",
        content:
          "UrbanSpice teaches the method. FreshBasket is the retail twin: sales/profit pressure, competing opinions, temptation to act fast. Topic 8 will give you a supermarket dataset so you apply the same prompting discipline to numbers.",
      },
      {
        type: "heading",
        content: "7) Hands-on labs — practise the live demo",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Lab A — Run weak vs strong prompts",
            description:
              "Complete the core syllabus demo. Save both outputs in Lab Notes side by side.",
            link: { label: "Open ChatGPT", url: "https://chatgpt.com/" },
            commands: [
              "PROMPT A (weak) — paste alone in Chat 1:",
              "Restaurant profits decreased. Tell me why and what to do.",
              "",
              "PROMPT B (strong) — paste alone in a NEW Chat 2:",
              "Act as a senior business analyst for UrbanSpice Café (mid-scale dine-in + takeaway, India).",
              "Profits fell for 60 days while revenue fell only ~3%.",
              "Produce:",
              "1) 6 structured hypotheses across revenue mix, COGS, labour, wastage, discounts, and competition",
              "2) For each hypothesis: data needed + early warning KPI",
              "3) A 14-day investigation plan with owners (Manager / Chef / Finance)",
              "4) Three actions you would NOT take yet — and why",
              "Be sceptical of vague advice. Sound boardroom-ready.",
            ],
            note: "Use two separate chats so weak-chat memory does not pollute the strong run.",
          },
          {
            title: "Lab B — Score the two answers",
            description:
              "Force a structured comparison like a consulting review.",
            commands: [
              "I will paste two AI answers about UrbanSpice Café: Weak and Strong.",
              "[PASTE WEAK OUTPUT]",
              "[PASTE STRONG OUTPUT]",
              "Score each 1–5 on: Structure, Evidence discipline, Actionability, Restraint, executive tone.",
              "Then write 8 bullets: what the strong prompt forced that the weak prompt never requested.",
            ],
          },
          {
            title: "Lab C — Challenge missing data",
            description:
              "Ask AI to attack its own recommendations.",
            commands: [
              "Continuing the UrbanSpice strong analysis:",
              "Challenge your own recommendations.",
              "List the top 10 data items still missing before any major spend or staff cut.",
              "For each item: why it matters | who owns it | how long to collect | decision it unlocks.",
            ],
          },
          {
            title: "Lab D — Translate method to FreshBasket",
            description:
              "Prove you can transfer the demo to the Week 1 retail case.",
            commands: [
              "Rewrite Prompt B for FreshBasket SuperMarket (grocery retail, India) with declining same-store sales for 3 months and profit pressure.",
              "Keep the same disciplines: hypotheses, data needs, 14-day plan with owners, NOT-YET actions.",
              "Then run your rewritten prompt and paste the best CEO-ready summary (max 180 words).",
            ],
          },
          {
            title: "Lab E — Personal prompting checklist card",
            description:
              "Leave with a reusable prompting pattern.",
            commands: [
              "Create a one-page “Analyst Prompt Checklist” with 8 rules based on this UrbanSpice demo.",
              "Include must-have sections every business prompt should request.",
              "Include 5 forbidden vague phrases (like “just tell me what to do”).",
              "Format as a card I can reuse for Day 1–4 labs.",
            ],
          },
        ],
      },
      {
        type: "heading",
        content: "Before you continue",
      },
      {
        type: "paragraph",
        content:
          "You are ready for Topic 8 (dataset lab) when Lab Notes show: weak vs strong outputs, a scored comparison, missing-data challenge, FreshBasket rewritten prompt + summary, and your personal prompting checklist.",
      },
    ],
    keyTakeaways: [
      "Weak prompts produce generic confidence; strong prompts force analyst structure.",
      "Profit down with revenue ~flat points to cost/mix questions — not ads by default.",
      "Always demand missing data and a NOT-YET list before major actions.",
      "The UrbanSpice method transfers directly to FreshBasket and your Day 8 data lab.",
    ],
  },

  "mba-d1-h1-t8": {
    topicId: "mba-d1-h1-t8",
    intro:
      "Day 1 finale: analyse FreshBasket across five related tables. Download the files, open them in Sheets/Excel, then run a complete step-by-step analysis with ChatGPT — KPIs, region/category cuts, promo diagnosis, feedback bridge, recommendations, and a CEO brief.",
    blocks: [
      {
        type: "heading",
        content: "1) What you are analysing",
      },
      {
        type: "paragraph",
        content:
          "FreshBasket is under same-store and margin pressure. Leadership wants facts from linked tables — not one flat spreadsheet dumped into a chatbot. Use the keys (store_id, product_id, promo_id) so AI analysis stays grounded.",
      },
      {
        type: "visual",
        diagram: {
          title: "FreshBasket table map",
          variant: "stack",
          nodes: [
            {
              id: "stores",
              label: "stores — store_id, region, city, format, size",
              sublabel: "Who sells",
            },
            {
              id: "products",
              label: "products — product_id, category, price, cost",
              sublabel: "What is sold",
            },
            {
              id: "sales",
              label: "sales_transactions — txn lines linked to store + product (+ optional promo)",
              sublabel: "What happened",
            },
            {
              id: "promo",
              label: "promotions — promo calendar by product / region",
              sublabel: "What was on offer",
            },
            {
              id: "fb",
              label: "customer_feedback — ratings and themes by store",
              sublabel: "What shoppers said",
            },
          ],
        },
      },
      {
        type: "heading",
        content: "2) Download the tables",
      },
      {
        type: "list",
        items: [
          "Put all five CSVs into one folder.",
          "Import each as its own sheet (tabs: Stores, Products, Sales, Promotions, Feedback).",
          "If your ChatGPT plan supports Advanced Data Analysis / file upload, you can upload the five files in one chat after you skim them.",
          "If upload is unavailable: paste headers + a sample of rows, or paste totals you calculated in Sheets.",
        ],
      },
      {
        type: "heading",
        content: "3) Keys & relationships",
      },
      {
        type: "list",
        items: [
          "sales.store_id → stores.store_id",
          "sales.product_id → products.product_id",
          "sales.promo_id → promotions.promo_id (blank = no promo on that line)",
          "feedback.store_id → stores.store_id",
          "promotions.product_id → products.product_id",
        ],
      },
      {
        type: "heading",
        content: "4) Analysis path (follow in order)",
      },
      {
        type: "visual",
        diagram: {
          title: "Wrong vs right multi-table path",
          variant: "compare",
          nodes: [
            {
              id: "wrong",
              label: "Wrong path",
              sublabel: "Ask for “insights” with no keys → invent joins → skip verification",
            },
            {
              id: "right",
              label: "Right path",
              sublabel: "Understand tables → KPI totals → cuts → promo → feedback → actions → CEO brief",
            },
          ],
        },
      },
      {
        type: "list",
        items: [
          "Step 1 — Download all five tables",
          "Step 2 — Explain the schema and how tables join",
          "Step 3 — Headline KPIs (revenue, cost, profit, margin %)",
          "Step 4 — Performance by region and category",
          "Step 5 — Promo vs non-promo diagnosis",
          "Step 6 — Top / bottom products + feedback bridge",
          "Step 7 — Risks + recommendations with owners",
          "Step 8 — CEO brief + verification",
        ],
      },
      {
        type: "tip",
        content:
          "Rule: if AI invents a number you cannot see in the files (or your Excel totals), reject it. Spot-check totals in Sheets before you trust the CEO brief.",
      },
      {
        type: "heading",
        content: "5) Hands-on — downloads + complete AI analysis",
      },
      {
        type: "paragraph",
        content:
          "Use the Activity Checklist on the right. Download all five tables first, then run Labs A–G in order in ChatGPT. Prefer one chat so context builds — or upload all five CSVs once if your plan allows. Paste outputs into Day 1 → Final Lab in your AI Lab Notes.",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "1 · Download stores",
            description: "Save day1-stores.csv into your FreshBasket folder.",
            link: { label: "day1-stores.csv", url: "/datasets/mba/day1-stores.csv" },
          },
          {
            title: "2 · Download products",
            description: "Save day1-products.csv",
            link: { label: "day1-products.csv", url: "/datasets/mba/day1-products.csv" },
          },
          {
            title: "3 · Download sales transactions",
            description: "Save day1-sales-transactions.csv (~220 lines)",
            link: {
              label: "day1-sales-transactions.csv",
              url: "/datasets/mba/day1-sales-transactions.csv",
            },
          },
          {
            title: "4 · Download promotions",
            description: "Save day1-promotions.csv",
            link: { label: "day1-promotions.csv", url: "/datasets/mba/day1-promotions.csv" },
          },
          {
            title: "5 · Download customer feedback",
            description: "Save day1-customer-feedback.csv — then tick and continue to Lab A.",
            link: {
              label: "day1-customer-feedback.csv",
              url: "/datasets/mba/day1-customer-feedback.csv",
            },
          },

          {
            title: "6 · Lab A — Schema & join check",
            description:
              "Force AI to explain the multi-table model before calculating anything.",
            link: { label: "Open ChatGPT", url: "https://chatgpt.com/" },
            commands: [
              "You are a retail business analyst for FreshBasket SuperMarket (India).",
              "I have five related tables: stores, products, sales_transactions, promotions, customer_feedback.",
              "[UPLOAD the 5 CSVs — or paste each header row]",
              "Explain in plain English:",
              "1) What one row means in each table",
              "2) How the tables join (list the keys)",
              "3) 5 mistakes a junior analyst could make when joining them",
              "Do not invent columns that are not in the files.",
            ],
          },
          {
            title: "7 · Lab B — Headline KPI dashboard",
            description:
              "Get executive totals from sales_transactions (joined where needed).",
            commands: [
              "Using the FreshBasket tables (uploads or data already in this chat):",
              "Calculate:",
              "- Total revenue, total cost, total profit, overall profit margin %",
              "- Total units sold",
              "- Number of transactions / lines",
              "Present as a tight executive table.",
              "Show your calculation logic briefly.",
              "Flag any data-quality issues (blanks, odd promos, impossible margins).",
              "Do not invent numbers that are not supported by the files.",
            ],
            note: "After AI answers, spot-check total revenue and profit in Excel/Sheets.",
          },
          {
            title: "8 · Lab C — Region & category performance",
            description:
              "Cut the business by geography and category using joins.",
            commands: [
              "Continue FreshBasket multi-table analysis.",
              "Join sales → stores (for region) and sales → products (for category).",
              "Produce:",
              "1) Revenue, profit, margin % by region (ranked)",
              "2) Revenue, profit, margin % by category (ranked)",
              "3) Which 2 regions and 2 categories need urgent management attention — and why",
              "Separate facts from assumptions. No invented columns.",
            ],
          },
          {
            title: "9 · Lab D — Promo vs non-promo diagnosis",
            description:
              "Test whether promotions help volume while hurting margin.",
            commands: [
              "Using sales_transactions + promotions (+ products if needed):",
              "Compare lines WITH a promo_id vs WITHOUT (blank promo_id) on:",
              "1) Share of lines / units / revenue / profit",
              "2) Average margin %",
              "3) Categories / products where promo use looks heaviest",
              "Conclude in 8 bullets: commercially healthy, mixed, or risky — and what extra data would confirm.",
              "Do not invent discount amounts beyond what the files support.",
            ],
          },
          {
            title: "10 · Lab E — Product winners, losers & feedback bridge",
            description:
              "Link SKU profit to store feedback themes.",
            commands: [
              "Continue FreshBasket analysis:",
              "1) Top 5 and bottom 5 products by total profit (include product_name + category)",
              "2) From customer_feedback: list stores with weakest ratings and dominant themes (stockout / queue / promo confusion / other)",
              "3) Bridge: which weak-profit or weak-region patterns align with feedback themes?",
              "4) Flag 3 risks with evidence from BOTH sales and feedback.",
              "Mark anything that is assumption vs observed in the files.",
            ],
          },
          {
            title: "11 · Lab F — Recommendations + CEO brief",
            description:
              "Turn findings into owned actions and a leadership document.",
            commands: [
              "Using ONLY findings supported by the FreshBasket tables so far:",
              "1) Prescribe exactly 5 actions for the next 30 days.",
              "Each action: Owner (Marketing / Ops / Finance / HR / Store) | expected KPI movement | review date",
              "2) Add: Three actions we will NOT take yet — and why",
              "3) Write a 220–250 word CEO brief titled “FreshBasket Sales Pulse”.",
              "Structure: Snapshot | What is going well | What is concerning | Decisions needed this month",
              "Tone: calm, precise. Do not invent financials not already calculated.",
            ],
          },
          {
            title: "12 · Lab G — Verification fire drill",
            description:
              "Attack AI numbers before you present them.",
            commands: [
              "Challenge your own FreshBasket analysis.",
              "List 8 places you (or I) should re-check in Excel/Sheets before the CEO meeting.",
              "For each: what to recompute | which tables/keys are involved | how a wrong join would distort the story",
              "Then rewrite a short disclaimer I can paste under the CEO brief about what is verified vs assumed.",
            ],
          },
        ],
      },
      {
        type: "heading",
        content: "Before you finish Day 1",
      },
      {
        type: "paragraph",
        content:
          "Day 1 is complete when Lab Notes include: schema/join notes, a KPI snapshot you spot-checked, region/category cuts, promo diagnosis, feedback bridge, owned recommendations + NOT-YET list, CEO Sales Pulse, and a verification checklist.",
      },
    ],
    keyTakeaways: [
      "Multi-table analysis needs keys — not one vague “insights” ask.",
      "Walk KPIs → cuts → promo → feedback → actions → brief in order.",
      "Recommendations need owners, timelines, and a NOT-YET list.",
      "When AI and the spreadsheet disagree, trust the spreadsheet until proven wrong.",
    ],
  },

  "mba-d1-h2-t1": {
    topicId: "mba-d1-h2-t1",
    intro:
      "Next: prompting as a management skill. Generative AI does not “know” your company — it responds to the instructions you give. This topic shows how weak asks create confident fluff, and how better framing pulls AI toward analyst behaviour.",
    blocks: [
      {
        type: "heading",
        content: "1) What “understanding a prompt” really means",
      },
      {
        type: "paragraph",
        content:
          "AI models predict useful next text given your words, examples, and constraints. They do not open FreshBasket’s ERP, walk the store, or check yesterday’s stockout log unless you provide that evidence. So the prompt is not a magic wish — it is a work brief.",
      },
      {
        type: "tip",
        content:
          "Practical rule: if a human junior analyst could not do a good job from your email alone, AI will struggle too — and it will invent fillers to sound complete.",
      },
      {
        type: "visual",
        diagram: {
          title: "What AI uses from your prompt",
          variant: "stack",
          nodes: [
            {
              id: "role",
              label: "Role & stance",
              sublabel: "Analyst? Marketer? Critic? Skeptical reviewer?",
            },
            {
              id: "facts",
              label: "Facts & context",
              sublabel: "Company, geography, numbers, constraints, time window",
            },
            {
              id: "deliverable",
              label: "Deliverable shape",
              sublabel: "Table, bullets, memo length, sections you named",
            },
            {
              id: "guardrails",
              label: "Guardrails",
              sublabel: "What not to invent · what not to recommend yet · tone",
            },
          ],
        },
      },
      {
        type: "heading",
        content: "2) Bad prompt vs good prompt (same business problem)",
      },
      {
        type: "paragraph",
        content:
          "FreshBasket’s South region same-store sales slipped for 8 weeks. Marketing wants an advertising push. Finance wants margin protection. Here is the same ask — written two ways.",
      },
      {
        type: "visual",
        diagram: {
          title: "Same question · two prompts",
          variant: "compare",
          nodes: [
            {
              id: "bad",
              label: "Weak prompt",
              sublabel: "“Sales are down. What should we do?” → generic ads / cuts / apps advice",
            },
            {
              id: "good",
              label: "Strong prompt",
              sublabel: "Role + FreshBasket facts + sections + NOT-YET list → usable war-room draft",
            },
          ],
        },
      },
      {
        type: "heading",
        content: "Weak prompt (do not use at work)",
      },
      {
        type: "tip",
        content: "Sales are down. What should we do?",
      },
      {
        type: "list",
        items: [
          "No role — AI defaults to a generic coach tone.",
          "No company, channel, geography, or time window.",
          "No deliverable shape — so you get an essay.",
          "No constraints — so it happily invents spend cuts and tech projects.",
        ],
      },
      {
        type: "heading",
        content: "Stronger prompt (working draft)",
      },
      {
        type: "tip",
        content:
          "Act as a retail business analyst for FreshBasket SuperMarket (India).\nContext: South-region same-store sales declined for 8 weeks; margin pressure is rising; Marketing wants ads; Finance wants cost control.\nGoal: prepare a 1-page decision memo for the CEO.\nOutput format:\n1) 5 descriptive facts we still need\n2) 5 diagnostic hypotheses\n3) 3 options with owners and 30-day KPIs\n4) 3 actions we will NOT take yet — and why\nConstraints: do not invent store numbers; separate facts from assumptions; calm executive tone.",
      },
      {
        type: "list",
        items: [
          "Role sets the lens (analyst, not motivational speaker).",
          "Context reduces hallucination about the wrong industry.",
          "Goal + format force a usable document.",
          "Constraints protect the company from reckless “AI confidence.”",
        ],
      },
      {
        type: "heading",
        content: "3) Five signals of a weak AI answer",
      },
      {
        type: "list",
        items: [
          "Starts with actions before diagnosis (“cut prices / run ads / launch an app”).",
          "Uses buzzwords with no FreshBasket specifics.",
          "Gives fake-precise numbers you never supplied.",
          "Offers one villain story instead of competing hypotheses.",
          "Never says what data is still missing.",
        ],
      },
      {
        type: "heading",
        content: "4) Hands-on labs — feel the difference",
      },
      {
        type: "paragraph",
        content:
          "Complete every lab on the right. Use two separate ChatGPT chats for weak vs strong. Paste outputs into Day 1 of your AI Lab Notes under “Prompting.”",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Lab A — Run weak vs strong (FreshBasket South)",
            description:
              "Experience how the same problem changes when the brief improves.",
            link: { label: "Open ChatGPT", url: CHATGPT_URL },
            commands: [
              "CHAT 1 — Weak (paste alone):",
              "Sales are down. What should we do?",
              "",
              "CHAT 2 — Strong (paste alone in a NEW chat):",
              "Act as a retail business analyst for FreshBasket SuperMarket (India).",
              "Context: South-region same-store sales declined for 8 weeks; margin pressure is rising; Marketing wants ads; Finance wants cost control.",
              "Goal: prepare a 1-page decision memo for the CEO.",
              "Output format:",
              "1) 5 descriptive facts we still need",
              "2) 5 diagnostic hypotheses",
              "3) 3 options with owners and 30-day KPIs",
              "4) 3 actions we will NOT take yet — and why",
              "Constraints: do not invent store numbers; separate facts from assumptions; calm executive tone.",
            ],
            note: "Use two chats so weak-chat memory does not dilute the strong run.",
          },
          {
            title: "Lab B — Score both answers",
            description:
              "Review like an engagement manager, not a fan of long essays.",
            commands: [
              "I will paste two AI answers about FreshBasket South decline: Weak and Strong.",
              "[PASTE WEAK]",
              "[PASTE STRONG]",
              "Score each 1–5 on: Specificity, Evidence discipline, Structure, Restraint, Executive usefulness.",
              "Then list 8 concrete upgrades the strong prompt forced.",
            ],
          },
          {
            title: "Lab C — Rewrite a terrible workplace prompt",
            description:
              "Practise converting a vague ask into a usable brief.",
            commands: [
              "Rewrite this workplace prompt into a strong business brief:",
              "“Make our customers happier with AI.”",
              "Company: FreshBasket SuperMarket (India).",
              "Must include: Role, Context, Goal, Output format (numbered sections), Constraints.",
              "Then run your rewritten prompt and paste a 120-word CEO-ready summary of the reply.",
            ],
          },
          {
            title: "Lab D — Catch invented precision",
            description:
              "Train skepticism toward confident fake numbers.",
            commands: [
              "Here is a weak AI claim: “FreshBasket lost exactly 17.3% of South customers because of slow checkouts and should cut 12 cashiers while spending ₹18 lakh on ads this week.”",
              "Critique it in 10 bullets: what was invented, what evidence is missing, what a responsible next ask would be.",
              "Rewrite a short reply that asks for data before any headcount or ad spend.",
            ],
          },
          {
            title: "Lab E — Personal “prompt smell test” card",
            description:
              "Leave with a reusable checklist for Day 1–4.",
            commands: [
              "Create a one-page “Prompt Smell Test” card with:",
              "- 6 signs my prompt is too weak",
              "- 6 signs an AI answer is unsafe to act on",
              "- A 5-line template I can reuse: Role / Context / Goal / Format / Constraints",
              "Keep language plain. FreshBasket examples OK.",
            ],
          },
        ],
      },
      {
        type: "heading",
        content: "Before you continue",
      },
      {
        type: "paragraph",
        content:
          "You are ready for the next topic (Business Prompt Framework) when AI Lab Notes include: weak vs strong outputs, a scored comparison, one rewritten workplace prompt, an invented-precision critique, and your Prompt Smell Test card.",
      },
    ],
    keyTakeaways: [
      "AI responds to your brief — it does not magically know the business.",
      "Weak prompts invite generic confidence; strong prompts force structure and restraint.",
      "Always separate facts supplied, assumptions, and missing data.",
      "If you would not approve the same ask to a junior analyst, do not send it to AI.",
    ],
  },

  "mba-d1-h2-t2": {
    topicId: "mba-d1-h2-t2",
    intro:
      "Turn last topic’s instincts into a reusable system. Every strong business prompt is five blocks: Role · Context · Goal · Output format · Constraints. Master this framework once — reuse it for marketing, finance, HR, ops, and strategy for the rest of the program.",
    blocks: [
      {
        type: "heading",
        content: "1) The five-block brief",
      },
      {
        type: "paragraph",
        content:
          "Think of prompting like writing a clear assignment email to a sharp junior consultant. You would never write “fix sales.” You would say who they are for this task, what they know, what “done” looks like, how to present it, and what they must not invent.",
      },
      {
        type: "visual",
        diagram: {
          title: "Business Prompt Framework (R-C-G-F-C)",
          variant: "stack",
          nodes: [
            {
              id: "r",
              label: "1 · Role",
              sublabel: "Who should AI act as — and with what stance?",
            },
            {
              id: "c1",
              label: "2 · Context",
              sublabel: "Company, situation, numbers, stakeholders, time window",
            },
            {
              id: "g",
              label: "3 · Goal",
              sublabel: "The decision or document you need — not “insights please”",
            },
            {
              id: "f",
              label: "4 · Format",
              sublabel: "Sections, tables, length, tone, audience",
            },
            {
              id: "c2",
              label: "5 · Constraints",
              sublabel: "What not to invent · what not to recommend yet · ethics / brand",
            },
          ],
        },
      },
      {
        type: "tip",
        content:
          "Memory aid: Role → Context → Goal → Format → Constraints. If one block is missing, the answer usually fails in a predictable way.",
      },
      {
        type: "heading",
        content: "2) Role prompting",
      },
      {
        type: "paragraph",
        content:
          "Role sets the lens. “Helpful assistant” drifts into generic advice. “Retail category analyst for FreshBasket” pulls language, KPIs, and trade-offs toward grocery retail.",
      },
      {
        type: "list",
        items: [
          "Weak: “You are an AI.”",
          "Better: “Act as a FreshBasket category manager for Dairy.”",
          "Stronger: “Act as a skeptical retail analyst who challenges Marketing spend claims.”",
          "Add stance when it matters: coach vs critic vs facilitator vs risk reviewer.",
        ],
      },
      {
        type: "heading",
        content: "3) Context prompting",
      },
      {
        type: "paragraph",
        content:
          "Context is the factual fuel. Without it, AI fills gaps with industry clichés. Give only what is true or clearly labelled as assumption.",
      },
      {
        type: "list",
        items: [
          "Who: FreshBasket SuperMarket, India, multi-store grocery",
          "What is happening: e.g. South same-store sales soft for 8 weeks; margin pressure",
          "Who cares: CEO, Marketing, Finance, Store Ops — and what each wants",
          "Time window: last 8 weeks / next 30 days",
          "Data available vs missing: “we have promo flags; we do not yet have footfall”",
        ],
      },
      {
        type: "heading",
        content: "4) Goal prompting",
      },
      {
        type: "paragraph",
        content:
          "A goal is a decision or deliverable, not a vibe. Compare “make it better” with “prepare three pricing options for Friday’s category review.”",
      },
      {
        type: "visual",
        diagram: {
          title: "Vague goal vs decision goal",
          variant: "compare",
          nodes: [
            {
              id: "vague",
              label: "Vague goal",
              sublabel: "“Help with promotions” → essay of tips you already know",
            },
            {
              id: "clear",
              label: "Decision goal",
              sublabel: "“Recommend keep / cut / redesign for 5 promo SKUs before Friday P&L”",
            },
          ],
        },
      },
      {
        type: "heading",
        content: "5) Output formatting",
      },
      {
        type: "paragraph",
        content:
          "Format is how you force usable work product. Name the sections, table columns, bullet limits, and audience. AI follows structure better than vibes.",
      },
      {
        type: "list",
        items: [
          "Name sections: Snapshot | Hypotheses | Options | NOT-YET | Open questions",
          "Ask for tables with columns you define",
          "Cap length: “max 180 words” or “exactly 5 bullets”",
          "Name the reader: “CEO one-pager” vs “store manager checklist”",
        ],
      },
      {
        type: "heading",
        content: "6) Constraints",
      },
      {
        type: "paragraph",
        content:
          "Constraints protect the company. They tell AI what not to invent and what not to recommend yet. This is where managerial judgment lives.",
      },
      {
        type: "list",
        items: [
          "Do not invent revenue, margin, or footfall figures.",
          "Separate facts / assumptions / unknown.",
          "No across-the-board headcount cut without data.",
          "No competitor claims without a source label.",
          "Tone: calm, precise, no buzzword stacking.",
        ],
      },
      {
        type: "heading",
        content: "7) Full example — five blocks assembled",
      },
      {
        type: "tip",
        content:
          "ROLE: Act as a FreshBasket retail analyst (skeptical of ad-spend-first answers).\nCONTEXT: Grocery India; Personal Care promo intensity rose; margin % softened in the sample sales file; Finance challenges Marketing.\nGOAL: Prepare a Friday category-review pack.\nFORMAT:\n1) 6-bullet snapshot\n2) Table: Hypothesis | Evidence needed | Owner\n3) Three options (Keep / Cut / Redesign promo) with 30-day KPI\n4) Three NOT-YET actions\nCONSTRAINTS: Do not invent store numbers; mark assumptions; executive tone; max 1 page equivalent.",
      },
      {
        type: "heading",
        content: "8) Hands-on labs — build the framework muscle",
      },
      {
        type: "paragraph",
        content:
          "Complete every lab on the right. Paste outputs under Day 1 in your AI Lab Notes. Prefer FreshBasket so later demos stay continuous.",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Lab A — Label a prompt’s five blocks",
            description:
              "Prove you can see the framework inside a finished brief.",
            link: { label: "Open ChatGPT", url: CHATGPT_URL },
            commands: [
              "Here is a business prompt:",
              "\"Act as a FreshBasket store operations coach. South stores report longer queues on Sundays. Goal: a 7-day pilot plan for Andheri & Koramangala. Format: Day-by-day actions | Owner | KPI | Risk. Constraints: no permanent headcount cuts; do not invent queue times; list missing data.\"",
              "Label each sentence as Role, Context, Goal, Format, or Constraints.",
              "Then rewrite any weak block to make it stronger — keep total length similar.",
            ],
          },
          {
            title: "Lab B — Role switch experiment",
            description:
              "Same facts, three roles — see how the lens changes.",
            commands: [
              "Use identical FreshBasket context:",
              "Dairy margin soft for 6 weeks; revenue roughly flat; promo_flag heavy on butter & cheese.",
              "Run THREE separate answers with only the ROLE changing:",
              "1) Optimistic Marketing Manager",
              "2) Conservative CFO",
              "3) Skeptical retail analyst",
              "Goal for all: 8 bullets of next steps.",
              "Then write a 10-line comparison: what each role over-weighted or ignored.",
            ],
            note: "Use one chat with clear resets, or three short chats labelled by role.",
          },
          {
            title: "Lab C — Goal + Format upgrade",
            description:
              "Turn a vague ask into a decision-ready deliverable.",
            commands: [
              "Upgrade this weak prompt using Goal + Format only first:",
              "\"Help FreshBasket with HR.\"",
              "Then add Role, Context, and Constraints so all five blocks are present.",
              "Topic focus: weekend staffing gaps in West region.",
              "Run the final prompt and paste a CEO-ready 120-word summary of the output.",
            ],
          },
          {
            title: "Lab D — Constraints fire drill",
            description:
              "Practice adding guardrails that stop reckless recommendations.",
            commands: [
              "Write a five-block prompt for FreshBasket finance review.",
              "Problem: AI previously recommended cutting 20% store staff and launching a mobile app in 2 weeks.",
              "Your Constraints section must block both ideas unless evidence appears.",
              "Also require: missing-data list + NOT-YET actions.",
              "Run it once and score the answer 1–5 on restraint.",
            ],
          },
          {
            title: "Lab E — Pocket template card",
            description:
              "Leave with a reusable R-C-G-F-C card for all later hours.",
            commands: [
              "Create a one-page “Business Prompt Template” card with blank fields for:",
              "Role | Context | Goal | Format | Constraints",
              "Add 3 FreshBasket example fills (Marketing, Finance, Operations).",
              "Add a mini checklist: “Before I hit Enter — did I complete all five?”",
            ],
          },
        ],
      },
      {
        type: "heading",
        content: "Before you continue",
      },
      {
        type: "paragraph",
        content:
          "You are ready for Live Prompt Demos when AI Lab Notes include: a labelled five-block prompt, a three-role comparison, an upgraded HR/staffing brief, a constraints fire drill, and your pocket R-C-G-F-C template.",
      },
    ],
    keyTakeaways: [
      "Strong prompts are five blocks: Role · Context · Goal · Format · Constraints.",
      "Role sets the lens; context supplies facts; goal names the decision.",
      "Format makes the output usable; constraints protect the business.",
      "Missing any block usually produces a predictable failure mode.",
    ],
  },

  "mba-d1-h2-t3": {
    topicId: "mba-d1-h2-t3",
    intro:
      "Apply R-C-G-F-C across six workplace patterns used constantly in business: Marketing · Sales · Finance · HR · SWOT · Strategy. Each demo is FreshBasket-ready — copy, run, critique, and save the best outputs in your AI Lab Notes.",
    blocks: [
      {
        type: "heading",
        content: "1) How to use this live-demo hour",
      },
      {
        type: "paragraph",
        content:
          "Do not binge all six in silence. For each pattern: open a fresh chat, run the strong prompt, then ask one follow-up that challenges missing data. You are training judgment — not collecting essays.",
      },
      {
        type: "visual",
        diagram: {
          title: "Six prompt patterns this topic covers",
          variant: "stack",
          nodes: [
            {
              id: "mkt",
              label: "1 · Marketing campaign",
              sublabel: "Message · offer · channel · KPI · brand constraints",
            },
            {
              id: "sales",
              label: "2 · Sales analysis",
              sublabel: "Describe → diagnose → options with owners",
            },
            {
              id: "fin",
              label: "3 · Financial analysis",
              sublabel: "Margin · promo risk · decisions Finance will challenge",
            },
            {
              id: "hr",
              label: "4 · HR policy",
              sublabel: "Fairness · clarity · escalation · what AI must not invent",
            },
            {
              id: "swot",
              label: "5 · SWOT",
              sublabel: "Evidence-tagged strengths/weaknesses — not slogan soup",
            },
            {
              id: "strat",
              label: "6 · Business strategy",
              sublabel: "Options · trade-offs · 90-day moves · NOT-YET list",
            },
          ],
        },
      },
      {
        type: "tip",
        content:
          "Before you paste: glance at Role · Context · Goal · Format · Constraints. If a demo feels weak after running, the missing block is usually Context or Constraints.",
      },
      {
        type: "heading",
        content: "2) Demo 1 — Marketing campaign",
      },
      {
        type: "paragraph",
        content:
          "Goal: a campaign brief Marketing can take to a Friday review — not a pile of taglines.",
      },
      {
        type: "tip",
        content:
          "ROLE: Act as a FreshBasket brand marketing lead (practical, not hype).\nCONTEXT: India grocery retail; Personal Care margin soft; promo intensity already high; target shoppers: urban families in West & South; brand promise: fresh + fair prices.\nGOAL: Draft a 14-day campaign to protect margin while defending share.\nFORMAT:\n1) Campaign objective (1 line)\n2) Audience + insight\n3) Offer options (3) with margin risk note\n4) Channel plan (store + digital)\n5) KPIs + 14-day dashboard\n6) Brand/legal do-nots\nCONSTRAINTS: No fake competitor stats; no “go viral” claims; do not invent discounts already approved; calm executive tone.",
      },
      {
        type: "heading",
        content: "3) Demo 2 — Sales analysis",
      },
      {
        type: "paragraph",
        content:
          "Goal: a store/region sales pack that diagnosis before prescription.",
      },
      {
        type: "tip",
        content:
          "ROLE: Act as a FreshBasket commercial analyst.\nCONTEXT: Same-store sales soft in South for 8 weeks; revenue roughly flat, margin pressure; Marketing wants ads; Store Ops cites stockouts.\nGOAL: Produce a sales analysis pack for the weekly business review.\nFORMAT:\n1) Descriptive snapshot (facts only)\n2) 5 diagnostic hypotheses with evidence needed\n3) Region vs category questions to ask next\n4) 3 action options with Owner + 30-day KPI\n5) NOT-YET list\nCONSTRAINTS: Do not invent store numbers; separate facts/assumptions/unknowns; no across-the-board staff cut.",
      },
      {
        type: "heading",
        content: "4) Demo 3 — Financial analysis",
      },
      {
        type: "paragraph",
        content:
          "Goal: a Finance-ready read of promo vs margin trade-offs.",
      },
      {
        type: "tip",
        content:
          "ROLE: Act as a FreshBasket FP&A partner (skeptical of vanity revenue).\nCONTEXT: Sample sell-out data shows promo_flag on several Personal Care and Dairy lines; leadership wants growth without burning margin.\nGOAL: Prepare a finance challenge memo for the promo calendar.\nFORMAT:\n1) Questions Finance should ask Marketing (8)\n2) Table: Risk | Why it matters | Data needed | Owner\n3) Three decision options: Keep / Cut / Redesign promos\n4) 30-day KPI set for Finance\n5) Red flags that should stop a proposal\nCONSTRAINTS: Do not invent INR totals; label every number as “from data” vs “illustrative”; no app-build recommendation.",
      },
      {
        type: "heading",
        content: "5) Demo 4 — HR policy",
      },
      {
        type: "paragraph",
        content:
          "Goal: a clear draft policy/checklist — fair, actionable, escalations defined. AI must not invent legal clauses.",
      },
      {
        type: "tip",
        content:
          "ROLE: Act as an HR business partner for FreshBasket retail stores.\nCONTEXT: West-region stores report Sunday staffing strain; managers want temporary overtime rules that feel fair; brand values: respect + safety.\nGOAL: Draft a practical Sunday staffing policy note for store managers.\nFORMAT:\n1) Purpose (3 lines)\n2) Eligibility & scheduling rules (bullets)\n3) Overtime / swap process\n4) Escalation path (Store Manager → Area → HR)\n5) 5 FAQs employees will ask\n6) Open legal/compliance questions for real HR counsel\nCONSTRAINTS: Do not invent Indian labour-law clauses; mark all legal items as “verify with counsel”; no permanent headcount cut recommendation in this draft.",
      },
      {
        type: "heading",
        content: "6) Demo 5 — SWOT analysis",
      },
      {
        type: "paragraph",
        content:
          "Goal: an evidence-tagged SWOT — each cell says why, not just a slogan.",
      },
      {
        type: "tip",
        content:
          "ROLE: Act as a strategy facilitator for FreshBasket.\nCONTEXT: Multi-store grocery India; sales pressure in some regions; promo intensity rising; competition from quick-commerce and local kirana; strength in fresh produce reputation (assumption — label it).\nGOAL: Build an evidence-disciplined SWOT for the quarterly leadership offsite.\nFORMAT: 2×2 SWOT table. Each cell: 4 bullets max. Tag each bullet Evidence / Assumption / Unknown.\nThen add: Top 5 strategic questions the SWOT does NOT answer yet.\nCONSTRAINTS: No buzzword stacking; no fake market-share %; separate FreshBasket specifics from generic retail advice.",
      },
      {
        type: "heading",
        content: "7) Demo 6 — Business strategy",
      },
      {
        type: "paragraph",
        content:
          "Goal: strategic options with trade-offs — not a single “vision” paragraph.",
      },
      {
        type: "visual",
        diagram: {
          title: "Strategy prompt must force trade-offs",
          variant: "compare",
          nodes: [
            {
              id: "weak",
              label: "Weak strategy ask",
              sublabel: "“Give FreshBasket a strategy” → generic transformation speech",
            },
            {
              id: "strong",
              label: "Strong strategy ask",
              sublabel: "3 options · costs/risks · 90-day moves · what we refuse to do yet",
            },
          ],
        },
      },
      {
        type: "tip",
        content:
          "ROLE: Act as a consulting engagement manager advising FreshBasket’s CEO.\nCONTEXT: Declining same-store pressure in parts of the network; margin risk from promos; debate between ads, assortment fixes, and cost cuts; 90-day planning horizon.\nGOAL: Present three strategic options for the next quarter.\nFORMAT:\nFor each option: Thesis | What must be true | 90-day moves | Investment/risk | KPI\nThen: Recommended sequencing | NOT-YET list | Board questions\nCONSTRAINTS: No invented financials; no “digital transformation” filler; choose a primary recommendation and say what you would stall.",
      },
      {
        type: "heading",
        content: "8) Hands-on labs — run the six demos",
      },
      {
        type: "paragraph",
        content:
          "Complete every lab on the right. Save each best output under Day 1 → “Live demos.” Prefer new chats per domain so roles do not blur.",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Lab A — Marketing + Sales pair",
            description:
              "Run Demo 1 and Demo 2. Compare how Marketing vs Sales frames the same pressure.",
            link: { label: "Open ChatGPT", url: CHATGPT_URL },
            commands: [
              "Run the Marketing campaign prompt (Demo 1) in Chat A.",
              "Run the Sales analysis prompt (Demo 2) in Chat B.",
              "Then paste both summaries and ask:",
              "Where do Marketing and Sales agree? Where do they conflict?",
              "Write an 8-bullet facilitation note a CEO could use to run the meeting.",
            ],
          },
          {
            title: "Lab B — Finance challenge memo",
            description:
              "Run Demo 3 and force a missing-data follow-up.",
            commands: [
              "Run the Financial analysis prompt (Demo 3).",
              "Follow-up: “Attack your own memo. List 10 data items still missing before approving any promo redesign.”",
              "Save the memo + missing-data list in Lab Notes.",
            ],
          },
          {
            title: "Lab C — HR policy with legal humility",
            description:
              "Run Demo 4. Check that AI did not invent hard law.",
            commands: [
              "Run the HR policy prompt (Demo 4).",
              "Critique the output:",
              "1) Did it invent legal clauses?",
              "2) Is the escalation path clear?",
              "3) Rewrite any overconfident legal line into “verify with counsel.”",
              "Paste the cleaned policy note (max 250 words).",
            ],
          },
          {
            title: "Lab D — SWOT evidence tags",
            description:
              "Run Demo 5. Demand Evidence / Assumption / Unknown tags.",
            commands: [
              "Run the SWOT prompt (Demo 5).",
              "If any bullet lacks a tag, ask AI to retag the whole matrix.",
              "Then ask: which 3 Unknowns would change strategy most if answered this month?",
            ],
          },
          {
            title: "Lab E — Strategy options + judgment",
            description:
              "Run Demo 6. Practice choosing and stalling.",
            commands: [
              "Run the Business strategy prompt (Demo 6).",
              "Then: “Argue against your primary recommendation in 8 bullets.”",
              "Finally write YOUR call in 6 lines: pick an option, name what you stall, name the first KPI you would watch.",
            ],
          },
          {
            title: "Lab F — Pattern library card",
            description:
              "Leave with a six-pattern cheat sheet for later hours.",
            commands: [
              "Create a one-page “Six Business Prompt Patterns” card.",
              "For each of Marketing, Sales, Finance, HR, SWOT, Strategy: 1-line purpose + must-have Format sections + 1 Constraint that prevents hallucinations.",
              "Keep it scannable for live meetings.",
            ],
          },
        ],
      },
      {
        type: "heading",
        content: "Before you continue",
      },
      {
        type: "paragraph",
        content:
          "You are ready for the Prompt Improvement Workshop when AI Lab Notes include: Marketing–Sales facilitation note, Finance memo + missing data, cleaned HR policy, tagged SWOT, a strategy call you own, and the six-pattern card.",
      },
    ],
    keyTakeaways: [
      "Same framework, six workplace shapes — Marketing through Strategy.",
      "Sales and Finance prompts must diagnose before they spend or cut.",
      "HR prompts need escalation paths and legal humility.",
      "SWOT and strategy prompts fail when they skip evidence tags and trade-offs.",
    ],
  },

  "mba-d1-h2-t4": {
    topicId: "mba-d1-h2-t4",
    intro:
      "Practise the real skill: write a weak prompt, upgrade it with R-C-G-F-C, compare outputs, and keep the better version. You will do this across Marketing, HR, Finance, Sales, and Operations — FreshBasket stays the single case.",
    blocks: [
      {
        type: "heading",
        content: "1) The improvement loop",
      },
      {
        type: "paragraph",
        content:
          "Professionals do not need “perfect prompts” on the first try. They need a repeatable upgrade loop: draft → run → score → rewrite → re-run. This workshop is that loop, five times.",
      },
      {
        type: "visual",
        diagram: {
          title: "Prompt improvement loop",
          variant: "stack",
          nodes: [
            {
              id: "d1",
              label: "1 · Draft weak",
              sublabel: "Capture the vague workplace ask honestly",
            },
            {
              id: "d2",
              label: "2 · Score gaps",
              sublabel: "Which of Role / Context / Goal / Format / Constraints is missing?",
            },
            {
              id: "d3",
              label: "3 · Rewrite strong",
              sublabel: "Fill every block; add NOT-YET and missing-data asks",
            },
            {
              id: "d4",
              label: "4 · Compare outputs",
              sublabel: "Keep what is specific, evidence-disciplined, and owned",
            },
          ],
        },
      },
      {
        type: "tip",
        content:
          "Scoring rubric (1–5 each): Specificity · Evidence discipline · Structure · Restraint · Executive usefulness. Upgrade any score ≤3 before you save the prompt to your Lab Notes library.",
      },
      {
        type: "heading",
        content: "2) Starter weak prompts (do not ship these)",
      },
      {
        type: "list",
        items: [
          "Marketing: “Make a campaign for FreshBasket.”",
          "HR: “Fix staff problems.”",
          "Finance: “Tell me about profits.”",
          "Sales: “Why are sales down and what to do?”",
          "Operations: “Improve store operations with AI.”",
        ],
      },
      {
        type: "heading",
        content: "3) What “better” looks like after an upgrade",
      },
      {
        type: "visual",
        diagram: {
          title: "Weak output vs upgraded output",
          variant: "compare",
          nodes: [
            {
              id: "w",
              label: "Weak output",
              sublabel: "Generic tips · no owners · invented precision · jumps to spend/cuts",
            },
            {
              id: "s",
              label: "Upgraded output",
              sublabel: "Named sections · hypotheses · owners · KPIs · NOT-YET list",
            },
          ],
        },
      },
      {
        type: "heading",
        content: "4) Hands-on workshop — five upgrades",
      },
      {
        type: "paragraph",
        content:
          "Complete every lab on the right. Use separate chats for weak vs strong when comparing. Paste both versions and your scorecard into Day 1 → Workshop.",
      },
      {
        type: "setup-checklist",
        setupSteps: [
          {
            title: "Lab A — Marketing upgrade",
            description:
              "Turn a vague campaign ask into a Friday-review brief.",
            link: { label: "Open ChatGPT", url: CHATGPT_URL },
            commands: [
              "CHAT 1 — Weak:",
              "Make a campaign for FreshBasket.",
              "",
              "CHAT 2 — Rewrite with full R-C-G-F-C for Personal Care margin pressure in West & South. Include offer options with margin risk, channels, KPIs, and do-nots.",
              "Score both 1–5 on the five-point rubric. Save the winning prompt + best output.",
            ],
          },
          {
            title: "Lab B — HR upgrade",
            description:
              "Upgrade staffing chaos into a fair, escalated policy draft.",
            commands: [
              "Weak: “Fix staff problems.”",
              "Rewrite for FreshBasket West Sunday staffing strain.",
              "Must include: Role, Context, Goal, Format (rules + escalation + FAQs), Constraints (no invented labour law).",
              "Run and critique: did AI invent legal clauses? Clean if needed.",
            ],
          },
          {
            title: "Lab C — Finance upgrade",
            description:
              "Force margin discipline and missing-data humility.",
            commands: [
              "Weak: “Tell me about profits.”",
              "Rewrite as an FP&A challenge memo on FreshBasket promo intensity vs margin.",
              "Require: questions for Marketing, risk table, Keep/Cut/Redesign options, red flags, no invented INR totals.",
              "Follow-up: list 8 missing data items before any promo approval.",
            ],
          },
          {
            title: "Lab D — Sales upgrade",
            description:
              "Stop the jump from “sales down” to instant ads/cuts.",
            commands: [
              "Weak: “Why are sales down and what to do?”",
              "Rewrite for FreshBasket South 8-week softness with Marketing vs Ops conflict.",
              "Force: descriptive snapshot → hypotheses → options with owners → NOT-YET.",
              "Compare weak vs strong in 10 bullets.",
            ],
          },
          {
            title: "Lab E — Operations upgrade + library",
            description:
              "Finish with ops, then build your personal prompt library card.",
            commands: [
              "Weak: “Improve store operations with AI.”",
              "Rewrite for queue/stock issues on Sundays at Andheri & Koramangala — 7-day pilot only.",
              "Then create a “Prompt Upgrade Library” card with your 5 winning prompts (titles + 1-line purpose each).",
              "Add a personal rule: “I never save a prompt that lacks Constraints.”",
            ],
          },
        ],
      },
      {
        type: "heading",
        content: "Before you continue",
      },
      {
        type: "paragraph",
        content:
          "This section is complete when Lab Notes hold five upgraded prompts, scorecards, and your Prompt Upgrade Library. Next: Final Lab — FreshBasket Multi-Table Analysis.",
      },
    ],
    keyTakeaways: [
      "Improvement is a loop: draft → score → rewrite → compare.",
      "Every function upgrade still needs all five R-C-G-F-C blocks.",
      "Save winning prompts — your library compounds across the program.",
      "A prompt without Constraints is not ready for real decisions.",
    ],
  }
};
