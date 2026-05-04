type ShipmentTabKey = "all" | "active" | "pending" | "delivered";

type PropTypes = {
  activeTab: ShipmentTabKey;
  counts: Record<ShipmentTabKey, number>;
  onTabChange: (tab: ShipmentTabKey) => void;
};

const ShipmentTabs = ({ activeTab, counts, onTabChange }: PropTypes) => {
  const tabs: { id: ShipmentTabKey; label: string }[] = [
    { id: "all", label: "All" },
    { id: "active", label: "Active" },
    { id: "pending", label: "Pending" },
    { id: "delivered", label: "Delivered" },
  ];

  return (
    <div className="flex border-b border-border-light dark:border-border-dark gap-4 sm:gap-8 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          type="button"
          key={tab.id}
          className={`flex items-center border-b-2 pb-3 text-sm whitespace-nowrap cursor-pointer ${
            activeTab === tab.id
              ? "border-primary text-primary font-bold"
              : "border-transparent text-text-secondary-light dark:text-text-secondary-dark font-medium hover:text-primary transition-colors"
          }`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label} ({counts[tab.id]})
        </button>
      ))}
    </div>
  );
};

export default ShipmentTabs;
