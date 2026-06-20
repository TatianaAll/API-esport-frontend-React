import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CurrentUserContext from "./context/CurrentUserContext";

function App() {
  // if we have a user stored in localStorage :
  const storedUser = (() => {
    const raw = localStorage.getItem("cosy_games_user");
    if (!raw) return null;

    try {
      const parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object"
        ? parsed
        : { _id: parsed, email: null };
    } catch {
      return { _id: raw, email: null };
    }
  })();

  const [currentUser, setCurrentUser] = useState(storedUser);

  return (
    <>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <NavBar />
        <div className="h-min-[90vh]">
          <Outlet />
        </div>
      </CurrentUserContext.Provider>
      <Footer />
    </>
  );
}

export default App;
