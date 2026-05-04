import { useMemo, useState } from "react";
import PageHeader from "../../components/shared/page-header/PageHeader";
import LoadingState from "../../components/shared/states/LoadingState";
import ErrorState from "../../components/shared/states/ErrorState";
import EmptyState from "../../components/shared/states/EmptyState";
import type {
  DisputeStatus,
  DisputeType,
} from "../../services/disputes/mock-disputes";
import useModalStore from "../../hooks/use-modal-store";
import useDrawerStore from "../../hooks/use-drawer-store";
import { DRAWER_NAMES, MODAL_NAMES } from "../../lib/overlay-names";
import { useDisputesPage } from "../../api-service/disputes/disputes-page";

const getNextStatus = (status: DisputeStatus): DisputeStatus => {
  if (status === "Open") return "Under Review";
  if (status === "Under Review") return "Resolved";
  return "Open";
};

const statusColorMap: Record<DisputeStatus, string> = {
  Open: "bg-warning-bg text-warning",
  "Under Review": "bg-info-bg text-info",
  Resolved: "bg-success-bg text-success",
  Rejected: "bg-danger-bg text-danger",
};

const DisputesPage = () => {
  const { openModal } = useModalStore();
  const { openDrawer } = useDrawerStore();
  const [statusFilter, setStatusFilter] = useState<"All" | DisputeStatus>("All");
  const [localOverrides, setLocalOverrides] = useState<Record<string, DisputeStatus>>({});

  const { data: disputes = [], isLoading, isError, error, refetch } = useDisputesPage();

  const errorMessage =
    isError && error instanceof Error ? error.message : "Could not load disputes.";

  const mergedDisputes = useMemo(() => {
    return disputes.map((d) => ({
      ...d,
      status: localOverrides[d.id] ?? d.status,
    }));
  }, [disputes, localOverrides]);

  const filteredDisputes = useMemo(() => {
    if (statusFilter === "All") {
      return mergedDisputes;
    }
    return mergedDisputes.filter((item) => item.status === statusFilter);
  }, [mergedDisputes, statusFilter]);

  const updateStatus = (id: string, current: DisputeStatus) => {
    setLocalOverrides((prev) => ({ ...prev, [id]: getNextStatus(current) }));
  };

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <PageHeader
          title="Dispute History"
          description="Track all reported issues and move them through resolution stages."
        />
        <button
          type="button"
          onClick={() =>
            openModal(MODAL_NAMES.CREATE_DISPUTE, {
              config: { size: "lg" },
            })
          }
          className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover"
        >
          Raise new dispute
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {(["All", "Open", "Under Review", "Resolved", "Rejected"] as const).map((status) => (
          <button
            key={status}
            type="button"
            onClick={() => setStatusFilter(status)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
              statusFilter === status
                ? "bg-primary text-white"
                : "bg-slate-100 text-text-secondary-light dark:bg-slate-800 dark:text-text-secondary-dark"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {isLoading ? (
        <LoadingState title="Loading disputes" />
      ) : isError ? (
        <ErrorState description={errorMessage} onRetry={() => void refetch()} />
      ) : !filteredDisputes.length ? (
        <EmptyState
          title="No disputes found"
          description="Try another filter or create a new dispute case."
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {filteredDisputes.map((dispute: DisputeType) => (
            <div
              key={dispute.id}
              className="rounded-xl border border-border-light bg-card-light p-4 dark:border-border-dark dark:bg-background-dark-elevated"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-sm font-semibold">
                    {dispute.title} ({dispute.id})
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    {dispute.description}
                  </p>
                  <p className="mt-2 text-xs text-text-secondary-light dark:text-text-secondary-dark">
                    Tracking: {dispute.trackingId} - Created: {dispute.createdAt}
                  </p>
                </div>
                <span
                  className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusColorMap[dispute.status]}`}
                >
                  {dispute.status}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => updateStatus(dispute.id, dispute.status)}
                  className="rounded-md border border-border-light px-3 py-1.5 text-xs font-semibold hover:bg-slate-50 dark:border-border-dark dark:hover:bg-slate-800"
                >
                  Move to {getNextStatus(dispute.status)}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    openDrawer(DRAWER_NAMES.SHIPMENT_DETAILS, {
                      data: { trackingId: dispute.trackingId },
                      config: { size: "3xl", customWidth: "max-w-3xl" },
                    })
                  }
                  className="rounded-md border border-border-light px-3 py-1.5 text-xs font-semibold hover:bg-slate-50 dark:border-border-dark dark:hover:bg-slate-800"
                >
                  Open shipment drawer
                </button>
                <button
                  type="button"
                  onClick={() =>
                    openModal(MODAL_NAMES.NOTIFICATION_DETAILS, {
                      data: {
                        title: `Dispute ${dispute.id}`,
                        message: dispute.description,
                        time: dispute.createdAt,
                        type: dispute.status,
                      },
                      config: { size: "md" },
                    })
                  }
                  className="rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-white hover:bg-primary-hover"
                >
                  View workflow details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DisputesPage;
