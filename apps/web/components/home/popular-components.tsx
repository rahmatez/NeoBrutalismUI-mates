import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "neo-brutalism-ui-mates";

import { componentDocs } from "@/lib/components";

const popular = [
  { slug: "button", name: "Button", desc: "Variants, sizes, press effect" },
  { slug: "card", name: "Card", desc: "Containers with brutal borders" },
  { slug: "dialog", name: "Dialog", desc: "Modal overlays" },
  { slug: "input", name: "Input", desc: "Form text fields" },
  { slug: "tabs", name: "Tabs", desc: "Tabbed navigation" },
  { slug: "dropdown-menu", name: "Dropdown Menu", desc: "Action menus" },
  { slug: "accordion", name: "Accordion", desc: "Collapsible sections" },
  { slug: "data-table", name: "Data Table", desc: "Sortable tables" },
];

export function PopularComponents() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mb-10">
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">
          Popular components
        </h2>
        <p className="mt-2 text-muted-foreground">
          Explore the full library of {componentDocs.length} documented components.
        </p>
      </div>

      <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {popular.map((comp) => (
          <Link key={comp.slug} href={`/docs/components/${comp.slug}`} className="block h-full">
            <Card className="flex h-full flex-col overflow-hidden transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm">
              <CardHeader className="border-b-[3px] border-border bg-muted/50 py-4">
                <CardTitle className="text-base">{comp.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 items-center p-4">
                <p className="text-sm text-muted-foreground">{comp.desc}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/docs"
          className="font-heading text-sm font-bold underline underline-offset-4 hover:text-primary"
        >
          View all components →
        </Link>
      </div>
    </section>
  );
}
