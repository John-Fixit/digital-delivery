import Button from "../../../shared/ui/button/Button";

const ActionCenter = () => {
  return (
    <>
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-default-600 flex items-center gap-2">
            <span className="material-symbols-outlined text-orange-500">
              bolt
            </span>
            Action Center
          </h3>
          <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
            2 Urgent Actions
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card-light dark:bg-card-dark p-5 rounded-2xl border border-border-light dark:border-border-dark shadow-sm flex flex-col justify-between hover:border-primary/30 transition-colors">
            <div className="flex items-start gap-4 mb-4">
              <div className="size-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">payments</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-default-600">
                  Release Payment
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Shipment #LH-82690 was delivered to Sarah J.
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-auto">
              <button className="flex-1 cursor-pointer bg-primary text-white text-xs font-bold py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Confirm &amp; Release
              </button>
              <Button className="bg-default-50 text-default-600 text-xs font-bold py-2 rounded-lg border border-border-light dark:border-border-dark">
                Dispute
              </Button>
            </div>
          </div>
          <div className="bg-card-light dark:bg-card-dark p-5 rounded-2xl border border-border-light dark:border-border-dark shadow-sm flex flex-col justify-between hover:border-primary/30 transition-colors">
            <div className="flex items-start gap-4 mb-4">
              <div className="size-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined">
                  local_shipping
                </span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-default-600">
                  Confirm Pickup
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Rider is at your location for #LH-82552.
                </p>
              </div>
            </div>
            <div className="flex gap-2 mt-auto">
              <button className="flex-1 cursor-pointer bg-primary text-white text-xs font-bold py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Handover Package
              </button>

              <Button className="bg-default-50 text-default-600 text-xs font-bold py-2 rounded-lg border border-border-light dark:border-border-dark">
                Call Rider
              </Button>
            </div>
          </div>
          <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-xl flex flex-col relative overflow-hidden">
            <div className="absolute -right-6 -top-6 size-24 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="flex justify-between items-start mb-4 relative z-10">
              <div>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                  Escrow Wallet
                </p>
                <p className="text-2xl font-bold mt-1">$4,820.50</p>
              </div>
              <div className="flex items-center gap-1 bg-success/20 text-success-400 px-2 py-0.5 rounded-full border border-success/30">
                <span className="material-symbols-outlined text-[14px]">
                  shield
                </span>
                <span className="text-[10px] font-bold">Protected</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-auto relative z-10">
              <div>
                <p className="text-slate-500 text-[10px] font-medium">
                  Locked Funds
                </p>
                <p className="text-sm font-bold">$1,240.00</p>
              </div>
              <div>
                <p className="text-slate-500 text-[10px] font-medium">
                  Available
                </p>
                <p className="text-sm font-bold text-primary-400">$3,580.50</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ActionCenter;
