import { useQueryClient } from "@tanstack/react-query";
import { queryKeys } from "../../lib/query-keys";
import useCurrentUser from "../../hooks/use-current-user";
import { useSessionExpiredStore } from "../../stores/session-expired-store";

/** Clears token, cached user, and auth queries — call after logout button */
export const useLogout = () => {
  const queryClient = useQueryClient();

  return () => {
    useCurrentUser.getState().removeCurrentUser();
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
    }
    useSessionExpiredStore.getState().clearSessionExpired();
    void queryClient.removeQueries({ queryKey: queryKeys.auth.all });
  };
};
