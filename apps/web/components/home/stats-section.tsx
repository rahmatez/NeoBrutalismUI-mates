import { componentDocs } from "@/lib/components";

const stats = (componentCount: number) => [
  { label: "Components", value: `${componentCount}+` },
  { label: "License", value: "MIT" },
  { label: "Primitives", value: "Radix UI" },
  { label: "Styling", value: "Tailwind v4" },
];

export function StatsSection() {
  const items = stats(componentDocs.length);

  return (
    <section className="border-b-[3px] border-border bg-muted">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x-[3px] divide-border sm:grid-cols-4">
        {items.map((stat) => (
          <div key={stat.label} className="px-4 py-8 text-center sm:px-6">
            <p className="font-heading text-3xl font-bold sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm font-bold text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
