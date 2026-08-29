export const DRAWER_NAMES = {
  CREATE_SHIPMENT: "create-shipment",
  SHIPMENT_DETAILS: "shipment-details",
  ESCROW_MILESTONES: "escrow-milestones",
} as const;

export const MODAL_NAMES = {
  APP_NOTICE: "app-notice",
  CREATE_DISPUTE: "create-dispute",
  NOTIFICATION_DETAILS: "notification-details",
  MILESTONE_APPROVAL: "milestone-approval",
  NOTIFICATION_PREFERENCES: "notification-preferences",
  ADD_FUNDS: "add-funds",
} as const;

export type DrawerName = (typeof DRAWER_NAMES)[keyof typeof DRAWER_NAMES];
export type ModalName = (typeof MODAL_NAMES)[keyof typeof MODAL_NAMES];
