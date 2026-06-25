"use client";

import * as React from "react";
import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from "neo-brutalism-ui-mates";

import {
  BorderTokensSection,
  ColorTokensSection,
  ShadowTokensSection,
} from "@/components/color-tokens-section";
import { CodeBlock } from "@/components/code-block";
import { ThemePresetsGallery } from "@/components/theme-presets-gallery";

const radiusTokens = [
  { name: "--nb-radius-sm", value: "4px", usage: "Small radius" },
  { name: "--nb-radius", value: "6px", usage: "Default radius" },
  { name: "--nb-radius-lg", value: "8px", usage: "Large radius" },
];

const typographyTokens = [
  { name: "--nb-font-heading", value: "Space Grotesk, sans-serif", usage: "Heading font" },
  { name: "--nb-font-body", value: "DM Sans, sans-serif", usage: "Body font" },
];

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

export function ThemingContent() {
  return (
    <div>
      <Badge className="mb-4">Design System</Badge>
      <h1 className="font-heading text-4xl font-bold">Theming</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        All components use CSS custom properties from{" "}
        <code className="rounded border border-border bg-muted px-1.5 py-0.5 text-sm">
          tokens.css
        </code>
        . Pick a preset below or override tokens manually. Use the palette icon
        in the header to switch themes, and the sun/moon button for dark mode.
      </p>

      <section className="mt-12 space-y-6">
        <div>
          <h2 className="font-heading text-2xl font-bold">Color theme presets</h2>
          <p className="mt-2 text-muted-foreground">
            10 bold palettes built for neo-brutalism — each with light and dark
            variants. Click a card to apply instantly.
          </p>
        </div>
        <ThemePresetsGallery />
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-2xl font-bold">Apply a preset</h2>
        <CodeBlock
          code={`<!-- Add data-theme to your root element -->
<html data-theme="ocean">
<html data-theme="candy" class="dark">

/* Available presets */
classic | sunset | ocean | forest | candy
retro   | grape  | neon  | berry  | citrus`}
        />
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-2xl font-bold">Override tokens</h2>
        <CodeBlock
          code={`:root {
  --nb-primary: #7C3AED;
  --nb-secondary: #22D3EE;
  --nb-accent: #FDE047;
  --nb-shadow: 6px 6px 0 0 #000;
}`}
        />
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-2xl font-bold">shadcn compatibility</h2>
        <CodeBlock
          code={`--background: var(--nb-bg);
--primary: var(--nb-primary);
--secondary: var(--nb-secondary);
--border: var(--nb-border-color);
--radius: var(--nb-radius);`}
        />
      </section>

      <div className="mt-12">
        <ColorTokensSection />
        <BorderTokensSection />
        <ShadowTokensSection />
      </div>

      <section className="mt-12">
        <h2 className="font-heading mb-6 text-2xl font-bold">Border Radius</h2>
        <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {radiusTokens.map((t) => (
            <TokenCard key={t.name} name={t.name}>
              <div
                className="h-12 border-[3px] border-border bg-accent"
                style={{ borderRadius: t.value }}
              />
              <p className="font-mono text-xs">{t.value}</p>
              <p className="mt-auto text-sm text-muted-foreground">{t.usage}</p>
            </TokenCard>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="font-heading mb-6 text-2xl font-bold">Typography</h2>
        <div className="grid items-stretch gap-4 sm:grid-cols-2">
          {typographyTokens.map((t) => (
            <TokenCard key={t.name} name={t.name}>
              <p className="text-2xl font-bold" style={{ fontFamily: t.value }}>
                Aa Bb Cc 123
              </p>
              <p className="font-mono text-xs">{t.value}</p>
              <p className="mt-auto text-sm text-muted-foreground">{t.usage}</p>
            </TokenCard>
          ))}
        </div>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-2xl font-bold">Dark mode</h2>
        <CodeBlock
          code={`<html className="dark">

/* .dark overrides */
--nb-bg: #1A1A2E;
--nb-border-color: #FFFFFF;
--nb-shadow: 4px 4px 0 0 #FFFFFF;`}
        />
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Badge>Preview</Badge>
        </div>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-2xl font-bold">Custom theme example</h2>
        <CodeBlock
          code={`:root {
  --nb-primary: #8B5CF6;
  --nb-secondary: #06B6D4;
  --nb-accent: #FBBF24;
  --nb-shadow: 5px 5px 0 0 #1E1B4B;
  --nb-border-color: #1E1B4B;
}`}
        />
      </section>
    </div>
  );
}
