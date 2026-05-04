import { useMemo } from "react";
import useDrawerStore from "../../../../hooks/use-drawer-store";
import ShipmentDetails from "../shipment-details/ShipmentDetails";
import LoadingState from "../../../shared/states/LoadingState";
import ErrorState from "../../../shared/states/ErrorState";
import EmptyState from "../../../shared/states/EmptyState";
import { useShipmentByTrackingId } from "../../../../api-service/shipments/shipment-detail";

type ShipmentDetailsPayload = {
  trackingId?: string;
};

const ShipmentDetailsDrawer = () => {
  const { data } = useDrawerStore();

  const trackingId = useMemo(() => {
    if (typeof data === "object" && data !== null && "trackingId" in data) {
      return (data as ShipmentDetailsPayload).trackingId ?? "";
    }
    return "";
  }, [data]);

  const { data: shipment, isLoading, isError, error, refetch } =
    useShipmentByTrackingId(trackingId || undefined);

  const errorMessage =
    isError && error instanceof Error ? error.message : "Could not load shipment details.";

  if (!trackingId) {
    return (
      <div className="p-4">
        <EmptyState
          title="No shipment selected"
          description="Choose a shipment from the list to see full details."
        />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="p-4">
        <LoadingState title="Loading shipment details" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-4">
        <ErrorState description={errorMessage} onRetry={() => void refetch()} />
      </div>
    );
  }

  if (!shipment) {
    return (
      <div className="p-4">
        <EmptyState
          title="Shipment not found"
          description="This tracking code may be invalid or you may need to sign in again."
        />
      </div>
    );
  }

  return <ShipmentDetails shipment={shipment} />;
};

export default ShipmentDetailsDrawer;
