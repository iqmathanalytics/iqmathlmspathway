import type { NotebookCell } from "@/lib/types";

export const GROQ_INSTALL = "!pip install groq";
export const LANGCHAIN_INSTALL = "!pip install langchain langchain-groq";

const API_KEY_SETUP = `import os
os.environ["GROQ_API_KEY"] = "your-groq-api-key-here"  # replace with your key
from groq import Groq
client = Groq()`;

// ── LangChain module ────────────────────────────────────────────────────────

export const NOTEBOOK_CELLS: Record<string, NotebookCell[]> = {

  // ── Type C: Chat Models and Providers ──────────────────────────────────
  "ai-lc-t3": [
    {
      label: "Cell 1 — Install",
      cellType: "install",
      code: "!pip install langchain langchain-groq",
    },
    {
      label: "Cell 2 — Initialize a chat model",
      code: `import os
from langchain.chat_models import init_chat_model

os.environ["GROQ_API_KEY"] = "your-groq-api-key-here"

# LangChain wraps any provider behind one interface
model = init_chat_model("llama3-8b-8192", model_provider="groq")

response = model.invoke("Explain Python lists in one sentence.")
print(response.content)`,
    },
    {
      label: "Cell 3 — Swap providers without rewriting logic",
      code: `# Change only the provider string — the rest stays identical
# model = init_chat_model("gpt-4o-mini", model_provider="openai")
# model = init_chat_model("claude-3-haiku-20240307", model_provider="anthropic")

# Both calls look the same regardless of provider
for question in ["What are Python dicts?", "What is LangChain?"]:
    response = model.invoke(question)
    print(f"Q: {question}")
    print(f"A: {response.content[:120]}\\n")`,
    },
  ],

  // ── Type C: Prompt Templates ────────────────────────────────────────────
  "ai-lc-t4": [
    {
      label: "Cell 1 — Install",
      cellType: "install",
      code: "!pip install langchain langchain-groq",
    },
    {
      label: "Cell 2 — Build a reusable prompt template",
      code: `import os
from langchain_core.prompts import ChatPromptTemplate
from langchain.chat_models import init_chat_model

os.environ["GROQ_API_KEY"] = "your-groq-api-key-here"

# Template separates fixed instructions from changing inputs
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a friendly {role}."),
    ("human", "Explain {topic} in {format}."),
])

model = init_chat_model("llama3-8b-8192", model_provider="groq")
chain = prompt | model

response = chain.invoke({
    "role": "Python tutor",
    "topic": "list comprehensions",
    "format": "three short bullets",
})
print(response.content)`,
    },
    {
      label: "Cell 3 — Reuse the same template with different variables",
      code: `# Same template, different variables — no code rewrite needed
response2 = chain.invoke({
    "role": "data science tutor",
    "topic": "pandas DataFrames",
    "format": "two sentences",
})
print(response2.content)`,
    },
  ],

  // ── Type C: LCEL Chains and Output Parsers ──────────────────────────────
  "ai-lc-t5": [
    {
      label: "Cell 1 — Install",
      cellType: "install",
      code: "!pip install langchain langchain-groq",
    },
    {
      label: "Cell 2 — Compose a chain with the pipe operator",
      code: `import os
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain.chat_models import init_chat_model

os.environ["GROQ_API_KEY"] = "your-groq-api-key-here"

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant."),
    ("human", "{question}"),
])
model = init_chat_model("llama3-8b-8192", model_provider="groq")
parser = StrOutputParser()

# The pipe composes steps: prompt → model → parser
chain = prompt | model | parser

result = chain.invoke({"question": "What is LangChain in one sentence?"})
print(type(result))   # str — parser converts AIMessage to plain text
print(result)`,
    },
    {
      label: "Cell 3 — Chain multiple transformations",
      code: `from langchain_core.output_parsers import StrOutputParser

# Chain two calls: first summarize, then ask a follow-up
summary_chain = prompt | model | StrOutputParser()

followup_prompt = ChatPromptTemplate.from_messages([
    ("human", "Based on: '{context}', give one practical example."),
])

full_chain = summary_chain | (lambda text: followup_prompt.invoke({"context": text})) | model | StrOutputParser()
print(full_chain.invoke({"question": "What are LangChain output parsers?"}))`,
    },
  ],

  // ── Type C: Agents and Tools ────────────────────────────────────────────
  "ai-lc-t6": [
    {
      label: "Cell 1 — Install",
      cellType: "install",
      code: "!pip install groq",
    },
    {
      label: "Cell 2 — Define a tool and register it",
      code: `import os, json
from groq import Groq

os.environ["GROQ_API_KEY"] = "your-groq-api-key-here"
client = Groq()

# Your Python function becomes a "tool" the model can call
def get_weather(city: str) -> str:
    return f"It is sunny and 28°C in {city}."

tools = [{
    "type": "function",
    "function": {
        "name": "get_weather",
        "description": "Get the current weather for a city.",
        "parameters": {
            "type": "object",
            "properties": {"city": {"type": "string"}},
            "required": ["city"],
        },
    },
}]`,
    },
    {
      label: "Cell 3 — Let the model call your tool",
      code: `response = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[{"role": "user", "content": "What is the weather in Mumbai?"}],
    tools=tools,
)

msg = response.choices[0].message
if msg.tool_calls:
    call = msg.tool_calls[0]
    args = json.loads(call.function.arguments)
    result = get_weather(args["city"])
    print(f"Tool called: {call.function.name}({args})")
    print(f"Tool result: {result}")

    # Send observation back so the model can form a final answer
    followup = client.chat.completions.create(
        model="llama3-8b-8192",
        messages=[
            {"role": "user", "content": "What is the weather in Mumbai?"},
            {"role": "assistant", "content": "", "tool_calls": msg.tool_calls},
            {"role": "tool", "tool_call_id": call.id, "content": result},
        ],
    )
    print("\\nFinal answer:", followup.choices[0].message.content)`,
    },
  ],

  // ── Type C: LangSmith Testing & Monitoring ──────────────────────────────
  "ai-lc-t7": [
    {
      label: "Cell 1 — Install",
      cellType: "install",
      code: "!pip install langchain langchain-groq langsmith",
    },
    {
      label: "Cell 2 — Enable LangSmith tracing",
      code: `import os

# Get your free key at https://smith.langchain.com
os.environ["LANGSMITH_TRACING"] = "true"
os.environ["LANGSMITH_API_KEY"] = "your-langsmith-api-key"
os.environ["LANGSMITH_PROJECT"] = "agentic-ai-course"
os.environ["GROQ_API_KEY"] = "your-groq-api-key-here"

from langchain.chat_models import init_chat_model
model = init_chat_model("llama3-8b-8192", model_provider="groq")

# Every call below will be traced automatically in LangSmith
response = model.invoke("What is retrieval-augmented generation?")
print(response.content)
print("\\nCheck traces at: https://smith.langchain.com")`,
    },
    {
      label: "Cell 3 — Simulate an evaluation dataset",
      code: `# Evaluate consistency: same question, compare different answers
test_cases = [
    {"question": "What is LangChain?", "keyword": "framework"},
    {"question": "What does a prompt template do?", "keyword": "variable"},
]

for case in test_cases:
    res = model.invoke(case["question"])
    passed = case["keyword"].lower() in res.content.lower()
    print(f"Q: {case['question']}")
    print(f"Keyword '{case['keyword']}' found: {'PASS' if passed else 'FAIL'}")
    print()`,
    },
  ],

  // ── Prompt Engineering ──────────────────────────────────────────────────

  "ai-m2-t2": [
    {
      label: "Cell 1 — Install",
      cellType: "install",
      code: GROQ_INSTALL,
    },
    {
      label: "Cell 2 — System prompt vs user message",
      code: `${API_KEY_SETUP}

# System prompt sets the model's persona and rules
# User message asks the actual question
response = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[
        {"role": "system", "content": "You are a concise Python tutor. Answer in 2 sentences max."},
        {"role": "user",   "content": "What are Python lists?"},
    ],
)
print(response.choices[0].message.content)`,
    },
    {
      label: "Cell 3 — Change persona, same question",
      code: `# Swap system prompt → completely different response style
response2 = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[
        {"role": "system", "content": "You are a formal academic. Use precise technical language."},
        {"role": "user",   "content": "What are Python lists?"},
    ],
)
print(response2.choices[0].message.content)`,
    },
  ],

  "ai-m2-t3": [
    {
      label: "Cell 1 — Install",
      cellType: "install",
      code: GROQ_INSTALL,
    },
    {
      label: "Cell 2 — Few-shot classification",
      code: `${API_KEY_SETUP}

# Give examples first, then ask for the same pattern on new input
response = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[
        {"role": "system", "content": "Classify sentiment. Reply with only: positive, negative, or neutral."},
        {"role": "user",   "content": (
            "Text: 'Great work!' → positive\\n"
            "Text: 'This is broken.' → negative\\n"
            "Text: 'It was okay.' → neutral\\n"
            "Text: 'The lesson was very helpful!' →"
        )},
    ],
)
print(response.choices[0].message.content)`,
    },
    {
      label: "Cell 3 — Format extraction with examples",
      code: `# Use examples to enforce a structured output format
response2 = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[
        {"role": "system", "content": "Extract topic and difficulty. Format: Topic: X | Difficulty: Y"},
        {"role": "user",   "content": (
            "Lesson: 'Python variables for beginners' → Topic: Python variables | Difficulty: beginner\\n"
            "Lesson: 'Building RAG pipelines with LangChain' →"
        )},
    ],
)
print(response2.choices[0].message.content)`,
    },
  ],

  "ai-m2-t4": [
    {
      label: "Cell 1 — Install",
      cellType: "install",
      code: GROQ_INSTALL,
    },
    {
      label: "Cell 2 — Chain-of-thought for a math problem",
      code: `${API_KEY_SETUP}

response = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[
        {"role": "system", "content": "Think step by step, then give a final answer on the last line."},
        {"role": "user",   "content": (
            "A course has 5 modules. Each module has 4 topics. "
            "Each topic takes 10 minutes. How long does the full course take in hours?"
        )},
    ],
)
print(response.choices[0].message.content)`,
    },
    {
      label: "Cell 3 — Reasoning for a code decision",
      code: `response2 = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[
        {"role": "system", "content": "Reason through the trade-offs, then give a short recommendation."},
        {"role": "user",   "content": "Should I use a Python list or a dictionary to store student names and scores?"},
    ],
)
print(response2.choices[0].message.content)`,
    },
  ],

  "ai-m2-t5": [
    {
      label: "Cell 1 — Install",
      cellType: "install",
      code: GROQ_INSTALL,
    },
    {
      label: "Cell 2 — Vague prompt vs specific prompt",
      code: `${API_KEY_SETUP}

# Vague prompt
bad = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[{"role": "user", "content": "Explain Python."}],
    max_tokens=80,
)
print("VAGUE:", bad.choices[0].message.content[:200])
print()

# Specific prompt with audience, format, constraint
good = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[{"role": "user", "content": (
        "Explain Python variables to a 10-year-old in exactly 3 bullet points. "
        "Each bullet must be one sentence."
    )}],
    max_tokens=120,
)
print("SPECIFIC:", good.choices[0].message.content)`,
    },
    {
      label: "Cell 3 — Constrain the output format",
      code: `# Ask for JSON to get structured, parseable output
import json

response = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[{"role": "user", "content": (
        "List 3 Python data types. "
        'Return JSON only: {"types": [{"name": "...", "example": "..."}]}'
    )}],
)
try:
    data = json.loads(response.choices[0].message.content)
    for t in data["types"]:
        print(f"{t['name']}: {t['example']}")
except json.JSONDecodeError:
    print(response.choices[0].message.content)`,
    },
  ],

  // ── Groq API module ─────────────────────────────────────────────────────

  "ai-m3-t2": [
    {
      label: "Cell 1 — Install",
      cellType: "install",
      code: GROQ_INSTALL,
    },
    {
      label: "Cell 2 — Your first Groq API call",
      code: `import os
from groq import Groq

os.environ["GROQ_API_KEY"] = "your-groq-api-key-here"
client = Groq()

response = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[
        {"role": "user", "content": "Explain what an API is in one sentence."},
    ],
)

# Extract the reply text
print(response.choices[0].message.content)`,
    },
    {
      label: "Cell 3 — Add a system prompt",
      code: `# Make the model behave a specific way with a system prompt
response2 = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[
        {"role": "system", "content": "You are a Python tutor. Only answer Python questions."},
        {"role": "user",   "content": "What is a Python dictionary?"},
    ],
)
print(response2.choices[0].message.content)`,
    },
  ],

  "ai-m3-t3": [
    {
      label: "Cell 1 — Install",
      cellType: "install",
      code: GROQ_INSTALL,
    },
    {
      label: "Cell 2 — Inspect the full response object",
      code: `${API_KEY_SETUP}

response = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[{"role": "user", "content": "What is Python?"}],
)

# Content is what you display
print("Content:", response.choices[0].message.content[:100])

# finish_reason tells you why generation stopped
print("Finish reason:", response.choices[0].finish_reason)

# Token usage helps estimate cost and context size
print("Input tokens:", response.usage.prompt_tokens)
print("Output tokens:", response.usage.completion_tokens)
print("Total tokens:", response.usage.total_tokens)`,
    },
    {
      label: "Cell 3 — Handle missing content safely",
      code: `def safe_reply(response) -> str:
    choice = response.choices[0]
    if choice.finish_reason == "stop":
        return choice.message.content or ""
    if choice.finish_reason == "length":
        return (choice.message.content or "") + "... [truncated]"
    return "[Unexpected finish reason]"

print(safe_reply(response))`,
    },
  ],

  "ai-m3-t5": [
    {
      label: "Cell 1 — Install",
      cellType: "install",
      code: GROQ_INSTALL,
    },
    {
      label: "Cell 2 — Retry on rate limit with exponential backoff",
      code: `import os, time
from groq import Groq, RateLimitError, APIError

os.environ["GROQ_API_KEY"] = "your-groq-api-key-here"
client = Groq()

def ask_with_retry(question: str, retries: int = 3) -> str:
    for attempt in range(retries):
        try:
            response = client.chat.completions.create(
                model="llama3-8b-8192",
                messages=[{"role": "user", "content": question}],
            )
            return response.choices[0].message.content
        except RateLimitError:
            wait = 2 ** attempt          # 1s, 2s, 4s …
            print(f"Rate limited. Retrying in {wait}s…")
            time.sleep(wait)
        except APIError as e:
            return f"API error: {e}"
    return "Failed after all retries."

print(ask_with_retry("What is LangChain?"))`,
    },
    {
      label: "Cell 3 — Validate the key before calling",
      code: `def validate_api_key() -> bool:
    key = os.environ.get("GROQ_API_KEY", "")
    if not key or not key.startswith("gsk_"):
        print("GROQ_API_KEY looks invalid. Check your .env file.")
        return False
    print("API key looks valid.")
    return True

validate_api_key()`,
    },
  ],

  // ── Building a Chatbot ──────────────────────────────────────────────────

  "ai-m4-t1": [
    {
      label: "Cell 1 — Install",
      cellType: "install",
      code: GROQ_INSTALL,
    },
    {
      label: "Cell 2 — Build and maintain a conversation history",
      code: `${API_KEY_SETUP}

# The model is stateless — your app must send history on every turn
messages = [
    {"role": "system", "content": "You are a helpful Python tutor."},
]

def chat(user_message: str) -> str:
    messages.append({"role": "user", "content": user_message})
    response = client.chat.completions.create(
        model="llama3-8b-8192",
        messages=messages,
    )
    reply = response.choices[0].message.content
    messages.append({"role": "assistant", "content": reply})
    return reply

print(chat("What are Python lists?"))
print()
print(chat("Can you give me a short code example?"))   # model remembers context
print(f"\\nHistory length: {len(messages)} messages")`,
    },
    {
      label: "Cell 3 — Trim history to stay within token limits",
      code: `MAX_MESSAGES = 10   # keep system + last N exchanges

def trim_history(msgs: list, max_turns: int = MAX_MESSAGES) -> list:
    system = [m for m in msgs if m["role"] == "system"]
    rest   = [m for m in msgs if m["role"] != "system"]
    return system + rest[-max_turns * 2:]   # each turn = user + assistant

print("Before trim:", len(messages), "messages")
messages[:] = trim_history(messages)
print("After trim:", len(messages), "messages")`,
    },
  ],

  "ai-m4-t2": [
    {
      label: "Cell 1 — Install",
      cellType: "install",
      code: GROQ_INSTALL,
    },
    {
      label: "Cell 2 — Interactive chatbot loop",
      code: `import os
from groq import Groq

os.environ["GROQ_API_KEY"] = "your-groq-api-key-here"
client = Groq()

messages = [{"role": "system", "content": "You are a helpful assistant. Be concise."}]

print("Python Tutor Bot — type 'quit' to exit\\n")
while True:
    user_input = input("You: ").strip()
    if user_input.lower() in ("quit", "exit", "q", ""):
        print("Goodbye!")
        break
    messages.append({"role": "user", "content": user_input})
    response = client.chat.completions.create(
        model="llama3-8b-8192",
        messages=messages,
    )
    reply = response.choices[0].message.content
    messages.append({"role": "assistant", "content": reply})
    print(f"Bot: {reply}\\n")`,
    },
  ],

  "ai-m4-t4": [
    {
      label: "Cell 1 — Install",
      cellType: "install",
      code: GROQ_INSTALL,
    },
    {
      label: "Cell 2 — Stream a response word by word",
      code: `import os
from groq import Groq

os.environ["GROQ_API_KEY"] = "your-groq-api-key-here"
client = Groq()

stream = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[{"role": "user", "content": "Explain Python generators step by step."}],
    stream=True,
)

print("Streaming response:")
for chunk in stream:
    delta = chunk.choices[0].delta.content
    if delta:
        print(delta, end="", flush=True)
print()   # newline after streaming ends`,
    },
    {
      label: "Cell 3 — Collect streamed text into a variable",
      code: `full_text = ""

stream2 = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[{"role": "user", "content": "What is LangChain?"}],
    stream=True,
)

for chunk in stream2:
    delta = chunk.choices[0].delta.content or ""
    full_text += delta

print("Collected reply:", full_text[:200])`,
    },
  ],

  "ai-m4-t5": [
    {
      label: "Cell 1 — Install",
      cellType: "install",
      code: GROQ_INSTALL,
    },
    {
      label: "Cell 2 — Compare temperature values",
      code: `${API_KEY_SETUP}

question = "Write a one-line description of Python."

low = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[{"role": "user", "content": question}],
    temperature=0.0,    # deterministic, factual
    max_tokens=60,
)
high = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[{"role": "user", "content": question}],
    temperature=1.2,    # more creative, varied
    max_tokens=60,
)

print("temperature=0.0:", low.choices[0].message.content)
print("temperature=1.2:", high.choices[0].message.content)`,
    },
    {
      label: "Cell 3 — Control length with max_tokens",
      code: `short = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[{"role": "user", "content": "Explain machine learning."}],
    max_tokens=30,
)
long_ = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[{"role": "user", "content": "Explain machine learning."}],
    max_tokens=200,
)

print("Short (30 tokens):", short.choices[0].message.content)
print()
print("Long (200 tokens):", long_.choices[0].message.content)`,
    },
  ],

  // ── Agentic Patterns ────────────────────────────────────────────────────

  "ai-m5-t2": [
    {
      label: "Cell 1 — Install",
      cellType: "install",
      code: GROQ_INSTALL,
    },
    {
      label: "Cell 2 — Define a tool and its schema",
      code: `import os, json
from groq import Groq

os.environ["GROQ_API_KEY"] = "your-groq-api-key-here"
client = Groq()

# Your Python function is the "tool implementation"
def count_words(text: str) -> int:
    return len(text.split())

# The schema describes it to the model
tools = [{
    "type": "function",
    "function": {
        "name": "count_words",
        "description": "Count the number of words in a text string.",
        "parameters": {
            "type": "object",
            "properties": {"text": {"type": "string", "description": "Text to count"}},
            "required": ["text"],
        },
    },
}]

response = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[{"role": "user", "content": "How many words are in 'Python is great for AI development'?"}],
    tools=tools,
)

msg = response.choices[0].message
if msg.tool_calls:
    call = msg.tool_calls[0]
    args = json.loads(call.function.arguments)
    result = count_words(args["text"])
    print(f"Tool: {call.function.name}({args})")
    print(f"Result: {result} words")`,
    },
  ],

  "ai-m5-t3": [
    {
      label: "Cell 1 — Install",
      cellType: "install",
      code: GROQ_INSTALL,
    },
    {
      label: "Cell 2 — Build an agent loop",
      code: `import os, json
from groq import Groq

os.environ["GROQ_API_KEY"] = "your-groq-api-key-here"
client = Groq()

def search_docs(query: str) -> str:
    kb = {
        "langchain": "LangChain is a framework for building LLM-powered apps.",
        "groq": "Groq provides fast LLM inference via a simple API.",
        "python": "Python is a high-level programming language.",
    }
    for key, value in kb.items():
        if key in query.lower():
            return value
    return "No document found."

tools = [{
    "type": "function",
    "function": {
        "name": "search_docs",
        "description": "Search the knowledge base for a topic.",
        "parameters": {
            "type": "object",
            "properties": {"query": {"type": "string"}},
            "required": ["query"],
        },
    },
}]`,
    },
    {
      label: "Cell 3 — Run the agent loop",
      code: `messages = [{"role": "user", "content": "What is Groq? Use the search tool to find out."}]

for step in range(5):           # max 5 steps to prevent infinite loops
    response = client.chat.completions.create(
        model="llama3-8b-8192",
        messages=messages,
        tools=tools,
    )
    msg = response.choices[0].message

    if not msg.tool_calls:
        print("Final answer:", msg.content)
        break

    messages.append({"role": "assistant", "content": msg.content or "", "tool_calls": msg.tool_calls})

    for call in msg.tool_calls:
        args = json.loads(call.function.arguments)
        result = search_docs(args["query"])
        print(f"Step {step+1} — Tool: {call.function.name}({args})")
        print(f"         Observation: {result}")
        messages.append({"role": "tool", "tool_call_id": call.id, "content": result})`,
    },
  ],

  // ── Real-World AI ───────────────────────────────────────────────────────

  "ai-m6-t1": [
    {
      label: "Cell 1 — Install",
      cellType: "install",
      code: GROQ_INSTALL,
    },
    {
      label: "Cell 2 — Retrieve relevant chunks and answer",
      code: `import os
from groq import Groq

os.environ["GROQ_API_KEY"] = "your-groq-api-key-here"
client = Groq()

# Document store (real RAG uses embeddings + vector DB)
documents = [
    "Python lists are ordered, mutable collections that store mixed data types.",
    "Python dictionaries store key-value pairs for fast lookups by key.",
    "Python functions are defined with 'def' and return values using 'return'.",
    "LangChain is a framework for composing LLM applications from reusable parts.",
    "Groq provides fast LLM inference using a simple REST API.",
]

def simple_retrieve(query: str, docs: list, top_k: int = 2) -> str:
    # Keyword match — real RAG uses cosine similarity on embeddings
    scored = [(sum(w in d.lower() for w in query.lower().split()), d) for d in docs]
    top = sorted(scored, reverse=True)[:top_k]
    return "\\n".join(d for _, d in top if _ > 0) or "No relevant documents found."`,
    },
    {
      label: "Cell 3 — Grounded answer from retrieved context",
      code: `query = "How do Python dictionaries work?"
context = simple_retrieve(query, documents)
print("Retrieved context:")
print(context)
print()

response = client.chat.completions.create(
    model="llama3-8b-8192",
    messages=[
        {"role": "system", "content": f"Answer using ONLY the context below. If the answer is not in the context, say so.\\n\\nContext:\\n{context}"},
        {"role": "user",   "content": query},
    ],
)
print("Answer:")
print(response.choices[0].message.content)`,
    },
  ],

  "ai-m6-t3": [
    {
      label: "Cell 1 — Install",
      cellType: "install",
      code: GROQ_INSTALL,
    },
    {
      label: "Cell 2 — Define agent roles",
      code: `import os
from groq import Groq

os.environ["GROQ_API_KEY"] = "your-groq-api-key-here"
client = Groq()

def run_agent(role: str, task: str, max_tokens: int = 150) -> str:
    response = client.chat.completions.create(
        model="llama3-8b-8192",
        messages=[
            {"role": "system", "content": f"You are a {role}. Be brief and focused."},
            {"role": "user",   "content": task},
        ],
        max_tokens=max_tokens,
    )
    return response.choices[0].message.content`,
    },
    {
      label: "Cell 3 — Orchestrate the agents",
      code: `topic = "how to use LangChain with Groq"

# Agent 1 — Researcher
facts = run_agent("researcher", f"List 3 key facts about: {topic}")
print("RESEARCHER:\\n", facts, "\\n")

# Agent 2 — Writer uses the researcher's output
draft = run_agent("technical writer", f"Write a 2-sentence intro using these facts:\\n{facts}")
print("WRITER:\\n", draft, "\\n")

# Agent 3 — Editor reviews the draft
feedback = run_agent("editor", f"Give one concrete improvement for this intro:\\n{draft}")
print("EDITOR:\\n", feedback)`,
    },
  ],

  // ── Full Project: Document Q&A Bot ─────────────────────────────────────
  "ai-m6-t2": [
    {
      label: "Cell 1 — Install",
      cellType: "install",
      code: "!pip install groq",
    },
    {
      label: "Cell 2 — Setup and document store",
      code: `import os
from groq import Groq

os.environ["GROQ_API_KEY"] = "your-groq-api-key-here"
client = Groq()

# Simulated document chunks
# In a real project: load a PDF with PyPDFLoader, split into chunks, embed them
chunks = [
    "Python lists are ordered, mutable sequences that allow mixed data types.",
    "Python dictionaries map keys to values and offer O(1) average lookup time.",
    "LangChain is a framework for composing LLM applications from reusable building blocks.",
    "Groq provides fast inference for open-source LLMs through a REST API.",
    "Retrieval-Augmented Generation (RAG) adds external knowledge to LLM answers.",
    "A vector database stores embeddings and retrieves the most semantically similar chunks.",
]
print(f"Loaded {len(chunks)} document chunks.")`,
    },
    {
      label: "Cell 3 — Retrieval function",
      code: `def retrieve(query: str, docs: list, top_k: int = 2) -> str:
    words = query.lower().split()
    scored = [(sum(w in d.lower() for w in words), d) for d in docs]
    top = sorted(scored, reverse=True)[:top_k]
    relevant = [d for score, d in top if score > 0]
    return "\\n".join(relevant) if relevant else "No relevant content found."

# Test retrieval
q = "What is Groq?"
print("Query:", q)
print("Retrieved:\\n", retrieve(q, chunks))`,
    },
    {
      label: "Cell 4 — Grounded Q&A with the model",
      code: `def answer_from_docs(question: str) -> str:
    context = retrieve(question, chunks)
    response = client.chat.completions.create(
        model="llama3-8b-8192",
        messages=[
            {"role": "system", "content": (
                "You are a helpful document assistant. "
                "Answer ONLY using the context provided. "
                "If the answer is not in the context, say 'I don\\'t have that information.'\\n\\n"
                f"Context:\\n{context}"
            )},
            {"role": "user", "content": question},
        ],
    )
    return response.choices[0].message.content

# Try different questions
for q in ["What is LangChain?", "How does RAG work?", "What is the capital of France?"]:
    print(f"Q: {q}")
    print(f"A: {answer_from_docs(q)}\\n")`,
    },
    {
      label: "Cell 5 — Conversational Q&A loop",
      code: `history = []

def chat_with_docs(user_question: str) -> str:
    context = retrieve(user_question, chunks)
    history.append({"role": "user", "content": user_question})
    messages = [
        {"role": "system", "content": f"Answer using only this context:\\n{context}"},
        *history
    ]
    response = client.chat.completions.create(
        model="llama3-8b-8192",
        messages=messages,
    )
    reply = response.choices[0].message.content
    history.append({"role": "assistant", "content": reply})
    return reply

print(chat_with_docs("What is RAG?"))
print()
print(chat_with_docs("Can you explain it differently?"))  # uses history`,
    },
  ],
};
