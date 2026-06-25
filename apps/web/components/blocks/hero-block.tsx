import Link from "next/link";

import { Badge, Button } from "neo-brutalism-ui-mates";

export function HeroBlock() {
  return (
    <section className="border-[3px] border-border bg-primary p-8 text-primary-foreground shadow-brutal-lg sm:p-12">
      <Badge variant="accent" className="mb-4">
        New Release
      </Badge>
      <h2 className="font-heading max-w-xl text-4xl font-bold leading-tight sm:text-5xl">
        Build something bold today
      </h2>
      <p className="mt-4 max-w-lg text-base font-medium">
        Ship landing pages faster with pre-built neo-brutalism sections. Copy,
        paste, customize.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button asChild variant="outline" size="lg">
          <Link href="/docs">Get Started</Link>
        </Button>
        <Button asChild variant="secondary" size="lg">
          <Link href="/docs/blocks">View Blocks</Link>
        </Button>
      </div>
    </section>
  );
}
