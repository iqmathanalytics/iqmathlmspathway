"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import { Flag, Loader2, Maximize2, ShieldAlert } from "lucide-react";
import { ClientOnly } from "@/components/ui/ClientOnly";
import { CertificationAccessGate } from "@/components/certification/CertificationAccessGate";
import { PythonCodingWorkspace } from "@/components/practice/PythonCodingWorkspace";
import { useAuth } from "@/contexts/AuthContext";
import { unlocksAllContent } from "@/lib/admin";
import {
  PAPC_ASSESSMENT_TITLE,
  PAPC_QUIZ_QUESTION_COUNT,
  PAPC_QUIZ_MINUTES,
  PAPC_RETAKE_DAYS,
  PAPC_TOTAL_POINTS,
} from "@/data/certification/papc-config";
import {
  buildShuffledPapcQuiz,
  getPapcQuizProblem,
  isCodingQuizAnswers,
  papcQuizPoints,
  type CertificationQuizAnswer,
} from "@/data/certification/papc-quiz";
import {
  daysUntil,
  fetchPapcAttempts,
  getInProgressAttempt,
  getLockUntil,
  quizDeadline,
  savePapcAnswers,
  startPapcAttempt,
  submitPapcAttempt,
} from "@/lib/certification";
import {
  enterExamFullscreen,
  exitExamFullscreen,
  isExamFullscreen,
  isRestrictedExamKey,
  preventExamClipboard,
} from "@/lib/exam-lockdown";
import type { CertificationQuizAttemptRow } from "@/lib/types";

export function CertificationQuizClient() {
  return (
    <ClientOnly
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
        </div>
      }
    >
      <CertificationAccessGate
        title={`${PAPC_ASSESSMENT_TITLE} locked`}
        loginNext="/certification/papc/quiz"
        backHref="/certification/papc"
      >
        <QuizBody />
      </CertificationAccessGate>
    </ClientOnly>
  );
}

function formatRemaining(ms: number): string {
  const total = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

const LEAVE_CONFIRM = `End this assessment now? Your answers will be submitted as-is. If you do not pass, you must wait ${PAPC_RETAKE_DAYS} days to retake.`;
const SUBMIT_CONFIRM = `Submit the assessment now? You cannot change code after submitting. If you do not pass, you must wait ${PAPC_RETAKE_DAYS} days to retake.`;

function QuizBody() {
  const { user, profile } = useAuth();
  const router = useRouter();
  const examRootRef = useRef<HTMLDivElement>(null);
  const [attempt, setAttempt] = useState<CertificationQuizAttemptRow | null>(null);
  const [answers, setAnswers] = useState<CertificationQuizAnswer[]>([]);
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const [index, setIndex] = useState(0);
  const [remainingMs, setRemainingMs] = useState(PAPC_QUIZ_MINUTES * 60 * 1000);
  const [error, setError] = useState<string | null>(null);
  const [lockUntil, setLockUntil] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [examLive, setExamLive] = useState(false);
  const [needsFullscreen, setNeedsFullscreen] = useState(true);
  const [confirm, setConfirm] = useState<"submit" | "exit" | null>(null);
  const [starting, setStarting] = useState(false);
  const submitLock = useRef(false);
  const persistTimer = useRef<number | null>(null);
  const leaveTimer = useRef<number | null>(null);
  const answersRef = useRef(answers);
  answersRef.current = answers;
  const examLiveRef = useRef(false);
  examLiveRef.current = examLive;
  const attemptRef = useRef(attempt);
  attemptRef.current = attempt;

  const persist = useCallback((next: CertificationQuizAnswer[], attemptId: string) => {
    if (persistTimer.current) window.clearTimeout(persistTimer.current);
    persistTimer.current = window.setTimeout(() => {
      void savePapcAnswers(attemptId, next);
    }, 400);
  }, []);

  const finish = useCallback(
    async (
      currentAttempt: CertificationQuizAttemptRow,
      currentAnswers: CertificationQuizAnswer[]
    ) => {
      if (!user || submitLock.current) return;
      submitLock.current = true;
      setSubmitting(true);
      setConfirm(null);
      if (persistTimer.current) window.clearTimeout(persistTimer.current);
      if (leaveTimer.current) window.clearTimeout(leaveTimer.current);
      document.body.classList.remove("papc-exam-lock");
      await exitExamFullscreen();
      const result = await submitPapcAttempt({
        attemptId: currentAttempt.id,
        userId: user.id,
        recipientName: profile?.full_name || user.email || "Candidate",
        answers: currentAnswers,
      });
      if (result.error) {
        setError(result.error);
        submitLock.current = false;
        setSubmitting(false);
        return;
      }
      router.replace("/certification/papc/results");
    },
    [user, profile, router]
  );

  const finishRef = useRef(finish);
  finishRef.current = finish;

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    void (async () => {
      const { attempts, schemaError } = await fetchPapcAttempts(user.id);
      if (cancelled) return;
      if (schemaError) {
        setError("Run RUN_CERTIFICATION.sql in Supabase so assessment attempts can be saved.");
        setLoading(false);
        return;
      }
      const open = getInProgressAttempt(attempts);
      const lock = unlocksAllContent(profile, user.email)
        ? null
        : getLockUntil(attempts);
      if (open) {
        const deadline = quizDeadline(open.started_at);
        let nextAnswers = open.answers;
        if (!isCodingQuizAnswers(nextAnswers)) {
          nextAnswers = buildShuffledPapcQuiz();
          await savePapcAnswers(open.id, nextAnswers);
        }
        if (Date.now() >= deadline.getTime()) {
          await finishRef.current(open, nextAnswers);
          return;
        }
        setAttempt(open);
        setAnswers(nextAnswers);
        setRemainingMs(deadline.getTime() - Date.now());
        setLoading(false);
        return;
      }
      if (lock) {
        setLockUntil(lock);
        setLoading(false);
        return;
      }
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [user, profile]);

  useEffect(() => {
    if (!attempt || submitting || !examLive) return;
    const id = window.setInterval(() => {
      const left = quizDeadline(attempt.started_at).getTime() - Date.now();
      setRemainingMs(left);
      if (left <= 0) {
        window.clearInterval(id);
        void finish(attempt, answersRef.current);
      }
    }, 250);
    return () => window.clearInterval(id);
  }, [attempt, submitting, finish, examLive]);

  useEffect(() => {
    if (!examLive) {
      document.body.classList.remove("papc-exam-lock");
      return;
    }
    document.body.classList.add("papc-exam-lock");
    return () => {
      document.body.classList.remove("papc-exam-lock");
    };
  }, [examLive]);

  useEffect(() => {
    if (!examLive) return;

    function onVisibility() {
      if (!examLiveRef.current || submitLock.current) return;
      if (document.visibilityState === "hidden") {
        if (leaveTimer.current) window.clearTimeout(leaveTimer.current);
        leaveTimer.current = window.setTimeout(() => {
          const current = attemptRef.current;
          if (!current) return;
          void finishRef.current(current, answersRef.current);
        }, 800);
        return;
      }
      if (leaveTimer.current) {
        window.clearTimeout(leaveTimer.current);
        leaveTimer.current = null;
      }
    }

    function onFullscreen() {
      if (!examLiveRef.current || submitLock.current) return;
      if (!isExamFullscreen()) setNeedsFullscreen(true);
    }

    function onKeyDown(e: KeyboardEvent) {
      if (isRestrictedExamKey(e)) {
        e.preventDefault();
        e.stopPropagation();
      }
    }

    function onBeforeUnload(e: BeforeUnloadEvent) {
      if (!examLiveRef.current || submitLock.current) return;
      e.preventDefault();
      e.returnValue = LEAVE_CONFIRM;
    }

    document.addEventListener("visibilitychange", onVisibility);
    document.addEventListener("fullscreenchange", onFullscreen);
    document.addEventListener("webkitfullscreenchange", onFullscreen as EventListener);
    window.addEventListener("keydown", onKeyDown, true);
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      document.removeEventListener("fullscreenchange", onFullscreen);
      document.removeEventListener("webkitfullscreenchange", onFullscreen as EventListener);
      window.removeEventListener("keydown", onKeyDown, true);
      window.removeEventListener("beforeunload", onBeforeUnload);
      if (leaveTimer.current) window.clearTimeout(leaveTimer.current);
    };
  }, [examLive]);

  const patchAnswer = useCallback(
    (i: number, partial: Partial<CertificationQuizAnswer>) => {
      if (!attempt) return;
      setAnswers((prev) => {
        const cur = prev[i];
        if (!cur) return prev;
        let nextPartial = partial;
        if (
          partial.code != null &&
          partial.passed === undefined &&
          cur.passed &&
          partial.code !== cur.code
        ) {
          nextPartial = { ...partial, passed: false };
        }
        const merged = { ...cur, ...nextPartial };
        if (merged.code === cur.code && Boolean(merged.passed) === Boolean(cur.passed)) {
          return prev;
        }
        const next = prev.map((row, j) => (j === i ? merged : row));
        persist(next, attempt.id);
        return next;
      });
    },
    [attempt, persist]
  );

  async function beginExam() {
    if (!user || starting) return;
    setStarting(true);
    setError(null);
    let current = attempt;
    if (!current) {
      const started = await startPapcAttempt(user.id);
      if (started.error || !started.attempt) {
        setError(started.error);
        setStarting(false);
        return;
      }
      current = started.attempt;
      setAttempt(current);
      let nextAnswers = current.answers;
      if (!isCodingQuizAnswers(nextAnswers)) {
        nextAnswers = buildShuffledPapcQuiz();
        await savePapcAnswers(current.id, nextAnswers);
      }
      setAnswers(nextAnswers);
      setRemainingMs(quizDeadline(current.started_at).getTime() - Date.now());
    }
    const root = examRootRef.current;
    if (root) {
      const ok = await enterExamFullscreen(root);
      if (!ok) {
        setError("Allow full screen to start the assessment.");
        setStarting(false);
        return;
      }
    }
    setExamLive(true);
    setNeedsFullscreen(false);
    setStarting(false);
  }

  async function resumeFullscreen() {
    const root = examRootRef.current;
    if (!root) return;
    const ok = await enterExamFullscreen(root);
    if (!ok) {
      setError("Allow full screen to continue the assessment.");
      return;
    }
    setNeedsFullscreen(false);
    setError(null);
  }

  const question = answers[index];
  const problem = question ? getPapcQuizProblem(question.questionId) : undefined;
  const passedCount = answers.filter((a) => a.passed).length;
  const lowTime = remainingMs <= 5 * 60 * 1000;

  const navItems = useMemo(
    () =>
      answers.map((a, i) => ({
        i,
        passed: Boolean(a.passed),
        flagged: flagged.has(i),
      })),
    [answers, flagged]
  );

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
      </div>
    );
  }

  if (lockUntil) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Retake locked</h1>
        <p className="mt-3 text-gray-600">
          You can retake in {daysUntil(lockUntil)} day
          {daysUntil(lockUntil) === 1 ? "" : "s"} ({lockUntil.toLocaleString()}).
        </p>
        <button
          type="button"
          onClick={() => router.push("/certification/papc/results")}
          className="mt-6 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white"
        >
          View last results
        </button>
      </div>
    );
  }

  const points = problem ? papcQuizPoints(problem.difficulty) : 0;
  const blockInteraction = needsFullscreen || confirm != null || submitting;

  return (
    <div
      ref={examRootRef}
      className={clsx(
        "select-none bg-slate-50",
        examLive
          ? "flex h-dvh min-h-0 flex-col overflow-hidden px-3 py-2 sm:px-4 [&_.cm-content]:select-text"
          : "min-h-[70vh] px-4 py-16"
      )}
      onCopy={preventExamClipboard}
      onCut={preventExamClipboard}
      onPaste={preventExamClipboard}
      onContextMenu={preventExamClipboard}
      onDragStart={preventExamClipboard}
    >
      {!examLive ? (
        <div className="mx-auto max-w-lg">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <ShieldAlert className="h-10 w-10 text-brand-700" />
            <h1 className="mt-4 text-2xl font-bold text-gray-900">
              {attempt ? `Resume ${PAPC_ASSESSMENT_TITLE}` : PAPC_ASSESSMENT_TITLE}
            </h1>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-gray-600">
              <li>The assessment runs in full screen only.</li>
              <li>Switching tabs or windows submits the attempt.</li>
              <li>Copy, cut, and paste are blocked.</li>
              <li>
                Submit or exit asks for confirmation. If you do not pass, wait{" "}
                {PAPC_RETAKE_DAYS} days to retake.
              </li>
            </ul>
            {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
            <button
              type="button"
              disabled={starting}
              onClick={() => void beginExam()}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
            >
              {starting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
              {attempt ? "Resume in full screen" : "Start assessment"}
            </button>
          </div>
        </div>
      ) : attempt && question && problem ? (
        <>
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
        <div>
          <p className="text-sm font-semibold text-gray-900">{PAPC_ASSESSMENT_TITLE}</p>
          <p className="text-xs text-gray-500">
            {passedCount}/{answers.length || PAPC_QUIZ_QUESTION_COUNT} accepted ·{" "}
            {PAPC_TOTAL_POINTS} points · Full screen · No copy / tab switch
          </p>
        </div>
        <div className="flex items-center gap-3">
          <p
            className={clsx(
              "font-mono text-lg font-bold tabular-nums",
              lowTime ? "text-red-600" : "text-gray-900"
            )}
          >
            {formatRemaining(remainingMs)}
          </p>
          <button
            type="button"
            disabled={submitting}
            onClick={() => setConfirm("exit")}
            className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-50"
          >
            Exit
          </button>
        </div>
      </div>

      {error && <p className="mt-2 shrink-0 text-sm text-red-600">{error}</p>}

      <div
        className={clsx(
          "mt-2 flex min-h-0 flex-1 gap-3",
          blockInteraction && "pointer-events-none opacity-60"
        )}
      >
        <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden">
          <p className="mb-1 shrink-0 text-xs font-semibold uppercase tracking-wide text-brand-700">
            Question {index + 1} of {answers.length} · {points} pts · {problem.difficulty}
          </p>
          <PythonCodingWorkspace
            key={problem.id}
            problem={problem}
            trackId="papc"
            examMode
            initialCode={question.code ?? problem.starterCode}
            onCodeChange={(code) => patchAnswer(index, { code })}
            onGraded={(passed, code) => patchAnswer(index, { passed, code })}
          />
        </div>

        <aside className="hidden w-44 shrink-0 flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-sm lg:flex">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Navigate
          </p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.i}
                type="button"
                onClick={() => setIndex(item.i)}
                className={clsx(
                  "relative h-9 rounded-lg text-xs font-semibold",
                  item.i === index
                    ? "bg-brand-600 text-white"
                    : item.passed
                      ? "bg-emerald-50 text-emerald-800"
                      : "bg-gray-100 text-gray-600"
                )}
              >
                {item.i + 1}
                {item.flagged && (
                  <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                )}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              setFlagged((prev) => {
                const next = new Set(prev);
                if (next.has(index)) next.delete(index);
                else next.add(index);
                return next;
              });
            }}
            className={clsx(
              "mt-3 inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-medium",
              flagged.has(index)
                ? "border-amber-400 bg-amber-50 text-amber-900"
                : "border-gray-200 text-gray-700"
            )}
          >
            <Flag className="h-3.5 w-3.5" />
            {flagged.has(index) ? "Flagged" : "Flag"}
          </button>
          <div className="mt-auto space-y-2 pt-4">
            <button
              type="button"
              disabled={index === 0}
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium disabled:opacity-40"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={index === answers.length - 1}
              onClick={() => setIndex((i) => Math.min(answers.length - 1, i + 1))}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium disabled:opacity-40"
            >
              Next
            </button>
            <button
              type="button"
              disabled={submitting}
              onClick={() => setConfirm("submit")}
              className="w-full rounded-xl bg-brand-600 px-3 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 disabled:opacity-60"
            >
              {submitting ? "Submitting…" : "Submit assessment"}
            </button>
          </div>
        </aside>
      </div>

      <div className="mt-2 flex shrink-0 items-center justify-between gap-2 lg:hidden">
        <button
          type="button"
          disabled={index === 0 || blockInteraction}
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium disabled:opacity-40"
        >
          Previous
        </button>
        <button
          type="button"
          disabled={submitting}
          onClick={() => setConfirm("submit")}
          className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white"
        >
          Submit assessment
        </button>
        <button
          type="button"
          disabled={index === answers.length - 1 || blockInteraction}
          onClick={() => setIndex((i) => Math.min(answers.length - 1, i + 1))}
          className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium disabled:opacity-40"
        >
          Next
        </button>
      </div>
        </>
      ) : (
        <p className="text-center text-gray-600">{error ?? "Could not start the assessment."}</p>
      )}

      {examLive && needsFullscreen && !confirm && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/70 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-xl">
            <Maximize2 className="mx-auto h-8 w-8 text-brand-700" />
            <h2 className="mt-3 text-lg font-bold text-gray-900">Full screen required</h2>
            <p className="mt-2 text-sm text-gray-600">
              Return to full screen to continue, or end the assessment. Ending submits your
              attempt. If you do not pass, wait {PAPC_RETAKE_DAYS} days to retake.
            </p>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => void resumeFullscreen()}
                className="rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white"
              >
                Return to full screen
              </button>
              <button
                type="button"
                onClick={() => setConfirm("exit")}
                className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-800"
              >
                End assessment
              </button>
            </div>
          </div>
        </div>
      )}

      {examLive && confirm && attempt && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/70 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-xl">
            <h2 className="text-lg font-bold text-gray-900">
              {confirm === "submit" ? "Submit assessment?" : "End assessment?"}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              {confirm === "submit" ? SUBMIT_CONFIRM : LEAVE_CONFIRM}
            </p>
            <div className="mt-5 grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                disabled={submitting}
                onClick={() => void finish(attempt, answersRef.current)}
                className="rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
              >
                {submitting ? "Submitting…" : "Confirm"}
              </button>
              <button
                type="button"
                disabled={submitting}
                onClick={() => {
                  setConfirm(null);
                  if (!isExamFullscreen()) setNeedsFullscreen(true);
                }}
                className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-800"
              >
                Keep working
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
