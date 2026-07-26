"use client";

import { useState } from "react";
import type { TopicQuiz as TopicQuizType } from "@/lib/types";
import { saveQuizScoreAsync } from "@/lib/progress-service";
import { useAuth } from "@/contexts/AuthContext";
import { CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import clsx from "clsx";

interface TopicQuizProps {
  quiz: TopicQuizType;
  onComplete?: (scorePercent: number) => void;
}

export function TopicQuiz({ quiz, onComplete }: TopicQuizProps) {
  const { user } = useAuth();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [finalPercent, setFinalPercent] = useState(0);

  const question = quiz.questions[current];

  function handleSelect(index: number) {
    if (showResult) return;
    setSelected(index);
    setShowResult(true);
    if (index === question.correctIndex) {
      setCorrectCount((c) => c + 1);
    }
  }

  async function handleNext() {
    if (current < quiz.questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowResult(false);
      return;
    }
    const percent = Math.round((correctCount / quiz.questions.length) * 100);
    if (user) {
      await saveQuizScoreAsync(user.id, quiz.topicId, percent);
    }
    setFinalPercent(percent);
    setFinished(true);
    onComplete?.(percent);
  }

  if (finished) {
    return (
      <div className="rounded-xl border border-brand-200 bg-brand-50 p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-brand-600" />
        <h3 className="mt-2 text-lg font-semibold text-gray-900">Quiz complete!</h3>
        <p className="mt-1 text-gray-600">
          You got {correctCount} out of {quiz.questions.length} correct ({finalPercent}
          %)
        </p>
      </div>
    );
  }

  return (
    <section className="w-full min-w-0 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-start gap-2 text-brand-700">
        <HelpCircle className="mt-0.5 h-5 w-5 shrink-0" />
        <h3 className="min-w-0 break-words font-semibold leading-snug">{quiz.title}</h3>
      </div>
      <p className="mb-1 text-xs text-gray-500">
        Question {current + 1} of {quiz.questions.length}
      </p>
      <p className="mb-4 break-words text-lg font-medium leading-snug text-gray-900">
        {question.question}
      </p>
      <ul className="space-y-2">
        {question.options.map((opt, i) => {
          let style = "border-gray-200 hover:border-brand-300 hover:bg-brand-50/50";
          if (showResult) {
            if (i === question.correctIndex) {
              style = "border-green-500 bg-green-50";
            } else if (i === selected) {
              style = "border-red-300 bg-red-50";
            } else {
              style = "border-gray-100 opacity-60";
            }
          } else if (selected === i) {
            style = "border-brand-500 bg-brand-50";
          }
          return (
            <li key={`${i}-${opt.slice(0, 24)}`} className="min-w-0">
              <button
                type="button"
                onClick={() => handleSelect(i)}
                disabled={showResult}
                className={clsx(
                  "flex w-full min-w-0 items-start gap-2 rounded-lg border-2 px-4 py-3 text-left text-sm transition-colors",
                  style
                )}
              >
                {showResult && i === question.correctIndex && (
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                )}
                {showResult && i === selected && i !== question.correctIndex && (
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                )}
                <span className="min-w-0 flex-1 whitespace-normal break-words leading-snug">
                  {opt}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      {showResult && (
        <>
          <div className="mt-4 break-words rounded-lg bg-gray-50 p-3 text-sm leading-relaxed text-gray-700">
            <strong>Explanation:</strong> {question.explanation}
          </div>
          <button
            type="button"
            onClick={handleNext}
            className="mt-4 w-full rounded-lg bg-brand-600 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {current < quiz.questions.length - 1 ? "Next question" : "See results"}
          </button>
        </>
      )}
    </section>
  );
}
