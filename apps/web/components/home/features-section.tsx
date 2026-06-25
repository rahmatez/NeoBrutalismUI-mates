import { Box, Layers, Moon, MousePointerClick } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "neo-brutalism-ui-mates";

const features = [
  {
    icon: Box,
    title: "Thick Borders",
    description:
      "3px solid borders on every element. High contrast by default — no subtle 1px lines.",
  },
  {
    icon: MousePointerClick,
    title: "Hard Shadows",
    description:
      "Offset shadows without blur. Buttons press down on click with translate + shadow shift.",
  },
  {
    icon: Layers,
    title: "shadcn-compatible",
    description:
      "Same composable API you know. Built on Radix UI primitives with full accessibility.",
  },
  {
    icon: Moon,
    title: "Dark Mode",
    description:
      "Theme tokens switch borders and shadows automatically. Toggle with one class on html.",
  },
];

export function FeaturesSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mb-10 max-w-2xl">
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">
          Why neo-brutalism?
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Deliberate visual imperfection. Every component rejects the polished,
          gradient-heavy aesthetic in favor of raw, confident design.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="flex h-full flex-col">
            <CardHeader className="border-b-[3px] border-border bg-muted/50">
              <div className="mb-2 flex size-10 items-center justify-center rounded-md border-[3px] border-border bg-primary text-primary-foreground shadow-brutal-sm">
                <feature.icon className="size-5" />
              </div>
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
