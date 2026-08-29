import PageHeader from "../../components/shared/page-header/PageHeader";
import RiderVerificationGate from "../../components/core/rider/RiderVerificationGate";
import { useMyRiderProfile, useRiderEarnings } from "../../api-service/riders/riders";
import { formatCurrency } from "../../utils/format-currency";

const RiderEarnings = () => {
  const { data: rider, isLoading: riderLoading } = useMyRiderProfile();
  const approved = rider?.verificationStatus === "approved";
  const earnings = useRiderEarnings(approved);

  if (riderLoading || !approved) {
    return <RiderVerificationGate rider={rider} isLoading={riderLoading} />;
  }

  return (
    <div className="p-8 max-w-350 w-full mx-auto">
      <PageHeader title="Earnings" description="Your completed-delivery payout history." />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl p-6">
          <p className="text-sm text-slate-500 font-medium mb-2">Total earned</p>
          <p className="text-3xl font-black">
            {formatCurrency(earnings.data?.totalEarned ?? 0)}
          </p>
        </div>
        <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl p-6">
          <p className="text-sm text-slate-500 font-medium mb-2">Completed deliveries</p>
          <p className="text-3xl font-black">{earnings.data?.completedDeliveries ?? 0}</p>
        </div>
      </div>

      <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500">
              <tr>
                <th className="text-left px-6 py-3 font-medium">Tracking ID</th>
                <th className="text-left px-6 py-3 font-medium">Route</th>
                <th className="text-right px-6 py-3 font-medium">Payout</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light dark:divide-border-dark">
              {earnings.data?.recentDeliveries.length ? (
                earnings.data.recentDeliveries.map((d) => (
                  <tr key={d.trackingId}>
                    <td className="px-6 py-4 font-bold text-primary">{d.trackingId}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                      {d.from} → {d.to}
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-success">
                      {formatCurrency(d.pricing.serviceFee)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="px-6 py-8 text-center text-slate-500">
                    No completed deliveries yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RiderEarnings;
