import PageHeader from "../../components/shared/page-header/PageHeader";
import Button from "../../components/shared/ui/button/Button";
import RiderVerificationGate from "../../components/core/rider/RiderVerificationGate";
import { useAcceptJob, useAvailableJobs, useMyRiderProfile } from "../../api-service/riders/riders";
import { formatCurrency } from "../../utils/format-currency";
import { successToast, errorToast } from "../../lib/notification-toast";
import { getApiErrorMessage } from "../../api-service/utils/error";

const RiderJobs = () => {
  const { data: rider, isLoading: riderLoading } = useMyRiderProfile();
  const approved = rider?.verificationStatus === "approved";
  const jobs = useAvailableJobs(approved);
  const acceptJob = useAcceptJob();

  if (riderLoading || !approved) {
    return <RiderVerificationGate rider={rider} isLoading={riderLoading} />;
  }

  const onAccept = async (trackingId: string) => {
    try {
      await acceptJob.mutateAsync(trackingId);
      successToast("Job accepted — check Active Tasks to get started.");
    } catch (err) {
      errorToast(getApiErrorMessage(err, "Could not accept this job."));
    }
  };

  return (
    <div className="p-8 max-w-350 w-full mx-auto">
      <PageHeader
        title="Available Jobs"
        description="Unassigned deliveries near you. Accept one to add it to your active tasks."
      />

      {jobs.isLoading ? (
        <p className="text-slate-500 text-sm">Loading jobs…</p>
      ) : jobs.data && jobs.data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.data.map((job) => (
            <div
              key={job.trackingId}
              className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl p-6 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary uppercase tracking-wide">
                  {job.trackingId}
                </span>
                <span className="text-sm font-bold text-success">
                  {formatCurrency(job.pricing.serviceFee)}
                </span>
              </div>
              <div className="space-y-1 text-sm">
                <p className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <span className="material-symbols-outlined text-base text-primary">
                    trip_origin
                  </span>
                  {job.from}
                </p>
                <p className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                  <span className="material-symbols-outlined text-base text-danger">
                    location_on
                  </span>
                  {job.to}
                </p>
              </div>
              <p className="text-sm text-slate-500">{job.itemDescription}</p>
              <Button
                fullWidth
                onPress={() => onAccept(job.trackingId)}
                isLoading={acceptJob.isPending}
              >
                Accept job
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-slate-500 text-sm">No jobs available right now — check back soon.</p>
      )}
    </div>
  );
};

export default RiderJobs;
