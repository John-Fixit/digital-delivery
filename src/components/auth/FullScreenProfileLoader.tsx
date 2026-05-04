import { Spinner } from "@heroui/react";
import { motion } from "framer-motion";

type FullScreenProfileLoaderProps = {
  message?: string;
};

const FullScreenProfileLoader = ({
  message = "Preparing your workspace…",
}: FullScreenProfileLoaderProps) => {
  return (
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-background-light dark:bg-background-dark">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/4 left-1/4 h-[50vmin] w-[50vmin] rounded-full bg-primary/15 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.65, 0.4] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-1/4 right-1/4 h-[45vmin] w-[45vmin] rounded-full bg-sky-500/10 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        className="relative flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative">
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/20 blur-md"
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <Spinner
            classNames={{
              circle1: "border-b-primary",
              circle2: "border-b-primary/40",
            }}
            color="primary"
            size="lg"
          />
        </div>
        <div className="text-center px-6">
          <p className="text-lg font-semibold text-slate-800 dark:text-slate-100">
            {message}
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            One moment while we verify your session.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default FullScreenProfileLoader;
