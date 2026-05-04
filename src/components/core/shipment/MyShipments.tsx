import { useMemo, useState } from "react";
import type { ShipmentType } from "../../../utils/type-config";
import PageHeader from "../../shared/page-header/PageHeader";
import Button from "../../shared/ui/button/Button";
import EmptyShipment from "./empty-shipment/EmptyShipment";
import ShipmentTabs from "./shiment-tabs/ShipmentTabs";
import ShipmentFilters from "./shipment-filter/ShipmentFilter";
import ShipmentTable from "./shipment-table/ShipmentTable";
import ErrorState from "../../shared/states/ErrorState";
import LoadingState from "../../shared/states/LoadingState";
import { useMyShipments } from "../../../api-service/shipments/my-shipments";
import useDrawerStore from "../../../hooks/use-drawer-store";
import { DRAWER_NAMES } from "../../../lib/overlay-names";
const MyShipments = () => {
  const { openDrawer } = useDrawerStore();
  const [statusFilter, setStatusFilter] = useState<"all" | ShipmentType["status"]>(
    "all",
  );
  const [activeTab, setActiveTab] = useState<
    "all" | "active" | "pending" | "delivered"
  >("all");

  const {
    data: shipments = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useMyShipments();

  const errorMessage = isError
    ? error instanceof Error
      ? error.message
      : "We could not fetch shipments right now."
    : "";

  const counts = useMemo(
    () => ({
      all: shipments.length,
      active: shipments.filter((shipment) => shipment.status === "In Transit")
        .length,
      pending: shipments.filter((shipment) => shipment.status === "Pending")
        .length,
      delivered: shipments.filter((shipment) => shipment.status === "Delivered")
        .length,
    }),
    [shipments],
  );

  const filteredShipments = useMemo(() => {
    return shipments.filter((shipment) => {
      const tabMatch =
        activeTab === "all"
          ? true
          : activeTab === "active"
            ? shipment.status === "In Transit"
            : activeTab === "pending"
              ? shipment.status === "Pending"
              : shipment.status === "Delivered";

      const statusMatch =
        statusFilter === "all" ? true : shipment.status === statusFilter;

      return tabMatch && statusMatch;
    });
  }, [activeTab, shipments, statusFilter]);

  return (
    <main className="flex w-full flex-col lg:flex-row">
      <div className="flex-1 flex flex-col min-w-0 p-4 sm:p-6 lg:p-8">
        <div className="w-full mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <PageHeader
                title="My Shipments"
                description="Track your delivery progress and escrow status."
              />
              <Button
                onPress={() =>
                  openDrawer(DRAWER_NAMES.CREATE_SHIPMENT, {
                    config: { size: "4xl", customWidth: "max-w-4xl" },
                  })
                }
              >
                <span className="material-symbols-outlined text-lg">add</span>
                New Shipment
              </Button>
            </div>
            <ShipmentTabs
              activeTab={activeTab}
              counts={counts}
              onTabChange={setActiveTab}
            />
            <ShipmentFilters
              statusFilter={statusFilter}
              onStatusChange={setStatusFilter}
            />

            {isLoading ? (
              <LoadingState title="Loading shipments" />
            ) : isError ? (
              <ErrorState description={errorMessage} onRetry={() => void refetch()} />
            ) : filteredShipments.length ? (
              <ShipmentTable
                shipments={filteredShipments}
                onViewShipment={(trackingId) =>
                  openDrawer(DRAWER_NAMES.SHIPMENT_DETAILS, {
                    data: { trackingId },
                    config: { size: "3xl", customWidth: "max-w-3xl" },
                  })
                }
              />
            ) : (
              <EmptyShipment
                onCreate={() =>
                  openDrawer(DRAWER_NAMES.CREATE_SHIPMENT, {
                    config: { size: "4xl", customWidth: "max-w-4xl" },
                  })
                }
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyShipments;
