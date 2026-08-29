import TransactionTable from "../../components/core/wallet/transaction-table/TransactionTable";
import WalletStats from "../../components/core/wallet/wallet-stats/WalletStats";
import ContactSupportSection from "../../components/shared/contact-support-section/ContactSupportSection";
import PageHeader from "../../components/shared/page-header/PageHeader";
import Button from "../../components/shared/ui/button/Button";
import useModalStore from "../../hooks/use-modal-store";
import { MODAL_NAMES } from "../../lib/overlay-names";

const Wallet = () => {
  const { openModal } = useModalStore();

  return (
    <>
      <main className="p-8 max-w-350 w-full mx-auto bg-background-light dark:bg-background-dark font-display text-[#120e1b] min-h-screen">
        <div className="flex justify-between items-center">
          <PageHeader
            title="Wallet & Transaction"
            description={
              "Manage your secure escrow funds and transaction ledger."
            }
          />
          <div className="flex gap-3">
            <Button
              variant="flat"
              color="secondary"
              isDisabled
              title="Withdrawals require a connected payment gateway — coming soon"
            >
              <span className="material-symbols-outlined text-lg">
                vertical_align_bottom
              </span>
              Withdraw
            </Button>

            <Button variant="solid" onPress={() => openModal(MODAL_NAMES.ADD_FUNDS)}>
              <span className="material-symbols-outlined text-lg">
                add_circle
              </span>
              Add Funds
            </Button>
          </div>
        </div>
        <WalletStats />
        <TransactionTable />
        <ContactSupportSection />
      </main>
    </>
  );
};

export default Wallet;
