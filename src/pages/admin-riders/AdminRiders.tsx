import { useState } from "react";
import PageHeader from "../../components/shared/page-header/PageHeader";
import Button from "../../components/shared/ui/button/Button";
import { useAdminRiders, useVerifyRider } from "../../api-service/admin/admin";
import { successToast, errorToast } from "../../lib/notification-toast";
import { getApiErrorMessage } from "../../api-service/utils/error";

const tabs = ["pending", "approved", "rejected", "all"] as const;

const verificationColor: Record<string, string> = {
  pending: "bg-warning/10 text-warning",
  approved: "bg-success/10 text-success",
  rejected: "bg-danger/10 text-danger",
};

const AdminRiders = () => {
  const [tab, setTab] = useState<(typeof tabs)[number]>("pending");
  const { data, isLoading } = useAdminRiders(tab);
  const verifyRider = useVerifyRider();

  const onVerify = async (riderId: string, status: "approved" | "rejected") => {
    try {
      await verifyRider.mutateAsync({ riderId, status });
      successToast(status === "approved" ? "Rider approved." : "Rider rejected.");
    } catch (err) {
      errorToast(getApiErrorMessage(err, "Could not update this rider."));
    }
  };

  return (
    <div className="p-8 max-w-350 w-full mx-auto">
      <PageHeader
        title="Riders"
        description="Verify rider applications before they can accept jobs."
      />

      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold capitalize ${
              tab === t
                ? "bg-primary text-white"
                : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {isLoading ? (
        <p className="text-slate-500 text-sm">Loading…</p>
      ) : data && data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((rider) => (
            <div
              key={rider.id}
              className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl p-6 space-y-3"
            >
              <div className="flex items-center justify-between">
                <p className="font-bold">{rider.fullName}</p>
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-full capitalize ${verificationColor[rider.verificationStatus]}`}
                >
                  {rider.verificationStatus}
                </span>
              </div>
              <div className="text-sm text-slate-500 space-y-1">
                <p>{rider.user?.email}</p>
                <p>{rider.phone}</p>
                <p className="capitalize">Vehicle: {rider.vehicleType}</p>
              </div>
              {rider.verificationStatus === "pending" ? (
                <div className="flex gap-3 pt-2">
                  <Button
                    fullWidth
                    onPress={() => onVerify(rider.id, "approved")}
                    isLoading={verifyRider.isPending}
                  >
                    Approve
                  </Button>
                  <Button
                    fullWidth
                    variant="bordered"
                    color="danger"
                    onPress={() => onVerify(rider.id, "rejected")}
                    isLoading={verifyRider.isPending}
                  >
                    Reject
                  </Button>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-slate-500 text-sm">No riders in this category.</p>
      )}
    </div>
  );
};

export default AdminRiders;
