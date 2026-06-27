"use client";

import type { ElementType } from "react";
import {
  BadgeCheck,
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  FileCode2,
  Languages,
  Layers,
  MessageSquareText,
  Network,
  SearchCheck,
  Server,
  ShieldAlert,
  Sparkles,
  Zap,
} from "lucide-react";

type Color = keyof typeof COLOR_MAP;

type CardItem = {
  icon: ElementType;
  title: string;
  description: string;
  bullets?: string[];
  color: Color;
};

const HIGHLIGHTS = [
  "LLMs learn patterns, grammar, and context from text so they can answer questions, write content, translate languages, and more.",
  "Massive datasets and billions of parameters have transformed how humans interact with technology.",
  "Modern LLMs include ChatGPT from OpenAI, Google Gemini, Anthropic Claude, and similar systems.",
];

const WORKING_STEPS: CardItem[] = [
  {
    icon: Layers,
    title: "Input Embeddings",
    description: "Convert text into numerical vectors that the neural network can process.",
    color: "blue",
  },
  {
    icon: Network,
    title: "Positional Encoding",
    description: "Add sequence and order information so the model knows where each token appears.",
    color: "violet",
  },
  {
    icon: SearchCheck,
    title: "Self-Attention",
    description: "Understand relationships between words in context, even across long passages.",
    color: "emerald",
  },
  {
    icon: Cpu,
    title: "Feed-Forward Layers",
    description: "Capture complex language patterns learned during training.",
    color: "amber",
  },
  {
    icon: MessageSquareText,
    title: "Decoding",
    description: "Generate responses step by step by predicting the next useful token.",
    color: "rose",
  },
  {
    icon: BrainCircuit,
    title: "Multi-Head Attention",
    description: "Reason over multiple relationships in parallel for richer context understanding.",
    color: "cyan",
  },
];

const POPULAR_MODELS = [
  "GPT-4 and GPT-4o (OpenAI): Advanced multimodal reasoning and dialogue capabilities.",
  "Gemini 1.5 (Google DeepMind): Long-context reasoning, capable of handling 1M+ tokens.",
  "Claude 3 (Anthropic): Safety-focused, strong at reasoning and summarization.",
  "LLaMA 3 (Meta): Open-weight model, popular in research and startups.",
  "Mistral 7B / Mixtral (Mistral AI): Efficient open-source alternatives for developers.",
  "BERT and RoBERTa (Google/Facebook): Strong embedding models for NLP tasks.",
  "mBERT and XLM-R: Early multilingual LLMs.",
  "BLOOM: Large open-source multilingual model, collaboratively developed.",
];

const APPLICATIONS: CardItem[] = [
  {
    icon: FileCode2,
    title: "Code Generation",
    description: "Generate accurate code from user instructions for specific tasks.",
    color: "blue",
  },
  {
    icon: Code2,
    title: "Debugging and Documentation",
    description: "Identify code errors, suggest fixes, and help automate project documentation.",
    color: "emerald",
  },
  {
    icon: Bot,
    title: "Question Answering",
    description: "Answer casual and complex questions with detailed, context-aware responses.",
    color: "violet",
  },
  {
    icon: Languages,
    title: "Translation and Correction",
    description: "Translate and correct language across many languages, often dozens to 100+.",
    color: "amber",
  },
  {
    icon: Sparkles,
    title: "Prompt-Based Versatility",
    description: "Use creative prompts to unlock zero-shot and one-shot task performance.",
    color: "cyan",
  },
];

const SUMMARY_COLUMNS = [
  {
    icon: Zap,
    title: "Advantages",
    color: "emerald" as const,
    items: [
      "Can perform new tasks using zero-shot and few-shot learning without retraining.",
      "Efficiently process and understand large amounts of text data.",
      "Adapt easily to specific domains through fine-tuning.",
      "Automate repetitive language-based tasks, reducing human effort.",
      "Work across multiple domains like healthcare, education, and business.",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Limitations",
    color: "amber" as const,
    items: [
      "Require very high computational resources, making them expensive to train.",
      "Training can take a long time, often weeks or months.",
      "Depend on large amounts of high-quality and unbiased data.",
      "Consume significant energy, contributing to environmental impact.",
      "Can introduce bias and misinformation, raising ethical concerns.",
    ],
  },
];

const COLOR_MAP = {
  blue: {
    border: "border-blue-200",
    bg: "bg-blue-50",
    icon: "bg-blue-100 text-blue-700",
    title: "text-blue-900",
    dot: "bg-blue-500",
  },
  violet: {
    border: "border-violet-200",
    bg: "bg-violet-50",
    icon: "bg-violet-100 text-violet-700",
    title: "text-violet-900",
    dot: "bg-violet-500",
  },
  emerald: {
    border: "border-emerald-200",
    bg: "bg-emerald-50",
    icon: "bg-emerald-100 text-emerald-700",
    title: "text-emerald-900",
    dot: "bg-emerald-500",
  },
  amber: {
    border: "border-amber-200",
    bg: "bg-amber-50",
    icon: "bg-amber-100 text-amber-700",
    title: "text-amber-900",
    dot: "bg-amber-500",
  },
  rose: {
    border: "border-rose-200",
    bg: "bg-rose-50",
    icon: "bg-rose-100 text-rose-700",
    title: "text-rose-900",
    dot: "bg-rose-500",
  },
  cyan: {
    border: "border-cyan-200",
    bg: "bg-cyan-50",
    icon: "bg-cyan-100 text-cyan-700",
    title: "text-cyan-900",
    dot: "bg-cyan-500",
  },
} as const;

export function LargeLanguageModelIntroBlock() {
  return (
    <div className="my-6 space-y-6">
      <section className="overflow-hidden rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-blue-50 shadow-sm">
        <div className="flex items-start gap-3 border-b border-violet-100 bg-white/70 px-5 py-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-600 text-white shadow-sm">
            <BrainCircuit className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-violet-600">
              Last updated: 2 May, 2026
            </p>
            <h3 className="mt-1 text-[17px] font-bold text-gray-950">
              Large Language Model (LLM)
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-gray-800">
              Large Language Models are advanced AI systems built on deep neural networks
              designed to process, understand, and generate human-like text.
            </p>
          </div>
        </div>

        <div className="grid gap-2 p-4 sm:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item}
              className="flex items-start gap-2.5 rounded-xl border border-violet-100 bg-white/85 px-3 py-3 shadow-sm"
            >
              <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" />
              <p className="text-[12.5px] leading-relaxed text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Working of LLM"
          title="Transformer architecture at a high level"
          description="LLMs are primarily based on Transformers, which help them learn long-range dependencies and contextual meaning in text."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {WORKING_STEPS.map((step) => (
            <FeatureCard key={step.title} item={step} />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <SectionHeader
          eyebrow="Popular LLMs"
          title="Models learners will hear about"
          description="Different LLM families vary by model quality, context length, openness, cost, safety design, and deployment options."
          compact
        />
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          {POPULAR_MODELS.map((model) => (
            <div key={model} className="flex gap-2 rounded-xl border border-slate-100 bg-slate-50/80 p-3">
              <Server className="mt-0.5 h-4 w-4 shrink-0 text-slate-600" />
              <p className="text-[12.5px] leading-relaxed text-gray-700">{model}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Applications"
          title="What LLMs are used for"
          description="Because they can interpret and generate language, LLMs are useful across coding, writing, support, translation, and learning workflows."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {APPLICATIONS.map((application) => (
            <FeatureCard key={application.title} item={application} />
          ))}
        </div>
      </section>

      <section className="grid gap-3 lg:grid-cols-2">
        {SUMMARY_COLUMNS.map((column) => {
          const color = COLOR_MAP[column.color];
          const Icon = column.icon;
          return (
            <div
              key={column.title}
              className={`rounded-2xl border ${color.border} ${color.bg} p-4 shadow-sm`}
            >
              <div className="mb-3 flex items-center gap-2">
                <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${color.icon}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <h4 className={`text-sm font-bold ${color.title}`}>{column.title}</h4>
              </div>
              <ul className="space-y-2">
                {column.items.map((item) => (
                  <li key={item} className="flex gap-2 text-[12.5px] leading-relaxed text-gray-700">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${color.dot}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>

      <div className="rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3">
        <div className="flex items-start gap-2.5">
          <BrainCircuit className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
          <p className="text-[13px] leading-relaxed text-blue-900">
            The simplest mental model: an LLM turns text into tokens, uses attention to understand
            context, then generates a response one token at a time.
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  compact = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  compact?: boolean;
}) {
  return (
    <div className={compact ? "" : "mb-3"}>
      <p className="text-[11px] font-bold uppercase tracking-widest text-gray-500">{eyebrow}</p>
      <h3 className="mt-1 text-[16px] font-bold text-gray-950">{title}</h3>
      <p className="mt-1 text-[13px] leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}

function FeatureCard({ item }: { item: CardItem }) {
  const color = COLOR_MAP[item.color];
  const Icon = item.icon;

  return (
    <article className={`rounded-2xl border ${color.border} ${color.bg} p-4 shadow-sm`}>
      <div className="mb-3 flex items-center gap-2">
        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${color.icon}`}>
          <Icon className="h-4 w-4" />
        </div>
        <h4 className={`text-[13px] font-bold ${color.title}`}>{item.title}</h4>
      </div>
      <p className="text-[12.5px] leading-relaxed text-gray-700">{item.description}</p>
      {item.bullets && (
        <ul className="mt-3 space-y-2">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2 text-[12px] leading-relaxed text-gray-600">
              <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${color.dot}`} />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
