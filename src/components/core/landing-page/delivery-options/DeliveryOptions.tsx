import { motion } from "framer-motion";
import {
  fadeDown,
  fadeUp,
  skewLeft,
  skewRight,
  skewUp,
  staggerContainer,
  viewport,
  zoomIn,
} from "../../../../lib/animations";

const options = [
  {
    icon: "bolt",
    gradient: "from-primary to-sky-400",
    title: "Intra-state Express",
    desc: "Quick delivery within your city or state. Average 4-hour turnaround.",
    variant: skewLeft,
  },
  {
    icon: "hub",
    gradient: "from-secondary to-primary",
    title: "Park-to-Park",
    desc: "The most economical way for interstate cargo. Send from hub to hub.",
    variant: skewUp,
  },
  {
    icon: "door_front",
    gradient: "from-sky-500 to-emerald-400",
    title: "Door-to-Door Courier",
    desc: "Premium service picking up from your doorstep and delivering directly to theirs.",
    variant: skewRight,
  },
];

const DeliveryOptions = () => {
  const repeatViewport = { once: true, amount: 0.45 };

  return (
    <>
      <section
        className="w-full py-24 bg-gray-200 dark:bg-background-dark"
        id="delivery-options"
      >
        <div className="landing-page-spacing">
          {/* Heading */}
          <motion.div
            className="flex flex-col items-center text-center mb-16"
            variants={staggerContainer(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={repeatViewport}
          >
            <motion.h2
              variants={zoomIn}
              className="text-3xl md:text-5xl font-black text-default-900 mb-4"
            >
              Flexible Delivery Options
            </motion.h2>
            <motion.p variants={fadeDown} className="text-default-500 text-lg max-w-2xl">
              Tailored logistics solutions for every scale of shipment.
            </motion.p>
          </motion.div>

          {/* Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer(0.16)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {options.map(({ icon, gradient, title, desc, variant }, i) => (
              <motion.div
                key={i}
                variants={variant}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                className="group cursor-pointer"
              >
                <div
                  className={`relative h-64 rounded-3xl overflow-hidden mb-6 shadow-md bg-linear-to-br ${gradient} flex items-center justify-center`}
                >
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                  <motion.span
                    className="material-symbols-outlined text-white relative z-10"
                    style={{ fontSize: "88px" }}
                    initial={{ scale: 0.8, opacity: 0, rotate: -8 }}
                    whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 16,
                      delay: i * 0.08,
                    }}
                    whileHover={{ scale: 1.1, rotate: 4 }}
                  >
                    {icon}
                  </motion.span>
                </div>

                <motion.h4 variants={fadeUp} className="text-2xl font-bold mb-2">
                  {title}
                </motion.h4>
                <motion.p variants={fadeUp} className="text-gray-500">
                  {desc}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default DeliveryOptions;
