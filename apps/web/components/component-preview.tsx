import { type ReactNode } from "react";

export function ComponentPreview({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-heading text-2xl font-bold">{title}</h2>
      <div className="flex w-full items-start justify-center rounded-md border-[3px] border-dashed border-border bg-background p-6 shadow-brutal sm:p-8">
        <div className="w-full min-w-0 *:mx-auto">{children}</div>
      </div>
    </section>
  );
}
