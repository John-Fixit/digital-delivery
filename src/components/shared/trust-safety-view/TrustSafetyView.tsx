const TrustSafetyView = () => {
  return (
    <>
      <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-sm">
        <h3 className="font-bold text-slate-900 dark:text-default-600 mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-success !text-xl">
            shield_person
          </span>
          Trust &amp; Safety
        </h3>
        <div className="space-y-4">
          <div className="p-3 rounded-xl bg-green-50 dark:bg-green-500/20 border border-green-100/50 dark:border-green-100/20">
            <div className="flex items-center gap-2 mb-1">
              <span className="material-symbols-outlined text-success !text-base">
                verified
              </span>
              <span className="text-xs font-bold text-success">
                Fully Protected Account
              </span>
            </div>
            <p className="text-[10px] text-green-700 leading-relaxed">
              All transactions are held in escrow. Funds are only released upon
              your confirmation of delivery.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">ID Verification</span>
              <span className="text-success font-bold">Verified</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Escrow Bond</span>
              <span className="text-success font-bold">Active</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-slate-500">Dispute History</span>
              <span className="text-slate-400">0 Disputes</span>
            </div>
          </div>
          <button className="w-full py-2 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 text-[11px] font-bold hover:border-primary/40 hover:text-primary transition-all cursor-pointer">
            Increase Protection Level
          </button>
        </div>
      </div>
    </>
  );
};

export default TrustSafetyView;
