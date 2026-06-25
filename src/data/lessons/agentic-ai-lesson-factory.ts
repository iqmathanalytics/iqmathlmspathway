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

function mentalModel(topicId: string) {
  const guide = getGuide(topicId);
  const module = guide.moduleLabel.toLowerCase();
  if (module.includes("foundation")) {
    return "Think of this like learning how a car moves before learning to drive. You do not need to build the engine yet, but you should understand the main parts: input, pattern, prediction, and limits.";
  }
  if (module.includes("langchain")) {
    return "Think of LangChain like connecting reusable blocks with pipes. A prompt prepares the request, a model produces a response, a parser shapes the result, and tools or memory can be added when the app grows.";
  }
  if (module.includes("prompt")) {
    return "Think of a prompt like a work order. If the work order clearly says the role, task, constraints, and format, the model has a much better chance of returning the result you wanted.";
  }
  if (module.includes("groq")) {
    return "Think of the Groq API as a fast remote model service. Your app packages messages, sends them to Groq with a model name and settings, then reads the response object that comes back.";
  }
  if (module.includes("chatbot")) {
    return "Think of a chatbot as a loop. The app stores messages, sends the current conversation to the model, receives a reply, saves that reply, and waits for the next user message.";
  }
  if (module.includes("agent")) {
    return "Think of an agent as a controlled loop that can choose actions. It looks at the goal, decides whether a tool is needed, observes the result, and then decides whether it can answer or must continue.";
  }
  return "Think of this as one piece of a real AI product. The concept is useful only when you know what input it needs, what job it performs, what output it creates, and how to check the result.";
}

function whyItMatters(topicId: string) {
  const guide = getGuide(topicId);
  return `${guide.title} matters because AI apps can fail in quiet ways: they can sound confident, use the wrong context, call the wrong tool, or return an answer that looks good but is not grounded. This concept helps you design the app so the important parts are clear and testable.`;
}

function simpleAnalogy(topicId: string) {
  const guide = getGuide(topicId);
  const module = guide.moduleLabel.toLowerCase();
  if (module.includes("foundation")) {
    return "Analogy: learning AI foundations is like learning road signs before driving. You are not building the whole vehicle yet, but you are learning what each signal means so later decisions make sense.";
  }
  if (module.includes("langchain")) {
    return "Analogy: LangChain is like a kitchen counter with reusable tools. You can place a recipe card, a mixer, a measuring cup, and a plate in order so ingredients move through a clear workflow.";
  }
  if (module.includes("prompt")) {
    return "Analogy: a prompt is like giving instructions to a teammate. If you only say 'make it better,' the teammate has to guess. If you give audience, goal, constraints, and format, the result becomes easier to predict.";
  }
  if (module.includes("groq")) {
    return "Analogy: the Groq API is like sending a request to a very fast expert in another room. Your app writes the request clearly, sends it with a key, waits for the answer, and checks what came back.";
  }
  if (module.includes("chatbot")) {
    return "Analogy: a chatbot is like a receptionist with a notebook. If the notebook contains the previous conversation, the receptionist can answer follow-ups. If the notebook is missing, every message feels like the first message.";
  }
  if (module.includes("agent")) {
    return "Analogy: an agent is like an assistant with a checklist and approved tools. It should not do random things; it should decide what tool is needed, use it safely, observe the result, and then continue.";
  }
  return "Analogy: a real AI app is like a small team. Retrieval finds facts, prompts give instructions, tools perform actions, evaluations check quality, and monitoring watches what happens after release.";
}

function vocabulary(topicId: string): string[] {
  const guide = getGuide(topicId);
  const module = guide.moduleLabel.toLowerCase();
  if (module.includes("foundation")) {
    return [
      "Input: the information given to an AI system, such as text, examples, or a user question.",
      "Pattern: something the model learns from data, such as repeated words, relationships, or structures.",
      "Prediction: the model's best next output based on what it has learned and what context it sees.",
      "Limitation: a place where the model can be wrong, biased, outdated, or missing context.",
    ];
  }
  if (module.includes("langchain")) {
    return [
      "Component: one reusable part of an LLM app, such as a prompt, model, parser, retriever, or tool.",
      "Chain: a sequence where the output of one component becomes the input to the next component.",
      "Parser: the part that turns model output into the shape your app needs, such as text or structured data.",
      "Trace: a recorded view of what happened during a run, useful for debugging and monitoring.",
    ];
  }
  if (module.includes("prompt")) {
    return [
      "Context: background information the model needs before answering.",
      "Task: the specific job you want the model to perform.",
      "Constraint: a rule that limits the answer, such as length, tone, or allowed format.",
      "Example: a sample input/output pair that shows the model the pattern you expect.",
    ];
  }
  if (module.includes("groq")) {
    return [
      "API key: a private credential that identifies your app to Groq.",
      "Model: the specific LLM you choose for a request.",
      "Message: one item in the chat history, usually system, user, or assistant.",
      "Usage: token counts that help you understand cost, context size, and response length.",
    ];
  }
  if (module.includes("chatbot")) {
    return [
      "History: the messages your app sends so the model can follow the conversation.",
      "System prompt: the instruction that defines the chatbot's role and behavior.",
      "Turn: one user message plus the assistant's reply.",
      "Streaming: sending the reply in small chunks so the user sees progress quickly.",
    ];
  }
  if (module.includes("agent")) {
    return [
      "Tool: a function the agent can request, such as search, calculator, or database lookup.",
      "Observation: the result returned after a tool runs.",
      "Loop: the repeated cycle of deciding, acting, observing, and deciding again.",
      "Guardrail: a rule that keeps the agent safe, limited, and testable.",
    ];
  }
  return [
    "Retrieval: finding relevant information before asking the model to answer.",
    "Grounding: forcing the answer to use provided context instead of guessing.",
    "Evaluation: checking whether outputs meet expected quality.",
    "Monitoring: watching real app behavior after users start using it.",
  ];
}

function appPlacement(topicId: string) {
  const guide = getGuide(topicId);
  const module = guide.moduleLabel.toLowerCase();
  if (module.includes("foundation")) {
    return "In a real project, this knowledge helps you decide what AI can and cannot do. Before choosing tools or writing prompts, you need to know whether the task needs prediction, generation, retrieval, rules, or human review.";
  }
  if (module.includes("langchain")) {
    return "In a real project, this belongs in the application layer that connects prompts, models, tools, retrievers, and output parsing. LangChain is most helpful when your app has multiple moving parts that need to be composed cleanly.";
  }
  if (module.includes("prompt")) {
    return "In a real project, prompts sit between your app logic and the model. They translate user intent and app context into clear instructions the model can follow.";
  }
  if (module.includes("groq")) {
    return "In a real project, Groq sits behind your backend or service layer. Your frontend should not expose private keys; your app sends requests through a safe server-side path.";
  }
  if (module.includes("chatbot")) {
    return "In a real project, chatbot logic sits around the model call. It manages history, user sessions, safety behavior, response settings, and the display of replies.";
  }
  if (module.includes("agent")) {
    return "In a real project, the agent layer coordinates model reasoning with approved tools. It should be surrounded by validation, step limits, logging, and human review for risky actions.";
  }
  return "In a real project, this concept connects the prototype to a production app. It helps you move from a working demo to something grounded, evaluated, monitored, and safe to improve.";
}

function readinessChecklist(topicId: string): string[] {
  const guide = getGuide(topicId);
  return [
    `I can explain what ${guide.title} is in one or two simple sentences.`,
    `I can point to the input, process, and output in the ${guide.title} pattern.`,
    "I can name one common failure case and how I would notice it.",
    "I can describe where this idea fits in a real app, not just in a lesson.",
  ];
}

function commonMistakes(topicId: string): string[] {
  const guide = getGuide(topicId);
  const module = guide.moduleLabel.toLowerCase();
  const shared = [
    "Assuming a confident answer is automatically correct.",
    "Skipping tests because one demo response looked good.",
  ];
  if (module.includes("foundation")) {
    return [
      "Thinking AI understands like a human instead of predicting from learned patterns.",
      "Forgetting that missing or biased examples can produce wrong behavior.",
      ...shared,
    ];
  }
  if (module.includes("langchain")) {
    return [
      "Using a framework before understanding the simple flow it is organizing.",
      "Building long chains before testing each small step.",
      ...shared,
    ];
  }
  if (module.includes("prompt")) {
    return [
      "Writing a vague prompt and expecting a precise answer.",
      "Changing many prompt details at once, then not knowing what improved or broke the result.",
      ...shared,
    ];
  }
  if (module.includes("groq")) {
    return [
      "Hardcoding API keys instead of loading them from environment variables.",
      "Ignoring errors, rate limits, token usage, and finish reasons.",
      ...shared,
    ];
  }
  if (module.includes("chatbot")) {
    return [
      "Forgetting that the model only sees the conversation history you send.",
      "Letting the chat history grow forever without trimming or summarizing it.",
      ...shared,
    ];
  }
  if (module.includes("agent")) {
    return [
      "Giving an agent tools without validating tool inputs.",
      "Allowing unlimited loops or actions without guardrails.",
      ...shared,
    ];
  }
  return [
    "Building the feature before defining what a correct answer looks like.",
    "Forgetting to show sources, logs, or traces when the app makes an important decision.",
    ...shared,
  ];
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
    { type: "heading", content: "Why this matters" },
    {
      type: "paragraph",
      content: whyItMatters(topicId),
    },
    { type: "heading", content: "Mental model" },
    {
      type: "paragraph",
      content: mentalModel(topicId),
    },
    { type: "heading", content: "Simple analogy" },
    {
      type: "paragraph",
      content: simpleAnalogy(topicId),
    },
    { type: "heading", content: "Key words in this lesson" },
    {
      type: "list",
      items: vocabulary(topicId),
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
    { type: "heading", content: "Where it fits in an AI app" },
    {
      type: "paragraph",
      content: appPlacement(topicId),
    },
    { type: "heading", content: "What beginners often miss" },
    {
      type: "paragraph",
      content:
        "A beginner mistake is treating AI features as magic. In real applications, every AI feature still has inputs, outputs, limits, and failure cases. " +
        "Good AI developers make those parts visible and testable.",
    },
    { type: "heading", content: "Common mistakes to avoid" },
    {
      type: "list",
      items: commonMistakes(topicId),
    },
    { type: "heading", content: "Check your understanding" },
    {
      type: "list",
      items: readinessChecklist(topicId),
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
    {
      type: "paragraph",
      content:
        "A setup step is successful only when your app can import the package, read the required key from the environment, and make the next lesson possible. If any of those parts are missing, later code will fail even if the lesson concept is correct.",
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
    { type: "heading", content: "Design questions before building" },
    {
      type: "list",
      items: [
        "What should the user provide, and what should the app add automatically as context?",
        "What should happen if the model returns an incomplete, unsafe, or low-confidence answer?",
        "What should be logged so you can debug the behavior later?",
        "What is the smallest test case that proves this part of the app works?",
      ],
    },
    { type: "heading", content: "How you would explain this to a teammate" },
    {
      type: "paragraph",
      content:
        `In ${guide.title}, the app should be designed so another developer can see where the information starts, where it changes, and where the final result is used. ` +
        "That is what makes an AI feature maintainable: not the amount of code, but the clarity of the flow.",
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
