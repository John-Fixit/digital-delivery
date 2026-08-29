import { useQuery } from "@tanstack/react-query";
import type {
  DisputeStatus,
  DisputeType,
} from "../../services/disputes/mock-disputes";
import { api, extractApiData } from "../index";
import type { ApiEnvelope } from "../types";
import { queryKeys } from "../../lib/query-keys";
import { getPersistedAuthToken } from "../../lib/auth-storage";

type ApiDispute = {
  id: string;
  delivery_id: string;
  reason: string;
  status: string;
  admin_note?: string | null;
  created_at: string;
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
  trackingId: `Delivery ${row.delivery_id}`,
  title: "Dispute",
  description: row.reason,
  category: "delivery-delay",
  status: mapStatus(row.status),
  createdAt: row.created_at,
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
