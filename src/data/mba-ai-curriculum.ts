import type { Module } from "@/lib/types";

/**
 * AI for Business Analytics — day modules.
 * Topics are ordered learning steps within each day.
 */
export const mbaAiModules: Module[] = [
  {
    id: 1,
    name: "Day 1 — Data Analysis with ChatGPT",
    slug: "mba-day1-foundations",
    course: "mba-ai",
    description:
      "Learn business analytics and AI foundations, practise Excel analysis on real datasets, then finish with a 9-table Power Pivot retail dashboard project.",
    icon: "D1",
    iconImage: "/images/logos/mba-ai-course.svg",
    iconAlt: "Day 1 logo",
    phase: "day-1",
    topics: [
      {
        id: "mba-d1-h1-t1",
        title: "Program Roadmap & Learning Outcomes",
        slug: "program-roadmap",
        description: "Course overview, outcomes, and what you will build by Day 4.",
        estimatedMinutes: 12,
        published: true,
      },
      {
        id: "mba-d1-h1-t2",
        title: "What is Business Analytics?",
        slug: "what-is-business-analytics",
        description: "Definition, BA vs BI, and the path from data to decisions.",
        estimatedMinutes: 15,
        published: true,
      },
      {
        id: "mba-d1-h1-t3",
        title: "Four Types of Business Analytics",
        slug: "four-types-of-analytics",
        description: "Descriptive, diagnostic, predictive, and prescriptive — with one retail story.",
        estimatedMinutes: 18,
        published: true,
      },
      {
        id: "mba-d1-h1-t4",
        title: "Analytics Across Business Functions",
        slug: "analytics-across-functions",
        description: "Marketing, sales, finance, HR, operations, and supply chain questions.",
        estimatedMinutes: 15,
        published: true,
      },
      {
        id: "mba-d1-h1-t5",
        title: "AI, ML, Deep Learning & Generative AI",
        slug: "ai-for-business-leaders",
        description: "Business meanings of AI, ML, DL, GenAI, and LLMs — no heavy tech.",
        estimatedMinutes: 15,
        published: true,
      },
      {
        id: "mba-d1-h1-t6",
        title: "AI Roles Across the Enterprise",
        slug: "ai-roles-in-enterprise",
        description: "How AI supports marketing, HR, finance, operations, and consulting.",
        estimatedMinutes: 12,
        published: true,
      },
      {
        id: "mba-d1-h1-t7",
        title: "Live Demo: AI as a Business Analyst",
        slug: "ai-as-business-analyst-demo",
        description: "How a structured analyst prompt differs from a vague ask — read and learn the pattern.",
        estimatedMinutes: 15,
        published: true,
      },
      {
        id: "mba-d1-h2-t1",
        title: "How AI Reads Prompts",
        slug: "how-ai-reads-prompts",
        description: "What AI actually responds to — and why vague asks produce generic advice.",
        estimatedMinutes: 15,
        published: true,
      },
      {
        id: "mba-d1-h2-t2",
        title: "Business Prompt Framework",
        slug: "business-prompt-framework",
        description: "Role, context, goal, output format, and constraints — the five building blocks.",
        estimatedMinutes: 18,
        published: true,
      },
      {
        id: "mba-d1-h2-t3",
        title: "Live Prompt Demos: Marketing to Strategy",
        slug: "live-prompt-demos",
        description: "Six business prompt patterns across marketing, sales, finance, HR, SWOT, and strategy.",
        estimatedMinutes: 22,
        published: true,
      },
      {
        id: "mba-d1-h2-t4",
        title: "Prompt Improvement Workshop",
        slug: "prompt-improvement-workshop",
        description: "How to score and upgrade prompts — concepts you will reuse when summarising Excel outputs.",
        estimatedMinutes: 15,
        published: true,
      },
      {
        id: "mba-d1-lab-t1",
        title: "Excel Lab 1 — Superstore Sales & Profit",
        slug: "excel-lab-superstore",
        description:
          "5 Excel questions on Sample Superstore: formulas, pivots, charts, then ChatGPT insight summary.",
        estimatedMinutes: 40,
        published: true,
      },
      {
        id: "mba-d1-lab-t2",
        title: "Excel Lab 2 — Online Retail Transactions",
        slug: "excel-lab-online-retail",
        description:
          "5 Excel questions on UCI Online Retail (UK extract): revenue, products, returns.",
        estimatedMinutes: 40,
        published: true,
      },
      {
        id: "mba-d1-lab-t3",
        title: "Excel Lab 3 — Telco Customer Churn",
        slug: "excel-lab-telco-churn",
        description:
          "5 Excel questions on IBM Telco Churn: rates, contracts, tenure bands, charts.",
        estimatedMinutes: 40,
        published: true,
      },
      {
        id: "mba-d1-lab-t4",
        title: "Excel Lab 4 — HR Attrition Analytics",
        slug: "excel-lab-hr-attrition",
        description:
          "5 Excel questions on IBM HR Attrition: departments, overtime, income bands.",
        estimatedMinutes: 40,
        published: true,
      },
      {
        id: "mba-d1-lab-t5",
        title: "Excel Lab 5 — Hotel Bookings & Day 1 Wrap",
        slug: "excel-lab-hotel-bookings",
        description:
          "5 Excel questions on hotel bookings, then a Day 1 Google Doc synthesis with ChatGPT.",
        estimatedMinutes: 45,
        published: true,
      },
      {
        id: "mba-d1-lab-t6",
        title: "Final Project — Retail Sales Power Pivot Dashboard",
        slug: "final-project-retail-power-pivot",
        description:
          "Load 9 related retail tables, model relationships in Power Pivot, build KPIs, pivots, charts, and an executive dashboard.",
        estimatedMinutes: 75,
        published: true,
      },
    ],
  },
  {
    id: 2,
    name: "Day 2 — Power BI Dashboard Development & Prompt Engineering",
    slug: "mba-day2-market-intelligence",
    course: "mba-ai",
    description:
      "Learn Power BI modeling, DAX, and visuals on the bike-retail model, practise prompt engineering on real extracts, then build a Financial Sample executive dashboard as the Day 2 capstone.",
    icon: "D2",
    iconImage: "/images/logos/mba-ai-course.svg",
    iconAlt: "Day 2 logo",
    phase: "day-2",
    topics: [
      {
        id: "mba-d2-t1",
        title: "Power BI for Business Leaders",
        slug: "power-bi-for-business-leaders",
        description: "What Power BI is — then load stores.csv and create your first Card visual.",
        estimatedMinutes: 18,
        published: true,
      },
      {
        id: "mba-d2-t2",
        title: "Power BI Workflow: Data → Model → Visuals",
        slug: "power-bi-workflow",
        description:
          "Get Data → Power Query → Model → Report — practise by shaping orders.csv date types.",
        estimatedMinutes: 20,
        published: true,
      },
      {
        id: "mba-d2-t3",
        title: "Data Modeling & Relationships in Power BI",
        slug: "power-bi-data-modeling",
        description:
          "Fact vs dimension + ERD — then build a 3-table mini-model (customers, orders, stores).",
        estimatedMinutes: 25,
        published: true,
      },
      {
        id: "mba-d2-t4",
        title: "DAX Fundamentals for KPIs",
        slug: "dax-fundamentals-for-kpis",
        description: "Measures vs columns — create Net Sales on order_items and pin it to a Card.",
        estimatedMinutes: 25,
        published: true,
      },
      {
        id: "mba-d2-t5",
        title: "Visuals, KPIs & Dashboard Best Practices",
        slug: "visuals-kpis-dashboard-best-practices",
        description: "Layout rules — build Card + Store bar + Store slicer and test interactions.",
        estimatedMinutes: 22,
        published: true,
      },
      {
        id: "mba-d2-t6",
        title: "Prompt Engineering Fundamentals",
        slug: "prompt-engineering-fundamentals",
        description:
          "Why vague prompts fail — weak vs strong analysis on a Financial Sample slice in ChatGPT.",
        estimatedMinutes: 22,
        published: true,
      },
      {
        id: "mba-d2-t7",
        title: "Prompt Frameworks for Business Analytics",
        slug: "prompt-frameworks-business-analytics",
        description:
          "R-C-G-F-C on products/brands — write and run one complete assortment prompt with evidence.",
        estimatedMinutes: 22,
        published: true,
      },
      {
        id: "mba-d2-t8",
        title: "Prompting Techniques That Improve Analysis",
        slug: "prompting-techniques-improve-analysis",
        description:
          "Evidence-only, critique loops, NOT-YET — practise on country pivots from Financial Sample.",
        estimatedMinutes: 22,
        published: true,
      },
      {
        id: "mba-d2-lab-t1",
        title: "Power BI Lab — Load & Model Retail Sales",
        slug: "power-bi-lab-load-model",
        description:
          "Load the 9 retail CSVs into Power BI Desktop, fix types, and create relationships matching the data model.",
        estimatedMinutes: 40,
        published: true,
      },
      {
        id: "mba-d2-lab-t2",
        title: "Power BI Lab — Measures, Visuals & Slicers",
        slug: "power-bi-lab-measures-visuals",
        description:
          "Create DAX KPIs, build core visuals, and add synced slicers on the retail model.",
        estimatedMinutes: 45,
        published: true,
      },
      {
        id: "mba-d2-lab-t3",
        title: "Final Project — Financial Sample Interactive Dashboard",
        slug: "final-project-power-bi-dashboard",
        description:
          "New dataset: Microsoft Financial Sample — two-page interactive dashboard + ChatGPT CEO brief.",
        estimatedMinutes: 70,
        published: true,
      },
    ],
  },
  {
    id: 3,
    name: "Day 3 — AI Chatbot Development & API Integration",
    slug: "mba-day3-enterprise-rag",
    course: "mba-ai",
    description:
      "Twelve Colab labs: Groq chat → templates → streaming agents with Wikipedia, DuckDuckGo, YouTube, Arxiv, Yahoo, then custom tools in a multi-tool desk.",
    icon: "D3",
    iconImage: "/images/logos/mba-ai-course.svg",
    iconAlt: "Day 3 logo",
    phase: "day-3",
    topics: [
      {
        id: "mba-d3-t1",
        title: "AI Chatbots for Business — Big Picture",
        slug: "ai-chatbots-for-business-big-picture",
        description:
          "What business chatbots are, how LLM APIs work, and the Day 3 ladder from first call to a tool-using desk.",
        estimatedMinutes: 20,
        published: true,
      },
      {
        id: "mba-d3-t2",
        title: "Google Colab + Groq Key (Safe Setup)",
        slug: "colab-groq-key-safe-setup",
        description:
          "Open Colab, install packages, load GROQ_API_KEY with getpass — never hardcode secrets.",
        estimatedMinutes: 25,
        published: true,
      },
      {
        id: "mba-d3-t3",
        title: "Your First LLM API Call",
        slug: "first-llm-api-call",
        description:
          "One Groq chat completion, then practice: same question at two temperatures.",
        estimatedMinutes: 30,
        published: true,
      },
      {
        id: "mba-d3-t4",
        title: "System vs User Messages (Personas)",
        slug: "system-vs-user-persona-magic",
        description:
          "System persona vs user question — CEO vs Intern answers on the same business ask.",
        estimatedMinutes: 30,
        published: true,
      },
      {
        id: "mba-d3-t5",
        title: "Build a Chat Loop (No Framework)",
        slug: "build-chat-loop-no-framework",
        description:
          "Plain Python list of messages — a 3-turn FreshBasket analyst that remembers context.",
        estimatedMinutes: 35,
        published: true,
      },
      {
        id: "mba-d3-t6",
        title: "LangChain ChatGroq — Same Bot, Cleaner Code",
        slug: "langchain-chatgroq-cleaner-code",
        description:
          "Rewrite the bot with ChatGroq + HumanMessage / AIMessage — side-by-side with raw Groq.",
        estimatedMinutes: 30,
        published: true,
      },
      {
        id: "mba-d3-t7",
        title: "Prompt Templates for Reusable Briefs",
        slug: "prompt-templates-reusable-briefs",
        description:
          "One template, two audiences — Managers vs Board briefs by changing one variable.",
        estimatedMinutes: 30,
        published: true,
      },
      {
        id: "mba-d3-t8",
        title: "Conversation Memory with Streaming Agents",
        slug: "conversation-memory-feels-smart",
        description:
          "Streaming memory agent remembers name + region so follow-ups like “that region” resolve correctly.",
        estimatedMinutes: 35,
        published: true,
      },
      {
        id: "mba-d3-t9",
        title: "Your First Real Tool — Wikipedia",
        slug: "first-real-tool-wikipedia",
        description:
          "Streaming Wikipedia agent — ask in English and watch the tool + answer print live.",
        estimatedMinutes: 35,
        published: true,
      },
      {
        id: "mba-d3-t10",
        title: "Live Web Search — DuckDuckGo",
        slug: "live-web-search-duckduckgo",
        description:
          "Streaming DuckDuckGo agent returns fresh web snippets — no manual tool loops.",
        estimatedMinutes: 35,
        published: true,
      },
      {
        id: "mba-d3-t11",
        title: "More Real Tools — YouTube, Arxiv & Yahoo Finance",
        slug: "more-real-tools-youtube-arxiv-yahoo",
        description:
          "One streaming agent with YouTube, Arxiv, and Yahoo Finance — watch which tool fires.",
        estimatedMinutes: 40,
        published: true,
      },
      {
        id: "mba-d3-t12",
        title: "Custom Tools + Capstone Multi-Tool Desk",
        slug: "custom-tools-capstone-multi-tool-desk",
        description:
          "Add custom calculator + FAQ, then stream one multi-tool agent (real + custom) for the capstone.",
        estimatedMinutes: 50,
        published: true,
      },
    ],
  },
  {
    id: 4,
    name: "Day 4 — Retrieval-Augmented Generation (RAG) & AI-Powered Data Analysis",
    slug: "mba-day4-agentic-business",
    course: "mba-ai",
    description:
      "Build grounded document Q&A with RAG (TF-IDF → FAISS), real company PDFs, LLM data analysis, summarization, and a FreshBasket Intelligence Desk capstone.",
    icon: "D4",
    iconImage: "/images/logos/mba-ai-course.svg",
    iconAlt: "Day 4 logo",
    phase: "day-4",
    topics: [
      {
        id: "mba-d4-t1",
        title: "RAG Big Picture — Why Models Need Documents",
        slug: "rag-big-picture-why-models-need-documents",
        description:
          "Query → Retrieve → Augment → Generate — why LLMs invent company facts without your files.",
        estimatedMinutes: 20,
        published: true,
      },
      {
        id: "mba-d4-t2",
        title: "Feel the Gap — Chat vs Company Knowledge",
        slug: "feel-the-gap-chat-vs-company-knowledge",
        description:
          "Same FreshBasket HR question: unaided LLM vs answer grounded in a policy extract.",
        estimatedMinutes: 30,
        published: true,
      },
      {
        id: "mba-d4-t3",
        title: "Chunking Documents the Right Way",
        slug: "chunking-documents-the-right-way",
        description:
          "Split policy text into chunks; print count and preview — the foundation of every RAG pipeline.",
        estimatedMinutes: 30,
        published: true,
      },
      {
        id: "mba-d4-t4",
        title: "Mini RAG with TF-IDF Retrieval",
        slug: "mini-rag-with-tfidf-retrieval",
        description:
          "Retrieve the best FreshBasket chunks, then answer with Groq — show RETRIEVED before ANSWER.",
        estimatedMinutes: 40,
        published: true,
      },
      {
        id: "mba-d4-t5",
        title: "Vector Stores with FAISS",
        slug: "vector-stores-with-faiss",
        description:
          "Embeddings + FAISS similarity search — upgrade from TF-IDF to semantic vector retrieval.",
        estimatedMinutes: 40,
        published: true,
      },
      {
        id: "mba-d4-t6",
        title: "PDF RAG — Real Company Filings",
        slug: "pdf-rag-real-company-filings",
        description:
          "Grounded Q&A over the ITC Supplier Code PDF with source-aware answers.",
        estimatedMinutes: 40,
        published: true,
      },
      {
        id: "mba-d4-t7",
        title: "Multi-Document Knowledge Desk",
        slug: "multi-document-knowledge-desk",
        description:
          "ITC + HUL Quarterly (+ DMart stretch) with tagged sources in every answer.",
        estimatedMinutes: 45,
        published: true,
      },
      {
        id: "mba-d4-t8",
        title: "AI-Powered Data Analysis with LLMs",
        slug: "ai-powered-data-analysis-with-llms",
        description:
          "Pandas KPIs on a real CSV, then a Groq insight brief — numbers first, narrative second.",
        estimatedMinutes: 40,
        published: true,
      },
      {
        id: "mba-d4-t9",
        title: "Summarization & Business Insight Generation",
        slug: "summarization-business-insight-generation",
        description:
          "Turn FY highlights / report extracts into a crisp CEO one-pager.",
        estimatedMinutes: 35,
        published: true,
      },
      {
        id: "mba-d4-t10",
        title: "Capstone — FreshBasket Intelligence Desk",
        slug: "capstone-freshbasket-intelligence-desk",
        description:
          "Full RAG desk + PDF grounding + CSV insight memo — refuse when sources are silent.",
        estimatedMinutes: 55,
        published: true,
      },
    ],
  },
  {
    id: 5,
    name: "Add On",
    slug: "mba-add-on",
    course: "mba-ai",
    description:
      "Video-based Excel and Power BI add-ons — open a section, click a topic, and watch.",
    icon: "AO",
    iconImage: "/images/logos/mba-ai-course.svg",
    iconAlt: "MBA Add On logo",
    phase: "add-on",
    topics: [
      {
        id: "mba-addon-excel",
        title: "Excel",
        slug: "excel",
        description: "Video lessons for Excel — click a topic name to play.",
        estimatedMinutes: 45,
        published: true,
      },
      {
        id: "mba-addon-power-bi",
        title: "Power BI",
        slug: "power-bi",
        description: "Video lessons for Power BI — click a topic name to play.",
        estimatedMinutes: 45,
        published: true,
      },
    ],
  },
];
