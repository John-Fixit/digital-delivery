import { create } from "zustand";

type DataType = {
  [i: string]: unknown;
};

type StoreType = {
  isSidebarOpen: boolean;
  data: DataType;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

const useSidebarStore = create<StoreType>((set) => ({
  isSidebarOpen: true,
  data: {},
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  closeSidebar: () => set({ isSidebarOpen: false }),
}));

export default useSidebarStore;
