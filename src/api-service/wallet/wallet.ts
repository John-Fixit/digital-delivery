import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api, extractApiData } from "../index";
import type { ApiEnvelope } from "../types";
import { queryKeys } from "../../lib/query-keys";
import { getPersistedAuthToken } from "../../lib/auth-storage";

export type WalletTransactionType = {
  id: string;
  amount: number;
  type: "credit" | "debit";
  reference: string;
  createdAt: string;
};

export type WalletSummaryType = {
  availableBalance: number;
  lockedFunds: number;
  lockedEscrowCount: number;
  headlineTotal: number;
  transactions: WalletTransactionType[];
};

export const useWallet = () => {
  return useQuery({
    queryKey: queryKeys.wallet.summary(),
    queryFn: async () => {
      const res = await api.get<ApiEnvelope<WalletSummaryType>>("/api/wallet");
      return extractApiData(res);
    },
    enabled: typeof window !== "undefined" && !!getPersistedAuthToken(),
  });
};

export const useTopUpWallet = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (amount: number) => {
      const res = await api.post<ApiEnvelope<WalletSummaryType>>("/api/wallet/topup", {
        amount,
      });
      return extractApiData(res);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.wallet.all });
      void queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
    },
  });
};

export const useReleaseEscrow = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (trackingId: string) => {
      const res = await api.post<ApiEnvelope<WalletSummaryType>>(
        `/api/shipments/${trackingId}/release`,
      );
      return extractApiData(res);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.wallet.all });
      void queryClient.invalidateQueries({ queryKey: queryKeys.dashboard.all });
      void queryClient.invalidateQueries({ queryKey: queryKeys.shipments.all });
    },
  });
};
