import { Github, Package } from "lucide-react";
import Link from "next/link";

import { Button, Separator } from "neo-brutalism-ui-mates";

const GITHUB_REPO = "https://github.com/rahmatez/NeoBrutalismUI-mates";
const NPM_PACKAGE = "https://www.npmjs.com/package/neo-brutalism-ui-mates";

const links = {
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
};

export function FooterBlock() {
  return (
    <footer className="border-[3px] border-border bg-secondary p-8 text-secondary-foreground shadow-brutal">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <p className="font-heading text-xl font-bold">
            NeoBrutalismUI <span className="text-primary">mates</span>
          </p>
          <p className="mt-2 max-w-sm text-sm opacity-80">
            Bold components for bold projects. Copy this block into your landing
            pages.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
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
        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <p className="font-heading mb-3 text-sm font-bold uppercase tracking-wider">
              {title}
            </p>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium opacity-90 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Separator className="my-6" />
      <p className="text-center text-sm font-bold">
        © {new Date().getFullYear()} NeoBrutalismUI mates. MIT License.
      </p>
    </footer>
  );
}
