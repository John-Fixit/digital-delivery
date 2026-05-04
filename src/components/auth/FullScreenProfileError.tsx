import { Button } from "@heroui/react";
import { motion } from "framer-motion";

type FullScreenProfileErrorProps = {
  title?: string;
  description?: string;
  onRetry: () => void;
};

const FullScreenProfileError = ({
  title = "We couldn’t reach the server",
  description = "Check your connection and try again. Your session is still safe.",
  onRetry,
}: FullScreenProfileErrorProps) => {
  return (
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-background-light dark:bg-background-dark px-6">
      <motion.div
        className="max-w-md w-full rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900/80 p-8 shadow-xl text-center"
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400">
          <span className="material-symbols-outlined text-3xl">wifi_off</span>
        </div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">{title}</h1>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          {description}
        </p>
        <Button
          color="primary"
          className="mt-6 w-full font-semibold"
          size="lg"
          onPress={() => onRetry()}
        >
          Reload page
        </Button>
      </motion.div>
    </div>
  );
};

export default FullScreenProfileError;
