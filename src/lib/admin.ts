import { OPEN_ACCESS } from "@/lib/access-flags";
import type { ProfileRow } from "@/lib/types";

/** Student demo account — every course, practice, quiz, and cert is unlocked. */
export const DEMO_UNLOCK_EMAIL = "iqdemo@gmail.com";

export function isAdmin(profile: ProfileRow | null | undefined): boolean {
  return profile?.role === "admin" && profile.is_active !== false;
}

export function isDemoUnlockAccount(
  profile: ProfileRow | null | undefined,
  email?: string | null
): boolean {
  const value = (email || profile?.email || "").trim().toLowerCase();
  return value === DEMO_UNLOCK_EMAIL;
}

/** Admin preview or the IQ demo learner — skip sequential / premium locks. */
export function unlocksAllContent(
  profile: ProfileRow | null | undefined,
  email?: string | null
): boolean {
  return OPEN_ACCESS || isAdmin(profile) || isDemoUnlockAccount(profile, email);
}

export function isAccountDisabled(profile: ProfileRow | null | undefined): boolean {
  return profile?.is_active === false;
}

export function schemaMissing(error: { message?: string; code?: string } | null | undefined): boolean {
  if (!error) return false;
  const message = (error.message ?? "").toLowerCase();
  return (
    error.code === "PGRST205" ||
    error.code === "42P01" ||
    message.includes("does not exist") ||
    message.includes("could not find the table")
  );
}