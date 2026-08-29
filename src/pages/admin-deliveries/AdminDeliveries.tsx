import PageHeader from "../../components/shared/page-header/PageHeader";
import { useAdminShipments } from "../../api-service/admin/admin";
import { formatCurrency } from "../../utils/format-currency";
import type { ShipmentType } from "../../utils/type-config";

const statusPill: Record<string, string> = {
  Pending: "bg-warning/10 text-warning",
  "In Transit": "bg-info/10 text-info",
  Delivered: "bg-success/10 text-success",
  Cancelled: "bg-danger/10 text-danger",
};

const AdminDeliveries = () => {
  const { data, isLoading } = useAdminShipments();

  return (
    <div className="p-8 max-w-350 w-full mx-auto">
      <PageHeader title="Deliveries" description="Every shipment on the platform." />

      <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500">
              <tr>
                <th className="text-left px-6 py-3 font-medium">Tracking ID</th>
                <th className="text-left px-6 py-3 font-medium">Route</th>
                <th className="text-left px-6 py-3 font-medium">Rider</th>
                <th className="text-left px-6 py-3 font-medium">Status</th>
                <th className="text-left px-6 py-3 font-medium">Payment</th>
                <th className="text-right px-6 py-3 font-medium">Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light dark:divide-border-dark">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                    Loading…
                  </td>
                </tr>
              ) : data && data.length > 0 ? (
                data.map((s: ShipmentType) => (
                  <tr key={s.trackingId}>
                    <td className="px-6 py-4 font-bold text-primary">{s.trackingId}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                      {s.from} → {s.to}
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                      {s.rider?.name || "Unassigned"}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full ${statusPill[s.status] || "bg-slate-100 text-slate-600"}`}
                      >
                        {s.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{s.payment}</td>
                    <td className="px-6 py-4 text-right font-bold">
                      {formatCurrency(s.pricing.serviceFee)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-slate-500">
                    No shipments yet.
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

export default AdminDeliveries;
