import { useMemo, useState } from "react";
import PageHeader from "../../components/shared/page-header/PageHeader";
import LoadingState from "../../components/shared/states/LoadingState";
import ErrorState from "../../components/shared/states/ErrorState";
import EmptyState from "../../components/shared/states/EmptyState";
import type { NotificationType } from "../../services/notifications/mock-notifications";
import useModalStore from "../../hooks/use-modal-store";
import useDrawerStore from "../../hooks/use-drawer-store";
import { DRAWER_NAMES, MODAL_NAMES } from "../../lib/overlay-names";
import { useNotificationCenter } from "../../api-service/notifications/notification-center";

const NotificationCenter = () => {
  const { openModal } = useModalStore();
  const { openDrawer } = useDrawerStore();
  const [activeFilter, setActiveFilter] = useState<"all" | "unread">("all");

  const { data: notifications = [], isLoading, isError, error, refetch } =
    useNotificationCenter();

  const errorMessage =
    isError && error instanceof Error ? error.message : "Could not load notifications.";

  const filteredNotifications = useMemo(() => {
    if (activeFilter === "all") {
      return notifications;
    }
    return notifications.filter((notification) => !notification.read);
  }, [activeFilter, notifications]);

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:p-8">
      <PageHeader
        title="Notification Center"
        description="Stay updated on shipment events, escrow milestones, and action alerts."
      />

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() =>
            openModal(MODAL_NAMES.NOTIFICATION_PREFERENCES, {
              config: { size: "md" },
            })
          }
          className="rounded-md border border-border-light px-3 py-1.5 text-xs font-semibold hover:bg-slate-50 dark:border-border-dark dark:hover:bg-slate-800"
        >
          Notification preferences
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setActiveFilter("all")}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
            activeFilter === "all"
              ? "bg-primary text-white"
              : "bg-slate-100 text-text-secondary-light dark:bg-slate-800 dark:text-text-secondary-dark"
          }`}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter("unread")}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
            activeFilter === "unread"
              ? "bg-primary text-white"
              : "bg-slate-100 text-text-secondary-light dark:bg-slate-800 dark:text-text-secondary-dark"
          }`}
        >
          Unread
        </button>
      </div>

      {isLoading ? (
        <LoadingState title="Loading notifications" />
      ) : isError ? (
        <ErrorState description={errorMessage} onRetry={() => void refetch()} />
      ) : !filteredNotifications.length ? (
        <EmptyState
          title="No notifications available"
          description="You are all caught up. New updates will appear here."
        />
      ) : (
        <div className="space-y-3">
          {filteredNotifications.map((notification: NotificationType) => (
            <div
              key={notification.id}
              className="rounded-xl border border-border-light bg-card-light p-4 dark:border-border-dark dark:bg-background-dark-elevated"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold">{notification.title}</h3>
                    {!notification.read ? (
                      <span className="size-2 rounded-full bg-primary" />
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    {notification.message}
                  </p>
                  <p className="mt-2 text-xs text-text-secondary-light dark:text-text-secondary-dark">
                    {notification.time}
                  </p>
                </div>
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  {notification.type}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() =>
                    openModal(MODAL_NAMES.NOTIFICATION_DETAILS, {
                      data: notification,
                      config: { size: "md" },
                    })
                  }
                  className="rounded-md border border-border-light px-3 py-1.5 text-xs font-semibold hover:bg-slate-50 dark:border-border-dark dark:hover:bg-slate-800"
                >
                  View details
                </button>
                {notification.trackingId ? (
                  <button
                    type="button"
                    onClick={() =>
                      openDrawer(DRAWER_NAMES.SHIPMENT_DETAILS, {
                        data: { trackingId: notification.trackingId },
                        config: { size: "3xl", customWidth: "max-w-3xl" },
                      })
                    }
                    className="rounded-md border border-border-light px-3 py-1.5 text-xs font-semibold hover:bg-slate-50 dark:border-border-dark dark:hover:bg-slate-800"
                  >
                    Open shipment drawer
                  </button>
                ) : null}
                {notification.trackingId ? (
                  <button
                    type="button"
                    onClick={() =>
                      openModal(MODAL_NAMES.CREATE_DISPUTE, {
                        data: { trackingId: notification.trackingId },
                        config: { size: "lg" },
                      })
                    }
                    className="rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-white hover:bg-primary-hover"
                  >
                    Raise dispute
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;
