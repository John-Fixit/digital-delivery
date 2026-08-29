import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import Login from "./pages/login/Login";
import AuthLayout from "./layout/auth-layout/AuthLayout";
import Register from "./pages/register/Register";
import { useSystemTheme } from "./hooks/useSystemTheme";
import HomeLayout from "./layout/home-layout/HomeLayout";
import RiderLayout from "./layout/rider-layout/RiderLayout";
import RiderDashboard from "./pages/rider-dashboard/RiderDashboard";
import RiderJobs from "./pages/rider-jobs/RiderJobs";
import RiderActiveJobs from "./pages/rider-active/RiderActiveJobs";
import RiderEarnings from "./pages/rider-earnings/RiderEarnings";
import AdminLayout from "./layout/admin-layout/AdminLayout";
import AdminOverview from "./pages/admin-overview/AdminOverview";
import AdminDeliveries from "./pages/admin-deliveries/AdminDeliveries";
import AdminUsers from "./pages/admin-users/AdminUsers";
import AdminRiders from "./pages/admin-riders/AdminRiders";
import AdminWallets from "./pages/admin-wallets/AdminWallets";
import AdminEscrow from "./pages/admin-escrow/AdminEscrow";
import AdminDisputes from "./pages/admin-disputes/AdminDisputes";
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
          <RequireAuth requireRole="customer">
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
        path: "rider",
        element: (
          <RequireAuth requireRole="rider">
            <RiderLayout />
          </RequireAuth>
        ),
        children: [
          {
            index: true,
            element: <RiderDashboard />,
          },
          {
            path: "jobs",
            element: <RiderJobs />,
          },
          {
            path: "active",
            element: <RiderActiveJobs />,
          },
          {
            path: "earnings",
            element: <RiderEarnings />,
          },
        ],
      },
      {
        path: "admin",
        element: (
          <RequireAuth requireRole="admin">
            <AdminLayout />
          </RequireAuth>
        ),
        children: [
          {
            index: true,
            element: <AdminOverview />,
          },
          {
            path: "deliveries",
            element: <AdminDeliveries />,
          },
          {
            path: "users",
            element: <AdminUsers />,
          },
          {
            path: "riders",
            element: <AdminRiders />,
          },
          {
            path: "wallets",
            element: <AdminWallets />,
          },
          {
            path: "escrow",
            element: <AdminEscrow />,
          },
          {
            path: "disputes",
            element: <AdminDisputes />,
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
