import type { TopicLesson } from "@/lib/types";

export const agenticAiModule3Lessons: Record<string, TopicLesson> = {
  "ai-m3-t1": {
    topicId: "ai-m3-t1",
    intro:
      "Groq offers free API access to fast open-source LLMs. You'll need a free API key to run the code in this module.",
    blocks: [
      {
        type: "heading",
        content: "What is an API Key?",
      },
      {
        type: "paragraph",
        content:
          "An API key is a long random string that identifies you when you make requests to an AI provider's servers. Think of it like a password that proves you have an account and lets the provider track your usage. Without an API key every request is rejected.",
      },
      {
        type: "heading",
        content: "Getting Your Free Groq API Key",
      },
      {
        type: "list",
        items: [
          "Go to console.groq.com and click Sign Up (free, no credit card needed)",
          "Verify your email address",
          "In the dashboard, click API Keys → Create API Key",
          "Copy the key immediately — it will only be shown once",
          "Store it somewhere safe (password manager, .env file, secrets manager)",
        ],
      },
      {
        type: "heading",
        content: "Keeping Your API Key Secure",
      },
      {
        type: "paragraph",
        content:
          "API keys are credentials — treat them like passwords. If someone else gets your key they can make requests billed to your account or consume your free quota. The most common mistake beginners make is accidentally pushing a key to GitHub. A bot scans public GitHub repos constantly for exposed API keys.",
      },
      {
        type: "list",
        items: [
          "Store your key in a .env file — never hardcode it directly in your Python script",
          "Add .env to your .gitignore file so it is never committed",
          "Use os.environ.get('GROQ_API_KEY') to read it in your code",
          "If you accidentally expose a key, revoke it immediately in the provider's dashboard",
          "Never paste your key into a chat, forum, or screenshot",
        ],
      },
      {
        type: "tip",
        content:
          "On this platform the Groq playground (in Module 4) lets you test API calls directly in the browser. Your key is sent directly from your browser to Groq — it is never stored on our servers.",
      },
      {
        type: "code",
        code: `# WRONG — never do this:
client = Groq(api_key="gsk_abc123...")  # key exposed in code!

# CORRECT — read from environment variable:
import os
from groq import Groq

api_key = os.environ.get("GROQ_API_KEY")
if not api_key:
    raise ValueError("GROQ_API_KEY not set. Add it to your .env file.")

client = Groq(api_key=api_key)

# Your .env file (never commit this):
# GROQ_API_KEY=gsk_your_real_key_here`,
      },
      {
        type: "practice",
        practiceLabel: "Setup check",
        practicePrompt:
          "Run this to confirm your Python environment is ready for the Groq SDK.",
        starterCode:
          '# Before calling the Groq API you need:\n# 1. A free Groq account → console.groq.com\n# 2. An API key from the Groq console\n# 3. The groq Python package: pip install groq\n\n# Let\'s verify the package is available:\ntry:\n    import groq\n    print("✅ groq package is installed")\nexcept ImportError:\n    print("❌ Run: pip install groq")\n\nprint("\\nGet your free API key at: https://console.groq.com")',
      },
    ],
    keyTakeaways: [
      "Groq provides a free tier with generous rate limits — perfect for learning.",
      "Your API key is a secret — never commit it to GitHub or share it publicly.",
      "Store API keys in environment variables or a .env file, not in your code.",
    ],
  },

  "ai-m3-t2": {
    topicId: "ai-m3-t2",
    intro:
      "With your API key ready, you can make your first call to an LLM in just 8 lines of Python. The Groq SDK is compatible with the OpenAI SDK, so the patterns you learn here transfer everywhere.",
    blocks: [
      {
        type: "heading",
        content: "The 8-Line Groq API Call",
      },
      {
        type: "paragraph",
        content:
          "Every call to Groq follows the same pattern: create a client once, call chat.completions.create with a model name and a list of messages, and read the response from choices[0].message.content. That's it. Once you understand this structure, adding memory, streaming, or error handling is just small additions on top.",
      },
      {
        type: "code",
        code: `from groq import Groq
import os

# 1. Create client (do this once and reuse)
client = Groq(api_key=os.environ.get("GROQ_API_KEY"))

# 2. Call the model
response = client.chat.completions.create(
    model="llama3-70b-8192",        # model to use
    messages=[
        {
            "role": "system",
            "content": "You are a helpful assistant."
        },
        {
            "role": "user",
            "content": "What is Python in one sentence?"
        }
    ],
    temperature=0.7,                # 0 = precise, 1+ = creative
    max_tokens=200                  # max length of response
)

# 3. Extract the text
answer = response.choices[0].message.content
print(answer)`,
      },
      {
        type: "heading",
        content: "Understanding Each Parameter",
      },
      {
        type: "list",
        items: [
          "model — which LLM to use ('llama3-70b-8192' is the default, best general-purpose model)",
          "messages — the conversation history as a list of role/content dicts",
          "temperature — controls randomness (0 = deterministic, 0.7 = balanced, 1+ = creative)",
          "max_tokens — maximum number of tokens in the response (prevents unexpectedly long answers)",
          "stream — set to True to receive response word-by-word (covered in Module 4)",
        ],
      },
      {
        type: "heading",
        content: "Installing the Groq Package",
      },
      {
        type: "code",
        code: `# Install via pip (run in your terminal, not in Python):
# pip install groq

# Or add to requirements.txt:
# groq>=0.4.0

# Verify installation:
import groq
print(f"groq version: {groq.__version__}")`,
      },
      {
        type: "tip",
        content:
          "The browser IDE on this page does not have the groq package installed. Use it to study the code structure. To run real API calls, copy the code to your local machine where you have run pip install groq.",
      },
      {
        type: "practice",
        practiceLabel: "First API call",
        practicePrompt:
          "This is the template for every Groq API call. Study the structure.",
        starterCode:
          'import os\n# from groq import Groq  # uncomment when running locally\n\n# Structure of a Groq API call:\napi_call_template = """\nfrom groq import Groq\n\nclient = Groq(api_key="YOUR_API_KEY")\n\nresponse = client.chat.completions.create(\n    model="llama3-70b-8192",\n    messages=[\n        {"role": "system", "content": "You are a helpful assistant."},\n        {"role": "user",   "content": "What is Python in one sentence?"}\n    ]\n)\n\nprint(response.choices[0].message.content)\n"""\n\nprint("Groq API call template:")\nprint(api_call_template)',
      },
    ],
    keyTakeaways: [
      "Create a Groq client once and reuse it for all your calls.",
      "The messages list follows the role/content format: system, user, assistant.",
      "The response is at response.choices[0].message.content",
    ],
  },

  "ai-m3-t3": {
    topicId: "ai-m3-t3",
    intro:
      "The Groq API returns a JSON response object. Knowing how to navigate it lets you extract exactly what you need — the text, token usage, and more.",
    blocks: [
      {
        type: "heading",
        content: "The Response Object Structure",
      },
      {
        type: "paragraph",
        content:
          "When you call the API, Groq returns a Python object (not raw JSON — the SDK parses it for you). The most important fields are choices (a list of possible responses — usually just one), usage (token counts), and model (which model actually responded). You almost always only need choices[0].message.content.",
      },
      {
        type: "code",
        code: `# What the response object looks like (simplified):
response = {
    "id": "chatcmpl-abc123",
    "model": "llama3-70b-8192",
    "choices": [
        {
            "index": 0,
            "message": {
                "role": "assistant",
                "content": "Python is a high-level programming language."
            },
            "finish_reason": "stop"    # or "length" if max_tokens was hit
        }
    ],
    "usage": {
        "prompt_tokens": 25,           # tokens in your input
        "completion_tokens": 8,        # tokens in the response
        "total_tokens": 33             # total billed tokens
    }
}

# Extract what you need:
text   = response["choices"][0]["message"]["content"]
tokens = response["usage"]["total_tokens"]
reason = response["choices"][0]["finish_reason"]`,
      },
      {
        type: "heading",
        content: "finish_reason — Why the Model Stopped",
      },
      {
        type: "list",
        items: [
          "'stop' — the model naturally finished its response (normal)",
          "'length' — the response was cut off because it hit max_tokens (increase max_tokens if needed)",
          "'content_filter' — the model declined to respond due to safety filters",
          "'tool_calls' — the model wants to call a tool/function (covered in Module 5)",
        ],
      },
      {
        type: "heading",
        content: "Token Usage and Cost",
      },
      {
        type: "paragraph",
        content:
          "Providers charge per token. Groq's free tier is generous for learning, but in production you'll want to monitor token usage. Always log usage.total_tokens for each call so you can track costs. A rough rule: 1,000 tokens ≈ 750 words ≈ 3 pages of text.",
      },
      {
        type: "tip",
        content:
          "Always check finish_reason. If it's 'length', the model was cut off mid-sentence — either increase max_tokens or split your request into smaller pieces.",
      },
      {
        type: "practice",
        practiceLabel: "Parse a response",
        practicePrompt:
          "Simulate parsing a Groq response object (same structure as the real thing).",
        starterCode:
          '# Simulate a Groq API response\nresponse_dict = {\n    "id": "chatcmpl-abc123",\n    "model": "llama3-70b-8192",\n    "choices": [\n        {\n            "index": 0,\n            "message": {\n                "role": "assistant",\n                "content": "Python is a high-level, readable programming language."\n            },\n            "finish_reason": "stop"\n        }\n    ],\n    "usage": {\n        "prompt_tokens": 25,\n        "completion_tokens": 12,\n        "total_tokens": 37\n    }\n}\n\n# Extract the reply\nreply = response_dict["choices"][0]["message"]["content"]\nprint("Reply:", reply)\n\n# Extract token usage\nusage = response_dict["usage"]\nprint(f"Tokens used: {usage[\'total_tokens\']} (prompt: {usage[\'prompt_tokens\']}, reply: {usage[\'completion_tokens\']})")',
      },
    ],
    keyTakeaways: [
      "The actual text is at response.choices[0].message.content",
      "finish_reason tells you why the model stopped: 'stop' = completed normally.",
      "usage shows how many tokens were consumed — important for cost tracking.",
    ],
  },

  "ai-m3-t4": {
    topicId: "ai-m3-t4",
    intro:
      "Groq supports several open-source models. Each has different strengths — knowing when to use which model makes your applications faster and cheaper.",
    blocks: [
      {
        type: "heading",
        content: "Available Models on Groq",
      },
      {
        type: "paragraph",
        content:
          "Groq hosts several open-source models from Meta (LLaMA), Mistral AI (Mixtral), and Google (Gemma). All are available on the free tier. The main tradeoffs are size (more parameters = smarter but slower and more expensive) and context window (how much text fits in one call).",
      },
      {
        type: "visual",
        diagram: {
          title: "Model Size vs Speed Tradeoff",
          nodes: [
            { id: "small", label: "Small (7–8B)", sublabel: "Fastest · Cheapest · Simple tasks" },
            { id: "medium", label: "Medium (34–46B)", sublabel: "Balanced · Most use cases" },
            { id: "large", label: "Large (70B+)", sublabel: "Best quality · Complex reasoning" },
          ],
          variant: "stack",
        },
      },
      {
        type: "heading",
        content: "Model Comparison",
      },
      {
        type: "list",
        items: [
          "llama3-70b-8192 — best general-purpose model; great for reasoning, coding, and complex tasks",
          "llama3-8b-8192 — 10x faster and cheaper; use for simple Q&A or high-volume tasks",
          "mixtral-8x7b-32768 — Mixture of Experts model; 32k context window for long documents",
          "gemma-7b-it — Google's compact model; good for lightweight instruction-following tasks",
          "llama3-groq-70b-8192-tool-use-preview — optimised for function/tool calling (Module 5)",
        ],
      },
      {
        type: "heading",
        content: "When to Use Which Model",
      },
      {
        type: "list",
        items: [
          "Chatbot / tutoring / writing: llama3-70b-8192 (best quality)",
          "Simple classification / data extraction: llama3-8b-8192 (fast and cheap)",
          "Long document analysis (>8k tokens): mixtral-8x7b-32768 (32k context)",
          "Function calling / agents: llama3-groq-70b-8192-tool-use-preview",
          "Quick prototyping: start with 70b, then downgrade to 8b if speed matters",
        ],
      },
      {
        type: "tip",
        content:
          "Always start with llama3-70b-8192 for development and testing. Only switch to a smaller model if you have a speed or cost reason — never prematurely optimise.",
      },
      {
        type: "practice",
        practiceLabel: "Model comparison",
        practicePrompt: "Print the key specs for Groq's available models.",
        starterCode:
          'models = [\n    {\n        "id": "llama3-70b-8192",\n        "params": "70B",\n        "context": 8192,\n        "best_for": "General tasks, reasoning, coding"\n    },\n    {\n        "id": "llama3-8b-8192",\n        "params": "8B",\n        "context": 8192,\n        "best_for": "Fast, simple tasks, low cost"\n    },\n    {\n        "id": "mixtral-8x7b-32768",\n        "params": "46B MoE",\n        "context": 32768,\n        "best_for": "Long documents, multilingual"\n    },\n    {\n        "id": "gemma-7b-it",\n        "params": "7B",\n        "context": 8192,\n        "best_for": "Lightweight tasks"\n    },\n]\n\nprint(f"{"Model":<30} {"Params":<10} {"Context":<10} Best for")\nprint("-" * 75)\nfor m in models:\n    print(f"{m[\'id\']:<30} {m[\'params\']:<10} {m[\'context\']:<10} {m[\'best_for\']}")',
      },
    ],
    keyTakeaways: [
      "llama3-70b-8192 is the best default choice for most tasks.",
      "llama3-8b-8192 is 10x faster and cheaper — use it for simple or high-volume tasks.",
      "mixtral-8x7b-32768 has a 32k context window — ideal for long documents.",
    ],
  },

  "ai-m3-t5": {
    topicId: "ai-m3-t5",
    intro:
      "APIs fail — networks time out, rate limits are hit, and servers go down. Writing resilient error handling from the start saves you from debugging in production.",
    blocks: [
      {
        type: "heading",
        content: "Types of API Errors",
      },
      {
        type: "list",
        items: [
          "429 Rate Limit — you sent too many requests per minute; wait and retry",
          "503 Service Unavailable — Groq's servers are temporarily overloaded; retry with backoff",
          "400 Bad Request — malformed request (e.g. empty messages list); fix the code",
          "401 Unauthorized — invalid API key; check it's set correctly",
          "Timeout — the network request took too long; retry once, then fail gracefully",
        ],
      },
      {
        type: "heading",
        content: "Exponential Backoff",
      },
      {
        type: "paragraph",
        content:
          "Exponential backoff is the industry-standard retry strategy for API calls. Instead of retrying immediately (which can make overload worse), you wait increasing amounts of time: 1 second, then 2 seconds, then 4 seconds, then 8 seconds. This gives the server time to recover while still retrying automatically.",
      },
      {
        type: "visual",
        diagram: {
          title: "Exponential Backoff Timeline",
          nodes: [
            { id: "try1", label: "Attempt 1", sublabel: "Immediate" },
            { id: "wait1", label: "Wait 2s", sublabel: "After failure" },
            { id: "try2", label: "Attempt 2", sublabel: "" },
            { id: "wait2", label: "Wait 4s", sublabel: "After failure" },
            { id: "try3", label: "Attempt 3", sublabel: "" },
            { id: "fail", label: "Give Up", sublabel: "Return error to user" },
          ],
          arrows: [
            { from: "try1", to: "wait1" },
            { from: "wait1", to: "try2" },
            { from: "try2", to: "wait2" },
            { from: "wait2", to: "try3" },
            { from: "try3", to: "fail" },
          ],
          variant: "flow",
        },
      },
      {
        type: "heading",
        content: "Production-Ready Error Handling Pattern",
      },
      {
        type: "code",
        code: `import time
from groq import Groq, APIError, RateLimitError

client = Groq(api_key="YOUR_KEY")

def call_llm(messages: list, max_retries: int = 3) -> str:
    """Resilient Groq API call with exponential backoff."""
    for attempt in range(1, max_retries + 1):
        try:
            response = client.chat.completions.create(
                model="llama3-70b-8192",
                messages=messages,
                max_tokens=500,
            )
            return response.choices[0].message.content

        except RateLimitError:
            if attempt == max_retries:
                raise
            wait = 2 ** attempt   # 2s, 4s, 8s
            print(f"Rate limited. Retrying in {wait}s...")
            time.sleep(wait)

        except APIError as e:
            if e.status_code == 400:
                raise   # bad request — no point retrying
            if attempt == max_retries:
                raise
            time.sleep(2 ** attempt)

    return "Error: all retries exhausted"`,
      },
      {
        type: "tip",
        content:
          "Always set max_tokens. Without it, a single runaway response could consume your entire free quota. 500 tokens is good for most Q&A; increase to 2000+ only for long-form generation tasks.",
      },
      {
        type: "practice",
        practiceLabel: "Error handling template",
        practicePrompt:
          "This is the production-ready error handling pattern for Groq API calls.",
        starterCode:
          'import time\n\ndef call_with_retry(prompt: str, max_retries: int = 3) -> str:\n    """\n    Template for a resilient Groq API call with retry logic.\n    In real code, replace the simulated call with actual groq client call.\n    """\n    for attempt in range(1, max_retries + 1):\n        try:\n            # Simulate API call (replace with real groq call)\n            if attempt < 2:\n                raise ConnectionError("Simulated rate limit error")\n            \n            # Simulated successful response\n            return f"Response to: {prompt[:30]}..."\n            \n        except ConnectionError as e:\n            print(f"Attempt {attempt} failed: {e}")\n            if attempt < max_retries:\n                wait = 2 ** attempt  # exponential backoff\n                print(f"Retrying in {wait}s...")\n                time.sleep(wait)\n            else:\n                return "Error: all retries exhausted"\n\nresult = call_with_retry("Explain Python decorators")\nprint("Result:", result)',
      },
    ],
    keyTakeaways: [
      "Always wrap API calls in try/except blocks.",
      "Use exponential backoff for retries: wait 2s, 4s, 8s between attempts.",
      "Rate limit errors (429) are normal — your app should handle them gracefully.",
    ],
  },
};
