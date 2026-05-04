import { useMutation } from "@tanstack/react-query";
import { api, extractApiData } from "../index";
import type { ApiEnvelope } from "../types";

type VerifyPayload = { token: string };

export const useVerifyEmail = () => {
  return useMutation({
    mutationFn: async (payload: VerifyPayload) => {
      const res = await api.post<ApiEnvelope<unknown>>(
        "/api/auth/verify-email",
        payload,
      );
      return extractApiData(res);
    },
  });
};
