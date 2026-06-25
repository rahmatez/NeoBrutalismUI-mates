"use client";

import { Menu } from "lucide-react";
import { useState } from "react";

import {
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "neo-brutalism-ui-mates";

import { DocsSidebarNav } from "@/components/docs-sidebar";

export function DocsMobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm" className="gap-2">
            <Menu className="size-4" />
            Documentation Menu
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[min(100vw-2rem,20rem)] overflow-y-auto">
          <SheetHeader className="mb-4 text-left">
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <DocsSidebarNav onNavigate={() => setOpen(false)} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
