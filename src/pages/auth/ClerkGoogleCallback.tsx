import { useEffect, useRef, useState } from "react";
import { useAuth, useUser } from "@clerk/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useClerkGoogleExchange } from "../../api-service/auth/clerk-google";
import useCurrentUser from "../../hooks/use-current-user";
import { resolvePostLoginRedirect } from "../../lib/post-login-redirect";
import { getApiErrorMessage } from "../../api-service/utils/error";

const ClerkGoogleCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { getToken, isSignedIn, isLoaded: authLoaded } = useAuth();
  const { isLoaded: userLoaded } = useUser();
  const exchange = useClerkGoogleExchange();
  const { setCurrentUser } = useCurrentUser();
  const [error, setError] = useState("");
  const ranRef = useRef(false);

  useEffect(() => {
    if (!authLoaded || !userLoaded) return;
    if (!isSignedIn) {
      setError("Google sign-in was not completed.");
      return;
    }
    if (ranRef.current) return;
    ranRef.current = true;

    const run = async () => {
      try {
        const clerkToken = await getToken();
        if (!clerkToken) {
          throw new Error("Unable to get Clerk session token.");
        }
        const payload = await exchange.mutateAsync({
          clerk_session_token: clerkToken,
        });
        setCurrentUser(payload);
        const next = resolvePostLoginRedirect(searchParams.get("from"), payload.user.role);
        navigate(next, { replace: true });
      } catch (err) {
        setError(getApiErrorMessage(err, "Could not complete Google sign-in."));
      }
    };

    void run();
  }, [
    authLoaded,
    userLoaded,
    isSignedIn,
    getToken,
    exchange,
    setCurrentUser,
    navigate,
    searchParams,
  ]);

  return (
    <div className="mx-auto max-w-md space-y-4 px-4 py-10 text-center">
      <h1 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
        Google sign-in
      </h1>
      {error ? (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-300">
          {error}
        </p>
      ) : (
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
          Finalizing your login...
        </p>
      )}
    </div>
  );
};

export default ClerkGoogleCallback;
