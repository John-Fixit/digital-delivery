import {
  IoWalletOutline,
  IoWallet,
  IoMapOutline,
  IoMap,
  IoNotificationsOutline,
  IoNotifications,
  IoWarningOutline,
  IoWarning,
  IoCashOutline,
  IoCash,
} from "react-icons/io5";
import {
  MdOutlineSpaceDashboard,
  MdSpaceDashboard,
} from "react-icons/md";
import { PiPackageFill, PiPackageLight } from "react-icons/pi";
import { HiOutlineClipboardList, HiClipboardList } from "react-icons/hi";
import { FaRegListAlt, FaListAlt } from "react-icons/fa";
import {
  MdOutlinePeopleAlt,
  MdPeopleAlt,
  MdOutlineTwoWheeler,
  MdTwoWheeler,
  MdOutlineAccountBalanceWallet,
  MdAccountBalanceWallet,
  MdOutlineGppGood,
  MdGppGood,
} from "react-icons/md";
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

export const riderNavItems: NavItem[] = [
  {
    path: "/rider",
    label: "Dashboard",
    icon: MdOutlineSpaceDashboard,
    activeIcon: MdSpaceDashboard,
  },
  {
    path: "/rider/jobs",
    label: "Available Jobs",
    icon: FaRegListAlt,
    activeIcon: FaListAlt,
  },
  {
    path: "/rider/active",
    label: "Active Tasks",
    icon: HiOutlineClipboardList,
    activeIcon: HiClipboardList,
  },
  {
    path: "/rider/earnings",
    label: "Earnings",
    icon: IoCashOutline,
    activeIcon: IoCash,
  },
];

export const adminNavItems: NavItem[] = [
  {
    path: "/admin",
    label: "Overview",
    icon: MdOutlineSpaceDashboard,
    activeIcon: MdSpaceDashboard,
  },
  {
    path: "/admin/deliveries",
    label: "Deliveries",
    icon: PiPackageLight,
    activeIcon: PiPackageFill,
  },
  {
    path: "/admin/users",
    label: "Users",
    icon: MdOutlinePeopleAlt,
    activeIcon: MdPeopleAlt,
  },
  {
    path: "/admin/riders",
    label: "Riders",
    icon: MdOutlineTwoWheeler,
    activeIcon: MdTwoWheeler,
  },
  {
    path: "/admin/wallets",
    label: "Wallets",
    icon: MdOutlineAccountBalanceWallet,
    activeIcon: MdAccountBalanceWallet,
  },
  {
    path: "/admin/escrow",
    label: "Escrow",
    icon: MdOutlineGppGood,
    activeIcon: MdGppGood,
  },
  {
    path: "/admin/disputes",
    label: "Disputes",
    icon: IoWarningOutline,
    activeIcon: IoWarning,
  },
];
