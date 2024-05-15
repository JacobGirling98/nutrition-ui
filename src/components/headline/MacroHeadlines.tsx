import MacroProgressBar from "../progress/bar/MacroProgressBar"

const MacroHeadlines = () => {
  return (
    <>
      <div className="rounded-lg shadow-md py-4 px-6 flex flex-row space-x-4">
        <div className="flex-auto">
          <MacroProgressBar
            macro="Carbs"
            colour="green"
            total={100}
            progress={50}
          />
        </div>
        <div className="flex-auto">
          <MacroProgressBar
            macro="Protein"
            colour="blue"
            total={100}
            progress={50}
          />
        </div>
        <div className="flex-auto">
          <MacroProgressBar
            macro="Fat"
            colour="red"
            total={100}
            progress={50}
          />
        </div>
      </div>
    </>
  )
}

export default MacroHeadlines
