import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { api, extractApiData } from "../index";
import type { ApiEnvelope, AuthUser } from "../types";
import { queryKeys } from "../../lib/query-keys";
import { getPersistedAuthToken } from "../../lib/auth-storage";

type MeResponse = { user: AuthUser };

export const useMe = () => {
  return useQuery({
    queryKey: queryKeys.auth.me(),
    queryFn: async () => {
      const res = await api.get<ApiEnvelope<MeResponse>>("/api/auth/me");
      return extractApiData(res);
    },
    enabled: typeof window !== "undefined" && !!getPersistedAuthToken(),
    retry: (failureCount, error) => {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        return false;
      }
      return failureCount < 2;
    },
    staleTime: 60_000,
  });
};
