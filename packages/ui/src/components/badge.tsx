import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border-2 border-border px-2.5 py-0.5 text-xs font-bold transition-colors",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-brutal-sm",
        secondary:
          "bg-secondary text-secondary-foreground shadow-brutal-sm",
        accent: "bg-accent text-accent-foreground shadow-brutal-sm",
        destructive:
          "bg-destructive text-destructive-foreground shadow-brutal-sm",
        outline: "bg-background text-foreground shadow-brutal-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
