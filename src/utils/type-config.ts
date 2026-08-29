export type TimelineType = {
  current: boolean;
  completed: boolean;
  title: string;
  description: string;
};

export type ShipmentType = {
  trackingId: string;
  itemDescription: string;
  timeline: TimelineType[];
  photos: string[];
  payment: "Escrowed" | "Unpaid" | "Released";
  pricing: {
    deliveryFee: number;
    insurance: number;
    serviceFee: number;
    total: number;
  };
  recipient: {
    name: string;
    phone: string | number;
  };
  from: string;
  to: string;
  rider: {
    avatar: string;
    name: string;
  };
  vehicleType: "bike" | "van" | "truck";
  status: "In Transit" | "Pending" | "Delivered" | "Cancelled";
  createdAt: string;
};
