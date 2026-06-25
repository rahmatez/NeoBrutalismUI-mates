import Link from "next/link";

import { Button } from "neo-brutalism-ui-mates";

export function CtaSection() {
  return (
    <section className="bg-secondary px-4 py-16 text-secondary-foreground sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-heading text-3xl font-bold sm:text-4xl">
          Ready to build something bold?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg opacity-90">
          Open source, MIT licensed, and free forever. Start with the docs or
          browse pre-built blocks for your landing pages.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" variant="outline">
            <Link href="/docs">Read the docs</Link>
          </Button>
          <Button asChild size="lg">
            <Link href="/docs/blocks">Explore blocks</Link>
          </Button>
          <Button asChild size="lg" variant="accent">
            <a
              href="https://www.npmjs.com/package/neo-brutalism-ui-mates"
              target="_blank"
              rel="noreferrer"
            >
              View on npm
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
