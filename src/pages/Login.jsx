function Login() {
  return (
    <section className="bg-[url('/images/tunicbg.jpg')] bg-cover bg-center py-9 min-h-[90vh]">
      <div className="bg-frappe rounded-2xl w-[80%] mx-auto p-4">
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="w-[2%]">
            <img
              src="/images/lock.png"
              alt="logo start"
              className="w-full"
            />
          </div>
          <h1 className="text-chocolate text-3xl text-center my-3">Login</h1>
        </div>
        <div>
          <input type="text" />
          <input type="text" />
        </div>
      </div>
    </section>
  );
}

export default Login;
