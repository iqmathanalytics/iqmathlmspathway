"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Loader2, Printer } from "lucide-react";
import { ClientOnly } from "@/components/ui/ClientOnly";
import { CertificationAccessGate } from "@/components/certification/CertificationAccessGate";
import { CertificateView } from "@/components/certification/CertificateView";
import { useAuth } from "@/contexts/AuthContext";
import { fetchPapcCertificate, verifyUrl } from "@/lib/certification";
import type { CertificateRow } from "@/lib/types";

export function CertificationPrintClient() {
  return (
    <ClientOnly
      fallback={
        <div className="flex min-h-[40vh] items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
        </div>
      }
    >
      <CertificationAccessGate
        loginNext="/certification/papc/certificate"
        backHref="/certification/papc"
      >
        <PrintBody />
      </CertificationAccessGate>
    </ClientOnly>
  );
}

function PrintBody() {
  const { user } = useAuth();
  const [certificate, setCertificate] = useState<CertificateRow | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    void fetchPapcCertificate(user.id).then(({ certificate: row }) => {
      setCertificate(row);
      setLoading(false);
    });
  }, [user]);

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
      </div>
    );
  }

  if (!certificate) {
    return (
      <div className="mx-auto max-w-lg px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900">No certificate yet</h1>
        <p className="mt-2 text-gray-600">Pass the quiz at 70% or higher to issue one.</p>
        <Link href="/certification/papc/quiz" className="mt-6 inline-block font-semibold text-brand-700">
          Go to quiz
        </Link>
      </div>
    );
  }

  const url = verifyUrl(certificate.verification_code);

  return (
    <div className="px-4 py-10 print:px-0 print:py-0">
      <div className="mx-auto mb-6 flex max-w-3xl items-center justify-between print:hidden">
        <Link href="/certification/papc" className="text-sm font-medium text-brand-700">
          Back to PAPC
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-1.5 rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white"
        >
          <Printer className="h-4 w-4" />
          Print / Save PDF
        </button>
      </div>
      <CertificateView certificate={certificate} verifyUrl={url} />
    </div>
  );
}
