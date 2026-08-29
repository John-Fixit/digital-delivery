import PageHeader from "../../components/shared/page-header/PageHeader";
import { useAdminUsers } from "../../api-service/admin/admin";

const roleColor: Record<string, string> = {
  admin: "bg-primary/10 text-primary",
  rider: "bg-info/10 text-info",
  customer: "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300",
  driver: "bg-warning/10 text-warning",
};

const AdminUsers = () => {
  const { data, isLoading } = useAdminUsers();

  return (
    <div className="p-8 max-w-350 w-full mx-auto">
      <PageHeader title="Users" description="Every registered account on the platform." />

      <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 dark:bg-slate-800/50 text-slate-500">
              <tr>
                <th className="text-left px-6 py-3 font-medium">Name</th>
                <th className="text-left px-6 py-3 font-medium">Email</th>
                <th className="text-left px-6 py-3 font-medium">Phone</th>
                <th className="text-left px-6 py-3 font-medium">Role</th>
                <th className="text-left px-6 py-3 font-medium">Verified</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light dark:divide-border-dark">
              {isLoading ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                    Loading…
                  </td>
                </tr>
              ) : data && data.length > 0 ? (
                data.map((u) => (
                  <tr key={u.id}>
                    <td className="px-6 py-4 font-bold">{u.full_name}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">{u.email}</td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                      {u.phone || "—"}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full ${roleColor[u.role] || roleColor.customer}`}
                      >
                        {u.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                      {u.verification_status === "verified" ? "Yes" : "No"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                    No users yet.
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

export default AdminUsers;
