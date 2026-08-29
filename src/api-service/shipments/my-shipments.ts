import { useQuery } from "@tanstack/react-query";
import type { ShipmentType } from "../../utils/type-config";
import { api, extractApiData } from "../index";
import type { ApiEnvelope } from "../types";
import { queryKeys } from "../../lib/query-keys";
import { getPersistedAuthToken } from "../../lib/auth-storage";

export const useMyShipments = () => {
  return useQuery({
    queryKey: queryKeys.shipments.list(),
    queryFn: async () => {
      const res = await api.get<ApiEnvelope<ShipmentType[]>>("/api/shipments");
      return extractApiData(res);
    },
    enabled: typeof window !== "undefined" && !!getPersistedAuthToken(),
  });
};
