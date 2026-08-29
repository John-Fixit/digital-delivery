import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api, extractApiData } from "../index";
import type { ApiEnvelope } from "../types";
import type { AuthUser } from "../types";
import type { ShipmentType } from "../../utils/type-config";
import type { RiderProfileType } from "../riders/riders";
import { queryKeys } from "../../lib/query-keys";
import { getPersistedAuthToken } from "../../lib/auth-storage";

const hasToken = () => typeof window !== "undefined" && !!getPersistedAuthToken();

export type AdminOverviewType = {
  users: { total: number };
  riders: { total: number; pending: number; approved: number };
  shipments: {
    total: number;
    pending: number;
    inTransit: number;
    delivered: number;
    cancelled: number;
  };
  escrow: { held: number; released: number };
  wallets: { totalBalance: number };
  disputes: { open: number };
};

export type AdminRiderType = RiderProfileType & {
  user: { id: number; fullName: string; email: string } | null;
};

export type AdminWalletType = {
  id: number;
  balance: number;
  user: { id: number; fullName: string; email: string; role: string } | null;
};

export type AdminEscrowType = {
  id: string;
  amount: number;
  status: "held" | "released" | "refunded";
  releasedAt: string | null;
  createdAt: string;
  trackingCode: string | null;
  shipmentStatus: string | null;
};

export type AdminDisputeType = {
  id: string;
  trackingCode: string | null;
  reason: string;
  status: "open" | "under_review" | "resolved" | "rejected";
  adminNote: string | null;
  createdAt: string;
};

export const useAdminOverview = () =>
  useQuery({
    queryKey: queryKeys.admin.overview(),
    queryFn: async () => {
      const res = await api.get<ApiEnvelope<AdminOverviewType>>("/api/admin/overview");
      return extractApiData(res);
    },
    enabled: hasToken(),
  });

export const useAdminShipments = () =>
  useQuery({
    queryKey: queryKeys.admin.shipments(),
    queryFn: async () => {
      const res = await api.get<ApiEnvelope<ShipmentType[]>>("/api/admin/shipments");
      return extractApiData(res);
    },
    enabled: hasToken(),
  });

export const useAdminUsers = () =>
  useQuery({
    queryKey: queryKeys.admin.users(),
    queryFn: async () => {
      const res = await api.get<ApiEnvelope<AuthUser[]>>("/api/user");
      return extractApiData(res);
    },
    enabled: hasToken(),
  });

export const useAdminRiders = (status: string) =>
  useQuery({
    queryKey: queryKeys.admin.riders(status),
    queryFn: async () => {
      const res = await api.get<ApiEnvelope<AdminRiderType[]>>("/api/admin/riders", {
        params: status !== "all" ? { status } : undefined,
      });
      return extractApiData(res);
    },
    enabled: hasToken(),
  });

export const useVerifyRider = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      riderId,
      status,
    }: {
      riderId: string;
      status: "approved" | "rejected";
    }) => {
      const res = await api.patch<ApiEnvelope<RiderProfileType>>(
        `/api/riders/${riderId}/verify`,
        { status },
      );
      return extractApiData(res);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.admin.all });
    },
  });
};

export const useAdminWallets = () =>
  useQuery({
    queryKey: queryKeys.admin.wallets(),
    queryFn: async () => {
      const res = await api.get<ApiEnvelope<AdminWalletType[]>>("/api/admin/wallets");
      return extractApiData(res);
    },
    enabled: hasToken(),
  });

export const useAdminEscrow = (status: string) =>
  useQuery({
    queryKey: queryKeys.admin.escrow(status),
    queryFn: async () => {
      const res = await api.get<ApiEnvelope<AdminEscrowType[]>>("/api/admin/escrow", {
        params: status !== "all" ? { status } : undefined,
      });
      return extractApiData(res);
    },
    enabled: hasToken(),
  });

export const useAdminReleaseEscrow = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (trackingCode: string) => {
      const res = await api.post<ApiEnvelope<AdminEscrowType[]>>(
        `/api/admin/escrow/${trackingCode}/release`,
      );
      return extractApiData(res);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.admin.all });
    },
  });
};

export const useAdminRefundEscrow = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (trackingCode: string) => {
      const res = await api.post<ApiEnvelope<AdminEscrowType[]>>(
        `/api/admin/escrow/${trackingCode}/refund`,
      );
      return extractApiData(res);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.admin.all });
    },
  });
};

export const useAdminDisputes = () =>
  useQuery({
    queryKey: queryKeys.admin.disputes(),
    queryFn: async () => {
      const res = await api.get<ApiEnvelope<AdminDisputeType[]>>("/api/admin/disputes");
      return extractApiData(res);
    },
    enabled: hasToken(),
  });

export const useResolveDispute = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      disputeId,
      status,
      adminNote,
    }: {
      disputeId: string;
      status: "under_review" | "resolved" | "rejected";
      adminNote?: string;
    }) => {
      const res = await api.patch<ApiEnvelope<AdminDisputeType>>(
        `/api/admin/disputes/${disputeId}`,
        { status, admin_note: adminNote },
      );
      return extractApiData(res);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.admin.all });
    },
  });
};
