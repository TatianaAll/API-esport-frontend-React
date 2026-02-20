import Title from "./Title";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useContext, useState } from "react";
import LoginButton from "./LoginButton";
import CurrentUserContext from "../context/CurrentUserContext";

function NavBar() {
  // useState start false -> my nav bar is not open
  const [navIsOpen, setNavIsOpen] = useState(false);
  // use context to know the current user
  const { currentUser } = useContext(CurrentUserContext);

  // On click i wanna the burger to change and the side bar to slide
  const handleClick = () => {
    setNavIsOpen(!navIsOpen);
  };
  const isLogged = currentUser !== null;

  return (
    <nav className="bg-frappe w-full h-20 overflow-hidden">
      <ul className="flex justify-between items-center px-8">
        {/* Import title with the component */}
        <li>
          <Link to={`/`}>
            <Title mainTitle="Cosy Games" subtitle="tournaments" size="small" />
          </Link>
        </li>

        <li className="hidden lg:block lg:px-8 lg:py-4 text-chocolate lg:text-lg">
          <Link to={`/`}>Home</Link>
        </li>
        <li className="hidden lg:block lg:px-8 lg:py-4 text-chocolate lg:text-lg">
          <Link to={`/tournaments`}>Tournaments</Link>
        </li>
        <li className="hidden lg:block lg:px-8 lg:py-4 text-chocolate lg:text-lg">
          <Link to={`/teams`}>Teams</Link>
        </li>
        {isLogged ? (
          <li className="hidden lg:block lg:px-8 lg:py-4 text-chocolate lg:text-lg">
            <Link to={`#`}>My profile</Link>
          </li>) : ( "" )}
        <li className="hidden lg:block">
          <LoginButton buttonWidth="100%" />
        </li>

        {/* Menu burger for mobile */}
        <li className="lg:hidden">
          <ul
            id="hamburgerMenu"
            className="absolute top-8 right-7 lg:right-10 flex flex-col justify-center"
            onClick={handleClick}
            data-action={navIsOpen}
          >
            <li id="cross1" className="h-0.75 w-8 bg-chocolate mb-2"></li>
            <li className="h-0.75 w-8 bg-chocolate mb-2"></li>
            <li id="cross2" className="h-0.75 w-8 bg-chocolate"></li>
          </ul>

          {/* Side bar */}
          <ul
            id="sideBar"
            className={`w-60 lg:w-[20rem] bg-frappe pt-28 h-screen`}
            data-action={navIsOpen}
            onClick={handleClick}
          >
            <li className="px-8 py-4 text-chocolate text-md">
              <Link to={`/`}>Home</Link>
            </li>
            <li className="px-8 py-4 text-chocolate text-md">
              <Link to={`/tournaments`}>Tournaments</Link>
            </li>
            <li className="px-8 py-4 text-chocolate text-md">
              <Link to={`/teams`}>Teams</Link>
            </li>
            {isLogged ? (
            <li className="hidden lg:block lg:px-8 lg:py-4 text-chocolate lg:text-lg">
              <Link to={`#`}>My profile</Link>
            </li>) : ( "" )}
            <li>
              <LoginButton buttonWidth="70%" />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
