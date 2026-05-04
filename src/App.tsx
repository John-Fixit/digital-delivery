import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import Login from "./pages/login/Login";
import AuthLayout from "./layout/auth-layout/AuthLayout";
import Register from "./pages/register/Register";
import { useSystemTheme } from "./hooks/useSystemTheme";
import HomeLayout from "./layout/home-layout/HomeLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Wallet from "./pages/wallet/Wallet";
import ShipmentPage from "./pages/my-shipment";
import ShipmentTracking from "./pages/shipment-tracking";
import NotFound from "./pages/not-found/NotFound";
import NotificationCenter from "./pages/notification-center";
import DisputesPage from "./pages/disputes";
import VerifyEmail from "./pages/auth/VerifyEmail";
import ClerkGoogleCallback from "./pages/auth/ClerkGoogleCallback";
import AppRoot from "./components/auth/AppRoot";
import RequireAuth from "./components/auth/RequireAuth";
import AuthEntryGate from "./components/auth/AuthEntryGate";

const router = createBrowserRouter([
  {
    element: <AppRoot />,
    children: [
      {
        index: true,
        element: (
          <AuthEntryGate redirectMode="home">
            <LandingPage />
          </AuthEntryGate>
        ),
      },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "register",
            element: (
              <AuthEntryGate redirectMode="home">
                <Register />
              </AuthEntryGate>
            ),
          },
          {
            path: "login",
            element: (
              <AuthEntryGate redirectMode="fromParam">
                <Login />
              </AuthEntryGate>
            ),
          },
          {
            path: "verify-email",
            element: <VerifyEmail />,
          },
          {
            path: "clerk-google-callback",
            element: <ClerkGoogleCallback />,
          },
        ],
      },
      {
        path: "home",
        element: (
          <RequireAuth>
            <HomeLayout />
          </RequireAuth>
        ),
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "wallet",
            element: <Wallet />,
          },
          {
            path: "shipment",
            element: <ShipmentPage />,
          },
          {
            path: "tracking",
            element: <ShipmentTracking />,
          },
          {
            path: "notifications",
            element: <NotificationCenter />,
          },
          {
            path: "disputes",
            element: <DisputesPage />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  useSystemTheme();
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
