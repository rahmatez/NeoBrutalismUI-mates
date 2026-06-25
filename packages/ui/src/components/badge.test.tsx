import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Badge } from "./badge";

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("applies outline variant", () => {
    render(<Badge variant="outline">Draft</Badge>);
    expect(screen.getByText("Draft")).toHaveClass("bg-background");
  });

  it("applies destructive variant", () => {
    render(<Badge variant="destructive">Error</Badge>);
    expect(screen.getByText("Error")).toHaveClass("bg-destructive");
  });
});
