const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-solid border-[#e7ebf3] dark:border-gray-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-20 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between whitespace-nowrap">
          <div className="flex items-center gap-3">
            <div className="text-primary">
              <svg
                className="size-8"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-tight dark:text-white">
              LogisEscrow
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
