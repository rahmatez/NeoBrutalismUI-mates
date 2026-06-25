export type ColorThemeId =
  | "classic"
  | "sunset"
  | "ocean"
  | "forest"
  | "candy"
  | "retro"
  | "grape"
  | "neon"
  | "berry"
  | "citrus";

export type ColorTheme = {
  id: ColorThemeId;
  name: string;
  description: string;
  swatches: [string, string, string];
};

export const colorThemes: ColorTheme[] = [
  {
    id: "classic",
    name: "Classic",
    description: "Coral, teal & yellow — the default neo-brutalism palette.",
    swatches: ["#FF6B6B", "#4ECDC4", "#FFE66D"],
  },
  {
    id: "sunset",
    name: "Sunset",
    description: "Burnt orange, violet & hot pink warmth.",
    swatches: ["#FF6B35", "#9B5DE5", "#F15BB5"],
  },
  {
    id: "ocean",
    name: "Ocean",
    description: "Deep navy, cerulean & sky blue depths.",
    swatches: ["#0077B6", "#00B4D8", "#90E0EF"],
  },
  {
    id: "forest",
    name: "Forest",
    description: "Emerald green, sage & soft cream tones.",
    swatches: ["#2D6A4F", "#95D5B2", "#D8F3DC"],
  },
  {
    id: "candy",
    name: "Candy",
    description: "Hot pink, electric purple & golden yellow.",
    swatches: ["#FF006E", "#8338EC", "#FFBE0B"],
  },
  {
    id: "retro",
    name: "Retro",
    description: "Terracotta, teal & mustard vintage vibes.",
    swatches: ["#E76F51", "#2A9D8F", "#E9C46A"],
  },
  {
    id: "grape",
    name: "Grape",
    description: "Royal violet, lavender & periwinkle hues.",
    swatches: ["#7B2CBF", "#C77DFF", "#E0AAFF"],
  },
  {
    id: "neon",
    name: "Neon",
    description: "Cyberpunk magenta, cyan & yellow on dark.",
    swatches: ["#FF00FF", "#00FFFF", "#FFFF00"],
  },
  {
    id: "berry",
    name: "Berry",
    description: "Crimson, plum & blush rose tones.",
    swatches: ["#9D0208", "#9D4EDD", "#FF85A1"],
  },
  {
    id: "citrus",
    name: "Citrus",
    description: "Tangerine, lime green & lemon zest.",
    swatches: ["#F77F00", "#80B918", "#FFEA00"],
  },
];

export const COLOR_THEME_STORAGE_KEY = "nb-color-theme";

export function getColorTheme(id: string): ColorTheme {
  return colorThemes.find((t) => t.id === id) ?? colorThemes[0];
}
