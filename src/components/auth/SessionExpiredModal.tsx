import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { useSessionExpiredStore } from "../../stores/session-expired-store";
import { isValidPostLoginPath } from "../../lib/post-login-redirect";

const SessionExpiredModal = () => {
  const navigate = useNavigate();
  const lockout = useSessionExpiredStore((s) => s.lockout);
  const returnPath = useSessionExpiredStore((s) => s.returnPathForLogin);
  const clearSessionExpired = useSessionExpiredStore((s) => s.clearSessionExpired);

  const goToLogin = () => {
    const raw = returnPath?.trim() || "/home";
    const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
    const safeFrom = isValidPostLoginPath(withSlash) ? withSlash : "/home";
    clearSessionExpired();
    navigate(`/auth/login?from=${encodeURIComponent(safeFrom)}`, { replace: true });
  };

  return (
    <Modal
      isOpen={lockout}
      onOpenChange={() => {}}
      isDismissable={false}
      hideCloseButton
      backdrop="blur"
      placement="center"
      classNames={{
        backdrop: "bg-slate-950/40",
        base: "border border-slate-200 dark:border-slate-700",
      }}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 pt-6">
          <span className="text-lg font-bold text-slate-900 dark:text-slate-50">
            Session expired
          </span>
        </ModalHeader>
        <ModalBody className="pb-2">
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Your session is no longer valid—often because you were signed out elsewhere or
            your token expired. Please sign in again to continue where you left off.
          </p>
        </ModalBody>
        <ModalFooter className="pb-6">
          <Button color="primary" className="font-semibold" size="lg" onPress={goToLogin}>
            Go to Login
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SessionExpiredModal;
