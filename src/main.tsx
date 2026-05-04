import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppProviders } from "./providers/AppProviders";
import { ClerkProvider } from "@clerk/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Clerk reads VITE_CLERK_PUBLISHABLE_KEY from env in this setup */}
    {/* @ts-expect-error clerk provider env-based key resolution */}
    <ClerkProvider afterSignOutUrl="/">
      <AppProviders>
        <App />
      </AppProviders>
    </ClerkProvider>
  </StrictMode>,
);
