import { useMemo, useState } from "react";
import { useWallet, type WalletTransactionType } from "../../../../api-service/wallet/wallet";
import { formatCurrency } from "../../../../utils/format-currency";

type FilterOption = "all" | "escrow" | "topup" | "payout" | "refund";

const describeTransaction = (transaction: WalletTransactionType) => {
  if (transaction.reference.startsWith("ESCROW-")) {
    return { label: "Escrow Hold", icon: "lock_clock", group: "escrow" as const };
  }
  if (transaction.reference.startsWith("TOPUP-")) {
    return { label: "Add Funds", icon: "call_received", group: "topup" as const };
  }
  if (transaction.reference.startsWith("PAYOUT-")) {
    return { label: "Escrow Release", icon: "call_made", group: "payout" as const };
  }
  if (transaction.reference.startsWith("REFUND-")) {
    return { label: "Refund", icon: "replay", group: "refund" as const };
  }
  return { label: "Transaction", icon: "swap_horiz", group: "all" as const };
};

const formatDate = (iso: string) => {
  const date = new Date(iso);
  return {
    day: date.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }),
    time: date.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" }),
  };
};

const TransactionTable = () => {
  const { data: wallet, isLoading } = useWallet();
  const [filter, setFilter] = useState<FilterOption>("all");

  const transactions = useMemo(() => {
    const rows = wallet?.transactions ?? [];
    if (filter === "all") return rows;
    return rows.filter((t) => describeTransaction(t).group === filter);
  }, [wallet, filter]);

  return (
    <div className="bg-card-light dark:bg-card-dark rounded-xl border border-[#d7d0e7] dark:border-border-dark overflow-hidden">
      <div className="p-6 border-b border-[#ebe7f3] dark:border-border-dark flex flex-wrap items-center justify-between gap-4">
        <h3 className="text-lg font-bold text-[#120e1b] dark:text-white">
          Transaction History
        </h3>
        <div className="flex flex-wrap items-center gap-3">
          <select
            value={filter}
            onChange={(event) => setFilter(event.target.value as FilterOption)}
            className="form-select text-sm font-medium text-[#120e1b] dark:text-text-primary-dark border-[#d7d0e7] dark:border-border-dark rounded-lg focus:ring-primary focus:border-primary px-4 py-2 bg-background-light dark:bg-card-dark"
          >
            <option value="all">All Types</option>
            <option value="topup">Add Funds</option>
            <option value="escrow">Escrow Hold</option>
            <option value="payout">Escrow Release</option>
            <option value="refund">Refund</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-[#f9f8fc] dark:bg-slate-800/50 border-b border-[#ebe7f3]">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-[#654d99] dark:text-slate-400 uppercase tracking-wider">
                Date &amp; Time
              </th>
              <th className="px-6 py-4 text-xs font-bold text-[#654d99] dark:text-slate-400 uppercase tracking-wider">
                Reference
              </th>
              <th className="px-6 py-4 text-xs font-bold text-[#654d99] dark:text-slate-400 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-4 text-xs font-bold text-[#654d99] dark:text-slate-400 uppercase tracking-wider">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#ebe7f3] dark:divide-border-dark">
            {isLoading ? (
              <tr>
                <td colSpan={4} className="px-6 py-10 text-center text-sm text-[#654d99]">
                  Loading transactions…
                </td>
              </tr>
            ) : transactions.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-10 text-center text-sm text-[#654d99]">
                  No transactions yet. Fund your wallet to get started.
                </td>
              </tr>
            ) : (
              transactions.map((transaction) => {
                const { label, icon } = describeTransaction(transaction);
                const { day, time } = formatDate(transaction.createdAt);
                const isCredit = transaction.type === "credit";
                return (
                  <tr
                    key={transaction.id}
                    className="hover:bg-background-light dark:hover:bg-slate-800/30 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-[#120e1b] dark:text-default-600">
                          {day}
                        </span>
                        <span className="text-xs text-[#654d99]">{time}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-[#654d99]">
                      {transaction.reference}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`material-symbols-outlined text-lg ${isCredit ? "text-success" : "text-primary"}`}
                        >
                          {icon}
                        </span>
                        <span className="text-sm font-semibold text-[#120e1b] dark:text-default-500">
                          {label}
                        </span>
                      </div>
                    </td>
                    <td
                      className={`px-6 py-4 text-sm font-black ${isCredit ? "text-success" : "text-danger"}`}
                    >
                      {isCredit ? "+" : "-"}
                      {formatCurrency(transaction.amount)}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      {!isLoading && transactions.length > 0 ? (
        <div className="px-6 py-4 border-t border-[#ebe7f3] dark:border-border-dark bg-[#f9f8fc] dark:bg-slate-800/50">
          <p className="text-sm text-[#654d99] font-medium">
            Showing{" "}
            <span className="text-[#120e1b] dark:text-default-500">{transactions.length}</span>{" "}
            transaction{transactions.length === 1 ? "" : "s"}
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default TransactionTable;
