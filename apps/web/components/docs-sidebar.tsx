"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";

import { cn } from "neo-brutalism-ui-mates";

import { componentCategories } from "@/lib/components";

const guideLinks = [
  { href: "/docs", label: "Getting Started", exact: true },
  { href: "/docs/installation", label: "Installation" },
  { href: "/docs/theming", label: "Theming" },
  { href: "/docs/design-principles", label: "Design Principles" },
  { href: "/docs/blocks", label: "Blocks" },
];

type SidebarSectionProps = {
  title: string;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
};

function SidebarSection({ title, open, onToggle, children }: SidebarSectionProps) {
  return (
    <div className="rounded-md border-2 border-border bg-background shadow-brutal-sm">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-3 py-2.5 text-left font-heading text-xs font-bold uppercase tracking-wider transition-colors hover:bg-muted"
      >
        {title}
        <ChevronDown
          className={cn(
            "size-4 shrink-0 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200 ease-in-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          <ul className="space-y-0.5 border-t-2 border-border px-1.5 py-1.5">
            {children}
          </ul>
        </div>
      </div>
    </div>
  );
}

function isGuideActive(pathname: string, href: string, exact = false) {
  if (exact) return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function getAutoOpenSections(pathname: string): Record<string, boolean> {
  const guidesActive = guideLinks.some((link) =>
    isGuideActive(pathname, link.href, link.exact),
  );

  return {
    guides: guidesActive,
    ...Object.fromEntries(
      componentCategories.map((c) => [
        c.name,
        c.components.some(
          (comp) => pathname === `/docs/components/${comp.slug}`,
        ),
      ]),
    ),
  };
}

type DocsSidebarNavProps = {
  onNavigate?: () => void;
  className?: string;
};

export function DocsSidebarNav({ onNavigate, className }: DocsSidebarNavProps) {
  const pathname = usePathname();
  const autoOpen = useMemo(() => getAutoOpenSections(pathname), [pathname]);
  const [userToggles, setUserToggles] = useState<Record<string, boolean>>({});

  function isSectionOpen(id: string) {
    if (id in userToggles) return userToggles[id];
    if (autoOpen[id]) return true;
    return true;
  }

  function toggleSection(id: string) {
    const next = !isSectionOpen(id);
    setUserToggles((prev) => ({ ...prev, [id]: next }));
  }

  return (
    <nav className={cn("space-y-3", className)}>
      <SidebarSection
        title="Guides"
        open={isSectionOpen("guides")}
        onToggle={() => toggleSection("guides")}
      >
        {guideLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={onNavigate}
              tabIndex={isSectionOpen("guides") ? undefined : -1}
              className={cn(
                "block rounded-sm px-3 py-1.5 text-sm font-bold transition-colors",
                isGuideActive(pathname, link.href, link.exact)
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted",
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </SidebarSection>

      {componentCategories.map(
        (category) =>
          category.components.length > 0 && (
            <SidebarSection
              key={category.name}
              title={category.name}
              open={isSectionOpen(category.name)}
              onToggle={() => toggleSection(category.name)}
            >
              {category.components.map((comp) => (
                <li key={comp.slug}>
                  <Link
                    href={`/docs/components/${comp.slug}`}
                    onClick={onNavigate}
                    tabIndex={isSectionOpen(category.name) ? undefined : -1}
                    className={cn(
                      "block rounded-sm px-3 py-1.5 text-sm font-bold transition-colors",
                      pathname === `/docs/components/${comp.slug}`
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted",
                    )}
                  >
                    {comp.name}
                  </Link>
                </li>
              ))}
            </SidebarSection>
          ),
      )}
    </nav>
  );
}

export function DocsSidebar() {
  return (
    <aside className="hidden w-60 shrink-0 lg:block">
      <div className="sticky top-6 max-h-[calc(100vh-3rem)] overflow-y-auto pr-1">
        <DocsSidebarNav />
      </div>
    </aside>
  );
}
