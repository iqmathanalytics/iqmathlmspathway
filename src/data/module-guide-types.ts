export interface ModuleFunctionGuide {
  name: string;
  explanation: string;
}

export interface ModulePitfall {
  pitfall: string;
  tip: string;
}

export interface ModuleGuide {
  /** Longer module explanation shown under the title. */
  overview: string;
  /** What learners should be able to do after this module. */
  learningOutcomes?: string[];
  /** Important functions, methods, or concepts taught in this module. */
  keyFunctions: ModuleFunctionGuide[];
  /** Richer explanations keyed by topic id (e.g. m1-t1). */
  topics: Record<string, string>;
  /** Common mistakes and how to avoid them. */
  pitfalls?: ModulePitfall[];
  /** Extra study tips. */
  tips?: string[];
}
