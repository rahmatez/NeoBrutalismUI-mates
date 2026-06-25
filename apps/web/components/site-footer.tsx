import { Github, Package } from "lucide-react";
import Link from "next/link";

import { Button, Separator } from "neo-brutalism-ui-mates";

const GITHUB_REPO = "https://github.com/rahmatez/NeoBrutalismUI-mates";
const NPM_PACKAGE = "https://www.npmjs.com/package/neo-brutalism-ui-mates";

const footerLinks = {
  Product: [
    { label: "Components", href: "/docs/components/button" },
    { label: "Blocks", href: "/docs/blocks" },
    { label: "Theming", href: "/docs/theming" },
  ],
  Resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Installation", href: "/docs/installation" },
    { label: "Design Principles", href: "/docs/design-principles" },
  ],
  Project: [
    { label: "GitHub", href: GITHUB_REPO, external: true },
    { label: "npm", href: NPM_PACKAGE, external: true },
    { label: "Blocks showcase", href: "/blocks" },
  ],
};

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-[3px] border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="font-heading text-xl font-bold tracking-tight">
              NeoBrutalismUI <span className="text-primary">mates</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed opacity-80">
              Bold React components with thick borders, hard shadows, and
              high-contrast colors. Open source and MIT licensed.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button asChild size="sm" variant="outline">
                <a href={GITHUB_REPO} target="_blank" rel="noreferrer">
                  <Github className="size-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild size="sm" variant="outline">
                <a href={NPM_PACKAGE} target="_blank" rel="noreferrer">
                  <Package className="size-4" />
                  npm
                </a>
              </Button>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <p className="font-heading mb-4 text-sm font-bold uppercase tracking-wider">
                {title}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.href}>
                    {"external" in item && item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium opacity-90 transition-opacity hover:underline hover:opacity-100"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm font-medium opacity-90 transition-opacity hover:underline hover:opacity-100"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-3 text-sm font-bold sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} NeoBrutalismUI mates. MIT License.</p>
          <p className="opacity-80">v0.3.0 · Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
