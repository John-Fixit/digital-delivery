import { useMemo } from "react";
import useDrawerStore from "../../../../hooks/use-drawer-store";
import useModalStore from "../../../../hooks/use-modal-store";
import { MODAL_NAMES } from "../../../../lib/overlay-names";

type EscrowPayload = {
  trackingId?: string;
};

const EscrowMilestonesDrawer = () => {
  const { data } = useDrawerStore();
  const { openModal } = useModalStore();

  const trackingId = useMemo(() => {
    if (typeof data === "object" && data !== null && "trackingId" in data) {
      return (data as EscrowPayload).trackingId ?? "Unknown";
    }
    return "Unknown";
  }, [data]);

  const milestones = [
    {
      id: "pickup-confirmed",
      title: "Pickup Confirmed",
      amount: "20%",
      status: "Completed",
      note: "Sender confirmed rider pickup.",
    },
    {
      id: "hub-verified",
      title: "Hub Verification",
      amount: "30%",
      status: "In Progress",
      note: "Awaiting destination hub scan.",
    },
    {
      id: "delivery-confirmed",
      title: "Delivery Confirmed",
      amount: "50%",
      status: "Pending",
      note: "Released after recipient verification.",
    },
  ];

  return (
    <div className="p-5 space-y-5">
      <div className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-background-dark-elevated p-4">
        <p className="text-xs uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark">
          Tracking ID
        </p>
        <h3 className="mt-1 text-xl font-semibold">{trackingId}</h3>
        <p className="mt-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
          Manage staged escrow release for this shipment delivery lifecycle.
        </p>
      </div>

      <div className="space-y-3">
        {milestones.map((milestone) => (
          <div
            key={milestone.id}
            className="rounded-xl border border-border-light dark:border-border-dark bg-card-light dark:bg-background-dark-elevated p-4"
          >
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">{milestone.title}</h4>
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                {milestone.amount}
              </span>
            </div>
            <p className="mt-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
              {milestone.note}
            </p>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs font-medium text-text-secondary-light dark:text-text-secondary-dark">
                Status: {milestone.status}
              </span>
              <button
                type="button"
                onClick={() =>
                  openModal(MODAL_NAMES.MILESTONE_APPROVAL, {
                    data: {
                      trackingId,
                      milestoneId: milestone.id,
                      milestoneTitle: milestone.title,
                    },
                  })
                }
                className="rounded-md border border-border-light dark:border-border-dark px-2.5 py-1 text-xs font-semibold hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Manage
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() =>
          openModal(MODAL_NAMES.MILESTONE_APPROVAL, {
            data: {
              trackingId,
              milestoneId: "delivery-confirmed",
              milestoneTitle: "Delivery Confirmed",
            },
          })
        }
        className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover"
      >
        Trigger escrow release review
      </button>
    </div>
  );
};

export default EscrowMilestonesDrawer;
