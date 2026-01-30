import { Input as HeroInput, type InputProps } from "@heroui/react";
import { forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "bordered",
      size = "sm",
      radius = "md",
      color = "primary",
      classNames,
      ...props
    },
    ref,
  ) => {
    return (
      <HeroInput
        ref={ref}
        variant={variant}
        size={size}
        radius={radius}
        color={color}
        classNames={{
          // Custom styling
          input: "bg-transparent",
          inputWrapper: `shadow-sm border-1 focus group-data-[focus=true]:border-0 group-data-[focus=true]:ring-1 group-data-[focus=true]:ring-primary transition-all duration-300 ${
            classNames?.inputWrapper || ""
          }`,
          ...classNames, // Allow override
        }}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export default Input;
