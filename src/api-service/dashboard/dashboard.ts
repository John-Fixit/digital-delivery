import { useQuery } from "@tanstack/react-query";
import { api, extractApiData } from "../index";
import type { ApiEnvelope } from "../types";
import type { ShipmentType, TimelineType } from "../../utils/type-config";
import { queryKeys } from "../../lib/query-keys";
import { getPersistedAuthToken } from "../../lib/auth-storage";

export type ActionCenterItemType = {
  id: string;
  type: "release_payment" | "confirm_pickup";
  title: string;
  description: string;
  trackingId: string;
  primaryLabel: string;
  secondaryLabel: string;
};

export type DashboardUiDataType = {
  summary: {
    monthlyShipments: number;
    monthlyMomChangePct: number | null;
    successRatePct: number;
    avgDeliveryHours: number | null;
    avgDeliveryMomChangeMinutes: number | null;
  };
  actionCenter: {
    urgentActionsCount: number;
    items: ActionCenterItemType[];
    escrowWallet: {
      headlineTotal: number;
      lockedFunds: number;
      availableBalance: number;
    };
  };
  activeDeliveries: number;
  completedTrips: number;
  pendingShipments: number;
  completedShipments: number;
  totalShipments: number;
  recentShipments: ShipmentType[];
  ongoingShipments: ShipmentType[];
  currentOrderTimeline: TimelineType[];
  currentOrderTrackingId: string | null;
  currentOrderStatus: ShipmentType["status"] | null;
};

export const useDashboard = () => {
  return useQuery({
    queryKey: queryKeys.dashboard.all,
    queryFn: async () => {
      const res = await api.get<ApiEnvelope<DashboardUiDataType>>("/api/dashboard");
      return extractApiData(res);
    },
    enabled: typeof window !== "undefined" && !!getPersistedAuthToken(),
  });
};
