const MapTrackingView = () => {
  return (
    <>
      <div className="relative w-full aspect-4/5 rounded-xl overflow-hidden border border-slate-100 mb-4">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBj3nZiS_yFJuxc1lCafz3RuPlCQLL_78hDCDmNYlIdGUYPD1Ys4gUM7CF1b0Y6GxJN1wYPgqFfhK0Z2UQpxRW-VmPu0S7TIdUFktd03Tmo66NoqQO2v069wM7oJY8YxGP6gU9vdBpvx4xaQITeC85Yts6bx8GqwJHpo1ADvPF_pWnYeKmzpvclPV6wvLNF-3TSiXYftmTKGOXty_GNdMGCg_D5gBGg53aavPICQQXkR7ZR2pZoWXoyl_pOn6xMo9EQLUMJJ_Jcjio")`,
          }}
        ></div>
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
          <div className="bg-white/95 dark:bg-background-dark backdrop-blur p-2 rounded-lg shadow-sm border border-slate-100 pointer-events-auto">
            <p className="text-[10px] font-bold text-slate-400 uppercase">
              Focusing
            </p>
            <p className="text-xs font-bold">2 Drivers Nearby</p>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 flex flex-col gap-2">
          <button className="size-8 bg-white/90 backdrop-blur rounded-lg shadow-md flex items-center justify-center text-slate-600 hover:bg-white transition-colors">
            <span className="material-symbols-outlined text-lg">add</span>
          </button>
          <button className="size-8 bg-white/90 backdrop-blur rounded-lg shadow-md flex items-center justify-center text-slate-600 hover:bg-white transition-colors">
            <span className="material-symbols-outlined text-lg">remove</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default MapTrackingView;
