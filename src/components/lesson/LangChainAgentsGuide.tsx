"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink, ClipboardList, CheckCircle2, Circle, Info } from "lucide-react";

const COLAB_URL = "https://colab.research.google.com/#create=true";

interface TermBadge { name: string; desc: string; }
interface Step {
  id: number;
  title: string;
  category: string;
  explanation: string;
  terms: TermBadge[];
  code: string;
  color: "blue" | "violet" | "green" | "teal" | "orange";
}

const STEPS: Step[] = [
  {
    id: 1,
    title: "OpenAI Function Agent",
    category: "Agent Type 1",
    explanation:
      "The OpenAI Function Agent uses OpenAI's function-calling API to structure outputs and call predefined tools. " +
      "The @tool decorator registers a function that the agent can invoke. AgentExecutor wraps the agent and manages tool calls end-to-end.",
    terms: [
      { name: "@tool", desc: "Decorator that registers a Python function as a callable tool for the agent." },
      { name: "create_openai_functions_agent", desc: "Creates an agent that uses OpenAI function-calling to invoke tools." },
      { name: "AgentExecutor", desc: "Wraps the agent to manage tool execution, retries and output collection." },
    ],
    code: `from langchain.agents import create_openai_functions_agent, AgentExecutor
from langchain_openai import ChatOpenAI
from langchain_core.tools import tool
from langchain_core.prompts import ChatPromptTemplate, MessagesPlaceholder

@tool
def greet(name: str) -> str:
    """Return a greeting message for the given name."""
    return f"Hello, {name}!"

llm = ChatOpenAI(model="gpt-4-0613")

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant with access to tools."),
    ("human", "{input}"),
    MessagesPlaceholder(variable_name="agent_scratchpad"),
])

agent = create_openai_functions_agent(llm, [greet], prompt=prompt)
agent_executor = AgentExecutor(agent=agent, tools=[greet], verbose=True)

response = agent_executor.invoke({"input": "Greet Alice"})
print(response["output"])
# Output: Hello, Alice!`,
    color: "blue",
  },
  {
    id: 2,
    title: "React Agent",
    category: "Agent Type 3",
    explanation:
      "React (Reasoning + Acting) combines step-by-step reasoning with tool calls. The agent iterates through " +
      "Thought → Action → Observation cycles until it reaches a final answer. Ideal for complex, multi-step tasks.",
    terms: [
      { name: "REACT_PROMPT_TEMPLATE", desc: "Defines the Thought → Action → Observation reasoning format for the agent." },
      { name: "create_react_agent", desc: "Initializes an agent that iteratively reasons and acts using the React pattern." },
      { name: "handle_parsing_errors=True", desc: "Ensures the agent gracefully recovers from output parsing failures." },
    ],
    code: `from langchain.agents import create_react_agent, AgentExecutor
from langchain_openai import ChatOpenAI
from langchain_core.tools import tool
from langchain_core.prompts import ChatPromptTemplate

REACT_PROMPT_TEMPLATE = """You are a thoughtful agent.

Thought: think before acting
Action: one of [{tool_names}]
Action Input: the input
Observation: the result

Thought: I now know the final answer
Final Answer: the answer to give

Tools: {tools}

Question: {input}
{agent_scratchpad}"""

@tool
def echo(text: str) -> str:
    """Return the input text as output."""
    return text

llm = ChatOpenAI(model="gpt-4")
prompt = ChatPromptTemplate.from_template(REACT_PROMPT_TEMPLATE)
prompt.input_variables.extend(["tools", "tool_names"])

agent = create_react_agent(llm, [echo], prompt=prompt)
agent_executor = AgentExecutor(
    agent=agent, tools=[echo], verbose=True, handle_parsing_errors=True)

response = agent_executor.invoke({"input": "Echo Hello World"})
print(response["output"])`,
    color: "violet",
  },
  {
    id: 3,
    title: "Calculator Tool",
    category: "Tool Type 1",
    explanation:
      "A simple tool that evaluates math expressions. Tools are created using the Tool class with a name, " +
      "function and description. The agent reads the description to decide when to call this tool.",
    terms: [
      { name: "Tool(name, func, description)", desc: "Registers a Python function as a named LangChain tool with a description the agent reads." },
      { name: "calc_tool.run()", desc: "Directly invokes the tool with an input string — useful for testing." },
    ],
    code: `from langchain.agents import Tool

def calculator(expression: str) -> str:
    try:
        return str(eval(expression))
    except Exception as e:
        return f"Error: {e}"

calc_tool = Tool(
    name="Calculator",
    func=calculator,
    description="Evaluate a math expression like 2+2 or 125*12"
)

result = calc_tool.run("125 * 12")
print("Calculator Output:", result)
# Output: Calculator Output: 1500`,
    color: "green",
  },
  {
    id: 4,
    title: "Python REPL Tool",
    category: "Tool Type 4",
    explanation:
      "Allows agents to execute arbitrary Python code. This is more powerful than a calculator — it can run " +
      "loops, list comprehensions, string operations or any valid Python expression dynamically.",
    terms: [
      { name: "eval(code)", desc: "Executes a Python expression string and returns the result — powerful but use with caution in production." },
    ],
    code: `from langchain.agents import Tool

def python_eval(code: str) -> str:
    try:
        return str(eval(code))
    except Exception as e:
        return f"Error: {e}"

python_tool = Tool(
    name="Python REPL",
    func=python_eval,
    description="Run Python code and return the result"
)

result = python_tool.run("10 + 25")
print("Python REPL Output:", result)
# Output: Python REPL Output: 35

result2 = python_tool.run("[x**2 for x in range(5)]")
print("List comprehension:", result2)
# Output: List comprehension: [0, 1, 4, 9, 16]`,
    color: "teal",
  },
  {
    id: 5,
    title: "Multi-Tool Agent",
    category: "Combined Example",
    explanation:
      "A multi-tool agent has access to several tools and intelligently picks the right one for each sub-task. " +
      "The ZERO_SHOT_REACT_DESCRIPTION agent type uses reasoning + action without prior examples — deciding tool selection purely from descriptions.",
    terms: [
      { name: "initialize_agent", desc: "Creates an agent from a list of tools and an LLM — a convenient setup for common agent patterns." },
      { name: "ZERO_SHOT_REACT_DESCRIPTION", desc: "Agent type that uses the tool description alone (no examples) to reason which tool to invoke." },
      { name: "agent.run()", desc: "Runs the agent with a natural language input — the agent handles all tool routing internally." },
    ],
    code: `from langchain.agents import initialize_agent, AgentType, Tool
from langchain.chat_models import ChatOpenAI

# Reuse calc_tool and python_tool from previous steps
tools = [calc_tool, python_tool]

llm = ChatOpenAI(model="gpt-4")

agent = initialize_agent(
    tools=tools,
    llm=llm,
    agent_type=AgentType.ZERO_SHOT_REACT_DESCRIPTION,
    verbose=True
)

response = agent.run(
    "Calculate 15*12, then run the Python expression 10+25."
)
print(response)
# Agent decides: use Calculator for 15*12, Python REPL for 10+25`,
    color: "orange",
  },
];

const STEP_COLORS = {
  blue:   { headerBg: "bg-blue-50",   headerBorder: "border-blue-200",   num: "bg-blue-600",   termBadge: "bg-blue-100 text-blue-800",   doneBorder: "border-blue-200",   doneBg: "bg-blue-50",   doneTitle: "text-blue-800",   doneCheck: "text-blue-500"   },
  violet: { headerBg: "bg-violet-50", headerBorder: "border-violet-200", num: "bg-violet-600", termBadge: "bg-violet-100 text-violet-800", doneBorder: "border-violet-200", doneBg: "bg-violet-50", doneTitle: "text-violet-800", doneCheck: "text-violet-500" },
  green:  { headerBg: "bg-green-50",  headerBorder: "border-green-200",  num: "bg-green-600",  termBadge: "bg-green-100 text-green-800",  doneBorder: "border-green-200",  doneBg: "bg-green-50",  doneTitle: "text-green-800",  doneCheck: "text-green-500"  },
  teal:   { headerBg: "bg-teal-50",   headerBorder: "border-teal-200",   num: "bg-teal-600",   termBadge: "bg-teal-100 text-teal-800",   doneBorder: "border-teal-200",   doneBg: "bg-teal-50",   doneTitle: "text-teal-800",   doneCheck: "text-teal-500"   },
  orange: { headerBg: "bg-orange-50", headerBorder: "border-orange-200", num: "bg-orange-600", termBadge: "bg-orange-100 text-orange-800", doneBorder: "border-orange-200", doneBg: "bg-orange-50", doneTitle: "text-orange-800", doneCheck: "text-orange-500" },
} as const;

export function LangChainAgentsGuide() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [doneSteps, setDoneSteps] = useState<Set<number>>(new Set());

  function copyCode(id: number, code: string) {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedId(id);
      setDoneSteps((prev) => new Set([...prev, id]));
      setTimeout(() => setCopiedId(null), 2000);
    });
  }

  const total = STEPS.length;
  const count = doneSteps.size;
  const pct = Math.round((count / total) * 100);
  const allDone = count === total;

  return (
    <div className="space-y-4">
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl border border-green-200 bg-gradient-to-r from-green-50 to-teal-50 shadow-sm">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <ClipboardList className="h-4 w-4 text-green-600" />
              <p className="text-[13.5px] font-bold text-slate-900">Try in Jupyter</p>
            </div>
            <a
              href={COLAB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-orange-300 bg-white px-3 py-1.5 text-[11.5px] font-semibold text-orange-700 shadow-sm transition hover:bg-orange-50"
            >
              <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-gradient-to-br from-orange-400 to-yellow-400 text-[9px] font-bold text-white">Co</span>
              Open Colab
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <p className="mt-1 text-[11.5px] text-slate-500">Key agent & tool code examples</p>

          {/* Progress bar */}
          <div className="mt-3 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-slate-500">{count} of {total} copied</span>
              <span className={`text-[11px] font-bold ${allDone ? "text-green-600" : "text-slate-500"}`}>{pct}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className={`h-full rounded-full transition-all duration-500 ${allDone ? "bg-green-500" : "bg-green-400"}`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          {allDone && (
            <div className="mt-3 flex items-center gap-2 rounded-xl border border-green-200 bg-white px-3 py-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <p className="text-[12px] font-semibold text-green-700">All examples copied — great work!</p>
            </div>
          )}
        </div>

        {/* Mini checklist */}
        <div className="space-y-1.5 border-t border-green-100 bg-white/60 px-4 py-3">
          {STEPS.map((step) => {
            const done = doneSteps.has(step.id);
            const c = STEP_COLORS[step.color];
            return (
              <div key={step.id} className={`flex items-center gap-2.5 rounded-lg border px-3 py-2 transition-all duration-300 ${done ? `${c.doneBorder} ${c.doneBg}` : "border-gray-100 bg-gray-50"}`}>
                {done ? <CheckCircle2 className={`h-4 w-4 shrink-0 ${c.doneCheck}`} /> : <Circle className="h-4 w-4 shrink-0 text-gray-300" />}
                <div className="min-w-0">
                  <span className={`text-[11.5px] font-medium ${done ? c.doneTitle : "text-gray-600"}`}>
                    <span className="mr-1 text-[10px] text-gray-400">{step.category} ·</span>
                    {step.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Steps ──────────────────────────────────────────────────────────── */}
      {STEPS.map((step, idx) => {
        const c = STEP_COLORS[step.color];
        const isCopied = copiedId === step.id;
        return (
          <div key={step.id} className="relative">
            {idx < STEPS.length - 1 && (
              <div className="absolute left-5 top-full h-4 w-0.5 bg-gradient-to-b from-green-300 to-transparent" />
            )}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <div className={`flex items-center gap-3 border-b ${c.headerBorder} ${c.headerBg} px-4 py-3`}>
                <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${c.num} text-xs font-bold text-white shadow-sm`}>
                  {step.id}
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">{step.category}</p>
                  <h3 className="text-[13.5px] font-bold text-gray-900">{step.title}</h3>
                </div>
              </div>

              <div className="space-y-3 p-4">
                <p className="text-[12.5px] leading-relaxed text-gray-700">{step.explanation}</p>

                {step.terms.length > 0 && (
                  <div className="space-y-1.5">
                    {step.terms.map((t) => (
                      <div key={t.name} className="flex items-start gap-2.5 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                        <code className={`mt-0.5 shrink-0 rounded-md px-1.5 py-0.5 text-[10.5px] font-bold ${c.termBadge}`}>{t.name}</code>
                        <p className="text-[11.5px] leading-relaxed text-gray-600">{t.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Code cell */}
                <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between border-b border-gray-200 bg-[#f8f9fa] px-3 py-1.5">
                    <div className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded border border-gray-300 bg-white">
                        <svg width="8" height="10" viewBox="0 0 10 12" fill="currentColor" className="text-gray-500"><path d="M0 0l10 6-10 6V0z" /></svg>
                      </div>
                      <span className="font-mono text-[10.5px] text-gray-500">[ {step.id} ]</span>
                      <span className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-[9.5px] text-gray-500">Python</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyCode(step.id, step.code)}
                      className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-[10.5px] font-medium text-gray-600 transition-colors hover:bg-gray-50"
                    >
                      {isCopied ? (<><Check className="h-3 w-3 text-green-500" /><span className="text-green-600">Copied!</span></>) : (<><Copy className="h-3 w-3" />Copy</>)}
                    </button>
                  </div>
                  <div className="max-h-64 overflow-y-auto bg-white px-4 py-3 [scrollbar-width:thin]">
                    <pre className="font-mono text-[11.5px] leading-[1.8] text-gray-800">{step.code}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="flex items-start gap-2 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
        <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400" />
        <p className="text-[11px] leading-relaxed text-gray-400">
          This tracker is optional — you can move to the next topic at any time.
        </p>
      </div>
    </div>
  );
}
