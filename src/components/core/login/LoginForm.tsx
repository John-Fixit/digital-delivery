const LoginForm = () => {
  return (
    <>
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
    </>
  );
};

export default LoginForm;
