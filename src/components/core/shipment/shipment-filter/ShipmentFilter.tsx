import type { ShipmentType } from "../../../../utils/type-config";

type PropTypes = {
  statusFilter: "all" | ShipmentType["status"];
  onStatusChange: (status: "all" | ShipmentType["status"]) => void;
};

const ShipmentFilters = ({ statusFilter, onStatusChange }: PropTypes) => {
  const statuses: Array<"all" | ShipmentType["status"]> = [
    "all",
    "In Transit",
    "Pending",
    "Delivered",
    "Cancelled",
  ];

  return (
    <div className="flex gap-3 flex-wrap items-center">
      <label className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
        Status
      </label>
      <select
        value={statusFilter}
        onChange={(event) =>
          onStatusChange(event.target.value as "all" | ShipmentType["status"])
        }
        className="h-10 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark px-4 text-text-primary-light dark:text-text-primary-dark text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30"
      >
        {statuses.map((status) => (
          <option key={status} value={status}>
            {status === "all" ? "All statuses" : status}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ShipmentFilters;
