import axios from "axios";
import { useEffect, type ReactNode } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useCurrentUser from "../../hooks/use-current-user";
import { useMe } from "../../api-service/auth/me";
import { getPersistedAuthToken } from "../../lib/auth-storage";
import { useSessionExpiredStore } from "../../stores/session-expired-store";
import FullScreenProfileLoader from "./FullScreenProfileLoader";
import FullScreenProfileError from "./FullScreenProfileError";
import { resolveRoleShell } from "../../lib/role-shell";

type RequireAuthProps = {
  children?: ReactNode;
  /** When set, only this role's shell may render `children` — others are sent to their own shell. */
  requireRole?: "rider" | "admin" | "customer";
};

/**
 * Protects `/home/*`, `/rider/*`, and `/admin/*`: requires token, loads
 * profile before rendering the shell, handles network errors and expired
 * sessions, and (when `requireRole` is set) keeps each role in its own shell.
 */
const RequireAuth = ({ children, requireRole }: RequireAuthProps) => {
  const location = useLocation();
  const lockout = useSessionExpiredStore((s) => s.lockout);
  const token = getPersistedAuthToken();
  const me = useMe();

  const loginRedirect = `/auth/login?from=${encodeURIComponent(
    `${location.pathname}${location.search || ""}`,
  )}`;

  useEffect(() => {
    if (!me.isSuccess || !me.data?.user) return;
    const t = getPersistedAuthToken();
    if (!t) return;
    useCurrentUser.getState().setCurrentUser({ token: t, user: me.data.user });
  }, [me.isSuccess, me.data]);

  if (lockout) {
    return null;
  }

  if (!token) {
    return <Navigate to={loginRedirect} replace />;
  }

  if (me.isPending) {
    return <FullScreenProfileLoader message="Loading your profile…" />;
  }

  if (me.isError) {
    const status = axios.isAxiosError(me.error)
      ? me.error.response?.status
      : undefined;
    if (status === 401) {
      return null;
    }
    return (
      <FullScreenProfileError
        title="We couldn’t load your profile"
        description="This is usually a network issue. Reload to try again."
        onRetry={() => void me.refetch()}
      />
    );
  }

  if (!me.data?.user) {
    return <FullScreenProfileLoader message="Almost there…" />;
  }

  if (requireRole) {
    const shell = resolveRoleShell(me.data.user.role);
    const requiredShell = requireRole === "customer" ? "/home" : `/${requireRole}`;
    if (shell !== requiredShell) {
      return <Navigate to={shell} replace />;
    }
  }

  return <>{children ?? <Outlet />}</>;
};

export default RequireAuth;
