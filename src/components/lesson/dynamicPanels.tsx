"use client";

import dynamic from "next/dynamic";

function PanelFallback() {
  return (
    <div
      className="min-h-[min(520px,70vh)] animate-pulse rounded-xl border border-gray-100 bg-gray-50"
      aria-hidden
    />
  );
}

export const GroqChatPlayground = dynamic(
  () => import("@/components/ai/GroqChatPlayground").then((m) => m.GroqChatPlayground),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const JupyterNotebookPanel = dynamic(
  () => import("@/components/lesson/JupyterNotebookPanel").then((m) => m.JupyterNotebookPanel),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const SetupChecklistPanel = dynamic(
  () => import("@/components/lesson/SetupChecklistPanel").then((m) => m.SetupChecklistPanel),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const ConceptSummaryPanel = dynamic(
  () => import("@/components/lesson/ConceptSummaryPanel").then((m) => m.ConceptSummaryPanel),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const LangChainWorkflowPanel = dynamic(
  () => import("@/components/lesson/LangChainWorkflowPanel").then((m) => m.LangChainWorkflowPanel),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const LangChainStepsChecklist = dynamic(
  () => import("@/components/lesson/LangChainStepsChecklist").then((m) => m.LangChainStepsChecklist),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const RagBasicsStepsChecklist = dynamic(
  () => import("@/components/lesson/RagBasicsStepsChecklist").then((m) => m.RagBasicsStepsChecklist),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const DocumentQaStepsChecklist = dynamic(
  () => import("@/components/lesson/DocumentQaStepsChecklist").then((m) => m.DocumentQaStepsChecklist),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const MultiAgentStepsChecklist = dynamic(
  () => import("@/components/lesson/MultiAgentStepsChecklist").then((m) => m.MultiAgentStepsChecklist),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const NextStepsStepsChecklist = dynamic(
  () => import("@/components/lesson/NextStepsStepsChecklist").then((m) => m.NextStepsStepsChecklist),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const LangChainPromptsGuide = dynamic(
  () => import("@/components/lesson/LangChainPromptsGuide").then((m) => m.LangChainPromptsGuide),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const LangChainLCELGuide = dynamic(
  () => import("@/components/lesson/LangChainLCELGuide").then((m) => m.LangChainLCELGuide),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const LangChainAgentsGuide = dynamic(
  () => import("@/components/lesson/LangChainAgentsGuide").then((m) => m.LangChainAgentsGuide),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const LangChainLangSmithGuide = dynamic(
  () => import("@/components/lesson/LangChainLangSmithGuide").then((m) => m.LangChainLangSmithGuide),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const GroqApiKeyChecklist = dynamic(
  () => import("@/components/lesson/GroqApiKeyChecklist").then((m) => m.GroqApiKeyChecklist),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const GroqDocsReferencePanel = dynamic(
  () => import("@/components/lesson/GroqDocsReferencePanel").then((m) => m.GroqDocsReferencePanel),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const HowToCreatePromptsPanel = dynamic(
  () => import("@/components/lesson/HowToCreatePromptsPanel").then((m) => m.HowToCreatePromptsPanel),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const SystemVsUserGuidePanel = dynamic(
  () => import("@/components/lesson/SystemVsUserGuidePanel").then((m) => m.SystemVsUserGuidePanel),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const FewShotPromptsPanel = dynamic(
  () => import("@/components/lesson/FewShotPromptsPanel").then((m) => m.FewShotPromptsPanel),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const ChainOfThoughtPanel = dynamic(
  () => import("@/components/lesson/ChainOfThoughtPanel").then((m) => m.ChainOfThoughtPanel),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const BestPracticesPanel = dynamic(
  () => import("@/components/lesson/BestPracticesPanel").then((m) => m.BestPracticesPanel),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const ChatMemoryPanel = dynamic(
  () => import("@/components/lesson/ChatMemoryPanel").then((m) => m.ChatMemoryPanel),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const QABotPanel = dynamic(
  () => import("@/components/lesson/QABotPanel").then((m) => m.QABotPanel),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const TestingChatbotPanel = dynamic(
  () => import("@/components/lesson/TestingChatbotPanel").then((m) => m.TestingChatbotPanel),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const ResponseQualityPanel = dynamic(
  () => import("@/components/lesson/ResponseQualityPanel").then((m) => m.ResponseQualityPanel),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const AgentsInAiTypesPanel = dynamic(
  () => import("@/components/lesson/AgentsInAiTypesPanel").then((m) => m.AgentsInAiTypesPanel),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const FunctionCallingPanel = dynamic(
  () => import("@/components/lesson/FunctionCallingPanel").then((m) => m.FunctionCallingPanel),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const AgentWorkflowPatternsPanel = dynamic(
  () => import("@/components/lesson/AgentWorkflowPatternsPanel").then((m) => m.AgentWorkflowPatternsPanel),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const ReActWorkflowPanel = dynamic(
  () => import("@/components/lesson/ReActWorkflowPanel").then((m) => m.ReActWorkflowPanel),
  { ssr: false, loading: () => <PanelFallback /> }
);

export const CustomerSupportProjectPanel = dynamic(
  () => import("@/components/lesson/CustomerSupportProjectPanel").then((m) => m.CustomerSupportProjectPanel),
  { ssr: false, loading: () => <PanelFallback /> }
);

