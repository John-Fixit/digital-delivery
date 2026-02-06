const ShipmentFilters = () => {
  return (
    <div className="flex gap-3 flex-wrap">
      <button className="flex h-9 items-center gap-2 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark px-4 text-text-primary-light dark:text-text-primary-dark text-sm font-medium hover:bg-gray-50 dark:hover:bg-card-dark-hover transition-colors">
        <span>Status: In Transit</span>
        <span className="material-symbols-outlined text-lg">expand_more</span>
      </button>
      <button className="flex h-9 items-center gap-2 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark px-4 text-text-primary-light dark:text-text-primary-dark text-sm font-medium hover:bg-gray-50 dark:hover:bg-card-dark-hover transition-colors">
        <span>Type: Bike</span>
        <span className="material-symbols-outlined text-lg">expand_more</span>
      </button>
      <button className="flex h-9 items-center gap-2 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark px-4 text-text-primary-light dark:text-text-primary-dark text-sm font-medium hover:bg-gray-50 dark:hover:bg-card-dark-hover transition-colors">
        <span>Date: Last 30 days</span>
        <span className="material-symbols-outlined text-lg">
          calendar_today
        </span>
      </button>
    </div>
  );
};

export default ShipmentFilters;
