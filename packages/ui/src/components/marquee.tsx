import * as React from "react";

import { cn } from "../lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 4,
  children,
  ...props
}: MarqueeProps) {
  return (
    <div
      className={cn(
        "group flex overflow-hidden border-y-[3px] border-border bg-muted [--duration:25s] [--gap:1rem]",
        vertical ? "flex-col" : "flex-row",
        className,
      )}
      {...props}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around gap-[--gap]",
            vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row",
            reverse && (vertical ? "[animation-direction:reverse]" : "[animation-direction:reverse]"),
            pauseOnHover && "group-hover:[animation-play-state:paused]",
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
