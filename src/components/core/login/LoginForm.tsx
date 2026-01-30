import { useState } from "react";
import Input from "../../shared/ui/input/Input";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Button from "../../shared/ui/button/Button";

const LoginForm = () => {
  const [isPwsVisible, setPwsIsVisible] = useState(false);

  const toggleVisibility = () => setPwsIsVisible(!isPwsVisible);

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
          <Input type="email" size="lg" placeholder="Enter your email" />
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
          <Input
            type={isPwsVisible ? "text" : "password"}
            size="lg"
            placeholder="******"
            endContent={
              <button
                aria-label="toggle password visibility"
                className="focus:outline-solid outline-transparent cursor-pointer"
                type="button"
                onClick={toggleVisibility}
              >
                {isPwsVisible ? (
                  <IoEyeOffOutline className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <IoEyeOutline className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
          />
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
        <Button size="lg" fullWidth>
          Sign in to Logicrow
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
