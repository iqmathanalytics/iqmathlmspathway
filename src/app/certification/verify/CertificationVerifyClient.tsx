"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Loader2, ShieldCheck, ShieldX } from "lucide-react";
import { IssuedCertificate } from "@/components/certification/IssuedCertificate";
import { fetchCertificateByCode } from "@/lib/certification";
import type { CertificateRow } from "@/lib/types";

export function CertificationVerifyClient() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[40vh] items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
        </div>
      }
    >
      <VerifyBody />
    </Suspense>
  );
}

function VerifyBody() {
  const params = useSearchParams();
  const code = (params.get("code") ?? "").trim().toUpperCase();
  const [certificate, setCertificate] = useState<CertificateRow | null>(null);
  const [schemaError, setSchemaError] = useState(false);
  const [loading, setLoading] = useState(Boolean(code));

  useEffect(() => {
    if (!code) {
      setLoading(false);
      return;
    }
    void fetchCertificateByCode(code).then(({ certificate: row, schemaError: missing }) => {
      setCertificate(row);
      setSchemaError(missing);
      setLoading(false);
    });
  }, [code]);

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12">
      <h1 className="text-center text-2xl font-bold text-gray-900">
        Certificate verification
      </h1>
      <p className="mt-2 text-center text-sm text-gray-600">
        Public lookup by verification code. No sign-in required.
      </p>

      <form className="mx-auto mt-6 flex max-w-md gap-2" action="/certification/verify">
        <input
          name="code"
          defaultValue={code}
          placeholder="Enter certificate ID"
          className="flex-1 rounded-xl border border-gray-300 px-3 py-2 text-sm uppercase tracking-wide"
        />
        <button
          type="submit"
          className="rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white"
        >
          Verify
        </button>
      </form>

      {loading && (
        <div className="mt-10 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
        </div>
      )}

      {!loading && schemaError && (
        <p className="mt-8 text-center text-sm text-amber-800">
          Certificate tables are not installed yet (run RUN_CERTIFICATION.sql).
        </p>
      )}

      {!loading && code && !schemaError && !certificate && (
        <div className="mt-10 text-center">
          <ShieldX className="mx-auto h-10 w-10 text-red-500" />
          <p className="mt-3 font-semibold text-gray-900">No certificate found</p>
          <p className="mt-1 text-sm text-gray-600">Check the code and try again.</p>
        </div>
      )}

      {!loading && certificate && (
        <div className="mt-10">
          <p className="mb-4 inline-flex w-full items-center justify-center gap-2 text-sm font-semibold text-emerald-800">
            <ShieldCheck className="h-5 w-5" />
            Valid IQmath Technologies certificate
          </p>
          <IssuedCertificate certificate={certificate} />
        </div>
      )}
    </div>
  );
}
