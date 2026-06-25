import { Badge, Card, CardContent, CardHeader, CardTitle } from "neo-brutalism-ui-mates";

import { CodeBlock } from "@/components/code-block";

export const metadata = {
  title: "Installation",
  description: "How to install and configure NeoBrutalismUI mates",
};

export default function InstallationPage() {
  return (
    <div>
      <Badge className="mb-4">Setup</Badge>
      <h1 className="font-heading text-4xl font-bold">Installation</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        A complete guide to integrating NeoBrutalismUI mates into your React or
        Next.js project.
      </p>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-2xl font-bold">Prerequisites</h2>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          <li>React 18 or 19</li>
          <li>Tailwind CSS v4</li>
          <li>TypeScript (recommended)</li>
        </ul>
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-2xl font-bold">1. Install package</h2>
        <CodeBlock code={`pnpm add neo-brutalism-ui-mates
# or
npm install neo-brutalism-ui-mates
# or
yarn add neo-brutalism-ui-mates`} />
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-2xl font-bold">2. Import styles</h2>
        <p className="text-muted-foreground">
          Import the stylesheet once in your root layout or entry point:
        </p>
        <CodeBlock
          code={`// Next.js — app/layout.tsx
import "neo-brutalism-ui-mates/styles.css";

// Vite — src/main.tsx
import "neo-brutalism-ui-mates/styles.css";`}
        />
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-2xl font-bold">3. Next.js setup</h2>
        <p className="text-muted-foreground">
          Add <code className="rounded border border-border bg-muted px-1.5 py-0.5 text-sm">transpilePackages</code> in{" "}
          <code className="rounded border border-border bg-muted px-1.5 py-0.5 text-sm">next.config.ts</code>:
        </p>
        <CodeBlock
          code={`// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["neo-brutalism-ui-mates"],
};

export default nextConfig;`}
        />
        <p className="text-muted-foreground">
          Load the recommended fonts in your layout:
        </p>
        <CodeBlock
          code={`import { DM_Sans, Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--nb-font-heading",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--nb-font-body",
  subsets: ["latin"],
});`}
        />
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-2xl font-bold">4. Tailwind CSS v4</h2>
        <p className="text-muted-foreground">
          When using a monorepo, point Tailwind at the UI component source:
        </p>
        <CodeBlock
          code={`/* app/globals.css */
@import "neo-brutalism-ui-mates/src/styles/globals.css";
@source "../../packages/ui/src";`}
        />
        <p className="text-muted-foreground">
          For npm consumers, simply import styles.css:
        </p>
        <CodeBlock code={`@import "neo-brutalism-ui-mates/styles.css";`} />
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-2xl font-bold">5. Use components</h2>
        <CodeBlock
          code={`import { Button, Card, CardHeader, CardTitle, CardContent } from "neo-brutalism-ui-mates";

export function MyPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello NeoBrutalismUI mates</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get started</Button>
      </CardContent>
    </Card>
  );
}`}
        />
      </section>

      <section className="mt-12 space-y-4">
        <h2 className="font-heading text-2xl font-bold">Troubleshooting</h2>
        <div className="grid items-stretch gap-4">
          {[
            {
              title: "Styles not appearing",
              body: (
                <>
                  Make sure <code className="font-mono">neo-brutalism-ui-mates/styles.css</code>{" "}
                  is imported in your root layout. Also verify that Tailwind{" "}
                  <code className="font-mono">@source</code> points to the component folder.
                </>
              ),
            },
            {
              title: "Module not found in Next.js",
              body: (
                <>
                  Add{" "}
                  <code className="font-mono">
                    transpilePackages: [&quot;neo-brutalism-ui-mates&quot;]
                  </code>{" "}
                  in next.config.ts.
                </>
              ),
            },
            {
              title: "Fonts look wrong",
              body: (
                <>
                  Set the CSS variables <code className="font-mono">--nb-font-heading</code> and{" "}
                  <code className="font-mono">--nb-font-body</code> on the root element, or override
                  them in tokens.css.
                </>
              ),
            },
          ].map((item) => (
            <Card key={item.title} className="flex flex-col overflow-hidden">
              <CardHeader className="border-b-[3px] border-border bg-muted/50 px-5 py-4">
                <CardTitle className="text-base leading-tight">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-5 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
