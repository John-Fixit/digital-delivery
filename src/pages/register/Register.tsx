const Register = () => {
  return (
    <>
      <form className="space-y-4">
        <div>
          <label
            className="block text-sm font-medium text-[#120e1b] dark:text-[#f9f8fc] mb-1.5"
            htmlFor="fullname"
          >
            Full Name
          </label>
          <input
            className="block w-full rounded-lg border-[#ebe7f3] dark:border-[#2d2540] bg-white dark:bg-transparent py-2.5 text-[#120e1b] dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary sm:text-sm"
            id="fullname"
            name="fullname"
            placeholder="John Doe"
            required={true}
            type="text"
          />
        </div>
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
            required={true}
            type="email"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-[#120e1b] dark:text-[#f9f8fc] mb-1.5"
            htmlFor="role"
          >
            Select Role
          </label>
          <select
            className="block w-full rounded-lg border-[#ebe7f3] dark:border-[#2d2540] bg-white dark:bg-transparent py-2.5 text-[#120e1b] dark:text-white focus:border-primary focus:ring-primary sm:text-sm"
            id="role"
            name="role"
          >
            <option value="package-owner">Package Owner</option>
            <option value="rider">Rider</option>
            <option value="interstate-driver">Interstate Driver</option>
          </select>
        </div>
        <div>
          <label
            className="block text-sm font-medium text-[#120e1b] dark:text-[#f9f8fc] mb-1.5"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative mb-2">
            <input
              className="block w-full rounded-lg border-[#ebe7f3] dark:border-[#2d2540] bg-white dark:bg-transparent py-2.5 text-[#120e1b] dark:text-white placeholder:text-gray-400 focus:border-primary focus:ring-primary sm:text-sm"
              id="password"
              name="password"
              placeholder="••••••••"
              required={true}
              type="password"
            />
            <button
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#654d99] hover:text-primary"
              type="button"
            >
              <span className="material-symbols-outlined">visibility</span>
            </button>
          </div>
          <div className="flex gap-1 h-1">
            <div className="h-full w-1/4 rounded-full bg-green-500"></div>
            <div className="h-full w-1/4 rounded-full bg-green-500"></div>
            <div className="h-full w-1/4 rounded-full bg-green-500"></div>
            <div className="h-full w-1/4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <p className="mt-1.5 text-[11px] text-[#654d99] dark:text-[#a394c8]">
            Password strength:{" "}
            <span className="text-green-600 font-semibold uppercase">Good</span>
          </p>
        </div>
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              className="h-4 w-4 rounded border-[#ebe7f3] dark:border-[#2d2540] text-primary focus:ring-primary"
              id="terms"
              name="terms"
              required={true}
              type="checkbox"
            />
          </div>
          <label
            className="ml-3 block text-sm text-[#654d99] dark:text-[#a394c8]"
            htmlFor="terms"
          >
            I agree to the{" "}
            <a className="text-primary font-semibold hover:underline" href="#">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="text-primary font-semibold hover:underline" href="#">
              Privacy Policy
            </a>
            .
          </label>
        </div>
        <button
          className="flex w-full justify-center rounded-lg bg-primary py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
          type="submit"
        >
          Create Account
        </button>
      </form>
      <div className="relative my-8">
        <div aria-hidden="true" className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#ebe7f3] dark:border-[#2d2540]"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background-light dark:bg-background-dark px-2 text-[#654d99] dark:text-[#a394c8]">
            Or sign up with
          </span>
        </div>
      </div>
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
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f0ecf9] dark:bg-primary/10 border border-primary/10">
          <span className="material-symbols-outlined text-[16px] text-primary">
            shield
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
            AES-256 Encrypted &amp; Secure Escrow
          </span>
        </div>
        <p className="mt-4 text-xs text-[#654d99] dark:text-[#a394c8]">
          Join 20,000+ trusted logistics partners worldwide.
        </p>
      </div>
    </>
  );
};

export default Register;
