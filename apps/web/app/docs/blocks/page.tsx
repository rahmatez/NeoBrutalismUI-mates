import { Badge } from "neo-brutalism-ui-mates";

import { FooterBlock } from "@/components/blocks/footer-block";
import { HeroBlock } from "@/components/blocks/hero-block";
import { LoginBlock } from "@/components/blocks/login-block";
import { PricingBlock } from "@/components/blocks/pricing-block";
import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { blocks } from "@/lib/blocks";

export const metadata = {
  title: "Blocks",
  description: "Pre-built neo-brutalism sections ready to copy and paste",
};

export default function BlocksPage() {
  return (
    <div>
      <Badge className="mb-4">Blocks</Badge>
      <h1 className="font-heading text-4xl font-bold">Ready-to-use Blocks</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Ready-to-use sections built with NeoBrutalismUI mates components. Copy
        the code below each preview directly into your project.
      </p>

      <div className="mt-16 space-y-20">
        {blocks.map((block) => (
          <section key={block.id} id={block.id} className="scroll-mt-8 space-y-6">
            <div>
              <h2 className="font-heading text-2xl font-bold">{block.name}</h2>
              <p className="mt-1 text-muted-foreground">{block.description}</p>
            </div>

            <ComponentPreview title="Preview">
              {block.id === "hero" && <HeroBlock />}
              {block.id === "pricing" && <PricingBlock />}
              {block.id === "login" && <LoginBlock />}
              {block.id === "footer" && <FooterBlock />}
            </ComponentPreview>

            <div className="space-y-3">
              <h3 className="font-heading text-lg font-bold">Code</h3>
              <CodeBlock code={block.code} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
