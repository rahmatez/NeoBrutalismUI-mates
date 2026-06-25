import Link from "next/link";

import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from "neo-brutalism-ui-mates";

import { CodeBlock } from "@/components/code-block";
import { componentCategories } from "@/lib/components";

export const metadata = {
  title: "Documentation",
  description: "Getting started with NeoBrutalismUI mates",
};

export default function DocsPage() {
  return (
    <div>
      <Badge className="mb-4">Getting Started</Badge>
      <h1 className="font-heading text-4xl font-bold">Documentation</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        NeoBrutalismUI mates is a React component library with a bold aesthetic —
        thick borders, hard shadows, and high-contrast colors. Built on Tailwind
        CSS v4 and Radix UI primitives.
      </p>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-2xl font-bold">Quick Start</h2>
        <ol className="list-decimal space-y-2 pl-5 text-muted-foreground">
          <li>Install the package</li>
          <li>Import the global stylesheet</li>
          <li>Import and use components</li>
        </ol>
        <CodeBlock code={`pnpm add neo-brutalism-ui-mates`} />
        <CodeBlock
          code={`// app/layout.tsx or main.tsx
import "neo-brutalism-ui-mates/styles.css";

// Components
import { Button, Card, CardHeader, CardTitle, CardContent } from "neo-brutalism-ui-mates";`}
        />
        <Button asChild variant="outline" size="sm">
          <Link href="/docs/installation">Full installation guide →</Link>
        </Button>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-2xl font-bold">Tech Stack</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { name: "React 19", desc: "UI components" },
            { name: "Tailwind CSS v4", desc: "Utility-first styling" },
            { name: "Radix UI", desc: "Accessible primitives" },
            { name: "class-variance-authority", desc: "Variant management" },
          ].map((item) => (
            <Card key={item.name}>
              <CardContent className="p-4">
                <p className="font-heading font-bold">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-2xl font-bold">Monorepo</h2>
        <p className="text-muted-foreground">
          This repository uses Turborepo. Import directly from the workspace:
        </p>
        <CodeBlock code={`import { Button, Card } from "neo-brutalism-ui-mates";`} />
      </section>

      <section className="mt-12 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="font-heading text-2xl font-bold">Components</h2>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <Link href="/docs/theming">Theming</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href="/docs/design-principles">Design Principles</Link>
            </Button>
          </div>
        </div>

        {componentCategories.map(
          (category) =>
            category.components.length > 0 && (
              <div key={category.name} className="space-y-3">
                <h3 className="font-heading text-lg font-bold">
                  {category.name}
                </h3>
                <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.components.map((comp) => (
                    <Link
                      key={comp.slug}
                      href={`/docs/components/${comp.slug}`}
                      className="block h-full"
                    >
                      <Card className="flex h-full flex-col overflow-hidden transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm">
                        <CardHeader className="border-b-[3px] border-border bg-muted/50 px-5 py-4">
                          <CardTitle className="text-base leading-tight">
                            {comp.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-1 items-center p-5">
                          <p className="text-sm text-muted-foreground">
                            View documentation →
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ),
        )}
      </section>
    </div>
  );
}
