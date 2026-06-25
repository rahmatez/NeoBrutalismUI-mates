import { Github } from "lucide-react";
import Link from "next/link";

import { Button } from "neo-brutalism-ui-mates";

import { ThemePresetSwitcher } from "@/components/theme-preset-switcher";
import { ThemeToggle } from "@/components/theme-toggle";

const GITHUB_REPO_URL = "https://github.com/rahmatez/NeoBrutalismUI-mates";

const navItems = [
  { href: "/docs", label: "Docs" },
  { href: "/docs/blocks", label: "Blocks" },
  { href: "/docs/theming", label: "Theming" },
  { href: "/docs/components/button", label: "Components" },
];

export function SiteHeader() {
  return (
    <header className="border-b-[3px] border-border bg-accent text-accent-foreground dark:bg-card dark:text-card-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="font-heading text-xl font-bold tracking-tight">
          NeoBrutalismUI <span className="text-primary">mates</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-heading text-sm font-bold hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemePresetSwitcher />
          <ThemeToggle />
          <Button asChild size="sm" variant="outline" className="hidden sm:inline-flex">
            <a
              href="https://www.npmjs.com/package/neo-brutalism-ui-mates"
              target="_blank"
              rel="noreferrer"
            >
              npm install
            </a>
          </Button>
          <Button asChild size="icon" variant="outline" className="size-9">
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="View GitHub repository"
            >
              <Github className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
