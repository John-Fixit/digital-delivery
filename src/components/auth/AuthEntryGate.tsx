import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useCurrentUser from "../../hooks/use-current-user";
import { useMe } from "../../api-service/auth/me";
import { getPersistedAuthToken } from "../../lib/auth-storage";
import { resolvePostLoginRedirect } from "../../lib/post-login-redirect";
import { resolveRoleShell } from "../../lib/role-shell";
import FullScreenProfileLoader from "./FullScreenProfileLoader";
import FullScreenProfileError from "./FullScreenProfileError";

type AuthEntryGateProps = {
  children: React.ReactNode;
  /** `fromParam` uses `?from=` for post-login redirect; `home` always sends to `/home` */
  redirectMode: "home" | "fromParam";
};

/**
 * When a token exists (e.g. returning visitor), validates session via `/me` and
 * redirects authenticated users away from public entry routes.
 */
const AuthEntryGate = ({ children, redirectMode }: AuthEntryGateProps) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const fromParam = searchParams.get("from");
  const token = getPersistedAuthToken();
  const me = useMe();

  useEffect(() => {
    if (!me.isSuccess || !me.data?.user) return;
    const t = getPersistedAuthToken();
    if (!t) return;
    useCurrentUser.getState().setCurrentUser({ token: t, user: me.data.user });
    const dest =
      redirectMode === "home"
        ? resolveRoleShell(me.data.user.role)
        : resolvePostLoginRedirect(fromParam, me.data.user.role);
    navigate(dest, { replace: true });
  }, [me.isSuccess, me.data, navigate, redirectMode, fromParam]);

  if (!token) return <>{children}</>;

  if (me.isPending) {
    return <FullScreenProfileLoader message="Verifying your session…" />;
  }

  if (me.isError) {
    const status = axios.isAxiosError(me.error)
      ? me.error.response?.status
      : undefined;
    if (status === 401) {
      return <>{children}</>;
    }
    return (
      <FullScreenProfileError
        title="Connection problem"
        description="We couldn’t load your profile. Check your network and try again."
        onRetry={() => void me.refetch()}
      />
    );
  }

  if (me.isSuccess) {
    return <FullScreenProfileLoader message="Redirecting…" />;
  }

  return <>{children}</>;
};

export default AuthEntryGate;
