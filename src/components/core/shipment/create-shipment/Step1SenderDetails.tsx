import React from "react";
import Input from "../../../shared/ui/input/Input";

interface Step1SenderDetailsProps {
  formData: {
    senderName: string;
    senderPhone: string;
    pickupAddress: string;
  };
  onChange: (field: string, value: string) => void;
}

const Step1SenderDetails: React.FC<Step1SenderDetailsProps> = ({
  formData,
  onChange,
}) => {
  return (
    <section className="form-card bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="material-symbols-outlined text-primary">
          location_on
        </span>
        <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
          Sender Details
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          placeholder="e.g. Alex Johnson"
          value={formData.senderName}
          onChange={(e) => onChange("senderName", e.target.value)}
          required
        />
        <Input
          label="Phone Number"
          type="tel"
          placeholder="+234 (800) 000-0000"
          value={formData.senderPhone}
          onChange={(e) => onChange("senderPhone", e.target.value)}
          required
        />
        <div className="md:col-span-2">
          <Input
            label="Pickup Address"
            placeholder="Search for address or enter manually"
            value={formData.pickupAddress}
            onChange={(e) => onChange("pickupAddress", e.target.value)}
            // icon="search"
            required
          />
        </div>
      </div>
    </section>
  );
};

export default Step1SenderDetails;
