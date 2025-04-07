const Auth = () => {
  return (
    <>
      <form className="rounded-lg flex flex-col items-center p-10 border-2 lg:w-2/3 mx-auto">
        <h1 className="text-2xl text-center my-4 font-bold">Login</h1>
        <div className="lg:w-[70%]">
          <fieldset className="fieldset my-2">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="text"
              required
              className="border-2 text-lg p-2 rounded-md"
              placeholder="sample@gmail.com"
            />
          </fieldset>
          <fieldset className="fieldset my-2">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              required
              className="border-2 p-2 text-lg rounded-md"
              placeholder="Your Password"
            />
          </fieldset>
        </div>
        <button
          className="hover:animate-pulse bg-primary my-4 p-4 rounded-lg"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Auth;
