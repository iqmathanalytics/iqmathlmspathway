"use client";

import { useCallback, useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { isAdmin } from "@/lib/admin";
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
  const { user, profile } = useAuth();
  const admin = isAdmin(profile);
  const cached = user ? readCache(user.id) : null;
  const [hasPremium, setHasPremium] = useState(admin || cached || false);
  const [loading, setLoading] = useState(Boolean(user) && !admin);

  const refresh = useCallback(async () => {
    if (admin) {
      setHasPremium(true);
      setLoading(false);
      return;
    }

    if (!user || !isSupabaseConfigured()) {
      setHasPremium(false);
      setLoading(false);
      return;
    }

    const sb = getSupabase();
    if (!sb) {
      setHasPremium(false);
      setLoading(false);
      return;
    }

    const { data, error } = await sb
      .from("entitlements")
      .select("id")
      .eq("user_id", user.id)
      .eq("product", PRACTICE_PREMIUM_PRODUCT)
      .maybeSingle();

    if (error) {
      // Keep any cached value on transient failure; still end loading.
      setLoading(false);
      return;
    }

    const premium = Boolean(data);
    setHasPremium(premium);
    writeCache(user.id, premium);
    setLoading(false);
  }, [user, admin]);

  useEffect(() => {
    if (!user) {
      setHasPremium(false);
      setLoading(false);
      return;
    }

    if (admin) {
      setHasPremium(true);
      setLoading(false);
      return;
    }

    // Show cache immediately, then always revalidate so admin grants/revokes apply.
    const hit = readCache(user.id);
    if (hit !== null) {
      setHasPremium(hit);
    }
    setLoading(true);
    void refresh();
  }, [user, admin, refresh]);

  return { hasPremium: admin || hasPremium, loading: admin ? false : loading, refresh };
}
