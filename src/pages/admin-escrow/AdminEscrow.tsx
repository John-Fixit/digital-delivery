import { useState } from "react";
import PageHeader from "../../components/shared/page-header/PageHeader";
import Button from "../../components/shared/ui/button/Button";
import {
  useAdminEscrow,
  useAdminReleaseEscrow,
  useAdminRefundEscrow,
} from "../../api-service/admin/admin";
import { formatCurrency } from "../../utils/format-currency";
import { successToast, errorToast } from "../../lib/notification-toast";
import { getApiErrorMessage } from "../../api-service/utils/error";

const tabs = ["held", "released", "refunded", "all"] as const;

const statusColor: Record<string, string> = {
  held: "bg-warning/10 text-warning",
  released: "bg-success/10 text-success",
  refunded: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300",
};

const AdminEscrow = () => {
  const [tab, setTab] = useState<(typeof tabs)[number]>("held");
  const { data, isLoading } = useAdminEscrow(tab);
  const release = useAdminReleaseEscrow();
  const refund = useAdminRefundEscrow();

  const onRelease = async (trackingCode: string) => {
    try {
      await release.mutateAsync(trackingCode);
      successToast("Escrow released to rider.");
    } catch (err) {
      errorToast(getApiErrorMessage(err, "Could not release this escrow."));
    }
  };

  const onRefund = async (trackingCode: string) => {
    try {
      await refund.mutateAsync(trackingCode);
      successToast("Escrow refunded to sender; shipment cancelled.");
    } catch (err) {
      errorToast(getApiErrorMessage(err, "Could not refund this escrow."));
    }
  };

  return (
    <div className="p-8 max-w-350 w-full mx-auto">
      <PageHeader
        title="Escrow"
        description="Manual override for edge cases — normal flow releases automatically when the sender confirms delivery."
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

      <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500">
              <tr>
                <th className="text-left px-6 py-3 font-medium">Tracking ID</th>
                <th className="text-left px-6 py-3 font-medium">Shipment status</th>
                <th className="text-left px-6 py-3 font-medium">Escrow status</th>
                <th className="text-right px-6 py-3 font-medium">Amount</th>
                <th className="text-right px-6 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light dark:divide-border-dark">
              {isLoading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                    Loading…
                  </td>
                </tr>
              ) : data && data.length > 0 ? (
                data.map((e) => (
                  <tr key={e.id}>
                    <td className="px-6 py-4 font-bold text-primary">{e.trackingCode}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                      {e.shipmentStatus}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full capitalize ${statusColor[e.status]}`}
                      >
                        {e.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-bold">
                      {formatCurrency(e.amount)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {e.status === "held" && e.trackingCode ? (
                        <div className="flex justify-end gap-2">
                          <Button
                            size="sm"
                            onPress={() => onRelease(e.trackingCode as string)}
                            isLoading={release.isPending}
                          >
                            Release
                          </Button>
                          <Button
                            size="sm"
                            variant="bordered"
                            color="danger"
                            onPress={() => onRefund(e.trackingCode as string)}
                            isLoading={refund.isPending}
                          >
                            Refund
                          </Button>
                        </div>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                    No escrow rows in this category.
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

export default AdminEscrow;
