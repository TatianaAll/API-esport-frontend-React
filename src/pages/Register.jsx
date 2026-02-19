import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/AuthenticationService";
import { useState } from "react";

function Register() {
  // declaration of all my constants with UseState (one for all the parameters)
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  // Message of success or error
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // redirect when successfly creating a new account
  const redirectWhenAccountCreated = useNavigate();

  // Function handle register asynchronous
  let handleRegister = async (event) => {
    event.preventDefault();
    // console.log(email, firstname, lastname, password);

    try {
      let newUserData = await register(firstname, lastname, email, password);
      console.log(newUserData);
      if (newUserData.message == "Utilisateur créé !") {
        setSuccessMessage("New user created successfuly !");
        // Message + timeout before redirection
        setTimeout(() => {
          redirectWhenAccountCreated("/login");
        }, 3000);
      } else {
        setErrorMessage("Impossible to create the new user");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="bg-[url('/images/tunicbg.jpg')] bg-cover bg-center py-9 min-h-[90vh]">
      {successMessage && (
        <div className="bg-green-500 text-light p-2 rounded-xl mb-4 text-center w-[50%] mx-auto">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="bg-red-500 text-white p-2 rounded-xl mb-4 text-center w-[50%] mx-auto">
          {errorMessage}
        </div>
      )}
      <div className="bg-matcha rounded-2xl w-[60%] mx-auto p-4">
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="w-[10%] md:w-[7%] lg:w-[3%]">
            <img src="/images/lock.png" alt="logo start" className="w-full" />
          </div>
          <h1 className="text-frappe text-xl lg:text-3xl text-center my-3">
            Create an account
          </h1>
        </div>
        <form onSubmit={handleRegister}>
          <div className="flex flex-col lg:flex-row">
            <label htmlFor="firstname" className="m-2 text-frappe">
              First name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={firstname}
              className="bg-light rounded-xl p-4 m-2 text-chocolate"
              onChange={(event) => {
                setFirstname(event.target.value);
              }}
              required
            />
            <label htmlFor="lastname" className="m-2 text-frappe">
              Last name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={lastname}
              className="bg-light rounded-xl p-4 m-2 text-chocolate"
              onChange={(event) => {
                setLastname(event.target.value);
              }}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="m-2 text-frappe">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              className="bg-light rounded-xl p-4 m-2 text-chocolate"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="m-2 text-frappe">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              className="bg-light rounded-xl p-4 m-2 text-chocolate"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              required
            />
          </div>
          <button
            className="text-light my-5 bg-chocolate mx-auto rounded-2xl p-2 shadow-md w-28 block hover:bg-frappe hover:text-chocolate duration-300 ease-in"
            formAction="submit"
          >
            Register
          </button>
        </form>
        <p>
          Already have an account ?
          <Link
            to="/login"
            className="text-latte hover:text-chocolate duration-300 ease-in ms-1"
          >
            Sign in
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
