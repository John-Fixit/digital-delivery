export const queryKeys = {
  auth: {
    all: ["auth"] as const,
    me: () => [...queryKeys.auth.all, "me"] as const,
  },
  shipments: {
    all: ["shipments"] as const,
    list: () => [...queryKeys.shipments.all, "list"] as const,
    detail: (trackingId: string) =>
      [...queryKeys.shipments.all, "detail", trackingId] as const,
  },
  notifications: {
    all: ["notifications"] as const,
    list: () => [...queryKeys.notifications.all, "list"] as const,
  },
  disputes: {
    all: ["disputes"] as const,
    list: () => [...queryKeys.disputes.all, "list"] as const,
  },
};
