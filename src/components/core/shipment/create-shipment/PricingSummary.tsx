import React from "react";

interface PricingSummaryProps {
  baseDeliveryFee: number;
  distanceFee: number;
  distance: number;
  escrowFee: number;
  total: number;
  onCreateShipment: () => void;
  onSaveDraft: () => void;
}

const PricingSummary: React.FC<PricingSummaryProps> = ({
  baseDeliveryFee,
  distanceFee,
  distance,
  escrowFee,
  total,
  onCreateShipment,
  onSaveDraft,
}) => {
  return (
    <div className="sticky top-24 space-y-4">
      <div className="form-card bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden shadow-lg">
        <div className="p-6 bg-slate-900 dark:bg-background-dark text-white">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg">Pricing Summary</h3>
            <div className="px-2 py-0.5 bg-success-bg text-success text-[10px] font-bold uppercase rounded flex items-center gap-1 border border-success/30">
              <span className="material-symbols-outlined text-[12px] leading-none">
                verified_user
              </span>
              Escrow Protected
            </div>
          </div>
          <p className="text-slate-400 dark:text-text-secondary-dark text-xs leading-relaxed">
            Funds are held securely and only released to the rider once delivery
            is confirmed.
          </p>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary-light dark:text-text-secondary-dark">
              Base delivery fee
            </span>
            <span className="font-medium text-text-primary-light dark:text-text-primary-dark">
              ₦{baseDeliveryFee.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary-light dark:text-text-secondary-dark">
              Distance ({distance} km)
            </span>
            <span className="font-medium text-text-primary-light dark:text-text-primary-dark">
              ₦{distanceFee.toLocaleString()}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-text-secondary-light dark:text-text-secondary-dark">
              Escrow service fee (3%)
            </span>
            <span className="font-medium text-text-primary-light dark:text-text-primary-dark">
              ₦{escrowFee.toLocaleString()}
            </span>
          </div>
          <div className="pt-4 border-t border-border-light dark:border-border-dark flex justify-between items-end">
            <div>
              <span className="text-xs font-bold text-text-secondary-light dark:text-text-secondary-dark uppercase">
                Total Amount
              </span>
              <div className="text-3xl font-bold text-text-primary-light dark:text-text-primary-dark">
                ₦{total.toLocaleString()}
              </div>
            </div>
            <div className="text-xs text-primary font-medium underline cursor-pointer hover:text-primary-hover">
              View breakdown
            </div>
          </div>
          <div className="space-y-3 pt-4">
            <button
              onClick={onCreateShipment}
              className="w-full h-12 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition-all shadow-md active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>Create Shipment</span>
              <span className="material-symbols-outlined text-xl">
                arrow_forward
              </span>
            </button>
            <button
              onClick={onSaveDraft}
              className="w-full h-12 bg-card-light dark:bg-card-dark text-text-primary-light dark:text-text-primary-dark font-bold rounded-xl border border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-card-dark-hover transition-all flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-xl">draft</span>
              <span>Save as Draft</span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-blue-50 dark:bg-info-bg border border-blue-100 dark:border-info/30 rounded-xl p-4 flex gap-3">
        <span className="material-symbols-outlined text-blue-500 dark:text-info mt-0.5">
          info
        </span>
        <div className="text-xs text-blue-700 dark:text-info leading-relaxed">
          <p className="font-bold mb-1">How it works</p>
          Your funds are locked in our escrow contract. The rider will see the
          guaranteed payment but cannot withdraw it until you scan the delivery
          QR code.
        </div>
      </div>
    </div>
  );
};

export default PricingSummary;
