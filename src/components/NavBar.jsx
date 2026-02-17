import Title from "./Title";

function NavBar() {
  return (
    <nav className="bg-[#F2D7C2] w-full h-20">
      <ul className="flex justify-start items-center">
        {/* Import title with the component */}
        <Title mainTitle="Cosy Games" subtitle="Turnament" size="small" />
        <li className="px-8 py-4 text-[#64403E] lg:text-lg">Home</li>
        <li className="px-8 py-4 text-[#64403E] lg:text-lg">
          <a href="#second-section">Turnaments</a>
        </li>
        <li className="px-8 py-4 text-[#64403E] lg:text-lg">
          <a href="#third-section">Teams</a>
        </li>
        <li className="px-8 py-4 text-[#64403E] lg:text-lg">
          <a href="#fourth-section">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
