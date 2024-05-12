interface InfoContentProps {
  date: string
  close: () => void
}

const InfoContent = ({ date, close }: InfoContentProps) => {
  return (
    <>
      <div className="bg-gray-200 dark:bg-gray-700 text-neutral-950 dark:text-neutral-300 rounded-lg w-40 flex">
        <p className="p-2 text-xs font-extralight flex-grow">
          App deployed at {date}
        </p>
        <button
          className="text-neutral-950 dark:text-neutral-300 py-1 px-2 text-xs"
          onClick={close}
        >
          x
        </button>
      </div>
    </>
  )
}

export default InfoContent
