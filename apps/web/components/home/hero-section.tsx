import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

import { Badge, Button, Card, CardContent } from "neo-brutalism-ui-mates";

import { HomeInstallBar } from "@/components/home/install-bar";

const GITHUB_REPO = "https://github.com/rahmatez/NeoBrutalismUI-mates";

export function HeroSection({ componentCount }: { componentCount: number }) {
  return (
    <section className="relative overflow-hidden border-b-[3px] border-border bg-primary px-4 py-16 text-primary-foreground sm:px-6 sm:py-24">
      <div
        className="pointer-events-none absolute -right-8 top-8 hidden size-40 border-[3px] border-border bg-accent shadow-brutal-lg lg:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-12 right-32 hidden size-24 border-[3px] border-border bg-secondary shadow-brutal lg:block"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <Badge variant="accent">v0.3.0 — Now on npm</Badge>
            <Badge variant="outline" className="border-border bg-background/10 text-primary-foreground">
              {componentCount}+ components
            </Badge>
          </div>

          <h1 className="font-heading max-w-xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Build bold interfaces with{" "}
            <span className="underline decoration-accent decoration-[3px] underline-offset-4">
              NeoBrutalismUI
            </span>{" "}
            mates
          </h1>

          <p className="mt-6 max-w-lg text-lg font-medium leading-relaxed opacity-90">
            A React component library with thick borders, hard shadows, and
            high-contrast colors. Drop-in ready with Tailwind CSS v4 and Radix UI.
          </p>

          <div className="mt-8 max-w-md">
            <HomeInstallBar />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="outline">
              <Link href="/docs">
                Get Started
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/docs/components/button">Browse Components</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-primary-foreground hover:text-primary-foreground">
              <a href={GITHUB_REPO} target="_blank" rel="noreferrer">
                <Github className="size-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="space-y-4 lg:translate-x-4">
            <Card className="-rotate-2 bg-card text-card-foreground transition-transform hover:rotate-0">
              <CardContent className="space-y-3 p-6">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-sm font-bold">Dashboard</span>
                  <Badge variant="secondary">Live</Badge>
                </div>
                <div className="h-3 w-full rounded-sm border-2 border-border bg-muted" />
                <div className="grid grid-cols-3 gap-2">
                  <div className="h-16 rounded-sm border-2 border-border bg-primary" />
                  <div className="h-16 rounded-sm border-2 border-border bg-secondary" />
                  <div className="h-16 rounded-sm border-2 border-border bg-accent" />
                </div>
              </CardContent>
            </Card>

            <Card className="ml-8 rotate-2 bg-accent text-accent-foreground shadow-brutal-lg transition-transform hover:rotate-0">
              <CardContent className="p-5">
                <p className="font-heading text-lg font-bold">Press effect built-in</p>
                <p className="mt-1 text-sm opacity-80">
                  Every button shifts on hover. Shadows that feel physical.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
