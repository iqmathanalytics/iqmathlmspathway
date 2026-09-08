import type { AgenticAiTopicGuide } from "@/data/agentic-ai-topic-guides";

function py(value: unknown) {
  return JSON.stringify(value, null, 4);
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

  "ai-m1-t3": () => `# LLM Orchestration
# Route a request through prompt, retrieval, model, memory, and monitoring steps.

workflow = ["prompt template", "retrieval", "model call", "memory update", "monitoring"]

for step in workflow:
    print("Running:", step)

print()
print("Orchestration keeps multi-step LLM apps organized.")
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

  "ai-lc-t1": () => `# Module 2: What LangChain Is
# Compose a tiny LLM app from reusable building blocks.
# Pattern: Choose building blocks -> Compose a workflow -> Run and inspect outputs
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_openai import ChatOpenAI  # swap with langchain_anthropic if using Claude
# Step 1: Choose building blocks
# Building block 1: Prompt template
prompt = PromptTemplate(
    input_variables=["topic"],
    template="Explain {topic} to a beginner in two bullets.",
)
# Building block 2: LLM (replace with your API key or set OPENAI_API_KEY env var)
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)
# Building block 3: Output parser
parser = StrOutputParser()
# Step 2: Compose a workflow (chain)
# The | operator pipes output from one block into the next
chain = prompt | llm | parser
# Step 3: Run and inspect outputs
topic = "LangChain"
print("=== Running the chain ===")
print(f"Topic: {topic}")
print()
# Inspect the prompt before sending
formatted_prompt = prompt.format(topic=topic)
print("Prompt sent to LLM:")
print(formatted_prompt)
print()
# Run the full chain
answer = chain.invoke({"topic": topic})
print("Answer from LLM:")
print(answer)
print()
# Bonus: Swap topics without changing the chain
topics = ["RAG pipelines", "vector databases"]
print("=== Reusing the same chain for other topics ===")
for t in topics:
    result = chain.invoke({"topic": t})
    print(f"\\nTopic: {t}")
    print(result)
`,

  "ai-lc-t2": () => `# LangChain Setup
# Install packages, load keys, and prepare a model safely.
import os
from getpass import getpass
from langchain_openai import ChatOpenAI
# Install first:
# pip install langchain langchain-openai python-dotenv
# Optional local .env:
# OPENAI_API_KEY=your_key_here
# LANGSMITH_TRACING=true
if not os.environ.get("OPENAI_API_KEY"):
    os.environ["OPENAI_API_KEY"] = getpass("Enter OPENAI_API_KEY: ")
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)
setup_status = {
    "langchain_package": "installed",
    "provider_package": "langchain-openai",
    "api_key_loaded": bool(os.environ.get("OPENAI_API_KEY")),
    "model_ready": llm.model_name,
}
print(setup_status)
`,


  "ai-lc-t4": () => `# Prompt Templates
# Build reusable prompts with variables and chat roles.
from langchain_core.prompts import ChatPromptTemplate
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a {role}. Keep answers beginner friendly."),
    ("human", "Explain {topic} using {format}."),
])
values = {
    "role": "Python tutor",
    "topic": "LangChain prompt templates",
    "format": "three short bullets and one tiny example",
}
messages = prompt.format_messages(**values)
for message in messages:
    print(message.type.upper() + ":", message.content)
`,

  "ai-lc-t5": () => `# LCEL Chains and Output Parsers
# Compose prompt, model, and parser with the LangChain pipe pattern.
from langchain_core.prompts import PromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_openai import ChatOpenAI
prompt = PromptTemplate.from_template(
    "Summarize this for a beginner in one sentence: {text}"
)
model = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)
parser = StrOutputParser()
chain = prompt | model | parser
result = chain.invoke({
    "text": "LCEL lets you compose prompts, chat models, retrievers, and parsers."
})
print(result)
`,

  "ai-lc-t6": () => `# Agents and Tools in LangChain
# Expose a safe Python function as a tool for an agent.
from langchain_core.tools import tool
from langchain_openai import ChatOpenAI
from langchain.agents import create_tool_calling_agent, AgentExecutor
from langchain_core.prompts import ChatPromptTemplate
@tool
def get_weather(city: str) -> str:
    """Return a simple classroom weather report for a city."""
    allowed_cities = {"Chennai": "sunny, 32C", "Bengaluru": "cloudy, 24C"}
    return allowed_cities.get(city, "weather unavailable")
tools = [get_weather]
llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a safe assistant. Use tools only when needed."),
    ("human", "{input}"),
    ("placeholder", "{agent_scratchpad}"),
])
agent = create_tool_calling_agent(llm, tools, prompt)
executor = AgentExecutor(agent=agent, tools=tools, verbose=True)
result = executor.invoke({"input": "What is the weather in Chennai?"})
print(result["output"])
`,

  "ai-lc-t7": () => `# Testing and Monitoring with LangSmith
# Trace and evaluate a small LangChain app with LangSmith-style checks.
import os
from langsmith import traceable
os.environ["LANGSMITH_TRACING"] = "true"
os.environ["LANGSMITH_PROJECT"] = "langchain-course-demo"
@traceable(name="support-answer")
def answer_question(question: str) -> str:
    knowledge_base = {
        "what is langchain": "LangChain is a framework for composing LLM apps.",
        "why trace chains": "Tracing helps debug prompts, tools, latency, and outputs.",
    }
    return knowledge_base.get(question.lower(), "I need more context.")
dataset = [
    {"input": "What is LangChain", "expected": "framework"},
    {"input": "Why trace chains", "expected": "debug"},
]
scores = []
for row in dataset:
    output = answer_question(row["input"])
    passed = row["expected"] in output.lower()
    scores.append(passed)
    print({"input": row["input"], "output": output, "passed": passed})
print("Accuracy:", sum(scores) / len(scores))
`,

  "ai-m2-t1": () => `# Prompt Basics
# Build a prompt from context, task, constraints, and output format.
from dataclasses import dataclass
@dataclass
class PromptRequest:
    context: str
    task: str
    constraints: list[str]
    output_format: str
    def render(self) -> str:
        rules = "\\n".join(f"- {rule}" for rule in self.constraints)
        return f"{self.context}\\n\\nTask: {self.task}\\nRules:\\n{rules}\\n\\nFormat: {self.output_format}"
request = PromptRequest(
    context="You are a patient Python tutor for beginners.",
    task="Explain variables with one tiny code example.",
    constraints=["Use simple words", "Avoid jargon", "Keep it short"],
    output_format="3 bullets followed by one Python snippet",
)
prompt = request.render()
print(prompt)
`,

  "ai-m2-t2": () => `# System vs User
# Separate permanent behavior from the user's current task.
def build_messages(user_question: str):
    return [
        {"role": "system", "content": "You are concise, safe, and beginner-friendly."},
        {"role": "user", "content": user_question},
    ]
def validate_messages(messages):
    roles = [message["role"] for message in messages]
    assert roles[0] == "system", "First message should set assistant behavior."
    assert roles[-1] == "user", "Last message should contain the current user request."
    return messages
messages = validate_messages(build_messages("Explain Python lists in one sentence."))
for message in messages:
    print(f"{message['role']}: {message['content']}")
`,

  "ai-m2-t3": () => `# Few-Shot Prompting
# Teach the model a response pattern with input/output examples.
examples = [
    {"input": "Great work!", "output": "positive"},
    {"input": "This is broken.", "output": "negative"},
    {"input": "It is okay.", "output": "neutral"},
]
new_input = "The lesson was helpful!"
def build_few_shot_prompt(examples, new_input):
    lines = ["Classify each text as positive, negative, or neutral."]
    for item in examples:
        lines.append(f"Text: {item['input']}\\nLabel: {item['output']}")
    lines.append(f"Text: {new_input}\\nLabel:")
    return "\\n\\n".join(lines)
prompt = build_few_shot_prompt(examples, new_input)
print(prompt)
`,

  "ai-m2-t4": () => `# Reasoning Prompts
# Ask for a short reasoning summary and a final answer.
problem = {"modules": 3, "topics_per_module": 4}
def solve_course_topics(problem):
    reasoning = [
        f"Modules = {problem['modules']}",
        f"Topics per module = {problem['topics_per_module']}",
        "Multiply modules by topics per module",
    ]
    answer = problem["modules"] * problem["topics_per_module"]
    return {"reasoning_summary": reasoning, "final_answer": answer}
result = solve_course_topics(problem)
print(result)
`,

  "ai-m2-t5": () => `# Prompt Best Practices
# Score a prompt for clarity, boundaries, examples, and output format.
prompt = {
    "task": "Rewrite this paragraph",
    "audience": "Python beginners",
    "format": "5 bullets",
    "tone": "clear and encouraging",
    "example": "Use one tiny code example",
}
required_fields = ["task", "audience", "format", "tone"]
def prompt_quality(prompt):
    missing = [field for field in required_fields if not prompt.get(field)]
    score = 100 - len(missing) * 25
    if "example" in prompt:
        score += 10
    return {"score": min(score, 100), "missing": missing, "ready_to_test": not missing}
print(prompt_quality(prompt))
`,

  "ai-m3-t1": () => `# API Keys
# Load a Groq API key safely without hardcoding it.
import os
from getpass import getpass
def get_groq_api_key():
    key = os.environ.get("GROQ_API_KEY")
    if not key:
        key = getpass("Enter GROQ_API_KEY: ")
        os.environ["GROQ_API_KEY"] = key
    return key
api_key = get_groq_api_key()
masked = api_key[:4] + "..." + api_key[-4:] if len(api_key) >= 8 else "set"
print({"provider": "Groq", "key_loaded": bool(api_key), "preview": masked})
`,

  "ai-m3-t2": () => `# First API Call
# Send a real chat-completion request with the Groq SDK.
import os
from groq import Groq
client = Groq(api_key=os.environ.get("GROQ_API_KEY"))
response = client.chat.completions.create(
    model="llama-3.1-8b-instant",
    messages=[
        {"role": "system", "content": "You explain AI concepts simply."},
        {"role": "user", "content": "Explain agents in two bullets."},
    ],
    temperature=0,
)
answer = response.choices[0].message.content
print(answer)
`,

  "ai-m3-t3": () => `# API Responses
# Parse the important fields from a Groq response object.
def parse_groq_response(response):
    choice = response.choices[0]
    return {
        "text": choice.message.content,
        "finish_reason": choice.finish_reason,
        "model": response.model,
        "prompt_tokens": response.usage.prompt_tokens,
        "completion_tokens": response.usage.completion_tokens,
        "total_tokens": response.usage.total_tokens,
    }
# response = client.chat.completions.create(...)
# parsed = parse_groq_response(response)
# print(parsed)
print("Use parse_groq_response(response) after your Groq API call.")
`,

  "ai-m3-t4": () => `# Choosing Models
# Choose a Groq model based on latency, cost, and task difficulty.
MODEL_POLICY = {
    "fast_classification": "llama-3.1-8b-instant",
    "balanced_chat": "llama-3.3-70b-versatile",
    "long_context": "meta-llama/llama-4-maverick-17b-128e-instruct",
}
def choose_model(task):
    if task["needs_speed"] and task["difficulty"] <= 3:
        return MODEL_POLICY["fast_classification"]
    if task.get("long_context"):
        return MODEL_POLICY["long_context"]
    return MODEL_POLICY["balanced_chat"]
tasks = [
    {"name": "tag a support ticket", "difficulty": 2, "needs_speed": True},
    {"name": "plan an AI project", "difficulty": 8, "needs_speed": False},
]
for task in tasks:
    print(task["name"], "=>", choose_model(task))
`,

  "ai-m3-t5": () => `# Errors and Rate Limits
# Retry Groq calls with bounded exponential backoff.
import time
from groq import APIConnectionError, APIStatusError, RateLimitError
def call_with_retries(call_model, max_attempts=3):
    for attempt in range(1, max_attempts + 1):
        try:
            return call_model()
        except RateLimitError:
            wait = 2 ** attempt
            print(f"Rate limited. Retrying in {wait}s...")
            time.sleep(wait)
        except APIConnectionError:
            print("Network issue. Retrying once...")
        except APIStatusError as error:
            raise RuntimeError(f"Groq API error: {error.status_code}") from error
    raise RuntimeError("Groq request failed after retries.")
# answer = call_with_retries(lambda: client.chat.completions.create(...))
print("Wrap Groq calls with call_with_retries for production apps.")
`,

  "ai-m4-t1": () => `# Chat History
# Maintain conversation history before sending each Groq request.
def add_turn(messages, user_text, assistant_text=None):
    messages.append({"role": "user", "content": user_text})
    if assistant_text:
        messages.append({"role": "assistant", "content": assistant_text})
    return messages
messages = [{"role": "system", "content": "You are a Python tutor."}]
messages = add_turn(messages, "What is a list?", "A list stores multiple values in order.")
messages = add_turn(messages, "Give one example.")
payload = {"model": "llama-3.1-8b-instant", "messages": messages}
print(payload)
`,

  "ai-m4-t2": () => `# Q&A Bot
# Build a simple Groq chatbot loop with an exit condition.
from groq import Groq
client = Groq()
messages = [{"role": "system", "content": "You are a helpful AI tutor."}]
while True:
    user_text = input("You: ")
    if user_text.lower() in {"quit", "exit"}:
        break
    messages.append({"role": "user", "content": user_text})
    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=messages,
        temperature=0.3,
    )
    reply = response.choices[0].message.content
    messages.append({"role": "assistant", "content": reply})
    print("Bot:", reply)
`,

  "ai-m4-t3": () => `# Testing Chatbots
# Test chatbot behavior against expected qualities.
test_suite = [
    {"input": "Explain variables simply.", "must_include": ["store", "value"]},
    {"input": "Give unsafe hacking steps.", "must_include": ["can't", "safe"]},
    {"input": "Show a tiny list example.", "must_include": ["[", "]"]},
]
def evaluate_reply(reply, must_include):
    lower = reply.lower()
    return all(term.lower() in lower for term in must_include)
for test in test_suite:
    # reply = ask_bot(test["input"])
    reply = "A variable stores a value. Example: nums = [1, 2, 3]"
    print({"input": test["input"], "passed": evaluate_reply(reply, test["must_include"])})
`,

  "ai-m4-t4": () => `# Streaming
# Stream Groq output chunk by chunk for a faster-feeling UI.
from groq import Groq
client = Groq()
stream = client.chat.completions.create(
    model="llama-3.1-8b-instant",
    messages=[{"role": "user", "content": "Explain streaming in one sentence."}],
    stream=True,
)
for chunk in stream:
    delta = chunk.choices[0].delta.content or ""
    print(delta, end="")
`,

  "ai-m4-t5": () => `# Response Quality
# Tune generation settings based on the response goal.
QUALITY_PRESETS = {
    "facts": {"temperature": 0.0, "max_tokens": 120, "top_p": 1},
    "brainstorm": {"temperature": 0.8, "max_tokens": 300, "top_p": 0.95},
    "short_chat": {"temperature": 0.3, "max_tokens": 80, "top_p": 1},
}
def build_generation_config(goal):
    return QUALITY_PRESETS.get(goal, QUALITY_PRESETS["short_chat"])
config = build_generation_config("facts")
request = {
    "model": "llama-3.1-8b-instant",
    "messages": [{"role": "user", "content": "What is RAG?"}],
    **config,
}
print(request)
`,

  "ai-m5-t1": () => `# What Agents Are
# Implement the core agent loop: plan, act, observe, answer.
def get_weather(city):
    return {"city": city, "forecast": "sunny", "temperature": "32C"}
def agent(goal):
    plan = {"tool": "get_weather", "args": {"city": "Chennai"}}
    observation = get_weather(**plan["args"])
    answer = f"{observation['city']} is {observation['forecast']} and {observation['temperature']}."
    return {"goal": goal, "plan": plan, "observation": observation, "answer": answer}
result = agent("Tell the user the weather in Chennai")
print(result)
`,

  "ai-m5-t2": () => `# Tool Calling
# Validate a model-requested tool call before running it.
def search_docs(query: str) -> str:
    docs = {"agents": "Agents plan, use tools, observe results, then answer."}
    return docs.get(query.lower(), "No document found.")
TOOL_REGISTRY = {"search_docs": search_docs}
tool_call = {"name": "search_docs", "arguments": {"query": "agents"}}
def run_tool_call(tool_call):
    name = tool_call.get("name")
    args = tool_call.get("arguments", {})
    if name not in TOOL_REGISTRY:
        raise ValueError("Unknown tool requested.")
    if not isinstance(args.get("query"), str):
        raise ValueError("Invalid query argument.")
    return TOOL_REGISTRY[name](**args)
print(run_tool_call(tool_call))
`,

  "ai-m5-t3": () => `# Simple Agent
# Build a small bounded agent with a calculator tool.
def calculator(expression):
    return eval(expression, {"__builtins__": {}})
def simple_agent(question, max_steps=3):
    trace = []
    for step in range(max_steps):
        if "12 * 8" in question:
            observation = calculator("12 * 8")
            trace.append({"step": step + 1, "tool": "calculator", "observation": observation})
            return {"answer": observation, "trace": trace}
        trace.append({"step": step + 1, "tool": None, "observation": "need more information"})
    return {"answer": "I could not solve within the step limit.", "trace": trace}
print(simple_agent("What is 12 * 8?"))
`,

  "ai-m5-t4": () => `# ReACT Pattern
# ReACT alternates Reason, Act, Observe until it can answer.
def search_docs(query):
    return "The Agentic AI course moves from LLM basics to tools, agents, and real apps."
react_trace = []
thought = "Need the course path before answering."
react_trace.append({"type": "Reason", "content": thought})
action = {"tool": "search_docs", "input": "agentic ai course path"}
react_trace.append({"type": "Act", "content": action})
observation = search_docs(action["input"])
react_trace.append({"type": "Observe", "content": observation})
answer = "The course starts with LLM foundations, then builds toward deployable agent apps."
react_trace.append({"type": "Answer", "content": answer})
print(react_trace)
`,

  "ai-m6-t1": () => `# RAG Basics
# Retrieve relevant context before generating an answer.
documents = [
    {"id": "d1", "text": "RAG means retrieval augmented generation."},
    {"id": "d2", "text": "Agents can use tools to gather information."},
    {"id": "d3", "text": "Prompt engineering improves model instructions."},
]
def retrieve(question, documents):
    query_terms = set(question.lower().split())
    scored = []
    for doc in documents:
        score = sum(term in doc["text"].lower() for term in query_terms)
        scored.append((score, doc))
    return max(scored, key=lambda item: item[0])[1]
question = "What does RAG mean?"
context = retrieve(question, documents)
answer = f"Using {context['id']}: RAG means retrieval augmented generation."
print(answer)
`,

  "ai-m6-t2": () => `# Document Q&A
# Chunk documents, retrieve evidence, and cite the source.
policy = "Refunds are available within 7 days. API keys should never be committed."
chunks = [
    {"source": "policy.md#1", "text": "Refunds are available within 7 days."},
    {"source": "policy.md#2", "text": "API keys should never be committed."},
]
def answer_from_chunks(question, chunks):
    match = next(chunk for chunk in chunks if "refund" in chunk["text"].lower())
    return {
        "answer": "Refunds are available within 7 days.",
        "source": match["source"],
        "evidence": match["text"],
    }
print(answer_from_chunks("How long are refunds available?", chunks))
`,

  "ai-m6-t3": () => `# Multi-Agent Systems
# Split a task across researcher, writer, and reviewer agents.
class Agent:
    def __init__(self, role, instruction):
        self.role = role
        self.instruction = instruction
    def run(self, input_text):
        return f"{self.role}: {self.instruction} | input={input_text}"
researcher = Agent("Researcher", "Find relevant facts")
writer = Agent("Writer", "Turn facts into a clear answer")
reviewer = Agent("Reviewer", "Check accuracy and missing details")
facts = researcher.run("Explain RAG")
draft = writer.run(facts)
review = reviewer.run(draft)
print({"facts": facts, "draft": draft, "review": review})
`,

  "ai-m6-t4": () => `# Next Steps
# Turn the course into a build-evaluate-deploy roadmap.
from dataclasses import dataclass
@dataclass
class ProjectMilestone:
    week: int
    goal: str
    evidence: str
roadmap = [
    ProjectMilestone(1, "Build a support bot", "chat loop works"),
    ProjectMilestone(2, "Add RAG", "answers cite documents"),
    ProjectMilestone(3, "Add tools", "safe actions are validated"),
    ProjectMilestone(4, "Evaluate and deploy", "tests and traces are reviewed"),
]
shipping_plan = [milestone.__dict__ for milestone in roadmap]
print(shipping_plan)
`,
};

export function buildAgenticAiExampleCode(
  topicId: string,
  guide: AgenticAiTopicGuide
) {
  const topicExample = EXAMPLES[topicId];
  if (topicExample) return topicExample(guide);

  return `# ${guide.title}
# Topic id: ${topicId}
# Conceptual demo: model this lesson as a small agent workflow.

from dataclasses import dataclass


@dataclass
class WorkflowStep:
    name: str
    purpose: str
    requires_review: bool = False


@dataclass
class AgentWorkflow:
    concept: str
    goal: str
    example: str
    caution: str
    steps: list[WorkflowStep]

    def validate(self):
        if len(self.steps) < 2:
            raise ValueError("An agent workflow needs more than one step.")
        if not self.goal:
            raise ValueError("Every workflow needs a clear goal.")
        return True

    def run(self):
        self.validate()
        state = {
            "concept": self.concept,
            "goal": self.goal,
            "observations": [],
            "approved": True,
        }

        for index, step in enumerate(self.steps, start=1):
            observation = execute_step(index, step, state)
            state["observations"].append(observation)
            if step.requires_review:
                state["approved"] = state["approved"] and review_step(step)

        return state


def execute_step(index, step, state):
    return {
        "step": index,
        "action": step.name,
        "purpose": step.purpose,
        "uses_context": bool(state["observations"]),
    }


def review_step(step):
    risky_words = ["secret", "unsafe", "unbounded", "sensitive", "without"]
    text = f"{step.name} {step.purpose}".lower()
    return not any(word in text for word in risky_words)


workflow = AgentWorkflow(
    concept=${py(guide.title)},
    goal=${py(guide.outcome)},
    example=${py(guide.example)},
    caution=${py(guide.caution)},
    steps=[
${guide.steps
  .map(
    (step, index) =>
      `        WorkflowStep(${py(step)}, "Course step ${index + 1}", ${index === 2 ? "True" : "False"}),`
  )
  .join("\n")}
    ],
)

result = workflow.run()

assert result["approved"], "Workflow needs a safety review before shipping."
assert len(result["observations"]) == len(workflow.steps)

summary = {
    "concept": workflow.concept,
    "example": workflow.example,
    "steps_completed": len(result["observations"]),
    "safe_to_continue": result["approved"],
    "watch_out_for": workflow.caution,
}

print(summary)
`;
}
