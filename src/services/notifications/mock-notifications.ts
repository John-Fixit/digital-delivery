export type NotificationType = {
  id: string;
  title: string;
  message: string;
  time: string;
  type: "escrow" | "shipment" | "alert";
  read: boolean;
  trackingId?: string;
};

export const mockNotifications: NotificationType[] = [
  {
    id: "NTF-1",
    title: "Escrow milestone reached",
    message:
      "Shipment TRK-8902 has reached hub verification. Review milestone release.",
    time: "2 mins ago",
    type: "escrow",
    read: false,
    trackingId: "TRK-8902",
  },
  {
    id: "NTF-2",
    title: "Delivery status updated",
    message: "TRK-7741 is awaiting rider assignment in Ikeja.",
    time: "15 mins ago",
    type: "shipment",
    read: false,
    trackingId: "TRK-7741",
  },
  {
    id: "NTF-3",
    title: "Action required",
    message:
      "A recipient reported an issue on TRK-6652. Check dispute details and respond.",
    time: "1 hour ago",
    type: "alert",
    read: true,
    trackingId: "TRK-6652",
  },
];
