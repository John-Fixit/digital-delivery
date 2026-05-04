import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  fadeLeft,
  fadeUp,
  flipRight,
  staggerContainer,
  staggerItem,
  viewport,
} from "../../../../lib/animations";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const Trust_Safety = () => {
  return (
    <>
      <section className="landing-page-spacing py-24" id="safety">
        <motion.div
          className="bg-primary rounded-3xl overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.97, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Subtle animated bg orbs */}
          <motion.div
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"
            animate={{ scale: [1, 1.15, 1], x: [0, 10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-1/3 w-48 h-48 rounded-full bg-white/5 blur-2xl"
            animate={{ scale: [1, 1.1, 1], y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
            {/* Left — text */}
            <motion.div
              className="p-12 md:p-20 text-white flex flex-col justify-center gap-6"
              variants={staggerContainer(0.15, 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.h2
                variants={fadeLeft}
                className="text-4xl font-black leading-tight"
              >
                Your Security is Our Top Priority
              </motion.h2>

              <motion.p variants={fadeLeft} className="text-blue-100 text-lg leading-relaxed">
                We built the industry's most robust escrow engine to eliminate logistics fraud.
                Every transaction is encrypted, and every rider is verified.
              </motion.p>

              <motion.div
                variants={staggerContainer(0.15)}
                className="grid grid-cols-2 gap-6 mt-4"
              >
                <motion.div variants={staggerItem}>
                  <h4 className="text-2xl font-bold">
                    <AnimatedCounter target={100} suffix="%" />
                  </h4>
                  <p className="text-blue-200 text-sm">Payment Protection</p>
                </motion.div>
                <motion.div variants={staggerItem}>
                  <h4 className="text-2xl font-bold">24/7</h4>
                  <p className="text-blue-200 text-sm">Dispute Support</p>
                </motion.div>
              </motion.div>

              <motion.button
                variants={fadeUp}
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white text-primary text-lg font-bold px-8 py-4 rounded-lg mt-4 hover:bg-blue-50 transition-all w-fit"
              >
                Learn about Safety
              </motion.button>
            </motion.div>

            {/* Right — escrow card with 3D flip */}
            <div className="bg-white/10 flex items-center justify-center p-12">
              <motion.div
                className="relative w-full max-w-sm"
                variants={flipRight}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                style={{ perspective: 800 }}
              >
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 transform rotate-3 relative z-10 border border-gray-100 dark:border-gray-700"
                  whileHover={{ rotate: 0, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200, damping: 18 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      className="size-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-400"
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <span className="material-symbols-outlined">shield</span>
                    </motion.div>
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
                    {[1, 0.75, 0.5].map((w, i) => (
                      <motion.div
                        key={i}
                        className="h-2 bg-gray-100 dark:bg-gray-700 rounded overflow-hidden"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                        style={{ originX: 0, width: `${w * 100}%` }}
                      />
                    ))}
                  </div>

                  <div className="mt-6 flex justify-between items-center">
                    <motion.span
                      className="text-sm font-bold text-[#0e121b] dark:text-white"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.9 }}
                    >
                      $4,250.00
                    </motion.span>
                    <span className="text-xs text-[#4d6599] dark:text-gray-400">
                      In Holding
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute inset-0 bg-blue-400/20 rounded-2xl -rotate-6 transform"
                  animate={{ rotate: [-6, -4, -6] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Trust_Safety;
