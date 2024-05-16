import { Meta, StoryObj } from "@storybook/react"
import MacroHeadlines from "./MacroHeadlines"

const meta: Meta<typeof MacroHeadlines> = {
  component: MacroHeadlines
}
export default meta
type Story = StoryObj<typeof MacroHeadlines>

export const Primary: Story = {
  args: {
    carbsTotal: 100,
    carbsProgress: 50,
    fatProgress: 23,
    fatTotal: 80,
    proteinProgress: 150,
    proteinTotal: 160
  }
}
