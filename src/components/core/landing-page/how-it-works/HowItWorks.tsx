import { motion } from "framer-motion";
import {
  fadeDown,
  fadeUp,
  staggerContainer,
  staggerItem,
  viewport,
  zoomIn,
} from "../../../../lib/animations";

const steps = [
  {
    icon: "local_shipping",
    step: "1. Request",
    desc: "Post your delivery needs and get bids from verified riders across the country.",
  },
  {
    icon: "payments",
    step: "2. Escrow Payment",
    desc: "Your payment is held securely in escrow before transit starts. Zero upfront risk.",
  },
  {
    icon: "route",
    step: "3. Delivery",
    desc: "Track your rider in real-time until they reach the final destination.",
  },
  {
    icon: "verified",
    step: "4. Release Funds",
    desc: "Funds are released only when you confirm successful delivery.",
  },
];

const HowItWorks = () => {
  return (
    <>
      <section className="w-full bg-gray-100 dark:bg-gray-900/40">
        <section
          className="landing-page-spacing py-20 border-t border-[#e7ebf3] dark:border-gray-800"
          id="how-it-works"
        >
          {/* Heading */}
          <motion.div
            className="text-center mb-16"
            variants={staggerContainer(0.14)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.h2
              variants={zoomIn}
              className="text-5xl font-bold dark:text-white mb-4"
            >
              How it Works
            </motion.h2>
            <motion.p variants={fadeDown} className="text-[#4d6599] dark:text-gray-400">
              Our seamless process ensures security from pick-up to drop-off.
            </motion.p>
          </motion.div>

          {/* Steps — staggered slide + scale */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 relative"
            variants={staggerContainer(0.16, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Connector line (desktop only) */}
            <motion.div
              className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={viewport}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              style={{ originX: 0 }}
            />

            {steps.map(({ icon, step, desc }, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="flex flex-col items-center text-center group cursor-default"
              >
                {/* Icon circle */}
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2 + i * 0.12,
                  }}
                  className="size-16 rounded-full bg-white dark:bg-gray-800 shadow-md border border-gray-100 dark:border-gray-700 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 relative z-10"
                >
                  <span className="material-symbols-outlined text-3xl">{icon}</span>
                </motion.div>

                <motion.h3
                  variants={fadeUp}
                  className="text-lg font-bold mb-2 dark:text-white"
                >
                  {step}
                </motion.h3>
                <motion.p
                  variants={fadeUp}
                  className="text-[#4d6599] dark:text-gray-400 text-sm px-4"
                >
                  {desc}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </section>
    </>
  );
};

export default HowItWorks;
