import { useState } from "react";
import useModalStore from "../../../../hooks/use-modal-store";
import { useTopUpWallet } from "../../../../api-service/wallet/wallet";
import { errorToast, successToast } from "../../../../lib/notification-toast";
import { formatCurrency } from "../../../../utils/format-currency";

const presetAmounts = [5000, 10000, 25000, 50000];

const AddFundsModal = () => {
  const { closeModal } = useModalStore();
  const [amount, setAmount] = useState<number | "">(10000);
  const { mutate: topUp, isPending } = useTopUpWallet();

  const handleSubmit = () => {
    if (!amount || amount <= 0) {
      errorToast("Enter an amount greater than zero.");
      return;
    }
    topUp(Number(amount), {
      onSuccess: (summary) => {
        successToast(`Wallet funded. New balance: ${formatCurrency(summary.availableBalance)}`);
        closeModal();
      },
      onError: (error) => {
        errorToast(error instanceof Error ? error.message : "Could not fund wallet.");
      },
    });
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
        Add Funds
      </h3>
      <p className="mt-1 text-sm text-text-secondary-light dark:text-text-secondary-dark">
        Manual top-up for testing the escrow flow — a real payment gateway (Paystack /
        Flutterwave) will replace this before launch.
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {presetAmounts.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => setAmount(preset)}
            className={`rounded-lg border px-3 py-1.5 text-sm font-semibold transition-colors ${
              amount === preset
                ? "border-primary bg-primary/10 text-primary"
                : "border-border-light dark:border-border-dark hover:bg-slate-50 dark:hover:bg-slate-800"
            }`}
          >
            {formatCurrency(preset)}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <label className="text-xs font-semibold uppercase tracking-wider text-text-secondary-light dark:text-text-secondary-dark">
          Amount (NGN)
        </label>
        <input
          type="number"
          min={1}
          value={amount}
          onChange={(event) =>
            setAmount(event.target.value === "" ? "" : Number(event.target.value))
          }
          className="mt-1 h-10 w-full rounded-lg border border-border-light dark:border-border-dark bg-card-light dark:bg-background-dark px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <div className="mt-5 flex justify-end gap-2">
        <button
          type="button"
          onClick={closeModal}
          className="rounded-lg border border-border-light dark:border-border-dark px-4 py-2 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800"
        >
          Cancel
        </button>
        <button
          type="button"
          disabled={isPending}
          onClick={handleSubmit}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-hover disabled:opacity-60"
        >
          {isPending ? "Funding…" : "Add Funds"}
        </button>
      </div>
    </div>
  );
};

export default AddFundsModal;
