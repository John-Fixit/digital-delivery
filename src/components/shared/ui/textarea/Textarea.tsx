import { Textarea as HeroTextarea, type TextAreaProps } from "@heroui/react";
import { forwardRef } from "react";

const Textarea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      variant = "bordered",
      size = "sm",
      radius = "md",
      color = "primary",
      classNames,
      minRows = 3,
      ...props
    },
    ref,
  ) => {
    return (
      <HeroTextarea
        ref={ref}
        variant={variant}
        size={size}
        radius={radius}
        color={color}
        minRows={minRows}
        classNames={{
          // Custom styling matching Input component
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

Textarea.displayName = "Textarea";

export default Textarea;
