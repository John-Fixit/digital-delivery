import useModalStore from "../../../../hooks/use-modal-store";

const AppNoticeModal = () => {
  const { data, closeModal } = useModalStore();
  const message =
    typeof data === "object" &&
    data !== null &&
    "message" in data &&
    typeof data.message === "string"
      ? data.message
      : "This feature will be available soon.";

  return (
    <div>
      <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
        Notice
      </h3>
      <p className="mt-2 text-sm text-text-secondary-light dark:text-text-secondary-dark">
        {message}
      </p>
      <div className="mt-5 flex justify-end">
        <button
          type="button"
          onClick={closeModal}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover"
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default AppNoticeModal;
