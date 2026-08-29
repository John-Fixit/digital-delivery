import { useState } from "react";
import { Link } from "react-router-dom";
import { SelectItem } from "@heroui/react";
import PageHeader from "../../components/shared/page-header/PageHeader";
import Input from "../../components/shared/ui/input/Input";
import Select from "../../components/shared/ui/select/Select";
import Button from "../../components/shared/ui/button/Button";
import {
  useApplyAsRider,
  useMyJobs,
  useMyRiderProfile,
  useRiderEarnings,
  type RiderApplicationPayload,
} from "../../api-service/riders/riders";
import { formatCurrency } from "../../utils/format-currency";
import { getApiErrorMessage } from "../../api-service/utils/error";

const ApplyAsRiderForm = () => {
  const applyAsRider = useApplyAsRider();
  const [form, setForm] = useState<RiderApplicationPayload>({
    full_name: "",
    phone: "",
    vehicle_type: "bike",
  });
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      await applyAsRider.mutateAsync(form);
    } catch (err) {
      setError(getApiErrorMessage(err, "Could not submit your application."));
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <PageHeader
        title="Apply to become a rider"
        description="Submit your details to start accepting delivery jobs. An admin will verify your application before you can go live."
      />
      <form
        onSubmit={onSubmit}
        className="space-y-5 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl p-6"
      >
        {error ? (
          <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-300">
            {error}
          </p>
        ) : null}
        <Input
          label="Full name"
          value={form.full_name}
          onChange={(e) => setForm((f) => ({ ...f, full_name: e.target.value }))}
          isRequired
        />
        <Input
          label="Phone number"
          value={form.phone}
          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          isRequired
        />
        <Select
          label="Vehicle type"
          selectedKeys={[form.vehicle_type]}
          onChange={(e) =>
            setForm((f) => ({
              ...f,
              vehicle_type: e.target.value as RiderApplicationPayload["vehicle_type"],
            }))
          }
        >
          {["bike", "van", "truck"].map((item) => (
            <SelectItem key={item} textValue={item}>
              {item[0].toUpperCase() + item.slice(1)}
            </SelectItem>
          ))}
        </Select>
        <Button type="submit" fullWidth isLoading={applyAsRider.isPending}>
          Submit application
        </Button>
      </form>
    </div>
  );
};

const PendingOrRejected = ({ status }: { status: "pending" | "rejected" }) => (
  <div className="p-8 max-w-xl mx-auto text-center space-y-3">
    <span className="material-symbols-outlined text-5xl text-slate-300">
      {status === "pending" ? "hourglass_top" : "cancel"}
    </span>
    <p className="text-xl font-bold">
      {status === "pending"
        ? "Your rider application is pending verification"
        : "Your rider application was not approved"}
    </p>
    <p className="text-slate-500 text-sm">
      {status === "pending"
        ? "An admin needs to verify your details before you can start accepting jobs. Check back soon."
        : "Contact support if you think this was a mistake."}
    </p>
  </div>
);

const ApprovedDashboard = () => {
  const activeJobs = useMyJobs(true, true);
  const earnings = useRiderEarnings(true);

  const stats = [
    {
      label: "Active jobs",
      value: activeJobs.data?.length ?? 0,
      icon: "local_shipping",
    },
    {
      label: "Completed deliveries",
      value: earnings.data?.completedDeliveries ?? 0,
      icon: "task_alt",
    },
    {
      label: "Total earned",
      value: formatCurrency(earnings.data?.totalEarned ?? 0),
      icon: "payments",
    },
  ];

  return (
    <div className="p-8 max-w-350 w-full mx-auto">
      <PageHeader
        title="Rider Dashboard"
        description="Track your jobs and earnings at a glance."
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-slate-500 font-medium">{s.label}</span>
              <span className="material-symbols-outlined text-primary">{s.icon}</span>
            </div>
            <p className="text-2xl font-black">{s.value}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/rider/jobs"
          className="flex-1 bg-primary text-white font-bold px-6 py-4 rounded-xl text-center hover:bg-primary-hover transition-colors"
        >
          Browse available jobs
        </Link>
        <Link
          to="/rider/active"
          className="flex-1 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark font-bold px-6 py-4 rounded-xl text-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          View active tasks
        </Link>
      </div>
    </div>
  );
};

const RiderDashboard = () => {
  const { data: rider, isLoading } = useMyRiderProfile();

  if (isLoading) {
    return <div className="p-8 text-slate-500 text-sm">Loading…</div>;
  }
  if (!rider) return <ApplyAsRiderForm />;
  if (rider.verificationStatus === "pending") return <PendingOrRejected status="pending" />;
  if (rider.verificationStatus === "rejected") return <PendingOrRejected status="rejected" />;
  return <ApprovedDashboard />;
};

export default RiderDashboard;
