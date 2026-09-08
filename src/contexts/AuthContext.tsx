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
import { isAdmin as profileIsAdmin } from "@/lib/admin";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import type { ProfileRow, UserRole } from "@/lib/types";

interface SignUpParams {
  email: string;
  password: string;
  fullName: string;
  mobile: string;
  collegeId: string | null;
  /** When set (Others on register), Edge Function creates/reuses a colleges row. */
  collegeName?: string | null;
  department: string;
}

interface AuthContextValue {
  user: User | null;
  session: Session | null;
  profile: ProfileRow | null;
  loading: boolean;
  profileLoading: boolean;
  configured: boolean;
  signUp: (params: SignUpParams) => Promise<{ error: string | null; needsEmailConfirmation: boolean }>;
  signIn: (
    email: string,
    password: string,
    mobile?: string
  ) => Promise<{ error: string | null; isAdmin: boolean }>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
  updateProfile: (
    patch: Partial<Pick<ProfileRow, "full_name" | "mobile" | "college_id" | "department">>
  ) => Promise<{ error: string | null }>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

function asProfile(data: unknown): ProfileRow | null {
  if (!data || typeof data !== "object") return null;
  const row = data as Record<string, unknown>;
  return {
    id: String(row.id ?? ""),
    full_name: String(row.full_name ?? ""),
    email: String(row.email ?? ""),
    mobile: String(row.mobile ?? ""),
    college_id: (row.college_id as string | null) ?? null,
    department: String(row.department ?? ""),
    role: (row.role as UserRole) || "student",
    is_active: row.is_active !== false,
    created_at: String(row.created_at ?? ""),
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<ProfileRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [profileLoading, setProfileLoading] = useState(false);
  const configured = isSupabaseConfigured();

  const loadProfile = useCallback(async (userId: string) => {
    const sb = getSupabase();
    if (!sb) {
      setProfileLoading(false);
      return null;
    }
    setProfileLoading(true);
    const { data } = await sb.from("profiles").select("*").eq("id", userId).maybeSingle();
    const next = asProfile(data);
    setProfile(next);
    setProfileLoading(false);
    return next;
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
        void loadProfile(data.session.user.id);
      }
    });

    const { data: sub } = sb.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setUser(nextSession?.user ?? null);
      if (nextSession?.user) {
        void loadProfile(nextSession.user.id);
      } else {
        setProfile(null);
        setProfileLoading(false);
      }
    });

    return () => sub.subscription.unsubscribe();
  }, [loadProfile]);

  const signUp = useCallback(async (params: SignUpParams) => {
    const sb = getSupabase();
    if (!sb) return { error: "Auth is not configured.", needsEmailConfirmation: false };

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    const customCollegeName = params.collegeName?.trim() || "";
    const metadata = {
      full_name: params.fullName,
      mobile: params.mobile,
      college_id: params.collegeId ?? "",
      department: params.department,
    };

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
            collegeId: params.collegeId,
            collegeName: customCollegeName || null,
            department: params.department,
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
          await sb.rpc("sync_login_profile", { p_mobile: params.mobile });
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

    // New colleges require the Edge Function (service role); cannot insert via anon RLS.
    if (customCollegeName && !params.collegeId) {
      return {
        error: "Registration service required to add a new college. Please try again later.",
        needsEmailConfirmation: false,
      };
    }

    const { data, error } = await sb.auth.signUp({
      email: params.email,
      password: params.password,
      options: { data: metadata },
    });

    if (error) {
      return {
        error: formatAuthError(error.message),
        needsEmailConfirmation: false,
      };
    }

    const needsEmailConfirmation = !data.session;
    if (data.session) {
      await sb.rpc("sync_login_profile", { p_mobile: params.mobile });
    }
    return { error: null, needsEmailConfirmation };
  }, []);

  const signIn = useCallback(async (email: string, password: string, mobile = "") => {
    const sb = getSupabase();
    if (!sb) return { error: "Auth is not configured.", isAdmin: false };

    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error) {
      return { error: formatAuthError(error.message), isAdmin: false };
    }

    if (data.user) {
      const { error: rpcError } = await sb.rpc("sync_login_profile", { p_mobile: mobile });
      if (rpcError) {
        // RPC missing or failed — still keep profile email/mobile in sync when possible.
        const patch: { email?: string; mobile?: string } = {
          email: data.user.email ?? undefined,
        };
        if (mobile.length >= 8) patch.mobile = mobile;
        const { error: profileError } = await sb
          .from("profiles")
          .update(patch)
          .eq("id", data.user.id);
        if (profileError && !/column|schema|does not exist|Could not find/i.test(profileError.message)) {
          // Non-schema errors are worth knowing about; login still succeeds.
          console.warn("Profile sync after login failed:", profileError.message);
        }
      }
      const nextProfile = await loadProfile(data.user.id);
      return { error: null, isAdmin: profileIsAdmin(nextProfile) };
    }

    return { error: null, isAdmin: false };
  }, [loadProfile]);

  const updateProfile = useCallback(
    async (
      patch: Partial<Pick<ProfileRow, "full_name" | "mobile" | "college_id" | "department">>
    ) => {
      const sb = getSupabase();
      if (!sb || !user) return { error: "Not signed in." };
      const { error } = await sb.from("profiles").update(patch).eq("id", user.id);
      if (error) return { error: error.message };
      await loadProfile(user.id);
      return { error: null };
    },
    [loadProfile, user]
  );

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
      profileLoading,
      configured,
      signUp,
      signIn,
      signOut,
      refreshProfile,
      updateProfile,
    }),
    [
      user,
      session,
      profile,
      loading,
      profileLoading,
      configured,
      signUp,
      signIn,
      signOut,
      refreshProfile,
      updateProfile,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}