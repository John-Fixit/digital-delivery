import PageHeader from "../../components/shared/page-header/PageHeader";
import { useAdminOverview } from "../../api-service/admin/admin";
import { formatCurrency } from "../../utils/format-currency";

const toneClass = {
  primary: "text-primary",
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger",
} as const;

const StatCard = ({
  label,
  value,
  icon,
  tone = "primary",
}: {
  label: string;
  value: string | number;
  icon: string;
  tone?: keyof typeof toneClass;
}) => (
  <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl p-6">
    <div className="flex items-center justify-between mb-3">
      <span className="text-sm text-slate-500 font-medium">{label}</span>
      <span className={`material-symbols-outlined ${toneClass[tone]}`}>{icon}</span>
    </div>
    <p className="text-2xl font-black">{value}</p>
  </div>
);

const AdminOverview = () => {
  const { data, isLoading } = useAdminOverview();

  if (isLoading) return <div className="p-8 text-slate-500 text-sm">Loading…</div>;
  if (!data) return null;

  return (
    <div className="p-8 max-w-350 w-full mx-auto">
      <PageHeader
        title="Platform Overview"
        description="Real-time snapshot of users, riders, shipments, and money movement."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard label="Total users" value={data.users.total} icon="group" />
        <StatCard
          label="Riders (pending / approved)"
          value={`${data.riders.pending} / ${data.riders.approved}`}
          icon="two_wheeler"
          tone="warning"
        />
        <StatCard label="Total shipments" value={data.shipments.total} icon="local_shipping" />
        <StatCard label="Open disputes" value={data.disputes.open} icon="warning" tone="danger" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl p-6">
          <p className="text-sm text-slate-500 font-medium mb-4">Shipments by status</p>
          <div className="space-y-3">
            {[
              ["Pending", data.shipments.pending],
              ["In transit", data.shipments.inTransit],
              ["Delivered", data.shipments.delivered],
              ["Cancelled", data.shipments.cancelled],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-300">{label}</span>
                <span className="font-bold">{value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl p-6">
          <p className="text-sm text-slate-500 font-medium mb-4">Money in the system</p>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-slate-600 dark:text-slate-300">Escrow held</span>
              <span className="font-bold text-warning">{formatCurrency(data.escrow.held)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600 dark:text-slate-300">Escrow released</span>
              <span className="font-bold text-success">
                {formatCurrency(data.escrow.released)}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600 dark:text-slate-300">Total wallet balances</span>
              <span className="font-bold">{formatCurrency(data.wallets.totalBalance)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;
