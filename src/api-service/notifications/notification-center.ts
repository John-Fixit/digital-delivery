import { useQuery } from "@tanstack/react-query";
import { api, extractApiData } from "../index";
import type { ApiEnvelope } from "../types";
import { queryKeys } from "../../lib/query-keys";
import { getPersistedAuthToken } from "../../lib/auth-storage";

export type NotificationType = {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "escrow" | "shipment" | "alert";
  read: boolean;
  trackingId?: string;
};

type ApiNotification = {
  id: string;
  title: string;
  message: string;
  status: string;
  createdAt: string;
};

const extractTrackingId = (text: string): string | undefined => {
  const match = text.match(/LGC-[A-Z0-9-]+/i);
  return match?.[0];
};

const mapToUi = (row: ApiNotification): NotificationType => {
  const trackingId =
    extractTrackingId(row.title) ?? extractTrackingId(row.message);
  return {
    id: row.id,
    title: row.title,
    message: row.message,
    time: row.createdAt,
    type: "shipment",
    read: true,
    trackingId,
  };
};

export const useNotificationCenter = () => {
  return useQuery({
    queryKey: queryKeys.notifications.list(),
    queryFn: async () => {
      const res = await api.get<ApiEnvelope<ApiNotification[]>>(
        "/api/notifications",
      );
      const rows = extractApiData(res);
      return rows.map(mapToUi);
    },
    enabled: typeof window !== "undefined" && !!getPersistedAuthToken(),
  });
};
