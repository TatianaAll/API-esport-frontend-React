import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="bg-[url('/images/tunicbg.jpg')] bg-cover bg-center py-9 min-h-[90vh]">
      <div className="bg-matcha rounded-2xl w-[60%] mx-auto p-4">
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="w-[2%]">
            <img src="/images/lock.png" alt="logo start" className="w-full" />
          </div>
          <h1 className="text-frappe text-3xl text-center my-3">Create an account</h1>
        </div>
        <div>
          <div className="flex flex-col">
            <label htmlFor="email" className="m-2 text-frappe">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className="bg-light rounded-xl p-4 m-2 text-chocolate"
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
              className="bg-light rounded-xl p-4 m-2 text-frappe"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password2" className="m-2 text-frappe">
              Confirm password
            </label>
            <input
              type="password"
              name="password2"
              id="password2"
              className="bg-light rounded-xl p-4 m-2 text-chocolate"
              required
            />
          </div>
          <button
            className="text-light bg-chocolate mx-auto rounded-2xl p-2 shadow-md w-28 block hover:bg-frappe hover:text-chocolate duration-300 ease-in"
            formAction="submit"
          >
            Register
          </button>
        </div>
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
