import type { TopicQuiz } from "@/lib/types";

export const mbaAiDay4Quizzes: Record<string, TopicQuiz> = {
  "mba-d4-t1": {
    topicId: "mba-d4-t1",
    title: "Quick check: Agentic AI + real data",
    questions: [
      {
        id: "q1",
        question: "Before Day 4 agents run, students should\u2026",
        options: [
          "Download Olist from Kaggle and set PATH_* to uploaded Colab files",
          "Use only invented course CSVs",
          "Skip uploads forever",
          "Hardcode fake store counts"
        ],
        correctIndex: 0,
        explanation: "Real Olist files + explicit paths are required.",
      },
      {
        id: "q2",
        question: "Chatbot vs agent in this lab\u2026",
        options: [
          "Agent plans and executes using uploaded evidence",
          "Chatbot completes the board pack alone",
          "Neither needs data",
          "Agents ban Groq"
        ],
        correctIndex: 0,
        explanation: "Agents complete work on your tables.",
      },
      {
        id: "q3",
        question: "If PATH_ORDERS is missing, the notebook should\u2026",
        options: [
          "Fail clearly so you fix the path/upload",
          "Silently invent orders",
          "Skip to Day 5",
          "Delete Groq"
        ],
        correctIndex: 0,
        explanation: "Missing paths must be obvious.",
      }
    ],
  },

  "mba-d4-t2": {
    topicId: "mba-d4-t2",
    title: "Quick check: Designing agents",
    questions: [
      {
        id: "q1",
        question: "Marketing tools in Day 4 should read\u2026",
        options: [
          "Your uploaded Olist reviews/items/products paths",
          "Random Wikipedia only",
          "Synthetic day4-freshbasket CSVs",
          "Nothing"
        ],
        correctIndex: 0,
        explanation: "Tools wrap real uploads.",
      },
      {
        id: "q2",
        question: "A strong agent blueprint includes\u2026",
        options: [
          "Goal, tools, memory, output",
          "Only a colour theme",
          "Only emojis",
          "Only temperature=2"
        ],
        correctIndex: 0,
        explanation: "Design the operating model.",
      },
      {
        id: "q3",
        question: "Campaign packs must\u2026",
        options: [
          "Label File-supported vs Judgment",
          "Invent Kaggle rankings",
          "Hide review scores",
          "Ignore tools"
        ],
        correctIndex: 0,
        explanation: "Evidence discipline stays.",
      }
    ],
  },

  "mba-d4-t3": {
    topicId: "mba-d4-t3",
    title: "Quick check: Multi-agent",
    questions: [
      {
        id: "q1",
        question: "The launch swarm category should come from\u2026",
        options: [
          "Frequencies in your uploaded Olist products/items",
          "A made-up category not in the file",
          "Twitter rumours only",
          "HR attrition alone"
        ],
        correctIndex: 0,
        explanation: "Focus category is data-derived.",
      },
      {
        id: "q2",
        question: "CEOAgent exists to\u2026",
        options: [
          "Arbitrate specialist tensions into a decision",
          "Delete Finance outputs",
          "Avoid CX",
          "Skip evidence"
        ],
        correctIndex: 0,
        explanation: "Orchestration is the point.",
      },
      {
        id: "q3",
        question: "Multi-agent value is mainly\u2026",
        options: [
          "Visible trade-offs across functions",
          "One fake happy essay",
          "No data needed",
          "Hiding risks"
        ],
        correctIndex: 0,
        explanation: "Debate then decide.",
      }
    ],
  },

  "mba-d4-t4": {
    topicId: "mba-d4-t4",
    title: "Quick check: Agent loop",
    questions: [
      {
        id: "q1",
        question: "The classroom loop is\u2026",
        options: [
          "Plan \u2192 tool on PATH_* files \u2192 observe \u2192 memory \u2192 action pack",
          "Guess \u2192 invent \u2192 ship",
          "Only print logos",
          "Skip reviews"
        ],
        correctIndex: 0,
        explanation: "Tools hit real files.",
      },
      {
        id: "q2",
        question: "late_delivery_sample needs\u2026",
        options: [
          "Timestamp columns from your Olist orders upload",
          "Invented ETAs",
          "IBM HR only",
          "No CSV"
        ],
        correctIndex: 0,
        explanation: "Orders path must be real.",
      },
      {
        id: "q3",
        question: "Memory helps\u2026",
        options: [
          "Audit observations from tool calls",
          "Increase silent invention",
          "Delete plans",
          "Hide scores"
        ],
        correctIndex: 0,
        explanation: "Auditability.",
      }
    ],
  },

  "mba-d4-t5": {
    topicId: "mba-d4-t5",
    title: "Quick check: Consulting firm",
    questions: [
      {
        id: "q1",
        question: "PeopleAgent HR claims require\u2026",
        options: [
          "IBM HR attrition CSV downloaded and PATH_HR set",
          "Invented headcount",
          "Olist only always",
          "No file"
        ],
        correctIndex: 0,
        explanation: "Second real source.",
      },
      {
        id: "q2",
        question: "Where do you download IBM HR from?",
        options: [
          "Kaggle: pavansubhasht/ibm-hr-analytics-attrition-dataset",
          "A random private Drive with no source",
          "Course fake CSV",
          "Nowhere"
        ],
        correctIndex: 0,
        explanation: "Official Kaggle dataset page.",
      },
      {
        id: "q3",
        question: "Quality gate checks\u2026",
        options: [
          "Grounding of the partner pack",
          "Font choice only",
          "Groq logo colour",
          "Upload speed only"
        ],
        correctIndex: 0,
        explanation: "Governance before client send.",
      }
    ],
  },

  "mba-d4-t6": {
    topicId: "mba-d4-t6",
    title: "Quick check: Capstone platform",
    questions: [
      {
        id: "q1",
        question: "Capstone demo readiness includes\u2026",
        options: [
          "PATH_ORDERS/PATH_REVIEWS exist + agents ran + board pack saved",
          "Only Cell 1",
          "Synthetic day4 CSV present",
          "No uploads"
        ],
        correctIndex: 0,
        explanation: "Paths are part of the scorecard.",
      },
      {
        id: "q2",
        question: "Primary marketplace dataset source is\u2026",
        options: [
          "Kaggle Olist Brazilian E-Commerce",
          "A made-up FreshBasket weekly sales CSV from the repo",
          "A blank notebook",
          "Unrelated weather API"
        ],
        correctIndex: 0,
        explanation: "olistbr/brazilian-ecommerce.",
      },
      {
        id: "q3",
        question: "Board packs should\u2026",
        options: [
          "Justify recommendations using uploaded columns",
          "Ignore review_score",
          "Hide assumptions",
          "Skip the markdown export"
        ],
        correctIndex: 0,
        explanation: "Viva-ready evidence.",
      }
    ],
  },
};
