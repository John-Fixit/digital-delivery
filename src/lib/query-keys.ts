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
    preferences: () => [...queryKeys.notifications.all, "preferences"] as const,
  },
  disputes: {
    all: ["disputes"] as const,
    list: () => [...queryKeys.disputes.all, "list"] as const,
  },
  wallet: {
    all: ["wallet"] as const,
    summary: () => [...queryKeys.wallet.all, "summary"] as const,
  },
  dashboard: {
    all: ["dashboard"] as const,
  },
  riders: {
    all: ["riders"] as const,
    me: () => [...queryKeys.riders.all, "me"] as const,
    available: () => [...queryKeys.riders.all, "available"] as const,
    myJobs: (active: boolean) => [...queryKeys.riders.all, "jobs", { active }] as const,
    earnings: () => [...queryKeys.riders.all, "earnings"] as const,
  },
  admin: {
    all: ["admin"] as const,
    overview: () => [...queryKeys.admin.all, "overview"] as const,
    shipments: () => [...queryKeys.admin.all, "shipments"] as const,
    users: () => [...queryKeys.admin.all, "users"] as const,
    riders: (status: string) => [...queryKeys.admin.all, "riders", status] as const,
    wallets: () => [...queryKeys.admin.all, "wallets"] as const,
    escrow: (status: string) => [...queryKeys.admin.all, "escrow", status] as const,
    disputes: () => [...queryKeys.admin.all, "disputes"] as const,
  },
};
