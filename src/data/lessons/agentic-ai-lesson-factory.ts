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
  const mod = guide.moduleLabel.toLowerCase();
  if (mod.includes("foundation")) {
    return "Think of this like learning how a car moves before learning to drive. You do not need to build the engine yet, but you should understand the main parts: input, pattern, prediction, and limits.";
  }
  if (mod.includes("langchain")) {
    return "Think of LangChain like connecting reusable blocks with pipes. A prompt prepares the request, a model produces a response, a parser shapes the result, and tools or memory can be added when the app grows.";
  }
  if (mod.includes("prompt")) {
    return "Think of a prompt like a work order. If the work order clearly says the role, task, constraints, and format, the model has a much better chance of returning the result you wanted.";
  }
  if (mod.includes("groq")) {
    return "Think of the Groq API as a fast remote model service. Your app packages messages, sends them to Groq with a model name and settings, then reads the response object that comes back.";
  }
  if (mod.includes("chatbot")) {
    return "Think of a chatbot as a loop. The app stores messages, sends the current conversation to the model, receives a reply, saves that reply, and waits for the next user message.";
  }
  if (mod.includes("agent")) {
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
  const mod = guide.moduleLabel.toLowerCase();
  if (mod.includes("foundation")) {
    return "Analogy: learning AI foundations is like learning road signs before driving. You are not building the whole vehicle yet, but you are learning what each signal means so later decisions make sense.";
  }
  if (mod.includes("langchain")) {
    return "Analogy: LangChain is like a kitchen counter with reusable tools. You can place a recipe card, a mixer, a measuring cup, and a plate in order so ingredients move through a clear workflow.";
  }
  if (mod.includes("prompt")) {
    return "Analogy: a prompt is like giving instructions to a teammate. If you only say 'make it better,' the teammate has to guess. If you give audience, goal, constraints, and format, the result becomes easier to predict.";
  }
  if (mod.includes("groq")) {
    return "Analogy: the Groq API is like sending a request to a very fast expert in another room. Your app writes the request clearly, sends it with a key, waits for the answer, and checks what came back.";
  }
  if (mod.includes("chatbot")) {
    return "Analogy: a chatbot is like a receptionist with a notebook. If the notebook contains the previous conversation, the receptionist can answer follow-ups. If the notebook is missing, every message feels like the first message.";
  }
  if (mod.includes("agent")) {
    return "Analogy: an agent is like an assistant with a checklist and approved tools. It should not do random things; it should decide what tool is needed, use it safely, observe the result, and then continue.";
  }
  return "Analogy: a real AI app is like a small team. Retrieval finds facts, prompts give instructions, tools perform actions, evaluations check quality, and monitoring watches what happens after release.";
}

function vocabulary(topicId: string): string[] {
  const guide = getGuide(topicId);
  const mod = guide.moduleLabel.toLowerCase();
  if (mod.includes("foundation")) {
    return [
      "Input: the information given to an AI system, such as text, examples, or a user question.",
      "Pattern: something the model learns from data, such as repeated words, relationships, or structures.",
      "Prediction: the model's best next output based on what it has learned and what context it sees.",
      "Limitation: a place where the model can be wrong, biased, outdated, or missing context.",
    ];
  }
  if (mod.includes("langchain")) {
    return [
      "Component: one reusable part of an LLM app, such as a prompt, model, parser, retriever, or tool.",
      "Chain: a sequence where the output of one component becomes the input to the next component.",
      "Parser: the part that turns model output into the shape your app needs, such as text or structured data.",
      "Trace: a recorded view of what happened during a run, useful for debugging and monitoring.",
    ];
  }
  if (mod.includes("prompt")) {
    return [
      "Context: background information the model needs before answering.",
      "Task: the specific job you want the model to perform.",
      "Constraint: a rule that limits the answer, such as length, tone, or allowed format.",
      "Example: a sample input/output pair that shows the model the pattern you expect.",
    ];
  }
  if (mod.includes("groq")) {
    return [
      "API key: a private credential that identifies your app to Groq.",
      "Model: the specific LLM you choose for a request.",
      "Message: one item in the chat history, usually system, user, or assistant.",
      "Usage: token counts that help you understand cost, context size, and response length.",
    ];
  }
  if (mod.includes("chatbot")) {
    return [
      "History: the messages your app sends so the model can follow the conversation.",
      "System prompt: the instruction that defines the chatbot's role and behavior.",
      "Turn: one user message plus the assistant's reply.",
      "Streaming: sending the reply in small chunks so the user sees progress quickly.",
    ];
  }
  if (mod.includes("agent")) {
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
  const mod = guide.moduleLabel.toLowerCase();
  if (mod.includes("foundation")) {
    return "In a real project, this knowledge helps you decide what AI can and cannot do. Before choosing tools or writing prompts, you need to know whether the task needs prediction, generation, retrieval, rules, or human review.";
  }
  if (mod.includes("langchain")) {
    return "In a real project, this belongs in the application layer that connects prompts, models, tools, retrievers, and output parsing. LangChain is most helpful when your app has multiple moving parts that need to be composed cleanly.";
  }
  if (mod.includes("prompt")) {
    return "In a real project, prompts sit between your app logic and the model. They translate user intent and app context into clear instructions the model can follow.";
  }
  if (mod.includes("groq")) {
    return "In a real project, Groq sits behind your backend or service layer. Your frontend should not expose private keys; your app sends requests through a safe server-side path.";
  }
  if (mod.includes("chatbot")) {
    return "In a real project, chatbot logic sits around the model call. It manages history, user sessions, safety behavior, response settings, and the display of replies.";
  }
  if (mod.includes("agent")) {
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
  const mod = guide.moduleLabel.toLowerCase();
  const shared = [
    "Assuming a confident answer is automatically correct.",
    "Skipping tests because one demo response looked good.",
  ];
  if (mod.includes("foundation")) {
    return [
      "Thinking AI understands like a human instead of predicting from learned patterns.",
      "Forgetting that missing or biased examples can produce wrong behavior.",
      ...shared,
    ];
  }
  if (mod.includes("langchain")) {
    return [
      "Using a framework before understanding the simple flow it is organizing.",
      "Building long chains before testing each small step.",
      ...shared,
    ];
  }
  if (mod.includes("prompt")) {
    return [
      "Writing a vague prompt and expecting a precise answer.",
      "Changing many prompt details at once, then not knowing what improved or broke the result.",
      ...shared,
    ];
  }
  if (mod.includes("groq")) {
    return [
      "Hardcoding API keys instead of loading them from environment variables.",
      "Ignoring errors, rate limits, token usage, and finish reasons.",
      ...shared,
    ];
  }
  if (mod.includes("chatbot")) {
    return [
      "Forgetting that the model only sees the conversation history you send.",
      "Letting the chat history grow forever without trimming or summarizing it.",
      ...shared,
    ];
  }
  if (mod.includes("agent")) {
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
        `Before using ${guide.title}, slow down and ask what job it is doing in the application. ` +
        "Most AI concepts are not isolated facts; they are parts of a flow. A user gives something, the app prepares context, the model or system makes a decision, and the result must be checked before anyone trusts it.",
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
    { type: "heading", content: "Beginner translation" },
    {
      type: "list",
      items: [
        `What it is: ${guide.title} is one part of an AI app workflow, not the whole app by itself.`,
        `Why you use it: ${guide.outcome}`,
        `How to remember it: ${simpleAnalogy(topicId)}`,
      ],
    },
    { type: "heading", content: "Important words before you continue" },
    {
      type: "list",
      items: vocabulary(topicId),
    },
    { type: "heading", content: "How to read the pattern" },
    {
      type: "paragraph",
      content:
        "The visual pattern above is a shortcut. Read it from left to right: first identify what the app needs, then understand what transformation happens, then check what output the next part of the app receives.",
    },
    {
      type: "list",
      items: guide.steps.map((step, index) => explainStep(step, index, guide.title)),
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

// ─── Type F — What is a Prompt article (ai-m2-t1) ───────────────────────────
// Custom article-style lesson for the introductory "What is a Prompt?" topic.

export function buildWhatIsPromptLesson(): TopicLesson {
  return {
    topicId: "ai-m2-t1",
    intro: "A prompt is the instruction package you send to the model: context, task, and format.",
    blocks: [
      { type: "heading", content: "What is an AI Prompt?" },
      {
        type: "paragraph",
        content:
          "An artificial intelligence (AI) prompt is a question, command or statement that a person gives to an artificial intelligence model, such as a large language model, to guide it in generating a specific response. The prompt provides the AI with the necessary context or instructions so it can produce output that is relevant to what you are asking or requesting.",
      },
      {
        type: "image",
        image: "/images/ai-prompt-infographic.png",
        imageAlt: "AI Prompt diagram showing Improves Accuracy, Enables Complex Tasks, and Enhances User Experience",
      },
      {
        type: "paragraph",
        content:
          "Depending on how the prompt is phrased, the AI can generate a variety of outputs, from a single word to a detailed paragraph. It acts as the starting point for the AI's generation process, directing it to create content that matches your intent.",
      },
      {
        type: "paragraph",
        content:
          'Prompts can range from simple — "Translate this sentence to French" — to complex, multi-part instructions or scenarios.',
      },
      { type: "heading", content: "Importance of AI Prompts" },
      {
        type: "list",
        items: [
          "Directs Output: The prompt determines what the AI generates, how relevant it is and whether it meets your needs.",
          "Improves Accuracy: Clear, specific prompts reduce misunderstandings and produce more precise, useful responses.",
          "Saves Time: Well-crafted prompts minimize trial and error, speeding up workflows and improving productivity.",
          "Enables Complex Tasks: Good prompts allow you to use AI for sophisticated tasks like summarization, data extraction or creative writing.",
          "Enhances User Experience: Effective prompts make AI interactions smoother, more intuitive and more valuable.",
        ],
      },
      { type: "heading", content: "Types of AI Prompts" },
      {
        type: "list",
        items: [
          'Text Generation — Produces written content, summaries or stories. Example: "Summarize this article in three sentences."',
          'Question Answering — Provides factual or explanatory answers. Example: "What is the capital of Japan?"',
          'Code Generation — Generates code snippets or scripts. Example: "Write Python code to sort a list."',
          'Classification — Categorises or labels information. Example: "Classify this review as positive or negative."',
          'Creative / Generative — Produces poems, stories or images (if supported). Example: "Write a short poem about the ocean."',
          "Other types include translation, dialogue, and problem-solving — specialized forms or combinations of these.",
        ],
      },
      {
        type: "tip",
        content:
          "Structure your prompt for clarity and refine as needed for better results. For more prompt tuning techniques, search for Prompt Tuning Techniques.",
      },
      { type: "heading", content: "Applications" },
      {
        type: "list",
        items: [
          "Used in chatbots and virtual assistants to generate conversational responses.",
          "Power RAG systems by guiding retrieval and generating context-aware answers.",
          "Enable code assistants to generate, debug, and explain code.",
          "Support content creation for writing, marketing, and storytelling.",
          "Assist in data analysis by summarizing and classifying large datasets.",
          "Used in image generation and design tools to create visuals from text.",
        ],
      },
      { type: "heading", content: "Challenges" },
      {
        type: "list",
        items: [
          "Harmful or Biased Outputs: Poorly designed prompts can lead to offensive or skewed results.",
          "Data Privacy: Prompts may contain sensitive or personal information.",
          "Unintended Outputs: Ambiguous prompts can cause irrelevant or misleading answers.",
          "AI Hallucinations: The model may generate plausible but incorrect information.",
          "Model Limitations: Different models may interpret the same prompt differently — always fact-check outputs.",
        ],
      },
      { type: "how-to-create-prompts" },
    ],
    keyTakeaways: [
      "A prompt is the instruction you send to an AI model to guide its response.",
      "Clear, specific prompts improve accuracy, save time, and enable complex tasks.",
      "Vague prompts create vague answers — be specific about the result you want.",
    ],
  };
}

// ─── Type G — System vs User Prompts article (ai-m2-t2) ─────────────────────

export function buildSystemVsUserLesson(): TopicLesson {
  return {
    topicId: "ai-m2-t2",
    intro: "System prompts set durable, session-wide behavior; user prompts carry the specific per-request task.",
    blocks: [
      {
        type: "heading",
        content: "What is the difference between a system prompt and a user prompt?",
      },
      {
        type: "paragraph",
        content:
          "A system prompt sets durable, session-wide behavior — role, tone, output format, and refusal rules — and runs once at the start of a conversation. A user prompt is the specific message a person sends per request. The system prompt carries higher authority; when the two conflict, models trained on OpenAI's instruction hierarchy favor the system layer. System equals job description, user equals today's task.",
      },
      {
        type: "paragraph",
        content:
          "That one-line distinction is the whole game, but it has consequences most people never see until their output quietly degrades. Get the split right and your prompts become reusable, cheaper to run, and far more consistent. Get it wrong and you end up re-typing your persona into every message, fighting your own instructions, and wondering why the model's tone wanders halfway through a session.",
      },
      {
        type: "image",
        image: "/images/system-vs-user-prompt.png",
        imageAlt: "System Prompt vs User Prompt comparison diagram",
      },
      { type: "heading", content: "What is a system prompt, and what is it for?" },
      {
        type: "paragraph",
        content:
          "A system prompt is the top-level instruction layer. It persists across the entire conversation, and the model treats it as the standing context for every reply. Think of it as the configuration you set before any work happens.",
      },
      {
        type: "paragraph",
        content: "Use the system prompt for things that stay constant:",
      },
      {
        type: "list",
        items: [
          'Role — who the AI should be. "You are a senior backend engineer with ten years in production systems."',
          "Voice and tone — how it should write. Direct, warm, severity-tiered, no jargon.",
          "Format rules — output shape, length caps, required sections, JSON schema.",
          "Refusal policy — what to decline and how to decline it.",
          "Domain anchors — the knowledge area to operate in and the assumptions to make.",
          "Reusable examples — a few-shot pattern you want applied every time.",
        ],
      },
      {
        type: "paragraph",
        content:
          'OpenAI\'s own GPT-5 guidance frames it the same way: the system prompt "provides a strong default foundation," while "the user prompt remains a highly effective lever for steerability." The system layer is your default; the user layer is how you bend it for a single task.',
      },
      {
        type: "tip",
        content:
          "The key property is stability. Anything you would want to apply identically across hundreds of requests belongs in the system prompt. If it changes per request, it does not belong there.",
      },
      { type: "heading", content: "What is a user prompt, and what is it for?" },
      {
        type: "paragraph",
        content:
          "A user prompt is the specific message a person sends. It runs per request and carries the part of the interaction that actually varies.",
      },
      {
        type: "paragraph",
        content: "Use the user prompt for:",
      },
      {
        type: "list",
        items: [
          "The actual task or question.",
          "Per-request context — the data, the diff, the email, the document to operate on.",
          'Per-request overrides — "make this one longer," "use a table this time."',
        ],
      },
      {
        type: "paragraph",
        content:
          "A clean mental model: system prompt equals job description; user prompt equals today's task. Don't put the job description in every task. Don't put one task in the job description.",
      },
      {
        type: "heading",
        content: "How does the instruction hierarchy rank system, developer, and user prompts?",
      },
      {
        type: "paragraph",
        content:
          "OpenAI now trains models to weight instructions by their source, formalized in the OpenAI Model Spec. The spec defines five authority levels, from highest to lowest.",
      },
      {
        type: "image",
        image: "/images/instruction-hierarchy.png",
        imageAlt: "Instruction hierarchy pyramid: Root, System, Developer, User, Guideline",
      },
      {
        type: "list",
        items: [
          "Root (Priority 1) — OpenAI Model Spec. Cannot be overridden — catastrophic risk, physical harm, legal violations.",
          "System (Priority 2) — OpenAI deployment context. Overrides developer and user; subordinate to root.",
          "Developer (Priority 3) — API customers (you, the app builder). Overrides user; must respect root and system.",
          "User (Priority 4) — End users. Overrides guideline defaults; defers to all higher levels.",
          "Guideline (Priority 5) — Default recommendations. Implicitly overridden by context, history, or developer customization.",
        ],
      },
      {
        type: "paragraph",
        content:
          "The crucial nuance most articles get wrong: in the current spec, the message you set as an app builder is technically a developer message, not a system message. You still outrank the end user — which is exactly what you want — but you sit below OpenAI's own system layer and the non-negotiable root rules.",
      },
      {
        type: "paragraph",
        content:
          "Why does any of this matter? Because higher authority overrides lower. If a user pastes 'Ignore all previous instructions' into their message, a model trained on the hierarchy is biased to keep honoring your developer/system layer instead. The hierarchy is the mechanism that makes your standing rules sticky.",
      },
      {
        type: "heading",
        content: "Does the instruction hierarchy actually stop prompt injection?",
      },
      {
        type: "paragraph",
        content:
          "It helps. It does not solve the problem. In benchmark testing, undefended models are highly vulnerable: roughly 73.2% of prompt-injection attacks succeed on average. Layering defenses brings that down dramatically — content filtering alone cuts success to around 41%, adding hierarchical guardrails pushes it to about 23%, and a complete defense framework reaches 8.7% overall attack success, an 88.1% reduction from baseline.",
      },
      {
        type: "paragraph",
        content:
          "Read those numbers carefully. Even the strongest stacks leave a residual attack surface. None reach zero. The instruction hierarchy is one layer in a defense-in-depth strategy, not the wall itself.",
      },
      {
        type: "list",
        items: [
          "Never put secrets in any prompt layer. Determined users can extract system and developer prompts. Keep API keys and confidential data in environment variables.",
          "Treat tool output as untrusted. Tool returns may be attacker-controlled (a poisoned web page, a malicious document). Validate before acting on them.",
          "Add output validation. Schema checks, allow-lists, and human review for high-stakes actions catch what the hierarchy misses.",
          "Use least privilege. If an agent can't delete data, an injection telling it to delete data fails by construction.",
        ],
      },
      { type: "system-vs-user-guide" },
    ],
    keyTakeaways: [
      "System prompts set stable, session-wide behavior; user prompts carry the per-request task.",
      "The instruction hierarchy ranks Root > System > Developer > User > Guideline — higher authority wins.",
      "Never store secrets in any prompt layer, and treat tool outputs as untrusted input.",
    ],
  };
}

// ─── Type H — Few-Shot Prompting article (ai-m2-t3) ──────────────────────────

export function buildFewShotLesson(): TopicLesson {
  return {
    topicId: "ai-m2-t3",
    intro: "Few-shot prompting guides a model by giving it a small number of examples directly in the prompt.",
    blocks: [
      { type: "heading", content: "Few-Shot Prompting" },
      {
        type: "paragraph",
        content:
          "Few-shot prompting is a technique in AI where a model is given a small number of examples within the prompt to guide its response. By learning from these examples, the model can better understand the task and generate more accurate and relevant outputs without additional training.",
      },
      {
        type: "list",
        items: [
          "Allows models to learn task patterns from a few input-output examples without retraining.",
          "Uses in-context learning, where examples are included directly in the prompt.",
          "Applied in tasks such as classification, translation, summarization and code generation.",
        ],
      },
      {
        type: "image",
        image: "/images/few-shot-comparison.png",
        imageAlt: "Zero-shot vs One-shot vs Few-shot prompting comparison",
      },
      { type: "heading", content: "How Few-Shot Prompting Works" },
      {
        type: "paragraph",
        content:
          "Few-shot prompting guides a large language model (LLM) by providing a small number of examples directly within the prompt. These examples demonstrate the desired task, enabling the model to generalize and produce accurate outputs without explicit training.",
      },
      {
        type: "image",
        image: "/images/few-shot-flow.png",
        imageAlt: "Few-shot prompting 6-step flow: User Query → Example Source → Retrieve Examples → Build Prompt → Model Processes → Output Generated",
      },
      { type: "heading", content: "1. User Query Initialization" },
      {
        type: "paragraph",
        content:
          "The process starts when the model receives a user query, which serves as the input for the task. This query establishes the context and defines what the model needs to do — such as classification, translation or sentiment analysis.",
      },
      { type: "heading", content: "2. Example Source — Static or Dynamic" },
      {
        type: "paragraph",
        content:
          "Few-shot prompting uses examples to guide the model, which can either be predefined or dynamically retrieved based on the query.",
      },
      {
        type: "list",
        items: [
          "Static Examples: Manually written examples included directly in the prompt to demonstrate the task clearly.",
          "Dynamic Examples: Fetched from a vector store using semantic similarity, ensuring examples closely match the query context.",
        ],
      },
      { type: "heading", content: "3. Retrieval of Relevant Examples" },
      {
        type: "paragraph",
        content:
          "If dynamic retrieval is used, the system performs semantic matching to find the most relevant examples:",
      },
      {
        type: "list",
        items: [
          "The query is converted into embeddings.",
          "Similar examples are searched in the vector store.",
          "Top-k most relevant examples are selected.",
        ],
      },
      { type: "heading", content: "4. Prompt Construction" },
      {
        type: "paragraph",
        content:
          'The system builds a well-structured prompt by combining examples and the user query. For example — classify sentiment: Sentence: "I love this product" → Sentiment: Positive. Sentence: "This is the worst experience" → Sentiment: Negative. Sentence: "This app is really easy to use" → Sentiment:',
      },
      { type: "heading", content: "5. Model Processing" },
      {
        type: "list",
        items: [
          "Pre-trained Knowledge: The model uses patterns learned during training.",
          "In-Context Learning: It learns from examples in the prompt without updating its parameters.",
          "Pattern Application: The model identifies relationships in examples and applies them to the user query.",
        ],
      },
      { type: "heading", content: "6. Output Generation" },
      {
        type: "paragraph",
        content:
          "The model produces the response by applying the patterns learned from the examples to the user query. The output is generated in the expected format, completing the task such as classification, translation or text generation.",
      },
      { type: "heading", content: "Strategies" },
      {
        type: "list",
        items: [
          "Use clear, relevant examples aligned with the task.",
          "Include diverse examples to improve generalization.",
          "Keep input-output format consistent.",
          "Use a few high-quality examples to avoid noise.",
          "Tailor examples to the specific task or domain.",
          "Test and refine prompts regularly.",
          "Avoid overfitting by testing on new inputs.",
        ],
      },
      { type: "heading", content: "Advantages" },
      {
        type: "list",
        items: [
          "Requires minimal training data.",
          "Enables faster task learning.",
          "Adapts to multiple tasks easily.",
          "Reduces data and processing costs.",
          "Useful where large datasets are unavailable.",
        ],
      },
      { type: "heading", content: "Limitations" },
      {
        type: "list",
        items: [
          "May give inaccurate results in some cases.",
          "Can introduce bias from limited examples.",
          "Risk of overfitting to given samples.",
          "Less effective for complex tasks.",
        ],
      },
      {
        type: "tip",
        content:
          "Bad examples teach bad behavior. Keep examples consistent in format, coverage, and label quality.",
      },
      { type: "few-shot-guide" },
    ],
    keyTakeaways: [
      "Few-shot prompting shows the model input-output examples in the prompt to guide behavior without retraining.",
      "Pattern: Show input/output pairs → add the new input → ask for matching output.",
      "Bad examples teach bad behavior. Keep examples consistent.",
    ],
  };
}

// ─── Type I — Chain-of-Thought Prompting article (ai-m2-t4) ─────────────────

export function buildChainOfThoughtLesson(): TopicLesson {
  return {
    topicId: "ai-m2-t4",
    intro: "Chain-of-Thought prompting asks the model to show its reasoning step by step before giving a final answer.",
    blocks: [
      { type: "heading", content: "Chain-of-Thought Prompting" },
      {
        type: "paragraph",
        content:
          "Chain of Thought (CoT) prompting is a technique where the model generates step-by-step intermediate explanations before arriving at an answer. This helps improve accuracy and makes the output clearer and more reliable.",
      },
      {
        type: "list",
        items: [
          "Helps models reason through multi-step problems.",
          "Produces more transparent and interpretable outputs.",
          "Especially useful in math, logic and multi-stage decision making.",
        ],
      },
      {
        type: "image",
        image: "/images/cot-vs-standard.png",
        imageAlt: "Standard prompting vs Chain-of-Thought prompting comparison",
      },
      {
        type: "paragraph",
        content:
          "For example, instead of directly answering 'What is 57 × 43?', a Chain-of-Thought model first works through intermediate steps: multiply 50 by 43, multiply 7 by 43, then add the two results together.",
      },
      { type: "heading", content: "How Chain-of-Thought Works" },
      {
        type: "paragraph",
        content:
          "CoT solves problems through structured, step-by-step reasoning instead of directly generating an answer. The model interprets the input, breaks it into logical steps and produces the final output after reasoning. This process can be refined or repeated to improve accuracy.",
      },
      {
        type: "image",
        image: "/images/cot-workflow.png",
        imageAlt: "Chain-of-Thought workflow: Input Problem → Decompose → Reason Step by Step → Synthesize → Final Answer",
      },
      { type: "heading", content: "Importance of Chain-of-Thought" },
      { type: "heading", content: "1. Structured Reasoning" },
      {
        type: "list",
        items: [
          "Breaks complex problems into smaller, manageable steps.",
          "Encourages logical flow in problem solving.",
          "Reduces confusion in multi-step tasks.",
        ],
      },
      { type: "heading", content: "2. Improved Transparency" },
      {
        type: "list",
        items: [
          "Makes the reasoning process visible to users.",
          "Helps in understanding how the final answer is derived.",
          "Increases trust in model outputs.",
        ],
      },
      { type: "heading", content: "3. Higher Accuracy" },
      {
        type: "list",
        items: [
          "Minimizes errors by avoiding skipped steps.",
          "Ensures better handling of complex reasoning tasks.",
          "Produces more consistent and reliable results.",
        ],
      },
      { type: "heading", content: "4. Versatility Across Tasks" },
      {
        type: "list",
        items: [
          "Effective for math, logical reasoning and decision-making problems.",
          "Useful in NLP tasks like question answering and summarization.",
          "Helps generate more coherent and context-aware responses.",
        ],
      },
      { type: "heading", content: "Applications" },
      { type: "heading", content: "1. Math Problem Solving" },
      {
        type: "paragraph",
        content:
          'Example: "What is 39 × 21?" With CoT: Step 1 — Multiply 30 by 21 = 630. Step 2 — Multiply 9 by 21 = 189. Step 3 — Add 630 + 189 = 819.',
      },
      { type: "heading", content: "2. Commonsense Reasoning" },
      {
        type: "paragraph",
        content:
          'Example: "If John is taller than Sarah and Sarah is taller than Tom, who is the shortest?" With CoT: John > Sarah > Tom. Therefore, Tom is the shortest.',
      },
      { type: "heading", content: "3. Logical Puzzles and Games" },
      {
        type: "paragraph",
        content:
          "CoT helps solve puzzles or games that require exploring different possibilities. It is particularly useful for tasks where understanding the process is as important as the answer.",
      },
      { type: "heading", content: "4. Story Generation" },
      {
        type: "paragraph",
        content:
          "CoT can guide the AI through the logical progression of a plot, ensuring coherence and consistency throughout a generated story.",
      },
      { type: "heading", content: "Advantages" },
      {
        type: "list",
        items: [
          "By focusing on intermediate steps, the model makes fewer mistakes and provides more accurate results.",
          "Transparency helps users understand the reasoning behind the model's output.",
          "Enhances the model's ability to tackle tasks that require multi-step reasoning, mathematical operations and logical deduction.",
        ],
      },
      { type: "heading", content: "Limitations" },
      {
        type: "list",
        items: [
          "Can be expensive and time-consuming because the model generates multiple reasoning steps.",
          "Requires high-quality training data with both answers and reasoning steps.",
          "In complex tasks, the model may struggle to maintain coherent reasoning across many steps.",
        ],
      },
      {
        type: "tip",
        content:
          'The simplest CoT trigger is the phrase "Let\'s think step by step." Adding it to any prompt costs nothing and often catches calculation or logic errors that a direct-answer prompt misses.',
      },
      { type: "cot-guide" },
    ],
    keyTakeaways: [
      "Chain-of-Thought prompting forces the model to reason through intermediate steps before concluding.",
      'The zero-shot trigger "Let\'s think step by step" works on most reasoning tasks without any examples.',
      "CoT improves accuracy but increases token usage — use it when correctness matters more than speed.",
    ],
  };
}

// ─── Type J — Prompt Engineering Best Practices article (ai-m2-t5) ──────────

export function buildBestPracticesLesson(): TopicLesson {
  return {
    topicId: "ai-m2-t5",
    intro: "Prompt engineering is the practice of designing and refining inputs to guide LLMs toward accurate, relevant and high-quality outputs.",
    blocks: [
      { type: "heading", content: "Prompt Engineering Best Practices for AI Models" },
      {
        type: "paragraph",
        content:
          "Prompt engineering is the practice of designing and refining inputs to guide large language models (LLMs) toward accurate, relevant and high-quality outputs. For developers, researchers and AI professionals, it is an important skill for getting reliable and useful results from AI systems.",
      },
      {
        type: "list",
        items: [
          "Improves accuracy and relevance of outputs.",
          "Ensures useful and reliable AI responses.",
          "Becomes more important as AI capabilities grow.",
        ],
      },
      {
        type: "image",
        image: "/images/prompt-best-practices-grid.png",
        imageAlt: "20 Prompt Engineering Best Practices overview grid",
      },
      { type: "heading", content: "Best Practices for Prompt Engineering" },
      { type: "heading", content: "1. Be Clear and Specific" },
      { type: "paragraph", content: 'Action: Clearly define your request with precision. Benefit: Reduces ambiguity. Example: "List three key benefits of renewable energy for businesses."' },
      { type: "heading", content: "2. Specify Response Format" },
      { type: "paragraph", content: 'Action: Indicate the desired structure — list, bullet points, essay, etc. Benefit: Ensures the AI delivers the response in the preferred format. Example: "Summarize the latest trends in AI technology in 100 words, using bullet points."' },
      { type: "heading", content: "3. Provide Context" },
      { type: "paragraph", content: 'Action: Include relevant background or situational context. Benefit: Produces a more accurate and relevant response. Example: "As a financial analyst, explain the investment options for beginners with examples."' },
      { type: "heading", content: "4. Structure Step-by-Step Instructions" },
      { type: "paragraph", content: 'Action: Break down complex tasks into clear, sequential steps. Benefit: Helps the AI produce logical, organized instructions. Example: "Explain how to boil pasta, step by step, including cooking time."' },
      { type: "heading", content: "5. Set Output Constraints" },
      { type: "paragraph", content: 'Action: Define word limits, tone or complexity for the response. Benefit: Ensures the response aligns with your needs. Example: "Explain AI in 150 words in a friendly tone for beginners."' },
      { type: "heading", content: "6. Experiment and Iterate" },
      {
        type: "image",
        image: "/images/prompt-engineering-cycle.png",
        imageAlt: "Prompt engineering cycle: Write → Test → Identify Gaps → Refine → Repeat",
      },
      { type: "paragraph", content: 'Action: Adjust your prompt based on previous responses. Benefit: Refining over time improves accuracy and relevance. Example: Instead of "best practices for time management?", try "top 5 time management strategies for busy professionals?"' },
      { type: "heading", content: "7. Use Clear Action Verbs" },
      { type: "paragraph", content: 'Action: Start prompts with specific action verbs such as "describe", "analyze" or "compare". Benefit: Action verbs guide the AI\'s approach. Example: "Describe the process of photosynthesis in plants."' },
      { type: "heading", content: "8. Ask for Multiple Perspectives or Solutions" },
      { type: "paragraph", content: 'Action: Request answers from different viewpoints. Benefit: Encourages a more comprehensive and diverse response. Example: "Provide solutions for improving urban transportation from the perspectives of an environmentalist, a city planner and a commuter."' },
      { type: "heading", content: "9. Refine With Clarifying Questions" },
      { type: "paragraph", content: 'Action: Follow up with additional questions for more detail. Benefit: Helps fine-tune the AI\'s output. Instead of "benefits of a plant-based diet?", try "Can you explain the environmental benefits in more detail?"' },
      { type: "heading", content: "10. Test Different Wordings for Better Results" },
      { type: "paragraph", content: 'Action: Experiment with rewording prompts. Benefit: Different wordings can encourage more targeted or creative responses. Instead of "How can I improve my writing?", try "What are some effective strategies to improve clarity and coherence in writing?"' },
      { type: "heading", content: "11. Use Conditional Prompts for Focused Answers" },
      { type: "paragraph", content: 'Action: Use "if-then" conditional statements. Benefit: Makes the response more focused and context-specific. Example: "If I wanted to improve my diet, how would I incorporate more protein?"' },
      { type: "heading", content: "12. Request for Examples or Case Studies" },
      { type: "paragraph", content: 'Action: Ask for real-world examples or case studies. Benefit: Examples make abstract ideas more tangible. Example: "Explain the benefits of automation in healthcare and provide a real-world case study."' },
      { type: "heading", content: "13–20. More Best Practices" },
      {
        type: "list",
        items: [
          "13. Be Transparent About Your Expectations — state desired detail, length and tone up front.",
          "14. Use Time Frames or Historical Context — specify the period to get historically accurate answers.",
          "15. Balance Open-Ended and Closed-Ended Questions — closed for concise, open for broader insights.",
          "16. Clarify the Target Audience — specify who the response is for (child, expert, general public).",
          "17. Use Creative or Scenario-Based Prompts — hypothetical scenarios spark creative ideas.",
          "18. Incorporate Metrics and Data — include specific data points for analytical tasks.",
          "19. Utilize Tone and Voice for Personalization — specify formal, informal or humorous tone.",
          "20. Request Sources or Citations — ask for citations when discussing factual content.",
        ],
      },
      { type: "heading", content: "Avoiding Bias and Ambiguity" },
      {
        type: "list",
        items: [
          'Use Neutral Language: Avoid biased or assumptive wording. Instead of "Why is this generation lazy?", ask "What challenges does the younger generation face?"',
          "Follow Ethical Guidelines: Promote fairness, inclusivity and transparency. Ensure prompts encourage balanced perspectives.",
          "Test for Bias: Regularly review AI responses to detect and address any unintended bias.",
        ],
      },
      { type: "heading", content: "Tools & Resources for Prompt Optimization" },
      {
        type: "list",
        items: [
          "OpenAI Playground: Test and refine prompts in real-time based on immediate feedback.",
          "PromptBase: Explore and use optimized, pre-designed prompts to save time.",
          "PromptChainer: Chain multiple prompts together for more structured workflows.",
          "Helicone: Track and analyze prompt performance based on data-driven insights.",
          "Agenta: Collaborate with a team to test, iterate and improve prompts.",
        ],
      },
      {
        type: "tip",
        content:
          "One giant prompt is hard to debug. Build prompts in small pieces — change one thing at a time and compare outputs before moving on.",
      },
      { type: "best-practices-guide" },
    ],
    keyTakeaways: [
      "Clear, specific prompts with explicit format and context instructions produce consistently better outputs.",
      "Prompt engineering is iterative — write, test, identify gaps, refine and repeat.",
      "One giant prompt is hard to debug. Build prompts in small, testable pieces.",
    ],
  };
}

// ─── Batch helpers ───────────────────────────────────────────────────────────

type LessonType = "concept" | "setup" | "code-demo" | "playground" | "project" | "what-is-prompt" | "system-vs-user" | "few-shot" | "cot" | "best-practices";

const TOPIC_TYPES: Record<string, LessonType> = {
  // Type F — What is a Prompt article
  "ai-m2-t1": "what-is-prompt",
  // Type G — System vs User Prompts article
  "ai-m2-t2": "system-vs-user",
  // Type H — Few-Shot Prompting article
  "ai-m2-t3": "few-shot",
  // Type I — Chain-of-Thought article
  "ai-m2-t4": "cot",
  // Type J — Prompt Engineering Best Practices article
  "ai-m2-t5": "best-practices",
  // Type A — Concept
  "ai-m1-t1": "concept",
  "ai-m1-t2": "concept",
  "ai-m1-t3": "concept",
  "ai-m1-t4": "concept",
  "ai-lc-t1": "concept",
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
    case "what-is-prompt": return buildWhatIsPromptLesson();
    case "system-vs-user": return buildSystemVsUserLesson();
    case "few-shot":       return buildFewShotLesson();
    case "cot":            return buildChainOfThoughtLesson();
    case "best-practices": return buildBestPracticesLesson();
    case "setup":          return buildSetupLesson(topicId);
    case "code-demo":      return buildCodeDemoLesson(topicId);
    case "playground":     return buildPlaygroundLesson(topicId);
    case "project":        return buildProjectLesson(topicId);
    default:               return buildConceptLesson(topicId);
  }
}

export function buildAgenticAiLessons(
  topicIds: readonly string[]
): Record<string, TopicLesson> {
  return Object.fromEntries(
    topicIds.map((id) => [id, buildAgenticAiLesson(id)])
  );
}
