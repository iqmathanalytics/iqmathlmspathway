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
