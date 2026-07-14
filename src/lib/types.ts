export type TopicStatus = "not_started" | "in_progress" | "completed";

export type CourseId = "python" | "agentic-ai" | "sql" | "mba-ai";

export interface Course {
  id: CourseId;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  iconImage?: string;
  iconAlt?: string;
  level: "beginner" | "intermediate" | "advanced";
  /** Tailwind color token used for theming course cards/badges */
  color: string;
}

export interface Topic {
  id: string;
  title: string;
  slug: string;
  description: string;
  estimatedMinutes: number;
  /** When false, topic shows as "coming soon" */
  published: boolean;
  /** Optional unlisted YouTube video ID (e.g. "dQw4w9WgXcQ") for the topic tutorial overlay */
  videoUrl?: string;
}

export interface Module {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: string;
  iconImage?: string;
  iconAlt?: string;
  topics: Topic[];
  course: CourseId;
  /** Track phase within the course */
  phase: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface TopicQuiz {
  topicId: string;
  title: string;
  questions: QuizQuestion[];
}

export type LessonInfographic =
  | "intro-programming"
  | "choosing-python"
  | "setting-up-python"
  | "python-ides"
  | "input-output"
  | "comments"
  | "variables"
  | "data-types"
  | "typecasting"
  | "math-operators"
  | "assignment-operators"
  | "comparison-operators"
  | "logical-operators"
  | "identity-operators"
  | "membership-operators"
  | "bitwise-operators"
  | "creating-strings"
  | "formatting-strings"
  | "string-indexing"
  | "string-slicing"
  | "string-methods"
  | "creating-lists"
  | "list-characteristics"
  | "list-indexing"
  | "list-slicing"
  | "list-methods"
  | "list-modifying"
  | "tuple-syntax"
  | "tuple-indexing"
  | "tuple-properties"
  | "tuple-slicing"
  | "tuple-methods"
  | "set-syntax"
  | "set-updating"
  | "set-operations"
  | "set-methods"
  | "dictionary-syntax"
  | "dictionary-keys-values"
  | "dictionary-accessing"
  | "dictionary-methods"
  | "if-statement"
  | "if-else"
  | "if-elif-else"
  | "while-loop"
  | "for-loop"
  | "break-continue"
  | "pass-statement"
  | "range-function"
  | "list-comprehension"
  | "comprehension-uses"
  | "dict-comprehension"
  | "functions-creating"
  | "functions-calling"
  | "function-arguments"
  | "function-variables"
  | "function-recursion"
  | "lambda-functions"
  | "agentic-ai-topic"
  | "final-project-overview"
  | "final-project-data"
  | "final-project-logic"
  | "final-project-functions"
  | "final-project-capstone"
  | "sql-intro-databases"
  | "sql-relational-model"
  | "sql-intro-sql"
  | "sql-data-types"
  | "sql-command-categories"
  | "sql-ddl"
  | "sql-dml"
  | "sql-dql-dcl-tcl"
  | "sql-select-statement"
  | "sql-column-aliases"
  | "sql-distinct-limit"
  | "sql-null-handling"
  | "sql-where-clause"
  | "sql-comparison-logical"
  | "sql-in-between-like"
  | "sql-order-by"
  | "sql-why-joins"
  | "sql-inner-join"
  | "sql-left-right-join"
  | "sql-full-cross-self-join"
  | "sql-aggregates-intro"
  | "sql-count-min-max"
  | "sql-sum-avg"
  | "sql-group-by-basics"
  | "sql-group-by-multiple"
  | "sql-having"
  | "sql-functions-intro"
  | "sql-string-functions"
  | "sql-numeric-functions"
  | "sql-date-time-functions"
  | "sql-case-expressions"
  | "sql-coalesce-nullif"
  | "sql-subqueries-intro"
  | "sql-subqueries-where"
  | "sql-scalar-subqueries"
  | "sql-subqueries-from"
  | "sql-correlated-subqueries"
  | "sql-exists-not-exists"
  | "sql-views-intro"
  | "sql-creating-views"
  | "sql-set-operations-intro"
  | "sql-union-union-all"
  | "sql-intersect"
  | "sql-except"
  | "sql-ctes-intro"
  | "sql-ctes-vs-subqueries"
  | "sql-multiple-ctes"
  | "sql-ctes-joins-aggregates"
  | "sql-recursive-ctes-intro"
  | "sql-recursive-employee-hierarchy";

export interface SetupStep {
  title: string;
  description?: string;
  commands?: string[];
  note?: string;
  link?: { label: string; url: string };
}

export interface NotebookCell {
  label?: string;
  code: string;
  /** "install" cells use a different background tint */
  cellType?: "install" | "code";
}

export interface ConceptSummaryData {
  hook: string;
  outcome: string;
  steps: [string, string, string];
  example: string;
  caution: string;
}

export interface LessonBlock {
  type:
    | "heading"
    | "paragraph"
    | "list"
    | "tip"
    | "diagram"
    | "code"
    | "practice"
    | "visual"
    | "infographic"
    | "groq-playground"
    | "setup-checklist"
    | "jupyter-notebook"
    | "concept-card"
    | "ai-intro"
    | "llm-intro"
    | "llm-orchestration"
    | "top-llm-models"
    | "groq-api-key-guide"
    | "groq-api-key-checklist"
    | "groq-docs-lesson"
    | "groq-docs-reference"
    | "langchain-intro"
    | "langchain-workflow"
    | "langchain-setup-guide"
    | "langchain-steps-checklist"
    | "rag-basics-guide"
    | "rag-basics-steps-checklist"
    | "document-qa-guide"
    | "document-qa-steps-checklist"
    | "multi-agent-guide"
    | "multi-agent-steps-checklist"
    | "next-steps-guide"
    | "next-steps-steps-checklist"
    | "langchain-prompts"
    | "langchain-prompts-guide"
    | "langchain-lcel"
    | "langchain-lcel-guide"
    | "langchain-agents"
    | "langchain-agents-guide"
    | "langchain-langsmith"
    | "langchain-langsmith-guide"
    | "single-column"
    | "image"
    | "how-to-create-prompts"
    | "system-vs-user-guide"
    | "few-shot-guide"
    | "cot-guide"
    | "best-practices-guide"
    | "chat-memory-guide"
    | "qa-bot-guide"
    | "testing-chatbot-guide"
    | "response-quality-guide"
    | "agents-in-ai"
    | "agents-in-ai-types"
    | "function-calling"
    | "function-calling-panel"
    | "building-ai-agents"
    | "agent-workflow-patterns"
    | "react-pattern"
    | "react-workflow-panel"
    | "customer-support-project"
    | "customer-support-project-panel";
  content?: string;
  items?: string[];
  /** For image blocks */
  image?: string;
  imageAlt?: string;
  /** For code blocks */
  code?: string;
  /** For diagram: ascii or mermaid-like description rendered as visual */
  diagram?: DiagramData;
  /** Practice prompt shown above IDE */
  practicePrompt?: string;
  starterCode?: string;
  /** Short label for IDE exercise tabs */
  practiceLabel?: string;
  /** Load in IDE only — no practice card in lesson body */
  ideOnly?: boolean;
  /** Named infographic layout for rich lesson visuals */
  infographic?: LessonInfographic;
  /** Default system prompt for the Groq playground (groq-playground block only) */
  systemPrompt?: string;
  /** For setup-checklist blocks */
  setupSteps?: SetupStep[];
  /** For jupyter-notebook blocks */
  installCmd?: string;
  notebookCells?: NotebookCell[];
  /** For concept-card blocks */
  conceptSummary?: ConceptSummaryData;
}

export interface DiagramData {
  title: string;
  nodes: { id: string; label: string; sublabel?: string }[];
  arrows?: { from: string; to: string; label?: string }[];
  variant?: "flow" | "compare" | "stack";
}

export interface TopicLesson {
  topicId: string;
  intro: string;
  blocks: LessonBlock[];
  keyTakeaways: string[];
}

export interface UserProgress {
  completedTopics: string[];
  quizScores: Record<string, number>;
  ideRan: string[];
  lastVisited?: string;
}

export type PracticeDifficulty = "easy" | "medium" | "hard";

export type PracticeStatus = "not_started" | "attempted" | "solved";

export interface PracticeTest {
  id: string;
  label: string;
  setup?: string;
  stdin?: string;
  expectedStdout?: string;
  assertCode?: string;
  visibility: "public";
}

export interface PracticeExample {
  input?: string;
  output: string;
  explanation?: string;
}

export interface PracticeChallengeSegment {
  type: "text" | "code";
  value: string;
}

export type PracticeLiveCheckRule =
  | {
      id: string;
      label: string;
      kind: "print-count";
      expected: number;
    }
  | {
      id: string;
      label: string;
      kind: "print-value";
      index: number;
      expected: string;
    }
  | {
      id: string;
      label: string;
      kind: "print-contains";
      value: string;
    }
  | {
      id: string;
      label: string;
      kind: "print-sequence";
      expected: string[];
    };

export interface PracticeChallengeApproachLine {
  type: "number" | "string";
  value: string;
}

export interface PracticeChallengeContent {
  introSegments?: PracticeChallengeSegment[];
  introLead?: string;
  introBullets?: PracticeChallengeSegment[][];
  introFooter?: PracticeChallengeSegment[];
  learnSection?: {
    title: string;
    body: string;
    codeExample: string;
  };
  steps?: {
    title: string;
    items: string[];
    codePreview?: {
      comment?: string;
      lines: string[];
    };
  };
  approaches?: {
    title: string;
    items: Array<{
      title: string;
      note: string;
      lines: PracticeChallengeApproachLine[];
    }>;
  };
  inputLabel?: string;
  outputOnly?: boolean;
  requiresComment?: boolean;
  badgeVariant?: "blue";
  expectCommaPrint?: boolean;
  requiresForLoop?: boolean;
  requiresIfCondition?: boolean;
  requiresFunction?: string;
  requiresVariables?: string[];
  requiresListAccess?: boolean;
  requiresDictKey?: string;
  editorPlaceholder?: string;
  liveCheckRules?: PracticeLiveCheckRule[];
  emptyMessage?: string;
  successDetail?: string;
  printCountHint?: string;
}

export interface PracticeProblem {
  id: string;
  topicId: string;
  slug: string;
  title: string;
  difficulty: PracticeDifficulty;
  order: number;
  description: string;
  layout?: "default" | "challenge";
  challengeContent?: PracticeChallengeContent;
  examples?: PracticeExample[];
  constraints?: string[];
  hints: string[];
  starterCode: string;
  publicTests: PracticeTest[];
}

export interface LessonProgressRow {
  user_id: string;
  topic_id: string;
  completed: boolean;
  quiz_score: number;
  last_visited_at: string | null;
}

export interface PracticeProgressRow {
  user_id: string;
  problem_id: string;
  status: PracticeStatus;
  code_draft: string;
  public_passed: boolean;
  hidden_passed: boolean;
  submitted_at: string | null;
  updated_at: string;
}

export interface EntitlementRow {
  id: string;
  user_id: string;
  product: string;
  stripe_payment_intent: string | null;
  razorpay_payment_id: string | null;
  razorpay_order_id: string | null;
  purchased_at: string;
}

export interface ProfileRow {
  id: string;
  full_name: string;
  mobile: string;
  created_at: string;
}
