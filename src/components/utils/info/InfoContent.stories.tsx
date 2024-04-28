import type { Meta, StoryObj } from "@storybook/react"
import InfoContent from "./InfoContent"

const meta: Meta<typeof InfoContent> = {
  component: InfoContent,
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
type Story = StoryObj<typeof InfoContent>

export const Primary: Story = {}
