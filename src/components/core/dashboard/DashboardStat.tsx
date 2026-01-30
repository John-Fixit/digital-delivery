const DashboardStats = () => {
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
            12
          </p>
          <div className="flex items-center gap-1">
            <span className="text-green-600 text-xs font-bold flex items-center">
              +2%
            </span>
            <span className="text-slate-400 text-xs">from last week</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-sm">
          <div className="flex justify-between items-start">
            <p className="text-slate-500 text-sm font-medium">Escrow Balance</p>
            <span className="material-symbols-outlined text-blue-500">
              lock
            </span>
          </div>
          <p className="text-slate-900 dark:text-white text-3xl font-bold">
            $1,240.50
          </p>
          <div className="flex items-center gap-1">
            <span className="text-orange-600 text-xs font-bold flex items-center">
              -5%
            </span>
            <span className="text-slate-400 text-xs">pending payout</span>
          </div>
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
            156
          </p>
          <div className="flex items-center gap-1">
            <span className="text-green-600 text-xs font-bold flex items-center">
              +12%
            </span>
            <span className="text-slate-400 text-xs">lifetime total</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardStats;
