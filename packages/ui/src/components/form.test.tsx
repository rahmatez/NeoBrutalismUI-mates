import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useForm } from "react-hook-form";
import { describe, expect, it, vi } from "vitest";

import { Button } from "./button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Input } from "./input";

function TestForm({ onSubmit }: { onSubmit: (data: { email: string }) => void }) {
  const form = useForm<{ email: string }>({ defaultValues: { email: "" } });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          rules={{ required: "Email is required" }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

describe("Form", () => {
  it("shows validation message for empty submit", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<TestForm onSubmit={onSubmit} />);

    await user.click(screen.getByRole("button", { name: "Submit" }));
    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it("submits valid data", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();
    render(<TestForm onSubmit={onSubmit} />);

    await user.type(screen.getByLabelText("Email"), "dev@neo.brutal");
    await user.click(screen.getByRole("button", { name: "Submit" }));
    expect(onSubmit.mock.calls[0]?.[0]).toEqual({ email: "dev@neo.brutal" });
  });
});
