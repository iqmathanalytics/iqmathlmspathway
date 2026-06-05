import { Suspense, type ReactNode } from "react";
import { Loader2 } from "lucide-react";
import { AuthProvider } from "@/contexts/AuthContext";
import { NavigationProvider } from "@/contexts/NavigationContext";
import { ProgressProvider } from "@/contexts/ProgressContext";

function ProvidersFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
    </div>
  );
}

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <AuthProvider>
      <Suspense fallback={<ProvidersFallback />}>
        <NavigationProvider>
          <ProgressProvider>{children}</ProgressProvider>
        </NavigationProvider>
      </Suspense>
    </AuthProvider>
  );
}
