/** Map Supabase auth API errors to clearer user-facing messages. */
export function formatAuthError(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes("rate limit") || lower.includes("429")) {
    return "Too many signup or email requests right now. Wait about an hour and try again, or ask your admin to enable the register-user Edge Function / custom SMTP in Supabase.";
  }

  if (lower.includes("already registered") || lower.includes("already exists")) {
    return "An account with this email already exists. Try signing in.";
  }

  if (lower.includes("invalid login credentials")) {
    return "Incorrect email or password.";
  }

  if (lower.includes("email not confirmed")) {
    return "Confirm your email first, then sign in.";
  }

  return message;
}
