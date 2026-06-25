import {
  COLOR_THEME_STORAGE_KEY,
  colorThemes,
  type ColorThemeId,
} from "@/lib/color-themes";

const listeners = new Set<() => void>();
let currentTheme: ColorThemeId = "classic";
let initialized = false;

function readStoredTheme(): ColorThemeId {
  const stored = localStorage.getItem(COLOR_THEME_STORAGE_KEY) as ColorThemeId | null;
  return stored && colorThemes.some((t) => t.id === stored) ? stored : "classic";
}

function initColorTheme() {
  if (typeof window === "undefined" || initialized) return;
  initialized = true;
  currentTheme = readStoredTheme();
  document.documentElement.setAttribute("data-theme", currentTheme);
}

export function getColorThemeSnapshot(): ColorThemeId {
  if (typeof window !== "undefined") initColorTheme();
  return currentTheme;
}

export function getColorThemeServerSnapshot(): ColorThemeId {
  return "classic";
}

export function subscribeColorTheme(listener: () => void) {
  if (typeof window !== "undefined") initColorTheme();
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setColorTheme(theme: ColorThemeId) {
  currentTheme = theme;
  if (typeof window !== "undefined") {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(COLOR_THEME_STORAGE_KEY, theme);
  }
  listeners.forEach((listener) => listener());
}
