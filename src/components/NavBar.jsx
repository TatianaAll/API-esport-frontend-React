import Title from "./Title";
import CTA from "./CTA";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-frappe w-full h-20">
      <ul className="flex justify-start items-center">
        {/* Import title with the component */}
        <Title mainTitle="Cosy Games" subtitle="tournaments" size="small" />
        <li className="px-8 py-4 text-chocolate lg:text-lg">
          <Link to={`/`}>Home</Link>
        </li>
        <li className="px-8 py-4 text-chocolate lg:text-lg">
          <Link to={`/tournaments`}>Tournaments</Link>
        </li>
        <li className="px-8 py-4 text-chocolate lg:text-lg">
          <a href="#third-section">Teams</a>
        </li>
        <li>
          <CTA text="Login/Register" buttonWidth="100%" linkTo="#" />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
