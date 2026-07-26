import type { TopicQuiz } from "@/lib/types";

export const mbaAiDay4Quizzes: Record<string, TopicQuiz> = {
  "mba-d4-t1": {
    topicId: "mba-d4-t1",
    title: "Quick check: RAG big picture",
    questions: [
      {
        id: "q1",
        question: "What does RAG stand for in LLM applications?",
        options: [
          "Retrieval-Augmented Generation",
          "Random Automatic Guessing",
          "Relational Analytics Gateway",
          "Remote API Graphing",
        ],
        correctIndex: 0,
        explanation: "Retrieve relevant passages, then generate an answer from them.",
      },
      {
        id: "q2",
        question: "What is the correct high-level RAG order?",
        options: [
          "Query → Retrieve → Augment → Generate",
          "Generate → Delete files → Retrieve",
          "Train a new LLM → Ignore documents",
          "Export Excel → Disable the API key",
        ],
        correctIndex: 0,
        explanation: "Find evidence first, then prompt, then answer.",
      },
      {
        id: "q3",
        question: "Why can an unaided LLM invent company leave rules?",
        options: [
          "Those private policies are not in its reliable knowledge without your documents",
          "LLMs always open the company ERP automatically",
          "Temperature 0 deletes all policies",
          "Colab forbids policy questions",
        ],
        correctIndex: 0,
        explanation: "Company-specific facts need your files.",
      },
      {
        id: "q4",
        question: "If retrieved context does not contain the answer, what should a grounded desk do?",
        options: [
          "Say the fact is not in the document / sources",
          "Invent the most impressive number",
          "Change company policy silently",
          "Ignore the question without saying so",
        ],
        correctIndex: 0,
        explanation: "Refusal beats confident fiction.",
      },
    ],
  },

  "mba-d4-t2": {
    topicId: "mba-d4-t2",
    title: "Quick check: Grounding vs unaided chat",
    questions: [
      {
        id: "q1",
        question: "What is the difference between an unaided answer and a grounded answer?",
        options: [
          "Grounded answers are constrained to provided document text; unaided answers are not",
          "Unaided answers never use a system message",
          "Grounded answers disable the API key",
          "There is no difference",
        ],
        correctIndex: 0,
        explanation: "Evidence in the prompt changes reliability.",
      },
      {
        id: "q2",
        question: "Why paste a policy extract into the prompt for a leave question?",
        options: [
          "So the model can cite the company’s own wording instead of guessing",
          "So Yahoo Finance returns HR rules",
          "So Colab installs FAISS automatically",
          "So temperature becomes invalid",
        ],
        correctIndex: 0,
        explanation: "The extract is the evidence.",
      },
      {
        id: "q3",
        question: "What is a good system instruction for grounded Q&A?",
        options: [
          "Answer only using the extract; if missing, say it is not in the document",
          "Always invent a confident number",
          "Ignore the extract and browse the open web only",
          "Delete the user question",
        ],
        correctIndex: 0,
        explanation: "Explicit refusal rules reduce hallucination.",
      },
    ],
  },

  "mba-d4-t3": {
    topicId: "mba-d4-t3",
    title: "Quick check: Chunking",
    questions: [
      {
        id: "q1",
        question: "Why split long documents into chunks for RAG?",
        options: [
          "Retrieval can score smaller passages and fit evidence into the prompt",
          "Chunks delete the need for an API key",
          "Chunks train a new LLM overnight",
          "Chunks convert PDFs into Excel automatically",
        ],
        correctIndex: 0,
        explanation: "Chunking makes retrieval practical.",
      },
      {
        id: "q2",
        question: "What does chunk overlap help with?",
        options: [
          "Keeping sentences/ideas that would otherwise be cut at boundaries",
          "Encrypting the API key",
          "Increasing GPU count in Colab",
          "Removing all stop words forever",
        ],
        correctIndex: 0,
        explanation: "Overlap preserves context across splits.",
      },
      {
        id: "q3",
        question: "What is a risk of making chunks extremely large?",
        options: [
          "They may waste context and mix unrelated topics in one retrieval hit",
          "FAISS refuses to start",
          "Groq bans large chunks by law",
          "Pandas cannot open CSVs anymore",
        ],
        correctIndex: 0,
        explanation: "Chunk size is a precision vs context trade-off.",
      },
    ],
  },

  "mba-d4-t4": {
    topicId: "mba-d4-t4",
    title: "Quick check: TF-IDF retrieval",
    questions: [
      {
        id: "q1",
        question: "In a mini RAG pipeline, what does TF-IDF retrieval do?",
        options: [
          "Ranks document chunks by relevance to the question using term statistics",
          "Trains a diffusion image model",
          "Deletes unused PDF pages",
          "Creates Power BI relationships",
        ],
        correctIndex: 0,
        explanation: "TF-IDF is a classic sparse retriever.",
      },
      {
        id: "q2",
        question: "Why show a RETRIEVED panel before the final answer?",
        options: [
          "So you can audit which passages the answer was allowed to use",
          "So the API key rotates",
          "So temperature must be 2.0",
          "So Colab exports PowerPoint",
        ],
        correctIndex: 0,
        explanation: "Receipts build trust and debugging skill.",
      },
      {
        id: "q3",
        question: "What should the LLM receive as evidence in grounded RAG?",
        options: [
          "Only the top retrieved chunks (not inventing outside them)",
          "The entire internet without retrieval",
          "Only the API key string",
          "Only empty strings",
        ],
        correctIndex: 0,
        explanation: "Augment the prompt with retrieved context.",
      },
      {
        id: "q4",
        question: "Cosine similarity between TF-IDF vectors is used to…",
        options: [
          "Score how close a question is to each chunk",
          "Encrypt PDFs",
          "Compute Excel pivot totals",
          "Replace Groq entirely",
        ],
        correctIndex: 0,
        explanation: "Similarity ranking selects top-k chunks.",
      },
    ],
  },

  "mba-d4-t5": {
    topicId: "mba-d4-t5",
    title: "Quick check: Embeddings & FAISS",
    questions: [
      {
        id: "q1",
        question: "What does an embedding model produce for a text chunk?",
        options: [
          "A numeric vector that represents meaning for similarity search",
          "A Power BI .pbix file",
          "A Groq API key",
          "A SQL foreign key",
        ],
        correctIndex: 0,
        explanation: "Vectors enable semantic nearest-neighbor search.",
      },
      {
        id: "q2",
        question: "What is FAISS commonly used for in RAG?",
        options: [
          "Fast similarity search over embedding vectors",
          "Training Excel macros",
          "Hosting email servers",
          "Replacing pandas groupby",
        ],
        correctIndex: 0,
        explanation: "FAISS is a vector index/library for nearest neighbors.",
      },
      {
        id: "q3",
        question: "How can vector retrieval beat pure keyword TF-IDF?",
        options: [
          "It can match paraphrases with similar meaning even when wording differs",
          "It never needs an embedding model",
          "It works only offline with zero compute",
          "It invents missing policy text",
        ],
        correctIndex: 0,
        explanation: "Semantic similarity helps messy wording.",
      },
      {
        id: "q4",
        question: "After FAISS returns chunks, what should the LLM still obey?",
        options: [
          "Answer only from those chunks or say not in document",
          "Ignore chunks and browse privately stored HRIS data",
          "Always invent page numbers",
          "Disable the system message",
        ],
        correctIndex: 0,
        explanation: "Retrieval does not remove grounding discipline.",
      },
    ],
  },

  "mba-d4-t6": {
    topicId: "mba-d4-t6",
    title: "Quick check: PDF RAG",
    questions: [
      {
        id: "q1",
        question: "Why keep page metadata when loading PDFs into a vector store?",
        options: [
          "So answers can cite which page the evidence came from",
          "So FAISS encrypts the PDF",
          "So Groq bills less",
          "So pandas can open images",
        ],
        correctIndex: 0,
        explanation: "Page citations make answers auditable.",
      },
      {
        id: "q2",
        question: "What is a good first PDF for learning RAG pipelines?",
        options: [
          "A short public policy PDF that loads quickly and still feels real",
          "A corrupted empty file with no text",
          "A password you cannot open",
          "A video file renamed to .pdf",
        ],
        correctIndex: 0,
        explanation: "Short real PDFs teach the loop without huge wait times.",
      },
      {
        id: "q3",
        question: "If a PDF never mentions a topic you asked about, what should happen?",
        options: [
          "The desk should say NOT IN DOCUMENT (or equivalent)",
          "The model should invent a plausible clause",
          "FAISS should delete the PDF",
          "The API key should be printed",
        ],
        correctIndex: 0,
        explanation: "Silence in sources must surface as refusal.",
      },
    ],
  },

  "mba-d4-t7": {
    topicId: "mba-d4-t7",
    title: "Quick check: Multi-document RAG",
    questions: [
      {
        id: "q1",
        question: "Why store source_file (or similar) in chunk metadata?",
        options: [
          "So answers can tag which document provided the evidence",
          "So embeddings become unnecessary",
          "So temperature is fixed to 2.0",
          "So Colab needs no network",
        ],
        correctIndex: 0,
        explanation: "Multi-doc desks need provenance.",
      },
      {
        id: "q2",
        question: "What is a practical reason to index a mid-size quarterly PDF before a 270+ page annual report?",
        options: [
          "Faster iteration while learning; large ARs are a stretch once the pipeline works",
          "Annual reports cannot be chunked",
          "FAISS rejects annual reports by design",
          "Groq cannot read numbers from long PDFs ever",
        ],
        correctIndex: 0,
        explanation: "Pedagogy and runtime: ladder difficulty.",
      },
      {
        id: "q3",
        question: "In multi-doc Q&A, what should the prompt require?",
        options: [
          "Cite which source file (and page if available) supports the answer",
          "Hide all sources from the user",
          "Merge all PDFs into one unlabeled blob with no metadata",
          "Always answer from memory only",
        ],
        correctIndex: 0,
        explanation: "Tagged sources make multi-document retrieval auditable and controllable.",
      },
    ],
  },

  "mba-d4-t8": {
    topicId: "mba-d4-t8",
    title: "Quick check: LLM data analysis",
    questions: [
      {
        id: "q1",
        question: "In AI-powered spreadsheet analysis, what should compute the KPI numbers?",
        options: [
          "Pandas / code on the CSV — then the LLM narrates those numbers",
          "The LLM alone, with no table shown",
          "A random number generator",
          "Yahoo Finance only",
        ],
        correctIndex: 0,
        explanation: "Numbers first in code; narrative second.",
      },
      {
        id: "q2",
        question: "Why pass a KPI block into the LLM prompt?",
        options: [
          "So insights stay tied to calculated evidence",
          "So the API key is optional",
          "So FAISS builds itself from Excel",
          "So chunk overlap becomes zero",
        ],
        correctIndex: 0,
        explanation: "The KPI block is the numeric context.",
      },
      {
        id: "q3",
        question: "What should the model not do when drafting an insight brief?",
        options: [
          "Invent sales or profit figures that are not in the KPI block",
          "Suggest next analyses as questions",
          "List risks based on the KPIs",
          "Keep the brief short",
        ],
        correctIndex: 0,
        explanation: "No hallucinated metrics.",
      },
    ],
  },

  "mba-d4-t9": {
    topicId: "mba-d4-t9",
    title: "Quick check: Summarization & insights",
    questions: [
      {
        id: "q1",
        question: "What makes an executive summary useful?",
        options: [
          "Clear structure (snapshot, risks, asks) grounded in the source",
          "Maximum buzzwords with no decisions",
          "Invented KPIs to sound impressive",
          "Hiding uncertainty always",
        ],
        correctIndex: 0,
        explanation: "Structure + faithfulness beats fluff.",
      },
      {
        id: "q2",
        question: "Why include a “NOT IN SOURCE” section in a one-pager prompt?",
        options: [
          "It forces the model to surface what it refused to invent",
          "It deletes the source text",
          "It raises temperature automatically",
          "It installs sentence-transformers",
        ],
        correctIndex: 0,
        explanation: "Explicit refusal listing improves honesty.",
      },
      {
        id: "q3",
        question: "Summarization from a long report should primarily…",
        options: [
          "Compress faithful points leaders need for decisions",
          "Replace the need for retrieval forever",
          "Ignore the source and write a new strategy",
          "Output only emojis",
        ],
        correctIndex: 0,
        explanation: "Summaries serve decisions, not creativity contests.",
      },
    ],
  },

  "mba-d4-t10": {
    topicId: "mba-d4-t10",
    title: "Quick check: Knowledge desk discipline",
    questions: [
      {
        id: "q1",
        question: "What combination makes a strong document + data intelligence desk?",
        options: [
          "Grounded RAG over company docs/PDFs plus KPI-based LLM analysis",
          "Only unaided chat with no files",
          "Only PowerPoint themes",
          "Only deleting retrieval traces",
        ],
        correctIndex: 0,
        explanation: "Documents and numbers both need evidence.",
      },
      {
        id: "q2",
        question: "Why ask a trap question that is not in any source?",
        options: [
          "To verify the desk refuses instead of inventing policy",
          "To unlock unlimited Groq credits",
          "To rebuild FAISS faster",
          "To disable pandas",
        ],
        correctIndex: 0,
        explanation: "Refusal is a graded behavior.",
      },
      {
        id: "q3",
        question: "What belongs in an evidence pack after a knowledge-desk demo?",
        options: [
          "Retrieved chunks, grounded answers, KPI board, and insight memo",
          "Only the API key screenshot",
          "Only a blank notebook",
          "Only temperature=2.0 logs",
        ],
        correctIndex: 0,
        explanation: "Receipts are the deliverable.",
      },
      {
        id: "q4",
        question: "Can public web search replace internal policy RAG?",
        options: [
          "No — internal policies are often not on the public web and need your documents",
          "Yes — Wikipedia always has every company’s leave rules",
          "Yes — DuckDuckGo stores HRIS passwords",
          "Yes — FAISS deletes the need for files",
        ],
        correctIndex: 0,
        explanation: "Internal knowledge requires your corpus.",
      },
    ],
  },
};
