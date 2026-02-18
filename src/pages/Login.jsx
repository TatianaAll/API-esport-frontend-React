import { Link } from "react-router-dom";
import { login } from "../services/AuthenticationService";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleLogin = async (event) => {
    // Prevent default = no submission
    event.preventDefault();
    console.log(email);
    console.log(password);

    try {
      // waiting the response of the backend
      let userData = await login(email, password);
      console.log(userData);
      // localStorage for the JWT
      localStorage.setItem("cosy_games_token", userData.token);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="bg-[url('/images/tunicbg.jpg')] bg-cover bg-center py-9 min-h-[90vh]">
      <form
        className="bg-frappe rounded-2xl w-[60%] mx-auto p-4"
        onSubmit={handleLogin}
      >
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="w-[2%]">
            <img src="/images/lock.png" alt="logo start" className="w-full" />
          </div>
          <h1 className="text-chocolate text-3xl text-center my-3">Login</h1>
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
              className="bg-light rounded-xl p-4 m-2 text-chocolate"
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
              className="bg-light rounded-xl p-4 m-2 text-chocolate"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              required
            />
            <Link
              to="#"
              className="text-end text-matcha hover:text-chocolate duration-300 ease-in mx-2"
            >
              Fogot password ?
            </Link>
          </div>
          <button
            className="text-light bg-matcha mx-auto rounded-2xl p-2 shadow-md w-28 block hover:bg-chocolate hover:text-latte duration-300 ease-in"
            formAction="submit"
          >
            Login
          </button>
        </div>
        <p>
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
