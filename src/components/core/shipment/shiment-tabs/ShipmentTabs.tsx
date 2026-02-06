const ShipmentTabs = ({ activeTab = "active" }) => {
  const tabs = [
    { id: "all", label: "All", count: 42 },
    { id: "active", label: "Active", count: 12 },
    { id: "pending", label: "Pending", count: 8 },
    { id: "delivered", label: "Delivered", count: 15 },
  ];

  return (
    <div className="flex border-b border-border-light dark:border-border-dark gap-4 sm:gap-8 overflow-x-auto">
      {tabs.map((tab) => (
        <a
          key={tab.id}
          className={`flex items-center border-b-2 pb-3 text-sm whitespace-nowrap ${
            activeTab === tab.id
              ? "border-primary text-primary font-bold"
              : "border-transparent text-text-secondary-light dark:text-text-secondary-dark font-medium hover:text-primary transition-colors"
          }`}
          href="#"
        >
          {tab.label} ({tab.count})
        </a>
      ))}
    </div>
  );
};

export default ShipmentTabs;
