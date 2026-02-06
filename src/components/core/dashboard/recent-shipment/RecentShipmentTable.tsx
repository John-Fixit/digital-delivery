const RecentShipmentTable = () => {
  return (
    <>
      <div className="lg:col-span-2 flex flex-col bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-border-light dark:border-border-dark flex justify-between items-center">
          <h3 className="font-bold text-slate-800 dark:text-white">
            Recent Shipments
          </h3>
          <button className="text-primary text-xs font-semibold hover:underline">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-slate-800/50">
              <tr>
                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                  Tracking ID
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                  Recipient
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-primary">
                  #LH-82741
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                  Marcus Sterling
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    In Transit
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">
                  Oct 24, 2023
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-primary">
                  #LH-82690
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                  Sarah Jenkins
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    Delivered
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">
                  Oct 23, 2023
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-primary">
                  #LH-82552
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                  Fargo Logistics
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                    Pending
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">
                  Oct 22, 2023
                </td>
              </tr>
              <tr className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <td className="px-6 py-4 text-sm font-medium text-primary">
                  #LH-82410
                </td>
                <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                  David G.
                </td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    Delivered
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-500">
                  Oct 20, 2023
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default RecentShipmentTable;
