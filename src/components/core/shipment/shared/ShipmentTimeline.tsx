import type { TimelineType } from "../../../../utils/type-config";

const ShipmentTimeline = ({ timeline }: { timeline: TimelineType[] }) => {
  return (
    <div className="flex flex-col">
      {timeline.map((event, index) => (
        <div key={`${event.title}-${index}`} className="flex gap-4 relative pb-6 last:pb-0">
          {index < timeline.length - 1 && (
            <div className="absolute left-2 top-6 bottom-0 w-0.5 bg-primary/20" />
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
            {event.completed ? (
              <span className="material-symbols-outlined text-white text-[10px] font-bold">
                done
              </span>
            ) : null}
            {event.current ? <div className="size-2 bg-primary rounded-full" /> : null}
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
              className={`text-xs ${
                event.completed || event.current
                  ? "text-text-secondary-light dark:text-text-secondary-dark"
                  : "text-text-tertiary-dark"
              }`}
            >
              {event.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShipmentTimeline;
