import DashboardStats from "../../components/core/dashboard/DashboardStat";
import PageHeader from "../../components/shared/page-header/PageHeader";
import Button from "../../components/shared/ui/button/Button";

const Dashboard = () => {
  return (
    <>
      <div className="p-8 max-w-350 w-full mx-auto space-y-8">
        <PageHeader
          title={"Dashboard Overview"}
          description={"Manage your active logistics and escrow balance."}
        />
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-default-600 flex items-center gap-2">
              <span className="material-symbols-outlined text-orange-500">
                bolt
              </span>
              Action Center
            </h3>
            <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
              2 Urgent Actions
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card-light dark:bg-card-dark p-5 rounded-2xl border border-border-light dark:border-border-dark shadow-sm flex flex-col justify-between hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="size-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-default-600">
                    Release Payment
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Shipment #LH-82690 was delivered to Sarah J.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-auto">
                <button className="flex-1 cursor-pointer bg-primary text-white text-xs font-bold py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  Confirm &amp; Release
                </button>
                <Button className="bg-default-50 text-default-600 text-xs font-bold py-2 rounded-lg border border-border-light dark:border-border-dark">
                  Dispute
                </Button>
              </div>
            </div>
            <div className="bg-card-light dark:bg-card-dark p-5 rounded-2xl border border-border-light dark:border-border-dark shadow-sm flex flex-col justify-between hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="size-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined">
                    local_shipping
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-default-600">
                    Confirm Pickup
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Rider is at your location for #LH-82552.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 mt-auto">
                <button className="flex-1 cursor-pointer bg-primary text-white text-xs font-bold py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  Handover Package
                </button>

                <Button className="bg-default-50 text-default-600 text-xs font-bold py-2 rounded-lg border border-border-light dark:border-border-dark">
                  Call Rider
                </Button>
              </div>
            </div>
            <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-xl flex flex-col relative overflow-hidden">
              <div className="absolute -right-6 -top-6 size-24 bg-primary/20 rounded-full blur-2xl"></div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                    Escrow Wallet
                  </p>
                  <p className="text-2xl font-bold mt-1">$4,820.50</p>
                </div>
                <div className="flex items-center gap-1 bg-success/20 text-success-400 px-2 py-0.5 rounded-full border border-success/30">
                  <span className="material-symbols-outlined !text-[14px]">
                    shield
                  </span>
                  <span className="text-[10px] font-bold">Protected</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-auto relative z-10">
                <div>
                  <p className="text-slate-500 text-[10px] font-medium">
                    Locked Funds
                  </p>
                  <p className="text-sm font-bold">$1,240.00</p>
                </div>
                <div>
                  <p className="text-slate-500 text-[10px] font-medium">
                    Available
                  </p>
                  <p className="text-sm font-bold text-primary-400">
                    $3,580.50
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-sm">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-default-600">
                    Current Order Progress
                  </h3>
                  <p className="text-xs text-slate-500">
                    Tracking #LH-82741 (In Transit)
                  </p>
                </div>
                <button className="text-primary text-xs font-bold flex items-center gap-1 hover:underline">
                  Full Tracking{" "}
                  <span className="material-symbols-outlined !text-sm">
                    open_in_new
                  </span>
                </button>
              </div>

              <div className="relative pt-4 pb-8">
                <div className="absolute top-6 left-0 w-full h-0.5 bg-slate-800"></div>
                <div className="absolute top-6 left-0 w-2/3 h-0.5 bg-primary"></div>
                <div className="relative flex justify-between">
                  <div className="flex flex-col items-center gap-2">
                    <div className="size-4 rounded-full bg-primary ring-4 ring-primary/20 z-10"></div>
                    <span className="text-[10px] font-bold text-default-600">
                      Dispatched
                    </span>
                    <span className="text-[9px] text-default-500">
                      Oct 24, 09:00
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="size-4 rounded-full bg-primary ring-4 ring-primary/20 z-10"></div>
                    <span className="text-[10px] font-bold text-default-600">
                      In Transit
                    </span>
                    <span className="text-[9px] text-default-500">
                      Oct 24, 14:20
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="size-4 rounded-full bg-primary ring-4 ring-primary/20 z-10 flex items-center justify-center text-[8px] text-white">
                      <span className="material-symbols-outlined text-[12px]">
                        local_shipping
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-default-600">
                      Last Mile
                    </span>
                    <span className="text-[9px] text-default-500">
                      In Progress
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="size-4 rounded-full bg-slate-800 z-10"></div>
                    <span className="text-[10px] font-bold text-default-500">
                      Delivered
                    </span>
                    <span className="text-[9px] text-default-500">
                      Est. Today
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-card-light dark:bg-card-dark border-border-light dark:border-border-dark p-4 rounded-xl border shadow-sm">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Monthly Shipments
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-900 dark:text-default-600">
                    42
                  </span>
                  <span className="text-[10px] font-bold text-success">
                    +12%
                  </span>
                </div>
              </div>
              <div className="bg-card-light dark:bg-card-dark border-border-light dark:border-border-dark p-4 rounded-xl border shadow-sm">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Success Rate
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-900 dark:text-default-600">
                    99.2%
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">
                    High Trust
                  </span>
                </div>
              </div>
              <div className="bg-card-light dark:bg-card-dark border-border-light dark:border-border-dark p-4 rounded-xl border shadow-sm">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Avg. Delivery Time
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-900 dark:text-default-600">
                    2.4h
                  </span>
                  <span className="text-[10px] font-bold text-info">-15m</span>
                </div>
              </div>
            </div>
            <div className="bg-card-light dark:bg-card-dark rounded-2xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-default-100 flex justify-between items-center">
                <h3 className="font-bold text-default-900 dark:text-default-600">
                  Ongoing Shipments
                </h3>
                <button className="text-primary text-xs font-bold hover:underline">
                  View All Active
                </button>
              </div>
              <div className="divide-y divide-default-50">
                <div className="p-4 hover:bg-background-light dark:hover:bg-background-dark transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-xl bg-slate-100 overflow-hidden shrink-0">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBj3nZiS_yFJuxc1lCafz3RuPlCQLL_78hDCDmNYlIdGUYPD1Ys4gUM7CF1b0Y6GxJN1wYPgqFfhK0Z2UQpxRW-VmPu0S7TIdUFktd03Tmo66NoqQO2v069wM7oJY8YxGP6gU9vdBpvx4xaQITeC85Yts6bx8GqwJHpo1ADvPF_pWnYeKmzpvclPV6wvLNF-3TSiXYftmTKGOXty_GNdMGCg_D5gBGg53aavPICQQXkR7ZR2pZoWXoyl_pOn6xMo9EQLUMJJ_Jcjio")`,
                        }}
                      ></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900 dark:text-default-600">
                          #LH-82741
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-600 text-[10px] font-bold uppercase">
                          Moving
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">
                        To: W. Madison St, Chicago
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-slate-900 dark:text-default-600">
                      ETA: 14 mins
                    </p>
                    <a
                      className="text-[10px] font-bold text-primary hover:underline"
                      href="#"
                    >
                      Track Live
                    </a>
                  </div>
                </div>
                <div className="p-4 hover:bg-background-light dark:hover:bg-background-dark transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="size-12 rounded-xl bg-slate-100 overflow-hidden shrink-0">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBj3nZiS_yFJuxc1lCafz3RuPlCQLL_78hDCDmNYlIdGUYPD1Ys4gUM7CF1b0Y6GxJN1wYPgqFfhK0Z2UQpxRW-VmPu0S7TIdUFktd03Tmo66NoqQO2v069wM7oJY8YxGP6gU9vdBpvx4xaQITeC85Yts6bx8GqwJHpo1ADvPF_pWnYeKmzpvclPV6wvLNF-3TSiXYftmTKGOXty_GNdMGCg_D5gBGg53aavPICQQXkR7ZR2pZoWXoyl_pOn6xMo9EQLUMJJ_Jcjio")`,
                        }}
                      ></div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900 dark:text-default-600">
                          #LH-82552
                        </span>
                        <span className="px-1.5 py-0.5 rounded bg-orange-50 text-orange-600 text-[10px] font-bold uppercase">
                          Pickup
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">
                        From: Lincoln Park Office
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-slate-900 dark:text-default-600">
                      ETA: 5 mins
                    </p>
                    <a
                      className="text-[10px] font-bold text-primary hover:underline"
                      href="#"
                    >
                      Track Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-sm flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-900 dark:text-default-600">
                  Active Map
                </h3>
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-green-50 rounded-full border border-green-100">
                  <span className="size-2 bg-success rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-bold uppercase text-success tracking-wider">
                    Live
                  </span>
                </div>
              </div>
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-slate-100 mb-4">
                <div
                  className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBj3nZiS_yFJuxc1lCafz3RuPlCQLL_78hDCDmNYlIdGUYPD1Ys4gUM7CF1b0Y6GxJN1wYPgqFfhK0Z2UQpxRW-VmPu0S7TIdUFktd03Tmo66NoqQO2v069wM7oJY8YxGP6gU9vdBpvx4xaQITeC85Yts6bx8GqwJHpo1ADvPF_pWnYeKmzpvclPV6wvLNF-3TSiXYftmTKGOXty_GNdMGCg_D5gBGg53aavPICQQXkR7ZR2pZoWXoyl_pOn6xMo9EQLUMJJ_Jcjio")`,
                  }}
                ></div>
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
                  <div className="bg-white/95 backdrop-blur p-2 rounded-lg shadow-sm border border-slate-100 pointer-events-auto">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">
                      Focusing
                    </p>
                    <p className="text-xs font-bold">2 Drivers Nearby</p>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  <button className="size-8 bg-white/90 backdrop-blur rounded-lg shadow-md flex items-center justify-center text-slate-600 hover:bg-white transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      add
                    </span>
                  </button>
                  <button className="size-8 bg-white/90 backdrop-blur rounded-lg shadow-md flex items-center justify-center text-slate-600 hover:bg-white transition-colors">
                    <span className="material-symbols-outlined text-lg">
                      remove
                    </span>
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <span className="material-symbols-outlined !text-lg">
                      directions_bike
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] font-bold text-slate-900 dark:text-default-600 truncate tracking-tight">
                      Rider: Mike D.
                    </p>
                    <p className="text-[10px] text-slate-500 truncate">
                      Carrier Express #402
                    </p>
                  </div>
                  <button className="size-7 rounded-lg bg-white border border-border-light dark:border-border-dark flex items-center justify-center text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined !text-sm">
                      call
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-card-light dark:bg-card-dark p-6 rounded-2xl border border-border-light dark:border-border-dark shadow-sm">
              <h3 className="font-bold text-slate-900 dark:text-default-600 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-success !text-xl">
                  shield_person
                </span>
                Trust &amp; Safety
              </h3>
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-green-50 border border-green-100/50">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined text-success !text-base">
                      verified
                    </span>
                    <span className="text-xs font-bold text-success">
                      Fully Protected Account
                    </span>
                  </div>
                  <p className="text-[10px] text-green-700 leading-relaxed">
                    All transactions are held in escrow. Funds are only released
                    upon your confirmation of delivery.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">ID Verification</span>
                    <span className="text-success font-bold">Verified</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Escrow Bond</span>
                    <span className="text-success font-bold">Active</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Dispute History</span>
                    <span className="text-slate-400">0 Disputes</span>
                  </div>
                </div>
                <button className="w-full py-2 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 text-[11px] font-bold hover:border-primary/40 hover:text-primary transition-all">
                  Increase Protection Level
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 md:py-8 px-5 lg:px-8 max-w-7xl w-full mx-auto">
        {/* <!-- SectionHeader --> */}

        <PageHeader
          title={"Dashboard Overview"}
          description={"Manage your active logistics and escrow balance."}
        />
        {/* <!-- Stats --> */}
        <DashboardStats />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* <!-- Recent Deliveries Table --> */}
          <div className="lg:col-span-2 flex flex-col bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-border-light dark:border-border-dark flex justify-between items-center">
              <h3 className="font-bold text-slate-800 dark:text-white">
                Recent Shipments
              </h3>
              <button className="text-primary text-xs font-semibold hover:underline">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-800/50">
                  <tr>
                    <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                      Tracking ID
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                      Recipient
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                      Status
                    </th>
                    <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-primary">
                      #LH-82741
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                      Marcus Sterling
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                        In Transit
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      Oct 24, 2023
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-primary">
                      #LH-82690
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                      Sarah Jenkins
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        Delivered
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      Oct 23, 2023
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-primary">
                      #LH-82552
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                      Fargo Logistics
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400">
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      Oct 22, 2023
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-primary">
                      #LH-82410
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                      David G.
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        Delivered
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">
                      Oct 20, 2023
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <!-- Mini-Map Panel --> */}
          <div className="flex flex-col gap-4">
            <div className="bg-white dark:bg-card-dark p-6 rounded-xl border border-border-light dark:border-border-dark shadow-sm flex flex-col h-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-800 dark:text-white">
                  Live Tracking
                </h3>
                <div className="flex gap-2">
                  <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
                    Live
                  </span>
                </div>
              </div>
              {/* <!-- Map Container --> */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden border border-border-light dark:border-border-dark mb-4">
                <div
                  className="absolute inset-0 bg-center bg-no-repeat bg-cover"
                  data-alt="Simplified city map showing active routes"
                  data-location="Chicago"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBj3nZiS_yFJuxc1lCafz3RuPlCQLL_78hDCDmNYlIdGUYPD1Ys4gUM7CF1b0Y6GxJN1wYPgqFfhK0Z2UQpxRW-VmPu0S7TIdUFktd03Tmo66NoqQO2v069wM7oJY8YxGP6gU9vdBpvx4xaQITeC85Yts6bx8GqwJHpo1ADvPF_pWnYeKmzpvclPV6wvLNF-3TSiXYftmTKGOXty_GNdMGCg_D5gBGg53aavPICQQXkR7ZR2pZoWXoyl_pOn6xMo9EQLUMJJ_Jcjio")`,
                  }}
                ></div>
                {/* <!-- UI Overlays for Map --> */}
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 p-2 rounded-lg shadow-sm border border-border-light dark:border-border-dark">
                  <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">
                    Current Active
                  </p>
                  <p className="text-sm font-bold">4 Shipments</p>
                </div>
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  <button className="size-8 bg-white dark:bg-card-dark rounded-lg shadow-md flex items-center justify-center text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-lg">
                      add
                    </span>
                  </button>
                  <button className="size-8 bg-white dark:bg-card-dark rounded-lg shadow-md flex items-center justify-center text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-outlined text-lg">
                      remove
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">
                      person_pin_circle
                    </span>
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <p className="text-xs font-bold text-slate-800 dark:text-white truncate">
                      Truck #91 - En Route
                    </p>
                    <p className="text-[10px] text-slate-500 truncate tracking-tight">
                      ETA: 14 mins - W. Madison St.
                    </p>
                  </div>
                  <button className="ml-auto text-primary">
                    <span className="material-symbols-outlined text-xl">
                      chevron_right
                    </span>
                  </button>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl border border-border-light dark:border-border-dark">
                  <div className="size-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-500">
                    <span className="material-symbols-outlined">
                      person_pin_circle
                    </span>
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <p className="text-xs font-bold text-slate-800 dark:text-white truncate">
                      Courier #12 - Pickup
                    </p>
                    <p className="text-[10px] text-slate-500 truncate tracking-tight">
                      Arriving at Origin
                    </p>
                  </div>
                  <button className="ml-auto text-slate-400">
                    <span className="material-symbols-outlined text-xl">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
