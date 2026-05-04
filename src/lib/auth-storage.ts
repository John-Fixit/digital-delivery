const STORAGE_KEY = "logitrust-auth";
/** Legacy key used by older code paths */
const LEGACY_TOKEN_KEY = "token";

export function getPersistedAuthToken(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const legacy = localStorage.getItem(LEGACY_TOKEN_KEY);
      return legacy && legacy.length > 0 ? legacy : null;
    }
    const parsed = JSON.parse(raw) as { state?: { token?: string | null } };
    const t = parsed?.state?.token;
    return typeof t === "string" && t.length > 0 ? t : null;
  } catch {
    return null;
  }
}

export function clearPersistedAuth(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem(LEGACY_TOKEN_KEY);
}
