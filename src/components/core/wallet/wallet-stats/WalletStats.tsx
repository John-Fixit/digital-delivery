import { MdOutlineSecurity } from "react-icons/md";
import { useWallet } from "../../../../api-service/wallet/wallet";
import { formatCurrency } from "../../../../utils/format-currency";

const WalletStats = () => {
  const { data: wallet, isLoading } = useWallet();
  const activeEscrowCount = wallet?.lockedEscrowCount ?? 0;

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
              {isLoading ? "…" : formatCurrency(wallet?.availableBalance ?? 0)}
            </p>
            <p className="text-[#654d99] text-xs font-medium mt-2">
              Ready to fund new deliveries
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
              {isLoading ? "…" : formatCurrency(wallet?.lockedFunds ?? 0)}
            </p>
            <p className="text-[#654d99] text-xs font-medium mt-2">
              {activeEscrowCount > 0
                ? `Active in ${activeEscrowCount} logistics order${activeEscrowCount === 1 ? "" : "s"}`
                : "No funds currently held"}
            </p>
          </div>
          {/* <!-- Subtle pattern overlay --> */}
          <div className="absolute dark:text-white -right-4 -bottom-10 opacity-5 pointer-events-none">
            <MdOutlineSecurity className="text-[150px]" />
          </div>
        </div>
        <div className="bg-primary/5 p-8 rounded-xl border border-primary/10 dark:border-primary/30 shadow-sm flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <p className="text-[#654d99] text-sm font-semibold uppercase tracking-wider">
              Total Wallet Value
            </p>
            <span className="material-symbols-outlined text-primary bg-primary/20 p-2 rounded-lg">
              payments
            </span>
          </div>
          <div>
            <p className="text-[#120e1b] dark:text-default-600 text-4xl font-black tracking-tight leading-none">
              {isLoading ? "…" : formatCurrency(wallet?.headlineTotal ?? 0)}
            </p>
            <p className="text-[#654d99] text-xs font-medium mt-2">
              Available + escrowed funds combined
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletStats;
