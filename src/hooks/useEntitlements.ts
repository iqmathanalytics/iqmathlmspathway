"use client";

import { useCallback, useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { PRACTICE_PREMIUM_PRODUCT } from "@/lib/practice-config";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase/client";

const CACHE_KEY = "pypath-premium-v1";

function readCache(userId: string): boolean | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { userId: id, hasPremium } = JSON.parse(raw) as {
      userId: string;
      hasPremium: boolean;
    };
    return id === userId ? hasPremium : null;
  } catch {
    return null;
  }
}

function writeCache(userId: string, hasPremium: boolean) {
  sessionStorage.setItem(CACHE_KEY, JSON.stringify({ userId, hasPremium }));
}

export function useEntitlements() {
  const { user } = useAuth();
  const cached = user ? readCache(user.id) : null;
  const [hasPremium, setHasPremium] = useState(cached ?? false);
  const [loading, setLoading] = useState(cached === null && Boolean(user));

  const refresh = useCallback(async () => {
    if (!user || !isSupabaseConfigured()) {
      setHasPremium(false);
      setLoading(false);
      return;
    }

    const sb = getSupabase();
    if (!sb) {
      setLoading(false);
      return;
    }

    const { data } = await sb
      .from("entitlements")
      .select("id")
      .eq("user_id", user.id)
      .eq("product", PRACTICE_PREMIUM_PRODUCT)
      .maybeSingle();

    const premium = Boolean(data);
    setHasPremium(premium);
    writeCache(user.id, premium);
    setLoading(false);
  }, [user]);

  useEffect(() => {
    if (!user) {
      setHasPremium(false);
      setLoading(false);
      return;
    }
    const hit = readCache(user.id);
    if (hit !== null) {
      setHasPremium(hit);
      setLoading(false);
      return;
    }
    setLoading(true);
    refresh();
  }, [user, refresh]);

  return { hasPremium, loading, refresh };
}
