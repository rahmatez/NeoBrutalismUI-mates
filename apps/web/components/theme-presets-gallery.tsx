"use client";

import { Badge, Button } from "neo-brutalism-ui-mates";

import { useColorTheme } from "@/components/theme-preset-provider";
import { colorThemes, type ColorThemeId } from "@/lib/color-themes";

export function ThemePresetsGallery() {
  const { colorTheme, setColorTheme } = useColorTheme();

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {colorThemes.map((theme) => (
          <button
            key={theme.id}
            type="button"
            onClick={() => setColorTheme(theme.id as ColorThemeId)}
            className={`rounded-md border-[3px] p-4 text-left transition-all hover:translate-x-[2px] hover:translate-y-[2px] ${
              colorTheme === theme.id
                ? "border-primary bg-primary/10 shadow-brutal"
                : "border-border bg-card shadow-brutal-sm hover:shadow-brutal-xs"
            }`}
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="font-heading font-bold">{theme.name}</span>
              {colorTheme === theme.id && <Badge>Active</Badge>}
            </div>
            <div className="mb-3 flex gap-2">
              {theme.swatches.map((color) => (
                <span
                  key={color}
                  className="h-8 flex-1 rounded-sm border-2 border-border"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">{theme.description}</p>
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 rounded-md border-[3px] border-dashed border-border bg-muted/30 p-6">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="accent">Accent</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Destructive</Button>
        <Badge>Preview</Badge>
      </div>
    </div>
  );
}
