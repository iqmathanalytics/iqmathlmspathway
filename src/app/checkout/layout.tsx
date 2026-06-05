"use client";

import { Suspense, type ReactNode } from "react";
import { RequireAuth } from "@/components/auth/RequireAuth";

export default function CheckoutLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading…</div>}>
      <RequireAuth>{children}</RequireAuth>
    </Suspense>
  );
}
