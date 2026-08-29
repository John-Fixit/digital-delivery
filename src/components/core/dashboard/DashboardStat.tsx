import { useDashboard } from "../../../api-service/dashboard/dashboard";

const Trend = ({ pct }: { pct: number | null }) => {
  if (pct === null) return null;
  const positive = pct >= 0;
  return (
    <span className={`text-xs font-bold flex items-center ${positive ? "text-green-600" : "text-danger"}`}>
      {positive ? "+" : ""}
      {pct}%
    </span>
  );
};

const DashboardStats = () => {
  const { data, isLoading } = useDashboard();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
          <div className="flex justify-between items-start">
            <p className="text-slate-500 text-sm font-medium">
              Active Deliveries
            </p>
            <span className="material-symbols-outlined text-primary">
              local_shipping
            </span>
          </div>
          <p className="text-slate-900 dark:text-white text-3xl font-bold">
            {isLoading ? "—" : (data?.activeDeliveries ?? 0)}
          </p>
        </div>

        <div className="flex flex-col gap-2 rounded-xl p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
          <div className="flex justify-between items-start">
            <p className="text-slate-500 text-sm font-medium">
              Completed Trips
            </p>
            <span className="material-symbols-outlined text-green-500">
              task_alt
            </span>
          </div>
          <p className="text-slate-900 dark:text-white text-3xl font-bold">
            {isLoading ? "—" : (data?.completedTrips ?? 0)}
          </p>
        </div>

        <div className="flex flex-col gap-2 rounded-xl p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
          <div className="flex justify-between items-start">
            <p className="text-slate-500 text-sm font-medium">
              Total Shipments
            </p>
            <span className="material-symbols-outlined text-info">
              inventory_2
            </span>
          </div>
          <p className="text-slate-900 dark:text-white text-3xl font-bold">
            {isLoading ? "—" : (data?.totalShipments ?? 0)}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-card-light dark:bg-card-dark border-border-light dark:border-border-dark p-4 rounded-xl border shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Monthly Shipments
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 dark:text-default-600">
              {isLoading ? "—" : (data?.summary.monthlyShipments ?? 0)}
            </span>
            <Trend pct={data?.summary.monthlyMomChangePct ?? null} />
          </div>
        </div>
        <div className="bg-card-light dark:bg-card-dark border-border-light dark:border-border-dark p-4 rounded-xl border shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Success Rate
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 dark:text-default-600">
              {isLoading ? "—" : `${data?.summary.successRatePct ?? 0}%`}
            </span>
            <span className="text-[10px] font-bold text-slate-400">
              {(data?.summary.successRatePct ?? 0) >= 95 ? "High Trust" : ""}
            </span>
          </div>
        </div>
        <div className="bg-card-light dark:bg-card-dark border-border-light dark:border-border-dark p-4 rounded-xl border shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Avg. Delivery Time
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900 dark:text-default-600">
              {isLoading
                ? "—"
                : data?.summary.avgDeliveryHours != null
                  ? `${data.summary.avgDeliveryHours}h`
                  : "N/A"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardStats;
