import * as React from "react";

import { cn } from "../lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-md border-[3px] border-border bg-background px-3 py-2 text-sm font-medium shadow-brutal transition-all duration-100 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:translate-x-[2px] focus-visible:translate-y-[2px] focus-visible:shadow-brutal-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
