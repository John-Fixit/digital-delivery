import { useNavigate } from "react-router-dom";
import { useDashboard } from "../../../../api-service/dashboard/dashboard";

const badgeColor: Record<string, string> = {
  Pending: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  "In Transit": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Delivered: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Cancelled: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
};

const RecentShipmentTable = () => {
  const { data, isLoading } = useDashboard();
  const navigate = useNavigate();
  const shipments = data?.recentShipments ?? [];

  return (
    <div className="lg:col-span-2 flex flex-col bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-border-light dark:border-border-dark flex justify-between items-center">
        <h3 className="font-bold text-slate-800 dark:text-white">Recent Shipments</h3>
        <button
          onClick={() => navigate("/home/shipment")}
          className="text-primary text-xs font-semibold hover:underline"
        >
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-slate-50 dark:bg-slate-800/50">
            <tr>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                Tracking ID
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                Recipient
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                Status
              </th>
              <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {isLoading ? (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-sm text-slate-500">
                  Loading…
                </td>
              </tr>
            ) : shipments.length > 0 ? (
              shipments.map((s) => (
                <tr
                  key={s.trackingId}
                  className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <td className="px-6 py-4 text-sm font-medium text-primary">
                    {s.trackingId}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                    {s.recipient.name}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${badgeColor[s.status] || badgeColor.Pending}`}
                    >
                      {s.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {new Date(s.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-sm text-slate-500">
                  No shipments yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentShipmentTable;
