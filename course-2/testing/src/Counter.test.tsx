import { render } from "vitest-browser-react";
import { expect, test } from "vitest";
import { Counter } from "./Counter";

test("counter button increments the count", async () => {
  const screen = await render(<Counter />);

  await screen.getByRole("button", { name: "Increment" }).click();

  await expect.element(screen.getByText("Count is 2")).toBeVisible();
});
