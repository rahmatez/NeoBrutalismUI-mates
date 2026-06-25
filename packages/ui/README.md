# NeoBrutalismUI mates

[![npm version](https://img.shields.io/npm/v/neo-brutalism-ui-mates.svg)](https://www.npmjs.com/package/neo-brutalism-ui-mates)
[![license](https://img.shields.io/npm/l/neo-brutalism-ui-mates.svg)](https://www.npmjs.com/package/neo-brutalism-ui-mates)

A React component library with a **neo-brutalism** aesthetic — thick borders, hard shadows without blur, high-contrast colors, and press effects on interaction. Built with Tailwind CSS v4, shadcn/ui patterns, and Radix UI primitives.

**49+ components** · **Dark mode** · **TypeScript** · **Tree-shakeable ESM**

## Features

- Hard offset shadows and thick borders (theme-aware via `--border` tokens)
- Press effects on buttons, inputs, and interactive components
- Theming via CSS variables with built-in dark mode
- Radix UI–powered accessibility
- shadcn-compatible composable API

## Installation

```bash
pnpm add neo-brutalism-ui-mates
# or
npm install neo-brutalism-ui-mates
# or
yarn add neo-brutalism-ui-mates
```

### Prerequisites

- React 18 or 19
- Tailwind CSS v4
- TypeScript (recommended)

## Quick Start

### 1. Import the stylesheet

```tsx
// Next.js — app/layout.tsx
import "neo-brutalism-ui-mates/styles.css";
```

### 2. Use components

```tsx
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "neo-brutalism-ui-mates";

export function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello NeoBrutalismUI mates</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get started</Button>
      </CardContent>
    </Card>
  );
}
```

### 3. Toast notifications (Sonner)

```tsx
import { Toaster } from "neo-brutalism-ui-mates";
import { toast } from "sonner";

// In your root layout
<Toaster />

// Anywhere in your app
toast("Event created");
```

## Next.js Setup

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["neo-brutalism-ui-mates"],
};

export default nextConfig;
```

Load the recommended fonts:

```tsx
import { DM_Sans, Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--nb-font-heading",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--nb-font-body",
  subsets: ["latin"],
});
```

## Tailwind CSS v4

For npm consumers:

```css
@import "neo-brutalism-ui-mates/styles.css";
```

For monorepo development:

```css
@import "neo-brutalism-ui-mates/src/styles/globals.css";
@source "../../packages/ui/src";
```

## Theming

### Color theme presets

Ten bold palettes ship with the library. Set `data-theme` on your root element:

```html
<html data-theme="ocean">
<html data-theme="candy" class="dark">
```

Available presets: `classic` · `sunset` · `ocean` · `forest` · `candy` · `retro` · `grape` · `neon` · `berry` · `citrus`

Presets are included in `styles.css`. To load them separately:

```css
@import "neo-brutalism-ui-mates/themes.css";
```

### Custom overrides

Override tokens in your global stylesheet:

```css
:root {
  --nb-primary: #7c3aed;
  --nb-secondary: #22d3ee;
  --nb-accent: #fde047;
  --nb-shadow: 6px 6px 0 0 #000000;
}
```

### Dark mode

```html
<html class="dark">
```

Dark mode automatically switches borders, shadows, and background colors per active preset.

| Token | Light | Dark |
|-------|-------|------|
| `--nb-bg` | `#fffdf5` | `#1a1a2e` |
| `--nb-border-color` | `#000000` | `#ffffff` |
| `--nb-shadow` | `4px 4px 0 #000` | `4px 4px 0 #fff` |
| `--nb-card` | `#ffffff` | `#16213e` |

## Components

### Core

`Alert`, `Avatar`, `Badge`, `Button`, `Card`

```tsx
<Button variant="secondary" size="lg">Large</Button>
<Button variant="outline" asChild>
  <a href="/docs">Link</a>
</Button>
```

**Button variants:** `default`, `secondary`, `accent`, `outline`, `destructive`, `ghost`, `link`

### Form

`Calendar`, `Checkbox`, `Combobox`, `DatePicker`, `Form`, `Input`, `InputOTP`, `Label`, `RadioGroup`, `Select`, `Slider`, `Switch`, `Textarea`, `Toggle`

```tsx
import { Form, FormField, FormItem, FormLabel, FormControl, Input } from "neo-brutalism-ui-mates";
import { useForm } from "react-hook-form";

const form = useForm();

<Form {...form}>
  <FormField name="email" render={({ field }) => (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input {...field} />
      </FormControl>
    </FormItem>
  )} />
</Form>
```

### Overlay

`Accordion`, `AlertDialog`, `Collapsible`, `Command`, `ContextMenu`, `Dialog`, `Drawer`, `DropdownMenu`, `HoverCard`, `Menubar`, `NavigationMenu`, `Popover`, `Sheet`, `Sonner`, `Tabs`, `Tooltip`

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "neo-brutalism-ui-mates";

<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog title</DialogTitle>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

### Layout & Data

`Breadcrumb`, `Carousel`, `Chart`, `DataTable`, `ImageCard`, `Marquee`, `Pagination`, `Progress`, `Resizable`, `ScrollArea`, `Separator`, `Sidebar`, `Skeleton`, `Table`

```tsx
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "neo-brutalism-ui-mates";
import { Bar, BarChart } from "recharts";

<ChartContainer config={{ value: { label: "Value", color: "hsl(var(--primary))" } }}>
  <BarChart data={data}>
    <ChartTooltip content={<ChartTooltipContent />} />
    <Bar dataKey="value" fill="var(--color-value)" />
  </BarChart>
</ChartContainer>
```

### Utility

```tsx
import { cn } from "neo-brutalism-ui-mates";

<div className={cn("p-4", isActive && "bg-primary")} />
```

## Changelog

### v0.3.1

- Added 10 color theme presets with light/dark variants (`themes.css` export)
- Fixed `useFormField` guard when used outside `<FormField>`
- Added Vitest test suite for Button, Input, Card, Badge, Checkbox, Dialog, and Form

### v0.3.0

- Added 25 components: Accordion, Alert Dialog, Breadcrumb, Calendar, Carousel, Chart, Collapsible, Combobox, Command, Context Menu, Data Table, Date Picker, Drawer, Form, Hover Card, Image Card, Input OTP, Marquee, Menubar, Navigation Menu, Pagination, Resizable, Scroll Area, Sidebar, Sonner
- Improved dark mode with semantic border tokens (`border-border`)
- Added overlay token `--nb-overlay` for dialogs and sheets
- Full interactive documentation for all components

### v0.2.x

- Initial npm publish with 24 core components
- English documentation and README

## Troubleshooting

**Styles not appearing** — Import `neo-brutalism-ui-mates/styles.css` in your root layout.

**Module not found in Next.js** — Add `transpilePackages: ["neo-brutalism-ui-mates"]` in `next.config.ts`.

**Fonts look wrong** — Set `--nb-font-heading` and `--nb-font-body` CSS variables, or load fonts via `next/font`.

## Development

```bash
git clone https://github.com/rahmatez/NeoBrutalismUI-mates.git
cd NeoBrutalismUI-mates
pnpm install
pnpm --filter neo-brutalism-ui-mates build
pnpm --filter neo-brutalism-ui-mates test
pnpm dev
```

## Links

- [npm package](https://www.npmjs.com/package/neo-brutalism-ui-mates)
- [GitHub repository](https://github.com/rahmatez/NeoBrutalismUI-mates)

## License

MIT © [rahmatez](https://github.com/rahmatez)
