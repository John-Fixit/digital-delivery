import type { FC } from "react";
import ShipmentTableRow from "./ShipmentTableRow";
import type { ShipmentType } from "../../../../utils/type-config";

type PropTypes = {
  shipments: ShipmentType[];
  activeShipmentId?: string;
  onShipmentClick?: (trackingId: string) => void;
};

const ShipmentTable: FC<PropTypes> = ({
  shipments,
  activeShipmentId,
  onShipmentClick,
}) => {
  return (
    <div className="bg-card-light dark:bg-background-dark-elevated rounded-xl border border-border-light dark:border-border-dark overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead className="bg-gray-50 dark:bg-background-dark border-b border-border-light dark:border-border-dark">
            <tr>
              <th className="px-4 sm:px-6 py-6 text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider">
                Tracking ID
              </th>
              <th className="px-4 sm:px-6 py-6 text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider">
                Recipient
              </th>
              <th className="px-4 sm:px-6 py-6 text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider">
                Locations
              </th>
              <th className="px-4 sm:px-6 py-6 text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider">
                Rider
              </th>
              <th className="px-4 sm:px-6 py-6 text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider text-center">
                Type
              </th>
              <th className="px-4 sm:px-6 py-6 text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider">
                Status
              </th>
              <th className="px-4 sm:px-6 py-6 text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider">
                Payment
              </th>
              <th className="px-4 sm:px-6 py-6 text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-light dark:divide-border-dark">
            {shipments.map((shipment) => (
              <ShipmentTableRow
                key={shipment.trackingId}
                shipment={shipment}
                isActive={shipment.trackingId === activeShipmentId}
                onClick={() =>
                  onShipmentClick && onShipmentClick(shipment.trackingId)
                }
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-4 sm:px-6 py-4 border-t border-border-light dark:border-border-dark flex items-center justify-between bg-card-light dark:bg-background-dark-elevated">
        <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
          Showing 1-10 of 42 shipments
        </span>
        <div className="flex gap-2">
          <button
            className="p-2 border border-border-light dark:border-border-dark rounded hover:bg-gray-50 dark:hover:bg-card-dark-hover disabled:opacity-50 transition-colors"
            disabled
          >
            <span className="material-symbols-outlined text-sm">
              chevron_left
            </span>
          </button>
          <button className="p-2 border border-border-light dark:border-border-dark rounded hover:bg-gray-50 dark:hover:bg-card-dark-hover transition-colors">
            <span className="material-symbols-outlined text-sm">
              chevron_right
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShipmentTable;
