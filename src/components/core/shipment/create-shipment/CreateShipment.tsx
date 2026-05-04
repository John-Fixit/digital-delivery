import React, { useState } from "react";
import Stepper from "./Stepper";
import Step1SenderDetails from "./Step1SenderDetails";
import Step2RecipientDetails from "./Step2RecipientDetails";
import Step3PackageDetails from "./Step3PackageDetails";
import Step4DeliveryOptions from "./Step4DeliveryOptions";
import PricingSummary from "./PricingSummary";
import useDrawerStore from "../../../../hooks/use-drawer-store";
import { MODAL_NAMES } from "../../../../lib/overlay-names";
import useModalStore from "../../../../hooks/use-modal-store";
import { useCreateShipment } from "../../../../api-service/shipments/create-shipment";
import { getApiErrorMessage } from "../../../../api-service/utils/error";

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

type PropTypes = {
  variant?: "page" | "drawer";
};

const CreateShipment: React.FC<PropTypes> = ({ variant = "page" }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const { closeDrawer } = useDrawerStore();
  const { openModal } = useModalStore();
  const createShipment = useCreateShipment();
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

  const handleCreateShipment = async () => {
    const weight = Number(formData.weight);
    const value = Number(formData.value);
    if (
      !formData.senderName.trim() ||
      !formData.recipientName.trim() ||
      !formData.pickupAddress.trim() ||
      !formData.deliveryAddress.trim() ||
      Number.isNaN(weight) ||
      weight <= 0 ||
      Number.isNaN(value) ||
      value < 0
    ) {
      openModal(MODAL_NAMES.APP_NOTICE, {
        data: {
          message:
            "Please complete all steps with valid sender, recipient, addresses, weight, and value.",
        },
      });
      return;
    }
    try {
      await createShipment.mutateAsync({
        senderName: formData.senderName,
        senderPhone: formData.senderPhone,
        pickupAddress: formData.pickupAddress,
        recipientName: formData.recipientName,
        recipientPhone: formData.recipientPhone,
        deliveryAddress: formData.deliveryAddress,
        category: formData.category,
        weight,
        value,
        description: formData.description,
        deliveryType: formData.deliveryType,
      });
      openModal(MODAL_NAMES.APP_NOTICE, {
        data: { message: "Shipment created successfully." },
      });
      if (variant === "drawer") {
        closeDrawer();
      }
    } catch (err) {
      openModal(MODAL_NAMES.APP_NOTICE, {
        data: { message: getApiErrorMessage(err, "Could not create shipment.") },
      });
    }
  };

  const handleSaveDraft = () => {
    console.log("Saving draft:", formData);
    openModal(MODAL_NAMES.APP_NOTICE, {
      data: {
        message: "Draft was captured locally. API persistence comes next.",
      },
    });
  };

  const isDrawerMode = variant === "drawer";

  const closeCreateDrawer = () => {
    if (variant === "drawer") {
      closeDrawer();
      return;
    }
    openModal(MODAL_NAMES.APP_NOTICE, {
      data: {
        message:
          "Use this flow to create a shipment. Closing is available in drawer mode.",
      },
    });
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
      <div className="px-4 sm:px-8 pt-6 pb-4 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
          Create New Shipment
          </h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mt-1">
            Complete the details below to list your shipment in the marketplace.
          </p>
        </div>
        {isDrawerMode ? (
          <button
            type="button"
            onClick={closeCreateDrawer}
            className="rounded-md p-1 text-text-secondary-light dark:text-text-secondary-dark hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        ) : null}
      </div>

      {/* Form Content */}
      <div className="px-4 sm:px-8 pb-8 flex flex-col lg:flex-row gap-6">
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
            onCreateShipment={() => void handleCreateShipment()}
            onSaveDraft={handleSaveDraft}
            isSubmitting={createShipment.isPending}
          />
        </aside>
      </div>

      {!isDrawerMode ? (
        <footer className="p-6 text-center mt-auto border-t border-border-light dark:border-border-dark">
          <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
            © 2024 Shipment Logistics Marketplace. All rights reserved. Secure
            SSL Encrypted.
          </p>
        </footer>
      ) : null}
    </main>
  );
};

export default CreateShipment;
