import { Popover } from "flowbite-react"
import { useState } from "react"

const Info = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Popover
        open={isOpen}
        onOpenChange={setIsOpen}
        content={<div>My content</div>}
      >
        <button
          className="rounded-full w-6 h-6 flex justify-center items-center bg-gray-200 dark:bg-gray-700 text-neutral-950 dark:text-neutral-300 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <span className="italic select-none">i</span>
        </button>
      </Popover>
    </>
  )
}

export default Info
