import type { AgenticAiTopicGuide } from "@/data/agentic-ai-topic-guides";

function py(value: unknown) {
  return JSON.stringify(value, null, 4);
}

function fallbackExample(topicId: string, guide: AgenticAiTopicGuide) {
  return `# ${guide.title}
# Topic id: ${topicId}

steps = ${py(guide.steps)}
example = ${py(guide.example)}

print("Course concept:", ${py(guide.title)})
print("Why it matters:", ${py(guide.outcome)})
print()

for number, step in enumerate(steps, start=1):
    print(f"{number}. {step}")

print()
print("Example:", example)
`;
}

const EXAMPLES: Record<string, (guide: AgenticAiTopicGuide) => string> = {
  "ai-m1-t1": () => `# What AI Is
# A tiny rule-vs-pattern demo for spam detection.

emails = [
    {"text": "WIN a free prize now", "label": "spam"},
    {"text": "Meeting notes attached", "label": "not spam"},
    {"text": "Claim your free reward", "label": "spam"},
]

rule_keywords = ["free", "prize", "reward"]

for email in emails:
    score = sum(word.lower() in email["text"].lower() for word in rule_keywords)
    prediction = "spam" if score >= 1 else "not spam"
    print(email["text"], "=>", prediction, "| actual:", email["label"])
`,

  "ai-m1-t2": () => `# Large Language Models
# Simulate next-token prediction with a tiny probability table.

prompt = "Python lists are"
candidates = {
    "ordered": 0.52,
    "mutable": 0.31,
    "expensive": 0.04,
    "blue": 0.01,
}

best_token = max(candidates, key=candidates.get)
print("Prompt:", prompt)
print("Next token chosen:", best_token)
print("Generated sentence:", prompt, best_token)
`,

  "ai-m1-t3": () => `# How LLMs Work
# Tokenize input, choose next tokens, then decode a response.

tokens = "Explain Python lists".split()
generated = []

next_tokens = ["Lists", "store", "multiple", "values."]
for token in next_tokens:
    generated.append(token)
    print("Partial response:", " ".join(generated))

print()
print("Input tokens:", tokens)
print("Final answer:", " ".join(generated))
`,

  "ai-m1-t4": () => `# LLM Providers
# Compare providers by the needs of a task.

providers = [
    {"name": "Groq", "speed": 10, "reasoning": 7, "cost": 9},
    {"name": "Frontier model", "speed": 6, "reasoning": 10, "cost": 5},
    {"name": "Local model", "speed": 7, "reasoning": 6, "cost": 10},
]

task = "fast classroom demo"
for provider in providers:
    score = provider["speed"] * 2 + provider["cost"] + provider["reasoning"]
    print(provider["name"], "score:", score)

print("Best for", task + ":", max(providers, key=lambda p: p["speed"] * 2 + p["cost"] + p["reasoning"])["name"])
`,

  "ai-lc-t1": () => `# What LangChain Is
# Compose a tiny LLM app from reusable pieces.

def prompt_template(topic):
    return f"Explain {topic} to a beginner in two bullets."

def fake_llm(prompt):
    return "- LangChain connects app steps.\\n- It helps organize LLM workflows."

topic = "LangChain"
prompt = prompt_template(topic)
answer = fake_llm(prompt)

print("Prompt:")
print(prompt)
print()
print("Answer:")
print(answer)
`,

  "ai-lc-t2": () => `# LangChain Setup
# Keep packages and secrets separate from your application logic.

packages = ["langchain", "langchain-openai"]
environment = {
    "OPENAI_API_KEY": "set in .env, not in source code",
    "LANGSMITH_TRACING": "optional for debugging",
}

print("Install:")
for package in packages:
    print("pip install", package)

print()
print("Environment checklist:")
for key, note in environment.items():
    print("-", key, "=>", note)
`,

  "ai-lc-t3": () => `# Chat Models and Providers
# Simulate choosing providers while keeping one app interface.

providers = [
    {"name": "OpenAI", "model": "openai:gpt-5.5", "strength": "general"},
    {"name": "Anthropic", "model": "anthropic:claude-sonnet-4-6", "strength": "analysis"},
    {"name": "Groq", "model": "groq:llama-3.1-8b-instant", "strength": "speed"},
]

task = "fast classroom demo"

for provider in providers:
    print(provider["name"], "uses", provider["model"])

print()
print("For", task + ", try a provider optimized for speed first.")
`,

  "ai-lc-t4": () => `# Prompt Templates
# Separate fixed instructions from changing user inputs.

template = {
    "system": "You are a friendly {role}.",
    "human": "Explain {topic} in {format}.",
}

values = {
    "role": "Python tutor",
    "topic": "LangChain prompt templates",
    "format": "three short bullets",
}

system_message = template["system"].format(**values)
human_message = template["human"].format(**values)

print("System:", system_message)
print("Human:", human_message)
`,

  "ai-lc-t5": () => `# LCEL Chains and Output Parsers
# Model the flow: prompt | model | parser.

def prompt(input_text):
    return f"Summarize this for a beginner: {input_text}"

def model(formatted_prompt):
    return {"content": formatted_prompt.replace("Summarize", "Summary:")}

def str_output_parser(message):
    return message["content"]

chain_steps = [prompt, model, str_output_parser]
value = "LangChain connects prompts, models, and parsers."

for step in chain_steps:
    value = step(value)
    print(step.__name__, "=>", value)
`,

  "ai-lc-t6": () => `# Agents and Tools in LangChain
# Validate tool arguments before running the tool.

def get_weather(city):
    return f"It is sunny in {city}."

tool_call = {"name": "get_weather", "args": {"city": "Chennai"}}
allowed_tools = {"get_weather": get_weather}

if tool_call["name"] in allowed_tools:
    city = tool_call["args"].get("city", "")
    print("Tool observation:", allowed_tools[tool_call["name"]](city))

print("Final answer: The weather tool returned a safe observation.")
`,

  "ai-lc-t7": () => `# Testing and Monitoring with LangSmith
# Simulate a tiny evaluation dataset for a LangChain app.

test_cases = [
    {"input": "What is LangChain?", "expected_keyword": "framework"},
    {"input": "Why trace chains?", "expected_keyword": "debug"},
]

app_outputs = ["LangChain is a framework for LLM apps.", "Traces help debug failures."]

for case, output in zip(test_cases, app_outputs):
    passed = case["expected_keyword"].lower() in output.lower()
    print(case["input"], "=>", "PASS" if passed else "FAIL")
    print("Trace output:", output)
`,

  "ai-m2-t1": () => `# Prompt Basics
# Build a clear prompt from context, task, and format.

context = "You are a friendly Python tutor."
task = "Explain variables to a beginner."
format_rule = "Use 3 bullets and one tiny code example."

prompt = f"{context}\\nTask: {task}\\nFormat: {format_rule}"
print(prompt)
`,

  "ai-m2-t2": () => `# System vs User
# Structure messages like a chat API call.

messages = [
    {"role": "system", "content": "You are concise and beginner-friendly."},
    {"role": "user", "content": "Explain Python lists in one sentence."},
]

for message in messages:
    print(message["role"].upper() + ":", message["content"])
`,

  "ai-m2-t3": () => `# Few-Shot Prompting
# Use examples to teach a classification pattern.

examples = {
    "Great work!": "positive",
    "This is broken.": "negative",
    "It is okay.": "neutral",
}

new_text = "The lesson was helpful!"
print("Training examples:")
for text, label in examples.items():
    print(f"- {text!r} => {label}")

print()
print("New input:", new_text)
print("Expected style: return one label only")
`,

  "ai-m2-t4": () => `# Reasoning Prompts
# Ask for brief reasoning plus a final answer.

problem = "A mini course has 3 modules with 4 topics each. How many topics?"
reasoning_steps = [
    "Identify modules = 3",
    "Identify topics per module = 4",
    "Multiply 3 * 4",
]

print("Problem:", problem)
print("Brief reasoning:")
for step in reasoning_steps:
    print("-", step)
print("Final answer:", 3 * 4)
`,

  "ai-m2-t5": () => `# Prompt Best Practices
# Improve a vague prompt by making it specific and testable.

bad_prompt = "Make this better."
better_prompt = {
    "task": "Rewrite the paragraph",
    "audience": "Python beginners",
    "format": "5 bullets",
    "tone": "clear and encouraging",
}

print("Bad prompt:", bad_prompt)
print("Better prompt:")
for key, value in better_prompt.items():
    print(f"- {key}: {value}")
`,

  "ai-m3-t1": () => `# API Keys
# Read an API key from the environment without printing the secret.

import os

os.environ.setdefault("GROQ_API_KEY", "demo-key-do-not-commit")
api_key = os.environ.get("GROQ_API_KEY")

if api_key:
    print("Groq API key found.")
    print("Preview:", api_key[:4] + "..." + api_key[-4:])
else:
    print("Missing GROQ_API_KEY")
`,

  "ai-m3-t2": () => `# First API Call
# Mock the shape of a Groq chat completion response.

request = {
    "model": "llama-3.1-8b-instant",
    "messages": [{"role": "user", "content": "Explain agents simply."}],
}

response = {
    "choices": [
        {"message": {"content": "An agent is an AI loop that can use tools."}}
    ]
}

print("Sending model:", request["model"])
print("Assistant:", response["choices"][0]["message"]["content"])
`,

  "ai-m3-t3": () => `# API Responses
# Extract text, finish reason, and token usage.

response = {
    "choices": [{
        "message": {"content": "Use clear prompts and test the output."},
        "finish_reason": "stop",
    }],
    "usage": {"prompt_tokens": 18, "completion_tokens": 9, "total_tokens": 27},
}

print("Text:", response["choices"][0]["message"]["content"])
print("Finish reason:", response["choices"][0]["finish_reason"])
print("Total tokens:", response["usage"]["total_tokens"])
`,

  "ai-m3-t4": () => `# Choosing Models
# Pick a model based on task difficulty and speed needs.

tasks = [
    {"name": "classify support ticket", "difficulty": 2, "needs_speed": True},
    {"name": "write multi-step plan", "difficulty": 8, "needs_speed": False},
]

for task in tasks:
    model = "fast-small-model" if task["difficulty"] <= 3 and task["needs_speed"] else "strong-reasoning-model"
    print(task["name"], "=>", model)
`,

  "ai-m3-t5": () => `# Errors and Rate Limits
# Retry a failed request with a small backoff.

responses = ["rate_limit", "timeout", "ok"]

for attempt, status in enumerate(responses, start=1):
    print("Attempt", attempt, "=>", status)
    if status == "ok":
        print("Success: show the answer to the user")
        break
    print("Wait, then retry...")
else:
    print("Show a friendly fallback message")
`,

  "ai-m4-t1": () => `# Chat History
# Keep conversation history because LLMs are stateless.

messages = [{"role": "system", "content": "You are a Python tutor."}]
turns = ["What is a list?", "Give one example."]

for user_text in turns:
    messages.append({"role": "user", "content": user_text})
    messages.append({"role": "assistant", "content": "Demo reply based on history."})

for message in messages:
    print(message["role"] + ":", message["content"])
`,

  "ai-m4-t2": () => `# Q&A Bot
# A chatbot is a loop: read, answer, remember.

questions = ["What is an agent?", "quit"]
history = []

for question in questions:
    if question.lower() == "quit":
        print("Goodbye!")
        break
    answer = "An agent can plan, use tools, and observe results."
    history.append((question, answer))
    print("User:", question)
    print("Bot:", answer)
`,

  "ai-m4-t3": () => `# Testing Chatbots
# Test behavior with realistic user messages.

test_prompts = [
    "Explain variables simply.",
    "What if I ask an off-topic question?",
    "Can you give a code example?",
]

for prompt in test_prompts:
    print("TEST:", prompt)
    print("CHECK: Is the reply helpful, safe, and on-topic?")
`,

  "ai-m4-t4": () => `# Streaming
# Print a response chunk by chunk.

chunks = ["Agents ", "can ", "use ", "tools ", "step by step."]

print("Streaming response:")
for chunk in chunks:
    print(chunk, end="")
print()
`,

  "ai-m4-t5": () => `# Response Quality
# Tune settings based on the kind of answer you need.

settings = [
    {"task": "fact extraction", "temperature": 0.0, "max_tokens": 80},
    {"task": "brainstorming", "temperature": 0.7, "max_tokens": 200},
]

for item in settings:
    print(item["task"])
    print("  temperature:", item["temperature"])
    print("  max_tokens:", item["max_tokens"])
`,

  "ai-m5-t1": () => `# What Agents Are
# A simple plan-tool-observe loop.

def get_weather(city):
    return f"{city}: sunny, 28C"

goal = "Tell the user the weather in Chennai"
tool_result = get_weather("Chennai")

print("Goal:", goal)
print("Tool result:", tool_result)
print("Final answer:", "The weather in Chennai is sunny and 28C.")
`,

  "ai-m5-t2": () => `# Tool Calling
# Validate a tool request before executing it.

def search_docs(query):
    docs = {"agents": "Agents can use tools and observe results."}
    return docs.get(query.lower(), "No matching document found.")

tool_call = {"name": "search_docs", "arguments": {"query": "agents"}}

if tool_call["name"] == "search_docs":
    query = tool_call["arguments"]["query"]
    print("Observation:", search_docs(query))
`,

  "ai-m5-t3": () => `# Simple Agent
# Limit loop steps so the agent cannot run forever.

def calculator(expression):
    return eval(expression, {"__builtins__": {}})

question = "What is 12 * 8?"
for step in range(1, 4):
    print("Step", step, "- decide next action")
    observation = calculator("12 * 8")
    print("Observation:", observation)
    print("Final answer:", observation)
    break
`,

  "ai-m5-t4": () => `# ReAct Pattern
# Reason, act, observe, then answer.

trace = [
    ("Reason", "Need current course module count."),
    ("Act", "search_docs('agentic ai modules')"),
    ("Observe", "The course has foundations, prompts, APIs, chatbots, agents, and apps."),
    ("Answer", "The course progresses from basics to real AI apps."),
]

for label, text in trace:
    print(label + ":", text)
`,

  "ai-m6-t1": () => `# RAG Basics
# Retrieve relevant context before answering.

documents = [
    "RAG means retrieval augmented generation.",
    "Agents can use tools to gather information.",
    "Prompt engineering improves model instructions.",
]

question = "What does RAG mean?"
matches = [doc for doc in documents if "RAG" in doc]

print("Question:", question)
print("Retrieved context:", matches[0])
print("Answer:", "RAG means retrieval augmented generation.")
`,

  "ai-m6-t2": () => `# Document Q&A
# Chunk documents, retrieve a match, and answer from the source.

chunks = {
    "chunk-1": "Refunds are available within 7 days.",
    "chunk-2": "API keys should never be committed.",
}

question = "How long are refunds available?"
source_id, source_text = next((item for item in chunks.items() if "Refunds" in item[1]))

print("Answer:", "Refunds are available within 7 days.")
print("Source:", source_id, "-", source_text)
`,

  "ai-m6-t3": () => `# Multi-Agent Systems
# Split work by role, then combine results.

agents = {
    "researcher": "Finds facts about the topic.",
    "writer": "Turns facts into a clear answer.",
    "reviewer": "Checks accuracy and missing details.",
}

for role, job in agents.items():
    print(role.title() + ":", job)

print("Final result: researched, written, and reviewed answer")
`,

  "ai-m6-t4": () => `# Next Steps
# Build, evaluate, deploy, and improve an AI project.

roadmap = [
    "Build a small support bot",
    "Add RAG for course documents",
    "Add tool calling for actions",
    "Log failures and improve prompts",
]

for week, task in enumerate(roadmap, start=1):
    print(f"Week {week}: {task}")
`,
};

export function buildAgenticAiExampleCode(
  topicId: string,
  guide: AgenticAiTopicGuide
) {
  return (EXAMPLES[topicId] ?? (() => fallbackExample(topicId, guide)))(guide);
}
