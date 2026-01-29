import { Outlet, useLocation, useNavigate } from "react-router-dom";

const currentPg = (location: string) => {
  const authRoute = {
    login: "/auth/login",
    register: "/auth/register",
  };
  const entry = Object.entries(authRoute).find(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ([key, value]: [string, string]) => value === location,
  );

  return entry?.[0] as string;
};

const AuthLayout = () => {
  const location = useLocation().pathname;

  const currentPage = currentPg(location);

  const navigate = useNavigate();

  return (
    <>
      <main className="bg-background-light dark:bg-background-dark text-[#120e1b] dark:text-[#f9f8fc] font-display min-h-screen overflow-x-hidden">
        <div className="flex h-screen overflow-hidden">
          <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/80 to-transparent"></div>
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover flex flex-col justify-end p-12 relative z-20"
              data-alt="Modern logistics hub with delivery trucks and riders"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzTlGvurcco88onOVIy_9oe4AHH5Vb6vfJtw-I4ZV6_JkB6IaaWbOZRkZHnDTpowOwO26Iga3tjKNwXN9XbbaGIiJNIDPUQk4EPkuz8A-D183tyM_BBBIR9Do8D4GSzcG1fIY6I9L9Uft0_ZDpYIgSB7SxQQC34NgRQFZCyTnKBAlHGgndimoHOcgxBNie1MF8ohkgM1VPz_JYTkVKLqYIgrlZUpWGSHVKG-kd-PSQL8F8zOECK6shQ84Xl4uBEBi_Rc-KrlFImLg")`,
              }}
            >
              <div className="max-w-md">
                <div className="flex items-center gap-3 mb-6 text-white">
                  <div className="size-8">
                    <svg
                      fill="none"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                      ></path>
                      <path
                        clip-rule="evenodd"
                        d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    LogiTrust
                  </h2>
                </div>
                <h1 className="text-4xl font-bold text-white mb-4">
                  Empowering the future of secure logistics.
                </h1>
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  The most secure escrow-based marketplace for riders and
                  logistics companies. Trust in every shipment.
                </p>
                <div className="flex items-center gap-4 py-4 px-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                  <span className="material-symbols-outlined text-white">
                    verified_user
                  </span>
                  <div className="text-white text-sm">
                    <span className="block font-bold">
                      Secure Escrow Shield
                    </span>
                    <span className="opacity-80">
                      Payments are only released upon successful delivery.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Side: Authentication Form --> */}
          <div className="w-full lg:w-1/2 flex flex-col bg-background-light dark:bg-background-dark">
            {/* <!-- Header for Mobile --> */}
            <header className="flex lg:hidden items-center justify-between px-6 py-4 border-b border-[#ebe7f3] dark:border-[#2d2540]">
              <div className="flex items-center gap-2 text-primary">
                <div className="size-6">
                  <svg
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                    ></path>
                    <path
                      clip-rule="evenodd"
                      d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="font-bold text-lg">LogiTrust</span>
              </div>
            </header>

            <div className="flex flex-1 flex-col justifycenter px-8 sm:px-12 md:px-24 lg:px-20 xl:px-32 py-12 overflow-y-auto ">
              <div className="w-full max-w-md mx-auto">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold tracking-tight text-[#120e1b] dark:text-[#f9f8fc]">
                    {currentPage === "register"
                      ? `Join LogiTrusr`
                      : "Welcome Back"}
                  </h2>
                  <p className="mt-2 text-[#654d99] dark:text-[#a394c8]">
                    {currentPage === "register"
                      ? "Create your account to start shipping and delivering safely."
                      : "Please enter your details to sign in to your account."}
                  </p>
                </div>
                {/* <!-- Toggle Switch --> */}
                <div className="mb-8">
                  <div className="flex h-11 items-center justify-center rounded-lg bg-[#ebe7f3] dark:bg-[#2d2540] p-1">
                    <label
                      className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-checked:bg-white dark:has-checked:bg-background-dark has-checked:shadow-sm has-checked:text-[#120e1b] dark:has-checked:text-[#f9f8fc] text-[#654d99] text-sm font-semibold transition-all"
                      onClick={() => {
                        navigate("/auth/login");
                      }}
                    >
                      <span>Login</span>
                      <input
                        checked={currentPage === "login"}
                        className="invisible w-0"
                        name="auth-mode"
                        type="radio"
                        value="login"
                      />
                    </label>
                    <label
                      className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-lg px-2 has-checked:bg-white dark:has-checked:bg-background-dark has-checked:shadow-sm has-checked:text-[#120e1b] dark:has-checked:text-[#f9f8fc] text-[#654d99] text-sm font-semibold transition-all"
                      onClick={() => {
                        navigate("/auth/register");
                      }}
                    >
                      <span>Sign-up</span>
                      <input
                        checked={currentPage === "register"}
                        className="invisible w-0"
                        name="auth-mode"
                        type="radio"
                        value="signup"
                      />
                    </label>
                  </div>
                </div>

                <Outlet />
              </div>
            </div>
            {/* <!-- Footer Links --> */}
            {/* <footer className="mt-auto px-8 sm:px-12 lg:px-20 py-8 border-t border-[#ebe7f3] dark:border-[#2d2540]">
              <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-[#654d99] dark:text-[#a394c8]">
                <a className="hover:text-primary" href="#">
                  Privacy Policy
                </a>
                <a className="hover:text-primary" href="#">
                  Terms of Service
                </a>
                <a className="hover:text-primary" href="#">
                  Help Center
                </a>
                <a className="hover:text-primary" href="#">
                  Contact Support
                </a>
              </div>
            </footer> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default AuthLayout;
