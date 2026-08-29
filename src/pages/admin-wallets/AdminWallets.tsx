import PageHeader from "../../components/shared/page-header/PageHeader";
import { useAdminWallets } from "../../api-service/admin/admin";
import { formatCurrency } from "../../utils/format-currency";

const AdminWallets = () => {
  const { data, isLoading } = useAdminWallets();

  return (
    <div className="p-8 max-w-350 w-full mx-auto">
      <PageHeader title="Wallets" description="Every user's wallet balance, read-only." />

      <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500">
              <tr>
                <th className="text-left px-6 py-3 font-medium">User</th>
                <th className="text-left px-6 py-3 font-medium">Email</th>
                <th className="text-left px-6 py-3 font-medium">Role</th>
                <th className="text-right px-6 py-3 font-medium">Balance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light dark:divide-border-dark">
              {isLoading ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                    Loading…
                  </td>
                </tr>
              ) : data && data.length > 0 ? (
                data.map((w) => (
                  <tr key={w.id}>
                    <td className="px-6 py-4 font-bold">{w.user?.fullName || "—"}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                      {w.user?.email}
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300 capitalize">
                      {w.user?.role}
                    </td>
                    <td className="px-6 py-4 text-right font-bold">
                      {formatCurrency(w.balance)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                    No wallets yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminWallets;
