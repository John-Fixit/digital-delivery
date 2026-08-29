import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api, extractApiData } from "../index";
import type { ApiEnvelope } from "../types";
import type { ShipmentType } from "../../utils/type-config";
import { queryKeys } from "../../lib/query-keys";
import { getPersistedAuthToken } from "../../lib/auth-storage";

export type RiderProfileType = {
  id: string;
  fullName: string;
  phone: string;
  vehicleType: "bike" | "van" | "truck";
  availabilityStatus: "available" | "unavailable";
  verificationStatus: "pending" | "approved" | "rejected";
  createdAt: string;
};

export type RiderApplicationPayload = {
  full_name: string;
  phone: string;
  vehicle_type: "bike" | "van" | "truck";
};

export type RiderEarningsType = {
  totalEarned: number;
  completedDeliveries: number;
  recentDeliveries: ShipmentType[];
};

const hasToken = () => typeof window !== "undefined" && !!getPersistedAuthToken();

export const useMyRiderProfile = () => {
  return useQuery({
    queryKey: queryKeys.riders.me(),
    queryFn: async () => {
      const res = await api.get<ApiEnvelope<RiderProfileType | null>>("/api/riders/me");
      return extractApiData(res);
    },
    enabled: hasToken(),
  });
};

export const useApplyAsRider = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: RiderApplicationPayload) => {
      const res = await api.post<ApiEnvelope<RiderProfileType>>("/api/riders/apply", payload);
      return extractApiData(res);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.riders.all });
    },
  });
};

export const useUpdateRiderAvailability = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (status: "available" | "unavailable") => {
      const res = await api.patch<ApiEnvelope<RiderProfileType>>("/api/riders/me/availability", {
        status,
      });
      return extractApiData(res);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.riders.me() });
    },
  });
};

export const useAvailableJobs = (enabled: boolean) => {
  return useQuery({
    queryKey: queryKeys.riders.available(),
    queryFn: async () => {
      const res = await api.get<ApiEnvelope<ShipmentType[]>>("/api/riders/jobs/available");
      return extractApiData(res);
    },
    enabled: hasToken() && enabled,
  });
};

export const useMyJobs = (active: boolean, enabled: boolean) => {
  return useQuery({
    queryKey: queryKeys.riders.myJobs(active),
    queryFn: async () => {
      const res = await api.get<ApiEnvelope<ShipmentType[]>>("/api/riders/jobs", {
        params: active ? { active: "true" } : undefined,
      });
      return extractApiData(res);
    },
    enabled: hasToken() && enabled,
  });
};

export const useAcceptJob = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (trackingId: string) => {
      const res = await api.post<ApiEnvelope<ShipmentType>>(
        `/api/riders/jobs/${trackingId}/accept`,
      );
      return extractApiData(res);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.riders.all });
    },
  });
};

export const useUpdateJobStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      trackingId,
      status,
    }: {
      trackingId: string;
      status: "in_transit" | "delivered";
    }) => {
      const res = await api.patch<ApiEnvelope<ShipmentType>>(
        `/api/riders/jobs/${trackingId}/status`,
        { status },
      );
      return extractApiData(res);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.riders.all });
    },
  });
};

export const useRiderEarnings = (enabled: boolean) => {
  return useQuery({
    queryKey: queryKeys.riders.earnings(),
    queryFn: async () => {
      const res = await api.get<ApiEnvelope<RiderEarningsType>>("/api/riders/earnings");
      return extractApiData(res);
    },
    enabled: hasToken() && enabled,
  });
};
