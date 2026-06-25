"use client";

import * as React from "react";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ theme = "system", ...props }: ToasterProps) => (
  <Sonner
    theme={theme}
    className="toaster group"
    toastOptions={{
      classNames: {
        toast:
          "group toast group-[.toaster]:border-[3px] group-[.toaster]:border-border group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:shadow-brutal group-[.toaster]:font-bold",
        description: "group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground group-[.toast]:border-2 group-[.toast]:border-border",
        cancelButton:
          "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground group-[.toast]:border-2 group-[.toast]:border-border",
      },
    }}
    {...props}
  />
);

export { Toaster };
