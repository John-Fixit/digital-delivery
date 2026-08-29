import { useDashboard, type ActionCenterItemType } from "../../../../api-service/dashboard/dashboard";
import { useReleaseEscrow } from "../../../../api-service/wallet/wallet";
import { errorToast, successToast } from "../../../../lib/notification-toast";
import { formatCurrency } from "../../../../utils/format-currency";
import useModalStore from "../../../../hooks/use-modal-store";
import { MODAL_NAMES } from "../../../../lib/overlay-names";
import Button from "../../../shared/ui/button/Button";

const ActionItemCard = ({ item }: { item: ActionCenterItemType }) => {
  const { openModal } = useModalStore();
  const { mutate: releaseEscrow, isPending } = useReleaseEscrow();

  const isRelease = item.type === "release_payment";

  const handlePrimary = () => {
    if (isRelease) {
      releaseEscrow(item.trackingId, {
        onSuccess: () => successToast(`Escrow released for ${item.trackingId}.`),
        onError: (error) =>
          errorToast(error instanceof Error ? error.message : "Could not release escrow."),
      });
    }
  };

  const handleSecondary = () => {
    if (isRelease) {
      openModal(MODAL_NAMES.CREATE_DISPUTE, {
        data: { trackingId: item.trackingId },
        config: { size: "lg" },
      });
    }
  };

  return (
    <div className="bg-card-light dark:bg-card-dark p-5 rounded-2xl border border-border-light dark:border-border-dark shadow-sm flex flex-col justify-between hover:border-primary/30 transition-colors">
      <div className="flex items-start gap-4 mb-4">
        <div
          className={`size-10 rounded-xl flex items-center justify-center shrink-0 ${
            isRelease ? "bg-orange-100 text-orange-600" : "bg-blue-100 text-blue-600"
          }`}
        >
          <span className="material-symbols-outlined">
            {isRelease ? "payments" : "local_shipping"}
          </span>
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-default-600">
            {item.title}
          </h4>
          <p className="text-xs text-slate-500 mt-0.5">{item.description}</p>
        </div>
      </div>
      <div className="flex gap-2 mt-auto">
        <button
          type="button"
          disabled={isRelease && isPending}
          onClick={handlePrimary}
          className="flex-1 cursor-pointer bg-primary text-white text-xs font-bold py-2 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-60"
        >
          {isRelease && isPending ? "Releasing…" : item.primaryLabel}
        </button>
        <Button
          onPress={handleSecondary}
          className="bg-default-50 text-default-600 text-xs font-bold py-2 rounded-lg border border-border-light dark:border-border-dark"
        >
          {item.secondaryLabel}
        </Button>
      </div>
    </div>
  );
};

const ActionCenter = () => {
  const { data: dashboard, isLoading } = useDashboard();

  const items = dashboard?.actionCenter.items ?? [];
  const wallet = dashboard?.actionCenter.escrowWallet;

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-default-600 flex items-center gap-2">
          <span className="material-symbols-outlined text-orange-500">bolt</span>
          Action Center
        </h3>
        {items.length > 0 ? (
          <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
            {items.length} Urgent Action{items.length === 1 ? "" : "s"}
          </span>
        ) : null}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <div className="lg:col-span-2 bg-card-light dark:bg-card-dark p-5 rounded-2xl border border-border-light dark:border-border-dark shadow-sm flex items-center justify-center text-sm text-slate-500">
            Loading action items…
          </div>
        ) : items.length === 0 ? (
          <div className="lg:col-span-2 bg-card-light dark:bg-card-dark p-5 rounded-2xl border border-border-light dark:border-border-dark shadow-sm flex items-center justify-center text-sm text-slate-500">
            No urgent actions right now.
          </div>
        ) : (
          items.map((item) => <ActionItemCard key={item.id} item={item} />)
        )}

        <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-xl flex flex-col relative overflow-hidden">
          <div className="absolute -right-6 -top-6 size-24 bg-primary/20 rounded-full blur-2xl"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                Escrow Wallet
              </p>
              <p className="text-2xl font-bold mt-1">
                {formatCurrency(wallet?.headlineTotal ?? 0)}
              </p>
            </div>
            <div className="flex items-center gap-1 bg-success/20 text-success-400 px-2 py-0.5 rounded-full border border-success/30">
              <span className="material-symbols-outlined text-[14px]">shield</span>
              <span className="text-[10px] font-bold">Protected</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-auto relative z-10">
            <div>
              <p className="text-slate-500 text-[10px] font-medium">Locked Funds</p>
              <p className="text-sm font-bold">{formatCurrency(wallet?.lockedFunds ?? 0)}</p>
            </div>
            <div>
              <p className="text-slate-500 text-[10px] font-medium">Available</p>
              <p className="text-sm font-bold text-primary-400">
                {formatCurrency(wallet?.availableBalance ?? 0)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionCenter;
