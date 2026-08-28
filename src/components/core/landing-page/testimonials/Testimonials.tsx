import { motion } from "framer-motion";
import {
  fadeDown,
  staggerContainer,
  staggerItem,
  viewport,
  zoomIn,
} from "../../../../lib/animations";

const testimonials = [
  {
    quote:
      "I used to worry about paying upfront for interstate cargo. With escrow, the rider only gets paid once my goods actually arrive. It changed how I run my supply chain.",
    name: "Amara Okafor",
    role: "Retail distributor, Lagos",
    avatarGradient: "from-primary to-sky-400",
  },
  {
    quote:
      "As a rider, verified jobs and instant payout on delivery confirmation means I spend less time chasing payment and more time on the road.",
    name: "Tunde Bakare",
    role: "Independent rider",
    avatarGradient: "from-secondary to-primary",
  },
  {
    quote:
      "Real-time tracking plus a dispute process that actually works — that combination is rare in local logistics. Our team relies on it daily.",
    name: "Chiamaka Eze",
    role: "Operations lead, small business",
    avatarGradient: "from-sky-500 to-emerald-400",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full py-24 bg-gray-100 dark:bg-gray-900/40">
      <div className="landing-page-spacing">
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.h2 variants={zoomIn} className="text-3xl md:text-5xl font-black dark:text-white mb-4">
            Trusted by shippers and riders alike
          </motion.h2>
          <motion.p variants={fadeDown} className="text-[#4d6599] dark:text-gray-400 text-lg max-w-2xl">
            Real outcomes from the people moving packages through Logicrow every day.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer(0.16)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {testimonials.map(({ quote, name, role, avatarGradient }, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="bg-card-light dark:bg-card-dark p-8 rounded-2xl border border-border-light dark:border-border-dark shadow-sm flex flex-col gap-6"
            >
              <span className="material-symbols-outlined text-primary/30 text-4xl">
                format_quote
              </span>
              <p className="text-[#0e121b] dark:text-gray-200 leading-relaxed flex-1">
                "{quote}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border-light dark:border-border-dark">
                <div
                  className={`size-11 rounded-full bg-linear-to-br ${avatarGradient} flex items-center justify-center text-white font-bold shrink-0`}
                >
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-bold text-sm text-[#0e121b] dark:text-white">{name}</p>
                  <p className="text-xs text-[#4d6599] dark:text-gray-400">{role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
