import type { TopicLesson } from "@/lib/types";
import { mbaAiDay3Labs } from "./mba-ai-day3-labs";

const COLAB = "https://colab.research.google.com/#create=true";
const GROQ_KEYS = "https://console.groq.com/keys";
const DOC = "https://docs.google.com/";

const INSTALL =
  "!pip install -q langchain langchain-groq langchain-core langchain-community langgraph yfinance groq wikipedia duckduckgo-search youtube_search arxiv\nprint('OK — packages installed')";

const KEY_BOOT = `import os
from getpass import getpass

GROQ_MODEL = "llama-3.1-8b-instant"

if not os.environ.get("GROQ_API_KEY"):
    os.environ["GROQ_API_KEY"] = getpass("Paste GROQ_API_KEY (hidden): ").strip()

print("=" * 40)
print("  KEY LOADED  |  model:", GROQ_MODEL)
print("=" * 40)`;

/**
 * Day 3 — AI Chatbot Development & API Integration
 * Topics 1–6 + labs 7–12 (professional textbook content + Colab labs).
 */
export const mbaAiDay3Lessons: Record<string, TopicLesson> = {
  ...mbaAiDay3Labs,

  "mba-d3-t1": {
    topicId: "mba-d3-t1",
    intro:
      "Day 3 covers building business chatbots that call real LLM APIs, then adding memory and tools. This topic is reading only. Coding starts in Topic 2.",
    blocks: [
      { type: "single-column", content: "" },
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "By the end of this topic you should be able to define a business chatbot, explain how an LLM API call works in plain language, distinguish system / user / assistant messages, and outline the Day 3 ladder from a single API call to a tool-using streaming agent. You will also know which stack (Colab, Groq, LangChain) you will use in every lab.",
      },
      {
        type: "heading",
        content: "2) What is a business chatbot?",
      },
      {
        type: "paragraph",
        content:
          "A chatbot is a conversational interface over a language model. In a business setting it drafts analysis, answers policy questions, and — when you add tools — looks up live prices, encyclopedia summaries, or company FAQ entries instead of guessing. The interface feels like chat; underneath it is a sequence of API calls with carefully structured messages.",
      },
      {
        type: "paragraph",
        content:
          "Without tools, the model answers from general knowledge and conversation context. With tools, the model can request external data, receive the result, and then write a grounded reply. Day 3 builds that capability step by step so you understand each layer before combining them.",
      },
      {
        type: "visual",
        diagram: {
          title: "Day 3 maturity ladder",
          variant: "flow",
          nodes: [
            { id: "a", label: "API call", sublabel: "One question → one answer" },
            { id: "b", label: "Persona + memory", sublabel: "Multi-turn context" },
            { id: "c", label: "Tools", sublabel: "Streaming agents · Wikipedia · Search" },
          ],
          arrows: [
            { from: "a", to: "b" },
            { from: "b", to: "c" },
          ],
        },
      },
      {
        type: "heading",
        content: "3) LLMs and APIs in plain English",
      },
      {
        type: "paragraph",
        content:
          "An LLM (large language model) is the model that generates text. In this course the model is Llama 3.1 8B Instant, hosted by Groq. An API is a remote service you call with an API key: you send messages over HTTPS and receive a completion. The system message sets persona and rules; the user message is the question; the assistant message is the reply. LangChain is a set of Python helpers so you write less glue code for messages, memory, templates, and tools.",
      },
      {
        type: "list",
        items: [
          "LLM = the model that writes text (Groq-hosted Llama in this course).",
          "API = a remote service you call with an API key.",
          "System message = persona and rules. User message = the question. Assistant = the reply.",
          "LangChain = Python helpers for messages, memory, templates, and tools.",
        ],
      },
      {
        type: "heading",
        content: "4) Why this matters in business",
      },
      {
        type: "paragraph",
        content:
          "Leaders often ask for chatbots without clarifying what is easy versus hard. A single completion is easy. Stable persona and multi-turn memory are the next step. Live tools (search, finance quotes, internal FAQ) are where cost, latency, accuracy, and security risk show up. Understanding that ladder helps you scope projects, set expectations, and design demos that show evidence of tool use rather than a slide that merely claims “AI can help.”",
      },
      {
        type: "heading",
        content: "5) Today’s stack (locked)",
      },
      {
        type: "list",
        items: [
          "Google Colab (browser notebook)",
          "Groq API key (free tier is enough for class)",
          "Model: llama-3.1-8b-instant",
          "Python packages: groq, langchain, langchain-groq, langchain-core, langchain-community, langgraph, yfinance, wikipedia, duckduckgo-search, youtube_search, arxiv",
          "Simple syntax focus: print, lists, dicts, short def functions; later topics use create_react_agent + streaming",
        ],
      },
      {
        type: "tip",
        content:
          "Lab notes: create a Google Doc titled “AI Lab Notes — Day 3”. After every practice exercise, paste the output. The Topic 12 capstone needs a full streamed tool-trail paste.",
      },
      {
        type: "heading",
        content: "6) Topic roadmap (12 steps)",
      },
      {
        type: "list",
        items: [
          "t2 Setup · t3 First API · t4 Personas · t5 Chat loop · t6 ChatGroq",
          "t7 Templates (stream) · t8 Memory agent · t9 Wikipedia agent · t10 DuckDuckGo agent",
          "t11 YouTube + Arxiv + Yahoo agent · t12 Custom tools + streaming capstone agent",
        ],
      },
    ],
    keyTakeaways: [
      "Chatbots sit on LLM APIs; keys must stay secret.",
      "Day 3 climbs from one API call → persona and memory → tools.",
      "Day 4 moves to document RAG, vector retrieval, and AI-powered analysis.",
    ],
  },

  "mba-d3-t2": {
    topicId: "mba-d3-t2",
    intro:
      "Open a blank Colab notebook, install the Day 3 packages, and load your Groq key safely with getpass. A clear KEY LOADED banner confirms you are ready for every later lab.",
    blocks: [
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "You will create a Colab runtime, install the LangChain / Groq / tool packages used for the rest of Day 3, and store GROQ_API_KEY in the environment without printing it. After this topic you should know how to recover after a runtime restart.",
      },
      {
        type: "heading",
        content: "2) What you will set up",
      },
      {
        type: "paragraph",
        content:
          "Colab is a free notebook that runs in the browser. Groq hosts fast Llama models over an HTTP API. Your API key proves the call is yours — treat it like a password. getpass prompts for the key without echoing characters into the cell output or the notebook source.",
      },
      {
        type: "heading",
        content: "3) Why this matters in business",
      },
      {
        type: "paragraph",
        content:
          "Leaked keys create surprise bills and security incidents. Hardcoding a key into a shared notebook or screenshot is a common failure mode in training and in production prototypes. A working, safely loaded key is also the gateway to every chatbot demo you will show colleagues or clients later today.",
      },
      {
        type: "heading",
        content: "4) How it works (step-by-step)",
      },
      {
        type: "list",
        items: [
          "Open a new Colab notebook.",
          "Install packages once per runtime with pip (Cell 1).",
          "When getpass asks, paste the Groq key; it does not print on screen.",
          "Store it in os.environ so later cells can read GROQ_API_KEY.",
          "Confirm with the KEY LOADED banner that prints the model name only — never the key.",
        ],
      },
      {
        type: "heading",
        content: "5) Worked intuition",
      },
      {
        type: "paragraph",
        content:
          "Think of the key as a hotel room card: it unlocks the service for you, but anyone who copies it can open the same door. Putting the key in a normal string inside a cell is like writing the card number on a whiteboard. getpass + os.environ keeps the secret in process memory for this runtime only. After Runtime → Restart, memory is cleared and you must paste again.",
      },
      {
        type: "heading",
        content: "6) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Pasting the key into a normal code cell (it gets saved or shared).",
          "Forgetting to re-run the key cell after Runtime → Restart.",
          "Sharing a notebook screenshot that shows the key.",
          "Skipping the install cell and then wondering why imports fail.",
        ],
      },
      {
        type: "tip",
        content: `Open Colab: ${COLAB} | Create key: ${GROQ_KEYS} | Never commit keys to GitHub.`,
      },
      {
        type: "heading",
        content: "7) Practice exercise — KEY LOADED banner",
      },
      {
        type: "paragraph",
        content:
          "Run the two cells below. When you see the KEY LOADED banner, screenshot it into your Day 3 Google Doc.",
      },
      {
        type: "jupyter-notebook",
        installCmd: INSTALL,
        notebookCells: [
          {
            label: "Cell 1 — Install packages",
            code: INSTALL,
          },
          {
            label: "Cell 2 — Practice: load key + banner",
            code: KEY_BOOT,
          },
        ],
      },
      {
        type: "setup-checklist",
        content: "Topic 2 checklist",
        setupSteps: [
          {
            title: "Opened a new Colab notebook",
            description: "Use a blank notebook for Day 3 labs.",
            link: { label: "Open Colab", url: COLAB },
          },
          {
            title: "Created a Groq API key",
            description: "Copy the key once; you will paste it into getpass.",
            link: { label: "Groq console", url: GROQ_KEYS },
          },
          {
            title: "Ran Cell 1 install without errors",
            description: "You should see OK — packages installed.",
          },
          {
            title: "Ran Cell 2 and saw KEY LOADED banner",
            description: "Banner shows the model name, not the key.",
          },
          {
            title: "Pasted screenshot into Google Doc Day 3",
            description: "Keep a running evidence trail for later topics.",
            link: { label: "Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "getpass keeps the key off the screen and out of the cell source.",
      "Re-run install + key after every Colab runtime restart.",
      "KEY LOADED banner = you are ready for Topic 3.",
    ],
  },

  "mba-d3-t3": {
    topicId: "mba-d3-t3",
    intro:
      "Send your first real chat completion to Groq. Then practise the same business question twice — once at temperature 0 and once at 0.8 — and observe how the wording changes.",
    blocks: [
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "You will send a chat completion with system and user messages, read the assistant reply from the response object, and compare temperature 0.0 versus 0.8 on an identical question. After this topic you should explain temperature in business language: stability versus variety of wording.",
      },
      {
        type: "heading",
        content: "2) What is a chat completion?",
      },
      {
        type: "paragraph",
        content:
          "A chat completion is the basic unit of chatbot interaction. You send a small list of messages (typically system + user). The API returns one assistant reply. That request–response pattern is the building block of every multi-turn bot, template chain, and agent you build later today.",
      },
      {
        type: "heading",
        content: "3) Why this matters in business",
      },
      {
        type: "paragraph",
        content:
          "Temperature is a dial leaders ask about when they notice the bot changing its phrasing. Low temperature produces more stable briefs suitable for KPI commentary and compliance-adjacent wording. Higher temperature increases creative variation — useful for brainstorming, risky for audited language. Demonstrating both on the same question makes the trade-off concrete.",
      },
      {
        type: "heading",
        content: "4) How it works (step-by-step)",
      },
      {
        type: "list",
        items: [
          "Import the Groq client and read GROQ_API_KEY from the environment.",
          "Call client.chat.completions.create with model, temperature, and messages.",
          "Print resp.choices[0].message.content.",
          "Wrap the call in a small helper so you can run the same question at two temperatures.",
        ],
      },
      {
        type: "heading",
        content: "5) Worked intuition",
      },
      {
        type: "paragraph",
        content:
          "Ask for one weekly KPI a grocery retailer should watch. At temperature 0 the model tends to converge on a similar, conservative recommendation. At 0.8 the wording and sometimes the KPI emphasis may shift. Neither run is “wrong”; they illustrate that generation is stochastic and that temperature controls how much variety you allow.",
      },
      {
        type: "heading",
        content: "6) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Forgetting to run the key cell first.",
          "Wrong model name (use llama-3.1-8b-instant).",
          "Expecting temperature 0 to be identical word-for-word every time — it stays similar, not always character-identical.",
        ],
      },
      {
        type: "tip",
        content: `Re-run Topic 2 install + key if this is a new runtime. Colab: ${COLAB}`,
      },
      {
        type: "heading",
        content: "7) Practice exercise — temperature contrast",
      },
      {
        type: "paragraph",
        content:
          "Run a basic completion, then the contrast cell. Paste both temperature outputs into Google Doc Day 3.",
      },
      {
        type: "jupyter-notebook",
        installCmd: INSTALL,
        notebookCells: [
          {
            label: "Cell 1 — Install + key",
            code: `${INSTALL}\n\n${KEY_BOOT}`,
          },
          {
            label: "Cell 2 — Basic: one API call",
            code: `from groq import Groq

client = Groq(api_key=os.environ["GROQ_API_KEY"])

resp = client.chat.completions.create(
    model=GROQ_MODEL,
    temperature=0.2,
    messages=[
        {"role": "system", "content": "You are a concise AI tutor. Max 3 sentences."},
        {"role": "user", "content": "What is an API key in one sentence?"},
    ],
)
print(resp.choices[0].message.content)`,
          },
          {
            label: "Cell 3 — Practice: same question, two temperatures",
            code: `question = "Give one weekly KPI a grocery retailer should watch."

def ask(temp):
    r = client.chat.completions.create(
        model=GROQ_MODEL,
        temperature=temp,
        messages=[
            {"role": "system", "content": "You are a retail analyst. Be specific."},
            {"role": "user", "content": question},
        ],
    )
    return r.choices[0].message.content.strip()

print("=== TEMPERATURE CONTRAST ===")
print("\\n--- temperature = 0.0 ---")
print(ask(0.0))
print("\\n--- temperature = 0.8 ---")
print(ask(0.8))
print("\\n>>> Paste BOTH answers into Google Doc Day 3")`,
          },
        ],
      },
      {
        type: "setup-checklist",
        content: "Topic 3 checklist",
        setupSteps: [
          {
            title: "Ran Cell 2 — saw one tutor reply",
            description: "Confirms the Groq client and model work.",
          },
          {
            title: "Ran Cell 3 — both temperatures printed",
            description: "Compare wording under the TEMPERATURE CONTRAST header.",
          },
          {
            title: "Pasted contrast panel into Google Doc Day 3",
            description: "Keep both answers for review notes.",
            link: { label: "Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "A chat completion is messages in → text out.",
      "Temperature changes how varied the wording feels.",
      "Demo temperature with a clear before/after panel on the same question.",
    ],
  },

  "mba-d3-t4": {
    topicId: "mba-d3-t4",
    intro:
      "The system message sets the persona. The user message is the question. Change only the system line and the same question reads like a CEO brief or an intern note.",
    blocks: [
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "You will separate system and user roles clearly, write two contrasting personas, and run the same business question under each. After this topic you should treat persona as a reusable product setting — not something you paste into every user question.",
      },
      {
        type: "heading",
        content: "2) System vs user (definition)",
      },
      {
        type: "paragraph",
        content:
          "The system message defines who the bot is and how it should talk: tone, length, audience, and constraints. The user message is the current ask. The assistant message is the model’s reply (you print it). Keeping persona in the system slot makes it easy to swap voices without rewriting the question.",
      },
      {
        type: "list",
        items: [
          "System = who the bot is and how it should talk.",
          "User = what you are asking right now.",
          "Assistant = the model’s reply (you print it).",
        ],
      },
      {
        type: "heading",
        content: "3) Why this matters in business",
      },
      {
        type: "paragraph",
        content:
          "Generic AI tone frustrates decision-makers. A strong system persona is the cheapest quality upgrade to every demo — no new model required. The same retail question can become a decisive executive brief or a cautious intern checklist simply by changing the system string.",
      },
      {
        type: "heading",
        content: "4) How it works (step-by-step)",
      },
      {
        type: "list",
        items: [
          "Write a small helper ask_with_persona(system_text, user_text).",
          "Keep the user question identical across runs.",
          "Swap only the system string (CEO vs intern).",
          "Print both replies under clear headers for comparison.",
        ],
      },
      {
        type: "heading",
        content: "5) Worked intuition",
      },
      {
        type: "paragraph",
        content:
          "Question: same-store sales fell 4% this month — what should we do next week? A CEO persona should answer in short decisive bullets. An intern persona should sound unsure, ask clarifying questions, and stay humble. If both outputs sound the same, the system messages were too vague (for example, only “be helpful”).",
      },
      {
        type: "heading",
        content: "6) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Putting the persona in the user message (harder to reuse).",
          "Writing a vague system line like “be helpful” with no audience or format rules.",
          "Changing both system and user at once — then you cannot tell what caused the difference.",
        ],
      },
      {
        type: "heading",
        content: "7) Practice exercise — CEO vs Intern",
      },
      {
        type: "paragraph",
        content:
          "Run the helper, then the dual-persona cell. Paste both blocks into Google Doc Day 3.",
      },
      {
        type: "jupyter-notebook",
        installCmd: INSTALL,
        notebookCells: [
          {
            label: "Cell 1 — Install + key",
            code: `${INSTALL}\n\n${KEY_BOOT}\n\nfrom groq import Groq\nclient = Groq(api_key=os.environ["GROQ_API_KEY"])`,
          },
          {
            label: "Cell 2 — Helper: ask with a persona",
            code: `def ask_with_persona(system_text, user_text):
    r = client.chat.completions.create(
        model=GROQ_MODEL,
        temperature=0.3,
        messages=[
            {"role": "system", "content": system_text},
            {"role": "user", "content": user_text},
        ],
    )
    return r.choices[0].message.content.strip()

print("Helper ready")`,
          },
          {
            label: "Cell 3 — Practice: CEO vs Intern dual print",
            code: `q = "Same-store sales fell 4% this month. What should we do next week?"

ceo = "You are the CEO of FreshBasket. Speak in short decisive bullets. No jargon."
intern = "You are a first-week analyst intern. Sound unsure, ask clarifying questions, keep it humble."

print("=== CEO VS INTERN ===")
print("\\n### CEO\\n")
print(ask_with_persona(ceo, q))
print("\\n### INTERN\\n")
print(ask_with_persona(intern, q))
print("\\n>>> Paste both blocks into Google Doc Day 3")`,
          },
        ],
      },
      {
        type: "setup-checklist",
        content: "Topic 4 checklist",
        setupSteps: [
          {
            title: "Ran Cell 2 helper",
            description: "ask_with_persona is defined and ready.",
          },
          {
            title: "Ran Cell 3 — CEO and Intern both printed",
            description: "Same question, two system messages.",
          },
          {
            title: "Pasted dual persona output into Google Doc Day 3",
            description: "Keep both voices for comparison.",
            link: { label: "Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "System message = persona; user message = ask.",
      "Same question + different system = different stakeholder voices.",
      "Persona is the fastest quality upgrade for demos — no new model required.",
    ],
  },

  "mba-d3-t5": {
    topicId: "mba-d3-t5",
    intro:
      "A chatbot is a growing Python list of messages. No LangChain yet — append user, call the API, append assistant, repeat. Practise a 3-turn FreshBasket analyst that remembers what you already said.",
    blocks: [
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "You will implement a plain-Python chat loop, understand why both user and assistant turns must be appended, and run a three-turn dialogue where turn 3 depends on earlier context. After this topic you should explain memory without frameworks.",
      },
      {
        type: "heading",
        content: "2) What is a chat loop?",
      },
      {
        type: "paragraph",
        content:
          "messages starts with a system line. Each turn you append the user text, call the API with the full list, then append the assistant reply. The list is the memory. If you drop the assistant reply or reset the list every turn, follow-ups fail because the model never sees prior answers.",
      },
      {
        type: "heading",
        content: "3) Why this matters in business",
      },
      {
        type: "paragraph",
        content:
          "Colleagues expect follow-ups such as “make that shorter” or “rewrite as an email.” Without a loop, every question is a cold start and the bot cannot refer to facts already stated. Multi-turn context is what makes a chatbot feel like a working session instead of a series of isolated searches.",
      },
      {
        type: "heading",
        content: "4) How it works (step-by-step)",
      },
      {
        type: "list",
        items: [
          'messages = [{"role": "system", "content": "..."}]',
          'messages.append({"role": "user", "content": q})',
          "Call the API with the full messages list",
          'messages.append({"role": "assistant", "content": reply})',
          "Repeat for the next user turn",
        ],
      },
      {
        type: "heading",
        content: "5) Worked intuition",
      },
      {
        type: "paragraph",
        content:
          "Turn 1 states that West region discounting hit 18%. Turn 2 asks for the main risk if that continues — the model should use the 18% / West fact. Turn 3 asks for a three-bullet email to the regional manager — the model should compress the prior answer, not invent a new unrelated topic. Count the messages list length afterwards: system + three users + three assistants = 7.",
      },
      {
        type: "heading",
        content: "6) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Forgetting to append the assistant reply (next turn loses context).",
          "Starting a brand-new messages list every turn.",
          "Putting too much instruction only in turn 1 user text instead of the system message.",
        ],
      },
      {
        type: "heading",
        content: "7) Practice exercise — 3-turn FreshBasket analyst",
      },
      {
        type: "paragraph",
        content:
          "Build the chat loop, run three turns, and paste the Turn 3 email into Google Doc Day 3.",
      },
      {
        type: "jupyter-notebook",
        installCmd: INSTALL,
        notebookCells: [
          {
            label: "Cell 1 — Install + key + client",
            code: `${INSTALL}\n\n${KEY_BOOT}\n\nfrom groq import Groq\nclient = Groq(api_key=os.environ["GROQ_API_KEY"])`,
          },
          {
            label: "Cell 2 — Chat loop function",
            code: `messages = [
    {
        "role": "system",
        "content": "You are FreshBasket Analyst Bot. Max 60 words. Remember prior turns.",
    }
]

def chat(user_text):
    messages.append({"role": "user", "content": user_text})
    r = client.chat.completions.create(
        model=GROQ_MODEL,
        temperature=0.2,
        messages=messages,
    )
    reply = r.choices[0].message.content.strip()
    messages.append({"role": "assistant", "content": reply})
    return reply

print("Chat loop ready | messages so far:", len(messages))`,
          },
          {
            label: "Cell 3 — Practice: three turns",
            code: `turns = [
    "West region discounting hit 18% last week.",
    "What is the main risk if that continues?",
    "Rewrite your last answer as a 3-bullet email to the regional manager.",
]

print("=== 3-TURN ANALYST ===")

for i, t in enumerate(turns, 1):
    print(f"\\n--- Turn {i}: {t}")
    print(chat(t))

print("\\nTotal messages in list:", len(messages))
print(">>> Paste Turn 3 email into Google Doc Day 3")`,
          },
        ],
      },
      {
        type: "setup-checklist",
        content: "Topic 5 checklist",
        setupSteps: [
          {
            title: "Ran Cell 2 — chat loop ready",
            description: "messages list starts with the system line.",
          },
          {
            title: "Ran Cell 3 — all three turns printed",
            description: "Turn 3 should reference prior context.",
          },
          {
            title: "Pasted Turn 3 email into Google Doc Day 3",
            description: "Evidence that memory worked across turns.",
            link: { label: "Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "A chat loop is a growing messages list.",
      "Append both user and assistant every turn.",
      "Follow-ups only work if you keep the list.",
    ],
  },

  "mba-d3-t6": {
    topicId: "mba-d3-t6",
    intro:
      "LangChain’s ChatGroq does the same job as the raw Groq client, with cleaner message types. Practise the same question on raw Groq and ChatGroq and compare both replies side by side.",
    blocks: [
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "You will construct a ChatGroq LLM, invoke it with SystemMessage and HumanMessage, and verify that the underlying Groq model matches your raw client call. After this topic you are ready for templates and agents that expect LangChain message objects.",
      },
      {
        type: "heading",
        content: "2) What is ChatGroq?",
      },
      {
        type: "paragraph",
        content:
          "ChatGroq is a thin LangChain wrapper around Groq chat models. You pass SystemMessage / HumanMessage objects and call llm.invoke(list). Underneath it still calls Groq with llama-3.1-8b-instant (or whichever model you set). The value is a consistent interface for chains, templates, and agents.",
      },
      {
        type: "heading",
        content: "3) Why this matters in business",
      },
      {
        type: "paragraph",
        content:
          "Later topics (prompt templates, create_react_agent, streaming tools) build on LangChain. Learning ChatGroq now avoids rewriting every notebook when you add memory and tools. Side-by-side comparison also shows stakeholders that the framework is convenience — not a different model.",
      },
      {
        type: "heading",
        content: "4) How it works (step-by-step)",
      },
      {
        type: "list",
        items: [
          "from langchain_groq import ChatGroq",
          "from langchain_core.messages import SystemMessage, HumanMessage",
          "llm = ChatGroq(model=GROQ_MODEL, temperature=0.2)",
          "ai = llm.invoke([SystemMessage(...), HumanMessage(...)])",
          "print(ai.content)",
        ],
      },
      {
        type: "heading",
        content: "5) Worked intuition",
      },
      {
        type: "paragraph",
        content:
          "Ask why gross margin matters more than sales alone. Raw Groq returns a string via choices[0].message.content. ChatGroq returns an AIMessage whose .content holds the same kind of sentence. Wording may differ slightly because generation is stochastic, but both calls use the same model name and temperature.",
      },
      {
        type: "heading",
        content: "6) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Forgetting to install langchain-groq.",
          "Passing plain dicts instead of SystemMessage / HumanMessage to invoke.",
          "Using a different model string in the raw call than in ChatGroq.",
        ],
      },
      {
        type: "heading",
        content: "7) Practice exercise — raw vs LangChain side-by-side",
      },
      {
        type: "paragraph",
        content:
          "Run the raw completion, then the ChatGroq cell. Paste both replies into Google Doc Day 3.",
      },
      {
        type: "jupyter-notebook",
        installCmd: INSTALL,
        notebookCells: [
          {
            label: "Cell 1 — Install + key",
            code: `${INSTALL}\n\n${KEY_BOOT}`,
          },
          {
            label: "Cell 2 — Raw Groq reply",
            code: `from groq import Groq

client = Groq(api_key=os.environ["GROQ_API_KEY"])
q = "In one sentence: why does gross margin matter more than sales alone?"

raw = client.chat.completions.create(
    model=GROQ_MODEL,
    temperature=0.2,
    messages=[
        {"role": "system", "content": "You are FreshBasket Analyst Bot. One crisp sentence."},
        {"role": "user", "content": q},
    ],
)
raw_text = raw.choices[0].message.content.strip()
print("RAW GROQ:\\n", raw_text)`,
          },
          {
            label: "Cell 3 — Practice: ChatGroq same question",
            code: `from langchain_groq import ChatGroq
from langchain_core.messages import SystemMessage, HumanMessage

llm = ChatGroq(model=GROQ_MODEL, temperature=0.2)

ai = llm.invoke([
    SystemMessage(content="You are FreshBasket Analyst Bot. One crisp sentence."),
    HumanMessage(content=q),
])

print("=== RAW VS LANGCHAIN CHATGROQ ===")
print("\\n### RAW\\n", raw_text)
print("\\n### LANGCHAIN\\n", ai.content)
print("\\n>>> Same model, cleaner types — paste both into Google Doc Day 3")`,
          },
        ],
      },
      {
        type: "setup-checklist",
        content: "Topic 6 checklist",
        setupSteps: [
          {
            title: "Ran Cell 2 raw Groq reply",
            description: "Baseline completion with the groq SDK.",
          },
          {
            title: "Ran Cell 3 side-by-side panel",
            description: "ChatGroq reply printed under the comparison header.",
          },
          {
            title: "Pasted RAW vs LANGCHAIN into Google Doc Day 3",
            description: "Evidence that both paths use the same model.",
            link: { label: "Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "ChatGroq wraps the same Groq chat models.",
      "Use SystemMessage and HumanMessage with invoke.",
      "LangChain unlocks templates and tools in later topics.",
    ],
  },
};
