"use client";

import type { ElementType } from "react";
import {
  BadgeCheck,
  Bot,
  Brain,
  Cpu,
  Database,
  FileText,
  Layers,
  LineChart,
  MessageSquare,
  Repeat2,
  ShieldAlert,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from "lucide-react";

type Color = keyof typeof COLOR_MAP;

type CardItem = {
  icon: ElementType;
  title: string;
  description: string;
  bullets: string[];
  color: Color;
};

const HIGHLIGHTS = [
  "Simulates human intelligence through learning and reasoning.",
  "Processes large amounts of data to identify patterns and insights.",
  "Continuously improves performance using experience and feedback.",
];

const CORE_CONCEPTS: CardItem[] = [
  {
    icon: Brain,
    title: "Machine Learning (ML)",
    description:
      "Machine Learning is a subset of AI that enables systems to learn from data and improve performance without explicit programming.",
    bullets: [
      "Identifies patterns and relationships from data.",
      "Improves predictions and decisions through experience.",
      "Powers applications like recommendation and prediction systems.",
    ],
    color: "blue",
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    description:
      "Generative AI focuses on creating new content such as text, images, audio, and videos using learned patterns from large datasets.",
    bullets: [
      "Generates original content instead of only analyzing data.",
      "Learns patterns from massive datasets for content creation.",
      "Used in chatbots, image generation, and content writing tools.",
    ],
    color: "violet",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing (NLP)",
    description:
      "Natural Language Processing enables computers to understand, interpret, and generate human language naturally.",
    bullets: [
      "Supports tasks like translation, sentiment analysis, and chatbots.",
      "Combines linguistics with computer science techniques.",
      "Enables voice assistants such as Siri and Alexa.",
    ],
    color: "emerald",
  },
  {
    icon: Cpu,
    title: "Expert Systems",
    description:
      "Expert Systems simulate human decision-making using predefined rules and domain-specific knowledge.",
    bullets: [
      "Uses if-then rules to solve specialized problems.",
      "Mimics reasoning of human experts in specific domains.",
      "Commonly applied in healthcare, finance, and diagnostics.",
    ],
    color: "amber",
  },
];

const WORKING_STEPS = [
  {
    title: "Data Collection",
    description:
      "AI systems rely on large sets of data, including images, text, or sensor readings. To teach an AI to recognize cats, we collect a dataset of labeled cat images.",
  },
  {
    title: "Processing and Learning",
    description:
      "Algorithms analyze data and identify patterns, such as a cat's shape, ears, or whiskers.",
  },
  {
    title: "Model Training",
    description:
      "The model adjusts its internal settings to improve predictions. With more data, it becomes better at recognizing new examples.",
  },
  {
    title: "Decision Making",
    description:
      "Once trained, the system uses learned patterns to decide whether a new image contains a cat.",
  },
  {
    title: "Feedback and Improvement",
    description:
      "Feedback, rewards, or penalties help the AI refine future decisions, especially in reinforcement learning.",
  },
];

const TYPES = [
  {
    title: "Based on Capabilities",
    items: [
      "Narrow AI: Designed to perform specific tasks such as speech recognition or recommendation systems.",
      "General AI: A theoretical AI capable of performing human-like intellectual tasks across multiple domains.",
      "Superintelligent AI: A hypothetical AI that would surpass human intelligence in reasoning and decision-making.",
    ],
  },
  {
    title: "Based on Functionalities",
    items: [
      "Reactive Machines: Respond only to current inputs without storing past experiences.",
      "Limited Memory: Use past data and observations to improve future decisions.",
      "Theory of Mind: A theoretical AI that could understand human emotions, beliefs, and intentions.",
      "Self-Aware AI: A hypothetical AI with consciousness and awareness of its own existence.",
    ],
  },
];

const MODELS: CardItem[] = [
  {
    icon: Target,
    title: "Supervised Learning Models",
    description:
      "AI is trained on labeled data with clear input-output pairs to learn the relationship between them.",
    bullets: [
      "Reduces prediction errors during training.",
      "Used in image classification, spam filtering, and medical diagnosis.",
    ],
    color: "blue",
  },
  {
    icon: Database,
    title: "Unsupervised Learning Models",
    description:
      "AI works with unlabeled data to identify hidden patterns, trends, or groupings automatically.",
    bullets: [
      "Helps discover structures within complex datasets.",
      "Used in clustering, customer segmentation, and fraud detection.",
    ],
    color: "emerald",
  },
  {
    icon: Repeat2,
    title: "Reinforcement Learning Models",
    description:
      "AI learns by interacting with an environment using rewards and penalties as feedback.",
    bullets: [
      "Optimizes decisions through trial and error.",
      "Used in robotics, gaming, and autonomous systems.",
    ],
    color: "violet",
  },
];

const SUMMARY_COLUMNS = [
  {
    icon: Zap,
    title: "Advantages",
    color: "emerald" as const,
    items: [
      "Automates repetitive tasks, reduces errors, and improves workflow efficiency.",
      "Helps with better decision making by analyzing large amounts of data.",
      "Provides personalized experiences based on user preferences.",
      "Works continuously without breaks, enabling 24/7 operations.",
      "Identifies patterns in large datasets for fraud detection, diagnostics, and other insights.",
    ],
  },
  {
    icon: FileText,
    title: "Applications",
    color: "blue" as const,
    items: [
      "Used in healthcare for early diagnosis and treatment recommendations.",
      "Applied in retail to personalize shopping and manage inventory.",
      "Used in customer service through chatbots for faster 24/7 support.",
      "Improves manufacturing by predicting maintenance and optimizing production.",
      "Applied in finance for fraud detection, risk analysis, and investment support.",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Challenges",
    color: "amber" as const,
    items: [
      "Large data needs can create privacy and data security concerns.",
      "Bias in training data can lead to unfair or discriminatory decisions.",
      "Lack of transparency can make some model decisions difficult to understand.",
      "Automation can displace jobs, requiring workers to reskill.",
      "Sensitive AI use raises ethical concerns and requires responsible development.",
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
} as const;

export function ArtificialIntelligenceIntroBlock() {
  return (
    <div className="my-6 space-y-6">
      <section className="overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-violet-50 shadow-sm">
        <div className="flex items-start gap-3 border-b border-blue-100 bg-white/70 px-5 py-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            <Brain className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-blue-600">
              Last updated: 18 May, 2026
            </p>
            <h3 className="mt-1 text-[17px] font-bold text-gray-950">
              What is Artificial Intelligence (AI)?
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed text-gray-800">
              Artificial Intelligence is a technology that enables machines and computers to
              perform tasks that typically require human intelligence. It allows systems to
              learn from data, recognize patterns, and make decisions to solve complex problems.
            </p>
          </div>
        </div>

        <div className="grid gap-2 p-4 sm:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item}
              className="flex items-start gap-2.5 rounded-xl border border-blue-100 bg-white/85 px-3 py-3 shadow-sm"
            >
              <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
              <p className="text-[12.5px] leading-relaxed text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <SectionHeader
        eyebrow="Core Concepts"
        title="The main ideas inside AI"
        description="AI is a broad field. These four concepts explain the most common ways AI systems learn, generate, understand language, and make rule-based decisions."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {CORE_CONCEPTS.map((concept) => (
          <FeatureCard key={concept.title} item={concept} />
        ))}
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <SectionHeader
          eyebrow="Working"
          title="How an AI system learns"
          description="Most AI systems move from data to patterns, then use those patterns to make predictions or decisions."
          compact
        />
        <div className="mt-4 space-y-3">
          {WORKING_STEPS.map((step, index) => (
            <div key={step.title} className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-3">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                {index + 1}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">{step.title}</p>
                <p className="mt-1 text-[12.5px] leading-relaxed text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="Types of Artificial Intelligence"
          title="Two ways to classify AI"
          description="AI can be grouped by what it can do and by how it behaves."
        />
        <div className="grid gap-3 md:grid-cols-2">
          {TYPES.map((group) => (
            <div key={group.title} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <Layers className="h-4 w-4 text-violet-600" />
                <h4 className="text-sm font-bold text-gray-900">{group.title}</h4>
              </div>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-2 text-[12.5px] leading-relaxed text-gray-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionHeader
          eyebrow="AI Models"
          title="Common learning approaches"
          description="Different AI models use different training data and feedback signals."
        />
        <div className="grid gap-3 lg:grid-cols-3">
          {MODELS.map((model) => (
            <FeatureCard key={model.title} item={model} />
          ))}
        </div>
      </section>

      <section className="grid gap-3 lg:grid-cols-3">
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

      <div className="rounded-2xl border border-indigo-200 bg-indigo-50 px-4 py-3">
        <div className="flex items-start gap-2.5">
          <Workflow className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600" />
          <p className="text-[13px] leading-relaxed text-indigo-900">
            The simplest mental model: AI takes data as input, learns patterns from that data,
            produces predictions or decisions, and improves when feedback shows what worked.
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
      <ul className="mt-3 space-y-2">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-2 text-[12px] leading-relaxed text-gray-600">
            <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${color.dot}`} />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
