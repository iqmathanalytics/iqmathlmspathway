import type { TopicLesson } from "@/lib/types";

const COLAB = "https://colab.research.google.com/#create=true";
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

const AGENT_BOOT = `${INSTALL}

${KEY_BOOT}

from langchain_groq import ChatGroq
from langgraph.prebuilt import create_react_agent

llm = ChatGroq(model=GROQ_MODEL, temperature=0)
print("LLM ready — we will build a streaming agent next")`;

/**
 * Day 3 labs — Topics 7–12
 * After templates: agents + streaming (no manual tool loops, no ask_* wrappers).
 */
export const mbaAiDay3Labs: Record<string, TopicLesson> = {
  "mba-d3-t7": {
    topicId: "mba-d3-t7",
    intro:
      "A prompt template is a reusable fill-in-the-blank brief. Change one variable (audience) and the same chain writes for store managers or the board. From the next topic onward you will run streaming agents.",
    blocks: [
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "You will build a ChatPromptTemplate with {audience} and {task} variables, pipe it into ChatGroq as a chain, and stream tokens for two audiences. After this topic you should explain why templates beat copy-pasted prompts for reusable briefs.",
      },
      {
        type: "heading",
        content: "2) What is a prompt template?",
      },
      {
        type: "paragraph",
        content:
          "A prompt template keeps structure fixed and fills holes such as {audience} or {task}. The approved wording, tone rules, and output shape stay constant; only the variables change. ChatPromptTemplate.from_messages builds that structure for chat models. Piping with prompt | llm creates a runnable chain you can invoke or stream.",
      },
      {
        type: "heading",
        content: "3) Why this matters in business",
      },
      {
        type: "paragraph",
        content:
          "One approved template can produce many stakeholder versions without rewriting from scratch. A KPI brief for store managers should sound operational; the same facts for board directors should sound strategic. Templates also prepare you for agents, where the system prompt is a fixed contract and tools supply variable evidence.",
      },
      {
        type: "heading",
        content: "4) How it works (step-by-step)",
      },
      {
        type: "list",
        items: [
          "Build prompt = ChatPromptTemplate.from_messages([...]) with {audience} and {task}",
          "chain = prompt | llm",
          "Call chain.stream({...}) and print chunk.content as tokens arrive",
          "Run twice: store managers, then board directors — same task string",
        ],
      },
      {
        type: "heading",
        content: "5) Worked intuition",
      },
      {
        type: "paragraph",
        content:
          "Task: list three weekly retail KPIs and why each matters. For store managers, expect floor-level language (conversion, waste, staffing). For board directors, expect higher-level framing (margin, growth, risk). Streaming shows tokens appear live — useful in demos because the audience sees progress instead of a blank wait.",
      },
      {
        type: "heading",
        content: "6) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Hardcoding audience inside the task text (then you cannot reuse the template).",
          "Forgetting to pass every variable when you stream or invoke.",
          "Using invoke only and never trying stream — you miss the live-token behaviour used in later agent labs.",
        ],
      },
      {
        type: "tip",
        content: `Colab: ${COLAB} | After this topic: agents + streaming (no manual for-loops for tools).`,
      },
      {
        type: "heading",
        content: "7) Practice exercise — Managers vs Board (streaming)",
      },
      {
        type: "paragraph",
        content:
          "Build the template chain, stream both audiences, and paste both outputs into Google Doc Day 3.",
      },
      {
        type: "jupyter-notebook",
        installCmd: INSTALL,
        notebookCells: [
          {
            label: "Cell 1 — Install + key + LLM",
            code: `${INSTALL}\n\n${KEY_BOOT}\n\nfrom langchain_groq import ChatGroq\nllm = ChatGroq(model=GROQ_MODEL, temperature=0.2)\nprint("LLM ready")`,
          },
          {
            label: "Cell 2 — Template chain",
            code: `from langchain_core.prompts import ChatPromptTemplate

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a business case coach for FreshBasket. Be crisp."),
    ("human", "Audience: {audience}. Task: {task}"),
])

chain = prompt | llm
task = "List 3 weekly retail KPIs and why each matters in one line."
print("Chain ready")`,
          },
          {
            label: "Cell 3 — Practice: stream Managers then Board",
            code: `print("=== STREAMING TEMPLATE OUTPUT ===")

print("\\n### MANAGERS (streaming)\\n")
for chunk in chain.stream({"audience": "store managers", "task": task}):
    print(chunk.content, end="", flush=True)

print("\\n\\n### BOARD (streaming)\\n")
for chunk in chain.stream({"audience": "board directors", "task": task}):
    print(chunk.content, end="", flush=True)

print("\\n\\n>>> Paste both streamed outputs into Google Doc Day 3")`,
          },
        ],
      },
      {
        type: "setup-checklist",
        content: "Topic 7 checklist",
        setupSteps: [
          {
            title: "Ran Cell 2 — template chain ready",
            description: "prompt | llm is constructed with audience and task variables.",
          },
          {
            title: "Ran Cell 3 — watched Managers + Board stream live",
            description: "Same task, two audience values.",
          },
          {
            title: "Pasted streamed outputs into Google Doc Day 3",
            description: "Keep both versions for notes.",
            link: { label: "Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "Templates keep structure fixed; variables change the audience.",
      "chain.stream shows tokens appear live — useful for demos.",
      "Next: streaming agents with memory and real tools.",
    ],
  },

  "mba-d3-t8": {
    topicId: "mba-d3-t8",
    intro:
      "From here on you use a streaming agent (not a manual chat loop). Memory works when the agent remembers your name and region across turns — watch each step print with pretty_print.",
    blocks: [
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "You will create a LangGraph react agent with MemorySaver, keep a stable thread_id, and stream three turns so the agent reuses name and region. After this topic you should prefer agent.stream over handmade message for-loops.",
      },
      {
        type: "heading",
        content: "2) Agent + memory (definition)",
      },
      {
        type: "paragraph",
        content:
          "create_react_agent builds a ready-made agent loop. MemorySaver plus a thread_id persists prior turns for that conversation thread. You call agent.stream with the new user message; the checkpointer restores history. No custom for-loop that appends messages by hand is required.",
      },
      {
        type: "heading",
        content: "3) Why this matters in business",
      },
      {
        type: "paragraph",
        content:
          "Follow-ups like “that region” only work if memory is on. Streaming each step makes the session observable: reviewers see the assistant messages as they complete. The same thread_id pattern later supports tool-using agents without rewriting control flow.",
      },
      {
        type: "heading",
        content: "4) How it works (step-by-step)",
      },
      {
        type: "list",
        items: [
          "agent = create_react_agent(llm, tools=[], prompt=..., checkpointer=memory)",
          'config = {"configurable": {"thread_id": "demo1"}}',
          'for step in agent.stream({...}, config, stream_mode="values"): pretty_print()',
          "Reuse the same config for every follow-up turn",
        ],
      },
      {
        type: "heading",
        content: "5) Worked intuition",
      },
      {
        type: "paragraph",
        content:
          "Turn 1: “Hi — I am Priya. Focus on the West region.” Turn 2: “What 2 risks should that region watch if discounts rise?” — the agent should resolve “that region” to West. Turn 3: “Address me by name and summarise in one line.” — the agent should use Priya. If you change thread_id between turns, memory looks wiped even though the code is “correct.”",
      },
      {
        type: "heading",
        content: "6) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Changing thread_id by accident (memory looks wiped).",
          "Writing your own message for-loop instead of agent.stream.",
          "Omitting the checkpointer so every turn starts cold.",
        ],
      },
      {
        type: "heading",
        content: "7) Practice exercise — streaming memory agent",
      },
      {
        type: "paragraph",
        content:
          "Create the memory agent, stream three turns, and paste Turns 2–3 into Google Doc Day 3.",
      },
      {
        type: "jupyter-notebook",
        installCmd: INSTALL,
        notebookCells: [
          {
            label: "Cell 1 — Install + key + LLM",
            code: AGENT_BOOT,
          },
          {
            label: "Cell 2 — Create memory agent (no tools yet)",
            code: `from langgraph.checkpoint.memory import MemorySaver

memory = MemorySaver()

agent = create_react_agent(
    llm,
    tools=[],
    prompt=(
        "You are FreshBasket coach. Remember the user's name and region. "
        "If they say 'that region', reuse the last region they named. Max 50 words."
    ),
    checkpointer=memory,
)

config = {"configurable": {"thread_id": "freshbasket-demo"}}
print("Memory agent ready | thread_id = freshbasket-demo")`,
          },
          {
            label: "Cell 3 — Practice: stream 3 turns (agent remembers)",
            code: `print("=== STREAMING MEMORY AGENT ===")

print("\\n--- Turn 1 ---")
for step in agent.stream(
    {"messages": [("user", "Hi — I am Priya. Focus on the West region.")]},
    config,
    stream_mode="values",
):
    step["messages"][-1].pretty_print()

print("\\n--- Turn 2 ---")
for step in agent.stream(
    {"messages": [("user", "What 2 risks should that region watch if discounts rise?")]},
    config,
    stream_mode="values",
):
    step["messages"][-1].pretty_print()

print("\\n--- Turn 3 ---")
for step in agent.stream(
    {"messages": [("user", "Address me by name and summarise in one line.")]},
    config,
    stream_mode="values",
):
    step["messages"][-1].pretty_print()

print("\\n>>> Paste Turns 2–3 into Google Doc Day 3")`,
          },
        ],
      },
      {
        type: "setup-checklist",
        content: "Topic 8 checklist",
        setupSteps: [
          {
            title: "Ran Cell 2 — memory agent created",
            description: "MemorySaver + stable thread_id configured.",
          },
          {
            title: "Ran Cell 3 — streamed 3 turns; bot used name + West",
            description: "Follow-ups should resolve “that region” and the name.",
          },
          {
            title: "Pasted memory stream into Google Doc Day 3",
            description: "Keep Turns 2–3 as evidence of memory.",
            link: { label: "Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "Use create_react_agent + MemorySaver — not a handmade chat loop.",
      "Same thread_id = same memory.",
      "agent.stream + pretty_print makes each turn observable.",
    ],
  },

  "mba-d3-t9": {
    topicId: "mba-d3-t9",
    intro:
      "Your first real tool is Wikipedia — run by a streaming agent. No manual tool for-loops. Watch the agent call Wikipedia and print tool use plus the final answer.",
    blocks: [
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "You will wrap Wikipedia as a @tool, pass it to create_react_agent, and stream a factual question so tool use appears in the trail. After this topic you should know that only the tool needs a short def — the agent runs the tool loop for you.",
      },
      {
        type: "heading",
        content: "2) Agent + Wikipedia tool",
      },
      {
        type: "paragraph",
        content:
          "A tool is a function the agent may call when it needs external data. You decorate one small function with @tool. create_react_agent wires the tool into the agent. agent.stream with stream_mode=\"values\" shows tool messages and the final answer as steps complete. You do not write your own tool_calls for-loop.",
      },
      {
        type: "heading",
        content: "3) Why this matters in business",
      },
      {
        type: "paragraph",
        content:
          "This is how tool-using agents work in products: the model decides when to look something up, receives evidence, then writes. Reviewers can see the tool fire — not only a black-box essay. Encyclopedia lookup is a safe first tool because definitions are public and stable.",
      },
      {
        type: "heading",
        content: "4) How it works (step-by-step)",
      },
      {
        type: "list",
        items: [
          "Write one @tool for Wikipedia (WikipediaQueryRun + WikipediaAPIWrapper)",
          "agent = create_react_agent(llm, tools=[wikipedia_search], prompt=...)",
          'Stream with stream_mode="values" and pretty_print() on each step',
          "Optional: invoke the tool directly once to peek at raw output",
        ],
      },
      {
        type: "heading",
        content: "5) Worked intuition",
      },
      {
        type: "paragraph",
        content:
          "Ask: “In plain English, what is operating margin? Use Wikipedia.” The stream should show a tool call to wikipedia_search, then an assistant summary under ~80 words grounded in the returned snippet. If you never see a tool message, the prompt may be too weak or the agent answered from memory alone — tighten the instruction to always use the tool for facts.",
      },
      {
        type: "heading",
        content: "6) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Writing your own tool_calls for-loop (not needed — the agent does it).",
          "Forgetting network access in Colab.",
          "Wrapping the agent in ask_wiki() instead of calling .stream directly.",
        ],
      },
      {
        type: "tip",
        content: `Colab: ${COLAB} | The only def you need is the @tool itself — never wrap the agent in ask_wiki().`,
      },
      {
        type: "heading",
        content: "7) Practice exercise — streaming Wikipedia agent",
      },
      {
        type: "paragraph",
        content:
          "Build the Wikipedia agent, stream one factual question, and paste the tool trail into Google Doc Day 3.",
      },
      {
        type: "jupyter-notebook",
        installCmd: INSTALL,
        notebookCells: [
          {
            label: "Cell 1 — Install + key + LLM",
            code: AGENT_BOOT,
          },
          {
            label: "Cell 2 — Wikipedia tool + agent",
            code: `from langchain_core.tools import tool
from langchain_community.tools import WikipediaQueryRun
from langchain_community.utilities import WikipediaAPIWrapper

wiki = WikipediaQueryRun(
    api_wrapper=WikipediaAPIWrapper(top_k_results=1, doc_content_chars_max=600)
)

@tool
def wikipedia_search(query: str) -> str:
    """Search Wikipedia and return a short summary."""
    return wiki.run(query)

agent = create_react_agent(
    llm,
    tools=[wikipedia_search],
    prompt="You are a research assistant. Always use wikipedia_search for facts. Keep answers under 80 words.",
)

print("Wikipedia agent ready")
print("Direct peek:", wikipedia_search.invoke({"query": "Gross margin"})[:250], "...")`,
          },
          {
            label: "Cell 3 — Practice: stream the agent (watch the tool)",
            code: `print("=== STREAMING WIKIPEDIA AGENT ===")

for step in agent.stream(
    {"messages": [("user", "In plain English, what is operating margin? Use Wikipedia.")]},
    stream_mode="values",
):
    step["messages"][-1].pretty_print()

print("\\n>>> Paste the streamed tool + answer into Google Doc Day 3")`,
          },
        ],
      },
      {
        type: "setup-checklist",
        content: "Topic 9 checklist",
        setupSteps: [
          {
            title: "Ran Cell 2 — Wikipedia agent ready",
            description: "Tool defined and agent constructed.",
          },
          {
            title: "Ran Cell 3 — streamed agent; saw Wikipedia tool use",
            description: "pretty_print should show tool activity then the answer.",
          },
          {
            title: "Pasted stream into Google Doc Day 3",
            description: "Keep the full tool trail.",
            link: { label: "Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "Agents run tools for you — no manual tool for-loop.",
      "Only @tool needs a short def; call the agent with .stream directly.",
      "pretty_print on each stream step makes tool use visible.",
    ],
  },

  "mba-d3-t10": {
    topicId: "mba-d3-t10",
    intro:
      "Same agent pattern — swap in DuckDuckGo for live web search. Stream the agent and watch search fire, then the summary appear.",
    blocks: [
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "You will replace Wikipedia with a DuckDuckGo search tool, keep the same create_react_agent + stream pattern, and summarise live web snippets in short bullets. After this topic you should be able to swap tools without rewriting control flow.",
      },
      {
        type: "heading",
        content: "2) Agent + DuckDuckGo",
      },
      {
        type: "paragraph",
        content:
          "Wikipedia is strong for stable definitions. DuckDuckGo is better for open-web research snippets that change over time. The agent code stays almost identical: one @tool, one create_react_agent call, one agent.stream. Learning to swap tools is more valuable than memorising any single API.",
      },
      {
        type: "heading",
        content: "3) Why this matters in business",
      },
      {
        type: "paragraph",
        content:
          "Many desk questions need current public context (industry KPI lists, news-adjacent phrasing) that an encyclopedia page may not emphasise. Live search demonstrates that the bot can fetch external evidence. Always treat snippets as inputs to summarise — not as verified company policy.",
      },
      {
        type: "heading",
        content: "4) How it works (step-by-step)",
      },
      {
        type: "list",
        items: [
          "@tool duckduckgo_search → create_react_agent → agent.stream",
          "Same streaming pattern as Wikipedia",
          "Prompt the agent to always use search and summarise in short bullets",
        ],
      },
      {
        type: "heading",
        content: "5) Worked intuition",
      },
      {
        type: "paragraph",
        content:
          "Ask for common weekly KPIs for supermarket / grocery retailers. The stream should show duckduckgo_search activity, then five short bullets. If search errors once, re-run the stream cell. If the tool returns Error, do not invent headlines — report the failure honestly.",
      },
      {
        type: "heading",
        content: "6) Common mistakes",
      },
      {
        type: "list",
        items: [
          "If search errors once, re-run the stream cell.",
          "Do not invent headlines if the tool returns Error.",
          "Copying Wikipedia code but forgetting to change the tool name in the prompt.",
        ],
      },
      {
        type: "heading",
        content: "7) Practice exercise — streaming search agent",
      },
      {
        type: "paragraph",
        content:
          "Build the DuckDuckGo agent, stream one research question, and paste the trail into Google Doc Day 3.",
      },
      {
        type: "jupyter-notebook",
        installCmd: INSTALL,
        notebookCells: [
          {
            label: "Cell 1 — Install + key + LLM",
            code: AGENT_BOOT,
          },
          {
            label: "Cell 2 — DuckDuckGo tool + agent",
            code: `from langchain_core.tools import tool
from langchain_community.tools import DuckDuckGoSearchRun

ddg = DuckDuckGoSearchRun()

@tool
def duckduckgo_search(query: str) -> str:
    """Search the web with DuckDuckGo and return result snippets."""
    return ddg.run(query)

agent = create_react_agent(
    llm,
    tools=[duckduckgo_search],
    prompt="Always use duckduckgo_search. Summarise findings in 5 short bullets.",
)

print("Search agent ready")
print("Direct peek:", str(duckduckgo_search.invoke({"query": "grocery retail weekly KPI"}))[:300], "...")`,
          },
          {
            label: "Cell 3 — Practice: stream live web search",
            code: `print("=== STREAMING DUCKDUCKGO AGENT ===")

for step in agent.stream(
    {"messages": [("user", "What are common weekly KPIs for supermarket / grocery retailers?")]},
    stream_mode="values",
):
    step["messages"][-1].pretty_print()

print("\\n>>> Paste the streamed search + summary into Google Doc Day 3")`,
          },
        ],
      },
      {
        type: "setup-checklist",
        content: "Topic 10 checklist",
        setupSteps: [
          {
            title: "Ran Cell 2 — DuckDuckGo agent ready",
            description: "Search tool registered on the agent.",
          },
          {
            title: "Ran Cell 3 — streamed live search agent",
            description: "Tool trail then five-bullet summary.",
          },
          {
            title: "Pasted stream into Google Doc Day 3",
            description: "Keep search evidence for notes.",
            link: { label: "Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "Same agent.stream pattern — only the tool changes.",
      "DuckDuckGo = open web; Wikipedia = encyclopedia.",
      "Never hand-roll tool loops when the agent already streams them.",
    ],
  },

  "mba-d3-t11": {
    topicId: "mba-d3-t11",
    intro:
      "Give one streaming agent three real tools — YouTube, Arxiv, and Yahoo Finance. Ask different questions and watch which tool fires in the stream.",
    blocks: [
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "You will register three @tool helpers on one create_react_agent, stream at least two different questions, and observe the agent choosing YouTube versus Yahoo (and optionally Arxiv). After this topic you should trust tool routing to the agent instead of writing if/else routers.",
      },
      {
        type: "heading",
        content: "2) Multi-tool streaming agent",
      },
      {
        type: "paragraph",
        content:
          "Pass a list of tools to create_react_agent. The agent picks YouTube for video discovery, Arxiv for research papers, and Yahoo Finance for ticker prices. You only stream — still no manual for-loop. Clear tool docstrings and a short routing prompt improve tool choice.",
      },
      {
        type: "heading",
        content: "3) Why this matters in business",
      },
      {
        type: "paragraph",
        content:
          "Real desks mix sources: learning videos, academic papers, and market prices. Seeing the agent choose tools live shows that one assistant can hold many capabilities without separate apps. It also surfaces failure modes early (empty Yahoo history, odd tickers) so you can design better prompts and error strings.",
      },
      {
        type: "heading",
        content: "4) How it works (step-by-step)",
      },
      {
        type: "list",
        items: [
          "Define three short @tool helpers: youtube_search, arxiv_search, yahoo_price",
          "agent = create_react_agent(llm, tools=[...], prompt=routing guidance)",
          "Stream two or three user questions and pretty_print each step",
        ],
      },
      {
        type: "heading",
        content: "5) Worked intuition",
      },
      {
        type: "paragraph",
        content:
          "Ask 1: find YouTube videos about building retail dashboards — expect youtube_search. Ask 2: what is AAPL’s latest close — expect yahoo_price. Indian tickers often need the .NS suffix (example RELIANCE.NS). YouTube returns link text; that is normal for this tool wrapper.",
      },
      {
        type: "heading",
        content: "6) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Indian tickers often need .NS (example RELIANCE.NS).",
          "YouTube returns link text — that is normal.",
          "Asking a mixed question that needs two tools before you have practised single-tool asks.",
        ],
      },
      {
        type: "heading",
        content: "7) Practice exercise — one agent, three live APIs",
      },
      {
        type: "paragraph",
        content:
          "Build the multi-tool agent, stream YouTube and Yahoo asks, and paste both streams into Google Doc Day 3.",
      },
      {
        type: "jupyter-notebook",
        installCmd: INSTALL,
        notebookCells: [
          {
            label: "Cell 1 — Install + key + LLM",
            code: AGENT_BOOT,
          },
          {
            label: "Cell 2 — Three tools + one agent",
            code: `from langchain_core.tools import tool
from langchain_community.tools import YouTubeSearchTool, ArxivQueryRun
from langchain_community.utilities import ArxivAPIWrapper
import yfinance as yf

yt = YouTubeSearchTool()
arxiv = ArxivQueryRun(api_wrapper=ArxivAPIWrapper(top_k_results=2, doc_content_chars_max=400))

@tool
def youtube_search(query: str) -> str:
    """Find YouTube videos for a topic. Returns video links as text."""
    return str(yt.run(query))

@tool
def arxiv_search(query: str) -> str:
    """Search Arxiv for research papers matching the query."""
    return arxiv.run(query)

@tool
def yahoo_price(ticker: str) -> str:
    """Get latest close for a Yahoo ticker like AAPL or RELIANCE.NS."""
    hist = yf.Ticker(ticker.strip().upper()).history(period="5d")
    if hist is None or hist.empty:
        return f"Error: no data for {ticker}"
    return f"{ticker.upper()}: last_close≈{float(hist['Close'].iloc[-1]):.4f}"

agent = create_react_agent(
    llm,
    tools=[youtube_search, arxiv_search, yahoo_price],
    prompt="Use the best tool. youtube_search for videos, arxiv_search for papers, yahoo_price for tickers.",
)

print("Multi-tool agent ready:", [youtube_search.name, arxiv_search.name, yahoo_price.name])`,
          },
          {
            label: "Cell 3 — Practice: stream two different asks",
            code: `print("=== MULTI-TOOL STREAMING AGENT ===")

print("\\n=== Ask 1: YouTube ===")
for step in agent.stream(
    {"messages": [("user", "Find YouTube videos about building retail dashboards.")]},
    stream_mode="values",
):
    step["messages"][-1].pretty_print()

print("\\n=== Ask 2: Yahoo price ===")
for step in agent.stream(
    {"messages": [("user", "What is AAPL's latest close?")]},
    stream_mode="values",
):
    step["messages"][-1].pretty_print()

print("\\n>>> Paste both streams into Google Doc Day 3")`,
          },
        ],
      },
      {
        type: "setup-checklist",
        content: "Topic 11 checklist",
        setupSteps: [
          {
            title: "Ran Cell 2 — multi-tool agent ready",
            description: "YouTube, Arxiv, and Yahoo tools registered.",
          },
          {
            title: "Ran Cell 3 — streamed YouTube + Yahoo asks",
            description: "Observe which tool fires for each ask.",
          },
          {
            title: "Pasted multi-tool streams into Google Doc Day 3",
            description: "Keep both trails for review.",
            link: { label: "Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "One agent can hold many real tools.",
      "Streaming shows which tool was chosen — no manual routing code.",
      "Next: add your own custom tools to the same agent pattern.",
    ],
  },

  "mba-d3-t12": {
    topicId: "mba-d3-t12",
    intro:
      "After real APIs, add custom tools (calculator + FAQ). Capstone: one streaming agent with Wikipedia + DuckDuckGo + your custom tools — watch the full tool trail print live.",
    blocks: [
      {
        type: "heading",
        content: "1) Learning objectives",
      },
      {
        type: "paragraph",
        content:
          "You will combine two public tools (Wikipedia, DuckDuckGo) with two custom tools (calculator, company_faq), stream one mixed question, and paste the full pretty_print trail. After this topic you should explain why custom tools fill gaps that public APIs cannot know.",
      },
      {
        type: "heading",
        content: "2) Real tools + custom tools in one agent",
      },
      {
        type: "paragraph",
        content:
          "Public tools fetch open knowledge and web snippets. Custom tools encode company-specific rules and safe arithmetic. Both register the same way: @tool functions in a tools=[...] list. The agent still runs via agent.stream — no handmade tool loop and no ask_* wrapper around the agent.",
      },
      {
        type: "list",
        items: [
          "Real: Wikipedia, DuckDuckGo",
          "Custom: calculator, company_faq",
          "Still only agent.stream — no handmade tool loop",
        ],
      },
      {
        type: "heading",
        content: "3) Why this matters in business",
      },
      {
        type: "paragraph",
        content:
          "Public APIs cannot know FreshBasket promo rules, return policy, or leave allowances. Custom FAQ tools fill that gap after you already proved live internet tools work. A calculator avoids letting the model invent arithmetic. The mixed question forces the agent to use several tools in one session — the evidence trail reviewers expect from a desk assistant.",
      },
      {
        type: "heading",
        content: "4) How it works (step-by-step)",
      },
      {
        type: "list",
        items: [
          "Define four short @tool helpers (wikipedia_search, duckduckgo_search, calculator, company_faq)",
          "create_react_agent(llm, tools=[...], prompt=routing + grounding rules)",
          "Stream one mixed question and pretty_print each step",
          "Paste the full streamed trail into Google Doc Day 3 Capstone",
        ],
      },
      {
        type: "heading",
        content: "5) Worked intuition",
      },
      {
        type: "paragraph",
        content:
          "Mixed ask: define gross margin via Wikipedia; check whether an 18% discount is allowed when the FAQ says discounts above 12% need Regional Manager approval; compute 0.18 * 500000 with the calculator. Expect multiple tool messages in the stream. The FAQ should block an unsupervised 18% shelf tag. The calculator should return a precise product — not a rounded guess from the model.",
      },
      {
        type: "heading",
        content: "6) Common mistakes",
      },
      {
        type: "list",
        items: [
          "Wrapping the agent in a custom ask() function (not needed).",
          "Forgetting to include both real and custom tools in the tools=[...] list.",
          "Allowing the model to invent policy when company_faq returns “topic not in FAQ.”",
        ],
      },
      {
        type: "tip",
        content: `Colab: ${COLAB} | Capstone paste = full streamed pretty_print trail.`,
      },
      {
        type: "heading",
        content: "7) Practice exercise — streaming multi-tool capstone agent",
      },
      {
        type: "paragraph",
        content:
          "Define tools, create the capstone agent, stream the mixed question, and paste the full trail into Google Doc Day 3 Capstone.",
      },
      {
        type: "jupyter-notebook",
        installCmd: INSTALL,
        notebookCells: [
          {
            label: "Cell 1 — Install + key + LLM",
            code: AGENT_BOOT,
          },
          {
            label: "Cell 2 — Real + custom tools",
            code: `from langchain_core.tools import tool
from langchain_community.tools import WikipediaQueryRun, DuckDuckGoSearchRun
from langchain_community.utilities import WikipediaAPIWrapper

wiki = WikipediaQueryRun(api_wrapper=WikipediaAPIWrapper(top_k_results=1, doc_content_chars_max=500))
ddg = DuckDuckGoSearchRun()

FAQ = {
    "promo approval": "Discounts above 12% need Regional Manager written approval before shelf tags go live.",
    "return policy": "Unopened perishables: same-day store credit with receipt.",
    "leave": "Full-time staff: 12 casual leave days per FY.",
}

@tool
def wikipedia_search(query: str) -> str:
    """Search Wikipedia for a short factual summary."""
    return wiki.run(query)

@tool
def duckduckgo_search(query: str) -> str:
    """Search the live web with DuckDuckGo."""
    return ddg.run(query)

@tool
def calculator(expression: str) -> str:
    """Evaluate basic arithmetic like '0.18 * 500000'."""
    allowed = set("0123456789+-*/(). ")
    if not expression or any(ch not in allowed for ch in expression):
        return "Error: only basic arithmetic allowed"
    return str(round(float(eval(expression, {"__builtins__": {}}, {})), 6))

@tool
def company_faq(topic: str) -> str:
    """Look up FreshBasket FAQ (promo approval, return policy, leave)."""
    key = (topic or "").strip().lower()
    for k, v in FAQ.items():
        if k in key or key in k:
            return f"{k}: {v}"
    return "Error: topic not in FAQ"

print("Tools ready")`,
          },
          {
            label: "Cell 3 — Capstone streaming agent",
            code: `agent = create_react_agent(
    llm,
    tools=[wikipedia_search, duckduckgo_search, calculator, company_faq],
    prompt=(
        "You are FreshBasket Business Analyst Bot. "
        "Use company_faq for FreshBasket policy, calculator for math, "
        "wikipedia_search for definitions, duckduckgo_search for open-web context. "
        "Never invent policy or numbers. Keep answers under 120 words."
    ),
)

print("Capstone agent ready")`,
          },
          {
            label: "Cell 4 — Practice: stream mixed question",
            code: `mixed = (
    "Define gross margin using Wikipedia. "
    "Check FreshBasket promo approval in the FAQ — is 18% allowed if the cap is 12%? "
    "Compute 0.18 * 500000 with the calculator."
)

print("=== CAPSTONE STREAMING AGENT ===")
print("Q:", mixed, "\\n")

for step in agent.stream(
    {"messages": [("user", mixed)]},
    stream_mode="values",
):
    step["messages"][-1].pretty_print()

print("\\n>>> Paste the FULL streamed trail into Google Doc Day 3 Capstone")`,
          },
        ],
      },
      {
        type: "setup-checklist",
        content: "Capstone checklist",
        setupSteps: [
          {
            title: "Ran Cell 2 — real + custom tools defined",
            description: "Wikipedia, DuckDuckGo, calculator, company_faq ready.",
          },
          {
            title: "Ran Cell 3 — capstone agent created",
            description: "All four tools registered on create_react_agent.",
          },
          {
            title: "Ran Cell 4 — streamed mixed question (tools visible)",
            description: "pretty_print trail shows multiple tool uses.",
          },
          {
            title: "Pasted full stream trail into Google Doc Day 3 Capstone",
            description: "Capstone evidence = complete tool trail.",
            link: { label: "Google Docs", url: DOC },
          },
        ],
      },
    ],
    keyTakeaways: [
      "Real API tools first, then custom business tools — same agent.stream pattern.",
      "Do not write manual tool for-loops or ask_* wrappers.",
      "Capstone deliverable = one mixed question with a live streamed tool trail.",
    ],
  },
};
