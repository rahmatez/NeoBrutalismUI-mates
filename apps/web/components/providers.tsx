"use client";

import { Toaster, TooltipProvider } from "neo-brutalism-ui-mates";

import { ThemeProvider } from "@/components/theme-provider";
import { ThemePresetProvider } from "@/components/theme-preset-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemePresetProvider>
        <TooltipProvider delayDuration={300}>
          {children}
          <Toaster />
        </TooltipProvider>
      </ThemePresetProvider>
    </ThemeProvider>
  );
}
