# Neobrutalism mates UI KIT

[![npm version](https://img.shields.io/npm/v/neo-brutalism-ui-mates.svg)](https://www.npmjs.com/package/neo-brutalism-ui-mates)
[![license](https://img.shields.io/npm/l/neo-brutalism-ui-mates.svg)](https://www.npmjs.com/package/neo-brutalism-ui-mates)

Monorepo for the **neo-brutalism** React component library and its interactive documentation site.

> **npm:** [`neo-brutalism-ui-mates`](https://www.npmjs.com/package/neo-brutalism-ui-mates) · **v0.3.1**

## About

NeoBrutalismUI mates is a React design system with a bold aesthetic — 3px thick borders, hard shadows without blur, high-contrast colors, and press effects on interaction. Built on Tailwind CSS v4, shadcn/ui patterns, and Radix UI primitives.

**49+ components** covering core UI, forms, overlays, and layout — with **10 color theme presets**, full dark mode, and CSS variable theming.

## Monorepo Structure

```
NeoBrutalismUI-mates/
├── apps/web/          # Next.js showcase & documentation
├── packages/ui/       # React library (published to npm)
└── packages/config/   # Shared TypeScript config
```

| Package | npm name | Description |
|---------|----------|-------------|
| `packages/ui` | [`neo-brutalism-ui-mates`](https://www.npmjs.com/package/neo-brutalism-ui-mates) | Publishable UI components |
| `apps/web` | — (private) | Docs & demo site |
| `packages/config` | — (private) | Shared TS configuration |

## Quick Start (npm consumers)

```bash
npm install neo-brutalism-ui-mates
```

```tsx
// app/layout.tsx
import "neo-brutalism-ui-mates/styles.css";

// Components
import { Button, Card, CardHeader, CardTitle, CardContent } from "neo-brutalism-ui-mates";
```

Full documentation is available in [`packages/ui/README.md`](./packages/ui/README.md).

## Development

### Prerequisites

- Node.js 20+
- pnpm 10+

### Setup

```bash
git clone https://github.com/rahmatez/NeoBrutalismUI-mates.git
cd NeoBrutalismUI-mates
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) for the showcase and interactive documentation.

### Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev servers (web + UI watch) |
| `pnpm build` | Build all packages |
| `pnpm --filter neo-brutalism-ui-mates build` | Build UI library only |
| `pnpm lint` | Lint all packages |
| `pnpm test` | Run component tests (Vitest) |
| `pnpm changeset` | Create a changeset for versioning |
| `pnpm version-packages` | Bump versions from changesets |
| `pnpm release` | Build and publish to npm |

## Components (v0.3.1)

**Core:** Alert, Avatar, Badge, Button, Card

**Form:** Calendar, Checkbox, Combobox, Date Picker, Form, Input, Input OTP, Label, Radio Group, Select, Slider, Switch, Textarea, Toggle

**Overlay:** Accordion, Alert Dialog, Collapsible, Command, Context Menu, Dialog, Drawer, Dropdown Menu, Hover Card, Menubar, Navigation Menu, Popover, Sheet, Sonner, Tabs, Tooltip

**Layout & Data:** Breadcrumb, Carousel, Chart, Data Table, Image Card, Marquee, Pagination, Progress, Resizable, Scroll Area, Separator, Sidebar, Skeleton, Table

See the full list, props, and live examples in [`packages/ui/README.md`](./packages/ui/README.md) or run the local docs at `/docs`.

## What's New in v0.3.1

- **10 color theme presets** — `classic`, `sunset`, `ocean`, `forest`, `candy`, `retro`, `grape`, `neon`, `berry`, `citrus` (light + dark each)
- **`themes.css` export** — Import presets standalone or use bundled `styles.css`
- **Form fix** — Correct `useFormField` error when used outside `<FormField>`
- **CI & tests** — GitHub Actions pipeline + Vitest suite for critical components

## What's New in v0.3.0

- **25 new components** — Accordion, Alert Dialog, Breadcrumb, Calendar, Carousel, Chart, Collapsible, Combobox, Command, Context Menu, Data Table, Date Picker, Drawer, Form, Hover Card, Image Card, Input OTP, Marquee, Menubar, Navigation Menu, Pagination, Resizable, Scroll Area, Sidebar, Sonner
- **Dark mode** — Semantic `border-border` tokens, overlay variables, and improved theme consistency
- **Docs site** — Upgraded homepage, expanded component documentation, and improved footer

## Tech Stack

- **Next.js 16** — App Router, documentation & showcase
- **React 19** — UI components
- **Tailwind CSS v4** — Utility-first styling
- **Radix UI** — Accessible primitives
- **Turborepo + pnpm** — Monorepo tooling
- **tsup** — Library bundling

## Publishing to npm

```bash
pnpm --filter neo-brutalism-ui-mates build
cd packages/ui && npm publish --access public
```

Published package: `neo-brutalism-ui-mates` from `packages/ui/`.

## Links

- [npm — neo-brutalism-ui-mates](https://www.npmjs.com/package/neo-brutalism-ui-mates)
- [GitHub — rahmatez/NeoBrutalismUI-mates](https://github.com/rahmatez/NeoBrutalismUI-mates)

## License

MIT
