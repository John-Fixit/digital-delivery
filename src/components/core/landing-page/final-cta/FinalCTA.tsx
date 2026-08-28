import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fadeUp, staggerContainer, staggerItem, viewport } from "../../../../lib/animations";

const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="landing-page-spacing pb-24">
      <motion.div
        className="relative overflow-hidden rounded-[40px] bg-secondary px-8 py-16 md:py-20 text-center"
        initial={{ opacity: 0, scale: 0.97, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* animated backdrop */}
        <motion.div
          className="absolute -top-24 left-1/4 w-80 h-80 rounded-full bg-primary/30 blur-3xl"
          animate={{ scale: [1, 1.15, 1], x: [0, 20, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 right-1/4 w-80 h-80 rounded-full bg-sky-500/20 blur-3xl"
          animate={{ scale: [1, 1.12, 1], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="relative z-10 flex flex-col items-center gap-6 max-w-2xl mx-auto"
          variants={staggerContainer(0.14, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.span
            variants={staggerItem}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest"
          >
            Get started in minutes
          </motion.span>
          <motion.h2
            variants={staggerItem}
            className="text-3xl md:text-5xl font-black text-white leading-tight"
          >
            Your next delivery, protected from pickup to payout.
          </motion.h2>
          <motion.p variants={staggerItem} className="text-white/70 text-lg">
            Join thousands of businesses and riders already shipping with escrow-backed
            confidence.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/auth/register")}
              className="bg-primary text-white text-lg font-bold px-8 py-4 rounded-lg hover:bg-primary-hover transition-colors shadow-md"
            >
              Create your first shipment
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/auth/register")}
              className="bg-white/10 border border-white/20 text-white text-lg font-bold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors"
            >
              Become a rider
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
