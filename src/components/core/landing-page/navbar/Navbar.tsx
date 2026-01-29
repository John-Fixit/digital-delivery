const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-solid border-[#e7ebf3] dark:border-gray-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between whitespace-nowrap">
          <div className="flex items-center gap-3">
            <div className="text-primary">
              <img
                src="/logicrow.png"
                alt=""
                className="objectcover h-12.5 w-12.5"
              />
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-tight dark:text-white">
              Logicrow
            </h2>
          </div>
          <div className="hidden md:flex flex-1 justify-end gap-10 items-center">
            <nav className="flex items-center gap-8">
              <a
                className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-300"
                href="#services"
              >
                Services
              </a>
              <a
                className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-300"
                href="#how-it-works"
              >
                How it Works
              </a>
              <a
                className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-300"
                href="#safety"
              >
                Safety
              </a>
              <a
                className="text-sm font-medium hover:text-primary transition-colors dark:text-gray-300"
                href="#carriers"
              >
                Carriers
              </a>
            </nav>
            <div className="flex gap-3">
              <button className="bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all shadow-sm">
                Start Shipping
              </button>
              <button className="bg-[#e7ebf3] dark:bg-gray-800 text-[#0e121b] dark:text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                Login
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
