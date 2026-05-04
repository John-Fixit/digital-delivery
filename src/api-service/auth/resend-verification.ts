import { useMutation } from "@tanstack/react-query";
import { api, extractApiData } from "../index";
import type { ApiEnvelope } from "../types";

type ResendPayload = { email: string };

export const useResendVerification = () => {
  return useMutation({
    mutationFn: async (payload: ResendPayload) => {
      const res = await api.post<ApiEnvelope<unknown>>(
        "/api/auth/resend-verification",
        payload,
      );
      return extractApiData(res);
    },
  });
};
