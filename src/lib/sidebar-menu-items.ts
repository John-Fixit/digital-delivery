import {
  IoFolderOpenOutline,
  IoFolderOpenSharp,
  IoSettings,
  IoSettingsOutline,
  IoDocumentText,
  IoDocumentTextOutline,
  IoShieldOutline,
  IoShieldSharp,
  IoWalletOutline,
  IoWallet,
} from "react-icons/io5";
import {
  MdAnalytics,
  MdOutlineAnalytics,
  MdOutlineRequestQuote,
  MdOutlineSpaceDashboard,
  MdRequestQuote,
  MdSpaceDashboard,
} from "react-icons/md";
import { HiOutlineShoppingBag, HiShoppingBag } from "react-icons/hi2";
import { AiFillMoneyCollect, AiOutlineMoneyCollect } from "react-icons/ai";
import { GrStatusPlaceholder, GrStatusPlaceholderSmall } from "react-icons/gr";
import { PiPackageFill, PiPackageLight } from "react-icons/pi";

export const navItems = [
  {
    path: "/home",
    label: "Dashboard",
    icon: MdOutlineSpaceDashboard,
    activeIcon: MdSpaceDashboard,
  },
  {
    path: "/home/shipment",
    label: "My Shipment",
    icon: PiPackageLight,
    activeIcon: PiPackageFill,
  },
  {
    path: "/home/wallet",
    label: "Wallet",
    icon: IoWalletOutline,
    activeIcon: IoWallet,
  },
  {
    path: "/project",
    label: "Projects",
    icon: IoFolderOpenOutline,
    activeIcon: IoFolderOpenSharp,
    relativePath: "/project",
    sub_menu: [
      {
        path: "/project/job-order",
        label: "Job Order",
        icon: HiOutlineShoppingBag,
        activeIcon: HiShoppingBag,
      },
      {
        path: "/project/local-purchase-order",
        label: "Local Purchase",
        icon: MdOutlineRequestQuote,
        activeIcon: MdRequestQuote,
      },
    ],
  },
  {
    path: "/request",
    label: "Request",
    icon: MdOutlineRequestQuote,
    activeIcon: MdRequestQuote,
    relativePath: "/request",
    sub_menu: [
      {
        path: "/request/job-order",
        label: "Job Order",
        icon: HiOutlineShoppingBag,
        activeIcon: HiShoppingBag,
      },
      {
        path: "/request/local-purchase-order",
        label: "Local Purchase Order",
        icon: MdOutlineRequestQuote,
        activeIcon: MdRequestQuote,
      },
    ],
  },
  {
    path: "/report",
    label: "Report",
    icon: MdOutlineAnalytics,
    activeIcon: MdAnalytics,
  },
  {
    path: "/setting",
    label: "Setting",
    icon: IoSettingsOutline,
    activeIcon: IoSettings,
    relativePath: "/setting",
    sub_menu: [
      {
        path: "/setting/tax",
        label: "Tax",
        icon: AiOutlineMoneyCollect,
        activeIcon: AiFillMoneyCollect,
      },
      {
        path: "/setting/document",
        label: "Document",
        icon: IoDocumentTextOutline,
        activeIcon: IoDocumentText,
      },
      {
        path: "/setting/permission",
        label: "Role & Permission",
        icon: IoShieldOutline,
        activeIcon: IoShieldSharp,
      },
      {
        path: "/setting/status",
        label: "Status",
        icon: GrStatusPlaceholder,
        activeIcon: GrStatusPlaceholderSmall,
      },
    ],
  },
];
