import type { Meta, StoryObj } from "@storybook/react"
import Info from "./Info"

const meta: Meta<typeof Info> = {
  component: Info,
  argTypes: {
    date: {
      control: "text"
    }
  },
  args: {
    date: "18:00:00 23/04/24"
  }
}

export default meta
type Story = StoryObj<typeof Info>

export const PositionedCentered: Story = {
  parameters: {
    layout: "centered"
  }
}

export const PositionedLeft: Story = {}
