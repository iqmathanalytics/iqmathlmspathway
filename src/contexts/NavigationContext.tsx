"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";

interface NavigationContextValue {
  isNavigating: boolean;
  startNavigation: () => void;
}

const NavigationContext = createContext<NavigationContextValue>({
  isNavigating: false,
  startNavigation: () => {},
});

export function NavigationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(false);
  }, [pathname]);

  useEffect(() => {
    if (!isNavigating) return;
    const timeout = window.setTimeout(() => setIsNavigating(false), 15000);
    return () => window.clearTimeout(timeout);
  }, [isNavigating]);

  const startNavigation = useCallback(() => {
    setIsNavigating(true);
  }, []);

  return (
    <NavigationContext.Provider value={{ isNavigating, startNavigation }}>
      {children}
      {isNavigating && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 backdrop-blur-sm"
          role="status"
          aria-live="polite"
          aria-label="Loading page"
        >
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-100 bg-white px-8 py-6 shadow-lg">
            <Loader2 className="h-10 w-10 animate-spin text-brand-600" />
            <p className="text-sm font-medium text-gray-700">Loading…</p>
          </div>
        </div>
      )}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}
