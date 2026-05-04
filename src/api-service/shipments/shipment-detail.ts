import { useQuery } from "@tanstack/react-query";
import type { ShipmentType } from "../../utils/type-config";
import { api, extractApiData } from "../index";
import type { ApiEnvelope } from "../types";
import { queryKeys } from "../../lib/query-keys";

export const useShipmentByTrackingId = (trackingId: string | undefined) => {
  return useQuery({
    queryKey: queryKeys.shipments.detail(trackingId ?? ""),
    queryFn: async () => {
      const res = await api.get<ApiEnvelope<ShipmentType>>(
        `/api/shipments/${encodeURIComponent(trackingId ?? "")}`,
      );
      return extractApiData(res);
    },
    enabled:
      !!trackingId &&
      typeof window !== "undefined" &&
      !!localStorage.getItem("token"),
  });
};
