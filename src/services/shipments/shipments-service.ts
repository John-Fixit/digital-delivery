import type { ShipmentType } from "../../utils/type-config";
import { mockShipments } from "./mock-shipments";

const MOCK_DELAY_MS = 500;

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

export const shipmentsService = {
  async getShipments(): Promise<ShipmentType[]> {
    await wait(MOCK_DELAY_MS);
    return mockShipments;
  },

  async getShipmentByTrackingId(
    trackingId: string,
  ): Promise<ShipmentType | undefined> {
    await wait(MOCK_DELAY_MS);
    return mockShipments.find((shipment) => shipment.trackingId === trackingId);
  },
};
