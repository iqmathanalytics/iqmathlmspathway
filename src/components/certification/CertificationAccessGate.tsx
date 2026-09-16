"use client";

import { PracticeAccessGate } from "@/components/practice/PracticeAccessGate";
import type { ReactNode } from "react";

export function CertificationAccessGate({
  children,
  title = "Certification locked",
  loginNext = "/certification/papc",
  backHref = "/certification",
  backLabel = "Back to Get Certified",
}: {
  children: ReactNode;
  title?: string;
  loginNext?: string;
  backHref?: string;
  backLabel?: string;
}) {
  return (
    <PracticeAccessGate
      title={title}
      loginNext={loginNext}
      backHref={backHref}
      backLabel={backLabel}
      purpose="certification"
    >
      {children}
    </PracticeAccessGate>
  );
}
