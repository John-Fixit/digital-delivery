import { create } from "zustand";
import type { ModalName } from "../lib/overlay-names";

export interface ModalConfig {
  title?: string;
  backdrop?: "transparent" | "opaque" | "blur";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full";
  scrollBehavior?: "inside" | "outside" | "normal";
  isDismissable?: boolean;
  isKeyboardDismissDisabled?: boolean;
  closeButton?: boolean;
  hideCloseButton?: boolean;
  baseTransparent?: boolean;
  onConfirm?: () => void | Promise<void>;
  onCancel?: () => void;
}

export interface ModalDataTypes {
  [key: string]: unknown;
}

type ModalStore = {
  isOpen: boolean;
  modalName: ModalName | null;
  config: ModalConfig;
  data: ModalDataTypes;
  openModal: (
    modalName: ModalName,
    options?: {
      config?: ModalConfig;
      data?: ModalDataTypes;
    },
  ) => void;
  closeModal: () => void;
  updateConfig: (config?: Partial<ModalConfig>) => void;
  updateData: (data: Partial<ModalDataTypes>) => void;
};

const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  modalName: null,
  config: {},
  data: {},
  openModal: (modalName, options) =>
    set((state) => {
      const { config = {}, data = {} } = options || {};
      return {
        isOpen: true,
        modalName,
        config,
        data: { ...state.data, ...data },
      };
    }),
  closeModal: () =>
    set({
      isOpen: false,
      modalName: null,
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

export default useModalStore;
