import axios, { type AxiosError } from "axios";

export const getApiErrorMessage = (error: unknown, fallback = "Something went wrong") => {
  if (axios.isAxiosError(error)) {
    const ax = error as AxiosError<{ message?: string }>;
    const msg = ax.response?.data?.message;
    if (typeof msg === "string" && msg.trim()) return msg;
  }
  if (error instanceof Error && error.message) return error.message;
  return fallback;
};
