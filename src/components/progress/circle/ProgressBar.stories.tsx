import { Meta, StoryObj } from "@storybook/react"
import ProgressBar from "./ProgressBar"

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  args: {
    strokeWidth: 4,
    percentage: 30
  }
}

export default meta
type Story = StoryObj<typeof ProgressBar>

export const Primary: Story = {}
