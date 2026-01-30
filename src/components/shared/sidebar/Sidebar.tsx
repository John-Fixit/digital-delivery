import React, { useState } from "react";
import { CiLogout } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";
import {
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from "@heroui/react";
import { useScreenSize } from "react-haiku";
import useSidebarStore from "../../../hooks/use-sidebar-store";
import Button from "../ui/button/Button";
import { preProfileLink } from "../../../utils/pre-profile-link";
import { navItems } from "../../../lib/sidebar-menu-items";

type DropDownTargetStateType = {
  state?: boolean;
  menu?: {
    path?: string;
    label?: string | unknown;
    [key: string]: unknown;
  };
} | null;

const Sidebar = () => {
  const currentPath = useLocation().pathname;

  const [dropDownTargetState, setDropdownTargetState] =
    useState<DropDownTargetStateType>(null);

  const screenSize = useScreenSize();

  const navigate = useNavigate();
  const { isSidebarOpen, toggleSidebar } = useSidebarStore();

  const sidebarOpen = screenSize.gte("lg") ? true : isSidebarOpen;

  const routeNavigate = (path: string) => {
    navigate(path);
    // Close sidebar on mobile/tablet after navigation
    if (screenSize.lte("md")) toggleSidebar();
  };

  const profileImage = `https://lh3.googleusercontent.com/aida-public/AB6AXuD46bcj4HtJf8bj6ghKxpvmzifUAEPbdNn-oJivWOHpnhBTn74aOaCAnJiW1ycae6VmRgnLQoMGGmGGx5oN1-DmtJSEBrCYpyE94FinxbagfFdjmSk1n7q91WyTivx4dM-IKM3WhQEGEwuDLNntSD8fWrauFEOQMaGMaHEuZ_QOSOsgHvxop-ghNwY7y_SGlt7i_C2cD9u5i6yEQQnq7hYvlMcDZbGIcPoQZjenem_IQlibbeW2_5HkErttTxM-CzgToI2f8RRdRB4`;
  return (
    <>
      {/* Overlay for mobile/tablet when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 lg:hidden transition-opacity duration-300"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          "dark:border-slate-800 bg-white dark:bg-background-dark border-r border-gray-200 flex flex-col h-screen transition-all duration-300 ease-in-out",

          "fixed lg:relative inset-y-0 left-0 z-50",
          sidebarOpen
            ? "translate-x-0 w-72"
            : "-translate-x-full lg:translate-x-0 lg:w-16",
          "lg:shadow-none",
          sidebarOpen && "shadow-2xl lg:shadow-none",
        )}
      >
        {/* Logo/Header */}
        <div
          className={clsx(
            "border-b border-gray-200 dark:border-slate-800 transition-all duration-300",
            sidebarOpen ? "p-6 py-4" : "lg:px-2 lg:py-5 p-6",
          )}
        >
          <div className="flex items-center gap-2">
            <img
              src="/logicrow.png"
              alt="Logicrow Logo"
              width={40}
              height={40}
            />
            <h1
              className={clsx(
                "text-xl font-bold transition-opacity duration-300",
                !sidebarOpen && "lg:hidden",
              )}
            >
              Logicrow
            </h1>
          </div>
        </div>

        <nav
          className={clsx(
            "flex-1 overflow-y-auto transition-all duration-300",
            sidebarOpen ? "py-8 px-3" : "lg:px-2 lg:py-5 p-6",
          )}
        >
          <div className="mb-4">
            <div className="flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
              <Avatar
                className="w-10 h-10 cursor-pointer"
                src={profileImage || preProfileLink(`John Fixit`)}
              />
              <div className="flex flex-col">
                <h1 className="text-sm font-semibold">Alex Johnson</h1>
                <p className="text-slate-500 text-xs font-normal">
                  Package Owner
                </p>
              </div>
            </div>
          </div>
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              const Icon = isActive ? item?.activeIcon || item.icon : item.icon;
              const isDropActive = currentPath.startsWith(
                item.relativePath as string,
              );

              const isMenuOpen =
                dropDownTargetState?.state &&
                dropDownTargetState?.menu?.path === item.path;
              return (
                <li key={item.path}>
                  <Tooltip
                    content={item.label}
                    placement="right"
                    isDisabled={sidebarOpen}
                    className="lg:block hidden"
                  >
                    {item?.sub_menu?.length ? (
                      <>
                        <button
                          onClick={() => {
                            const prevLabel = dropDownTargetState?.menu?.label;

                            setDropdownTargetState({
                              state:
                                prevLabel === item?.label
                                  ? !dropDownTargetState?.state
                                  : true,
                              menu: item,
                            });
                          }}
                          className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-left transition-all cursor-pointer  ${
                            isDropActive
                              ? " text-indigo-600 font-medium"
                              : "text-default-500 hover:bg-gray-50 dark:hover:bg-black/40"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon size={22} className="shrink-0" />
                            <span
                              className={clsx(
                                "text-base transition-opacity duration-300",
                                !sidebarOpen && "lg:hidden",
                              )}
                            >
                              {item.label}
                            </span>
                          </div>
                          <IoChevronDown
                            className={`text-sm transition-transform duration-300 ${
                              isMenuOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            isMenuOpen
                              ? "max-h-40 opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <ul className="mt-1 space-y-1 pl-4">
                            {item?.sub_menu.map((item) => {
                              const isActive = currentPath === item.path;
                              const Icon = isActive
                                ? item?.activeIcon || item.icon
                                : item.icon;
                              return (
                                <li key={item.path}>
                                  <button
                                    onClick={() => routeNavigate(item.path)}
                                    className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left transition-all text-sm cursor-pointer ${
                                      isActive
                                        ? "bg-indigo-50 text-indigo-600 font-medium"
                                        : "hover:bg-slate-100 dark:hover:bg-black/40 text-default-500"
                                    }`}
                                  >
                                    <Icon size={22} className="shrink-0" />
                                    {item.label}
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <button
                        onClick={() => routeNavigate(item.path)}
                        className={clsx(
                          "w-full flex items-center gap-3 py-3 rounded-lg text-left transition-all cursor-pointer",
                          isActive
                            ? "bg-gray-200/80 dark:bg-black/50 text-indigo-600 font-medium"
                            : "hover:bg-slate-100 dark:hover:bg-black/40 text-default-500",
                          sidebarOpen
                            ? "px-4"
                            : "lg:px-3 lg:justify-center px-4",
                        )}
                      >
                        <Icon size={22} className="shrink-0" />
                        <span
                          className={clsx(
                            "text-base transition-opacity duration-300",
                            !sidebarOpen && "lg:hidden",
                          )}
                        >
                          {item.label}
                        </span>
                      </button>
                    )}
                  </Tooltip>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Actions */}
        <div
          className={clsx(
            "border-t border-gray-200 dark:border-slate-800 space-y-2 transition-all duration-300",
            sidebarOpen ? "px-4 py-4" : "lg:px-2 lg:py-4 px-4 py-4",
          )}
        >
          <Tooltip
            content="Logout"
            placement="right"
            isDisabled={sidebarOpen}
            className="lg:block hidden"
          >
            <LogoutPopover>
              <button
                className={clsx(
                  "w-full flex items-center gap-3 py-2.5 rounded-lg text-left text-gray-700 hover:bg-gray-50 transition-all cursor-pointer",
                  sidebarOpen ? "px-4" : "lg:px-3 lg:justify-center px-4",
                )}
              >
                <CiLogout className="text-lg shrink-0" />
                <span
                  className={clsx(
                    "text-base transition-opacity duration-300",
                    !sidebarOpen && "lg:hidden",
                  )}
                >
                  Logout
                </span>
              </button>
            </LogoutPopover>
          </Tooltip>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

export const LogoutPopover = ({ children }: { children: React.ReactNode }) => {
  // const { removeCurrentUser } = useCurrentUser();
  const navigate = useNavigate();
  const handleLogout = () => {
    // removeCurrentUser();
    navigate("/login");
  };
  return (
    <Popover
      showArrow
      backdrop="opaque"
      classNames={{
        base: [
          // arrow color
          "before:bg-default-200",
        ],
        content: [
          "py-3 px-4 border border-default-200",
          "bg-linear-to-br from-white to-default-300",
          "dark:from-default-100 dark:to-default-50",
        ],
      }}
      placement="right"
    >
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        {(titleProps) => (
          <div className="px-1 py-2">
            <h3 className="text-small font-bold" {...titleProps}>
              Logout
            </h3>
            <div className="text-sm">Are you sure you want to logout?</div>
            <div className="mt-3 flex justify-end">
              <Button
                color={"primary"}
                variant={"solid"}
                onPress={handleLogout}
                size={"sm"}
              >
                Logout
              </Button>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};
