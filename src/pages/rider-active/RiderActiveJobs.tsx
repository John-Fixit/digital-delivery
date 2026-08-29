import PageHeader from "../../components/shared/page-header/PageHeader";
import Button from "../../components/shared/ui/button/Button";
import RiderVerificationGate from "../../components/core/rider/RiderVerificationGate";
import { useMyJobs, useMyRiderProfile, useUpdateJobStatus } from "../../api-service/riders/riders";
import { formatCurrency } from "../../utils/format-currency";
import { successToast, errorToast } from "../../lib/notification-toast";
import { getApiErrorMessage } from "../../api-service/utils/error";
import type { ShipmentType } from "../../utils/type-config";

const statusPill: Record<ShipmentType["status"], string> = {
  Pending: "bg-warning/10 text-warning",
  "In Transit": "bg-info/10 text-info",
  Delivered: "bg-success/10 text-success",
  Cancelled: "bg-danger/10 text-danger",
};

const RiderActiveJobs = () => {
  const { data: rider, isLoading: riderLoading } = useMyRiderProfile();
  const approved = rider?.verificationStatus === "approved";
  const jobs = useMyJobs(true, approved);
  const updateStatus = useUpdateJobStatus();

  if (riderLoading || !approved) {
    return <RiderVerificationGate rider={rider} isLoading={riderLoading} />;
  }

  const advance = async (trackingId: string, next: "in_transit" | "delivered") => {
    try {
      await updateStatus.mutateAsync({ trackingId, status: next });
      successToast(
        next === "delivered"
          ? "Marked delivered. The sender can now release your payout."
          : "Marked in transit.",
      );
    } catch (err) {
      errorToast(getApiErrorMessage(err, "Could not update this job."));
    }
  };

  return (
    <div className="p-8 max-w-350 w-full mx-auto">
      <PageHeader
        title="Active Tasks"
        description="Jobs you've accepted that are still in progress."
      />

      {jobs.isLoading ? (
        <p className="text-slate-500 text-sm">Loading…</p>
      ) : jobs.data && jobs.data.length > 0 ? (
        <div className="space-y-4">
          {jobs.data.map((job) => (
            <div
              key={job.trackingId}
              className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-primary uppercase tracking-wide">
                    {job.trackingId}
                  </span>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${statusPill[job.status]}`}
                  >
                    {job.status}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {job.from} → {job.to}
                </p>
                <p className="text-sm font-bold text-success">
                  {formatCurrency(job.pricing.serviceFee)}
                </p>
              </div>

              <div className="flex gap-3">
                {job.status === "Pending" ? (
                  <Button
                    onPress={() => advance(job.trackingId, "in_transit")}
                    isLoading={updateStatus.isPending}
                  >
                    Mark in transit
                  </Button>
                ) : job.status === "In Transit" ? (
                  <Button
                    onPress={() => advance(job.trackingId, "delivered")}
                    isLoading={updateStatus.isPending}
                  >
                    Mark delivered
                  </Button>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-slate-500 text-sm">
          No active tasks. Accept a job from Available Jobs to get started.
        </p>
      )}
    </div>
  );
};

export default RiderActiveJobs;
