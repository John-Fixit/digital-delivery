import { useMutation } from "@tanstack/react-query";
import { api, extractApiData } from "../index";
import type { ApiEnvelope, RegisterPayload, RegisterResponse } from "../types";

export const useSignup = () => {
  return useMutation({
    mutationFn: async (payload: RegisterPayload) => {
      const res = await api.post<ApiEnvelope<RegisterResponse>>(
        "/api/auth/register",
        payload,
      );
      return extractApiData(res);
    },
  });
};
