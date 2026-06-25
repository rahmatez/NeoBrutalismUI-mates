"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

import { Button } from "neo-brutalism-ui-mates";

export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="overflow-hidden rounded-md border-[3px] border-border bg-muted shadow-brutal">
      <div className="flex items-center justify-end border-b-[3px] border-border bg-background px-3 py-2">
        <Button type="button" variant="outline" size="sm" onClick={handleCopy}>
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}
