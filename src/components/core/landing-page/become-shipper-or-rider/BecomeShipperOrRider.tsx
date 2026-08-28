import { motion } from "framer-motion";
import Button from "../../../shared/ui/button/Button";
import {
  fadeUp,
  flipLeft,
  flipRight,
  staggerContainer,
  staggerItem,
  viewport,
} from "../../../../lib/animations";

const BecomeShipperOrRider = () => {
  return (
    <>
      <section className="w-full landing-page-spacing py-24" id="carriers">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {/* Shipper card — flip in from left */}
          <motion.div
            variants={flipLeft}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}
            className="group relative overflow-hidden rounded-[40px] bg-primary p-12 md:p-16 text-white shadow-2xl shadow-blue-500/20"
            style={{ perspective: 900 }}
          >
            {/* Animated background orb */}
            <motion.div
              className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], x: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Decorative second orb */}
            <motion.div
              className="absolute top-4 left-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"
              animate={{ scale: [1, 1.15, 1], y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating icon */}
            <motion.div
              className="absolute top-10 right-10 opacity-20"
              animate={{ y: [0, -10, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="material-symbols-outlined text-[120px]">local_shipping</span>
            </motion.div>

            <motion.div
              className="relative z-10 flex flex-col gap-8 h-full justify-between"
              variants={staggerContainer(0.14, 0.1)}
            >
              <div>
                <motion.span
                  variants={staggerItem}
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white mb-6 uppercase tracking-widest"
                >
                  For Shippers
                </motion.span>
                <motion.h3
                  variants={staggerItem}
                  className="text-4xl md:text-5xl font-black mb-6 leading-tight"
                >
                  Ready to ship with confidence?
                </motion.h3>
                <motion.p
                  variants={staggerItem}
                  className="text-white/80 text-xl font-medium max-w-sm"
                >
                  Join thousands of users moving packages across the country safely.
                </motion.p>
              </div>

              <motion.div variants={fadeUp}>
                <Button
                  size="lg"
                  className="w-fit text-primary text-lg bg-white"
                  color="default"
                >
                  Create a Shipment
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Rider card — flip in from right */}
          <motion.div
            variants={flipRight}
            whileHover={{ y: -8, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 150, damping: 18 }}
            className="group relative overflow-hidden rounded-[40px] bg-slate-900 p-12 md:p-16 text-white shadow-2xl"
            style={{ perspective: 900 }}
          >
            {/* Animated background orb */}
            <motion.div
              className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], x: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-4 right-4 w-40 h-40 bg-primary/10 rounded-full blur-2xl"
              animate={{ scale: [1, 1.18, 1], y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating icon */}
            <motion.div
              className="absolute top-10 right-10 opacity-20"
              animate={{ y: [0, -10, 0], rotate: [0, -4, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="material-symbols-outlined text-[120px]">motorcycle</span>
            </motion.div>

            <motion.div
              className="relative z-10 flex flex-col gap-8 h-full justify-between"
              variants={staggerContainer(0.14, 0.1)}
            >
              <div>
                <motion.span
                  variants={staggerItem}
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white mb-6 uppercase tracking-widest"
                >
                  For Riders
                </motion.span>
                <motion.h3
                  variants={staggerItem}
                  className="text-4xl md:text-5xl font-black mb-6 leading-tight"
                >
                  Earn more with every delivery.
                </motion.h3>
                <motion.p
                  variants={staggerItem}
                  className="text-white/60 text-xl font-medium max-w-sm"
                >
                  Access a constant stream of orders and get paid instantly on delivery.
                </motion.p>
              </div>

              <motion.div variants={fadeUp}>
                <Button size="lg" className="w-fit text-lg">
                  Become a Rider
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default BecomeShipperOrRider;
