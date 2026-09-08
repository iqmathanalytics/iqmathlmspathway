import fs from "fs";

const panels = [
  ["GroqChatPlayground", "@/components/ai/GroqChatPlayground"],
  ["JupyterNotebookPanel", "@/components/lesson/JupyterNotebookPanel"],
  ["SetupChecklistPanel", "@/components/lesson/SetupChecklistPanel"],
  ["ConceptSummaryPanel", "@/components/lesson/ConceptSummaryPanel"],
  ["LangChainWorkflowPanel", "@/components/lesson/LangChainWorkflowPanel"],
  ["LangChainStepsChecklist", "@/components/lesson/LangChainStepsChecklist"],
  ["RagBasicsStepsChecklist", "@/components/lesson/RagBasicsStepsChecklist"],
  ["DocumentQaStepsChecklist", "@/components/lesson/DocumentQaStepsChecklist"],
  ["MultiAgentStepsChecklist", "@/components/lesson/MultiAgentStepsChecklist"],
  ["NextStepsStepsChecklist", "@/components/lesson/NextStepsStepsChecklist"],
  ["LangChainPromptsGuide", "@/components/lesson/LangChainPromptsGuide"],
  ["LangChainLCELGuide", "@/components/lesson/LangChainLCELGuide"],
  ["LangChainAgentsGuide", "@/components/lesson/LangChainAgentsGuide"],
  ["LangChainLangSmithGuide", "@/components/lesson/LangChainLangSmithGuide"],
  ["GroqApiKeyChecklist", "@/components/lesson/GroqApiKeyChecklist"],
  ["GroqDocsReferencePanel", "@/components/lesson/GroqDocsReferencePanel"],
  ["HowToCreatePromptsPanel", "@/components/lesson/HowToCreatePromptsPanel"],
  ["SystemVsUserGuidePanel", "@/components/lesson/SystemVsUserGuidePanel"],
  ["FewShotPromptsPanel", "@/components/lesson/FewShotPromptsPanel"],
  ["ChainOfThoughtPanel", "@/components/lesson/ChainOfThoughtPanel"],
  ["BestPracticesPanel", "@/components/lesson/BestPracticesPanel"],
  ["ChatMemoryPanel", "@/components/lesson/ChatMemoryPanel"],
  ["QABotPanel", "@/components/lesson/QABotPanel"],
  ["TestingChatbotPanel", "@/components/lesson/TestingChatbotPanel"],
  ["ResponseQualityPanel", "@/components/lesson/ResponseQualityPanel"],
  ["AgentsInAiTypesPanel", "@/components/lesson/AgentsInAiTypesPanel"],
  ["FunctionCallingPanel", "@/components/lesson/FunctionCallingPanel"],
  ["AgentWorkflowPatternsPanel", "@/components/lesson/AgentWorkflowPatternsPanel"],
  ["ReActWorkflowPanel", "@/components/lesson/ReActWorkflowPanel"],
  ["CustomerSupportProjectPanel", "@/components/lesson/CustomerSupportProjectPanel"],
];

let out = `"use client";

import dynamic from "next/dynamic";

function PanelFallback() {
  return (
    <div className="min-h-[240px] animate-pulse rounded-xl border border-gray-100 bg-gray-50" aria-hidden />
  );
}

`;

for (const [name, path] of panels) {
  out += `export const ${name} = dynamic(
  () => import("${path}").then((m) => m.${name}),
  { ssr: false, loading: () => <PanelFallback /> }
);

`;
}

fs.writeFileSync("src/components/lesson/dynamicPanels.tsx", out);
console.log(`Wrote ${panels.length} dynamic panel exports`);
