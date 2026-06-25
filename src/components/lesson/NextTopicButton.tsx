"use client";

import { useProgress } from "@/contexts/ProgressContext";
import { isIdeRan, isQuizDone } from "@/lib/progress";
import { NavigationLink } from "@/components/ui/NavigationLink";
import { ChevronRight, Lock, CheckCircle2, Circle, X, ArrowRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

interface NextTopicButtonProps {
  topicId: string;
  hasQuiz: boolean;
  /** When false, IDE run requirement is hidden (e.g. concept/workflow topics with no code exercise) */
  hasIde?: boolean;
  href: string;
  label: string;
  /** "header" = semi-highlighted button that opens popup; "footer" = solid brand / locked */
  variant?: "header" | "footer";
}

// ── Popup shown when header button is clicked ─────────────────────────────────
function NextTopicPopup({
  topicId,
  hasQuiz,
  hasIde = true,
  href,
  label,
  onClose,
}: {
  topicId: string;
  hasQuiz: boolean;
  hasIde?: boolean;
  href: string;
  label: string;
  onClose: () => void;
}) {
  const { progress, ready } = useProgress();

  const ideDone  = !hasIde || (ready && isIdeRan(progress, topicId));
  const quizDone = ready && (!hasQuiz || isQuizDone(progress, topicId));
  const canProceed = ideDone && quizDone;

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-end p-4 pt-16 sm:pt-20"
      role="dialog"
      aria-modal="true"
      aria-label="Next topic requirements"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30"
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Card — aligned under the header button (top-right) */}
      <div className="relative z-10 w-full max-w-xs rounded-2xl border border-gray-200 bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
          <h2 className="text-sm font-semibold text-gray-900">
            Before moving to next topic
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Requirements checklist */}
        <ul className="space-y-3 px-4 py-4">
          {hasIde && (
            <li className="flex items-start gap-3">
              {ideDone
                ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                : <Circle className="mt-0.5 h-5 w-5 shrink-0 text-gray-300" />}
              <div>
                <p className={`text-sm font-medium ${ideDone ? "text-gray-400 line-through" : "text-gray-800"}`}>
                  Run the Python IDE
                </p>
                <p className="text-xs text-gray-500">
                  Try the code exercise on the right panel
                </p>
              </div>
            </li>
          )}

          {hasQuiz && (
            <li className="flex items-start gap-3">
              {quizDone
                ? <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                : <Circle className="mt-0.5 h-5 w-5 shrink-0 text-gray-300" />}
              <div>
                <p className={`text-sm font-medium ${quizDone ? "text-gray-400 line-through" : "text-gray-800"}`}>
                  Complete the quiz
                </p>
                <p className="text-xs text-gray-500">
                  Scroll down to the quiz section below
                </p>
              </div>
            </li>
          )}
        </ul>

        {/* Action */}
        <div className="border-t border-gray-100 px-4 py-3">
          {canProceed ? (
            <NavigationLink
              href={href}
              onClick={onClose}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700 transition-colors"
            >
              Go to: {label}
              <ArrowRight className="h-4 w-4" />
            </NavigationLink>
          ) : (
            <button
              type="button"
              disabled
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-400 cursor-not-allowed"
            >
              <Lock className="h-4 w-4" />
              Complete the steps above first
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────────────────
export function NextTopicButton({
  topicId,
  hasQuiz,
  hasIde = true,
  href,
  label,
  variant = "footer",
}: NextTopicButtonProps) {
  const { progress, ready } = useProgress();
  const [popupOpen, setPopupOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const ideDone  = !hasIde || (ready && isIdeRan(progress, topicId));
  const quizDone = ready && (!hasQuiz || isQuizDone(progress, topicId));
  const canProceed = ideDone && quizDone;

  const closePopup = useCallback(() => setPopupOpen(false), []);

  // ── Header variant: always semi-highlighted, opens popup on click ───────────
  if (variant === "header") {
    return (
      <>
        <button
          type="button"
          onClick={() => setPopupOpen(true)}
          className={`mt-1 shrink-0 inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition-colors
            ${canProceed
              ? "border border-brand-300 bg-brand-50 text-brand-700 hover:bg-brand-100"
              : "border border-brand-200 bg-brand-50/60 text-brand-600/80 hover:bg-brand-50"
            }`}
        >
          {!canProceed && <Lock className="h-3 w-3 opacity-70" />}
          Next Topic
          <ChevronRight className="h-3.5 w-3.5" />
        </button>

        {popupOpen && (
          <NextTopicPopup
            topicId={topicId}
            hasQuiz={hasQuiz}
            hasIde={hasIde}
            href={href}
            label={label}
            onClose={closePopup}
          />
        )}
      </>
    );
  }

  // ── Footer variant: locked/unlocked button ──────────────────────────────────
  const missing: string[] = [];
  if (!ideDone)  missing.push("run the IDE");
  if (!quizDone) missing.push("complete the quiz");
  const tooltip = `To proceed, please: ${missing.join(" and ")}.`;

  if (canProceed) {
    return (
      <NavigationLink
        href={href}
        className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-sm font-medium text-white hover:bg-brand-700 transition-colors sm:ml-auto"
      >
        {label}
        <ChevronRight className="h-4 w-4" />
      </NavigationLink>
    );
  }

  return (
    <div className="relative sm:ml-auto">
      <button
        type="button"
        disabled
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        className="inline-flex items-center gap-1.5 rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-400 cursor-not-allowed"
        aria-label={tooltip}
      >
        <Lock className="h-3.5 w-3.5" />
        {label}
        <ChevronRight className="h-4 w-4" />
      </button>
      {showTooltip && (
        <div className="absolute right-0 bottom-full mb-1.5 z-20 w-60 rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs text-gray-700 shadow-lg">
          {tooltip}
        </div>
      )}
    </div>
  );
}
