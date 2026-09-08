import type { ProfileRow } from "@/lib/types";

export function isAdmin(profile: ProfileRow | null | undefined): boolean {
  return profile?.role === "admin" && profile.is_active !== false;
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