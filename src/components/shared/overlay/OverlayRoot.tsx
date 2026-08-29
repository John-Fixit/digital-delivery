import {
  Drawer,
  DrawerBody,
  DrawerContent as HeroDrawerContent,
  DrawerHeader,
  Modal,
  ModalBody,
  ModalContent as HeroModalContent,
} from "@heroui/react";
import clsx from "clsx";
import { DRAWER_NAMES, MODAL_NAMES } from "../../../lib/overlay-names";
import useDrawerStore from "../../../hooks/use-drawer-store";
import useModalStore from "../../../hooks/use-modal-store";
import CreateShipmentDrawer from "../../core/shipment/drawers/CreateShipmentDrawer";
import AppNoticeModal from "./modals/AppNoticeModal";
import CreateDisputeModal from "./modals/CreateDisputeModal";
import NotificationDetailsModal from "./modals/NotificationDetailsModal";
import MilestoneApprovalModal from "./modals/MilestoneApprovalModal";
import NotificationPreferencesModal from "./modals/NotificationPreferencesModal";
import AddFundsModal from "./modals/AddFundsModal";
import ShipmentDetailsDrawer from "../../core/shipment/drawers/ShipmentDetailsDrawer";
import EscrowMilestonesDrawer from "../../core/shipment/drawers/EscrowMilestonesDrawer";

const drawerTitleMap: Record<string, string> = {
  [DRAWER_NAMES.CREATE_SHIPMENT]: "Create Shipment",
  [DRAWER_NAMES.SHIPMENT_DETAILS]: "Shipment Details",
  [DRAWER_NAMES.ESCROW_MILESTONES]: "Escrow Milestones",
};

const DrawerContentView = ({ name }: { name: string }) => {
  if (name === DRAWER_NAMES.CREATE_SHIPMENT) {
    return <CreateShipmentDrawer />;
  }
  if (name === DRAWER_NAMES.SHIPMENT_DETAILS) {
    return <ShipmentDetailsDrawer />;
  }
  if (name === DRAWER_NAMES.ESCROW_MILESTONES) {
    return <EscrowMilestonesDrawer />;
  }
  return null;
};

const ModalContentView = ({ name }: { name: string }) => {
  if (name === MODAL_NAMES.APP_NOTICE) {
    return <AppNoticeModal />;
  }
  if (name === MODAL_NAMES.CREATE_DISPUTE) {
    return <CreateDisputeModal />;
  }
  if (name === MODAL_NAMES.NOTIFICATION_DETAILS) {
    return <NotificationDetailsModal />;
  }
  if (name === MODAL_NAMES.MILESTONE_APPROVAL) {
    return <MilestoneApprovalModal />;
  }
  if (name === MODAL_NAMES.NOTIFICATION_PREFERENCES) {
    return <NotificationPreferencesModal />;
  }
  if (name === MODAL_NAMES.ADD_FUNDS) {
    return <AddFundsModal />;
  }
  return null;
};

const OverlayRoot = () => {
  const { isOpen: isDrawerOpen, drawerName, config: drawerConfig, data: drawerData, closeDrawer } =
    useDrawerStore();
  const { isOpen: isModalOpen, modalName, config: modalConfig, closeModal } = useModalStore();

  const shouldHideDrawerCloseButton =
    drawerConfig.hideCloseButton ?? (drawerConfig.closeButton === false);
  const shouldHideModalCloseButton =
    modalConfig.hideCloseButton ?? (modalConfig.closeButton === false);
  const drawerTitle =
    (typeof drawerData.title === "string" && drawerData.title) ||
    (drawerName ? (drawerTitleMap[drawerName] ?? "Drawer") : "Drawer");

  return (
    <>
      <Drawer
        isOpen={isDrawerOpen}
        onOpenChange={(isOpen) => {
          if (!isOpen) closeDrawer();
        }}
        placement="right"
        size={drawerConfig.size ?? "2xl"}
        backdrop={drawerConfig.backdrop ?? "opaque"}
        scrollBehavior="inside"
        isDismissable={drawerConfig.isDismissable}
        isKeyboardDismissDisabled={drawerConfig.isKeyboardDismissDisabled}
        hideCloseButton
        classNames={{
          backdrop: "bg-black/45",
          base: clsx(
            "bg-card-light dark:bg-background-dark border-l border-border-light dark:border-border-dark shadow-2xl",
            drawerConfig.customWidth,
          ),
        }}
      >
        <HeroDrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="sticky top-0 z-10 flex items-center justify-between border-b border-border-light dark:border-border-dark bg-card-light/95 dark:bg-background-dark/95 backdrop-blur px-4 py-3">
                <h2 className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark">
                  {drawerTitle}
                </h2>
                {!shouldHideDrawerCloseButton ? (
                  <button
                    type="button"
                    onClick={() => {
                      closeDrawer();
                      onClose();
                    }}
                    className="rounded-md p-1 text-text-secondary-light dark:text-text-secondary-dark hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <span className="material-symbols-outlined text-xl">close</span>
                  </button>
                ) : null}
              </DrawerHeader>
              <DrawerBody className="p-0">
                {drawerName ? (
                  <DrawerContentView name={drawerName} />
                ) : null}
              </DrawerBody>
            </>
          )}
        </HeroDrawerContent>
      </Drawer>

      <Modal
        isOpen={isModalOpen}
        onOpenChange={(isOpen) => {
          if (!isOpen) closeModal();
        }}
        backdrop={modalConfig.backdrop ?? "opaque"}
        placement="center"
        size={modalConfig.size ?? "md"}
        scrollBehavior={modalConfig.scrollBehavior ?? "inside"}
        isDismissable={modalConfig.isDismissable}
        isKeyboardDismissDisabled={modalConfig.isKeyboardDismissDisabled}
        hideCloseButton={shouldHideModalCloseButton}
        classNames={{
          backdrop: "bg-black/50",
          base: clsx(
            "border border-border-light dark:border-border-dark bg-card-light dark:bg-background-dark-elevated shadow-xl",
            modalConfig.baseTransparent && "bg-transparent border-transparent shadow-none",
          ),
        }}
      >
        <HeroModalContent>
          <ModalBody className="p-5">
            {modalName ? (
              <ModalContentView name={modalName} />
            ) : null}
          </ModalBody>
        </HeroModalContent>
      </Modal>
    </>
  );
};

export default OverlayRoot;
