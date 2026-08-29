import { useNavigate } from "react-router-dom";
import { useDashboard } from "../../../../api-service/dashboard/dashboard";

const badgeColor: Record<string, string> = {
  Pending: "bg-orange-50 text-orange-600",
  "In Transit": "bg-blue-50 text-blue-600",
  Delivered: "bg-green-50 text-green-600",
  Cancelled: "bg-red-50 text-red-600",
};

const OngoingShipment = () => {
  const { data, isLoading } = useDashboard();
  const navigate = useNavigate();
  const shipments = data?.ongoingShipments ?? [];

  return (
    <div className="bg-card-light dark:bg-card-dark rounded-2xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-default-100 flex justify-between items-center">
        <h3 className="font-bold text-default-900 dark:text-default-600">
          Ongoing Shipments
        </h3>
        <button
          onClick={() => navigate("/home/shipment")}
          className="text-primary text-xs font-bold hover:underline"
        >
          View All Active
        </button>
      </div>
      <div className="divide-y divide-default-50">
        {isLoading ? (
          <p className="p-4 text-sm text-slate-500">Loading…</p>
        ) : shipments.length > 0 ? (
          shipments.map((s) => (
            <div
              key={s.trackingId}
              className="p-4 hover:bg-background-light dark:hover:bg-background-dark transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <span className="material-symbols-outlined">local_shipping</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900 dark:text-default-600">
                      {s.trackingId}
                    </span>
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold uppercase ${badgeColor[s.status] || badgeColor.Pending}`}
                    >
                      {s.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">To: {s.to}</p>
                </div>
              </div>
              <div className="text-right">
                <a
                  className="text-[10px] font-bold text-primary hover:underline"
                  href="/home/tracking"
                >
                  Track Live
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="p-4 text-sm text-slate-500">No ongoing shipments.</p>
        )}
      </div>
    </div>
  );
};

export default OngoingShipment;
