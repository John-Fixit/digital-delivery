import { Select as HeroSelect, type SelectProps } from "@heroui/react";
import { forwardRef } from "react";

const Select = forwardRef<HTMLSelectElement, SelectProps>(
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
      <HeroSelect
        ref={ref}
        variant={variant}
        size={size}
        radius={radius}
        color={color}
        classNames={{
          trigger: `shadow-sm border-1 group-data-[focus=true]:border-0 group-data-[focus=true]:ring-1 group-data-[focus=true]:ring-primary transition-all duration-300 ${
            classNames?.trigger || ""
          }`,
          value: "text-foreground",
          ...classNames, // Allow override
        }}
        {...props}
      />
    );
  },
);

Select.displayName = "Select";

export default Select;
