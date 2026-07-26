"use client";

import type { ReactNode } from "react";
import type { LessonBlock } from "@/lib/types";
import { FlowDiagram } from "@/components/visual/FlowDiagram";
import { IntroProgrammingInfographic } from "@/components/lesson/IntroProgrammingInfographic";
import { ChoosingPythonInfographic } from "@/components/lesson/ChoosingPythonInfographic";
import { SettingUpPythonInfographic } from "@/components/lesson/SettingUpPythonInfographic";
import { PythonIdesInfographic } from "@/components/lesson/PythonIdesInfographic";
import { InputOutputInfographic } from "@/components/lesson/InputOutputInfographic";
import { CommentsInfographic } from "@/components/lesson/CommentsInfographic";
import { VariablesInfographic } from "@/components/lesson/VariablesInfographic";
import { DataTypesInfographic } from "@/components/lesson/DataTypesInfographic";
import { TypeCastingInfographic } from "@/components/lesson/TypeCastingInfographic";
import { ArithmeticOperatorsInfographic } from "@/components/lesson/ArithmeticOperatorsInfographic";
import { AssignmentOperatorsInfographic } from "@/components/lesson/AssignmentOperatorsInfographic";
import { ComparisonOperatorsInfographic } from "@/components/lesson/ComparisonOperatorsInfographic";
import { LogicalOperatorsInfographic } from "@/components/lesson/LogicalOperatorsInfographic";
import { IdentityOperatorsInfographic } from "@/components/lesson/IdentityOperatorsInfographic";
import { MembershipOperatorsInfographic } from "@/components/lesson/MembershipOperatorsInfographic";
import { BitwiseOperatorsInfographic } from "@/components/lesson/BitwiseOperatorsInfographic";
import { CreatingStringsInfographic } from "@/components/lesson/CreatingStringsInfographic";
import { FormattingStringsInfographic } from "@/components/lesson/FormattingStringsInfographic";
import { StringIndexingInfographic } from "@/components/lesson/StringIndexingInfographic";
import { StringSlicingInfographic } from "@/components/lesson/StringSlicingInfographic";
import { StringMethodsInfographic } from "@/components/lesson/StringMethodsInfographic";
import { CreatingListsInfographic } from "@/components/lesson/CreatingListsInfographic";
import { ListCharacteristicsInfographic } from "@/components/lesson/ListCharacteristicsInfographic";
import { ListIndexingInfographic } from "@/components/lesson/ListIndexingInfographic";
import { ListSlicingInfographic } from "@/components/lesson/ListSlicingInfographic";
import { ListMethodsInfographic } from "@/components/lesson/ListMethodsInfographic";
import { ListModifyingInfographic } from "@/components/lesson/ListModifyingInfographic";
import { TupleSyntaxInfographic } from "@/components/lesson/TupleSyntaxInfographic";
import { TupleIndexingInfographic } from "@/components/lesson/TupleIndexingInfographic";
import { TuplePropertiesInfographic } from "@/components/lesson/TuplePropertiesInfographic";
import { TupleSlicingInfographic } from "@/components/lesson/TupleSlicingInfographic";
import { TupleMethodsInfographic } from "@/components/lesson/TupleMethodsInfographic";
import { SetSyntaxInfographic } from "@/components/lesson/SetSyntaxInfographic";
import { SetUpdatingInfographic } from "@/components/lesson/SetUpdatingInfographic";
import { SetOperationsInfographic } from "@/components/lesson/SetOperationsInfographic";
import { SetMethodsInfographic } from "@/components/lesson/SetMethodsInfographic";
import { DictionarySyntaxInfographic } from "@/components/lesson/DictionarySyntaxInfographic";
import { DictionaryKeysValuesInfographic } from "@/components/lesson/DictionaryKeysValuesInfographic";
import { DictionaryAccessingInfographic } from "@/components/lesson/DictionaryAccessingInfographic";
import { DictionaryMethodsInfographic } from "@/components/lesson/DictionaryMethodsInfographic";
import { IfStatementInfographic } from "@/components/lesson/IfStatementInfographic";
import { IfElseInfographic } from "@/components/lesson/IfElseInfographic";
import { IfElifElseInfographic } from "@/components/lesson/IfElifElseInfographic";
import { WhileLoopInfographic } from "@/components/lesson/WhileLoopInfographic";
import { ForLoopInfographic } from "@/components/lesson/ForLoopInfographic";
import { BreakContinueInfographic } from "@/components/lesson/BreakContinueInfographic";
import { PassStatementInfographic } from "@/components/lesson/PassStatementInfographic";
import { RangeFunctionInfographic } from "@/components/lesson/RangeFunctionInfographic";
import { ListComprehensionInfographic } from "@/components/lesson/ListComprehensionInfographic";
import { ComprehensionUsesInfographic } from "@/components/lesson/ComprehensionUsesInfographic";
import { DictionaryComprehensionInfographic } from "@/components/lesson/DictionaryComprehensionInfographic";
import { FunctionsCreatingInfographic } from "@/components/lesson/FunctionsCreatingInfographic";
import { FunctionsCallingInfographic } from "@/components/lesson/FunctionsCallingInfographic";
import { FunctionArgumentsInfographic } from "@/components/lesson/FunctionArgumentsInfographic";
import { FunctionVariablesInfographic } from "@/components/lesson/FunctionVariablesInfographic";
import { FunctionRecursionInfographic } from "@/components/lesson/FunctionRecursionInfographic";
import { LambdaFunctionsInfographic } from "@/components/lesson/LambdaFunctionsInfographic";
import { AgenticAiTopicInfographic } from "@/components/lesson/AgenticAiTopicInfographic";
import { ArtificialIntelligenceIntroBlock } from "@/components/lesson/ArtificialIntelligenceIntroBlock";
import { LargeLanguageModelIntroBlock } from "@/components/lesson/LargeLanguageModelIntroBlock";
import { LlmOrchestrationBlock } from "@/components/lesson/LlmOrchestrationBlock";
import { TopLlmModelsBlock } from "@/components/lesson/TopLlmModelsBlock";
import { GroqApiKeyGuideBlock } from "@/components/lesson/GroqApiKeyGuideBlock";
import { GroqDocsLessonBlock } from "@/components/lesson/GroqDocsLessonBlock";
import { LangChainIntroBlock } from "@/components/lesson/LangChainIntroBlock";
import { LangChainSetupGuide } from "@/components/lesson/LangChainSetupGuide";
import { RagBasicsGuide } from "@/components/lesson/RagBasicsGuide";
import { DocumentQaGuide } from "@/components/lesson/DocumentQaGuide";
import { MultiAgentGuide } from "@/components/lesson/MultiAgentGuide";
import { NextStepsGuide } from "@/components/lesson/NextStepsGuide";
import { LangChainPromptsBlock } from "@/components/lesson/LangChainPromptsBlock";
import { LangChainLCELBlock } from "@/components/lesson/LangChainLCELBlock";
import { LangChainAgentsBlock } from "@/components/lesson/LangChainAgentsBlock";
import { LangChainLangSmithBlock } from "@/components/lesson/LangChainLangSmithBlock";
import { AgentsInAiGuide } from "@/components/lesson/AgentsInAiGuide";
import { FunctionCallingGuide } from "@/components/lesson/FunctionCallingGuide";
import { BuildingAiAgentsGuide } from "@/components/lesson/BuildingAiAgentsGuide";
import { ReActPatternGuide } from "@/components/lesson/ReActPatternGuide";
import { CustomerSupportProjectGuide } from "@/components/lesson/CustomerSupportProjectGuide";
import { FinalProjectInfographic } from "@/components/lesson/FinalProjectInfographic";
import { SqlTopicInfographic } from "@/components/lesson/SqlTopicInfographic";
import { ArrowRight, Lightbulb, Code2, Pencil, Play } from "lucide-react";

/** Turn bare http(s) URLs and /datasets/ paths into clickable links. */
function linkifyText(text: string): ReactNode {
  const parts = text.split(/(https?:\/\/[^\s]+|\/datasets\/[^\s]+)/g);
  return parts.map((part, i) => {
    const isHttp = /^https?:\/\//.test(part);
    const isDataset = /^\/datasets\//.test(part);
    if (!isHttp && !isDataset) return part;
    const href = part.replace(/[),.;]+$/, "");
    const trailing = part.slice(href.length);
    return (
      <span key={i}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="break-all font-medium text-sky-800 underline decoration-sky-300 underline-offset-2 hover:text-sky-950"
          download={isDataset ? true : undefined}
        >
          {href}
        </a>
        {trailing}
      </span>
    );
  });
}

interface LessonContentProps {
  blocks: LessonBlock[];
  /** When sidebar, practice blocks show prompts only (IDE is beside content) */
  practiceMode?: "embedded" | "sidebar";
  activePracticeIndex?: number;
  onSelectPractice?: (index: number) => void;
}

export function LessonContent({
  blocks,
  practiceMode = "sidebar",
  activePracticeIndex = 0,
  onSelectPractice,
}: LessonContentProps) {
  let practiceCounter = -1;

  return (
    <div className="lesson-prose max-w-none">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={i} className="mt-8 mb-3 text-xl font-bold text-gray-900">
                {block.content}
              </h2>
            );
          case "paragraph":
            return <p key={i}>{block.content}</p>;
          case "list":
            return (
              <ul key={i}>
                {block.items?.map((item) => (
                  <li key={item}>{linkifyText(item)}</li>
                ))}
              </ul>
            );
          case "tip":
            return (
              <div
                key={i}
                className="my-4 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-950"
              >
                <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                <p className="whitespace-pre-wrap text-sm leading-relaxed">
                  {linkifyText(block.content ?? "")}
                </p>
              </div>
            );
          case "visual":
            return block.diagram ? (
              <FlowDiagram key={i} diagram={block.diagram} />
            ) : null;
          case "infographic":
            if (block.infographic === "intro-programming") {
              return <IntroProgrammingInfographic key={i} />;
            }
            if (block.infographic === "choosing-python") {
              return <ChoosingPythonInfographic key={i} />;
            }
            if (block.infographic === "setting-up-python") {
              return <SettingUpPythonInfographic key={i} />;
            }
            if (block.infographic === "python-ides") {
              return <PythonIdesInfographic key={i} />;
            }
            if (block.infographic === "input-output") {
              return <InputOutputInfographic key={i} />;
            }
            if (block.infographic === "comments") {
              return <CommentsInfographic key={i} />;
            }
            if (block.infographic === "variables") {
              return <VariablesInfographic key={i} />;
            }
            if (block.infographic === "data-types") {
              return <DataTypesInfographic key={i} />;
            }
            if (block.infographic === "typecasting") {
              return <TypeCastingInfographic key={i} />;
            }
            if (block.infographic === "math-operators") {
              return <ArithmeticOperatorsInfographic key={i} />;
            }
            if (block.infographic === "assignment-operators") {
              return <AssignmentOperatorsInfographic key={i} />;
            }
            if (block.infographic === "comparison-operators") {
              return <ComparisonOperatorsInfographic key={i} />;
            }
            if (block.infographic === "logical-operators") {
              return <LogicalOperatorsInfographic key={i} />;
            }
            if (block.infographic === "identity-operators") {
              return <IdentityOperatorsInfographic key={i} />;
            }
            if (block.infographic === "membership-operators") {
              return <MembershipOperatorsInfographic key={i} />;
            }
            if (block.infographic === "bitwise-operators") {
              return <BitwiseOperatorsInfographic key={i} />;
            }
            if (block.infographic === "creating-strings") {
              return <CreatingStringsInfographic key={i} />;
            }
            if (block.infographic === "formatting-strings") {
              return <FormattingStringsInfographic key={i} />;
            }
            if (block.infographic === "string-indexing") {
              return <StringIndexingInfographic key={i} />;
            }
            if (block.infographic === "string-slicing") {
              return <StringSlicingInfographic key={i} />;
            }
            if (block.infographic === "string-methods") {
              return <StringMethodsInfographic key={i} />;
            }
            if (block.infographic === "creating-lists") {
              return <CreatingListsInfographic key={i} />;
            }
            if (block.infographic === "list-characteristics") {
              return <ListCharacteristicsInfographic key={i} />;
            }
            if (block.infographic === "list-indexing") {
              return <ListIndexingInfographic key={i} />;
            }
            if (block.infographic === "list-slicing") {
              return <ListSlicingInfographic key={i} />;
            }
            if (block.infographic === "list-methods") {
              return <ListMethodsInfographic key={i} />;
            }
            if (block.infographic === "list-modifying") {
              return <ListModifyingInfographic key={i} />;
            }
            if (block.infographic === "tuple-syntax") {
              return <TupleSyntaxInfographic key={i} />;
            }
            if (block.infographic === "tuple-indexing") {
              return <TupleIndexingInfographic key={i} />;
            }
            if (block.infographic === "tuple-properties") {
              return <TuplePropertiesInfographic key={i} />;
            }
            if (block.infographic === "tuple-slicing") {
              return <TupleSlicingInfographic key={i} />;
            }
            if (block.infographic === "tuple-methods") {
              return <TupleMethodsInfographic key={i} />;
            }
            if (block.infographic === "set-syntax") {
              return <SetSyntaxInfographic key={i} />;
            }
            if (block.infographic === "set-updating") {
              return <SetUpdatingInfographic key={i} />;
            }
            if (block.infographic === "set-operations") {
              return <SetOperationsInfographic key={i} />;
            }
            if (block.infographic === "set-methods") {
              return <SetMethodsInfographic key={i} />;
            }
            if (block.infographic === "dictionary-syntax") {
              return <DictionarySyntaxInfographic key={i} />;
            }
            if (block.infographic === "dictionary-keys-values") {
              return <DictionaryKeysValuesInfographic key={i} />;
            }
            if (block.infographic === "dictionary-accessing") {
              return <DictionaryAccessingInfographic key={i} />;
            }
            if (block.infographic === "dictionary-methods") {
              return <DictionaryMethodsInfographic key={i} />;
            }
            if (block.infographic === "if-statement") {
              return <IfStatementInfographic key={i} />;
            }
            if (block.infographic === "if-else") {
              return <IfElseInfographic key={i} />;
            }
            if (block.infographic === "if-elif-else") {
              return <IfElifElseInfographic key={i} />;
            }
            if (block.infographic === "while-loop") {
              return <WhileLoopInfographic key={i} />;
            }
            if (block.infographic === "for-loop") {
              return <ForLoopInfographic key={i} />;
            }
            if (block.infographic === "break-continue") {
              return <BreakContinueInfographic key={i} />;
            }
            if (block.infographic === "pass-statement") {
              return <PassStatementInfographic key={i} />;
            }
            if (block.infographic === "range-function") {
              return <RangeFunctionInfographic key={i} />;
            }
            if (block.infographic === "list-comprehension") {
              return <ListComprehensionInfographic key={i} />;
            }
            if (block.infographic === "comprehension-uses") {
              return <ComprehensionUsesInfographic key={i} />;
            }
            if (block.infographic === "dict-comprehension") {
              return <DictionaryComprehensionInfographic key={i} />;
            }
            if (block.infographic === "functions-creating") {
              return <FunctionsCreatingInfographic key={i} />;
            }
            if (block.infographic === "functions-calling") {
              return <FunctionsCallingInfographic key={i} />;
            }
            if (block.infographic === "function-arguments") {
              return <FunctionArgumentsInfographic key={i} />;
            }
            if (block.infographic === "function-variables") {
              return <FunctionVariablesInfographic key={i} />;
            }
            if (block.infographic === "function-recursion") {
              return <FunctionRecursionInfographic key={i} />;
            }
            if (block.infographic === "lambda-functions") {
              return <LambdaFunctionsInfographic key={i} />;
            }
            if (block.infographic === "agentic-ai-topic") {
              return (
                <AgenticAiTopicInfographic
                  key={i}
                  topicId={block.content}
                />
              );
            }
            if (block.infographic === "final-project-overview") {
              return <FinalProjectInfographic key={i} section="overview" />;
            }
            if (block.infographic === "final-project-data") {
              return <FinalProjectInfographic key={i} section="data" />;
            }
            if (block.infographic === "final-project-logic") {
              return <FinalProjectInfographic key={i} section="logic" />;
            }
            if (block.infographic === "final-project-functions") {
              return <FinalProjectInfographic key={i} section="functions" />;
            }
            if (block.infographic === "final-project-capstone") {
              return <FinalProjectInfographic key={i} section="capstone" />;
            }
            if (block.infographic === "sql-intro-databases") {
              return <SqlTopicInfographic key={i} variant="sql-intro-databases" />;
            }
            if (block.infographic === "sql-relational-model") {
              return <SqlTopicInfographic key={i} variant="sql-relational-model" />;
            }
            if (block.infographic === "sql-intro-sql") {
              return <SqlTopicInfographic key={i} variant="sql-intro-sql" />;
            }
            if (block.infographic === "sql-data-types") {
              return <SqlTopicInfographic key={i} variant="sql-data-types" />;
            }
            if (block.infographic === "sql-command-categories") {
              return <SqlTopicInfographic key={i} variant="sql-command-categories" />;
            }
            if (block.infographic === "sql-ddl") {
              return <SqlTopicInfographic key={i} variant="sql-ddl" />;
            }
            if (block.infographic === "sql-dml") {
              return <SqlTopicInfographic key={i} variant="sql-dml" />;
            }
            if (block.infographic === "sql-dql-dcl-tcl") {
              return <SqlTopicInfographic key={i} variant="sql-dql-dcl-tcl" />;
            }
            if (block.infographic === "sql-select-statement") {
              return <SqlTopicInfographic key={i} variant="sql-select-statement" />;
            }
            if (block.infographic === "sql-column-aliases") {
              return <SqlTopicInfographic key={i} variant="sql-column-aliases" />;
            }
            if (block.infographic === "sql-distinct-limit") {
              return <SqlTopicInfographic key={i} variant="sql-distinct-limit" />;
            }
            if (block.infographic === "sql-null-handling") {
              return <SqlTopicInfographic key={i} variant="sql-null-handling" />;
            }
            if (block.infographic === "sql-where-clause") {
              return <SqlTopicInfographic key={i} variant="sql-where-clause" />;
            }
            if (block.infographic === "sql-comparison-logical") {
              return <SqlTopicInfographic key={i} variant="sql-comparison-logical" />;
            }
            if (block.infographic === "sql-in-between-like") {
              return <SqlTopicInfographic key={i} variant="sql-in-between-like" />;
            }
            if (block.infographic === "sql-order-by") {
              return <SqlTopicInfographic key={i} variant="sql-order-by" />;
            }
            if (block.infographic === "sql-why-joins") {
              return <SqlTopicInfographic key={i} variant="sql-why-joins" />;
            }
            if (block.infographic === "sql-inner-join") {
              return <SqlTopicInfographic key={i} variant="sql-inner-join" />;
            }
            if (block.infographic === "sql-left-right-join") {
              return <SqlTopicInfographic key={i} variant="sql-left-right-join" />;
            }
            if (block.infographic === "sql-full-cross-self-join") {
              return <SqlTopicInfographic key={i} variant="sql-full-cross-self-join" />;
            }
            if (block.infographic === "sql-aggregates-intro") {
              return <SqlTopicInfographic key={i} variant="sql-aggregates-intro" />;
            }
            if (block.infographic === "sql-count-min-max") {
              return <SqlTopicInfographic key={i} variant="sql-count-min-max" />;
            }
            if (block.infographic === "sql-sum-avg") {
              return <SqlTopicInfographic key={i} variant="sql-sum-avg" />;
            }
            if (block.infographic === "sql-group-by-basics") {
              return <SqlTopicInfographic key={i} variant="sql-group-by-basics" />;
            }
            if (block.infographic === "sql-group-by-multiple") {
              return <SqlTopicInfographic key={i} variant="sql-group-by-multiple" />;
            }
            if (block.infographic === "sql-having") {
              return <SqlTopicInfographic key={i} variant="sql-having" />;
            }
            if (block.infographic === "sql-functions-intro") {
              return <SqlTopicInfographic key={i} variant="sql-functions-intro" />;
            }
            if (block.infographic === "sql-string-functions") {
              return <SqlTopicInfographic key={i} variant="sql-string-functions" />;
            }
            if (block.infographic === "sql-numeric-functions") {
              return <SqlTopicInfographic key={i} variant="sql-numeric-functions" />;
            }
            if (block.infographic === "sql-date-time-functions") {
              return <SqlTopicInfographic key={i} variant="sql-date-time-functions" />;
            }
            if (block.infographic === "sql-case-expressions") {
              return <SqlTopicInfographic key={i} variant="sql-case-expressions" />;
            }
            if (block.infographic === "sql-coalesce-nullif") {
              return <SqlTopicInfographic key={i} variant="sql-coalesce-nullif" />;
            }
            if (block.infographic === "sql-subqueries-intro") {
              return <SqlTopicInfographic key={i} variant="sql-subqueries-intro" />;
            }
            if (block.infographic === "sql-subqueries-where") {
              return <SqlTopicInfographic key={i} variant="sql-subqueries-where" />;
            }
            if (block.infographic === "sql-scalar-subqueries") {
              return <SqlTopicInfographic key={i} variant="sql-scalar-subqueries" />;
            }
            if (block.infographic === "sql-subqueries-from") {
              return <SqlTopicInfographic key={i} variant="sql-subqueries-from" />;
            }
            if (block.infographic === "sql-correlated-subqueries") {
              return <SqlTopicInfographic key={i} variant="sql-correlated-subqueries" />;
            }
            if (block.infographic === "sql-exists-not-exists") {
              return <SqlTopicInfographic key={i} variant="sql-exists-not-exists" />;
            }
            if (block.infographic === "sql-views-intro") {
              return <SqlTopicInfographic key={i} variant="sql-views-intro" />;
            }
            if (block.infographic === "sql-creating-views") {
              return <SqlTopicInfographic key={i} variant="sql-creating-views" />;
            }
            if (block.infographic === "sql-set-operations-intro") {
              return <SqlTopicInfographic key={i} variant="sql-set-operations-intro" />;
            }
            if (block.infographic === "sql-union-union-all") {
              return <SqlTopicInfographic key={i} variant="sql-union-union-all" />;
            }
            if (block.infographic === "sql-intersect") {
              return <SqlTopicInfographic key={i} variant="sql-intersect" />;
            }
            if (block.infographic === "sql-except") {
              return <SqlTopicInfographic key={i} variant="sql-except" />;
            }
            if (block.infographic === "sql-ctes-intro") {
              return <SqlTopicInfographic key={i} variant="sql-ctes-intro" />;
            }
            if (block.infographic === "sql-ctes-vs-subqueries") {
              return <SqlTopicInfographic key={i} variant="sql-ctes-vs-subqueries" />;
            }
            if (block.infographic === "sql-multiple-ctes") {
              return <SqlTopicInfographic key={i} variant="sql-multiple-ctes" />;
            }
            if (block.infographic === "sql-ctes-joins-aggregates") {
              return <SqlTopicInfographic key={i} variant="sql-ctes-joins-aggregates" />;
            }
            if (block.infographic === "sql-recursive-ctes-intro") {
              return <SqlTopicInfographic key={i} variant="sql-recursive-ctes-intro" />;
            }
            if (block.infographic === "sql-recursive-employee-hierarchy") {
              return <SqlTopicInfographic key={i} variant="sql-recursive-employee-hierarchy" />;
            }
            return null;
          case "code":
            if (block.content === "agentic-ai-code") {
              const isActive = activePracticeIndex === 0;
              return (
                <div key={i} className="my-5">
                  <div
                    className={`overflow-hidden rounded-xl border bg-white/80 transition-all ${
                      isActive
                        ? "border-emerald-300 ring-2 ring-emerald-300/70 ring-offset-1"
                        : "border-emerald-200 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-1.5 border-b border-emerald-100 bg-black/[0.03] px-3 py-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                      <span className="ml-1 flex items-center gap-1 font-mono text-[11px] text-gray-500">
                        <Code2 className="h-3 w-3" />
                        {block.practiceLabel ?? "agentic_ai.py"}
                      </span>
                      <div className="ml-auto flex items-center gap-1">
                        <button
                          type="button"
                          onMouseDown={(e) => e.preventDefault()}
                          onClick={() => onSelectPractice?.(0)}
                          className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-[10px] font-semibold transition-colors ${
                            isActive
                              ? "bg-emerald-600 text-white"
                              : "bg-emerald-600 text-white hover:bg-emerald-700"
                          }`}
                          title={isActive ? "Loaded in IDE" : "Load in IDE"}
                        >
                          <Play className="h-3 w-3" />
                          IDE
                        </button>
                        {isActive && (
                          <span className="hidden items-center gap-1 rounded-md border border-gray-200 bg-white px-2 py-1 text-[10px] font-semibold text-gray-500 sm:inline-flex">
                            Loaded
                            <ArrowRight className="h-3 w-3" />
                          </span>
                        )}
                      </div>
                    </div>
                    <pre className="overflow-x-auto whitespace-pre-wrap px-4 py-3 font-mono text-[13px] leading-[1.9] text-gray-800">
                      {block.code}
                    </pre>
                  </div>
                </div>
              );
            }
            return (
              <div key={i} className="my-4">
                <div className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-700">
                  <Code2 className="h-4 w-4" />
                  Example code
                </div>
                <pre className="overflow-x-auto rounded-xl bg-gray-900 p-4 font-mono text-sm text-green-100">
                  {block.code}
                </pre>
              </div>
            );
          case "practice": {
            practiceCounter += 1;
            const practiceIdx = practiceCounter;
            const isActive = practiceIdx === activePracticeIndex;

            if (practiceMode === "sidebar" && block.ideOnly) {
              return null;
            }

            if (practiceMode === "sidebar") {
              return (
                <div
                  key={i}
                  id={`practice-${practiceIdx}`}
                  className={`my-6 rounded-xl border-2 p-4 transition-colors ${
                    isActive
                      ? "border-brand-300 bg-brand-50/40"
                      : "border-gray-200 bg-gray-50/50"
                  }`}
                >
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-brand-900">
                    <Pencil className="h-4 w-4" />
                    Practice
                  </div>
                  {block.practicePrompt && (
                    <p className="text-gray-700">{block.practicePrompt}</p>
                  )}
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => onSelectPractice?.(practiceIdx)}
                    className="mt-3 text-sm font-medium text-brand-700 hover:text-brand-800"
                  >
                    {isActive
                      ? "Active in IDE →"
                      : "Load this exercise in the IDE →"}
                  </button>
                </div>
              );
            }

            return null;
          }
          // Module 1 — custom visual blocks
          case "ai-intro":
            return <ArtificialIntelligenceIntroBlock key={i} />;
          case "llm-intro":
            return <LargeLanguageModelIntroBlock key={i} />;
          case "llm-orchestration":
            return <LlmOrchestrationBlock key={i} />;
          case "top-llm-models":
            return <TopLlmModelsBlock key={i} />;
          // Module 4 — Groq API custom visual blocks
          case "groq-api-key-guide":
            return <GroqApiKeyGuideBlock key={i} />;
          case "groq-docs-lesson":
            return <GroqDocsLessonBlock key={i} topicId={block.content} />;
          case "groq-api-key-checklist":
          case "groq-docs-reference":
            return null;
          // Module 2 — custom visual blocks
          case "langchain-intro":
            return <LangChainIntroBlock key={i} />;
          case "langchain-setup-guide":
            return <LangChainSetupGuide key={i} />;
          case "rag-basics-guide":
            return <RagBasicsGuide key={i} />;
          case "document-qa-guide":
            return <DocumentQaGuide key={i} />;
          case "multi-agent-guide":
            return <MultiAgentGuide key={i} />;
          case "next-steps-guide":
            return <NextStepsGuide key={i} />;
          case "langchain-prompts":
            return <LangChainPromptsBlock key={i} />;
          case "langchain-lcel":
            return <LangChainLCELBlock key={i} />;
          case "langchain-agents":
            return <LangChainAgentsBlock key={i} />;
          case "langchain-langsmith":
            return <LangChainLangSmithBlock key={i} />;
          case "agents-in-ai":
            return <AgentsInAiGuide key={i} />;
          case "function-calling":
            return <FunctionCallingGuide key={i} />;
          case "building-ai-agents":
            return <BuildingAiAgentsGuide key={i} />;
          case "react-pattern":
            return <ReActPatternGuide key={i} />;
          case "customer-support-project":
            return <CustomerSupportProjectGuide key={i} section={block.content} />;
          // Right-side / layout signal blocks — no visible left-side content
          case "langchain-workflow":
          case "langchain-steps-checklist":
          case "rag-basics-steps-checklist":
          case "document-qa-steps-checklist":
          case "multi-agent-steps-checklist":
          case "next-steps-steps-checklist":
          case "langchain-prompts-guide":
          case "langchain-lcel-guide":
          case "langchain-agents-guide":
          case "langchain-langsmith-guide":
          case "agents-in-ai-types":
          case "function-calling-panel":
          case "agent-workflow-patterns":
          case "react-workflow-panel":
          case "customer-support-project-panel":
          case "single-column":
            return null;
          // Right-side signal blocks — rendered invisibly in the left column
          case "jupyter-notebook":
            return (
              <div key={i} className="my-4 flex items-center gap-2 rounded-xl border border-violet-200 bg-violet-50 px-4 py-3">
                <span className="text-xs font-semibold text-violet-700">
                  Notebook exercise on the right →
                </span>
                <span className="text-xs text-violet-500">
                  Copy the cells into Jupyter or Google Colab to run the real code.
                </span>
              </div>
            );
          case "setup-checklist":
            return (
              <div key={i} className="my-4 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
                <span className="text-xs font-semibold text-emerald-700">
                  Hands-on checklist on the right →
                </span>
                <span className="text-xs text-emerald-500">
                  Copy prompts, complete each lab step, and tick it off when done.
                </span>
              </div>
            );
          case "concept-card":
            return (
              <div key={i} className="my-4 flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3">
                <span className="text-xs font-semibold text-blue-700">
                  Concept reference card on the right →
                </span>
                <span className="text-xs text-blue-500">
                  Use it as a quick-look summary while reading.
                </span>
              </div>
            );
          case "image":
            return block.image ? (
              <div key={i} className="my-6">
                <img
                  src={block.image}
                  alt={block.imageAlt ?? ""}
                  className="w-full rounded-xl border border-gray-200 object-contain"
                />
              </div>
            ) : null;
          case "how-to-create-prompts":
            return (
              <div key={i} className="my-4 flex items-center gap-2 rounded-xl border border-violet-200 bg-violet-50 px-4 py-3">
                <span className="text-xs font-semibold text-violet-700">
                  How to Create AI Prompts on the right →
                </span>
                <span className="text-xs text-violet-500">
                  Work through each step and tick it off when practised.
                </span>
              </div>
            );
          case "system-vs-user-guide":
            return (
              <div key={i} className="my-4 flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3">
                <span className="text-xs font-semibold text-indigo-700">
                  System vs User Prompt Guide on the right →
                </span>
                <span className="text-xs text-indigo-500">
                  Review each instruction type and mark it when understood.
                </span>
              </div>
            );
          case "few-shot-guide":
            return (
              <div key={i} className="my-4 flex items-center gap-2 rounded-xl border border-purple-200 bg-purple-50 px-4 py-3">
                <span className="text-xs font-semibold text-purple-700">
                  Few-Shot practice exercises on the right →
                </span>
                <span className="text-xs text-purple-500">
                  Work through each step and complete the exercise.
                </span>
              </div>
            );
          case "cot-guide":
            return (
              <div key={i} className="my-4 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
                <span className="text-xs font-semibold text-emerald-700">
                  Chain-of-Thought exercises on the right →
                </span>
                <span className="text-xs text-emerald-500">
                  Try each task and expand for hints and example answers.
                </span>
              </div>
            );
          case "best-practices-guide":
            return (
              <div key={i} className="my-4 flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3">
                <span className="text-xs font-semibold text-blue-700">
                  Try these prompts on the right →
                </span>
                <span className="text-xs text-blue-500">
                  Copy each example prompt, paste it into an AI tool and tick it off.
                </span>
              </div>
            );
          case "chat-memory-guide":
            return (
              <div key={i} className="my-4 flex items-center gap-2 rounded-xl border border-teal-200 bg-teal-50 px-4 py-3">
                <span className="text-xs font-semibold text-teal-700">Try the memory exercises on the right →</span>
                <span className="text-xs text-teal-500">Complete each exercise in any AI chatbot, then tick it off.</span>
              </div>
            );
          case "qa-bot-guide":
            return (
              <div key={i} className="my-4 flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3">
                <span className="text-xs font-semibold text-indigo-700">Build steps on the right →</span>
                <span className="text-xs text-indigo-500">Copy each code block to mark the step as complete.</span>
              </div>
            );
          case "testing-chatbot-guide":
            return (
              <div key={i} className="my-4 flex items-center gap-2 rounded-xl border border-violet-200 bg-violet-50 px-4 py-3">
                <span className="text-xs font-semibold text-violet-700">Test scenarios checklist on the right →</span>
                <span className="text-xs text-violet-500">Use the Groq Playground to run each test, then tick it off.</span>
              </div>
            );
          case "response-quality-guide":
            return (
              <div key={i} className="my-4 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3">
                <span className="text-xs font-semibold text-emerald-700">Try in Jupyter on the right →</span>
                <span className="text-xs text-emerald-500">Copy each code cell to mark the step as complete.</span>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
