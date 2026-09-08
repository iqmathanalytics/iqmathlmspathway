import { Suspense, type ReactNode } from "react";
import { Loader2 } from "lucide-react";
import { AuthProvider } from "@/contexts/AuthContext";
import { NavigationProvider } from "@/contexts/NavigationContext";
import { ProgressProvider } from "@/contexts/ProgressContext";
import { WalkthroughProvider } from "@/contexts/WalkthroughContext";
import { WalkthroughOverlay } from "@/components/walkthrough/WalkthroughOverlay";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

function ProvidersFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-brand-600" />
    </div>
  );
}

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Suspense fallback={<ProvidersFallback />}>
          <NavigationProvider>
            <ProgressProvider>
              <WalkthroughProvider>
                <div className="flex min-h-dvh w-full flex-1 flex-col bg-[var(--background)] text-[var(--foreground)]">
                  {children}
                </div>
                <WalkthroughOverlay />
              </WalkthroughProvider>
            </ProgressProvider>
          </NavigationProvider>
        </Suspense>
      </AuthProvider>
    </ThemeProvider>
  );
}
