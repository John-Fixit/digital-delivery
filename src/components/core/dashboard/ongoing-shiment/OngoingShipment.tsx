const OngoingShipment = () => {
  return (
    <>
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
    </>
  );
};

export default OngoingShipment;
