import type { FC } from "react";
import type { ShipmentType } from "../../../../utils/type-config";

type PropTypes = {
  shipment: ShipmentType;
  isActive: boolean;
  onClick: () => void;
};
const ShipmentTableRow: FC<PropTypes> = ({
  shipment,
  isActive = false,
  onClick,
}) => {
  const getStatusColor = (status: "In Transit" | "Pending" | "Delivered") => {
    const colors = {
      "In Transit": "bg-info-bg text-info",
      Pending: "bg-warning-bg text-warning",
      Delivered: "bg-success-bg text-success",
    };
    return colors[status] || "bg-gray-100 text-gray-700";
  };

  const getPaymentStatus = (payment: "Escrowed" | "Unpaid" | "Released") => {
    const statuses = {
      Escrowed: { icon: "lock", color: "text-success", label: "Escrowed" },
      Unpaid: {
        icon: "lock_open",
        color: "text-text-tertiary-dark",
        label: "Unpaid",
      },
      Released: { icon: "check_circle", color: "text-info", label: "Released" },
    };
    return statuses[payment] || statuses.Unpaid;
  };

  const getVehicleIcon = (type: "bike" | "van" | "truck") => {
    const icons = {
      bike: "pedal_bike",
      van: "local_shipping",
      truck: "airport_shuttle",
    };
    return icons[type] || "pedal_bike";
  };

  const paymentInfo = getPaymentStatus(shipment.payment);

  return (
    <tr
      onClick={onClick}
      className={`transition-colors cursor-pointer ${
        isActive
          ? "bg-primary-light border-l-4 border-l-primary"
          : "hover:bg-gray-50 dark:hover:bg-card-dark-hover border-l-4 border-l-transparent"
      }`}
    >
      <td
        className={`px-4 sm:px-6 py-5 font-medium ${isActive ? "text-primary" : "text-text-primary-light dark:text-text-primary-dark"}`}
      >
        {shipment.trackingId}
      </td>
      <td className="px-4 sm:px-6 py-5">
        <p className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark">
          {shipment?.recipient?.name}
        </p>
        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
          {shipment?.recipient?.phone}
        </p>
      </td>
      <td className="px-4 sm:px-6 py-5 text-sm text-text-primary-light dark:text-text-primary-dark">
        <div className="flex items-center gap-1">
          <span>{shipment?.from}</span>
          <span className="material-symbols-outlined text-[16px]! text-default-400">
            arrow_forward
          </span>
          <span>{shipment?.to}</span>
        </div>
      </td>
      <td className="px-4 sm:px-6 py-5">
        <div className="flex items-center gap-3">
          <div
            className="size-8 rounded-full bg-cover bg-center shrink-0"
            style={{ backgroundImage: `url("${shipment?.rider?.avatar}")` }}
            aria-label={`${shipment?.rider?.name} profile image`}
          />
          <span className="text-xs font-medium text-text-primary-light dark:text-text-primary-dark">
            {shipment?.rider?.name}
          </span>
        </div>
      </td>
      <td className="px-4 sm:px-6 py-5 text-center">
        <span className="material-symbols-outlined text-text-secondary-light dark:text-text-secondary-dark">
          {getVehicleIcon(shipment.vehicleType)}
        </span>
      </td>
      <td className="px-4 sm:px-6 py-5">
        <span
          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusColor(shipment.status)}`}
        >
          {shipment.status}
        </span>
      </td>
      <td className="px-4 sm:px-6 py-5">
        <span
          className={`inline-flex items-center gap-1 text-xs font-medium ${paymentInfo.color}`}
        >
          <span className="material-symbols-outlined text-sm">
            {paymentInfo.icon}
          </span>
          {paymentInfo.label}
        </span>
      </td>
      <td className="px-4 sm:px-6 py-5 text-right">
        <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded text-gray-500 dark:text-gray-400 transition-colors">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </td>
    </tr>
  );
};

export default ShipmentTableRow;
