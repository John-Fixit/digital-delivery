import { resolveRoleShell } from "./role-shell";

/**
 * Validates `from` query param for post-login navigation.
 * Only in-app dashboard routes under `/home`, `/rider`, or `/admin` are allowed.
 */
export function isValidPostLoginPath(path: string | null): path is string {
  if (!path || typeof path !== "string") return false;
  let decoded: string;
  try {
    decoded = decodeURIComponent(path.trim());
  } catch {
    return false;
  }
  if (
    !decoded.startsWith("/home") &&
    !decoded.startsWith("/rider") &&
    !decoded.startsWith("/admin")
  ) {
    return false;
  }
  if (decoded.startsWith("//")) return false;
  if (decoded.includes("..")) return false;
  if (decoded.includes(":")) return false;
  return true;
}

export function resolvePostLoginRedirect(from: string | null, role?: string): string {
  if (isValidPostLoginPath(from)) return decodeURIComponent(from.trim());
  return resolveRoleShell(role);
}
