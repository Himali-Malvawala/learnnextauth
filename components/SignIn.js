const SignIn = () => {
  return (
    <div className="bg-green-900 my-20 mx-auto w-3/12 rounded-3xl">
      <form className=" ml-20 py-16 text-white">
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="text"
          className="bg-gray-300 rounded-sm"
          id="email"
          name="email"
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          type="password"
          className="bg-gray-300 rounded-sm"
          id="password"
          name="password"
        />
        <br />
        <br />
        <label htmlFor="contact">Contact Name</label>
        <br />
        <input
          type="text"
          className="bg-gray-300 rounded-sm"
          id="contact"
          name="contact"
        />
        <br />
        <br />
        <label htmlFor="Shop">Shop Name</label>
        <br />
        <input
          type="text"
          className="bg-gray-300 rounded-sm"
          id="shop"
          name="shop"
        />
        <br />
        <br />
        <br />
        <button
          type="submit"
          className="border-2 hover:bg-amber-600 hover:text-black px-3 py-1 rounded-md"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
