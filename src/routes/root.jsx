/* router file for guiding with URL */
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Tournaments from "../pages/Tournaments";
import Teams from "../pages/Teams";
import Team from "../pages/Team";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/tournaments", element: <Tournaments /> },
      { path: "/teams", element: <Teams /> },
      { path: "/team/:id", element: <Team /> },
      { path: "/profile/:id", element: <Profile /> },
    ],
  },
]);

export default router;
