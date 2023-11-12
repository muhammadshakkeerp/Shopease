
const Login = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <div className="w-96 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <button
              type="submit"
              className="w-full primary-bg hover:bg-blue-600 text-white p-2 rounded  focus:outline-none"
            >
              Log In
            </button>
          </div>
        </form>
        <p className="text-sm text-gray-600">
          Don't have an account? <a href="/signup" className="text-primary-bg">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export { Login};
