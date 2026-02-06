import { MdOutlineSecurity } from "react-icons/md";

const WalletStats = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-card-light dark:bg-card-dark p-8 rounded-xl border border-[#d7d0e7] dark:border-border-dark shadow-sm flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="text-[#654d99] text-sm font-semibold uppercase tracking-wider">
              Available Balance
            </p>
            <span className="material-symbols-outlined text-primary bg-primary/10 dark:bg-primary/30 p-2 rounded-lg">
              account_balance_wallet
            </span>
          </div>
          <div>
            <p className="text-[#120e1b] dark:text-default-700 text-4xl font-black tracking-tight leading-none">
              $12,450.00
            </p>
            <p className="text-success text-xs font-bold mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">
                trending_up
              </span>
              +12% from last month
            </p>
          </div>
        </div>
        <div className="bg-card-light dark:bg-card-dark p-8 rounded-xl border border-[#d7d0e7] dark:border-border-dark shadow-sm flex flex-col gap-4 relative overflow-hidden">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <p className="text-[#654d99] text-sm font-semibold uppercase tracking-wider">
                Escrowed Funds
              </p>
              <span
                className="material-symbols-outlined text-pending text-base cursor-help"
                title="Funds held securely until delivery is confirmed by both parties."
              >
                info
              </span>
            </div>
            <span className="material-symbols-outlined text-pending bg-pending/10 p-2 rounded-lg">
              lock_clock
            </span>
          </div>
          <div>
            <p className="text-[#120e1b] dark:text-default-700 text-4xl font-black tracking-tight leading-none">
              $3,200.00
            </p>
            <p className="text-[#654d99] text-xs font-medium mt-2">
              Active in 4 logistics orders
            </p>
          </div>
          {/* <!-- Subtle pattern overlay --> */}
          <div className="absolute dark:text-white -right-4 -bottom-10 opacity-5 pointer-events-none">
            <MdOutlineSecurity className="text-[150px]" />
          </div>
        </div>
        {/* <!-- Newest Feature: Weekly Spend --> */}
        <div className="bg-primary/5 p-8 rounded-xl border border-primary/10 dark:border-primary/30 shadow-sm flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="text-[#654d99] text-sm font-semibold uppercase tracking-wider">
              Monthly Payouts
            </p>
            <span className="material-symbols-outlined text-primary bg-primary/20 p-2 rounded-lg">
              payments
            </span>
          </div>
          <div>
            <p className="text-[#120e1b] dark:text-default-600 text-4xl font-black tracking-tight leading-none">
              $5,820.50
            </p>
            <div className="w-full bg-[#d7d0e7] h-1.5 rounded-full mt-4">
              <div
                className="bg-primary h-full rounded-full"
                style={{ width: "65%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletStats;
