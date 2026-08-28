import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewport } from "../../../../lib/animations";

const paymentPartners = ["Paystack", "Flutterwave"];

const Footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-background-dark border-t border-[#e7ebf3] dark:border-gray-800 pt-20 pb-10">
        <motion.div
          className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <motion.div variants={staggerItem} className="col-span-1 md:col-span-1 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="text-primary">
                  <img
                    src="/logicrow.png"
                    alt="logo"
                    className="objectcover h-12.5 w-12.5"
                  />
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-tight dark:text-white">
                  Logicrow
                </h2>
              </div>
              <p className="text-sm text-[#4d6599] dark:text-gray-400 leading-relaxed">
                The escrow-protected logistics marketplace. Bringing trust and
                reliability to every shipment.
              </p>
              <div className="flex gap-4">
                <a
                  className="text-[#4d6599] dark:text-gray-400 hover:text-primary transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined">public</span>
                </a>
                <a
                  className="text-[#4d6599] dark:text-gray-400 hover:text-primary transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined">
                    alternate_email
                  </span>
                </a>
                <a
                  className="text-[#4d6599] dark:text-gray-400 hover:text-primary transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined">share</span>
                </a>
              </div>
            </motion.div>
            <motion.div variants={staggerItem}>
              <h4 className="font-bold text-[#0e121b] dark:text-white mb-6">
                Services
              </h4>
              <ul className="space-y-4 text-sm text-[#4d6599] dark:text-gray-400">
                <li>
                  <a className="hover:text-primary" href="#">
                    Local Delivery
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Interstate Freight
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Express Courier
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Warehouse Storage
                  </a>
                </li>
              </ul>
            </motion.div>
            <motion.div variants={staggerItem}>
              <h4 className="font-bold text-[#0e121b] dark:text-white mb-6">
                Company
              </h4>
              <ul className="space-y-4 text-sm text-[#4d6599] dark:text-gray-400">
                <li>
                  <a className="hover:text-primary" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Safety
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Contact Support
                  </a>
                </li>
              </ul>
            </motion.div>
            <motion.div variants={staggerItem}>
              <h4 className="font-bold text-[#0e121b] dark:text-white mb-6">
                Legal
              </h4>
              <ul className="space-y-4 text-sm text-[#4d6599] dark:text-gray-400">
                <li>
                  <a className="hover:text-primary" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Escrow Agreement
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
          <motion.div
            variants={fadeUp}
            className="border-t border-[#e7ebf3] dark:border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <p className="text-sm text-[#4d6599] dark:text-gray-400">
              © {new Date().getFullYear()} Logicrow Technologies Inc. All
              rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#4d6599] dark:text-gray-400 mr-1">
                Secured payments via
              </span>
              {paymentPartners.map((name) => (
                <span
                  key={name}
                  className="text-xs font-bold px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-[#0e121b] dark:text-gray-200"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
