import { mockDisputes, type DisputeType } from "./mock-disputes";

const MOCK_DELAY_MS = 500;

const wait = (ms: number) =>
  new Promise<void>((resolve) => {
    setTimeout(resolve, ms);
  });

export const disputesService = {
  async getDisputes(): Promise<DisputeType[]> {
    await wait(MOCK_DELAY_MS);
    return mockDisputes;
  },
};
