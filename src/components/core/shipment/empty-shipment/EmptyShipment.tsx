import Button from "../../../shared/ui/button/Button";

const EmptyShipment = ({ onCreate }: { onCreate: () => void }) => {
  return (
    <>
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="max-w-md w-full flex flex-col items-center text-center">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl scale-150"></div>
            <div className="relative w-64 h-64 flex items-center justify-center">
              <div className="bg-white dark:bg-card-dark p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-none border border-slate-100 dark:border-border-dark-subtle flex flex-col items-center">
                <span
                  className="material-symbols-outlined text-primary text-8xl! mb-4"
                  style={{ fontVariationSettings: "'wght' 200, 'opsz' 48" }}
                >
                  inventory_2
                </span>
                <div className="flex gap-2">
                  <div className="w-12 h-1.5 bg-primary/20 rounded-full"></div>
                  <div className="w-6 h-1.5 bg-primary/10 rounded-full"></div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 size-16 bg-white dark:bg-card-dark/80 rounded-2xl shadow-lg flex items-center justify-center border border-slate-50 dark:border-border-dark-subtle">
                <span className="material-symbols-outlined text-green-500 text-3xl">
                  verified
                </span>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
            No shipments yet
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-10 max-w-sm">
            Ready to send something? Start your first delivery and experience
            secure, escrow-protected logistics today.
          </p>
          <div className="flex flex-col gap-4 w-full">
            <Button size="lg" radius="lg" onPress={onCreate}>
              <span className="material-symbols-outlined">add_circle</span>
              <span>Create New Shipment</span>
            </Button>
            {/* <a
              className="inline-flex items-center justify-center gap-1 text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors py-2 group"
              href="#"
            >
              <span className="material-symbols-outlined text-lg">
                help_outline
              </span>
              <span className="underline underline-offset-4 decoration-slate-200 group-hover:decoration-primary">
                Learn how our escrow process works
              </span>
            </a> */}
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 w-full max-w-2xl text-center">
          <p className="text-sm text-slate-400 dark:text-slate-500">
            Not ready to ship?
            <a
              className="text-primary font-medium hover:underline ml-1"
              href="#"
            >
              Browse active riders in your area
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default EmptyShipment;
