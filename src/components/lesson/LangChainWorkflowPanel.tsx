"use client";

import {
  Bot,
  Database,
  Download,
  FileText,
  Hash,
  Layers,
  MessageCircle,
  Search,
} from "lucide-react";

interface Step {
  id: number;
  phase: "data" | "query";
  icon: React.ElementType;
  caption: string;
  tooltip: string;
  example?: string;
  color: keyof typeof COLORS;
}

const COLORS = {
  emerald: { tile: "bg-emerald-500", cardBorder: "border-emerald-200", cardBg: "bg-emerald-50", caption: "text-emerald-900", num: "bg-emerald-600" },
  teal:    { tile: "bg-teal-500",    cardBorder: "border-teal-200",    cardBg: "bg-teal-50",    caption: "text-teal-900",    num: "bg-teal-600"    },
  green:   { tile: "bg-green-500",   cardBorder: "border-green-200",   cardBg: "bg-green-50",   caption: "text-green-900",   num: "bg-green-600"   },
  blue:    { tile: "bg-blue-500",    cardBorder: "border-blue-200",    cardBg: "bg-blue-50",    caption: "text-blue-900",    num: "bg-blue-600"    },
  indigo:  { tile: "bg-indigo-500",  cardBorder: "border-indigo-200",  cardBg: "bg-indigo-50",  caption: "text-indigo-900",  num: "bg-indigo-600"  },
  violet:  { tile: "bg-violet-500",  cardBorder: "border-violet-200",  cardBg: "bg-violet-50",  caption: "text-violet-900",  num: "bg-violet-600"  },
  sky:     { tile: "bg-sky-500",     cardBorder: "border-sky-200",     cardBg: "bg-sky-50",     caption: "text-sky-900",     num: "bg-sky-600"     },
  purple:  { tile: "bg-purple-500",  cardBorder: "border-purple-200",  cardBg: "bg-purple-50",  caption: "text-purple-900",  num: "bg-purple-600"  },
} as const;

const STEPS: Step[] = [
  { id: 1, phase: "data",  icon: FileText,     caption: "Document Processing",    tooltip: "Documents (e.g., PDFs) are split into smaller chunks so they can be processed efficiently.",                                                                           color: "emerald" },
  { id: 2, phase: "data",  icon: Layers,       caption: "Embeddings Creation",    tooltip: "Each chunk is converted into embeddings that capture its semantic meaning.",                                                                                             color: "teal"    },
  { id: 3, phase: "data",  icon: Database,     caption: "Vector Store",           tooltip: "These embeddings are stored in a vector database, creating a searchable knowledge base.",                                                                                color: "green"   },
  { id: 4, phase: "query", icon: MessageCircle,caption: "User Query",             tooltip: "The process starts when a user submits a question or request as input.",              example: '"What\'s the weather like today?"',                                       color: "blue"    },
  { id: 5, phase: "query", icon: Hash,         caption: "Vector Representation",  tooltip: "LangChain converts the query into a vector representation using embeddings that capture its semantic meaning.",                                                          color: "indigo"  },
  { id: 6, phase: "query", icon: Search,       caption: "Similarity Search",      tooltip: "This vector is compared with vectors stored in a database to find the most relevant matches based on meaning.",                                                          color: "violet"  },
  { id: 7, phase: "query", icon: Download,     caption: "Fetching Relevant Info", tooltip: "The system retrieves the most relevant data or context from the vector database to support the response.",                                                               color: "sky"     },
  { id: 8, phase: "query", icon: Bot,          caption: "Generating a Response",  tooltip: "The retrieved context is passed to a language model, which processes it and generates a meaningful answer.", example: '"Today\'s weather is sunny with a high of 75°F."', color: "purple"  },
];

const DATA_STEPS  = STEPS.filter((s) => s.phase === "data");
const QUERY_STEPS = STEPS.filter((s) => s.phase === "query");

/* ─────────────────────────────────────────────────────────────────────────── */

export function LangChainWorkflowPanel() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Panel header */}
      <div className="rounded-t-2xl border-b border-slate-200 bg-gradient-to-r from-emerald-50 to-blue-50 px-4 py-3.5">
        <p className="text-[10.5px] font-bold uppercase tracking-widest text-slate-500">
          How LangChain Works
        </p>
        <p className="mt-0.5 text-[13.5px] font-semibold text-slate-900">
          RAG Pipeline — Chain Flow
        </p>
      </div>

      <div className="p-4">
        {/* ── Phase 1 ── */}
        <PhaseLabel color="emerald" label="Data Preparation" />
        {DATA_STEPS.map((step, idx) => (
          <div key={step.id}>
            <StepTile step={step} />
            {idx < DATA_STEPS.length - 1 && (
              <Arrow lineColor="bg-emerald-300" arrowColor="text-emerald-400" />
            )}
          </div>
        ))}

        <Arrow lineColor="bg-slate-300" arrowColor="text-slate-400" />

        {/* ── Phase 2 ── */}
        <PhaseLabel color="blue" label="Query Processing" />
        {QUERY_STEPS.map((step, idx) => (
          <div key={step.id}>
            <StepTile step={step} />
            {idx < QUERY_STEPS.length - 1 && (
              <Arrow lineColor="bg-blue-300" arrowColor="text-blue-400" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Step tile — left half: icon + caption | right half: description ─────── */
function StepTile({ step }: { step: Step }) {
  const Icon = step.icon;
  const c = COLORS[step.color];

  return (
    <div
      className={`mb-1 flex items-stretch overflow-hidden rounded-xl border ${c.cardBorder} shadow-sm`}
    >
      {/* Left half — step number + icon tile + caption */}
      <div
        className={`flex w-[42%] shrink-0 items-center gap-2 ${c.cardBg} px-2.5 py-3`}
      >
        <span
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${c.num} text-[10px] font-bold text-white`}
        >
          {step.id}
        </span>

        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${c.tile} shadow-sm`}
        >
          <Icon className="h-5 w-5 text-white" strokeWidth={1.5} />
        </div>

        <p className={`text-[11.5px] font-semibold leading-snug ${c.caption}`}>
          {step.caption}
        </p>
      </div>

      {/* Divider line */}
      <div className={`w-px shrink-0 border-l ${c.cardBorder}`} />

      {/* Right half — description always visible */}
      <div className="flex flex-1 items-center bg-white px-3 py-3">
        <div>
          <p className="text-[11.5px] leading-relaxed text-gray-600">
            {step.tooltip}
          </p>
          {step.example && (
            <p className="mt-1 text-[10.5px] italic text-gray-400">
              e.g. {step.example}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Phase label ──────────────────────────────────────────────────────────── */
function PhaseLabel({
  color,
  label,
}: {
  color: "emerald" | "blue";
  label: string;
}) {
  const line  = color === "emerald" ? "border-emerald-200" : "border-blue-200";
  const bg    = color === "emerald" ? "bg-emerald-100"     : "bg-blue-100";
  const text  = color === "emerald" ? "text-emerald-700"   : "text-blue-700";

  return (
    <div className="mb-2.5 flex items-center gap-2">
      <div className={`h-px flex-1 border-t ${line}`} />
      <span className={`rounded-full ${bg} ${text} px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide`}>
        {label}
      </span>
      <div className={`h-px flex-1 border-t ${line}`} />
    </div>
  );
}

/* ── Arrow connector ──────────────────────────────────────────────────────── */
function Arrow({
  lineColor,
  arrowColor,
}: {
  lineColor: string;
  arrowColor: string;
}) {
  return (
    <div className="flex justify-center py-0.5">
      <div className={`flex flex-col items-center ${arrowColor}`}>
        <div className={`h-3 w-0.5 ${lineColor}`} />
        <svg width="8" height="5" viewBox="0 0 8 5" fill="currentColor">
          <path d="M4 5L0 0h8L4 5z" />
        </svg>
      </div>
    </div>
  );
}
