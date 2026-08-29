import { useState } from "react";
import useModalStore from "../../../../hooks/use-modal-store";
import { useCreateDispute } from "../../../../api-service/disputes/disputes-page";
import { useMyShipments } from "../../../../api-service/shipments/my-shipments";
import { successToast, errorToast } from "../../../../lib/notification-toast";
import { getApiErrorMessage } from "../../../../api-service/utils/error";

type DisputePayload = {
  trackingId?: string;
};

const CreateDisputeModal = () => {
  const { data, closeModal } = useModalStore();
  const createDispute = useCreateDispute();
  const shipments = useMyShipments();

  const presetTrackingId =
    typeof data === "object" && data !== null && "trackingId" in data
      ? ((data as DisputePayload).trackingId ?? "")
      : "";

  const [trackingId, setTrackingId] = useState(presetTrackingId);
  const [category, setCategory] = useState("delivery-delay");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const submitDispute = async () => {
    setError("");
    if (!trackingId) {
      setError("Choose which shipment this dispute is about.");
      return;
    }
    if (message.trim().length < 5) {
      setError("Describe the issue in a bit more detail.");
      return;
    }
    try {
      await createDispute.mutateAsync({
        trackingCode: trackingId,
        reason: `[${category}] ${message}`,
      });
      successToast("Dispute submitted — our team will review it.");
      closeModal();
    } catch (err) {
      errorToast(getApiErrorMessage(err, "Could not submit this dispute."));
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
        Raise Dispute
      </h3>
      <p className="mt-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
        {presetTrackingId
          ? `Shipment: ${presetTrackingId}`
          : "Select the shipment this dispute concerns."}
      </p>

      <div className="mt-4 space-y-3">
        {error ? (
          <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-300">
            {error}
          </p>
        ) : null}

        {!presetTrackingId ? (
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark">
              Shipment
            </label>
            <select
              value={trackingId}
              onChange={(event) => setTrackingId(event.target.value)}
              className="mt-1 h-10 w-full rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-background-dark px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              <option value="">Select a shipment…</option>
              {shipments.data?.map((s) => (
                <option key={s.trackingId} value={s.trackingId}>
                  {s.trackingId} — {s.itemDescription}
                </option>
              ))}
            </select>
          </div>
        ) : null}

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
          disabled={createDispute.isPending}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover disabled:opacity-60"
        >
          {createDispute.isPending ? "Submitting…" : "Submit dispute"}
        </button>
      </div>
    </div>
  );
};

export default CreateDisputeModal;
