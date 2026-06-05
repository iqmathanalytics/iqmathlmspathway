export type TopicStatus = "not_started" | "in_progress" | "completed";

export interface Topic {
  id: string;
  title: string;
  slug: string;
  description: string;
  estimatedMinutes: number;
  /** When false, topic shows as "coming soon" */
  published: boolean;
}

export interface Module {
  id: number;
  name: string;
  slug: string;
  description: string;
  icon: string;
  topics: Topic[];
  /** Data science track phase */
  phase: "foundations" | "data-science";
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

export interface LessonBlock {
  type: "heading" | "paragraph" | "list" | "tip" | "diagram" | "code" | "practice" | "visual";
  content?: string;
  items?: string[];
  /** For code blocks */
  code?: string;
  /** For diagram: ascii or mermaid-like description rendered as visual */
  diagram?: DiagramData;
  /** Practice prompt shown above IDE */
  practicePrompt?: string;
  starterCode?: string;
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
  input: string;
  output: string;
  explanation?: string;
}

export interface PracticeProblem {
  id: string;
  topicId: string;
  slug: string;
  title: string;
  difficulty: PracticeDifficulty;
  order: number;
  description: string;
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
  purchased_at: string;
}

export interface ProfileRow {
  id: string;
  full_name: string;
  mobile: string;
  created_at: string;
}
