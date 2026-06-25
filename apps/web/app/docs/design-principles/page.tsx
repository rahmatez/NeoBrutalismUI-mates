import { Badge, Card, CardContent, CardHeader, CardTitle } from "neo-brutalism-ui-mates";

export const metadata = {
  title: "Design Principles",
  description: "Neo-brutalism design philosophy and guidelines",
};

const principles = [
  {
    title: "Bold Borders",
    do: "Use 3px solid black borders on every interactive element and container.",
    dont: "Avoid thin 1px borders or borders without high contrast.",
  },
  {
    title: "Hard Shadows",
    do: "Offset shadows without blur: 4px 4px 0 #000. Shadows shift on hover/click.",
    dont: "Don't use soft blurred shadow-lg or subtle drop-shadows.",
  },
  {
    title: "High Contrast Colors",
    do: "High-saturation colors (#FF6B6B, #4ECDC4, #FFE66D) on light backgrounds.",
    dont: "Avoid soft gradients, muted pastels, or low-contrast palettes.",
  },
  {
    title: "Press Effect",
    do: "Interactive elements feel 'pressed' on hover/active: translate + reduced shadow.",
    dont: "Don't rely only on opacity fades — that's too soft for neo-brutalism.",
  },
  {
    title: "Bold Typography",
    do: "Bold geometric sans fonts (Space Grotesk for headings, DM Sans for body).",
    dont: "Avoid elegant serifs or light weights (300–400) for headings.",
  },
  {
    title: "Minimal Radius",
    do: "Small border radius (4–8px) or fully square. Keep it consistent across the kit.",
    dont: "Avoid excessive rounded-full except for Switch thumbs.",
  },
];

export default function DesignPrinciplesPage() {
  return (
    <div>
      <Badge className="mb-4">Design System</Badge>
      <h1 className="font-heading text-4xl font-bold">Design Principles</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Neo-brutalism rejects &quot;polished&quot; aesthetics — it celebrates
        deliberate visual imperfection. Every component in this kit follows the
        principles below.
      </p>

      <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch">
        {principles.map((p) => (
          <Card key={p.title} className="flex h-full flex-col overflow-hidden">
            <CardHeader className="border-b-[3px] border-border bg-muted/50 px-5 py-4">
              <CardTitle className="text-lg leading-tight">{p.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col divide-y-[3px] divide-border p-0">
              <div className="flex flex-1 flex-col p-5">
                <p className="mb-2 font-heading text-xs font-bold uppercase tracking-wider text-primary">
                  Do
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.do}
                </p>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="mb-2 font-heading text-xs font-bold uppercase tracking-wider text-destructive">
                  Don&apos;t
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.dont}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-2xl font-bold">Interaction Pattern</h2>
        <p className="text-muted-foreground">
          All interactive elements (Button, Input focus, clickable Card) share
          the same pattern:
        </p>
        <Card className="overflow-hidden">
          <CardHeader className="border-b-[3px] border-border bg-muted/50 px-5 py-3">
            <CardTitle className="text-base">Press states</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 p-5 font-mono text-sm">
            <p>Default → shadow: 4px 4px 0 #000</p>
            <p>Hover → translate(2px, 2px) + shadow: 2px 2px 0 #000</p>
            <p>Active → translate(4px, 4px) + shadow: none</p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
