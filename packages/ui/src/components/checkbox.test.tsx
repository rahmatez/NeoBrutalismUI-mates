import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Checkbox } from "./checkbox";

describe("Checkbox", () => {
  it("toggles checked state", async () => {
    const user = userEvent.setup();
    render(<Checkbox aria-label="Accept terms" />);
    const checkbox = screen.getByRole("checkbox", { name: "Accept terms" });
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it("respects defaultChecked", () => {
    render(<Checkbox defaultChecked aria-label="Newsletter" />);
    expect(screen.getByRole("checkbox", { name: "Newsletter" })).toBeChecked();
  });
});
