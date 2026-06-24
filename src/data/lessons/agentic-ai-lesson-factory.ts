import type { LessonBlock, TopicLesson } from "@/lib/types";
import {
  AGENTIC_AI_TOPIC_GUIDES,
  DEFAULT_AGENTIC_AI_TOPIC_GUIDE,
} from "@/data/agentic-ai-topic-guides";
import { buildAgenticAiExampleCode } from "@/data/agentic-ai-example-code";
import {
  NOTEBOOK_CELLS,
  GROQ_INSTALL,
} from "@/data/agentic-ai-notebook-code";

// ─── helpers ────────────────────────────────────────────────────────────────

function getGuide(topicId: string) {
  return AGENTIC_AI_TOPIC_GUIDES[topicId] ?? DEFAULT_AGENTIC_AI_TOPIC_GUIDE;
}

function flowDiagram(topicId: string): LessonBlock {
  const guide = getGuide(topicId);
  return {
    type: "visual",
    diagram: {
      title: `${guide.title} — Pattern`,
      nodes: guide.steps.map((step, i) => ({
        id: `step-${i + 1}`,
        label: `Step ${i + 1}`,
        sublabel: step,
      })),
      arrows: [
        { from: "step-1", to: "step-2" },
        { from: "step-2", to: "step-3" },
      ],
      variant: "flow",
    },
  };
}

function infographic(topicId: string): LessonBlock {
  return {
    type: "infographic",
    infographic: "agentic-ai-topic",
    content: topicId,
  };
}

// ─── Type A — Concept lesson ─────────────────────────────────────────────────
// Pure theory topics: visual explanation, no executable code, no practice IDE.
// Right side shows a ConceptSummaryPanel derived from the concept-card block.

export function buildConceptLesson(topicId: string): TopicLesson {
  const guide = getGuide(topicId);

  return {
    topicId,
    intro: guide.hook,
    blocks: [
      infographic(topicId),
      { type: "heading", content: guide.title },
      {
        type: "paragraph",
        content: `${guide.hook} ${guide.outcome}`,
      },
      flowDiagram(topicId),
      { type: "heading", content: "Where it fits in a real AI app" },
      { type: "paragraph", content: guide.example },
      { type: "tip", content: guide.caution },
      {
        type: "concept-card",
        conceptSummary: {
          hook: guide.hook,
          outcome: guide.outcome,
          steps: guide.steps,
          example: guide.example,
          caution: guide.caution,
        },
      },
    ],
    keyTakeaways: [
      guide.outcome,
      `Pattern: ${guide.steps.join(" → ")}.`,
      guide.caution,
    ],
  };
}

// ─── Type B — Setup lesson ───────────────────────────────────────────────────
// Step-by-step install / configuration topics.
// Right side shows a SetupChecklistPanel.

const SETUP_STEPS: Record<string, LessonBlock["setupSteps"]> = {
  "ai-lc-t2": [
    {
      title: "Open your terminal",
      description: "Use any terminal: Command Prompt, PowerShell, or a terminal inside VS Code.",
    },
    {
      title: "Install core LangChain packages",
      commands: ["pip install langchain langchain-groq langchain-core"],
      note: "langchain-groq adds Groq support; langchain-core is the foundation.",
    },
    {
      title: "Install helper tools",
      commands: ["pip install python-dotenv"],
      note: "python-dotenv lets you load API keys from a .env file.",
    },
    {
      title: "Create a .env file in your project folder",
      commands: ["GROQ_API_KEY=your-key-here"],
      note: "Never commit this file to Git. Add .env to .gitignore.",
    },
    {
      title: "Load the key in Python",
      commands: [
        "from dotenv import load_dotenv",
        "import os",
        "load_dotenv()",
        'api_key = os.environ.get("GROQ_API_KEY")',
      ],
    },
    {
      title: "Verify installation",
      commands: ['python -c "import langchain; print(langchain.__version__)"'],
      note: "If you see a version number, the setup is complete.",
    },
  ],
  "ai-m3-t1": [
    {
      title: "Go to console.groq.com",
      description: "Open your browser and sign up for a free Groq account.",
      link: { label: "Open Groq Console", url: "https://console.groq.com/keys" },
    },
    {
      title: "Navigate to API Keys",
      description: 'Click your profile → "API Keys" → "Create API Key". Copy the key now — it is shown only once.',
    },
    {
      title: "Store the key in a .env file",
      commands: ["GROQ_API_KEY=gsk_your_key_here"],
      note: "Create this file in your project root. Never paste the key directly in code.",
    },
    {
      title: "Add .env to .gitignore",
      commands: ["echo .env >> .gitignore"],
      note: "This prevents accidentally committing your key to GitHub.",
    },
    {
      title: "Read the key in Python",
      commands: [
        "import os",
        "from dotenv import load_dotenv",
        "load_dotenv()",
        'key = os.environ.get("GROQ_API_KEY")',
        'print("Key found:", bool(key))',
      ],
    },
    {
      title: "Install the Groq SDK",
      commands: ["pip install groq"],
      note: "Then test with: python -c \"from groq import Groq; print('OK')\"",
    },
  ],
};

export function buildSetupLesson(topicId: string): TopicLesson {
  const guide = getGuide(topicId);
  const steps = SETUP_STEPS[topicId] ?? [];

  return {
    topicId,
    intro: guide.hook,
    blocks: [
      infographic(topicId),
      { type: "heading", content: "What you need before starting" },
      {
        type: "paragraph",
        content: `${guide.hook} ${guide.outcome}`,
      },
      { type: "tip", content: guide.caution },
      {
        type: "setup-checklist",
        setupSteps: steps,
      },
    ],
    keyTakeaways: [
      guide.outcome,
      `Steps: ${guide.steps.join(" → ")}.`,
      guide.caution,
    ],
  };
}

// ─── Type C — Code Demo lesson ───────────────────────────────────────────────
// Concept explanation on the left, Jupyter notebook panel on the right.

export function buildCodeDemoLesson(topicId: string): TopicLesson {
  const guide = getGuide(topicId);
  const cells = NOTEBOOK_CELLS[topicId] ?? [];
  const installCell = cells.find((c) => c.cellType === "install");
  const installCmd = installCell?.code ?? GROQ_INSTALL;

  return {
    topicId,
    intro: guide.hook,
    blocks: [
      infographic(topicId),
      { type: "heading", content: guide.title },
      {
        type: "paragraph",
        content: `${guide.hook} ${guide.outcome}`,
      },
      flowDiagram(topicId),
      { type: "heading", content: "How it works" },
      { type: "paragraph", content: guide.example },
      { type: "tip", content: guide.caution },
      {
        type: "jupyter-notebook",
        installCmd,
        notebookCells: cells,
      },
    ],
    keyTakeaways: [
      guide.outcome,
      `Pattern: ${guide.steps.join(" → ")}.`,
      guide.caution,
    ],
  };
}

// ─── Type D — Playground lesson ──────────────────────────────────────────────
// Live Groq chat panel on the right side. Uses existing GroqChatPlayground.

const PLAYGROUND_PROMPTS: Record<string, string> = {
  "ai-m4-t3":
    "You are a helpful Python tutor. Give clear, beginner-friendly answers. If a question is off-topic, politely redirect.",
};

export function buildPlaygroundLesson(topicId: string): TopicLesson {
  const guide = getGuide(topicId);
  const systemPrompt = PLAYGROUND_PROMPTS[topicId] ?? "You are a helpful assistant.";

  return {
    topicId,
    intro: guide.hook,
    blocks: [
      infographic(topicId),
      { type: "heading", content: guide.title },
      {
        type: "paragraph",
        content: `${guide.hook} ${guide.outcome}`,
      },
      { type: "heading", content: "What to try" },
      {
        type: "list",
        items: [
          "Ask the bot a beginner Python question.",
          "Ask a follow-up — does it remember context?",
          "Give an off-topic prompt and see how it responds.",
          "Try changing the system prompt to give the bot a different persona.",
          "Send an ambiguous question and see what assumptions it makes.",
        ],
      },
      { type: "tip", content: guide.caution },
      {
        type: "groq-playground",
        systemPrompt,
      },
    ],
    keyTakeaways: [
      guide.outcome,
      "Testing means trying many different inputs, not just one good one.",
      guide.caution,
    ],
  };
}

// ─── Type E — Full Project lesson ────────────────────────────────────────────
// Multi-step build topic. Notebook panel on the right with complete project code.

const PROJECT_INTROS: Record<string, { overview: string; whatYoullBuild: string }> = {
  "ai-m6-t2": {
    overview:
      "A Document Q&A Bot retrieves relevant chunks from your documents before sending them to the model — so the model answers from your content, not just training data.",
    whatYoullBuild:
      "A Python chatbot that loads document chunks, retrieves the most relevant ones for each question, and generates grounded answers using the Groq API.",
  },
  "ai-m6-t4": {
    overview:
      "After this course, you have the building blocks to build real AI apps: prompts, APIs, tools, retrieval, and multi-agent coordination.",
    whatYoullBuild:
      "A personal roadmap for your next project — combining what you learned into a real application idea.",
  },
};

export function buildProjectLesson(topicId: string): TopicLesson {
  const guide = getGuide(topicId);
  const cells = NOTEBOOK_CELLS[topicId] ?? [];
  const installCell = cells.find((c) => c.cellType === "install");
  const installCmd = installCell?.code ?? GROQ_INSTALL;
  const meta = PROJECT_INTROS[topicId];

  return {
    topicId,
    intro: guide.hook,
    blocks: [
      infographic(topicId),
      { type: "heading", content: "What you will build" },
      { type: "paragraph", content: meta?.whatYoullBuild ?? guide.hook },
      { type: "heading", content: "How it works" },
      { type: "paragraph", content: meta?.overview ?? guide.example },
      flowDiagram(topicId),
      { type: "tip", content: guide.caution },
      {
        type: "jupyter-notebook",
        installCmd,
        notebookCells: cells,
      },
    ],
    keyTakeaways: [
      guide.outcome,
      `Build in order: ${guide.steps.join(" → ")}.`,
      guide.caution,
    ],
  };
}

// ─── Batch helpers ───────────────────────────────────────────────────────────

type LessonType = "concept" | "setup" | "code-demo" | "playground" | "project";

const TOPIC_TYPES: Record<string, LessonType> = {
  // Type A — Concept
  "ai-m1-t1": "concept",
  "ai-m1-t2": "concept",
  "ai-m1-t3": "concept",
  "ai-m1-t4": "concept",
  "ai-lc-t1": "concept",
  "ai-m2-t1": "concept",
  "ai-m3-t4": "concept",
  "ai-m5-t1": "concept",
  "ai-m5-t4": "concept",
  "ai-m6-t4": "concept",
  // Type B — Setup
  "ai-lc-t2": "setup",
  "ai-m3-t1": "setup",
  // Type C — Code Demo
  "ai-lc-t3": "code-demo",
  "ai-lc-t4": "code-demo",
  "ai-lc-t5": "code-demo",
  "ai-lc-t6": "code-demo",
  "ai-lc-t7": "code-demo",
  "ai-m2-t2": "code-demo",
  "ai-m2-t3": "code-demo",
  "ai-m2-t4": "code-demo",
  "ai-m2-t5": "code-demo",
  "ai-m3-t2": "code-demo",
  "ai-m3-t3": "code-demo",
  "ai-m3-t5": "code-demo",
  "ai-m4-t1": "code-demo",
  "ai-m4-t2": "code-demo",
  "ai-m4-t4": "code-demo",
  "ai-m4-t5": "code-demo",
  "ai-m5-t2": "code-demo",
  "ai-m5-t3": "code-demo",
  "ai-m6-t1": "code-demo",
  "ai-m6-t3": "code-demo",
  // Type D — Playground
  "ai-m4-t3": "playground",
  // Type E — Project
  "ai-m6-t2": "project",
};

export function buildAgenticAiLesson(topicId: string): TopicLesson {
  const type = TOPIC_TYPES[topicId] ?? "concept";
  switch (type) {
    case "setup":      return buildSetupLesson(topicId);
    case "code-demo":  return buildCodeDemoLesson(topicId);
    case "playground": return buildPlaygroundLesson(topicId);
    case "project":    return buildProjectLesson(topicId);
    default:           return buildConceptLesson(topicId);
  }
}

export function buildAgenticAiLessons(
  topicIds: readonly string[]
): Record<string, TopicLesson> {
  return Object.fromEntries(
    topicIds.map((id) => [id, buildAgenticAiLesson(id)])
  );
}

// Legacy export kept for any direct imports
export { buildAgenticAiExampleCode };
