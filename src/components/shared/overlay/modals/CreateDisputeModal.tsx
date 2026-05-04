import { useState } from "react";
import useModalStore from "../../../../hooks/use-modal-store";

type DisputePayload = {
  trackingId?: string;
};

const CreateDisputeModal = () => {
  const { data, closeModal } = useModalStore();
  const [category, setCategory] = useState("delivery-delay");
  const [message, setMessage] = useState("");

  const trackingId =
    typeof data === "object" && data !== null && "trackingId" in data
      ? ((data as DisputePayload).trackingId ?? "Unknown shipment")
      : "Unknown shipment";

  const submitDispute = () => {
    console.log("Dispute payload:", {
      trackingId,
      category,
      message,
    });
    closeModal();
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
        Raise Dispute
      </h3>
      <p className="mt-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
        Shipment: {trackingId}
      </p>

      <div className="mt-4 space-y-3">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark">
            Category
          </label>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="mt-1 h-10 w-full rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-background-dark px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          >
            <option value="delivery-delay">Delivery Delay</option>
            <option value="package-damage">Package Damage</option>
            <option value="wrong-delivery">Wrong Delivery</option>
            <option value="payment-dispute">Payment Dispute</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark">
            Description
          </label>
          <textarea
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Describe the issue and provide any important context."
            className="mt-1 w-full rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-background-dark px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      <div className="mt-5 flex justify-end gap-2">
        <button
          type="button"
          onClick={closeModal}
          className="rounded-lg border border-border-light dark:border-border-dark px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={submitDispute}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover"
        >
          Submit dispute
        </button>
      </div>
    </div>
  );
};

export default CreateDisputeModal;
