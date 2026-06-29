"use client";


type TopicInfo = {
  moduleLabel: string;
  title: string;
  hook: string;
  outcome: string;
  steps: [string, string, string];
  example: string;
  caution: string;
  icon: "brain" | "prompt" | "api" | "chat" | "agent" | "ship";
};

const TOPICS: Record<string, TopicInfo> = {
  "ai-m1-t1": {
    moduleLabel: "AI Foundations",
    title: "What AI Is",
    hook: "AI is software that learns patterns from examples instead of only following fixed rules.",
    outcome: "You will be able to separate AI, machine learning, deep learning, and LLMs.",
    steps: ["Rules solve known cases", "Data teaches patterns", "Models predict new cases"],
    example: "Spam filter: old way = keyword rules; AI way = learn from many labelled emails.",
    caution: "AI does not understand like a human. It predicts from patterns and can still be wrong.",
    icon: "brain",
  },
  "ai-m1-t2": {
    moduleLabel: "AI Foundations",
    title: "Large Language Models",
    hook: "An LLM is a text model trained to predict the next token, then tuned to follow instructions.",
    outcome: "You will understand why LLMs can write, explain, summarize, and code.",
    steps: ["Text becomes tokens", "Training learns patterns", "Inference generates replies"],
    example: "Prompt: Explain Python lists → LLM predicts a helpful sequence of tokens.",
    caution: "Fluent output is not proof of truth. Always verify important answers.",
    icon: "brain",
  },
  "ai-m1-t3": {
    moduleLabel: "AI Foundations",
    title: "How LLMs Work",
    hook: "LLMs read context, convert it into tokens, and generate one token at a time.",
    outcome: "You will understand tokens, context windows, training, and inference.",
    steps: ["Input is tokenized", "Model scores next tokens", "Output is decoded"],
    example: "The model does not answer all at once; it builds the response word by word.",
    caution: "If context is missing or too long, the model may ignore details or guess.",
    icon: "brain",
  },
  "ai-m1-t4": {
    moduleLabel: "AI Foundations",
    title: "LLM Providers",
    hook: "Providers differ by speed, cost, model quality, API design, and deployment options.",
    outcome: "You will know how to compare OpenAI, Anthropic, Google, Groq, and open models.",
    steps: ["Compare model quality", "Compare latency and cost", "Choose for your use case"],
    example: "Groq is useful for fast demos; larger frontier models are better for complex reasoning.",
    caution: "Do not pick a provider only by hype. Test your exact task.",
    icon: "brain",
  },
  "ai-lc-t1": {
    moduleLabel: "LangChain",
    title: "What LangChain Is",
    hook: "LangChain is a Python framework for composing LLM app building blocks into reusable workflows.",
    outcome: "You will know when LangChain is useful instead of making one raw API call.",
    steps: ["Choose building blocks", "Compose a workflow", "Run and inspect outputs"],
    example: "A support bot can combine a prompt, chat model, parser, and tools behind one chain.",
    caution: "Do not add LangChain just for simple one-off calls. Use it when composition helps.",
    icon: "api",
  },
  "ai-lc-t2": {
    moduleLabel: "LangChain",
    title: "Setup",
    hook: "LangChain apps start by installing the core package plus provider packages for the models you use.",
    outcome: "You will understand package installation, provider packages, and API key environment variables.",
    steps: ["Install packages", "Set API keys", "Import LangChain components"],
    example: "pip install langchain langchain-openai, then set OPENAI_API_KEY before creating a model.",
    caution: "Never paste real API keys into lessons, frontend code, or Git commits.",
    icon: "api",
  },
  "ai-lc-t4": {
    moduleLabel: "LangChain",
    title: "Prompt Templates",
    hook: "Prompt templates turn repeated prompt text into reusable instructions with variables.",
    outcome: "You will build prompts that separate fixed instructions from changing user inputs.",
    steps: ["Write template", "Fill variables", "Send formatted messages"],
    example: "ChatPromptTemplate can combine a system role like 'You are a tutor' with a human message variable.",
    caution: "Template variables must be clear and validated. Bad inputs still create bad prompts.",
    icon: "prompt",
  },
  "ai-lc-t5": {
    moduleLabel: "LangChain",
    title: "LCEL Chains",
    hook: "LCEL composes LangChain components with the pipe operator so data flows step by step.",
    outcome: "You will read and design chains such as prompt | model | output_parser.",
    steps: ["Create prompt", "Pipe to model", "Parse output"],
    example: "chain = prompt | model | StrOutputParser() returns plain text from a chat model response.",
    caution: "Keep chains small at first. Long chains are harder to debug without tracing.",
    icon: "api",
  },
  "ai-lc-t6": {
    moduleLabel: "LangChain",
    title: "Agents and Tools",
    hook: "LangChain agents wrap a model loop with tools, a system prompt, and runtime behavior.",
    outcome: "You will understand create_agent as a configurable harness for tool-using AI apps.",
    steps: ["Define tool", "Create agent", "Invoke with messages"],
    example: "A weather agent can call get_weather(city), observe the result, then answer the user.",
    caution: "Tools need descriptions, safe inputs, and guardrails because the model chooses when to call them.",
    icon: "agent",
  },
  "ai-lc-t7": {
    moduleLabel: "LangChain",
    title: "Testing and Monitoring",
    hook: "LangSmith helps inspect LangChain runs with traces, datasets, evaluations, and monitoring.",
    outcome: "You will understand why LangChain apps need repeatable tests and production visibility.",
    steps: ["Create test cases", "Trace each run", "Improve safely"],
    example: "Run ten support questions, inspect failed tool calls, then improve the prompt or retrieval step.",
    caution: "Do not ship LangChain agents without monitoring. You need visibility when behavior changes.",
    icon: "ship",
  },
  "ai-m2-t1": {
    moduleLabel: "Prompt Engineering",
    title: "Prompt Basics",
    hook: "A prompt is the instruction package you send to the model: context, task, and format.",
    outcome: "You will write prompts that produce predictable beginner-friendly responses.",
    steps: ["Give context", "State the task", "Specify the format"],
    example: "You are a Python tutor. Explain variables in 3 bullets with one tiny code example.",
    caution: "Vague prompts create vague answers. Be specific about the result you want.",
    icon: "prompt",
  },
  "ai-m2-t2": {
    moduleLabel: "Prompt Engineering",
    title: "System vs User",
    hook: "System prompts set rules and persona; user messages ask the current question.",
    outcome: "You will structure chat messages like real API calls.",
    steps: ["System sets behavior", "User asks the task", "Assistant replies in context"],
    example: "System: You are concise. User: Explain lists. Assistant: short answer.",
    caution: "Do not put hidden secrets or API keys in prompts. Treat prompts as data.",
    icon: "prompt",
  },
  "ai-m2-t3": {
    moduleLabel: "Prompt Engineering",
    title: "Few-Shot Prompting",
    hook: "Few-shot prompting teaches the model a pattern by showing examples first.",
    outcome: "You will use examples to control format, tone, and edge cases.",
    steps: ["Show input/output pairs", "Add the new input", "Ask for matching output"],
    example: "Text: 'Great!' → Positive; Text: 'Bad' → Negative; Text: 'Okay' → ?",
    caution: "Bad examples teach bad behavior. Keep examples consistent.",
    icon: "prompt",
  },
  "ai-m2-t4": {
    moduleLabel: "Prompt Engineering",
    title: "Reasoning Prompts",
    hook: "Reasoning prompts ask the model to break a problem into smaller steps before answering.",
    outcome: "You will guide models through planning, checking, and final answers.",
    steps: ["Break down the task", "Check assumptions", "Return a concise final answer"],
    example: "First identify inputs, then choose formula, then calculate the final value.",
    caution: "Do not expose unnecessary private chain-of-thought. Ask for brief reasoning or a summary.",
    icon: "prompt",
  },
  "ai-m2-t5": {
    moduleLabel: "Prompt Engineering",
    title: "Prompt Best Practices",
    hook: "Good prompts are clear, bounded, testable, and easy to improve.",
    outcome: "You will debug prompts like code: change one thing, test, compare.",
    steps: ["Make the task specific", "Constrain the output", "Iterate with examples"],
    example: "Instead of 'make it better', ask 'rewrite in 5 bullets for beginners'.",
    caution: "One giant prompt is hard to debug. Build prompts in small pieces.",
    icon: "prompt",
  },
  "ai-m3-t1": {
    moduleLabel: "Groq API",
    title: "API Keys",
    hook: "An API key identifies your app when it calls an AI provider.",
    outcome: "You will know how to create, store, and protect a Groq API key.",
    steps: ["Create key", "Save in environment", "Read it from code"],
    example: "GROQ_API_KEY lives in .env, then Python reads os.environ.get('GROQ_API_KEY').",
    caution: "Never commit API keys to GitHub. Revoke exposed keys immediately.",
    icon: "api",
  },
  "ai-m3-t2": {
    moduleLabel: "Groq API",
    title: "First API Call",
    hook: "Every chat API call sends a model name, messages, and generation settings.",
    outcome: "You will understand the minimum Python code for calling a Groq model.",
    steps: ["Create client", "Send messages", "Extract response text"],
    example: "response.choices[0].message.content is the answer you display.",
    caution: "Real API calls need local setup, installed packages, and a private API key.",
    icon: "api",
  },
  "ai-m3-t3": {
    moduleLabel: "Groq API",
    title: "API Responses",
    hook: "The response object contains the assistant message, finish reason, model, and token usage.",
    outcome: "You will extract text and read token counts confidently.",
    steps: ["Inspect choices", "Read message.content", "Track usage tokens"],
    example: "usage.total_tokens helps estimate cost and context size.",
    caution: "Do not assume every response is successful. Check errors and finish_reason.",
    icon: "api",
  },
  "ai-m3-t4": {
    moduleLabel: "Groq API",
    title: "Choosing Models",
    hook: "Model choice is a trade-off between speed, reasoning quality, context, and cost.",
    outcome: "You will choose models based on the task instead of guessing.",
    steps: ["Define task difficulty", "Test candidate models", "Measure quality and latency"],
    example: "Fast small model for classification; stronger model for planning or coding.",
    caution: "Benchmarks are useful, but your own task test matters most.",
    icon: "api",
  },
  "ai-m3-t5": {
    moduleLabel: "Groq API",
    title: "Errors & Rate Limits",
    hook: "Production AI apps must handle failures, timeouts, and rate limits gracefully.",
    outcome: "You will add retries and user-friendly error handling.",
    steps: ["Catch API errors", "Retry with backoff", "Show clear fallback messages"],
    example: "If rate-limited, wait briefly and retry instead of crashing.",
    caution: "Do not retry forever. Use limits and logs.",
    icon: "api",
  },
  "ai-m4-t1": {
    moduleLabel: "Chatbots",
    title: "Chat History",
    hook: "LLMs are stateless, so your app must send the conversation history every turn.",
    outcome: "You will build and manage a messages list for memory.",
    steps: ["Start with system prompt", "Append user message", "Append assistant reply"],
    example: "messages = [{role: 'system'}, {role: 'user'}, {role: 'assistant'}]",
    caution: "History costs tokens. Long chats need trimming or summarizing.",
    icon: "chat",
  },
  "ai-m4-t2": {
    moduleLabel: "Chatbots",
    title: "Q&A Bot",
    hook: "A chatbot is a loop: read input, update history, call model, display reply.",
    outcome: "You will recognize the core loop behind every chat app.",
    steps: ["Read user input", "Call the model", "Save and show reply"],
    example: "while True: user = input(); if user == 'quit': break",
    caution: "Always include an exit condition in local chatbot loops.",
    icon: "chat",
  },
  "ai-m4-t3": {
    moduleLabel: "Chatbots",
    title: "Testing Chatbots",
    hook: "Testing means trying realistic user messages and checking if replies stay useful.",
    outcome: "You will test behavior, not just whether code runs.",
    steps: ["Write test prompts", "Compare actual replies", "Improve system prompt"],
    example: "Test beginner questions, edge cases, and off-topic prompts.",
    caution: "One good answer is not enough. Test multiple turns.",
    icon: "chat",
  },
  "ai-m4-t4": {
    moduleLabel: "Chatbots",
    title: "Streaming",
    hook: "Streaming sends the answer in small chunks so users see progress immediately.",
    outcome: "You will understand chunk-by-chunk response rendering.",
    steps: ["Enable stream", "Loop over chunks", "Append text to UI"],
    example: "for chunk in stream: print(delta, end='')",
    caution: "Handle cancellation and partial responses cleanly.",
    icon: "chat",
  },
  "ai-m4-t5": {
    moduleLabel: "Chatbots",
    title: "Response Quality",
    hook: "Parameters like temperature and max_tokens shape how the model answers.",
    outcome: "You will tune responses for accuracy, creativity, and length.",
    steps: ["Set temperature", "Limit max tokens", "Test output quality"],
    example: "temperature=0 for factual extraction; 0.7 for flexible chat.",
    caution: "Higher temperature can be creative but less reliable.",
    icon: "chat",
  },
  "ai-m5-t1": {
    moduleLabel: "Agents",
    title: "What Agents Are",
    hook: "An agent is an AI loop that can plan, use tools, observe results, and continue.",
    outcome: "You will distinguish chatbots from tool-using agents.",
    steps: ["Reason about goal", "Choose a tool", "Use result to continue"],
    example: "A weather agent calls get_weather(city), then explains the forecast.",
    caution: "More autonomy means more need for guardrails and testing.",
    icon: "agent",
  },
  "ai-m5-t2": {
    moduleLabel: "Agents",
    title: "Tool Calling",
    hook: "Tool calling lets the model request a function instead of only writing text.",
    outcome: "You will expose safe Python functions for the model to call.",
    steps: ["Define tool schema", "Model selects tool", "Your code executes function"],
    example: "search_docs(query) returns passages; model uses them to answer.",
    caution: "The model should choose tools; your app must validate inputs and execute safely.",
    icon: "agent",
  },
  "ai-m5-t3": {
    moduleLabel: "Agents",
    title: "Simple Agent",
    hook: "A working agent combines messages, tool calls, observations, and a loop.",
    outcome: "You will understand the minimum architecture for a tool-using agent.",
    steps: ["Ask model what to do", "Run requested tool", "Send observation back"],
    example: "Question → tool call → result → final answer.",
    caution: "Limit loop steps to avoid infinite tool use.",
    icon: "agent",
  },
  "ai-m5-t4": {
    moduleLabel: "Agents",
    title: "ReACT Pattern",
    hook: "ReACT alternates reasoning, acting, and observing until the task is solved.",
    outcome: "You will understand the standard agent control loop.",
    steps: ["Reason", "Act with a tool", "Observe result"],
    example: "Need current data → search → read result → answer.",
    caution: "Keep observations grounded in actual tool output, not assumptions.",
    icon: "agent",
  },
  "ai-m6-t1": {
    moduleLabel: "Real Apps",
    title: "RAG Basics",
    hook: "RAG gives the model relevant documents before it answers.",
    outcome: "You will understand retrieval, context injection, and grounded answers.",
    steps: ["Search documents", "Add passages to prompt", "Answer from context"],
    example: "Question about policy → retrieve policy chunks → answer with citations.",
    caution: "RAG quality depends on retrieval quality. Bad chunks produce bad answers.",
    icon: "ship",
  },
  "ai-m6-t2": {
    moduleLabel: "Real Apps",
    title: "Document Q&A",
    hook: "A document Q&A bot combines chunking, search, prompts, and a chat interface.",
    outcome: "You will see how RAG becomes a complete application.",
    steps: ["Chunk documents", "Retrieve matches", "Generate grounded answer"],
    example: "PDF → chunks → embeddings/search → answer from matching chunks.",
    caution: "Always show sources for document answers when possible.",
    icon: "ship",
  },
  "ai-m6-t3": {
    moduleLabel: "Real Apps",
    title: "Multi-Agent Systems",
    hook: "Multiple agents can split work by role, then coordinate results.",
    outcome: "You will understand planner, researcher, coder, and reviewer roles.",
    steps: ["Assign roles", "Exchange outputs", "Combine final result"],
    example: "Researcher gathers facts; writer drafts; reviewer checks accuracy.",
    caution: "More agents can add cost and complexity. Use them only when roles are truly useful.",
    icon: "ship",
  },
  "ai-m6-t4": {
    moduleLabel: "Real Apps",
    title: "Next Steps",
    hook: "After this course, build projects that combine prompts, APIs, tools, and retrieval.",
    outcome: "You will leave with a practical roadmap for continuing.",
    steps: ["Build one project", "Add evaluation", "Deploy and iterate"],
    example: "Start with a support bot, then add RAG, tools, logging, and tests.",
    caution: "Do not skip evaluation. AI apps need ongoing quality checks.",
    icon: "ship",
  },
};

const DEFAULT_TOPIC: TopicInfo = {
  moduleLabel: "Agentic AI",
  title: "Core Concept",
  hook: "Learn the concept, see the pattern, then understand where it fits in an AI app.",
  outcome: "You will connect the idea to a real AI application workflow.",
  steps: ["Understand the idea", "Study the pattern", "Connect it to an app"],
  example: "Use the lesson explanation to understand where the concept fits in an AI app.",
  caution: "Keep AI systems testable, observable, and safe.",
  icon: "brain",
};

function moduleBadge(info: TopicInfo) {
  if (info.moduleLabel.includes("AI Foundations")) return "Module 1";
  if (info.moduleLabel.includes("LangChain")) return "Module 2";
  if (info.moduleLabel.includes("Prompt")) return "Module 3";
  if (info.moduleLabel.includes("Groq")) return "Module 4";
  if (info.moduleLabel.includes("Chatbots")) return "Module 5";
  if (info.moduleLabel.includes("Agents")) return "Module 6";
  if (info.moduleLabel.includes("Real Apps")) return "Module 7";
  return "Agentic AI";
}

function lessonSubtitle(info: TopicInfo) {
  const mod = info.moduleLabel.toLowerCase();
  if (mod.includes("foundation")) {
    return "Start with the beginner picture: what the idea means, why it matters, and how to recognize it in simple AI products.";
  }
  if (mod.includes("langchain")) {
    return "Learn how this LangChain idea helps turn separate AI parts into a clear application workflow.";
  }
  if (mod.includes("prompt")) {
    return "Learn how this prompt idea helps you guide a model before you depend on its answer in an app.";
  }
  if (mod.includes("groq")) {
    return "Learn how this Groq idea fits into the request-and-response path of a real LLM application.";
  }
  if (mod.includes("chatbot")) {
    return "Learn how this chatbot idea shapes the user experience around each model response.";
  }
  if (mod.includes("agent")) {
    return "Learn how this agent idea helps an AI system decide actions while staying controlled and testable.";
  }
  return "Learn how this app-building idea moves an AI demo closer to something users can trust.";
}

function appFit(info: TopicInfo) {
  const mod = info.moduleLabel.toLowerCase();
  if (mod.includes("foundation")) {
    return "This knowledge helps you decide what AI can and cannot do. Before choosing tools or writing prompts, ask whether the task needs prediction, generation, retrieval, rule-following, or human review.";
  }
  if (mod.includes("langchain")) {
    return "LangChain fits where an app needs multiple AI building blocks connected together: prompts, models, parsers, tools, retrievers, and traces. It helps organize the workflow so the app is easier to extend and debug.";
  }
  if (mod.includes("prompt")) {
    return "Prompts sit between your app logic and the model. They translate user intent, product rules, and output requirements into instructions the model can follow.";
  }
  if (mod.includes("groq")) {
    return "Groq fits behind the app as the model provider. Your application prepares messages, chooses a model, sends the request securely, and handles the response, errors, and usage.";
  }
  if (mod.includes("chatbot")) {
    return "Chatbot concepts fit around the model call. The app manages conversation history, response settings, testing, streaming, and user experience so the chat feels useful instead of random.";
  }
  if (mod.includes("agent")) {
    return "Agent concepts fit when the model needs to choose actions, call tools, inspect results, and continue toward a goal. The app must still control permissions, step limits, and safety.";
  }
  return "This concept fits when you move from a demo to a real AI product. It helps with grounding, evaluation, monitoring, and making the system reliable for users.";
}

function keyTerms(info: TopicInfo): Array<[string, string]> {
  const mod = info.moduleLabel.toLowerCase();
  if (mod.includes("foundation")) {
    return [
      ["input", "Information given to an AI system: text, examples, an image, or a user question."],
      ["pattern", "Something the model learns from data: repeated words, relationships, or structural regularities."],
      ["prediction", "The model's best next output based on what it learned and the current context it receives."],
      ["limitation", "A place where the model can be wrong, biased, outdated, or missing critical context."],
    ];
  }
  if (mod.includes("langchain")) {
    return [
      ["component", "One reusable part of an LLM app, such as a prompt, model, parser, retriever, or tool."],
      ["chain", "A sequence where the output of one component becomes the input to the next component."],
      ["parser", "The part that turns model output into the shape your app needs, such as text or structured data."],
      ["trace", "A recorded view of what happened during a run, useful for debugging and monitoring."],
    ];
  }
  if (mod.includes("prompt")) {
    return [
      ["context", "Background information the model needs before answering."],
      ["task", "The specific job you want the model to perform."],
      ["constraint", "A rule that limits the answer: length, tone, allowed format, or topics to avoid."],
      ["example", "A sample input/output pair that shows the model exactly the pattern you expect."],
    ];
  }
  if (mod.includes("groq")) {
    return [
      ["api key", "A private credential that identifies your app to Groq."],
      ["model", "The specific LLM you choose for a request."],
      ["message", "One item in the chat history, usually system, user, or assistant."],
      ["usage", "Token counts that help you understand cost, context size, and response length."],
    ];
  }
  if (mod.includes("chatbot")) {
    return [
      ["history", "The messages your app sends so the model can follow the conversation."],
      ["system prompt", "The instruction that defines the chatbot's role and behavior."],
      ["turn", "One user message plus the assistant's reply."],
      ["streaming", "Sending the reply in small chunks so the user sees progress quickly."],
    ];
  }
  if (mod.includes("agent")) {
    return [
      ["tool", "A function the agent can request, such as search, calculator, or database lookup."],
      ["observation", "The result returned after a tool runs."],
      ["loop", "The cycle of deciding, acting, observing, and deciding again."],
      ["guardrail", "A rule that keeps the agent safe, limited, and testable."],
    ];
  }
  return [
    ["retrieval", "Finding relevant information before asking the model to answer."],
    ["grounding", "Forcing the answer to use provided context instead of guessing."],
    ["evaluation", "Checking whether outputs meet expected quality."],
    ["monitoring", "Watching real app behavior after users start using it."],
  ];
}

function mentalModel(info: TopicInfo) {
  const mod = info.moduleLabel.toLowerCase();
  if (mod.includes("foundation")) {
    return "Learning AI foundations is like learning road signs before driving. You are not building the engine yet; you are learning what each signal means so later decisions make sense.";
  }
  if (mod.includes("prompt")) {
    return "A prompt is like a work order. The clearer the role, task, constraints, and format are, the more predictable the result becomes.";
  }
  if (mod.includes("chatbot")) {
    return "A chatbot is like a receptionist with a notebook. If the notebook has the conversation history, follow-up answers make sense.";
  }
  if (mod.includes("agent")) {
    return "An agent is like an assistant with approved tools and a checklist: decide, act, observe, and continue only when needed.";
  }
  return `${info.title} is easiest to understand as a small system: information enters, one step transforms or decides something, and the result is checked before the app trusts it.`;
}

function mistakes(info: TopicInfo): string[] {
  const mod = info.moduleLabel.toLowerCase();
  if (mod.includes("foundation")) {
    return [
      "Thinking AI understands like a human instead of predicting from learned patterns.",
      "Forgetting that missing or biased training examples produce wrong behavior.",
      "Assuming a confident-sounding answer is automatically correct.",
      "Skipping tests because one demo response looked good.",
    ];
  }
  if (mod.includes("prompt")) {
    return [
      "Writing a vague prompt and expecting a precise, consistent answer.",
      "Changing many prompt details at once, then not knowing what improved or broke the result.",
      "Assuming a confident answer is automatically grounded and correct.",
      "Skipping tests because one demo response looked good.",
    ];
  }
  return [
    `Using ${info.title} without knowing what problem it solves.`,
    "Trusting model output without checking the input, context, and result.",
    "Skipping tests because one demo response looked good.",
    "Forgetting to explain the failure cases to users or teammates.",
  ];
}

function realWorldExample(info: TopicInfo) {
  if (info.title === "What AI Is") {
    return {
      title: "Spam Filter - Old Way vs AI Way",
      leftTitle: "Rule-based approach",
      left: 'Developers manually write keyword lists: block "free money," "click here." Every new spam tactic needs a new rule written by a human.',
      rightTitle: "AI approach",
      right: "Train on thousands of labelled emails. The model learns subtle patterns: phrasing, structure, sender context, without anyone writing every rule.",
    };
  }
  if (info.title === "System vs User") {
    return {
      title: "System Message vs User Message",
      leftTitle: "System",
      left: "Defines the assistant's role, tone, boundaries, and output style before the user asks anything.",
      rightTitle: "User",
      right: "Provides the current task or question. It changes every turn while the system behavior stays stable.",
    };
  }
  return {
    title: "Real App Example",
    leftTitle: "Without this concept",
    left: "The app depends on a vague model response and gives the developer very little control over quality.",
    rightTitle: "With this concept",
    right: info.example,
  };
}

function beginnerExplanation(info: TopicInfo) {
  const mod = info.moduleLabel.toLowerCase();
  if (mod.includes("foundation")) {
    return `${info.title} is a starting lens for thinking about AI. Instead of memorizing tool names, focus on the simple question: what information goes in, what pattern or decision happens, and what result comes back?`;
  }
  if (mod.includes("langchain")) {
    return `${info.title} is about organizing an LLM app into smaller pieces. Each piece has one job, so you can swap, test, and debug the workflow without rewriting everything.`;
  }
  if (mod.includes("prompt")) {
    return `${info.title} is about giving the model a clearer job. A good prompt does not just ask a question; it gives direction, boundaries, and a useful response shape.`;
  }
  if (mod.includes("groq")) {
    return `${info.title} belongs to the model-call layer. Your app prepares messages, sends them to Groq, receives a response, and handles anything that can fail in between.`;
  }
  if (mod.includes("chatbot")) {
    return `${info.title} is about making a conversation feel coherent. The model creates the words, but the app decides what context, memory, and interface the user experiences.`;
  }
  if (mod.includes("agent")) {
    return `${info.title} is about controlled action. The model may choose a next step, but the app decides what tools exist, when they can run, and when the loop must stop.`;
  }
  return `${info.title} is part of turning an AI idea into a dependable product. The focus is less on one response and more on repeatable behavior over many users and many cases.`;
}

function learningFlow(info: TopicInfo): Array<[string, string, string]> {
  const mod = info.moduleLabel.toLowerCase();
  if (mod.includes("langchain")) {
    return [
      ["STEP 01", "Identify the parts", "List the prompt, model, parser, retriever, memory, or tool that the workflow needs."],
      ["STEP 02", "Connect the path", "Decide how data should move from one part to the next without mixing responsibilities."],
      ["STEP 03", "Inspect the run", "Check each intermediate result so problems are visible before the final answer reaches the user."],
    ];
  }
  if (mod.includes("prompt")) {
    return [
      ["STEP 01", "Set the job", "Tell the model what role it is playing and what task it must complete."],
      ["STEP 02", "Add boundaries", "Give context, constraints, examples, and output rules so the response is easier to trust."],
      ["STEP 03", "Compare results", "Test several inputs and improve the prompt based on real differences in output quality."],
    ];
  }
  if (mod.includes("groq")) {
    return [
      ["STEP 01", "Prepare the request", "Choose the model, create messages, and keep secrets such as API keys out of the page content."],
      ["STEP 02", "Call the service", "Send the request and wait for the model response while handling loading and error states."],
      ["STEP 03", "Use the response", "Display, stream, parse, or store only the parts your app actually needs."],
    ];
  }
  if (mod.includes("chatbot")) {
    return [
      ["STEP 01", "Capture the turn", "Read what the user said and attach only the conversation context that matters."],
      ["STEP 02", "Shape the reply", "Use instructions, settings, and memory rules to guide how the assistant responds."],
      ["STEP 03", "Improve the chat", "Test confusing user messages, long conversations, and failures so the interface stays helpful."],
    ];
  }
  if (mod.includes("agent")) {
    return [
      ["STEP 01", "Define allowed actions", "Give the agent only the tools and permissions it needs for the task."],
      ["STEP 02", "Run one step at a time", "Let the system decide, act, observe the result, and then choose whether to continue."],
      ["STEP 03", "Stop safely", "Use limits, checks, and clear success conditions so the agent does not wander."],
    ];
  }
  return [
    ["STEP 01", "Name the user problem", "Start from the user need, not the AI feature."],
    ["STEP 02", "Design the AI support", "Decide where the model helps and where normal app logic should stay in control."],
    ["STEP 03", "Check the result", "Test the output with examples, edge cases, and a clear quality target."],
  ];
}

function appScenario(info: TopicInfo) {
  const mod = info.moduleLabel.toLowerCase();
  if (mod.includes("groq")) {
    return {
      title: "Support Assistant Request",
      leftTitle: "App responsibility",
      left: "Collect the user's question, attach the right instructions, protect the API key, and show loading or error messages clearly.",
      rightTitle: "Model responsibility",
      right: "Generate the answer from the messages it receives. The model should not own app security, UI state, or business rules.",
    };
  }
  if (mod.includes("chatbot")) {
    return {
      title: "Customer Chat Flow",
      leftTitle: "Conversation layer",
      left: "Keep the useful history, reset stale context, and decide when the bot should ask a follow-up question.",
      rightTitle: "Response layer",
      right: "Generate a helpful reply that matches the assistant's role and the user's current message.",
    };
  }
  return {
    title: "Small Product Scenario",
    leftTitle: "Before design",
    left: "The app sends a raw user request to the model and hopes the answer is useful.",
    rightTitle: "After design",
    right: "The app gives the model a clear job, checks the result, and keeps control over what users see.",
  };
}

function teachingWarning(info: TopicInfo) {
  const mod = info.moduleLabel.toLowerCase();
  if (mod.includes("groq")) {
    return "Treat every API call as part of the product, not just a code sample. Plan for missing keys, failed requests, slow responses, and answers that need validation.";
  }
  if (mod.includes("chatbot")) {
    return "A chatbot can feel correct because it sounds fluent. Test it with short messages, vague questions, repeated questions, and cases where it should refuse or ask for clarification.";
  }
  if (mod.includes("agent")) {
    return "Do not let an agent run without limits. Give it narrow tools, visible logs, step limits, and a clear rule for when human review is needed.";
  }
  return "Do not judge this idea from one perfect demo. Try a normal case, an unclear case, and a failure case before trusting the design.";
}

function AgenticArticle({ info }: { info: TopicInfo }) {
  const checks = [
    `I can explain what ${info.title} is in one or two plain sentences.`,
    `I can point to the input, process, and output in the ${info.title} pattern.`,
    "I can name one common failure case and how I would notice it.",
    "I can describe where this idea fits in a real app, not just a lesson.",
  ];
  const example = appScenario(info);
  const flow = learningFlow(info);

  return (
    <article className="mx-auto mb-8 max-w-[720px] px-0 py-2 text-gray-900">
      <div className="mb-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-violet-100 px-3 py-1 text-[11px] font-semibold tracking-wide text-violet-800">
          {moduleBadge(info)}
        </span>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-[11px] font-semibold tracking-wide text-amber-800">
          {info.moduleLabel}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-600">
          ~10 min
        </span>
      </div>

      <h1 className="mb-2 text-[28px] font-bold tracking-[-0.5px] text-slate-900">
        {info.title}
      </h1>
      <p className="mb-8 max-w-xl text-[15px] leading-relaxed text-slate-500">
        {lessonSubtitle(info)}
      </p>

      <section className="mb-8 rounded-r-xl border-l-[3px] border-indigo-500 bg-indigo-50 px-[18px] py-3.5">
        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[1.2px] text-indigo-700">
          Core Idea
        </p>
        <p className="text-[14.5px] leading-relaxed text-slate-800">
          {beginnerExplanation(info)}
        </p>
      </section>

      <p className="mb-3 text-[10px] font-bold uppercase tracking-[1.2px] text-slate-400">
        The Pattern
      </p>
      <section className="mb-8 grid gap-3 md:grid-cols-3">
        {flow.map(([num, title, text]) => (
          <div key={num} className="rounded-xl border border-slate-200 bg-white p-[18px]">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.8px] text-indigo-500">
              {num}
            </p>
            <h3 className="mb-1.5 text-[13.5px] font-semibold leading-snug text-slate-900">
              {title}
            </h3>
            <p className="text-[12.5px] leading-relaxed text-slate-500">{text}</p>
          </div>
        ))}
      </section>

      <section className="mb-8 flex gap-3.5 rounded-xl border border-slate-200 bg-slate-50 p-[18px]">
        <div className="mt-0.5 shrink-0 text-xl">🚦</div>
        <div>
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[1px] text-slate-400">
            Mental Model
          </p>
          <p className="text-[13.5px] leading-relaxed text-slate-800">
            {mentalModel(info)}
          </p>
        </div>
      </section>

      <p className="mb-3 text-[10px] font-bold uppercase tracking-[1.2px] text-slate-400">
        Real-World Example
      </p>
      <section className="mb-8 rounded-xl border border-slate-200 bg-slate-50 p-[18px]">
        <p className="mb-3.5 text-[10px] font-bold uppercase tracking-[1px] text-amber-600">
          {example.title}
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h4 className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
              {example.leftTitle}
            </h4>
            <p className="text-[13px] leading-relaxed text-slate-800">
              {example.left}
            </p>
          </div>
          <div>
            <h4 className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              {example.rightTitle}
            </h4>
            <p className="text-[13px] leading-relaxed text-slate-800">
              {example.right}
            </p>
          </div>
        </div>
      </section>

      <h2 className="mb-3 mt-8 text-[17px] font-semibold text-slate-900">Key Terms</h2>
      <section className="mb-8 grid gap-2.5 md:grid-cols-2">
        {keyTerms(info).map(([word, text]) => (
          <div key={word} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
            <p className="mb-1 font-mono text-xs font-semibold text-cyan-700">{word}</p>
            <p className="text-[12.5px] leading-relaxed text-slate-500">{text}</p>
          </div>
        ))}
      </section>

      <section className="mb-6 rounded-[10px] border border-green-200 bg-green-50 px-[18px] py-4">
        <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[1px] text-green-600">
          Where It Fits in a Real App
        </p>
        <p className="text-[13.5px] leading-relaxed text-slate-800">
          {appFit(info)}
        </p>
      </section>

      <section className="mb-6 flex gap-3 rounded-[10px] border border-amber-200 bg-amber-50 px-4 py-3.5">
        <div className="mt-0.5 shrink-0 text-base">⚠️</div>
        <p className="text-[13.5px] leading-relaxed text-slate-800">
          <strong className="text-amber-600">Watch out:</strong> AI does not
          remove the need for checking. {teachingWarning(info)}
        </p>
      </section>

      <h2 className="mb-3 mt-8 text-[17px] font-semibold text-slate-900">Common Mistakes</h2>
      <section className="mb-8">
        {mistakes(info).map((mistake) => (
          <div key={mistake} className="flex gap-2.5 border-b border-slate-100 py-2.5 text-[13.5px] leading-relaxed text-slate-500 last:border-b-0">
            <span className="shrink-0 font-bold text-red-500">✗</span>
            {mistake}
          </div>
        ))}
      </section>

      <section className="mb-8 rounded-xl border border-slate-200 bg-white p-5">
        <p className="mb-3.5 text-[10px] font-bold uppercase tracking-[1px] text-green-600">
          Check Your Understanding
        </p>
        <div className="space-y-2.5">
          {checks.map((check) => (
            <label key={check} className="flex cursor-pointer select-none items-start gap-2.5">
              <span className="mt-0.5 flex h-[17px] w-[17px] shrink-0 items-center justify-center rounded border border-slate-300" />
              <span className="text-[13.5px] leading-relaxed text-slate-500">{check}</span>
            </label>
          ))}
        </div>
      </section>
    </article>
  );
}

export function AgenticAiTopicInfographic({ topicId }: { topicId?: string }) {
  const info = (topicId && TOPICS[topicId]) || DEFAULT_TOPIC;
  return <AgenticArticle info={info} />;
}
