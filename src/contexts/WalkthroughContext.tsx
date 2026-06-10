"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { modules } from "@/data/curriculum";

// First published topic URL — used to auto-navigate after the dashboard steps
const FIRST_TOPIC_URL = (() => {
  for (const m of modules) {
    for (const t of m.topics) {
      if (t.published) return `/learn/${m.slug}/${t.slug}`;
    }
  }
  return null;
})();

// ── Step definitions ────────────────────────────────────────────────────────
export type WalkthroughStepId =
  | "dashboard-roadmap"
  | "dashboard-expand"
  | "dashboard-topic"
  | "lesson-content"
  | "lesson-video"
  | "lesson-ide"
  | "lesson-next";

export interface WalkthroughStep {
  id: WalkthroughStepId;
  target: WalkthroughStepId;
  title: string;
  description: string;
  hasNext: boolean;
  page: "dashboard" | "topic";
}

export const WALKTHROUGH_STEPS: WalkthroughStep[] = [
  {
    id: "dashboard-roadmap",
    target: "dashboard-roadmap",
    title: "Your Learning Roadmap",
    description: "All your modules are laid out here in order. Complete them one by one to build your Python skills from scratch.",
    hasNext: true,
    page: "dashboard",
  },
  {
    id: "dashboard-expand",
    target: "dashboard-expand",
    title: "Expand a Module",
    description: "Click the arrow (▶) on any module to see the topics inside it.",
    hasNext: true,
    page: "dashboard",
  },
  {
    id: "dashboard-topic",
    target: "dashboard-topic",
    title: "Open a Lesson",
    description: "Click any topic below to open its lesson. The module is already expanded — go ahead and pick a topic!",
    hasNext: true,
    page: "dashboard",
  },
  {
    id: "lesson-content",
    target: "lesson-content",
    title: "Read the Lesson",
    description: "Each topic has a structured lesson with explanations, examples, and visuals.",
    hasNext: true,
    page: "topic",
  },
  {
    id: "lesson-video",
    target: "lesson-video",
    title: "Watch the Video",
    description: "Click 'Video Tutorial' to watch a short video explanation of this topic.",
    hasNext: true,
    page: "topic",
  },
  {
    id: "lesson-ide",
    target: "lesson-ide",
    title: "Practice in the IDE",
    description: "Write and run Python code directly in the browser. Press Ctrl+Enter to run.",
    hasNext: true,
    page: "topic",
  },
  {
    id: "lesson-next",
    target: "lesson-next",
    title: "Move to the Next Topic",
    description: "Use the 'Next Topic' button to continue through the module. You're all set!",
    hasNext: true,
    page: "topic",
  },
];

const STEP_SESSION_KEY = "pypath-walkthrough-step";

function doneKey(userId: string) {
  return `pypath-walkthrough-done-${userId}`;
}

// ── Context ─────────────────────────────────────────────────────────────────
interface WalkthroughContextValue {
  /** Welcome modal is visible (before any spotlight steps) */
  welcomeVisible: boolean;
  /** A spotlight step is active */
  active: boolean;
  currentStep: WalkthroughStep | null;
  stepIndex: number;
  total: number;
  /** Called by TourTrigger — shows the welcome modal */
  start(): void;
  /** Called by the welcome modal "Start Tour" button */
  beginTour(): void;
  next(): void;
  skip(): void;
}

const WalkthroughContext = createContext<WalkthroughContextValue | null>(null);

export function WalkthroughProvider({ children }: { children: React.ReactNode }) {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [welcomeVisible, setWelcomeVisible] = useState(false);
  const [stepIndex, setStepIndex] = useState(-1);
  const pathname = usePathname();

  const currentPageType: "dashboard" | "topic" | null =
    pathname === "/dashboard"
      ? "dashboard"
      : pathname.startsWith("/learn/") && pathname.split("/").length >= 4
      ? "topic"
      : null;

  const isLearningPage = currentPageType !== null;

  const pendingStep =
    stepIndex >= 0 && stepIndex < WALKTHROUGH_STEPS.length
      ? WALKTHROUGH_STEPS[stepIndex]
      : null;

  const active =
    isLearningPage &&
    pendingStep !== null &&
    pendingStep.page === currentPageType;

  const currentStep = active ? pendingStep : null;

  const userDoneKey = useMemo(() => (user ? doneKey(user.id) : null), [user]);

  const finish = useCallback(() => {
    setWelcomeVisible(false);
    setStepIndex(-1);
    try {
      if (userDoneKey) localStorage.setItem(userDoneKey, "1");
      sessionStorage.removeItem(STEP_SESSION_KEY);
    } catch { /* noop */ }
  }, [userDoneKey]);

  const next = useCallback(() => {
    // Read stepIndex directly — must NOT call router.push inside a state updater
    setStepIndex((i) => {
      const nextIdx = i + 1;
      if (nextIdx >= WALKTHROUGH_STEPS.length) { finish(); return -1; }
      try { sessionStorage.setItem(STEP_SESSION_KEY, String(nextIdx)); } catch { /* noop */ }
      return nextIdx;
    });
  }, [finish]);

  // Auto-navigate from dashboard to the first topic after advancing past the last dashboard step.
  // Runs as an effect (after render) so router.push is never called during rendering.
  useEffect(() => {
    if (!FIRST_TOPIC_URL) return;
    if (stepIndex < 0) return;
    const current = WALKTHROUGH_STEPS[stepIndex];
    const prev = WALKTHROUGH_STEPS[stepIndex - 1];
    if (prev?.page === "dashboard" && current?.page === "topic") {
      router.push(FIRST_TOPIC_URL);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepIndex]);

  const skip = useCallback(() => finish(), [finish]);

  /** Shows the welcome modal — called by TourTrigger on ?tour=1 */
  const start = useCallback(() => {
    setWelcomeVisible(true);
    setStepIndex(-1);
  }, []);

  /** Starts the spotlight steps — called by the "Start Tour" button */
  const beginTour = useCallback(() => {
    setWelcomeVisible(false);
    setStepIndex(0);
    try { sessionStorage.setItem(STEP_SESSION_KEY, "0"); } catch { /* noop */ }
  }, []);

  // Resume from cross-page navigation (session storage)
  useEffect(() => {
    if (authLoading) return;
    if (!userDoneKey) return;
    try {
      if (localStorage.getItem(userDoneKey)) return;
      const saved = sessionStorage.getItem(STEP_SESSION_KEY);
      if (saved !== null) {
        const idx = parseInt(saved, 10);
        if (!isNaN(idx) && idx >= 0 && idx < WALKTHROUGH_STEPS.length) {
          const t = setTimeout(() => setStepIndex(idx), 600);
          return () => clearTimeout(t);
        }
      }
    } catch { /* noop */ }
  }, [userDoneKey, authLoading]);

  // Clear walkthrough on sign-out
  useEffect(() => {
    if (!authLoading && !user) {
      setWelcomeVisible(false);
      setStepIndex(-1);
      try { sessionStorage.removeItem(STEP_SESSION_KEY); } catch { /* noop */ }
    }
  }, [user, authLoading]);

  return (
    <WalkthroughContext.Provider
      value={{ welcomeVisible, active, currentStep, stepIndex, total: WALKTHROUGH_STEPS.length, start, beginTour, next, skip }}
    >
      {children}
    </WalkthroughContext.Provider>
  );
}

export function useWalkthrough() {
  const ctx = useContext(WalkthroughContext);
  if (!ctx) throw new Error("useWalkthrough must be used inside WalkthroughProvider");
  return ctx;
}
