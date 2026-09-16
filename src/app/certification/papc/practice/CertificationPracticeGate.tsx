"use client";

import type { ReactNode } from "react";
import { ClientOnly } from "@/components/ui/ClientOnly";
import { CertificationAccessGate } from "@/components/certification/CertificationAccessGate";
import { Loader2 } from "lucide-react";

export function CertificationPracticeGate({ children }: { children: ReactNode }) {
  return (
    <ClientOnly
      fallback={
        <div className="flex min-h-[40vh] items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
        </div>
      }
    >
      <CertificationAccessGate
        title="PAPC practice locked"
        loginNext="/certification/papc/practice"
        backHref="/certification/papc"
      >
        {children}
      </CertificationAccessGate>
    </ClientOnly>
  );
}
