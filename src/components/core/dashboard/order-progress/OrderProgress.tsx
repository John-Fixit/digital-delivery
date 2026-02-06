const OrderProgress = () => {
  return (
    <>
      <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-default-600">
              Current Order Progress
            </h3>
            <p className="text-xs text-slate-500">
              Tracking #LH-82741 (In Transit)
            </p>
          </div>
          <button className="text-primary text-xs font-bold flex items-center gap-1 hover:underline">
            Full Tracking{" "}
            <span className="material-symbols-outlined !text-sm">
              open_in_new
            </span>
          </button>
        </div>

        <div className="relative pt-4 pb-8">
          <div className="absolute top-6 left-0 w-full h-0.5 bg-slate-800"></div>
          <div className="absolute top-6 left-0 w-2/3 h-0.5 bg-primary"></div>
          <div className="relative flex justify-between">
            <div className="flex flex-col items-center gap-2">
              <div className="size-4 rounded-full bg-primary ring-4 ring-primary/20 z-10"></div>
              <span className="text-[10px] font-bold text-default-600">
                Dispatched
              </span>
              <span className="text-[9px] text-default-500">Oct 24, 09:00</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="size-4 rounded-full bg-primary ring-4 ring-primary/20 z-10"></div>
              <span className="text-[10px] font-bold text-default-600">
                In Transit
              </span>
              <span className="text-[9px] text-default-500">Oct 24, 14:20</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="size-4 rounded-full bg-primary ring-4 ring-primary/20 z-10 flex items-center justify-center text-[8px] text-white">
                <span className="material-symbols-outlined text-[12px]">
                  local_shipping
                </span>
              </div>
              <span className="text-[10px] font-bold text-default-600">
                Last Mile
              </span>
              <span className="text-[9px] text-default-500">In Progress</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="size-4 rounded-full bg-slate-800 z-10"></div>
              <span className="text-[10px] font-bold text-default-500">
                Delivered
              </span>
              <span className="text-[9px] text-default-500">Est. Today</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderProgress;
