// src/layout/home-layout/HomeLayout.jsx
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import useSidebarStore from "../../hooks/use-sidebar-store";
import Sidebar from "../../components/shared/sidebar/Sidebar";
import Button from "../../components/shared/ui/button/Button";
import Input from "../../components/shared/ui/input/Input";

const HomeLayout = () => {
  const { toggleSidebar } = useSidebarStore();

  return (
    <div className="flex h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation Bar */}
        <header className="px-5 md:px-8 py-4 flex items-center justify-between bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-4 flex-1">
            <div className="cursor-pointer lg:hidden" onClick={toggleSidebar}>
              <FaBars size={23} />
            </div>
            <div className="hidden md:flex items-center gap-4 flex-1">
              <label className="flex flex-col w-full max-w-md h-10">
                <Input
                  placeholder="Search tracking ID or recipient..."
                  size="md"
                  startContent={
                    <div className="text-slate-400 flex items-center justify-center">
                      <span className="material-symbols-outlined text-xl">
                        search
                      </span>
                    </div>
                  }
                />
              </label>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <Button
                radius="md"
                isIconOnly
                variant="flat"
                className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
              >
                <span className="material-symbols-outlined text-xl">
                  notifications
                </span>
              </Button>
              <Button>
                <span className="material-symbols-outlined text-lg">add</span>
                New Shipment
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;
