import { ReactElement } from "react"
import { createPortal } from "react-dom"

interface PopoverProps {
  isOpen: boolean
  content: ReactElement
  children: ReactElement
}

const Popover = ({ isOpen, content, children }: PopoverProps) => {
  return (
    <div>
      {children}
      {isOpen && createPortal(content, document.body)}
    </div>
  )
}

export default Popover
