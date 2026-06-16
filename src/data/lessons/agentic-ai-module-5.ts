import type { TopicLesson } from "@/lib/types";

export const agenticAiModule5Lessons: Record<string, TopicLesson> = {
  "ai-m5-t1": {
    topicId: "ai-m5-t1",
    intro:
      "An AI agent is an LLM that can take actions — it decides which tools to use, calls them, observes the result, and reasons about what to do next. This is what makes AI go from chatbot to assistant.",
    blocks: [
      {
        type: "heading",
        content: "Chatbot vs Agent",
      },
      {
        type: "paragraph",
        content:
          "A chatbot can only respond with text. It cannot look things up, run code, send emails, or book appointments. An agent can do all of that — because it has access to tools. When you ask an agent 'What's the weather in Mumbai?', it doesn't guess — it calls a weather API, reads the result, and then answers based on real data.",
      },
      {
        type: "visual",
        diagram: {
          title: "Chatbot vs Agent Architecture",
          nodes: [
            { id: "user", label: "User", sublabel: "Asks a question" },
            { id: "chatbot", label: "Chatbot", sublabel: "LLM only → text response from training data" },
            { id: "agent", label: "Agent", sublabel: "LLM + tools → can take real actions" },
            { id: "tools", label: "Tools", sublabel: "Web search, APIs, code execution, databases" },
          ],
          arrows: [
            { from: "user", to: "chatbot" },
            { from: "user", to: "agent" },
            { from: "agent", to: "tools", label: "calls" },
            { from: "tools", to: "agent", label: "returns result" },
          ],
          variant: "compare",
        },
      },
      {
        type: "heading",
        content: "What Can Agents Do?",
      },
      {
        type: "list",
        items: [
          "Search the web for real-time information (current news, stock prices, weather)",
          "Read and write files on your computer",
          "Execute Python code and observe the output",
          "Call external APIs (send email, post to Slack, query a database)",
          "Plan multi-step tasks and recover from errors autonomously",
          "Coordinate other AI agents in a multi-agent pipeline",
        ],
      },
      {
        type: "heading",
        content: "The Agent Loop",
      },
      {
        type: "paragraph",
        content:
          "What distinguishes an agent from a chatbot is a loop. A chatbot makes one API call and returns a response. An agent keeps going: think → act → observe → think → act → observe — until it decides it has enough information to give a final answer. Each 'act' is a tool call; each 'observe' is reading the tool's output.",
      },
      {
        type: "tip",
        content:
          "Agents are powerful but can go wrong. Always set a max_steps limit on the agent loop to prevent infinite loops. Start with max_steps=5 during development.",
      },
      {
        type: "practice",
        practiceLabel: "Agent vs chatbot",
        practicePrompt: "Compare the capabilities of a chatbot vs an agent.",
        starterCode:
          'chatbot_capabilities = [\n    "Answer questions from training data",\n    "Hold a conversation with memory",\n    "Summarise, translate, explain text",\n    "Write and review code",\n]\n\nagent_capabilities = [\n    *chatbot_capabilities,  # everything a chatbot can do, plus:\n    "Search the web for real-time info",\n    "Read and write files",\n    "Call external APIs",\n    "Execute code and observe results",\n    "Plan multi-step tasks and recover from errors",\n]\n\nprint("=== Chatbot can ===")\nfor cap in chatbot_capabilities:\n    print(f"  ✓ {cap}")\n\nprint("\\n=== Agent can ===")\nfor cap in agent_capabilities:\n    marker = "★" if cap not in chatbot_capabilities else "✓"\n    print(f"  {marker} {cap}")',
      },
    ],
    keyTakeaways: [
      "An agent = LLM + tools + a loop that lets it take actions and observe results.",
      "The LLM acts as the 'brain' — it decides which tool to call and when.",
      "Agents can recover from mistakes by observing tool outputs and adjusting their plan.",
    ],
  },

  "ai-m5-t2": {
    topicId: "ai-m5-t2",
    intro:
      "Tool calling (also called function calling) lets you define Python functions and tell the LLM about them. The LLM then decides when to call them and passes the right arguments.",
    blocks: [
      {
        type: "heading",
        content: "How Tool Calling Works",
      },
      {
        type: "paragraph",
        content:
          "You define Python functions (your 'tools') and describe them to the LLM using JSON schema. When the LLM decides a tool is needed, it responds with a special tool_call object instead of text — containing the function name and arguments. You execute the function in Python, then send the result back to the LLM as a new message with role 'tool'.",
      },
      {
        type: "visual",
        diagram: {
          title: "Tool Calling Flow",
          nodes: [
            { id: "user", label: "User Asks", sublabel: "What's the weather in Delhi?" },
            { id: "llm1", label: "LLM Decides", sublabel: "I need to call get_weather" },
            { id: "toolcall", label: "Tool Call Object", sublabel: "get_weather(city='Delhi')" },
            { id: "python", label: "Python Executes", sublabel: "Calls your real function" },
            { id: "result", label: "Tool Result", sublabel: "'32°C, partly cloudy'" },
            { id: "llm2", label: "LLM Answers", sublabel: "It's 32°C and partly cloudy in Delhi" },
          ],
          arrows: [
            { from: "user", to: "llm1" },
            { from: "llm1", to: "toolcall" },
            { from: "toolcall", to: "python" },
            { from: "python", to: "result" },
            { from: "result", to: "llm2" },
          ],
          variant: "flow",
        },
      },
      {
        type: "heading",
        content: "Defining Tools in JSON Schema",
      },
      {
        type: "paragraph",
        content:
          "The LLM needs to know what each tool does and what parameters it takes. You describe this using a JSON schema format. The description is the most important part — the LLM reads it to decide whether to call the tool.",
      },
      {
        type: "code",
        code: `import json
from groq import Groq
import os

client = Groq(api_key=os.environ.get("GROQ_API_KEY"))

# Step 1: Define your Python functions
def get_weather(city: str) -> str:
    """Call a real weather API here in production."""
    return f"32°C, partly cloudy in {city}"

def search_web(query: str) -> str:
    """Call a real search API here in production."""
    return f"Top result for '{query}': ..."

# Step 2: Describe tools to the LLM
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get current weather conditions for a given city",
            "parameters": {
                "type": "object",
                "properties": {
                    "city": {
                        "type": "string",
                        "description": "The city name, e.g. 'Mumbai' or 'London'"
                    }
                },
                "required": ["city"]
            }
        }
    }
]

# Step 3: Send to the model
response = client.chat.completions.create(
    model="llama3-groq-70b-8192-tool-use-preview",
    messages=[{"role": "user", "content": "What's the weather in Mumbai?"}],
    tools=tools,
    tool_choice="auto"   # model decides whether to use a tool
)

# Step 4: Check if model wants to call a tool
choice = response.choices[0]
if choice.finish_reason == "tool_calls":
    tool_call = choice.message.tool_calls[0]
    func_name = tool_call.function.name
    args = json.loads(tool_call.function.arguments)
    result = get_weather(**args)   # execute the tool
    print(f"Tool called: {func_name}({args})")
    print(f"Result: {result}")`,
      },
      {
        type: "tip",
        content:
          "Use llama3-groq-70b-8192-tool-use-preview on Groq for best tool calling results. This model has been specially fine-tuned for function calling tasks.",
      },
      {
        type: "practice",
        practiceLabel: "Define tools",
        practicePrompt:
          "Define two tools and see how they are described to the LLM.",
        starterCode:
          'import json\n\n# 1. Define your Python functions\ndef get_weather(city: str) -> str:\n    """Simulate a weather API call."""\n    return f"The weather in {city} is 22°C and sunny."\n\ndef calculate(expression: str) -> str:\n    """Safely evaluate a math expression."""\n    try:\n        result = eval(expression, {"__builtins__": {}})\n        return str(result)\n    except Exception as e:\n        return f"Error: {e}"\n\n# 2. Describe them to the LLM in JSON schema format\ntools = [\n    {\n        "type": "function",\n        "function": {\n            "name": "get_weather",\n            "description": "Get the current weather for a city",\n            "parameters": {\n                "type": "object",\n                "properties": {\n                    "city": {"type": "string", "description": "The city name"}\n                },\n                "required": ["city"]\n            }\n        }\n    },\n]\n\nprint("Tool definition sent to LLM:")\nprint(json.dumps(tools[0], indent=2))\n\n# 3. The LLM responds with a tool call, you execute it:\nllm_tool_call = {"name": "get_weather", "arguments": {"city": "Mumbai"}}\nresult = get_weather(**llm_tool_call["arguments"])\nprint(f"\\nTool result: {result}")',
      },
    ],
    keyTakeaways: [
      "You describe tools to the LLM using JSON schema — name, description, and parameters.",
      "The LLM decides whether to call a tool based on the user's request.",
      "You execute the tool in Python and send the result back to the LLM.",
    ],
  },

  "ai-m5-t3": {
    topicId: "ai-m5-t3",
    intro:
      "A simple agent combines tool calling with a loop. The agent keeps running until the LLM decides it has enough information to give a final answer.",
    blocks: [
      {
        type: "heading",
        content: "The Agent Loop in Code",
      },
      {
        type: "paragraph",
        content:
          "An agent is a while loop that runs until the LLM's finish_reason is 'stop' (meaning it wants to give a final answer) rather than 'tool_calls' (meaning it wants to call another tool). Inside the loop, you call the API, check if a tool was requested, execute the tool, add the result to history, and call the API again.",
      },
      {
        type: "code",
        code: `import json
from groq import Groq
import os

client = Groq(api_key=os.environ.get("GROQ_API_KEY"))

# Define tools (same as previous lesson)
def get_weather(city: str) -> str:
    return f"32°C, sunny in {city}"

def search_web(query: str) -> str:
    return f"Search result for '{query}': Python created by Guido van Rossum, 1991."

TOOLS_MAP = {"get_weather": get_weather, "search_web": search_web}
TOOLS_SCHEMA = [
    # ... (same JSON schema as previous lesson)
]

def run_agent(user_query: str, max_steps: int = 5) -> str:
    """Simple agent loop."""
    messages = [
        {"role": "system", "content": "You are a helpful assistant with access to tools."},
        {"role": "user", "content": user_query},
    ]

    for step in range(max_steps):
        response = client.chat.completions.create(
            model="llama3-groq-70b-8192-tool-use-preview",
            messages=messages,
            tools=TOOLS_SCHEMA,
            tool_choice="auto",
        )

        choice = response.choices[0]

        if choice.finish_reason == "stop":
            # LLM has a final answer
            return choice.message.content

        if choice.finish_reason == "tool_calls":
            # LLM wants to call a tool
            messages.append(choice.message)  # add assistant message with tool_call

            for tool_call in choice.message.tool_calls:
                func = TOOLS_MAP[tool_call.function.name]
                args = json.loads(tool_call.function.arguments)
                result = func(**args)

                # Add tool result to history
                messages.append({
                    "role": "tool",
                    "tool_call_id": tool_call.id,
                    "content": result,
                })

    return "Error: max steps reached"`,
      },
      {
        type: "heading",
        content: "Key Points About the Agent Loop",
      },
      {
        type: "list",
        items: [
          "The loop runs until finish_reason == 'stop' (final answer) or max_steps is reached",
          "Tool results are added to history as role: 'tool' messages",
          "The LLM can call multiple tools in one step (parallel tool calling)",
          "Each tool_call has a unique id — use it when adding the tool result to history",
          "Always set max_steps — without it, a buggy tool can cause an infinite loop",
        ],
      },
      {
        type: "tip",
        content:
          "During development, print every tool call and its result. This lets you trace exactly what the agent is doing and helps you debug unexpected behaviour.",
      },
      {
        type: "practice",
        practiceLabel: "Agent loop",
        practicePrompt: "Trace through the agent loop step by step.",
        starterCode:
          'import json\n\n# Available tools\ndef get_weather(city: str) -> str:\n    return f"22°C, sunny in {city}"\n\ndef search_web(query: str) -> str:\n    return f"Top result for \'{query}\': Python was created by Guido van Rossum in 1991."\n\nTOOLS = {"get_weather": get_weather, "search_web": search_web}\n\ndef run_agent(user_query: str, max_steps: int = 5):\n    """Simulate an agent loop."""\n    print(f"User: {user_query}\\n")\n    \n    # Simulate LLM deciding to use a tool\n    simulated_steps = [\n        {"action": "tool_call", "tool": "search_web",  "args": {"query": user_query}},\n        {"action": "final_answer", "text": "Based on my research: Python was created by Guido van Rossum in 1991 and is named after Monty Python."},\n    ]\n    \n    for step_num, step in enumerate(simulated_steps, 1):\n        print(f"Step {step_num}:")\n        if step["action"] == "tool_call":\n            tool_fn = TOOLS[step["tool"]]\n            result  = tool_fn(**step["args"])\n            print(f"  → Called {step[\'tool\']}({step[\'args\']})")\n            print(f"  ← Result: {result}")\n        elif step["action"] == "final_answer":\n            print(f"  ✅ Final answer: {step[\'text\']}")\n\nrun_agent("Who created Python and when?")',
      },
    ],
    keyTakeaways: [
      "The agent loop: think → call tool → observe result → think again → repeat until done.",
      "The LLM is the decision-maker — your code just executes what it decides.",
      "Always set a max_steps limit to prevent infinite loops.",
    ],
  },

  "ai-m5-t4": {
    topicId: "ai-m5-t4",
    intro:
      "ReAct (Reason + Act) is the standard pattern for building agents. The LLM alternates between Thought (reasoning about what to do), Action (calling a tool), and Observation (reading the result).",
    blocks: [
      {
        type: "heading",
        content: "The ReAct Pattern",
      },
      {
        type: "paragraph",
        content:
          "ReAct stands for Reason + Act. It was introduced in a 2022 research paper and has become the dominant pattern for AI agents. The key insight is that interleaving reasoning and acting is better than either alone. By writing out its thoughts before each action, the LLM makes better decisions and is less likely to make mistakes.",
      },
      {
        type: "visual",
        diagram: {
          title: "ReAct Loop",
          nodes: [
            { id: "question", label: "Question", sublabel: "User's request" },
            { id: "thought", label: "Thought", sublabel: "LLM reasons about what to do next" },
            { id: "action", label: "Action", sublabel: "LLM calls a tool" },
            { id: "observation", label: "Observation", sublabel: "Tool returns a result" },
            { id: "answer", label: "Final Answer", sublabel: "LLM has enough info to respond" },
          ],
          arrows: [
            { from: "question", to: "thought" },
            { from: "thought", to: "action" },
            { from: "action", to: "observation" },
            { from: "observation", to: "thought", label: "repeat if needed" },
            { from: "thought", to: "answer", label: "when done" },
          ],
          variant: "flow",
        },
      },
      {
        type: "heading",
        content: "ReAct in Practice",
      },
      {
        type: "paragraph",
        content:
          "In the Groq API, you implement ReAct by including the chain-of-thought instructions in your system prompt. You tell the model to write a Thought before each Action. The Thought becomes visible in the model's response, giving you full transparency into its reasoning.",
      },
      {
        type: "code",
        code: `# ReAct system prompt
REACT_SYSTEM_PROMPT = """
You are a helpful assistant with access to tools.

When answering questions, follow this pattern:

Thought: [reason about what you need to do and which tool to use]
Action: [call the appropriate tool]
Observation: [the tool result will appear here]
... (repeat Thought/Action/Observation as needed)
Thought: [reason about the final answer based on observations]
Final Answer: [your answer to the user's question]

Always reason explicitly in the Thought steps. Never skip them.
"""

# Example ReAct trace for "What's the population of Tokyo?"
react_trace = """
Thought: The user wants to know Tokyo's population. I should search for this.
Action: search_web("Tokyo population 2024")
Observation: Tokyo metropolitan area population is approximately 37.4 million (2024).
Thought: I have the data I need. I can now answer the question.
Final Answer: Tokyo's metropolitan area population is approximately 37.4 million,
making it the world's most populous city.
"""`,
      },
      {
        type: "heading",
        content: "Benefits of Making Reasoning Visible",
      },
      {
        type: "list",
        items: [
          "Easier debugging — you can see exactly why the agent made each decision",
          "Better accuracy — writing reasoning forces the model to think before acting",
          "User trust — users can see the agent's thought process, not just the final answer",
          "Reproducibility — structured traces make it easier to compare agent runs",
          "Error recovery — the agent can reason about why a tool failed and try a different approach",
        ],
      },
      {
        type: "tip",
        content:
          "Modern agent frameworks like LangGraph, CrewAI, and AutoGen all implement ReAct under the hood. Understanding the pattern manually (as you're doing now) gives you the knowledge to use and debug these frameworks effectively.",
      },
      {
        type: "practice",
        practiceLabel: "ReAct trace",
        practicePrompt:
          "Trace through a complete ReAct loop for a multi-step question.",
        starterCode:
          '# ReAct = Reason + Act\n# The LLM produces Thought → Action → Observation cycles\n\nreact_trace = [\n    {\n        "step": "Thought",\n        "content": "The user wants to know the weather in London and if it\'s good for a picnic. I should first get the weather."\n    },\n    {\n        "step": "Action",\n        "content": "get_weather(city=\'London\')"\n    },\n    {\n        "step": "Observation",\n        "content": "15°C, partly cloudy, 30% chance of rain"\n    },\n    {\n        "step": "Thought",\n        "content": "The weather is mild but there\'s a 30% rain chance. I have enough info to answer."\n    },\n    {\n        "step": "Final Answer",\n        "content": "London is 15°C with some clouds and a 30% chance of rain. It could work for a picnic but bring a jacket and maybe an umbrella!"\n    },\n]\n\nfor item in react_trace:\n    prefix = "→" if item["step"] == "Action" else "←" if item["step"] == "Observation" else "•"\n    print(f"{prefix} [{item[\'step\'].upper()}]")\n    print(f"  {item[\'content\']}")\n    print()',
      },
    ],
    keyTakeaways: [
      "ReAct alternates between Thought, Action, and Observation until the task is complete.",
      "The Thought step is crucial — it forces the model to reason before acting.",
      "ReAct agents are transparent: you can read their reasoning at each step.",
    ],
  },
};
