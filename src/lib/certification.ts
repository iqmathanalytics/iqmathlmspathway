import {
  PAPC_CERTIFICATE_STATUS,
  PAPC_ID,
  PAPC_QUIZ_MINUTES,
  PAPC_RETAKE_DAYS,
  PAPC_VALIDITY_YEARS,
} from "@/data/certification/papc-config";
import {
  buildShuffledPapcQuiz,
  scorePapcAnswers,
} from "@/data/certification/papc-quiz";
import { getSupabase } from "@/lib/supabase/client";
import { schemaMissing } from "@/lib/admin";
import type { CertificateRow, CertificationQuizAttemptRow } from "@/lib/types";

export function generateVerificationCode(): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = new Uint8Array(10);
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < bytes.length; i++) bytes[i] = Math.floor(Math.random() * 256);
  }
  return Array.from(bytes, (b) => alphabet[b % alphabet.length]).join("");
}

export function quizDeadline(startedAt: string): Date {
  return new Date(new Date(startedAt).getTime() + PAPC_QUIZ_MINUTES * 60 * 1000);
}

export function retakeAvailableAt(submittedAt: string): Date {
  return new Date(
    new Date(submittedAt).getTime() + PAPC_RETAKE_DAYS * 24 * 60 * 60 * 1000
  );
}

export function daysUntil(date: Date, now = new Date()): number {
  return Math.max(0, Math.ceil((date.getTime() - now.getTime()) / (24 * 60 * 60 * 1000)));
}

export function certificateExpiresAt(issuedAt: Date | string): Date {
  const issued = new Date(issuedAt);
  const expires = new Date(issued);
  expires.setFullYear(expires.getFullYear() + PAPC_VALIDITY_YEARS);
  return expires;
}

export function verifyUrl(code: string, origin?: string): string {
  const base =
    origin ?? (typeof window !== "undefined" ? window.location.origin : "");
  return `${base}/certification/verify?code=${encodeURIComponent(code)}`;
}

function asAttempt(row: Record<string, unknown>): CertificationQuizAttemptRow {
  return {
    id: String(row.id),
    user_id: String(row.user_id),
    certification_id: String(row.certification_id ?? PAPC_ID),
    started_at: String(row.started_at),
    submitted_at: row.submitted_at ? String(row.submitted_at) : null,
    score_points: row.score_points == null ? null : Number(row.score_points),
    score_pct: row.score_pct == null ? null : Number(row.score_pct),
    passed: row.passed == null ? null : Boolean(row.passed),
    answers: Array.isArray(row.answers)
      ? (row.answers as CertificationQuizAttemptRow["answers"])
      : [],
    created_at: String(row.created_at ?? row.started_at),
  };
}

function asCertificate(row: Record<string, unknown>): CertificateRow {
  return {
    id: String(row.id),
    user_id: String(row.user_id),
    certification_id: String(row.certification_id ?? PAPC_ID),
    recipient_name: String(row.recipient_name ?? ""),
    level: String(row.level ?? PAPC_CERTIFICATE_STATUS),
    score_pct: Number(row.score_pct),
    issued_at: String(row.issued_at),
    expires_at: String(row.expires_at),
    verification_code: String(row.verification_code),
  };
}

export async function fetchPapcAttempts(
  userId: string
): Promise<{ attempts: CertificationQuizAttemptRow[]; schemaError: boolean }> {
  const sb = getSupabase();
  if (!sb) return { attempts: [], schemaError: false };
  const { data, error } = await sb
    .from("certification_quiz_attempts")
    .select("*")
    .eq("user_id", userId)
    .eq("certification_id", PAPC_ID)
    .order("started_at", { ascending: false });
  if (schemaMissing(error)) return { attempts: [], schemaError: true };
  if (error) return { attempts: [], schemaError: false };
  return {
    attempts: (data ?? []).map((row) => asAttempt(row as Record<string, unknown>)),
    schemaError: false,
  };
}

export async function fetchPapcCertificate(
  userId: string
): Promise<{ certificate: CertificateRow | null; schemaError: boolean }> {
  const sb = getSupabase();
  if (!sb) return { certificate: null, schemaError: false };
  const { data, error } = await sb
    .from("certificates")
    .select("*")
    .eq("user_id", userId)
    .eq("certification_id", PAPC_ID)
    .maybeSingle();
  if (schemaMissing(error)) return { certificate: null, schemaError: true };
  if (error || !data) return { certificate: null, schemaError: false };
  return { certificate: asCertificate(data as Record<string, unknown>), schemaError: false };
}

export async function fetchCertificateByCode(
  code: string
): Promise<{ certificate: CertificateRow | null; schemaError: boolean }> {
  const sb = getSupabase();
  if (!sb) return { certificate: null, schemaError: false };
  const { data, error } = await sb
    .from("certificates")
    .select("*")
    .eq("verification_code", code.trim().toUpperCase())
    .maybeSingle();
  if (schemaMissing(error)) return { certificate: null, schemaError: true };
  if (error || !data) return { certificate: null, schemaError: false };
  return { certificate: asCertificate(data as Record<string, unknown>), schemaError: false };
}

export function getInProgressAttempt(
  attempts: CertificationQuizAttemptRow[],
  now = new Date()
): CertificationQuizAttemptRow | null {
  const open = attempts.find((a) => !a.submitted_at);
  if (!open) return null;
  if (now.getTime() >= quizDeadline(open.started_at).getTime()) return open;
  return open;
}

export function getLockUntil(
  attempts: CertificationQuizAttemptRow[],
  now = new Date()
): Date | null {
  const lastSubmitted = attempts.find((a) => a.submitted_at);
  if (!lastSubmitted?.submitted_at) return null;
  if (lastSubmitted.passed) return null;
  const unlock = retakeAvailableAt(lastSubmitted.submitted_at);
  return unlock.getTime() > now.getTime() ? unlock : null;
}

export async function startPapcAttempt(
  userId: string
): Promise<{ attempt: CertificationQuizAttemptRow | null; error: string | null; schemaError: boolean }> {
  const sb = getSupabase();
  if (!sb) return { attempt: null, error: "Auth is not configured.", schemaError: false };
  const { data, error } = await sb
    .from("certification_quiz_attempts")
    .insert({
      user_id: userId,
      certification_id: PAPC_ID,
      answers: buildShuffledPapcQuiz(),
    })
    .select("*")
    .single();
  if (schemaMissing(error)) {
    return { attempt: null, error: "Run RUN_CERTIFICATION.sql in Supabase first.", schemaError: true };
  }
  if (error || !data) {
    return { attempt: null, error: error?.message ?? "Could not start quiz.", schemaError: false };
  }
  return { attempt: asAttempt(data as Record<string, unknown>), error: null, schemaError: false };
}

export async function savePapcAnswers(
  attemptId: string,
  answers: CertificationQuizAttemptRow["answers"]
): Promise<{ error: string | null }> {
  const sb = getSupabase();
  if (!sb) return { error: "Auth is not configured." };
  const { error } = await sb
    .from("certification_quiz_attempts")
    .update({ answers })
    .eq("id", attemptId)
    .is("submitted_at", null);
  return { error: error?.message ?? null };
}

export async function submitPapcAttempt(options: {
  attemptId: string;
  userId: string;
  recipientName: string;
  answers: CertificationQuizAttemptRow["answers"];
}): Promise<{
  scorePoints: number;
  scorePct: number;
  passed: boolean;
  certificate: CertificateRow | null;
  error: string | null;
  schemaError: boolean;
}> {
  const scored = scorePapcAnswers(options.answers);
  const sb = getSupabase();
  if (!sb) {
    return { ...scored, certificate: null, error: "Auth is not configured.", schemaError: false };
  }

  const submittedAt = new Date().toISOString();
  const { error } = await sb
    .from("certification_quiz_attempts")
    .update({
      submitted_at: submittedAt,
      score_points: scored.scorePoints,
      score_pct: scored.scorePct,
      passed: scored.passed,
      answers: options.answers,
    })
    .eq("id", options.attemptId)
    .eq("user_id", options.userId);

  if (schemaMissing(error)) {
    return { ...scored, certificate: null, error: "Run RUN_CERTIFICATION.sql in Supabase first.", schemaError: true };
  }
  if (error) {
    return { ...scored, certificate: null, error: error.message, schemaError: false };
  }

  if (!scored.passed) {
    return { ...scored, certificate: null, error: null, schemaError: false };
  }

  const issued = new Date();
  const payload = {
    user_id: options.userId,
    certification_id: PAPC_ID,
    recipient_name: options.recipientName.trim() || "Candidate",
    level: PAPC_CERTIFICATE_STATUS,
    score_pct: scored.scorePct,
    issued_at: issued.toISOString(),
    expires_at: certificateExpiresAt(issued).toISOString(),
    verification_code: generateVerificationCode(),
  };

  const { data: existing } = await sb
    .from("certificates")
    .select("*")
    .eq("user_id", options.userId)
    .eq("certification_id", PAPC_ID)
    .maybeSingle();

  if (existing) {
    const keepCode = String((existing as { verification_code?: string }).verification_code ?? payload.verification_code);
    const { data, error: upErr } = await sb
      .from("certificates")
      .update({
        recipient_name: payload.recipient_name,
        level: payload.level,
        score_pct: payload.score_pct,
        issued_at: payload.issued_at,
        expires_at: payload.expires_at,
      })
      .eq("user_id", options.userId)
      .eq("certification_id", PAPC_ID)
      .select("*")
      .single();
    if (upErr || !data) {
      return { ...scored, certificate: null, error: upErr?.message ?? "Could not update certificate.", schemaError: false };
    }
    const cert = asCertificate({ ...(data as Record<string, unknown>), verification_code: keepCode });
    return { ...scored, certificate: cert, error: null, schemaError: false };
  }

  const { data, error: insErr } = await sb
    .from("certificates")
    .insert(payload)
    .select("*")
    .single();
  if (insErr || !data) {
    return { ...scored, certificate: null, error: insErr?.message ?? "Could not issue certificate.", schemaError: false };
  }
  return {
    ...scored,
    certificate: asCertificate(data as Record<string, unknown>),
    error: null,
    schemaError: false,
  };
}
