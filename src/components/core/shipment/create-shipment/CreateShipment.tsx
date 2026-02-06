import React, { useState } from "react";
import Stepper from "./Stepper";
import Step1SenderDetails from "./Step1SenderDetails";
import Step2RecipientDetails from "./Step2RecipientDetails";
import Step3PackageDetails from "./Step3PackageDetails";
import Step4DeliveryOptions from "./Step4DeliveryOptions";
import PricingSummary from "./PricingSummary";

interface FormData {
  // Step 1
  senderName: string;
  senderPhone: string;
  pickupAddress: string;
  // Step 2
  recipientName: string;
  recipientPhone: string;
  deliveryAddress: string;
  // Step 3
  category: string;
  weight: string;
  value: string;
  description: string;
  photo: File | null;
  // Step 4
  deliveryType: "standard" | "express";
}

const CreateShipment: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    senderName: "",
    senderPhone: "",
    pickupAddress: "",
    recipientName: "",
    recipientPhone: "",
    deliveryAddress: "",
    category: "Electronics",
    weight: "",
    value: "",
    description: "",
    photo: null,
    deliveryType: "standard",
  });

  const steps = [
    { title: "Sender", icon: "location_on", description: "Pickup details" },
    {
      title: "Recipient",
      icon: "person_pin_circle",
      description: "Delivery details",
    },
    { title: "Package", icon: "inventory_2", description: "Item information" },
    { title: "Delivery", icon: "speed", description: "Shipping options" },
  ];

  const handleFieldChange = (field: string, value: string | File | null) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (step: number) => {
    setCurrentStep(step);
  };

  const handleCreateShipment = () => {
    console.log("Creating shipment:", formData);
    // Add your shipment creation logic here
  };

  const handleSaveDraft = () => {
    console.log("Saving draft:", formData);
    // Add your draft saving logic here
  };

  // Calculate pricing
  const baseDeliveryFee = 5000;
  const distanceFee = 3500;
  const distance = 12.4;
  const subtotal = baseDeliveryFee + distanceFee;
  const escrowFee = Math.round(subtotal * 0.03);
  const total = subtotal + escrowFee;

  return (
    <main className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark">
      {/* Stepper */}
      <Stepper
        steps={steps}
        currentStep={currentStep}
        onStepClick={handleStepClick}
      />

      {/* Header */}
      <div className="px-4 sm:px-8 pt-8 pb-4">
        <h2 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
          Create New Shipment
        </h2>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mt-1">
          Complete the details below to list your shipment in the marketplace.
        </p>
      </div>

      {/* Form Content */}
      <div className="px-4 sm:px-8 pb-12 flex flex-col lg:flex-row gap-8">
        <div className="flex-1 space-y-6">
          {/* Step 1: Sender Details */}
          {currentStep === 0 && (
            <Step1SenderDetails
              formData={{
                senderName: formData.senderName,
                senderPhone: formData.senderPhone,
                pickupAddress: formData.pickupAddress,
              }}
              onChange={handleFieldChange}
            />
          )}

          {/* Step 2: Recipient Details */}
          {currentStep === 1 && (
            <Step2RecipientDetails
              formData={{
                recipientName: formData.recipientName,
                recipientPhone: formData.recipientPhone,
                deliveryAddress: formData.deliveryAddress,
              }}
              onChange={handleFieldChange}
            />
          )}

          {/* Step 3: Package Details */}
          {currentStep === 2 && (
            <Step3PackageDetails
              formData={{
                category: formData.category,
                weight: formData.weight,
                value: formData.value,
                description: formData.description,
                photo: formData.photo,
              }}
              onChange={handleFieldChange}
            />
          )}

          {/* Step 4: Delivery Options */}
          {currentStep === 3 && (
            <Step4DeliveryOptions
              formData={{
                deliveryType: formData.deliveryType,
              }}
              onChange={handleFieldChange}
            />
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 pt-4">
            {currentStep > 0 && (
              <button
                onClick={handlePrevious}
                className="flex-1 sm:flex-none h-12 px-8 bg-card-light dark:bg-card-dark text-text-primary-light dark:text-text-primary-dark font-bold rounded-xl border border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-card-dark-hover transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-xl">
                  arrow_back
                </span>
                <span>Previous</span>
              </button>
            )}
            {currentStep < steps.length - 1 && (
              <button
                onClick={handleNext}
                className="flex-1 sm:flex-none h-12 px-8 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2 ml-auto"
              >
                <span>Next Step</span>
                <span className="material-symbols-outlined text-xl">
                  arrow_forward
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Pricing Summary Sidebar */}
        <aside className="w-full lg:w-96">
          <PricingSummary
            baseDeliveryFee={baseDeliveryFee}
            distanceFee={distanceFee}
            distance={distance}
            escrowFee={escrowFee}
            total={total}
            onCreateShipment={handleCreateShipment}
            onSaveDraft={handleSaveDraft}
          />
        </aside>
      </div>

      {/* Footer */}
      <footer className="p-6 text-center mt-auto border-t border-border-light dark:border-border-dark">
        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
          © 2024 Shipment Logistics Marketplace. All rights reserved. Secure SSL
          Encrypted.
        </p>
      </footer>
    </main>
  );
};

export default CreateShipment;
