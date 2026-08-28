import type { Variants } from "framer-motion";

// Cubic bezier presets
export const ease = {
  smooth: [0.25, 0.46, 0.45, 0.94] as const,
  spring: [0.22, 1, 0.36, 1] as const,
  snappy: [0.6, 0.05, -0.01, 0.9] as const,
  bounce: [0.34, 1.56, 0.64, 1] as const,
};

// Viewport trigger config
export const viewport = { once: true, amount: 0.2 };
export const viewportEager = { once: true, amount: 0.1 };

// ─── Fade variants ────────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: ease.spring } },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: ease.spring } },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: ease.spring } },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: ease.spring } },
};

// ─── Zoom variants ────────────────────────────────────────
export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.82 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.65, ease: ease.spring } },
};

export const zoomOut: Variants = {
  hidden: { opacity: 0, scale: 1.18 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.65, ease: ease.spring } },
};

// ─── Skew variants ────────────────────────────────────────
export const skewLeft: Variants = {
  hidden: { opacity: 0, x: -50, skewX: -8 },
  visible: { opacity: 1, x: 0, skewX: 0, transition: { duration: 0.7, ease: ease.spring } },
};

export const skewRight: Variants = {
  hidden: { opacity: 0, x: 50, skewX: 8 },
  visible: { opacity: 1, x: 0, skewX: 0, transition: { duration: 0.7, ease: ease.spring } },
};

export const skewUp: Variants = {
  hidden: { opacity: 0, y: 50, skewY: 4 },
  visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 0.7, ease: ease.spring } },
};

// ─── 3‑D flip ─────────────────────────────────────────────
export const flipLeft: Variants = {
  hidden: { opacity: 0, rotateY: -25, x: -30 },
  visible: { opacity: 1, rotateY: 0, x: 0, transition: { duration: 0.75, ease: ease.spring } },
};

export const flipRight: Variants = {
  hidden: { opacity: 0, rotateY: 25, x: 30 },
  visible: { opacity: 1, rotateY: 0, x: 0, transition: { duration: 0.75, ease: ease.spring } },
};

// ─── Stagger containers ───────────────────────────────────
export const staggerContainer = (stagger = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: ease.spring },
  },
};

// ─── Slide-in with clip reveal ────────────────────────────
export const revealUp: Variants = {
  hidden: { opacity: 0, y: 60, clipPath: "inset(100% 0% 0% 0%)" },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.75, ease: ease.spring },
  },
};
