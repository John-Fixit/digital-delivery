import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { ShipmentType } from "../../utils/type-config";
import { api, extractApiData } from "../index";
import type { ApiEnvelope } from "../types";
import { queryKeys } from "../../lib/query-keys";

/** Same field names as `CreateShipment` wizard (backend expects these keys) */
export type CreateShipmentPayload = {
  senderName: string;
  senderPhone: string;
  pickupAddress: string;
  recipientName: string;
  recipientPhone: string;
  deliveryAddress: string;
  category: string;
  weight: number;
  value: number;
  description: string;
  deliveryType: "standard" | "express";
};

export const useCreateShipment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: CreateShipmentPayload) => {
      const res = await api.post<ApiEnvelope<ShipmentType>>(
        "/api/shipments",
        payload,
      );
      return extractApiData(res);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.shipments.list() });
      void queryClient.invalidateQueries({ queryKey: queryKeys.notifications.list() });
    },
  });
};
