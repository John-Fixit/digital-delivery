import { useState } from "react";
import Input from "../../shared/ui/input/Input";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Button from "../../shared/ui/button/Button";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLogin } from "../../../api-service/auth/login";
import useCurrentUser from "../../../hooks/use-current-user";
import { resolvePostLoginRedirect } from "../../../lib/post-login-redirect";
import catchErrFunc from "../../../lib/catch-error";

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [isPwsVisible, setPwsIsVisible] = useState(false);
  const [formError, setFormError] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const login = useLogin();

  const registered = searchParams.get("registered") === "1";

  const { setCurrentUser } = useCurrentUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    defaultValues: { email: "", password: "" },
  });

  const toggleVisibility = () => setPwsIsVisible(!isPwsVisible);

  const onSubmit = async (values: LoginFormValues) => {
    setFormError("");
    try {
      const res = await login.mutateAsync(values);
      setCurrentUser(res);
      const next = resolvePostLoginRedirect(searchParams.get("from"));
      navigate(next, { replace: true });
    } catch (err) {
      console.log(err);
      catchErrFunc(err);
    }
  };

  return (
    <>
      <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
        {registered ? (
          <p className="rounded-md bg-green-50 px-3 py-2 text-sm text-green-700 dark:bg-green-950/40 dark:text-green-300">
            Account created. Check your email to verify, then sign in.
          </p>
        ) : null}
        {formError ? (
          <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-300">
            {formError}
          </p>
        ) : null}
        <div>
          <label
            className="mb-1.5 block text-sm font-medium text-[#120e1b] dark:text-[#f9f8fc]"
            htmlFor="email"
          >
            Email address
          </label>
          <Input
            id="email"
            type="email"
            size="lg"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
            isInvalid={!!errors.email}
            errorMessage={errors.email?.message}
          />
        </div>
        <div>
          <div className="mb-1.5 flex items-center justify-between">
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
            id="password"
            type={isPwsVisible ? "text" : "password"}
            size="lg"
            placeholder="******"
            {...register("password", { required: "Password is required" })}
            isInvalid={!!errors.password}
            errorMessage={errors.password?.message}
            endContent={
              <button
                aria-label="toggle password visibility"
                className="cursor-pointer outline-transparent focus:outline-solid"
                type="button"
                onClick={toggleVisibility}
              >
                {isPwsVisible ? (
                  <IoEyeOffOutline className="pointer-events-none text-2xl text-default-400" />
                ) : (
                  <IoEyeOutline className="pointer-events-none text-2xl text-default-400" />
                )}
              </button>
            }
          />
        </div>
        <div className="flex items-center">
          <input
            className="h-4 w-4 rounded border-[#ebe7f3] text-primary focus:ring-primary dark:border-[#2d2540]"
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
        <Button type="submit" size="lg" fullWidth isLoading={login.isPending}>
          Sign in to Logicrow
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
