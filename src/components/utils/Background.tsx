import { Children } from "../../types/Children"

const Background = ({ children }: Children) => {
  return <div className="h-screen bg-red-400">{children}</div>
}

export default Background
