"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Award, CheckCircle2, Loader2, Printer, XCircle } from "lucide-react";
import { ClientOnly } from "@/components/ui/ClientOnly";
import { CertificationAccessGate } from "@/components/certification/CertificationAccessGate";
import { useAuth } from "@/contexts/AuthContext";
import { scorePapcAnswers } from "@/data/certification/papc-quiz";
import {
  PAPC_PASS_POINTS,
  PAPC_TOTAL_POINTS,
} from "@/data/certification/papc-config";
import {
  daysUntil,
  fetchPapcAttempts,
  fetchPapcCertificate,
  getLockUntil,
  verifyUrl,
} from "@/lib/certification";
import type { CertificateRow, CertificationQuizAttemptRow } from "@/lib/types";

export function CertificationResultsClient() {
  return (
    <ClientOnly
      fallback={
        <div className="flex min-h-[40vh] items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
        </div>
      }
    >
      <CertificationAccessGate loginNext="/certification/papc/results" backHref="/certification/papc">
        <ResultsBody />
      </CertificationAccessGate>
    </ClientOnly>
  );
}

function ResultsBody() {
  const { user } = useAuth();
  const [attempt, setAttempt] = useState<CertificationQuizAttemptRow | null>(null);
  const [certificate, setCertificate] = useState<CertificateRow | null>(null);
  const [lockUntil, setLockUntil] = useState<Date | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    void Promise.all([fetchPapcAttempts(user.id), fetchPapcCertificate(user.id)]).then(
      ([a, c]) => {
        setAttempt(a.attempts.find((row) => row.submitted_at) ?? null);
        setCertificate(c.certificate);
        setLockUntil(getLockUntil(a.attempts));
        setLoading(false);
      }
    );
  }, [user]);

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
      </div>
    );
  }

  if (!attempt) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">No quiz submitted yet</h1>
        <p className="mt-2 text-gray-600">Start the 90-minute coding exam when you are ready.</p>
        <Link
          href="/certification/papc/quiz"
          className="mt-6 inline-flex rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white"
        >
          Start exam
        </Link>
      </div>
    );
  }

  const breakdown = scorePapcAnswers(attempt.answers).breakdown;
  const passed = Boolean(attempt.passed);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <nav className="text-sm text-gray-500">
        <Link href="/certification" className="hover:text-brand-700">
          Get Certified
        </Link>
        <span className="mx-1.5">/</span>
        <Link href="/certification/papc" className="hover:text-brand-700">
          PAPC
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-gray-800">Results</span>
      </nav>

      <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        {passed ? (
          <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
        ) : (
          <XCircle className="mx-auto h-12 w-12 text-red-500" />
        )}
        <h1 className="mt-3 text-3xl font-bold text-gray-900">
          {passed ? "You passed" : "Not quite"}
        </h1>
        <p className="mt-2 text-lg text-gray-700">
          {attempt.score_points} / {PAPC_TOTAL_POINTS} points ({attempt.score_pct}%)
        </p>
        <p className="mt-1 text-sm text-gray-500">Pass mark {PAPC_PASS_POINTS} points (70%).</p>
        {certificate && (
          <p className="mt-3 inline-flex items-center gap-2 font-semibold text-brand-800">
            <Award className="h-5 w-5" />
            PAPC certified
          </p>
        )}
        {passed && certificate ? (
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/certification/papc/certificate"
              className="inline-flex items-center gap-1.5 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white"
            >
              <Printer className="h-4 w-4" />
              Print certificate
            </Link>
            <button
              type="button"
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-800"
              onClick={() =>
                void navigator.clipboard.writeText(
                  verifyUrl(certificate.verification_code)
                )
              }
            >
              Copy verify URL
            </button>
          </div>
        ) : (
          <p className="mt-4 text-sm text-amber-800">
            {lockUntil
              ? `Retake available ${lockUntil.toLocaleString()} (${daysUntil(lockUntil)} days).`
              : "You can start a new attempt."}
          </p>
        )}
      </div>

      <section className="mt-8">
        <h2 className="text-lg font-semibold text-gray-900">Problem breakdown</h2>
        <ul className="mt-3 space-y-2">
          {breakdown.map((row, i) => (
            <li
              key={row.questionId}
              className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-medium text-gray-900">
                  {i + 1}. {row.title}
                  {row.difficulty ? (
                    <span className="ml-2 text-xs font-semibold uppercase text-gray-500">
                      {row.difficulty}
                    </span>
                  ) : null}
                </p>
                <span
                  className={
                    row.correct ? "shrink-0 text-emerald-700" : "shrink-0 text-red-600"
                  }
                >
                  {row.earned}/{row.points}
                </span>
              </div>
              <p className="mt-1 text-gray-600">
                {row.correct ? "All tests passed." : "Not accepted."}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
