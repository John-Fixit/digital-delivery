import { create } from "zustand";
import type { DrawerName } from "../lib/overlay-names";

export interface DrawerConfig {
  backdrop?: "transparent" | "opaque" | "blur";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
  isDismissable?: boolean;
  isKeyboardDismissDisabled?: boolean;
  closeButton?: boolean;
  hideCloseButton?: boolean;
  customWidth?: string;
}

export interface DrawerDataTypes {
  title?: string;
  description?: string;
  [key: string]: unknown;
}

type DrawerStore = {
  isOpen: boolean;
  drawerName: DrawerName | null;
  config: DrawerConfig;
  data: DrawerDataTypes;
  openDrawer: (
    drawerName: DrawerName,
    options?: {
      config?: DrawerConfig;
      data?: DrawerDataTypes;
    },
  ) => void;
  closeDrawer: () => void;
  updateConfig: (config?: Partial<DrawerConfig>) => void;
  updateData: (data: Partial<DrawerDataTypes>) => void;
};

const useDrawerStore = create<DrawerStore>((set) => ({
  isOpen: false,
  drawerName: null,
  config: {},
  data: {},
  openDrawer: (drawerName, options) =>
    set((state) => {
      const { config = {}, data = {} } = options || {};
      return {
        isOpen: true,
        drawerName,
        config,
        data: { ...state.data, ...data },
      };
    }),
  closeDrawer: () =>
    set({
      isOpen: false,
      drawerName: null,
      config: {},
      data: {},
    }),
  updateData: (newData) =>
    set((state) => ({
      data: { ...state.data, ...newData },
    })),
  updateConfig: (newConfig) =>
    set((state) => ({
      config: { ...state.config, ...newConfig },
    })),
}));

export default useDrawerStore;
