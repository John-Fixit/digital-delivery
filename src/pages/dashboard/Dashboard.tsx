import ActionCenter from "../../components/core/dashboard/action-center/ActionCenter";
import ActiveMap from "../../components/core/dashboard/active-map/ActiveMap";
import DashboardStats from "../../components/core/dashboard/DashboardStat";
import OngoingShipment from "../../components/core/dashboard/ongoing-shiment/OngoingShipment";
import OrderProgress from "../../components/core/dashboard/order-progress/OrderProgress";
import RecentShipmentTable from "../../components/core/dashboard/recent-shipment/RecentShipmentTable";
import PageHeader from "../../components/shared/page-header/PageHeader";
import TrustSafetyView from "../../components/shared/trust-safety-view/TrustSafetyView";

const Dashboard = () => {
  return (
    <>
      <div className="p-8 max-w-350 w-full mx-auto space-y-8">
        <PageHeader
          title={"Dashboard Overview"}
          description={"Manage your active logistics and escrow balance."}
        />
        <ActionCenter />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <OrderProgress />
            <DashboardStats />

            <OngoingShipment />
            <RecentShipmentTable />
          </div>
          <div className="lg:col-span-4 space-y-8">
            <ActiveMap />
            <TrustSafetyView />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
