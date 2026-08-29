import { useNavigate } from "react-router-dom";
import { useDashboard } from "../../../../api-service/dashboard/dashboard";

const OrderProgress = () => {
  const { data, isLoading } = useDashboard();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-sm text-sm text-slate-500">
        Loading…
      </div>
    );
  }

  if (!data?.currentOrderTrackingId || !data.currentOrderTimeline.length) {
    return (
      <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-sm">
        <h3 className="font-bold text-slate-900 dark:text-default-600 mb-1">
          Current Order Progress
        </h3>
        <p className="text-xs text-slate-500">No active shipment right now.</p>
      </div>
    );
  }

  return (
    <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-sm">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="font-bold text-slate-900 dark:text-default-600">
            Current Order Progress
          </h3>
          <p className="text-xs text-slate-500">
            Tracking #{data.currentOrderTrackingId} ({data.currentOrderStatus})
          </p>
        </div>
        <button
          onClick={() => navigate("/home/tracking")}
          className="text-primary text-xs font-bold flex items-center gap-1 hover:underline"
        >
          Full Tracking{" "}
          <span className="material-symbols-outlined text-sm!">open_in_new</span>
        </button>
      </div>

      <div className="relative pt-4 pb-8">
        <div className="absolute top-6 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800" />
        <div
          className="absolute top-6 left-0 h-0.5 bg-primary transition-all"
          style={{
            width: `${
              (data.currentOrderTimeline.filter((t) => t.completed).length /
                data.currentOrderTimeline.length) *
              100
            }%`,
          }}
        />
        <div className="relative flex justify-between">
          {data.currentOrderTimeline.map((step) => (
            <div key={step.title} className="flex flex-col items-center gap-2 text-center max-w-24">
              <div
                className={`size-4 rounded-full z-10 flex items-center justify-center ${
                  step.completed
                    ? "bg-primary ring-4 ring-primary/20"
                    : "bg-slate-300 dark:bg-slate-700"
                }`}
              >
                {step.current ? (
                  <span className="material-symbols-outlined text-[12px] text-white">
                    local_shipping
                  </span>
                ) : null}
              </div>
              <span className="text-[10px] font-bold text-default-600">{step.title}</span>
              <span className="text-[9px] text-default-500">{step.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderProgress;
