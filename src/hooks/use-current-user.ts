import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type AuthUserType = {
  id: number;
  full_name: string;
  email: string;
  phone: string | null;
  role: string;
  verification_status: string;
  created_at?: string;
};

type StoreType = {
  token: string | null;
  user: AuthUserType | null;
  setCurrentUser: (data: { token: string; user: AuthUserType }) => void;
  removeCurrentUser: () => void;
};

const useCurrentUser = create<StoreType>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      setCurrentUser: (data) => set({ token: data.token, user: data.user }),
      removeCurrentUser: () => set({ token: null, user: null }),
    }),
    {
      name: "logitrust-auth",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCurrentUser;
