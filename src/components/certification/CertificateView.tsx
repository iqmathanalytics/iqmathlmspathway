import { PAPC_BRAND, PAPC_TITLE } from "@/data/certification/papc-config";
import { PLATFORM_NAME } from "@/data/platform";
import type { CertificateRow } from "@/lib/types";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function CertificateView({
  certificate,
  verifyUrl,
}: {
  certificate: CertificateRow;
  verifyUrl: string;
}) {
  return (
    <div className="certificate-sheet mx-auto max-w-3xl rounded-sm border-8 border-double border-brand-800 bg-white px-10 py-12 text-center text-slate-900 shadow-xl print:border-brand-900 print:shadow-none">
      <p className="text-xs font-bold uppercase tracking-[0.35em] text-brand-800">
        {PAPC_BRAND}
      </p>
      <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
        {PAPC_TITLE}
      </h1>
      <p className="mt-8 text-sm uppercase tracking-[0.2em] text-slate-500">
        This certifies that
      </p>
      <p className="mt-3 font-serif text-3xl font-semibold text-brand-900">
        {certificate.recipient_name || "Candidate"}
      </p>
      <p className="mt-6 text-sm leading-7 text-slate-600">
        has successfully completed the Python Advanced Proficiency Certification
        Program with a score of
      </p>
      <p className="mt-3 text-4xl font-bold tabular-nums text-brand-800">
        {certificate.score_pct}%
      </p>
      <div className="mt-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">Issued</p>
          <p className="font-medium text-slate-800">{formatDate(certificate.issued_at)}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">Valid until</p>
          <p className="font-medium text-slate-800">{formatDate(certificate.expires_at)}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-wide text-slate-400">Certificate ID</p>
          <p className="font-mono text-xs font-medium text-slate-800">
            {certificate.verification_code}
          </p>
        </div>
      </div>
      <p className="mt-10 text-xs text-slate-500">
        Verify at {verifyUrl}
      </p>
      <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-brand-800">
        {PLATFORM_NAME}
      </p>
    </div>
  );
}
