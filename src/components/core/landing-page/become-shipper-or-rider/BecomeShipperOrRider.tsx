import Button from "../../../shared/ui/button/Button";

const BecomeShipperOrRider = () => {
  return (
    <>
      <section className="w-full landing-page-spacing py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative overflow-hidden rounded-[40px] bg-primary p-12 md:p-16 text-white shadow-2xl shadow-blue-500/20">
            <div className="relative z-10 flex flex-col gap-8 h-full justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white mb-6 uppercase tracking-widest">
                  For Shippers
                </span>
                <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Ready to ship with confidence?
                </h3>
                <p className="text-white/80 text-xl font-medium max-w-sm">
                  Join thousands of users moving packages across the country
                  safely.
                </p>
              </div>
              <Button
                size="lg"
                className="w-fit text-primary text-lg bg-white"
                color="default"
              >
                Create a Shipment
              </Button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
            <div className="absolute top-10 right-10 opacity-20 group-hover:scale-125 transition-transform duration-500">
              <span className="material-symbols-outlined text-[120px]">
                local_shipping
              </span>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-[40px] bg-slate-900 p-12 md:p-16 text-white shadow-2xl">
            <div className="relative z-10 flex flex-col gap-8 h-full justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white mb-6 uppercase tracking-widest">
                  For Riders
                </span>
                <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                  Earn more with every delivery.
                </h3>
                <p className="text-white/60 text-xl font-medium max-w-sm">
                  Access a constant stream of orders and get paid instantly on
                  delivery.
                </p>
              </div>
              {/* <button className="flex w-fit items-center justify-center rounded-2xl h-16 px-10 bg-primary text-white text-lg font-bold hover:bg-blue-700 transition-all hover:scale-105">
                Become a Rider
              </button> */}
              <Button size="lg" className="w-fit text-lg">
                Become a Rider
              </Button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all"></div>
            <div className="absolute top-10 right-10 opacity-20 group-hover:scale-125 transition-transform duration-500">
              <span className="material-symbols-outlined text-[120px]">
                motorcycle
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BecomeShipperOrRider;
