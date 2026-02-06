import type { FC } from "react";
import type { ShipmentType } from "../../../../utils/type-config";

export type PropTypes = {
  shipment: ShipmentType;
};

const ShipmentDetails: FC<PropTypes> = ({ shipment }) => {
  if (!shipment) return null;

  return (
    <aside className="w-full lg:w-100 bg-card-light dark:bg-card-dark border-l border-border-light dark:border-border-dark flex flex-col h-[calc(100vh-64px)] overflow-y-auto lg:sticky lg:top-16 shadow-2xl">
      {/* Drawer Header */}
      <div className="p-6 border-b border-border-light dark:border-border-dark">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
            Shipment Details
          </h3>
        </div>
        <div className="flex gap-4 items-center bg-gray-50 dark:bg-background-dark p-3 rounded-lg">
          <div className="size-12 bg-primary-light rounded-lg flex items-center justify-center text-primary shrink-0">
            <span className="material-symbols-outlined text-2xl">box</span>
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-sm text-text-primary-light dark:text-text-primary-dark">
              {shipment.trackingId}
            </h4>
            <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark truncate">
              {shipment.itemDescription}
            </p>
          </div>
          <div>
            <span className="bg-info-bg text-info text-[10px] font-bold px-2 py-0.5 rounded uppercase">
              {shipment.status}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-8">
        {/* Mini Map */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-text-secondary-light dark:text-text-secondary-dark tracking-widest">
              Live Location
            </span>
            <a
              className="text-xs text-primary font-semibold hover:underline"
              href="#"
            >
              View Map
            </a>
          </div>
          <div className="h-32 bg-gray-200 dark:bg-background-dark rounded-lg overflow-hidden relative border border-gray-100 dark:border-border-dark">
            <div className="absolute inset-0 bg-linear-to-br from-gray-200 to-gray-300 dark:from-background-dark dark:to-card-dark flex items-center justify-center">
              <span className="material-symbols-outlined text-gray-400 text-3xl">
                map
              </span>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="size-4 bg-primary rounded-full border-2 border-white shadow-lg animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-4">
          <span className="text-xs font-bold uppercase text-text-secondary-light dark:text-text-secondary-dark tracking-widest">
            Delivery Timeline
          </span>
          <div className="flex flex-col">
            {shipment.timeline?.map((event, index) => (
              <div key={index} className="flex gap-4 relative pb-6 last:pb-0">
                {index < shipment.timeline.length - 1 && (
                  <div className="absolute left-2 top-6 bottom-0 w-0.5 bg-primary/20"></div>
                )}
                <div
                  className={`z-10 size-4 rounded-full flex items-center justify-center shrink-0 ${
                    event.completed
                      ? "bg-primary"
                      : event.current
                        ? "border-2 border-primary bg-card-light dark:bg-card-dark"
                        : "border-2 border-gray-300 dark:border-border-dark bg-card-light dark:bg-card-dark"
                  }`}
                >
                  {event.completed && (
                    <span className="material-symbols-outlined text-white text-[10px] font-bold">
                      done
                    </span>
                  )}
                  {event.current && (
                    <div className="size-2 bg-primary rounded-full"></div>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <p
                    className={`text-sm font-semibold ${
                      event.current
                        ? "text-primary"
                        : event.completed
                          ? "text-text-primary-light dark:text-text-primary-dark"
                          : "text-text-tertiary-dark"
                    }`}
                  >
                    {event.title}
                  </p>
                  <p
                    className={`text-xs ${event.completed || event.current ? "text-text-secondary-light dark:text-text-secondary-dark" : "text-text-tertiary-dark"}`}
                  >
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Package Photos */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold uppercase text-text-secondary-light dark:text-text-secondary-dark tracking-widest">
            Package Photos (POD)
          </span>
          <div className="grid grid-cols-3 gap-2">
            {shipment.photos?.map((photo, index) => (
              <div
                key={index}
                className="aspect-square bg-gray-100 dark:bg-background-dark rounded-lg bg-cover bg-center border border-gray-200 dark:border-border-dark"
                style={{ backgroundImage: `url("${photo}")` }}
                aria-label={`Package photo ${index + 1}`}
              />
            ))}
            <div className="aspect-square bg-gray-100 dark:bg-background-dark rounded-lg flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-border-dark hover:border-primary group transition-colors cursor-pointer">
              <span className="material-symbols-outlined text-gray-300 dark:text-text-tertiary-dark group-hover:text-primary">
                add_a_photo
              </span>
            </div>
          </div>
        </div>

        {/* Payment Breakdown */}
        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold uppercase text-text-secondary-light dark:text-text-secondary-dark tracking-widest">
            Escrow Payment Breakdown
          </span>
          <div className="bg-gray-50 dark:bg-background-dark p-4 rounded-xl border border-border-light dark:border-border-dark flex flex-col gap-2">
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary-light dark:text-text-secondary-dark">
                Delivery Fee
              </span>
              <span className="font-medium text-text-primary-light dark:text-text-primary-dark">
                ₦{shipment.pricing?.deliveryFee.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary-light dark:text-text-secondary-dark">
                Insurance
              </span>
              <span className="font-medium text-text-primary-light dark:text-text-primary-dark">
                ₦{shipment.pricing?.insurance.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary-light dark:text-text-secondary-dark">
                Escrow Service Fee
              </span>
              <span className="font-medium text-text-primary-light dark:text-text-primary-dark">
                ₦{shipment.pricing?.serviceFee.toLocaleString()}
              </span>
            </div>
            <div className="mt-2 pt-2 border-t border-border-light dark:border-border-dark flex justify-between">
              <span className="font-bold text-sm text-text-primary-light dark:text-text-primary-dark">
                Total Protected
              </span>
              <span className="font-bold text-primary">
                ₦{shipment.pricing?.total.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 pb-8">
          <button className="w-full py-3 bg-primary text-white font-bold rounded-lg shadow-sm hover:bg-primary-hover transition-colors">
            Contact Rider
          </button>
          <button className="w-full py-3 border border-border-light dark:border-border-dark text-text-primary-light dark:text-text-primary-dark font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-card-dark-hover transition-colors">
            Report an Issue
          </button>
        </div>
      </div>
    </aside>
  );
};

export default ShipmentDetails;
