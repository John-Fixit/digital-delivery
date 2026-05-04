import axios, { type AxiosResponse } from "axios";
import type { ApiEnvelope } from "./types";
import { getPersistedAuthToken } from "../lib/auth-storage";
import { queryClient } from "../lib/query-client";
import { queryKeys } from "../lib/query-keys";
import useCurrentUser from "../hooks/use-current-user";
import { useSessionExpiredStore } from "../stores/session-expired-store";

const baseURL =
  import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") ??
  "http://localhost:8000";

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

function isAuthPublicRequest(url: string | undefined): boolean {
  if (!url) return false;
  return (
    url.includes("/api/auth/login") ||
    url.includes("/api/auth/clerk/google") ||
    url.includes("/api/auth/register") ||
    url.includes("/api/auth/verify-email") ||
    url.includes("/api/auth/resend-verification")
  );
}

api.interceptors.request.use((config) => {
  const token = getPersistedAuthToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status as number | undefined;
    const url = error.config?.url as string | undefined;

    if (status === 401 && !isAuthPublicRequest(url)) {
      const returnPath =
        typeof window !== "undefined"
          ? `${window.location.pathname}${window.location.search || ""}`
          : "/home";
      useCurrentUser.getState().removeCurrentUser();
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
      }
      void queryClient.removeQueries({ queryKey: queryKeys.auth.all });
      const onAuthRoute =
        typeof window !== "undefined" &&
        window.location.pathname.startsWith("/auth");
      if (!onAuthRoute) {
        useSessionExpiredStore.getState().openSessionExpired(returnPath);
      }
    }
    return Promise.reject(error);
  },
);

/** Read `data` from `{ success, message, data }` responses */
export const extractApiData = <T>(
  response: AxiosResponse<ApiEnvelope<T>>,
): T => {
  const body = response.data;
  if (!body.success) {
    const err = new Error(body.message || "Request failed");
    throw err;
  }
  return body.data;
};

export default api;
