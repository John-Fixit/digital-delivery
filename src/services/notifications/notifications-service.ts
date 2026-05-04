import { mockNotifications, type NotificationType } from "./mock-notifications";

const MOCK_DELAY_MS = 450;

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

export const notificationsService = {
  async getNotifications(): Promise<NotificationType[]> {
    await wait(MOCK_DELAY_MS);
    return mockNotifications;
  },
};
