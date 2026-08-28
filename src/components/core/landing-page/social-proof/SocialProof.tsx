import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewport } from "../../../../lib/animations";
import AnimatedCounter from "../../../shared/ui/animated-counter/AnimatedCounter";

const stats = [
  { target: 12000, suffix: "+", label: "Deliveries completed" },
  { target: 850, suffix: "+", label: "Verified riders" },
  { target: 99, suffix: ".97%", label: "Escrow success rate" },
  { target: 24, suffix: "/7", label: "Dispute support" },
];

const SocialProof = () => {
  return (
    <section className="landing-page-spacing py-10">
      <motion.div
        className="border-y border-[#e7ebf3] dark:border-gray-800 py-10 grid grid-cols-2 md:grid-cols-4 gap-8"
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        {stats.map(({ target, suffix, label }) => (
          <motion.div key={label} variants={staggerItem} className="text-center md:text-left">
            <p className="text-3xl md:text-4xl font-black text-[#0e121b] dark:text-white">
              <AnimatedCounter target={target} suffix={suffix} />
            </p>
            <motion.p
              variants={fadeUp}
              className="text-sm text-[#4d6599] dark:text-gray-400 font-medium mt-1"
            >
              {label}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SocialProof;
