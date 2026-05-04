import { Checkbox, SelectItem } from "@heroui/react";
import Input from "../../shared/ui/input/Input";
import Select from "../../shared/ui/select/Select";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Button from "../../shared/ui/button/Button";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../../../api-service/auth/signup";
import { getApiErrorMessage } from "../../../api-service/utils/error";

type RegisterFormValues = {
  full_name: string;
  email: string;
  phone: string;
  role: "customer" | "rider" | "driver";
  password: string;
  terms: boolean;
};

const RegisterForm = () => {
  const [isPwsVisible, setPwsIsVisible] = useState(false);
  const navigate = useNavigate();
  const signup = useSignup();
  const [formError, setFormError] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      role: "customer",
      password: "",
      terms: false,
    },
  });

  const toggleVisibility = () => setPwsIsVisible(!isPwsVisible);

  const onSubmit = async (values: RegisterFormValues) => {
    setFormError("");
    try {
      await signup.mutateAsync({
        full_name: values.full_name,
        email: values.email,
        phone: values.phone,
        role: values.role,
        password: values.password,
      });
      navigate("/auth/login?registered=1");
    } catch (err) {
      setFormError(getApiErrorMessage(err));
    }
  };

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {formError ? (
          <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 dark:bg-red-950/40 dark:text-red-300">
            {formError}
          </p>
        ) : null}
        <div>
          <label
            className="mb-1.5 block text-sm font-medium text-[#120e1b] dark:text-[#f9f8fc]"
            htmlFor="fullname"
          >
            Full Name
          </label>
          <Input
            id="fullname"
            type="text"
            size="lg"
            placeholder="Enter your Name"
            {...register("full_name", { required: "Full name is required" })}
            isInvalid={!!errors.full_name}
            errorMessage={errors.full_name?.message}
          />
        </div>
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
          <label
            className="mb-1.5 block text-sm font-medium text-[#120e1b] dark:text-[#f9f8fc]"
            htmlFor="phone"
          >
            Phone
          </label>
          <Input
            id="phone"
            type="tel"
            size="lg"
            placeholder="e.g. 08012345678"
            {...register("phone", { required: "Phone is required" })}
            isInvalid={!!errors.phone}
            errorMessage={errors.phone?.message}
          />
        </div>
        <div>
          <label
            className="mb-1.5 block text-sm font-medium text-[#120e1b] dark:text-[#f9f8fc]"
            htmlFor="role"
          >
            Select Role
          </label>
          <Controller
            name="role"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                id="role"
                placeholder="Select options"
                size="lg"
                selectedKeys={field.value ? new Set([field.value]) : new Set()}
                onSelectionChange={(keys) => {
                  if (keys === "all") return;
                  const next = Array.from(keys)[0] as RegisterFormValues["role"];
                  field.onChange(next);
                }}
                isInvalid={!!errors.role}
                errorMessage={errors.role ? "Choose a role" : undefined}
              >
                <SelectItem key="customer" textValue="customer">
                  Package Owner
                </SelectItem>
                <SelectItem key="rider" textValue="rider">
                  Rider
                </SelectItem>
                <SelectItem key="driver" textValue="driver">
                  Interstate Driver
                </SelectItem>
              </Select>
            )}
          />
        </div>
        <div>
          <label
            className="mb-1.5 block text-sm font-medium text-[#120e1b] dark:text-[#f9f8fc]"
            htmlFor="password"
          >
            Password
          </label>
          <Input
            id="password"
            type={isPwsVisible ? "text" : "password"}
            size="lg"
            placeholder="******"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 8, message: "Use at least 8 characters" },
            })}
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
          <div className="my-3 flex h-1 gap-1">
            <div className="h-full w-1/4 rounded-full bg-green-500"></div>
            <div className="h-full w-1/4 rounded-full bg-green-500"></div>
            <div className="h-full w-1/4 rounded-full bg-green-500"></div>
            <div className="h-full w-1/4 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <p className="mt-1.5 text-[11px] text-[#654d99] dark:text-[#a394c8]">
            Password strength:{" "}
            <span className="font-semibold uppercase text-green-600">Good</span>
          </p>
        </div>
        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <Controller
              name="terms"
              control={control}
              rules={{
                validate: (value) => value === true || "Please accept the terms",
              }}
              render={({ field }) => (
                <Checkbox isSelected={field.value} onValueChange={field.onChange}>
                  <span className="sr-only">Accept terms</span>
                </Checkbox>
              )}
            />
          </div>
          <label
            className="ml-3 block text-sm text-[#654d99] dark:text-[#a394c8]"
            htmlFor="terms"
          >
            I agree to the{" "}
            <a className="font-semibold text-primary hover:underline" href="#">
              Terms of Service
            </a>{" "}
            and{" "}
            <a className="font-semibold text-primary hover:underline" href="#">
              Privacy Policy
            </a>
            .
          </label>
        </div>
        {errors.terms ? (
          <p className="text-sm text-red-600 dark:text-red-400">{errors.terms.message}</p>
        ) : null}

        <Button type="submit" size="lg" fullWidth isLoading={signup.isPending}>
          Create account
        </Button>
      </form>
    </>
  );
};

export default RegisterForm;
