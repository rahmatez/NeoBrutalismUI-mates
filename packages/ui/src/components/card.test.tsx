import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

describe("Card", () => {
  it("renders full card structure", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Neo Card</CardTitle>
          <CardDescription>Bold borders included</CardDescription>
        </CardHeader>
        <CardContent>Body content</CardContent>
        <CardFooter>Footer actions</CardFooter>
      </Card>,
    );

    expect(screen.getByText("Neo Card")).toBeInTheDocument();
    expect(screen.getByText("Bold borders included")).toBeInTheDocument();
    expect(screen.getByText("Body content")).toBeInTheDocument();
    expect(screen.getByText("Footer actions")).toBeInTheDocument();
  });

  it("applies brutal border styles", () => {
    const { container } = render(<Card data-testid="card">Content</Card>);
    expect(container.firstChild).toHaveClass("border-[3px]", "border-border", "shadow-brutal");
  });
});
