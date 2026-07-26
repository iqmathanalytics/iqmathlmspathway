import type { TopicQuiz } from "@/lib/types";

export const mbaAiDay3Quizzes: Record<string, TopicQuiz> = {
  "mba-d3-t1": {
    topicId: "mba-d3-t1",
    title: "Quick check: Chatbots, LLMs & APIs",
    questions: [
      {
        id: "q1",
        question: "What does an API key do when you call an LLM service like Groq?",
        options: [
          "It authenticates your requests so the service knows the call is authorized",
          "It unlocks Power BI Desktop",
          "It replaces all company passwords",
          "It downloads Yahoo Finance CSV files automatically",
        ],
        correctIndex: 0,
        explanation: "The key proves the request is authorized. Keep it secret.",
      },
      {
        id: "q2",
        question: "In a chat completion, what does the system message usually set?",
        options: [
          "Persona, rules, and tone for the assistant",
          "Your Colab password",
          "The quiz correct answers",
          "The Yahoo Finance API bill",
        ],
        correctIndex: 0,
        explanation: "System = who the bot is; user = the question.",
      },
      {
        id: "q3",
        question: "What is LangChain mainly used for?",
        options: [
          "Helpers for messages, prompts, memory, tools, and agents in Python",
          "Training a new LLM from scratch",
          "Replacing Excel entirely",
          "Deleting the need for an API key",
        ],
        correctIndex: 0,
        explanation: "LangChain is glue code — not a new model.",
      },
      {
        id: "q4",
        question: "What is the difference between a simple chatbot and a tool-using agent?",
        options: [
          "A chatbot mainly answers from the model; an agent can also call tools/APIs to get external facts",
          "A chatbot never uses a system message",
          "An agent cannot stream output",
          "There is no difference",
        ],
        correctIndex: 0,
        explanation: "Tools let agents fetch real data instead of guessing.",
      },
    ],
  },

  "mba-d3-t2": {
    topicId: "mba-d3-t2",
    title: "Quick check: Safe API key setup",
    questions: [
      {
        id: "q1",
        question: "What is the safest way to load an API key in a shared Colab notebook?",
        options: [
          "getpass + os.environ so the key is typed at runtime, not saved in the cell",
          "Paste the key into a markdown heading",
          "Commit the key into a public git repo",
          "Post the key in a group chat",
        ],
        correctIndex: 0,
        explanation: "getpass keeps secrets out of shared notebook source.",
      },
      {
        id: "q2",
        question: "After you restart a Colab runtime, what happens to installed packages and environment variables?",
        options: [
          "They are cleared — you usually need to re-run install and key cells",
          "They stay loaded forever with no action needed",
          "Your Groq account is deleted",
          "Temperature is forced to 2.0",
        ],
        correctIndex: 0,
        explanation: "A new runtime starts clean.",
      },
      {
        id: "q3",
        question: "Why must you never hardcode an API key in a shared notebook?",
        options: [
          "Anyone with the file can steal and abuse the key",
          "Hardcoded keys make models answer slower",
          "Colab rejects strings longer than 10 characters",
          "Yahoo Finance blocks notebooks that mention keys",
        ],
        correctIndex: 0,
        explanation: "Keys in cells get copied into drives, GitHub, and screenshots.",
      },
    ],
  },

  "mba-d3-t3": {
    topicId: "mba-d3-t3",
    title: "Quick check: Chat completions & temperature",
    questions: [
      {
        id: "q1",
        question: "What does temperature mainly control in a chat completion?",
        options: [
          "How stable vs varied the wording tends to be",
          "Whether your API key is valid",
          "How many GPUs Colab assigns",
          "Yahoo Finance subscription tier",
        ],
        correctIndex: 0,
        explanation: "Lower ≈ more stable; higher ≈ more varied phrasing.",
      },
      {
        id: "q2",
        question: "Where do you usually read the model’s text reply from a Groq chat response?",
        options: [
          "resp.choices[0].message.content",
          "resp.password",
          "resp.excel_sheet",
          "resp.tool_trace_only",
        ],
        correctIndex: 0,
        explanation: "The first choice’s message content is the assistant text.",
      },
      {
        id: "q3",
        question: "If you ask the same question at temperature 0.0 and 0.8, what should you expect?",
        options: [
          "Similar meaning, but wording can differ more at the higher temperature",
          "The API key will be rejected at 0.8",
          "Only temperature 0.8 can use system messages",
          "Temperature has no effect at all",
        ],
        correctIndex: 0,
        explanation: "Temperature changes variation, not authorization.",
      },
    ],
  },

  "mba-d3-t4": {
    topicId: "mba-d3-t4",
    title: "Quick check: System vs user messages",
    questions: [
      {
        id: "q1",
        question: "If you want CEO tone vs intern tone on the same question, what should you change?",
        options: [
          "The system (persona) message — keep the user question identical",
          "Only the Yahoo ticker",
          "Your Groq model to Excel",
          "The Colab runtime to GPU always",
        ],
        correctIndex: 0,
        explanation: "Persona lives in the system message.",
      },
      {
        id: "q2",
        question: "What is a common mistake when writing a system persona?",
        options: [
          "Using a vague line like “be helpful” with no role or audience",
          "Using getpass for secrets",
          "Printing the reply",
          "Using temperature 0 for tool demos",
        ],
        correctIndex: 0,
        explanation: "Strong personas name role, audience, and style.",
      },
      {
        id: "q3",
        question: "Why can changing only the system message upgrade answer quality?",
        options: [
          "It changes tone and role without needing a different model",
          "It removes the need for an API key",
          "It trains embeddings automatically",
          "It installs LangChain forever",
        ],
        correctIndex: 0,
        explanation: "Same model, different system = different voice.",
      },
    ],
  },

  "mba-d3-t5": {
    topicId: "mba-d3-t5",
    title: "Quick check: Chat memory basics",
    questions: [
      {
        id: "q1",
        question: "In a simple chat loop, why append both user and assistant messages?",
        options: [
          "So later turns still include earlier context",
          "So Yahoo Finance can bill per message",
          "So Colab installs packages automatically",
          "So the API key rotates every turn",
        ],
        correctIndex: 0,
        explanation: "The messages list is the conversation memory.",
      },
      {
        id: "q2",
        question: "What happens if you start a brand-new empty messages list every turn?",
        options: [
          "The bot loses prior context (cold start each time)",
          "The bot becomes an agent automatically",
          "Temperature becomes 0",
          "Tools stop needing @tool",
        ],
        correctIndex: 0,
        explanation: "Follow-ups need the growing list.",
      },
      {
        id: "q3",
        question: "A user says “rewrite your last answer as an email.” What must be true for that to work?",
        options: [
          "Earlier turns are still available in the conversation history",
          "A secret second Groq account exists",
          "Power BI DAX measures are loaded",
          "The system message was deleted",
        ],
        correctIndex: 0,
        explanation: "Follow-ups refer to prior assistant content.",
      },
    ],
  },

  "mba-d3-t6": {
    topicId: "mba-d3-t6",
    title: "Quick check: ChatGroq & messages",
    questions: [
      {
        id: "q1",
        question: "What does LangChain’s ChatGroq provide compared with calling groq.Client directly?",
        options: [
          "The same chat models, with LangChain message types for easier tools and agents later",
          "A free unlimited key with no signup",
          "Automatic Power Pivot relationships",
          "Offline answers with zero network",
        ],
        correctIndex: 0,
        explanation: "ChatGroq is a wrapper — same Groq underneath.",
      },
      {
        id: "q2",
        question: "Which pair of classes is commonly passed to llm.invoke for a simple chat?",
        options: [
          "SystemMessage and HumanMessage",
          "ExcelMessage and SqlMessage",
          "TickerMessage and FaqMessage",
          "PipMessage and KeyMessage",
        ],
        correctIndex: 0,
        explanation: "Those are the core LangChain chat message types.",
      },
      {
        id: "q3",
        question: "Where do you read the text from a ChatGroq AIMessage?",
        options: [
          "ai.content",
          "ai.password",
          "ai.excel",
          "ai.colab_gpu",
        ],
        correctIndex: 0,
        explanation: "AIMessage.content holds the assistant text.",
      },
    ],
  },

  "mba-d3-t7": {
    topicId: "mba-d3-t7",
    title: "Quick check: Prompt templates & streaming",
    questions: [
      {
        id: "q1",
        question: "What is the main benefit of a prompt template?",
        options: [
          "Reuse one structure while changing variables like audience or task",
          "Delete the need for a system persona",
          "Train a new model overnight",
          "Bypass API keys",
        ],
        correctIndex: 0,
        explanation: "Templates keep structure fixed; variables change the fill-ins.",
      },
      {
        id: "q2",
        question: "What does streaming a chain (chain.stream) show you?",
        options: [
          "Tokens appear as they are generated instead of waiting for the full reply",
          "That Excel formulas are running",
          "That the API key was deleted",
          "That temperature is always 2.0",
        ],
        correctIndex: 0,
        explanation: "Streaming prints partial output live.",
      },
      {
        id: "q3",
        question: "What does `chain = prompt | llm` mean in simple terms?",
        options: [
          "Pipe the filled prompt into the LLM as one runnable chain",
          "Delete the prompt after each call",
          "Run SQL before Python",
          "Merge two API keys",
        ],
        correctIndex: 0,
        explanation: "LCEL `|` composes prompt then model.",
      },
    ],
  },

  "mba-d3-t8": {
    topicId: "mba-d3-t8",
    title: "Quick check: Agent memory",
    questions: [
      {
        id: "q1",
        question: "In a LangGraph memory agent, what does a stable thread_id do?",
        options: [
          "Keeps prior turns for that conversation so follow-ups still make sense",
          "Deletes the API key after each message",
          "Forces temperature to 2.0",
          "Turns off all tools forever",
        ],
        correctIndex: 0,
        explanation: "Checkpointer memory is keyed by thread_id.",
      },
      {
        id: "q2",
        question: "A user first says “focus on the West region,” then asks “what risks should that region watch?” What enables the second answer?",
        options: [
          "Conversation memory that still holds the earlier region mention",
          "Yahoo Finance region codes",
          "A second Groq account",
          "Restarting Colab between turns",
        ],
        correctIndex: 0,
        explanation: "“That region” needs prior context.",
      },
      {
        id: "q3",
        question: "What is the point of agent.stream compared with waiting for one final blob?",
        options: [
          "You see steps/messages appear live as the agent runs",
          "It disables the system prompt",
          "It removes the need for an API key",
          "It only works offline",
        ],
        correctIndex: 0,
        explanation: "Streaming makes agent behavior visible.",
      },
    ],
  },

  "mba-d3-t9": {
    topicId: "mba-d3-t9",
    title: "Quick check: Tools & agents",
    questions: [
      {
        id: "q1",
        question: "Why use a Wikipedia tool instead of asking the LLM alone for a definition?",
        options: [
          "The tool fetches real encyclopedia text the answer can ground on",
          "Wikipedia replaces the need for an API key",
          "Wikipedia only works offline with no network",
          "Wikipedia trains a new LLM automatically",
        ],
        correctIndex: 0,
        explanation: "External tools reduce hallucinated “facts.”",
      },
      {
        id: "q2",
        question: "What does create_react_agent do for tool calling?",
        options: [
          "It runs the tool-calling loop for you so you do not hand-parse tool_calls",
          "It deletes all tools from the model",
          "It converts Python into Excel",
          "It turns off streaming forever",
        ],
        correctIndex: 0,
        explanation: "The agent proposes, executes, and continues automatically.",
      },
      {
        id: "q3",
        question: "What does the @tool decorator do?",
        options: [
          "Turns a Python function into a tool an agent can call by name",
          "Encrypts your Colab notebook",
          "Builds a Power BI measure",
          "Uploads PDFs to Groq",
        ],
        correctIndex: 0,
        explanation: "@tool exposes name, docstring, and args to the agent.",
      },
      {
        id: "q4",
        question: "When an agent streams with tools, what can you observe in the steps?",
        options: [
          "Tool calls and then the final natural-language answer",
          "Only Excel pivot caches",
          "Only the API key value",
          "Only GPU temperature",
        ],
        correctIndex: 0,
        explanation: "Streaming reveals real tool integration.",
      },
    ],
  },

  "mba-d3-t10": {
    topicId: "mba-d3-t10",
    title: "Quick check: Web search tools",
    questions: [
      {
        id: "q1",
        question: "When is a web search tool (like DuckDuckGo) a better fit than Wikipedia?",
        options: [
          "For open-web / multi-source snippets beyond a single encyclopedia page",
          "When you need to avoid using any network",
          "When you only need basic arithmetic",
          "When you want the model to invent headlines",
        ],
        correctIndex: 0,
        explanation: "Search covers broader web snippets; Wikipedia is for stable definitions.",
      },
      {
        id: "q2",
        question: "If you swap Wikipedia for DuckDuckGo on the same agent pattern, what mainly changes?",
        options: [
          "The tools list — the agent.stream control flow stays the same",
          "You must delete the API key",
          "You must switch from Python to Excel",
          "Streaming stops working",
        ],
        correctIndex: 0,
        explanation: "Same agent pattern; different tool.",
      },
      {
        id: "q3",
        question: "If a search tool returns an error or empty results, what should the assistant do?",
        options: [
          "Say it could not retrieve results — do not invent headlines",
          "Make up five news links",
          "Disable all tools forever",
          "Print the API key for debugging",
        ],
        correctIndex: 0,
        explanation: "Honest failure beats hallucination.",
      },
      {
        id: "q4",
        question: "Why truncate very long search tool output before the next model step?",
        options: [
          "To keep context smaller and more useful for the final summary",
          "Because Groq rejects any string under 10 characters",
          "Because search tools cannot return text",
          "Because temperature becomes invalid otherwise",
        ],
        correctIndex: 0,
        explanation: "Huge blobs waste context and confuse summaries.",
      },
    ],
  },

  "mba-d3-t11": {
    topicId: "mba-d3-t11",
    title: "Quick check: Multi-tool agents",
    questions: [
      {
        id: "q1",
        question: "In a multi-tool agent, who usually chooses which tool to call for a question?",
        options: [
          "The agent / model, based on the question and each tool’s description",
          "Only Excel macros",
          "Only a human writing if/else for every question",
          "Only Power Query",
        ],
        correctIndex: 0,
        explanation: "Clear tool docstrings help the agent pick correctly.",
      },
      {
        id: "q2",
        question: "Why put YouTube search, Arxiv, and Yahoo Finance on one agent?",
        options: [
          "Different questions need different data sources (videos, papers, prices)",
          "One tool can never work with an agent",
          "It removes the need for an API key",
          "It forces temperature to 2.0",
        ],
        correctIndex: 0,
        explanation: "Multi-tool desks mix complementary APIs.",
      },
      {
        id: "q3",
        question: "Which ticker format is often needed for Indian NSE equities on Yahoo Finance?",
        options: [
          "SYMBOL.NS (for example RELIANCE.NS)",
          "SYMBOL!!!! only",
          "A Power BI DAX measure name",
          "The Groq model id",
        ],
        correctIndex: 0,
        explanation: "Yahoo uses exchange suffixes; NSE commonly uses .NS.",
      },
      {
        id: "q4",
        question: "What does streaming a multi-tool agent help you verify?",
        options: [
          "Which tool was called and what the final answer became",
          "That the API key was deleted",
          "That Excel installed itself",
          "That context window size doubled",
        ],
        correctIndex: 0,
        explanation: "Visible steps prove real tool integration.",
      },
    ],
  },

  "mba-d3-t12": {
    topicId: "mba-d3-t12",
    title: "Quick check: Custom tools vs public tools",
    questions: [
      {
        id: "q1",
        question: "Why do teams still build custom tools after connecting public APIs like Wikipedia or web search?",
        options: [
          "Internal company rules and private calculations are not available on public APIs",
          "Custom tools replace the need for an LLM",
          "Public APIs cannot be used with agents",
          "Custom tools disable streaming",
        ],
        correctIndex: 0,
        explanation: "Public sources cannot know private policy text.",
      },
      {
        id: "q2",
        question: "What is a calculator tool best for in an agent?",
        options: [
          "Exact arithmetic instead of letting the model guess numbers",
          "Downloading YouTube videos",
          "Storing API keys",
          "Training embeddings",
        ],
        correctIndex: 0,
        explanation: "Math should come from a tool, not a guess.",
      },
      {
        id: "q3",
        question: "If a company FAQ tool does not find a policy topic, what should happen?",
        options: [
          "Return not-found / Error and say the policy is not in the FAQ — do not invent rules",
          "Invent the strictest possible policy",
          "Call Yahoo Finance for HR rules",
          "Delete the system persona",
        ],
        correctIndex: 0,
        explanation: "Honest gaps beat confident fiction.",
      },
      {
        id: "q4",
        question: "How can one agent use both public tools and custom tools on a mixed question?",
        options: [
          "Pass all tools into create_react_agent and let it call the ones it needs while streaming",
          "Public and custom tools can never be combined",
          "Only PowerPoint can mix tools",
          "Only SQL joins can mix tools",
        ],
        correctIndex: 0,
        explanation: "One agent, many tools, one stream.",
      },
    ],
  },
};
