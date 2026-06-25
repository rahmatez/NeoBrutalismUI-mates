"use client";

import * as React from "react";

import {
  getColorThemeServerSnapshot,
  getColorThemeSnapshot,
  setColorTheme as setColorThemeStore,
  subscribeColorTheme,
} from "@/lib/color-theme-store";
import type { ColorThemeId } from "@/lib/color-themes";

type ColorThemeContextValue = {
  colorTheme: ColorThemeId;
  setColorTheme: (theme: ColorThemeId) => void;
};

const ColorThemeContext = React.createContext<ColorThemeContextValue | null>(null);

export function useColorTheme() {
  const context = React.useContext(ColorThemeContext);
  if (!context) {
    throw new Error("useColorTheme must be used within ThemePresetProvider");
  }
  return context;
}

export function ThemePresetProvider({ children }: { children: React.ReactNode }) {
  const colorTheme = React.useSyncExternalStore(
    subscribeColorTheme,
    getColorThemeSnapshot,
    getColorThemeServerSnapshot,
  );

  const setColorTheme = React.useCallback((theme: ColorThemeId) => {
    setColorThemeStore(theme);
  }, []);

  return (
    <ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ColorThemeContext.Provider>
  );
}
