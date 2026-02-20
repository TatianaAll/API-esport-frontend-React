// import { useState } from 'react'
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useState } from "react";
import CurrentUserContext from "./context/CurrentUserContext";


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  console.log(currentUser)
  return (
    <>
      <CurrentUserContext value={{currentUser, setCurrentUser}}>
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
