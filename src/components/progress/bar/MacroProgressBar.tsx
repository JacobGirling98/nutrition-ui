import { CustomFlowbiteTheme, Flowbite, Progress } from "flowbite-react"

type Macro = "Carbs" | "Protein" | "Fat"

type Colour = "green" | "blue" | "red"

interface MacroProgressBarProps {
  colour: Colour
  progress: number
  total: number
  macro: Macro
}

const MacroProgressBar = ({
  colour,
  progress,
  total,
  macro
}: MacroProgressBarProps) => {
  const percentage = (progress * 100) / total

  const theme: CustomFlowbiteTheme = {
    progress: {
      color: {
        red: "bg-red-400 dark:bg-red-500",
        blue: "bg-blue-400",
        green: "bg-green-400"
      }
    }
  }

  return (
    <>
      <div className="flex-col text-center">
        <p className="mb-1 font-light text-gray-500 dark:text-gray-300">
          {macro}
        </p>
        <Flowbite theme={{ theme }}>
          <Progress progress={percentage} color={colour} />
        </Flowbite>
        <p className="mt-1 font-extralight text-sm text-gray-500 dark:text-gray-300">
          {progress} / {total}g
        </p>
      </div>
    </>
  )
}

export default MacroProgressBar
