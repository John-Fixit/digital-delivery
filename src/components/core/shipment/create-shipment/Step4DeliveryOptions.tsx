import React from "react";

interface Step4DeliveryOptionsProps {
  formData: {
    deliveryType: "standard" | "express";
  };
  onChange: (field: string, value: string) => void;
}

const Step4DeliveryOptions: React.FC<Step4DeliveryOptionsProps> = ({
  formData,
  onChange,
}) => {
  const deliveryOptions = [
    {
      value: "standard",
      title: "Standard Delivery",
      description: "Pickup within 4 hours. Delivered same day or next morning.",
      icon: "local_shipping",
    },
    {
      value: "express",
      title: "Express Delivery",
      description: "Immediate pickup. Priority route to destination.",
      icon: "bolt",
    },
  ];

  return (
    <section className="form-card bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="material-symbols-outlined text-primary">speed</span>
        <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
          Delivery Options
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {deliveryOptions.map((option) => {
          const isSelected = formData.deliveryType === option.value;
          return (
            <label
              key={option.value}
              className={`relative flex p-4 cursor-pointer border rounded-xl transition-all ${
                isSelected
                  ? "border-primary bg-primary-light dark:bg-primary/10"
                  : "border-border-light dark:border-border-dark hover:border-primary/50 dark:hover:border-primary/50"
              }`}
            >
              <input
                type="radio"
                name="delivery_type"
                value={option.value}
                checked={isSelected}
                onChange={(e) => onChange("deliveryType", e.target.value)}
                className="sr-only"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`material-symbols-outlined text-lg ${isSelected ? "text-primary" : "text-text-secondary-light dark:text-text-secondary-dark"}`}
                    >
                      {option.icon}
                    </span>
                    <span className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark">
                      {option.title}
                    </span>
                  </div>
                  <span
                    className={`material-symbols-outlined text-xl ${
                      isSelected
                        ? "text-primary"
                        : "text-border-light dark:text-border-dark"
                    }`}
                  >
                    {isSelected ? "check_circle" : "radio_button_unchecked"}
                  </span>
                </div>
                <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                  {option.description}
                </p>
              </div>
            </label>
          );
        })}
      </div>
    </section>
  );
};

export default Step4DeliveryOptions;
