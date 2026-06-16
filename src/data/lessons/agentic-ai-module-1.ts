import type { TopicLesson } from "@/lib/types";

export const agenticAiModule1Lessons: Record<string, TopicLesson> = {
  "ai-m1-t1": {
    topicId: "ai-m1-t1",
    intro:
      "Artificial Intelligence is software that can perform tasks that normally require human thinking — like understanding language, recognising images, or making decisions.",
    blocks: [
      {
        type: "heading",
        content: "What is Artificial Intelligence?",
      },
      {
        type: "paragraph",
        content:
          "Artificial Intelligence (AI) is a branch of computer science focused on building software that can think, learn, and solve problems — tasks that previously required a human brain. Unlike a traditional program that follows fixed rules, an AI system learns patterns from data and uses those patterns to make decisions.",
      },
      {
        type: "visual",
        diagram: {
          title: "From Traditional Code to AI",
          nodes: [
            { id: "rules", label: "Fixed Rules", sublabel: "Written by programmer" },
            { id: "data", label: "Training Data", sublabel: "Millions of examples" },
            { id: "traditional", label: "Traditional Software", sublabel: "→ Predictable output" },
            { id: "ai", label: "AI Model", sublabel: "→ Learned output" },
          ],
          arrows: [
            { from: "rules", to: "traditional" },
            { from: "data", to: "ai" },
          ],
          variant: "compare",
        },
      },
      {
        type: "heading",
        content: "Types of AI You Already Use",
      },
      {
        type: "list",
        items: [
          "Search engines — understand what you mean, not just the exact words",
          "Spam filters — learn what junk mail looks like from millions of examples",
          "Recommendation systems — Netflix, Spotify, and YouTube personalise content for you",
          "Voice assistants — Siri, Alexa, and Google Assistant understand spoken language",
          "LLMs — ChatGPT and Claude hold conversations, write code, and summarise documents",
        ],
      },
      {
        type: "heading",
        content: "Machine Learning vs AI",
      },
      {
        type: "paragraph",
        content:
          "Machine Learning (ML) is the most important branch of AI. Instead of programming explicit rules, you feed the system thousands of examples, and it figures out the rules itself. Deep Learning is a sub-type of ML that uses large neural networks — it is what powers modern LLMs.",
      },
      {
        type: "tip",
        content:
          "AI is the broad idea. Machine Learning is the method. Deep Learning is the technique. LLMs are the result. Every LLM is an AI, but not every AI is an LLM.",
      },
      {
        type: "code",
        code: `# Traditional rule-based approach
def is_spam_rules(email: str) -> bool:
    keywords = ["free money", "click here", "congratulations"]
    return any(kw in email.lower() for kw in keywords)

# AI/ML approach: learns patterns from labelled examples
# (simplified concept — real ML uses numeric features and training)
def is_spam_ai(email: str, model) -> bool:
    features = extract_features(email)   # e.g. word frequencies
    return model.predict(features) == "spam"  # model learned from data`,
      },
      {
        type: "practice",
        practicePrompt:
          "Run this code to see a simple comparison between rule-based AI and the concept of learned AI.",
        starterCode:
          '# What is AI?\n# AI systems learn patterns from data.\n# Large Language Models (LLMs) are a type of AI trained on text.\n\nprint("AI is software that mimics human thinking.")\nprint("LLMs are trained on billions of words.")',
      },
    ],
    keyTakeaways: [
      "AI is software trained on data to perform tasks that require human-like reasoning.",
      "Machine learning is the branch of AI that learns from examples rather than explicit rules.",
      "Large Language Models (LLMs) are AI systems trained on massive amounts of text.",
    ],
  },

  "ai-m1-t2": {
    topicId: "ai-m1-t2",
    intro:
      "A Large Language Model is an AI system trained on enormous amounts of text. It learns to predict the next word — and from that, it learns language, facts, and reasoning.",
    blocks: [
      {
        type: "heading",
        content: "What Makes an LLM 'Large'?",
      },
      {
        type: "paragraph",
        content:
          "LLMs are called 'large' because of the sheer scale of their training: billions of parameters (adjustable numbers inside the model) and training on trillions of tokens scraped from books, websites, code, and scientific papers. This scale is what allows them to appear to understand context, reason, and even write creative content.",
      },
      {
        type: "visual",
        diagram: {
          title: "How an LLM is Trained",
          nodes: [
            { id: "text", label: "Internet Text", sublabel: "Trillions of tokens" },
            { id: "train", label: "Training", sublabel: "Predict next token" },
            { id: "params", label: "Parameters", sublabel: "Billions of numbers" },
            { id: "llm", label: "LLM", sublabel: "Ready to use" },
          ],
          arrows: [
            { from: "text", to: "train" },
            { from: "train", to: "params" },
            { from: "params", to: "llm" },
          ],
          variant: "flow",
        },
      },
      {
        type: "heading",
        content: "Tokens — The Building Blocks",
      },
      {
        type: "paragraph",
        content:
          "LLMs do not read text letter by letter or word by word. They read tokens. A token is a chunk of text, roughly 3–4 characters on average. Common short words ('the', 'is', 'a') are one token each. Longer or rare words get split into multiple tokens. Every piece of text you send to an LLM is first broken into a sequence of tokens.",
      },
      {
        type: "code",
        code: `# Approximate tokenisation example
text = "Artificial Intelligence is transforming the world."

# Real tokenisers split on word-piece boundaries
# Rough approximation: 1 token ≈ 0.75 words
approximate_tokens = len(text.split()) / 0.75
print(f"Approximate tokens: {approximate_tokens:.0f}")

# GPT-4 has a 128,000 token context window
# That's roughly 96,000 words — or a full novel`,
      },
      {
        type: "heading",
        content: "How an LLM Generates a Response",
      },
      {
        type: "list",
        items: [
          "You send a prompt — it gets converted to a sequence of tokens",
          "The model processes ALL tokens together through its neural network layers",
          "It outputs a probability distribution over the next possible token",
          "The highest-probability token is chosen (or sampled if temperature > 0)",
          "That token is appended and the process repeats until the answer is complete",
        ],
      },
      {
        type: "tip",
        content:
          "LLMs are not databases — they do not look things up. They generate responses based on patterns learned during training. This is why they can confidently say incorrect things (called 'hallucination').",
      },
      {
        type: "practice",
        practiceLabel: "Explore tokens",
        practicePrompt:
          "Tokens are the building blocks LLMs see. Run this to see how text is split.",
        starterCode:
          'text = "Hello, how are you today?"\n# LLMs see text as chunks called tokens\n# Each word (or part of a word) is a token\nwords = text.split()\nprint(f"Words: {words}")\nprint(f"Approximate token count: {len(words)}")',
      },
    ],
    keyTakeaways: [
      "LLMs predict the next token based on all previous tokens in the context.",
      "They are trained on internet-scale text datasets using self-supervised learning.",
      "Despite their simple training objective, they develop complex reasoning abilities.",
    ],
  },

  "ai-m1-t3": {
    topicId: "ai-m1-t3",
    intro:
      "LLMs break text into tokens, process them through billions of parameters, and generate a probability distribution over the next token. This happens billions of times per response.",
    blocks: [
      {
        type: "heading",
        content: "Inside the LLM: Transformers",
      },
      {
        type: "paragraph",
        content:
          "All modern LLMs are built on the Transformer architecture (introduced by Google in 2017). Transformers use a mechanism called 'self-attention' to weigh how important each token is relative to every other token in the input. This is what lets the model understand context — the word 'bank' means something different in 'river bank' vs 'bank account'.",
      },
      {
        type: "visual",
        diagram: {
          title: "LLM Inference Pipeline",
          nodes: [
            { id: "input", label: "Your Prompt", sublabel: "Plain text" },
            { id: "tokenise", label: "Tokenise", sublabel: "Text → numbers" },
            { id: "transformer", label: "Transformer Layers", sublabel: "96+ layers in GPT-4" },
            { id: "logits", label: "Token Probabilities", sublabel: "Score each possible next token" },
            { id: "output", label: "Generated Token", sublabel: "Highest-prob token chosen" },
          ],
          arrows: [
            { from: "input", to: "tokenise" },
            { from: "tokenise", to: "transformer" },
            { from: "transformer", to: "logits" },
            { from: "logits", to: "output" },
          ],
          variant: "flow",
        },
      },
      {
        type: "heading",
        content: "The Context Window",
      },
      {
        type: "paragraph",
        content:
          "The context window is the maximum number of tokens the model can 'see' at one time — both your prompt and the model's own output count toward this limit. Early models had 4,096 tokens (~3,000 words). Modern models like GPT-4 Turbo support 128k tokens (~96,000 words), and Gemini 1.5 Pro supports 1 million tokens.",
      },
      {
        type: "heading",
        content: "Temperature — Controlling Randomness",
      },
      {
        type: "list",
        items: [
          "Temperature = 0: always picks the single highest-probability token (deterministic, precise)",
          "Temperature = 0.7: balances quality with variety — the default for most chatbots",
          "Temperature = 1.0: more creative, occasionally surprising outputs",
          "Temperature = 1.5+: very random, sometimes incoherent — useful for creative tasks only",
        ],
      },
      {
        type: "tip",
        content:
          "For coding, data extraction, or factual Q&A: use temperature 0–0.3. For creative writing, brainstorming, or story generation: use 0.8–1.2.",
      },
      {
        type: "code",
        code: `# Groq API call showing temperature and context window impact
from groq import Groq

client = Groq(api_key="YOUR_KEY")

# Precise / factual response
response = client.chat.completions.create(
    model="llama3-70b-8192",
    messages=[{"role": "user", "content": "What is 2 + 2?"}],
    temperature=0.0,   # deterministic
    max_tokens=50      # limit response length
)

print(response.choices[0].message.content)
print(f"Tokens used: {response.usage.total_tokens}")`,
      },
      {
        type: "practice",
        practiceLabel: "Context window demo",
        practicePrompt:
          "The context window is how much text the model can 'see' at once. Simulate this concept.",
        starterCode:
          'context_window = 8192  # tokens for many models\nchars_per_token = 4    # rough average\nmax_chars = context_window * chars_per_token\n\nprint(f"Context window: {context_window} tokens")\nprint(f"That is roughly {max_chars:,} characters")\nprint(f"Or about {max_chars // 250} pages of text")',
      },
    ],
    keyTakeaways: [
      "Tokens are chunks of text — roughly 4 characters each on average.",
      "The context window is the maximum amount of text the model can process at once.",
      "Temperature controls randomness: low = precise, high = creative.",
    ],
  },

  "ai-m1-t4": {
    topicId: "ai-m1-t4",
    intro:
      "Several companies offer powerful LLMs via API. Understanding their differences helps you pick the right model for your project.",
    blocks: [
      {
        type: "heading",
        content: "The Major LLM Providers",
      },
      {
        type: "paragraph",
        content:
          "You don't need to train your own model to build AI applications. Every major LLM is available via a simple HTTP API. You send text, pay a small fee per token, and get a response. In this course we use Groq — which is free for learning and extremely fast.",
      },
      {
        type: "visual",
        diagram: {
          title: "LLM Provider Landscape",
          nodes: [
            { id: "openai", label: "OpenAI", sublabel: "GPT-4o, GPT-4" },
            { id: "anthropic", label: "Anthropic", sublabel: "Claude 3.5 Sonnet" },
            { id: "google", label: "Google", sublabel: "Gemini 1.5 Pro" },
            { id: "meta", label: "Meta (Open)", sublabel: "LLaMA 3 (free)" },
            { id: "groq", label: "Groq", sublabel: "Fast inference on LLaMA" },
          ],
          arrows: [
            { from: "meta", to: "groq", label: "hosts" },
          ],
          variant: "compare",
        },
      },
      {
        type: "heading",
        content: "Choosing the Right Provider",
      },
      {
        type: "list",
        items: [
          "OpenAI GPT-4o — best overall quality; great for complex reasoning and coding",
          "Anthropic Claude 3.5 — best for long documents, safety-critical tasks, and nuanced writing",
          "Google Gemini 1.5 — best for multimodal tasks (text + image + video); 1M token context",
          "Groq + LLaMA 3 — best for speed and learning; free tier; open-source model",
          "Ollama / LM Studio — run models locally on your own machine for full privacy",
        ],
      },
      {
        type: "heading",
        content: "Why We Use Groq in This Course",
      },
      {
        type: "paragraph",
        content:
          "Groq runs open-source models (LLaMA 3, Mixtral) on custom hardware called LPUs (Language Processing Units) that deliver inference speeds 10–100x faster than traditional GPUs. More importantly for learners: Groq has a generous free tier, no credit card required, and the API is fully compatible with the OpenAI SDK — so everything you learn transfers to any other provider.",
      },
      {
        type: "tip",
        content:
          "The Groq SDK and OpenAI SDK share the same interface. If you write code for Groq, you can switch to OpenAI GPT-4 by changing just 2 lines: the client initialisation and the model name.",
      },
      {
        type: "code",
        code: `# Switching between providers is trivial
# Groq:
from groq import Groq
client = Groq(api_key="groq-key")
model = "llama3-70b-8192"

# OpenAI (just change these 2 lines):
# from openai import OpenAI
# client = OpenAI(api_key="openai-key")
# model = "gpt-4o"

# The rest of the code is IDENTICAL:
response = client.chat.completions.create(
    model=model,
    messages=[{"role": "user", "content": "Hello!"}]
)
print(response.choices[0].message.content)`,
      },
      {
        type: "practice",
        practiceLabel: "Compare providers",
        practicePrompt: "Print a comparison of the main LLM providers.",
        starterCode:
          'providers = [\n    {"name": "OpenAI", "models": "GPT-4o, GPT-4", "known_for": "Best overall quality"},\n    {"name": "Anthropic", "models": "Claude 3.5", "known_for": "Safety and long context"},\n    {"name": "Google", "models": "Gemini 1.5", "known_for": "Multimodal + huge context"},\n    {"name": "Groq", "models": "LLaMA, Mixtral", "known_for": "Fastest inference speed"},\n]\n\nfor p in providers:\n    print(f"{p[\'name\']:12} | {p[\'models\']:20} | {p[\'known_for\']}")',
      },
    ],
    keyTakeaways: [
      "OpenAI, Anthropic, Google, and Meta all offer world-class LLMs.",
      "Groq provides extremely fast inference on open-source models — ideal for real-time apps.",
      "You choose a provider based on speed, cost, capability, and privacy requirements.",
    ],
  },
};
