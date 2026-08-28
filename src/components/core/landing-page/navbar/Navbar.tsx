import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#safety", label: "Safety" },
  { href: "#carriers", label: "Carriers" },
];

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full border-b border-solid border-[#e7ebf3] dark:border-gray-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-20 py-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between whitespace-nowrap">
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <img src="/logicrow.png" alt="logo" className="objectcover h-12.5 w-12.5" />
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-tight dark:text-white">
            Logicrow
          </h2>
        </div>
        <div className="hidden md:flex flex-1 justify-end gap-10 items-center">
          <nav className="flex items-center gap-8">
            {navLinks.map(({ href, label }) => (
              <motion.a
                key={href}
                className="relative text-sm font-medium text-[#0e121b]/80 hover:text-primary transition-colors dark:text-gray-300 group"
                href={href}
              >
                {label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-primary-hover transition-all shadow-sm cursor-pointer"
              onClick={() => {
                navigate("/auth/register");
              }}
            >
              Get started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#e7ebf3] dark:bg-gray-800 text-[#0e121b] dark:text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all cursor-pointer"
              onClick={() => {
                navigate("/auth/login");
              }}
            >
              Login
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
