"use client";

import dynamic from "next/dynamic";

function BlockFallback() {
  return <div className="my-4 h-40 animate-pulse rounded-xl bg-gray-100" aria-hidden />;
}

export const FlowDiagram = dynamic(
  () => import("@/components/visual/FlowDiagram").then((m) => m.FlowDiagram),
  { loading: () => <BlockFallback /> }
);

export const IntroProgrammingInfographic = dynamic(
  () => import("@/components/lesson/IntroProgrammingInfographic").then((m) => m.IntroProgrammingInfographic),
  { loading: () => <BlockFallback /> }
);

export const ChoosingPythonInfographic = dynamic(
  () => import("@/components/lesson/ChoosingPythonInfographic").then((m) => m.ChoosingPythonInfographic),
  { loading: () => <BlockFallback /> }
);

export const SettingUpPythonInfographic = dynamic(
  () => import("@/components/lesson/SettingUpPythonInfographic").then((m) => m.SettingUpPythonInfographic),
  { loading: () => <BlockFallback /> }
);

export const PythonIdesInfographic = dynamic(
  () => import("@/components/lesson/PythonIdesInfographic").then((m) => m.PythonIdesInfographic),
  { loading: () => <BlockFallback /> }
);

export const InputOutputInfographic = dynamic(
  () => import("@/components/lesson/InputOutputInfographic").then((m) => m.InputOutputInfographic),
  { loading: () => <BlockFallback /> }
);

export const CommentsInfographic = dynamic(
  () => import("@/components/lesson/CommentsInfographic").then((m) => m.CommentsInfographic),
  { loading: () => <BlockFallback /> }
);

export const VariablesInfographic = dynamic(
  () => import("@/components/lesson/VariablesInfographic").then((m) => m.VariablesInfographic),
  { loading: () => <BlockFallback /> }
);

export const DataTypesInfographic = dynamic(
  () => import("@/components/lesson/DataTypesInfographic").then((m) => m.DataTypesInfographic),
  { loading: () => <BlockFallback /> }
);

export const TypeCastingInfographic = dynamic(
  () => import("@/components/lesson/TypeCastingInfographic").then((m) => m.TypeCastingInfographic),
  { loading: () => <BlockFallback /> }
);

export const ArithmeticOperatorsInfographic = dynamic(
  () => import("@/components/lesson/ArithmeticOperatorsInfographic").then((m) => m.ArithmeticOperatorsInfographic),
  { loading: () => <BlockFallback /> }
);

export const AssignmentOperatorsInfographic = dynamic(
  () => import("@/components/lesson/AssignmentOperatorsInfographic").then((m) => m.AssignmentOperatorsInfographic),
  { loading: () => <BlockFallback /> }
);

export const ComparisonOperatorsInfographic = dynamic(
  () => import("@/components/lesson/ComparisonOperatorsInfographic").then((m) => m.ComparisonOperatorsInfographic),
  { loading: () => <BlockFallback /> }
);

export const LogicalOperatorsInfographic = dynamic(
  () => import("@/components/lesson/LogicalOperatorsInfographic").then((m) => m.LogicalOperatorsInfographic),
  { loading: () => <BlockFallback /> }
);

export const IdentityOperatorsInfographic = dynamic(
  () => import("@/components/lesson/IdentityOperatorsInfographic").then((m) => m.IdentityOperatorsInfographic),
  { loading: () => <BlockFallback /> }
);

export const MembershipOperatorsInfographic = dynamic(
  () => import("@/components/lesson/MembershipOperatorsInfographic").then((m) => m.MembershipOperatorsInfographic),
  { loading: () => <BlockFallback /> }
);

export const BitwiseOperatorsInfographic = dynamic(
  () => import("@/components/lesson/BitwiseOperatorsInfographic").then((m) => m.BitwiseOperatorsInfographic),
  { loading: () => <BlockFallback /> }
);

export const CreatingStringsInfographic = dynamic(
  () => import("@/components/lesson/CreatingStringsInfographic").then((m) => m.CreatingStringsInfographic),
  { loading: () => <BlockFallback /> }
);

export const FormattingStringsInfographic = dynamic(
  () => import("@/components/lesson/FormattingStringsInfographic").then((m) => m.FormattingStringsInfographic),
  { loading: () => <BlockFallback /> }
);

export const StringIndexingInfographic = dynamic(
  () => import("@/components/lesson/StringIndexingInfographic").then((m) => m.StringIndexingInfographic),
  { loading: () => <BlockFallback /> }
);

export const StringSlicingInfographic = dynamic(
  () => import("@/components/lesson/StringSlicingInfographic").then((m) => m.StringSlicingInfographic),
  { loading: () => <BlockFallback /> }
);

export const StringMethodsInfographic = dynamic(
  () => import("@/components/lesson/StringMethodsInfographic").then((m) => m.StringMethodsInfographic),
  { loading: () => <BlockFallback /> }
);

export const CreatingListsInfographic = dynamic(
  () => import("@/components/lesson/CreatingListsInfographic").then((m) => m.CreatingListsInfographic),
  { loading: () => <BlockFallback /> }
);

export const ListCharacteristicsInfographic = dynamic(
  () => import("@/components/lesson/ListCharacteristicsInfographic").then((m) => m.ListCharacteristicsInfographic),
  { loading: () => <BlockFallback /> }
);

export const ListIndexingInfographic = dynamic(
  () => import("@/components/lesson/ListIndexingInfographic").then((m) => m.ListIndexingInfographic),
  { loading: () => <BlockFallback /> }
);

export const ListSlicingInfographic = dynamic(
  () => import("@/components/lesson/ListSlicingInfographic").then((m) => m.ListSlicingInfographic),
  { loading: () => <BlockFallback /> }
);

export const ListMethodsInfographic = dynamic(
  () => import("@/components/lesson/ListMethodsInfographic").then((m) => m.ListMethodsInfographic),
  { loading: () => <BlockFallback /> }
);

export const ListModifyingInfographic = dynamic(
  () => import("@/components/lesson/ListModifyingInfographic").then((m) => m.ListModifyingInfographic),
  { loading: () => <BlockFallback /> }
);

export const TupleSyntaxInfographic = dynamic(
  () => import("@/components/lesson/TupleSyntaxInfographic").then((m) => m.TupleSyntaxInfographic),
  { loading: () => <BlockFallback /> }
);

export const TupleIndexingInfographic = dynamic(
  () => import("@/components/lesson/TupleIndexingInfographic").then((m) => m.TupleIndexingInfographic),
  { loading: () => <BlockFallback /> }
);

export const TuplePropertiesInfographic = dynamic(
  () => import("@/components/lesson/TuplePropertiesInfographic").then((m) => m.TuplePropertiesInfographic),
  { loading: () => <BlockFallback /> }
);

export const TupleSlicingInfographic = dynamic(
  () => import("@/components/lesson/TupleSlicingInfographic").then((m) => m.TupleSlicingInfographic),
  { loading: () => <BlockFallback /> }
);

export const TupleMethodsInfographic = dynamic(
  () => import("@/components/lesson/TupleMethodsInfographic").then((m) => m.TupleMethodsInfographic),
  { loading: () => <BlockFallback /> }
);

export const SetSyntaxInfographic = dynamic(
  () => import("@/components/lesson/SetSyntaxInfographic").then((m) => m.SetSyntaxInfographic),
  { loading: () => <BlockFallback /> }
);

export const SetUpdatingInfographic = dynamic(
  () => import("@/components/lesson/SetUpdatingInfographic").then((m) => m.SetUpdatingInfographic),
  { loading: () => <BlockFallback /> }
);

export const SetOperationsInfographic = dynamic(
  () => import("@/components/lesson/SetOperationsInfographic").then((m) => m.SetOperationsInfographic),
  { loading: () => <BlockFallback /> }
);

export const SetMethodsInfographic = dynamic(
  () => import("@/components/lesson/SetMethodsInfographic").then((m) => m.SetMethodsInfographic),
  { loading: () => <BlockFallback /> }
);

export const DictionarySyntaxInfographic = dynamic(
  () => import("@/components/lesson/DictionarySyntaxInfographic").then((m) => m.DictionarySyntaxInfographic),
  { loading: () => <BlockFallback /> }
);

export const DictionaryKeysValuesInfographic = dynamic(
  () => import("@/components/lesson/DictionaryKeysValuesInfographic").then((m) => m.DictionaryKeysValuesInfographic),
  { loading: () => <BlockFallback /> }
);

export const DictionaryAccessingInfographic = dynamic(
  () => import("@/components/lesson/DictionaryAccessingInfographic").then((m) => m.DictionaryAccessingInfographic),
  { loading: () => <BlockFallback /> }
);

export const DictionaryMethodsInfographic = dynamic(
  () => import("@/components/lesson/DictionaryMethodsInfographic").then((m) => m.DictionaryMethodsInfographic),
  { loading: () => <BlockFallback /> }
);

export const IfStatementInfographic = dynamic(
  () => import("@/components/lesson/IfStatementInfographic").then((m) => m.IfStatementInfographic),
  { loading: () => <BlockFallback /> }
);

export const IfElseInfographic = dynamic(
  () => import("@/components/lesson/IfElseInfographic").then((m) => m.IfElseInfographic),
  { loading: () => <BlockFallback /> }
);

export const IfElifElseInfographic = dynamic(
  () => import("@/components/lesson/IfElifElseInfographic").then((m) => m.IfElifElseInfographic),
  { loading: () => <BlockFallback /> }
);

export const WhileLoopInfographic = dynamic(
  () => import("@/components/lesson/WhileLoopInfographic").then((m) => m.WhileLoopInfographic),
  { loading: () => <BlockFallback /> }
);

export const ForLoopInfographic = dynamic(
  () => import("@/components/lesson/ForLoopInfographic").then((m) => m.ForLoopInfographic),
  { loading: () => <BlockFallback /> }
);

export const BreakContinueInfographic = dynamic(
  () => import("@/components/lesson/BreakContinueInfographic").then((m) => m.BreakContinueInfographic),
  { loading: () => <BlockFallback /> }
);

export const PassStatementInfographic = dynamic(
  () => import("@/components/lesson/PassStatementInfographic").then((m) => m.PassStatementInfographic),
  { loading: () => <BlockFallback /> }
);

export const RangeFunctionInfographic = dynamic(
  () => import("@/components/lesson/RangeFunctionInfographic").then((m) => m.RangeFunctionInfographic),
  { loading: () => <BlockFallback /> }
);

export const ListComprehensionInfographic = dynamic(
  () => import("@/components/lesson/ListComprehensionInfographic").then((m) => m.ListComprehensionInfographic),
  { loading: () => <BlockFallback /> }
);

export const ComprehensionUsesInfographic = dynamic(
  () => import("@/components/lesson/ComprehensionUsesInfographic").then((m) => m.ComprehensionUsesInfographic),
  { loading: () => <BlockFallback /> }
);

export const DictionaryComprehensionInfographic = dynamic(
  () => import("@/components/lesson/DictionaryComprehensionInfographic").then((m) => m.DictionaryComprehensionInfographic),
  { loading: () => <BlockFallback /> }
);

export const FunctionsCreatingInfographic = dynamic(
  () => import("@/components/lesson/FunctionsCreatingInfographic").then((m) => m.FunctionsCreatingInfographic),
  { loading: () => <BlockFallback /> }
);

export const FunctionsCallingInfographic = dynamic(
  () => import("@/components/lesson/FunctionsCallingInfographic").then((m) => m.FunctionsCallingInfographic),
  { loading: () => <BlockFallback /> }
);

export const FunctionArgumentsInfographic = dynamic(
  () => import("@/components/lesson/FunctionArgumentsInfographic").then((m) => m.FunctionArgumentsInfographic),
  { loading: () => <BlockFallback /> }
);

export const FunctionVariablesInfographic = dynamic(
  () => import("@/components/lesson/FunctionVariablesInfographic").then((m) => m.FunctionVariablesInfographic),
  { loading: () => <BlockFallback /> }
);

export const FunctionRecursionInfographic = dynamic(
  () => import("@/components/lesson/FunctionRecursionInfographic").then((m) => m.FunctionRecursionInfographic),
  { loading: () => <BlockFallback /> }
);

export const LambdaFunctionsInfographic = dynamic(
  () => import("@/components/lesson/LambdaFunctionsInfographic").then((m) => m.LambdaFunctionsInfographic),
  { loading: () => <BlockFallback /> }
);

export const AgenticAiTopicInfographic = dynamic(
  () => import("@/components/lesson/AgenticAiTopicInfographic").then((m) => m.AgenticAiTopicInfographic),
  { loading: () => <BlockFallback /> }
);

export const ArtificialIntelligenceIntroBlock = dynamic(
  () => import("@/components/lesson/ArtificialIntelligenceIntroBlock").then((m) => m.ArtificialIntelligenceIntroBlock),
  { loading: () => <BlockFallback /> }
);

export const LargeLanguageModelIntroBlock = dynamic(
  () => import("@/components/lesson/LargeLanguageModelIntroBlock").then((m) => m.LargeLanguageModelIntroBlock),
  { loading: () => <BlockFallback /> }
);

export const LlmOrchestrationBlock = dynamic(
  () => import("@/components/lesson/LlmOrchestrationBlock").then((m) => m.LlmOrchestrationBlock),
  { loading: () => <BlockFallback /> }
);

export const TopLlmModelsBlock = dynamic(
  () => import("@/components/lesson/TopLlmModelsBlock").then((m) => m.TopLlmModelsBlock),
  { loading: () => <BlockFallback /> }
);

export const GroqApiKeyGuideBlock = dynamic(
  () => import("@/components/lesson/GroqApiKeyGuideBlock").then((m) => m.GroqApiKeyGuideBlock),
  { loading: () => <BlockFallback /> }
);

export const GroqDocsLessonBlock = dynamic(
  () => import("@/components/lesson/GroqDocsLessonBlock").then((m) => m.GroqDocsLessonBlock),
  { loading: () => <BlockFallback /> }
);

export const LangChainIntroBlock = dynamic(
  () => import("@/components/lesson/LangChainIntroBlock").then((m) => m.LangChainIntroBlock),
  { loading: () => <BlockFallback /> }
);

export const LangChainSetupGuide = dynamic(
  () => import("@/components/lesson/LangChainSetupGuide").then((m) => m.LangChainSetupGuide),
  { loading: () => <BlockFallback /> }
);

export const RagBasicsGuide = dynamic(
  () => import("@/components/lesson/RagBasicsGuide").then((m) => m.RagBasicsGuide),
  { loading: () => <BlockFallback /> }
);

export const DocumentQaGuide = dynamic(
  () => import("@/components/lesson/DocumentQaGuide").then((m) => m.DocumentQaGuide),
  { loading: () => <BlockFallback /> }
);

export const MultiAgentGuide = dynamic(
  () => import("@/components/lesson/MultiAgentGuide").then((m) => m.MultiAgentGuide),
  { loading: () => <BlockFallback /> }
);

export const NextStepsGuide = dynamic(
  () => import("@/components/lesson/NextStepsGuide").then((m) => m.NextStepsGuide),
  { loading: () => <BlockFallback /> }
);

export const LangChainPromptsBlock = dynamic(
  () => import("@/components/lesson/LangChainPromptsBlock").then((m) => m.LangChainPromptsBlock),
  { loading: () => <BlockFallback /> }
);

export const LangChainLCELBlock = dynamic(
  () => import("@/components/lesson/LangChainLCELBlock").then((m) => m.LangChainLCELBlock),
  { loading: () => <BlockFallback /> }
);

export const LangChainAgentsBlock = dynamic(
  () => import("@/components/lesson/LangChainAgentsBlock").then((m) => m.LangChainAgentsBlock),
  { loading: () => <BlockFallback /> }
);

export const LangChainLangSmithBlock = dynamic(
  () => import("@/components/lesson/LangChainLangSmithBlock").then((m) => m.LangChainLangSmithBlock),
  { loading: () => <BlockFallback /> }
);

export const AgentsInAiGuide = dynamic(
  () => import("@/components/lesson/AgentsInAiGuide").then((m) => m.AgentsInAiGuide),
  { loading: () => <BlockFallback /> }
);

export const FunctionCallingGuide = dynamic(
  () => import("@/components/lesson/FunctionCallingGuide").then((m) => m.FunctionCallingGuide),
  { loading: () => <BlockFallback /> }
);

export const BuildingAiAgentsGuide = dynamic(
  () => import("@/components/lesson/BuildingAiAgentsGuide").then((m) => m.BuildingAiAgentsGuide),
  { loading: () => <BlockFallback /> }
);

export const ReActPatternGuide = dynamic(
  () => import("@/components/lesson/ReActPatternGuide").then((m) => m.ReActPatternGuide),
  { loading: () => <BlockFallback /> }
);

export const CustomerSupportProjectGuide = dynamic(
  () => import("@/components/lesson/CustomerSupportProjectGuide").then((m) => m.CustomerSupportProjectGuide),
  { loading: () => <BlockFallback /> }
);

export const FinalProjectInfographic = dynamic(
  () => import("@/components/lesson/FinalProjectInfographic").then((m) => m.FinalProjectInfographic),
  { loading: () => <BlockFallback /> }
);

export const SqlTopicInfographic = dynamic(
  () => import("@/components/lesson/SqlTopicInfographic").then((m) => m.SqlTopicInfographic),
  { loading: () => <BlockFallback /> }
);

