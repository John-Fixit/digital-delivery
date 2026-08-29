import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api, extractApiData } from "../index";
import type { ApiEnvelope } from "../types";
import { queryKeys } from "../../lib/query-keys";
import { getPersistedAuthToken } from "../../lib/auth-storage";

export type NotificationPreferencesType = {
  emailEnabled: boolean;
  pushEnabled: boolean;
  inAppEnabled: boolean;
};

export const useNotificationPreferences = () =>
  useQuery({
    queryKey: queryKeys.notifications.preferences(),
    queryFn: async () => {
      const res = await api.get<ApiEnvelope<NotificationPreferencesType>>(
        "/api/user/me/notification-preferences",
      );
      return extractApiData(res);
    },
    enabled: typeof window !== "undefined" && !!getPersistedAuthToken(),
  });

export const useUpdateNotificationPreferences = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (prefs: NotificationPreferencesType) => {
      const res = await api.patch<ApiEnvelope<NotificationPreferencesType>>(
        "/api/user/me/notification-preferences",
        prefs,
      );
      return extractApiData(res);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.notifications.preferences() });
    },
  });
};
