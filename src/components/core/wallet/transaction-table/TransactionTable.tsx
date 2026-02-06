import Button from "../../../shared/ui/button/Button";

const TransactionTable = () => {
  return (
    <>
      {
        <div className="bg-card-light dark:bg-card-dark rounded-xl border border-[#d7d0e7] dark:border-border-dark overflow-hidden">
          {/* <!-- Table Controls --> */}
          <div className="p-6 border-b border-[#ebe7f3] dark:border-border-dark flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-lg font-bold text-[#120e1b] dark:text-white">
              Transaction History
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <select className="form-select text-sm font-medium text-[#120e1b] dark:text-text-primary-dark border-[#d7d0e7] dark:border-border-dark rounded-lg focus:ring-primary focus:border-primary px-4 py-2 bg-background-light dark:bg-card-dark">
                <option>All Types</option>
                <option>Deposits</option>
                <option>Withdrawals</option>
                <option>Escrow Release</option>
              </select>
              <button className="material-symbols-outlined p-2 border border-[#d7d0e7] dark:border-border-dark rounded-lg text-[#654d99] hover:bg-background-light dark:hover:bg-background-dark transition-colors cursor-pointer">
                filter_list
              </button>
              <button className="material-symbols-outlined p-2 border border-[#d7d0e7] dark:border-border-dark rounded-lg text-[#654d99] hover:bg-background-light dark:hover:bg-background-dark cursor-pointer transition-colors">
                download
              </button>
              <button className="material-symbols-outlined p-2 border border-[#d7d0e7] dark:border-border-dark rounded-lg text-[#654d99] hover:bg-background-light dark:hover:bg-background-dark cursor-pointer transition-colors">
                <span className="material-symbols-outlined">
                  calendar_today
                </span>
              </button>
            </div>
          </div>
          {/* <!-- History Table --> */}
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-[#f9f8fc] dark:bg-slate-800/50 borderb border-[#ebe7f3]">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-[#654d99] dark:text-slate-400 uppercase tracking-wider">
                    Date &amp; Time
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-[#654d99] dark:text-slate-400 uppercase tracking-wider">
                    Transaction ID
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-[#654d99] dark:text-slate-400 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-[#654d99] dark:text-slate-400 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-[#654d99] dark:text-slate-400 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#ebe7f3] dark:divide-border-dark">
                {/* <!-- Row 1 --> */}
                <tr className="hover:bg-background-light dark:hover:bg-slate-800/30 transition-colors cursor-default">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#120e1b] dark:text-default-600">
                        Oct 24, 2023
                      </span>
                      <span className="text-xs text-[#654d99]">14:22 PM</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-[#654d99]">
                    TXN-98234-LGP
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-lg">
                        call_made
                      </span>
                      <span className="text-sm font-semibold text-[#120e1b] dark:text-default-500">
                        Escrow Release
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-black text-danger">
                    -$1,250.00
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#16A34A]/10 text-[#16A34A]">
                      <span className="size-1.5 rounded-full bg-success mr-1.5"></span>
                      Completed
                    </span>
                  </td>
                </tr>
                {/* <!-- Row 2 --> */}
                <tr className="hover:bg-background-light dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#120e1b] dark:text-default-600">
                        Oct 22, 2023
                      </span>
                      <span className="text-xs text-[#654d99]">09:15 AM</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-[#654d99]">
                    TXN-77312-LGP
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-success text-lg">
                        call_received
                      </span>
                      <span className="text-sm font-semibold text-[#120e1b] dark:text-default-500">
                        Add Funds
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-black text-success">
                    +$5,000.00
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#16A34A]/10 text-[#16A34A]">
                      <span className="size-1.5 rounded-full bg-success mr-1.5"></span>
                      Completed
                    </span>
                  </td>
                </tr>
                {/* <!-- Row 3 --> */}
                <tr className="hover:bg-background-light dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#120e1b] dark:text-default-600">
                        Oct 20, 2023
                      </span>
                      <span className="text-xs text-[#654d99]">16:45 PM</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-[#654d99]">
                    TXN-65221-LGP
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-pending text-lg">
                        hourglass_empty
                      </span>
                      <span className="text-sm font-semibold text-[#120e1b] dark:text-default-500">
                        Withdrawal
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-black text-[#120e1b] dark:text-gray-500">
                    -$2,000.00
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#F59E0B]/10 text-[#F59E0B]">
                      <span className="size-1.5 rounded-full bg-pending mr-1.5"></span>
                      Pending
                    </span>
                  </td>
                </tr>
                {/* <!-- Row 4 --> */}
                <tr className="hover:bg-background-light dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-[#120e1b] dark:text-default-600">
                        Oct 18, 2023
                      </span>
                      <span className="text-xs text-[#654d99]">11:10 AM</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-mono text-[#654d99]">
                    TXN-11090-LGP
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-lg">
                        lock_open
                      </span>
                      <span className="text-sm font-semibold text-[#120e1b] dark:text-default-500">
                        Escrow Release
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-black text-[#120e1b] dark:text-gray-500">
                    +$850.00
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#16A34A]/10 text-[#16A34A]">
                      <span className="size-1.5 rounded-full bg-success mr-1.5"></span>
                      Completed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!-- Pagination --> */}
          <div className="px-6 py-4 border-t border-[#ebe7f3] dark:border-border-dark bg-[#f9f8fc] dark:bg-slate-800/50 flex items-center justify-between">
            <p className="text-sm text-[#654d99] font-medium">
              Showing{" "}
              <span className="text-[#120e1b] dark:text-default-500">
                1 to 10
              </span>{" "}
              of{" "}
              <span className="text-[#120e1b] dark:text-default-500">45</span>{" "}
              transactions
            </p>
            <div className="flex gap-2">
              <Button size="sm" variant="ghost">
                Previous
              </Button>
              <Button size="sm">Next</Button>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default TransactionTable;
