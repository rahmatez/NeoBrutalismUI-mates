"use client";

import { Marquee } from "neo-brutalism-ui-mates";

const items = [
  "Neo Brutalism",
  "Bold Borders",
  "Hard Shadows",
  "React 19",
  "Tailwind v4",
  "Radix UI",
  "Dark Mode",
  "TypeScript",
  "49+ Components",
  "MIT License",
];

export function MarqueeSection() {
  return (
    <Marquee className="border-b-[3px] border-border bg-accent py-3 text-accent-foreground [--duration:30s]">
      {items.map((text) => (
        <span key={text} className="mx-6 font-heading text-sm font-bold uppercase tracking-wider">
          {text}
        </span>
      ))}
    </Marquee>
  );
}
