import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, extractApiData } from "../index";
import type { ApiEnvelope, LoginPayload, LoginResponse } from "../types";
import { queryKeys } from "../../lib/query-keys";

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: LoginPayload) => {
      const res = await api.post<ApiEnvelope<LoginResponse>>(
        "/api/auth/login",
        payload,
      );
      return extractApiData(res);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.auth.me() });
    },
  });
};
