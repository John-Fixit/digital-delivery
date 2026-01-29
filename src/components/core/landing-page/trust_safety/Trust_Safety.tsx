const Trust_Safety = () => {
  return (
    <>
      <section className="py-24" id="safety">
        <div className="bg-primary rounded-3xl overflow-hidden relative">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12 md:p-20 text-white flex flex-col justify-center gap-6">
              <h2 className="text-4xl font-black leading-tight">
                Your Security is Our Top Priority
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                We built the industry's most robust escrow engine to eliminate
                logistics fraud. Every transaction is encrypted, and every rider
                is verified.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="text-2xl font-bold">100%</h4>
                  <p className="text-blue-200 text-sm">Payment Protection</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold">24/7</h4>
                  <p className="text-blue-200 text-sm">Dispute Support</p>
                </div>
              </div>
              <button className="bg-white text-primary text-lg font-bold px-8 py-4 rounded-lg mt-4 hover:bg-blue-50 transition-all w-fit">
                Learn about Safety
              </button>
            </div>
            <div className="bg-white/10 flex items-center justify-center p-12">
              <div className="relative w-full max-w-sm">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 transform rotate-3 relative z-10 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="size-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400">
                      <span className="material-symbols-outlined">shield</span>
                    </div>
                    <div>
                      <p className="font-bold text-[#0e121b] dark:text-white">
                        Escrow Secured
                      </p>
                      <p className="text-xs text-green-600 dark:text-green-400 font-bold uppercase">
                        Active Protection
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded"></div>
                    <div className="h-2 w-3/4 bg-gray-100 dark:bg-gray-700 rounded"></div>
                    <div className="h-2 w-1/2 bg-gray-100 dark:bg-gray-700 rounded"></div>
                  </div>
                  <div className="mt-6 flex justify-between items-center">
                    <span className="text-sm font-bold text-[#0e121b] dark:text-white">
                      $4,250.00
                    </span>
                    <span className="text-xs text-[#4d6599] dark:text-gray-400">
                      In Holding
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-blue-400/20 rounded-2xl -rotate-6 transform"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trust_Safety;
