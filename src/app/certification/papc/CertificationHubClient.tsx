"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  Code2,
  Lock,
  Printer,
} from "lucide-react";
import { CertificationAccessGate } from "@/components/certification/CertificationAccessGate";
import { ClientOnly } from "@/components/ui/ClientOnly";
import { useAuth } from "@/contexts/AuthContext";
import { unlocksAllContent } from "@/lib/admin";
import {
  PAPC_ASSESSMENT_TITLE,
  PAPC_PASS_POINTS,
  PAPC_PRACTICE_COUNT,
  PAPC_QUIZ_MINUTES,
  PAPC_RETAKE_DAYS,
} from "@/data/certification/papc-config";
import {
  daysUntil,
  fetchPapcAttempts,
  fetchPapcCertificate,
  getInProgressAttempt,
  getLockUntil,
} from "@/lib/certification";
import { getSupabase } from "@/lib/supabase/client";
import type { CertificateRow, CertificationQuizAttemptRow } from "@/lib/types";
import { Loader2 } from "lucide-react";

const outcomes = [
  "Solve complex algorithmic problems efficiently",
  "Design scalable, maintainable Python applications",
  "Optimize for performance and memory",
  "Apply design patterns in real scenarios",
  "Handle edge cases and errors",
  "Write production-grade code",
];

export function CertificationHubClient() {
  return (
    <ClientOnly
      fallback={
        <div className="flex min-h-[30vh] items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
        </div>
      }
    >
      <CertificationAccessGate>
        <HubBody />
      </CertificationAccessGate>
    </ClientOnly>
  );
}

function HubBody() {
  const { user, profile } = useAuth();
  const [solved, setSolved] = useState(0);
  const [attempts, setAttempts] = useState<CertificationQuizAttemptRow[]>([]);
  const [certificate, setCertificate] = useState<CertificateRow | null>(null);
  const [schemaError, setSchemaError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const sb = getSupabase();
    if (!sb) return;
    void sb
      .from("practice_progress")
      .select("problem_id")
      .eq("user_id", user.id)
      .eq("status", "solved")
      .then(({ data }) => {
        setSolved(
          (data ?? []).filter((row) =>
            String(row.problem_id).startsWith("papc-")
          ).length
        );
      });
  }, [user]);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    void Promise.all([fetchPapcAttempts(user.id), fetchPapcCertificate(user.id)]).then(
      ([a, c]) => {
        if (cancelled) return;
        setAttempts(a.attempts);
        setCertificate(c.certificate);
        setSchemaError(a.schemaError || c.schemaError);
        setLoading(false);
      }
    );
    return () => {
      cancelled = true;
    };
  }, [user]);

  const lastSubmitted = attempts.find((a) => a.submitted_at) ?? null;
  const inProgress = getInProgressAttempt(attempts);
  const lockUntil = unlocksAllContent(profile, user?.email)
    ? null
    : getLockUntil(attempts);
  const quizHref = inProgress
    ? "/certification/papc/quiz"
    : lockUntil
      ? "/certification/papc/results"
      : "/certification/papc/quiz";
  const quizLabel = inProgress
    ? "Resume assessment"
    : lockUntil
      ? `Retake in ${daysUntil(lockUntil)} day${daysUntil(lockUntil) === 1 ? "" : "s"}`
      : certificate
        ? "View results"
        : "Start assessment";

  return (
    <div className="mt-8 space-y-8">
      {schemaError && (
        <p className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          Assessment and certificates need the Supabase script{" "}
          <code className="font-mono">RUN_CERTIFICATION.sql</code> once. Practice
          still works.
        </p>
      )}

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Practice solved
          </p>
          <p className="mt-2 text-2xl font-bold text-gray-900">
            {solved} / {PAPC_PRACTICE_COUNT}
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Last assessment
          </p>
          {loading ? (
            <Loader2 className="mt-3 h-5 w-5 animate-spin text-brand-600" />
          ) : lastSubmitted ? (
            <p className="mt-2 text-2xl font-bold text-gray-900">
              {lastSubmitted.score_pct}%{" "}
              <span className="text-sm font-medium text-gray-500">
                {lastSubmitted.passed ? "Passed" : "Failed"}
              </span>
            </p>
          ) : (
            <p className="mt-2 text-sm text-gray-500">No attempt yet</p>
          )}
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Certificate
          </p>
          {certificate ? (
            <p className="mt-2 text-2xl font-bold text-gray-900">Issued</p>
          ) : (
            <p className="mt-2 text-sm text-gray-500">Not issued yet</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Link
          href="/certification/papc/practice"
          className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-brand-300 hover:shadow-md"
        >
          <Code2 className="h-8 w-8 text-brand-700" />
          <h2 className="mt-3 text-xl font-semibold text-gray-900">Practice problems</h2>
          <p className="mt-2 text-sm text-gray-600">
            {PAPC_PRACTICE_COUNT} IDE challenges, unlimited attempts, any order. Optional prep — you
            can take the assessment anytime.
          </p>
          <span className="mt-auto inline-flex items-center justify-end gap-1 pt-4 text-sm font-semibold text-brand-700">
            Open problem list
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </span>
        </Link>

        <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <Clock className="h-8 w-8 text-brand-700" />
          <h2 className="mt-3 text-xl font-semibold text-gray-900">
            {PAPC_ASSESSMENT_TITLE}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Locked full-screen IDE, {PAPC_QUIZ_MINUTES} minutes, {PAPC_PASS_POINTS}/40
            to pass. No copy or tab switching. Submit or exit asks for confirmation.
            Failed or ended attempts wait {PAPC_RETAKE_DAYS} days.
          </p>
          <div className="mt-auto flex flex-wrap items-center justify-end gap-3 pt-4">
            {lockUntil && !inProgress ? (
              <p className="mr-auto inline-flex items-center gap-1.5 text-sm font-medium text-amber-800">
                <Lock className="h-4 w-4" />
                Next attempt {lockUntil.toLocaleDateString()}
              </p>
            ) : null}
            <Link
              href={certificate && !inProgress && !lockUntil ? "/certification/papc/results" : quizHref}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700"
            >
              {quizLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {certificate && (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="inline-flex items-center gap-2 font-semibold text-emerald-950">
                <Award className="h-5 w-5" />
                PAPC certified
              </p>
              <p className="mt-1 text-sm text-emerald-900/80">
                Issued for {profile?.full_name || user?.email}. Print or save a PDF.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/certification/papc/certificate"
                className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-emerald-900 shadow-sm"
              >
                <Printer className="h-4 w-4" />
                Print / PDF
              </Link>
            </div>
          </div>
        </div>
      )}

      <section>
        <h2 className="text-lg font-semibold text-gray-900">Learning outcomes</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {outcomes.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
