"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Session, User } from "@supabase/supabase-js";
import { formatAuthError } from "@/lib/auth-errors";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import type { ProfileRow } from "@/lib/types";

interface AuthContextValue {
  user: User | null;
  session: Session | null;
  profile: ProfileRow | null;
  loading: boolean;
  configured: boolean;
  signUp: (params: {
    email: string;
    password: string;
    fullName: string;
    mobile: string;
  }) => Promise<{ error: string | null; needsEmailConfirmation: boolean }>;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<ProfileRow | null>(null);
  const [loading, setLoading] = useState(true);
  const configured = isSupabaseConfigured();

  const loadProfile = useCallback(async (userId: string) => {
    const sb = getSupabase();
    if (!sb) return;
    const { data } = await sb
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .maybeSingle();
    if (data) setProfile(data as ProfileRow);
  }, []);

  const refreshProfile = useCallback(async () => {
    if (user) await loadProfile(user.id);
  }, [loadProfile, user]);

  useEffect(() => {
    const sb = getSupabase();
    if (!sb) {
      setLoading(false);
      return;
    }

    sb.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setUser(data.session?.user ?? null);
      setLoading(false);
      if (data.session?.user) {
        loadProfile(data.session.user.id);
      }
    });

    const { data: sub } = sb.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setUser(nextSession?.user ?? null);
      if (nextSession?.user) {
        loadProfile(nextSession.user.id);
      } else {
        setProfile(null);
      }
    });

    return () => sub.subscription.unsubscribe();
  }, [loadProfile]);

  const signUp = useCallback(
    async (params: {
      email: string;
      password: string;
      fullName: string;
      mobile: string;
    }) => {
      const sb = getSupabase();
      if (!sb) return { error: "Auth is not configured.", needsEmailConfirmation: false };

      const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

      if (url && anonKey) {
        try {
          const res = await fetch(`${url}/functions/v1/register-user`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              apikey: anonKey,
              Authorization: `Bearer ${anonKey}`,
            },
            body: JSON.stringify({
              email: params.email,
              password: params.password,
              fullName: params.fullName,
              mobile: params.mobile,
            }),
          });

          if (res.ok) {
            const { error: signInError } = await sb.auth.signInWithPassword({
              email: params.email,
              password: params.password,
            });
            if (signInError) {
              return {
                error: formatAuthError(signInError.message),
                needsEmailConfirmation: false,
              };
            }
            return { error: null, needsEmailConfirmation: false };
          }

          if (res.status !== 404) {
            const payload = (await res.json().catch(() => ({}))) as { error?: string };
            return {
              error: formatAuthError(payload.error ?? "Registration failed."),
              needsEmailConfirmation: false,
            };
          }
        } catch {
          /* fall through to direct signUp if Edge Function unavailable */
        }
      }

      const { data, error } = await sb.auth.signUp({
        email: params.email,
        password: params.password,
        options: {
          data: {
            full_name: params.fullName,
            mobile: params.mobile,
          },
        },
      });

      if (error) {
        return {
          error: formatAuthError(error.message),
          needsEmailConfirmation: false,
        };
      }

      const needsEmailConfirmation = !data.session;
      return { error: null, needsEmailConfirmation };
    },
    []
  );

  const signIn = useCallback(async (email: string, password: string) => {
    const sb = getSupabase();
    if (!sb) return { error: "Auth is not configured." };

    const { error } = await sb.auth.signInWithPassword({ email, password });
    return { error: error ? formatAuthError(error.message) : null };
  }, []);

  const signOut = useCallback(async () => {
    const sb = getSupabase();
    if (!sb) return;
    await sb.auth.signOut();
    setProfile(null);
    const { resetProgressSession, clearGuestAndLegacyProgress } = await import(
      "@/lib/progress-service"
    );
    clearGuestAndLegacyProgress();
    resetProgressSession();
  }, []);

  const value = useMemo(
    () => ({
      user,
      session,
      profile,
      loading,
      configured,
      signUp,
      signIn,
      signOut,
      refreshProfile,
    }),
    [user, session, profile, loading, configured, signUp, signIn, signOut, refreshProfile]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
