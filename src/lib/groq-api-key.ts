export const GROQ_API_KEY_STORAGE_KEY = "agentic-ai-groq-api-key";
export const GROQ_API_KEY_UPDATED_EVENT = "groq-api-key-updated";
const LEGACY_GROQ_PLAYGROUND_KEY = "groq-playground-api-key";

export function readStoredGroqApiKey(): string {
  if (typeof window === "undefined") return "";
  try {
    return (
      localStorage.getItem(GROQ_API_KEY_STORAGE_KEY) ??
      localStorage.getItem(LEGACY_GROQ_PLAYGROUND_KEY) ??
      ""
    );
  } catch {
    return "";
  }
}

export function saveStoredGroqApiKey(apiKey: string) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(GROQ_API_KEY_STORAGE_KEY, apiKey);
    localStorage.removeItem(LEGACY_GROQ_PLAYGROUND_KEY);
    window.dispatchEvent(new Event(GROQ_API_KEY_UPDATED_EVENT));
  } catch {
    // Ignore blocked storage; callers still keep local state.
  }
}

export function clearStoredGroqApiKey() {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(GROQ_API_KEY_STORAGE_KEY);
    localStorage.removeItem(LEGACY_GROQ_PLAYGROUND_KEY);
    window.dispatchEvent(new Event(GROQ_API_KEY_UPDATED_EVENT));
  } catch {
    // Ignore blocked storage.
  }
}
