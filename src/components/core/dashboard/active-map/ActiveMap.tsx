import MapTrackingView from "../../../shared/map-tracking/MapTrackingView";

const ActiveMap = () => {
  return (
    <>
      <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-sm flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-slate-900 dark:text-default-600">
            Active Map
          </h3>
          <div className="flex items-center gap-1.5 px-2 py-0.5 bg-green-50 rounded-full border border-green-100">
            <span className="size-2 bg-success rounded-full animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase text-success tracking-wider">
              Live
            </span>
          </div>
        </div>
        <MapTrackingView />
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-background-dark border border-slate-100 dark:border-border-dark">
            <div className="size-9 rounded-lg bg-primary/10 dark:bg-primary/30 flex items-center justify-center text-primary shrink-0">
              <span className="material-symbols-outlined text-lg">
                directions_bike
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold text-slate-900 dark:text-default-600 truncate tracking-tight">
                Rider: Mike D.
              </p>
              <p className="text-[10px] text-slate-500 truncate">
                Carrier Express #402
              </p>
            </div>
            <button className="size-7 rounded-lg bg-white dark:bg-background-dark border border-border-light dark:border-border-dark flex items-center justify-center text-slate-400 hover:text-primary transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-sm!">call</span>
            </button>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl border border-border-light dark:border-border-dark">
            <div className="size-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500">
              <span className="material-symbols-outlined">
                person_pin_circle
              </span>
            </div>
            <div className="flex flex-col overflow-hidden">
              <p className="text-xs font-bold text-slate-800 dark:text-white truncate">
                Courier #12 - Pickup
              </p>
              <p className="text-[10px] text-slate-500 truncate tracking-tight">
                Arriving at Origin
              </p>
            </div>
            <button className="ml-auto text-slate-400">
              <span className="material-symbols-outlined text-xl">
                chevron_right
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveMap;
