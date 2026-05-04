export type ApiError = {
  message: string;
  status: number;
};

type RequestOptions = RequestInit & {
  timeoutMs?: number;
};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "";
const DEFAULT_TIMEOUT_MS = 10000;

export const httpClient = async <T>(
  endpoint: string,
  options: RequestOptions = {},
): Promise<T> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(
    () => controller.abort(),
    options.timeoutMs ?? DEFAULT_TIMEOUT_MS,
  );

  const isFormData =
    typeof FormData !== "undefined" && options.body instanceof FormData;

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        ...(isFormData ? {} : { "Content-Type": "application/json" }),
        ...(options.headers ?? {}),
      },
      signal: controller.signal,
    });

    if (!response.ok) {
      throw {
        message: `Request failed with status ${response.status}`,
        status: response.status,
      } satisfies ApiError;
    }

    return (await response.json()) as T;
  } finally {
    clearTimeout(timeoutId);
  }
};
