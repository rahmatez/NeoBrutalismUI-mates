import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Input } from "./input";

describe("Input", () => {
  it("renders with placeholder", () => {
    render(<Input placeholder="you@example.com" />);
    expect(screen.getByPlaceholderText("you@example.com")).toBeInTheDocument();
  });

  it("accepts user typing", async () => {
    const user = userEvent.setup();
    render(<Input aria-label="Email" />);
    const input = screen.getByRole("textbox", { name: "Email" });
    await user.type(input, "hello@neo.dev");
    expect(input).toHaveValue("hello@neo.dev");
  });

  it("respects disabled state", () => {
    render(<Input disabled aria-label="Disabled" />);
    expect(screen.getByRole("textbox", { name: "Disabled" })).toBeDisabled();
  });

  it("forwards type attribute", () => {
    render(<Input type="password" aria-label="Password" />);
    expect(screen.getByLabelText("Password")).toHaveAttribute("type", "password");
  });
});
