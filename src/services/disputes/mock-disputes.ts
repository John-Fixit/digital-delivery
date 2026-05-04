export type DisputeStatus = "Open" | "Under Review" | "Resolved" | "Rejected";

export type DisputeType = {
  id: string;
  trackingId: string;
  title: string;
  description: string;
  category: "delivery-delay" | "package-damage" | "wrong-delivery" | "payment-dispute";
  status: DisputeStatus;
  createdAt: string;
};

export const mockDisputes: DisputeType[] = [
  {
    id: "DSP-1021",
    trackingId: "TRK-8902",
    title: "Delayed final handoff",
    description: "Package has been in transit longer than promised ETA.",
    category: "delivery-delay",
    status: "Open",
    createdAt: "Apr 10, 2026",
  },
  {
    id: "DSP-1022",
    trackingId: "TRK-7741",
    title: "Wrong recipient contact",
    description: "Rider could not reach recipient due to mismatched phone details.",
    category: "wrong-delivery",
    status: "Under Review",
    createdAt: "Apr 9, 2026",
  },
  {
    id: "DSP-1023",
    trackingId: "TRK-6652",
    title: "Escrow release conflict",
    description: "Recipient marked item incomplete after delivery confirmation.",
    category: "payment-dispute",
    status: "Resolved",
    createdAt: "Apr 7, 2026",
  },
];
