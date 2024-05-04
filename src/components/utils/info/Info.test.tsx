import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, test } from "vitest"
import Info from "./Info"

test("Can open and close info with buttons", async () => {
  const user = userEvent.setup()

  const mockDate = "2024-04-28"
  render(<Info date={mockDate} />)

  await user.click(screen.getByRole("button", { name: /i/i }))

  expect(screen.getByText(`App deployed at ${mockDate}`)).toBeInTheDocument()
})
