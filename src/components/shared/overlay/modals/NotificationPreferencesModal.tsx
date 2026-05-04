import { useState } from "react";
import useModalStore from "../../../../hooks/use-modal-store";
import { MODAL_NAMES } from "../../../../lib/overlay-names";

const ToggleRow = ({
  label,
  enabled,
  onToggle,
}: {
  label: string;
  enabled: boolean;
  onToggle: () => void;
}) => (
  <div className="flex items-center justify-between rounded-lg border border-border-light dark:border-border-dark p-3">
    <span className="text-sm font-medium">{label}</span>
    <button
      type="button"
      onClick={onToggle}
      className={`relative h-6 w-11 rounded-full transition-colors ${
        enabled ? "bg-primary" : "bg-slate-300 dark:bg-slate-700"
      }`}
    >
      <span
        className={`absolute top-0.5 size-5 rounded-full bg-white transition-transform ${
          enabled ? "translate-x-5" : "translate-x-0.5"
        }`}
      />
    </button>
  </div>
);

const NotificationPreferencesModal = () => {
  const { closeModal, openModal } = useModalStore();
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [pushEnabled, setPushEnabled] = useState(true);
  const [inAppEnabled, setInAppEnabled] = useState(true);

  const savePreferences = () => {
    console.log("Notification preferences:", {
      emailEnabled,
      pushEnabled,
      inAppEnabled,
    });
    openModal(MODAL_NAMES.APP_NOTICE, {
      data: {
        message:
          "Notification preferences saved. Backend sync will be connected next.",
      },
    });
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
        Notification Preferences
      </h3>
      <p className="mt-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
        Choose how you want to receive updates.
      </p>

      <div className="mt-4 space-y-3">
        <ToggleRow
          label="Email notifications"
          enabled={emailEnabled}
          onToggle={() => setEmailEnabled((prev) => !prev)}
        />
        <ToggleRow
          label="Push notifications"
          enabled={pushEnabled}
          onToggle={() => setPushEnabled((prev) => !prev)}
        />
        <ToggleRow
          label="In-app notifications"
          enabled={inAppEnabled}
          onToggle={() => setInAppEnabled((prev) => !prev)}
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
          onClick={savePreferences}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover"
        >
          Save preferences
        </button>
      </div>
    </div>
  );
};

export default NotificationPreferencesModal;
