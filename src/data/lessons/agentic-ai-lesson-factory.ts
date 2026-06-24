import type { LessonBlock, TopicLesson } from "@/lib/types";
import {
  AGENTIC_AI_TOPIC_GUIDES,
  DEFAULT_AGENTIC_AI_TOPIC_GUIDE,
} from "@/data/agentic-ai-topic-guides";

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

function explainStep(step: string, index: number, topicTitle: string) {
  const prefix = index === 0 ? "Start here" : index === 1 ? "Then" : "Finally";
  return `${prefix}: ${step}. In ${topicTitle}, this means you should understand this part before moving to the next idea.`;
}

function expandedConceptBlocks(topicId: string): LessonBlock[] {
  const guide = getGuide(topicId);
  return [
    { type: "heading", content: "Understand the idea first" },
    {
      type: "paragraph",
      content:
        `${guide.hook} ${guide.outcome} The important point is not memorizing a tool name. ` +
        "The important point is understanding what problem this concept solves, when to use it, and what can go wrong if it is used carelessly.",
    },
    flowDiagram(topicId),
    { type: "heading", content: "Step-by-step meaning" },
    {
      type: "list",
      items: guide.steps.map((step, index) => explainStep(step, index, guide.title)),
    },
    { type: "heading", content: "How this appears in a real app" },
    {
      type: "paragraph",
      content:
        `${guide.example} Think of this as the real-world situation where the concept becomes useful. ` +
        "If you can explain this example in your own words, you understand the lesson well enough to continue.",
    },
    { type: "heading", content: "What beginners often miss" },
    {
      type: "paragraph",
      content:
        "A beginner mistake is treating AI features as magic. In real applications, every AI feature still has inputs, outputs, limits, and failure cases. " +
        "Good AI developers make those parts visible and testable.",
    },
    { type: "tip", content: guide.caution },
  ];
}

function setupBlocks(topicId: string): LessonBlock[] {
  const guide = getGuide(topicId);
  const steps = SETUP_STEPS[topicId] ?? [];
  return [
    ...expandedConceptBlocks(topicId),
    { type: "heading", content: "Setup steps explained" },
    {
      type: "paragraph",
      content:
        "Setup lessons are about preparing your local environment. You do not need to run anything inside this website. " +
        "Read the steps, understand why each one exists, and then repeat them in your own project folder.",
    },
    ...steps.flatMap((step, index): LessonBlock[] => [
      {
        type: "heading",
        content: `${index + 1}. ${step.title}`,
      },
      {
        type: "paragraph",
        content: [step.description, step.note].filter(Boolean).join(" "),
      },
      ...(step.commands && step.commands.length > 0
        ? [
            {
              type: "list" as const,
              items: step.commands.map(
                (command) => `Command or code to use locally: ${command}`
              ),
            },
          ]
        : []),
    ]),
    { type: "tip", content: guide.caution },
  ];
}

function implementationIdeaBlocks(topicId: string): LessonBlock[] {
  const guide = getGuide(topicId);
  return [
    ...expandedConceptBlocks(topicId),
    { type: "heading", content: "How to think about the implementation" },
    {
      type: "paragraph",
      content:
        "Instead of memorizing code, focus on the moving parts. Ask: what data enters this step, what decision happens, what output should be produced, and how would I verify it worked?",
    },
    {
      type: "list",
      items: [
        `Input: ${guide.steps[0]}. This is the information or setup the app needs first.`,
        `Process: ${guide.steps[1]}. This is where the app transforms, routes, retrieves, or reasons over information.`,
        `Output: ${guide.steps[2]}. This is the result the user or the next system step depends on.`,
        "Check: decide what a correct result should look like before trusting the model output.",
      ],
    },
  ];
}

// ─── Type A — Concept lesson ─────────────────────────────────────────────────
// Pure theory topics: visual explanation, expanded writing, concept panel.

export function buildConceptLesson(topicId: string): TopicLesson {
  const guide = getGuide(topicId);

  return {
    topicId,
    intro: guide.hook,
    blocks: [
      infographic(topicId),
      ...expandedConceptBlocks(topicId),
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
// Step-by-step install / configuration topics rendered inline and in panel.

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
      ...setupBlocks(topicId),
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
// Concept explanation with implementation code rendered inline and in notebook panel.

export function buildCodeDemoLesson(topicId: string): TopicLesson {
  const guide = getGuide(topicId);

  return {
    topicId,
    intro: guide.hook,
    blocks: [
      infographic(topicId),
      ...implementationIdeaBlocks(topicId),
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

// ─── Type D — Playground lesson ──────────────────────────────────────────────
// Playground topics include written testing guidance and the embedded chat panel.
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
      ...expandedConceptBlocks(topicId),
      { type: "heading", content: "How to test this without a built-in playground" },
      {
        type: "list",
        items: [
          "Write down five realistic user messages before testing.",
          "Include one follow-up question to check whether the chatbot uses history correctly.",
          "Include one unclear question to see whether the bot asks for clarification.",
          "Include one off-topic or unsafe request to verify the guardrails.",
          "Compare responses against your expected behavior, not just whether the model produced text.",
        ],
      },
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
      ...implementationIdeaBlocks(topicId),
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
