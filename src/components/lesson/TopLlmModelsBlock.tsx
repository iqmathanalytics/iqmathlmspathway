"use client";

import type { ElementType } from "react";
import {
  BadgeCheck,
  Bot,
  BrainCircuit,
  Building2,
  Code2,
  Database,
  FileText,
  Globe2,
  Layers,
  MessageSquare,
  Network,
  Scale,
  Server,
  ShieldCheck,
  Sparkles,
  Table2,
  Zap,
} from "lucide-react";

type Color = keyof typeof COLOR_MAP;

type ModelCard = {
  rank: number;
  name: string;
  creator: string;
  size: string;
  license: string;
  icon: ElementType;
  color: Color;
  summary: string;
  features: string[];
  interesting: string;
  architecture: string;
};

const INTRO_POINTS = [
  "An LLM is a neural network with billions of parameters trained on extensive datasets of unlabeled text.",
  "Training usually uses self-supervised or semi-supervised learning techniques.",
  "Each LLM family has distinct strengths, trade-offs, applications, licensing, and deployment patterns.",
];

const MODELS: ModelCard[] = [
  {
    rank: 1,
    name: "GPT-4",
    creator: "OpenAI",
    size: "Not public",
    license: "Proprietary",
    icon: Sparkles,
    color: "violet",
    summary:
      "A leading multimodal LLM launched in March 2023, known for complex reasoning, advanced coding, academic performance, and improved factuality.",
    features: [
      "Massive architecture for coherent long-form generation.",
      "Strong natural language understanding across nuanced context.",
      "Fine-tuning and alignment through RLHF and adversarial testing.",
    ],
    interesting: "Multimodal reasoning and improved factuality.",
    architecture: "Transformer-based multimodal model.",
  },
  {
    rank: 2,
    name: "GPT-3",
    creator: "OpenAI",
    size: "175B parameters",
    license: "Proprietary",
    icon: BrainCircuit,
    color: "blue",
    summary:
      "A groundbreaking 2020 model that popularized large-scale text generation using a decoder-only Transformer architecture.",
    features: [
      "Unprecedented size for its time.",
      "Strong zero-shot task generalization.",
      "Maintains context across long passages.",
    ],
    interesting: "Record-breaking 175B parameter model that reshaped NLP.",
    architecture: "Decoder-only Transformer.",
  },
  {
    rank: 3,
    name: "GPT-3.5",
    creator: "OpenAI",
    size: "Not public",
    license: "Proprietary",
    icon: Zap,
    color: "emerald",
    summary:
      "An enhanced GPT-3 iteration used behind ChatGPT, improved through reinforcement learning from human feedback.",
    features: [
      "Faster responses and better efficiency than GPT-3.",
      "Improved fine-tuning for specific use cases.",
      "Scales across diverse text applications.",
    ],
    interesting: "Fast model family that powered early ChatGPT experiences.",
    architecture: "GPT-style Transformer with RLHF alignment.",
  },
  {
    rank: 4,
    name: "Gemini",
    creator: "Google DeepMind",
    size: "Not public",
    license: "Proprietary",
    icon: Layers,
    color: "cyan",
    summary:
      "A multimodal model family released in December 2023, designed to work across text, code, audio, images, and video.",
    features: [
      "Strong conversational AI focus.",
      "Sensitive to context shifts in dialogue.",
      "Integrates multiple modalities for richer responses.",
    ],
    interesting: "Gemini Ultra was reported to outperform human experts on MMLU.",
    architecture: "Native multimodal architecture.",
  },
  {
    rank: 5,
    name: "LLaMA",
    creator: "Meta AI",
    size: "7B to 65B",
    license: "Open weights",
    icon: Globe2,
    color: "amber",
    summary:
      "Meta's LLaMA family became a major asset for the open-source AI community and enabled rapid fine-tuning innovation.",
    features: [
      "Strong long-term language understanding.",
      "Useful reasoning over extended text.",
      "Open model weights support custom fine-tuning.",
    ],
    interesting: "Helped accelerate open-source LLM research and startups.",
    architecture: "Decoder-only Transformer family.",
  },
  {
    rank: 6,
    name: "PaLM 2 (Bison-001)",
    creator: "Google AI",
    size: "Up to 540B",
    license: "Proprietary",
    icon: Code2,
    color: "rose",
    summary:
      "A Google model focused on reasoning, formal logic, mathematics, coding, and multilingual language understanding.",
    features: [
      "Pattern-based learning for language nuance.",
      "Adaptive training to refine understanding.",
      "Efficient response generation for NLP tasks.",
    ],
    interesting: "Strong multilingual and reasoning capabilities.",
    architecture: "Large Transformer-based language model.",
  },
  {
    rank: 7,
    name: "Bard",
    creator: "Google AI",
    size: "Reported 1.6T",
    license: "Proprietary",
    icon: MessageSquare,
    color: "blue",
    summary:
      "An experimental conversational AI service driven by LaMDA and designed for natural internet-connected conversations.",
    features: [
      "Flexible and efficient across NLP tasks.",
      "Large-scale architecture for complex language.",
      "Fine-tuning support for task adaptation.",
    ],
    interesting: "Designed for natural conversation and current web-connected answers.",
    architecture: "LaMDA-backed conversational model.",
  },
  {
    rank: 8,
    name: "Claude v1",
    creator: "Anthropic",
    size: "Not public",
    license: "Proprietary",
    icon: ShieldCheck,
    color: "emerald",
    summary:
      "A powerful Anthropic model known for long-context processing, coherent responses, and safety-focused behavior.",
    features: [
      "Understands complex language structures.",
      "Generates coherent contextual responses.",
      "Adapts to many NLP tasks and domains.",
    ],
    interesting: "Early Claude versions offered a 100k-token context window.",
    architecture: "Transformer-based assistant model.",
  },
  {
    rank: 9,
    name: "Falcon",
    creator: "TII, UAE",
    size: "Varies",
    license: "Open source",
    icon: Server,
    color: "cyan",
    summary:
      "An open-source causal decoder-only model trained on web text and curated sources, with strong scalable performance.",
    features: [
      "Efficient and scalable for large deployments.",
      "Optimized for classification, generation, and analysis.",
      "Uses model optimization to reduce compute needs.",
    ],
    interesting: "Outranked many open-source models at release.",
    architecture: "Causal decoder-only model with rotary embeddings and multi-query attention.",
  },
  {
    rank: 10,
    name: "Cohere",
    creator: "Cohere",
    size: "6B to 52B",
    license: "Commercial",
    icon: Building2,
    color: "violet",
    summary:
      "An enterprise LLM family that can be custom-trained and fine-tuned for company-specific use cases.",
    features: [
      "Strong contextual understanding.",
      "Enhances conversational AI experiences.",
      "Handles multi-turn dialogue with context continuity.",
    ],
    interesting: "Used by companies for enterprise AI workflows.",
    architecture: "Enterprise-focused language model family.",
  },
  {
    rank: 11,
    name: "Orca",
    creator: "Microsoft",
    size: "13B",
    license: "Research/open variants",
    icon: Bot,
    color: "amber",
    summary:
      "A Microsoft model based on LLaMA 2 that uses synthetic training data and teacher-student learning to achieve strong performance efficiently.",
    features: [
      "Efficient enough for smaller hardware targets.",
      "Learns from larger teacher models.",
      "Uses Prompt Erasure and synthetic data techniques.",
    ],
    interesting: "Targets larger-model performance with fewer parameters.",
    architecture: "Fine-tuned LLaMA 2 style model.",
  },
  {
    rank: 12,
    name: "Guanaco",
    creator: "Open-source community",
    size: "7B to 65B",
    license: "Open source",
    icon: Database,
    color: "rose",
    summary:
      "A LLaMA-derived open-source chatbot model trained on OASST1 and optimized with QLoRA for memory-efficient fine-tuning.",
    features: [
      "Learns from large-scale unlabeled and instruction data.",
      "Captures semantic intent in text.",
      "Adapts through self-supervised style training.",
    ],
    interesting: "QLoRA enabled strong tuning with lower memory usage.",
    architecture: "LLaMA-derived model fine-tuned with QLoRA.",
  },
  {
    rank: 13,
    name: "Vicuna",
    creator: "LMSYS",
    size: "Up to 33B",
    license: "Open source variants",
    icon: MessageSquare,
    color: "blue",
    summary:
      "A LLaMA-derived open-source model fine-tuned on user-shared ChatGPT conversations from ShareGPT.",
    features: [
      "Efficient training with limited cost.",
      "Robust performance on chat and summarization tasks.",
      "Scalable for research and prototype deployments.",
    ],
    interesting: "Trained from 70,000 user-shared ChatGPT conversations.",
    architecture: "LLaMA-derived chat model.",
  },
  {
    rank: 14,
    name: "MPT-30B",
    creator: "MosaicML",
    size: "30B",
    license: "Apache 2.0",
    icon: Network,
    color: "emerald",
    summary:
      "An open-source foundation model competitive with GPT-3-era models and known for commercial-friendly licensing.",
    features: [
      "Supports long context lengths.",
      "Offers configurable model variants.",
      "Useful for optimized production requirements.",
    ],
    interesting: "Commercially usable Apache 2.0 foundation model.",
    architecture: "Decoder-only Transformer foundation model.",
  },
  {
    rank: 15,
    name: "30B Lazarus",
    creator: "CalderaAI",
    size: "30B",
    license: "Open-source variants",
    icon: Sparkles,
    color: "violet",
    summary:
      "A LoRA-tuned LLaMA upgrade designed for strong text generation across benchmarks and specific industry use cases.",
    features: [
      "Scalable and adaptable across tasks.",
      "Supports continual improvement from tuned data.",
      "Robust to changing data distributions.",
    ],
    interesting: "Strong open-source text generation benchmark results.",
    architecture: "LoRA-tuned LLaMA-derived model.",
  },
  {
    rank: 16,
    name: "Flan-T5",
    creator: "Google researchers",
    size: "Varies",
    license: "Open source",
    icon: FileText,
    color: "cyan",
    summary:
      "A commercially available open-source encoder-decoder model trained on many language tasks in a text-to-text format.",
    features: [
      "Optimized for task-specific NLP work.",
      "Efficient inference for responsive apps.",
      "Uses compression and deployment-friendly variants.",
    ],
    interesting: "Handles many tasks, including reasoning and toxicity detection.",
    architecture: "Encoder-decoder text-to-text Transformer.",
  },
  {
    rank: 17,
    name: "WizardLM",
    creator: "Open-source researchers",
    size: "13B variants",
    license: "Open source",
    icon: Sparkles,
    color: "amber",
    summary:
      "An open-source model that improves instruction following by evolving simple prompts into more complex training instructions.",
    features: [
      "Enhances human-computer interaction.",
      "Handles multi-turn dialogue coherently.",
      "Supports feedback-driven interactive learning.",
    ],
    interesting: "Uses the Evol-Instruct approach for stronger instructions.",
    architecture: "LLaMA fine-tuned with evolved instructions.",
  },
  {
    rank: 18,
    name: "Alpaca 7B",
    creator: "Stanford University",
    size: "7B",
    license: "Research/open variants",
    icon: Scale,
    color: "rose",
    summary:
      "A cost-effective LLaMA 7B fine-tune from Stanford that showed smaller models could mimic instruction-following behavior cheaply.",
    features: [
      "Efficient architecture and training setup.",
      "Adaptable across many NLP tasks.",
      "Robust results for its size and cost.",
    ],
    interesting: "Created for less than $600 and fine-tuned quickly.",
    architecture: "Fine-tuned LLaMA 7B.",
  },
  {
    rank: 19,
    name: "LaMDA",
    creator: "Google",
    size: "Not public",
    license: "Proprietary",
    icon: MessageSquare,
    color: "emerald",
    summary:
      "Google's conversational AI model trained on documents, dialogs, and utterances to produce sensible, interesting, context-specific responses.",
    features: [
      "Improves natural conversational AI.",
      "Sensitive to context shifts in dialogue.",
      "Strong semantic understanding of user intent.",
    ],
    interesting: "A major predecessor to Google's conversational AI products.",
    architecture: "Transformer-based conversational model.",
  },
  {
    rank: 20,
    name: "BERT",
    creator: "Google",
    size: "Varies",
    license: "Open source",
    icon: Layers,
    color: "blue",
    summary:
      "A pioneering bidirectional Transformer model that became a standard for language understanding tasks in NLP.",
    features: [
      "Bidirectional contextual understanding.",
      "Transfer learning for downstream NLP tasks.",
      "Fine-grained embeddings for semantic representation.",
    ],
    interesting: "Helped establish modern Transformer-based NLP.",
    architecture: "Bidirectional encoder Transformer.",
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

export function TopLlmModelsBlock() {
  return (
    <div className="my-6 space-y-6">
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-violet-50 shadow-sm">
        <div className="flex items-start gap-3 border-b border-slate-100 bg-white/75 px-5 py-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm">
            <Table2 className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-[17px] font-bold text-gray-950">
              Top 20 LLM Models
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-gray-800">
              Large Language Models are neural networks equipped with billions of parameters
              and trained extensively on large datasets of unlabeled text. This lesson compares
              major LLM families and highlights their strengths, features, and applications.
            </p>
          </div>
        </div>

        <div className="grid gap-2 p-4 sm:grid-cols-3">
          {INTRO_POINTS.map((point) => (
            <div
              key={point}
              className="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-white/85 px-3 py-3 shadow-sm"
            >
              <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-slate-700" />
              <p className="text-[12.5px] leading-relaxed text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Ranked List"
          title="Model families learners should recognize"
          description="Use these cards as a map of major proprietary, open-source, research, and enterprise LLM families."
        />
        <div className="grid gap-3 lg:grid-cols-2">
          {MODELS.map((model) => (
            <ModelCardView key={model.name} model={model} />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <SectionHeader
          eyebrow="Comparison"
          title="Popular LLM models at a glance"
          description="This comparison condenses creator, size, license, notable strengths, and architectural notes."
          compact
        />
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-[900px] divide-y divide-slate-200 text-left text-[12px]">
            <thead className="bg-slate-50 text-[11px] uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-3 py-2 font-bold">Model</th>
                <th className="px-3 py-2 font-bold">Created By</th>
                <th className="px-3 py-2 font-bold">Size</th>
                <th className="px-3 py-2 font-bold">License</th>
                <th className="px-3 py-2 font-bold">What&apos;s Interesting</th>
                <th className="px-3 py-2 font-bold">Architecture Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {MODELS.map((model) => (
                <tr key={model.name} className="align-top">
                  <td className="px-3 py-2 font-semibold text-gray-900">
                    {model.rank}. {model.name}
                  </td>
                  <td className="px-3 py-2 text-gray-600">{model.creator}</td>
                  <td className="px-3 py-2 text-gray-600">{model.size}</td>
                  <td className="px-3 py-2 text-gray-600">{model.license}</td>
                  <td className="px-3 py-2 text-gray-600">{model.interesting}</td>
                  <td className="px-3 py-2 text-gray-600">{model.architecture}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="rounded-2xl border border-indigo-200 bg-indigo-50 px-4 py-3">
        <div className="flex items-start gap-2.5">
          <BrainCircuit className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
          <p className="text-[13px] leading-relaxed text-indigo-900">
            In essence, exploring the top LLMs gives a snapshot of the current state of the art
            and the future direction of AI systems. As these models improve, they continue to
            influence software, education, healthcare, business, and research.
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

function ModelCardView({ model }: { model: ModelCard }) {
  const color = COLOR_MAP[model.color];
  const Icon = model.icon;

  return (
    <article className={`rounded-2xl border ${color.border} ${color.bg} p-4 shadow-sm`}>
      <div className="mb-3 flex items-start gap-3">
        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${color.icon}`}>
          <Icon className="h-4.5 w-4.5" />
        </div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white/80 px-2 py-0.5 text-[10.5px] font-bold text-gray-500">
              #{model.rank}
            </span>
            <h4 className={`text-[14px] font-bold ${color.title}`}>{model.name}</h4>
          </div>
          <p className="mt-1 text-[11.5px] font-medium text-gray-500">
            {model.creator} · {model.size} · {model.license}
          </p>
        </div>
      </div>
      <p className="text-[12.5px] leading-relaxed text-gray-700">{model.summary}</p>
      <ul className="mt-3 space-y-2">
        {model.features.map((feature) => (
          <li key={feature} className="flex gap-2 text-[12px] leading-relaxed text-gray-600">
            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${color.dot}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
