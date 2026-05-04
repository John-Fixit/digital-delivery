import useModalStore from "../../../../hooks/use-modal-store";

type NotificationPayload = {
  title?: string;
  message?: string;
  time?: string;
  type?: string;
};

const NotificationDetailsModal = () => {
  const { data, closeModal } = useModalStore();
  const notificationData =
    typeof data === "object" && data !== null
      ? (data as NotificationPayload)
      : {};

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
          {notificationData.title ?? "Notification Details"}
        </h3>
        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
          {notificationData.type ?? "info"}
        </span>
      </div>
      <p className="mt-3 text-sm text-text-secondary-light dark:text-text-secondary-dark">
        {notificationData.message ?? "No message available."}
      </p>
      <p className="mt-3 text-xs text-text-secondary-light dark:text-text-secondary-dark">
        {notificationData.time ?? "Now"}
      </p>
      <div className="mt-5 flex justify-end">
        <button
          type="button"
          onClick={closeModal}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NotificationDetailsModal;
