import { useContext } from "react";
import CurrentUserContext from "../context/CurrentUserContext";
import { Link } from "react-router-dom";

function LoginButton({ buttonWidth }) {
  // use the conext to know if a user is logged
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const isLogged = currentUser !== null;

  // For logout :
  const handleLogout = async () => {
    localStorage.removeItem("cosy_games_token", currentUser.token);
    setCurrentUser(null);
  };
  return (
    <div className="flex w-full items-center text-center mt-4">
      {isLogged ? (
        <button
          onClick={handleLogout}
          className={`text-light bg-chocolate mx-auto rounded-2xl p-2 shadow-md`}
          style={{ width: buttonWidth }}
        >
          Logout
        </button>
      ) : (
        <Link
          to="/login"
          className={`text-light bg-matcha mx-auto rounded-2xl p-2 shadow-md`}
          style={{ width: buttonWidth }}
        >
          Login
        </Link>
      )}
    </div>
  );
}

export default LoginButton;
