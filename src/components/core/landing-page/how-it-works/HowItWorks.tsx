const HowItWorks = () => {
  return (
    <>
      <section className="w-full bg-gray-100 dark:bg-gray-900/40">
        <section
          className="landing-page-spacing py-20 border-t border-[#e7ebf3] dark:border-gray-800"
          id="how-it-works"
        >
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold dark:text-white mb-4">
              How it Works
            </h2>
            <p className="text-[#4d6599] dark:text-gray-400">
              Our seamless process ensures security from pick-up to drop-off.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="flex flex-col items-center text-center group">
              <div className="size-16 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-3xl">
                  local_shipping
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 dark:text-white">
                1. Request
              </h3>
              <p className="text-[#4d6599] dark:text-gray-400 text-sm px-4">
                Post your delivery needs and get bids from verified riders
                across the country.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="size-16 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-3xl">
                  payments
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 dark:text-white">
                2. Escrow Payment
              </h3>
              <p className="text-[#4d6599] dark:text-gray-400 text-sm px-4">
                Your payment is held securely in escrow before transit starts.
                Zero upfront risk.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="size-16 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-3xl">
                  route
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 dark:text-white">
                3. Delivery
              </h3>
              <p className="text-[#4d6599] dark:text-gray-400 text-sm px-4">
                Track your rider in real-time until they reach the final
                destination.
              </p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="size-16 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-3xl">
                  verified
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2 dark:text-white">
                4. Release Funds
              </h3>
              <p className="text-[#4d6599] dark:text-gray-400 text-sm px-4">
                Funds are released only when you confirm successful delivery.
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default HowItWorks;
