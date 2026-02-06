import React from "react";
import Input from "../../../shared/ui/input/Input";

interface Step2RecipientDetailsProps {
  formData: {
    recipientName: string;
    recipientPhone: string;
    deliveryAddress: string;
  };
  onChange: (field: string, value: string) => void;
}

const Step2RecipientDetails: React.FC<Step2RecipientDetailsProps> = ({
  formData,
  onChange,
}) => {
  return (
    <section className="form-card bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="material-symbols-outlined text-primary">
          person_pin_circle
        </span>
        <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
          Recipient Details
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Recipient Name"
          placeholder="Who is receiving this?"
          value={formData.recipientName}
          onChange={(e) => onChange("recipientName", e.target.value)}
          required
        />
        <Input
          label="Phone Number"
          type="tel"
          placeholder="+234 (800) 000-0000"
          value={formData.recipientPhone}
          onChange={(e) => onChange("recipientPhone", e.target.value)}
          required
        />
        <div className="md:col-span-2">
          <Input
            label="Delivery Address"
            placeholder="Street name, building, apartment number"
            value={formData.deliveryAddress}
            onChange={(e) => onChange("deliveryAddress", e.target.value)}
            // icon="map"
            required
          />
        </div>
      </div>
    </section>
  );
};

export default Step2RecipientDetails;
