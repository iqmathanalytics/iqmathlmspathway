"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { UserProgress } from "@/lib/types";
import { useAuth } from "@/contexts/AuthContext";
import { isSupabaseConfigured } from "@/lib/supabase/client";
import {
  clearGuestAndLegacyProgress,
  loadProgress,
  migrateToAuthOnlyProgress,
  resetProgressSession,
  setActiveProgressUser,
  syncProgressFromCloud,
} from "@/lib/progress-service";

const emptyProgress: UserProgress = { completedTopics: [], quizScores: {} };

interface ProgressContextValue {
  progress: UserProgress;
  ready: boolean;
  userId: string | null;
  refresh: () => Promise<void>;
}

const ProgressContext = createContext<ProgressContextValue>({
  progress: emptyProgress,
  ready: false,
  userId: null,
  refresh: async () => {},
});

export function ProgressProvider({ children }: { children: ReactNode }) {
  const { user, loading: authLoading } = useAuth();
  const [progress, setProgress] = useState<UserProgress>(emptyProgress);
  const [ready, setReady] = useState(false);

  const syncInFlight = useRef(false);

  const syncForUser = useCallback(async (userId: string, background = false) => {
    if (syncInFlight.current) return;
    syncInFlight.current = true;
    if (!background) setReady(false);

    try {
      clearGuestAndLegacyProgress();
      setActiveProgressUser(userId);

      if (isSupabaseConfigured()) {
        await migrateToAuthOnlyProgress(userId);
        const synced = await syncProgressFromCloud(userId);
        setProgress(synced);
      } else {
        setProgress(loadProgress());
      }
    } finally {
      syncInFlight.current = false;
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (authLoading) {
      setReady(false);
      return;
    }

    if (!user) {
      clearGuestAndLegacyProgress();
      resetProgressSession();
      setProgress(emptyProgress);
      setReady(true);
      return;
    }

    void syncForUser(user.id);
  }, [user, authLoading, syncForUser]);

  useEffect(() => {
    if (!user) return;
    const onUpdate = () => setProgress(loadProgress());
    window.addEventListener("pypath-progress-updated", onUpdate);
    return () => window.removeEventListener("pypath-progress-updated", onUpdate);
  }, [user]);

  const refresh = useCallback(async () => {
    if (user) await syncForUser(user.id, true);
  }, [user, syncForUser]);

  const value = useMemo(
    () => ({
      progress,
      ready,
      userId: user?.id ?? null,
      refresh,
    }),
    [progress, ready, user, refresh]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  return useContext(ProgressContext);
}
