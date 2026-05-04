import { create } from "zustand";

type SessionExpiredState = {
  lockout: boolean;
  /** Path (+ optional search) to send user back to after re-login */
  returnPathForLogin: string | null;
  openSessionExpired: (returnPath: string) => void;
  clearSessionExpired: () => void;
};

export const useSessionExpiredStore = create<SessionExpiredState>((set) => ({
  lockout: false,
  returnPathForLogin: null,
  openSessionExpired: (returnPath) =>
    set({ lockout: true, returnPathForLogin: returnPath }),
  clearSessionExpired: () =>
    set({ lockout: false, returnPathForLogin: null }),
}));
