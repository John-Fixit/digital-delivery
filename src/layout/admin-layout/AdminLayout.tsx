import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import useSidebarStore from "../../hooks/use-sidebar-store";
import Sidebar from "../../components/shared/sidebar/Sidebar";

const AdminLayout = () => {
  const { toggleSidebar } = useSidebarStore();

  return (
    <div className="flex h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="px-5 md:px-8 py-4 flex items-center gap-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="cursor-pointer lg:hidden" onClick={toggleSidebar}>
            <FaBars size={23} />
          </div>
          <h1 className="text-lg font-bold">Admin Panel</h1>
        </header>

        <main className="flex-1 overflow-y-auto relative">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
