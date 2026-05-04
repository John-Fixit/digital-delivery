import { Outlet } from "react-router-dom";
import SessionExpiredModal from "./SessionExpiredModal";

const AppRoot = () => {
  return (
    <>
      <Outlet />
      <SessionExpiredModal />
    </>
  );
};

export default AppRoot;
