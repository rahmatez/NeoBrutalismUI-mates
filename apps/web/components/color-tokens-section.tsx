"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Badge, Card, CardContent, CardHeader, CardTitle } from "neo-brutalism-ui-mates";

import { useColorTheme } from "@/components/theme-preset-provider";
import { getColorTheme } from "@/lib/color-themes";

type TokenMeta = {
  name: string;
  usage: string;
  swatch?: boolean;
};

const colorTokenMeta: TokenMeta[] = [
  { name: "--nb-bg", usage: "Page background", swatch: true },
  { name: "--nb-fg", usage: "Primary text", swatch: true },
  { name: "--nb-primary", usage: "Primary actions, CTAs", swatch: true },
  { name: "--nb-primary-fg", usage: "Text on primary", swatch: true },
  { name: "--nb-secondary", usage: "Secondary actions, footer", swatch: true },
  { name: "--nb-secondary-fg", usage: "Text on secondary", swatch: true },
  { name: "--nb-accent", usage: "Highlights, header", swatch: true },
  { name: "--nb-accent-fg", usage: "Text on accent", swatch: true },
  { name: "--nb-muted", usage: "Subtle background", swatch: true },
  { name: "--nb-muted-fg", usage: "Muted text", swatch: true },
  { name: "--nb-destructive", usage: "Destructive actions", swatch: true },
  { name: "--nb-destructive-fg", usage: "Text on destructive", swatch: true },
  { name: "--nb-card", usage: "Card background", swatch: true },
  { name: "--nb-card-fg", usage: "Text on card", swatch: true },
  { name: "--nb-popover", usage: "Popover & dropdown background", swatch: true },
  { name: "--nb-popover-fg", usage: "Text on popover", swatch: true },
  { name: "--nb-border-color", usage: "Border & divider color", swatch: true },
  { name: "--nb-ring", usage: "Focus ring", swatch: true },
];

const borderTokenMeta: TokenMeta[] = [
  { name: "--nb-border-width", usage: "Default border width" },
  { name: "--nb-border-color", usage: "Border color", swatch: true },
  { name: "--nb-border", usage: "Border shorthand" },
];

const shadowTokenMeta: TokenMeta[] = [
  { name: "--nb-shadow", usage: "Default shadow" },
  { name: "--nb-shadow-sm", usage: "Small / hover shadow" },
  { name: "--nb-shadow-lg", usage: "Large / dialog shadow" },
  { name: "--nb-shadow-hover", usage: "Hover state" },
  { name: "--nb-shadow-active", usage: "Active / pressed state" },
];

const colorTokenNames = colorTokenMeta.map((t) => t.name);
const borderTokenNames = borderTokenMeta.map((t) => t.name);
const shadowTokenNames = shadowTokenMeta.map((t) => t.name);

function useTokenValues(tokenNames: readonly string[]) {
  const { colorTheme } = useColorTheme();
  const { resolvedTheme } = useTheme();

  return React.useMemo(() => {
    if (typeof document === "undefined") return {};
    // colorTheme + resolvedTheme invalidate cached CSS variable reads
    void colorTheme;
    void resolvedTheme;
    const styles = getComputedStyle(document.documentElement);
    const next: Record<string, string> = {};
    for (const name of tokenNames) {
      next[name] = styles.getPropertyValue(name).trim();
    }
    return next;
  }, [colorTheme, resolvedTheme, tokenNames]);
}

function formatColor(value: string) {
  if (!value) return "—";
  if (value.startsWith("#") || value.startsWith("rgb")) return value.toUpperCase();
  return value;
}

function TokenCard({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="flex h-full flex-col overflow-hidden">
      <CardHeader className="border-b-[3px] border-border bg-muted/50 px-5 py-3">
        <CardTitle className="font-mono text-sm leading-tight">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-2 p-5">{children}</CardContent>
    </Card>
  );
}

function ColorTokenCard({
  name,
  value,
  usage,
}: {
  name: string;
  value: string;
  usage: string;
}) {
  const isColor =
    value.startsWith("#") || value.startsWith("rgb") || value.startsWith("hsl");

  return (
    <TokenCard name={name}>
      {isColor && (
        <div
          className="h-10 rounded-sm border-2 border-border"
          style={{ background: value }}
        />
      )}
      <p className="font-mono text-xs break-all">{formatColor(value)}</p>
      <p className="mt-auto text-sm text-muted-foreground">{usage}</p>
    </TokenCard>
  );
}

export function ColorTokensSection() {
  const { colorTheme } = useColorTheme();
  const { resolvedTheme } = useTheme();
  const theme = getColorTheme(colorTheme);
  const colorValues = useTokenValues(colorTokenNames);

  return (
    <section>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <h2 className="font-heading text-2xl font-bold">Colors</h2>
        <Badge variant="secondary">{theme.name}</Badge>
        <Badge variant="outline">
          {resolvedTheme === "dark" ? "Dark" : resolvedTheme === "light" ? "Light" : "—"}
        </Badge>
      </div>
      <p className="mb-6 text-sm text-muted-foreground">
        Live values from the active preset. Switch theme or dark mode to see them update.
      </p>
      <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {colorTokenMeta.map((token) => (
          <ColorTokenCard
            key={token.name}
            name={token.name}
            value={colorValues[token.name] ?? ""}
            usage={token.usage}
          />
        ))}
      </div>
    </section>
  );
}

export function BorderTokensSection() {
  const borderValues = useTokenValues(borderTokenNames);

  return (
    <section className="mt-12">
      <h2 className="font-heading mb-6 text-2xl font-bold">Borders</h2>
      <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {borderTokenMeta.map((token) => (
          <TokenCard key={token.name} name={token.name}>
            {token.swatch && borderValues[token.name] && (
              <div
                className="h-3 w-full rounded-sm border-2"
                style={{
                  backgroundColor: borderValues[token.name],
                  borderColor: borderValues[token.name],
                }}
              />
            )}
            <p className="font-mono text-xs break-all">
              {formatColor(borderValues[token.name] ?? "")}
            </p>
            <p className="mt-auto text-sm text-muted-foreground">{token.usage}</p>
          </TokenCard>
        ))}
      </div>
    </section>
  );
}

export function ShadowTokensSection() {
  const shadowValues = useTokenValues(shadowTokenNames);

  return (
    <section className="mt-12">
      <h2 className="font-heading mb-6 text-2xl font-bold">Shadows</h2>
      <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shadowTokenMeta.map((token) => (
          <TokenCard key={token.name} name={token.name}>
            <div
              className="h-12 rounded-sm border-2 border-border bg-primary"
              style={{ boxShadow: shadowValues[token.name] }}
            />
            <p className="font-mono text-xs break-all">{shadowValues[token.name] || "—"}</p>
            <p className="mt-auto text-sm text-muted-foreground">{token.usage}</p>
          </TokenCard>
        ))}
      </div>
    </section>
  );
}
