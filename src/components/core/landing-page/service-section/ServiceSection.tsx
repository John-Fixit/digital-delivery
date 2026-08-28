import { motion } from "framer-motion";
import Button from "../../../shared/ui/button/Button";
import {
  fadeLeft,
  fadeRight,
  fadeUp,
  skewLeft,
  skewRight,
  staggerContainer,
  staggerItem,
  viewport,
} from "../../../../lib/animations";

const services = [
  {
    icon: "moped",
    badge: "POPULAR",
    title: "Local Delivery",
    desc: "Swift urban courier services. Perfect for documents, food, or small retail items within your city. Guaranteed same-day delivery.",
    features: ["60-minute pickup", "Real-time live tracking"],
    cta: "Select Local",
    variant: skewLeft,
  },
  {
    icon: "local_shipping",
    badge: null,
    title: "Interstate Shipping",
    desc: "Reliable long-haul logistics. Move larger freight across state lines with vetted truck drivers and fleet owners.",
    features: ["Multi-tonnage options", "Insurance coverage included"],
    cta: "Select Interstate",
    variant: skewRight,
  },
];

const ServiceSection = () => {
  return (
    <>
      <section
        className="landing-page-spacing py-10 bg-background-light dark:bg-background-dark rounded-3xl px-20 border border-border-light dark:border-border-dark"
        id="services"
      >
        {/* Header row */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeLeft} className="max-w-xl">
            <h2 className="text-3xl font-bold dark:text-white mb-4">
              Our Delivery Services
            </h2>
            <p className="text-[#4d6599] dark:text-gray-400">
              Tailored logistics solutions for every scale, powered by professional carriers.
            </p>
          </motion.div>

          <motion.button
            variants={fadeRight}
            whileHover={{ x: 4 }}
            className="text-primary font-bold flex items-center gap-2 hover:underline"
          >
            View all services{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </motion.button>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer(0.18)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {services.map(({ icon, badge, title, desc, features, cta, variant }, i) => (
            <motion.div
              key={i}
              variants={variant}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 160, damping: 18 }}
              className="bg-card-light dark:bg-card-dark p-8 rounded-2xl border border-transparent hover:border-primary/20 hover:shadow-lg transition-shadow group"
            >
              <div className="flex justify-between items-start mb-6">
                <motion.div
                  initial={{ scale: 0, rotate: -15 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 20,
                    delay: 0.2 + i * 0.1,
                  }}
                  className="p-3 bg-white dark:bg-primary/10 rounded-xl shadow-sm"
                >
                  <span className="material-symbols-outlined text-primary text-3xl">
                    {icon}
                  </span>
                </motion.div>

                {badge && (
                  <span className="text-xs font-bold text-primary px-3 py-1 rounded-full bg-primary/10">
                    {badge}
                  </span>
                )}
              </div>

              <motion.h3
                variants={staggerItem}
                className="text-2xl font-bold mb-3 dark:text-white"
              >
                {title}
              </motion.h3>

              <motion.p
                variants={staggerItem}
                className="text-[#4d6599] dark:text-gray-400 mb-6 leading-relaxed"
              >
                {desc}
              </motion.p>

              <motion.ul
                className="space-y-3 mb-8"
                variants={staggerContainer(0.1)}
              >
                {features.map((f, j) => (
                  <motion.li
                    key={j}
                    variants={fadeUp}
                    className="flex items-center gap-2 text-sm font-medium dark:text-gray-300"
                  >
                    <span className="material-symbols-outlined text-green-500 text-lg">
                      check_circle
                    </span>
                    {f}
                  </motion.li>
                ))}
              </motion.ul>

              <Button variant="bordered" fullWidth size="lg">
                {cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default ServiceSection;
