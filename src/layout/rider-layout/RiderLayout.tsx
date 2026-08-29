import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import useSidebarStore from "../../hooks/use-sidebar-store";
import Sidebar from "../../components/shared/sidebar/Sidebar";
import { useMyRiderProfile, useUpdateRiderAvailability } from "../../api-service/riders/riders";

const RiderLayout = () => {
  const { toggleSidebar } = useSidebarStore();
  const { data: rider } = useMyRiderProfile();
  const updateAvailability = useUpdateRiderAvailability();

  const isAvailable = rider?.availabilityStatus === "available";
  const canToggle = rider?.verificationStatus === "approved";

  return (
    <div className="flex h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="px-5 md:px-8 py-4 flex items-center justify-between bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-4">
            <div className="cursor-pointer lg:hidden" onClick={toggleSidebar}>
              <FaBars size={23} />
            </div>
            <h1 className="text-lg font-bold hidden md:block">Rider Console</h1>
          </div>

          {canToggle ? (
            <button
              onClick={() =>
                updateAvailability.mutate(isAvailable ? "unavailable" : "available")
              }
              disabled={updateAvailability.isPending}
              className={`flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-lg transition-all disabled:opacity-60 ${
                isAvailable
                  ? "bg-success/10 text-success"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-500"
              }`}
            >
              <span
                className={`size-2 rounded-full ${isAvailable ? "bg-success" : "bg-slate-400"}`}
              />
              {isAvailable ? "Available for jobs" : "Unavailable"}
            </button>
          ) : null}
        </header>

        <main className="flex-1 overflow-y-auto relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RiderLayout;
