"use client";

import { useMemo } from "react";
import { CertificateView } from "@/components/certification/CertificateView";
import { PAGE_CONTAINER } from "@/lib/layout";
import { buildCertificateId } from "@/lib/certificate-id";
import type { CertificateRow } from "@/lib/types";

export default function DemoCertificatePage() {
  const certificate = useMemo<CertificateRow>(
    () => ({
      id: "demo-jagathishwaran",
      user_id: "demo",
      certification_id: "papc",
      recipient_name: "Jagathishwaran Parthiban",
      level: "certified",
      score_pct: 100,
      issued_at: "2026-09-16T00:00:00.000Z",
      expires_at: "2028-09-16T00:00:00.000Z",
      verification_code: buildCertificateId(),
    }),
    []
  );

  return (
    <div className={`${PAGE_CONTAINER} py-10 print:max-w-none print:px-0 print:py-0`}>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Certificate template preview</h1>
          <p className="mt-1 text-sm text-gray-600">
            Live template — issued after the Professional Achievement Assessment. Program name comes from enrolled courses. ID: IQ-LMS- plus four unique digits.
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white"
        >
          Print / Save PDF
        </button>
      </div>
      <CertificateView certificate={certificate} />
    </div>
  );
}
