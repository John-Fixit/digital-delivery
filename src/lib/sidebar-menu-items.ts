import {
  IoWalletOutline,
  IoWallet,
  IoMapOutline,
  IoMap,
  IoNotificationsOutline,
  IoNotifications,
  IoWarningOutline,
  IoWarning,
} from "react-icons/io5";
import {
  MdOutlineSpaceDashboard,
  MdSpaceDashboard,
} from "react-icons/md";
import { PiPackageFill, PiPackageLight } from "react-icons/pi";
import type { IconType } from "react-icons";

export type NavItem = {
  path: string;
  label: string;
  icon: IconType;
  activeIcon?: IconType;
  relativePath?: string;
  sub_menu?: NavItem[];
};

export const navItems: NavItem[] = [
  {
    path: "/home",
    label: "Dashboard",
    icon: MdOutlineSpaceDashboard,
    activeIcon: MdSpaceDashboard,
  },
  {
    path: "/home/shipment",
    label: "My Shipments",
    icon: PiPackageLight,
    activeIcon: PiPackageFill,
  },
  {
    path: "/home/tracking",
    label: "Tracking Board",
    icon: IoMapOutline,
    activeIcon: IoMap,
  },
  {
    path: "/home/wallet",
    label: "Wallet",
    icon: IoWalletOutline,
    activeIcon: IoWallet,
  },
  {
    path: "/home/notifications",
    label: "Notifications",
    icon: IoNotificationsOutline,
    activeIcon: IoNotifications,
  },
  {
    path: "/home/disputes",
    label: "Disputes",
    icon: IoWarningOutline,
    activeIcon: IoWarning,
  },
];
