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
    title: "Name the User Problem",
    explanation:
      "Start from the user need, not the AI feature. Define who the user is, what action they take, and why they need AI assistance. Copy this planning template to kickstart your next project.",
    packages: [
      {
        name: "User Need First",
        desc: "Make sure you build a feature that solves a concrete problem, rather than just adding an LLM call because it is popular.",
      },
    ],
    code: `# Project Plan: Step 1 - User Need
User Profile: Customer support agent
User Pain Point: Manually searching 100-page policy PDFs takes too long.
Core Need: Instant search with exact citation links to the source document.`,
  },
  {
    id: 2,
    title: "Design the AI Support",
    explanation:
      "Decide where the model helps and where normal app logic stays in control. Hard code rules where possible, and let the model handle unstructured text.",
    packages: [
      {
        name: "Hybrid Architecture",
        desc: "Define strict boundaries. For example, verify inputs/outputs using python code rather than trusting the model to follow instructions.",
      },
    ],
    code: `# Project Plan: Step 2 - AI & Logic Boundaries
AI Task: Semantic search over FAQs and drafting a summary.
App Logic: Verify similarity score threshold, check API key, and filter toxic inputs.
Fallback: If similarity score < 0.3, route to human agent instead of calling LLM.`,
  },
  {
    id: 3,
    title: "Check the Result (Evaluation)",
    explanation:
      "Test the output with examples, edge cases, and a clear quality target. AI apps require a regression suite of inputs to verify changes don't break old features.",
    packages: [
      {
        name: "Evaluation Metrics",
        desc: "Define standard test queries and expected formats. Do not launch without test cases covering hallucinations.",
      },
    ],
    code: `# Project Plan: Step 3 - Test Cases & Evaluation
Test Case 1 (Happy Path): "How do I return a package?" -> Expected: exact return instructions.
Test Case 2 (Edge Case): "Can I return a damaged phone after 90 days?" -> Expected: clear "No" with policy limit.
Test Case 3 (Off-topic): "What is the weather today?" -> Expected: polite redirect.`,
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
export function NextStepsGuide() {
  const { copiedId, copy } = useCopy();
  const [activeTab, setActiveTab] = useState<"overview" | "vocabulary" | "mistakes">("overview");

  return (
    <div className="space-y-8">
      {/* ── Header card ────────────────────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-sky-50 shadow-sm">
        <div className="border-b border-cyan-100 bg-white/60 px-6 py-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-cyan-700">
                AI Application Roadmap
              </p>
              <h2 className="mt-1 text-[22px] font-bold text-gray-900">
                Next Steps and Resources
              </h2>
              <p className="mt-1.5 text-[14px] leading-relaxed text-gray-600">
                Move your AI application from a simple local demo to a production-grade product that users can trust. Focus on repeatable, observable, and testable system designs.
              </p>
            </div>
            <BookOpen className="mt-1 h-8 w-8 shrink-0 text-cyan-600" />
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
          {(["overview", "vocabulary", "mistakes"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                activeTab === tab
                  ? "bg-cyan-600 text-white shadow-sm"
                  : "text-gray-600 hover:bg-slate-50 hover:text-gray-900"
              }`}
            >
              {tab === "overview" && "1. Core Idea & Pattern"}
              {tab === "vocabulary" && "2. Key Terms & Placement"}
              {tab === "mistakes" && "3. Failure Cases & Check"}
            </button>
          ))}
        </div>

        {/* Tab 1: Overview */}
        {activeTab === "overview" && (
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Moving from Demo to Product</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-gray-600">
                Next Steps is part of turning an AI idea into a dependable product. The focus is less on one response and more on repeatable behavior over many users and many cases.
              </p>
            </div>

            {/* Pattern Steps */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-600">Step 01</span>
                <h4 className="font-bold text-sm text-slate-800 mt-1">Name the user problem</h4>
                <p className="mt-1 text-[12.5px] text-gray-500 leading-relaxed">
                  Start from the user need, not the AI feature.
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-600">Step 02</span>
                <h4 className="font-bold text-sm text-slate-800 mt-1">Design the AI support</h4>
                <p className="mt-1 text-[12.5px] text-gray-500 leading-relaxed">
                  Decide where the model helps and where normal app logic should stay in control.
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-600">Step 03</span>
                <h4 className="font-bold text-sm text-slate-800 mt-1">Check the result</h4>
                <p className="mt-1 text-[12.5px] text-gray-500 leading-relaxed">
                  Test the output with examples, edge cases, and a clear quality target.
                </p>
              </div>
            </div>

            {/* Mental Model */}
            <div className="rounded-xl border border-cyan-100 bg-cyan-50/30 p-5 flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-cyan-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-cyan-950">Mental Model: A Closed System</h4>
                <p className="mt-1 text-[13px] leading-relaxed text-cyan-900">
                  Next Steps is easiest to understand as a small system: information enters, one step transforms or decides something, and the result is checked before the app trusts it.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Vocabulary & Placement */}
        {activeTab === "vocabulary" && (
          <div className="mt-6 space-y-6">
            <h3 className="text-lg font-bold text-gray-900">Key Terms to Keep in Mind</h3>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-100 p-4">
                <h4 className="font-bold text-sm text-slate-800">Retrieval</h4>
                <p className="mt-1 text-[12.5px] leading-relaxed text-gray-500">
                  Finding relevant information from your database or API before asking the model to answer.
                </p>
              </div>
              <div className="rounded-xl border border-slate-100 p-4">
                <h4 className="font-bold text-sm text-slate-800">Grounding</h4>
                <p className="mt-1 text-[12.5px] leading-relaxed text-gray-500">
                  Forcing the LLM's generated response to rely strictly on the provided context instead of guessing or using old weights.
                </p>
              </div>
              <div className="rounded-xl border border-slate-100 p-4">
                <h4 className="font-bold text-sm text-slate-800">Evaluation</h4>
                <p className="mt-1 text-[12.5px] leading-relaxed text-gray-500">
                  Checking whether outputs meet expected quality bounds across standard regression queries.
                </p>
              </div>
              <div className="rounded-xl border border-slate-100 p-4">
                <h4 className="font-bold text-sm text-slate-800">Monitoring</h4>
                <p className="mt-1 text-[12.5px] leading-relaxed text-gray-500">
                  Watching model latency, rates, error codes, and user feedback once the system goes live.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-5">
              <h3 className="text-base font-bold text-gray-900">Where It Fits in a Real App</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-gray-600">
                In a real project, this concept connects the prototype to a production app. It helps you move from a working local python demo to something grounded, evaluated, monitored, and safe to improve.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Mistakes & Check */}
        {activeTab === "mistakes" && (
          <div className="mt-6 space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Common Mistakes */}
              <div className="space-y-3">
                <h4 className="flex items-center gap-2 font-bold text-sm text-red-950">
                  <AlertTriangle className="h-4.5 w-4.5 text-red-600" />
                  Common Mistakes to Avoid
                </h4>
                <ul className="space-y-2 text-[12.5px] text-gray-600">
                  <li><strong>Feature-First Coding:</strong> Building the AI features before defining what a correct user solution looks like.</li>
                  <li><strong>Vague Context:</strong> Forgetting to show sources, logs, or traces when the app makes an important decision.</li>
                  <li><strong>Over-Trusting:</strong> Assuming a confident, well-phrased model answer is automatically factually correct.</li>
                  <li><strong>One-Demo Signoff:</strong> Skipping automated validation test runs because a single prompt demo response looked good.</li>
                </ul>
              </div>

              {/* Checklist */}
              <div className="space-y-3">
                <h4 className="flex items-center gap-2 font-bold text-sm text-cyan-950">
                  <ShieldCheck className="h-4.5 w-4.5 text-cyan-600" />
                  Check Your Understanding
                </h4>
                <ul className="space-y-2 text-[12.5px] text-gray-600">
                  <li>✓ I can explain what Next Steps is in one or two simple sentences.</li>
                  <li>✓ I can point to the input, process, and output in the Next Steps pattern.</li>
                  <li>✓ I can name one common failure case and how I would notice it.</li>
                  <li>✓ I can describe where this idea fits in a real app, not just in a lesson.</li>
                </ul>
              </div>
            </div>

            <div className="rounded-xl border border-amber-100 bg-amber-50/30 p-4">
              <p className="text-[13px] leading-relaxed text-amber-900">
                <strong>⚠️ Warning:</strong> Do not skip evaluation. AI applications require ongoing checks because model outputs are non-deterministic. Always test a normal case, an unclear case, and a failure case before trusting the design.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* ── Notebook Steps ─────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <h3 className="text-[16px] font-bold text-gray-900 flex items-center gap-2">
          <Code className="h-5 w-5 text-cyan-600" />
          Roadmap Planning templates
        </h3>
        <p className="text-sm text-gray-600">
          Copy these markdown plans into your documentation to structure your production evaluation.
        </p>
      </div>

      {STEPS.map((step, idx) => (
        <div key={step.id} className="relative">
          {/* Connector line between steps */}
          {idx < STEPS.length - 1 && (
            <div className="absolute left-6 top-full h-8 w-0.5 bg-gradient-to-b from-cyan-300 to-transparent" />
          )}

          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            {/* Step header */}
            <div className="flex items-center gap-4 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white px-5 py-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-600 text-sm font-bold text-white shadow-sm">
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
                      <code className="mt-0.5 shrink-0 rounded-md bg-cyan-100 px-2 py-0.5 text-[11.5px] font-bold text-cyan-800">
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
        <p className="text-[13px] font-bold text-blue-900">🎉 Congratulations on finishing the module!</p>
        <p className="mt-1 text-[13px] leading-relaxed text-blue-800">
          You have mastered RAG basics, Q&A systems, and multi-agent workflows. Now go build amazing production-ready apps!
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
            Markdown
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
