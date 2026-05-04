import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, extractApiData } from "../index";
import type { ApiEnvelope, LoginResponse } from "../types";
import { queryKeys } from "../../lib/query-keys";

type ClerkGooglePayload = {
  clerk_session_token: string;
};

export const useClerkGoogleExchange = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: ClerkGooglePayload) => {
      const res = await api.post<ApiEnvelope<LoginResponse>>(
        "/api/auth/clerk/google",
        payload,
      );
      return extractApiData(res);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.auth.me() });
    },
  });
};
