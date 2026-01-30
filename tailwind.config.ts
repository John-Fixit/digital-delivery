import type { Config } from "tailwindcss";

export default {
  darkMode: "media", // This forces system preference
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
} satisfies Config;
