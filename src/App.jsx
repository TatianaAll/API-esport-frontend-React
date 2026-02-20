// import { useState } from 'react'
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="h-min-[90vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
