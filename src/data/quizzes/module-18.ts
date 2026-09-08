import type { TopicQuiz } from "@/lib/types";

export const module18Quizzes: Record<string, TopicQuiz> = {
  "m18-t1": {
    topicId: "m18-t1",
    title: "Quick check: Project Overview & Problem Statement",
    questions: [
      {
        id: "q1",
        question: "Why write a problem statement first?",
        options: [
          "To skip EDA",
          "To clarify the question and success criteria",
          "To choose fonts",
          "To avoid cleaning",
        ],
        correctIndex: 1,
        explanation: "Clear goals guide the whole project.",
      },
      {
        id: "q2",
        question: "A good problem statement should include…",
        options: [
          "Only library versions",
          "The business/analysis question you will answer",
          "Only raw CSV bytes",
          "Random seeds only",
        ],
        correctIndex: 1,
        explanation: "State what decision or insight you seek.",
      },
    ],
  },
  "m18-t2": {
    topicId: "m18-t2",
    title: "Quick check: Step 1: Data Model",
    questions: [
      {
        id: "q1",
        question: "What is a data model here?",
        options: [
          "A chart theme",
          "Structured fields/entities for your records",
          "A GPU driver",
          "A color map",
        ],
        correctIndex: 1,
        explanation: "Define schema before heavy analysis.",
      },
      {
        id: "q2",
        question: "Why structure records consistently?",
        options: [
          "Slower code",
          "Reliable processing and aggregation",
          "Avoid functions",
          "Hide missing data",
        ],
        correctIndex: 1,
        explanation: "Consistent fields make cleaning and analysis possible.",
      },
    ],
  },
  "m18-t3": {
    topicId: "m18-t3",
    title: "Quick check: Step 2: Logic & Loops",
    questions: [
      {
        id: "q1",
        question: "Why use loops over records?",
        options: [
          "To avoid all logic",
          "To apply the same rules to many rows",
          "To delete Python",
          "To plot only",
        ],
        correctIndex: 1,
        explanation: "Batch process each transaction/customer/etc.",
      },
      {
        id: "q2",
        question: "Conditionals in a project help you…",
        options: [
          "Ignore data",
          "Branch behavior (filters, flags, rules)",
          "Remove functions",
          "Skip reporting",
        ],
        correctIndex: 1,
        explanation: "Business rules are expressed with if/else.",
      },
    ],
  },
  "m18-t4": {
    topicId: "m18-t4",
    title: "Quick check: Step 3: Functions & Report",
    questions: [
      {
        id: "q1",
        question: "Why wrap logic in functions?",
        options: [
          "To duplicate more",
          "Reuse and clearer structure",
          "To ban Pandas",
          "To hide titles",
        ],
        correctIndex: 1,
        explanation: "Shared calculations become maintainable helpers.",
      },
      {
        id: "q2",
        question: "A report should communicate…",
        options: [
          "Only raw dumps",
          "Insights and takeaways, not just numbers",
          "Only stack traces",
          "Only file sizes",
        ],
        correctIndex: 1,
        explanation: "Stakeholders need interpretation.",
      },
    ],
  },
  "m18-t5": {
    topicId: "m18-t5",
    title: "Module 18 Quiz",
    questions: [
      {
        id: "q1",
        question: "What is the purpose of a clear problem statement in a data project?",
        options: [
          "To skip cleaning",
          "To define the question and success criteria before coding",
          "To choose fonts",
          "To avoid visualizations",
        ],
        correctIndex: 1,
        explanation: "A sharp question guides data needs, metrics, and deliverables.",
      },
      {
        id: "q2",
        question: "What is a \"data model\" in the context of a project?",
        options: [
          "A neural network only",
          "A structured representation of entities/fields you will analyze",
          "A bar chart",
          "A random seed",
        ],
        correctIndex: 1,
        explanation: "Schema/classes/records define how raw data becomes usable objects.",
      },
      {
        id: "q3",
        question: "Why use functions instead of repeating code in a project?",
        options: [
          "Functions slow everything down always",
          "Reuse, clarity, and easier testing/maintenance",
          "They remove the need for data",
          "Only for recursion",
        ],
        correctIndex: 1,
        explanation: "Shared logic belongs in named functions.",
      },
      {
        id: "q4",
        question: "What are the 5 typical steps of an end-to-end data project?",
        options: [
          "Only plot and quit",
          "Load → clean → explore → visualize → report",
          "Train → deploy only",
          "Scrape → tweet → delete",
        ],
        correctIndex: 1,
        explanation: "Those steps take you from raw data to a communicable answer.",
      },
      {
        id: "q5",
        question: "What method identifies the row with the maximum value in a column?",
        options: [
          "df.maxrow()",
          "df['col'].idxmax() (then use that index)",
          "df.peak()",
          "df.nlargest_index only in Excel",
        ],
        correctIndex: 1,
        explanation: "idxmax returns the index label of the maximum value.",
      },
      {
        id: "q6",
        question: "Why is data cleaning done before analysis?",
        options: [
          "It is optional decoration",
          "Dirty data leads to wrong conclusions",
          "Cleaning deletes all insights",
          "Only required for images",
        ],
        correctIndex: 1,
        explanation: "Fix missing values, types, and duplicates first.",
      },
      {
        id: "q7",
        question: "What's the value of visualizing results in a final report?",
        options: [
          "Decoration only",
          "Makes patterns and comparisons easier to understand",
          "Replaces the need for numbers",
          "Hides uncertainty always",
        ],
        correctIndex: 1,
        explanation: "Charts communicate findings quickly to non-technical audiences.",
      },
      {
        id: "q8",
        question: "What does .idxmax() return?",
        options: [
          "The maximum value itself",
          "The index label where the maximum occurs",
          "A sorted DataFrame",
          "Column dtypes",
        ],
        correctIndex: 1,
        explanation: "Pair with loc to fetch the full winning row.",
      },
      {
        id: "q9",
        question: "Why should a capstone project combine multiple modules' concepts?",
        options: [
          "To make grading harder only",
          "Real projects need syntax, structures, analysis, and communication together",
          "Modules cannot be combined",
          "Only NumPy is enough",
        ],
        correctIndex: 1,
        explanation: "Integration proves you can apply the whole toolkit.",
      },
      {
        id: "q10",
        question: "What should a final report communicate beyond raw numbers?",
        options: [
          "Only CSV dumps",
          "Insights, context, and recommended actions/takeaways",
          "Only code listings",
          "Only library versions",
        ],
        correctIndex: 1,
        explanation: "Stakeholders need interpretation, not just tables.",
      },
    ],
  },
};
