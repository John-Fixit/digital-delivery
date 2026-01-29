const Footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-background-dark border-t border-[#e7ebf3] dark:border-gray-800 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="text-primary">
                  <svg
                    className="size-6"
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
                <h2 className="text-lg font-bold leading-tight tracking-tight dark:text-white">
                  LogisEscrow
                </h2>
              </div>
              <p className="text-sm text-[#4d6599] dark:text-gray-400 leading-relaxed">
                The world's first escrow-protected logistics marketplace.
                Bringing trust and reliability to every shipment.
              </p>
              <div className="flex gap-4">
                <a
                  className="text-[#4d6599] dark:text-gray-400 hover:text-primary transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined">public</span>
                </a>
                <a
                  className="text-[#4d6599] dark:text-gray-400 hover:text-primary transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined">
                    alternate_email
                  </span>
                </a>
                <a
                  className="text-[#4d6599] dark:text-gray-400 hover:text-primary transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined">share</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-[#0e121b] dark:text-white mb-6">
                Services
              </h4>
              <ul className="space-y-4 text-sm text-[#4d6599] dark:text-gray-400">
                <li>
                  <a className="hover:text-primary" href="#">
                    Local Delivery
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Interstate Freight
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Express Courier
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Warehouse Storage
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#0e121b] dark:text-white mb-6">
                Company
              </h4>
              <ul className="space-y-4 text-sm text-[#4d6599] dark:text-gray-400">
                <li>
                  <a className="hover:text-primary" href="#">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Careers
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Safety
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#0e121b] dark:text-white mb-6">
                Legal
              </h4>
              <ul className="space-y-4 text-sm text-[#4d6599] dark:text-gray-400">
                <li>
                  <a className="hover:text-primary" href="#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Escrow Agreement
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary" href="#">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#e7ebf3] dark:border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-[#4d6599] dark:text-gray-400">
              © {new Date().getFullYear()} LogisEscrow Technologies Inc. All
              rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <img
                className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all"
                data-alt="Visa Logo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqJJuMzahObnvWf0njXzLVHb2jS7o5S3ZKxo0PnRyugJtNKml1EkvHh6KCyN1buUasZvTbc4S5dWGh7lbrj6glF1XTcgDJ_8Gtk5VwrpSQrQmOUqBVpXVonqvqDd__6Rnfru9qzDFM48LNgFEjxq77hZdVuQfjkaxohdag5T2UXMxqVeK77bpzp8CgQv8S59rfB7Y_x4atYjKn6PZLcfUw1CRLm2PJBrDPS_hsQlUGfaSoO5smESW2YYEO9Ju815KG5WDciDZoMwo"
              />
              <img
                className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all"
                data-alt="Mastercard Logo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlAK7T72fgRSiT_R2zw3LhoHWEXiQ6lzgMn_95EIWtBkLvzGBkxsYNf3mi1TArhGOdjMk73V4Ldjr1tDxxgmXxfafehoyyu6rwwsQPKXfHP1QNyL3gmHSuUaC7jNuNupvDg8SgQGDNoLEEoFInoyC1eBLuJR9gvDzWvH6VF-ITR_mkTTEQGNSWtGVNVPt0w5OUye4JFh2Mb7HsURH7aFGTgDSRGemKhZEJ2yv8mCLBHeHQTHcEQrVUnzylIE3Kz5b1zYQ8GZpYraE"
              />
              <img
                className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all"
                data-alt="Stripe Logo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU83_fAjIdT-44xiotJDLGbK6kEyxgo42BM9sYAJnNQRbnbrAOykfklX1lPmlIz79eDhqinBY9cxdOuTgRUyKA6YV0dHO7nZOvffqKLjG37ACFC56BgmUfQcxEg5L0UE6CIVR9p2mKcpSE8xqY2L3IDUZ003i7nkpfIcOIRKqgxghLQueqLI-c0rJC_STbYkhtm6rf8ZMAoxJK0cMAJExtl5vtfPbX9i928PSgzSjm8rItkRIGaRN3EA84ZoiVkC5jhA3GtdYGxdg"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
