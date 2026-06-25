"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { Button } from "neo-brutalism-ui-mates";

const INSTALL_CMD = "pnpm add neo-brutalism-ui-mates";

export function HomeInstallBar() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(INSTALL_CMD);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex items-center gap-2 rounded-md border-[3px] border-border bg-background p-2 text-foreground shadow-brutal">
      <code className="flex-1 overflow-x-auto px-2 font-mono text-sm font-bold">
        {INSTALL_CMD}
      </code>
      <Button type="button" size="sm" variant="default" onClick={handleCopy}>
        {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
        {copied ? "Copied" : "Copy"}
      </Button>
    </div>
  );
}
