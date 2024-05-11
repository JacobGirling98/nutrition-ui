import { Popover } from "flowbite-react"
import { useState } from "react"
import InfoContent from "./InfoContent"

interface InfoProps {
  date: string
}

const Info = ({ date }: InfoProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Popover
        open={isOpen}
        onOpenChange={setIsOpen}
        content={<InfoContent date={date} close={() => setIsOpen(false)} />}
        arrow={false}
      >
        <button
          className="rounded-full w-7 h-7 flex justify-center items-center bg-gray-200 dark:bg-gray-700 text-neutral-950 dark:text-neutral-300 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <span className="italic select-none font-thin">i</span>
        </button>
      </Popover>
    </>
  )
}

export default Info
