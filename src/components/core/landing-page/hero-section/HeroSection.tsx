import { motion } from "framer-motion";
import {
  fadeDown,
  fadeLeft,
  fadeUp,
  staggerContainer,
  staggerItem,
  viewport,
  zoomIn,
} from "../../../../lib/animations";

const avatarGradients = [
  "from-primary to-sky-400",
  "from-sky-400 to-emerald-400",
  "from-secondary to-primary",
];

/** Waypoints (percentage of container) the delivery dot travels between the two pins. */
const routeWaypoints = [
  { left: "18%", top: "78%" },
  { left: "42%", top: "55%" },
  { left: "64%", top: "62%" },
  { left: "82%", top: "24%" },
];

const HeroSection = () => {
  return (
    <>
      <section className="landing-page-spacing py-16 md:py-14 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* ── Left: text + CTA ── */}
          <motion.div
            className="flex flex-col gap-8"
            variants={staggerContainer(0.13, 0.1)}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex flex-col gap-4" variants={staggerContainer(0.15)}>
              <motion.span
                variants={fadeDown}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit"
              >
                <span className="material-symbols-outlined text-sm">verified_user</span>
                Escrow Protected Logistics
              </motion.span>

              <motion.h1
                variants={fadeLeft}
                className="text-[#0e121b] dark:text-white text-5xl md:text-6xl font-black leading-[1.05] tracking-tight"
              >
                Secure logistics for modern business
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-[#4d6599] dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg"
              >
                Ship with confidence using our escrow-protected marketplace. Connect with
                verified riders and ensure your funds are safe until delivery is confirmed.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer(0.12)}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                variants={staggerItem}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="bg-primary text-white text-lg font-bold px-8 py-4 rounded-lg hover:bg-primary-hover transition-colors shadow-md shadow-primary/20"
              >
                Send a package
              </motion.button>
              <motion.button
                variants={staggerItem}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white dark:bg-gray-800 border border-[#e7ebf3] dark:border-gray-700 text-[#0e121b] dark:text-white text-lg font-bold px-8 py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Become a Rider
              </motion.button>
            </motion.div>

            <motion.div variants={zoomIn} className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {avatarGradients.map((gradient, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                    className={`w-10 h-10 rounded-full border-2 border-white dark:border-background-dark bg-linear-to-br ${gradient} flex items-center justify-center text-white shadow-sm`}
                  >
                    <span className="material-symbols-outlined text-base">person</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-sm text-[#4d6599] dark:text-gray-400 font-medium">
                Joined by 10,000+ businesses and riders
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right: animated route illustration ── */}
          <motion.div
            className="relative isolate w-full max-w-[560px] mx-auto"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Floating blobs */}
            <motion.div
              className="absolute -top-12 -left-10 w-48 h-48 bg-primary/30 rounded-full blur-3xl -z-10"
              animate={{ x: [0, 14, 0], y: [0, -10, 0], scale: [1, 1.08, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-10 -right-8 w-44 h-44 bg-sky-400/30 rounded-full blur-3xl -z-10"
              animate={{ x: [0, -10, 0], y: [0, 12, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Glass card */}
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-white/60 dark:border-white/10 bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl shadow-premium"
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-linear-to-br from-primary/35 to-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -left-24 -bottom-20 w-72 h-72 rounded-full border border-primary/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Abstract live-route illustration (replaces stock photography) */}
              <div className="relative z-10 p-3 md:p-4">
                <motion.div
                  className="relative w-full aspect-4/3 rounded-2xl shadow-xl overflow-hidden bg-linear-to-br from-secondary via-primary to-sky-500"
                  initial={{ scale: 1.08, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                >
                  {/* dot-grid "map" texture */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
                      backgroundSize: "18px 18px",
                    }}
                  />

                  {/* route path */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M 18 78 Q 40 88 42 55 T 82 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="0.8"
                      strokeDasharray="3 3"
                      strokeLinecap="round"
                      opacity={0.55}
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                    />
                  </svg>

                  {/* origin pin */}
                  <div className="absolute left-[18%] top-[78%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center size-8 rounded-full bg-white shadow-lg">
                    <span className="material-symbols-outlined text-primary text-lg">
                      warehouse
                    </span>
                  </div>
                  {/* destination pin */}
                  <div className="absolute left-[82%] top-[24%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center size-8 rounded-full bg-white shadow-lg">
                    <span className="material-symbols-outlined text-primary text-lg">
                      home_pin
                    </span>
                  </div>

                  {/* traveling package, animated along waypoints */}
                  <motion.div
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center size-9 rounded-full bg-white shadow-xl ring-4 ring-white/30"
                    animate={{
                      left: routeWaypoints.map((p) => p.left),
                      top: routeWaypoints.map((p) => p.top),
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.33, 0.66, 1],
                    }}
                  >
                    <span className="material-symbols-outlined text-primary text-lg">
                      local_shipping
                    </span>
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                className="absolute top-6 left-6 z-20 rounded-xl px-4 py-3 bg-white/85 dark:bg-slate-900/80 border border-white/70 dark:border-white/10 shadow-lg"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                animate={{ y: [0, -6, 0] }}
              >
                <p className="text-xs text-[#4d6599] dark:text-gray-400 font-semibold uppercase tracking-wide">
                  Live Deliveries
                </p>
                <p className="text-lg font-black text-[#0e121b] dark:text-white">1,284 active</p>
              </motion.div>

              <motion.div
                className="absolute bottom-6 right-6 z-20 rounded-xl px-4 py-3 bg-primary text-white shadow-xl"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45 }}
                animate={{ y: [0, 6, 0] }}
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
                  Escrow Success
                </p>
                <p className="text-lg font-black">99.97%</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
