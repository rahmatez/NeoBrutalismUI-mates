import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge, Button } from "neo-brutalism-ui-mates";

import { CodeBlock } from "@/components/code-block";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";
import { componentDocs, getComponentDoc } from "@/lib/components";

import { ComponentDemo } from "./component-demos";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return componentDocs.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const doc = getComponentDoc(slug);
  if (!doc) return {};
  return { title: doc.name, description: doc.description };
}

export default async function ComponentDocPage({ params }: PageProps) {
  const { slug } = await params;
  const doc = getComponentDoc(slug);

  if (!doc) {
    notFound();
  }

  const currentIndex = componentDocs.findIndex((item) => item.slug === slug);
  const prev = componentDocs[currentIndex - 1];
  const next = componentDocs[currentIndex + 1];

  return (
    <div>
      <Badge className="mb-4 capitalize">{doc.category}</Badge>
      <h1 className="font-heading text-4xl font-bold">{doc.name}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        {doc.description}
      </p>

      <div className="mt-12 space-y-12">
        <ComponentPreview title="Preview">
          <ComponentDemo slug={slug} />
        </ComponentPreview>

        {doc.anatomy && (
          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">Anatomy</h2>
            <div className="flex flex-wrap gap-2">
              {doc.anatomy.map((part) => (
                <Badge key={part} variant="outline">
                  {part}
                </Badge>
              ))}
            </div>
          </section>
        )}

        <section className="space-y-4">
          <h2 className="font-heading text-2xl font-bold">Import</h2>
          <CodeBlock code={doc.importCode} />
        </section>

        <section className="space-y-4">
          <h2 className="font-heading text-2xl font-bold">Usage</h2>
          <CodeBlock code={doc.usageCode} />
        </section>

        {doc.variants && doc.variants.length > 0 && (
          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">Variants</h2>
            <PropsTable
              props={doc.variants.map((v) => ({
                name: v.name,
                type: v.values,
                description: v.description,
              }))}
            />
          </section>
        )}

        <section className="space-y-4">
          <h2 className="font-heading text-2xl font-bold">API Reference</h2>
          <PropsTable props={doc.props} />
        </section>

        {doc.examples.length > 0 && (
          <section className="space-y-6">
            <h2 className="font-heading text-2xl font-bold">Examples</h2>
            {doc.examples.map((example) => (
              <div key={example.title} className="space-y-3">
                <h3 className="font-heading text-lg font-bold">
                  {example.title}
                </h3>
                <CodeBlock code={example.code} />
              </div>
            ))}
          </section>
        )}

        {doc.accessibility && (
          <section className="space-y-4">
            <h2 className="font-heading text-2xl font-bold">Accessibility</h2>
            <p className="text-muted-foreground">{doc.accessibility}</p>
          </section>
        )}
      </div>

      <div className="mt-16 flex flex-wrap justify-between gap-4 border-t-[3px] border-border pt-8">
        {prev ? (
          <Button asChild variant="outline">
            <Link href={`/docs/components/${prev.slug}`}>← {prev.name}</Link>
          </Button>
        ) : (
          <span />
        )}
        {next ? (
          <Button asChild variant="outline">
            <Link href={`/docs/components/${next.slug}`}>{next.name} →</Link>
          </Button>
        ) : null}
      </div>
    </div>
  );
}
