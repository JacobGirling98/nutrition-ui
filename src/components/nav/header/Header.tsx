import Info from "../../utils/info/Info"

const Header = () => {
  return (
    <>
      <nav className="flex justify-between items-center">
        <h1 className="text-center flex-auto text-2xl font-black">
          My Nutrition
        </h1>
        <Info date="2024-02-02" />
      </nav>
    </>
  )
}

export default Header
