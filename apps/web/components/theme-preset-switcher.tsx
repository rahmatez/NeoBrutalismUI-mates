"use client";

import { Palette } from "lucide-react";

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "neo-brutalism-ui-mates";

import { useColorTheme } from "@/components/theme-preset-provider";
import { colorThemes, type ColorThemeId } from "@/lib/color-themes";

export function ThemePresetSwitcher() {
  const { colorTheme, setColorTheme } = useColorTheme();
  const active = colorThemes.find((t) => t.id === colorTheme);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="size-9" aria-label="Color theme">
          <Palette className="size-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-3" align="end">
        <p className="font-heading mb-3 text-sm font-bold">Color theme</p>
        <div className="grid grid-cols-2 gap-2">
          {colorThemes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              onClick={() => setColorTheme(theme.id as ColorThemeId)}
              className={`rounded-md border-[3px] p-2 text-left transition-all hover:translate-x-px hover:translate-y-px ${
                colorTheme === theme.id
                  ? "border-primary bg-primary/10 shadow-brutal-sm"
                  : "border-border bg-background shadow-brutal-sm hover:shadow-brutal-xs"
              }`}
            >
              <div className="mb-1.5 flex gap-1">
                {theme.swatches.map((color) => (
                  <span
                    key={color}
                    className="size-4 rounded-sm border-2 border-border"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <span className="font-heading text-xs font-bold">{theme.name}</span>
            </button>
          ))}
        </div>
        {active && (
          <p className="mt-3 text-xs text-muted-foreground">{active.description}</p>
        )}
      </PopoverContent>
    </Popover>
  );
}
