import * as React from "react";

import { cn } from "../lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-md border-[3px] border-border bg-background px-3 py-2 text-sm font-medium shadow-brutal transition-all duration-100 placeholder:text-muted-foreground focus-visible:translate-x-[2px] focus-visible:translate-y-[2px] focus-visible:shadow-brutal-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
