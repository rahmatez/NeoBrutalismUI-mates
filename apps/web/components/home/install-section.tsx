import Link from "next/link";

import { Button } from "neo-brutalism-ui-mates";

import { CodeBlock } from "@/components/code-block";

const steps = [
  {
    title: "1. Install the package",
    code: "pnpm add neo-brutalism-ui-mates",
  },
  {
    title: "2. Import styles",
    code: `// app/layout.tsx
import "neo-brutalism-ui-mates/styles.css";`,
  },
  {
    title: "3. Use components",
    code: `import { Button, Card, CardHeader, CardTitle } from "neo-brutalism-ui-mates";

export function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello, brutal world!</CardTitle>
      </CardHeader>
    </Card>
  );
}`,
  },
];

export function InstallSection() {
  return (
    <section className="bg-muted/30 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold sm:text-4xl">
              Quick start
            </h2>
            <p className="mt-2 text-muted-foreground">
              Up and running in under a minute.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/docs/installation">Full installation guide →</Link>
          </Button>
        </div>

        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.title}>
              <h3 className="font-heading mb-3 text-lg font-bold">{step.title}</h3>
              <CodeBlock code={step.code} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
