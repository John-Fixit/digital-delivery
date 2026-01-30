import Button from "../../../shared/ui/button/Button";

const ServiceSection = () => {
  return (
    <>
      <section
        className="landing-page-spacing py-10 bg-background-light dark:bg-background-dark rounded-3xl px-20 border border-border-light dark:border-border-dark"
        id="services"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold dark:text-white mb-4">
              Our Delivery Services
            </h2>
            <p className="text-[#4d6599] dark:text-gray-400">
              Tailored logistics solutions for every scale, powered by
              professional carriers.
            </p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:underline">
            View all services{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card-light dark:bg-card-dark p-8 rounded-2xl border border-transparent hover:border-primary/20 hover:shadow transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-white dark:bg-primary/10 rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-primary text-3xl">
                  moped
                </span>
              </div>
              <span className="text-xs font-bold text-primary px-3 py-1 rounded-full bg-primary/10">
                POPULAR
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-3 dark:text-white">
              Local Delivery
            </h3>
            <p className="text-[#4d6599] dark:text-gray-400 mb-6 leading-relaxed">
              Swift urban courier services. Perfect for documents, food, or
              small retail items within your city. Guaranteed same-day delivery.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm font-medium dark:text-gray-300">
                <span className="material-symbols-outlined text-green-500 text-lg">
                  check_circle
                </span>{" "}
                60-minute pickup
              </li>
              <li className="flex items-center gap-2 text-sm font-medium dark:text-gray-300">
                <span className="material-symbols-outlined text-green-500 text-lg">
                  check_circle
                </span>{" "}
                Real-time live tracking
              </li>
            </ul>
            <Button variant="bordered" fullWidth size="lg">
              Select Local
            </Button>
          </div>
          <div className="bg-card-light dark:bg-card-dark p-8 rounded-2xl border border-transparent hover:border-primary/20 hover:shadow transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-white dark:bg-primary/10 rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-primary text-3xl">
                  local_shipping
                </span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 dark:text-white">
              Interstate Shipping
            </h3>
            <p className="text-[#4d6599] dark:text-gray-400 mb-6 leading-relaxed">
              Reliable long-haul logistics. Move larger freight across state
              lines with vetted truck drivers and fleet owners.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm font-medium dark:text-gray-300">
                <span className="material-symbols-outlined text-green-500 text-lg">
                  check_circle
                </span>{" "}
                Multi-tonnage options
              </li>
              <li className="flex items-center gap-2 text-sm font-medium dark:text-gray-300">
                <span className="material-symbols-outlined text-green-500 text-lg">
                  check_circle
                </span>{" "}
                Insurance coverage included
              </li>
            </ul>
            <Button variant="bordered" fullWidth size="lg">
              Select Interstate
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
