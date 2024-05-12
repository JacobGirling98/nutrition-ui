import { Meta, StoryObj } from "@storybook/react"
import MacroProgressBar from "./MacroProgressBar"

const meta: Meta<typeof MacroProgressBar> = {
  component: MacroProgressBar,
  args: {
    colour: "red",
    macro: "Fat",
    progress: 15,
    total: 50
  }
}

export default meta
type Story = StoryObj<typeof MacroProgressBar>

export const Red: Story = {}

export const Blue: Story = {
  args: {
    colour: "blue",
    macro: "Protein"
  }
}

export const Green: Story = {
  args: {
    colour: "green",
    macro: "Carbs"
  }
}

export const Empty: Story = {
  args: {
    progress: 0
  }
}

export const Full: Story = {
  args: {
    progress: 10,
    total: 10
  }
}

export const Extra: Story = {
  args: {
    progress: 15,
    total: 10
  }
}
