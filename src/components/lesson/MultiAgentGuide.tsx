"use client";

import { useState } from "react";
import { Check, Copy, ExternalLink, Monitor, BookOpen, Layers, ShieldCheck, HelpCircle, Code, ListFilter, AlertTriangle, Cpu } from "lucide-react";
import { useLangChainCopy } from "./LangChainCopyContext";

/* ── Data ───────────────────────────────────────────────────────────────────── */

const COLAB_TEMPLATE_URL = "https://colab.research.google.com/#create=true";
const VSCODE_JUPYTER_URL = "https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter";

interface Package {
  name: string;
  desc: string;
}

interface Step {
  id: number;
  title: string;
  explanation: string;
  packages: Package[];
  code: string;
}

const STEPS: Step[] = [
  {
    id: 1,
    title: "Install the Dependencies",
    explanation:
      "Before setting up multiple agents, make sure the Groq SDK is installed locally to make API requests.",
    packages: [
      {
        name: "groq",
        desc: "The official python SDK for requesting ultra-fast LLM inference on Groq's LPUs.",
      },
    ],
    code: `!pip install groq

print("✅ Groq SDK installed successfully!")`,
  },
  {
    id: 2,
    title: "Define Agent Roles",
    explanation:
      "Initialize the Groq client and create a general-purpose agent execution harness. The system prompt dynamically configures the agent's role (e.g. Researcher, Technical Writer, or Editor).",
    packages: [
      {
        name: "run_agent",
        desc: "Executes a model call with a specified role persona and task, limiting the output tokens to keep the response focused.",
      },
    ],
    code: `import os
from groq import Groq

# Replace the placeholder with your actual Groq API key
os.environ["GROQ_API_KEY"] = "YOUR_GROQ_API_KEY"
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
    return response.choices[0].message.content

print("✅ Multi-agent execution harness defined!")`,
  },
  {
    id: 3,
    title: "Orchestrate the Agents",
    explanation:
      "Run the multi-agent orchestration pipeline. The Researcher gathers key facts on a topic, passes them to the Technical Writer to draft an intro, and the Editor reviews the draft and suggests improvements.",
    packages: [
      {
        name: "Agent Orchestration",
        desc: "Coordinates subagents sequentially by passing the output of one agent as input into the prompt of the next agent.",
      },
    ],
    code: `topic = "how to use LangChain with Groq"

# Agent 1 — Researcher gathers facts
facts = run_agent("researcher", f"List 3 key facts about: {topic}")
print("🔬 RESEARCHER:")
print(facts)
print("\\n" + "="*50 + "\\n")

# Agent 2 — Technical Writer uses researcher's output to draft an intro
draft = run_agent("technical writer", f"Write a 2-sentence intro using these facts:\\n{facts}")
print("✍️ WRITER:")
print(draft)
print("\\n" + "="*50 + "\\n")

# Agent 3 — Editor reviews the draft and provides feedback
feedback = run_agent("editor", f"Give one concrete improvement for this intro:\\n{draft}")
print("🔎 EDITOR:")
print(feedback)`,
  },
];

/* ── Copy hook ──────────────────────────────────────────────────────────────── */
function useCopy() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const { markCopied } = useLangChainCopy();

  function copy(id: number, text: string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      markCopied(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  }

  return { copiedId, copy };
}

/* ── Main component ─────────────────────────────────────────────────────────── */
export function MultiAgentGuide() {
  const { copiedId, copy } = useCopy();
  const [activeTab, setActiveTab] = useState<"overview" | "working" | "comparison">("overview");

  return (
    <div className="space-y-8">
      {/* ── Header card ────────────────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-purple-50 shadow-sm">
        <div className="border-b border-violet-100 bg-white/60 px-6 py-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-violet-700">
                Advanced AI Architectures
              </p>
              <h2 className="mt-1 text-[22px] font-bold text-gray-900">
                Agentic RAG &amp; Multi-Agent Systems
              </h2>
              <p className="mt-1.5 text-[14px] leading-relaxed text-gray-600">
                Enhance traditional RAG with autonomous decision-making. Learn how a single agent router or coordinated multi-agent orchestrators plan, validate, and execute complex workflows.
              </p>
            </div>
            <BookOpen className="mt-1 h-8 w-8 shrink-0 text-violet-500" />
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={COLAB_TEMPLATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-orange-300 bg-white px-4 py-2 text-[13px] font-semibold text-orange-700 shadow-sm transition-all hover:bg-orange-50 hover:shadow-md"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-gradient-to-br from-orange-400 to-yellow-400 text-[10px] font-bold text-white">
                Co
              </span>
              Open Google Colab
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <a
              href={VSCODE_JUPYTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-blue-300 bg-white px-4 py-2 text-[13px] font-semibold text-blue-700 shadow-sm transition-all hover:bg-blue-50 hover:shadow-md"
            >
              <Monitor className="h-4 w-4" />
              Try in VS Code
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Theoretical Overview & Interactive Tabs ────────────────────────── */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 pb-3 flex-wrap gap-2">
          {(["overview", "working", "comparison"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                activeTab === tab
                  ? "bg-violet-600 text-white shadow-sm"
                  : "text-gray-600 hover:bg-slate-50 hover:text-gray-900"
              }`}
            >
              {tab === "overview" && "1. Overview & Architectures"}
              {tab === "working" && "2. Lifecycle & Agent Types"}
              {tab === "comparison" && "3. Traditional vs Agentic RAG"}
            </button>
          ))}
        </div>

        {/* Tab 1: Overview */}
        {activeTab === "overview" && (
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">What is Agentic RAG?</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-gray-600">
                Agentic RAG enhances traditional Retrieval-Augmented Generation by enabling AI agents to not only retrieve information but also decide how to use it, introducing autonomous decision-making for more flexible and intelligent responses.
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 text-[13px] text-gray-700">
                <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                  <strong>Agentic AI:</strong> Refers to AI systems capable of autonomous decision-making, adapting actions based on real-time data instead of fixed instructions.
                </div>
                <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2">
                  <strong>Agents:</strong> Autonomous entities that retrieve, process, and act on information, actively interacting with their environment to generate better outcomes.
                </div>
              </div>
            </div>

            {/* Ingestion to Generation Flow */}
            <div className="space-y-4 border-t border-slate-100 pt-5">
              <h4 className="font-bold text-sm text-slate-800">The 3 Architecture Types of Agentic RAG</h4>
              
              <div className="grid gap-4 sm:grid-cols-3 text-[13px]">
                <div className="rounded-xl border border-violet-100 bg-violet-50/20 p-4">
                  <div className="flex items-center gap-1.5 font-bold text-violet-950">
                    <span className="h-2 w-2 rounded-full bg-violet-600" />
                    1. Single Agent (Router)
                  </div>
                  <p className="mt-2 text-slate-600 font-normal leading-relaxed">
                    Acts as a central dispatcher routing queries to the most appropriate database, API tool, or search engine.
                  </p>
                </div>
                
                <div className="rounded-xl border border-violet-100 bg-violet-50/20 p-4">
                  <div className="flex items-center gap-1.5 font-bold text-violet-950">
                    <span className="h-2 w-2 rounded-full bg-violet-600" />
                    2. Multi-Agent RAG
                  </div>
                  <p className="mt-2 text-slate-600 font-normal leading-relaxed">
                    A master coordinator delegates tasks to specialized subagents. Supports parallel processing of subtasks.
                  </p>
                </div>

                <div className="rounded-xl border border-violet-100 bg-violet-50/20 p-4">
                  <div className="flex items-center gap-1.5 font-bold text-violet-950">
                    <span className="h-2 w-2 rounded-full bg-violet-600" />
                    3. Agentic Orchestration
                  </div>
                  <p className="mt-2 text-slate-600 font-normal leading-relaxed">
                    Coordinates agents to plan, validate, and refine workflows dynamically using memory and feedback loops.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Working & Agent Types */}
        {activeTab === "working" && (
          <div className="mt-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Working Loop */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-gray-900">Working Lifecycle of Agentic RAG</h3>
                <div className="space-y-3">
                  {[
                    { step: "Query Ingest & Refinement", desc: "User submits query. LLM reviews and rewrites it for clarity." },
                    { step: "Source Selection", desc: "Agent dynamically selects the vector DB, APIs, or internet based on context." },
                    { step: "Data Retrieval", desc: "Chosen source is queried, and relevant context is collected." },
                    { step: "Context Integration & Generation", desc: "LLM produces response using enhanced context." },
                    { step: "Answer Validation", desc: "Agent verifies response accuracy against original query before outputting." }
                  ].map((s, idx) => (
                    <div key={idx} className="flex gap-3">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-600 text-[10px] font-bold text-white">
                        {idx + 1}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[12.5px] font-semibold text-slate-800 leading-none">{s.step}</p>
                        <p className="mt-0.5 text-[11.5px] text-gray-500 leading-normal">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Types of Agents */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-gray-900">Specialized Agent Roles</h3>
                <div className="space-y-3 text-[12.5px] text-gray-600">
                  <div className="rounded-xl border border-slate-100 p-3">
                    <strong className="text-slate-800">Routing Agent:</strong> Analyzes user intent and routes them to the best RAG sub-pipeline.
                  </div>
                  <div className="rounded-xl border border-slate-100 p-3">
                    <strong className="text-slate-800">Tool Use Agent:</strong> Connects with external APIs, databases, or execution terminals.
                  </div>
                  <div className="rounded-xl border border-slate-100 p-3">
                    <strong className="text-slate-800">ReAct Agent (Reason + Act):</strong> Alternates between reasoning thoughts and selecting actions.
                  </div>
                  <div className="rounded-xl border border-slate-100 p-3">
                    <strong className="text-slate-800">Dynamic Planning Agent:</strong> Builds detailed workflows, validation checks, and iterations.
                  </div>
                </div>
              </div>
            </div>

            {/* Frameworks section */}
            <div className="border-t border-slate-100 pt-5 space-y-4">
              <h3 className="text-base font-bold text-gray-900">Frameworks for Agentic RAG</h3>
              <div className="grid gap-4 sm:grid-cols-3 text-[13px]">
                <div className="rounded-xl border border-slate-100 p-4">
                  <h4 className="font-bold text-violet-950">1. LangChain</h4>
                  <p className="mt-1 text-slate-500">Simplifies agent integration with models, prompt management, and basic sequential chain definitions.</p>
                </div>
                <div className="rounded-xl border border-slate-100 p-4">
                  <h4 className="font-bold text-violet-950">2. LlamaIndex</h4>
                  <p className="mt-1 text-slate-500">Focuses on connecting LLMs with external data through efficient indexing and context-aware retrieval.</p>
                </div>
                <div className="rounded-xl border border-slate-100 p-4">
                  <h4 className="font-bold text-violet-950">3. LangGraph</h4>
                  <p className="mt-1 text-slate-500">Orchestrates advanced multi-agent interactions, maintaining complex states, and loops.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Comparison */}
        {activeTab === "comparison" && (
          <div className="mt-6 space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Traditional vs. Agentic RAG</h3>
            
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-left text-[13px]">
                <thead className="bg-slate-50 font-semibold text-slate-700">
                  <tr>
                    <th className="px-4 py-3">Feature</th>
                    <th className="px-4 py-3">Traditional RAG</th>
                    <th className="px-4 py-3">Agentic RAG</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-gray-600">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Decision-Making</td>
                    <td className="px-4 py-3">Reactive, follows predefined, static database-to-prompt workflows.</td>
                    <td className="px-4 py-3 font-semibold text-violet-700 bg-violet-50/10">Proactive, decides autonomously what tools to execute.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Data Retrieval</td>
                    <td className="px-4 py-3">Fixed search paths across indexed database documentation.</td>
                    <td className="px-4 py-3 font-semibold text-violet-700 bg-violet-50/10">Dynamic retrieval from vector stores, APIs, and the web.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Flexibility</td>
                    <td className="px-4 py-3">Low flexibility; static pipeline templates.</td>
                    <td className="px-4 py-3 font-semibold text-violet-700 bg-violet-50/10">High flexibility; adapts query plans dynamically on the fly.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Autonomy</td>
                    <td className="px-4 py-3">Dependent on exact matching queries from user inputs.</td>
                    <td className="px-4 py-3 font-semibold text-violet-700 bg-violet-50/10">Runs independently, validates and improves answers.</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-gray-900">Use Case</td>
                    <td className="px-4 py-3">Static FAQs and simple customer search portals.</td>
                    <td className="px-4 py-3 font-semibold text-violet-700 bg-violet-50/10">Advanced recommendation networks and complex coding agents.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Side-by-side section: Advantages and limitations */}
            <div className="grid gap-6 md:grid-cols-2 border-t border-slate-100 pt-6">
              <div className="space-y-3">
                <h4 className="flex items-center gap-2 font-bold text-sm text-violet-950">
                  <ShieldCheck className="h-4.5 w-4.5 text-emerald-600" />
                  Key Advantages
                </h4>
                <ul className="space-y-2 text-[12.5px] text-gray-600">
                  <li><strong>Autonomous Control:</strong> Agents can choose how to retrieve, process, and formulate results.</li>
                  <li><strong>Parallel Tasking:</strong> Distribute workloads to multiple specialized subagents concurrently.</li>
                  <li><strong>Personalization:</strong> Context-aware reasoning generates tailored answers.</li>
                  <li><strong>Adaptability:</strong> Modifies routing and strategies dynamically in response to outcomes.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="flex items-center gap-2 font-bold text-sm text-amber-950">
                  <AlertTriangle className="h-4.5 w-4.5 text-amber-600" />
                  Limitations
                </h4>
                <ul className="space-y-2 text-[12.5px] text-gray-600">
                  <li><strong>System Complexity:</strong> Coordinating multiple agents and tracking states is complex.</li>
                  <li><strong>Retrieval Latency:</strong> Multi-step query refinement and validation checks increase response times.</li>
                  <li><strong>Compute Cost:</strong> Running multiple model inferences per query uses significant resources.</li>
                  <li><strong>Error Cascading:</strong> Mistakes made by retrieval or planning subagents cascade to editor agents.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Notebook Steps ─────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <h3 className="text-[16px] font-bold text-gray-900 flex items-center gap-2">
          <Code className="h-5 w-5 text-violet-600" />
          Interactive Notebook Code steps
        </h3>
        <p className="text-sm text-gray-600">
          Run these code cells in order in your notebook to orchestrate a Researcher-Writer-Editor multi-agent system.
        </p>
      </div>

      {STEPS.map((step, idx) => (
        <div key={step.id} className="relative">
          {/* Connector line between steps */}
          {idx < STEPS.length - 1 && (
            <div className="absolute left-6 top-full h-8 w-0.5 bg-gradient-to-b from-violet-300 to-transparent" />
          )}

          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            {/* Step header */}
            <div className="flex items-center gap-4 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white px-5 py-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white shadow-sm">
                {step.id}
              </div>
              <h3 className="text-[15px] font-bold text-gray-900">{step.title}</h3>
            </div>

            <div className="space-y-4 p-5">
              {/* Explanation */}
              <p className="text-[13.5px] leading-relaxed text-gray-700">
                {step.explanation}
              </p>

              {/* Package / key term badges */}
              {step.packages.length > 0 && (
                <div className="space-y-2">
                  {step.packages.map((pkg) => (
                    <div
                      key={pkg.name}
                      className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 px-3.5 py-2.5"
                    >
                      <code className="mt-0.5 shrink-0 rounded-md bg-violet-100 px-2 py-0.5 text-[11.5px] font-bold text-violet-800">
                        {pkg.name}
                      </code>
                      <p className="text-[12.5px] leading-relaxed text-gray-600">
                        {pkg.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Colab-style code box */}
              <ColabCodeCell
                stepId={step.id}
                code={step.code}
                isCopied={copiedId === step.id}
                onCopy={() => copy(step.id, step.code)}
              />
            </div>
          </div>
        </div>
      ))}

      {/* ── What's next ────────────────────────────────────────────────────── */}
      <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
        <p className="text-[13px] font-bold text-blue-900">🎉 Multi-Agent Orchestration complete!</p>
        <p className="mt-1 text-[13px] leading-relaxed text-blue-800">
          You now know how to design coordinated multi-agent flows. In the next section, we will map out your roadmap for building complex agentic systems in production!
        </p>
      </div>
    </div>
  );
}

/* ── Colab-style code cell ───────────────────────────────────────────────────── */
function ColabCodeCell({
  stepId,
  code,
  isCopied,
  onCopy,
}: {
  stepId: number;
  code: string;
  isCopied: boolean;
  onCopy: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 shadow-sm">
      {/* Cell toolbar */}
      <div className="flex items-center justify-between border-b border-gray-200 bg-[#f8f9fa] px-3 py-1.5">
        <div className="flex items-center gap-2">
          {/* Colab-style run indicator */}
          <div className="flex h-6 w-6 items-center justify-center rounded border border-gray-300 bg-white text-gray-400 hover:border-gray-400">
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="currentColor"
              className="text-gray-500"
            >
              <path d="M0 0l10 6-10 6V0z" />
            </svg>
          </div>
          <span className="font-mono text-[11px] text-gray-500">
            [ {stepId} ]
          </span>
          <span className="rounded bg-gray-200 px-1.5 py-0.5 font-mono text-[10px] text-gray-500">
            Python
          </span>
        </div>

        <button
          type="button"
          onClick={onCopy}
          className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2.5 py-1 text-[11px] font-medium text-gray-600 transition-colors hover:border-gray-300 hover:bg-gray-50"
        >
          {isCopied ? (
            <>
              <Check className="h-3 w-3 text-green-500" />
              <span className="text-green-600">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code body */}
      <div className="bg-white px-4 py-3">
        <pre className="overflow-x-auto font-mono text-[12.5px] leading-[1.8] text-gray-800">
          {code}
        </pre>
      </div>
    </div>
  );
}
