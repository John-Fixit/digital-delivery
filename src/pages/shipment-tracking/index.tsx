import { useEffect, useState } from "react";
import PageHeader from "../../components/shared/page-header/PageHeader";
import LoadingState from "../../components/shared/states/LoadingState";
import ErrorState from "../../components/shared/states/ErrorState";
import EmptyState from "../../components/shared/states/EmptyState";
import ShipmentTimeline from "../../components/core/shipment/shared/ShipmentTimeline";
import type { ShipmentType } from "../../utils/type-config";
import useDrawerStore from "../../hooks/use-drawer-store";
import useModalStore from "../../hooks/use-modal-store";
import { DRAWER_NAMES, MODAL_NAMES } from "../../lib/overlay-names";
import { useMyShipments } from "../../api-service/shipments/my-shipments";

const ShipmentTracking = () => {
  const { openDrawer } = useDrawerStore();
  const { openModal } = useModalStore();
  const [selectedTrackingId, setSelectedTrackingId] = useState("");

  const { data: shipments = [], isLoading, isError, error, refetch } = useMyShipments();

  useEffect(() => {
    if (shipments.length && !selectedTrackingId) {
      setSelectedTrackingId(shipments[0]?.trackingId ?? "");
    }
  }, [shipments, selectedTrackingId]);

  const errorMessage =
    isError && error instanceof Error ? error.message : "Could not load tracking board.";

  const selectedShipment: ShipmentType | null =
    shipments.find((item) => item.trackingId === selectedTrackingId) ?? null;

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <PageHeader
        title="Live Tracking Board"
        description="Monitor current shipments and their chain-of-custody events."
      />

      {isLoading ? (
        <LoadingState title="Loading tracking board" />
      ) : isError ? (
        <ErrorState description={errorMessage} onRetry={() => void refetch()} />
      ) : !selectedShipment ? (
        <EmptyState
          title="No shipments available"
          description="Create a shipment to start tracking your delivery activity."
        />
      ) : (
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          <section className="rounded-xl border border-border-light bg-card-light p-4 dark:border-border-dark dark:bg-background-dark-elevated">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark">
              Active Shipments
            </h2>
            <div className="space-y-2">
              {shipments.map((shipment) => (
                <button
                  type="button"
                  key={shipment.trackingId}
                  onClick={() => setSelectedTrackingId(shipment.trackingId)}
                  className={`w-full rounded-lg border px-3 py-3 text-left transition-colors ${
                    selectedTrackingId === shipment.trackingId
                      ? "border-primary bg-primary/10"
                      : "border-border-light hover:bg-slate-50 dark:border-border-dark dark:hover:bg-background-dark"
                  }`}
                >
                  <p className="text-sm font-semibold">{shipment.trackingId}</p>
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                    {shipment.from} to {shipment.to}
                  </p>
                </button>
              ))}
            </div>
          </section>

          <section className="space-y-5 rounded-xl border border-border-light bg-card-light p-6 xl:col-span-2 dark:border-border-dark dark:bg-background-dark-elevated">
            <div className="flex h-56 items-center justify-center rounded-xl border border-border-light bg-gradient-to-br from-slate-100 to-slate-200 dark:border-border-dark dark:from-background-dark dark:to-card-dark">
              <div className="text-center">
                <span className="material-symbols-outlined text-5xl text-primary">
                  location_on
                </span>
                <p className="mt-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  Live map integration placeholder
                </p>
              </div>
            </div>
            <ShipmentTimeline timeline={selectedShipment.timeline} />
            <div className="flex flex-wrap gap-2 pt-2">
              <button
                type="button"
                onClick={() =>
                  openDrawer(DRAWER_NAMES.SHIPMENT_DETAILS, {
                    data: { trackingId: selectedShipment.trackingId },
                    config: { size: "3xl", customWidth: "max-w-3xl" },
                  })
                }
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
              >
                Open full details drawer
              </button>
              <button
                type="button"
                onClick={() =>
                  openModal(MODAL_NAMES.CREATE_DISPUTE, {
                    data: { trackingId: selectedShipment.trackingId },
                    config: { size: "lg" },
                  })
                }
                className="rounded-lg border border-border-light px-4 py-2 text-sm font-semibold transition-colors hover:bg-slate-50 dark:border-border-dark dark:hover:bg-slate-800"
              >
                Raise dispute
              </button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ShipmentTracking;
