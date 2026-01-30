import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import Login from "./pages/login/Login";
import AuthLayout from "./layout/auth-layout/AuthLayout";
import Register from "./pages/register/Register";
import { useSystemTheme } from "./hooks/useSystemTheme";
import HomeLayout from "./layout/home-layout/HomeLayout";
import Dashboard from "./pages/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/home",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
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
