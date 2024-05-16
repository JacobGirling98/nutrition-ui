import MacroProgressBar from "../progress/bar/MacroProgressBar"

interface MacroHeadlinesProps {
  carbsProgress: number
  carbsTotal: number
  proteinProgress: number
  proteinTotal: number
  fatProgress: number
  fatTotal: number
}

const MacroHeadlines = ({
  carbsProgress,
  carbsTotal,
  proteinProgress,
  proteinTotal,
  fatProgress,
  fatTotal
}: MacroHeadlinesProps) => {
  return (
    <>
      <div className="rounded-lg shadow-md py-4 px-6 flex flex-row space-x-4">
        <div className="flex-auto">
          <MacroProgressBar
            macro="Carbs"
            colour="green"
            total={carbsTotal}
            progress={carbsProgress}
          />
        </div>
        <div className="flex-auto">
          <MacroProgressBar
            macro="Protein"
            colour="blue"
            total={proteinTotal}
            progress={proteinProgress}
          />
        </div>
        <div className="flex-auto">
          <MacroProgressBar
            macro="Fat"
            colour="red"
            total={fatTotal}
            progress={fatProgress}
          />
        </div>
      </div>
    </>
  )
}

export default MacroHeadlines
