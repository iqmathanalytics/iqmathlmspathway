import type { TopicLesson } from "@/lib/types";
import { mbaAiDay1ExcelLabs } from "./mba-ai-day1-excel-labs";
import { mbaAiDay1FinalProject } from "./mba-ai-day1-final-project";

const CHATGPT_URL = "https://chatgpt.com/";

/**
 * Day 1 lessons — theory (reading) + Excel labs (practice) + Power Pivot final project.
 * Hands-on practice is in Excel labs only; ChatGPT prompts there summarise Excel outputs.
 */
export const mbaAiDay1Lessons: Record<string, TopicLesson> = {
  ...mbaAiDay1ExcelLabs,
  ...mbaAiDay1FinalProject,
  "mba-d1-h1-t1": {
    topicId: "mba-d1-h1-t1",
    intro:
      "Welcome to Day 1. This topic covers the 4-day course structure, expected outcomes by Day 4, and how generative AI is used across common business functions. Theory topics today are for reading; practice is in the Excel labs at the end of Day 1.",
    blocks: [
      { type: "single-column", content: "" },
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "By the end of this topic you should be able to outline the 4-day pathway, state what “done” looks like after Day 4, and explain the working rule for AI in this course: AI drafts and accelerates analysis; you remain responsible for framing problems, verifying evidence, and recommending actions.",
      },
      {
        type: "tip",
        content:
          "Working rule for the next 4 days: treat AI like a capable junior analyst. You set the brief, check the evidence, and own the recommendation. Labs ask you to critique AI output, not accept it uncritically.",
      },
      {
        type: "heading",
        content: "2) Course roadmap — the 4-day pathway",
      },
      {
        type: "paragraph",
        content:
          "Each day is one LMS module. Open them in order. Inside a day, finish topics from top to bottom.",
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
              label: "Day 2 — Power BI & Prompts",
              sublabel: "Interactive dashboard + prompt frameworks",
            },
            {
              id: "d3",
              label: "Day 3 — Chatbots & API Integration",
              sublabel: "Groq APIs · LangChain · memory · tools · Yahoo Finance",
            },
      {
              id: "d4",
              label: "Day 4 — RAG & Data Analysis",
              sublabel: "Document RAG · FAISS · PDF Q&A · LLM insights",
            }
    ],
        },
      },
      {
        type: "list",
        items: [
          "Day 1 focus: learn BA and AI foundations, then solve 25 Excel questions on real datasets and summarise outputs with ChatGPT.",
          "Day 2 focus: build an interactive Power BI retail dashboard and practise prompt engineering for analytics briefs.",
          "Day 3 focus: build chatbots with Groq + LangChain — memory, tools, and Yahoo Finance.",
          "Day 4 focus: ground answers in company documents with RAG, then generate data insights with LLMs."
    ],
      },
      {
        type: "heading",
        content: "3) Expected outcomes (what “done” looks like)",
      },
      {
        type: "paragraph",
        content:
          "By the end of Day 4 you should be able to do the following in a business review:",
      },
      {
        type: "list",
        items: [
          "Translate a vague business worry into an analytics question (descriptive → diagnostic → predictive → prescriptive).",
          "Write prompts that force structure: hypotheses, KPIs, owners, and “what not to do yet”.",
          "Rebuild the retail model in Power BI with DAX KPIs, visuals, and prompt-engineered briefs.",
          "Brief an AI system using company documents and challenge the answer quality.",
          "Build a grounded RAG desk and an LLM insight memo from real data."
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
              label: "Day 1 Excel labs",
              sublabel: "5 datasets · formulas · pivots · charts · AI summaries",
            },
            {
              id: "p2",
              label: "Day 2 Power BI dashboard",
              sublabel: "9-table model · DAX KPIs · interactive pages · AI brief",
            },
            {
              id: "p3",
              label: "Day 3 Major project",
              sublabel: "Multi-tool Business Analyst chatbot (LangChain + Yahoo + FAQ)",
            },
      {
              id: "p4",
              label: "Day 4 Capstone",
              sublabel: "FreshBasket Intelligence Desk: RAG + PDF + insight memo",
            }
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
            { id: "sc", label: "Supply Chain", sublabel: "Demand, stockouts, SLA" }
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
          "Supply Chain — faster demand narratives; humans still own supplier negotiations and risk."
    ],
      },
      {
        type: "tip",
        content:
          "Teaching story for Day 1 concepts: FreshBasket SuperMarket — a mid-size Indian grocery chain seeing three months of same-store sales decline. Practice later uses real Superstore and other public datasets in Excel.",
      }
    ],
    keyTakeaways: [
      "This is a 4-day pathway: Excel & Power Pivot → Power BI & prompts → LangChain chatbots → RAG & AI data analysis.",
      "Success is measured by decision quality and clear recommendations — not coding volume.",
      "AI supports every function, but people retain ownership of sensitive and irreversible decisions.",
      "Critique AI summaries of Excel results the same way you would review a junior analyst’s draft.",
    ],
  },

  "mba-d1-h1-t2": {
    topicId: "mba-d1-h1-t2",
    intro:
      "Topic 2 defines Business Analytics in professional terms. By the end you should explain BA vs BI in plain English, walk the Data → Decision chain using FreshBasket, and describe how a business analyst uses AI as an assistant while retaining judgment. Practice comes in the Excel labs at the end of Day 1.",
    blocks: [
      { type: "single-column", content: "" },
      {
        type: "heading",
        content: "1) Definition — what Business Analytics really means",
      },
      {
        type: "paragraph",
        content:
          "Business Analytics (BA) is the disciplined use of data, reasoning, and domain judgment to answer business questions, measure performance, and recommend actions. Charts and models are tools; the purpose is better managerial decisions, not charts for their own sake or handing judgment to an algorithm.",
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
          "An owner who will act (Marketing / Finance / Ops / Store Manager / CEO)."
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
            }
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
          "Investors and boards increasingly expect evidence-backed narrative, not storytelling alone."
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
            }
    ],
        },
      },
      {
        type: "list",
        items: [
          "BI answer example: “Dairy revenue is down 8% MoM; South stores are weakest.”",
          "BA answer example: “Stockouts + competitor weekend promo explain most of the drop; restock Sundays and test a targeted offer on top-10 SKUs.”",
          "Think of BI as the car’s gauges. Think of BA as navigation plus a recommended route — with reasons.",
          "You need both. Dashboards without investigation become wallpaper. Investigations without reliable reporting become drama."
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
            { id: "decision", label: "Decision", sublabel: "Action with an owner" }
    ],
          arrows: [
            { from: "data", to: "info" },
            { from: "info", to: "insight" },
            { from: "insight", to: "decision" }
    ],
        },
      },
      {
        type: "list",
        items: [
          "Data — POS lines, inventory levels, footfall counters, promo flags, customer complaints.",
          "Information — “Dairy units sold fell 12% in South stores during Sundays.”",
          "Insight — “Sunday dairy stockouts coincide with peak footfall; competitor ran weekend discounts.”",
          "Decision — “Raise Sunday dairy safety stock; launch a weekend counter-offer on 10 SKUs; review in 14 days.”"
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
            { id: "s4", label: "Analyse & communicate", sublabel: "Findings, risks, options, recommended action" }
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
          "Generative AI accelerates drafting, clustering, and first-pass structure — BA still owns judgment."
    ],
      },
      {
        type: "tip",
        content:
          "Career framing: In many firms the title varies (BA, Business Insights, Strategy Analyst, Category Analyst). The skill set is the same: problem framing → evidence → recommendation → stakeholder communication.",
      }
    ],
    keyTakeaways: [
      "BA = evidence-backed questions and actions; value appears only when decisions change.",
      "BI monitors “what happened”; BA investigates why / what next / what to do.",
      "Force every analysis through Data → Information → Insight → Decision.",
      "The Business Analyst owns framing and judgment; AI accelerates drafts, not accountability."
    ],
  },

  "mba-d1-h1-t3": {
    topicId: "mba-d1-h1-t3",
    intro:
      "Leaders often say “we need analytics” without saying which question they mean. This topic gives you four labels you can use in any meeting — Descriptive, Diagnostic, Predictive, Prescriptive — all explained through one supermarket crisis so the differences stick.",
    blocks: [
      { type: "single-column", content: "" },
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
            { id: "d4", label: "Prescriptive — What should we do?", sublabel: "Actions, trade-offs, owners, timelines" }
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
          "Typical outputs: KPI dashboard, category/region rank table, weekly sales flash."
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
            }
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
          "Diagnostic output: ranked causes, evidence for/against each, “still missing data” list."
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
          "Predictive outputs: trend outlook, scenario table (base / downside / upside), early-warning KPIs."
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
            { id: "a4", label: "14-day checkpoint", sublabel: "CEO war room" }
    ],
          arrows: [
            { from: "a1", to: "a2" },
            { from: "a2", to: "a3" },
            { from: "a3", to: "a4" }
    ],
        },
      },
      {
        type: "list",
        items: [
          "Good prescription names: action, owner, cost/risk, expected KPI movement, review date.",
          "Also name what NOT to do yet (e.g. “no across-the-board headcount cut until stockout evidence is checked”).",
          "AI can draft options quickly — managers still choose trade-offs and ethics."
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
            }
    ],
        },
      }
    ],
    keyTakeaways: [
      "Descriptive = what happened; Diagnostic = why; Predictive = what next; Prescriptive = what to do.",
      "One business crisis — like FreshBasket — should be examined with all four lenses.",
      "Never jump to prescriptions without at least light descriptive + diagnostic evidence.",
      "Demand assumptions on predictions; demand owners and “not yet” lists on prescriptions."
    ],
  },

  "mba-d1-h1-t4": {
    topicId: "mba-d1-h1-t4",
    intro:
      "Analytics is not an “IT project parked in a corner.” Every business function already asks questions that data — and Generative AI — can accelerate. This topic maps Marketing, Sales, Finance, HR, Operations, and Supply Chain onto FreshBasket, then trains you to facilitate cross-functional debate like a consultant.",
    blocks: [
      { type: "single-column", content: "" },
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
            { id: "sc", label: "Supply Chain", sublabel: "Stock & suppliers" }
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
            }
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
          "Supply Chain KPI example: fill rate, days of cover, supplier OTIF (on time in full)."
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
            { id: "act", label: "Decision log", sublabel: "What we do · what we do not" }
    ],
          arrows: [
            { from: "facts", to: "hyp" },
            { from: "hyp", to: "opts" },
            { from: "opts", to: "trade" },
            { from: "trade", to: "act" }
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
          "Step 5 — Set a 14-day review where functions report the same KPIs."
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
          "Supply Chain — draft supplier issue memos and SLA exception packs."
    ],
      }
    ],
    keyTakeaways: [
      "Every function has analytics questions — always attach a KPI and a decision owner.",
      "Cross-functional crises need shared facts before competing solutions.",
      "Sequence actions across Marketing, Finance, Ops, and Supply — avoid all-or-nothing fights.",
      "Generative AI can draft functional briefs; humans own trade-offs, fairness, and board numbers."
    ],
  },

  "mba-d1-h1-t5": {
    topicId: "mba-d1-h1-t5",
    intro:
      "You do not need to become a machine-learning engineer. You do need a clean executive vocabulary so you can brief vendors, sponsor projects, and govern risk. This topic explains AI, Machine Learning, Deep Learning, Generative AI, and LLMs using only business language and FreshBasket examples — using clear business language.",
    blocks: [
      { type: "single-column", content: "" },
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
            { id: "gen", label: "Generative AI + LLMs", sublabel: "Creates drafts, summaries, scenarios, dialogue" }
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
          "Leadership risk: treating AI as magic rather than a managed capability with owners and controls."
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
            }
    ],
        },
      },
      {
        type: "list",
        items: [
          "Business uses: demand forecasting, churn/propensity scoring, credit risk, next-best-offer ranking.",
          "FreshBasket example: predict which SKUs need higher Sunday stock based on history.",
          "Leadership ownership: define the target (what to predict), accept/reject thresholds, and monitor drift when behaviour changes."
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
          "Leadership caution: deep learning systems can be costly and opaque — demand pilot KPIs and failure cases."
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
            }
    ],
        },
      },
      {
        type: "list",
        items: [
          "FreshBasket GenAI uses: draft leadership review agenda, summarise customer complaints, create first-pass CEO narrative from approved tables.",
          "LLM limitation: fluency ≠ truth. It can sound right while being wrong.",
          "Working rule: treat every GenAI answer as a draft until verified against data, policy, or an expert."
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
            { id: "f5", label: "KPI", sublabel: "How do we know it worked?" }
    ],
          arrows: [
            { from: "f1", to: "f2" },
            { from: "f2", to: "f3" },
            { from: "f3", to: "f4" },
            { from: "f4", to: "f5" }
    ],
        },
      }
    ],
    keyTakeaways: [
      "AI is the umbrella; ML learns from data; deep learning handles complex signals; Generative AI/LLMs draft and dialogue.",
      "Leaders sponsor use cases, KPIs, owners, and risk controls — not model maths.",
      "Fluency is not truth: verify numbers, policies, and recommendations before acting.",
      "Protect confidential people and finance data from uncontrolled public AI tools."
    ],
  },

  "mba-d1-h1-t6": {
    topicId: "mba-d1-h1-t6",
    intro:
      "Topic 5 gave you vocabulary. Topic 6 turns that into role design: imagine Generative AI as a junior colleague inside Marketing, HR, Finance, Operations, and Consulting. Powerful when scoped; dangerous when unsupervised. We stay with FreshBasket and design role cards you can reuse at work.",
    blocks: [
      { type: "single-column", content: "" },
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
            }
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
          "Do not allow alone: public claims about health/price guarantees, final budget release."
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
          "Critical risk: bias and discrimination if historical hiring patterns are copied blindly."
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
            }
    ],
        },
      },
      {
        type: "list",
        items: [
          "FreshBasket example: “Why did personal-care margin fall while revenue looked busy?”",
          "Always require: source table, time period, and a human check before any number is shared upward."
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
          "Guardrail: never auto-cut staff or auto-penalise vendors without human review."
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
          "FreshBasket outputs: leadership review agenda, hypothesis pack, CEO one-pager draft.",
          "Working rule: AI proposes options; people decide what is feasible, ethical, and owned.",
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
            { id: "hum", label: "Human EXCO", sublabel: "Approves / rejects" }
    ],
          arrows: [
            { from: "ops", to: "fin" },
            { from: "fin", to: "mkt" },
            { from: "mkt", to: "con" },
            { from: "con", to: "hum" }
    ],
        },
      }
    ],
    keyTakeaways: [
      "AI roles amplify departments; humans retain accountability.",
      "Every AI role card needs goal, inputs, outputs, risks, approval rules, and a KPI.",
      "Finance and HR deserve stricter Red escalations than most marketing drafts.",
      "When AI roles conflict, humans sequence trade-offs — they do not rubber-stamp the loudest draft."
    ],
  },

  "mba-d1-h1-t7": {
    topicId: "mba-d1-h1-t7",
    intro:
      "This is the syllabus live demonstration — in LMS form. This demo walks through why a restaurant’s profits fell, and how poorly vs well-framed prompts change the quality of AI “thinking.” The café case is a cousin of FreshBasket: revenue soft, profits worse, leaders disagreeing.",
    blocks: [
      { type: "single-column", content: "" },
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
            }
    ],
        },
      },
      {
        type: "list",
        items: [
          "Do not start with “cut staff” or “spend on ads” — those are prescriptions without diagnosis.",
          "Profit pressure with soft revenue usually means cost or mix problems (or both).",
          "Your job: force AI to investigate before it preaches."
    ],
      },
      {
        type: "heading",
        content: "3) How AI “thinks” (manager’s view)",
      },
      {
        type: "paragraph",
        content:
          "Generative AI does not already know UrbanSpice’s books. It patterns from language: if your prompt is vague, it fills gaps with common restaurant clichés. If your prompt specifies role, constraints, deliverable structure, and scepticism, it behaves more like an analyst checklist.",
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
            }
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
          "Step 5 — Write 5 bullets: what improved when the prompt improved."
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
          "Tone that separates facts from assumptions."
    ],
      },
      {
        type: "heading",
        content: "6) Bridge back to FreshBasket",
      },
      {
        type: "paragraph",
        content:
          "UrbanSpice teaches the method. FreshBasket is the retail twin: sales/profit pressure, competing opinions, temptation to act fast. The Excel labs later today apply the same discipline: analyse in Excel first, then ask ChatGPT to summarise your outputs.",
      }
    ],
    keyTakeaways: [
      "Weak prompts produce generic advice; strong prompts force analyst structure.",
      "Profit down with revenue ~flat points to cost/mix questions — not ads by default.",
      "Always demand missing data and a NOT-YET list before major actions.",
      "The UrbanSpice method transfers directly to FreshBasket examples and today’s Excel labs."
    ],
  },


  "mba-d1-h2-t1": {
    topicId: "mba-d1-h2-t1",
    intro:
      "Next: prompting as a management skill. Generative AI does not “know” your company — it responds to the instructions you give. This topic shows how weak asks create confident fluff, and how better framing pulls AI toward analyst behaviour.",
    blocks: [
      { type: "single-column", content: "" },
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
            }
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
              sublabel: "Role + FreshBasket facts + sections + NOT-YET list → usable review draft",
            }
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
          "No constraints — so it happily invents spend cuts and tech projects."
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
          "Constraints protect the company from reckless “AI confidence.”"
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
          "Never says what data is still missing."
    ],
      }
    ],
    keyTakeaways: [
      "AI responds to your brief — it does not already know the business.",
      "Weak prompts invite generic advice; strong prompts force structure and restraint.",
      "Always separate facts supplied, assumptions, and missing data.",
      "If you would not approve the same ask to a junior analyst, do not send it to AI.",
    ],
  },

  "mba-d1-h2-t2": {
    topicId: "mba-d1-h2-t2",
    intro:
      "This topic turns the previous ideas into a reusable system. Every strong business prompt uses five blocks: Role · Context · Goal · Output format · Constraints. Learn the framework once and reuse it for marketing, finance, HR, operations, and strategy throughout the program.",
    blocks: [
      { type: "single-column", content: "" },
      {
        type: "heading",
        content: "1) The five-block brief",
      },
      {
        type: "paragraph",
        content:
          "Prompting is similar to writing a clear assignment brief for a junior analyst. A vague ask such as “fix sales” is not enough. State the role for the task, the context they have, what “done” looks like, how to present the answer, and what they must not invent.",
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
            }
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
          "Add stance when it matters: coach vs critic vs facilitator vs risk reviewer."
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
          "Data available vs missing: “we have promo flags; we do not yet have footfall”"
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
            }
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
          "Name the reader: “CEO one-pager” vs “store manager checklist”"
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
          "Tone: calm, precise, no buzzword stacking."
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
      }
    ],
    keyTakeaways: [
      "Strong prompts are five blocks: Role · Context · Goal · Format · Constraints.",
      "Role sets the lens; context supplies facts; goal names the decision.",
      "Format makes the output usable; constraints protect the business.",
      "Missing any block usually produces a predictable failure mode."
    ],
  },

  "mba-d1-h2-t3": {
    topicId: "mba-d1-h2-t3",
    intro:
      "Apply R-C-G-F-C across six workplace patterns used constantly in business: Marketing · Sales · Finance · HR · SWOT · Strategy. Each demo is FreshBasket-ready so you can recognise strong prompt patterns before the Excel labs.",
    blocks: [
      { type: "single-column", content: "" },
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
            }
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
          "ROLE: Act as a FreshBasket brand marketing lead (practical, evidence-led).\nCONTEXT: India grocery retail; Personal Care margin soft; promo intensity already high; target shoppers: urban families in West & South; brand promise: fresh + fair prices.\nGOAL: Draft a 14-day campaign to protect margin while defending share.\nFORMAT:\n1) Campaign objective (1 line)\n2) Audience + insight\n3) Offer options (3) with margin risk note\n4) Channel plan (store + digital)\n5) KPIs + 14-day dashboard\n6) Brand/legal do-nots\nCONSTRAINTS: No fake competitor stats; no “go viral” claims; do not invent discounts already approved; calm professional tone.",
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
            }
    ],
        },
      },
      {
        type: "tip",
        content:
          "ROLE: Act as a consulting advisor to FreshBasket’s CEO.\nCONTEXT: Declining same-store pressure in parts of the network; margin risk from promos; debate between ads, assortment fixes, and cost cuts; 90-day planning horizon.\nGOAL: Present three strategic options for the next quarter.\nFORMAT:\nFor each option: Thesis | What must be true | 90-day moves | Investment/risk | KPI\nThen: Recommended sequencing | NOT-YET list | Board questions\nCONSTRAINTS: No invented financials; no vague transformation language; choose a primary recommendation and say what you would stall.",
      }
    ],
    keyTakeaways: [
      "Same framework, six workplace shapes — Marketing through Strategy.",
      "Sales and Finance prompts must diagnose before they spend or cut.",
      "HR prompts need escalation paths and legal humility.",
      "SWOT and strategy prompts fail when they skip evidence tags and trade-offs."
    ],
  },

  "mba-d1-h2-t4": {
    topicId: "mba-d1-h2-t4",
    intro:
      "Practise the real skill: write a weak prompt, upgrade it with R-C-G-F-C, compare outputs, and keep the better version. You will do this across Marketing, HR, Finance, Sales, and Operations — FreshBasket stays the single case.",
    blocks: [
      { type: "single-column", content: "" },
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
            }
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
          "Operations: “Improve store operations with AI.”"
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
            }
    ],
        },
      }
    ],
    keyTakeaways: [
      "Improvement is a loop: draft → score → rewrite → compare.",
      "Every function upgrade still needs all five R-C-G-F-C blocks.",
      "Save winning prompts — your library compounds across the program.",
      "A prompt without Constraints is not ready for real decisions."
    ],
  }
};
