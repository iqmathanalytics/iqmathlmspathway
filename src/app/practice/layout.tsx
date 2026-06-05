"use client";

import { Suspense, type ReactNode } from "react";
import { RequireAuth } from "@/components/auth/RequireAuth";
import { Loader2 } from "lucide-react";

function AuthFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
    </div>
  );
}

export default function PracticeLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<AuthFallback />}>
      <RequireAuth>{children}</RequireAuth>
    </Suspense>
  );
}
