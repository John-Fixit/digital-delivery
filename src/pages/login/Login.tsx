const Login = () => {
  return (
    <>
      <>
        {/* <!-- Social Auth --> */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button className="flex items-center justify-center gap-2 rounded-lg border border-[#ebe7f3] dark:border-[#2d2540] bg-white dark:bg-transparent py-2.5 text-sm font-semibold text-[#120e1b] dark:text-[#f9f8fc] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
            <img
              alt="Google"
              className="size-4"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfQPajakxBZWAdHbS3HrN5hJMdjLbl-4QjFM472smbhFjEPPrY-3-XtYdCYqfAvO0hl0ADSPCYCyvBDXYUAv-XQEXdFVc5nCorITZfOq_dhyY_7GfPkTDgMHf-NNc9m_f7PqteTM1Bu__lRYRLwr3AGm4zfHq1YV1gGjIk8izDvLnPl68ScrGNYV_cysvlcKpXBE6By12Il2bF1BLorOyaWoGkOaqMD1Ll0f0skNRoyoJWlzBnL8v5IZ1bHy5sjnb-p_xv2ps5cUI"
            />
            Google
          </button>
          <button className="flex items-center justify-center gap-2 rounded-lg border border-[#ebe7f3] dark:border-[#2d2540] bg-white dark:bg-transparent py-2.5 text-sm font-semibold text-[#120e1b] dark:text-[#f9f8fc] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
            <span className="material-symbols-outlined text-base">ios</span>
            Apple
          </button>
        </div>
        <div className="relative mb-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center"
          >
            <div className="w-full border-t border-[#ebe7f3] dark:border-[#2d2540]"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background-light dark:bg-background-dark px-2 text-[#654d99] dark:text-[#a394c8]">
              Or continue with email
            </span>
          </div>
        </div>
        {/* <!-- Form --> */}
        <form className="space-y-5">
          <div>
            <label
              className="block text-sm font-medium text-[#120e1b] dark:text-[#f9f8fc] mb-1.5"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              className="block w-full rounded-lg border-[#ebe7f3] dark:border-[#2d2540] bg-white dark:bg-transparent py-2.5 text-[#120e1b] dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary sm:text-sm"
              id="email"
              name="email"
              placeholder="name@company.com"
              type="email"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                className="block text-sm font-medium text-[#120e1b] dark:text-[#f9f8fc]"
                htmlFor="password"
              >
                Password
              </label>
              <a
                className="text-xs font-semibold text-primary hover:text-primary/80"
                href="#"
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <input
                className="block w-full rounded-lg border-[#ebe7f3] dark:border-[#2d2540] bg-white dark:bg-transparent py-2.5 text-[#120e1b] dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary sm:text-sm"
                id="password"
                name="password"
                placeholder="••••••••"
                type="password"
              />
              <button
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#654d99] hover:text-primary"
                type="button"
              >
                <span className="material-symbols-outlined">visibility</span>
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <input
              className="h-4 w-4 rounded border-[#ebe7f3] dark:border-[#2d2540] text-primary focus:ring-primary"
              id="remember-me"
              name="remember-me"
              type="checkbox"
            />
            <label
              className="ml-2 block text-sm text-[#654d99] dark:text-[#a394c8]"
              htmlFor="remember-me"
            >
              Remember me for 30 days
            </label>
          </div>
          <button
            className="flex w-full justify-center rounded-lg bg-primary py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
            type="submit"
          >
            Sign in to LogiTrust
          </button>
        </form>
        {/* <!-- Trust Footer --> */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f0ecf9] dark:bg-primary/10 border border-primary/10">
            <span className="material-symbols-outlined text-[16px] text-primary">
              shield
            </span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
              AES-256 Encrypted &amp; Secure Escrow
            </span>
          </div>
          <p className="mt-6 text-xs text-[#654d99] dark:text-[#a394c8] max-w-xs mx-auto">
            Your transactions are protected by our Escrow-Shield technology. By
            continuing, you agree to our Terms of Service.
          </p>
        </div>
      </>
    </>
  );
};

export default Login;
