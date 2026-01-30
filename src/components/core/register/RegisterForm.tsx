import { Checkbox, SelectItem } from "@heroui/react";
import Input from "../../shared/ui/input/Input";
import Select from "../../shared/ui/select/Select";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Button from "../../shared/ui/button/Button";

const RegisterForm = () => {
  const [isPwsVisible, setPwsIsVisible] = useState(false);

  const toggleVisibility = () => setPwsIsVisible(!isPwsVisible);
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
          <Input type="text" size="lg" placeholder="Enter your Name" />
        </div>
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
          <label
            className="block text-sm font-medium text-[#120e1b] dark:text-[#f9f8fc] mb-1.5"
            htmlFor="role"
          >
            Select Role
          </label>
          <Select placeholder="Select options" size="lg">
            {[
              {
                value: "package-owner",
                label: "Package Owner",
              },
              {
                value: "rider",
                label: "Rider",
              },
              {
                value: "riinterstate-driverder",
                label: "Interstate Driver",
              },
            ].map((itm) => (
              <SelectItem key={itm?.value} textValue={itm?.value}>
                {itm?.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div>
          <label
            className="block text-sm font-medium text-[#120e1b] dark:text-[#f9f8fc] mb-1.5"
            htmlFor="password"
          >
            Password
          </label>
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
          <div className="flex gap-1 h-1 my-3">
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
            <Checkbox />
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

        <Button size="lg" fullWidth>
          Create account
        </Button>
      </form>
    </>
  );
};

export default RegisterForm;
