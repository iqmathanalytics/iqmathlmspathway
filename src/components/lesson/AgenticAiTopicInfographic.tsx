"use client";

import {
  Brain,
  CheckCircle2,
  Code2,
  Lightbulb,
  MessageSquare,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

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

const ICONS = {
  brain: Brain,
  prompt: MessageSquare,
  api: Zap,
  chat: MessageSquare,
  agent: Workflow,
  ship: Network,
} as const;

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
    caution: "The browser IDE may show structure only; real API calls need local setup and a key.",
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
    title: "ReAct Pattern",
    hook: "ReAct alternates reasoning, acting, and observing until the task is solved.",
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
  hook: "Learn the concept, see the pattern, then practice it in Python.",
  outcome: "You will connect the idea to real AI application code.",
  steps: ["Understand the idea", "Study the pattern", "Practice the code"],
  example: "Use the IDE exercise to turn the concept into a working snippet.",
  caution: "Keep AI systems testable, observable, and safe.",
  icon: "brain",
};

function MiniCode({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-black/10 bg-gray-950">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-auto font-mono text-[11px] text-gray-400">
          mental_model.py
        </span>
      </div>
      <pre className="whitespace-pre-wrap px-4 py-3 font-mono text-[12.5px] leading-relaxed text-green-200">
        {children}
      </pre>
    </div>
  );
}

export function AgenticAiTopicInfographic({ topicId }: { topicId?: string }) {
  const info = (topicId && TOPICS[topicId]) || DEFAULT_TOPIC;
  const Icon = ICONS[info.icon];

  return (
    <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 shadow-sm">
      <div className="border-b border-slate-200/80 bg-white/70 px-5 py-4">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-blue-700">
              {info.moduleLabel}
            </p>
            <h2 className="text-lg font-semibold tracking-tight text-gray-950">
              {info.title}
            </h2>
            <p className="mt-1 text-[13.5px] leading-relaxed text-gray-600">
              {info.hook}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 p-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-900">
              <Sparkles className="h-4 w-4" />
              What you will be able to do
            </div>
            <p className="text-[13.5px] leading-relaxed text-gray-700">
              {info.outcome}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white/80 p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-900">
              <Workflow className="h-4 w-4 text-blue-700" />
              The pattern
            </div>
            <div className="grid gap-2 sm:grid-cols-3">
              {info.steps.map((step, i) => (
                <div
                  key={step}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
                >
                  <div className="mb-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-[11px] font-bold text-white">
                    {i + 1}
                  </div>
                  <p className="text-[12.5px] font-medium leading-snug text-gray-700">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <MiniCode>{`# mental model\nconcept = ${JSON.stringify(info.title)}\npattern = ${JSON.stringify(info.steps.join(" -> "))}\nprint(pattern)`}</MiniCode>

          <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-4">
            <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-emerald-900">
              <CheckCircle2 className="h-4 w-4" />
              Example
            </div>
            <p className="text-[13px] leading-relaxed text-gray-700">
              {info.example}
            </p>
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50/80 p-4">
            <div className="mb-1 flex items-center gap-2 text-sm font-semibold text-amber-950">
              <ShieldCheck className="h-4 w-4" />
              Watch out
            </div>
            <p className="text-[13px] leading-relaxed text-gray-700">
              {info.caution}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200/80 bg-white/70 px-5 py-3">
        <div className="flex items-center gap-2 text-[12px] font-medium text-gray-600">
          <Lightbulb className="h-3.5 w-3.5 text-blue-700" />
          Read the visual first, then run the IDE exercise to make it concrete.
        </div>
      </div>
    </div>
  );
}
