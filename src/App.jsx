import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CurrentUserContext from "./context/CurrentUserContext";

function App() {
  // if we have a user stored in localStorage :
  const storedUser = JSON.parse(localStorage.getItem("cosy_games_user"));
  const [currentUser, setCurrentUser] = useState(
    storedUser ? storedUser : null,
  );

  return (
    <>
      <CurrentUserContext value={{ currentUser, setCurrentUser }}>
        <NavBar />
        <div className="h-min-[90vh]">
          <Outlet />
        </div>
      </CurrentUserContext>
      <Footer />
    </>
  );
}

export default App;
