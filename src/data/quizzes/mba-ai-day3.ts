import type { TopicQuiz } from "@/lib/types";

export const mbaAiDay3Quizzes: Record<string, TopicQuiz> = {
  "mba-d3-t1": {
    topicId: "mba-d3-t1",
    title: "Quick check: Company knowledge assistants",
    questions: [
      {
        id: "q1",
        question:
          "Can a public chat tool answer FreshBasket’s confidential leave rules by itself?",
        options: [
          "No — it needs the company policy document (or equivalent connected knowledge)",
          "Yes — it always has every company’s private files",
          "Yes — if you ask politely twice",
          "Only on Sundays",
        ],
        correctIndex: 0,
        explanation:
          "Confidential policies are not public knowledge. Document grounding is required.",
      },
      {
        id: "q2",
        question: "In plain language, RAG for this course means…",
        options: [
          "Retrieve relevant company passages, then answer from those passages",
          "Delete all documents and invent answers",
          "Only draw colourful logos",
          "Replace Finance controls automatically",
        ],
        correctIndex: 0,
        explanation:
          "Retrieve → read useful parts → answer from the file.",
      },
      {
        id: "q3",
        question: "When the document does not contain a fact, the knowledge desk should…",
        options: [
          "Say the fact is not stated in the document",
          "Invent the most impressive number",
          "Change the company policy silently",
          "Ignore the question forever without saying so",
        ],
        correctIndex: 0,
        explanation: "Refusal / “not stated” is safer than confident invention.",
      },
      {
        id: "q4",
        question: "In the FreshBasket HR extract, Sunday overtime needs…",
        options: [
          "Written approval in the roster system before the shift starts",
          "No approval ever",
          "Only a verbal nod after the shift ends",
          "Finance approval for every 10-minute break",
        ],
        correctIndex: 0,
        explanation:
          "The policy requires prior written roster approval for Sunday OT.",
      },
    ],
  },
  "mba-d3-t2": {
    topicId: "mba-d3-t2",
    title: "Quick check: Working with company documents",
    questions: [
      {
        id: "q1",
        question: "Topic 2’s hands-on focuses on which public PDFs?",
        options: [
          "ITC Supplier Code (4 pages) and HUL Quarterly Results (47 pages)",
          "Only the 486-page HUL annual report",
          "Only FreshBasket leave extracts",
          "Every PDF from Day 3 at once",
        ],
        correctIndex: 0,
        explanation:
          "Mid-size public PDFs come after short FreshBasket extracts.",
      },
      {
        id: "q2",
        question: "A strong document question usually…",
        options: [
          "Names the file and asks for facts the file can support",
          "Says only “analyse everything creatively”",
          "Forbids quoting the document",
          "Requires inventing numbers when unsure",
        ],
        correctIndex: 0,
        explanation: "Precision + grounding beats vague creative prompts.",
      },
      {
        id: "q3",
        question:
          "Asking the ITC supplier code for FreshBasket Sunday OT payroll should…",
        options: [
          "Be refused — wrong document for that question",
          "Produce invented HR policy",
          "Replace HUL quarterly analysis",
          "Be answered with DMart cash flow only",
        ],
        correctIndex: 0,
        explanation: "Wrong-document asks must be refused.",
      },
      {
        id: "q4",
        question: "Recommendations in a document pack should…",
        options: [
          "Label file-supported findings vs analyst judgment",
          "Hide when ideas are not in the file",
          "Never include risks",
          "Always invent revenue growth",
        ],
        correctIndex: 0,
        explanation: "Separate evidence from judgment for trustworthy packs.",
      },
    ],
  },
  "mba-d3-t3": {
    topicId: "mba-d3-t3",
    title: "Quick check: Multi-document questions",
    questions: [
      {
        id: "q1",
        question: "For a 272-page annual report, the best first move is…",
        options: [
          "Map sections / ask section-anchored questions",
          "Demand one creative essay covering every page with invented numbers",
          "Ignore the PDF and guess",
          "Delete risk chapters",
        ],
        correctIndex: 0,
        explanation:
          "Large reports need section focus, not vague whole-book inventiveness.",
      },
      {
        id: "q2",
        question: "In multi-PDF answers, every factual claim should…",
        options: [
          "Carry a source tag like (DMart AR) / (HUL Q) / (ITC Code)",
          "Hide its source",
          "Always invent a precise percentage",
          "Merge firms into one fake company quietly",
        ],
        correctIndex: 0,
        explanation: "Source tags keep multi-doc answers honest.",
      },
      {
        id: "q3",
        question: "Using ITC’s supplier code to invent DMart store counts is…",
        options: [
          "A trap — refuse and point to the correct pack",
          "Best practice",
          "Required in every lab",
          "How annual reports are audited",
        ],
        correctIndex: 0,
        explanation: "Wrong-file invention must be rejected.",
      },
    ],
  },
  "mba-d3-t4": {
    topicId: "mba-d3-t4",
    title: "Quick check: How document answering works",
    questions: [
      {
        id: "q1",
        question: "In this course, RAG primarily means…",
        options: [
          "Retrieve useful company passages, then answer from them",
          "Delete policies and invent answers",
          "Only draw logos",
          "Replace human managers automatically",
        ],
        correctIndex: 0,
        explanation: "Retrieve → read useful parts → answer from the file.",
      },
      {
        id: "q2",
        question: "Chunking exists mainly because…",
        options: [
          "Large documents must be split into searchable sections",
          "It invents missing financial ratios",
          "It deletes risk chapters",
          "It removes the need for grounding",
        ],
        correctIndex: 0,
        explanation: "Managers ask narrow questions; chunks make finding the right section possible.",
      },
      {
        id: "q3",
        question: "Embeddings + a vector library are best described as…",
        options: [
          "A smart filing cabinet for passage meaning",
          "A guarantee the model never errs",
          "A replacement for company documents",
          "A way to skip Not stated refusals",
        ],
        correctIndex: 0,
        explanation: "They store searchable meaning so similarity search can pull relevant chunks.",
      },
      {
        id: "q4",
        question: "If retrieval pulls the wrong section, the desk should…",
        options: [
          "Still refuse invention and fix retrieval — not invent a polished wrong answer",
          "Always invent numbers to fill gaps",
          "Ignore the document forever",
          "Merge two companies quietly",
        ],
        correctIndex: 0,
        explanation: "Plumbing mistakes do not excuse invention.",
      },
    ],
  },
  "mba-d3-t5": {
    topicId: "mba-d3-t5",
    title: "Quick check: Mini knowledge assistant",
    questions: [
      {
        id: "q1",
        question: "The classroom mini desk pipeline is…",
        options: [
          "Load → chunk → retrieve → grounded prompt",
          "Guess → invent → publish",
          "Delete files → summarise creatively",
          "Upload every 486-page PDF first",
        ],
        correctIndex: 0,
        explanation: "That is the Colab path for Topic 5.",
      },
      {
        id: "q2",
        question: "Keyword retrieve in the notebook is mainly there to…",
        options: [
          "Stand in for similarity search so managers feel the retrieve step",
          "Replace ChatGPT forever",
          "Invent leave days",
          "Train a full production vector DB alone",
        ],
        correctIndex: 0,
        explanation: "It teaches the retrieve step without requiring embeddings maths.",
      },
      {
        id: "q3",
        question: "When no chunk matches the question, the grounded prompt should…",
        options: [
          "Force Not stated in the document",
          "Invent the most impressive metric",
          "Pull DMart numbers automatically",
          "Skip source ids",
        ],
        correctIndex: 0,
        explanation: "Silence beats invention.",
      },
    ],
  },
  "mba-d3-t6": {
    topicId: "mba-d3-t6",
    title: "Quick check: Knowledge desk capstone",
    questions: [
      {
        id: "q1",
        question: "The Day 3 capstone knowledge desk is built…",
        options: [
          "In Colab as a RAG system over all four PDFs with Groq for answers",
          "Only by pasting slogans into ChatGPT with no code",
          "Without any PDFs",
          "Only from FreshBasket Sunday OT text with no Groq",
        ],
        correctIndex: 0,
        explanation:
          "Capstone loads ITC + HUL Quarterly + DMart AR + HUL AR, retrieves chunks, then answers with Groq.",
      },
      {
        id: "q2",
        question: "In this capstone RAG pipeline, Groq’s job is to…",
        options: [
          "Generate an answer grounded only in retrieved PDF passages",
          "Replace PDF upload forever",
          "Invent DMart metrics when retrieval is empty",
          "Delete the TF-IDF index",
        ],
        correctIndex: 0,
        explanation: "Retrieve first, then Groq answers from context — or Not stated.",
      },
      {
        id: "q3",
        question: "Trap questions that invent cross-company metrics should…",
        options: [
          "Be refused / answered Not stated in the document",
          "Always invent a precise revenue number",
          "Skip the scorecard",
          "Disable chunk citations",
        ],
        correctIndex: 0,
        explanation: "Scorecard expects refuse-like behaviour on traps.",
      },
    ],
  },
};
