import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/AuthenticationService";
import { useContext, useState } from "react";
import CurrentUserContext from "../context/CurrentUserContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Message of success or error
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const redirectWhenLoginSuccessfully = useNavigate();

  // Use useContext to set the current user
  const { setCurrentUser } = useContext(CurrentUserContext);

  let handleLogin = async (event) => {
    // Prevent default = no submission
    event.preventDefault();

    try {
      // waiting the response of the backend
      let userData = await login(email, password);
      // localStorage for the JWT
      localStorage.setItem("cosy_games_token", userData.token);
      // local storage for the ID of the user
      localStorage.setItem("cosy_games_user", JSON.stringify(userData.userId));
      if (userData) {
        setSuccessMessage("Welcome !");
        // Set the user logged
        setCurrentUser(userData.email);
        // Message + timeout before redirection
        setTimeout(() => {
          redirectWhenLoginSuccessfully("/");
        }, 2500);
      }
    } catch (error) {
      if (error.status === 401) {
        setErrorMessage("Wrong email or password");
      } else {
        setErrorMessage("Server error, please try again later");
      }
    }
  };

  return (
    <section className="bg-[url('/images/tunicbg.jpg')] bg-cover bg-center py-9 min-h-[90vh]">
      {successMessage && (
        <div className="bg-matcha text-light p-2 rounded-xl mb-4 text-center w-[50%] mx-auto">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-800 text-white p-2 rounded-xl mb-4 text-center w-[50%] mx-auto">
          {errorMessage}
        </div>
      )}
      <form
        className="bg-frappe rounded-2xl w-[60%] mx-auto p-4"
        onSubmit={handleLogin}
      >
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="w-[10%] md:w-[5%] lg:w-[3%]">
            <img src="/images/lock.png" alt="logo start" className="w-full" />
          </div>
          <h1 className="text-chocolate text-xl lg:text-3xl text-center my-3">
            Login
          </h1>
        </div>
        <div>
          <div className="flex flex-col">
            <label htmlFor="email" className="m-2 text-chocolate">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="bg-light rounded-xl p-3 lg:p-4 m-2 text-chocolate"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="m-2 text-chocolate">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-light rounded-xl p-3 lg:p-4 m-2 text-chocolate"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              required
            />
            <Link
              to="#"
              className="text-end text-matcha hover:text-chocolate duration-300 ease-in mx-2 text-sm lg:text-md mb-3"
            >
              Fogot password ?
            </Link>
          </div>
          <button
            className="text-light bg-matcha mx-auto rounded-2xl p-2 shadow-md w-28 block hover:bg-chocolate hover:text-latte duration-300 ease-in my-4"
            formAction="submit"
          >
            Login
          </button>
        </div>
        <p className="text-sm lg:text-md">
          Not registred yet ?
          <Link
            to="/register"
            className="text-matcha hover:text-chocolate duration-300 ease-in ms-1"
          >
            Create an account
          </Link>
        </p>
      </form>
    </section>
  );
}

export default Login;
