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
                className="text-[#0e121b] dark:text-white text-5xl md:text-6xl font-black leading-tight tracking-tight"
              >
                Secure Logistics for Modern Business
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
                className="bg-primary text-white text-lg font-bold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
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
                {[
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDHa5ul312r393aabqdSawx9N6L42SyObi5KsGrPrv-L9-gR7yjG5Nuot0mWyH5PbqkmfD5c4NWD6PzDQNJRhQnU8rzfTRMZcQ8rUFSk40ocB92IBw_UqacwgymXv_b5F_oB-jlldsJhTswYdjkjLvDIfxdrXF8q0H3virS1qQFQlbIyCw1uJazJjHT4wWNvzS7QArU4pdzkq2wBqXXfDpVxi0JxX3uAoBG2FZKxUcFbT9zyeBoOzj5hQ2j0XIxjnLublAj8beWopI",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDoBPHrJ2mHNMnKPGsUy3Rj8ewFHuYqFBwMpajdKVFELD7f6kXN052HMP6i7tZkddRti9Zgp6OPyZ9TLinqem2YC5LhnhqvpPXJlVPgT8ldUClgnf9dlDDwisaDli2UajcSEB77Bvur1DS48VJKtI1755SHYxEqnOInp0HpL3iFneNyTPs8t9ik7OzScFMmFAtJfXGANbB-NOW7T7p2N4iZavLqryEI_4hixpmCVmLRVLMaXFTfIBFXQdIzHT1_4JqQoP19icNL3Jk",
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBKLR4lkRB6nWbPh2ht3s5ABDBlaO2FR-6UGbkvISWBGXhYRoQDhAemgmvwEQG0ly0EjflCbL88h7jmL4K-8Uzeqy8xw9fyeYh8tqEhcTXO_bmqV_5MMF84kVjmBJPbndobk9ILPx6euW1EzTwqoMXR6tF3xAsD5n5VUwnnDhz3H1ZvHorHK82G-dN_zlxMjDceRo-Dvu2NQ95a3lRPv-F-Yn9q9y4V2BYbZWJyveROcX_g6UtepsuDH5tF7_LMuRZb2C1DKY0caYg",
                ].map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center"
                    style={{ backgroundImage: `url('${src}')` }}
                  />
                ))}
              </div>
              <p className="text-sm text-[#4d6599] dark:text-gray-400 font-medium">
                Joined by 10,000+ businesses and riders
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right: animated visual ── */}
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
              className="relative overflow-hidden rounded-3xl border border-white/60 dark:border-white/10 bg-white/80 dark:bg-slate-900/70 backdrop-blur-xl shadow-[0_25px_80px_-30px_rgba(14,18,27,0.45)]"
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

              <div className="relative z-10 p-3 md:p-4">
                <motion.div
                  className="w-full aspect-4/3 bg-cover bg-center rounded-2xl shadow-xl"
                  data-alt="Modern warehouse logistics and package handling"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZP3Vr3KRRkWxB1c7EhQf4XwXrpC8C6gVoHtZ5hGv5XyrFDL6F1LCqNJQuMHwFRxLivAlIijgBZEVUoO5X2OlfnwNyWMZXnk3Mc1GGIkkpchBhGwFtUgMSqJZWkI_nhhSkiAqL4PNNOBYHyMRlNX7uWYDRhN4eQjt3uPJKChyADW1mOsPp20P8-LThDNynk6W5lEXEQiLRAm7pagwIdz0lnLMnB3cejx5Kxi488Ou01nDEsXu6eIOWIzZ2Gc-hfNnW6hrBwydVvzM")`,
                  }}
                  initial={{ scale: 1.08, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                />
              </div>

              <motion.div
                className="absolute top-6 left-6 z-20 rounded-xl px-4 py-3 bg-white/85 dark:bg-slate-900/80 border border-white/70 dark:border-white/10 shadow-lg"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
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
                viewport={{ once: false }}
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
