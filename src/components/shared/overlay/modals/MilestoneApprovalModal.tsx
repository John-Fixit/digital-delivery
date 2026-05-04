import { useState } from "react";
import useModalStore from "../../../../hooks/use-modal-store";
import { MODAL_NAMES } from "../../../../lib/overlay-names";

type MilestonePayload = {
  trackingId?: string;
  milestoneId?: string;
  milestoneTitle?: string;
};

const MilestoneApprovalModal = () => {
  const { data, closeModal, openModal } = useModalStore();
  const [comment, setComment] = useState("");
  const [pickupCode, setPickupCode] = useState("");
  const [pickupPhoto, setPickupPhoto] = useState("");
  const [hubName, setHubName] = useState("");
  const [hubReference, setHubReference] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [deliveryOtp, setDeliveryOtp] = useState("");

  const milestoneData =
    typeof data === "object" && data !== null
      ? (data as MilestonePayload)
      : {};

  const milestoneId = milestoneData.milestoneId ?? "pickup-confirmed";
  const milestoneTitle = milestoneData.milestoneTitle ?? "Milestone Approval";
  const trackingId = milestoneData.trackingId ?? "Unknown";

  const submitApproval = () => {
    console.log("Milestone approval payload:", {
      trackingId,
      milestoneId,
      comment,
      pickupCode,
      pickupPhoto,
      hubName,
      hubReference,
      recipientName,
      deliveryOtp,
    });
    openModal(MODAL_NAMES.APP_NOTICE, {
      data: {
        message: `Approval for "${milestoneTitle}" has been captured and will be sent to backend workflow.`,
      },
    });
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
        {milestoneTitle}
      </h3>
      <p className="mt-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
        Tracking ID: {trackingId}
      </p>

      <div className="mt-4 space-y-3">
        {milestoneId === "pickup-confirmed" ? (
          <>
            <input
              value={pickupCode}
              onChange={(event) => setPickupCode(event.target.value)}
              placeholder="Pickup verification code"
              className="h-10 w-full rounded-lg border border-border-light dark:border-border-dark px-3 text-sm bg-card-light dark:bg-background-dark"
            />
            <input
              value={pickupPhoto}
              onChange={(event) => setPickupPhoto(event.target.value)}
              placeholder="Pickup proof URL"
              className="h-10 w-full rounded-lg border border-border-light dark:border-border-dark px-3 text-sm bg-card-light dark:bg-background-dark"
            />
          </>
        ) : null}

        {milestoneId === "hub-verified" ? (
          <>
            <input
              value={hubName}
              onChange={(event) => setHubName(event.target.value)}
              placeholder="Hub name"
              className="h-10 w-full rounded-lg border border-border-light dark:border-border-dark px-3 text-sm bg-card-light dark:bg-background-dark"
            />
            <input
              value={hubReference}
              onChange={(event) => setHubReference(event.target.value)}
              placeholder="Hub verification reference"
              className="h-10 w-full rounded-lg border border-border-light dark:border-border-dark px-3 text-sm bg-card-light dark:bg-background-dark"
            />
          </>
        ) : null}

        {milestoneId === "delivery-confirmed" ? (
          <>
            <input
              value={recipientName}
              onChange={(event) => setRecipientName(event.target.value)}
              placeholder="Recipient full name"
              className="h-10 w-full rounded-lg border border-border-light dark:border-border-dark px-3 text-sm bg-card-light dark:bg-background-dark"
            />
            <input
              value={deliveryOtp}
              onChange={(event) => setDeliveryOtp(event.target.value)}
              placeholder="Delivery OTP"
              className="h-10 w-full rounded-lg border border-border-light dark:border-border-dark px-3 text-sm bg-card-light dark:bg-background-dark"
            />
          </>
        ) : null}

        <textarea
          rows={3}
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Approval comment"
          className="w-full rounded-lg border border-border-light dark:border-border-dark px-3 py-2 text-sm bg-card-light dark:bg-background-dark"
        />
      </div>

      <div className="mt-5 flex justify-end gap-2">
        <button
          type="button"
          onClick={closeModal}
          className="rounded-lg border border-border-light dark:border-border-dark px-4 py-2 text-sm font-medium"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={submitApproval}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover"
        >
          Submit approval
        </button>
      </div>
    </div>
  );
};

export default MilestoneApprovalModal;
