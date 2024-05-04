import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, test } from "vitest"
import Info from "./Info"

test("Can open and close info with buttons", async () => {
  const user = userEvent.setup()

  render(<Info />)

  await user.click(screen.getByRole("button", { name: /i/i }))

  expect(screen.getByText("My content")).toBeInTheDocument()
})
