import { DocsMobileNav } from "@/components/docs-mobile-nav";
import { DocsSidebar } from "@/components/docs-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <DocsMobileNav />
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        <DocsSidebar />
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
