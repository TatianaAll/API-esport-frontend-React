function NavBar() {
  return (
    <nav className="bg-[#F2D7C2] fixed top-0 z-60 w-full h-20">
      <ul className="flex justify-start items-center">
        <div className="flex">
          <div className="mt-3">
            <li className="font-[CreamCake] text-3xl md:text-xl lg:text-2xl">
              Cozy Games
            </li>
            <li className="font-Mitr uppercase tracking-[0.2rem] text-sm md:text-md md:tracking-[0.3rem] lg:text-lg lg:tracking-[0.4rem]">
              Turnament
            </li>
          </div>
        </div>

        <li className="px-8 py-4 text-[#64403E] text-sm lg:text-md">Home</li>
        <li className="px-8 py-4 text-[#64403E] text-sm lg:text-md">
          <a href="#second-section">Turnaments</a>
        </li>
        <li className="px-8 py-4 text-[#64403E] text-sm lg:text-md">
          <a href="#third-section">Teams</a>
        </li>
        <li className="px-8 py-4 text-[#64403E] text-sm lg:text-md">
          <a href="#fourth-section">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
