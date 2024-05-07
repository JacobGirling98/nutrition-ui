import Info from "../../utils/info/Info"

const Header = () => {
  return (
    <>
      <div className="flex justify-center items-center h-16 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">My Nutrition</h1>
        <div className="ml-auto">
          <Info date="2024-04-04" />
        </div>
      </div>
    </>
  )
}

export default Header
