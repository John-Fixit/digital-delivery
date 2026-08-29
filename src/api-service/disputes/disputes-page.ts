import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api, extractApiData } from "../index";
import type { ApiEnvelope } from "../types";
import { queryKeys } from "../../lib/query-keys";
import { getPersistedAuthToken } from "../../lib/auth-storage";

export type DisputeStatus = "Open" | "Under Review" | "Resolved" | "Rejected";

export type DisputeType = {
  id: string;
  trackingId: string;
  title: string;
  description: string;
  category: "delivery-delay" | "package-damage" | "wrong-delivery" | "payment-dispute";
  status: DisputeStatus;
  createdAt: string;
};

type ApiDispute = {
  id: string;
  trackingCode: string | null;
  reason: string;
  status: string;
  adminNote?: string | null;
  createdAt: string;
};

const mapStatus = (raw: string): DisputeStatus => {
  const s = raw.toLowerCase();
  if (s === "open") return "Open";
  if (s === "under_review" || s === "under review") return "Under Review";
  if (s === "resolved") return "Resolved";
  if (s === "rejected") return "Rejected";
  return "Open";
};

const mapRow = (row: ApiDispute): DisputeType => ({
  id: String(row.id),
  trackingId: row.trackingCode || "Unknown shipment",
  title: "Dispute",
  description: row.reason,
  category: "delivery-delay",
  status: mapStatus(row.status),
  createdAt: row.createdAt,
});

export const useDisputesPage = () => {
  return useQuery({
    queryKey: queryKeys.disputes.list(),
    queryFn: async () => {
      const res = await api.get<ApiEnvelope<ApiDispute[]>>("/api/disputes");
      const rows = extractApiData(res);
      return rows.map(mapRow);
    },
    enabled: typeof window !== "undefined" && !!getPersistedAuthToken(),
  });
};

export const useCreateDispute = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ trackingCode, reason }: { trackingCode: string; reason: string }) => {
      const res = await api.post<ApiEnvelope<ApiDispute>>("/api/disputes", {
        tracking_code: trackingCode,
        reason,
      });
      return mapRow(extractApiData(res));
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.disputes.all });
    },
  });
};
